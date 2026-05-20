import type { Metadata } from 'next'
import './globals.css'
import { Providers } from './providers'

export const metadata: Metadata = {
  title: 'HNeef Efficiency Services | Streamline Your Success',
  description:
    'Kingston Jamaica\'s premier efficiency partner. Physical cleaning & outdoor services + digital automation systems. Book your free consultation today.',
  keywords: 'cleaning services Kingston Jamaica, digital automation, efficiency services, home cleaning, awning installation, workflow automation',
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/hneef-logo.jpeg',
  },
  openGraph: {
    title: 'HNeef Efficiency Services | Streamline Your Success',
    description: 'One partner for your physical space and digital systems — from spotless homes to automated workflows.',
    type: 'website',
    locale: 'en_JM',
    images: [{ url: '/hneef-logo.jpeg', width: 1080, height: 1080, alt: 'HNeef Efficiency Services' }],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
