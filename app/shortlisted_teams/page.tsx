"use client";

import { useState, useEffect, useRef } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import RegistrationClosedBanner from '@/components/ui/RegistrationClosedBanner';
// import AnnouncementBanner from '@/components/ui/AnnouncementBanner';
import { CometCard } from "@/components/ui/comet-card";
import { AnimatePresence, motion } from "motion/react";
import { X, Search, ChevronRight } from "lucide-react";
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
    { id: 'f1', name: 'DRAVYA-X', leader: 'Krishnarchana Kandula' },
    { id: 'f2', name: 'S 23', leader: 'Maheen' },
    { id: 'f3', name: 'Taxism', leader: 'Arif Ali Khan' },
    { id: 'f4', name: 'Trojan Horse', leader: 'Mohammed Mudassir Uddin' },
    { id: 'f5', name: 'V-4', leader: 'Mohammed Abdul Rafe Sajid' },
    { id: 'f6', name: 'HexTech', leader: 'Affan Asif' },
    { id: 'f7', name: 'KisanX', leader: 'Mohammed Nouman' },
    { id: 'f8', name: 'diversity', leader: 'Maroju Priyambica' },
    { id: 'f9', name: 'N+1', leader: 'Mohammed Ghani' },
    { id: 'f10', name: 'While(1)', leader: 'Thipirishetty Surya Vikas' },
    { id: 'f11', name: 'The Made Men', leader: 'Syed Unais Panjathan' },
    { id: 'f12', name: 'Sentinels', leader: 'Vighnesh Bhatt' },
    { id: 'f13', name: 'ACM Dream team', leader: 'Abid Nafi' },
    { id: 'f14', name: 'Error 404', leader: 'Shaik Abdul Sammed' },
    { id: 'f15', name: 'Nova Horizon', leader: 'Syeda Adeeba Maryam' },
  ],

  medtech: [
    { id: 'm1', name: 'RUSH MORE', leader: 'Abdul Samad' },
    { id: 'm2', name: 'Data Ghosting', leader: 'Syed Adnan Ali' },
    { id: 'm3', name: 'F a l c o n X', leader: 'Vedant Devanand' },
    { id: 'm4', name: 'KanyaRaasi', leader: 'Tatikonda Sri Charan' },
    { id: 'm5', name: 'SUMO Coders', leader: 'Syed Abdul Saboor' },
    { id: 'm6', name: 'Byte Masters', leader: 'Sadiya Maheen Siddiqui' },
    { id: 'm7', name: 'Binary Ninjas', leader: 'Hasifa Ammara' },
    { id: 'm8', name: 'Team Google', leader: 'Mohammed Amaan Mahmood Khan' },
    { id: 'm9', name: 'Dream developers', leader: 'Sri Hasnika Venigalla' },
    { id: 'm10', name: 'CYPHERS', leader: 'Mohammed Rehan Uddin' },
    { id: 'm11', name: 'Team Nexus', leader: 'Vivek Goud Adula' },
    { id: 'm12', name: 'Dr. Disrupters', leader: 'Shaik Mohammed Ismail' },
    { id: 'm13', name: 'Psyche', leader: 'Pothkanuru Aravind' },
    { id: 'm14', name: 'ACM Nexus', leader: 'Shaik Abdul Munawar' },
    { id: 'm15', name: 'DuoNova', leader: 'Sangeeth R' },
  ],

  agrotech: [
    { id: 'a1', name: 'Synchro4', leader: 'Madhesh B' },
    { id: 'a2', name: 'Equinox', leader: 'Maheswar Sahoo' },
    { id: 'a3', name: 'VANTAGE CORE', leader: 'Mohammed Aamir' },
    { id: 'a4', name: 'Technodivas', leader: 'Sarah Aejaz' },
    { id: 'a5', name: '4Damnnn', leader: 'Salman Mohammed Arif' },
    { id: 'a6', name: 'THE DEBUGGERS', leader: 'Mohammed Abdul Rahman' },
    { id: 'a7', name: 'EightBitsByte', leader: 'Sarah Maheen' },
    { id: 'a8', name: 'Kernel', leader: 'Abdullah Ahmed' },
    { id: 'a9', name: 'Bad bois', leader: 'Arriyan Fatima' },
    { id: 'a10', name: 'MASU', leader: 'Manikanta Bhupasamudram' },
    { id: 'a11', name: 'Delulu Divas', leader: 'Samreen Shaik' },
    { id: 'a12', name: 'AGRO-SPHERE', leader: 'Mohammed Khaja Mooyeduddin' },
    { id: 'a13', name: 'TECHNOVA', leader: 'Sami Ahmed' },
    { id: 'a14', name: 'Kaizen', leader: 'Koduru Srujana Reddy' },
    { id: 'a15', name: 'Team Aurum', leader: 'Anish Dommeti' },
  ],

  edtech: [
    { id: 'e1', name: 'TechChalkies', leader: 'Rayyan Shareef' },
    { id: 'e2', name: 'Visionary Coders', leader: 'Chintha Vamshavardhan' },
    { id: 'e3', name: 'BYTEBROS', leader: 'Amulya Tanneru' },
    { id: 'e4', name: 'Rivals', leader: 'Mohammed Adnan' },
    { id: 'e5', name: 'kratOS', leader: 'Samala Sripadh' },
    { id: 'e6', name: 'XENO', leader: 'Mohammed Abdul Rahman Siddiqui' },
    { id: 'e7', name: 'QuadSquad', leader: 'Mohd Zaid Hussain' },
    { id: 'e8', name: 'innoverse', leader: 'Saba Hajira' },
    { id: 'e9', name: 'ZeroDay', leader: 'Gosula Sai Sudheendra Pranav Tej' },
    { id: 'e10', name: 'AG17', leader: 'Ibrahim Hassan' },
    { id: 'e11', name: 'DevHax', leader: 'Mohd Sajid Zubair' },
    { id: 'e12', name: 'Datasour', leader: 'Soham Rajendra Chaudhari' },
    { id: 'e13', name: 'Alpha Shockwave', leader: 'Danish Khan' },
    { id: 'e14', name: 'Tech orbit', leader: 'Prashant Kumar Dwivedi' },
    { id: 'e15', name: 'Maha.Dev', leader: 'Jagadeesh Kumar' },
  ]

};

