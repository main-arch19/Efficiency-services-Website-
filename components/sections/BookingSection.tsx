'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Check, Calendar, Phone, Mail, User, MessageSquare, ChevronDown } from 'lucide-react'


const bookingSchema = z.object({
  fullName: z.string().min(2, 'Please enter your full name'),
  phone: z.string().min(7, 'Please enter a valid phone number'),
  email: z.string().email('Please enter a valid email address'),
  serviceInterest: z.string().min(1, 'Please select a service'),
  preferredDate: z.string().min(1, 'Please select a preferred date'),
  description: z.string().optional(),
})

type BookingFormData = z.infer<typeof bookingSchema>

const serviceOptions = [
  { value: 'system-development', label: 'System Development & Automation ⚙️' },
  { value: 'awning-outdoor', label: 'Awning & Outdoor Maintenance 🏡' },
  { value: 'residential-cleaning', label: 'General Residential Cleaning 🧹' },
  { value: 'window-glass', label: 'Window & Glass Cleaning ✨' },
  { value: 'multiple', label: 'Multiple Services' },
  { value: 'not-sure', label: 'Not Sure Yet — Help Me Decide' },
]

export function BookingSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle')
  const [submittedName, setSubmittedName] = useState('')

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isValid },
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
    mode: 'onBlur',
  })

  // Listen for service pre-selection events
  useEffect(() => {
    const handleServiceSelected = (e: CustomEvent) => {
      setValue('serviceInterest', e.detail, { shouldValidate: true })
    }
    window.addEventListener('serviceSelected', handleServiceSelected as EventListener)

    // Check sessionStorage on mount
    const stored = sessionStorage.getItem('selectedService')
    if (stored) {
      setValue('serviceInterest', stored, { shouldValidate: true })
      sessionStorage.removeItem('selectedService')
    }

    return () => window.removeEventListener('serviceSelected', handleServiceSelected as EventListener)
  }, [setValue])

  const onSubmit = async (data: BookingFormData) => {
    setFormState('submitting')
    setSubmittedName(data.fullName)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setFormState('success')
  }

  const inputClass =
    'w-full h-12 px-4 bg-dark-200 border border-dark-300 rounded-md text-white text-base placeholder:text-brand-slate focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors duration-300 font-body'

  const labelClass = 'block text-xs font-body font-semibold uppercase tracking-widest text-brand-slate-light mb-2'

  const errorClass = 'mt-1.5 text-xs text-red-400'

  return (
    <section id="booking" className="section-padding bg-dark-100">
      <div className="max-content content-padding">
        <div
          ref={ref}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start"
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

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
          >
            <div className="bg-dark-200 border border-dark-300 rounded-xl p-6 md:p-8 relative overflow-hidden">
              {/* Top accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent via-accent-light to-accent" />

              <AnimatePresence mode="wait">
                {formState === 'success' ? (
                  /* Success state */
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4, ease: 'backOut' }}
                    className="py-8 text-center"
                  >
                    {/* Animated checkmark */}
                    <div className="w-20 h-20 rounded-full bg-green-500/15 border-2 border-green-500 flex items-center justify-center mx-auto mb-6">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.4, ease: 'backOut' }}
                      >
                        <Check size={36} className="text-green-400" />
                      </motion.div>
                    </div>

                    <h3 className="font-heading font-bold text-2xl text-white mb-3">
                      You&apos;re All Set, {submittedName.split(' ')[0]}!
                    </h3>
                    <p className="text-brand-slate-light leading-relaxed mb-2">
                      Your consultation request has been received.
                    </p>
                    <p className="text-primary font-semibold">
                      We&apos;ll contact you within 24 hours.
                    </p>

                    <div className="mt-6 p-4 rounded-md bg-dark border border-dark-300 text-left">
                      <p className="text-xs text-brand-slate uppercase tracking-widest mb-2">Next Steps</p>
                      <p className="text-sm text-brand-slate-light">Check your email and WhatsApp for a confirmation message and scheduling link from HNeef Efficiency Services.</p>
                    </div>
                  </motion.div>
                ) : (
                  /* Form state */
                  <motion.form
                    key="form"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit(onSubmit)}
                    className="space-y-5"
                    noValidate
                  >
                    <h3 className="font-heading font-bold text-xl text-white mb-1">Book My Free Consultation</h3>
                    <p className="text-brand-slate-light text-sm mb-5">All fields marked * are required.</p>

                    {/* Full Name */}
                    <div>
                      <label className={labelClass}>
                        Full Name *
                      </label>
                      <div className="relative">
                        <User size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-slate pointer-events-none" />
                        <input
                          {...register('fullName')}
                          type="text"
                          placeholder="Your full name"
                          className={`${inputClass} pl-10`}
                          inputMode="text"
                          autoComplete="name"
                        />
                      </div>
                      {errors.fullName && <p className={errorClass}>{errors.fullName.message}</p>}
                    </div>

                    {/* Phone */}
                    <div>
                      <label className={labelClass}>
                        Phone Number * <span className="text-brand-slate normal-case tracking-normal">(Jamaica +1-876 preferred)</span>
                      </label>
                      <div className="relative">
                        <Phone size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-slate pointer-events-none" />
                        <input
                          {...register('phone')}
                          type="tel"
                          placeholder="+1 (876) 000-0000"
                          className={`${inputClass} pl-10`}
                          inputMode="tel"
                          autoComplete="tel"
                        />
                      </div>
                      {errors.phone && <p className={errorClass}>{errors.phone.message}</p>}
                    </div>

                    {/* Email */}
                    <div>
                      <label className={labelClass}>Email Address *</label>
                      <div className="relative">
                        <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-slate pointer-events-none" />
                        <input
                          {...register('email')}
                          type="email"
                          placeholder="your@email.com"
                          className={`${inputClass} pl-10`}
                          inputMode="email"
                          autoComplete="email"
                        />
                      </div>
                      {errors.email && <p className={errorClass}>{errors.email.message}</p>}
                    </div>

                    {/* Service Interest */}
                    <div>
                      <label className={labelClass}>Service Interest *</label>
                      <div className="relative">
                        <select
                          {...register('serviceInterest')}
                          className={`${inputClass} pr-10 appearance-none cursor-pointer`}
                        >
                          <option value="">Select a service...</option>
                          {serviceOptions.map((opt) => (
                            <option key={opt.value} value={opt.value} className="bg-dark-200">
                              {opt.label}
                            </option>
                          ))}
                        </select>
                        <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-brand-slate pointer-events-none" />
                      </div>
                      {errors.serviceInterest && <p className={errorClass}>{errors.serviceInterest.message}</p>}
                    </div>

                    {/* Preferred Date */}
                    <div>
                      <label className={labelClass}>Preferred Date *</label>
                      <div className="relative">
                        <Calendar size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-slate pointer-events-none" />
                        <input
                          {...register('preferredDate')}
                          type="date"
                          className={`${inputClass} pl-10`}
                          min={new Date().toISOString().split('T')[0]}
                        />
                      </div>
                      {errors.preferredDate && <p className={errorClass}>{errors.preferredDate.message}</p>}
                    </div>

                    {/* Description */}
                    <div>
                      <label className={labelClass}>
                        Brief Description <span className="text-brand-slate normal-case tracking-normal">(optional)</span>
                      </label>
                      <div className="relative">
                        <MessageSquare size={16} className="absolute left-4 top-4 text-brand-slate pointer-events-none" />
                        <textarea
                          {...register('description')}
                          placeholder="Tell us a bit about what you need..."
                          rows={3}
                          className={`${inputClass} h-auto pl-10 pt-3 resize-none`}
                        />
                      </div>
                    </div>

                    {/* Submit */}
                    <motion.button
                      type="submit"
                      disabled={!isValid || formState === 'submitting'}
                      className="w-full h-14 bg-accent text-white font-semibold text-base rounded-md transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-dark-200 flex items-center justify-center gap-2 mt-2"
                      style={{
                        opacity: isValid ? 1 : 0.5,
                        cursor: isValid ? 'pointer' : 'not-allowed',
                        boxShadow: isValid ? '0 0 24px rgba(211,47,47,0.3)' : 'none',
                      }}
                      whileHover={isValid ? { scale: 1.01, boxShadow: '0 0 36px rgba(211,47,47,0.5)' } : {}}
                      whileTap={isValid ? { scale: 0.99 } : {}}
                    >
                      {formState === 'submitting' ? (
                        <>
                          <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        'Book My Free Consultation'
                      )}
                    </motion.button>

                    <p className="text-center text-xs text-brand-slate">
                      We&apos;ll respond within 24 hours · No obligation
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
