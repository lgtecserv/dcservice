import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export interface FAQItem {
  question: string;
  answer: string;
}

export function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First one open by default

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-3xl mx-auto flex flex-col gap-4">
      {items.map((faq, index) => {
        const isOpen = openIndex === index;

        return (
          <div
            key={index}
            className={`rounded-2xl border transition-all duration-300 ${
              isOpen 
                ? "border-cyan-brand/30 bg-white shadow-[0_0_30px_-5px_rgba(34,182,234,0.1)]" 
                : "border-[#E2E8F0] bg-white hover:border-cyan-brand/30 hover:shadow-sm"
            }`}
          >
            <button
              onClick={() => toggleAccordion(index)}
              className="flex w-full items-center justify-between p-6 text-left"
            >
              <span className={`font-semibold text-lg transition-colors duration-300 ${isOpen ? "text-[#0A1F44]" : "text-[#0A1F44]/80"}`}>
                {faq.question}
              </span>
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors ${
                  isOpen ? "bg-cyan-brand/10 text-cyan-brand" : "bg-[#F1F5F9] text-[#64748B]"
                }`}
              >
                <ChevronDown className="h-4 w-4" />
              </motion.div>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20, mass: 0.8 }}
                >
                  <div className="px-6 pb-6 pt-0 text-[#64748B] font-light leading-relaxed">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
