"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button" // Assuming you're using Shadcn
import { Code2 } from "lucide-react"
import { projects } from "@/lib/projects-data"
import ProjectCard from "./ProjectCard"

export default function Projects() {
  const [showAll, setShowAll] = useState(false)
  const visibleProjects = showAll ? projects : projects.slice(0, 3)

  return (
    <section className="py-12 md:py-24 w-full" id="projects">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
        className="space-y-10 text-center mb-16"
      >
        <div className="space-y-5 text-center">
          <Badge className="font-normal border border-primary shadow-2xl text-black bg-secondary dark:bg-background dark:text-white text-lg hover:bg-secondary">
            <Code2 className="mr-2" size={18} />
            <span className="tracking-wider">my projects</span>
          </Badge>
          <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl">Featured Projects</h2>
          <p className="mx-auto md:text-xl/relaxed text-gray-500 dark:text-gray-400">
            Here are some of the projects I&apos;ve worked on. Each one presented unique challenges and opportunities for growth.
          </p>
        </div>

        <div className="container mx-auto max-w-8xl">
          <div className="flex flex-wrap gap-8 justify-center">
            {visibleProjects.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>

          {projects.length > 3 && (
            <div className="mt-8 flex justify-center">
              <Button variant="outline" onClick={() => setShowAll(!showAll)}>
                {showAll ? "Show Less" : "Show More"}
              </Button>
            </div>
          )}
        </div>
      </motion.div>
    </section>
  )
}
