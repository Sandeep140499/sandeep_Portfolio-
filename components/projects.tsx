"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import ProjectCard from "./project-card"

export default function Projects() {
  const projects = [
    {
      title: "Gruner Renewable Energy Website",
      description:
        "A responsive website for Gruner Renewable Energy showcasing their services, projects, and company information.",
      longDescription:
        "A comprehensive website for Gruner Renewable Energy that showcases their services, projects, and company information. The website features a modern and responsive design, with smooth animations and interactive elements to enhance user experience. Implemented from Figma mockups with pixel-perfect precision.",
      image: "/placeholder.svg?height=200&width=400",
      technologies: ["HTML5", "CSS3", "JavaScript", "Figma", "Responsive Design"],
      features: [
        "Responsive design for all device sizes",
        "Interactive service showcase with animations",
        "Project portfolio with filtering capabilities",
        "Contact form with validation",
        "Performance optimized with lazy loading",
      ],
      date: "Apr 2023 - Jul 2023",
      role: "Frontend Developer",
      liveLink: "https://example.com/gruner",
      githubLink: "https://github.com/example/gruner",
      category: "frontend",
    },
    {
      title: "Task Management Application",
      description:
        "A full-stack MERN application for task management with features like user authentication, task creation, assignment, and tracking.",
      longDescription:
        "A comprehensive task management solution built with the MERN stack. This application allows users to create, assign, and track tasks with real-time updates. It includes user authentication, role-based permissions, and a responsive dashboard for monitoring project progress.",
      image: "/placeholder.svg?height=200&width=400",
      technologies: ["React", "Node.js", "Express", "MongoDB", "JWT", "Socket.io"],
      features: [
        "User authentication and authorization",
        "Task creation, assignment, and tracking",
        "Real-time notifications using Socket.io",
        "Drag-and-drop task management",
        "Responsive dashboard with task analytics",
      ],
      date: "Oct 2023 - Jan 2024",
      role: "Full Stack Developer",
      liveLink: "https://example.com/taskmanager",
      githubLink: "https://github.com/example/taskmanager",
      category: "fullstack",
    },
    {
      title: "E-commerce Platform",
      description:
        "A comprehensive e-commerce solution with product catalog, shopping cart, user authentication, and payment integration.",
      longDescription:
        "A feature-rich e-commerce platform built with the MERN stack. This application provides a complete shopping experience with product browsing, cart management, secure checkout, and order tracking. It includes admin dashboard for inventory and order management.",
      image: "/placeholder.svg?height=200&width=400",
      technologies: ["React", "Redux", "Node.js", "Express", "MongoDB", "Stripe"],
      features: [
        "Product catalog with search and filtering",
        "User authentication and profile management",
        "Shopping cart and wishlist functionality",
        "Secure payment processing with Stripe",
        "Admin dashboard for inventory management",
        "Order tracking and history",
      ],
      date: "Feb 2024 - Apr 2024",
      role: "Full Stack Developer",
      liveLink: "https://example.com/ecommerce",
      githubLink: "https://github.com/example/ecommerce",
      category: "fullstack",
    },
    {
      title: "Real-time Chat Application",
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
