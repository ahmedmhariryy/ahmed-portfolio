import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Ahmed Atef Elhariry — Frontend Developer',
  description: 'Frontend Developer specializing in React & Next.js',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
