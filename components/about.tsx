"use client";

import { motion } from "framer-motion";
import { Badge } from "./ui/badge";
import { Info } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 min-h-screen">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: false }}
        className="space-y-4 text-center mb-16"
      >
        <Badge className="font-normal border border-primary shadow-2xl text-black bg-secondary dark:bg-background dark:text-white text-lg hover:bg-secondary">
          <Info className="mr-2" size={18} />
          <span className="tracking-wider">about me</span>
        </Badge>
        <p className="tracking-wider text-lg md:text-xl">
          I specialize in building exceptional digital experiences. With a
          strong foundation in frontend development, I create scalable and
          performant web applications.
        </p>
      </motion.div>
    </section>
  );
}
