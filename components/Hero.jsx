// "use client";

// import React from "react";
// import { ChevronRight, Play, Star, Activity, ArrowUpRight, Zap } from "lucide-react";

// const VENUES = [
//   { name: "Arena 01", img: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=400", area: "LHR", price: "2.5k" },
//   { name: "Padel Pro", img: "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?q=80&w=400", area: "KHI", price: "4.0k" },
//   { name: "The Cage", img: "https://images.unsplash.com/photo-1526232761682-d26e03ac148e?q=80&w=400", area: "ISL", price: "3.5k" },
// ];

// export default function Hero() {
//   // Duplicating venues for seamless infinite loop
//   const scrollItems = [...VENUES, ...VENUES, ...VENUES];

//   return (
//     <section className="relative w-full h-screen min-h-[600px] flex items-center overflow-hidden bg-[#0a0a0a] text-white">
      
//       {/* BACKGROUND DECOR */}
//       <div className="absolute inset-0 pointer-events-none opacity-20">
//         <div className="absolute inset-0" style={{ backgroundImage: `radial-gradient(#333 1px, transparent 1px)`, backgroundSize: '30px 30px' }} />
//         <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-lime-500/10 blur-[100px] rounded-full" />
//       </div>

//       <div className="relative z-10 w-full max-w-6xl mx-auto   grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        
//         {/* LEFT: BRANDING */}
//         <div className="lg:col-span-5 space-y-4">
//           <div className="inline-flex items-center gap-2 px-2 py-1 bg-white/5 border border-white/10 rounded">
//             <span className="w-1.5 h-1.5 bg-lime-400 rounded-full animate-pulse" />
//             <span className="text-[9px] font-bold uppercase tracking-widest text-lime-400">System Live</span>
//           </div>

//           <h1 className="text-5xl md:text-6xl font-black leading-[0.9] tracking-tighter uppercase italic">
//             Elite <span className="text-lime-400">Venues</span><br />
//             On Demand
//           </h1>

//           <p className="max-w-xs text-sm text-white/50 leading-snug">
//             Instant booking for Pakistan&apos;s premium sports arenas. High performance, zero friction.
//           </p>

//           <div className="flex items-center gap-3 pt-2">
//             <button className="h-10 px-5 bg-lime-400 text-black font-black uppercase text-[10px] tracking-widest flex items-center gap-2 hover:bg-white transition-all">
//               Reserve <ArrowUpRight size={14} />
//             </button>
//             <button className="h-10 w-10 flex items-center justify-center border border-white/10 hover:bg-white/5">
//               <Play size={14} fill="white" />
//             </button>
//           </div>
//         </div>

//         {/* RIGHT: CONTENT HUB */}
//         <div className="lg:col-span-7 space-y-4">
          
//           {/* STATS ROW */}
//           <div className="grid grid-cols-2 gap-3">
//             <div className="bg-[#111] border border-white/5 p-3 rounded flex justify-between items-center">
//               <div>
//                 <p className="text-[8px] font-bold text-white/30 uppercase tracking-[0.2em]">Active Players</p>
//                 <p className="text-2xl font-black italic">12.8K</p>
//               </div>
//               <Activity size={16} className="text-lime-400 opacity-50" />
//             </div>
//             <div className="bg-[#111] border border-white/5 p-3 rounded flex justify-between items-center">
//               <div>
//                 <p className="text-[8px] font-bold text-white/30 uppercase tracking-[0.2em]">Efficiency</p>
//                 <p className="text-2xl font-black italic">98%</p>
//               </div>
//               <Zap size={16} className="text-lime-400 opacity-50" />
//             </div>
//           </div>

//           {/* AUTO-CAROUSEL */}
//           <div className="relative w-full overflow-hidden">
//              {/* Fade Edges Mask */}
//             <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10" />
//             <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10" />

//             <div className="flex gap-4 animate-carousel py-2">
//               {scrollItems.map((v, i) => (
//                 <div key={i} className="flex-shrink-0 w-48 group">
//                   <div className="relative aspect-[4/5] overflow-hidden rounded-lg border border-white/10">
//                     <img 
//                       src={v.img} 
//                       className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
//                       alt="" 
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                    
//                     <div className="absolute bottom-2 left-2 right-2">
//                       <p className="text-[10px] font-black uppercase italic leading-none">{v.name}</p>
//                       <div className="flex justify-between items-center mt-1">
//                         <span className="text-[9px] font-bold text-white/60 uppercase">{v.area}</span>
//                         <div className="flex items-center gap-0.5">
//                           <Star size={8} fill="#a3e635" className="text-lime-400 border-none" />
//                           <span className="text-[8px] font-bold">4.9</span>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* PARTNER STRIP */}
//           <div className="bg-white/5 border-y border-white/5 py-2 overflow-hidden flex items-center gap-10">
//             <div className="flex gap-10 animate-marquee whitespace-nowrap">
//               {['ADIDAS PERFORMANCE', 'FOOTBALL PAKISTAN', 'REDBULL STUDIOS', 'FLY EMIRATES', 'ADIDAS PERFORMANCE'].map((t, idx) => (
//                 <span key={idx} className="text-[8px] font-black text-white/20 tracking-[0.3em]">{t}</span>
//               ))}
//             </div>
//           </div>

