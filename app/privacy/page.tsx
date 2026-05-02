import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '隱私政策｜恆美芯',
  description: '恆美芯隱私政策，說明個人資料蒐集、處理、利用方式及您的權利。',
}

export default function PrivacyPage() {
  return (
    <div className="bg-[#FAF6F0] min-h-screen">
      {/* Header */}
      <div className="frosted-glass border-b border-[#E8E4DD]/50">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 py-12 md:py-16">
          <h1 id="privacy" className="text-[#A88A75] mb-4">隱私政策</h1>
          <p className="text-lg text-[#7A6F62]">
            最後更新日期：2025-05-02
          </p>
        </div>
      </div>
      
      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 lg:px-8 py-12 pb-16 space-y-10">
        <p className="text-lg text-[#7A6F62] leading-[2]">
          本隱私政策依中華民國個人資料保護法（以下簡稱個資法）第 8 條規定，告知您個人資料蒐集、處理及利用之相關事項。
        </p>
        
        <section className="card">
          <h2 className="font-serif text-2xl text-[#A88A75] mb-6">一、蒐集目的</h2>
          <div className="space-y-4 text-lg text-[#3F362E] leading-[2]">
            <p>本網站蒐集您的個人資料，目的如下：</p>
            <ol className="list-decimal list-inside space-y-2 pl-4">
              <li>受理線上預約諮詢（個資法特定目的第 069 款：契約、類似契約或其他法律關係事務）</li>
              <li>提供顧問諮詢服務及後續追蹤</li>
              <li>回應您的聯絡與詢問</li>
              <li>遵守法律義務</li>
            </ol>
          </div>
        </section>
        
        <section className="card">
          <h2 className="font-serif text-2xl text-[#A88A75] mb-6">二、蒐集項目</h2>
          <div className="space-y-4 text-lg text-[#3F362E] leading-[2]">
            <p>本網站蒐集之個人資料包含：</p>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>姓名（中文或慣用稱呼）</li>
              <li>電子郵件地址</li>
              <li>聯絡電話（選填）</li>
              <li>您主動填寫之諮詢內容與健康狀況描述</li>
            </ul>
            <div className="bg-[#F0DCD0]/30 rounded-2xl p-6 mt-4">
              <p className="text-[#7A6F62]">
                <strong className="text-[#A88A75]">說明：</strong>您提供之健康相關資訊屬個資法第 6 條「特種個人資料」，我們僅用於提供本服務，不作其他用途。
              </p>
            </div>
          </div>
        </section>
        
        <section className="card">
          <h2 className="font-serif text-2xl text-[#A88A75] mb-6">三、利用方式</h2>
          <div className="space-y-4 text-lg text-[#3F362E] leading-[2]">
            <p>所蒐集之個人資料，利用方式如下：</p>
            <ol className="list-decimal list-inside space-y-2 pl-4">
              <li>確認您的預約並提供諮詢服務</li>
              <li>以電子郵件或電話與您聯繫</li>
              <li>依法令規定配合主管機關要求（此時可能提供予第三方）</li>
              <li>本網站使用 Formspree 處理表單資料（資料儲存於 Formspree 伺服器），Formspree 隱私政策請參閱 
                <a 
                  href="https://formspree.io/legal/privacy-policy" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#A8B8C8] hover:text-[#A88A75] underline underline-offset-2 ml-1 transition-colors duration-200"
                >
                  https://formspree.io/legal/privacy-policy
                </a>
              </li>
            </ol>
            <p>
              我們不會將您的個人資料出售、出租或提供予與本服務無關之第三方。
            </p>
          </div>
        </section>
        
        <section className="card">
          <h2 className="font-serif text-2xl text-[#A88A75] mb-6">四、保存期間</h2>
          <div className="space-y-4 text-lg text-[#3F362E] leading-[2]">
            <p>
              您的個人資料自最後一次諮詢服務結束後保存三年，屆期後予以安全刪除或匿名化處理，法律另有規定者從其規定。
            </p>
          </div>
        </section>
        
        <section className="card">
          <h2 className="font-serif text-2xl text-[#A88A75] mb-6">五、您的權利（個資法第 3 條）</h2>
          <div className="space-y-4 text-lg text-[#3F362E] leading-[2]">
            <p>依個資法規定，您就自己的個人資料享有以下權利：</p>
            <ol className="list-decimal list-inside space-y-2 pl-4">
              <li>查詢或請求閱覽</li>
              <li>請求製給複製本</li>
              <li>請求補充或更正</li>
              <li>請求停止蒐集、處理或利用</li>
              <li>請求刪除</li>
            </ol>
            <p>
              如需行使上述權利，請透過網站聯絡表單提出，我們將於 15 個工作日內回覆。行使上述權利，可能影響本服務之提供，屆時我們將事先告知。
            </p>
          </div>
        </section>
        
        <section className="card">
          <h2 className="font-serif text-2xl text-[#A88A75] mb-6">六、Cookie 使用</h2>
          <div className="space-y-4 text-lg text-[#3F362E] leading-[2]">
            <p>本網站使用以下 Cookie：</p>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li><strong className="text-[#A88A75]">功能性 Cookie</strong>：記錄您的 Cookie 同意選擇（localStorage），不追蹤個人身份</li>
              <li><strong className="text-[#A88A75]">分析性 Cookie</strong>：預留 Google Analytics 4 位置，啟用後將追蹤匿名訪客行為以改善網站，尚未啟用</li>
            </ul>
            <p>
              您可透過瀏覽器設定拒絕或刪除 Cookie，惟部分功能可能受影響。
            </p>
          </div>
        </section>
        
        <section className="card">
          <h2 className="font-serif text-2xl text-[#A88A75] mb-6">七、隱私政策變更</h2>
          <div className="space-y-4 text-lg text-[#3F362E] leading-[2]">
            <p>
              本政策如有修改，將於本頁面公告並更新日期，重大變更將另以電子郵件通知曾使用本服務之用戶。
            </p>
            <p>
              如有隱私相關問題，請透過聯絡表單與我們聯繫。
            </p>
          </div>
        </section>
        
        {/* CTA */}
        <div className="card bg-[#C8D4DE]/20">
          <h3 className="font-serif text-xl text-[#A88A75] mb-4">準備好預約了嗎？</h3>
          <p className="text-lg text-[#7A6F62] mb-6">
            了解我們如何保護您的資料後，歡迎預約諮詢。
          </p>
          <Link href="/#contact" className="btn-primary inline-flex">
            前往預約
          </Link>
        </div>
      </div>
    </div>
  )
}
