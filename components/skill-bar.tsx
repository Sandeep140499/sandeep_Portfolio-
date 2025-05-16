"use client"

import { useEffect, useState } from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"

interface SkillBarProps {
  name: string
  level: number
  color?: string
  icon?: string
  index?: number
}

export default function SkillBar({
  name,
  level,
  color = "from-blue-500 to-indigo-500",
  icon,
  index = 0,
}: SkillBarProps) {
  const controls = useAnimation()
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  const barVariants = {
    hidden: { width: 0 },
    visible: {
      width: `${level}%`,
      transition: {
        duration: 1.5,
        delay: index * 0.2,
        ease: [0.17, 0.67, 0.83, 0.67],
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="mb-6"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center gap-2">
          {icon && <span className="text-xl">{icon}</span>}
          <h4 className="font-medium">{name}</h4>
        </div>
        <motion.span className="text-sm font-medium" animate={{ opacity: isHovered ? 1 : 0.7 }}>
          {level}%
        </motion.span>
      </div>
      <div className="h-3 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <motion.div
          className={`h-full bg-gradient-to-r ${color} rounded-full relative`}
          variants={barVariants}
          initial="hidden"
          animate={controls}
        >
          <motion.div
            className="absolute top-0 right-0 h-full w-2 bg-white opacity-30"
            animate={{
              x: [0, 40, 0],
              opacity: isHovered ? [0, 0.5, 0] : 0,
            }}
            transition={{
              duration: 1.5,
              repeat: isHovered ? Number.POSITIVE_INFINITY : 0,
              repeatType: "loop",
            }}
          />
        </motion.div>
      </div>
    </motion.div>
  )
}
