"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { CometCard } from "@/components/ui/comet-card";
import { AnimatePresence, motion } from "motion/react";
import { X, ChevronRight, Lightbulb } from "lucide-react";
import FullscreenPreloader from "@/components/ui/PreLoader";

const DATASET_IDEAS: {
  id: string;
  title: string;
  description: string;
  details: string;
  tags: string[];
}[] = [];

function IdeaCard({
  idea,
  onClick,
  layoutId,
}: {
  idea: typeof DATASET_IDEAS[0];
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
          className="relative flex w-full h-full flex-col items-stretch rounded-[16px] md:rounded-[20px] bg-black/40 backdrop-blur-md border border-blue-500/30 p-4 md:p-6 group"
          style={{ transformStyle: "preserve-3d" }}
        >
          <div className="absolute -inset-2 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-10 transition-opacity duration-500 -z-10 rounded-[20px]" />
          
          <motion.div className="relative z-10 flex-1 flex flex-col">
            <div className="flex items-start justify-between mb-4">
              <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400">
                <Lightbulb size={24} />
              </div>
              <motion.div
                animate={{ x: 0 }}
                whileHover={{ x: 2 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              >
                <ChevronRight size={20} className="text-white/40 group-hover:text-white/80 transition-colors" />
              </motion.div>
            </div>
            
            <motion.h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
              {idea.title}
            </motion.h3>
            
            <p className="text-white/60 text-sm line-clamp-3 mb-4 flex-grow">
              {idea.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-auto">
              {idea.tags.map(tag => (
                <span key={tag} className="px-2 py-1 text-[10px] uppercase tracking-wider font-bold bg-white/5 border border-white/10 rounded-full text-white/60">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </CometCard>
    </motion.div>
  );
}

function ExpandedIdeaCard({ idea, onClose }: { idea: typeof DATASET_IDEAS[0]; onClose: () => void }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

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
        className="relative w-full max-w-2xl flex flex-col rounded-[32px] bg-black/90 border border-blue-500/30 overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative p-8 md:p-10">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 opacity-50" />
          
          <button
            onClick={onClose}
            className="absolute top-6 right-6 z-20 p-2 rounded-full bg-black/40 hover:bg-black/60 text-white backdrop-blur-md border border-white/10 transition-colors"
          >
            <X size={20} />
          </button>

          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 rounded-2xl bg-blue-500/20 border border-blue-500/30 text-blue-400">
                <Lightbulb size={32} />
              </div>
              <div>
                <motion.h2 className="text-2xl md:text-3xl font-bold text-white mb-1">
                  {idea.title}
                </motion.h2>
                <div className="flex flex-wrap gap-2">
                  {idea.tags.map(tag => (
                    <span key={tag} className="px-2 py-0.5 text-xs font-medium bg-white/10 rounded-full text-white/70">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6 text-white/80 leading-relaxed">
              <div>
                <h3 className="text-sm uppercase tracking-wider text-blue-400 font-bold mb-2">Description</h3>
                <p>{idea.description}</p>
              </div>
              
              <div>
                <h3 className="text-sm uppercase tracking-wider text-blue-400 font-bold mb-2">Details</h3>
                <p>{idea.details}</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function FinTechDatasetsPage() {
  const [selectedIdea, setSelectedIdea] = useState<typeof DATASET_IDEAS[0] | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <main className="min-h-screen flex flex-col relative bg-black selection:bg-cyan-500/30">
      <AnimatePresence mode="wait">
        {isLoading && (
          <FullscreenPreloader onDone={() => setIsLoading(false)} />
        )}
      </AnimatePresence>
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
            FinTech Datasets
          </h1>
          {/* <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto">
            Explore curated datasets and project ideas to kickstart your innovation in financial technology.
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
              {DATASET_IDEAS.map((idea) => (
                <IdeaCard
                  key={idea.id}
                  layoutId={`idea-${idea.id}`}
                  idea={idea}
                  onClick={() => setSelectedIdea(idea)}
                />
              ))}
            </div>

          </div>
        </div>
      </div>

      <AnimatePresence>
        {selectedIdea && (
          <ExpandedIdeaCard 
            idea={selectedIdea} 
            onClose={() => setSelectedIdea(null)} 
          />
        )}
      </AnimatePresence>

      <Footer />
    </main>
  );
}
