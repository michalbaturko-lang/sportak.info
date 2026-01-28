import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin', 'latin-ext'] })

export const metadata: Metadata = {
  title: 'Sportak.info - Sportovní web',
  description: 'Sportovní web Sportak.info - vytvořil Míša (9 let). Novinky, týmy, hráči a výsledky z Premier League.',
  keywords: 'fotbal, Premier League, sport, výsledky, týmy, hráči, stadiony',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="cs">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
