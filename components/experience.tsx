"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import AnimatedCard, { AnimatedCardContent, AnimatedCardHeader } from "./animated-card"

export default function Experience() {
  const experiences = [
    {
      title: "Associate Software Engineer",
      company: "KIBA Labs",
      period: "Oct 2024 - Present",
      description:
        "Working as an Associate Software Engineer, developing and maintaining web applications using the MERN stack. Collaborating with cross-functional teams to deliver high-quality software solutions.",
      skills: ["React", "Node.js", "MongoDB", "Express.js", "RESTful APIs"],
    },
    {
      title: "MERN Stack Developer Intern",
      company: "Jithvar Consultancy Services",
      period: "Oct 2023 - Apr 2024",
      description:
        "Worked with frontend and backend technologies, including APIs, Express.js, and MongoDB. Developed and maintained web applications, implemented new features, and fixed bugs.",
      skills: ["React", "Node.js", "MongoDB", "Express.js", "RESTful APIs"],
    },
    {
      title: "Frontend Developer",
      company: "Yaxa Digital Labs",
      period: "Apr 2023 - Jul 2023",
      description:
        "Developed a dynamic website for Gruner Renewable Energy using modern frontend technologies. Collaborated with designers to implement responsive UI components.",
      skills: ["HTML5", "CSS3", "JavaScript", "Figma"],
    },
    {
      title: "Full Stack MERN Developer Intern",
      company: "PrepBytes",
      period: "Apr 2022 - Feb 2023",
      description:
        "Participated in a comprehensive bootcamp focused on full-stack development. Gained hands-on experience with the MERN stack and developed several projects.",
      skills: ["React", "Node.js", "MongoDB", "Express.js", "JavaScript"],
    },
  ]

  return (
    <div className="space-y-8">
      {experiences.map((exp, index) => (
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
                {exp.title}
              </motion.h3>
              <Badge
                variant="outline"
                className="w-fit bg-gradient-to-r from-blue-100 to-indigo-100 text-primary border-primary/20"
              >
                {exp.period}
              </Badge>
            </div>
            <motion.p
              className="text-gray-600 font-medium"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              {exp.company}
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
              {exp.description}
            </motion.p>
            <div className="flex flex-wrap gap-2">
              {exp.skills.map((skill, idx) => (
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
                    {skill}
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
