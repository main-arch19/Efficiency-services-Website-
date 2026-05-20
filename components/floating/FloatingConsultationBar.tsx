'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { scrollToSection } from '@/lib/utils'
import { useScrollDirection } from '@/hooks/useScrollDirection'

export function FloatingConsultationBar() {
  const { scrollDirection, scrollY } = useScrollDirection()
  const isHidden = scrollDirection === 'down' && scrollY > 200

  return (
    <AnimatePresence>
      {!isHidden && scrollY > 100 && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="fixed bottom-0 left-0 right-0 z-30 md:hidden safe-bottom"
          style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}
        >
          <div className="px-4 pb-3 pt-2 bg-dark/95 backdrop-blur-md border-t border-dark-300">
            <motion.button
              onClick={() => window.open('https://form.jotform.com/260415121547045', '_blank')}
              className="w-full h-14 bg-accent hover:bg-accent-light text-white font-semibold text-base rounded-md transition-colors duration-300 shadow-glow-red-lg outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-dark"
              whileTap={{ scale: 0.98 }}
            >
              Book Your Free Consultation
            </motion.button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
