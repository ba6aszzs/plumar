import Section from "@/components/Section"

export default function Portfolio({ c2 }: { c2: string }) {
  return (
    <Section className="py-16 sm:py-20" style={{ backgroundColor: "var(--bg)" }} id="portfolio">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-10 text-center sm:mb-12">
          <div className="mb-1.5 text-[10px] font-bold tracking-[0.3em] uppercase" style={{ color: c2 }}>Portfólio</div>
          <h2 className="font-display text-2xl font-black uppercase tracking-[-0.02em] sm:text-3xl md:text-4xl">Cases de<br /><span style={{ color: c2 }}>sucesso</span></h2>
        </div>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {[1,2,3].map((i) => (
            <div key={i} className="flex aspect-video items-center justify-center border rounded-md" style={{ borderColor: "var(--line)", backgroundColor: `${c2}08` }}>
              <span className="text-xs font-bold uppercase tracking-wider" style={{ color: `${c2}40` }}>Case {i}</span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
