import './globals.css'
import { Inter } from 'next/font/google'
import Favicon from '../../public/favicon/favicon.ico'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'T8ninho | Portifólio',
  description: 'Portifólio do T8ninho, desenvolvedor Front-end.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-Br">
      <head>
        <link rel='icon' href={Favicon.src} />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
