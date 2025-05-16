"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Briefcase, GraduationCap, Calendar, MapPin } from "lucide-react"

interface TimelineItem {
  id: string
  title: string
  organization: string
  period: string
  location?: string
  description: string
  type: "work" | "education"
  skills?: string[]
}

export default function InteractiveTimeline() {
  const timelineItems: TimelineItem[] = [
    {
      id: "job1",
      title: "Associate Software Engineer",
      organization: "KIBA Labs",
      period: "Oct 2024 - Present",
      location: "San Francisco, CA",
      description:
        "Working as an Associate Software Engineer, developing and maintaining web applications using the MERN stack. Collaborating with cross-functional teams to deliver high-quality software solutions.",
      type: "work",
      skills: ["React", "Node.js", "MongoDB", "Express.js", "RESTful APIs"],
    },
    {
      id: "job2",
      title: "MERN Stack Developer Intern",
      organization: "Jithvar Consultancy Services",
      period: "Oct 2023 - Apr 2024",
      location: "Remote",
      description:
        "Worked with frontend and backend technologies, including APIs, Express.js, and MongoDB. Developed and maintained web applications, implemented new features, and fixed bugs.",
      type: "work",
      skills: ["React", "Node.js", "MongoDB", "Express.js", "RESTful APIs"],
    },
    {
      id: "edu1",
      title: "Bachelor of Science in Computer Science",
      organization: "University of Technology",
      period: "2018 - 2022",
      location: "Boston, MA",
      description:
        "Studied core computer science subjects including data structures, algorithms, database management, and software engineering. Graduated with honors.",
      type: "education",
      skills: ["Data Structures & Algorithms", "Database Systems", "Web Development", "Software Engineering"],
    },
    {
      id: "job3",
      title: "Frontend Developer",
      organization: "Yaxa Digital Labs",
      period: "Apr 2023 - Jul 2023",
      location: "Chicago, IL",
      description:
        "Developed a dynamic website for Gruner Renewable Energy using modern frontend technologies. Collaborated with designers to implement responsive UI components.",
      type: "work",
      skills: ["HTML5", "CSS3", "JavaScript", "Figma"],
    },
    {
      id: "edu2",
      title: "MERN Stack Development Bootcamp",
      organization: "PrepBytes",
      period: "Apr 2022 - Feb 2023",
      location: "Online",
      description:
        "Intensive bootcamp focused on full-stack web development using the MERN stack. Completed several projects and gained hands-on experience.",
      type: "education",
      skills: ["React.js", "Node.js", "Express.js", "MongoDB", "RESTful API Development"],
    },
    {
      id: "job4",
      title: "Full Stack MERN Developer Intern",
      organization: "PrepBytes",
      period: "Apr 2022 - Feb 2023",
      location: "Remote",
      description:
        "Participated in a comprehensive bootcamp focused on full-stack development. Gained hands-on experience with the MERN stack and developed several projects.",
      type: "work",
      skills: ["React", "Node.js", "MongoDB", "Express.js", "JavaScript"],
    },
  ]

  const [filter, setFilter] = useState<"all" | "work" | "education">("all")
  const [activeItem, setActiveItem] = useState<string | null>(null)

  const filteredItems = timelineItems
    .filter((item) => filter === "all" || item.type === filter)
    .sort((a, b) => {
      // Sort by most recent first
      const aYear = Number.parseInt(a.period.split(" - ")[1] || a.period.split(" - ")[0])
      const bYear = Number.parseInt(b.period.split(" - ")[1] || b.period.split(" - ")[0])
      return bYear - aYear
    })

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-center mb-8 space-x-4">
        <button
          onClick={() => setFilter("all")}
          className={`px-4 py-2 rounded-full transition-colors ${
            filter === "all"
              ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white"
              : "bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
          }`}
        >
          All
        </button>
        <button
          onClick={() => setFilter("work")}
          className={`px-4 py-2 rounded-full transition-colors flex items-center gap-2 ${
            filter === "work"
              ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white"
              : "bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
          }`}
        >
          <Briefcase className="h-4 w-4" />
          Work
        </button>
        <button
          onClick={() => setFilter("education")}
          className={`px-4 py-2 rounded-full transition-colors flex items-center gap-2 ${
            filter === "education"
              ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white"
              : "bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
          }`}
        >
          <GraduationCap className="h-4 w-4" />
          Education
        </button>
      </div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-indigo-500 to-purple-500 transform md:-translate-x-1/2" />

        <div className="space-y-12">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`relative flex flex-col md:flex-row ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 w-6 h-6 rounded-full bg-white border-4 border-primary transform -translate-x-1/2 flex items-center justify-center">
                {item.type === "work" ? (
                  <Briefcase className="h-3 w-3 text-primary" />
                ) : (
                  <GraduationCap className="h-3 w-3 text-primary" />
                )}
              </div>

              {/* Content */}
              <div className={`ml-10 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                <motion.div
                  className={`bg-white dark:bg-gray-800 p-5 rounded-lg shadow-md border-2 ${
                    activeItem === item.id ? "border-primary" : "border-gray-100 dark:border-gray-700"
                  } hover:border-primary/50 transition-all duration-300 cursor-pointer`}
                  whileHover={{ y: -5 }}
                  onClick={() => setActiveItem(activeItem === item.id ? null : item.id)}
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold">{item.title}</h3>
                    <Badge
                      variant="outline"
                      className={`${
                        item.type === "work"
                          ? "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200"
                          : "bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200"
                      }`}
                    >
                      {item.type === "work" ? "Work" : "Education"}
                    </Badge>
                  </div>

                  <p className="text-gray-700 dark:text-gray-300 font-medium mb-2">{item.organization}</p>

                  <div className="flex flex-wrap gap-4 text-sm text-gray-500 dark:text-gray-400 mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {item.period}
                    </div>
                    {item.location && (
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {item.location}
                      </div>
                    )}
                  </div>

                  <AnimatePresence>
                    {activeItem === item.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <p className="text-gray-600 dark:text-gray-300 mb-4">{item.description}</p>

                        {item.skills && (
                          <div className="flex flex-wrap gap-2">
                            {item.skills.map((skill, idx) => (
                              <Badge key={idx} variant="secondary">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="mt-2 text-primary text-sm font-medium">
                    {activeItem === item.id ? "Click to collapse" : "Click to expand"}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
