"use client";

import { useState } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { CometCard } from "@/components/ui/comet-card";
import { AnimatePresence, motion } from "motion/react";
import { ChevronRight } from "lucide-react";
import FullscreenPreloader from "@/components/ui/PreLoader";
import { useRouter } from "next/navigation";
import Link from "next/link";

const DOMAINS = [
  {
    key: "fintech",
    title: "FinTech",
    image: "assets/domain-pics/fintech.png",
    badge: "Finance",
    color: "from-blue-500/20 to-cyan-500/20",
    glow: "from-blue-500 to-cyan-500",
    border: "border-blue-500/30"
  },
  {
    key: "medtech",
    title: "MedTech",
    image: "assets/domain-pics/medtech.png",
    badge: "Healthcare",
    color: "from-red-500/20 to-pink-500/20",
    glow: "from-red-500 to-pink-500",
    border: "border-red-500/30"
  },
  {
    key: "agrotech",
    title: "AgroTech",
    image: "assets/domain-pics/agrotech.png",
    badge: "Agriculture",
    color: "from-green-500/20 to-emerald-500/20",
    glow: "from-green-500 to-emerald-500",
    border: "border-green-500/30"
  },
  {
    key: "edtech",
    title: "EdTech",
    image: "assets/domain-pics/edtech.png",
    badge: "Education",
    color: "from-yellow-500/20 to-orange-500/20",
    glow: "from-yellow-500 to-orange-500",
    border: "border-yellow-500/30"
  },
];

function DomainCard({
  title,
  image,
  badge,
  color,
  glow,
  border,
  layoutId,
}: {
  title: string;
  image: string;
  badge: string;
  color: string;
  glow: string;
  border: string;
  layoutId: string;
}) {
  return (
    <motion.div 
      layoutId={layoutId} 
      className="cursor-pointer h-full"
    >
      <CometCard className="w-full h-full">
        <div
          className={`relative flex w-full h-full flex-col items-stretch rounded-[16px] md:rounded-[20px] bg-black/40 backdrop-blur-md border ${border} p-2 md:p-4 group`}
          style={{ transformStyle: "preserve-3d" }}
        >
          <div className={`absolute -inset-2 bg-gradient-to-br ${glow} opacity-0 group-hover:opacity-10 transition-opacity duration-500 -z-10 rounded-[20px]`} />
          
          <motion.div className="relative z-10 flex-1 flex flex-col">
            <motion.div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg md:rounded-xl mb-3 md:mb-4">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
              <motion.img
                loading="lazy"
                className="h-full w-full object-cover"
                alt={`${title} illustration`}
                src={image || "/placeholder.svg"}
              />
              <div className="absolute bottom-2 left-2 md:bottom-3 md:left-3 z-20">
                <span className="px-2 py-0.5 md:px-3 md:py-1 text-[9px] md:text-[10px] uppercase tracking-wider font-bold bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white">
                  {badge}
                </span>
              </div>
            </motion.div>
            
            <div className="mt-auto px-1">
              <motion.h3 className="text-lg md:text-xl font-bold text-white mb-1 transition-colors">{title}</motion.h3>
              <div className="h-1 w-8 md:w-12 bg-white/20 rounded-full group-hover:w-full group-hover:bg-white/50 transition-all duration-500" />
              
              {/* Glass-morphic button-style footer with icon and text */}
              <motion.div 
                className="mt-3 px-3 py-2 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm flex items-center justify-between group hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="text-xs md:text-sm text-white/80 font-medium">
                  View Datasets
                </span>
                <motion.div
                  animate={{ x: 0 }}
                  whileHover={{ x: 2 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                >
                  <ChevronRight size={16} className="text-white/60 group-hover:text-white/90 transition-colors" />
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </CometCard>
    </motion.div>
  );
}

export default function DatasetsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

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
            Datasets
          </h1>
        </div>

        {/* Glassmorphic Card */}
        <div className="w-full max-w-7xl mx-auto mb-16 md:mb-24">
          <div className="relative backdrop-blur-2xl bg-white/5 border border-white/10 rounded-[1.5rem] md:rounded-[2.5rem] p-4 sm:p-8 md:p-12 overflow-visible shadow-2xl">
            
            {/* Tracks Heading */}
            <div className="relative mb-8 md:mb-12 text-center">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white inline-block relative">
                TRACKS
              </h2>
            </div>

            {/* Tracks Grid */}
            <div className="grid gap-4 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 perspective-1000">
              {DOMAINS.map((d) => (
                <Link key={d.key} href={`/datasets/${d.key}`} className="block h-full">
                  <DomainCard
                    layoutId={`card-${d.key}-datasets`}
                    title={d.title}
                    image={d.image}
                    badge={d.badge}
                    color={d.color}
                    glow={d.glow}
                    border={d.border}
                  />
                </Link>
              ))}
            </div>

          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
