import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import ctaBg from "../assets/cta-bg.jpg";

export function CTASection() {
  return (
    <section className="relative overflow-hidden bg-navy">
      <img
        src={ctaBg}
        alt=""
        aria-hidden="true"
        loading="lazy"
        width={1920}
        height={900}
        className="absolute inset-0 h-full w-full object-cover opacity-40"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/95 to-navy/70" />
      <div className="container-page relative py-20 sm:py-24">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-brand">
            Vamos trabalhar juntos
          </p>
          <h2 className="mt-4 font-display text-4xl leading-tight text-navy-foreground sm:text-5xl">
            Pronto para elevar a operação da sua empresa?
          </h2>
          <p className="mt-5 text-base leading-relaxed text-navy-foreground/75">
            Marque uma conversa exploratória sem compromisso. Em 30 minutos ajudamos a clarificar
            objetivos e próximos passos.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/orcamento"
              className="inline-flex items-center gap-2 rounded-md bg-cyan-brand px-6 py-3.5 text-sm font-medium text-cyan-brand-foreground transition-all hover:bg-cyan-brand/90"
            >
              Solicitar Orçamento
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/contactos"
              className="inline-flex items-center rounded-md border border-navy-foreground/25 bg-transparent px-6 py-3.5 text-sm font-medium text-navy-foreground transition-all hover:bg-navy-foreground/10"
            >
              Falar Connosco
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
