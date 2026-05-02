import type { Metadata, Viewport } from 'next'
import { Noto_Sans_TC, Noto_Serif_TC, Ma_Shan_Zheng } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import Script from 'next/script'
import './globals.css'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { CookieBanner } from '@/components/CookieBanner'
import { BackToTop } from '@/components/BackToTop'

const notoSansTC = Noto_Sans_TC({ 
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-sans',
  display: 'swap',
})

const notoSerifTC = Noto_Serif_TC({ 
  subsets: ['latin'],
  weight: ['200', '300', '400'],
  variable: '--font-serif',
  display: 'swap',
})

const maShanZheng = Ma_Shan_Zheng({ 
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-signature',
  display: 'swap',
})

export const metadata: Metadata = {
  title: '恆美芯｜45歲以上肌膚保養・熟齡身心整合顧問｜線上預約',
  description: '中年肌膚保養推薦、熟齡壓力釋放療癒、45歲以上整合顧問——恆美芯把肌膚、身心、生活節奏一起整理。第一次諮詢免費，立即線上預約。',
  keywords: ['中年肌膚保養推薦', '熟齡壓力釋放', '45歲以上整合顧問', '身心整合顧問', '熟齡保養'],
  authors: [{ name: '恆美芯' }],
  openGraph: {
    title: '你不是變老了，你只是太久沒有人好好看你一眼。',
    description: '恆美芯｜專為熟齡族群設計的整合顧問服務。立即預約免費諮詢。',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
    locale: 'zh_TW',
    type: 'website',
    siteName: '恆美芯',
  },
  twitter: { 
    card: 'summary_large_image',
    title: '恆美芯｜45歲以上肌膚保養・熟齡身心整合顧問',
    description: '你不是變老了，你只是太久沒有人好好看你一眼。',
  },
  alternates: { 
    canonical: 'https://henmeya.com' 
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#A88A75',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID

  return (
    <html 
      lang="zh-TW" 
      className={`${notoSansTC.variable} ${notoSerifTC.variable} ${maShanZheng.variable} bg-[#FAF6F0]`}
    >
      <body className="font-sans antialiased min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <BackToTop />
        <CookieBanner />
        
        {/* GA4 預留 */}
        {gaId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}');
              `}
            </Script>
          </>
        )}
        
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
