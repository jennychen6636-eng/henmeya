'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '/#services', label: '服務介紹' },
    { href: '/#about', label: '關於我' },
    { href: '/#process', label: '預約流程' },
    { href: '/#stories', label: '客戶故事' },
  ]

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-400 ${
        isScrolled 
          ? 'frosted-glass shadow-sm' 
          : 'bg-[#FAF6F0]/70 backdrop-blur-xl'
      }`}
      style={{ height: '88px' }}
    >
      <nav className="max-w-6xl mx-auto px-6 lg:px-8 h-full">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <Link 
            href="/" 
            className="font-serif text-2xl tracking-[0.2em] text-[#A88A75] hover:text-[#6B5443] transition-colors duration-300 min-h-[44px] min-w-[44px] flex items-center"
          >
            恆美芯
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-lg text-[#7A6F62] hover:text-[#A88A75] transition-colors duration-300 min-h-[44px] flex items-center"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/#contact"
              className="btn-primary"
            >
              立即預約
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden min-h-[44px] min-w-[44px] flex items-center justify-center text-[#A88A75]"
            aria-label={isMenuOpen ? '關閉選單' : '開啟選單'}
            aria-expanded={isMenuOpen}
          >
            <svg 
              className="w-7 h-7" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 frosted-glass border-t border-[#E8E4DD]/50 shadow-lg">
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-xl text-[#7A6F62] hover:text-[#A88A75] transition-colors duration-300 py-3 min-h-[44px] flex items-center"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/#contact"
                onClick={() => setIsMenuOpen(false)}
                className="btn-primary text-center mt-4"
              >
                立即預約
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
