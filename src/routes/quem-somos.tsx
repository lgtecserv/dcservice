import { createFileRoute } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { CTASection } from "../components/CTASection";
import { ScrollReveal } from "../components/animations/ScrollReveal";
import { TextReveal } from "../components/animations/TextReveal";
import aboutImg from "../assets/about-team.jpg";
import aboutBannerImg from "../assets/about_banner.png";
import timeline1Img from "../assets/timeline_1.png";
import timeline2Img from "../assets/timeline_2.png";

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

export function About() {
  const { t } = useTranslation();
  
  const values = [
    { title: t("about.values.rigor.title"), text: t("about.values.rigor.text") },
    { title: t("about.values.confidentiality.title"), text: t("about.values.confidentiality.text") },
    { title: t("about.values.excellence.title"), text: t("about.values.excellence.text") },
    { title: t("about.values.partnership.title"), text: t("about.values.partnership.text") },
  ];

  const timeline = [
    { year: "2010", title: t("about.timeline.y2010.title"), text: t("about.timeline.y2010.text") },
    { year: "2014", title: t("about.timeline.y2014.title"), text: t("about.timeline.y2014.text") },
    { year: "2019", title: t("about.timeline.y2019.title"), text: t("about.timeline.y2019.text") },
    { year: "2023", title: t("about.timeline.y2023.title"), text: t("about.timeline.y2023.text") },
    { year: "Hoje", title: t("about.timeline.today.title"), text: t("about.timeline.today.text") },
  ];

  return (
    <>
      {/* ══════════════════════════════════════════════════════════════════
          HERO — Dark Section
      ══════════════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-[#0A0A0F] pt-32 pb-24 lg:pt-40 lg:pb-32">
        <div className="absolute inset-0 z-0">
          <img src={aboutImg} alt="Equipa da DC SERVICE em reunião" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0F] via-[#0A0A0F]/80 to-[#0A0A0F]/20" />
          <div className="absolute inset-0 bg-[#0A0A0F]/50 mix-blend-multiply" />
        </div>

        <div className="container-page relative z-10">
          <Breadcrumbs items={[{ label: t("about.breadcrumbs") }]} />
          
          <div className="mt-8 max-w-4xl">
            <ScrollReveal>
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl text-white leading-tight">
                <TextReveal text={t("about.heroTitle")} />
              </h1>
              <p className="mt-8 text-xl leading-relaxed text-white/70">
                {t("about.heroDesc")}
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          MISSÃO / VISÃO / COMPROMISSO — Light Section
      ══════════════════════════════════════════════════════════════════ */}
      <section className="section-light py-20 lg:py-32">
        <div className="container-page">
          <div className="grid gap-8 md:grid-cols-3">
            <ScrollReveal delay={0.1}>
              <div className="rounded-3xl border border-[#E2E8F0] bg-white p-10 h-full shadow-sm transition-all duration-300 hover:shadow-md hover:border-orange-brand/30">
                <div className="text-xs font-bold uppercase tracking-[0.2em] text-orange-brand mb-4">{t("about.whatWeDo")}</div>
                <h2 className="font-display text-3xl text-[#0A1F44] mb-4">{t("about.missionTitle")}</h2>
                <p className="text-[#64748B] leading-relaxed">
                  {t("about.missionDesc")}
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="rounded-3xl border border-[#E2E8F0] bg-[#F8FAFC] p-10 h-full shadow-sm transition-all duration-300 hover:shadow-md hover:border-orange-brand/30">
                <div className="text-xs font-bold uppercase tracking-[0.2em] text-orange-brand mb-4">{t("about.whereWeGo")}</div>
                <h2 className="font-display text-3xl text-[#0A1F44] mb-4">{t("about.visionTitle")}</h2>
                <p className="text-[#64748B] leading-relaxed">
                  {t("about.visionDesc")}
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <div className="rounded-3xl border border-[#E2E8F0] bg-white p-10 h-full shadow-sm transition-all duration-300 hover:shadow-md hover:border-orange-brand/30">
                <div className="text-xs font-bold uppercase tracking-[0.2em] text-orange-brand mb-4">{t("about.howWeAct")}</div>
                <h2 className="font-display text-3xl text-[#0A1F44] mb-4">{t("about.commitmentTitle")}</h2>
                <p className="text-[#64748B] leading-relaxed">
                  {t("about.commitmentDesc")}
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          BANNER VISUAL INTERMÉDIO
      ══════════════════════════════════════════════════════════════════ */}
      <section className="relative h-[300px] lg:h-[400px] w-full overflow-hidden">
        <img src={aboutBannerImg} alt="Sede Corporativa" className="w-full h-full object-cover fixed-attachment" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1F44] via-[#0A1F44]/40 to-transparent mix-blend-multiply" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="h-16 w-16 mx-auto mb-4 border border-white/20 rounded-full flex items-center justify-center backdrop-blur-md">
              <span className="h-2 w-2 bg-orange-brand rounded-full animate-pulse shadow-[0_0_10px_rgba(249,115,22,0.8)]" />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          VALORES — Light Section (Gray Background)
      ══════════════════════════════════════════════════════════════════ */}
      <section className="section-light py-20 lg:py-32 bg-[#F1F5F9]">
        <div className="container-page">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-orange-brand mb-4">{t("about.valuesBadge")}</p>
              <h2 className="font-display text-4xl text-[#0A1F44] sm:text-5xl">{t("about.valuesTitle")}</h2>
            </div>
          </ScrollReveal>
          
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, index) => (
              <ScrollReveal key={v.title} delay={index * 0.1}>
                <div className="group rounded-2xl border border-[#E2E8F0] bg-white p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#F8FAFC] text-[#0A1F44] transition-colors group-hover:bg-orange-brand group-hover:text-white mb-6">
                    <span className="font-display text-2xl">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#0A1F44] mb-3">{v.title}</h3>
                  <p className="text-sm leading-relaxed text-[#64748B]">{v.text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          TRAJETÓRIA — Light Section
      ══════════════════════════════════════════════════════════════════ */}
      <section className="section-light py-20 lg:py-32 bg-white">
        <div className="container-page max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-20">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-orange-brand mb-4">{t("about.historyBadge")}</p>
              <h2 className="font-display text-4xl text-[#0A1F44] sm:text-5xl">{t("about.historyTitle")}</h2>
            </div>
            
            <div className="relative border-l-2 border-[#E2E8F0] pl-8 md:pl-12 ml-4 md:ml-0">
              {timeline.map((t, i) => (
                <div key={t.year} className="relative pb-16 last:pb-0 group">
                  {/* Timeline Dot */}
                  <span className="absolute -left-[41px] md:-left-[57px] flex h-5 w-5 items-center justify-center rounded-full bg-white border-2 border-orange-brand shadow-[0_0_10px_rgba(249,115,22,0.5)] transition-transform duration-300 group-hover:scale-125" />
                  
                  <div className="rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-8 transition-all duration-300 group-hover:border-orange-brand/30 group-hover:bg-white group-hover:shadow-md">
                    <div className="text-sm font-bold tracking-[0.2em] text-orange-brand mb-2">{t.year}</div>
                    <h3 className="text-2xl font-display text-[#0A1F44] mb-3">{t.title}</h3>
                    <p className="text-base text-[#64748B] leading-relaxed">{t.text}</p>
                    
                    {t.year === "2010" && (
                      <div className="mt-6 rounded-xl overflow-hidden h-48 border border-[#E2E8F0]">
                        <img src={timeline1Img} className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" alt="Fundação 2010" />
                      </div>
                    )}
                    {t.year === "Hoje" && (
                      <div className="mt-6 rounded-xl overflow-hidden h-48 border border-[#E2E8F0]">
                        <img src={timeline2Img} className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" alt="Multidisciplinar Hoje" />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
