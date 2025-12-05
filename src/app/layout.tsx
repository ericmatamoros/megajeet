import type { Metadata } from 'next'
import { Londrina_Solid, Londrina_Sketch } from 'next/font/google'
import './globals.css'

const londrinaSolid = Londrina_Solid({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-londrina-solid',
})

const londrinaSketch = Londrina_Sketch({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-londrina-sketch',
})

export const metadata: Metadata = {
  title: 'MEGAJEET',
  description: 'MEGAJEET: WHERE DIAMOND HANDS ARE MADE',
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${londrinaSolid.variable} ${londrinaSketch.variable}`}>
        {children}
      </body>
    </html>
  )
}

