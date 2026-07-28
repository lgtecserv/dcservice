import { Link } from "@tanstack/react-router";
import { Menu, X, ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import logo from "../assets/dc-service-logo.png.asset.json";
import { services } from "../content/services";
import { company } from "../content/company";

const navItems: { to: string; label: string; hasMenu?: boolean }[] = [
  { to: "/", label: "Início" },
  { to: "/quem-somos", label: "Quem Somos" },
  { to: "/servicos", label: "Serviços", hasMenu: true },
  { to: "/parceiros", label: "Parceiros" },
  { to: "/blog", label: "Blog" },
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
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-background/85 backdrop-blur-lg border-b border-border shadow-[0_1px_0_0_rgba(10,31,68,0.04)]"
          : "bg-background/60 backdrop-blur"
      }`}
    >
      <div className="container-page flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center gap-3" aria-label={company.name}>
          <img src={logo.url} alt="" width={40} height={40} className="h-10 w-10 object-contain" />
          <div className="flex flex-col leading-none">
            <span className="text-[15px] font-semibold tracking-tight text-navy">DC SERVICE</span>
            <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">LDA</span>
          </div>
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
                  className="inline-flex items-center gap-1 px-4 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-navy"
                  activeProps={{ className: "text-navy" }}
                >
                  {item.label}
                  <ChevronDown className="h-3.5 w-3.5" />
                </Link>
                {servicesOpen && (
                  <div className="absolute left-1/2 top-full -translate-x-1/2 pt-3">
                    <div className="w-[560px] rounded-xl border border-border bg-popover p-4 shadow-2xl">
                      <div className="grid grid-cols-2 gap-1">
                        {services.map((s) => (
                          <Link
                            key={s.slug}
                            to="/servicos/$slug"
                            params={{ slug: s.slug }}
                            className="flex items-start gap-3 rounded-lg p-3 transition-colors hover:bg-secondary"
                          >
                            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-navy/5 text-navy">
                              <s.icon className="h-4 w-4" />
                            </span>
                            <span className="text-sm font-medium text-foreground">{s.title}</span>
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
                className="px-4 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-navy"
                activeProps={{ className: "text-navy" }}
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/orcamento"
            className="hidden sm:inline-flex items-center rounded-md bg-navy px-4 py-2.5 text-sm font-medium text-navy-foreground shadow-sm transition-all hover:bg-navy/90 hover:shadow-md"
          >
            Solicitar Orçamento
          </Link>
          <button
            type="button"
            className="lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-md text-foreground hover:bg-secondary"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <nav className="container-page py-4 flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-sm font-medium text-foreground hover:bg-secondary"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/orcamento"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-md bg-navy px-3 py-3 text-center text-sm font-medium text-navy-foreground"
            >
              Solicitar Orçamento
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
