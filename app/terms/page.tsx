import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '服務條款｜恆美',
  description: '恆美整合顧問服務條款，說明服務內容、權利義務、保密條款等重要事項。',
}

export default function TermsPage() {
  return (
    <div className="bg-[#FAF6F0] min-h-screen">
      {/* Header */}
      <div className="frosted-glass border-b border-[#E8E4DD]/50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 py-12 md:py-16">
          <h1 className="text-[#A88A75] mb-4">服務條款</h1>
          <p className="text-lg text-[#7A6F62]">
            最後更新日期：2025-05-02
          </p>
        </div>
      </div>
      
      {/* Warning Card */}
      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-8">
        <div className="card bg-[#E8E4DD]/30">
          <p className="text-lg text-[#7A6F62] leading-relaxed">
            <strong className="text-[#3F362E]">重要提醒：</strong>
            本服務為顧問諮詢，不構成醫療行為或醫療建議。如有身心健康疑慮，請諮詢合格醫療人員。
          </p>
        </div>
      </div>
      
      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sticky TOC */}
          <nav className="hidden lg:block lg:col-span-1">
            <div className="sticky top-24 space-y-3">
              <p className="text-lg font-medium text-[#3F362E] mb-4">目錄</p>
              <a href="#section-1" className="block text-lg text-[#7A6F62] hover:text-[#A88A75] transition-colors duration-200">第一條：服務性質聲明</a>
              <a href="#section-2" className="block text-lg text-[#7A6F62] hover:text-[#A88A75] transition-colors duration-200">第二條：費用與付款</a>
              <a href="#section-3" className="block text-lg text-[#7A6F62] hover:text-[#A88A75] transition-colors duration-200">第三條：預約、取消與退費</a>
              <a href="#section-4" className="block text-lg text-[#7A6F62] hover:text-[#A88A75] transition-colors duration-200">第四條：保密義務</a>
              <a href="#section-5" className="block text-lg text-[#7A6F62] hover:text-[#A88A75] transition-colors duration-200">第五條：智慧財產權</a>
              <a href="#section-6" className="block text-lg text-[#7A6F62] hover:text-[#A88A75] transition-colors duration-200">第六條：條款變更</a>
              <a href="#section-7" className="block text-lg text-[#7A6F62] hover:text-[#A88A75] transition-colors duration-200">第七條：準據法與管轄</a>
            </div>
          </nav>
          
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-10">
            <p className="text-lg text-[#7A6F62] leading-[2]">
              請於預約或付款前詳細閱讀本服務條款（以下簡稱「本條款」）。您完成預約或付款，即表示您同意本條款之全部內容。
            </p>
            
            <section id="section-1" className="card">
              <h2 className="font-serif text-2xl text-[#A88A75] mb-6">第一條　服務性質聲明</h2>
              <div className="space-y-4 text-lg text-[#3F362E] leading-[2]">
                <p>
                  一、本服務為個人顧問諮詢服務，包含肌膚保養建議、身心平衡引導及生活節奏整理。
                </p>
                <p>
                  二、<strong className="text-[#A88A75]">【重要免責聲明】</strong>本服務不構成任何醫療行為、醫療診斷、醫療建議或心理治療。顧問師所提供之建議僅供參考，不具醫療、法律、財務或其他專業效力，不得替代專業醫師、臨床心理師或其他持照專業人員之診斷與治療。
                </p>
                <p>
                  三、如您有任何身心健康疑慮，請優先諮詢合格醫療人員。本服務提供者不對因採納本服務建議所產生之任何結果負責。
                </p>
              </div>
            </section>
            
            <section id="section-2" className="card">
              <h2 className="font-serif text-2xl text-[#A88A75] mb-6">第二條　費用與付款</h2>
              <div className="space-y-4 text-lg text-[#3F362E] leading-[2]">
                <p>
                  一、服務費用依恆美官方公告為準，範圍為新台幣 1,000 元至 5,000 元（依服務項目而定）。
                </p>
                <p>
                  二、付款須於預約確認後完成，服務方接收付款確認通知後，預約始生效。
                </p>
                <p>
                  三、付款完成後，消費者即取得本服務之預約資格，費用處理由第三方金流服務商執行，恆美不儲存任何付款卡號資訊。
                </p>
              </div>
            </section>
            
            <section id="section-3" className="card">
              <h2 className="font-serif text-2xl text-[#A88A75] mb-6">第三條　預約、取消與退費政策</h2>
              <div className="space-y-4 text-lg text-[#3F362E] leading-[2]">
                <p>
                  一、消費者可於預約服務時間 48 小時前免費取消，取消後退還全額費用（扣除金流手續費，若有）。
                </p>
                <p>
                  二、服務時間 48 小時內取消，不予退費，惟顧問師得依個案情況提供一次免費改期。
                </p>
                <p>
                  三、顧問師因不可抗力（疾病、天災、系統故障等）無法履約時，將主動聯繫消費者改期，消費者亦可申請全額退費。
                </p>
                <p>
                  四、本服務為顧問諮詢，非數位課程遞延給付，故消費者保護法第 19 條網路購物七日猶豫期適用於本服務；消費者於付款後尚未進行任何諮詢前，得行使猶豫期退費權利。
                </p>
              </div>
            </section>
            
            <section id="section-4" className="card">
              <h2 className="font-serif text-2xl text-[#A88A75] mb-6">第四條　保密義務</h2>
              <div className="space-y-4 text-lg text-[#3F362E] leading-[2]">
                <p>
                  一、恆美承諾對消費者於諮詢過程中所揭露之個人狀況、健康資訊及隱私內容，自服務結束日起保密三年。
                </p>
                <p>
                  二、未經消費者書面同意，不得將上述資訊提供予任何第三方，但法律另有規定者不在此限。
                </p>
              </div>
            </section>
            
            <section id="section-5" className="card">
              <h2 className="font-serif text-2xl text-[#A88A75] mb-6">第五條　智慧財產權</h2>
              <div className="space-y-4 text-lg text-[#3F362E] leading-[2]">
                <p>
                  本網站所有內容（包含文字、圖片、設計、諮詢建議文件）均為恆美所有或經合法授權使用，未經書面許可不得複製、轉載或商業利用。
                </p>
              </div>
            </section>
            
            <section id="section-6" className="card">
              <h2 className="font-serif text-2xl text-[#A88A75] mb-6">第六條　條款變更</h2>
              <div className="space-y-4 text-lg text-[#3F362E] leading-[2]">
                <p>
                  恆美保留隨時修改本條款之權利，修改後將公告於本頁面並更新「最後更新日期」，繼續使用本服務即視為同意修改後之條款。
                </p>
              </div>
            </section>
            
            <section id="section-7" className="card">
              <h2 className="font-serif text-2xl text-[#A88A75] mb-6">第七條　準據法與管轄</h2>
              <div className="space-y-4 text-lg text-[#3F362E] leading-[2]">
                <p>
                  本條款依中華民國法律解釋，因本條款所生之爭議，以台灣台北地方法院為第一審管轄法院。
                </p>
              </div>
            </section>
            
            {/* Contact */}
            <div className="card bg-[#C8D4DE]/20">
              <h3 className="font-serif text-xl text-[#A88A75] mb-4">有任何疑問？</h3>
              <p className="text-lg text-[#7A6F62] mb-6">
                如對本服務條款有任何疑問，歡迎透過聯絡表單與我們聯繫。
              </p>
              <Link href="/#contact" className="btn-secondary inline-flex">
                聯繫我們
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
