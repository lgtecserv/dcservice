import { useState, type FormEvent } from "react";
import { z } from "zod";
import { company } from "../content/company";

const schema = z.object({
  name: z.string().trim().min(2, "Nome muito curto").max(100),
  email: z.string().trim().email("Email inválido").max(255),
  phone: z.string().trim().max(30).optional().or(z.literal("")),
  company: z.string().trim().max(120).optional().or(z.literal("")),
  service: z.string().trim().max(120).optional().or(z.literal("")),
  message: z.string().trim().min(10, "Descreva um pouco mais").max(2000),
});

type Props = {
  variant?: "contact" | "quote" | "compact";
  defaultService?: string;
};

export function ContactForm({ variant = "contact", defaultService }: Props) {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd.entries());
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      parsed.error.issues.forEach((i) => (errs[String(i.path[0])] = i.message));
      setErrors(errs);
      return;
    }
    setErrors({});
    const body = encodeURIComponent(
      [
        `Nome: ${parsed.data.name}`,
        `Email: ${parsed.data.email}`,
        parsed.data.phone && `Telefone: ${parsed.data.phone}`,
        parsed.data.company && `Empresa: ${parsed.data.company}`,
        parsed.data.service && `Serviço: ${parsed.data.service}`,
        "",
        parsed.data.message,
      ].filter(Boolean).join("\n"),
    );
    const subject = encodeURIComponent(
      variant === "quote" ? "Pedido de Orçamento — Website" : "Contacto — Website",
    );
    window.location.href = `mailto:${company.emails[0].value}?subject=${subject}&body=${body}`;
    setStatus("sent");
    (e.target as HTMLFormElement).reset();
  };

  const field =
    "w-full rounded-md border border-input bg-background px-3.5 py-2.5 text-sm text-foreground shadow-xs placeholder:text-muted-foreground focus:border-cyan-brand focus:outline-none focus:ring-2 focus:ring-cyan-brand/25";
  const label = "text-xs font-medium uppercase tracking-wider text-muted-foreground";

  return (
    <form onSubmit={onSubmit} className="grid gap-4 sm:grid-cols-2">
      <div className="flex flex-col gap-1.5">
        <label htmlFor="cf-name" className={label}>Nome *</label>
        <input id="cf-name" name="name" required className={field} placeholder="O seu nome" />
        {errors.name && <span className="text-xs text-destructive">{errors.name}</span>}
      </div>
      <div className="flex flex-col gap-1.5">
        <label htmlFor="cf-email" className={label}>Email *</label>
        <input id="cf-email" type="email" name="email" required className={field} placeholder="voce@empresa.com" />
        {errors.email && <span className="text-xs text-destructive">{errors.email}</span>}
      </div>
      <div className="flex flex-col gap-1.5">
        <label htmlFor="cf-phone" className={label}>Telefone</label>
        <input id="cf-phone" name="phone" className={field} placeholder="+258 ..." />
      </div>
      <div className="flex flex-col gap-1.5">
        <label htmlFor="cf-company" className={label}>Empresa</label>
        <input id="cf-company" name="company" className={field} placeholder="Nome da empresa" />
      </div>
      <div className="flex flex-col gap-1.5 sm:col-span-2">
        <label htmlFor="cf-service" className={label}>Serviço de interesse</label>
        <input id="cf-service" name="service" defaultValue={defaultService} className={field} placeholder="Ex.: Consultoria, Informática..." />
      </div>
      <div className="flex flex-col gap-1.5 sm:col-span-2">
        <label htmlFor="cf-message" className={label}>Mensagem *</label>
        <textarea id="cf-message" name="message" rows={5} required className={field} placeholder="Descreva o que procura..." />
        {errors.message && <span className="text-xs text-destructive">{errors.message}</span>}
      </div>
      <div className="sm:col-span-2 flex flex-wrap items-center gap-3 pt-2">
        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-md bg-navy px-6 py-3 text-sm font-medium text-navy-foreground shadow-sm transition-all hover:bg-navy/90 hover:shadow-md"
        >
          {variant === "quote" ? "Enviar Pedido de Orçamento" : "Enviar Mensagem"}
        </button>
        <a
          href={`https://wa.me/${company.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-md border border-border bg-background px-6 py-3 text-sm font-medium text-foreground hover:bg-secondary"
        >
          Falar no WhatsApp
        </a>
        {status === "sent" && (
          <span className="text-xs text-muted-foreground">A abrir o seu cliente de email…</span>
        )}
      </div>
    </form>
  );
}
