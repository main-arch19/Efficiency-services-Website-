'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Phone, Mail, MapPin, MessageCircle, ArrowUp, Instagram } from 'lucide-react'
import { navLinks, servicesList } from '@/lib/tokens'
import { scrollToSection } from '@/lib/utils'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-dark-100 border-t border-dark-300">
      <div className="max-content content-padding py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/images/hneef-logo.jpeg"
                alt="HNeef Efficiency Services"
                width={100}
                height={100}
                className="h-16 w-auto object-contain rounded-sm"
              />
            </Link>
            <p className="text-brand-slate-light text-sm leading-relaxed mb-4">
              Kingston Jamaica&apos;s premier efficiency partner. Physical maintenance meets digital automation.
            </p>
            <p className="text-xs text-brand-slate font-accent italic text-primary-light">
              &ldquo;Streamline Your Success&rdquo;
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-white mb-4 text-sm uppercase tracking-widest text-primary">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-brand-slate-light hover:text-primary text-sm transition-colors duration-300 text-left min-h-[36px]"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-white mb-4 text-sm uppercase tracking-widest text-primary">
              Services
            </h4>
            <ul className="space-y-2">
              {servicesList.map((s) => (
                <li key={s.id}>
                  <button
                    onClick={() => scrollToSection('#services')}
                    className="text-brand-slate-light hover:text-primary text-sm transition-colors duration-300 text-left min-h-[36px]"
                  >
                    {s.icon} {s.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-white mb-4 text-sm uppercase tracking-widest text-primary">
              Get In Touch
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+18768051798"
                  className="flex items-center gap-2 text-brand-slate-light hover:text-primary text-sm transition-colors duration-300 min-h-[44px]"
                >
                  <Phone size={14} className="flex-shrink-0 text-primary" />
                  876-805-1798
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@hneefefficiencyservices.com"
                  className="flex items-center gap-2 text-brand-slate-light hover:text-primary text-sm transition-colors duration-300 min-h-[44px]"
                >
                  <Mail size={14} className="flex-shrink-0 text-primary" />
                  info@hneefefficiencyservices.com
                </a>
              </li>
              <li>
                <span className="flex items-start gap-2 text-brand-slate-light text-sm">
                  <MapPin size={14} className="flex-shrink-0 mt-0.5 text-primary" />
                  Kingston, Jamaica
                </span>
              </li>
              <li>
                <a
                  href="https://wa.me/18768051798"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#25D366] hover:opacity-80 text-sm transition-opacity duration-300 min-h-[44px]"
                >
                  <MessageCircle size={14} />
                  Chat on WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/HESJamaica"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-brand-slate-light hover:text-primary text-sm transition-colors duration-300 min-h-[44px]"
                >
                  <Instagram size={14} />
                  @HESJamaica
                </a>
              </li>
            </ul>

            {/* Business Hours */}
            <div className="mt-4 pt-4 border-t border-dark-300">
              <p className="text-xs text-brand-slate uppercase tracking-widest mb-2">Hours</p>
              <p className="text-sm text-brand-slate-light">Mon – Fri: 8am – 8pm</p>
              <p className="text-sm text-brand-slate-light">Sat: 8am – 5pm</p>
              <p className="text-sm text-brand-slate-light">Sun: Closed</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-dark-300 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-brand-slate text-xs text-center sm:text-left">
            © {year} HNeef Efficiency Services. All rights reserved. Kingston, Jamaica.
          </p>
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 text-xs text-brand-slate-light hover:text-primary transition-colors duration-300 group min-h-[44px]"
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2 }}
          >
            Back to top
            <span className="w-6 h-6 rounded-full border border-dark-300 group-hover:border-primary flex items-center justify-center transition-colors duration-300">
              <ArrowUp size={12} />
            </span>
          </motion.button>
        </div>
      </div>
    </footer>
  )
}
