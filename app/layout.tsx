import type { Metadata } from 'next'
import './globals.css'
import Script from 'next/script'

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
        {/* Google Tag Manager (faqat production) */}
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

        {/* Yandex Metrika (faqat production) */}
        {process.env.NODE_ENV === "production" && (
          <Script id="yandex-metrika" strategy="afterInteractive">
            {`
              (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){
                  (m[i].a=m[i].a||[]).push(arguments)};
                  m[i].l=1*new Date();
                  for (var j = 0; j < document.scripts.length; j++) {
                    if (document.scripts[j].src === r) { return; }
                  }
                  k=e.createElement(t),a=e.getElementsByTagName(t)[0],
                  k.async=1;k.src=r;a.parentNode.insertBefore(k,a)})
                  (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

                  ym(103227890, "init", {
                      clickmap:true,
                      trackLinks:true,
                      accurateTrackBounce:true,
                      webvisor:true
                  });
            `}
          </Script>
        )}

        <meta name="theme-color" content="#0f172a" />
      </head>
      <body>
        {/* GTM noscript */}
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

        {/* Yandex Metrika noscript */}
        {process.env.NODE_ENV === "production" && (
          <noscript>
            <div>
              <img
                src="https://mc.yandex.ru/watch/103227890"
                style={{ position: 'absolute', left: '-9999px' }}
                alt=""
              />
            </div>
          </noscript>
        )}

        {children}
      </body>
    </html>
  )
}
