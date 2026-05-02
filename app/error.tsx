'use client'

import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error('[v0] Error occurred:', error)
  }, [error])

  return (
    <div className="min-h-screen bg-[#F5F0E8] flex items-center justify-center px-6">
      <div className="max-w-xl w-full text-center py-20">
        {/* Error Icon */}
        <div className="mb-8 flex justify-center">
          <div className="w-24 h-24 rounded-full bg-[#C8956D]/20 flex items-center justify-center">
            <svg 
              className="w-12 h-12 text-[#C8956D]" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" 
              />
            </svg>
          </div>
        </div>
        
        {/* Heading */}
        <h1 className="font-serif text-[#3A3530] mb-6">
          發生了一點問題
        </h1>
        
        {/* Message */}
        <p className="text-xl text-[#6B6359] leading-relaxed mb-10">
          頁面載入時發生錯誤。
          <br />
          請稍後再試，或重新整理頁面。
        </p>
        
        {/* Retry Button */}
        <button
          onClick={() => reset()}
          className="btn-primary"
        >
          重新整理
        </button>
      </div>
    </div>
  )
}
