
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'JNN INSTITUTE | Careers',
  description: "This JNN Institute's Careers page for apply job as a teach faculty, INDUSTRY 4.0 Exports For Technical Training or Teaching Associates for Academic | Non Academic",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
      {children}

      </body>
    </html>
  )
}
