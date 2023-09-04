import '~/styles/root.css'
import { type ReactNode } from 'react'

import { Inter } from '@next/font/google'
import Providers from './providers'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin', 'latin-ext'],
})

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} font-sans  bg-black text-white overflow-x-hidden min-h-screen m-0 p-0 grid grid-rows-[auto,1fr,auto]`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
