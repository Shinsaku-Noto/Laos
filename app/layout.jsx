import './globals.css'
import { Noto_Sans_JP, Noto_Serif_JP } from 'next/font/google'

// フォントの設定
const notoSans = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-noto-sans',
})

const notoSerif = Noto_Serif_JP({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-noto-serif',
})

export const metadata = {
  title: 'ラオスへ - プライベートな旅',
  description: 'プライベートなワクワク、ドキドキする旅に行きませんか。',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body className={`${notoSans.variable} ${notoSerif.variable}`}>
        {children}
      </body>
    </html>
  )
}


