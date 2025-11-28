"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

import { AnimatePresence, motion } from "motion/react";
import { X, ChevronRight, Lightbulb, Lock, Unlock, Download, Loader2 } from "lucide-react";
import FullscreenPreloader from "@/components/ui/PreLoader";
import { DATASETS, DatasetIdea } from "@/lib/datasets";
import { DatasetCard } from "@/components/ui/dataset-card";
import { UnlockModal } from "@/components/ui/unlock-modal";





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
                  <DatasetCard
                    layoutId={`idea-${idea.id}`}
                    idea={idea}
                    onClick={() => setSelectedIdea(idea)}
                    color="red"
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
            color="red"
          />
        )}
      </AnimatePresence>

      <Footer />
    </main>
  );
}
