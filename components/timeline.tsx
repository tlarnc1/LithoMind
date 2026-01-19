const milestones = [
  {
    phase: "I",
    title: "着想",
    titleEn: "Origin",
    description: "ひとつの問いが、すべての始まりになる。",
  },
  {
    phase: "II",
    title: "探究",
    titleEn: "Research",
    description: "地震学とデータサイエンス、その交差点を歩む。",
  },
  {
    phase: "III",
    title: "実証",
    titleEn: "Prototype",
    description: "理論を形に。小さくとも、動くものを。",
  },
  {
    phase: "IV",
    title: "発展",
    titleEn: "Evolution",
    description: "精度を高め、実用へと近づける。",
  },
  {
    phase: "V",
    title: "実装",
    titleEn: "Implementation",
    description: "社会に届ける。救える命のために。",
  },
]

export function Timeline() {
  return (
    <div className="relative">
      <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border" />

      <div className="space-y-12">
        {milestones.map((milestone, index) => (
          <div key={index} className="relative pl-10">
            <div className="absolute left-0 top-1.5 w-4 h-4 flex items-center justify-center border border-foreground/30 bg-background">
              <span className="text-[8px] font-sans font-semibold">{milestone.phase}</span>
            </div>

            <div className="space-y-1">
              <h3 className="text-base">
                {milestone.title}
                <span className="ml-3 text-xs text-muted-foreground font-sans tracking-wider">
                  {milestone.titleEn}
                </span>
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {milestone.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
