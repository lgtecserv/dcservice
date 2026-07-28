import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "./animations/ScrollReveal";
import { motion } from "framer-motion";

export function CTASection() {
  return (
    <section className="relative overflow-hidden section-dark-alt py-24 sm:py-32">
      {/* Dot grid */}
      <div className="absolute inset-0 bg-dot-grid opacity-30" />
      {/* Radial glow from center */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(34,182,234,0.08)_0%,transparent_60%)]" />
      
      <div className="container-page relative z-10">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-brand mb-6">
              Vamos trabalhar juntos
            </p>
            <h2 className="font-display text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
              Pronto para elevar a operação da sua <span className="text-cyan-brand neon-text italic">empresa?</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-white/50 max-w-xl mx-auto">
              Marque uma conversa exploratória sem compromisso. Em 30 minutos ajudamos a clarificar
              objetivos e próximos passos.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/orcamento"
                  className="inline-flex items-center gap-2 rounded-full bg-cyan-brand px-8 py-4 text-sm font-bold text-[#0A0A0F] transition-all hover:shadow-[0_0_30px_rgba(34,182,234,0.4)]"
                >
                  Solicitar Orçamento
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/contactos"
                  className="inline-flex items-center rounded-full glass px-8 py-4 text-sm font-medium text-white transition-all hover:border-cyan-brand/30"
                >
                  Falar Connosco
                </Link>
              </motion.div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
