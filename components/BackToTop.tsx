'use client'

import { useState, useEffect } from 'react'
import { ArrowUp } from 'lucide-react'

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  if (!isVisible) return null

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-40 min-h-[48px] min-w-[48px] flex items-center justify-center rounded-full frosted-glass text-[#A88A75] hover:text-[#6B5443] transition-all duration-400 hover:shadow-xl hover:-translate-y-1"
      aria-label="返回頂部"
    >
      <ArrowUp className="w-6 h-6" strokeWidth={1.5} />
    </button>
  )
}
