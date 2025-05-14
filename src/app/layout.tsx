import { ThemeProvider } from '@primer/react'
import { customTheme } from '@/theme'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Gastos App',
  description: 'Aplicación de gestión de gastos',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <ThemeProvider theme={customTheme}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
