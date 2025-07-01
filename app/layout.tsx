import type { Metadata } from 'next'
import './globals.css'



export const metadata: Metadata = {
  title: 'Anor International School',
  description: 'Anor International School - Kelajak uchun ta\'lim berish',
  themeColor:"#190b2e",
  keywords: [
    'Anor International School',
    'O\'zbekiston maktabi',
    'xalqaro ta\'lim',
    'zamonaviy ta\'lim',
    'o\'quvchilar',
    'o\'qituvchilar',
    'ta\'lim imkoniyatlari',
    'maktab qabul',
  ],
  authors: [
    { name: 'Xurmatbek Olloyorov', url: 'https://t.me/ministry_me' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
       {children}
      </body>
    </html>
  )
}
