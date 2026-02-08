// "use client";

// import { MapPin, Star, ArrowUpRight, Shield, Zap } from "lucide-react";
// import Link from "next/link";

// export default function VenueCard({ venue }) {
//   return (
//     <Link href={`/venue/${venue.id}`} className="block h-full">
//       {/* Container: h-full ensures all cards in the grid row match height */}
//       <div className="group relative h-full bg-[#0D0D0D] border border-white/10 flex flex-col transition-all duration-300 hover:border-lime-400">
        
//         {/* TOP SECTION: IMAGE AREA */}
//         <div className="relative h-56 w-full overflow-hidden bg-[#151515]">
//           {/* Angular Sport Tag */}
//           <div className="absolute top-0 left-0 z-20 bg-lime-400 text-black px-4 py-1 text-[10px] font-black uppercase tracking-[0.2em] [clip-path:polygon(0_0,100%_0,80%_100%,0%_100%)]">
//             {venue.sport}
//           </div>

//           <img
//             src={venue.image}
//             className="w-full h-full object-cover opacity-90 transition-all duration-700 group-hover:scale-110 group-hover:opacity-100"
//             alt={venue.name}
//           />

//           {/* Price Overlay - High Contrast */}
//           <div className="absolute bottom-0 right-0 z-20 bg-black/90 backdrop-blur-md px-4 py-2 border-t border-l border-white/10">
//             <div className="flex flex-col items-end">
//               <span className="text-[8px] font-bold text-white/40 uppercase leading-none">Hourly Rate</span>
//               <span className="text-lg font-black text-white leading-none mt-1">
//                 <span className="text-lime-400 text-xs mr-1">PKR</span>{venue.price}
//               </span>
//             </div>
//           </div>
//         </div>

//         {/* MIDDLE SECTION: PRIMARY DATA (Flex-1 ensures even expansion) */}
//         <div className="p-5 flex-1 flex flex-col">
//           <div className="flex justify-between items-start gap-4">
//             <h3 className="text-xl font-black uppercase italic tracking-tighter leading-[0.9] text-white">
//               {venue.name}
//             </h3>
//             <div className="shrink-0 bg-white/5 p-2 rounded-sm border border-white/10 group-hover:bg-lime-400 group-hover:text-black transition-colors">
//               <ArrowUpRight size={16} />
//             </div>
//           </div>

//           <div className="flex items-center gap-1.5 mt-3 text-white/40">
//             <MapPin size={12} className="text-lime-400" />
//             <span className="text-[10px] font-bold uppercase tracking-widest">{venue.area}</span>
//           </div>

//           {/* Technical Specs Row */}
//           <div className="mt-auto pt-6 flex items-center gap-4">
//             <div className="flex flex-col">
//               <span className="text-[8px] font-bold text-white/20 uppercase tracking-tighter">Performance</span>
//               <div className="flex items-center gap-1 mt-0.5">
//                 <Star size={10} fill="#a3e635" className="text-lime-400" />
//                 <span className="text-xs font-black text-white">{venue.rating}</span>
//               </div>
//             </div>
            
//             <div className="h-6 w-px bg-white/5" />

//             <div className="flex flex-col">
//               <span className="text-[8px] font-bold text-white/20 uppercase tracking-tighter">Status</span>
//               <div className="flex items-center gap-1 mt-0.5">
//                 <Zap size={10} className="text-lime-400" />
//                 <span className="text-[9px] font-bold text-lime-400 uppercase">Available</span>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* BOTTOM SECTION: STATIC UTILITY STRIP */}
//         <div className="bg-white/5 px-5 py-3 flex items-center justify-between border-t border-white/10">
//           <div className="flex gap-2">
//             <div className="h-3 w-3 rounded-full border border-white/20 flex items-center justify-center p-[2px]">
//                 <div className="h-full w-full bg-lime-400 rounded-full animate-pulse" />
//             </div>
//           </div>
//           <span className="text-[9px] font-black uppercase tracking-[0.3em] text-white/40 group-hover:text-lime-400 transition-colors">
//             Book Now
//           </span>
//         </div>

//         {/* Corner Decor - Sharp Industrial Edge */}
//         <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-white/5 group-hover:border-lime-400/50 transition-colors pointer-events-none" />
//       </div>
//     </Link>
//   );
// }

"use client";

import { MapPin, Star, ArrowUpRight, Zap, Clock, Users, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function VenueCard({ venue }) {
  return (
    <Link href={`/venue/${venue.id}`} className="block h-full group">
      <div className="relative h-full bg-white border-2 border-lime-400 flex flex-col transition-all duration-300 hover:shadow-2xl hover:shadow-lime-900/10 hover:-translate-y-1 rounded-2xl overflow-hidden">
        
        {/* IMAGE SECTION */}
        <div className="relative h-52 w-full overflow-hidden bg-slate-50">
          {/* Status Badge */}
          <div className="absolute top-3 left-3 z-20 flex flex-col gap-2">
            <div className="bg-white/90 backdrop-blur-md text-slate-900 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-sm border border-slate-200/50">
              {venue.sport}
            </div>
            {/* Soft Urgency */}
            <div className="bg-orange-500 text-white px-2.5 py-1 rounded-full text-[9px] font-black uppercase tracking-tight flex items-center gap-1 shadow-lg shadow-orange-500/20 animate-pulse">
              <Clock size={10} /> Fast Filling
            </div>
          </div>

          <img
            src={venue.image}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            alt={venue.name}
          />

          {/* Rating Badge */}
          <div className="absolute top-3 right-3 z-20 bg-white/90 backdrop-blur-md px-2 py-1 rounded-lg border border-slate-200/50 flex items-center gap-1 shadow-sm">
            <Star size={10} fill="#84cc16" className="text-lime-500" />
            <span className="text-[10px] font-bold text-slate-700">{venue.rating}</span>
          </div>
        </div>

        {/* CONTENT SECTION */}
        <div className="p-5 flex-1 flex flex-col bg-white">
          <div className="mb-2">
            <h3 className="text-xl font-bold text-slate-900 leading-tight group-hover:text-lime-600 transition-colors">
              {venue.name}
            </h3>
            <div className="flex items-center gap-1.5 mt-1 text-slate-400">
              <MapPin size={12} />
              <span className="text-[11px] font-medium tracking-wide">{venue.area}</span>
            </div>
          </div>

          {/* SIMPLIFIED STATS GRID */}
          <div className="grid grid-cols-2 gap-3 my-4 py-4 border-y border-slate-50">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-lime-50 flex items-center justify-center text-lime-600">
                <Zap size={14} />
              </div>
              <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-tight leading-none">Instant <br/>Confirm</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                <Users size={14} />
              </div>
              <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-tight leading-none">Up to <br/>12 Players</span>
            </div>
          </div>

          {/* PRICE & ACTION AREA */}
          <div className="mt-auto flex items-center justify-between">
            <div className="flex flex-col">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Rate</span>
              <div className="flex items-baseline gap-0.5">
                <span className="text-xl font-black text-slate-900 italic">Rs.{venue.price}</span>
                <span className="text-[10px] font-bold text-slate-400">/hr</span>
              </div>
            </div>

            {/* BUTTON FOCUS */}
            <div className="h-10 px-5 bg-slate-900 text-white rounded-full flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider group-hover:bg-lime-500 group-hover:text-white transition-all duration-300">
              Book <ChevronRight size={14} strokeWidth={3} />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}