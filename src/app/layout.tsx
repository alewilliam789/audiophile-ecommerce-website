import Header from '@/components/Header'
import './globals.scss'
import type { Metadata } from 'next'
import { Manrope } from 'next/font/google'


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
          </main>
        </body>
    </html>
  )
}