const WAITLISTED_TEAMS: Record<string, Team[]> = {
  fintech: [
    { id: 'wf1', name: 'The Code Blooded', leader: 'Omer Ali' },
    { id: 'wf2', name: 'Tuff Boys', leader: 'Mohammed Abdul Haseeb' },
    { id: 'wf3', name: 'CSI Manifestors', leader: 'Mohammad Touseef Banu' },
    { id: 'wf4', name: 'DataTrio', leader: 'Mohammed mutahhar' },
    { id: 'wf5', name: 'LazyDev404', leader: 'Osman Bin Nasir' },
  ],
  medtech: [
    { id: 'wm1', name: 'Crazycoders', leader: 'Bushra Saifuddin' },
    { id: 'wm2', name: 'Code X', leader: 'Rafiya Tazeen' },
    { id: 'wm3', name: 'EAGLES', leader: 'Mudassir Mohammed Rafeeqi' },
    { id: 'wm4', name: 'TenderFoot', leader: 'Kundiya Nayak' },
    { id: 'wm5', name: 'Biobots', leader: 'Abhishek V Kulkar' },
  ],
  agrotech: [
    { id: 'wa1', name: 'HackState Squad', leader: 'Saif Anwar' },
    { id: 'wa2', name: 'caffeinated crew', leader: 'Anas Mohiuddin' },
    { id: 'wa3', name: 'Above Illuminate', leader: 'Mohammed Saifullah' },
    { id: 'wa4', name: 'NeoCoder', leader: 'Syed Ghulam Hussain' },
    { id: 'wa5', name: 'Good Bois', leader: 'Syed Aqeeb talib' },
  ],
  edtech: [
    { id: 'we1', name: 'Techtadka', leader: 'Thaizia' },
    { id: 'we2', name: 'Hackcelerators', leader: 'Shaik Aslam Moinuddin' },
    { id: 'we3', name: 'Spartans', leader: 'Diya Bedmutha' },
    { id: 'we4', name: 'Fast Fusion', leader: 'Ali Mohammed Lalani' },
    { id: 'we5', name: 'Al Nasr Coders', leader: 'Mohammed Bin Abdullah Al Musqaty' },
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
  layoutId,
  type
}: {
  title: string;
  image: string;
  badge: string;
  color: string;
  glow: string;
  border: string;
  onClick: () => void;
  layoutId: string;
  type: 'shortlisted' | 'waitlisted';
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
              
              {/* Glass-morphic button-style footer with icon and text */}
              <motion.div 
                className="mt-3 px-3 py-2 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm flex items-center justify-between group hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="text-xs md:text-sm text-white/80 font-medium">
                  {type === 'shortlisted' ? 'View shortlisted teams' : 'View waitlisted teams'}
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
    <div 
      className="fixed inset-0 z-[2000] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onWheel={(e) => e.stopPropagation()}
      onTouchMove={(e) => e.stopPropagation()}
    >
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

        {/* Scrollable Content Area */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Sticky Search Input */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="sticky top-0 z-10 p-6 pb-4 bg-black/90 backdrop-blur-md border-b border-white/5"
          >
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40" size={18} />
              <input
                type="text"
                placeholder="Search teams or leaders..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-white placeholder:text-white/30 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all"
              />
            </div>
          </motion.div>

          {/* Scrollable Teams List */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex-1 overflow-y-auto px-6 pb-6 space-y-3 scrollbar-hide"
            style={{
              overscrollBehavior: 'contain',
              WebkitOverflowScrolling: 'touch'
            }}
          >
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
        </div>
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
      <div className="fixed bottom-0 left-0 w-full z-[100] flex flex-col">
        {/* <AnnouncementBanner /> */}
        <RegistrationClosedBanner />
      </div>
      
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
            Shortlisted Teams
          </h1>
          
          {/* Code of Conduct Notice */}
          <div className="max-w-3xl mx-auto mt-6 p-4 md:p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm">
            <p className="text-white/90 text-sm md:text-base font-medium text-center">
              <span className="font-semibold">Note:</span> Please take a moment to review our{' '}
              <a 
                href="/coc" 
                className="text-[#00ff9d] hover:text-[#00cc7d] underline decoration-2 underline-offset-2 font-semibold transition-colors"
              >
                Code of Conduct
              </a>
              {' '}to ensure a great experience for everyone at the event.
            </p>
          </div>
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
                  type="shortlisted"
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
                  type="waitlisted"
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
