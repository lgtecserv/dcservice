import { motion } from "framer-motion";
import { ReactNode } from "react";
import { useRouterState } from "@tanstack/react-router";

interface PageTransitionProps {
  children: ReactNode;
}

export function PageTransition({ children }: PageTransitionProps) {
  const router = useRouterState();
  
  return (
    <motion.div
      key={router.location.pathname}
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ 
        type: "spring",
        stiffness: 260,
        damping: 20 
      }}
    >
      {children}
    </motion.div>
  );
}
