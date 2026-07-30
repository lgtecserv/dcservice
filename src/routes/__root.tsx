import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";
import { I18nextProvider, useTranslation } from "react-i18next";
import i18n from "../i18n";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";
import { WhatsAppFloat } from "../components/WhatsAppFloat";
import logo from "../assets/dc-service-logo.png.asset.json";
import favicon from "../assets/favicon.jpg";
import { AnimatePresence } from "framer-motion";
import { PageTransition } from "../components/animations/PageTransition";

function NotFoundComponent() {
  const { t } = useTranslation();
  return (
    <div className="flex min-h-[60vh] items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl text-navy">{t('root.404.title')}</h1>
        <h2 className="mt-4 text-xl font-semibold">{t('root.404.subtitle')}</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          {t('root.404.description')}
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-navy px-5 py-2.5 text-sm font-medium text-navy-foreground hover:bg-navy/90"
          >
            {t('root.404.back')}
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  const { t } = useTranslation();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return (
    <div className="flex min-h-[60vh] items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold">{t('root.error.title')}</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          {t('root.error.description')}
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="rounded-md bg-navy px-4 py-2 text-sm font-medium text-navy-foreground hover:bg-navy/90"
          >
            {t('root.error.retry')}
          </button>
          <a href="/" className="rounded-md border border-input bg-background px-4 py-2 text-sm font-medium hover:bg-secondary">
            {t('root.error.back')}
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "DC SERVICE, LDA — Soluções Empresariais Integradas em Moçambique" },
      { name: "description", content: "Consultoria, tecnologia, cibersegurança, logística, procurement, RH, contabilidade e comércio internacional. Um parceiro corporativo em Moçambique." },
      { name: "author", content: "DC SERVICE, LDA" },
      { name: "theme-color", content: "#0A1F44" },
      { property: "og:site_name", content: "DC SERVICE, LDA" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "google-site-verification", content: "BsJoQK5doK63wNjlIZBPDMlNksuxVjIXtmxnAFCRa2w" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/jpeg", href: favicon },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Instrument+Serif&display=swap" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "DC SERVICE, LDA",
          description:
            "Empresa moçambicana de consultoria, tecnologia, logística, procurement, RH, contabilidade e comércio internacional.",
          address: { "@type": "PostalAddress", addressLocality: "Maputo", addressCountry: "MZ" },
          telephone: ["+258863013135", "+258853013335", "+27649124839"],
          email: "geral@dcservice.co.mz",
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="pt">
      <head>
        <HeadContent />
      </head>
      <body className="bg-[#0A0A0F]">
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const router = useRouter();

  useEffect(() => {
    return router.subscribe("onResolved", ({ toLocation }) => {
      if (!toLocation.pathname.startsWith('/en') && i18n.language !== 'pt') {
        i18n.changeLanguage('pt');
        document.documentElement.lang = 'pt';
      }
    });
  }, [router]);

  return (
    <I18nextProvider i18n={i18n}>
      <QueryClientProvider client={queryClient}>
      <div className="flex min-h-dvh flex-col bg-[#0A0A0F]">
        <SiteHeader />
        <main className="flex-1">
          <AnimatePresence mode="wait">
            <PageTransition>
              <Outlet />
            </PageTransition>
          </AnimatePresence>
        </main>
        <SiteFooter />
        <WhatsAppFloat />
      </div>
    </QueryClientProvider>
    </I18nextProvider>
  );
}
