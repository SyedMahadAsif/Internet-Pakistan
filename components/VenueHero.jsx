// "use client";

// import { useState } from "react";
// import { X, Maximize2, Camera } from "lucide-react";
// import { useRouter } from "next/navigation";

// export default function VenueHero({ venue }) {
//   const router = useRouter();
  
//   // Use venue.images array if available, otherwise fallback to single image
//   const images = venue.images || [venue.image, venue.image, venue.image, venue.image];
//   const [activeImg, setActiveImg] = useState(0);

//   return (
//     <div className="relative w-full space-y-4">
//       {/* ===== MAIN STAGE ===== */}
//       <div className="relative h-[450px] lg:h-[600px] w-full bg-[#0A0A0A] overflow-hidden border border-white/10 group">
//         {/* Dynamic Background Image */}
//         <img
//           key={activeImg} // Key forces re-animation on change
//           src={images[activeImg]}
//           className="w-full h-full object-cover animate-fade-in transition-all duration-700 brightness-[0.8]"
//           alt={venue.name}
//         />

//         {/* Tactical Overlays */}
//         <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/20" />
        
//         {/* TOP CONTROLS */}
//         <div className="absolute top-6 left-6 right-6 flex justify-between items-start z-20">
//           <div className="flex flex-col gap-2">
//             <div className="flex items-center gap-2 bg-lime-400 text-black px-3 py-1 text-[10px] font-black uppercase tracking-widest [clip-path:polygon(0_0,100%_0,85%_100%,0%_100%)]">
//               <Camera size={12} />
//               Arena View 0{activeImg + 1}
//             </div>
//             <div className="bg-black/60 backdrop-blur-md border border-white/10 px-3 py-1 text-[10px] text-white/60 font-bold uppercase tracking-tighter">
//               Performance Verified
//             </div>
//           </div>

//           <button
//             onClick={() => router.push("/")}
//             className="h-10 w-10 flex items-center justify-center bg-black/50 backdrop-blur-xl border border-white/20 text-white hover:bg-lime-400 hover:text-black transition-all rounded-full"
//           >
//             <X size={20} />
//           </button>
//         </div>

//         {/* BOTTOM TEXT: Integrated into the Image Stage */}
//         <div className="absolute bottom-10 left-10 z-20 max-w-2xl">
//           <h2 className="text-5xl lg:text-7xl font-black italic uppercase tracking-tighter leading-[0.85] text-white drop-shadow-2xl">
//             {venue.name}
//           </h2>
//           <div className="flex items-center gap-4 mt-4">
//             <div className="h-px w-12 bg-lime-400" />
//             <p className="text-sm font-bold uppercase tracking-[0.2em] text-lime-400/80 italic">
//               Elite Facility // {venue.area}
//             </p>
//           </div>
//         </div>

//         {/* Decorative corner scanner effect */}
//         <div className="absolute bottom-6 right-6 h-12 w-12 border-r-2 border-b-2 border-white/20 pointer-events-none" />
//       </div>

//       {/* ===== THUMBNAIL CAROUSEL (SHARP DESIGN) ===== */}
//       <div className="flex gap-3 overflow-x-auto no-scrollbar py-2">
//         {images.map((img, idx) => (
//           <button
//             key={idx}
//             onClick={() => setActiveImg(idx)}
//             className={`relative flex-shrink-0 w-32 h-20 transition-all duration-300 overflow-hidden border-2 ${
//               activeImg === idx 
//               ? "border-lime-400 scale-105 z-10 shadow-[0_0_20px_rgba(163,230,53,0.2)]" 
//               : "border-white/5 opacity-50 hover:opacity-100"
//             } [clip-path:polygon(10%_0,100%_0,90%_100%,0%_100%)]`}
//           >
//             <img src={img} className="w-full h-full object-cover" alt={`Thumb ${idx}`} />
//             {activeImg === idx && (
//                 <div className="absolute inset-0 bg-lime-400/20 flex items-center justify-center">
//                     <Maximize2 size={16} className="text-lime-400" />
//                 </div>
//             )}
//           </button>
//         ))}
//       </div>