//         </div>
//       </div>

//       <style jsx global>{`
//         @keyframes carousel {
//           0% { transform: translateX(0); }
//           100% { transform: translateX(calc(-192px * 3 - 1rem * 3)); }
//         }
//         @keyframes marquee {
//           0% { transform: translateX(0); }
//           100% { transform: translateX(-50%); }
//         }
//         .animate-carousel {
//           animation: carousel 20s linear infinite;
//         }
//         .animate-carousel:hover {
//           animation-play-state: paused;
//         }
//         .animate-marquee {
//           animation: marquee 30s linear infinite;
//         }
//       `}</style>
//     </section>
//   );
// }

   "use client";

import React from "react";
import { ArrowRight, Star, Activity, Zap, Globe, Trophy, MapPin, Plus } from "lucide-react";

const VENUES = [
  { name: "The Arena 01", img: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=600", tag: "Football" },
  { name: "Padel Pro", img: "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?q=80&w=600", tag: "Padel" },
  { name: "Courtside", img: "https://images.unsplash.com/photo-1526232761682-d26e03ac148e?q=80&w=600", tag: "Tennis" },
];

export default function Hero() {
  const scrollItems = [...VENUES, ...VENUES, ...VENUES];

  const scrollToGrid = () => {
    document.getElementById('venue-grid')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative w-full min-h-screen bg-[#f8f9fa] text-slate-900 font-sans selection:bg-lime-300 overflow-hidden">
      
      {/* BACKGROUND LAYER */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <svg className="absolute inset-0 w-full h-full text-slate-300" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="netPattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse" patternTransform="rotate(15)">
              <rect width="40" height="40" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#netPattern)" />
        </svg>
        <div className="absolute top-[-10%] right-[-10%] w-[300px] md:w-[50%] h-[300px] md:h-[50%] bg-lime-400/10 blur-[80px] md:blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 pt-24 md:pt-32 pb-20 px-6 lg:px-12 max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* 01. THE MAIN HOOK */}
          <div className="lg:col-span-7 space-y-8 md:space-y-10">
            <div className="space-y-6">
              <div className="flex items-center gap-3 bg-white/80 backdrop-blur-md w-fit px-4 py-2 rounded-full border border-white shadow-sm">
                <Globe size={14} className="text-lime-600 animate-pulse" />
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-600">Karachi&apos;s #1 Sports Network</span>
              </div>
              <h1 className="text-5xl md:text-8xl lg:text-[110px] font-black tracking-[-0.05em] leading-[0.9] md:leading-[0.85] text-slate-950 uppercase italic">
                Your Game, <br />
                <span className="text-lime-500">Our Courts.</span>
              </h1>
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
              <p className="max-w-[350px] text-base md:text-lg text-slate-600 font-medium leading-tight">
                Instantly book premium football, padel, and cricket venues across the city. No more endless calls.
              </p>
              <button 
                onClick={scrollToGrid}
                className="group flex items-center gap-6 bg-slate-950 text-white pl-8 pr-3 py-3 rounded-full transition-all hover:bg-lime-500 hover:text-black hover:scale-105 active:scale-95 shadow-xl shadow-lime-900/10 w-full md:w-auto justify-between md:justify-start"
              >
                <span className="text-sm font-bold uppercase tracking-widest">Explore Arenas</span>
                <div className="h-10 w-10 rounded-full bg-lime-400 flex items-center justify-center text-black group-hover:bg-white transition-colors">
                  <ArrowRight size={20} />
                </div>
              </button>
            </div>
          </div>

          {/* 02. STATS BENTO GRID */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            <div className="bg-white p-6 md:p-8 rounded-[32px] md:rounded-[40px] flex flex-col justify-between border border-white shadow-xl shadow-slate-200/50 group hover:border-lime-400 transition-colors">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-lime-50 rounded-2xl flex items-center justify-center text-lime-600 mb-4 group-hover:bg-lime-500 group-hover:text-white transition-all">
                <MapPin size={24} />
              </div>
              <div className="space-y-1">
                <p className="text-4xl md:text-5xl font-black tracking-tighter text-slate-900 italic leading-none">85+</p>
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Venues Listed</p>
              </div>
            </div>

            <div className="bg-lime-400 p-6 md:p-8 rounded-[32px] md:rounded-[40px] flex flex-col justify-between shadow-xl shadow-lime-900/10 group">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-black/10 rounded-2xl flex items-center justify-center text-black mb-4">
                <Trophy size={24} />
              </div>
              <div className="space-y-1 text-black">
                <p className="text-4xl md:text-5xl font-black tracking-tighter italic leading-none">12K+</p>
                <p className="text-[10px] font-black uppercase tracking-widest opacity-60">Total Bookings</p>
              </div>
            </div>

            <div className="bg-white p-5 md:p-6 rounded-[24px] md:rounded-[32px] border border-white shadow-sm flex items-center gap-4 col-span-2">
               <div className="flex -space-x-3">
                 {[1,2,3].map(i => (
                   <div key={i} className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden shadow-sm">
                     <img src={`https://i.pravatar.cc/100?img=${i+30}`} alt="user" />
                   </div>
                 ))}
               </div>
               <div className="h-2 w-2 bg-green-500 rounded-full animate-pulse flex-shrink-0" />
               <p className="text-[9px] md:text-[10px] font-bold text-slate-500 uppercase tracking-widest">2.4k Players playing now</p>
            </div>
          </div>
        </div>

        {/* 03. THE COLLECTIONS CAROUSEL */}
        <div id="venue-grid" className="mt-24 md:mt-32 relative scroll-mt-20">
          <div className="flex items-center gap-4 md:gap-6 mb-8 md:mb-12 px-2">
            <h2 className="text-2xl md:text-4xl font-[1000] italic uppercase tracking-tighter text-slate-950">Premium Hubs</h2>
            <div className="h-[2px] flex-1 bg-slate-200" />
            <button className="text-[10px] font-black uppercase tracking-widest border-b-2 border-lime-500 pb-1 shrink-0">See All</button>
          </div>

          <div className="relative w-full overflow-hidden rounded-[32px] md:rounded-[40px] bg-white border border-slate-100 p-4 md:p-6 shadow-2xl shadow-slate-200/40">
             
             {/* ADAPTIVE WHITE SIDES GRADIENT MASKS */}
             <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-20 pointer-events-none" />
             <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-20 pointer-events-none" />

             {/* SCROLLING TRACK */}
             <div className="flex gap-4 md:gap-8 animate-carousel py-4 relative z-10">
                {scrollItems.map((v, i) => (
                  <div key={i} className="flex-shrink-0 w-[280px] md:w-[420px] group cursor-pointer">
                    <div className="relative aspect-[16/10] overflow-hidden rounded-[20px] md:rounded-[24px] bg-slate-50 transition-all duration-700 md:group-hover:-translate-y-3">
                      <img 
                        src={v.img} 
                        className="absolute inset-0 w-full h-full object-cover transition-all duration-1000 md:group-hover:scale-110" 
                        alt={v.name} 
                      />
                      
                      {/* Gradient: Subtle on Desktop, Stronger on Mobile for readability */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent opacity-80 md:opacity-60 md:group-hover:opacity-100 transition-opacity" />
                      
                      {/* Badge Top Left */}
                      <div className="absolute top-4 left-4 md:top-6 md:left-6 z-10">
                        <span className="bg-lime-500 text-black px-3 py-1 md:px-4 md:py-1.5 rounded-lg text-[9px] md:text-[10px] font-[1000] uppercase tracking-widest shadow-xl">
                          {v.tag}
                        </span>
                      </div>

                      {/* Content Overlay: Visible by default on mobile */}
                      <div className="absolute bottom-4 left-4 right-4 md:bottom-8 md:left-8 md:right-8 flex justify-between items-end text-white">
                        <div>
                          <div className="flex items-center gap-2 text-lime-400 mb-1 md:mb-2">
                             <Star size={10} fill="currentColor" />
                             <span className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em]">Verified Hub</span>
                          </div>
                          <p className="text-xl md:text-3xl font-[1000] italic tracking-tighter uppercase leading-none">{v.name}</p>
                        </div>
                        <div className="w-8 h-8 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center text-black md:opacity-0 md:group-hover:opacity-100 md:group-hover:rotate-[360deg] transition-all duration-700">
  {/* Use className for responsive sizing instead of multiple size props */}
  <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
</div>
                      </div>
                    </div>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes carousel {
          0% { transform: translateX(0); }
          /* Mobile width: 280px + 16px (gap-4) */
          100% { transform: translateX(calc(-280px * 3 - 1rem * 3)); }
        }
        @media (min-width: 768px) {
          @keyframes carousel {
            0% { transform: translateX(0); }
            /* Desktop width: 420px + 32px (gap-8) */
            100% { transform: translateX(calc(-420px * 3 - 2rem * 3)); }
          }
        }
        .animate-carousel {
          animation: carousel 25s linear infinite;
        }
        .animate-carousel:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}



    