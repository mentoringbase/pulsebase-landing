// ANCHOR: ANALYTICS — GA4 + Meta Pixel
// REASON: Track visits, CTA clicks, and demo bookings on pulse.mentoringbase.com
// PATTERN: Initialize once on app load from env vars; no-op if IDs not set
// IDs: set VITE_GA4_ID and VITE_META_PIXEL_ID in .env

declare global {
  interface Window {
    dataLayer: unknown[]
    gtag: (...args: unknown[]) => void
    fbq: ((...args: unknown[]) => void) & {
      callMethod?: (...args: unknown[]) => void
      queue: unknown[]
      push: (...args: unknown[]) => void
      loaded: boolean
      version: string
    }
    _fbq?: Window['fbq']
  }
}

const GA4_ID = import.meta.env.VITE_GA4_ID as string | undefined
const META_PIXEL_ID = import.meta.env.VITE_META_PIXEL_ID as string | undefined

// Google Analytics 4

export function initGA4(): void {
  if (!GA4_ID) return

  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`
  document.head.appendChild(script)

  window.dataLayer = window.dataLayer || []
  window.gtag = function (...args: unknown[]) {
    window.dataLayer.push(args)
  }
  window.gtag('js', new Date())
  window.gtag('config', GA4_ID)
}

export function trackEvent(eventName: string, params?: Record<string, unknown>): void {
  if (typeof window.gtag !== 'function') return
  window.gtag('event', eventName, params)
}

// Meta Pixel

export function initMetaPixel(): void {
  if (!META_PIXEL_ID) return

  const n = (window.fbq = function (...args: unknown[]) {
    if (n.callMethod) {
      n.callMethod(...args)
    } else {
      n.queue.push(args)
    }
  } as Window['fbq'])

  if (!window._fbq) window._fbq = n
  n.push = n
  n.loaded = true
  n.version = '2.0'
  n.queue = []

  const script = document.createElement('script')
  script.async = true
  script.src = 'https://connect.facebook.net/en_US/fbevents.js'
  document.head.appendChild(script)

  window.fbq('init', META_PIXEL_ID)
  window.fbq('track', 'PageView')

  const noscript = document.createElement('noscript')
  const img = document.createElement('img')
  img.height = 1
  img.width = 1
  img.style.display = 'none'
  img.src = `https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`
  noscript.appendChild(img)
  document.body.prepend(noscript)
}

export function trackPixelEvent(eventName: string, params?: Record<string, unknown>): void {
  if (typeof window.fbq !== 'function') return
  window.fbq('track', eventName, params)
}
