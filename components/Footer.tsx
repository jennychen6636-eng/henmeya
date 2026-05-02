import Link from 'next/link'
import { Instagram } from 'lucide-react'

export function Footer() {
  const quickLinks = [
    { href: '/', label: '首頁' },
    { href: '/#services', label: '服務介紹' },
    { href: '/#about', label: '關於我' },
    { href: '/#contact', label: '預約諮詢' },
  ]

  const legalLinks = [
    { href: '/terms', label: '服務條款' },
    { href: '/privacy', label: '隱私政策' },
  ]

  return (
    <footer className="bg-[#3F362E] text-[#B5AB9F]">
      <div className="max-w-5xl mx-auto px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* Brand Column */}
          <div className="space-y-4">
            <Link 
              href="/" 
              className="font-serif text-2xl tracking-[0.2em] text-[#FAF6F0] hover:text-[#E8B5A6] transition-colors duration-200"
            >
              恆美
            </Link>
            <p className="text-lg leading-relaxed text-[#B5AB9F]">
              肌膚・身心・生活節奏，一起整理。
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-serif text-xl text-[#FAF6F0] mb-6">快速連結</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-lg text-[#B5AB9F] hover:text-[#FAF6F0] transition-colors duration-200 min-h-[44px] inline-flex items-center"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div className="space-y-4">
            <h3 className="font-serif text-xl text-[#FAF6F0] mb-6">法律資訊</h3>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-lg text-[#B5AB9F] hover:text-[#FAF6F0] transition-colors duration-200 min-h-[44px] inline-flex items-center"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="font-serif text-xl text-[#FAF6F0] mb-6">繼續關注恆美</h3>
            <ul className="space-y-4">
              <li>
                <a 
                  href="https://www.instagram.com/earthjenny/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg text-[#A8B8C8] hover:text-[#A88A75] transition-colors duration-200 inline-flex items-center gap-3"
                >
                  <Instagram className="w-7 h-7" strokeWidth={1.5} />
                  earthjenny
                </a>
              </li>
              <li>
                <a 
                  href="https://lin.ee/6mtAeVz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg text-[#A8B8C8] hover:text-[#A88A75] transition-colors duration-200 inline-flex items-center gap-3"
                >
                  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                    <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.349 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  加入官方 LINE
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-[#7A6F62]/30 mt-12 pt-8">
          <p className="text-center text-lg text-[#B5AB9F]">
            &copy; {new Date().getFullYear()} 恆美｜保留所有權利
          </p>
        </div>
      </div>
    </footer>
  )
}
