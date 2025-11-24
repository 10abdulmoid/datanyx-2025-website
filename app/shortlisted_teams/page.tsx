"use client";

import { useState, useEffect, useRef } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import RegistrationClosedBanner from '@/components/ui/RegistrationClosedBanner';
import AnnouncementBanner from '@/components/ui/AnnouncementBanner';
import { CometCard } from "@/components/ui/comet-card";
import { AnimatePresence, motion } from "motion/react";
import { X, Search } from "lucide-react";
import FullscreenPreloader from "@/components/ui/PreLoader";

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

type Team = {
  id: string;
  name: string;
  leader: string;
};

const SHORTLISTED_TEAMS: Record<string, Team[]> = {
  fintech: [
    { id: 'f1', name: 'FinWizards', leader: 'Rahul Sharma' },
    { id: 'f2', name: 'BlockChain Gang', leader: 'Sneha Gupta' },
    { id: 'f3', name: 'AlgoTraders', leader: 'Arjun Reddy' },
    { id: 'f4', name: 'PaySafe', leader: 'Karthik R' },
    { id: 'f5', name: 'WealthWise', leader: 'Priya Singh' },
    { id: 'f6', name: 'FinFlow', leader: 'Aarav Kapoor' },
    { id: 'f7', name: 'CryptoCore', leader: 'Srinath P' },
    { id: 'f8', name: 'MoneyMinds', leader: 'Harsha V' },
    { id: 'f9', name: 'TradeTrack', leader: 'Vinay Rao' },
    { id: 'f10', name: 'FinGuard', leader: 'Kamal Gupta' },
    { id: 'f11', name: 'SmartPay', leader: 'Imran Ali' },
    { id: 'f12', name: 'RupeeRise', leader: 'Vivek K' },
    { id: 'f13', name: 'AeroFin', leader: 'Anish Reddy' },
    { id: 'f14', name: 'FinScope', leader: 'Joel Mathew' },
    { id: 'f15', name: 'QuantLabs', leader: 'Shivansh M' },
  ],

  medtech: [
    { id: 'm1', name: 'MediCare AI', leader: 'Dr. Anjali' },
    { id: 'm2', name: 'HealthHub', leader: 'Rohan Das' },
    { id: 'm3', name: 'BioBots', leader: 'Sara Khan' },
    { id: 'm4', name: 'CureQuest', leader: 'Vikram M' },
    { id: 'm5', name: 'MediMatrix', leader: 'Dr. Alok Verma' },
    { id: 'm6', name: 'LifeLink', leader: 'Sanjana I' },
    { id: 'm7', name: 'HealthSphere', leader: 'Kishore Rao' },
    { id: 'm8', name: 'CareTech', leader: 'Ritu Sharma' },
    { id: 'm9', name: 'MediLogic', leader: 'Abdul Haseeb' },
    { id: 'm10', name: 'VitalScan', leader: 'Aishwarya M' },
    { id: 'm11', name: 'CureWave', leader: 'Dr. Ikram' },
    { id: 'm12', name: 'HealthBridge', leader: 'Sameer Akhtar' },
    { id: 'm13', name: 'BioVision', leader: 'Divya R' },
    { id: 'm14', name: 'PulsePoint', leader: 'Harish T' },
    { id: 'm15', name: 'MedAI Labs', leader: 'Dr. Naina' },
  ],

  agrotech: [
    { id: 'a1', name: 'AgriMinds', leader: 'Lakshmi N' },
    { id: 'a2', name: 'CropCircle', leader: 'Harpreet Singh' },
    { id: 'a3', name: 'FarmTech', leader: 'Amit Kumar' },
    { id: 'a4', name: 'AgroBoost', leader: 'Arvind Rao' },
    { id: 'a5', name: 'SoilSense', leader: 'Karan Thapa' },
    { id: 'a6', name: 'GrowSmart', leader: 'Rakesh M' },
    { id: 'a7', name: 'HarvestHub', leader: 'Anusha Devi' },
    { id: 'a8', name: 'AgriSync', leader: 'Gokul Raj' },
    { id: 'a9', name: 'FarmFlow', leader: 'Satyam Singh' },
    { id: 'a10', name: 'CropAI', leader: 'Anubhav Jain' },
    { id: 'a11', name: 'GreenScape', leader: 'Sukanya P' },
    { id: 'a12', name: 'AgroNet', leader: 'Mohammed Arif' },
    { id: 'a13', name: 'EcoFarm', leader: 'Jaspreet Singh' },
    { id: 'a14', name: 'FieldFusion', leader: 'Kavin Shah' },
    { id: 'a15', name: 'AgriWave', leader: 'Rohit Raj' },
  ],

  edtech: [
    { id: 'e1', name: 'LearnLoop', leader: 'Meera J' },
    { id: 'e2', name: 'EduVate', leader: 'Rajiv S' },
    { id: 'e3', name: 'SkillUp', leader: 'Neha P' },
    { id: 'e4', name: 'ClassMates', leader: 'David L' },
    { id: 'e5', name: 'SmartStudy', leader: 'Amogh R' },
    { id: 'e6', name: 'BrainBoost', leader: 'Anirudh K' },
    { id: 'e7', name: 'TeachTech', leader: 'Shreya V' },
    { id: 'e8', name: 'LearnSphere', leader: 'Moin Shaikh' },
    { id: 'e9', name: 'StudySync', leader: 'Sahil Mehta' },
    { id: 'e10', name: 'EduLink', leader: 'Naveen R' },
    { id: 'e11', name: 'TutorPro', leader: 'Faisal Khan' },
    { id: 'e12', name: 'ByteLearn', leader: 'Nitish Reddy' },
    { id: 'e13', name: 'EduCore', leader: 'Rohini I' },
    { id: 'e14', name: 'SkillForge', leader: 'Aishwarya T' },
    { id: 'e15', name: 'NextGenEd', leader: 'Ravi Kiran' },
  ]

};

