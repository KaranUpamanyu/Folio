import React from "react";
import { motion } from "motion/react";

function MotionDiv({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      animate={{ opacity: 1, y: "0%" }}
      initial={{ opacity: 0, y: "3%" }}
      transition={{ duration: 0.4 }}
    >
      {children}
    </motion.div>
  );
}

export default MotionDiv;
