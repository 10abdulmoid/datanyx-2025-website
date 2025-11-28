"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { CometCard } from "@/components/ui/comet-card";
import { AnimatePresence, motion } from "motion/react";
import { X, ChevronRight, Lightbulb, Lock, Unlock, Download, Loader2 } from "lucide-react";
import FullscreenPreloader from "@/components/ui/PreLoader";
import { DATASETS, DatasetIdea } from "@/lib/datasets";

function IdeaCard({
  idea,
  onClick,
  layoutId,
}: {
  idea: DatasetIdea;
  onClick: () => void;
  layoutId: string;
}) {
  return (
    <motion.div 
      layoutId={layoutId} 
      onClick={onClick} 
      className="cursor-pointer h-full"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <CometCard className="w-full h-full">
        <div
          className="relative flex w-full h-full flex-col items-stretch rounded-[16px] md:rounded-[20px] bg-black/40 backdrop-blur-md border border-red-500/30 p-4 md:p-6 group"
          style={{ transformStyle: "preserve-3d" }}
        >
          <div className="absolute -inset-2 bg-gradient-to-br from-red-500/20 to-pink-500/20 opacity-0 group-hover:opacity-10 transition-opacity duration-500 -z-10 rounded-[20px]" />
          
          <motion.div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center py-8">
            <div className="p-4 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 mb-4 group-hover:scale-110 transition-transform duration-300">
              <Lock size={32} />
            </div>
            
            <motion.h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-red-400 transition-colors">
              {idea.publicTitle}
            </motion.h3>
            
            <p className="text-white/40 text-sm">
              Click to unlock details
            </p>
          </motion.div>
        </div>
      </CometCard>
    </motion.div>
  );
}

function UnlockModal({ idea, onClose }: { idea: DatasetIdea; onClose: () => void }) {
  const [password, setPassword] = useState("");
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [error, setError] = useState(false);
  const [isChecking, setIsChecking] = useState(false);

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
    await new Promise(resolve => setTimeout(resolve, 600));

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
      className="fixed inset-0 z-[2000] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onWheel={(e) => e.stopPropagation()}
      onTouchMove={(e) => e.stopPropagation()}
    >
      <div className="absolute inset-0" onClick={onClose} />
      <motion.div
        layoutId={`idea-${idea.id}`}
        className="relative w-full max-w-2xl flex flex-col rounded-[32px] bg-black/90 border border-red-500/30 overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative p-8 md:p-10">
          <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-pink-500/10 opacity-50" />
          
          <button
            onClick={onClose}
            className="absolute top-6 right-6 z-20 p-2 rounded-full bg-black/40 hover:bg-black/60 text-white backdrop-blur-md border border-white/10 transition-colors"
          >
            <X size={20} />
          </button>

          <div className="relative z-10">
            {!isUnlocked ? (
              // LOCKED STATE
              <div className="flex flex-col items-center text-center py-8">
                <div className="w-20 h-20 bg-red-500/10 rounded-2xl flex items-center justify-center mb-6 border border-red-500/20 text-red-400">
                  <Lock size={40} />
                </div>
                <h2 className="text-3xl font-bold text-white mb-2">{idea.publicTitle}</h2>
                <p className="text-white/50 mb-8 max-w-sm">
                  Enter the access code provided to your team to view the problem statement and download the dataset.
                </p>

                <form onSubmit={handleUnlock} className="w-full max-w-xs space-y-4">
                  <div className="relative">
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                        setError(false);
                      }}
                      placeholder="Access Code"
                      className={`w-full bg-black/40 border ${
                        error ? 'border-red-500 text-red-200' : 'border-white/10 focus:border-red-500/50 text-white'
                      } rounded-xl px-4 py-3 text-center tracking-widest placeholder:tracking-normal focus:outline-none transition-all`}
                      autoFocus
                    />
                    {error && (
                      <p className="absolute -bottom-6 left-0 right-0 text-xs text-red-400 font-medium">
                        Incorrect code
                      </p>
                    )}
                  </div>
                  <button
                    type="submit"
                    disabled={isChecking || !password}
                    className={`w-full bg-white text-black font-bold py-3 rounded-xl hover:bg-gray-100 active:scale-[0.98] transition-all flex items-center justify-center gap-2 ${
                      (isChecking || !password) ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                  >
                    {isChecking ? <Loader2 size={18} className="animate-spin" /> : "Unlock"}
                  </button>
                </form>
              </div>
            ) : (
              // UNLOCKED STATE
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 rounded-2xl bg-red-500/20 border border-red-500/30 text-red-400">
                    <Unlock size={32} />
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-1">
                      {idea.private.title}
                    </h2>
                    <div className="flex flex-wrap gap-2">
                      {idea.private.tags.map(tag => (
                        <span key={tag} className="px-2 py-0.5 text-xs font-medium bg-white/10 rounded-full text-white/70">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="space-y-6 text-white/80 leading-relaxed mb-8">
                  <div>
                    <h3 className="text-sm uppercase tracking-wider text-red-400 font-bold mb-2">Description</h3>
                    <p>{idea.private.description}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-sm uppercase tracking-wider text-red-400 font-bold mb-2">Details</h3>
                    <p>{idea.private.details}</p>
                  </div>
                </div>

                <a 
                  href={idea.private.downloadLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-red-500/20"
                >
                  <Download size={20} />
                  <span>Download Dataset</span>
                </a>
              </motion.div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function MedTechDatasetsPage() {
  const [selectedIdea, setSelectedIdea] = useState<DatasetIdea | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <FullscreenPreloader onDone={() => setIsLoading(false)} durationMs={1500} />;
  }

  return (
    <main className="min-h-screen flex flex-col relative bg-black selection:bg-cyan-500/30">
      <Navbar />
      
      {/* Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyan-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="flex-grow container mx-auto px-4 relative z-10">
        {/* Main Heading Section */}
        <div className="pt-40 sm:pt-48 md:pt-56 lg:pt-64 pb-8 md:pb-12 text-center">
          <h1 
            className="text-4xl md:text-5xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/50 tracking-tight mb-4 md:mb-6"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            MedTech Datasets
          </h1>
          {/* <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto">
            Explore curated datasets and project ideas to kickstart your innovation in healthcare technology.
          </p> */}
        </div>

        {/* Glassmorphic Card */}
        <div className="w-full max-w-7xl mx-auto mb-16 md:mb-24">
          <div className="relative backdrop-blur-2xl bg-white/5 border border-white/10 rounded-[1.5rem] md:rounded-[2.5rem] p-4 sm:p-8 md:p-12 overflow-visible shadow-2xl">
            
            {/* Ideas Heading */}
            <div className="relative mb-8 md:mb-12 text-center">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white inline-block relative">
                PROJECT IDEAS
              </h2>
            </div>

            {/* Ideas Grid */}
            <div className="grid gap-4 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 perspective-1000">
              {DATASETS.medtech.map((idea) => (
                <div key={idea.id} className="relative hover:z-10">
                  <IdeaCard
                    layoutId={`idea-${idea.id}`}
                    idea={idea}
                    onClick={() => setSelectedIdea(idea)}
                  />
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>

      <AnimatePresence>
        {selectedIdea && (
          <UnlockModal 
            idea={selectedIdea} 
            onClose={() => setSelectedIdea(null)} 
          />
        )}
      </AnimatePresence>

      <Footer />
    </main>
  );
}
