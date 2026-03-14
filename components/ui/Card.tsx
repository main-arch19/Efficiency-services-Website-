'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface CardProps {
  glow?: 'blue' | 'red' | 'none'
  elevated?: boolean
  glass?: boolean
  className?: string
  children: React.ReactNode
  onClick?: () => void
}

export function Card({
  glow = 'none',
  elevated = false,
  glass = false,
  className,
  children,
  onClick,
}: CardProps) {
  const glowHover = {
    blue: { boxShadow: '0 0 32px rgba(13,71,161,0.45), 0 8px 32px rgba(0,0,0,0.3)' },
    red: { boxShadow: '0 0 32px rgba(211,47,47,0.4), 0 8px 32px rgba(0,0,0,0.3)' },
    none: { boxShadow: '0 8px 32px rgba(0,0,0,0.3)' },
  }

  const glowBorder = {
    blue: 'border-primary/40',
    red: 'border-accent/40',
    none: 'border-dark-300',
  }

  return (
    <motion.div
      className={cn(
        'bg-dark-200 border rounded-lg p-6 transition-colors duration-300',
        glass && 'backdrop-blur-md bg-dark-200/60',
        glowBorder[glow],
        onClick && 'cursor-pointer',
        className
      )}
      whileHover={elevated ? { y: -4, ...glowHover[glow] } : glowHover[glow]}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      onClick={onClick}
    >
      {children}
    </motion.div>
  )
}
