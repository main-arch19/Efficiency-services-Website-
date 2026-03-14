'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import Image from 'next/image'
import { ChevronDown } from 'lucide-react'
import { scrollToSection } from '@/lib/utils'

const HEADLINE_WORDS = ['Streamline', 'Your', 'Success']

export function HeroSection() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const [isMobile, setIsMobile] = useState(true)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Parallax only on desktop
  const physicalY = useTransform(scrollYProgress, [0, 1], isMobile ? ['0%', '0%'] : ['0%', '20%'])
  const digitalY = useTransform(scrollYProgress, [0, 1], isMobile ? ['0%', '0%'] : ['0%', '-20%'])
  const textY = useTransform(scrollYProgress, [0, 1], isMobile ? ['0%', '0%'] : ['0%', '40%'])

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-[100dvh] flex items-center overflow-hidden bg-dark"
    >
      {/* Background grid */}
      <div className="absolute inset-0 arrow-grid-bg opacity-60" />

      {/* Blue radial glow */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: 'radial-gradient(ellipse 70% 60% at 30% 50%, rgba(13,71,161,0.4), transparent)',
        }}
      />

      {/* Diagonal split backgrounds */}
      <div className="absolute inset-0 flex">
        {/* Physical side */}
        <motion.div
          className="absolute left-0 top-0 bottom-0 overflow-hidden"
          style={{
            width: '55%',
            clipPath: 'polygon(0 0, 100% 0, 75% 100%, 0 100%)',
            y: physicalY,
          }}
        >
          <Image
            src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1200&h=900&fit=crop&auto=format"
            alt="Professional cleaning service"
            fill
            className="object-cover opacity-35"
            priority
            sizes="55vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark/70 via-dark/30 to-transparent" />
        </motion.div>

        {/* Digital side */}
        <motion.div
          className="absolute right-0 top-0 bottom-0 overflow-hidden"
          style={{
            width: '55%',
            clipPath: 'polygon(25% 0, 100% 0, 100% 100%, 0 100%)',
            y: digitalY,
          }}
        >
          <Image
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=900&fit=crop&auto=format"
            alt="Digital automation dashboard"
            fill
            className="object-cover opacity-25"
            priority
            sizes="55vw"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-dark/70 via-dark/30 to-transparent" />
        </motion.div>
      </div>

      {/* Geometric arrow decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 right-1/4 w-32 h-32 border-r-2 border-t-2 border-primary/20 rotate-45"
          animate={{ opacity: [0.2, 0.5, 0.2], scale: [1, 1.1, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/3 w-20 h-20 border-r-2 border-t-2 border-accent/20 rotate-45"
          animate={{ opacity: [0.1, 0.4, 0.1], scale: [1, 1.15, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        />
        <motion.div
          className="absolute top-1/3 left-1/4 w-24 h-24 border-r-2 border-t-2 border-primary/15 rotate-45"
          animate={{ opacity: [0.15, 0.35, 0.15], scale: [1, 1.08, 1] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 max-content content-padding w-full py-24 md:py-32"
        style={{ y: textY }}
      >
        <div className="max-w-3xl">
          {/* Overline */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="h-px w-12 bg-primary" />
            <span className="text-xs font-body font-semibold uppercase tracking-[0.12em] text-primary">
              Kingston, Jamaica
            </span>
          </motion.div>

          {/* Headline — word by word */}
          <h1 className="font-heading font-bold text-[2.25rem] md:text-[3rem] lg:text-[4rem] leading-[1.05] tracking-[-0.02em] mb-6 text-white">
            {HEADLINE_WORDS.map((word, i) => (
              <motion.span
                key={word}
                className="inline-block mr-[0.25em] last:mr-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.3 + i * 0.15,
                  ease: 'easeOut',
                }}
              >
                {i === 2 ? (
                  <span className="text-gradient-blue">{word}</span>
                ) : (
                  word
                )}
              </motion.span>
            ))}
          </h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.75 }}
            className="text-brand-slate-light text-base md:text-lg leading-[1.7] mb-10 max-w-xl"
          >
            One partner for your physical space and digital systems — from spotless homes to automated workflows.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <motion.button
              onClick={() => scrollToSection('#booking')}
              className="bg-accent hover:bg-accent-light text-white font-semibold px-8 py-4 rounded-md transition-colors duration-300 shadow-glow-red hover:shadow-glow-red-lg text-base min-h-[52px] outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-dark"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.15, ease: 'backOut' }}
            >
              Book Your Free Consultation
            </motion.button>
            <motion.button
              onClick={() => scrollToSection('#services')}
              className="border border-white/30 hover:border-primary text-white hover:text-primary font-semibold px-8 py-4 rounded-md transition-colors duration-300 text-base min-h-[52px] outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-dark"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.15, ease: 'backOut' }}
            >
              Explore Our Services
            </motion.button>
          </motion.div>

          {/* Dual service badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            className="mt-10 flex flex-wrap gap-3"
          >
            <span className="flex items-center gap-2 text-xs font-body text-brand-slate-light border border-primary/30 rounded-full px-3 py-1.5">
              <span className="w-2 h-2 rounded-full bg-primary" />
              Digital Services
            </span>
            <span className="flex items-center gap-2 text-xs font-body text-brand-slate-light border border-accent/30 rounded-full px-3 py-1.5">
              <span className="w-2 h-2 rounded-full bg-accent" />
              Physical Services
            </span>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => scrollToSection('#about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-brand-slate hover:text-white transition-colors duration-300 group"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{
          opacity: { delay: 1.5, duration: 0.5 },
          y: { delay: 1.5, duration: 2, repeat: Infinity, ease: 'easeInOut' },
        }}
        aria-label="Scroll down"
      >
        <span className="text-xs font-body tracking-widest uppercase">Scroll</span>
        <ChevronDown size={18} className="group-hover:text-primary transition-colors" />
      </motion.button>
    </section>
  )
}
