import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ethan Hancock - Full-Stack Software Engineer Portfolio',
  description: 'Explore the full-stack software engineering portfolio of Ethan Hancock.' +
      ' Specializing in Java, Python, JavaScript, TypeScript, and more, Ethan Hancock has ' +
      'a diverse range of skills and experiences. Discover personal projects including a ' +
      'Java-based Minesweeper clone, a Next.js personal website, and a Puppeteer project ' +
      'for stock market analysis. Check out Ethan Hancock\'s GitHub for more.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
