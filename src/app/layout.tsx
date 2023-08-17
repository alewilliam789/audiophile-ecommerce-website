import type { Metadata } from 'next'
import { Manrope } from 'next/font/google'

import Header from '@/components/Header'
import Footer from '@/components/Footer'

import './globals.scss'




const manrope = Manrope({
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Audiophile',
  description: 'An Ecommerce site for all your listening needs.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={manrope.className}>
          <main>
            <Header />
            {children}
            <Footer />
          </main>
        </body>
    </html>
  )
}
