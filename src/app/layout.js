import '../globals.css'
import Head from 'next/head'
import { Inter } from 'next/font/google'
import favicon from '../../public/favicon.ico'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'NFT MarketPlace Showcase',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href={favicon} />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}