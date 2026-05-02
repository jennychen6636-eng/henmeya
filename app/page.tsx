import Image from 'next/image'
import Link from 'next/link'
import { ContactForm } from '@/components/ContactForm'
import { ChevronRight, Check, MessageCircle } from 'lucide-react'

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center aurora-blur overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#FDFBF8] via-[#FDFBF8] to-[#F7F3ED]" />
        
        <div className="container mx-auto px-6 md:px-8 relative z-10">
          <div className="grid md:grid-cols-[1.2fr_0.8fr] gap-12 md:gap-16 items-center py-24 md:py-32">
            <div className="space-y-10">
              <p className="text-2xl md:text-[28px] text-[#B8A090] leading-[2] font-serif font-light">
                45歲以後的你，想要皮膚穩定、睡得好、照鏡子不嘆氣，
                <br className="hidden md:block" />
                不想要再花時間分別找三個人問三件事。
              </p>
              
              <p className="text-xl md:text-[22px] text-[#8A8278] leading-[2] max-w-2xl">
                恆美是專為熟齡族群設計的整合顧問服務。
                <br />
                肌膚保養 × 身心平衡 × 生活節奏，一次整理好。
              </p>
              
              <div className="space-y-4">
                <Link href="#contact" className="btn-primary gap-3">
                  預約免費諮詢
                  <ChevronRight className="w-5 h-5" />
                </Link>
                <p className="text-lg text-[#C0B8B0]">
                  第一次諮詢完全免費，不推銷，不尷尬，只是好好聊聊。
                </p>
              </div>
            </div>
            
            <div className="relative hidden md:block">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E5%BD%A2%E8%B1%A1%E7%85%A7-UjID1eXdKKd9uoc8cnreE0pJk6timL.jpg"
                  alt="恆美創辦人"
                  width={480}
                  height={600}
                  className="object-cover"
                  priority
                />
              </div>
              {/* 裝飾光點 */}
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-[#F8EDE6] rounded-full blur-3xl opacity-50" />
              <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-[#E4E8EC] rounded-full blur-3xl opacity-40" />
            </div>
          </div>
        </div>
      </section>

      {/* 痛點共鳴區 */}
      <section className="section bg-[#EDE4D6]/30">
        <div className="container mx-auto px-6 md:px-8">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              '「最近照片都不想看，\n覺得自己老了好多，\n但不知道從哪裡開始改。」',
              '「保養品買了一堆，\n根本不知道自己缺什麼、\n適合什麼。」',
              '「壓力一大皮膚就出狀況，\n睡眠也差，\n感覺整個人在走下坡。」',
              '「想做點什麼，\n但怕踩雷，\n又怕浪費時間被推銷。」',
            ].map((text, i) => (
              <div 
                key={i} 
                className="card text-center"
              >
                <p className="text-xl md:text-[22px] text-[#3F362E] whitespace-pre-line leading-[2]">
                  {text}
                </p>
              </div>
            ))}
          </div>
          
          <p className="text-center text-xl md:text-2xl text-[#7A6F62] mt-16 max-w-2xl mx-auto">
            如果你說過其中一句話，你來對地方了。
          </p>
        </div>
      </section>

      {/* 服務說明區 */}
      <section className="section relative aurora-blur overflow-hidden">
        <div className="absolute inset-0 bg-[#FAF6F0]" />
        
        <div className="container mx-auto px-6 md:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <p className="text-xl md:text-2xl text-[#7A6F62] leading-[2]">
              恆美不是告訴你「要買什麼產品」，
              <br />
              也不是叫你「去運動、去放鬆」。
              <br />
              <br />
              我們做的事，是陪你把三件事一起整理清楚：
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {[
              {
                title: '適合你這個年紀的肌膚整理',
                desc: '45歲以後的肌膚不適合年輕人的保養邏輯。我們不依賴產品推薦，而是先了解你的肌膚狀態、生活習慣、壓力來源，找到真正適合你現在的方式。',
                icon: '✦',
              },
              {
                title: '壓力與睡眠的溫柔整理',
                desc: '你的皮膚跟你的睡眠、情緒、荷爾蒙都有關係。我們不做心理治療，但我們會陪你找到讓身體稍微鬆一口氣的節奏，那個節奏，很可能正是肌膚開始穩定的起點。',
                icon: '✦',
              },
              {
                title: '找回只屬於你的照顧方式',
                desc: '不是要你大改生活，而是在你現有的時間與精力裡，找到幾件真的做得到、也真的有感受的事。好好照顧自己，不是奢侈，是你現在最重要的事。',
                icon: '✦',
              },
            ].map((item, i) => (
              <div key={i} className="card text-center space-y-6">
                <span className="text-4xl text-[#A8B8C8]">{item.icon}</span>
                <h3 className="text-[#A88A75]">{item.title}</h3>
                <p className="text-lg text-[#3F362E] leading-[2]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 信任訊號區 */}
      <section className="section bg-[#EDE4D6]/30">
        <div className="container mx-auto px-6 md:px-8">
          <h2 className="text-center mb-12">到目前為止，我們陪過的人</h2>
          
          <div className="max-w-3xl mx-auto card text-center">
            <p className="text-xl md:text-[22px] text-[#3F362E] leading-[2]">
              我們的顧客裡，有企業中階主管、長年照顧家人的媽媽、
              正在面對更年期的職業女性。
              <br />
              <br />
              她們來的時候，通常都說過同一句話：
              <br />
              <span className="text-[#A88A75] font-medium">「我不知道還可以問誰。」</span>
            </p>
          </div>
        </div>
      </section>

      {/* 創辦人區 */}
      <section className="section relative aurora-blur overflow-hidden">
        <div className="absolute inset-0 bg-[#FAF6F0]" />
        
        <div className="container mx-auto px-6 md:px-8 relative z-10">
          <p className="text-center text-xl md:text-2xl text-[#7A6F62] mb-16">
            在你認識恆美之前，先認識我。
          </p>
          
          <div className="grid md:grid-cols-[1fr_1.2fr] gap-12 md:gap-20 items-center max-w-5xl mx-auto">
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-xl">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E5%BD%A2%E8%B1%A1%E7%85%A7-UjID1eXdKKd9uoc8cnreE0pJk6timL.jpg"
                  alt="恆美創辦人"
                  width={400}
                  height={500}
                  className="object-cover w-full"
                />
              </div>
              {/* 裝飾光點 */}
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#E8B5A6] rounded-full blur-3xl opacity-40" />
              <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-[#C8D4DE] rounded-full blur-3xl opacity-50" />
            </div>
            
            <div className="space-y-8">
              <div className="card">
                <p className="text-xl text-[#3F362E] leading-[2.2]">
                  在這之前，我自己也走過一段很長的迷路期——
                  皮膚一直不好，睡眠一直很淺，每天都覺得很累，
                  但去找各種專業人士，每個人都只看一部分，
                  沒有人跟我說「整體發生了什麼」。
                  <br /><br />
                  後來我開始把這三件事一起整理，
                  才發現它們其實是同一個問題的不同面向。
                  <br /><br />
                  創立恆美，是因為我不想讓和我一樣的人，
                  再花那麼長的時間自己摸索。
                  <br /><br />
                  第一次和我諮詢，你不需要準備什麼，
                  帶著你的困惑來就好。
                  我們只是好好聊聊。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 服務流程區 */}
      <section className="section bg-[#EDE4D6]/30">
        <div className="container mx-auto px-6 md:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-6">預約之後，會發生什麼？</h2>
            <p className="text-xl text-[#7A6F62]">
              很多人第一次來，都說比想像中輕鬆。
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                step: '01',
                title: '填寫預約表單',
                time: '3 分鐘',
                desc: '告訴我你最困擾的一件事就好，不需要整理好才來，不完整也沒關係。',
              },
              {
                step: '02',
                title: '收到確認與簡短問卷',
                time: '預約後 24 小時內',
                desc: '我會寄給你幾個簡單的問題，讓我在見你之前先了解一些背景，諮詢時不用從頭重複解釋。',
              },
              {
                step: '03',
                title: '第一次諮詢',
                time: '60 分鐘',
                desc: '視訊或電話都可以，你決定。這 60 分鐘，我只做一件事：認真聽你說，然後把你的狀況整理給你看。不推銷，不給「必買清單」。',
              },
              {
                step: '04',
                title: '你的個人整理方向',
                time: '',
                desc: '諮詢後，我會整理一份屬於你的方向摘要，讓你帶回去，知道接下來可以從哪裡開始。後續是���繼續合作，完全由你決定。',
              },
            ].map((item, i) => (
              <div key={i} className="card text-center space-y-4">
                <span className="text-3xl font-light text-[#A8B8C8]">{item.step}</span>
                <h3 className="text-xl text-[#A88A75]">{item.title}</h3>
                {item.time && (
                  <span className="inline-block text-lg text-[#E8B5A6]">{item.time}</span>
                )}
                <p className="text-lg text-[#3F362E] leading-[2]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 客戶故事區 */}
      <section className="section relative aurora-blur overflow-hidden">
        <div className="absolute inset-0 bg-[#FAF6F0]" />
        
        <div className="container mx-auto px-6 md:px-8 relative z-10">
          <h2 className="text-center mb-16">她們說的話</h2>
          
          <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            <div className="card space-y-6">
              <p className="text-xl text-[#3F362E] leading-[2]">
                有一位顧客，第一次來的時候說她「什麼都試過了」。
                <br /><br />
                她買過七八個品牌的保養品，做過臉部保養課程，也看過中醫調理。皮膚還是一直出狀況。
                <br /><br />
                後來我們才一起發現，問題不只在皮膚，而是她過去兩年睡眠從來沒有超過五小時，又一直在靠咖啡撐著。
                <br /><br />
                我們什麼產品都沒換，只是先把睡眠整理了，她說三週後照鏡子，自己嚇了一跳。
              </p>
              <p className="text-lg text-[#B5AB9F] italic">
                （以上為顧客經本人口頭授權之匿名敘事）
              </p>
            </div>
            
            <div className="card space-y-6">
              <p className="text-xl text-[#3F362E] leading-[2]">
                另一位顧客，54歲，公司主管，她的問題是「根本不知道怎麼開口說自己哪裡不對勁」。
                <br /><br />
                她習慣照顧別人，不習慣被人問「你還好嗎」。
                <br /><br />
                第一次諮詢結束後，她傳訊息給我說：
                <span className="text-[#A88A75]">「謝謝你讓我說完，我已經很久沒有把話說完了。」</span>
                <br /><br />
                保養可以之後再慢慢整理，有時候，先被聽見，是第一步。
              </p>
              <p className="text-lg text-[#B5AB9F] italic">
                （以上為顧客經本人口頭授權之匿名敘事）
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 定價區 */}
      <section className="section bg-[#EDE4D6]/30">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-10">費用怎麼算？</h2>
            
            <div className="card space-y-8">
              <p className="text-xl text-[#3F362E] leading-[2]">
                恆美的服務依照你的狀況與需求客製，
                沒有固定的「套餐」，因為每個人的情況都不一樣。
                <br /><br />
                <span className="text-[#A88A75] font-medium">費用範圍：NT$1,000 起</span>，依服務項目與頻次而定。
                <br /><br />
                如果你不確定自己需要什麼，
                最快的方式是先預約一次免費諮詢，
                我們一起確認適合你的方向，再討論後續安排。
              </p>
              
              <Link href="#contact" className="btn-primary gap-3 mx-auto">
                先填諮詢單，了解適合我的方案
                <ChevronRight className="w-5 h-5" />
              </Link>
              
              <p className="text-lg text-[#B5AB9F]">
                填寫諮詢單不代表付款，也不構成任何承諾。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ 區 */}
      <section className="section relative aurora-blur overflow-hidden">
        <div className="absolute inset-0 bg-[#FAF6F0]" />
        
        <div className="container mx-auto px-6 md:px-8 relative z-10">
          <h2 className="text-center mb-16">常見問題</h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                q: '第一次諮詢真的免費嗎？會被推銷嗎？',
                a: '是的，第一次諮詢完全免費，60 分鐘。我不會推銷任何產品或課程。這段時間只是讓我們彼此認識，讓你知道恆美能不能幫到你。',
              },
              {
                q: '我不確定自己的問題是肌膚、睡眠還是壓力，可以諮詢嗎？',
                a: '當然可以。很多人來的時候都不確定問題出在哪裡，這正是我們一起整理的目的。你只需要帶著你的困惑來就好。',
              },
              {
                q: '諮詢是視訊還是見面？',
                a: '目前以線上視訊（Google Meet）或電話為主，你選擇方便的方式即可。',
              },
              {
                q: '諮詢後一定要購買服務嗎？',
                a: '完全不用。諮詢後你會收到一份整理方向，是否繼續合作由你決定，沒有任何壓力。',
              },
            ].map((item, i) => (
              <div key={i} className="card">
                <h3 className="text-xl text-[#A88A75] mb-4 flex items-start gap-3">
                  <Check className="w-6 h-6 text-[#A8B8C8] flex-shrink-0 mt-1" />
                  {item.q}
                </h3>
                <p className="text-lg text-[#3F362E] leading-[2] pl-9">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 最終 CTA 區 */}
      <section className="section relative aurora-blur overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#EDE4D6]/50 to-[#FAF6F0]" />
        
        <div className="container mx-auto px-6 md:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-[#A88A75]">
              你不是變老了，
              <br />
              你只是太久沒有人好好看你一眼。
            </h2>
            
            <p className="text-xl md:text-2xl text-[#7A6F62]">
              第一次諮詢，我們只是好好聊聊。
            </p>
            
            <p className="text-lg text-[#B5AB9F]">
              60 分鐘，免費，不推銷。
              <br />
              視訊或電話，你選。
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-4">
              <Link href="#contact" className="btn-primary gap-3">
                立即預約免費諮詢
                <ChevronRight className="w-5 h-5" />
              </Link>
              
              <Link href="#contact" className="btn-secondary gap-2">
                <MessageCircle className="w-5 h-5" />
                有問題想先問
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 預約表單區 */}
      <section id="contact" className="section bg-[#EDE4D6]/30">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="mb-4">有問題想先問我</h2>
              <p className="text-xl text-[#7A6F62]">
                不確定這個服務適不適合你？
                <br />
                有任何想先了解的事，直接問我。
                <br />
                通常 1–2 個工作天內回覆。
              </p>
            </div>
            
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  )
}
