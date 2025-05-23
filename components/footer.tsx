"use client"

import Link from "next/link"
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react"
import { motion } from "framer-motion"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <footer className="bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 text-white py-12 relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-10 left-10 w-40 h-40 rounded-full bg-blue-500/10"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-indigo-500/10"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY }}
        />
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            className="mb-6 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Link href="#home" className="text-xl font-bold">
              <span className="gradient-text">Sandeep </span> Kumar Chaurasiya
            </Link>
            <p className="mt-2 text-gray-400 max-w-md">
              Full-stack MERN developer passionate about creating innovative web solutions.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col items-center md:items-end"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex space-x-4 mb-4">
              <motion.a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Github className="h-6 w-6" />
                <span className="sr-only">GitHub</span>
              </motion.a>
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors"
                whileHover={{ scale: 1.2, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </motion.a>
              <motion.a
                href="mailto:contact@example.com"
                className="text-gray-400 hover:text-primary transition-colors"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Mail className="h-6 w-6" />
                <span className="sr-only">Email</span>
              </motion.a>
            </div>
            <p className="text-gray-400 text-sm">&copy; {currentYear} John Doe. All rights reserved.</p>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-5 right-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          whileHover={{ y: -5 }}
          whileTap={{ scale: 0.9 }}
        >
          <button
            onClick={scrollToTop}
            className="bg-primary/20 hover:bg-primary/30 p-3 rounded-full transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-5 w-5 text-white" />
          </button>
        </motion.div>
      </div>
    </footer>
  )
}
