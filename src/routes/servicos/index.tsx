import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import { CTASection } from "../../components/CTASection";
import { services } from "../../content/services";
import { ScrollReveal } from "../../components/animations/ScrollReveal";
import { TextReveal } from "../../components/animations/TextReveal";

export const Route = createFileRoute("/servicos/")({
  head: () => ({
    meta: [
      { title: "Serviços — DC SERVICE, LDA" },
      { name: "description", content: "Dez áreas de atuação: consultoria, informática, cibersegurança, contabilidade, RH, logística, procurement, parcerias e comércio internacional." },
      { property: "og:title", content: "Serviços — DC SERVICE, LDA" },
      { property: "og:description", content: "Todas as áreas de atuação da DC SERVICE, LDA." },
      { property: "og:url", content: "/servicos" },
    ],
    links: [{ rel: "canonical", href: "/servicos" }],
  }),
  component: ServicesIndex,
});

function ServicesIndex() {
  return (
    <>
      {/* ══════════════════════════════════════════════════════════════════
          HERO — Dark Section with Image
      ══════════════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-[#0A0A0F] pt-32 pb-24 lg:pt-40 lg:pb-32">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1554200876-56c2f25224fa?auto=format&fit=crop&q=80&w=1920" alt="Corporate" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0F] via-[#0A0A0F]/80 to-[#0A0A0F]/20" />
          <div className="absolute inset-0 bg-[#0A0A0F]/60 mix-blend-multiply" />
        </div>

        <div className="container-page relative z-10">
          <Breadcrumbs items={[{ label: "Serviços" }]} />
          
          <div className="mt-8">
            <ScrollReveal>
              <h1 className="max-w-3xl font-display text-4xl sm:text-5xl md:text-6xl text-white leading-tight">
                <TextReveal text="Serviços empresariais entregues por uma única equipa." />
              </h1>
              <p className="mt-6 max-w-2xl text-xl leading-relaxed text-white/70">
                Dez áreas complementares, com metodologia formal, indicadores mensuráveis e um único ponto de contacto.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SERVICES GRID — Light Section
      ══════════════════════════════════════════════════════════════════ */}
      <section className="section-light py-20 lg:py-32 bg-[#F8FAFC]">
        <div className="container-page">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, index) => (
              <ScrollReveal key={s.slug} delay={index * 0.05}>
                <Link
                  to="/servicos/$slug"
                  params={{ slug: s.slug }}
                  className="group relative flex h-full flex-col rounded-3xl border border-[#E2E8F0] bg-white p-8 transition-all duration-500 hover:-translate-y-2 hover:border-cyan-brand/40 hover:shadow-[0_20px_40px_-15px_rgba(34,182,234,0.15)] overflow-hidden z-10"
                >
                  <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-cyan-brand/5 blur-2xl transition-all duration-500 group-hover:bg-cyan-brand/10 group-hover:scale-150 pointer-events-none -z-10" />
                  
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F1F5F9] text-[#0A1F44] transition-all duration-500 group-hover:bg-cyan-brand group-hover:text-white group-hover:shadow-[0_0_20px_rgba(34,182,234,0.4)] group-hover:-rotate-6">
                    <s.icon className="h-6 w-6" />
                  </span>
                  
                  <h2 className="mt-8 font-display text-2xl text-[#0A1F44] transition-colors group-hover:text-cyan-brand">{s.title}</h2>
                  <p className="mt-4 flex-1 text-base leading-relaxed text-[#64748B] group-hover:text-[#64748B]/80">{s.short}</p>
                  
                  <div className="mt-8 flex items-center gap-2 text-sm font-bold tracking-wider uppercase text-[#0A1F44] transition-colors group-hover:text-cyan-brand">
                    Ver detalhes 
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
