import { createFileRoute } from "@tanstack/react-router";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { ContactForm } from "../components/ContactForm";
import { Check } from "lucide-react";

export const Route = createFileRoute("/orcamento")({
  head: () => ({
    meta: [
      { title: "Pedido de Orçamento — DC SERVICE, LDA" },
      { name: "description", content: "Solicite um orçamento gratuito para consultoria, tecnologia, cibersegurança, logística, procurement, RH ou comércio internacional." },
      { property: "og:title", content: "Pedido de Orçamento — DC SERVICE, LDA" },
      { property: "og:description", content: "Envie o seu pedido de orçamento à DC SERVICE, LDA." },
      { property: "og:url", content: "/orcamento" },
    ],
    links: [{ rel: "canonical", href: "/orcamento" }],
  }),
  component: Quote,
});

const promises = [
  "Resposta em até 24h úteis",
  "Consultor sénior dedicado",
  "Proposta clara, sem letra pequena",
  "Confidencialidade garantida (NDA por defeito)",
];

function Quote() {
  return (
    <section className="border-b border-border bg-surface">
      <div className="container-page py-12">
        <Breadcrumbs items={[{ label: "Orçamento" }]} />
        <div className="mt-6 grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h1 className="font-display text-5xl leading-tight text-navy sm:text-6xl">
              Peça o seu orçamento.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Descreva-nos o que precisa. Um consultor sénior analisa o pedido e responde com uma
              proposta estruturada.
            </p>
            <ul className="mt-8 space-y-3">
              {promises.map((p) => (
                <li key={p} className="flex items-start gap-3 text-sm text-foreground">
                  <span className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-cyan-brand text-cyan-brand-foreground">
                    <Check className="h-3 w-3" />
                  </span>
                  {p}
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-border bg-background p-8 shadow-sm">
              <ContactForm variant="quote" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