//       <style jsx global>{`
//         .no-scrollbar::-webkit-scrollbar { display: none; }
//         .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
//         @keyframes fade-in {
//           from { opacity: 0.5; filter: blur(10px); }
//           to { opacity: 1; filter: blur(0); }
//         }
//         .animate-fade-in {
//           animation: fade-in 0.5s ease-out forwards;
//         }
//       `}</style>
//     </div>
//   );
// }

"use client";

import { useState } from "react";
import { X, Maximize2, Camera } from "lucide-react";
import { useRouter } from "next/navigation";

export default function VenueHero({ venue }) {
  const router = useRouter();
  
  // Use venue.images array if available, otherwise fallback to single image
  const images = venue.images || [venue.image, venue.image, venue.image, venue.image];
  const [activeImg, setActiveImg] = useState(0);

  return (
    <div className="relative w-full space-y-4">
      {/* ===== MAIN STAGE ===== */}
      <div className="relative h-[450px] lg:h-[600px] w-full bg-slate-100 overflow-hidden border border-slate-200 group">
        {/* Dynamic Background Image */}
        <img
          key={activeImg} // Key forces re-animation on change
          src={images[activeImg]}
          className="w-full h-full object-cover animate-fade-in transition-all duration-700 brightness-[0.95]"
          alt={venue.name}
        />

        {/* Tactical Overlays - Adjusted for light mode (bottom gradient is lighter) */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10" />
        
        {/* TOP CONTROLS */}
        <div className="absolute top-6 left-6 right-6 flex justify-between items-start z-20">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 bg-lime-400 text-black px-3 py-1 text-[10px] font-black uppercase tracking-widest [clip-path:polygon(0_0,100%_0,85%_100%,0%_100%)] shadow-sm">
              <Camera size={12} />
              Arena View 0{activeImg + 1}
            </div>
            <div className="bg-white/80 backdrop-blur-md border border-slate-200 px-3 py-1 text-[10px] text-slate-600 font-bold uppercase tracking-tighter shadow-sm">
              Performance Verified
            </div>
          </div>

          <button
            onClick={() => router.push("/")}
            className="h-10 w-10 flex items-center justify-center bg-white/80 backdrop-blur-xl border border-slate-200 text-slate-900 hover:bg-lime-400 hover:text-black transition-all rounded-full shadow-lg"
          >
            <X size={20} />
          </button>
        </div>

        {/* BOTTOM TEXT: High contrast against the gradient */}
        <div className="absolute bottom-10 left-10 z-20 max-w-2xl">
          <h2 className="text-5xl lg:text-7xl font-black italic uppercase tracking-tighter leading-[0.85] text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
            {venue.name}
          </h2>
          <div className="flex items-center gap-4 mt-4">
            <div className="h-px w-12 bg-lime-400" />
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-lime-400 drop-shadow-md italic">
              Elite Facility // {venue.area}
            </p>
          </div>
        </div>

        {/* Decorative corner scanner effect */}
        <div className="absolute bottom-6 right-6 h-12 w-12 border-r-2 border-b-2 border-white/40 pointer-events-none" />
      </div>

      {/* ===== THUMBNAIL CAROUSEL (LIGHT DESIGN) ===== */}
      <div className="flex gap-3 overflow-x-auto no-scrollbar py-2">
        {images.map((img, idx) => (
          <button
            key={idx}
            onClick={() => setActiveImg(idx)}
            className={`relative flex-shrink-0 w-32 h-20 transition-all duration-300 overflow-hidden border-2 ${
              activeImg === idx 
              ? "border-lime-500 scale-105 z-10 shadow-lg shadow-lime-500/20" 
              : "border-slate-200 opacity-60 hover:opacity-100"
            } [clip-path:polygon(10%_0,100%_0,90%_100%,0%_100%)]`}
          >
            <img src={img} className="w-full h-full object-cover" alt={`Thumb ${idx}`} />
            {activeImg === idx && (
                <div className="absolute inset-0 bg-lime-400/20 flex items-center justify-center">
                    <Maximize2 size={16} className="text-lime-600" />
                </div>
            )}
          </button>
        ))}
      </div>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        @keyframes fade-in {
          from { opacity: 0.5; filter: blur(4px); }
          to { opacity: 1; filter: blur(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
}