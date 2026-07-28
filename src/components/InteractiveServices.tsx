import { useState, useEffect, useRef } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { Service } from "../content/services";

export function InteractiveServices({ services }: { services: Service[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const ROTATION_INTERVAL = 5000;

  useEffect(() => {
    if (isHovered) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      setActiveIndex((current) => (current + 1) % services.length);
    }, ROTATION_INTERVAL);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isHovered, services.length]);

  const activeService = services[activeIndex];
  if (!activeService) return null;

  return (
    <div 
      className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Left: Service List (2-Column Grid on Desktop, Horizontal Scroll on Mobile) */}
      <div className="w-full lg:w-1/2 flex lg:grid lg:grid-cols-2 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 hide-scrollbar gap-2 lg:gap-3 snap-x lg:snap-none">
        {services.map((service, idx) => {
          const isActive = activeIndex === idx;
          return (
            <button
              key={service.slug}
              onClick={() => setActiveIndex(idx)}
              className={`group flex-shrink-0 snap-center w-64 lg:w-full text-left flex flex-col items-start gap-3 p-4 sm:p-5 rounded-2xl transition-all duration-500 ease-out relative overflow-hidden ${
                isActive 
                  ? "glass-card border-cyan-brand/25 shadow-[0_0_25px_-5px_rgba(34,182,234,0.12)] scale-[1.02]" 
                  : "border border-white/[0.04] hover:border-white/[0.08] hover:bg-white/[0.02] hover:-translate-y-1 hover:scale-[1.02] hover:shadow-xl"
              }`}
            >
              {/* Progress bar for Desktop */}
              {isActive && (
                <div className="absolute bottom-0 left-0 h-[2px] bg-cyan-brand/10 w-full hidden lg:block">
                  <div 
                    className="h-full bg-cyan-brand transition-all ease-linear"
                    style={{ 
                      width: isHovered ? "100%" : "100%", 
                      animation: isHovered ? "none" : `progress ${ROTATION_INTERVAL}ms linear`
                    }}
                  />
                </div>
              )}

              <div className={`flex items-center justify-center h-10 w-10 sm:h-12 sm:w-12 rounded-xl transition-colors ${
                isActive ? "bg-cyan-brand/15 text-cyan-brand" : "bg-white/[0.04] text-white/50 group-hover:text-cyan-brand"
              }`}
              >
                <service.icon className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>
              <h3 className={`font-semibold text-sm sm:text-sm leading-tight transition-colors ${
                isActive ? "text-white" : "text-white/50 group-hover:text-white/80"
              }`}
              >
                {service.title}
              </h3>
            </button>
          );
        })}
      </div>

      {/* Right: Active Content Panel */}
      <div className="w-full lg:w-1/2 relative min-h-[500px] sm:min-h-[550px]">
        {services.map((service, idx) => {
          const isActive = activeIndex === idx;
          return (
            <div
              key={service.slug}
              className={`absolute top-0 left-0 w-full transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                isActive 
                  ? "opacity-100 translate-y-0 z-10 pointer-events-auto" 
                  : "opacity-0 translate-y-8 -z-10 pointer-events-none"
              }`}
            >
              <div className="rounded-3xl glass-card flex flex-col overflow-hidden h-full border-white/[0.08]">
                {/* Service Cover Image */}
                <div className="relative h-48 sm:h-64 w-full">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0F] via-[#0A0A0F]/40 to-transparent" />
                  
                  {/* Icon over image */}
                  <div className="absolute bottom-4 left-6 sm:left-8 glass h-12 w-12 rounded-xl text-cyan-brand flex items-center justify-center">
                    <service.icon className="h-6 w-6" />
                  </div>
                </div>

                <div className="p-6 sm:p-8 flex flex-col flex-1 bg-[#111118]/80">
                  <h3 className="font-display text-2xl sm:text-3xl text-white mb-4 leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-base sm:text-lg font-light leading-relaxed text-white/50 mb-8">
                    {service.short}
                  </p>
                  <div className="mt-auto">
                    <Link
                      to="/servicos/$slug"
                      params={{ slug: service.slug }}
                      className="inline-flex items-center gap-3 rounded-full neon-border bg-cyan-brand/10 px-6 sm:px-8 py-3.5 sm:py-4 text-xs sm:text-sm font-bold tracking-wide text-cyan-brand transition-all hover:bg-cyan-brand hover:text-[#0A0A0F] hover:shadow-[0_0_25px_rgba(34,182,234,0.3)]"
                    >
                      Detalhes do Serviço <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* CSS for progress animation */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes progress {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}} />
    </div>
  );
}
