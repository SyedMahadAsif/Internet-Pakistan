// "use client";

// import { Search, MapPin, Calendar, Target, SlidersHorizontal, ChevronDown } from "lucide-react";

// export default function SearchBar({ searchQuery, setSearchQuery }) {
//   return (
//     <div className="bg-black border-y border-white/5 relative overflow-hidden">
//       {/* Subtle Background Glow */}
//       <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-64 h-24 bg-lime-400/10 blur-[100px] pointer-events-none" />
      
//       <div className="max-w-[1440px] mx-auto px-6 py-8 md:py-12">
//         <div className="relative group">
//           {/* Labeling */}
//           <div className="flex items-center justify-between mb-4 px-2">
//             <div className="flex items-center gap-2">
//               <span className="h-1 w-8 bg-lime-400 rounded-full" />
//               <h2 className="text-[10px] uppercase font-black tracking-[0.3em] text-white/40">
//                 Arena Discovery Engine
//               </h2>
//             </div>
//             <div className="hidden md:flex items-center gap-4 text-[10px] font-black uppercase text-lime-400/60 tracking-widest">
//               <span>82 Venues Active</span>
//               <span className="h-1 w-1 rounded-full bg-white/20" />
//               <span>Karachi, PK</span>
//             </div>
//           </div>

//           {/* THE SEARCH CHASSIS */}
//           <div className="bg-[#0A0A0A] border border-white/10 rounded-2xl md:rounded-full p-2 flex flex-col md:flex-row items-stretch md:items-center gap-2 shadow-2xl transition-all duration-500 hover:border-white/20">
            
//             {/* Input Section */}
//             <div className="flex-1 flex items-center gap-4 px-5 py-3 md:py-0">
//               <Search size={20} className="text-lime-400" />
//               <input
//                 className="bg-transparent text-base w-full focus:outline-none placeholder:text-white/20 font-medium italic"
//                 placeholder="Search by sport, venue name, or area..."
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//               />
//             </div>

//             {/* Divider (Desktop Only) */}
//             <div className="hidden md:block h-10 w-px bg-white/5" />

//             {/* Location Selector */}
//             <button className="flex items-center justify-between md:justify-start gap-3 px-5 py-3 md:py-0 hover:bg-white/5 transition-colors rounded-xl md:rounded-none group/item">
//               <div className="flex items-center gap-3">
//                 <MapPin size={18} className="text-white/40 group-hover/item:text-lime-400 transition-colors" />
//                 <div className="text-left">
//                   <p className="text-[9px] uppercase font-black text-white/30 leading-none mb-1">Location</p>
//                   <p className="text-sm font-bold text-white truncate">Karachi, PK</p>
//                 </div>
//               </div>
//               <ChevronDown size={14} className="text-white/20" />
//             </button>

//             {/* Divider (Desktop Only) */}
//             <div className="hidden md:block h-10 w-px bg-white/5" />

//             {/* Date Selector */}
//             <button className="flex items-center justify-between md:justify-start gap-3 px-5 py-3 md:py-0 hover:bg-white/5 transition-colors rounded-xl md:rounded-none group/item">
//               <div className="flex items-center gap-3">
//                 <Calendar size={18} className="text-white/40 group-hover/item:text-lime-400 transition-colors" />
//                 <div className="text-left">
//                   <p className="text-[9px] uppercase font-black text-white/30 leading-none mb-1">Timing</p>
//                   <p className="text-sm font-bold text-white whitespace-nowrap">Today, Feb 08</p>
//                 </div>
//               </div>
//               <ChevronDown size={14} className="text-white/20" />
//             </button>

//             {/* Search Button / Filter Icon */}
//             <div className="flex items-center gap-2 p-1">
//               <button className="hidden sm:flex items-center justify-center bg-white/5 hover:bg-white/10 h-12 w-12 rounded-xl md:rounded-full border border-white/5 transition-all">
//                 <SlidersHorizontal size={18} className="text-white" />
//               </button>
//               <button className="flex-1 md:flex-none px-8 h-12 bg-lime-400 text-black font-black uppercase italic text-sm tracking-tighter rounded-xl md:rounded-full hover:bg-white transition-all transform active:scale-95 shadow-[0_0_20px_rgba(163,230,53,0.3)]">
//                 Find Slots
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
      
//       {/* Decorative Target Icon (Updated Position) */}
//       <Target size={120} className="absolute -bottom-10 -right-10 text-white/[0.02] pointer-events-none" />
//     </div>
//   );
// }

