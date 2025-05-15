import { ThemeProvider } from '@primer/react'
import { customTheme } from '@/theme'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ReduxProvider } from '@/components/providers/ReduxProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Gastos App',
  description: 'Aplicación para gestionar gastos personales',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <ReduxProvider>
          <ThemeProvider theme={customTheme}>
            {children}
          </ThemeProvider>
        </ReduxProvider>
      </body>
    </html>
  )
}
