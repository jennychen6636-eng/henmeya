import type { Metadata } from 'next'
import Link from 'next/link'
import { Check, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: '預約已送出｜恆美',
  description: '感謝您的預約，我們將盡快與您聯繫。',
}

export default function ThankYouPage() {
  return (
    <div className="bg-[#FAF6F0] min-h-screen flex items-center justify-center px-6 aurora-blur">
      <div className="max-w-xl w-full text-center py-20 relative z-10">
        {/* Success Icon */}
        <div className="mb-8 flex justify-center">
          <div className="w-24 h-24 rounded-full bg-[#A8B8C8]/20 flex items-center justify-center">
            <Check className="w-12 h-12 text-[#A8B8C8]" strokeWidth={1.5} />
          </div>
        </div>
        
        {/* Heading */}
        <h1 className="text-[#A88A75] mb-6">
          謝謝你願意問我
        </h1>
        
        {/* Message */}
        <div className="space-y-6 mb-10">
          <p className="text-xl text-[#7A6F62] leading-[2]">
            我通常在 1–2 個工作天內回覆，
            <br />
            如果沒有收到，請確認垃圾信件夾，
            <br />
            或直接透過 LINE 聯繫我。
          </p>
        </div>
        
        {/* Links */}
        <div className="space-y-4 mb-10">
          <p className="text-lg text-[#B5AB9F]">在等待回覆的時候，你可以先看看：</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#process" className="btn-secondary gap-2">
              <ArrowRight className="w-5 h-5" />
              服務流程是什麼
            </Link>
            <Link href="/#contact" className="btn-secondary gap-2">
              <ArrowRight className="w-5 h-5" />
              預約第一次諮詢
            </Link>
          </div>
        </div>
        
        {/* LINE Link */}
        <div className="card inline-block">
          <a 
            href="https://lin.ee/6mtAeVz"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg text-[#A8B8C8] hover:text-[#A88A75] transition-colors duration-200 inline-flex items-center gap-3"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.349 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/>
            </svg>
            加入官方 LINE 聯繫我
          </a>
        </div>
        
        {/* Back Button */}
        <div className="mt-10">
          <Link href="/" className="text-lg text-[#7A6F62] hover:text-[#A88A75] transition-colors duration-200">
            返回首頁
          </Link>
        </div>
      </div>
    </div>
  )
}
