'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import Image from 'next/image'
import { ChevronDown, ArrowRight } from 'lucide-react'
import { servicesList } from '@/lib/tokens'
import { scrollToSection } from '@/lib/utils'
import { cn } from '@/lib/utils'

interface ServiceCardProps {
  service: typeof servicesList[0]
  index: number
  featured?: boolean
}

function ServiceCard({ service, index, featured = false }: ServiceCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  

  const handleBookForThis = (e: React.MouseEvent) => {
    e.stopPropagation()
    scrollToSection('#booking')
    sessionStorage.setItem('selectedService', service.dropdownValue)
    window.dispatchEvent(new CustomEvent('serviceSelected', { detail: service.dropdownValue }))
  }

  if (featured) {
    // Landscape hero layout for digital service
    return (
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
        className="rounded-xl border border-primary/30 hover:border-primary/60 bg-dark-200 overflow-hidden transition-all duration-300 group hover:shadow-glow-blue"
      >
        <div className="flex flex-col md:flex-row">
          {/* Image — left on desktop */}
          <div className="relative w-full md:w-2/5 h-56 md:h-auto min-h-[240px] overflow-hidden flex-shrink-0">
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 40vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-transparent to-dark-200 opacity-70" />
            <div className="absolute inset-0 bg-primary mix-blend-multiply opacity-15" />
            <div className="absolute top-4 left-4">
              <span className="text-xs font-semibold uppercase tracking-widest px-2.5 py-1 rounded-full bg-primary/20 text-primary border border-primary/40">
                {service.category}
              </span>
            </div>
            <div className="absolute bottom-4 left-4 text-4xl">{service.icon}</div>
          </div>

          {/* Content — right */}
          <div className="flex-1 p-6 md:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-heading font-bold text-xl md:text-2xl text-white leading-tight">
                  {service.title}
                </h3>
                <motion.button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center border border-primary/40 text-primary hover:bg-primary/10 transition-colors duration-300 min-w-[44px] min-h-[44px]"
                  animate={{ rotate: isExpanded ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  aria-label={isExpanded ? 'Collapse' : 'Expand'}
                >
                  <ChevronDown size={16} />
                </motion.button>
              </div>

              <p className="text-brand-slate-light text-sm leading-relaxed mb-4">
                Automate repetitive tasks and build intelligent systems that work while you focus on growth.
              </p>

              {/* Services list — always visible in featured layout */}
              <div className="space-y-3">
                {service.items.map((item) => (
                  <motion.div
                    key={item.name}
                    initial={false}
                    animate={{ opacity: isExpanded || true ? 1 : 0 }}
                    className="pl-3 border-l-2 border-primary/50"
                  >
                    <div className="font-body font-medium text-sm text-white mb-0.5">{item.name}</div>
                    <div className="font-body text-xs text-brand-slate-light leading-relaxed">{item.description}</div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-dark-300 flex items-center justify-between gap-3">
              <span className="text-xs text-brand-slate">{service.items.length} specialized services</span>
              <motion.button
                onClick={handleBookForThis}
                className="flex items-center gap-2 text-sm font-semibold px-4 py-2.5 rounded-md transition-colors duration-300 min-h-[44px] bg-primary hover:bg-primary-light text-white"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Book for This
                <ArrowRight size={14} />
              </motion.button>
            </div>
          </div>
        </div>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
      className={cn(
        'rounded-lg border bg-dark-200 overflow-hidden transition-all duration-300 group',
        'border-accent/30 hover:border-accent/60 hover:shadow-glow-red'
      )}
    >
      {/* Card image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-200 via-dark-200/50 to-transparent" />
        <div className="absolute inset-0 bg-accent mix-blend-multiply opacity-15" />

        {/* Category badge */}
        <div className="absolute top-3 left-3">
          <span className="text-xs font-semibold uppercase tracking-widest px-2.5 py-1 rounded-full bg-accent/20 text-accent border border-accent/40">
            {service.category}
          </span>
        </div>

        {/* Icon */}
        <div className="absolute bottom-3 left-4 text-3xl">{service.icon}</div>
      </div>

      {/* Card content */}
      <div className="p-5">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-heading font-semibold text-lg text-white leading-tight pr-4">
            {service.title}
          </h3>
          <motion.button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center border transition-colors duration-300 min-w-[44px] min-h-[44px] border-accent/40 text-accent hover:bg-accent/10"
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            aria-label={isExpanded ? 'Collapse' : 'Expand'}
          >
            <ChevronDown size={16} />
          </motion.button>
        </div>

        {/* Expanded services list */}
        <motion.div
          initial={false}
          animate={{ height: isExpanded ? 'auto' : 0, opacity: isExpanded ? 1 : 0 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          style={{ overflow: 'hidden' }}
        >
          <div className="pt-2 pb-3 space-y-3">
            {service.items.map((item) => (
              <div key={item.name} className="pl-3 border-l-2 border-accent/50">
                <div className="font-body font-medium text-sm text-white mb-0.5">{item.name}</div>
                <div className="font-body text-xs text-brand-slate-light leading-relaxed">{item.description}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Book for this service */}
        <div className="pt-3 border-t border-dark-300 flex items-center justify-between gap-3">
          <span className="text-xs text-brand-slate">{service.items.length} services offered</span>
          <motion.button
            onClick={handleBookForThis}
            className="flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-md transition-colors duration-300 min-h-[36px] bg-accent text-white hover:bg-accent-light"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Book for This
            <ArrowRight size={12} />
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
}

export function ServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  const digitalServices = servicesList.filter((s) => s.accentColor === 'blue')
  const physicalServices = servicesList.filter((s) => s.accentColor === 'red')

  return (
    <section id="services" className="section-padding bg-dark">
      <div className="max-content content-padding">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-10 bg-primary" />
            <span className="text-xs font-body font-semibold uppercase tracking-[0.12em] text-primary">
              What We Offer
            </span>
            <div className="h-px w-10 bg-primary" />
          </div>
          <h2 className="font-heading font-bold text-[1.625rem] md:text-[2.25rem] text-white leading-[1.2] mb-4 tracking-tight">
            Services Built Around <span className="text-gradient-blue">Your Needs</span>
          </h2>
          <p className="text-brand-slate-light max-w-2xl mx-auto leading-[1.7]">
            Click any category to explore individual services. Each one comes with a direct path to booking your free consultation.
          </p>
        </motion.div>

        {/* Digital services — featured hero card */}
        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-3 h-3 rounded-sm bg-primary rotate-45 flex-shrink-0" />
            <h3 className="font-heading font-semibold text-base text-primary uppercase tracking-widest">
              Digital Services
            </h3>
            <div className="flex-1 h-px bg-primary/20" />
          </motion.div>
          <div className="space-y-6">
            {digitalServices.map((service, i) => (
              <ServiceCard key={service.id} service={service} index={i} featured />
            ))}
          </div>
        </div>

        {/* Physical services — grid */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-3 h-3 rounded-sm bg-accent rotate-45 flex-shrink-0" />
            <h3 className="font-heading font-semibold text-base text-accent uppercase tracking-widest">
              Physical Services
            </h3>
            <div className="flex-1 h-px bg-accent/20" />
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {physicalServices.map((service, i) => (
              <ServiceCard key={service.id} service={service} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
