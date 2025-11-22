// "use client";

// import { useState } from "react";
// import Navbar from "@/components/navbar";
// import Footer from "@/components/footer";
// import { CometCard } from "@/components/ui/comet-card";
// import { AnimatePresence, motion } from "motion/react";
// import { X } from "lucide-react";

// const DOMAINS = [
//   {
//     key: "fintech",
//     title: "FinTech",
//     image: "assets/domain-pics/fintech.png",
//     badge: "Finance",
//     color: "from-blue-500/20 to-cyan-500/20",
//     glow: "from-blue-500 to-cyan-500",
//     border: "border-blue-500/30"
//   },
//   {
//     key: "medtech",
//     title: "MedTech",
//     image: "assets/domain-pics/medtech.png",
//     badge: "Healthcare",
//     color: "from-red-500/20 to-pink-500/20",
//     glow: "from-red-500 to-pink-500",
//     border: "border-red-500/30"
//   },
//   {
//     key: "agrotech",
//     title: "AgroTech",
//     image: "assets/domain-pics/agrotech.png",
//     badge: "Agriculture",
//     color: "from-green-500/20 to-emerald-500/20",
//     glow: "from-green-500 to-emerald-500",
//     border: "border-green-500/30"
//   },
//   {
//     key: "edtech",
//     title: "EdTech",
//     image: "assets/domain-pics/edtech.png",
//     badge: "Education",
//     color: "from-yellow-500/20 to-orange-500/20",
//     glow: "from-yellow-500 to-orange-500",
//     border: "border-yellow-500/30"
//   },
// ];

// type Team = {
//   id: string;
//   name: string;
//   college: string;
//   leader: string;
// };

// const SHORTLISTED_TEAMS: Record<string, Team[]> = {
//   fintech: [
//     { id: 'f1', name: 'FinWizards', college: 'IIT Bombay', leader: 'Rahul Sharma' },
//     { id: 'f2', name: 'BlockChain Gang', college: 'BITS Pilani', leader: 'Sneha Gupta' },
//     { id: 'f3', name: 'AlgoTraders', college: 'IIIT Hyderabad', leader: 'Arjun Reddy' },
//     { id: 'f4', name: 'PaySafe', college: 'NIT Trichy', leader: 'Karthik R' },
//     { id: 'f5', name: 'WealthWise', college: 'DTU', leader: 'Priya Singh' },
//   ],
//   medtech: [
//     { id: 'm1', name: 'MediCare AI', college: 'AIIMS Delhi', leader: 'Dr. Anjali' },
//     { id: 'm2', name: 'HealthHub', college: 'Manipal', leader: 'Rohan Das' },
//     { id: 'm3', name: 'BioBots', college: 'VIT Vellore', leader: 'Sara Khan' },
//     { id: 'm4', name: 'CureQuest', college: 'SRM', leader: 'Vikram M' },
//   ],
//   agrotech: [
//     { id: 'a1', name: 'AgriMinds', college: 'TNAU', leader: 'Lakshmi N' },
//     { id: 'a2', name: 'CropCircle', college: 'Punjab Ag. Univ', leader: 'Harpreet Singh' },
//     { id: 'a3', name: 'FarmTech', college: 'GBPUAT', leader: 'Amit Kumar' },
//   ],
//   edtech: [
//     { id: 'e1', name: 'LearnLoop', college: 'Ashoka Univ', leader: 'Meera J' },
//     { id: 'e2', name: 'EduVate', college: 'Amity', leader: 'Rajiv S' },
//     { id: 'e3', name: 'SkillUp', college: 'LPU', leader: 'Neha P' },
//     { id: 'e4', name: 'ClassMates', college: 'Christ Univ', leader: 'David L' },
//   ],
// };

