"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Code, Briefcase, Award, Coffee } from "lucide-react"

interface Stat {
  icon: React.ReactNode
  value: number
  label: string
  suffix?: string
  color: string
}

export default function StatsCounter() {
  const stats: Stat[] = [
    {
      icon: <Code className="h-8 w-8" />,
      value: 15,
      label: "Projects Completed",
      color: "from-blue-500 to-indigo-500",
    },
    {
      icon: <Briefcase className="h-8 w-8" />,
      value: 3,
      label: "Years Experience",
      suffix: "+",
      color: "from-indigo-500 to-purple-500",
    },
    {
      icon: <Award className="h-8 w-8" />,
      value: 5,
      label: "Certifications",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <Coffee className="h-8 w-8" />,
      value: 1250,
      label: "Cups of Coffee",
      suffix: "+",
      color: "from-pink-500 to-red-500",
    },
  ]

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <CounterCard key={index} stat={stat} index={index} />
      ))}
    </div>
  )
}

function CounterCard({ stat, index }: { stat: Stat; index: number }) {
  const [count, setCount] = useState(0)
  const controls = useAnimation()
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })

  useEffect(() => {
    if (inView) {
      controls.start("visible")

      const duration = 2000 // 2 seconds
      const interval = 20 // Update every 20ms
      const steps = duration / interval
      const increment = stat.value / steps

      let currentCount = 0
      const timer = setInterval(() => {
        currentCount += increment
        if (currentCount >= stat.value) {
          clearInterval(timer)
          setCount(stat.value)
        } else {
          setCount(Math.floor(currentCount))
        }
      }, interval)

      return () => clearInterval(timer)
    }
  }, [controls, inView, stat.value])

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, delay: index * 0.1 },
        },
      }}
      className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg border-2 border-primary/10 hover:border-primary/30 transition-all duration-300 hover:-translate-y-2"
    >
      <div
        className={`w-16 h-16 rounded-full bg-gradient-to-r ${stat.color} flex items-center justify-center text-white mb-4 mx-auto`}
      >
        {stat.icon}
      </div>

      <div className="text-center">
        <h3 className="text-3xl md:text-4xl font-bold mb-2 tabular-nums">
          {count}
          {stat.suffix || ""}
        </h3>
        <p className="text-gray-600 dark:text-gray-300">{stat.label}</p>
      </div>
    </motion.div>
  )
}
