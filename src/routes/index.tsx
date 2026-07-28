import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, Shield, Zap, Globe2 } from "lucide-react";
import hero from "../assets/image hero setion dc service.jpeg";
import { services } from "../content/services";
import { stats, pillars, processSteps, testimonials, company, faqs } from "../content/company";
import { StatCounter } from "../components/StatCounter";
import { CTASection } from "../components/CTASection";
import { InteractiveServices } from "../components/InteractiveServices";
import { motion } from "framer-motion";
import { TextReveal } from "../components/animations/TextReveal";
import { ScrollReveal } from "../components/animations/ScrollReveal";
import { ClientMarquee } from "../components/ClientMarquee";
import { FAQAccordion } from "../components/FAQAccordion";

export const Route = createFileRoute("/")(
  {
  head: () => ({
    meta: [
      { title: "DC SERVICE, LDA — Soluções Empresariais Integradas" },
      { name: "description", content: "Consultoria, tecnologia, cibersegurança, logística, procurement, RH, contabilidade e comércio internacional. Um único parceiro para as suas operações." },
      { property: "og:title", content: "DC SERVICE, LDA — Soluções Empresariais Integradas" },
      { property: "og:description", content: "Um parceiro corporativo em Moçambique para consultoria, tecnologia, logística e comércio internacional." },
      { property: "og:url", content: "/" },
    ],
    links: [
      { rel: "canonical", href: "/" },
      { rel: "preload", as: "image", href: hero, fetchPriority: "high" },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      {/* ══════════════════════════════════════════════════════════════════
          HERO — 2-Column Dark, Image Mask + Gradient + Dot Grid
      ══════════════════════════════════════════════════════════════════ */}
      <section className="relative flex min-h-[95vh] items-center overflow-hidden pb-20 pt-32 bg-[#0A0A0F]">
        {/* Dot grid overlay */}
        <div className="absolute inset-0 z-0 bg-dot-grid opacity-40" />
        {/* Radial glow placed slightly to the right */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[800px] h-[800px] z-0 bg-[radial-gradient(ellipse_at_center,rgba(34,182,234,0.12)_0%,transparent_70%)] animate-pulse-slow" />
        
        <div className="container-page relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          
          {/* TEXT COLUMN */}
          <div>
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
              className="glass max-w-fit inline-flex items-center gap-3 rounded-full px-5 py-2 text-xs font-semibold tracking-widest text-white uppercase mb-8"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-brand shadow-[0_0_8px_rgba(34,182,234,0.8)]" />
              Consultoria · Tecnologia · Internacional
            </motion.div>
            
            <TextReveal 
              text="Soluções empresariais integradas para operações de excelência."
              highlightWords={["integradas"]}
              highlightClass="text-cyan-brand italic neon-text"
              className="font-display text-5xl leading-[1.1] tracking-tight text-white sm:text-6xl lg:text-[4.5rem]"
              delay={0.1}
            />
            
            <motion.p 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}
              className="mt-8 max-w-xl text-lg font-light leading-relaxed text-white/60 sm:text-xl"
            >
              Um único parceiro para consultoria, tecnologia, segurança cibernética, logística,
              procurement, recursos humanos, contabilidade e comércio internacional em Moçambique.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2, type: "spring", stiffness: 100 }}
              className="mt-12 flex flex-wrap items-center gap-4"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/orcamento" className="group inline-flex items-center gap-2 rounded-full bg-cyan-brand px-8 py-4 text-sm font-bold tracking-wide text-[#0A0A0F] transition-all hover:shadow-[0_0_30px_rgba(34,182,234,0.4)]">
                  Solicitar Orçamento <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>
              <motion.a
                whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                href={`https://wa.me/${company.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full glass px-8 py-4 text-sm font-medium tracking-wide text-white transition-all hover:border-cyan-brand/30"
              >
                Falar no WhatsApp
              </motion.a>
            </motion.div>
          </div>

          {/* IMAGE COLUMN */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
            className="relative hidden lg:block"
          >
            <div className="relative mx-auto max-w-[500px] animate-float">
              {/* Decorative background glow matching the mask shape */}
              <div className="absolute -inset-1 rounded-[40px] rounded-tl-[120px] rounded-br-[120px] bg-gradient-to-tr from-cyan-brand/40 to-transparent blur-2xl opacity-60" />
              
              {/* Mask container */}
              <div className="relative overflow-hidden rounded-[40px] rounded-tl-[120px] rounded-br-[120px] border border-white/10 shadow-2xl bg-[#111118]">
                <img
                  src={hero}
                  alt="Soluções Empresariais DC Service"
                  className="w-full object-cover h-[650px] transition-transform duration-1000 hover:scale-105"
                />
                {/* Subtle glass overlay gradient to tie it into the dark theme */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0F]/60 via-transparent to-transparent pointer-events-none" />
                <div className="absolute inset-0 border border-white/5 rounded-[40px] rounded-tl-[120px] rounded-br-[120px] pointer-events-none" />
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          CLIENT MARQUEE — Trust Banner
      ══════════════════════════════════════════════════════════════════ */}
      <ClientMarquee />

      {/* ══════════════════════════════════════════════════════════════════
          QUEM SOMOS — Light Section
      ══════════════════════════════════════════════════════════════════ */}
      <section className="section-light py-32">
        <div className="container-page">
          <ScrollReveal>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-brand mb-8">
              Quem Somos
            </p>
          </ScrollReveal>
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-8">
              <ScrollReveal delay={0.1}>
                <h2 className="font-display text-5xl leading-tight text-[#0A1F44] sm:text-6xl md:text-7xl">
                  Um parceiro corporativo sério, moderno e <span className="italic text-cyan-brand">multidisciplinar.</span>
                </h2>
              </ScrollReveal>
            </div>
            <div className="lg:col-span-4 lg:pt-4">
              <ScrollReveal delay={0.2}>
                <p className="text-lg font-light leading-relaxed text-[#64748B] mb-6">
                  A DC SERVICE, LDA foi construída para servir organizações que exigem rigor, discrição
                  e resultados mensuráveis. Combinamos experiência sectorial com uma cultura de execução
                  disciplinada.
                </p>
                <Link to="/quem-somos" className="group inline-flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-[#0A1F44] hover:text-cyan-brand transition-colors">
                  Conhecer a empresa <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-2" />
                </Link>
              </ScrollReveal>
            </div>
          </div>
          
          {/* STATS */}
          <div className="mt-32 grid grid-cols-2 gap-x-8 gap-y-16 border-t border-[#E2E8F0] pt-16 md:grid-cols-4">
            {stats.map((s, idx) => (
              <ScrollReveal key={s.label} delay={0.1 * idx}>
                <StatCounter value={s.value} suffix={s.suffix} label={s.label} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SERVIÇOS — Dark Section with Dot Grid & Radial Glow
      ══════════════════════════════════════════════════════════════════ */}
      <section className="relative section-dark py-32 overflow-hidden">
        {/* Dot grid background */}
        <div className="absolute inset-0 bg-dot-grid opacity-50" />
        {/* Radial glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_center,rgba(34,182,234,0.06)_0%,transparent_60%)] animate-pulse-slow" />
        
        <div className="container-page relative z-10">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
              <div className="max-w-3xl">
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-brand mb-6">Áreas de atuação</p>
                <h2 className="font-display text-5xl text-white sm:text-6xl">Serviços <span className="text-cyan-brand neon-text italic">Integrados</span></h2>
              </div>
              <Link to="/servicos" className="group inline-flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-white/70 hover:text-cyan-brand transition-colors">
                Explorar Áreas <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-2" />
              </Link>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2}>
            <InteractiveServices services={services} />
          </ScrollReveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          PILARES & PROCESSO — Light Section with Glass Cards
      ══════════════════════════════════════════════════════════════════ */}
      <section className="section-light py-32">
        <div className="container-page">
          <div className="grid lg:grid-cols-12 gap-20">
            {/* Pilares */}
            <div className="lg:col-span-6">
              <ScrollReveal>
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-brand mb-6">Porque escolher</p>
                <h2 className="font-display text-4xl text-[#0A1F44] sm:text-5xl mb-16">
                  A nova forma de contratar.
                </h2>
              </ScrollReveal>
              <div className="grid gap-6 sm:grid-cols-2">
                {pillars.map((p, i) => {
                  const Icon = [Shield, Zap, Check, Globe2][i] ?? Check;
                  return (
                    <ScrollReveal key={p.title} delay={0.1 * i}>
                      <div className="rounded-2xl border border-[#E2E8F0] bg-white p-6 transition-all hover:border-cyan-brand/30 hover:shadow-[0_0_30px_-5px_rgba(34,182,234,0.1)]">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-brand/10 mb-5">
                          <Icon className="h-6 w-6 text-cyan-brand" strokeWidth={1.5} />
                        </div>
                        <h3 className="text-lg font-semibold text-[#0A1F44] mb-2">{p.title}</h3>
                        <p className="text-sm font-light leading-relaxed text-[#64748B]">{p.text}</p>
                      </div>
                    </ScrollReveal>
                  );
                })}
              </div>
            </div>
            
            {/* Processo */}
            <div className="lg:col-span-6">
               <ScrollReveal>
                 <p className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-brand mb-6">Como trabalhamos</p>
                 <h2 className="font-display text-4xl text-[#0A1F44] sm:text-5xl mb-16">
                   Método disciplinado.
                 </h2>
               </ScrollReveal>
               <div className="space-y-8">
                 {processSteps.map((s, i) => (
                   <ScrollReveal key={s.n} delay={0.1 * i}>
                     <div className="flex gap-6 group rounded-2xl border border-[#E2E8F0] bg-white p-6 transition-all hover:border-cyan-brand/30 hover:shadow-[0_0_30px_-5px_rgba(34,182,234,0.1)]">
                       <div className="font-display text-5xl text-[#0A1F44]/10 transition-colors group-hover:text-cyan-brand/30">{s.n}</div>
                       <div>
                         <h3 className="text-lg font-semibold text-[#0A1F44] mb-2">{s.title}</h3>
                         <p className="text-sm font-light leading-relaxed text-[#64748B]">{s.text}</p>
                       </div>
                     </div>
                   </ScrollReveal>
                 ))}
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          TESTEMUNHOS — Dark Section with Glassmorphism Cards
      ══════════════════════════════════════════════════════════════════ */}
      <section className="relative section-dark py-32 overflow-hidden">
        {/* Dot grid */}
        <div className="absolute inset-0 bg-dot-grid opacity-30" />
        {/* Radial glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_center,rgba(34,182,234,0.05)_0%,transparent_60%)] animate-pulse-slow" />
        
        <div className="container-page relative z-10">
          <ScrollReveal>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-brand mb-4 text-center">
              Reputação
            </p>
            <h2 className="font-display text-4xl text-white sm:text-5xl text-center mb-16">
              O que dizem de <span className="text-cyan-brand neon-text italic">nós.</span>
            </h2>
          </ScrollReveal>
          <div className="grid gap-8 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <ScrollReveal key={t.author} delay={0.1 * i}>
                <figure className="flex flex-col h-full rounded-2xl glass-card p-8 transition-all hover:glass-card-hover">
                  <blockquote className="flex-1 font-display text-xl leading-relaxed text-white/80 italic">
                    "{t.quote}"
                  </blockquote>
                  <figcaption className="mt-8 pt-6 border-t border-white/[0.06]">
                    <div className="text-sm font-bold tracking-wide text-white">{t.author}</div>
                    <div className="mt-1 text-xs text-white/40 uppercase tracking-widest">{t.role}</div>
                  </figcaption>
                </figure>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          FAQS — Light Section
      ══════════════════════════════════════════════════════════════════ */}
      <section className="section-light py-32">
        <div className="container-page">
          <ScrollReveal>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-brand mb-4 text-center">
              Dúvidas
            </p>
            <h2 className="font-display text-4xl text-[#0A1F44] sm:text-5xl text-center mb-16">
              Perguntas Frequentes
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <FAQAccordion items={faqs} />
          </ScrollReveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
// End of file
