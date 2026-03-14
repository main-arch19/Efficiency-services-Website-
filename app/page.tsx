'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { LoadingScreen } from '@/components/sections/LoadingScreen'
import { TopInfoBar } from '@/components/layout/TopInfoBar'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { HeroSection } from '@/components/sections/HeroSection'
import { AboutSection } from '@/components/sections/AboutSection'
import { ServicesSection } from '@/components/sections/ServicesSection'
import { WhyHESSection } from '@/components/sections/WhyHESSection'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'
import { BookingSection } from '@/components/sections/BookingSection'
import { ContactSection } from '@/components/sections/ContactSection'
import { FloatingConsultationBar } from '@/components/floating/FloatingConsultationBar'
import { FloatingWhatsApp } from '@/components/floating/FloatingWhatsApp'

export default function HomePage() {
  const [loading, setLoading] = useState(true)

  return (
    <>
      <AnimatePresence>
        {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      <AnimatePresence>
        {!loading && (
          <motion.div
            key="page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: [0, 0, 0.2, 1] }}
          >
            <TopInfoBar />
            <Navbar />

            <main>
              <HeroSection />
              <AboutSection />
              <ServicesSection />
              <WhyHESSection />
              <TestimonialsSection />
              <BookingSection />
              <ContactSection />
            </main>

            <Footer />

            {/* Floating elements */}
            <FloatingConsultationBar />
            <FloatingWhatsApp />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