// function DomainCard({
//   title,
//   image,
//   badge,
//   color,
//   glow,
//   border,
//   onClick
// }: {
//   title: string;
//   image: string;
//   badge: string;
//   color: string;
//   glow: string;
//   border: string;
//   onClick: () => void;
// }) {
//   return (
//     <div onClick={onClick} className="cursor-pointer h-full">
//       <CometCard className="w-full h-full">
//         <div
//           className={`relative flex w-full h-full flex-col items-stretch rounded-[16px] md:rounded-[20px] bg-black/40 backdrop-blur-md border ${border} p-2 md:p-4 group`}
//           style={{ transformStyle: "preserve-3d" }}
//         >
//           {/* Outer Glow Effect */}
//           <div className={`absolute -inset-2 bg-gradient-to-br ${glow} opacity-0 group-hover:opacity-40 blur-xl transition-opacity duration-500 -z-10 rounded-[20px]`} />
          
//           {/* Inner Gradient Background */}
//           <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[20px]`} />
          
//           <div className="relative z-10 flex-1 flex flex-col">
//             <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg md:rounded-xl mb-3 md:mb-4">
//               <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
//               <img
//                 loading="lazy"
//                 className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
//                 alt={`${title} illustration`}
//                 src={image || "/placeholder.svg"}
//               />
//               <div className="absolute bottom-2 left-2 md:bottom-3 md:left-3 z-20">
//                 <span className="px-2 py-0.5 md:px-3 md:py-1 text-[9px] md:text-[10px] uppercase tracking-wider font-bold bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white">
//                   {badge}
//                 </span>
//               </div>
//             </div>
            
//             <div className="mt-auto px-1">
//               <h3 className="text-lg md:text-xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">{title}</h3>
//               <div className="h-1 w-8 md:w-12 bg-white/20 rounded-full group-hover:w-full group-hover:bg-cyan-500/50 transition-all duration-500" />
//             </div>
//           </div>
//         </div>
//       </CometCard>
//     </div>
//   );
// }

// function TeamListModal({ trackKey, onClose }: { trackKey: string; onClose: () => void }) {
//   const track = DOMAINS.find(d => d.key === trackKey);
//   const teams = SHORTLISTED_TEAMS[trackKey] || [];

//   if (!track) return null;

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
//       onClick={onClose}
//     >
//       <motion.div
//         initial={{ scale: 0.9, opacity: 0, y: 20 }}
//         animate={{ scale: 1, opacity: 1, y: 0 }}
//         exit={{ scale: 0.9, opacity: 0, y: 20 }}
//         transition={{ type: "spring", damping: 25, stiffness: 300 }}
//         className="relative w-full max-w-lg md:max-w-2xl max-h-[80vh] overflow-hidden rounded-2xl md:rounded-3xl border border-white/10 bg-black/80 backdrop-blur-xl shadow-2xl"
//         onClick={(e) => e.stopPropagation()}
//       >
//         {/* Header */}
//         <div className={`relative p-4 md:p-6 border-b border-white/10 bg-gradient-to-r ${track.color}`}>
//           <button 
//             onClick={onClose}
//             className="absolute top-3 right-3 md:top-4 md:right-4 p-1.5 md:p-2 rounded-full bg-black/20 hover:bg-black/40 text-white transition-colors"
//           >
//             <X size={18} className="md:w-5 md:h-5" />
//           </button>
//           <h2 className="text-xl md:text-3xl font-bold text-white">{track.title} Teams</h2>
//           <p className="text-white/70 text-xs md:text-sm mt-0.5 md:mt-1">Shortlisted candidates for the {track.badge} track</p>
//         </div>

//         {/* List */}
//         <div className="p-4 md:p-6 overflow-y-auto max-h-[60vh] space-y-2 md:space-y-3 custom-scrollbar">
//           {teams.length > 0 ? (
//             teams.map((team, idx) => (
//               <motion.div
//                 key={team.id}
//                 initial={{ opacity: 0, x: -20 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ delay: idx * 0.05 }}
//                 className="flex items-center justify-between p-3 md:p-4 rounded-lg md:rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/20 transition-all group"
//               >
//                 <div>
//                   <h3 className="text-base md:text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">{team.name}</h3>
//                   <p className="text-xs md:text-sm text-gray-400">{team.college}</p>
//                 </div>
//                 <div className="text-right">
//                   <span className="text-[10px] md:text-xs text-gray-500 uppercase tracking-wider">Leader</span>
//                   <p className="text-xs md:text-sm text-gray-300">{team.leader}</p>
//                 </div>
//               </motion.div>
//             ))
//           ) : (
//             <div className="text-center py-8 md:py-12 text-gray-500">
//               No teams shortlisted yet for this track.
//             </div>
//           )}
//         </div>
//       </motion.div>
//     </motion.div>
//   );
// }

