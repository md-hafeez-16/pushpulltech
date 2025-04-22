"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface StaggerContainerProps {
  children: ReactNode
  delay?: number
  className?: string
}

export function StaggerContainer({ children, delay = 0, className = "" }: StaggerContainerProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      className={className}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.15,
            delayChildren: delay,
          },
        },
      }}
    >
      {children}
    </motion.div>
  )
}
