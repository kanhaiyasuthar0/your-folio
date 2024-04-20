"use client";
import { motion } from "framer-motion";
export default function Template({ children }: { children: React.ReactNode }) {
  const spring = {
    type: "spring",
    damping: 10,
    stiffness: 100,
  };

  return (
    <motion.div
      transition={spring}
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 100 }}
    >
      {children}
    </motion.div>
  );
}
