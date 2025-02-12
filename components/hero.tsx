"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { motion } from "framer-motion";
import hero from "@/public/hero-image.png";
import { GlowEffect } from "./ui/glow-effect";
import { Badge } from "./ui/badge";
import { Dock } from "./ui/dock-two";

export default function Hero() {
  const socialItems = [
    { icon: FaGithub, label: "Github" },
    { icon: FaLinkedin, label: "Linkedin" },
    { icon: IoMdMail, label: "Mail" },
    { icon: FaXTwitter, label: "Twitter" },
  ];
  return (
    <section
      className="md:flex-grow flex justify-center items-center py-4"
      id="home"
    >
      <div className="container mx-auto px-4 text-center space-y-8 md:space-y-10">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <Badge className="font-normal border border-primary shadow-2xl text-black bg-secondary dark:bg-background dark:text-white text-lg hover:bg-secondary">
            <span className="tracking-wider">Hi! I&apos;m Diego👋🚀</span>
          </Badge>
        </motion.div>

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative mx-auto h-40 w-40 md:h-64 md:w-64 rounded-full"
        >
          <GlowEffect
            colors={["#FF5733", "#33FF57", "#3357FF", "#F1C40F"]}
            mode="colorShift"
            blur="medium"
            duration={5}
            className="rounded-full"
          />
          <div className="relative h-40 w-40 md:h-64 md:w-64 rounded-full">
            <Image
              src={hero}
              alt="Profile"
              fill
              className="object-cover bg-primary rounded-full"
              priority
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            a{" "}
            <span className="relative inline-block px-1 md:px-5 py-1 md:py-3">
              {/* Rettangolo inclinato */}
              <span className="absolute inset-0 bg-primary/80 dark:bg-primary rotate-[-1.5deg]"></span>
              {/* Testo dritto */}
              <span className="relative text-white dark:text-black/80">
                Software Engineer
              </span>
            </span>
          </h1>
          <h3 className="text-3xl md:text-5xl font-bold pt-2 md:pt-5 tracking-wide">
            based in Italy <span className="text-primary">.</span>
          </h3>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col md:flex-row items-center justify-center gap-8 pt-4"
        >
          <Dock items={socialItems} className="h-0" />
          <div className="relative">
            <GlowEffect
              colors={["#FF5733", "#33FF57", "#3357FF", "#F1C40F"]}
              mode="colorShift"
              blur="soft"
              duration={3}
              className="absolute inset-0 z-0 rounded-lg"
            />
            <Button
              className="text-lg py-6 px-6 relative group"
              variant={"secondary"}
            >
              Contact Me
              <ArrowRight className="h-4 w-4 font-bold group-hover:ml-2 transition-all duration-500" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
