"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Lock, Unlock, Download, Loader2, FileText, Database, CheckCircle2 } from "lucide-react";
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
  const [password, setPassword] = useState("");
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [error, setError] = useState(false);
  const [isChecking, setIsChecking] = useState(false);
  const styles = colorMap[color];

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  const handleUnlock = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsChecking(true);
    
    // Simulate verification delay
    await new Promise(resolve => setTimeout(resolve, 800));

    if (password === idea.private.password) {
      setIsUnlocked(true);
    } else {
      setError(true);
      setTimeout(() => setError(false), 2000);
    }
    setIsChecking(false);
  };

  if (!idea) return null;

  return (
    <div 
      className="fixed inset-0 z-[2000] flex items-center justify-center p-4 md:p-8 bg-black/90 backdrop-blur-xl"
      onWheel={(e) => e.stopPropagation()}
      onTouchMove={(e) => e.stopPropagation()}
    >
      <div className="absolute inset-0" onClick={onClose} />
      
      <motion.div
        layoutId={`idea-${idea.id}`}
        className="relative w-full max-w-5xl min-h-[600px] flex flex-col rounded-3xl bg-[#09090b] border border-zinc-800 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-50 p-2 rounded-full bg-zinc-900/50 hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors border border-zinc-800"
        >
          <X size={24} />
        </button>

        <div className="flex-1 flex flex-col md:flex-row h-full">
          
          {/* Left Panel: Visual / Context */}
          <div className="w-full md:w-1/3 bg-zinc-900/30 border-b md:border-b-0 md:border-r border-zinc-800 p-8 flex flex-col justify-between relative overflow-hidden">
            <div className={cn("absolute inset-0 opacity-5", styles.bg)} />
            
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className={cn("w-2 h-2 rounded-full", styles.bg)} />
                <span className="text-xs font-mono font-bold tracking-widest text-zinc-500 uppercase">
                  {isUnlocked ? "Access Granted" : "Access Restricted"}
                </span>
              </div>
              
              <h2 className="text-4xl font-black text-white leading-tight mb-4">
                {idea.publicTitle}
              </h2>
              
              {!isUnlocked && (
                <p className="text-zinc-500 text-sm leading-relaxed">
                  This dataset is encrypted. Authentication is required to view the problem statement and access the files.
                </p>
              )}
            </div>

            <div className="mt-8 md:mt-0">
               {/* Security Level block removed as per user request */}
            </div>
          </div>

          {/* Right Panel: Content / Interaction */}
          <div className="flex-1 p-8 md:p-12 relative flex flex-col justify-center">
            <AnimatePresence mode="wait">
              {!isUnlocked ? (
                // LOCKED STATE
                <motion.div 
                  key="locked"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="w-full max-w-md mx-auto"
                >
                  <div className="flex flex-col items-center text-center mb-8">
                    <div className={cn("w-20 h-20 rounded-2xl flex items-center justify-center mb-4 bg-zinc-900 border border-zinc-800", styles.text)}>
                      <Lock size={40} strokeWidth={1.5} />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Enter Access Code</h3>
                    <p className="text-zinc-500 text-sm">Please enter the password provided to your team.</p>
                  </div>

                  <form onSubmit={handleUnlock} className="space-y-5">
                    <div className="relative group">
                      <input
                        type="password"
                        value={password}
                        onChange={(e) => {
                          setPassword(e.target.value);
                          setError(false);
                        }}
                        placeholder="••••••••"
                        className={cn(
                          "w-full bg-zinc-900/50 border-2 text-center text-2xl font-mono tracking-[0.3em] py-4 rounded-xl outline-none transition-all placeholder:text-zinc-700 placeholder:tracking-widest",
                          error ? "border-red-500 text-red-500" : `border-zinc-800 focus:border-zinc-600 text-white`
                        )}
                        autoFocus
                      />
                      {error && (
                        <motion.p 
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          className="text-center text-sm text-red-500 font-medium mt-3"
                        >
                          Access Denied: Invalid Credentials
                        </motion.p>
                      )}
                    </div>

                    <button
                      type="submit"
                      disabled={isChecking || !password}
                      className={cn(
                        "w-full py-5 rounded-xl font-bold text-lg text-white transition-all flex items-center justify-center gap-3",
                        styles.bg,
                        styles.button,
                        (isChecking || !password) ? "opacity-50 cursor-not-allowed" : "hover:scale-[1.02] active:scale-[0.98]"
                      )}
                    >
                      {isChecking ? <Loader2 size={24} className="animate-spin" /> : "Unlock Data"}
                    </button>
                  </form>
                </motion.div>
              ) : (
                // UNLOCKED STATE
                <motion.div 
                  key="unlocked"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="h-full flex flex-col"
                >
                  <div className="flex items-center gap-4 mb-8">
                    <div className={cn("p-3 rounded-xl bg-zinc-900 border border-zinc-800", styles.text)}>
                      <Unlock size={28} />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-white mb-1">
                        {idea.private.title}
                      </h2>
                    </div>
                  </div>

                  <div className="flex-1 space-y-8 overflow-y-auto pr-4 custom-scrollbar">
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-zinc-400 font-mono text-xs uppercase tracking-wider">
                        <FileText size={14} />
                        <span>Problem Statement</span>
                      </div>
                      <p className="text-lg text-zinc-300 leading-relaxed border-l-2 border-zinc-800 pl-6">
                        {idea.private.description}
                      </p>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-zinc-400 font-mono text-xs uppercase tracking-wider">
                        <Database size={14} />
                        <span>Technical Details</span>
                      </div>
                      <p className="text-base text-zinc-400 leading-relaxed bg-zinc-900/50 p-6 rounded-xl border border-zinc-800">
                        {idea.private.details}
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 pt-8 border-t border-zinc-800">
                    <a 
                      href={idea.private.downloadLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        "w-full py-5 rounded-xl font-bold text-lg text-white transition-all flex items-center justify-center gap-3 shadow-lg",
                        styles.bg,
                        styles.button,
                        "hover:scale-[1.01] active:scale-[0.99]"
                      )}
                    >
                      <Download size={24} />
                      <span>Download Dataset Assets</span>
                    </a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
