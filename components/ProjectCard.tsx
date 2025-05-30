import { Project } from "@/lib/projects-data"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card"
import Image from "next/image"
import Link from "next/link"
import { ExternalLink } from "lucide-react"
import { FaGithub, FaYoutube } from "react-icons/fa"
import { Badge } from "./ui/badge"

function ProjectCard({
    title,
    description,
    image,
    technologies,
    liveUrl,
    githubUrl,
    youtubeUrl,
  }: Project) {
    return (
        <Card className="max-w-md h-full border border-primary text-black shadow-lg shadow-primary/60 bg-gradient-to-br from-white to-primary/40 dark:from-slate-800 dark:to-primary/30 dark:text-white backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-black dark:text-white">{title}</CardTitle>
            <CardDescription className="text-gray-600 dark:text-gray-300 text-md tracking-wide min-h-[100px]">{description}</CardDescription>
          </CardHeader>
          <CardContent className="p-1">
            <div className="relative w-full h-60 overflow-hidden rounded-md border border-primary/20">
                <Image src={image} alt={title} layout="fill" objectFit="cover" />
            </div>
            <div className="mt-4 flex flex-wrap justify-center gap-4 p-3"> 
              {technologies.map((tech, index) => (
                <Badge
                  key={index}
                  className="border border-slate-500 text-black dark:text-white bg-muted hover:bg-slate-300 dark:hover:bg-slate-500 px-3 py-1 text-sm tracking-wide rounded-full gap-2 font-normal items-center justify-center"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </CardContent>
          <CardFooter className="flex justify-between mt-4">
            {liveUrl && (
              <Link href={liveUrl} target="_blank" className="flex justify-center items-center gap-2 font-semibold hover:font-bold text-sm">
                  <ExternalLink className="h-5 w-5" />
                  Live Demo
              </Link>
            )}
            {youtubeUrl && (
              <Link href={youtubeUrl} target="_blank" className="flex justify-center items-center gap-2 font-semibold hover:font-bold text-sm">
                  <FaYoutube className="h-5 w-5" />
                  YouTube
              </Link>
            )}
            {githubUrl && (
              <Link href={githubUrl} target="_blank" className="flex justify-center items-center gap-2 font-semibold hover:font-bold text-sm">
                  <FaGithub className="h-5 w-5" />
                  GitHub
              </Link>
            )}
          </CardFooter>
        </Card>
      )
}

export default ProjectCard