// export default function ShortlistedTeamsPage() {
//   const [selectedTrack, setSelectedTrack] = useState<string | null>(null);

//   return (
//     <main className="min-h-screen flex flex-col relative bg-black selection:bg-cyan-500/30">
//       <Navbar />
      
//       {/* Background Effects */}
//       <div className="fixed inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-500/10 rounded-full blur-[120px]" />
//         <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyan-500/10 rounded-full blur-[120px]" />
//       </div>

//       <div className="flex-grow container mx-auto px-4 relative z-10">
//         {/* Main Heading Section - Responsive Spacing */}
//         <div className="pt-24 md:pt-32 lg:pt-48 pb-8 md:pb-12 text-center">
//           <h1 
//             className="text-4xl md:text-5xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/50 tracking-tight mb-4 md:mb-6"
//             style={{ fontFamily: 'Poppins, sans-serif' }}
//           >
//             Shortlisted Teams
//           </h1>
//           {/* <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto font-light">
//             Congratulations to the teams selected for the next round. Get ready to innovate!
//           </p> */}
//         </div>

//         {/* Glassmorphic Card */}
//         <div className="w-full max-w-7xl mx-auto mb-16 md:mb-24">
//           <div className="relative backdrop-blur-2xl bg-white/5 border border-white/10 rounded-[1.5rem] md:rounded-[2.5rem] p-4 sm:p-8 md:p-12 overflow-visible shadow-2xl">
            
//             {/* Card Decorative Elements */}
//             <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
//             <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            
//             {/* Tracks Heading */}
//             <div className="relative mb-8 md:mb-12 text-center">
//               <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white inline-block relative">
//                 TRACKS
//                 {/* <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full" /> */}
//               </h2>
//             </div>

//             {/* Tracks Grid */}
//             <div className="grid gap-4 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 perspective-1000">
//               {DOMAINS.map((d, i) => (
//                 <div key={d.key} style={{ animationDelay: `${i * 100}ms` }} className="animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-backwards">
//                   <DomainCard
//                     title={d.title}
//                     image={d.image}
//                     badge={d.badge}
//                     color={d.color}
//                     glow={d.glow}
//                     border={d.border}
//                     onClick={() => setSelectedTrack(d.key)}
//                   />
//                 </div>
//               ))}
//             </div>

//           </div>
//         </div>
//       </div>

//       <AnimatePresence>
//         {selectedTrack && (
//           <TeamListModal 
//             trackKey={selectedTrack} 
//             onClose={() => setSelectedTrack(null)} 
//           />
//         )}
//       </AnimatePresence>

//       <Footer />
//     </main>
//   );
// }
"use client";

import { useState } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { CometCard } from "@/components/ui/comet-card";
import { AnimatePresence, motion } from "motion/react";
import { X } from "lucide-react";

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
  college: string;
  leader: string;
};

