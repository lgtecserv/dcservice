import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, Shield, Zap, Globe2 } from "lucide-react";
import hero from "../assets/hero-corporate.jpg";
import { services } from "../content/services";
import { stats, pillars, processSteps, testimonials, company } from "../content/company";
import { StatCounter } from "../components/StatCounter";
import { CTASection } from "../components/CTASection";

export const Route = createFileRoute("/")({
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
      { rel: "preload", as: "image", href: hero, fetchpriority: "high" },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-surface to-background" />
        <div className="container-page grid gap-14 py-16 sm:py-20 lg:grid-cols-12 lg:gap-10 lg:py-28">
          <div className="lg:col-span-6 flex flex-col justify-center fade-up">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-background/70 px-3 py-1 text-xs text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-brand" />
              Consultoria · Tecnologia · Comércio Internacional
            </div>
            <h1 className="mt-6 font-display text-5xl leading-[1.05] text-navy sm:text-6xl lg:text-7xl">
              Soluções empresariais integradas para organizações que exigem excelência.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Um único parceiro para consultoria, tecnologia, segurança cibernética, logística,
              procurement, recursos humanos, contabilidade e comércio internacional em Moçambique.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/orcamento" className="inline-flex items-center gap-2 rounded-md bg-navy px-6 py-3.5 text-sm font-medium text-navy-foreground shadow-sm transition-all hover:bg-navy/90 hover:shadow-md">
                Solicitar Orçamento <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={`https://wa.me/${company.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-md border border-border bg-background px-6 py-3.5 text-sm font-medium text-foreground hover:bg-secondary"
              >
                Falar no WhatsApp
              </a>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-border pt-8">
              <div>
                <div className="font-display text-2xl text-navy">10+</div>
                <div className="mt-1 text-xs text-muted-foreground">Áreas de atuação</div>
              </div>
              <div>
                <div className="font-display text-2xl text-navy">15 anos</div>
                <div className="mt-1 text-xs text-muted-foreground">Experiência</div>
              </div>
              <div>
                <div className="font-display text-2xl text-navy">SADC</div>
                <div className="mt-1 text-xs text-muted-foreground">Alcance regional</div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-6 fade-up">
            <div className="relative">
              <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-tr from-cyan-brand/20 to-navy/20 blur-2xl" />
              <img
                src={hero}
                alt="Equipa corporativa em ambiente empresarial moderno"
                width={1920}
                height={1280}
                className="aspect-[4/3] w-full rounded-2xl object-cover shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* QUEM SOMOS RESUMO */}
      <section className="border-t border-border bg-background">
        <div className="container-page grid gap-12 py-20 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-brand">
              Quem Somos
            </p>
            <h2 className="mt-4 font-display text-4xl leading-tight text-navy sm:text-5xl">
              Um parceiro corporativo sério, moderno e multidisciplinar.
            </h2>
          </div>
          <div className="lg:col-span-7 lg:pt-4">
            <p className="text-base leading-relaxed text-muted-foreground">
              A DC SERVICE, LDA foi construída para servir organizações que exigem rigor, discrição
              e resultados mensuráveis. Combinamos experiência sectorial com uma cultura de execução
              disciplinada, apoiada em processos formais, ferramentas modernas e uma equipa técnica
              sénior.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Servimos empresas privadas, instituições públicas, organizações internacionais e
              investidores estrangeiros com um único princípio: entregar aquilo a que nos
              comprometemos, dentro do prazo e do padrão de qualidade acordado.
            </p>
            <div className="mt-8">
              <Link to="/quem-somos" className="inline-flex items-center gap-2 text-sm font-medium text-navy hover:text-cyan-brand">
                Conhecer a empresa <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section className="border-t border-border bg-surface">
        <div className="container-page py-20">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-brand">Serviços</p>
              <h2 className="mt-4 font-display text-4xl text-navy sm:text-5xl">Áreas de atuação</h2>
              <p className="mt-3 max-w-2xl text-muted-foreground">
                Dez áreas complementares, entregues por uma única organização.
              </p>
            </div>
            <Link to="/servicos" className="inline-flex items-center gap-2 text-sm font-medium text-navy hover:text-cyan-brand">
              Todos os serviços <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <Link
                key={s.slug}
                to="/servicos/$slug"
                params={{ slug: s.slug }}
                className="group relative flex flex-col rounded-xl border border-border bg-background p-6 transition-all hover:-translate-y-0.5 hover:border-cyan-brand/40 hover:shadow-lg"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-navy/5 text-navy transition-colors group-hover:bg-navy group-hover:text-navy-foreground">
                  <s.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-base font-semibold text-navy">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.short}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-medium text-cyan-brand opacity-0 transition-opacity group-hover:opacity-100">
                  Saber mais <ArrowRight className="h-3 w-3" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PILARES */}
      <section className="border-t border-border bg-background">
        <div className="container-page py-20">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-brand">Porque escolher</p>
            <h2 className="mt-4 font-display text-4xl text-navy sm:text-5xl">
              Uma nova forma de contratar serviços empresariais.
            </h2>
          </div>
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((p, i) => {
              const Icon = [Shield, Zap, Check, Globe2][i] ?? Check;
              return (
                <div key={p.title} className="relative rounded-xl border border-border bg-surface p-6">
                  <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-cyan-brand/10 text-cyan-brand">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 text-base font-semibold text-navy">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-y border-border bg-navy text-navy-foreground">
        <div className="container-page grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-display text-5xl">
                {s.value}
                <span className="text-cyan-brand">{s.suffix}</span>
              </div>
              <div className="mt-2 text-sm text-navy-foreground/70">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESSO */}
      <section className="bg-background">
        <div className="container-page py-20">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-brand">Como trabalhamos</p>
            <h2 className="mt-4 font-display text-4xl text-navy sm:text-5xl">
              Um método simples, executado com disciplina.
            </h2>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((s) => (
              <div key={s.n} className="relative border-t border-navy/10 pt-6">
                <div className="text-xs font-semibold text-cyan-brand">{s.n}</div>
                <h3 className="mt-2 text-lg font-semibold text-navy">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTEMUNHOS */}
      <section className="border-t border-border bg-surface">
        <div className="container-page py-20">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-brand">Testemunhos</p>
            <h2 className="mt-4 font-display text-4xl text-navy sm:text-5xl">
              O que dizem clientes que trabalham connosco.
            </h2>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {testimonials.map((t) => (
              <figure key={t.author} className="flex flex-col rounded-xl border border-border bg-background p-8">
                <blockquote className="flex-1 text-base leading-relaxed text-foreground">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-6 border-t border-border pt-4">
                  <div className="text-sm font-semibold text-navy">{t.author}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}

// silence unused import warning for StatCounter (kept for reuse)
void StatCounter;
