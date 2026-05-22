import Section from "@/components/Section"

const steps = [
  { step: "01", title: "Briefing", desc: "Entendemos suas necessidades e objetivos" },
  { step: "02", title: "Estratégia", desc: "Planejamos a melhor abordagem para o projeto" },
  { step: "03", title: "Execução", desc: "Colocamos o plano em ação com excelência" },
  { step: "04", title: "Entrega", desc: "Resultados mensuráveis e suporte contínuo" },
]

export default function Process({ c2 }: { c2: string }) {
  return (
    <Section className="py-16 sm:py-20" id="processo">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-10 text-center sm:mb-12">
          <div className="mb-1.5 text-[10px] font-bold tracking-[0.3em] uppercase" style={{ color: c2 }}>Processo</div>
          <h2 className="font-display text-2xl font-black uppercase tracking-[-0.02em] sm:text-3xl md:text-4xl">Como<br /><span style={{ color: c2 }}>trabalhamos</span></h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <div key={s.step} className="border px-5 py-8 text-center transition-all sm:px-6 sm:py-10 rounded-md" style={{ borderColor: "var(--line)", backgroundColor: "var(--bg)" }}>
              <div className="font-display text-3xl font-black sm:text-4xl" style={{ color: `${c2}20` }}>{s.step}</div>
              <h3 className="font-display text-sm font-black mt-2 sm:text-base">{s.title}</h3>
              <p className="mt-1 text-xs leading-relaxed sm:text-sm" style={{ color: "var(--muted)" }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
