import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { CTASection } from "../components/CTASection";
import { services } from "../content/services";

export const Route = createFileRoute("/servicos")({
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
      <section className="border-b border-border bg-surface">
        <div className="container-page py-12">
          <Breadcrumbs items={[{ label: "Serviços" }]} />
          <h1 className="mt-6 max-w-3xl font-display text-5xl leading-tight text-navy sm:text-6xl">
            Serviços empresariais entregues por uma única equipa.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Dez áreas complementares, com metodologia formal, indicadores mensuráveis e um único
            ponto de contacto.
          </p>
        </div>
      </section>

      <section className="container-page py-20">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <Link
              key={s.slug}
              to="/servicos/$slug"
              params={{ slug: s.slug }}
              className="group relative flex flex-col rounded-xl border border-border bg-background p-7 transition-all hover:-translate-y-0.5 hover:border-cyan-brand/40 hover:shadow-lg"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-navy/5 text-navy transition-colors group-hover:bg-navy group-hover:text-navy-foreground">
                <s.icon className="h-5 w-5" />
              </span>
              <h2 className="mt-5 text-lg font-semibold text-navy">{s.title}</h2>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{s.short}</p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-medium text-cyan-brand">
                Ver detalhes <ArrowRight className="h-3 w-3" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
