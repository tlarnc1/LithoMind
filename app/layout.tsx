export const runtime = 'edge'; 

import React from "react"
import type { Metadata } from 'next'
import { BIZ_UDPMincho, Instrument_Serif } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const bizUDPMincho = BIZ_UDPMincho({ 
  weight: '400',
  subsets: ["latin"],
  variable: "--font-mincho"
});

const instrumentSerif = Instrument_Serif({ 
  weight: '400',
  subsets: ["latin"],
  variable: "--font-logo"
});

export const metadata: Metadata = {
  title: 'LithoMind',
  description: '一秒の解析が、一生を救う。',
  generator: 'v0.app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <body className={`${bizUDPMincho.variable} ${instrumentSerif.variable} font-serif antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
