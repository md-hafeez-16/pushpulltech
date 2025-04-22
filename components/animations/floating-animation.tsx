"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface FloatingAnimationProps {
  children: ReactNode
  className?: string
  amplitude?: number
  duration?: number
}

export function FloatingAnimation({ children, className = "", amplitude = 10, duration = 4 }: FloatingAnimationProps) {
  return (
    <motion.div
      className={className}
      animate={{
        y: [0, -amplitude, 0],
      }}
      transition={{
        duration,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "mirror",
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  )
}
