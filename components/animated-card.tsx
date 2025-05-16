"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

interface AnimatedCardProps {
  children: ReactNode
  className?: string
  index?: number
}

export default function AnimatedCard({ children, className = "", index = 0 }: AnimatedCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-100px" }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className={className}
    >
      <Card className="h-full overflow-hidden border-2 border-primary/10 hover:border-primary/30 transition-colors duration-300 shadow-lg hover:shadow-primary/10">
        {children}
      </Card>
    </motion.div>
  )
}

export function AnimatedCardHeader({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <CardHeader className={className}>{children}</CardHeader>
}

export function AnimatedCardContent({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <CardContent className={className}>{children}</CardContent>
}

export function AnimatedCardFooter({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <CardFooter className={className}>{children}</CardFooter>
}
