"use client";

import { motion, useInView } from "motion/react";
import { useRef, ReactNode } from "react";

type Props = {
  children: ReactNode;
  y?: number;
};

export default function MotionWrapper({ children, y = 30 }: Props) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
