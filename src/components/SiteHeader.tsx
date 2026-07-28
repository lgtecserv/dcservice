import { Link } from "@tanstack/react-router";
import { Menu, X, ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import { services } from "../content/services";
import { company } from "../content/company";

const navItems: { to: string; label: string; hasMenu?: boolean }[] = [
  { to: "/", label: "Início" },
  { to: "/quem-somos", label: "Quem Somos" },
  { to: "/servicos", label: "Serviços", hasMenu: true },
  { to: "/contactos", label: "Contactos" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-2xl border-b border-[#E2E8F0] shadow-sm"
          : "bg-white/90 backdrop-blur-xl border-b border-[#E2E8F0]/50"
      }`}
    >
      <div className="container-page flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center" aria-label={company.name}>
          <img src={logo} alt="DC SERVICE, LDA" className="h-16 w-auto object-contain" />
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) =>
            item.hasMenu ? (
              <div
                key={item.to}
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <Link
                  to={item.to}
                  className="inline-flex items-center gap-1 px-4 py-2 text-sm font-medium text-[#0A1F44]/80 transition-colors hover:text-cyan-brand"
                  activeProps={{ className: "text-cyan-brand" }}
                >
                  {item.label}
                  <ChevronDown className="h-3.5 w-3.5" />
                </Link>
                {servicesOpen && (
                  <div className="absolute left-1/2 top-full -translate-x-1/2 pt-3">
                    <div className="w-[560px] rounded-2xl bg-white/95 backdrop-blur-2xl p-4 shadow-xl border border-[#E2E8F0]">
                      <div className="grid grid-cols-2 gap-1">
                        {services.map((s) => (
                          <Link
                            key={s.slug}
                            to="/servicos/$slug"
                            params={{ slug: s.slug }}
                            className="flex items-start gap-3 rounded-xl p-3 transition-all hover:bg-slate-50"
                          >
                            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-cyan-brand/10 text-cyan-brand">
                              <s.icon className="h-4 w-4" />
                            </span>
                            <span className="text-sm font-medium text-[#0A1F44]">{s.title}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.to}
                to={item.to}
                className="px-4 py-2 text-sm font-medium text-[#0A1F44]/80 transition-colors hover:text-cyan-brand"
                activeProps={{ className: "text-cyan-brand" }}
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/orcamento"
            className="hidden sm:inline-flex items-center rounded-full bg-[#0A1F44] px-6 py-2.5 text-sm font-medium text-white transition-all hover:bg-cyan-brand hover:text-[#0A1F44] hover:shadow-[0_0_25px_rgba(34,182,234,0.3)]"
          >
            Solicitar Orçamento
          </Link>
          <button
            type="button"
            className="lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-lg text-[#0A1F44] hover:bg-slate-100"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-[#E2E8F0] bg-white/95 backdrop-blur-2xl">
          <nav className="container-page py-4 flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-sm font-medium text-[#0A1F44]/80 hover:bg-slate-50 hover:text-cyan-brand transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/orcamento"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-[#0A1F44] px-4 py-3 text-center text-sm font-medium text-white hover:bg-cyan-brand hover:text-[#0A1F44] transition-all"
            >
              Solicitar Orçamento
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