const SHORTLISTED_TEAMS: Record<string, Team[]> = {
  fintech: [
  { id: 'f1', name: 'FinWizards', college: 'IIT Bombay', leader: 'Rahul Sharma' },
  { id: 'f2', name: 'BlockChain Gang', college: 'BITS Pilani', leader: 'Sneha Gupta' },
  { id: 'f3', name: 'AlgoTraders', college: 'IIIT Hyderabad', leader: 'Arjun Reddy' },
  { id: 'f4', name: 'PaySafe', college: 'NIT Trichy', leader: 'Karthik R' },
  { id: 'f5', name: 'WealthWise', college: 'DTU', leader: 'Priya Singh' },
  { id: 'f6', name: 'FinFlow', college: 'IIM Ahmedabad', leader: 'Aarav Kapoor' },
  { id: 'f7', name: 'CryptoCore', college: 'VIT Vellore', leader: 'Srinath P' },
  { id: 'f8', name: 'MoneyMinds', college: 'SRM University', leader: 'Harsha V' },
  { id: 'f9', name: 'TradeTrack', college: 'MIT Manipal', leader: 'Vinay Rao' },
  { id: 'f10', name: 'FinGuard', college: 'JNTU Hyderabad', leader: 'Kamal Gupta' },
  { id: 'f11', name: 'SmartPay', college: 'Osmania University', leader: 'Imran Ali' },
  { id: 'f12', name: 'RupeeRise', college: 'IIT Delhi', leader: 'Vivek K' },
  { id: 'f13', name: 'AeroFin', college: 'NIT Warangal', leader: 'Anish Reddy' },
  { id: 'f14', name: 'FinScope', college: 'Christ University', leader: 'Joel Mathew' },
  { id: 'f15', name: 'QuantLabs', college: 'IIT Madras', leader: 'Shivansh M' },
],

medtech: [
  { id: 'm1', name: 'MediCare AI', college: 'AIIMS Delhi', leader: 'Dr. Anjali' },
  { id: 'm2', name: 'HealthHub', college: 'Manipal', leader: 'Rohan Das' },
  { id: 'm3', name: 'BioBots', college: 'VIT Vellore', leader: 'Sara Khan' },
  { id: 'm4', name: 'CureQuest', college: 'SRM', leader: 'Vikram M' },
  { id: 'm5', name: 'MediMatrix', college: 'KMC Manipal', leader: 'Dr. Alok Verma' },
  { id: 'm6', name: 'LifeLink', college: 'JIPMER', leader: 'Sanjana I' },
  { id: 'm7', name: 'HealthSphere', college: 'IIT Bombay', leader: 'Kishore Rao' },
  { id: 'm8', name: 'CareTech', college: 'IIT Kharagpur', leader: 'Ritu Sharma' },
  { id: 'm9', name: 'MediLogic', college: 'NIT Calicut', leader: 'Abdul Haseeb' },
  { id: 'm10', name: 'VitalScan', college: 'IIT Delhi', leader: 'Aishwarya M' },
  { id: 'm11', name: 'CureWave', college: 'Osmania Medical College', leader: 'Dr. Ikram' },
  { id: 'm12', name: 'HealthBridge', college: 'AMU', leader: 'Sameer Akhtar' },
  { id: 'm13', name: 'BioVision', college: 'BITS Goa', leader: 'Divya R' },
  { id: 'm14', name: 'PulsePoint', college: 'NIT Rourkela', leader: 'Harish T' },
  { id: 'm15', name: 'MedAI Labs', college: 'IISC Bangalore', leader: 'Dr. Naina' },
],

agrotech: [
  { id: 'a1', name: 'AgriMinds', college: 'TNAU', leader: 'Lakshmi N' },
  { id: 'a2', name: 'CropCircle', college: 'Punjab Ag. Univ', leader: 'Harpreet Singh' },
  { id: 'a3', name: 'FarmTech', college: 'GBPUAT', leader: 'Amit Kumar' },
  { id: 'a4', name: 'AgroBoost', college: 'IIT Kharagpur', leader: 'Arvind Rao' },
  { id: 'a5', name: 'SoilSense', college: 'IIT Guwahati', leader: 'Karan Thapa' },
  { id: 'a6', name: 'GrowSmart', college: 'NIT Patna', leader: 'Rakesh M' },
  { id: 'a7', name: 'HarvestHub', college: 'IIT Madras', leader: 'Anusha Devi' },
  { id: 'a8', name: 'AgriSync', college: 'KIT Coimbatore', leader: 'Gokul Raj' },
  { id: 'a9', name: 'FarmFlow', college: 'IIT BHU', leader: 'Satyam Singh' },
  { id: 'a10', name: 'CropAI', college: 'IIT Roorkee', leader: 'Anubhav Jain' },
  { id: 'a11', name: 'GreenScape', college: 'IISER Pune', leader: 'Sukanya P' },
  { id: 'a12', name: 'AgroNet', college: 'OU Hyderabad', leader: 'Mohammed Arif' },
  { id: 'a13', name: 'EcoFarm', college: 'LPU', leader: 'Jaspreet Singh' },
  { id: 'a14', name: 'FieldFusion', college: 'NIT Surat', leader: 'Kavin Shah' },
  { id: 'a15', name: 'AgriWave', college: 'NIT Silchar', leader: 'Rohit Raj' },
],

edtech: [
  { id: 'e1', name: 'LearnLoop', college: 'Ashoka Univ', leader: 'Meera J' },
  { id: 'e2', name: 'EduVate', college: 'Amity', leader: 'Rajiv S' },
  { id: 'e3', name: 'SkillUp', college: 'LPU', leader: 'Neha P' },
  { id: 'e4', name: 'ClassMates', college: 'Christ Univ', leader: 'David L' },
  { id: 'e5', name: 'SmartStudy', college: 'IIT Bombay', leader: 'Amogh R' },
  { id: 'e6', name: 'BrainBoost', college: 'IIT Madras', leader: 'Anirudh K' },
  { id: 'e7', name: 'TeachTech', college: 'SRM', leader: 'Shreya V' },
  { id: 'e8', name: 'LearnSphere', college: 'BITS Hyderabad', leader: 'Moin Shaikh' },
  { id: 'e9', name: 'StudySync', college: 'IIT Delhi', leader: 'Sahil Mehta' },
  { id: 'e10', name: 'EduLink', college: 'JNTU', leader: 'Naveen R' },
  { id: 'e11', name: 'TutorPro', college: 'Osmania University', leader: 'Faisal Khan' },
  { id: 'e12', name: 'ByteLearn', college: 'Manipal Univ', leader: 'Nitish Reddy' },
  { id: 'e13', name: 'EduCore', college: 'VIT Vellore', leader: 'Rohini I' },
  { id: 'e14', name: 'SkillForge', college: 'NIT Surathkal', leader: 'Aishwarya T' },
  { id: 'e15', name: 'NextGenEd', college: 'IISc Bangalore', leader: 'Ravi Kiran' },
]
};

