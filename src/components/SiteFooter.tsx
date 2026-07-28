import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Linkedin, Facebook, Instagram } from "lucide-react";
import logo from "../assets/dc-service-logo.png.asset.json";
import { company } from "../content/company";
import { services } from "../content/services";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-navy text-navy-foreground">
      <div className="container-page py-16">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3">
              <img src={logo.url} alt="" width={44} height={44} className="h-11 w-11 object-contain" />
              <div className="leading-none">
                <div className="text-base font-semibold">DC SERVICE, LDA</div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-navy-foreground/60">
                  Soluções Empresariais
                </div>
              </div>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-navy-foreground/70">
              {company.description}
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a href={company.social.linkedin} aria-label="LinkedIn" className="flex h-10 w-10 items-center justify-center rounded-md border border-navy-foreground/15 transition-colors hover:bg-navy-foreground/10">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href={company.social.facebook} aria-label="Facebook" className="flex h-10 w-10 items-center justify-center rounded-md border border-navy-foreground/15 transition-colors hover:bg-navy-foreground/10">
                <Facebook className="h-4 w-4" />
              </a>
              <a href={company.social.instagram} aria-label="Instagram" className="flex h-10 w-10 items-center justify-center rounded-md border border-navy-foreground/15 transition-colors hover:bg-navy-foreground/10">
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-navy-foreground/60">
              Serviços
            </h3>
            <ul className="mt-5 space-y-2.5">
              {services.slice(0, 6).map((s) => (
                <li key={s.slug}>
                  <Link
                    to="/servicos/$slug"
                    params={{ slug: s.slug }}
                    className="text-sm text-navy-foreground/80 transition-colors hover:text-cyan-brand"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/servicos" className="text-sm font-medium text-cyan-brand">
                  Ver todos os serviços →
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-navy-foreground/60">
              Empresa
            </h3>
            <ul className="mt-5 space-y-2.5">
              <li><Link to="/quem-somos" className="text-sm text-navy-foreground/80 hover:text-cyan-brand">Quem Somos</Link></li>
              <li><Link to="/parceiros" className="text-sm text-navy-foreground/80 hover:text-cyan-brand">Parceiros</Link></li>
              <li><Link to="/blog" className="text-sm text-navy-foreground/80 hover:text-cyan-brand">Blog</Link></li>
              <li><Link to="/contactos" className="text-sm text-navy-foreground/80 hover:text-cyan-brand">Contactos</Link></li>
              <li><Link to="/orcamento" className="text-sm text-navy-foreground/80 hover:text-cyan-brand">Orçamento</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-navy-foreground/60">
              Contactos
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-navy-foreground/80">
              {company.phones.map((p) => (
                <li key={p.tel} className="flex items-start gap-2.5">
                  <Phone className="mt-0.5 h-3.5 w-3.5 text-cyan-brand" />
                  <a href={`tel:${p.tel}`} className="hover:text-cyan-brand">{p.value}</a>
                </li>
              ))}
              {company.emails.map((e) => (
                <li key={e.value} className="flex items-start gap-2.5">
                  <Mail className="mt-0.5 h-3.5 w-3.5 text-cyan-brand" />
                  <a href={`mailto:${e.value}`} className="break-all hover:text-cyan-brand">{e.value}</a>
                </li>
              ))}
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-3.5 w-3.5 text-cyan-brand" />
                <span>{company.address}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col-reverse items-start justify-between gap-4 border-t border-navy-foreground/10 pt-6 sm:flex-row sm:items-center">
          <p className="text-xs text-navy-foreground/50">
            © {new Date().getFullYear()} DC SERVICE, LDA. Todos os direitos reservados.
          </p>
          <p className="text-xs text-navy-foreground/50">{company.hours}</p>
        </div>
      </div>
    </footer>
  );
}
