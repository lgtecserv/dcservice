import { motion } from "framer-motion";

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
  highlightWords?: string[];
  highlightClass?: string;
}

export function TextReveal({ text, className = "", delay = 0, highlightWords = [], highlightClass = "" }: TextRevealProps) {
  // Split text into words
  const words = text.split(" ");

  // Variants for the container
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: delay },
    },
  };

  // Variants for each word
  const child = {
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring" as const,
        damping: 20,
        stiffness: 100,
        mass: 0.8,
      },
    },
    hidden: {
      opacity: 0,
      y: 30,
      filter: "blur(6px)",
      transition: {
        type: "spring" as const,
        damping: 20,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.span
      style={{ display: "inline-block" }}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className={className}
    >
      {words.map((word, index) => {
        const cleanWord = word.replace(/[.,;!?]/g, "");
        const isHighlighted = highlightWords.includes(cleanWord) || highlightWords.includes(word);
        
        return (
          <span key={index} style={{ overflow: "hidden", display: "inline-block", marginRight: "0.25em" }}>
            <motion.span 
              variants={child} 
              style={{ display: "inline-block" }}
              className={isHighlighted ? highlightClass : ""}
            >
              {word}
            </motion.span>
          </span>
        );
      })}
    </motion.span>
  );
}
