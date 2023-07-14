import PlausibleProvider from 'next-plausible'

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
    <html lang="en">
      <head>
        <PlausibleProvider domain="cv.iljapanic.com" />
      </head>
      <body>
        <main>{children}</main>
      </body>
    </html>
  )
}
