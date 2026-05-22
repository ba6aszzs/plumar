import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section className="relative flex min-h-[100dvh] items-center overflow-hidden bg-[#1C1917]">
      {/* Textura de papel */}
      <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23F5F0E8' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} />
      
      {/* Livros decorativos */}
      {[30, 50, 25, 45].map((h, i) => (
        <motion.div
          key={i}
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 5 + i * 0.5, repeat: Infinity }}
          className="absolute w-3 opacity-[0.04]"
          style={{ height: `${h}px`, backgroundColor: "#F5F0E8", right: `${20 + i * 18}%`, bottom: "15%" }}
        />
      ))}

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 sm:px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
          className="max-w-2xl">
          <span className="inline-block border px-3 py-1.5 text-[10px] font-bold tracking-[0.2em] uppercase text-[#F5F0E8]/60 mb-6" style={{ borderColor: "rgba(245,240,232,0.08)" }}>Editora</span>
          <h1 className="font-display text-[clamp(3rem,13vw,6rem)] font-black leading-[0.85] tracking-[-0.02em] text-[#F5F0E8]">
            PLUMAR
          </h1>
          <p className="mt-5 max-w-lg text-sm leading-relaxed sm:text-base" style={{ color: "rgba(245,240,232,0.35)" }}>
            Histórias que inspiram. Literatura, poesia, ensaios e ficção — cada livro é uma janela para novos mundos.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a href="#servicos" className="flex min-h-12 items-center justify-center bg-[#F5F0E8] px-8 text-xs font-bold tracking-[0.12em] uppercase text-[#1C1917] transition-all hover:bg-white sm:min-h-0 sm:py-3.5">CATÁLOGO</a>
            <a href="https://wa.me/5547XXXXXXXX" className="flex min-h-12 items-center justify-center border px-8 text-xs font-bold tracking-[0.12em] uppercase transition-all sm:min-h-0 sm:py-3.5" style={{ borderColor: "rgba(245,240,232,0.1)", color: "rgba(245,240,232,0.5)" }}>CONTATO</a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