const WAITLISTED_TEAMS: Record<string, Team[]> = {
  fintech: [
    { id: 'wf1', name: 'FinFuture', leader: 'Amit Verma' },
    { id: 'wf2', name: 'BlockBuilders', leader: 'Sara Ali' },
    { id: 'wf3', name: 'TradeTech', leader: 'Rohan Gupta' },
  ],
  medtech: [
    { id: 'wm1', name: 'MediCare Plus', leader: 'Dr. Smitha' },
    { id: 'wm2', name: 'HealthGen', leader: 'Vikram Singh' },
    { id: 'wm3', name: 'BioTechies', leader: 'Ananya Roy' },
  ],
  agrotech: [
    { id: 'wa1', name: 'AgriGrow', leader: 'Kisan Kumar' },
    { id: 'wa2', name: 'FarmFuture', leader: 'Rajesh P' },
    { id: 'wa3', name: 'CropCare', leader: 'Sneha M' },
  ],
  edtech: [
    { id: 'we1', name: 'EduSmart', leader: 'Priya D' },
    { id: 'we2', name: 'LearnFast', leader: 'Rahul K' },
    { id: 'we3', name: 'SkillSet', leader: 'Neha S' },
  ]
};

function DomainCard({
  title,
  image,
  badge,
  color,
  glow,
  border,
  onClick,
  layoutId
}: {
  title: string;
  image: string;
  badge: string;
  color: string;
  glow: string;
  border: string;
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
            </div>
          </motion.div>
        </div>
      </CometCard>
    </motion.div>
  );
}


