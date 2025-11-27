"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Lock, ArrowRight, Loader2 } from "lucide-react";

interface PasswordGateProps {
  children: React.ReactNode;
  requiredPassword?: string;
  domainKey?: string;
}

export default function PasswordGate({ 
  children, 
  requiredPassword = "datanyx2025",
  domainKey = "default" 
}: PasswordGateProps) {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isChecking, setIsChecking] = useState(false);

  const storageKey = `datanyx_access_granted_${domainKey}`;

  useEffect(() => {
    // Check if previously unlocked in this session
    const unlocked = sessionStorage.getItem(storageKey);
    if (unlocked === "true") {
      setIsUnlocked(true);
    }
    setIsLoading(false);
  }, [storageKey]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsChecking(true);
    
    // Simulate a small delay for better UX (feels like verifying)
    await new Promise(resolve => setTimeout(resolve, 600));

    if (password === requiredPassword) {
      setIsUnlocked(true);
      sessionStorage.setItem(storageKey, "true");
    } else {
      setError(true);
      setTimeout(() => setError(false), 2000);
    }
    setIsChecking(false);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="w-6 h-6 border-2 border-white/20 border-t-white rounded-full animate-spin" />
      </div>
    );
  }

  if (isUnlocked) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-black relative overflow-hidden font-sans selection:bg-cyan-500/30">
      {/* Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyan-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="z-10 w-full max-w-md p-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative"
        >
          <div className="relative backdrop-blur-3xl bg-white/5 border border-white/10 rounded-[2rem] p-8 md:p-10 shadow-2xl overflow-hidden">
            {/* Decorative gradient blob inside card */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-white/5 rounded-full blur-[50px] pointer-events-none" />

            <div className="flex flex-col items-center text-center mb-8 relative z-10">
              <div className="w-20 h-20 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl flex items-center justify-center mb-6 border border-white/10 text-white shadow-lg group">
                <Lock size={32} className="text-white/80 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-3 tracking-tight">Restricted Access</h2>
              <p className="text-white/50 text-sm leading-relaxed max-w-[260px]">
                This dataset is protected. Please enter the access code to continue.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
              <div className="relative group">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setError(false);
                  }}
                  placeholder="Enter Access Code"
                  className={`w-full bg-black/40 border ${
                    error ? 'border-red-500/50 text-red-200' : 'border-white/10 focus:border-white/30 text-white'
                  } rounded-xl px-4 py-4 text-center tracking-[0.3em] placeholder:tracking-normal placeholder:text-white/20 focus:outline-none transition-all duration-300 shadow-inner`}
                  autoFocus
                />
                {error && (
                  <motion.p 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute -bottom-6 left-0 right-0 text-center text-xs text-red-400 font-medium"
                  >
                    Incorrect access code
                  </motion.p>
                )}
              </div>
              
              <button
                type="submit"
                disabled={isChecking || !password}
                className={`w-full bg-white text-black font-bold py-4 rounded-xl hover:bg-gray-100 active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-white/5 ${
                  (isChecking || !password) ? 'opacity-50 cursor-not-allowed' : 'opacity-100'
                }`}
              >
                {isChecking ? (
                  <Loader2 size={20} className="animate-spin" />
                ) : (
                  <>
                    <span>Unlock Datasets</span>
                    <ArrowRight size={18} />
                  </>
                )}
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
