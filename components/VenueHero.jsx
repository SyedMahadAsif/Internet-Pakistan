"use client";

import { useState } from "react";
import { X, Maximize2, Camera, ChevronLeft, ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";

export default function VenueHero({ venue }) {
  const router = useRouter();
  
  const images = venue.images || [venue.image, venue.image, venue.image, venue.image];
  const [activeImg, setActiveImg] = useState(0);

  const nextImg = () => setActiveImg((prev) => (prev + 1) % images.length);
  const prevImg = () => setActiveImg((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="relative w-full group select-none">
      {/* ===== MAIN VIEWPORT ===== */}
      <div className="relative h-[500px] lg:h-[650px] w-full bg-[#080415] overflow-hidden rounded-[40px] border border-white/10 shadow-2xl">
        
        {/* Dynamic Image with Soft Zoom */}
        <img
          key={activeImg}
          src={images[activeImg]}
          className="w-full h-full object-cover animate-fade-in transition-transform duration-1000 scale-105 group-hover:scale-100"
          alt={venue.name}
        />

        {/* Sophisticated Gradient Mask */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#080415] via-transparent to-black/20" />
        
        {/* TOP INTERFACE BAR */}
        <div className="absolute top-8 left-8 right-8 flex justify-between items-center z-30">
         <button
            onClick={() => router.push("/")}
            className="h-12 w-12 flex items-center justify-center bg-white/10 backdrop-blur-2xl border border-white/20 text-white hover:bg-white hover:text-black transition-all rounded-2xl shadow-xl"
          >
            <X size={20} strokeWidth={3} /> 
          </button>
          {/* <div className="flex items-center gap-3">
            
            <div className="bg-lime-400 text-black px-4 py-2 rounded-2xl text-[10px] font-black uppercase tracking-widest shadow-lg shadow-lime-400/20 flex items-center gap-2">
              <Camera size={14} fill="black" />
              Arena View 0{activeImg + 1}
            </div>
            <div className="hidden sm:block bg-white/10 backdrop-blur-xl border border-white/10 px-4 py-2 rounded-2xl text-[10px] text-white/70 font-black uppercase tracking-widest">
              Performance Verified
            </div>
          </div> */}

          
        </div>

        {/* NAVIGATION ARROWS (Center) */}
        <div className="absolute inset-x-6 top-1/2 -translate-y-1/2 flex justify-between items-center pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-300">
          <button onClick={prevImg} className="p-4 rounded-2xl bg-black/40 backdrop-blur-md border border-white/10 text-white pointer-events-auto hover:bg-lime-400 hover:text-black transition-all">
            <ChevronLeft size={24} strokeWidth={3} />
          </button>
          <button onClick={nextImg} className="p-4 rounded-2xl bg-black/40 backdrop-blur-md border border-white/10 text-white pointer-events-auto hover:bg-lime-400 hover:text-black transition-all">
            <ChevronRight size={24} strokeWidth={3} />
          </button>
        </div>

        {/* BOTTOM BRANDING INFO */}
{/* <div className="absolute bottom-10 left-10 z-20">
          <h2 className="text-5xl lg:text-7xl font-black italic uppercase tracking-tighter leading-none text-white drop-shadow-2xl">
            {venue.name}
          </h2>
          <div className="flex items-center gap-4 mt-6">
            <div className="h-1.5 w-1.5 rounded-full bg-lime-400 animate-pulse" />
            <p className="text-xs font-black uppercase tracking-[0.3em] text-lime-400/90 italic">
              Premium Arena // {venue.area}
            </p>
          </div>
        </div> */}

        {/* INTEGRATED GLASS THUMBNAILS (Bottom Right) */}
        <div className="absolute bottom-8 right-8 flex gap-2.5 p-2 bg-black/30 backdrop-blur-2xl rounded-[28px] border border-white/10 z-30">
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setActiveImg(idx)}
              className={`relative w-16 h-16 rounded-[20px] transition-all duration-500 overflow-hidden border-2 ${
                activeImg === idx 
                        ? "border-lime-400 scale-100 shadow-lg shadow-lime-400/20" 
                : "border-transparent opacity-40 hover:opacity-100 scale-90"
              }`}
            >
              <img src={img} className="w-full h-full object-cover" alt="" />
              {activeImg === idx && (
                <div className="absolute inset-0 bg-lime-400/10 flex items-center justify-center">
                  <div className="h-1.5 w-1.5 rounded-full bg-lime-400" />
                </div>
              )}
            </button>
          ))}
        </div>
      </div>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        @keyframes fade-in {
          from { opacity: 0; filter: blur(20px); transform: scale(1.1); }
          to { opacity: 1; filter: blur(0); transform: scale(1.05); }
        }
        .animate-fade-in {
          animation: fade-in 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </div>
  );
}