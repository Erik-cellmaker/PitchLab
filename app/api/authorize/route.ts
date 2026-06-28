import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

const SCOPES = [
  'https://www.googleapis.com/auth/gmail.send',
  'https://www.googleapis.com/auth/userinfo.email',
].join(' ')

export function GET(req: NextRequest) {
  const tier = req.nextUrl.searchParams.get('tier') ?? 'starter'
  const base = process.env.APP_URL ?? 'https://pitchlab.me'

  const url = new URL('https://accounts.google.com/o/oauth2/v2/auth')
  url.searchParams.set('client_id', process.env.GOOGLE_CLIENT_ID!)
  url.searchParams.set('redirect_uri', `${base}/api/callback`)
  url.searchParams.set('response_type', 'code')
  url.searchParams.set('scope', SCOPES)
  url.searchParams.set('access_type', 'offline')
  url.searchParams.set('prompt', 'consent')
  url.searchParams.set('state', tier)

  return NextResponse.redirect(url.toString())
}
