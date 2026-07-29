import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, Check, X } from "lucide-react";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import { ContactForm } from "../../components/ContactForm";
import { CTASection } from "../../components/CTASection";
import { FAQAccordion } from "../../components/FAQAccordion";
import { TextReveal } from "../../components/animations/TextReveal";
import { ScrollReveal } from "../../components/animations/ScrollReveal";
import { services, getService } from "../../content/services";
import { company } from "../../content/company";

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
          HERO — Fullscreen Image
      ══════════════════════════════════════════════════════════════════ */}
      <section className="relative flex min-h-[85vh] items-center overflow-hidden bg-[#0A0A0F] pt-20">
        <div className="absolute inset-0 z-0">
          <img src={s.image} alt={s.title} className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A1F44] via-[#0A1F44]/80 to-transparent mix-blend-multiply" />
        </div>

        <div className="container-page relative z-10 w-full">
          <div className="max-w-3xl">
            <ScrollReveal>
              <div className="mb-6 inline-flex rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold text-white backdrop-blur-md border border-white/20 shadow-sm">
                {s.title} Especializado
              </div>
              <h1 className="font-display text-5xl md:text-7xl font-bold text-white leading-[1.1]">
                {s.title.split(' ').slice(0, -1).join(' ')}{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-brand">
                  {s.title.split(' ').slice(-1)}
                </span>
              </h1>
              <p className="mt-6 text-xl leading-relaxed text-white/90 font-medium">
                {s.intro}
              </p>
              <div className="mt-10 flex flex-wrap gap-4 items-center">
                <a 
                  href={`https://wa.me/${company.whatsapp}?text=${encodeURIComponent("Olá, gostaria de solicitar um orçamento para os vossos serviços.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-orange-brand to-orange-500 px-8 py-4 text-sm font-bold text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(249,115,22,0.4)]"
                >
                  Solicitar Orçamento <ArrowRight className="h-4 w-4" />
                </a>
                <a href="#como-funciona" className="inline-flex items-center justify-center rounded-xl border-2 border-white px-8 py-4 text-sm font-bold text-white transition-all duration-300 hover:bg-white hover:text-[#0A1F44]">
                  Saiba Mais
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 1 — Nossos Serviços (White Cards Grid)
      ══════════════════════════════════════════════════════════════════ */}
      <section id="como-funciona" className="bg-white py-24">
        <div className="container-page">
          <ScrollReveal>
            <div className="text-center max-w-4xl mx-auto mb-16">
              <h2 className="font-display text-4xl md:text-5xl text-[#0A1F44] mb-4">
                Nossos <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-brand">{s.title.split(' ').slice(-1)}</span>
              </h2>
              <p className="text-[#64748B] text-lg leading-relaxed">
                {s.description}
              </p>
            </div>
            
            <div className="grid gap-8 md:grid-cols-2">
              {s.how.map((h, i) => (
                <div key={h.title} className="group rounded-3xl bg-[#F8FAFC] p-10 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 text-center border border-transparent hover:border-orange-brand/20">
                  <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-orange-brand/10 text-orange-brand transition-transform group-hover:scale-110">
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="mb-4 text-2xl font-bold text-[#0A1F44]">{h.title}</h3>
                  <p className="text-[#64748B] leading-relaxed">
                    {h.text}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 2 — Por Que Escolher (Split View)
      ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-[#F8FAFC] py-24">
        <div className="container-page">
          <div className="grid gap-16 lg:grid-cols-2 items-center mb-20">
            
            <ScrollReveal>
              <h2 className="font-display text-4xl md:text-5xl text-[#0A1F44] leading-tight mb-8">
                Por Que Escolher Nossos <br />
                <span className="text-orange-brand">{s.title}?</span>
              </h2>
              <p className="text-[#64748B] text-lg mb-10 leading-relaxed">
                A nossa equipa utiliza as melhores práticas e tecnologia de ponta para garantir a máxima qualidade em cada projeto.
              </p>
              
              <ul className="space-y-4">
                {s.differentiators.map((d) => (
                  <li key={d} className="flex items-center gap-4 text-[#0A1F44] font-medium">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-orange-brand text-orange-brand bg-white shadow-sm">
                      <Check className="h-4 w-4" />
                    </div>
                    {d}
                  </li>
                ))}
              </ul>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="relative h-[400px] lg:h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl group">
                <img src={s.image} alt={s.title} className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1F44] via-[#0A1F44]/20 to-transparent opacity-80" />
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="inline-flex items-center justify-center rounded-full bg-orange-brand/90 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white mb-3 backdrop-blur-md">
                    Destaque
                  </div>
                  <h3 className="text-2xl font-bold text-white leading-snug">
                    Implementação profissional de {s.title}
                  </h3>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {s.benefits.slice(0, 3).map((b, i) => (
              <ScrollReveal key={b} delay={i * 0.1}>
                <div className="rounded-2xl bg-white p-8 shadow-sm border border-[#E2E8F0] transition-all hover:shadow-md hover:border-orange-brand/30 h-full flex flex-col">
                  <div className="text-orange-brand mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/><path d="M12 12v10l-3-3-3 3V12"/></svg>
                  </div>
                  <h3 className="text-xl font-bold text-[#0A1F44] mb-3">{b}</h3>
                  <p className="text-[#64748B] text-sm leading-relaxed mt-auto">
                    Compromisso com a excelência e adaptação às necessidades do seu negócio.
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 3 — O Que Está Incluído (3 Cols)
      ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-white py-24">
        <div className="container-page">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="font-display text-4xl md:text-5xl text-[#0A1F44] mb-4">
                O Que Está <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-brand">Incluído</span>
              </h2>
              <p className="text-[#64748B] text-lg">
                Cada projeto inclui tudo o que precisa para garantir o sucesso do seu empreendimento.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {s.methodology.slice(0, 3).map((m, i) => (
                <div key={m} className="rounded-3xl bg-white p-10 text-center shadow-[0_4px_20px_-5px_rgba(0,0,0,0.05)] border border-[#E2E8F0] hover:border-orange-brand/30 transition-colors">
                  <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full text-orange-brand border-2 border-orange-brand/20">
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="mb-4 text-xl font-bold text-[#0A1F44]">{m}</h3>
                  <p className="text-[#64748B] text-sm leading-relaxed">
                    Acompanhamento rigoroso em todas as etapas, desde a avaliação até à entrega final do serviço.
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-[#F8FAFC] py-24">
        <div className="container-page max-w-4xl">
          <ScrollReveal>
            <h2 className="font-display text-4xl text-center text-[#0A1F44] mb-12">Dúvidas Frequentes</h2>
            <FAQAccordion items={mappedFaqs} />
          </ScrollReveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          MEGA CTA BLUE BLOCK
      ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-[#0A1F44] py-24">
        <div className="container-page text-center">
          <ScrollReveal>
            <h2 className="font-display text-4xl md:text-5xl text-white mb-6">
              Precisa de Serviços de {s.title}?
            </h2>
            <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
              Entre em contacto connosco hoje e receba um orçamento personalizado para o seu projeto.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href={`https://wa.me/${company.whatsapp}?text=${encodeURIComponent("Olá, gostaria de solicitar um orçamento para os vossos serviços.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl bg-white px-8 py-4 text-sm font-bold text-[#0A1F44] hover:bg-orange-brand hover:text-white transition-colors duration-300"
              >
                Solicitar Orçamento <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a href="mailto:geral@dcservice.co.mz" className="inline-flex items-center justify-center rounded-xl border border-white/30 px-8 py-4 text-sm font-bold text-white hover:bg-white/10 transition-colors duration-300">
                Mais Informações
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Related Services */}
      <section className="bg-white py-16 border-t border-[#E2E8F0]">
        <div className="container-page text-center">
          <h3 className="text-xl font-bold text-[#0A1F44] mb-8">Páginas Relacionadas</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {related.map((r) => (
              <Link key={r.slug} to="/servicos/$slug" params={{ slug: r.slug }} className="inline-flex items-center gap-2 rounded-lg border border-[#E2E8F0] px-6 py-3 font-medium text-[#0A1F44] hover:border-orange-brand hover:text-orange-brand transition-colors">
                <r.icon className="h-4 w-4" /> {r.title}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
