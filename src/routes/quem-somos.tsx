import { createFileRoute } from "@tanstack/react-router";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { CTASection } from "../components/CTASection";
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
      <section className="border-b border-border bg-surface">
        <div className="container-page py-12">
          <Breadcrumbs items={[{ label: "Quem Somos" }]} />
          <h1 className="mt-6 max-w-3xl font-display text-5xl leading-tight text-navy sm:text-6xl">
            Um parceiro corporativo, construído para durar.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Nascemos em Moçambique com a ambição de oferecer serviços empresariais ao padrão que os
            melhores mercados exigem — sem prescindir do conhecimento profundo da realidade local.
          </p>
        </div>
      </section>

      <section className="container-page grid gap-12 py-20 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <img src={aboutImg} alt="Equipa da DC SERVICE em reunião" width={1600} height={1100} loading="lazy" className="aspect-[4/3] w-full rounded-2xl object-cover shadow-lg" />
        </div>
        <div className="lg:col-span-6 space-y-8">
          <div>
            <h2 className="font-display text-3xl text-navy">Missão</h2>
            <p className="mt-3 text-muted-foreground">
              Fornecer soluções empresariais integradas que aumentam a competitividade, a eficiência
              e a segurança das organizações que servimos.
            </p>
          </div>
          <div>
            <h2 className="font-display text-3xl text-navy">Visão</h2>
            <p className="mt-3 text-muted-foreground">
              Ser reconhecida como a empresa multidisciplinar de referência em Moçambique e um
              parceiro credível para operações regionais na África Austral.
            </p>
          </div>
          <div>
            <h2 className="font-display text-3xl text-navy">Compromisso</h2>
            <p className="mt-3 text-muted-foreground">
              Cumprir o que prometemos, com transparência, ética e responsabilidade em cada
              interação com clientes, parceiros e colaboradores.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-surface">
        <div className="container-page py-20">
          <h2 className="font-display text-4xl text-navy sm:text-5xl">Valores</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.title} className="rounded-xl border border-border bg-background p-6">
                <h3 className="text-lg font-semibold text-navy">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background">
        <div className="container-page py-20">
          <h2 className="font-display text-4xl text-navy sm:text-5xl">Nossa trajetória</h2>
          <ol className="mt-12 relative border-l border-border pl-8">
            {timeline.map((t) => (
              <li key={t.year} className="relative pb-10">
                <span className="absolute -left-[35px] flex h-4 w-4 items-center justify-center rounded-full bg-cyan-brand ring-4 ring-background" />
                <div className="text-xs font-semibold uppercase tracking-widest text-cyan-brand">{t.year}</div>
                <h3 className="mt-1 text-lg font-semibold text-navy">{t.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{t.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CTASection />
    </>
  );
}