function ExpandedCard({ trackKey, type, onClose }: { trackKey: string; type: 'shortlisted' | 'waitlisted'; onClose: () => void }) {
  const track = DOMAINS.find(d => d.key === trackKey);
  const [searchQuery, setSearchQuery] = useState("");
  const allTeams = (type === 'shortlisted' ? SHORTLISTED_TEAMS : WAITLISTED_TEAMS)[trackKey] || [];
  
  const teams = allTeams.filter(team => 
    team.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    team.leader.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  if (!track) return null;

  return (
    <div className="fixed inset-0 z-[2000] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="absolute inset-0" onClick={onClose} />
      <motion.div
        layoutId={`card-${trackKey}-${type}`}
        className={`relative w-full max-w-2xl h-[85vh] flex flex-col rounded-[32px] bg-black/90 border ${track.border} overflow-hidden shadow-2xl`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Image Section */}
        <div className="relative h-48 md:h-64 w-full shrink-0">
          <div className={`absolute inset-0 bg-gradient-to-br ${track.color} opacity-20`} />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10" />
          <motion.img
            src={track.image}
            alt={track.title}
            className="w-full h-full object-cover"
          />
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/40 hover:bg-black/60 text-white backdrop-blur-md border border-white/10 transition-colors"
          >
            <X size={20} />
          </button>

          <div className="absolute bottom-6 left-6 z-20">
            <motion.span className="px-3 py-1 text-xs uppercase tracking-wider font-bold bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white mb-3 inline-block">
              {track.badge}
            </motion.span>
            <motion.h2 className="text-3xl md:text-4xl font-bold text-white">
              {track.title} Teams ({type === 'shortlisted' ? 'Shortlisted' : 'Waitlisted'})
            </motion.h2>
          </div>
        </div>

        {/* Scrollable List */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex-1 overflow-y-auto p-6 space-y-3 custom-scrollbar"
        >
          {/* Search Input */}
          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40" size={18} />
            <input
              type="text"
              placeholder="Search teams or leaders..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-white placeholder:text-white/30 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all"
            />
          </div>

          {teams.length > 0 ? (
            teams.map((team, idx) => (
              <motion.div
                key={team.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + idx * 0.05 }}
                className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/20 transition-all group"
              >
                <div>
                  <h3 className="text-lg font-semibold text-white">{team.name}</h3>
                </div>
                <div className="text-right">
                  <span className="text-xs text-gray-500 uppercase tracking-wider">Leader</span>
                  <p className="text-sm text-gray-300">{team.leader}</p>
                </div>
              </motion.div>
            ))
          ) : (
            <div className="text-center py-12 text-gray-500">
              No teams {type === 'shortlisted' ? 'shortlisted' : 'waitlisted'} yet for this track.
            </div>
          )}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default function ShortlistedTeamsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedTrack, setSelectedTrack] = useState<{ key: string; type: 'shortlisted' | 'waitlisted' } | null>(null);

  return (
    <main className="min-h-screen flex flex-col relative bg-black selection:bg-cyan-500/30">
      <AnimatePresence mode="wait">
        {isLoading && (
          <FullscreenPreloader onDone={() => setIsLoading(false)} />
        )}
      </AnimatePresence>
      <Navbar />
      <RegistrationClosedBanner />
      <AnnouncementBanner />
      
      {/* Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyan-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="flex-grow container mx-auto px-4 relative z-10">
        {/* Main Heading Section */}
        <div className="pt-32 sm:pt-32 md:pt-48 lg:pt-52 pb-8 md:pb-12 text-center">
          <h1 
            className="text-4xl md:text-5xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/50 tracking-tight mb-4 md:mb-6"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Shortlisted Teams
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
                <DomainCard
                  key={d.key}
                  layoutId={`card-${d.key}-shortlisted`}
                  title={d.title}
                  image={d.image}
                  badge={d.badge}
                  color={d.color}
                  glow={d.glow}
                  border={d.border}
                  onClick={() => setSelectedTrack({ key: d.key, type: 'shortlisted' })}
                />
              ))}
            </div>

          </div>
        </div>

        {/* Waitlisted Teams Section */}
        <div className="pt-4 sm:pt-6 md:pt-8 lg:pt-10 pb-8 md:pb-12 text-center">
          <h1 
            className="text-4xl md:text-5xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/50 tracking-tight mb-4 md:mb-6"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Waitlisted Teams
          </h1>
        </div>

        <div className="w-full max-w-7xl mx-auto mb-16 md:mb-24">
          <div className="relative backdrop-blur-2xl bg-white/5 border border-white/10 rounded-[1.5rem] md:rounded-[2.5rem] p-4 sm:p-8 md:p-12 overflow-visible shadow-2xl">
            
            <div className="relative mb-8 md:mb-12 text-center">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white inline-block relative">
                TRACKS
              </h2>
            </div>

            <div className="grid gap-4 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 perspective-1000">
              {DOMAINS.map((d) => (
                <DomainCard
                  key={`waitlist-${d.key}`}
                  layoutId={`card-${d.key}-waitlisted`}
                  title={d.title}
                  image={d.image}
                  badge={d.badge}
                  color={d.color}
                  glow={d.glow}
                  border={d.border}
                  onClick={() => setSelectedTrack({ key: d.key, type: 'waitlisted' })}
                />
              ))}
            </div>

          </div>
        </div>
      </div>

      <AnimatePresence>
        {selectedTrack && (
          <ExpandedCard 
            trackKey={selectedTrack.key} 
            type={selectedTrack.type}
            onClose={() => setSelectedTrack(null)} 
          />
        )}
      </AnimatePresence>

      <Footer />
    </main>
  );
}
