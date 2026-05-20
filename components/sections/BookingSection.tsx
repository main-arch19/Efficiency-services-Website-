'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Check, ArrowRight } from 'lucide-react'

const JOTFORM_URL = 'https://form.jotform.com/260415121547045'

export function BookingSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="booking" className="section-padding bg-dark-100">
      <div className="max-content content-padding">
        <div
          ref={ref}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        >
          {/* Left — compelling copy */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-10 bg-accent" />
              <span className="text-xs font-body font-semibold uppercase tracking-[0.12em] text-accent">
                Free Consultation
              </span>
            </div>

            <h2 className="font-heading font-bold text-[1.625rem] md:text-[2.25rem] text-white leading-[1.2] mb-6 tracking-tight">
              Let&apos;s Find Your Path to <span className="text-gradient-blue">Peak Efficiency</span>
            </h2>

            <blockquote className="font-accent italic text-lg text-primary-light leading-[1.6] mb-6 pl-4 border-l-2 border-primary/50">
              &ldquo;No pressure, no commitment — just a conversation about where you want to be and how we can get you there.&rdquo;
            </blockquote>

            <p className="text-brand-slate-light leading-[1.7] mb-8">
              Book your free 30-minute consultation. We&apos;ll listen to your needs, assess your situation, and provide a clear roadmap — whether that&apos;s digital automation, physical maintenance, or both.
            </p>

            {/* What to expect */}
            <div className="space-y-4">
              {[
                'We review your submission and reach out within 24 hours',
                'A 30-minute discovery call at your preferred time',
                'A clear proposal with pricing — no hidden fees',
                'You decide if we move forward — zero obligation',
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -12 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-5 h-5 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check size={11} className="text-primary" />
                  </div>
                  <p className="text-sm text-brand-slate-light leading-relaxed">{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — CTA card */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
          >
            <div className="bg-dark-200 border border-dark-300 rounded-xl p-8 md:p-12 relative overflow-hidden text-center">
              {/* Top accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent via-accent-light to-accent" />

              {/* Glow */}
              <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 100%, rgba(211,47,47,0.08), transparent)' }} />

              <div className="relative z-10">
                <div className="w-16 h-16 rounded-full bg-accent/15 border border-accent/30 flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">📅</span>
                </div>

                <h3 className="font-heading font-bold text-2xl text-white mb-3">
                  Ready to Get Started?
                </h3>
                <p className="text-brand-slate-light leading-relaxed mb-8 max-w-sm mx-auto">
                  Fill out our quick consultation form and we&apos;ll be in touch within 24 hours to schedule your free call.
                </p>

                <motion.a
                  href={JOTFORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 h-14 px-8 bg-accent text-white font-semibold text-base rounded-md transition-colors duration-300 outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-dark-200 hover:bg-accent-light"
                  style={{ boxShadow: '0 0 28px rgba(211,47,47,0.35)' }}
                  whileHover={{ scale: 1.02, boxShadow: '0 0 40px rgba(211,47,47,0.55)' }}
                  whileTap={{ scale: 0.98 }}
                >
                  Book Your Free Consultation
                  <ArrowRight size={18} />
                </motion.a>

                <p className="mt-5 text-xs text-brand-slate">
                  No obligation · We respond within 24 hours
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
