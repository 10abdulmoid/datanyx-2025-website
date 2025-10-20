/**
 * Application-wide constants for better maintainability
 */

export const APP_CONFIG = {
  name: "Datanyx 2.0",
  url: "https://www.datanyx.in",
  registrationDeadline: "2025-11-14T18:29:59Z",
  eventDate: "November 22, 2025",
} as const

export const API_ENDPOINTS = {
  chatbot: "https://www.chatbot-by.adnanthecoder.com/chat/datanyx",
} as const

export const PERFORMANCE = {
  preloaderDuration: 2800,
  scrollThrottle: 16, // ~60fps
  debounceDelay: 150,
  imageQuality: 90,
} as const

export const BREAKPOINTS = {
  mobile: 480,
  tablet: 768,
  desktop: 1024,
  largeDesktop: 1440,
} as const

export const Z_INDEX = {
  particles: 10,
  navbar: 1000,
  preloader: 9999,
  cursor: 10000,
  mobileMenu: 998,
} as const
