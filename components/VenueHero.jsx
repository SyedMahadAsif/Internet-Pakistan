"use client";

import { useState } from "react";
import { X, ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import { useRouter } from "next/navigation";

export default function VenueHero({ venue }) {
  const router = useRouter();
  
  const images = venue.images || [venue.image, venue.image, venue.image, venue.image];
  const [activeImg, setActiveImg] = useState(0);

  const nextImg = () => setActiveImg((prev) => (prev + 1) % images.length);
  const prevImg = () => setActiveImg((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="relative w-full group select-none "> {/* Added padding to bottom of parent */}
      {/* ===== MAIN VIEWPORT ===== */}
      <div className="relative h-[400px] md:h-[500px] lg:h-[650px] w-full bg-[#080415] overflow-hidden rounded-[30px] md:rounded-[40px] border border-white/10 shadow-2xl">
        
        <img
          key={activeImg}
          src={images[activeImg]}
          className="w-full h-full object-cover animate-fade-in transition-transform duration-1000 scale-105 group-hover:scale-100"
          alt={venue.name}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#080415] via-transparent to-black/20" />
        
        <div className="absolute top-4 left-4 md:top-8 md:left-8 z-30">
          <button
            onClick={() => router.push("/")}
            className="h-10 w-10 md:h-12 md:w-12 flex items-center justify-center bg-black/20 backdrop-blur-2xl border border-white/20 text-white hover:bg-white hover:text-black transition-all rounded-xl md:rounded-2xl shadow-xl"
          >
            <X size={20} strokeWidth={3} /> 
          </button>
        </div>

        <div className="absolute inset-x-6 top-1/2 -translate-y-1/2 hidden md:flex justify-between items-center pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-300">
          <button onClick={prevImg} className="p-4 rounded-2xl bg-black/40 backdrop-blur-md border border-white/10 text-white pointer-events-auto hover:bg-[#d9ff00] hover:text-black transition-all">
            <ChevronLeft size={24} strokeWidth={3} />
          </button>
          <button onClick={nextImg} className="p-4 rounded-2xl bg-black/40 backdrop-blur-md border border-white/10 text-white pointer-events-auto hover:bg-[#d9ff00] hover:text-black transition-all">
            <ChevronRight size={24} strokeWidth={3} />
          </button>
        </div>

        <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 flex gap-2 p-1.5 md:p-2 bg-black/30 backdrop-blur-2xl rounded-[20px] md:rounded-[28px] border border-white/10 z-30 scale-90 md:scale-100 origin-right">
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setActiveImg(idx)}
              className={`relative w-12 h-12 md:w-16 md:h-16 rounded-[14px] md:rounded-[20px] transition-all duration-500 overflow-hidden border-2 ${
                activeImg === idx 
                  ? "border-[#d9ff00] scale-100 shadow-lg shadow-[#d9ff00]/20" 
                  : "border-transparent opacity-40 hover:opacity-100 scale-90"
              }`}
            >
              <img src={img} className="w-full h-full object-cover" alt="" />
            </button>
          ))}
        </div>
      </div>


      <style jsx global>{`
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