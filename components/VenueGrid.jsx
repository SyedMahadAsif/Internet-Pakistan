// "use client";

// import VenueCard from "./VenueCard";
// import { LayoutGrid, Filter, SearchX } from "lucide-react";

// export default function VenueGrid({ venues, selectedCategory }) {
//   return (
//     <div className="w-full space-y-8 py-8">
//       {/* ===== TECHNICAL HEADER ===== */}
//       <div className="relative flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-6">
//         <div className="space-y-1">
//           <div className="flex items-center gap-2">
//             <div className="h-1.5 w-1.5 rounded-full bg-lime-400 animate-pulse" />
//             <span className="text-[10px] font-black uppercase tracking-[0.3em] text-lime-400">
//               Live Arena Feed
//             </span>
//           </div>
          
//           <h2 className="text-3xl md:text-4xl font-black uppercase italic tracking-tighter leading-none">
//             {selectedCategory ? (
//               <>
//                 <span className="text-transparent stroke-text-sm">{selectedCategory}</span>
//                 <span className="text-white ml-3">Venues</span>
//               </>
//             ) : (
//               <>
//                 <span className="text-white">All</span>
//                 <span className="text-transparent stroke-text-sm ml-3">Available</span>
//               </>
//             )}
//           </h2>
//         </div>

//         {/* Status Pills */}
//         <div className="flex items-center gap-3">
//           <div className="bg-white/5 border border-white/10 px-4 py-2 rounded-sm flex items-center gap-3">
//             <LayoutGrid size={14} className="text-lime-400" />
//             <p className="text-[11px] font-black uppercase tracking-widest">
//               <span className="text-white">{venues.length}</span>
//               <span className="text-white/40 ml-2 italic text-[9px]">Units Located</span>
//             </p>
//           </div>
//           <button className="h-10 w-10 flex items-center justify-center bg-lime-400 text-black hover:bg-white transition-colors">
//             <Filter size={18} />
//           </button>
//         </div>

//         {/* Decorative Background Text */}
//         <span className="absolute -bottom-4 right-0 text-[5rem] font-black text-white/[0.02] pointer-events-none select-none italic">
//           SCOUTING
//         </span>
//       </div>

//       {/* ===== GRID SECTION ===== */}
//       {venues.length === 0 ? (
//         <div className="relative group overflow-hidden bg-[#0A0A0A] border border-dashed border-white/10 py-24 flex flex-col items-center justify-center rounded-2xl">
//           <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(163,230,53,0.03),transparent_70%)]" />
//           <SearchX size={48} className="text-white/10 mb-4 group-hover:text-lime-400 transition-colors duration-500" />
//           <h3 className="text-xl font-black uppercase italic text-white/60 tracking-widest">Zero Matches Found</h3>
//           <p className="text-white/30 text-sm mt-2 font-medium">Try adjusting your filters or checking a different category.</p>
//           <button 
//             onClick={() => window.location.reload()}
//             className="mt-6 text-[10px] font-black uppercase tracking-[0.2em] text-lime-400 border-b border-lime-400/50 hover:border-lime-400 transition-all"
//           >
//             Reset All Parameters
//           </button>
//         </div>
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
//           {venues.map((venue, idx) => (
//             <div 
//               key={venue.id} 
//               className="animate-fade-in-up"
//               style={{ animationDelay: `${idx * 50}ms` }}
//             >
//               <VenueCard venue={venue} />
//             </div>
//           ))}
//         </div>
//       )}

//       <style jsx global>{`
//         .stroke-text-sm {
//           -webkit-text-stroke: 1px rgba(255,255,255,0.4);
//           color: transparent;
//         }
//         @keyframes fade-in-up {
//           from {
//             opacity: 0;
//             transform: translateY(20px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
//         .animate-fade-in-up {
//           animation: fade-in-up 0.6s cubic-bezier(0.2, 0, 0.2, 1) forwards;
//         }
//       `}</style>
//     </div>
//   );
// }
"use client";

import VenueCard from "./VenueCard";
import { LayoutGrid, Filter, SearchX } from "lucide-react";

export default function VenueGrid({ venues, selectedCategory }) {
  return (
    <div className="w-full space-y-8 py-8 bg-[#FCFCFC]">
      {/* ===== TECHNICAL HEADER ===== */}
      <div className="relative flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 pb-6 px-6 lg:px-0">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <div className="h-1.5 w-1.5 rounded-full bg-lime-500 animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-lime-600">
              Live Arena Feed
            </span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-black uppercase italic tracking-tighter leading-none">
            {selectedCategory ? (
              <>
                <span className="text-transparent stroke-text-sm">{selectedCategory}</span>
                <span className="text-slate-900 ml-3">Venues</span>
              </>
            ) : (
              <>
                <span className="text-slate-900">All</span>
                <span className="text-transparent stroke-text-sm ml-3">Available</span>
              </>
            )}
          </h2>
        </div>

        {/* Status Pills */}
        <div className="flex items-center gap-3">
          <div className="bg-white border border-slate-200 px-4 py-2 rounded-sm flex items-center gap-3 shadow-sm">
            <LayoutGrid size={14} className="text-lime-600" />
            <p className="text-[11px] font-black uppercase tracking-widest text-slate-800">
              <span>{venues.length}</span>
              <span className="text-slate-400 ml-2 italic text-[9px]">Units Located</span>
            </p>
          </div>
          <button className="h-10 w-10 flex items-center justify-center bg-lime-400 text-black hover:bg-slate-900 hover:text-white transition-all shadow-sm active:scale-95">
            <Filter size={18} />
          </button>
        </div>

        {/* Decorative Background Text */}
        <span className="absolute -bottom-4 right-0 text-[5rem] font-black text-slate-900/[0.03] pointer-events-none select-none italic">
          SCOUTING
        </span>
      </div>

      {/* ===== GRID SECTION ===== */}
      {venues.length === 0 ? (
        <div className="relative group overflow-hidden bg-white border border-dashed border-slate-200 py-24 flex flex-col items-center justify-center rounded-2xl mx-6 lg:mx-0 shadow-inner">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(163,230,53,0.05),transparent_70%)]" />
          <SearchX size={48} className="text-slate-200 mb-4 group-hover:text-lime-500 transition-colors duration-500" />
          <h3 className="text-xl font-black uppercase italic text-slate-400 tracking-widest">Zero Matches Found</h3>
          <p className="text-slate-400 text-sm mt-2 font-medium">Try adjusting your filters or checking a different category.</p>
          <button 
            onClick={() => window.location.reload()}
            className="mt-6 text-[10px] font-black uppercase tracking-[0.2em] text-lime-600 border-b border-lime-600/30 hover:border-lime-600 transition-all"
          >
            Reset All Parameters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8 px-6 lg:px-0">
          {venues.map((venue, idx) => (
            <div 
              key={venue.id} 
              className="animate-fade-in-up"
              style={{ animationDelay: `${idx * 50}ms` }}
            >
              <VenueCard venue={venue} />
            </div>
          ))}
        </div>
      )}

      <style jsx global>{`
        .stroke-text-sm {
          -webkit-text-stroke: 1px rgba(15, 23, 42, 0.15);
          color: transparent;
        }
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.6s cubic-bezier(0.2, 0, 0.2, 1) forwards;
        }
      `}</style>
    </div>
  );
}