'use client'
import { useEffect, useRef, useState, memo } from 'react'
import Image from 'next/image'

interface FullscreenPreloaderProps {
  src?: string
  durationMs?: number
  onDone: () => void
}

const FullscreenPreloader = memo(function FullscreenPreloader({
  src = "/assets/datanyx25logo.png",
  durationMs = 2800,
  onDone,
}: FullscreenPreloaderProps) {
  const [pct, setPct] = useState(0)
  const [phase, setPhase] = useState<'loading' | 'fading'>('loading')
  const rafRef = useRef<number | null>(null)
  const fadeTimeoutRef = useRef<number | null>(null)

  useEffect(() => {
    const start = performance.now()
    const tick = (t: number) => {
      const p = Math.min((t - start) / durationMs, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setPct(Math.round(eased * 100))
      if (p < 1) {
        rafRef.current = requestAnimationFrame(tick)
      } else {
        setPhase('fading')
        fadeTimeoutRef.current = window.setTimeout(() => {
          onDone()
        }, 600)
      }
    }
    rafRef.current = requestAnimationFrame(tick)
    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current)
      if (fadeTimeoutRef.current !== null) clearTimeout(fadeTimeoutRef.current)
    }
  }, [durationMs, onDone])

  return (
    <div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black"
      style={{
        opacity: phase === 'fading' ? 0 : 1,
        transition: 'opacity 600ms ease-out',
      }}
    >
      <style jsx>{`
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .logo-wrapper {
          width: clamp(200px, 50vw, 600px);
          height: auto;
          animation: fadeInScale 800ms ease-out;
          position: relative;
        }
        
        .progress-container {
          animation: fadeInScale 800ms ease-out 200ms backwards;
        }
      `}</style>

      <div className="logo-wrapper mb-16">
        <Image
          src={src}
          alt="Datanyx Logo"
          width={600}
          height={240}
          priority
          quality={90}
          style={{ width: '100%', height: 'auto' }}
        />
      </div>

      <div className="progress-container w-[min(400px,80vw)]">
        <div className="h-0.5 bg-zinc-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-white rounded-full transition-all duration-200 ease-out"
            style={{ width: `${pct}%` }}
          />
        </div>
        <div className="mt-4 text-center text-white/70 text-sm font-light tracking-wide tabular-nums">
          {pct}%
        </div>
      </div>
    </div>
  )
})

export default FullscreenPreloader