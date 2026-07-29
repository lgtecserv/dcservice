import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { ContactForm } from "../components/ContactForm";
import { company } from "../content/company";
import { ScrollReveal } from "../components/animations/ScrollReveal";
import { TextReveal } from "../components/animations/TextReveal";

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
      {/* ══════════════════════════════════════════════════════════════════
          HERO — Dark Section
      ══════════════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-[#0A0A0F] pt-32 pb-24 lg:pt-40 lg:pb-32">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1596524430615-b46475ddff6e?auto=format&fit=crop&q=80&w=1920" alt="Contact Us" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0F] via-[#0A0A0F]/80 to-[#0A0A0F]/20" />
          <div className="absolute inset-0 bg-[#0A0A0F]/50 mix-blend-multiply" />
        </div>

        <div className="container-page relative z-10">
          <Breadcrumbs items={[{ label: "Contactos" }]} />
          
          <div className="mt-8 max-w-4xl">
            <ScrollReveal>
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl text-white leading-tight">
                <TextReveal text="Fale com a nossa equipa." />
              </h1>
              <p className="mt-8 text-xl leading-relaxed text-white/70">
                Estamos disponíveis para responder a pedidos comerciais, propostas de parceria e
                questões técnicas. Respondemos em até 24h úteis.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          BODY — Light Section
      ══════════════════════════════════════════════════════════════════ */}
      <section className="section-light py-20 lg:py-32 bg-[#F8FAFC]">
        <div className="container-page">
          <div className="grid gap-12 lg:grid-cols-12">
            
            {/* Contact Info */}
            <div className="lg:col-span-5 space-y-4">
              <ScrollReveal>
                <div className="text-xs font-bold uppercase tracking-[0.2em] text-orange-brand mb-6">Canais de Comunicação</div>
              </ScrollReveal>

              {company.phones.map((p, index) => (
                <ScrollReveal key={p.tel} delay={index * 0.05}>
                  <a href={`tel:${p.tel}`} className="group flex items-center gap-6 rounded-2xl border border-[#E2E8F0] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-orange-brand/30">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#F1F5F9] text-[#0A1F44] transition-colors group-hover:bg-orange-brand/10 group-hover:text-orange-brand">
                      <Phone className="h-5 w-5" />
                    </span>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-widest text-[#64748B]">{p.label}</div>
                      <div className="text-lg font-semibold text-[#0A1F44]">{p.value}</div>
                    </div>
                  </a>
                </ScrollReveal>
              ))}

              {company.emails.map((e, index) => (
                <ScrollReveal key={e.value} delay={0.1 + (index * 0.05)}>
                  <a href={`mailto:${e.value}`} className="group flex items-center gap-6 rounded-2xl border border-[#E2E8F0] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-orange-brand/30">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#F1F5F9] text-[#0A1F44] transition-colors group-hover:bg-orange-brand/10 group-hover:text-orange-brand">
                      <Mail className="h-5 w-5" />
                    </span>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-widest text-[#64748B]">{e.label}</div>
                      <div className="text-lg font-semibold break-all text-[#0A1F44]">{e.value}</div>
                    </div>
                  </a>
                </ScrollReveal>
              ))}

              <ScrollReveal delay={0.2}>
                <div className="flex items-center gap-6 rounded-2xl border border-[#E2E8F0] bg-white p-6 shadow-sm">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-brand/10 text-orange-brand">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest text-[#64748B]">Escritório</div>
                    <div className="text-lg font-semibold text-[#0A1F44]">{company.address}</div>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.25}>
                <div className="flex items-center gap-6 rounded-2xl border border-[#E2E8F0] bg-white p-6 shadow-sm">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-brand/10 text-orange-brand">
                    <Clock className="h-5 w-5" />
                  </span>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest text-[#64748B]">Horário</div>
                    <div className="text-lg font-semibold text-[#0A1F44]">{company.hours}</div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Form */}
            <div className="lg:col-span-7">
              <ScrollReveal delay={0.3}>
                <div className="rounded-3xl border border-[#E2E8F0] bg-white p-8 sm:p-12 shadow-md">
                  <h2 className="font-display text-3xl text-[#0A1F44]">Envie-nos uma mensagem</h2>
                  <p className="mt-3 text-sm text-[#64748B] mb-8">
                    Preencha o formulário. Respondemos em até 24h úteis.
                  </p>
                  <ContactForm />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          MAP 
      ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-white pb-20">
        <div className="container-page">
          <ScrollReveal>
            <div className="overflow-hidden rounded-3xl border border-[#E2E8F0] shadow-lg">
              <iframe
                title="Localização — Maputo, Moçambique"
                src="https://www.google.com/maps?q=Maputo%2C%20Mo%C3%A7ambique&output=embed"
                width="100%"
                height="500"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block w-full grayscale contrast-125 opacity-90"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
