import { createFileRoute } from "@tanstack/react-router";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { ContactForm } from "../components/ContactForm";
import { Check } from "lucide-react";
import { ScrollReveal } from "../components/animations/ScrollReveal";
import { TextReveal } from "../components/animations/TextReveal";
import { useTranslation } from "react-i18next";

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

export function Quote() {
  const { t } = useTranslation();
  const promises = t("quote.promises", { returnObjects: true }) as string[];

  return (
    <>
      {/* ══════════════════════════════════════════════════════════════════
          HERO — Dark Section
      ══════════════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-[#0A0A0F] pt-32 pb-24 lg:pt-40 lg:pb-32">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1920" alt="Consulting Quote" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0F] via-[#0A0A0F]/80 to-[#0A0A0F]/20" />
          <div className="absolute inset-0 bg-[#0A0A0F]/50 mix-blend-multiply" />
        </div>

        <div className="container-page relative z-10">
          <Breadcrumbs items={[{ label: t("quote.breadcrumbs") }]} />
          
          <div className="mt-8 max-w-4xl">
            <ScrollReveal>
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl text-white leading-tight">
                <TextReveal text={t("quote.title")} />
              </h1>
              <p className="mt-8 text-xl leading-relaxed text-white/70">
                {t("quote.description")}
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
            
            {/* Left side: Promises */}
            <div className="lg:col-span-5">
              <ScrollReveal>
                <div className="rounded-3xl border border-[#E2E8F0] bg-white p-8 sm:p-10 shadow-sm h-full">
                  <div className="text-xs font-bold uppercase tracking-[0.2em] text-orange-brand mb-6">{t("quote.commitmentBadge")}</div>
                  <h2 className="font-display text-2xl text-[#0A1F44] mb-8">{t("quote.commitmentTitle")}</h2>
                  
                  <ul className="space-y-6">
                    {promises.map((p, index) => (
                      <li key={p} className="flex items-start gap-4">
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-brand/10 text-orange-brand">
                          <Check className="h-4 w-4" />
                        </span>
                        <span className="mt-1 text-[#0A1F44] font-medium leading-snug">
                          {p}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-12 rounded-2xl bg-[#F1F5F9] p-6 border border-[#E2E8F0]">
                    <p className="text-sm text-[#64748B] italic">
                      {t("quote.quoteMsg")}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Right side: Form */}
            <div className="lg:col-span-7">
              <ScrollReveal delay={0.2}>
                <div className="rounded-3xl border border-[#E2E8F0] bg-white p-8 sm:p-12 shadow-md relative overflow-hidden">
                  <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-orange-brand/5 blur-3xl pointer-events-none" />
                  
                  <div className="relative z-10">
                    <h2 className="font-display text-3xl text-[#0A1F44] mb-8">{t("quote.formTitle")}</h2>
                    <ContactForm variant="quote" />
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
