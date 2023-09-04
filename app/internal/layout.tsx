import '~/styles/root.css'
import { type ReactNode } from 'react'

import { Inter } from '@next/font/google'

import AuthProvider from './auth-provider'
import { LogoutButton } from '~/components/logout-button'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin', 'latin-ext'],
})

export default function InternalLayout({ children }: { children: ReactNode }) {
  return (
    <AuthProvider>
      <LogoutButton />
      {children}
    </AuthProvider>
  )
}
