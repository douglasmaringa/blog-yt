import { Josefin_Sans } from 'next/font/google'
import './globals.css'



const josefin = Josefin_Sans({ subsets: ['latin'] })

export const metadata = {
  title: 'Coding Blog',
  description: 'Blog for coding',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={josefin.className}>
        {children}
      </body>
    </html>
  )
}
