import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Sidebar } from './components/sidebar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Cafe CRM Frontend',
  description: 'CRM to handle Cafe orders',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex min-h-screen">
          <Sidebar />
          <div className="w-full">
            {children}
          </div>
        </main>
      </body>
    </html>
  )
}
