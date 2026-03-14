'use client'

import { motion, type Variants } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { AnimatedCounter } from '@/components/ui/AnimatedCounter'
import { stats } from '@/lib/tokens'

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  const containerVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  }
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  }

  return (
    <section id="about" className="section-padding bg-dark-100">
      <div className="max-content content-padding">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
        >
          {/* Left — image + badge */}
          <motion.div variants={itemVariants} className="relative">
            <div className="relative rounded-xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=640&fit=crop&auto=format"
                alt="HNeef Efficiency Services team"
                width={800}
                height={640}
                className="w-full h-[360px] md:h-[440px] object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Image overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent" />
              <div className="absolute inset-0 bg-primary mix-blend-multiply opacity-10" />
            </div>

            {/* Floating stat card */}
            <motion.div
              className="absolute -bottom-6 -right-4 md:-right-8 bg-dark-200 border border-dark-300 rounded-lg p-4 shadow-glow-blue"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.5, duration: 0.4, ease: 'backOut' }}
            >
              <div className="text-2xl font-heading font-bold text-primary">
                <AnimatedCounter target={50} suffix="+" />
              </div>
              <div className="text-xs text-brand-slate-light mt-0.5">Projects Completed</div>
            </motion.div>

            {/* Blue accent border */}
            <div className="absolute -top-3 -left-3 w-16 h-16 border-t-2 border-l-2 border-primary rounded-tl-sm opacity-60" />
            <div className="absolute -bottom-3 -right-3 w-16 h-16 border-b-2 border-r-2 border-accent rounded-br-sm opacity-40" />
          </motion.div>

          {/* Right — content */}
          <div>
            <motion.div variants={itemVariants} className="mb-2">
              <div className="flex items-center gap-3">
                <div className="h-px w-10 bg-primary" />
                <span className="text-xs font-body font-semibold uppercase tracking-[0.12em] text-primary">
                  About HES Jamaica
                </span>
              </div>
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="font-heading font-bold text-[1.625rem] md:text-[2.25rem] text-white leading-[1.2] mb-6 tracking-tight"
            >
              One Company.<br />
              Two Worlds of Expertise.
            </motion.h2>

            <motion.blockquote
              variants={itemVariants}
              className="font-accent italic text-lg md:text-xl text-primary-light leading-[1.6] mb-6 pl-4 border-l-2 border-primary/50"
            >
              &ldquo;We believe your home should be as efficient as your business — and your business as clean as your home.&rdquo;
            </motion.blockquote>

            <motion.p variants={itemVariants} className="text-brand-slate-light leading-[1.7] mb-4">
              Founded in 2023 in Kingston, Jamaica, HNeef Efficiency Services was born from a simple observation: most businesses and households are juggling too many moving parts with too few systems. We bridge the gap between the physical and the digital.
            </motion.p>

            <motion.p variants={itemVariants} className="text-brand-slate-light leading-[1.7] mb-8">
              Whether it&apos;s a deep-clean before a big event or an automated spreadsheet system that saves you hours every week — we approach every job with the same commitment to precision and results.
            </motion.p>

            {/* Stats grid */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-dark-300"
            >
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="font-heading font-bold text-2xl md:text-3xl text-primary mb-1">
                    <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-xs text-brand-slate-light leading-tight">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
