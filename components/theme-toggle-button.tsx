"use client";

import { useEffect, useState } from "react";
import { motion, type Transition } from "motion/react";
import { Sun, Moon } from "lucide-react";

const spring: Transition = { type: "spring", stiffness: 700, damping: 30 };

export const ThemeToggleButton = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.getAttribute("data-theme") === "dark");
  }, []);

  const toggle = () => {
    const next = !isDark;
    document.documentElement.setAttribute(
      "data-theme",
      next ? "dark" : "light",
    );
    localStorage.setItem("theme", next ? "dark" : "light");
    setIsDark(next);
  };

  return (
    <div
      onClick={toggle}
      data-ison={isDark ? "dark" : "light"}
      className="w-15 h-7.5 flex justify-start data-[ison=dark]:justify-end rounded-[50px] p-1.25 cursor-pointer bg-[rgba(235,149,52,0.4)] data-[ison=dark]:bg-[rgba(149,52,235,0.4)] transition-colors duration-300"
    >
      <motion.div
        layout
        transition={spring}
        className="w-5 h-5 bg-white rounded-[40px] flex items-center justify-center"
      >
        {isDark ? (
          <Moon size={12} color="#9534eb" />
        ) : (
          <Sun size={12} color="#eb9534" />
        )}
      </motion.div>
    </div>
  );
};