"use client";

import { Search, MapPin, Calendar, Target, SlidersHorizontal, ChevronDown } from "lucide-react";

export default function SearchBar({ searchQuery, setSearchQuery }) {
  return (
    <div className="bg-[#FCFCFC] border-y border-slate-200 relative overflow-hidden">
      {/* Subtle Background Glow - Adjusted for Light Mode */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-64 h-24 bg-lime-400/20 blur-[100px] pointer-events-none" />
      
      <div className="max-w-[1440px] mx-auto px-6 py-8 md:py-12">
        <div className="relative group">
          {/* Labeling */}
          <div className="flex items-center justify-between mb-4 px-2">
            <div className="flex items-center gap-2">
              <span className="h-1 w-8 bg-lime-500 rounded-full" />
              <h2 className="text-[10px] uppercase font-black tracking-[0.3em] text-slate-400">
                Arena Discovery Engine
              </h2>
            </div>
            <div className="hidden md:flex items-center gap-4 text-[10px] font-black uppercase text-lime-600 tracking-widest">
              <span>82 Venues Active</span>
              <span className="h-1 w-1 rounded-full bg-slate-300" />
              <span>Karachi, PK</span>
            </div>
          </div>

          {/* THE SEARCH CHASSIS */}
          <div className="bg-white border border-slate-200 rounded-2xl md:rounded-full p-2 flex flex-col md:flex-row items-stretch md:items-center gap-2 shadow-[0_10px_40px_rgba(0,0,0,0.04)] transition-all duration-500 hover:border-slate-300">
            
            {/* Input Section */}
            <div className="flex-1 flex items-center gap-4 px-5 py-3 md:py-0">
              <Search size={20} className="text-lime-500" />
              <input
                className="bg-transparent text-slate-800 text-base w-full focus:outline-none placeholder:text-slate-300 font-medium italic"
                placeholder="Search by sport, venue name, or area..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Divider (Desktop Only) */}
            <div className="hidden md:block h-10 w-px bg-slate-100" />

            {/* Location Selector */}
            <button className="flex items-center justify-between md:justify-start gap-3 px-5 py-3 md:py-0 hover:bg-slate-50 transition-colors rounded-xl md:rounded-none group/item text-slate-600">
              <div className="flex items-center gap-3">
                <MapPin size={18} className="text-slate-300 group-hover/item:text-lime-500 transition-colors" />
                <div className="text-left">
                  <p className="text-[9px] uppercase font-black text-slate-400 leading-none mb-1">Location</p>
                  <p className="text-sm font-bold text-slate-800 truncate">Karachi, PK</p>
                </div>
              </div>
              <ChevronDown size={14} className="text-slate-300" />
            </button>

            {/* Divider (Desktop Only) */}
            <div className="hidden md:block h-10 w-px bg-slate-100" />

            {/* Date Selector */}
            <button className="flex items-center justify-between md:justify-start gap-3 px-5 py-3 md:py-0 hover:bg-slate-50 transition-colors rounded-xl md:rounded-none group/item text-slate-600">
              <div className="flex items-center gap-3">
                <Calendar size={18} className="text-slate-300 group-hover/item:text-lime-500 transition-colors" />
                <div className="text-left">
                  <p className="text-[9px] uppercase font-black text-slate-400 leading-none mb-1">Timing</p>
                  <p className="text-sm font-bold text-slate-800 whitespace-nowrap">Today, Feb 08</p>
                </div>
              </div>
              <ChevronDown size={14} className="text-slate-300" />
            </button>

            {/* Search Button / Filter Icon */}
            <div className="flex items-center gap-2 p-1">
              <button className="hidden sm:flex items-center justify-center bg-slate-50 hover:bg-slate-100 h-12 w-12 rounded-xl md:rounded-full border border-slate-200 transition-all">
                <SlidersHorizontal size={18} className="text-slate-600" />
              </button>
              <button className="flex-1 md:flex-none px-8 h-12 bg-lime-400 text-black font-black uppercase italic text-sm tracking-tighter rounded-xl md:rounded-full hover:bg-slate-900 hover:text-white transition-all transform active:scale-95 shadow-lg shadow-lime-400/20">
                Find Slots
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative Target Icon (Updated for Light Mode visibility) */}
      <Target size={120} className="absolute -bottom-10 -right-10 text-slate-900/[0.03] pointer-events-none" />
    </div>
  );
}