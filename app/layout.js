import './globals.css'
import "bootstrap/dist/css/bootstrap.min.css"
import { Inter } from 'next/font/google'
import Header from './components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'CineMatch',
  description: "created by MahaHouidi, Cine is short for cinema and match is emphasizes the application's ability to match users with movies that align with their preferences, tastes, and interests ",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header></Header>
        <main>{children}</main>
      </body>
    </html>
  )
}
