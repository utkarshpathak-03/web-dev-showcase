import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Utkarsh Pathak — Senior ReactJS / Next.js Developer',
  description:
    'Portfolio of Utkarsh Pathak, a Senior ReactJS & Next.js developer with 6.5+ years building secure, high-performance, accessible banking and enterprise web applications for ANZ, Samsung SDS, and IBM.',
  icons: {
    icon: [
      {
        url: '/utkarsh-profile-photo.jpeg',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/utkarsh-profile-photo.jpeg',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: 'utkarsh-profile-photo.jpeg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0e0e11',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`dark ${inter.className}`}>
      <body className="antialiased bg-background text-foreground">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
