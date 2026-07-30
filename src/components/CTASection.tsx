import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "./animations/ScrollReveal";
import { motion } from "framer-motion";
import { useCompany } from "../content/company";
import { useTranslation } from "react-i18next";

export function CTASection() {
  const { t } = useTranslation();
  const company = useCompany();

  return (
    <section className="relative overflow-hidden section-dark-alt py-24 sm:py-32">
      {/* Dot grid */}
      <div className="absolute inset-0 bg-dot-grid opacity-30" />
      {/* Radial glow from center */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(34,182,234,0.08)_0%,transparent_60%)]" />
      
      <div className="container-page relative z-10">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-orange-brand mb-6">
              {t("cta.badge")}
            </p>
            <h2 className="font-display text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
              {t("cta.title")} <span className="text-orange-brand italic">{t("cta.titleHighlight")}</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-white/50 max-w-xl mx-auto">
              {t("cta.desc")}
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <a
                  href={`https://wa.me/${company.whatsapp}?text=${encodeURIComponent("Olá, gostaria de solicitar um orçamento para os vossos serviços.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-orange-brand px-8 py-4 text-sm font-bold text-white transition-all hover:bg-orange-500 hover:shadow-[0_0_30px_rgba(249,115,22,0.4)]"
                >
                  {t("cta.quoteBtn")}
                  <ArrowRight className="h-4 w-4" />
                </a>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/contactos"
                  className="inline-flex items-center rounded-full glass px-8 py-4 text-sm font-medium text-white transition-all hover:border-cyan-brand/30"
                >
                  {t("cta.contactBtn")}
                </Link>
              </motion.div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
