import Section from "@/components/Section"

const services = [
  { title: "Serviço 1", desc: "Descrição do serviço 1", icon: "🎯" },
  { title: "Serviço 2", desc: "Descrição do serviço 2", icon: "⚡" },
  { title: "Serviço 3", desc: "Descrição do serviço 3", icon: "🚀" },
  { title: "Serviço 4", desc: "Descrição do serviço 4", icon: "💡" },
  { title: "Serviço 5", desc: "Descrição do serviço 5", icon: "📊" },
  { title: "Serviço 6", desc: "Descrição do serviço 6", icon: "🎨" },
]

export default function Services({ c2 }: { c2: string }) {
  return (
    <Section className="py-16 sm:py-20" id="servicos">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-10 text-center sm:mb-12">
          <div className="mb-1.5 text-[10px] font-bold tracking-[0.3em] uppercase" style={{ color: c2 }}>Serviços</div>
          <h2 className="font-display text-2xl font-black uppercase tracking-[-0.02em] sm:text-3xl md:text-4xl">Nossos<br /><span style={{ color: c2 }}>serviços</span></h2>
        </div>
        <div className="grid grid-cols-1 gap-px sm:grid-cols-2 lg:grid-cols-3" style={{ backgroundColor: "var(--line)" }}>
          {services.map((s) => (
            <div key={s.title} className="px-5 py-8 text-center transition-colors sm:px-6 sm:py-10" style={{ backgroundColor: "var(--bg)" }}>
              <div className="text-3xl mb-3">{s.icon}</div>
              <h3 className="font-display text-sm font-black sm:text-base">{s.title}</h3>
              <p className="mt-2 text-xs leading-relaxed sm:text-sm" style={{ color: "var(--muted)" }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
