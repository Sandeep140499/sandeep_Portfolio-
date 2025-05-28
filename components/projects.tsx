"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import ProjectCard from "./project-card"

export default function Projects() {
  const projects = [
    {
      title: "Rent A Read",
      description: "A real-time chat application with features like private messaging, group chats, and file sharing.",
      longDescription:
        "A modern real-time chat application that enables users to communicate through private messages, group chats, and channels. The application supports file sharing, read receipts, and typing indicators. Built with React, Node.js, and Socket.io for real-time communication.",
      image: "/placeholder.svg?height=200&width=400",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Socket.io"],
      features: [
        "Real-time messaging with Socket.io",
        "Private and group chat functionality",
        "File and media sharing",
        "Read receipts and typing indicators",
        "User presence status (online/offline)",
        "Message search and history",
      ],
      date: "May 2024 - Jul 2024",
      role: "Full Stack Developer",
      liveLink: "https://example.com/chatapp",
      githubLink: "https://github.com/example/chatapp",
      category: "fullstack",
    },
   {
  title: "Gruner Renewable Energy",
  description:
    "Crafted a sleek, fully responsive website for Gruner Renewable Energy that highlights their innovative projects and services, delivering a seamless user experience across all devices.",
  longDescription:
    "Developed a fully functional website for Grüner Renewable Energy using Figma for design and implementation. Transformed design concepts into a responsive, user-friendly web experience. Focused on performance optimization and intuitive interface design, demonstrating frontend development skills and commitment to high-quality digital solutions.",
  image: "/gruner.png?height=200&width=400",
  technologies: [
    "HTML5",
    "CSS3",
    "Bootstrap 5",
    "Netlify",
    "Stripe",
    "DigitalOcean",
    "JavaScript",
    "Figma",
    "Responsive Design"
  ],
  features: [
    "Responsive design optimized for all device sizes",
    "Interactive service showcase with animations",
    "Contact form with client-side validation"
  ],
  date: "Apr 2023 – Jul 2023",
  role: "Frontend Developer- Yaxa Digital Lab",
  liveLink: "https://www.grunerrenewable.com/",
  githubLink: "https://github.com/Sandeep140499/GrunerRenewable-Energy",
  category: "frontend"
}

,
   {
  title: "Foils Selling Company | Giriraj Foils ",
  description:
    "Successfully designed and developed a responsive and visually appealing static website for Giriraj Foils using HTML, CSS, and Bootstrap.",
  longDescription:
    "I successfully designed and developed a static website for Giriraj Foils, utilizing HTML, CSS, and Bootstrap. This project involved creating a clean, professional, and user-friendly platform to effectively showcase the company's products and services. Emphasis was placed on responsive design to ensure the website functions seamlessly across all screen sizes, enhancing overall user experience.",
  image: "/giriraj.png?height=200&width=400",
  technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
  features: [
    "Responsive layout compatible with all device sizes",
    "Clean, modern UI for product and service presentation",
    "Optimized for performance and accessibility"
  ],
  date: "Apr 2023 – Jul 2023",
  role: "Frontend Developer",
  liveLink: "https://giriraj-foils-33dc42.netlify.app/",
  githubLink: "https://github.com/Sandeep140499/Giriraj-html",
  category: "frontend"
}
,
   {
  title: "LED WALA – Audio Visual Equipment Company",
  description:
    "Designed and developed a responsive static website for LED Wala, showcasing their range of LED and audio visual products.",
  longDescription:
    "I designed and developed a static website for LED Wala, an LED selling company, using HTML, CSS, JavaScript, and Bootstrap. This project focused on creating an engaging and user-friendly interface to effectively showcase the company’s products. Emphasizing responsive design, the website ensures an optimal viewing experience across various devices and screen sizes, delivering a seamless browsing experience to potential customers.",
  image: "/led.png?height=200&width=400",
  technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "Netlify"],
  features: [
    "Responsive design for mobile, tablet, and desktop devices",
    "Clean and modern UI to showcase product listings",
    "Smooth navigation and layout for better user experience",
    "Hosted and deployed on Netlify"
  ],
  date: "Apr 2023 – Jul 2023",
  role: "Frontend Developer",
  liveLink: "https://led-wala-6b9fe3.netlify.app/",
  githubLink: "",
  category: "frontend"
}
,
    
  ]

  const [filter, setFilter] = useState<string>("all")

  const filteredProjects = filter === "all" ? projects : projects.filter((project) => project.category === filter)

  return (
    <div className="space-y-8">
      <div className="flex justify-center flex-wrap gap-4 mb-8">
        <Button
          onClick={() => setFilter("all")}
          variant={filter === "all" ? "default" : "outline"}
          className={filter === "all" ? "bg-gradient-to-r from-blue-600 to-indigo-600" : ""}
        >
          All Projects
        </Button>
        <Button
          onClick={() => setFilter("frontend")}
          variant={filter === "frontend" ? "default" : "outline"}
          className={filter === "frontend" ? "bg-gradient-to-r from-blue-600 to-indigo-600" : ""}
        >
          Frontend
        </Button>
        <Button
          onClick={() => setFilter("fullstack")}
          variant={filter === "fullstack" ? "default" : "outline"}
          className={filter === "fullstack" ? "bg-gradient-to-r from-blue-600 to-indigo-600" : ""}
        >
          Full Stack
        </Button>
      </div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
        layout
        transition={{ duration: 0.5, type: "spring" }}
      >
        {filteredProjects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </motion.div>
    </div>
  )
}
