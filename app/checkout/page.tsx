import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

const STRIPE: Record<string, string> = {
  starter: 'https://buy.stripe.com/3cI00jdou6zObBc4knds400',
  pro:     'https://buy.stripe.com/5kQeVd2JQ8HWax86svds401',
  premium: 'https://buy.stripe.com/7sY14nckqbU80Wy6svds402',
}

export default async function Checkout(props: {
  searchParams: Promise<{ tier?: string }>
}) {
  const { tier: queryTier } = await props.searchParams
  const cookieStore = await cookies()
  const tier = queryTier ?? cookieStore.get('pitchlab_tier')?.value ?? ''
  redirect(STRIPE[tier] ?? '/#pricing')
}
