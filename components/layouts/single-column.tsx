"use client";

import { motion } from "motion/react";

const variants = {
  hidden: { opacity: 0, y: 20 },
  enter: { opacity: 1, y: 0 },
};

const SingleColumn = ({ children }: { children: React.ReactNode }) => (
  <motion.article
    initial="hidden"
    animate="enter"
    variants={variants}
    transition={{ duration: 0.4, ease: "easeInOut" }}
    className="relative"
  >
    {children}
  </motion.article>
);

export default SingleColumn;
