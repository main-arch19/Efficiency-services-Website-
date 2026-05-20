'use client'

import { motion, type Variants } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { scrollToSection } from '@/lib/utils'
import { whyHESFeatures } from '@/lib/tokens'

export function WhyHESSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  const containerVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
  }
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  }

  return (
    <section id="why-hes" className="section-padding bg-dark-100">
      <div className="max-content content-padding">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
          ref={ref}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-10 bg-primary" />
            <span className="text-xs font-body font-semibold uppercase tracking-[0.12em] text-primary">
              Why Choose Us
            </span>
            <div className="h-px w-10 bg-primary" />
          </div>
          <h2 className="font-heading font-bold text-[1.625rem] md:text-[2.25rem] text-white leading-[1.2] mb-4 tracking-tight">
            The HES <span className="text-gradient-blue">Difference</span>
          </h2>
          <p className="text-brand-slate-light max-w-xl mx-auto leading-[1.7]">
            We&apos;re not just another service provider. We&apos;re your efficiency partners — combining physical precision with digital intelligence.
          </p>
        </motion.div>

        {/* Feature cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          {whyHESFeatures.map((feature) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="relative rounded-lg border border-primary/25 hover:border-primary/50 bg-gradient-to-br from-dark-200 via-dark-200 to-dark-100 p-6 group transition-all duration-300 hover:shadow-glow-blue cursor-default"
              style={{
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
              }}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
            >
              {/* Glow effect background */}
              <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ background: 'radial-gradient(ellipse 80% 80% at 50% 0%, rgba(13,71,161,0.12), transparent)' }} />

              {/* Top accent line */}
              <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />

              {/* Icon */}
              <div className="text-4xl mb-4">{feature.icon}</div>

              <h3 className="font-heading font-semibold text-lg text-white mb-3">{feature.title}</h3>
              <p className="text-brand-slate-light text-sm leading-[1.7]">{feature.description}</p>

              {/* Bottom accent */}
              <div className="mt-5 pt-4 border-t border-dark-300 flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span className="text-xs text-primary font-semibold">HES Standard</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="relative rounded-xl overflow-hidden"
        >
          {/* Background gradient */}
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(135deg, #083480 0%, #0D47A1 40%, #B71C1C 80%, #D32F2F 100%)' }}
          />
          {/* Grid overlay */}
          <div className="absolute inset-0 arrow-grid-bg opacity-20" />
          {/* Geometric arrow shapes */}
          <div className="absolute right-8 top-1/2 -translate-y-1/2 w-32 h-32 border-r-4 border-t-4 border-white/10 rotate-45 hidden md:block" />
          <div className="absolute right-20 top-1/2 -translate-y-1/2 w-20 h-20 border-r-4 border-t-4 border-white/10 rotate-45 hidden md:block" />

          <div className="relative z-10 py-12 px-8 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div>
              <h3 className="font-heading font-bold text-2xl md:text-3xl text-white mb-2 tracking-tight">
                Ready to Streamline Your Success?
              </h3>
              <p className="text-white/80 text-sm md:text-base leading-relaxed">
                Book your free consultation today. No commitment, no pressure — just clarity on how we can help.
              </p>
            </div>
            <motion.button
              onClick={() => window.open('https://form.jotform.com/260415121547045', '_blank')}
              className="flex-shrink-0 bg-accent hover:bg-accent-light text-white font-semibold px-8 py-4 rounded-md transition-colors duration-300 text-base min-h-[52px] whitespace-nowrap outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary shadow-[0_4px_24px_rgba(211,47,47,0.4)] hover:shadow-[0_4px_32px_rgba(211,47,47,0.6)]"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.15, ease: 'backOut' }}
            >
              Get My Free Consultation
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
