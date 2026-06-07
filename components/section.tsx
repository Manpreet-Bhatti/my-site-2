"use client";

import { motion, useReducedMotion } from "motion/react";

interface SectionProps {
  children: React.ReactNode;
  delay?: number;
}

const Section = ({ children, delay = 0 }: SectionProps) => {
  const reduced = useReducedMotion();

  return (
    <motion.div
      className="mb-6"
      initial={reduced ? {} : { y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={reduced ? { duration: 0 } : { duration: 0.8, delay }}
    >
      {children}
    </motion.div>
  );
};

export default Section;
