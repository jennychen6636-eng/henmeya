'use client'

import { useState, FormEvent } from 'react'
import { useRouter } from 'next/navigation'

export function ContactForm() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      const response = await fetch('https://formspree.io/f/xdabkydp', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      })

      if (response.ok) {
        router.push('/thank-you')
      } else {
        throw new Error('表單送出失敗，請稍後再試')
      }
    } catch {
      setError('表單送出失敗，請稍後再試或直接與我們聯繫')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="card">
      <form 
        onSubmit={handleSubmit}
        className="space-y-8"
      >
        {/* 姓名 */}
        <div>
          <label htmlFor="name" className="form-label">
            你怎麼稱呼你自己 <span className="text-[#E8B5A6]">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="form-input"
            placeholder="請輸入你的稱呼"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="form-label">
            你的 Email <span className="text-[#E8B5A6]">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="form-input"
            placeholder="example@email.com"
          />
        </div>

        {/* 問題 */}
        <div>
          <label htmlFor="message" className="form-label">
            你最想問的一件事 <span className="text-[#E8B5A6]">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            className="form-input resize-none"
            placeholder="請簡單描述你目前的狀況或想了解的內容..."
          />
        </div>

        {/* 個資同意 */}
        <div className="flex items-start gap-4">
          <input
            type="checkbox"
            id="consent"
            name="consent"
            required
            className="mt-1.5 w-5 h-5 rounded border-[#E8E4DD] text-[#A88A75] focus:ring-[#A88A75] accent-[#A88A75]"
          />
          <label htmlFor="consent" className="text-lg text-[#7A6F62] leading-relaxed">
            我已閱讀並同意
            <a href="/privacy" className="text-[#A8B8C8] hover:text-[#A88A75] underline underline-offset-2 mx-1 transition-colors duration-200">
              隱私政策
            </a>
            ，同意恆美蒐集本表單資料用於回覆與服務聯繫。
          </label>
        </div>

        {/* 錯誤訊息 */}
        {error && (
          <div className="p-4 rounded-2xl bg-[#E8B5A6]/10 text-[#A88A75] text-lg">
            {error}
          </div>
        )}

        {/* 送出按鈕 */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-primary w-full disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {isSubmitting ? '送出中...' : '送出問題'}
        </button>
      </form>
      
      {/* LINE 替代行動 */}
      <div className="mt-8 pt-8 border-t border-[#E8E4DD]/50 text-center">
        <p className="text-lg text-[#7A6F62]">
          不想填表單？也可以
          <a 
            href="https://lin.ee/6mtAeVz"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#A8B8C8] hover:text-[#A88A75] transition-colors duration-200 inline-flex items-center gap-2 mx-2"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.349 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/>
            </svg>
            加 LINE 先聊聊
          </a>
        </p>
      </div>
    </div>
  )
}
