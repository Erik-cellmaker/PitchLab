import type { Metadata } from 'next'
import './globals.css'
import ClientEffects from './components/ClientEffects'

export const metadata: Metadata = {
  title: 'PitchLab — Research Outreach for Pre-Med Students',
  description: 'Personalized cold emails to every professor at your target school. PitchLab reads their latest research and writes unique emails — sent from your Gmail in minutes.',
  verification: {
    google: '2Au61gQ1H9i-BAc3ADtgUrCvCT1hnUtDiAtmRoIO16U',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <ClientEffects />
      </body>
    </html>
  )
}
