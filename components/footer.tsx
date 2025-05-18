import Link from "next/link";
import { socialItems } from "@/lib/social"; // Importa i social dal file separato

export default function Footer() {
  return (
    <footer className="bg-primary pt-7 pb-2">
      <div className="container mx-auto px-3">
        <div className="flex flex-col space-y-2 md:space-y-6">
          {/* Main footer content */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2 text-white dark:text-black">
              <span className="text-2xl font-semibold">
                <span className="">&lt;</span>
                Diego
                <span className="">/&gt;</span>
              </span>
            </Link>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8 dark:text-black text-white font-semibold">
              <Link href="#">Home</Link>
              <Link href="#about">About</Link>
              <Link href="#projects">Projects</Link>
              <Link href="#contacts">Contacts</Link>
            </nav>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialItems.map(({ icon: Icon, label, href }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white dark:text-black"
                >
                  <Icon className="w-7 h-7" />
                  <span className="sr-only">{label}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-background" />

          {/* Copyright */}
          <div className="text-center">
            <p className="dark:text-black text-white text-sm">
              © {new Date().getFullYear()} Diego Lauricella. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}