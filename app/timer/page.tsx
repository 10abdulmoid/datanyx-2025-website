"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function TimerPage() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Target date: 30th Nov 2025, 7:00 AM IST
    const targetDate = new Date("2025-11-30T07:00:00+05:30").getTime();

    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const interval = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full relative">
      
      <div className="flex flex-col items-center w-full max-w-[1400px] px-4 relative z-10">
        
        {/* Clean Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-20"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight text-white uppercase mb-6">
            Your Innovation Window
          </h1>
          
          <span className="text-2xl md:text-3xl lg:text-4xl font-black tracking-widest text-white uppercase">
            Closes In
          </span>
        </motion.div>

        {/* Enhanced Timer Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 w-full max-w-[1100px]">
          <EnhancedTimerCard value={timeLeft.days} label="DAYS" delay={0} />
          <EnhancedTimerCard value={timeLeft.hours} label="HOURS" delay={0.1} />
          <EnhancedTimerCard value={timeLeft.minutes} label="MINUTES" delay={0.2} />
          <EnhancedTimerCard value={timeLeft.seconds} label="SECONDS" delay={0.3} />
        </div>

      </div>
    </div>
  );
}

function EnhancedTimerCard({ value, label, delay }: { value: number; label: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6 }}
      className="relative group"
    >
      {/* Outer glow on hover */}
      <div className="absolute -inset-1 bg-white/20 rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Main card with layered design */}
      <div className="relative bg-black/40 backdrop-blur-xl rounded-2xl border-2 border-white/30 p-8 md:p-10 overflow-hidden group-hover:border-white/50 transition-all duration-300">
        
        {/* Top accent line */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-white/20" />
        
        {/* Corner decorations */}
        <div className="absolute top-3 left-3 w-8 h-8 border-t-2 border-l-2 border-white/40" />
        <div className="absolute top-3 right-3 w-8 h-8 border-t-2 border-r-2 border-white/40" />
        <div className="absolute bottom-3 left-3 w-8 h-8 border-b-2 border-l-2 border-white/40" />
        <div className="absolute bottom-3 right-3 w-8 h-8 border-b-2 border-r-2 border-white/40" />
        
        {/* Subtle grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(white 1px, transparent 1px),
              linear-gradient(90deg, white 1px, transparent 1px)
            `,
            backgroundSize: "20px 20px"
          }}
        />
        
        {/* Number display */}
        <div className="relative z-10 flex flex-col items-center">
          <div className="relative mb-4">
            <AnimatePresence mode="popLayout">
              <motion.span
                key={value}
                initial={{ y: 20, opacity: 0, scale: 0.8 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                exit={{ y: -20, opacity: 0, scale: 0.8 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="block text-6xl md:text-7xl lg:text-8xl font-bold text-white tabular-nums drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                style={{ 
                  fontVariantNumeric: "tabular-nums",
                }}
              >
                {value.toString().padStart(2, "0")}
              </motion.span>
            </AnimatePresence>
          </div>
          
          {/* Label with underline */}
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs md:text-sm font-bold tracking-[0.3em] text-white/70 uppercase">
              {label}
            </span>
            <div className="h-[2px] w-12 bg-white/30" />
          </div>
        </div>
        
      </div>
    </motion.div>
  );
}
