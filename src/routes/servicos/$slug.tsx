import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, Check, X } from "lucide-react";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import { ContactForm } from "../../components/ContactForm";
import { CTASection } from "../../components/CTASection";
import { FAQAccordion } from "../../components/FAQAccordion";
import { TextReveal } from "../../components/animations/TextReveal";
import { ScrollReveal } from "../../components/animations/ScrollReveal";
import { services, getService } from "../../content/services";
import serviceDetailImg from "../../assets/service_detail.png";

export const Route = createFileRoute("/servicos/$slug")({
  loader: ({ params }) => {
    const service = getService(params.slug);
    if (!service) throw notFound();
    return { slug: params.slug };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Serviço não encontrado" }, { name: "robots", content: "noindex" }] };
    }
    const s = getService(loaderData.slug);
    if (!s) return {};
    return {
      meta: [
        { title: `${s.title} — DC SERVICE, LDA` },
        { name: "description", content: s.short },
        { property: "og:title", content: `${s.title} — DC SERVICE, LDA` },
        { property: "og:description", content: s.short },
        { property: "og:type", content: "website" },
        { property: "og:url", content: `/servicos/${s.slug}` },
      ],
      links: [{ rel: "canonical", href: `/servicos/${s.slug}` }],
      scripts: [{
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: s.title,
          description: s.short,
          provider: { "@type": "Organization", name: "DC SERVICE, LDA" },
          areaServed: "MZ",
        }),
      }],
    };
  },
  component: ServiceDetail,
});

