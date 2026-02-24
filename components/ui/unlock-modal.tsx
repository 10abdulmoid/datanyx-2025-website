"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Unlock, Download, FileText, Database } from "lucide-react";
import { DatasetIdea } from "@/lib/datasets";
import { cn } from "@/lib/utils";

interface UnlockModalProps {
  idea: DatasetIdea;
  onClose: () => void;
  color: "red" | "blue" | "green" | "yellow";
}

const colorMap = {
  red: {
    text: "text-red-500",
    bg: "bg-red-500",
    border: "border-red-500",
    ring: "focus:ring-red-500",
    button: "hover:bg-red-600",
  },
  blue: {
    text: "text-blue-500",
    bg: "bg-blue-500",
    border: "border-blue-500",
    ring: "focus:ring-blue-500",
    button: "hover:bg-blue-600",
  },
  green: {
    text: "text-green-500",
    bg: "bg-green-500",
    border: "border-green-500",
    ring: "focus:ring-green-500",
    button: "hover:bg-green-600",
  },
  yellow: {
    text: "text-yellow-500",
    bg: "bg-yellow-500",
    border: "border-yellow-500",
    ring: "focus:ring-yellow-500",
    button: "hover:bg-yellow-600",
  },
};

export function UnlockModal({ idea, onClose, color }: UnlockModalProps) {
  const styles = colorMap[color];

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <div 
      className="fixed inset-0 z-[2000] flex items-center justify-center p-2 sm:p-4 md:p-6 lg:p-8 xl:p-12 bg-black/90 backdrop-blur-xl"
      onWheel={(e) => e.stopPropagation()}
      onTouchMove={(e) => e.stopPropagation()}
    >
      <div className="absolute inset-0" onClick={onClose} />
      
      <motion.div
        layoutId={`idea-${idea.id}`}
        className={cn(
          "relative w-full flex flex-col rounded-2xl sm:rounded-3xl bg-[#09090b] border border-zinc-800 shadow-2xl overflow-hidden",
          "max-w-7xl min-h-[500px] md:min-h-[600px] lg:min-h-[700px] max-h-[95vh]"
        )}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-6 sm:right-6 z-50 p-2 rounded-full bg-zinc-900/50 hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors border border-zinc-800"
        >
          <X size={20} className="sm:w-6 sm:h-6" />
        </button>

        <div className="flex-1 flex flex-col overflow-hidden">
          
          {/* Content Panel */}
          <div className="flex-1 p-6 sm:p-8 md:p-10 lg:p-12 xl:p-14 relative flex flex-col overflow-y-auto scrollbar-hide">
            <AnimatePresence mode="wait">
              <motion.div 
                key="unlocked"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="h-full flex flex-col"
              >
                <div className="flex items-start gap-3 sm:gap-4 mb-6 sm:mb-8">
                  <div className={cn("p-2 sm:p-3 rounded-lg sm:rounded-xl bg-zinc-900 border border-zinc-800 flex-shrink-0", styles.text)}>
                    <Unlock size={20} className="sm:w-7 sm:h-7" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h2 className="text-2xl sm:text-3xl font-bold text-white mb-1 break-words">
                      {idea.private.title}
                    </h2>
                  </div>
                </div>

                <div className="flex-1 space-y-6 sm:space-y-8 overflow-y-auto scrollbar-hide pr-2 sm:pr-4">
                  <div className="space-y-2 sm:space-y-3">
                    <div className="flex items-center gap-2 text-zinc-400 font-mono text-[10px] sm:text-xs uppercase tracking-wider">
                      <FileText size={12} className="sm:w-3.5 sm:h-3.5" />
                      <span>Problem Statement</span>
                    </div>
                    <p 
                      className="text-sm sm:text-base md:text-lg text-zinc-300 leading-relaxed border-l-2 border-zinc-800 pl-4 sm:pl-6"
                      dangerouslySetInnerHTML={{ __html: idea.private.description }}
                    />
                  </div>
                  
                  <div className="space-y-2 sm:space-y-3">
                    <div className="flex items-center gap-2 text-zinc-400 font-mono text-[10px] sm:text-xs uppercase tracking-wider">
                      <Database size={12} className="sm:w-3.5 sm:h-3.5" />
                      <span>Technical Details</span>
                    </div>
                    <p className="text-xs sm:text-sm md:text-base text-zinc-400 leading-relaxed bg-zinc-900/50 p-4 sm:p-6 rounded-lg sm:rounded-xl border border-zinc-800">
                      {idea.private.details}
                    </p>
                  </div>

                  {idea.private.targetAudience && idea.private.targetAudience.length > 0 && (
                    <div className="space-y-2 sm:space-y-3">
                      <div className="flex items-center gap-2 text-zinc-400 font-mono text-[10px] sm:text-xs uppercase tracking-wider">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="sm:w-3.5 sm:h-3.5">
                          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                          <circle cx="9" cy="7" r="4"/>
                          <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
                          <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                        </svg>
                        <span>Target Audience</span>
                      </div>
                      <ul className="text-xs sm:text-sm md:text-base text-zinc-300 leading-relaxed bg-zinc-900/50 p-4 sm:p-6 rounded-lg sm:rounded-xl border border-zinc-800 space-y-2">
                        {idea.private.targetAudience.map((audience, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <span className={cn("mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0", styles.bg)} />
                            <span>{audience}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-zinc-800">
                  <a 
                    href={idea.private.downloadLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "w-full py-4 sm:py-5 rounded-lg sm:rounded-xl font-bold text-base sm:text-lg text-white transition-all flex items-center justify-center gap-3 shadow-lg",
                      styles.bg,
                      styles.button,
                      "hover:scale-[1.01] active:scale-[0.99]"
                    )}
                  >
                    <Download size={20} className="sm:w-6 sm:h-6" />
                    <span>Download Dataset Assets</span>
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
