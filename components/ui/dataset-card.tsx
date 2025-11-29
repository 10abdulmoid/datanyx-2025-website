"use client";

import { motion } from "motion/react";
import { Lock, Unlock, ArrowRight, Terminal } from "lucide-react";
import { DatasetIdea } from "@/lib/datasets";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface DatasetCardProps {
  idea: DatasetIdea;
  onClick: () => void;
  layoutId: string;
  color: "red" | "blue" | "green" | "yellow";
}

const colorMap = {
  red: {
    bg: "bg-[#ff3b30]", // Vibrant Red
    text: "text-[#ff3b30]",
    border: "border-[#ff3b30]",
  },
  blue: {
    bg: "bg-[#007aff]", // Vibrant Blue
    text: "text-[#007aff]",
    border: "border-[#007aff]",
  },
  green: {
    bg: "bg-[#34c759]", // Vibrant Green
    text: "text-[#34c759]",
    border: "border-[#34c759]",
  },
  yellow: {
    bg: "bg-[#ffd60a]", // Vibrant Yellow
    text: "text-[#ffd60a]",
    border: "border-[#ffd60a]",
  },
};

export function DatasetCard({ idea, onClick, layoutId, color }: DatasetCardProps) {
  const styles = colorMap[color];
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      layoutId={layoutId}
      onClick={onClick}
      className="cursor-pointer h-full group relative isolate overflow-hidden bg-black"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileTap={{ scale: 0.98 }}
    >
      {/* The Kinetic Background Slab */}
      <motion.div
        className={cn("absolute inset-0 z-0", styles.bg)}
        initial={{ x: "-100%" }}
        animate={{ x: isHovered ? "0%" : "-100%" }}
        transition={{ type: "tween", ease: "circOut", duration: 0.4 }}
      />

      {/* The "Power Line" (Visible when not hovered) */}
      <div className={cn("absolute left-0 top-0 bottom-0 w-2 z-10 transition-opacity duration-300", styles.bg, isHovered ? "opacity-0" : "opacity-100")} />

      {/* Content Container */}
      <div className="relative z-20 h-full flex flex-col justify-between p-8 border border-zinc-800 group-hover:border-transparent transition-colors duration-300">
        
        {/* Top Section */}
        <div className="flex justify-end items-start">
          <div className={cn(
            "p-2 rounded-full border-2 transition-all duration-300",
            isHovered ? "border-black text-black rotate-12 scale-110" : "border-zinc-800 text-zinc-500"
          )}>
            {isHovered ? <Unlock size={20} strokeWidth={3} /> : <Lock size={20} />}
          </div>
        </div>

        {/* Middle Section - Title */}
        <div className="py-8">
          <h3 className={cn(
            "text-4xl md:text-5xl font-black leading-[0.85] tracking-tighter transition-colors duration-300",
            isHovered ? "text-black" : "text-white"
          )}>
            {idea.publicTitle}
          </h3>
        </div>

        {/* Bottom Section - Action */}
        <div className="flex items-center justify-between border-t border-dashed pt-6 transition-colors duration-300 border-zinc-800 group-hover:border-black/30">
          <div className="flex items-center gap-2">
            <Terminal size={16} className={cn("transition-colors duration-300", isHovered ? "text-black" : styles.text)} />
            <span className={cn(
              "font-mono text-xs font-bold uppercase tracking-widest transition-colors duration-300",
              isHovered ? "text-black" : "text-zinc-500"
            )}>
              {isHovered ? "Ready to Decrypt" : "Encrypted Data"}
            </span>
          </div>

          <motion.div
            animate={{ x: isHovered ? 5 : 0 }}
            className={cn("transition-colors duration-300", isHovered ? "text-black" : "text-zinc-600")}
          >
            <ArrowRight size={24} strokeWidth={isHovered ? 3 : 2} />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