function DomainCard({
  title,
  image,
  badge,
  color,
  glow,
  border,
  onClick
}: {
  title: string;
  image: string;
  badge: string;
  color: string;
  glow: string;
  border: string;
  onClick: () => void;
}) {
  return (
    <div onClick={onClick} className="cursor-pointer h-full">
      <CometCard className="w-full h-full">
        <div
          className={`relative flex w-full h-full flex-col items-stretch rounded-[16px] md:rounded-[20px] bg-black/40 backdrop-blur-md border ${border} p-2 md:p-4 group`}
          style={{ transformStyle: "preserve-3d" }}
        >
          <div className={`absolute -inset-2 bg-gradient-to-br ${glow} opacity-0 group-hover:opacity-40 blur-xl transition-opacity duration-500 -z-10 rounded-[20px]`} />
          <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[20px]`} />

          <div className="relative z-10 flex-1 flex flex-col">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg md:rounded-xl mb-3 md:mb-4">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
              <img
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                alt={`${title} illustration`}
                src={image || "/placeholder.svg"}
              />
              <div className="absolute bottom-2 left-2 md:bottom-3 md:left-3 z-20">
                <span className="px-2 py-0.5 md:px-3 md:py-1 text-[9px] md:text-[10px] uppercase tracking-wider font-bold bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white">
                  {badge}
                </span>
              </div>
            </div>

            <div className="mt-auto px-1">
              <h3 className="text-lg md:text-xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">{title}</h3>
              <div className="h-1 w-8 md:w-12 bg-white/20 rounded-full group-hover:w-full group-hover:bg-cyan-500/50 transition-all duration-500" />
            </div>
          </div>
        </div>
      </CometCard>
    </div>
  );
}

function TeamListModal({ trackKey, onClose }: { trackKey: string; onClose: () => void }) {
  const track = DOMAINS.find(d => d.key === trackKey);
  const teams = SHORTLISTED_TEAMS[trackKey] || [];

  if (!track) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm overflow-y-auto"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="relative w-[95%] max-w-xl md:max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl md:rounded-3xl border border-white/10 bg-black/80 backdrop-blur-xl shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className={`relative p-4 md:p-6 border-b border-white/10 bg-gradient-to-r ${track.color}`}>
          <button
            onClick={onClose}
            className="absolute top-3 right-3 md:top-4 md:right-4 p-1.5 md:p-2 rounded-full bg-black/20 hover:bg-black/40 text-white transition-colors"
          >
            <X size={18} className="md:w-5 md:h-5" />
          </button>
          <h2 className="text-xl md:text-3xl font-bold text-white">{track.title} Teams</h2>
          <p className="text-white/70 text-xs md:text-sm mt-0.5 md:mt-1">Shortlisted candidates for the {track.badge} track</p>
        </div>

        <div className="p-4 md:p-6 overflow-y-auto max-h-[70vh] space-y-2 md:space-y-3 custom-scrollbar scroll-smooth">
          {teams.length > 0 ? (
            teams.map((team, idx) => (
              <motion.div
                key={team.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.05 }}
                className="flex items-center justify-between p-3 md:p-4 rounded-lg md:rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/20 transition-all group"
              >
                <div>
                  <h3 className="text-base md:text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">{team.name}</h3>
                  <p className="text-xs md:text-sm text-gray-400">{team.college}</p>
                </div>
                <div className="text-right">
                  <span className="text-[10px] md:text-xs text-gray-500 uppercase tracking-wider">Leader</span>
                  <p className="text-xs md:text-sm text-gray-300">{team.leader}</p>
                </div>
              </motion.div>
            ))
          ) : (
            <div className="text-center py-8 md:py-12 text-gray-500">
              No teams shortlisted yet for this track.
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function ShortlistedTeamsPage() {
  const [selectedTrack, setSelectedTrack] = useState<string | null>(null);

  return (
    <main className="min-h-screen flex flex-col relative bg-black selection:bg-cyan-500/30">
      <Navbar />

      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyan-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="flex-grow container mx-auto px-4 relative z-10">
        <div className="pt-40 sm:pt-40 md:pt-60 lg:pt-64 pb-8 md:pb-12 text-center">
          <h1
            className="text-4xl md:text-5xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/50 tracking-tight mb-4 md:mb-6"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Shortlisted Teams
          </h1>
        </div>

        <div className="w-full max-w-7xl mx-auto mb-16 md:mb-24">
          <div className="relative backdrop-blur-2xl bg-white/5 border border-white/10 rounded-[1.5rem] md:rounded-[2.5rem] p-4 sm:p-8 md:p-12 overflow-visible shadow-2xl">

            <div className="relative mb-8 md:mb-12 text-center">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white inline-block relative">
                TRACKS
              </h2>
            </div>

            <div className="grid gap-y-10 gap-x-6 md:gap-y-14 md:gap-x-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 perspective-1000 mt-10 mb-10">
              {DOMAINS.map((d, i) => (
                <div key={d.key} style={{ animationDelay: `${i * 100}ms` }} className="animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-backwards">
                  <DomainCard
                    title={d.title}
                    image={d.image}
                    badge={d.badge}
                    color={d.color}
                    glow={d.glow}
                    border={d.border}
                    onClick={() => setSelectedTrack(d.key)}
                  />
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>

      <AnimatePresence>
        {selectedTrack && (
          <TeamListModal 
            trackKey={selectedTrack} 
            onClose={() => setSelectedTrack(null)} 
          />
        )}
      </AnimatePresence>

      <Footer />
    </main>
  );
}
