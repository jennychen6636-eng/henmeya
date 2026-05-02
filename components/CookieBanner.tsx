'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent')
    if (!consent) {
      // 稍微延遲顯示，避免閃爍
      const timer = setTimeout(() => setIsVisible(true), 1000)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('cookie_consent', 'true')
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div 
      className="fixed bottom-0 left-0 right-0 z-50 frosted-glass border-t border-[#E8E4DD]/50"
      role="dialog"
      aria-label="Cookie 使用同意"
    >
      <div className="max-w-5xl mx-auto px-6 py-6">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
          <div className="flex-1">
            <p className="text-lg text-[#7A6F62] leading-relaxed">
              我們使用 Cookie 來提升您的瀏覽體驗，並進行網站流量分析。
              繼續使用本網站即表示您同意我們使用 Cookie。
              <Link 
                href="/privacy" 
                className="text-[#A8B8C8] hover:text-[#A88A75] underline underline-offset-2 ml-1 transition-colors duration-200"
              >
                了解更多
              </Link>
            </p>
          </div>
          <button
            onClick={handleAccept}
            className="btn-primary whitespace-nowrap"
          >
            我了解了
          </button>
        </div>
      </div>
    </div>
  )
}
