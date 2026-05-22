import Section from "@/components/Section"

const plans = [
  { name: "Básico", price: "R$ 99", desc: "Para quem está começando" },
  { name: "Profissional", price: "R$ 199", desc: "Para negócios em crescimento", featured: true },
  { name: "Enterprise", price: "R$ 399", desc: "Para empresas consolidadas" },
]

export default function Pricing({ c2 }: { c2: string }) {
  return (
    <Section className="py-16 sm:py-20" id="planos">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-10 text-center sm:mb-12">
          <div className="mb-1.5 text-[10px] font-bold tracking-[0.3em] uppercase" style={{ color: c2 }}>Planos</div>
          <h2 className="font-display text-2xl font-black uppercase tracking-[-0.02em] sm:text-3xl md:text-4xl">Nossos<br /><span style={{ color: c2 }}>planos</span></h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((p) => (
            <div key={p.name} className="relative border px-6 py-8 text-center transition-all sm:px-8 sm:py-10 rounded-md" style={{ borderColor: p.featured ? c2 : "var(--line)", backgroundColor: p.featured ? `${c2}08` : "var(--bg)" }}>
              {p.featured && <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 text-[9px] font-bold tracking-[0.12em] uppercase text-white rounded-sm" style={{ backgroundColor: c2 }}>Popular</div>}
              <h3 className="font-display text-base font-black sm:text-lg">{p.name}</h3>
              <div className="font-display text-3xl font-black mt-2 sm:text-4xl" style={{ color: c2 }}>{p.price}</div>
              <p className="mt-2 text-xs sm:text-sm" style={{ color: "var(--muted)" }}>{p.desc}</p>
              <a href="https://wa.me/5547XXXXXXXX" className="mt-4 inline-block border px-5 py-2 text-[10px] font-bold tracking-[0.12em] uppercase transition-all rounded-md sm:px-6" style={{ borderColor: `${c2}30`, color: c2 }}>
                CONTRATAR
              </a>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
