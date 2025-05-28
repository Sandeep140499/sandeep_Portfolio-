"use client"

import { useState, useEffect } from "react"
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
    organization: "KIBA Labs Private Limited",
    period: "Oct 2024 – Present",
    location: "Bengaluru, Karnataka, India",
    description: `
• Designed and developed the Rent-a-Read platform from scratch, focusing on scalable architecture and seamless user experience.
• Implemented robust role-based and subscription-based access controls for secure, tailored user journeys.
• Managed user authentication and authorization, ensuring data privacy and secure access.
• Performed CRUD operations, API integration, and comprehensive response validation.
• Conducted centralized error handling to enhance application reliability and maintainability.
    `,
    type: "work",
    skills: [
      "React.js", "HTML", "CSS", "JavaScript", "Material-UI",
      "Node.js", "Java", "MongoDB","Git",
      "RESTful APIs", "Postman",  "AWS"
    ]
  },
  {
    id: "job2",
    title: "MERN Stack Developer Intern",
    organization: "JITHVAR Consultancy Services Pvt. Ltd.",
    period: "Oct 2023 – Apr 2024",
    location: "Lucknow, Uttar Pradesh, India",
    description: `
• Focused on frontend development for CRM portals, rendering dynamic data via API integration.
• Implemented routing, form validation, and dynamic table/image display.
• Collaborated on building single-page applications (SPAs) and ensured robust user experience.
    `,
    type: "work",
    skills: [
      "React.js", "JavaScript", "HTML", "CSS",
      "Node.js", "MongoDB", "RESTful APIs", "Postman", "Git"
    ]
  },
  {
    id: "job3",
    title: "Frontend Developer (JavaScript)",
    organization: "YAXA Digital Labs Pvt. Ltd.",
    period: "Apr 2023 – Jul 2023",
    location: "Noida, Uttar Pradesh, India",
    description: `
• Developed static and dynamic websites using Next.js, focusing on smooth transitions, animations, and interactive hover effects.
• Ensured responsive design and cross-device compatibility for both desktop and mobile platforms.
• Translated Figma UI designs into functional, reusable React components.
• Managed projects and codebases using GitHub and GitLab for version control.
    `,
    type: "work",
    skills: [
      "HTML", "CSS", "JavaScript", "Next.js", "BooTstrap",
      "Figma", "Git", "GitHub", "GitLab", "DigitalOcean", "Stripe", "Postman", "RESTful APIs"
    ]
  },
  {
    id: "job4",
    title: "Full Stack MERN Developer Intern",
    organization: "PrepBytes",
    period: "Apr 2022 – Feb 2023",
    location: "Remote",
    description: `
• Participated in a comprehensive bootcamp focused on full-stack development.
• Gained hands-on experience with the MERN stack and developed several projects.
    `,
    type: "work",
    skills: ["React", "Node.js", "MongoDB", "Express.js", "JavaScript"]
  },
  {
    id: "edu1",
    title: "B.Tech in Electrical Engineering",
    organization: "Dr. A.P.J. Abdul Kalam Technical University",
    period: "2016 – 2020",
    location: "Lucknow, Uttar Pradesh, India",
    description: `
Completed a B.Tech in Electrical Engineering, gaining a strong foundation in core engineering principles and basic computer science knowledge. Graduated with honors, demonstrating consistent academic excellence.
    `,
    type: "education",
    skills: ["Electrical Engineering", "Problem Solving", "Academic Excellence"]
  },
  {
    id: "edu2",
    title: "Secondary School Certificate",
    organization: "Akbarpur Ambedkar Nagar Secondary School",
    period: "2012 – 2014",
    location: "Akbarpur, Ambedkar Nagar, India",
    description: "",
    type: "education",
    skills: ["Science", "Mathematics"]
  },
  {
    id: "edu3",
    title: "High School Diploma",
    organization: "Akbarpur Ambedkar Nagar High School",
    period: "2014 – 2016",
    location: "Akbarpur, Ambedkar Nagar, India",
    description: "",
    type: "education",
    skills: ["Science", "Mathematics"]
  }
];


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

  // Auto-expand first item on filter change
  useEffect(() => {
    if (filteredItems.length > 0) {
      setActiveItem(filteredItems[0].id)
    } else {
      setActiveItem(null)
    }
  }, [filter])

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
                        <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300 mb-4">
                          {item.description
                            .split("\n")
                            .filter(line => line.trim().startsWith("•"))
                            .map((line, idx) => (
                              <li key={idx}>{line.replace(/^•\s*/, "")}</li>
                            ))}
                        </ul>
                        {item.skills && item.skills.length > 0 && (
                          <div className="flex flex-wrap gap-2 mb-2">
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
