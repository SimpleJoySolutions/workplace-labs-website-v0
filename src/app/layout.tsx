import type { Metadata } from 'next'
import { Manrope } from 'next/font/google'
import { cn } from '@/lib/utils'
import './globals.css'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

const fontHeading = Manrope({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-heading',
})

const fontBody = Manrope({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
  weight: '400',
})

export const metadata: Metadata = {
  title: 'Workplace Labs',
  description: 'A Workplace Psychologist and an AI Engineer empowering HR professionals with cutting-edge AI solutions.',
  openGraph: {
    title: 'Workplace Labs - AI Adoption',
    description: 'AI adoption grounded in behavioral science and real-world research.',
    images: [
      {
        url: 'https://www.workplacelabs.com/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Workplace Labs',
      },
    ],
    type: 'website',
    url: 'https://www.workplacelabs.com',
    siteName: 'Workplace Labs',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Workplace Labs - AI Adoption',
    description: 'AI adoption grounded in behavioral science and real-world research.',
    images: ['https://www.workplacelabs.com/images/og-image.png'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body 
        className={cn(
          'antialiased',
          fontHeading.variable,
          fontBody.variable
        )}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}