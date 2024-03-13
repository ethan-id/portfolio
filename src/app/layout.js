import './globals.css'
import { Inter } from 'next/font/google'
import { SpeedInsights } from '@vercel/speed-insights/next';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  generator: 'Next.js',
  title: 'Ethan Hancock - Full-Stack Software Engineer Portfolio',
  applicationName: 'Ethan Hancock - Full-Stack Software Engineer Portfolio',
  description: "Explore the full-stack software engineering portfolio of Ethan Hancock. Specializing in Java, Python, JavaScript, TypeScript, and more, Ethan has a diverse range of skills and experiences. Discover personal projects including a Java-based Minesweeper clone, a Next.js personal website, and a Puppeteer project for stock market analysis. Check out Ethan's GitHub for more.",
  referrer: 'origin-when-cross-origin',
  keywords: ['Full-Stack', 'Software Engineer', 'Java', 'Python', 'JavaScript', 'TypeScript',
    'React', 'Redux', 'SASS', 'Tailwind', 'Bootstrap', 'Next.js', 'MongoDB', 'Node.js',
    'Full-Stack Developer', 'Web Development', 'Front-end Development', 'Back-end Development',
    'Full-Stack Projects', 'Software Development', 'Web Application Development', 'JavaScript Developer',
    'Python Developer', 'Java Developer', 'React Developer', 'Node.js Developer', 'Software Engineering Portfolio',
    'Full-Stack Software Engineer Skills', 'Software Engineer Personal Website', 'Software Engineer Resume',
    'Software Engineer GitHub Projects'],
  authors: [{ name: 'Ethan Hancock', url: 'https://www.ethanhancock.org' }],
  colorScheme: 'dark',
  creator: 'Ethan Hancock',
  publisher: 'Ethan Hancock',
  robots: 'index, follow',
  openGraph: {
    title: 'Ethan Hancock - Full-Stack Software Engineer Portfolio',
    description: "Explore the full-stack software engineering portfolio of Ethan Hancock. Specializing in Java, Python, JavaScript, TypeScript, and more, Ethan has a diverse range of skills and experiences. Discover personal projects including a Java-based Minesweeper clone, a Next.js personal website, and a Puppeteer project for stock market analysis. Check out Ethan's GitHub for more.",
    url: 'https://www.ethanhancock.org',
    type: 'website',
  },
  category: 'Software Engineering'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <SpeedInsights/>
      </body>
    </html>
  )
}
