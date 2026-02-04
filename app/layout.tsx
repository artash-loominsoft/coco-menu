import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import { LanguageProvider } from '@/contexts/LanguageContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'COCO Restaurant - Authentic Iranian Cuisine in Yerevan',
  description: 'Experience authentic Iranian cuisine at COCO restaurant in Yerevan, Armenia. Traditional Persian dishes, kebabs, and more.',
  keywords: 'Iranian restaurant, Persian food, Yerevan, Armenia, COCO restaurant, kebabs',
  openGraph: {
    title: 'COCO Restaurant - Authentic Iranian Cuisine',
    description: 'Experience authentic Iranian cuisine at COCO restaurant in Yerevan, Armenia.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

