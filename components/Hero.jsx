"use client";

import { Zap, MapPin, Calendar, ChevronRight, Star, Clock } from "lucide-react";
import SearchBar from "./SearchBar";
import { venues, categories } from "../data/venues"; 
import { useRouter } from "next/navigation";

import React, { useState, useEffect } from "react";

// Inside your SportsLanding component
const backgroundImages = [
  "/images/background.jpg",
  "/images/background2.png",
  "/images/background3.jpg",
   "/images/background4.jpg",
];




export default function SportsLanding() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const router = useRouter();

  const filteredVenues = (venues || []).filter((venue) => {
    const matchesQuery =
      venue.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      venue.sport.toLowerCase().includes(searchQuery.toLowerCase()) ||
      venue.area.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory
      ? venue.sport === selectedCategory
      : true;
    return matchesQuery && matchesCategory;
  });

  const [bgIndex, setBgIndex] = useState(0);


  // Change background every 5 seconds
useEffect(() => {
  const interval = setInterval(() => {
    setBgIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
  }, 5000); // 5000ms = 5 seconds

  return () => clearInterval(interval); // cleanup on unmount
}, []);

  return (
    <div className="min-h-screen bg-[#080415] text-white font-sans selection:bg-[#d9ff00] selection:text-black overflow-x-hidden">
      
   
      {/* ===== HERO SECTION ===== */}
      {/* ===== HERO SECTION ===== */}

      <section className="relative pt-24  px-6 overflow-hidden">

   <div className="absolute inset-0 pointer-events-none overflow-hidden">
  {backgroundImages.map((img, index) => (
    <img
      key={index}
      src={img}
      alt="Stadium Background"
      className={`
        w-full h-full object-cover absolute inset-0 transition-opacity duration-1000
        ${index === bgIndex ? "opacity-100" : "opacity-0"}
      `}
    />
  ))}
  <div className="absolute inset-0 bg-gradient-to-b from-[#080415]/80 via-[#080415]/40 to-[#080415]" />
</div>




        <div className="max-w-4xl mx-auto text-center md:text-left relative z-10">

          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1 rounded-full mb-8">

            <Zap size={14} className="text-[#d9ff00] fill-[#d9ff00]" />

            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-300">

              Karachi's #1 Venue Booker

            </span>

          </div>



         <h1 className="text-4xl sm:text-4xl md:text-6xl font-black uppercase tracking-tighter italic mb-6 leading-[0.85]">

  <span className="block md:inline">INSTANTLY</span>{" "}

  <span className="text-[#d9ff00] block md:inline">BOOK SPORTS VENUES</span>{" "}

  <span className="block md:inline">IN KARACHI</span>

</h1>





          <p className="text-slate-400 text-lg md:text-xl max-w-xl mb-6 leading-relaxed font-medium">

            Discover and play at the best sports arenas in Karachi. Real-time availability, zero phone calls.

          </p>



          {/* Search Bar */}

          <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

        </div>

      </section>

     {/* ===== CATEGORIES SECTION ===== */}
<section className="px-4  mx-auto max-w-7xl relative z-10 select-none">
  {/* HEADER SECTION - More minimalist & balanced */}
  <div className="flex flex-col items-center mb-10 text-center">
    <div className="flex items-center gap-3 mb-2">
      <div className="h-[1px] w-8 bg-gradient-to-r from-transparent to-[#d9ff00]" />
      <span className="text-[#d9ff00] text-[10px] font-bold tracking-[0.3em] uppercase">Browse</span>
      <div className="h-[1px] w-8 bg-gradient-to-l from-transparent to-[#d9ff00]" />
    </div>
    <h2 className="text-2xl md:text-4xl font-black italic tracking-tight text-white uppercase">
      CHOOSE <span className="text-white/30">CATEGORY</span>
    </h2>
  </div>

  {/* CATEGORY SCROLLER - Better mobile spacing & glass effect */}
  <div className="flex items-center gap-4 overflow-x-auto pb-6 no-scrollbar -mx-4 px-4 snap-x snap-proximity">
    
    {/* "All" Toggle Pill */}
    <button
      onClick={() => setSelectedCategory("")}
      className={`group relative flex-shrink-0 flex items-center justify-center px-8 h-12 rounded-full border transition-all duration-500 snap-center
        ${selectedCategory === "" 
          ? "bg-[#d9ff00] border-[#d9ff00] text-black shadow-[0_10px_25px_-5px_rgba(217,255,0,0.4)] scale-105" 
          : "bg-white/5 border-white/10 text-white/70 hover:bg-white/10 backdrop-blur-md"
        }`}
    >
      <Zap 
        size={16} 
        className={`mr-2 transition-transform duration-300 group-hover:scale-110`} 
        fill={selectedCategory === "" ? "black" : "transparent"} 
      />
      <span className="text-xs font-black uppercase tracking-widest">All</span>
    </button>

    {/* Dynamic Category Pills */}
    {categories.map((cat) => {
      const isActive = selectedCategory === cat.name;
      return (
        <button
          key={cat.name}
          onClick={() => setSelectedCategory(isActive ? "" : cat.name)}
          className={`group relative flex-shrink-0 flex items-center p-1.5 pr-6 h-12 rounded-full border transition-all duration-500 snap-center
            ${isActive 
              ? "bg-white/10 border-[#d9ff00] text-white shadow-[0_10px_20px_-10px_rgba(217,255,0,0.3)] scale-105" 
              : "bg-white/5 border-white/10 text-white/40 hover:border-white/20 backdrop-blur-sm"
            }`}
        >
          {/* Circular Mini Image - Improved contrast and scaling */}
          <div className={`relative w-9 h-9 rounded-full overflow-hidden border-2 transition-all duration-500 
            ${isActive ? "border-[#d9ff00] rotate-3" : "border-white/5 grayscale opacity-50 group-hover:opacity-100 group-hover:grayscale-0"}`}>
            <img 
              src={cat.image} 
              alt={cat.name} 
              className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110" 
            />
          </div>
          
          <span className="ml-3 text-xs font-bold uppercase tracking-widest whitespace-nowrap">
            {cat.name}
          </span>

          {/* Active indicator - Subtle glowing line instead of dot */}
          {isActive && (
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1/2 h-[2px] bg-[#d9ff00] blur-[1px]" />
          )}
        </button>
      );
    })}
  </div>
</section>

      {/* ===== VENUES SECTION ===== */}
      <section className="px-6 pb-32 mx-auto relative z-10 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVenues.length > 0 ? (
            filteredVenues.map((venue) => (
              <div
                key={venue.id}
                className="group relative bg-white/[0.02] backdrop-blur-md rounded-[48px] overflow-hidden border border-white/5 hover:border-[#d9ff00]/50 transition-all duration-700 hover:-translate-y-3 shadow-2xl flex flex-col"
              >
                {/* Tactical Glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#d9ff00]/10 blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="relative aspect-[4/3] m-4 overflow-hidden rounded-[36px]">
                  <img src={venue.image} className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110" alt={venue.name} />
                  <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-2xl flex items-center gap-2 border border-white/10">
                    <Star size={10} fill="#d9ff00" className="text-[#d9ff00]" />
                    <span className="text-[11px] font-black">{venue.rating}</span>
                  </div>
                </div>

                <div className="p-8 pt-2 flex flex-col flex-1">
                  <h3 className="text-3xl font-black italic uppercase tracking-tighter text-white leading-none mb-4 group-hover:text-[#d9ff00] transition-colors">
                    {venue.name}
                  </h3>
                  
                  <div className="flex items-center gap-4 mb-8">
                    <div className="flex items-center gap-2 text-white text-[10px] font-black uppercase tracking-widest">
                      <MapPin size={12} className="text-[#d9ff00]" />
                      {venue.area}
                    </div>
                    <div className="flex items-center gap-2 text-white text-[10px] font-black uppercase tracking-widest">
                      <Clock size={12} className="text-[#d9ff00]" />
                      {venue.openTime}
                    </div>
                  </div>

                  <div className="mt-auto flex items-center justify-between bg-white/5 p-4 rounded-[24px] border border-white/5">
                    <div>
                      <p className="text-[8px] font-black text-white uppercase tracking-[0.2em] mb-1">Per Hour</p>
                      <span className="text-2xl font-black text-[#d9ff00] italic">PKR {venue.price}</span>
                    </div>
                    <button
                      onClick={() => router.push(`/venue/${venue.id}`)}
                      className="h-12 w-12 bg-[#d9ff00] hover:bg-white text-black rounded-2xl transition-all active:scale-90 flex items-center justify-center shadow-lg shadow-[#d9ff00]/20"
                    >
                      <ChevronRight size={24} strokeWidth={3} />
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full py-32 text-center bg-white/[0.02] rounded-[48px] border border-dashed border-white/10">
              <p className="text-white/20 text-2xl font-black italic uppercase tracking-[0.2em]">
                Scanning Karachi... 0 Venues Found
              </p>
            </div>
          )}
        </div>
      </section>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        .mask-fade-edges {
          mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
}