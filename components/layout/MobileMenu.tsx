'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { X } from 'lucide-react'
import { navLinks } from '@/lib/tokens'
import { scrollToSection } from '@/lib/utils'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
  activeSection: string
}

export function MobileMenu({ isOpen, onClose, activeSection }: MobileMenuProps) {
  const handleNavClick = (href: string) => {
    onClose()
    setTimeout(() => scrollToSection(href), 300)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-50 bg-dark/95 backdrop-blur-lg flex flex-col"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-dark-300">
            <Link href="/" onClick={onClose}>
              <Image
                src="/images/hneef-logo.jpeg"
                alt="HNeef Efficiency Services"
                width={100}
                height={100}
                className="h-12 w-auto object-contain"
              />
            </Link>
            <motion.button
              onClick={onClose}
              className="p-2 rounded-md text-brand-slate-light hover:text-white hover:bg-dark-300 transition-colors duration-300 min-h-[44px] min-w-[44px] flex items-center justify-center"
              whileTap={{ scale: 0.9 }}
            >
              <X size={24} />
            </motion.button>
          </div>

          {/* Nav links */}
          <nav className="flex-1 flex flex-col justify-center px-8 gap-2">
            {navLinks.map((link, i) => {
              const isActive = activeSection === link.href.replace('#', '')
              return (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -24 }}
                  transition={{ duration: 0.3, delay: i * 0.05, ease: 'easeOut' }}
                >
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className={`w-full text-left py-4 text-2xl font-heading font-semibold transition-colors duration-300 border-b border-dark-300/50 ${
                      isActive ? 'text-primary' : 'text-white hover:text-primary'
                    }`}
                  >
                    {link.label}
                  </button>
                </motion.div>
              )
            })}

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 16 }}
              transition={{ duration: 0.3, delay: navLinks.length * 0.05 + 0.1 }}
              className="mt-8"
            >
              <button
                onClick={() => handleNavClick('#booking')}
                className="w-full bg-accent hover:bg-accent-light text-white font-semibold text-lg py-4 px-8 rounded-md transition-colors duration-300 min-h-[56px]"
              >
                Book Free Consultation
              </button>
            </motion.div>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
