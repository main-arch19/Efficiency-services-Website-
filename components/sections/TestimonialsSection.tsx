'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState, useEffect, useCallback } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { testimonials } from '@/lib/tokens'

export function TestimonialsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [current, setCurrent] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const prev = useCallback(() => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length), [])
  const next = useCallback(() => setCurrent((c) => (c + 1) % testimonials.length), [])

  // Auto-rotate
  useEffect(() => {
    if (isPaused) return
    const timer = setInterval(next, 4500)
    return () => clearInterval(timer)
  }, [isPaused, next])

  // Swipe support
  const dragStartX = useRef(0)
  const handleDragStart = (e: React.TouchEvent) => {
    dragStartX.current = e.touches[0].clientX
  }
  const handleDragEnd = (e: React.TouchEvent) => {
    const delta = e.changedTouches[0].clientX - dragStartX.current
    if (delta < -50) next()
    else if (delta > 50) prev()
  }

  const testimonial = testimonials[current]

  return (
    <section id="testimonials" className="section-padding bg-dark overflow-hidden">
      <div className="max-content content-padding">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-10 bg-primary" />
            <span className="text-xs font-body font-semibold uppercase tracking-[0.12em] text-primary">
              Client Stories
            </span>
            <div className="h-px w-10 bg-primary" />
          </div>
          <h2 className="font-heading font-bold text-[1.625rem] md:text-[2.25rem] text-white leading-[1.2] tracking-tight">
            What Our Clients <span className="text-gradient-blue">Say</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative max-w-3xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleDragStart}
          onTouchEnd={handleDragEnd}
        >
          {/* Quote card */}
          <div className="relative rounded-xl border border-dark-300 bg-dark-200 p-8 md:p-12">
            {/* Decorative quote icon */}
            <div className="absolute top-6 right-8 opacity-10">
              <Quote size={64} className="text-primary fill-primary" />
            </div>

            {/* Top glow line */}
            <div className="absolute top-0 left-12 right-12 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
              >
                <blockquote className="font-accent italic text-lg md:text-xl text-white leading-[1.7] mb-8 relative z-10">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>

                <div className="flex items-center gap-4">
                  {/* Avatar */}
                  <div className="w-12 h-12 rounded-full bg-gradient-brand flex items-center justify-center flex-shrink-0">
                    <span className="font-heading font-bold text-sm text-white">{testimonial.initials}</span>
                  </div>
                  <div>
                    <div className="font-heading font-semibold text-white text-sm">{testimonial.name}</div>
                    <div className="text-brand-slate-light text-xs">{testimonial.role}</div>
                  </div>
                  {/* Stars */}
                  <div className="ml-auto flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span key={i} className="text-amber-400 text-sm">★</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <motion.button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-dark-300 hover:border-primary text-brand-slate-light hover:text-white flex items-center justify-center transition-colors duration-300 min-h-[44px] min-w-[44px]"
              whileTap={{ scale: 0.9 }}
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={18} />
            </motion.button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`transition-all duration-300 rounded-full min-h-[20px] min-w-[20px] flex items-center justify-center`}
                  aria-label={`Go to testimonial ${i + 1}`}
                >
                  <span
                    className={`block rounded-full transition-all duration-300 ${
                      i === current ? 'w-6 h-2 bg-primary' : 'w-2 h-2 bg-dark-300 hover:bg-brand-slate'
                    }`}
                  />
                </button>
              ))}
            </div>

            <motion.button
              onClick={next}
              className="w-10 h-10 rounded-full border border-dark-300 hover:border-primary text-brand-slate-light hover:text-white flex items-center justify-center transition-colors duration-300 min-h-[44px] min-w-[44px]"
              whileTap={{ scale: 0.9 }}
              aria-label="Next testimonial"
            >
              <ChevronRight size={18} />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
