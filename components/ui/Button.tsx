'use client'

import { motion, type Transition } from 'framer-motion'
import Link from 'next/link'
import { cn } from '@/lib/utils'

interface ButtonProps {
  variant?: 'primary' | 'cta' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  onClick?: () => void
  loading?: boolean
  fullWidth?: boolean
  disabled?: boolean
  className?: string
  children: React.ReactNode
  type?: 'button' | 'submit' | 'reset'
}

const variantStyles = {
  primary:
    'bg-primary text-white border border-primary hover:bg-primary-light hover:border-primary-light focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-dark',
  cta: 'bg-accent text-white border border-accent hover:bg-accent-light hover:border-accent-light focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-dark shadow-glow-red hover:shadow-glow-red-lg',
  ghost:
    'bg-transparent text-white border border-white/30 hover:border-primary hover:text-primary focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-dark',
}

const sizeStyles = {
  sm: 'px-4 py-2 text-sm min-h-[36px]',
  md: 'px-6 py-3 text-base min-h-[44px]',
  lg: 'px-8 py-4 text-lg min-h-[52px]',
}

export function Button({
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  loading = false,
  fullWidth = false,
  disabled = false,
  className,
  children,
  type = 'button',
}: ButtonProps) {
  const baseStyles = cn(
    'inline-flex items-center justify-center gap-2 font-body font-semibold rounded-md transition-colors duration-300 outline-none cursor-pointer',
    variantStyles[variant],
    sizeStyles[size],
    fullWidth && 'w-full',
    (disabled || loading) && 'opacity-50 cursor-not-allowed pointer-events-none',
    className
  )

  const motionTransition: Transition = { duration: 0.15, ease: 'backOut' }
  const motionProps = {
    whileHover: { scale: 1.02 },
    whileTap: { scale: 0.98 },
    transition: motionTransition,
  }

  if (href) {
    return (
      <motion.div {...motionProps} className="inline-block">
        <Link href={href} className={baseStyles} onClick={onClick}>
          {children}
        </Link>
      </motion.div>
    )
  }

  return (
    <motion.button
      {...motionProps}
      type={type}
      className={baseStyles}
      onClick={onClick}
      disabled={disabled || loading}
    >
      {loading ? (
        <span className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
      ) : (
        children
      )}
    </motion.button>
  )
}
