"use client";
import { motion } from "framer-motion";
import { Badge } from "./ui/badge";
import {
  Bitcoin,
  Book,
  ChartCandlestick,
  Cpu,
  Database,
  Gamepad2,
  GraduationCap,
  Info,
  Layers,
  Plane,
  Trophy,
  User,
  Wrench,
} from "lucide-react";
import { Card } from "./ui/card";
import { FaBasketball } from "react-icons/fa6";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import TechBadge from "./TechBadge";
import { techStack } from "@/lib/tech-stack-data";

export default function About() {
  return (
    <section id="about" className="py-20 md:py-24 w-full">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
        className="space-y-10 text-center mb-16"
      >
        <div className="space-y-5 text-center">
          <Badge className="font-normal border border-primary shadow-2xl text-black bg-secondary dark:bg-background dark:text-white text-lg hover:bg-secondary">
            <Info className="mr-2" size={18} />
            <span className="tracking-wider">about</span>
          </Badge>
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl ">
            Who I Am
          </h1>
          <p className="mx-auto md:text-xl/relaxed text-gray-500 dark:text-gray-400">
            Things to know about me.
          </p>
        </div>

        <div className="container mx-auto max-w-7xl">
          <div className="space-y-8">
            <div className="flex flex-col md:flex-row gap-8">
              <div
                className="md:w-1/3"
              >
                <Card className="p-6 h-full border border-primary text-black shadow-lg shadow-primary/60 bg-gradient-to-br from-white to-primary/40 dark:from-slate-800 dark:to-primary/30 dark:text-white backdrop-blur-sm">
                  <div className="flex flex-row justify-center md:justify-start items-center gap-4">
                    <GraduationCap className="text-primary w-6 h-6" />
                    <h3 className="text-lg font-semibold">Education</h3>
                  </div>
                  <div className="space-y-6 py-7">
                    <div>
                      <h4 className="text-lg">
                        Master&apos;s in Full Stack Development
                      </h4>
                      <p className="text-slate-600 dark:text-slate-400 text-sm">
                        2023 - 2024 | Start2Impact University
                      </p>
                    </div>
                    <div>
                      <h4 className="text-lg">
                        Ethereum Developer Certification
                      </h4>
                      <p className="text-slate-600 dark:text-slate-400 text-sm">
                        2023 | Alchemy University
                      </p>
                    </div>
                    <div>
                      <h4 className="text-lg">
                        Master&apos;s in Blockchain Development
                      </h4>
                      <p className="text-slate-600 dark:text-slate-400 text-sm">
                        2022 - 2023 | Start2Impact University
                      </p>
                    </div>
                  </div>
                </Card>
              </div>

              <div
                className="md:w-2/3"
              >
                <Card className="space-y-2 md:space-y-10 p-6 h-full border border-primary text-black shadow-lg shadow-primary/60 bg-gradient-to-br from-white to-primary/40 dark:from-slate-800 dark:to-primary/30 dark:text-white backdrop-blur-sm">
                  <div className="flex flex-row justify-center md:justify-start items-center gap-4">
                    <User className="text-primary w-6 h-6" />
                    <h3 className="text-lg font-semibold">About me</h3>
                  </div>
                  <div className="flex flex-col h-full text-center">
                    <p className="text-md md:text-lg tracking-wider leading-relaxed font-light">
                      I&apos;m 26 years old and have always been passionate about technology, especially blockchain and programming. I enjoy tackling challenges, finding creative solutions, and building new things.
                      <br />
                      By the way, I enjoy coffee. A lot.
                    </p>
                  </div>
                </Card>
              </div>
            </div>

            {/* Seconda riga: Prima card piccola, seconda grande */}
            <div className="flex flex-col md:flex-row gap-8">
              <div
                className="md:w-2/3"
              >
                <Card className="p-6 h-full border border-primary text-black shadow-lg shadow-primary/60 bg-gradient-to-br from-white to-primary/40 dark:from-slate-800 dark:to-primary/30 dark:text-white backdrop-blur-sm">
                  <div className="flex flex-row justify-center md:justify-start items-center gap-4">
                    <Cpu className="text-primary w-6 h-6" />
                    <h3 className="text-lg font-semibold">Stack & Tools</h3>
                  </div>
                  <div className="space-y-6 py-4">
                  <Tabs defaultValue="frontend" className="w-full">
                    <TabsList className="grid w-full grid-cols-3 mb-5 bg-slate-200 dark:bg-slate-500">
                      <TabsTrigger value="frontend" className="flex items-center gap-2 data-[state=active]:bg-white dark:data-[state=active]:bg-slate-700">
                        <Layers className="w-5 h-5" />
                        Frontend
                      </TabsTrigger>
                      <TabsTrigger value="backend" className="flex items-center gap-2 data-[state=active]:bg-white dark:data-[state=active]:bg-slate-700">
                        <Database className="w-5 h-5" />
                        Backend
                      </TabsTrigger>
                      <TabsTrigger value="tools" className="flex items-center gap-2 data-[state=active]:bg-white dark:data-[state=active]:bg-slate-700">
                        <Wrench className="w-5 h-5" />
                        Tools
                      </TabsTrigger>
                    </TabsList>

                    {Object.entries(techStack).map(([category, technologies]) => (
                      <TabsContent key={category} value={category} className="mt-0">
                        <div className="flex flex-wrap items-center justify-center gap-5">
                          {technologies.map((tech) => (
                            <TechBadge key={tech.name} logoUrl={tech.logoUrl} name={tech.name}  />
                          ))}
                        </div>
                      </TabsContent>
                    ))}
                  </Tabs>
                  </div>
                </Card>
              </div>

              <div
                className="md:w-1/3"
              >
                <Card className="p-6 h-full border border-primary text-black shadow-lg shadow-primary/60 bg-gradient-to-br from-white to-primary/40 dark:from-slate-800 dark:to-primary/30 dark:text-white backdrop-blur-sm">
                  <div className="flex flex-row justify-center md:justify-start items-center gap-4">
                    <Trophy className="text-primary w-6 h-6" />
                    <h3 className="text-lg font-semibold">
                      Other Interests & Hobby
                    </h3>
                  </div>
                  <div className="space-y-6 py-7">
                    <div className="flex flex-wrap gap-5 items-center justify-center">
                      <Badge className="bg-green-600 dark:text-white border-2 border-green-900 px-3 py-1 text-md tracking-wide rounded-full gap-2 font-normal items-center justify-center hover:bg-green-700">
                        <ChartCandlestick className="w-4 h-4" />
                        Finance
                      </Badge>
                      <Badge className="bg-purple-600 border-2 border-purple-900 dark:text-white px-3 py-1 text-md tracking-wide rounded-full gap-2 font-normal items-center justify-center hover:bg-purple-700">
                        <FaBasketball className="w-4 h-4" />
                        Basketball
                      </Badge>
                      <Badge className="bg-yellow-600 border-2 border-yellow-900 dark:text-white px-3 py-1 text-md tracking-wide rounded-full gap-2 font-normal items-center justify-center hover:bg-yellow-700">
                        <Book className="w-4 h-4" />
                        Reading
                      </Badge>
                      <Badge className="bg-blue-600 border-2 border-blue-950 dark:text-white px-3 py-1 text-md tracking-wide rounded-full gap-2 font-normal items-center justify-center hover:bg-blue-700">
                        <Plane className="w-4 h-4" />
                        Travel
                      </Badge>
                      <Badge className="bg-slate-800 border-2 border-black dark:text-white px-3 py-1 text-md tracking-wide rounded-full gap-2 font-normal items-center justify-center hover:bg-slate-900">
                        <Gamepad2 className="w-4 h-4" />
                        Gaming
                      </Badge>

                      <Badge className="bg-orange-600 border-2 border-orange-900 dark:text-white px-3 py-1 text-md tracking-wide rounded-full gap-2 font-normal items-center justify-center hover:bg-orange-700">
                        <Bitcoin className="w-4 h-4" />
                        Blockchain
                      </Badge>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
