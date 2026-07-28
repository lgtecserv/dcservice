import { useEffect, useRef, useState } from "react";

export function StatCounter({ value, suffix = "", label }: { value: number; suffix?: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [n, setN] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          const start = performance.now();
          const dur = 1400;
          const step = (t: number) => {
            const p = Math.min(1, (t - start) / dur);
            const eased = 1 - Math.pow(1 - p, 3);
            setN(Math.round(value * eased));
            if (p < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
          io.disconnect();
        }
      });
    }, { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="text-center">
      <div className="font-display text-5xl text-navy sm:text-6xl">
        {n}
        <span className="text-cyan-brand">{suffix}</span>
      </div>
      <div className="mt-2 text-sm text-muted-foreground">{label}</div>
    </div>
  );
}
