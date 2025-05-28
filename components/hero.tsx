"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, ArrowDown, Download, Code, Briefcase } from "lucide-react"
import { motion } from "framer-motion"
import AnimatedGradientText from "./animated-gradient-text"
import HeroBackground from "./3d-hero-background"

export default function Hero() {
  const [mounted, setMounted] = useState(false)
  const [typedText, setTypedText] = useState("")
  const fullText = "Associate Software Engineer"
  const [typingComplete, setTypingComplete] = useState(false)
  const [showMore, setShowMore] = useState(false)

  useEffect(() => {
    setMounted(true)

    let i = 0
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.substring(0, i + 1))
        i++
      } else {
        clearInterval(typingInterval)
        setTypingComplete(true)
      }
    }, 100)

    return () => clearInterval(typingInterval)
  }, [])

  if (!mounted) return null

  return (
    <div className="relative min-h-screen flex items-center overflow-hidden">
      <HeroBackground />

      <div className="container px-4 md:px-6 flex flex-col md:flex-row items-center justify-between py-12 md:py-24 z-10">
        <motion.div
          className="md:w-1/2 space-y-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Hi, I'm <AnimatedGradientText text="Sandeep Kumar Chaurasiya" />
            </h1>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.5 }}>
            <h2 className="text-2xl md:text-3xl font-medium text-gray-700 dark:text-gray-300 h-10">
              {typedText}
              {!typingComplete && <span className="inline-block w-1 h-6 ml-1 bg-primary animate-pulse" />}
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: typingComplete ? 1 : 0, y: typingComplete ? 0 : 20 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-xl">
              <b>From Passion to Profession...</b>
              <br />
              {!showMore ? (
                <>
                  <span>
                    I’m an Associate Software Engineer with hands-on experience in building responsive, scalable web applications. My expertise includes React.js, HTML, CSS, JavaScript, and modern frontend technologies like Next.js, Vite.js, Material-UI, and Bootstrap.<br /><br />
                    I’ve contributed to full-stack projects, including admin panels and role-based portals where users, admins, sub-admins, and other roles can manage their own and assigned work independently. My work spans secure authentication, role-specific dashboards, and structured access control across platforms.
                  </span>
                  <Button
                    variant="link"
                    className="ml-2 text-primary font-semibold p-0 h-auto align-baseline"
                    onClick={() => setShowMore(true)}
                  >
                    Read more about me
                  </Button>
                </>
              ) : (
                <span>
                  <br />
                  Hi, I'm Sandeep Kumar Chaurasiya, an Associate Software Engineer at Kiba Labs Private Ltd., where I specialize in building scalable web applications using React.js, HTML, CSS, JavaScript, and modern frontend frameworks such as Next.js, Vite.js, Material-UI, and Bootstrap. I focus on creating responsive designs and seamless user experiences across all devices.<br /><br />
                  I’ve worked on full-stack projects involving complex role-based access systems, including admin panels where users, admins, sub-admins, and other roles can control and manage their assigned tasks independently. These systems feature secure authentication, role-specific dashboards, CRUD operations, and task workflows for structured access control.<br /><br />
                  On the backend, I work with Node.js and Java, handling data with MongoDB and PostgreSQL, and integrating RESTful APIs. I use Postman for API testing and deploy applications via Netlify, Heroku, AWS S3, and DigitalOcean.<br /><br />
                  My journey began at Dr. A.P.J. Abdul Kalam Technical University (AKTU), Lucknow, where I earned a B.Tech in Electrical Engineering with Honors. There, I discovered my passion for solving complex problems through clean, maintainable code.<br /><br />
                  Since then, I’ve contributed to a range of web applications—from CRM systems to subscription-based platforms and interactive product landing pages. My work includes translating Figma designs into functional code, handling routing, form validation, and ensuring seamless user experiences.<br /><br />
                  This portfolio reflects my technical growth, creativity, and commitment to building impactful digital solutions. Feel free to explore my work—and let’s connect if you're interested in creating something exceptional together.
                </span>
              )}
            </p>
          </motion.div>

          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: typingComplete ? 1 : 0, y: typingComplete ? 0 : 20 }}
            transition={{ duration: 0.5 }}
          >
            <Button
              className="glow bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 group relative overflow-hidden"
              asChild
            >
              <a href="#contact">
                <span className="relative z-10">Get In Touch</span>
                <span className="absolute inset-0 bg-white dark:bg-gray-900 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0" />
              </a>
            </Button>
            <Button
              variant="outline"
              className="border-2 hover:border-primary/50 hover:bg-primary/5 group relative overflow-hidden"
              asChild
            >
              <a href="#projects">
                <span className="relative z-10">View Projects</span>
                <span className="absolute inset-0 bg-primary/10 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </a>
            </Button>
            <Button
              variant="outline"
              className="border-2 hover:border-primary/50 hover:bg-primary/5 flex items-center gap-2"
            >
              <Download className="h-4 w-4" />
              Resume
            </Button>
          </motion.div>

          <motion.div
            className="flex space-x-4 pt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: typingComplete ? 1 : 0, y: typingComplete ? 0 : 20 }}
            transition={{ duration: 0.5 }}
          >
            <motion.a
              href="https://github.com/sandeep140499?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Github className="h-6 w-6" />
              <span className="sr-only">GitHub</span>
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
              whileHover={{ scale: 1.2, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Linkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </motion.a>
            <motion.a
              href="mailto:sandeep140499kumar@gmail.com"
              className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Mail className="h-6 w-6" />
              <span className="sr-only">Email</span>
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-12 md:mt-0 md:w-1/2 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="relative">
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 blur-2xl opacity-30"
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
            />
            <motion.div
              className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl"
              animate={{
                rotateZ: [0, 5, 0, -5, 0],
                y: [0, -10, 0],
              }}
              transition={{
                rotateZ: { duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
                y: { duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
              }}
            >
              <img src="/sandeep1-Photoroom.png?height=400&width=400" alt="John Doe" className="object-cover w-full h-full" />
            </motion.div>

            <motion.div
              className="absolute -bottom-4 -right-4 bg-white dark:bg-gray-800 rounded-full p-3 shadow-lg border-2 border-primary/20"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.5, type: "spring" }}
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <Code className="h-8 w-8 text-primary" />
            </motion.div>

            <motion.div
              className="absolute -top-4 -left-4 bg-white dark:bg-gray-800 rounded-full p-3 shadow-lg border-2 border-primary/20"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2, duration: 0.5, type: "spring" }}
              whileHover={{ scale: 1.1, rotate: -5 }}
            >
              <Briefcase className="h-8 w-8 text-primary" />
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
      >
        <a
          href="#stats"
          className="flex flex-col items-center text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
        >
          <span className="text-sm mb-2">Scroll Down</span>
          <ArrowDown className="h-5 w-5" />
        </a>
      </motion.div>
    </div>
  )
}
