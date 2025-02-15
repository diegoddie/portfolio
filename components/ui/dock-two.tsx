import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { LucideIcon } from "lucide-react"
import { Separator } from "./separator"
import Link from "next/link"
import { IconType } from "react-icons/lib"

interface DockProps {
  className?: string
  items: {
    icon: LucideIcon | IconType
    label: string
    href?: string
    onClick?: () => void
  }[]
  targetBlank?: boolean
}

interface DockIconButtonProps {
  icon: LucideIcon | IconType
  label: string
  href?: string
  onClick?: () => void
  className?: string
  targetBlank?: boolean
}

const floatingAnimation = {
  initial: { y: 0 },
  animate: {
    y: [-2, 2, -2],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
}

const DockIconButton = React.forwardRef<HTMLButtonElement, DockIconButtonProps>(
  ({ icon: Icon, label, href, targetBlank, onClick, className }, ref) => {
    const ButtonContent = (
      <>
        <Icon className="w-5 h-5 text-foreground" />
        <span className={cn(
          "absolute -top-8 left-1/2 -translate-x-1/2",
          "px-2 py-1 rounded text-xs",
          "bg-popover text-popover-foreground",
          "opacity-0 group-hover:opacity-100",
          "transition-opacity whitespace-nowrap pointer-events-none"
        )}>
          {label}
        </span>
      </>
    )

    if (href) {
      return (
        <Link target={targetBlank ? "_blank" : undefined} href={href} className={cn(
          "relative group p-3 rounded-lg",
          "hover:bg-secondary transition-colors",
          className
        )}>
          <motion.div
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            {ButtonContent}
          </motion.div>
        </Link>
      )
    }

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.95 }}
        onClick={onClick}
        className={cn(
          "relative group p-3 rounded-lg",
          "hover:bg-secondary transition-colors",
          className
        )}
      >
        {ButtonContent}
      </motion.button>
    )
  }
)
DockIconButton.displayName = "DockIconButton"

const Dock = React.forwardRef<HTMLDivElement, DockProps>(
  ({ items, className }, ref) => {
    return (
      <div ref={ref} className={cn("h-64 flex items-center justify-center p-2", className)}>
          <motion.div
            initial="initial"
            animate="animate"
            variants={floatingAnimation}
            className={cn(
              "flex items-center gap-1 p-1 rounded-2xl",
              "backdrop-blur-lg border shadow-lg",
              "bg-background/90 border-primary",
              "hover:shadow-xl transition-shadow duration-300"
            )}
          >
            {items.map((item, index) => (
              <React.Fragment key={item.label}>
                {item.label === "Download CV" && index !== 0 && (
                  <Separator
                    orientation="vertical"
                    className="h-6 bg-primary mx-2"
                  />
                )}
                <DockIconButton {...item} />
              </React.Fragment>
            ))}
          </motion.div>

      </div>
    )
  }
)
Dock.displayName = "Dock"

export { Dock }