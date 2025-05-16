"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"

interface SectionTransitionProps {
  children: ReactNode
}

export default function SectionTransition({ children }: SectionTransitionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
    >
      {children}
    </motion.div>
  )
}
