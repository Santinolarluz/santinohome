import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Santino Larluz — Full Stack Developer',
  description:
    'Portfolio de Santino Larluz, desarrollador Full Stack especializado en React, Laravel, PHP, WordPress y MySQL. Construyo experiencias web modernas y escalables.',
  generator: 'v0.app',
  keywords: [
    'Santino Larluz',
    'Full Stack Developer',
    'React',
    'Laravel',
    'PHP',
    'WordPress',
    'MySQL',
    'Desarrollador Web',
  ],
  openGraph: {
    title: 'Santino Larluz — Full Stack Developer',
    description:
      'Portfolio de Santino Larluz, desarrollador Full Stack especializado en React, Laravel, PHP, WordPress y MySQL.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0a0a0f',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`dark ${inter.variable}`}>
      <body className="bg-background font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
