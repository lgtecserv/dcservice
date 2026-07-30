import { useState, type FormEvent } from "react";
import { z } from "zod";
import { useCompany } from "../content/company";
import { useTranslation } from "react-i18next";

type Props = {
  variant?: "contact" | "quote" | "compact";
  defaultService?: string;
};

export function ContactForm({ variant = "contact", defaultService }: Props) {
  const { t } = useTranslation();
  const company = useCompany();
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  const schema = z.object({
    name: z.string().trim().min(2, t("contactForm.nameError")).max(100),
    email: z.string().trim().email(t("contactForm.emailError")).max(255),
    phone: z.string().trim().max(30).optional().or(z.literal("")),
    company: z.string().trim().max(120).optional().or(z.literal("")),
    service: z.string().trim().max(120).optional().or(z.literal("")),
    message: z.string().trim().min(10, t("contactForm.messageError")).max(2000),
  });

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
    const header = variant === "quote" ? "*PEDIDO DE ORÇAMENTO*" : "*NOVO CONTACTO*";
    const body = encodeURIComponent(
      `${header}\n\n*Nome:* ${parsed.data.name}\n${parsed.data.email ? `*Email:* ${parsed.data.email}\n` : ""}${parsed.data.phone ? `*Telefone:* ${parsed.data.phone}\n` : ""}${parsed.data.company ? `*Empresa:* ${parsed.data.company}\n` : ""}${parsed.data.service ? `*Serviço:* ${parsed.data.service}\n` : ""}\n*Mensagem:*\n${parsed.data.message}`
    );
    window.open(`https://wa.me/${company.whatsapp}?text=${body}`, "_blank");
    setStatus("sent");
    (e.target as HTMLFormElement).reset();
  };

  const field =
    "w-full rounded-md border border-input bg-background px-3.5 py-2.5 text-sm text-foreground shadow-xs placeholder:text-muted-foreground focus:border-cyan-brand focus:outline-none focus:ring-2 focus:ring-cyan-brand/25";
  const label = "text-xs font-medium uppercase tracking-wider text-muted-foreground";

  return (
    <form onSubmit={onSubmit} className="grid gap-4 sm:grid-cols-2">
      <div className="flex flex-col gap-1.5">
        <label htmlFor="cf-name" className={label}>{t("contactForm.nameLabel")}</label>
        <input id="cf-name" name="name" required className={field} placeholder={t("contactForm.namePlaceholder")} />
        {errors.name && <span className="text-xs text-destructive">{errors.name}</span>}
      </div>
      <div className="flex flex-col gap-1.5">
        <label htmlFor="cf-email" className={label}>{t("contactForm.emailLabel")}</label>
        <input id="cf-email" type="email" name="email" required className={field} placeholder={t("contactForm.emailPlaceholder")} />
        {errors.email && <span className="text-xs text-destructive">{errors.email}</span>}
      </div>
      <div className="flex flex-col gap-1.5">
        <label htmlFor="cf-phone" className={label}>{t("contactForm.phoneLabel")}</label>
        <input id="cf-phone" name="phone" className={field} placeholder={t("contactForm.phonePlaceholder")} />
      </div>
      <div className="flex flex-col gap-1.5">
        <label htmlFor="cf-company" className={label}>{t("contactForm.companyLabel")}</label>
        <input id="cf-company" name="company" className={field} placeholder={t("contactForm.companyPlaceholder")} />
      </div>
      <div className="flex flex-col gap-1.5 sm:col-span-2">
        <label htmlFor="cf-service" className={label}>{t("contactForm.serviceLabel")}</label>
        <input id="cf-service" name="service" defaultValue={defaultService} className={field} placeholder={t("contactForm.servicePlaceholder")} />
      </div>
      <div className="flex flex-col gap-1.5 sm:col-span-2">
        <label htmlFor="cf-message" className={label}>{t("contactForm.messageLabel")}</label>
        <textarea id="cf-message" name="message" rows={5} required className={field} placeholder={t("contactForm.messagePlaceholder")} />
        {errors.message && <span className="text-xs text-destructive">{errors.message}</span>}
      </div>
      <div className="sm:col-span-2 flex flex-wrap items-center gap-3 pt-2">
        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-md bg-orange-brand px-6 py-3 text-sm font-bold text-white shadow-sm transition-all hover:bg-orange-500 hover:shadow-md"
        >
          {variant === "quote" ? t("contactForm.sendQuote") : t("contactForm.sendMessage")}
        </button>
        <a
          href={`https://wa.me/${company.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-md border border-orange-brand bg-white px-6 py-3 text-sm font-bold text-orange-brand hover:bg-orange-brand/5 transition-colors"
        >
          {t("contactForm.talkWhatsapp")}
        </a>
        {status === "sent" && (
          <span className="text-xs text-muted-foreground">{t("contactForm.openingWhatsapp")}</span>
        )}
      </div>
    </form>
  );
}
