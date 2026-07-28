import { createFileRoute } from "@tanstack/react-router";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { CTASection } from "../components/CTASection";

export const Route = createFileRoute("/parceiros")({
  head: () => ({
    meta: [
      { title: "Parceiros — DC SERVICE, LDA" },
      { name: "description", content: "Trabalhamos com empresas privadas, instituições públicas, ONG e organizações internacionais em Moçambique e na SADC." },
      { property: "og:title", content: "Parceiros — DC SERVICE, LDA" },
      { property: "og:description", content: "Rede de parceiros institucionais e comerciais da DC SERVICE, LDA." },
      { property: "og:url", content: "/parceiros" },
    ],
    links: [{ rel: "canonical", href: "/parceiros" }],
  }),
  component: Partners,
});

const sectors = [
  "Banca",
  "Construção",
  "Indústria",
  "Tecnologia",
  "ONG",
  "Setor Público",
  "Retalho",
  "Energia",
  "Logística",
  "Educação",
  "Saúde",
  "Agronegócio",
];

function Partners() {
  return (
    <>
      <section className="border-b border-border bg-surface">
        <div className="container-page py-12">
          <Breadcrumbs items={[{ label: "Parceiros" }]} />
          <h1 className="mt-6 max-w-3xl font-display text-5xl leading-tight text-navy sm:text-6xl">
            Uma rede de confiança em Moçambique e na região.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Colaboramos com organizações que valorizam rigor, discrição e resultados. Cada parceria
            é gerida com um mesmo princípio: valor mútuo, sustentável no tempo.
          </p>
        </div>
      </section>

      <section className="container-page py-20">
        <h2 className="font-display text-3xl text-navy">Setores em que atuamos</h2>
        <div className="mt-8 grid gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {sectors.map((s) => (
            <div key={s} className="rounded-lg border border-border bg-background px-5 py-6 text-center text-sm font-medium text-navy transition-all hover:border-cyan-brand/40 hover:shadow-sm">
              {s}
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-surface">
        <div className="container-page py-20">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl text-navy sm:text-4xl">Quer tornar-se parceiro?</h2>
            <p className="mt-3 text-muted-foreground">
              Estamos abertos a parcerias tecnológicas, comerciais e institucionais que criem valor
              para os nossos clientes.
            </p>
            <a
              href="/contactos"
              className="mt-6 inline-flex items-center rounded-md bg-navy px-6 py-3 text-sm font-medium text-navy-foreground hover:bg-navy/90"
            >
              Propor uma parceria
            </a>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
