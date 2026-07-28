import { MessageCircle } from "lucide-react";
import { company } from "../content/company";

export function WhatsAppFloat() {
  return (
    <a
      href={`https://wa.me/${company.whatsapp}?text=${encodeURIComponent("Olá, gostaria de mais informações sobre os vossos serviços.")}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar via WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#25D366]/30"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}