function ServiceDetail() {
  const { slug } = Route.useLoaderData();
  const s = getService(slug)!;
  const Icon = s.icon;
  const related = services.filter((x) => x.slug !== s.slug).slice(0, 3);

  // Mapear FAQs para o formato exigido pelo FAQAccordion
  const mappedFaqs = s.faqs.map(f => ({ question: f.q, answer: f.a }));

  return (
    <>
      {/* ══════════════════════════════════════════════════════════════════
          HERO — Dark Section with Image
      ══════════════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-[#0A0A0F] pt-32 pb-24 lg:pt-40 lg:pb-32">
        {/* Background Image with Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <img src={s.image} alt={s.title} className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0F] via-[#0A0A0F]/80 to-[#0A0A0F]/20" />
          <div className="absolute inset-0 bg-[#0A0A0F]/60 mix-blend-multiply" />
        </div>

        <div className="container-page relative z-10">
          <Breadcrumbs items={[{ label: "Serviços", href: "/servicos" }, { label: s.title }]} />
          
          <div className="mt-8 grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <ScrollReveal>
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md mb-6 shadow-[0_0_30px_rgba(34,182,234,0.15)] animate-float">
                  <Icon className="h-8 w-8 text-cyan-brand" />
                </div>
                <h1 className="font-display text-4xl sm:text-5xl md:text-6xl text-white leading-tight">
                  <TextReveal text={s.title} />
                </h1>
                <p className="mt-6 text-xl leading-relaxed text-white/70 max-w-3xl">
                  {s.intro}
                </p>
                <div className="mt-10 flex flex-wrap gap-4">
                  <Link to="/orcamento" className="inline-flex items-center justify-center gap-2 rounded-lg bg-cyan-brand px-8 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-cyan-hover hover:scale-105 hover:shadow-[0_0_20px_rgba(34,182,234,0.3)]">
                    Pedir Orçamento <ArrowRight className="h-4 w-4" />
                  </Link>
                  <a href="#formulario" className="inline-flex items-center justify-center rounded-lg border border-white/20 bg-white/5 px-8 py-4 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white/30">
                    Contactar Equipa
                  </a>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          BODY — Light Section
      ══════════════════════════════════════════════════════════════════ */}
      <section className="section-light py-20 lg:py-32">
        <div className="container-page">
          <div className="grid gap-16 lg:grid-cols-12">
            
            {/* Left Content Column */}
            <div className="lg:col-span-8 space-y-20">
              
              <ScrollReveal>
                <div className="relative w-full h-[350px] md:h-[450px] mb-12 rounded-[2rem] overflow-hidden shadow-2xl group">
                  <img src={serviceDetailImg} alt="Visualização do serviço" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1F44]/40 to-transparent" />
                  <div className="absolute inset-0 border border-white/20 rounded-[2rem] pointer-events-none" />
                </div>
                <div className="prose prose-lg max-w-none text-[#64748B]">
                  <h2 className="font-display text-3xl text-[#0A1F44] mb-6">O que envolve este serviço?</h2>
                  <p className="leading-relaxed">{s.description}</p>
                </div>
              </ScrollReveal>

              <ScrollReveal>
                <div className="grid gap-6 sm:grid-cols-2">
                  {/* Problemas resolvidos - Cartão */}
                  <div className="relative overflow-hidden rounded-3xl border border-[#E2E8F0] bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-red-500/30 group">
                    <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-red-500/5 transition-transform duration-500 group-hover:scale-150" />
                    <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-red-500 mb-6 relative z-10">Problemas que resolvemos</h3>
                    <ul className="space-y-4 relative z-10">
                      {s.problems.map((p) => (
                        <li key={p} className="flex items-start gap-3 text-sm text-[#0A1F44]/80">
                          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-50 text-red-600 mt-0.5 border border-red-100">
                            <X className="h-3 w-3" />
                          </span>
                          <span className="leading-relaxed">{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Beneficios - Cartão */}
                  <div className="relative overflow-hidden rounded-3xl border border-[#E2E8F0] bg-[#F8FAFC] p-8 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-cyan-brand/40 group">
                    <div className="absolute -left-10 -bottom-10 h-32 w-32 rounded-full bg-cyan-brand/10 transition-transform duration-500 group-hover:scale-150" />
                    <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-brand mb-6 relative z-10">Benefícios garantidos</h3>
                    <ul className="space-y-4 relative z-10">
                      {s.benefits.map((b) => (
                        <li key={b} className="flex items-start gap-3 text-sm text-[#0A1F44]">
                          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cyan-brand/20 text-cyan-brand mt-0.5 border border-cyan-brand/30">
                            <Check className="h-3 w-3" />
                          </span>
                          <span className="font-medium leading-relaxed">{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal>
                <h2 className="font-display text-3xl text-[#0A1F44] mb-8">Como Funciona</h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  {s.how.map((h, i) => (
                    <div key={h.title} className="group rounded-2xl border border-[#E2E8F0] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-cyan-brand/30 flex flex-col h-full">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#F1F5F9] font-display text-lg text-cyan-brand group-hover:bg-cyan-brand/10 transition-colors">
                          {String(i + 1).padStart(2, "0")}
                        </div>
                        <h3 className="text-lg font-semibold text-[#0A1F44]">{h.title}</h3>
                      </div>
                      <p className="text-sm leading-relaxed text-[#64748B] flex-grow">{h.text}</p>
                    </div>
                  ))}
                </div>
              </ScrollReveal>

              <ScrollReveal>
                <div className="grid gap-12 sm:grid-cols-2">
                  <div>
                    <h2 className="font-display text-2xl text-[#0A1F44] mb-6">A Nossa Metodologia</h2>
                    <ul className="space-y-3">
                      {s.methodology.map((m) => (
                        <li key={m} className="flex items-start gap-3 text-[#64748B]">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-brand shadow-[0_0_8px_rgba(34,182,234,0.6)]" />
                          <span>{m}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h2 className="font-display text-2xl text-[#0A1F44] mb-6">Os Nossos Diferenciais</h2>
                    <ul className="space-y-3">
                      {s.differentiators.map((d) => (
                        <li key={d} className="flex items-start gap-3 text-[#64748B]">
                          <Check className="mt-1 h-4 w-4 shrink-0 text-cyan-brand" />
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal>
                <h2 className="font-display text-3xl text-[#0A1F44] mb-8">Perguntas Frequentes</h2>
                <FAQAccordion items={mappedFaqs} />
              </ScrollReveal>

              <ScrollReveal>
                <div id="formulario" className="rounded-3xl border border-[#E2E8F0] bg-white p-8 sm:p-12 shadow-sm mt-12">
                  <h2 className="font-display text-3xl text-[#0A1F44] mb-2">Vamos iniciar este projeto?</h2>
                  <p className="text-[#64748B] mb-8">
                    Um consultor sénior da DC Service responderá ao seu pedido em até 24h úteis.
                  </p>
                  <ContactForm defaultService={s.title} />
                </div>
              </ScrollReveal>

            </div>

            {/* Right Sidebar */}
            <aside className="lg:col-span-4 space-y-8 lg:sticky lg:top-32 self-start">
              
              <ScrollReveal delay={0.2}>
                <div className="rounded-3xl bg-[#0A1F44] p-8 text-white shadow-xl relative overflow-hidden">
                  {/* Subtle Background Glow */}
                  <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-cyan-brand/20 blur-3xl pointer-events-none" />
                  
                  <div className="relative z-10">
                    <div className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-brand mb-4">Ação Imediata</div>
                    <h3 className="font-display text-3xl mb-4">Precisa deste serviço urgente?</h3>
                    <p className="text-white/70 mb-8 text-sm leading-relaxed">
                      Ligue-nos diretamente ou solicite um orçamento detalhado. A nossa equipa de Maputo está pronta para atuar.
                    </p>
                    <Link to="/orcamento" className="flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-brand px-6 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-cyan-hover hover:scale-[1.02]">
                      Pedir Orçamento <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <div className="rounded-3xl border border-[#E2E8F0] bg-[#F8FAFC] p-8">
                  <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#0A1F44] mb-6">Serviços Relacionados</h3>
                  <ul className="space-y-2">
                    {related.map((r) => (
                      <li key={r.slug}>
                        <Link
                          to="/servicos/$slug"
                          params={{ slug: r.slug }}
                          className="group flex items-center gap-4 rounded-xl p-3 transition-all duration-300 hover:bg-white hover:shadow-sm hover:border-cyan-brand/30 border border-transparent"
                        >
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#E2E8F0] text-[#0A1F44] transition-colors group-hover:bg-cyan-brand/10 group-hover:text-cyan-brand">
                            <r.icon className="h-5 w-5" />
                          </div>
                          <span className="text-sm font-medium text-[#0A1F44]/80 group-hover:text-[#0A1F44]">{r.title}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>

            </aside>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
