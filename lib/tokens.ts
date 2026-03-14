import rawTokens from '../hneef-brand-tokens.json'

export const tokens = rawTokens

export const colors = tokens.colors
export const typography = tokens.typography
export const spacing = tokens.spacing
export const motion = tokens.motion
export const services = tokens.services

// Flat service list for easy iteration
export const servicesList = [
  {
    ...tokens.services.systemDevelopment,
    id: 'systemDevelopment',
    accentColor: 'blue' as const,
    dropdownValue: 'system-development',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=500&fit=crop&auto=format',
  },
  {
    ...tokens.services.awningOutdoor,
    id: 'awningOutdoor',
    accentColor: 'red' as const,
    dropdownValue: 'awning-outdoor',
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&h=600&fit=crop&auto=format',
  },
  {
    ...tokens.services.residentialCleaning,
    id: 'residentialCleaning',
    accentColor: 'red' as const,
    dropdownValue: 'residential-cleaning',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&h=600&fit=crop&auto=format',
  },
  {
    ...tokens.services.windowGlass,
    id: 'windowGlass',
    accentColor: 'red' as const,
    dropdownValue: 'window-glass',
    image: 'https://images.unsplash.com/photo-1527515637462-cff94ead201d?w=800&h=600&fit=crop&auto=format',
  },
]

// Stats for About section
export const stats = [
  { value: 50, label: 'Projects Completed', suffix: '+' },
  { value: 30, label: 'Happy Clients', suffix: '+' },
  { value: 2, label: 'Years Operating', suffix: '' },
  { value: 4, label: 'Service Categories', suffix: '' },
]

// Testimonials data
export const testimonials = [
  {
    id: 1,
    quote: 'HNeef transformed our chaotic spreadsheets into a fully automated reporting system. We save 10 hours a week that we used to spend on manual data entry.',
    name: 'Marcus Campbell',
    role: 'Small Business Owner, Kingston',
    initials: 'MC',
  },
  {
    id: 2,
    quote: 'The cleaning team was thorough, professional, and left our home spotless. We booked them for our move-out clean and got our full deposit back. Highly recommend!',
    name: 'Stacey Brown',
    role: 'Homeowner, Kingston',
    initials: 'SB',
  },
  {
    id: 3,
    quote: 'Our new awning installation was done in a single afternoon — no mess, no fuss. The team was courteous and the setup looks incredible. Will be using HNeef again.',
    name: 'Devon Reid',
    role: 'Property Manager, St. Andrew',
    initials: 'DR',
  },
  {
    id: 4,
    quote: 'The custom Google Sheets system they built for our inventory management is brilliant. Simple enough for our whole team to use, but powerful enough to run our whole operation.',
    name: 'Kezia Thomas',
    role: 'Retail Store Owner, Kingston',
    initials: 'KT',
  },
]

export const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Why HES', href: '#why-hes' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
]

export const whyHESFeatures = [
  {
    icon: '⚡',
    title: 'Versatility',
    description: 'From your living room to your spreadsheets — one partner handles it all. No more juggling multiple vendors or contractors.',
    color: 'blue' as const,
  },
  {
    icon: '🛡️',
    title: 'Reliability',
    description: 'Every commitment is a kept promise. We show up on time, deliver on scope, and follow up to make sure you\'re 100% satisfied.',
    color: 'blue' as const,
  },
  {
    icon: '💡',
    title: 'Innovation',
    description: 'We combine physical precision with digital intelligence. Our solutions don\'t just fix today\'s problems — they prevent tomorrow\'s.',
    color: 'blue' as const,
  },
]
