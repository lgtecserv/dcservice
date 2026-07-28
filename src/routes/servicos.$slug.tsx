import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { ContactForm } from "../components/ContactForm";
import { CTASection } from "../components/CTASection";
import { services, getService } from "../content/services";

export const Route = createFileRoute("/servicos/$slug")({
  loader: ({ params }): { service: import("../content/services").Service } => {
    const service = getService(params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Serviço não encontrado" }, { name: "robots", content: "noindex" }] };
    }
    const s = loaderData.service;
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
  const { service: s } = Route.useLoaderData();
  const Icon = s.icon;
  const related = services.filter((x) => x.slug !== s.slug).slice(0, 3);

  return (
    <>
      <section className="border-b border-border bg-surface">
        <div className="container-page py-12">
          <Breadcrumbs items={[{ label: "Serviços", href: "/servicos" }, { label: s.title }]} />
          <div className="mt-6 grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-navy text-navy-foreground">
                <Icon className="h-5 w-5" />
              </span>
              <h1 className="mt-5 font-display text-5xl leading-tight text-navy sm:text-6xl">
                {s.title}
              </h1>
              <p className="mt-5 max-w-2xl text-lg text-muted-foreground">{s.intro}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/orcamento" className="inline-flex items-center gap-2 rounded-md bg-navy px-6 py-3 text-sm font-medium text-navy-foreground hover:bg-navy/90">
                  Pedir Orçamento <ArrowRight className="h-4 w-4" />
                </Link>
                <a href="#formulario" className="inline-flex items-center rounded-md border border-border bg-background px-6 py-3 text-sm font-medium hover:bg-secondary">
                  Contactar equipa
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-page py-16">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-8 space-y-14">
            <div>
              <h2 className="font-display text-3xl text-navy">O serviço</h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">{s.description}</p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-xl border border-border bg-surface p-6">
                <h3 className="text-sm font-semibold uppercase tracking-widest text-cyan-brand">Problemas resolvidos</h3>
                <ul className="mt-4 space-y-2.5">
                  {s.problems.map((p) => (
                    <li key={p} className="flex items-start gap-2.5 text-sm text-foreground">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-navy" /> {p}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl border border-border bg-surface p-6">
                <h3 className="text-sm font-semibold uppercase tracking-widest text-cyan-brand">Benefícios</h3>
                <ul className="mt-4 space-y-2.5">
                  {s.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-2.5 text-sm text-foreground">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-cyan-brand" /> {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <h2 className="font-display text-3xl text-navy">Como funciona</h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {s.how.map((h, i) => (
                  <div key={h.title} className="rounded-xl border border-border bg-background p-6">
                    <div className="text-xs font-semibold text-cyan-brand">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <h3 className="mt-2 text-base font-semibold text-navy">{h.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{h.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <h2 className="font-display text-3xl text-navy">Metodologia</h2>
                <ul className="mt-4 space-y-2">
                  {s.methodology.map((m) => (
                    <li key={m} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-cyan-brand" /> {m}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="font-display text-3xl text-navy">Diferenciais</h2>
                <ul className="mt-4 space-y-2">
                  {s.differentiators.map((d) => (
                    <li key={d} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-cyan-brand" /> {d}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <h2 className="font-display text-3xl text-navy">Perguntas frequentes</h2>
              <div className="mt-6 divide-y divide-border rounded-xl border border-border bg-background">
                {s.faqs.map((f) => (
                  <details key={f.q} className="group px-5 py-4">
                    <summary className="cursor-pointer list-none text-sm font-medium text-navy marker:hidden">
                      <span className="flex items-center justify-between gap-2">
                        {f.q}
                        <span className="text-cyan-brand transition-transform group-open:rotate-45">+</span>
                      </span>
                    </summary>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
                  </details>
                ))}
              </div>
            </div>

            <div id="formulario" className="rounded-2xl border border-border bg-surface p-8">
              <h2 className="font-display text-3xl text-navy">Conte-nos o que precisa</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Enviamos uma resposta em até 24h úteis.
              </p>
              <div className="mt-6">
                <ContactForm defaultService={s.title} />
              </div>
            </div>
          </div>

          <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-28 self-start">
            <div className="rounded-xl border border-border bg-navy p-6 text-navy-foreground">
              <div className="text-xs font-semibold uppercase tracking-widest text-cyan-brand">Fale connosco</div>
              <h3 className="mt-2 font-display text-2xl">Precisa deste serviço?</h3>
              <p className="mt-2 text-sm text-navy-foreground/70">
                Um consultor sénior responde em até 24h úteis.
              </p>
              <Link to="/orcamento" className="mt-5 inline-flex w-full items-center justify-center rounded-md bg-cyan-brand px-4 py-3 text-sm font-medium text-cyan-brand-foreground hover:bg-cyan-brand/90">
                Pedir Orçamento
              </Link>
            </div>
            <div className="rounded-xl border border-border bg-background p-6">
              <h3 className="text-sm font-semibold uppercase tracking-widest text-cyan-brand">Serviços relacionados</h3>
              <ul className="mt-4 space-y-3">
                {related.map((r) => (
                  <li key={r.slug}>
                    <Link
                      to="/servicos/$slug"
                      params={{ slug: r.slug }}
                      className="flex items-start gap-3 rounded-md p-2 transition-colors hover:bg-secondary"
                    >
                      <r.icon className="mt-0.5 h-4 w-4 text-navy" />
                      <span className="text-sm text-foreground">{r.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <CTASection />
    </>
  );
}
