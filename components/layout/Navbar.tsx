'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu } from 'lucide-react'
import { navLinks } from '@/lib/tokens'
import { scrollToSection } from '@/lib/utils'
import { ThemeToggle } from '@/components/ui/ThemeToggle'
import { MobileMenu } from './MobileMenu'
import { useActiveSection } from '@/hooks/useActiveSection'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const activeSection = useActiveSection()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? 'bg-dark/90 backdrop-blur-md border-b border-dark-300 shadow-lg'
            : 'bg-transparent'
        }`}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <div className="max-content content-padding flex items-center justify-between h-16 md:h-20">
          {/* Logo placeholder — hidden */}
          <div className="flex-shrink-0 w-px" />

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '')
              return (
                <div key={link.href} className="relative">
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className={`px-4 py-2 text-sm font-body font-medium transition-colors duration-300 rounded-md outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-dark min-h-[44px] ${
                      isActive ? 'text-primary' : 'text-brand-slate-light hover:text-white'
                    }`}
                  >
                    {link.label}
                  </button>
                  {isActive && (
                    <motion.div
                      layoutId="nav-underline"
                      className="absolute bottom-0 left-4 right-4 h-0.5 bg-primary rounded-full"
                      transition={{ duration: 0.3, ease: 'easeOut' }}
                    />
                  )}
                </div>
              )
            })}
          </nav>

          {/* Right side actions */}
          <div className="flex items-center gap-2">
            <ThemeToggle />

            {/* Mobile hamburger */}
            <motion.button
              onClick={() => setMenuOpen(true)}
              className="lg:hidden p-2 rounded-md text-brand-slate-light hover:text-white hover:bg-dark-300 transition-colors duration-300 min-h-[44px] min-w-[44px] flex items-center justify-center"
              whileTap={{ scale: 0.9 }}
              aria-label="Open menu"
            >
              <motion.div
                animate={menuOpen ? { rotate: 90 } : { rotate: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu size={22} />
              </motion.div>
            </motion.button>
          </div>
        </div>
      </motion.header>

      <MobileMenu
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
        activeSection={activeSection}
      />
    </>
  )
}
