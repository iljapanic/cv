import PlausibleProvider from 'next-plausible'
import { Inter } from 'next/font/google'

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

import '@/styles/globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ilja A. Panić — CV',
  description: 'Professional resume of Ilja A. Panić',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <head>
        <PlausibleProvider domain="cv.iljapanic.com" />
      </head>
      <body>
        <main>{children}</main>
      </body>
    </html>
  )
}
