import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SCHÄFLEIN AG | CRM-Demo - Logistik seit 1939',
  description: 'CRM-Demo für die Schäflein AG - Führendes Logistikunternehmen mit 2.500 Mitarbeitern und 35 Standorten in Deutschland, Österreich und Polen. Wir machen Logistik seit 1939.',
  keywords: 'Schäflein AG, Logistik, CRM, Transportlogistik, Lagerlogistik, Behälterlogistik, Deutschland, Österreich, Polen',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de" className="h-full">
      <body className={`${inter.className} h-full bg-gray-50 antialiased`}>
        <div className="min-h-full">
          {children}
        </div>
      </body>
    </html>
  )
} 