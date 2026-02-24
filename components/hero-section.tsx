'use client'

import { useEffect, useRef } from 'react'

export function HeroSection() {
  const sphereRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let rafId = 0 as number
    let currentScrollY = window.scrollY
    let targetScrollY = window.scrollY

    const lerp = (start: number, end: number, factor: number) =>
      start + (end - start) * factor

    const updateScroll = () => {
      currentScrollY = lerp(currentScrollY, targetScrollY, 0.1)
      const halfViewportHeight = window.innerHeight / 2
      const scrollProgress = Math.min(currentScrollY / halfViewportHeight, 1)
      const easeOutQuart = (t: number) => 1 - Math.pow(1 - t, 4)
      const smoothProgress = easeOutQuart(scrollProgress)
      const sphereTransformY = smoothProgress * -100
      const sphereOpacity = 1 - smoothProgress

      if (sphereRef.current) {
        sphereRef.current.style.transform = `translate3d(0, ${sphereTransformY}vh, 0)`
        sphereRef.current.style.opacity = String(sphereOpacity)
      }

      if (contentRef.current) {
        contentRef.current.style.transform = `translate3d(-50%, calc(-50% + ${sphereTransformY}vh), 0)`
        contentRef.current.style.opacity = String(sphereOpacity)
      }

      if (bottomRef.current) {
        if (scrollProgress > 0) bottomRef.current.style.visibility = 'visible'
        bottomRef.current.style.opacity = String(smoothProgress)
        bottomRef.current.style.transform = `translate3d(0, ${(1 - smoothProgress) * 20}px, 0)`
      }

      if (Math.abs(targetScrollY - currentScrollY) > 0.1 || scrollProgress < 1) {
        rafId = requestAnimationFrame(updateScroll)
      } else {
        rafId = 0
      }
    }

    const handleScroll = () => {
      targetScrollY = window.scrollY
      if (!rafId) rafId = requestAnimationFrame(updateScroll)
    }

    rafId = requestAnimationFrame(updateScroll)
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (rafId) cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <section
      id="home"
      aria-labelledby="datanyx-hero-title"
      className="relative w-full py-24 md:py-36 min-h-screen"
      style={{ overflow: 'visible' }}
    >
      <style jsx>{`
        .logo-image {
          width: 90vw;
          max-width: 400px;
          min-width: 280px;
          height: auto;
          object-fit: contain;
          filter: drop-shadow(0 0 24px rgba(255, 255, 255, 0.3));
        }

        @media (min-width: 480px) {
          .logo-image {
            width: 85vw;
            max-width: 500px;
          }
        }

        @media (min-width: 640px) {
          .logo-image {
            width: 72vw;
            max-width: 640px;
          }
        }

        @media (min-width: 768px) {
          .logo-image {
            width: 60vw;
            max-width: 760px;
          }
        }

        @media (min-width: 1024px) {
          .logo-image {
            width: 42vw;
            max-width: 850px;
          }
        }

        @media (min-width: 1536px) {
          .logo-image {
            width: 34vw;
            max-width: 1000px;
          }
        }

        @media (max-width: 639px) {
          .hero-content {
            top: 45% !important;
          }
        }

        @media (max-width: 480px) {
          .hero-content {
            top: 48% !important;
          }
        }

        @media (max-height: 700px) and (max-width: 639px) {
          .hero-content {
            top: 50% !important;
          }
        }
      `}</style>

      {/* Background Sphere */}
      <div
        ref={sphereRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: 2,
          transform: 'translate3d(0, 0, 0)',
          opacity: 1,
          willChange: 'transform, opacity',
          backfaceVisibility: 'hidden',
          pointerEvents: 'none',
        }}
      />

      {/* Centered Logo */}
      <div
        ref={contentRef}
        className="fixed hero-content"
        style={{
          zIndex: 600,
          top: '52%',
          left: '50%',
          transform: 'translate3d(-50%, -50%, 0)',
          opacity: 1,
          willChange: 'transform, opacity',
          backfaceVisibility: 'hidden',
          pointerEvents: 'none',
        }}
      >
        <div className="flex flex-col items-center gap-2 md:gap-3" style={{ pointerEvents: 'none' }}>
          {/* Logo — using native img to avoid Next.js Image overhead for a decorative hero element */}
          <img
            src="/assets/datanyx25logo.png"
            alt="DATANYX Logo"
            className="logo-image"
            style={{ pointerEvents: 'none' }}
          />
        </div>
      </div>

      <div
        ref={bottomRef}
        className="container mx-auto px-4 text-center"
        style={{
          position: 'relative',
          zIndex: 20,
          willChange: 'transform, opacity',
          backfaceVisibility: 'hidden',
          visibility: 'hidden',
        }}
      />
    </section>
  )
}

export default HeroSection