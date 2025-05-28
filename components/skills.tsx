"use client"

import { motion } from "framer-motion"
import SkillBar from "./skill-bar"
import { Code, Database, Settings } from "lucide-react"

export default function Skills() {
  const skillCategories = [
    {
      name: "Frontend",
      icon: <Code className="h-6 w-6 inline-block mr-2" />,
      color: "from-blue-500 to-indigo-500",
      subtitle: "Building beautiful, responsive user interfaces.",
      skills: [
        { name: "HTML5", level: 95, icon: "🌐" },
        { name: "CSS3", level: 95, icon: "🎨" },
        { name: "JavaScript", level: 92, icon: "📜" },
        { name: "React.js", level: 88, icon: "⚛️" },
        { name: "Material UI", level: 85, icon: "🌊" },
        { name: "Responsive Design", level: 100, icon: "📱" },
      ],
    },
    {
      name: "Backend",
      icon: <Database className="h-6 w-6 inline-block mr-2" />,
      color: "from-indigo-500 to-purple-500",
      subtitle: "APIs, databases, and server-side logic.",
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
      icon: <Settings className="h-6 w-6 inline-block mr-2" />,
      color: "from-purple-500 to-pink-500",
      subtitle: "Development tools and cloud platforms.",
      skills: [
        { name: "Git", level: 85, icon: "🔄" },
        { name: "GitHub", level: 90, icon: "🐙" },
        { name: "VS Code", level: 95, icon: "📝" },
        { name: "Postman", level: 90, icon: "📮" },
        { name: "Netlify", level: 100, icon: "🎨" },
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
    <section>
      <h2 className="text-3xl font-bold mb-8 text-center text-primary">Skills</h2>
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
            className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-6 border border-primary/10 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
          >
            <div className={`bg-gradient-to-r ${category.color} text-white rounded-xl p-4 mb-6 shadow-md flex items-center`}>
              {category.icon}
              <h3 className="text-xl font-bold">{category.name}</h3>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 text-center">{category.subtitle}</p>
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
    </section>
  )
}
