import type { Metadata } from 'next'
import './globals.css'
import Script from 'next/script' // GTM uchun kerak

export const metadata: Metadata = {
  title: 'Anor International School',
  description: "Anor International School - Kelajak uchun ta'lim berish",
  themeColor: "#190b2e",
  keywords: [
    'Anor International School',
    "O'zbekiston maktabi",
    "xalqaro ta'lim",
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
      <head>
        {/* Google Tag Manager script (faqat productionda) */}
        {process.env.NODE_ENV === "production" && (
          <Script id="gtm-script" strategy="afterInteractive">
            {`
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-M99NLGL2');
            `}
          </Script>
        )}

        <meta name="theme-color" content="#0f172a" />
      </head>
      <body>
        {/* Google Tag Manager noscript (JS o‘chirilgan foydalanuvchilar uchun) */}
        {process.env.NODE_ENV === "production" && (
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-M99NLGL2"
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            ></iframe>
          </noscript>
        )}

        {children}
      </body>
    </html>
  )
}
