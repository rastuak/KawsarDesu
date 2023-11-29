import Navbar from '@/components/Navbar/index'
import { Gabarito } from 'next/font/google'
import './globals.css'

const gabarito = Gabarito({ subsets: ['latin'] })

export const metadata = {
  title: 'KawsarDesu',
  description: 'KawsarDesu by Kautsarff',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${gabarito.className}`}>
        <Navbar />
        <div className='md:pt-9 sm:pt-10 pt-20'>
          {children}
        </div>
      </body>
    </html>
  )
}
