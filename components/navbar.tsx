"use client";

import { Download, Moon, Sun, Home, Info, Folder, Mail } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Button } from "./ui/button";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { GlowEffect } from "./ui/glow-effect";
import { Dock } from "./ui/dock-two";

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [activeItem, setActiveItem] = useState("Home");

  const dockItems = [
    { icon: Home, label: "Home", href: "#home" },
    { icon: Info, label: "About", href: "#about" },
    { icon: Folder, label: "Projects", href: "#projects" },
    { icon: Mail, label: "Contacts", href: "#contacts" },
    { icon: Download, label: "Download CV", href:"/Resume.pdf", targetBlank: true },
  ];

  const navItems = [
    { icon: Home, label: "Home", href: "#home" },
    { icon: Info, label: "About", href: "#about" },
    { icon: Folder, label: "Projects", href: "#projects" },
    { icon: Mail, label: "Contacts", href: "#contacts" },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="md:sticky top-0 py-3 z-50"
    >
      <div className="container mx-auto">
        <div className="relative flex items-center justify-between py-4">
          <Link href="/" className="text-4xl font-bold">
            <span className="text-primary">&lt;</span>Diego{" "}
            <span className="text-primary">/&gt;</span>
          </Link>

          {/* Dock visible only on mobile */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="fixed bottom-[-90px] left-0 w-full bg-none shadow-lg p-2 sm:hidden"
          >
            <Dock items={dockItems} />
          </motion.div>

          <div className="hidden md:block md:absolute md:left-1/2 md:-translate-x-1/2">
            <GlowEffect
              colors={["#FF5733", "#33FF57", "#3357FF", "#F1C40F"]}
              mode="colorShift"
              blur="soft"
              duration={3}
              className="absolute inset-0 z-0 rounded-full p-1 px-4 py-2"
            />

            <div className="relative flex items-center rounded-full border border-white/10 bg-background p-1 backdrop-blur-sm z-10">
              {navItems.map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  className="relative px-4 py-2 transition-colors"
                  onClick={() => setActiveItem(label)}
                >
                  {activeItem === label && (
                    <motion.span
                      layoutId="bubble"
                      className="absolute inset-0 z-10 bg-primary rounded-full"
                      transition={{
                        type: "spring",
                        bounce: 0.3,
                        duration: 0.9,
                      }}
                    />
                  )}
                  <span
                    className={`relative z-20 text-lg transition-colors duration-500 ${
                      activeItem === label ? "text-white dark:text-black" : ""
                    }`}
                  >
                    {label}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-end space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="border py-6 px-6"
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
            <Link className="bg-primary text-primary-foreground shadow hover:bg-primary/90 items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hidden md:inline-flex text-lg h-9 px-6 py-6 " href="/Resume.pdf" download target="_blank">
                Download CV
                <Download className="ml-1 h-6 w-6 font-bold" />
            </Link>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
