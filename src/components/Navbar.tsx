import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1C1917]/90 backdrop-blur-lg border-b" style={{ borderColor: "rgba(245,240,232,0.04)" }}>
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6">
        <a href="#" className="font-display text-lg font-black tracking-[0.15em] uppercase text-[#F5F0E8]">PLUMAR</a>
        <div className="hidden items-center gap-8 md:flex">
          <a href="#processo" className="text-[11px] font-bold tracking-[0.12em] uppercase transition-colors" style={{ color: "rgba(245,240,232,0.3)" }}>Processo</a>
          <a href="#servicos" className="text-[11px] font-bold tracking-[0.12em] uppercase transition-colors" style={{ color: "rgba(245,240,232,0.3)" }}>Serviços</a>
          <a href="#portfolio" className="text-[11px] font-bold tracking-[0.12em] uppercase transition-colors" style={{ color: "rgba(245,240,232,0.3)" }}>Catálogo</a>
          <a href="#planos" className="text-[11px] font-bold tracking-[0.12em] uppercase transition-colors" style={{ color: "rgba(245,240,232,0.3)" }}>Planos</a>
          <a href="https://wa.me/5547XXXXXXXX" className="bg-[#F5F0E8] px-5 py-2.5 text-[11px] font-bold tracking-[0.12em] uppercase text-[#1C1917] transition-all hover:bg-white">CONTATO</a>
        </div>
        <button className="relative z-50 flex size-11 items-center justify-center md:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
          <div className="flex flex-col gap-1"><motion.span animate={open ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }} className="block h-0.5 w-5 bg-[#F5F0E8]" /><motion.span animate={open ? { opacity: 0 } : { opacity: 1 }} className="block h-0.5 w-5 bg-[#F5F0E8]" /><motion.span animate={open ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }} className="block h-0.5 w-5 bg-[#F5F0E8]" /></div>
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden border-t bg-[#1C1917]" style={{ borderColor: "rgba(245,240,232,0.04)" }}>
            <div className="flex flex-col gap-1 px-4 py-4 sm:px-6">
              <a href="#processo" onClick={() => setOpen(false)} className="flex min-h-11 items-center rounded px-4 text-[11px] font-bold tracking-[0.12em] uppercase" style={{ color: "rgba(245,240,232,0.3)" }}>Processo</a>
              <a href="#servicos" onClick={() => setOpen(false)} className="flex min-h-11 items-center rounded px-4 text-[11px] font-bold tracking-[0.12em] uppercase" style={{ color: "rgba(245,240,232,0.3)" }}>Serviços</a>
              <a href="#portfolio" onClick={() => setOpen(false)} className="flex min-h-11 items-center rounded px-4 text-[11px] font-bold tracking-[0.12em] uppercase" style={{ color: "rgba(245,240,232,0.3)" }}>Catálogo</a>
              <a href="#planos" onClick={() => setOpen(false)} className="flex min-h-11 items-center rounded px-4 text-[11px] font-bold tracking-[0.12em] uppercase" style={{ color: "rgba(245,240,232,0.3)" }}>Planos</a>
              <a href="https://wa.me/5547XXXXXXXX" className="mt-2 flex min-h-11 items-center justify-center bg-[#F5F0E8] px-4 text-[11px] font-bold tracking-[0.12em] uppercase text-[#1C1917]">CONTATO</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
