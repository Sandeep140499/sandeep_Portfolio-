"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import AnimatedCard, { AnimatedCardContent, AnimatedCardHeader } from "./animated-card"

export default function Education() {
  const educations = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "University of Technology",
      period: "2018 - 2022",
      description:
        "Studied core computer science subjects including data structures, algorithms, database management, and software engineering. Graduated with honors.",
      courses: ["Data Structures & Algorithms", "Database Systems", "Web Development", "Software Engineering"],
    },
    {
      degree: "MERN Stack Development Bootcamp",
      institution: "PrepBytes",
      period: "Apr 2022 - Feb 2023",
      description:
        "Intensive bootcamp focused on full-stack web development using the MERN stack. Completed several projects and gained hands-on experience.",
      courses: ["React.js", "Node.js", "Express.js", "MongoDB", "RESTful API Development"],
    },
    {
      degree: "Advanced JavaScript Certification",
      institution: "Udemy",
      period: "2021",
      description:
        "Comprehensive course covering advanced JavaScript concepts including ES6+ features, asynchronous programming, and modern JavaScript patterns.",
      courses: ["ES6+ Features", "Asynchronous JavaScript", "JavaScript Design Patterns", "Functional Programming"],
    },
  ]

  return (
    <div className="space-y-8">
      {educations.map((edu, index) => (
        <AnimatedCard key={index} index={index}>
          <AnimatedCardHeader>
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
              <motion.h3
                className="text-xl font-bold"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
              >
                {edu.degree}
              </motion.h3>
              <Badge
                variant="outline"
                className="w-fit bg-gradient-to-r from-blue-100 to-indigo-100 text-primary border-primary/20"
              >
                {edu.period}
              </Badge>
            </div>
            <motion.p
              className="text-gray-600 font-medium"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              {edu.institution}
            </motion.p>
          </AnimatedCardHeader>
          <AnimatedCardContent>
            <motion.p
              className="text-gray-600 mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
            >
              {edu.description}
            </motion.p>
            <div className="flex flex-wrap gap-2">
              {edu.courses.map((course, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + idx * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Badge
                    key={idx}
                    variant="secondary"
                    className="bg-gradient-to-r from-blue-100 to-indigo-100 hover:from-blue-200 hover:to-indigo-200 transition-colors"
                  >
                    {course}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </AnimatedCardContent>
        </AnimatedCard>
      ))}
    </div>
  )
}
