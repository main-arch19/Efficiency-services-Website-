'use client'

import { motion, type Variants } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Phone, Mail, MapPin, MessageCircle, Clock, Instagram } from 'lucide-react'
import { scrollToSection } from '@/lib/utils'

const contactItems = [
  {
    icon: Phone,
    label: 'Phone',
    value: '876-805-1798',
    href: 'tel:+18768051798',
    color: 'text-primary',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'info@hneefefficiencyservices.com',
    href: 'mailto:info@hneefefficiencyservices.com',
    color: 'text-primary',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Kingston, Jamaica',
    href: 'https://maps.google.com/?q=Kingston,Jamaica',
    color: 'text-primary',
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: 'Chat with us directly',
    href: 'https://wa.me/18768051798?text=Hi%20HNeef!%20I%27d%20like%20to%20book%20a%20consultation.',
    color: 'text-[#25D366]',
    external: true,
  },
  {
    icon: Instagram,
    label: 'Instagram',
    value: '@HESJamaica',
    href: 'https://instagram.com/HESJamaica',
    color: 'text-primary',
    external: true,
  },
]

const businessHours = [
  { day: 'Monday – Friday', hours: '8:00 AM – 8:00 PM' },
  { day: 'Saturday', hours: '8:00 AM – 5:00 PM' },
  { day: 'Sunday', hours: 'Closed' },
]

export function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  const containerVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08 } },
  }
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
  }

  return (
    <section id="contact" className="section-padding bg-dark">
      <div className="max-content content-padding">
        {/* Header */}
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
              Reach Out
            </span>
            <div className="h-px w-10 bg-primary" />
          </div>
          <h2 className="font-heading font-bold text-[1.625rem] md:text-[2.25rem] text-white leading-[1.2] mb-4 tracking-tight">
            We&apos;re Here to <span className="text-gradient-blue">Help</span>
          </h2>
          <p className="text-brand-slate-light max-w-lg mx-auto leading-[1.7]">
            Questions before booking? Reach out on WhatsApp for the fastest response — most Jamaican clients prefer it.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {/* Contact methods */}
          <motion.div variants={itemVariants} className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {contactItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.external ? '_blank' : undefined}
                rel={item.external ? 'noopener noreferrer' : undefined}
                className="flex items-center gap-4 bg-dark-200 border border-dark-300 hover:border-primary/50 rounded-lg p-4 group transition-all duration-300 hover:shadow-glow-blue min-h-[76px]"
              >
                <div className={`w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors duration-300 ${item.label === 'WhatsApp' ? 'bg-[#25D366]/10 group-hover:bg-[#25D366]/20' : ''}`}>
                  <item.icon size={18} className={item.color} />
                </div>
                <div>
                  <div className="text-xs text-brand-slate uppercase tracking-widest mb-0.5">{item.label}</div>
                  <div className="text-sm font-medium text-white group-hover:text-primary transition-colors duration-300">
                    {item.value}
                  </div>
                </div>
              </a>
            ))}
          </motion.div>

          {/* Business hours */}
          <motion.div variants={itemVariants}>
            <div className="bg-dark-200 border border-dark-300 rounded-lg p-6 h-full">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-8 rounded-md bg-primary/10 flex items-center justify-center">
                  <Clock size={16} className="text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-white">Business Hours</h3>
              </div>
              <div className="space-y-3">
                {businessHours.map(({ day, hours }) => (
                  <div key={day} className="flex justify-between items-center py-2 border-b border-dark-300 last:border-0">
                    <span className="text-sm text-brand-slate-light">{day}</span>
                    <span className={`text-sm font-medium ${hours === 'Closed' ? 'text-accent/70' : 'text-white'}`}>
                      {hours}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA nudge */}
              <div className="mt-6 pt-4 border-t border-dark-300">
                <p className="text-xs text-brand-slate-light mb-3">Ready to get started?</p>
                <motion.button
                  onClick={() => scrollToSection('#booking')}
                  className="w-full bg-accent hover:bg-accent-light text-white font-semibold text-sm py-3 rounded-md transition-colors duration-300 min-h-[44px]"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  Book Free Consultation
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
