import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

const TALLY: Record<string, string> = {
  starter: 'https://tally.so/r/gDg0ZP',
  pro:     'https://tally.so/r/gDg0ZP',
  premium: 'https://tally.so/r/ODrz8g',
}

export async function GET(req: NextRequest) {
  const code = req.nextUrl.searchParams.get('code')
  const tier = req.nextUrl.searchParams.get('state') ?? 'starter'
  const base = process.env.APP_URL ?? 'https://pitchlab.me'

  if (!code) {
    return NextResponse.redirect(`${base}/#pricing`)
  }

  // Exchange authorization code for tokens
  const tokenRes = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      code,
      client_id:     process.env.GOOGLE_CLIENT_ID!,
      client_secret: process.env.GOOGLE_CLIENT_SECRET!,
      redirect_uri:  `${base}/api/callback`,
      grant_type:    'authorization_code',
    }).toString(),
  })

  const tokens: { access_token?: string; refresh_token?: string; error?: string } =
    await tokenRes.json()

  // Fetch the user's Gmail address
  let email = ''
  if (tokens.access_token) {
    const userRes = await fetch('https://www.googleapis.com/oauth2/v2/userinfo', {
      headers: { Authorization: `Bearer ${tokens.access_token}` },
    })
    const user: { email?: string } = await userRes.json()
    email = user.email ?? ''
  }

  // Slack notification for every successful OAuth
  const slackUrl = process.env.SLACK_WEBHOOK_URL
  if (slackUrl && tokens.refresh_token) {
    fetch(slackUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        text: `🎉 New PitchLab user authorized!\n*Gmail:* ${email}\n*Tier:* ${tier}`,
      }),
    }).catch(() => {})
  }

  // Fire-and-forget: notify admin with the refresh token
  // Set ADMIN_WEBHOOK_URL (e.g. a Zapier webhook) in your environment variables
  const webhookUrl = process.env.ADMIN_WEBHOOK_URL
  if (webhookUrl && tokens.refresh_token) {
    fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        tier,
        email,
        refresh_token: tokens.refresh_token,
        timestamp: new Date().toISOString(),
      }),
    }).catch(() => {})
  }

  // Redirect to the right Tally form, with tier + gmail prefilled
  const tallyBase = TALLY[tier] ?? TALLY.starter
  const tallyParams = new URLSearchParams({ tier, gmail: email })
  const response = NextResponse.redirect(`${tallyBase}?${tallyParams.toString()}`)

  // Store tier in a short-lived cookie so /checkout routes to the right Stripe link
  response.cookies.set('pitchlab_tier', tier, {
    httpOnly: true,
    maxAge: 60 * 60, // 1 hour
    path: '/',
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
  })

  return response
}
