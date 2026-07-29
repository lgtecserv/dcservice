import { motion } from "framer-motion";

const placeholderClients = [
  "GRUPO INDUSTRIAL",
  "FINTECH SA",
  "CONSTRUTORA GLOBAL",
  "LOGISTICS CORP",
  "MINING SOLUTIONS",
  "TECH PARTNERS",
];

export function ClientMarquee() {
  return (
    <div className="w-full bg-[#0A0A0F] border-b border-white/[0.04] py-8 overflow-hidden relative">
      {/* Left/Right Fade Gradients for a seamless effect */}
      <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-[#0A0A0F] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-[#0A0A0F] to-transparent z-10 pointer-events-none" />
      
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        <p className="text-center text-[10px] font-bold uppercase tracking-[0.2em] text-white/30 mb-6">
          Empresas que confiam na DC Service
        </p>
        
        <div className="flex whitespace-nowrap overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="animate-marquee flex items-center w-max">
            {/* Render 3 sets to ensure continuous loop without gaps */}
            {[...Array(3)].map((_, setIdx) => (
              <div key={setIdx} className="flex shrink-0 items-center justify-around gap-12 md:gap-24 px-6 md:px-12">
                {placeholderClients.map((client, idx) => (
                  <span
                    key={`${setIdx}-${idx}`}
                    className="font-display text-xl md:text-2xl font-bold text-white/20 transition-colors duration-500 hover:text-white/80 select-none"
                  >
                    {client}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
