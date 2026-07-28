import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  width?: "fit-content" | "100%";
}

export function ScrollReveal({
  children,
  className = "",
  delay = 0,
  width = "100%",
}: ScrollRevealProps) {
  return (
    <div style={{ width, position: "relative" }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 40, scale: 0.96, filter: "blur(5px)" },
          visible: { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10%" }}
        transition={{
          type: "spring",
          damping: 25,
          stiffness: 100,
          mass: 0.8,
          delay: delay,
        }}
        className={className}
      >
        {children}
      </motion.div>
    </div>
  );
}
