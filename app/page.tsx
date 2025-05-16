import { Code, Mail, Star, Clock } from "lucide-react"
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import SectionTransition from "@/components/section-transition"
import CursorEffect from "@/components/cursor-effect"
import InteractiveTimeline from "@/components/interactive-timeline"
import TestimonialCarousel from "@/components/testimonial-carousel"
import StatsCounter from "@/components/stats-counter"

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <CursorEffect />
      <Navbar />
      <main>
        <section id="home" className="pt-16">
          <Hero />
        </section>

        <SectionTransition>
          <section id="stats" className="py-16">
            <div className="container px-4 md:px-6">
              <StatsCounter />
            </div>
          </section>
        </SectionTransition>

        <SectionTransition>
          <section
            id="skills"
            className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30"
          >
            <div className="container px-4 md:px-6">
              <h2 className="text-3xl font-bold tracking-tight text-center mb-12 flex items-center justify-center gap-2">
                <Code className="h-6 w-6 text-primary" />
                Technical Skills
              </h2>
              <Skills />
            </div>
          </section>
        </SectionTransition>

        <SectionTransition>
          <section id="timeline" className="py-16">
            <div className="container px-4 md:px-6">
              <h2 className="text-3xl font-bold tracking-tight text-center mb-12 flex items-center justify-center gap-2">
                <Clock className="h-6 w-6 text-primary" />
                Experience & Education
              </h2>
              <InteractiveTimeline />
            </div>
          </section>
        </SectionTransition>

        <SectionTransition>
          <section
            id="projects"
            className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30"
          >
            <div className="container px-4 md:px-6">
              <h2 className="text-3xl font-bold tracking-tight text-center mb-12 flex items-center justify-center gap-2">
                <Code className="h-6 w-6 text-primary" />
                Projects
              </h2>
              <Projects />
            </div>
          </section>
        </SectionTransition>

        <SectionTransition>
          <section id="testimonials" className="py-16">
            <div className="container px-4 md:px-6">
              <h2 className="text-3xl font-bold tracking-tight text-center mb-12 flex items-center justify-center gap-2">
                <Star className="h-6 w-6 text-primary" />
                Testimonials
              </h2>
              <TestimonialCarousel />
            </div>
          </section>
        </SectionTransition>

        <SectionTransition>
          <section
            id="contact"
            className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30"
          >
            <div className="container px-4 md:px-6">
              <h2 className="text-3xl font-bold tracking-tight text-center mb-12 flex items-center justify-center gap-2">
                <Mail className="h-6 w-6 text-primary" />
                Contact Me
              </h2>
              <Contact />
            </div>
          </section>
        </SectionTransition>
      </main>
      <Footer />
    </div>
  )
}
