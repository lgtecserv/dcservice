import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { ContactForm } from "../components/ContactForm";
import { company } from "../content/company";

export const Route = createFileRoute("/contactos")({
  head: () => ({
    meta: [
      { title: "Contactos — DC SERVICE, LDA" },
      { name: "description", content: "Fale com a DC SERVICE, LDA. Telefones em Moçambique e África do Sul, email e formulário de contacto." },
      { property: "og:title", content: "Contactos — DC SERVICE, LDA" },
      { property: "og:description", content: "Contactos, morada e formulário da DC SERVICE, LDA." },
      { property: "og:url", content: "/contactos" },
    ],
    links: [{ rel: "canonical", href: "/contactos" }],
  }),
  component: Contact,
});

function Contact() {
  return (
    <>
      <section className="border-b border-border bg-surface">
        <div className="container-page py-12">
          <Breadcrumbs items={[{ label: "Contactos" }]} />
          <h1 className="mt-6 max-w-3xl font-display text-5xl leading-tight text-navy sm:text-6xl">
            Fale com a nossa equipa.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Estamos disponíveis para responder a pedidos comerciais, propostas de parceria e
            questões técnicas. Respondemos em até 24h úteis.
          </p>
        </div>
      </section>

      <section className="container-page py-16">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5 space-y-4">
            {company.phones.map((p) => (
              <a key={p.tel} href={`tel:${p.tel}`} className="flex items-start gap-4 rounded-xl border border-border bg-background p-5 hover:border-cyan-brand/40 hover:shadow-sm">
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-cyan-brand/10 text-cyan-brand">
                  <Phone className="h-5 w-5" />
                </span>
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">{p.label}</div>
                  <div className="text-base font-semibold text-navy">{p.value}</div>
                </div>
              </a>
            ))}
            {company.emails.map((e) => (
              <a key={e.value} href={`mailto:${e.value}`} className="flex items-start gap-4 rounded-xl border border-border bg-background p-5 hover:border-cyan-brand/40 hover:shadow-sm">
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-cyan-brand/10 text-cyan-brand">
                  <Mail className="h-5 w-5" />
                </span>
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">{e.label}</div>
                  <div className="text-base font-semibold break-all text-navy">{e.value}</div>
                </div>
              </a>
            ))}
            <div className="flex items-start gap-4 rounded-xl border border-border bg-background p-5">
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-cyan-brand/10 text-cyan-brand">
                <MapPin className="h-5 w-5" />
              </span>
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Escritório</div>
                <div className="text-base font-semibold text-navy">{company.address}</div>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-xl border border-border bg-background p-5">
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-cyan-brand/10 text-cyan-brand">
                <Clock className="h-5 w-5" />
              </span>
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Horário</div>
                <div className="text-base font-semibold text-navy">{company.hours}</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-border bg-surface p-8">
              <h2 className="font-display text-3xl text-navy">Envie-nos uma mensagem</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Preencha o formulário. Respondemos em até 24h úteis.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-background">
        <div className="container-page py-12">
          <div className="overflow-hidden rounded-2xl border border-border">
            <iframe
              title="Localização — Maputo, Moçambique"
              src="https://www.google.com/maps?q=Maputo%2C%20Mo%C3%A7ambique&output=embed"
              width="100%"
              height="420"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block w-full"
            />
          </div>
        </div>
      </section>
    </>
  );
}
