"use client"

import { motion } from "framer-motion"
import SkillBar from "./skill-bar"

export default function Skills() {
  const skillCategories = [
    {
      name: "Frontend",
      color: "from-blue-500 to-indigo-500",
      skills: [
        { name: "HTML5", level: 95, icon: "🌐" },
        { name: "CSS3", level: 95, icon: "🎨" },
        { name: "JavaScript", level: 92, icon: "📜" },
        { name: "React.js", level: 88, icon: "⚛️" },
        { name: "Material UI ", level: 85, icon: "🌊" },
        { name: "Responsive Design", level: 100, icon: "📱" },
      ],
    },
    {
      name: "Backend",
      color: "from-indigo-500 to-purple-500",
      skills: [
        { name: "Node.js", level: 65, icon: "🟢" },
        { name: "Express.js", level: 62, icon: "🚂" },
        { name: "MongoDB", level: 90, icon: "🍃" },
        { name: "RESTful APIs", level: 90, icon: "🔄" },
        { name: "Authentication", level: 95, icon: "🔐" },
      ],
    },
    {
      name: "Tools & Others",
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "Git", level: 85, icon: "🔄" },
        { name: "GitHub", level: 90, icon: "🐙" },
        { name: "VS Code", level: 95, icon: "📝" },
        { name: "Postman", level: 90, icon: "📮" },
        { name: "Netlifiy", level: 100, icon: "🎨" },
        { name: "AWS", level: 60, icon: "📦" },
      ],
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-3 gap-8"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
    >
      {skillCategories.map((category, catIndex) => (
        <motion.div
          key={catIndex}
          variants={item}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 border-2 border-primary/10 hover:border-primary/30 transition-all duration-300 hover:-translate-y-2"
        >
          <div className={`bg-gradient-to-r ${category.color} text-white rounded-lg p-3 mb-6 shadow-md`}>
            <h3 className="text-xl font-bold text-center">{category.name}</h3>
          </div>

          <div className="space-y-4">
            {category.skills.map((skill, skillIndex) => (
              <SkillBar
                key={skillIndex}
                name={skill.name}
                level={skill.level}
                color={category.color}
                icon={skill.icon}
                index={skillIndex}
              />
            ))}
          </div>
        </motion.div>
      ))}
    </motion.div>
  )
}
