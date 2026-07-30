import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Facebook, Instagram } from "lucide-react";
import logo from "../assets/logo.png";
import { useCompany } from "../content/company";
import { useServices } from "../content/services";

export function SiteFooter() {
  const company = useCompany();
  const services = useServices();

  return (
    <footer className="bg-[#060609] text-white border-t border-white/[0.04]">
      <div className="container-page py-16">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="flex items-center">
              <img src={logo} alt="DC SERVICE, LDA" className="h-16 w-auto object-contain brightness-0 invert" />
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/40">
              {company.description}
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a href={company.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.06] text-white/40 transition-all hover:border-orange-brand/30 hover:text-orange-brand hover:shadow-[0_0_15px_-3px_rgba(249,115,22,0.15)]">
                <Facebook className="h-4 w-4" />
              </a>
              <a href={company.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.06] text-white/40 transition-all hover:border-orange-brand/30 hover:text-orange-brand hover:shadow-[0_0_15px_-3px_rgba(249,115,22,0.15)]">
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/30">
              Serviços
            </h3>
            <ul className="mt-5 space-y-2.5">
              {services.slice(0, 6).map((s) => (
                <li key={s.slug}>
                  <Link
                    to="/servicos/$slug"
                    params={{ slug: s.slug }}
                    className="text-sm text-white/50 transition-colors hover:text-orange-brand"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/servicos" className="text-sm font-medium text-orange-brand">
                  Ver todos os serviços →
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/30">
              Empresa
            </h3>
            <ul className="mt-5 space-y-2.5">
              <li><Link to="/quem-somos" className="text-sm text-white/50 hover:text-orange-brand transition-colors">Quem Somos</Link></li>
              <li><Link to="/contactos" className="text-sm text-white/50 hover:text-orange-brand transition-colors">Contactos</Link></li>
              <li><Link to="/orcamento" className="text-sm text-white/50 hover:text-orange-brand transition-colors">Orçamento</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/30">
              Contactos
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-white/50">
              {company.phones.map((p) => (
                <li key={p.tel} className="flex items-start gap-2.5">
                  <Phone className="mt-0.5 h-3.5 w-3.5 text-orange-brand/60" />
                  <a href={`tel:${p.tel}`} className="hover:text-orange-brand transition-colors">{p.value}</a>
                </li>
              ))}
              {company.emails.map((e) => (
                <li key={e.value} className="flex items-start gap-2.5">
                  <Mail className="mt-0.5 h-3.5 w-3.5 text-orange-brand/60" />
                  <a href={`mailto:${e.value}`} className="break-all hover:text-orange-brand transition-colors">{e.value}</a>
                </li>
              ))}
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-3.5 w-3.5 text-orange-brand/60" />
                <span>{company.address}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/[0.04] pt-6 sm:flex-row sm:items-start">
          <div className="flex flex-col gap-2 items-center sm:items-start text-center sm:text-left">
            <p className="text-xs text-white/25">
              © {new Date().getFullYear()} DC SERVICE, LDA. Todos os direitos reservados.
            </p>
            <p className="text-xs text-white/25">
              Desenvolvido por <a href="https://www.lgtecserv.com" target="_blank" rel="noopener noreferrer" className="text-orange-brand hover:underline">LG Tecserv</a>
            </p>
          </div>
          <p className="text-xs text-white/25">{company.hours}</p>
        </div>
      </div>
    </footer>
  );
}
