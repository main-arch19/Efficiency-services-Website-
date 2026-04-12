'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Phone, MapPin, MessageCircle, Mail, Clock } from 'lucide-react'
import { useScrollDirection } from '@/hooks/useScrollDirection'

export function TopInfoBar() {
  const { scrollDirection, scrollY } = useScrollDirection()
  const isHidden = scrollDirection === 'down' && scrollY > 100

  return (
    <AnimatePresence>
      {!isHidden && (
        <motion.div
          initial={{ y: 0, opacity: 1 }}
          exit={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="bg-dark-100 border-b border-dark-300 py-2 px-4 text-xs hidden md:block"
        >
          <div className="max-content flex items-center justify-between gap-4">
            <div className="flex items-center gap-4 text-brand-slate-light">
              <span className="flex items-center gap-1.5">
                <MapPin size={12} className="text-primary" />
                Kingston, Jamaica
              </span>
            </div>
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5 text-brand-slate-light">
                <Clock size={12} className="text-primary" />
                Mo–Fri 8a–8p&nbsp;|&nbsp;Sat 8a–5p&nbsp;|&nbsp;Sun Closed
              </span>
              <a
                href="tel:+18768051798"
                className="flex items-center gap-1.5 text-brand-slate-light hover:text-primary transition-colors duration-300"
              >
                <Phone size={12} />
                876-805-1798
              </a>
              <a
                href="mailto:info@hneefefficiencyservices.com"
                className="flex items-center gap-1.5 text-brand-slate-light hover:text-primary transition-colors duration-300"
              >
                <Mail size={12} />
                info@hneefefficiencyservices.com
              </a>
              <a
                href="https://wa.me/18768051798?text=Hi%20HNeef%20Efficiency%20Services%2C%20I%27d%20like%20to%20book%20a%20free%20consultation."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-[#25D366] hover:opacity-80 transition-opacity duration-300"
              >
                <MessageCircle size={12} />
                WhatsApp Chat
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
