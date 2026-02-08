// "use client";

// import { Zap, ChevronRight, Play, Star } from "lucide-react";

// const VENUES = [
//   { id: 1, name: "Padel Pro Elite", img: "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?auto=format&fit=crop&w=400&q=80" },
//   { id: 2, name: "The Grand Arena", img: "https://images.unsplash.com/photo-1529900903142-1a6e922dfac3?auto=format&fit=crop&w=400&q=80" },
//   { id: 3, name: "Kickoff FC Turf", img: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=400&q=80" },
//   { id: 4, name: "Smash Hub Badminton", img: "https://images.unsplash.com/photo-1626224580174-29369302636a?auto=format&fit=crop&w=400&q=80" },
// ];

// export default function Header() {
//   return (
//     <header className="relative z-50 bg-black text-white w-full border-b border-white/5">
//       {/* ===== TOP NAV ===== */}
//       <nav className="relative z-20 max-w-[1440px] mx-auto h-16 px-6 flex items-center justify-between">
//         <div className="flex items-center gap-3 group cursor-pointer">
//           <div className="bg-lime-400 p-1.5 transform -skew-x-12 group-hover:skew-x-0 transition-all">
//             <Zap size={18} className="text-black fill-black" />
//           </div>
//           <h1 className="text-lg font-black uppercase tracking-tighter italic">
//             Internet <span className="text-lime-400">Pakistan</span>
//           </h1>
//         </div>
//         <div className="flex items-center gap-4">
//            <div className="hidden sm:block h-8 w-px bg-white/10" />
//            <img src="https://i.pravatar.cc/100" className="w-8 h-8 rounded-full border border-lime-400" alt="Profile" />
//         </div>
//       </nav>

      

//       <style jsx global>{`
//         .stroke-text { -webkit-text-stroke: 1px rgba(255,255,255,0.4); color: transparent; }
//         @keyframes scroll { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
//         .animate-scroll { display: flex; width: max-content; animation: scroll 25s linear infinite; }
//         .animate-scroll:hover { animation-play-state: paused; }
//         .mask-fade-edges { mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent); }
//         @media (max-width: 768px) { .stroke-text { -webkit-text-stroke: 0.5px rgba(255,255,255,0.4); } }
//       `}</style>
//     </header>
//   );
// }

"use client";

import { Zap } from "lucide-react";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 flex justify-center p-4 md:p-6 pointer-events-none">
      {/* THE FLOATING ISLAND */}
      <nav className="
        pointer-events-auto
        flex items-center gap-4 
        px-6 py-3 
        bg-white/70 backdrop-blur-xl 
        border border-white/40 
        rounded-full 
        shadow-[0_8px_32px_0_rgba(0,0,0,0.08)]
        transition-all duration-500 hover:shadow-[0_8px_40px_0_rgba(163,230,53,0.15)]
      ">
        
        {/* LOGO ICON */}
        <div className="relative flex items-center justify-center">
          <div className="absolute inset-0 bg-lime-400 blur-lg opacity-20 animate-pulse" />
          <div className="relative bg-slate-950 p-2 rounded-xl transform rotate-[-6deg] group-hover:rotate-0 transition-transform duration-500">
            <Zap size={18} className="text-lime-400 fill-lime-400" />
          </div>
        </div>

        {/* LOGO TEXT */}
        <div className="flex flex-col">
          <h1 className="text-sm md:text-base font-[1000] uppercase tracking-[-0.02em] leading-none text-slate-950 italic">
            Internet <span className="text-lime-500">Pakistan</span>
          </h1>
          <span className="text-[8px] font-bold uppercase tracking-[0.3em] text-slate-400 mt-0.5 leading-none">
            Books Venues in Karachi
          </span>
        </div>

        {/* MINI STATUS INDICATOR (The "Modern" Touch) */}
        <div className="ml-2 flex items-center gap-1.5 px-2.5 py-1 bg-slate-50 rounded-full border border-slate-100">
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-lime-500"></span>
          </span>
          <span className="text-[8px] font-black uppercase tracking-tighter text-slate-500">Live</span>
        </div>

      </nav>
    </header>
  );
}