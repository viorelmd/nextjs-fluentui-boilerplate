import './globals.css'
import { Providers } from '@/app/providers'

export const metadata = {
  title: 'Next.js and Fluent UI',
  description: 'Website created with Next.js and Fluent UI',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
      <Providers>{ children }</Providers>
      </body>
    </html>
  )
}
