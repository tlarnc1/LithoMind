import { SeismicWave } from "@/components/seismic-wave"
import { Timeline } from "@/components/timeline"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 lg:px-24 py-6 bg-background/80 backdrop-blur-sm">
        <div className="max-w-2xl mx-auto">
          <a href="/" className="inline-block group">
            <span 
              className="text-2xl md:text-3xl tracking-tight italic"
              style={{ fontFamily: 'var(--font-logo), Georgia, serif' }}
            >
              LithoMind
            </span>
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 pt-24">
        <div className="max-w-2xl mx-auto w-full">
          <div className="space-y-8">
            <h1 className="text-2xl md:text-3xl lg:text-4xl leading-loose tracking-wide text-balance">
              一秒の解析が、
              <br />
              一生を救う。
            </h1>
            
            <p className="text-xs text-muted-foreground tracking-widest">
              One second to analyze, a lifetime to save.
            </p>

            <div className="pt-12">
              <SeismicWave />
            </div>
          </div>

          <div className="mt-32">
            <p className="text-xs text-muted-foreground tracking-widest">
              SCROLL
            </p>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-2xl mx-auto">
          <div className="space-y-16">
            <div>
              <p className="text-xs text-muted-foreground tracking-widest mb-12">
                ABOUT
              </p>
              
              <p className="text-lg md:text-xl leading-loose tracking-wide text-balance">
                地震は、突然やってくる。
                <br />
                それだけは、誰にも変えられない。
              </p>
            </div>

            <div className="space-y-8 text-muted-foreground leading-loose text-sm">
              <p>
                日本に暮らす私たちにとって、地震は常に隣り合わせの存在です。
                阪神・淡路大震災、東日本大震災、能登半島地震。
                幾度となく、この国は大きな揺れに見舞われてきました。
              </p>
              <p>
                その度に、多くの命が失われてきた。
                家族を失った人がいる。友人を失った人がいる。
                突然、日常を奪われた人たちがいる。
              </p>
              <p>
                「なぜ、もっと早く知ることができなかったのか」
              </p>
              <p>
                その問いは、いつも胸に残り続けます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reality */}
      <section className="py-32 px-6 md:px-12 lg:px-24 border-t border-border">
        <div className="max-w-2xl mx-auto">
          <div className="space-y-16">
            <div>
              <p className="text-xs text-muted-foreground tracking-widest mb-12">
                REALITY
              </p>
              
              <p className="text-lg md:text-xl leading-loose tracking-wide text-balance">
                正直に言えば、
                <br />
                地震を予測することは、今の科学ではできない。
              </p>
            </div>

            <div className="space-y-8 text-muted-foreground leading-loose text-sm">
              <p>
                何十年も研究が続けられてきたけれど、
                「いつ、どこで、どのくらいの規模の地震が起きるか」を
                事前に言い当てることは、いまだに不可能です。
              </p>
              <p>
                でも、完全な予測ができなくても、
                揺れが届く前に「来る」と伝えることはできる。
              </p>
              <p>
                それが、緊急地震速報です。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* EEW */}
      <section className="py-32 px-6 md:px-12 lg:px-24 border-t border-border">
        <div className="max-w-2xl mx-auto">
          <div className="space-y-16">
            <div>
              <p className="text-xs text-muted-foreground tracking-widest mb-12">
                PRINCIPLE
              </p>
              
              <p className="text-lg md:text-xl leading-loose tracking-wide text-balance">
                地震波には、速いものと遅いものがある。
              </p>
            </div>

            <div className="space-y-8 text-muted-foreground leading-loose text-sm">
              <p>
                地震が起きると、まずP波（初期微動）が伝わります。
                これは秒速約7キロメートル。カタカタと小さく揺れる、あの最初の振動です。
              </p>
              <p>
                そして遅れて、S波（主要動）がやってくる。
                秒速約4キロメートル。建物を揺らし、時に倒壊させる、大きな揺れです。
              </p>
              <p>
                この時間差を利用して、P波を検知した瞬間に警報を出す。
                S波が届くまでの数秒から数十秒の間に、
                身を守る行動を取ってもらう。
              </p>
              <p>
                それが、緊急地震速報の仕組みです。
              </p>
            </div>

            <p className="text-xs text-muted-foreground tracking-wide pt-8 border-t border-border">
              P-waves travel faster than S-waves. This gap is our only window.
            </p>
          </div>
        </div>
      </section>

      {/* Challenge */}
      <section className="py-32 px-6 md:px-12 lg:px-24 border-t border-border">
        <div className="max-w-2xl mx-auto">
          <div className="space-y-16">
            <div>
              <p className="text-xs text-muted-foreground tracking-widest mb-12">
                CHALLENGE
              </p>
              
              <p className="text-lg md:text-xl leading-loose tracking-wide text-balance">
                完璧じゃなくていい。
                <br />
                それでも、1秒でも早く。
              </p>
            </div>

            <div className="space-y-8 text-muted-foreground leading-loose text-sm">
              <p>
                緊急地震速報は、完璧なシステムではありません。
                誤報もある。間に合わないこともある。
                震源に近すぎれば、警報より先に揺れが届いてしまう。
              </p>
              <p>
                それでも、少しでも早く知らせることができれば。
                1秒でも長く、逃げる時間を作ることができれば。
              </p>
              <p>
                机の下に潜る時間。火を消す時間。
                大切な人の手を握る時間。
              </p>
              <p>
                その「1秒」を、私たちは追いかけています。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-32 px-6 md:px-12 lg:px-24 border-t border-border">
        <div className="max-w-2xl mx-auto">
          <div className="space-y-16">
            <div>
              <p className="text-xs text-muted-foreground tracking-widest mb-12">
                APPROACH
              </p>
              
              <p className="text-lg md:text-xl leading-loose tracking-wide text-balance">
                地震学と、データサイエンス。
                <br />
                ふたつの知を、重ね合わせる。
              </p>
            </div>

            <div className="space-y-8 text-muted-foreground leading-loose text-sm">
              <p>
                LithoMindは、地震学の知見と最新のデータサイエンスを融合させ、
                早期警報システムの精度向上に挑むプロジェクトです。
              </p>
              <p>
                膨大な地震波データの中から、パターンを見つけ出す。
                機械学習を使って、より正確に、より早く、揺れを予測する。
                既存のシステムを置き換えるのではなく、補完し、強化していく。
              </p>
              <p>
                まだ構想段階のものも多い。
                実現までには、何年もかかるかもしれない。
              </p>
              <p>
                けれど、諦める理由にはならない。
              </p>
            </div>

            <p className="text-xs text-muted-foreground tracking-wide pt-8 border-t border-border">
              Seismology meets data science — to refine the art of early warning.
            </p>
          </div>
        </div>
      </section>

      {/* Journey */}
      <section className="py-32 px-6 md:px-12 lg:px-24 border-t border-border">
        <div className="max-w-2xl mx-auto">
          <p className="text-xs text-muted-foreground tracking-widest mb-6">
            JOURNEY
          </p>
          <p className="text-sm text-muted-foreground mb-16 leading-relaxed">
            長い道のりになる。でも、一歩ずつ。
          </p>
          
          <Timeline />
        </div>
      </section>

      {/* Vision */}
      <section className="py-32 px-6 md:px-12 lg:px-24 border-t border-border">
        <div className="max-w-2xl mx-auto">
          <div className="space-y-16">
            <div>
              <p className="text-xs text-muted-foreground tracking-widest mb-12">
                VISION
              </p>
              
              <p className="text-lg md:text-xl leading-loose tracking-wide text-balance">
                いつか、この研究が、
                <br />
                誰かの命を守る力になれたら。
              </p>
            </div>

            <div className="space-y-8 text-muted-foreground leading-loose text-sm">
              <p>
                大きなことは言えません。
                まだ何も成し遂げていない、小さな挑戦です。
              </p>
              <p>
                でも、いつか。
                この国のどこかで、誰かが揺れを感じる前に身を伏せられたなら。
                誰かが、大切な人と一緒に避難できたなら。
              </p>
              <p>
                そのとき、この長い道のりは、
                意味のあるものになる。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Connect */}
      <section className="py-32 px-6 md:px-12 lg:px-24 border-t border-border">
        <div className="max-w-2xl mx-auto">
          <p className="text-xs text-muted-foreground tracking-widest mb-12">
            CONNECT
          </p>
          
          <p className="text-base leading-loose mb-4">
            この挑戦の行方を、見届けてください。
          </p>
          <p className="text-sm text-muted-foreground leading-loose mb-12">
            進捗や学びを、定期的に発信していきます。
          </p>

          <a 
            href="https://x.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 text-foreground hover:opacity-70 transition-opacity duration-300"
          >
            <svg 
              viewBox="0 0 24 24" 
              className="w-5 h-5 fill-current"
              aria-hidden="true"
            >
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
            <span className="text-sm tracking-wide">
              Follow on X
            </span>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 md:px-12 lg:px-24 border-t border-border">
        <div className="max-w-2xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <span 
            className="text-lg tracking-tight italic"
            style={{ fontFamily: 'var(--font-logo), Georgia, serif' }}
          >
            LithoMind
          </span>
          <p className="text-xs text-muted-foreground tracking-widest">
            Est. 2026
          </p>
        </div>
      </footer>
    </main>
  )
}
