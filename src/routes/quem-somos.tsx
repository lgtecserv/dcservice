import { createFileRoute } from "@tanstack/react-router";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { CTASection } from "../components/CTASection";
import { ScrollReveal } from "../components/animations/ScrollReveal";
import { TextReveal } from "../components/animations/TextReveal";
import aboutImg from "../assets/about-team.jpg";

export const Route = createFileRoute("/quem-somos")({
  head: () => ({
    meta: [
      { title: "Quem Somos — DC SERVICE, LDA" },
      { name: "description", content: "Conheça a DC SERVICE, LDA: missão, visão, valores e metodologia de uma empresa multidisciplinar em Moçambique." },
      { property: "og:title", content: "Quem Somos — DC SERVICE, LDA" },
      { property: "og:description", content: "Missão, visão, valores e metodologia da DC SERVICE, LDA." },
      { property: "og:url", content: "/quem-somos" },
    ],
    links: [{ rel: "canonical", href: "/quem-somos" }],
  }),
  component: About,
});

const values = [
  { title: "Rigor", text: "Compromissos claros, medidos e cumpridos." },
  { title: "Confidencialidade", text: "Discrição absoluta em cada engajamento." },
  { title: "Excelência", text: "Padrão internacional, executado localmente." },
  { title: "Parceria", text: "Relação de longo prazo, orientada a resultados." },
];

const timeline = [
  { year: "2010", title: "Fundação", text: "Início da atividade em Maputo com foco em consultoria e informática." },
  { year: "2014", title: "Expansão", text: "Alargamento a serviços de logística, procurement e recursos humanos." },
  { year: "2019", title: "Cibersegurança", text: "Criação da unidade de segurança cibernética e serviços geridos." },
  { year: "2023", title: "Comércio Internacional", text: "Operações estruturadas de importação e exportação na SADC." },
  { year: "Hoje", title: "Multidisciplinar", text: "Dez áreas de atuação sob uma única marca corporativa." },
];

function About() {
  return (
    <>
      {/* ══════════════════════════════════════════════════════════════════
          HERO — Dark Section
      ══════════════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-[#0A0A0F] pt-32 pb-24 lg:pt-40 lg:pb-32">
        <div className="absolute inset-0 z-0">
          <img src={aboutImg} alt="Equipa da DC SERVICE em reunião" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0F] via-[#0A0A0F]/80 to-[#0A0A0F]/20" />
          <div className="absolute inset-0 bg-[#0A0A0F]/50 mix-blend-multiply" />
        </div>

        <div className="container-page relative z-10">
          <Breadcrumbs items={[{ label: "Quem Somos" }]} />
          
          <div className="mt-8 max-w-4xl">
            <ScrollReveal>
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl text-white leading-tight">
                <TextReveal text="Um parceiro corporativo, construído para durar." />
              </h1>
              <p className="mt-8 text-xl leading-relaxed text-white/70">
                Nascemos em Moçambique com a ambição de oferecer serviços empresariais ao padrão que os melhores mercados exigem — sem prescindir do conhecimento profundo da realidade local.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          MISSÃO / VISÃO / COMPROMISSO — Light Section
      ══════════════════════════════════════════════════════════════════ */}
      <section className="section-light py-20 lg:py-32">
        <div className="container-page">
          <div className="grid gap-8 md:grid-cols-3">
            <ScrollReveal delay={0.1}>
              <div className="rounded-3xl border border-[#E2E8F0] bg-white p-10 h-full shadow-sm transition-all duration-300 hover:shadow-md hover:border-cyan-brand/30">
                <div className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-brand mb-4">O que fazemos</div>
                <h2 className="font-display text-3xl text-[#0A1F44] mb-4">Missão</h2>
                <p className="text-[#64748B] leading-relaxed">
                  Fornecer soluções empresariais integradas que aumentam a competitividade, a eficiência
                  e a segurança das organizações que servimos.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="rounded-3xl border border-[#E2E8F0] bg-[#F8FAFC] p-10 h-full shadow-sm transition-all duration-300 hover:shadow-md hover:border-cyan-brand/30">
                <div className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-brand mb-4">Onde vamos</div>
                <h2 className="font-display text-3xl text-[#0A1F44] mb-4">Visão</h2>
                <p className="text-[#64748B] leading-relaxed">
                  Ser reconhecida como a empresa multidisciplinar de referência em Moçambique e um
                  parceiro credível para operações regionais na África Austral.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <div className="rounded-3xl border border-[#E2E8F0] bg-white p-10 h-full shadow-sm transition-all duration-300 hover:shadow-md hover:border-cyan-brand/30">
                <div className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-brand mb-4">Como agimos</div>
                <h2 className="font-display text-3xl text-[#0A1F44] mb-4">Compromisso</h2>
                <p className="text-[#64748B] leading-relaxed">
                  Cumprir o que prometemos, com transparência, ética e responsabilidade em cada
                  interação com clientes, parceiros e colaboradores.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          VALORES — Light Section (Gray Background)
      ══════════════════════════════════════════════════════════════════ */}
      <section className="section-light py-20 lg:py-32 bg-[#F1F5F9]">
        <div className="container-page">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-brand mb-4">Os Nossos Princípios</p>
              <h2 className="font-display text-4xl text-[#0A1F44] sm:text-5xl">Valores Fundamentais</h2>
            </div>
          </ScrollReveal>
          
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, index) => (
              <ScrollReveal key={v.title} delay={index * 0.1}>
                <div className="group rounded-2xl border border-[#E2E8F0] bg-white p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#F8FAFC] text-[#0A1F44] transition-colors group-hover:bg-cyan-brand group-hover:text-white mb-6">
                    <span className="font-display text-2xl">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#0A1F44] mb-3">{v.title}</h3>
                  <p className="text-sm leading-relaxed text-[#64748B]">{v.text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          TRAJETÓRIA — Light Section
      ══════════════════════════════════════════════════════════════════ */}
      <section className="section-light py-20 lg:py-32 bg-white">
        <div className="container-page max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-20">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-brand mb-4">O Nosso Caminho</p>
              <h2 className="font-display text-4xl text-[#0A1F44] sm:text-5xl">A Nossa Trajetória</h2>
            </div>
            
            <div className="relative border-l-2 border-[#E2E8F0] pl-8 md:pl-12 ml-4 md:ml-0">
              {timeline.map((t, i) => (
                <div key={t.year} className="relative pb-16 last:pb-0 group">
                  {/* Timeline Dot */}
                  <span className="absolute -left-[41px] md:-left-[57px] flex h-5 w-5 items-center justify-center rounded-full bg-white border-2 border-cyan-brand shadow-[0_0_10px_rgba(34,182,234,0.5)] transition-transform duration-300 group-hover:scale-125" />
                  
                  <div className="rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-8 transition-all duration-300 group-hover:border-cyan-brand/30 group-hover:bg-white group-hover:shadow-md">
                    <div className="text-sm font-bold tracking-[0.2em] text-cyan-brand mb-2">{t.year}</div>
                    <h3 className="text-2xl font-display text-[#0A1F44] mb-3">{t.title}</h3>
                    <p className="text-base text-[#64748B] leading-relaxed">{t.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
