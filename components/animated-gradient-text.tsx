"use client"

import { motion } from "framer-motion"

interface AnimatedGradientTextProps {
  text: string
  className?: string
}

export default function AnimatedGradientText({ text, className = "" }: AnimatedGradientTextProps) {
  return (
    <motion.span
      className={`gradient-text font-bold ${className}`}
      initial={{ backgroundPosition: "0% 50%" }}
      animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
      transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
    >
      {text}
    </motion.span>
  )
}
