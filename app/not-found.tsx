import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="bg-[#FAF6F0] min-h-screen flex items-center justify-center px-6 aurora-blur">
      <div className="max-w-xl w-full text-center py-20 relative z-10">
        {/* 404 Number */}
        <p className="font-serif text-8xl md:text-9xl text-[#C8D4DE]/50 mb-4">
          404
        </p>
        
        {/* Heading */}
        <h1 className="text-[#A88A75] mb-6">
          找不到這個頁面
        </h1>
        
        {/* Message */}
        <p className="text-xl text-[#7A6F62] leading-[2] mb-10">
          可能是連結失效了，或者這個頁面還沒有準備好。
          <br />
          不過你已經在這裡了，不如先看看恆美芯可以怎麼幫你？
        </p>
        
        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="btn-primary gap-2">
            <ArrowRight className="w-5 h-5" />
            回到首頁
          </Link>
          <Link href="/#contact" className="btn-secondary gap-2">
            <ArrowRight className="w-5 h-5" />
            直接預約諮詢
          </Link>
        </div>
      </div>
    </div>
  )
}
