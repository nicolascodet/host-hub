import type { Metadata } from 'next'
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: 'AetherMind - Deploy AI Models Without DevOps Expertise',
  description: 'The simplest way for startups to host custom AI models in production',
  icons: {
    icon: [
      {
        url: '/aethermind-icon.svg',
        href: '/aethermind-icon.svg',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background">
        {children}
      </body>
    </html>
  )
}
