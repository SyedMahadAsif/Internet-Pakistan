"use client";

import { Zap, MapPin, Calendar, ChevronRight, Star, Clock } from "lucide-react";
import SearchBar from "./SearchBar";
import { venues, categories } from "../data/venues"; 
import { useRouter } from "next/navigation";

import React, { useState, useEffect, useRef } from "react";
import { FaBolt } from "react-icons/fa";

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
    const venuesRef = useRef(null); // <- ref for venues section


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


  // scroll handler
  const scrollToVenues = () => {
    if (venuesRef.current) {
      venuesRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  
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



         <h1 className="text-4xl sm:text-4xl md:text-6xl font-black uppercase tracking-tighter italic mb-0 md:mb-4 lg:mb-4 leading-[0.85]">

  <span className="block md:inline">INSTANTLY</span>{" "}

  <span className="text-[#d9ff00] block md:inline">BOOK SPORTS VENUES</span>{" "}

  <span className="block md:inline">IN KARACHI</span>

</h1>





          <p className="hidden lg:block md:block text-white text-lg md:text-xl max-w-xl  leading-relaxed font-medium">

            Discover and play at the best sports arenas in Karachi. Real-time availability, zero phone calls.

          </p>



          {/* Search Bar */}

<SearchBar
  searchQuery={searchQuery}
  setSearchQuery={setSearchQuery}
  onExploreClick={scrollToVenues} // ✅ new prop
/>

        </div>

      </section>

     {/* ===== CATEGORIES SECTION ===== */}
<section className="px-8 sm:px-6 mx-auto max-w-7xl relative z-10 select-none py-3">
  {/* HEADER: Left Aligned */}
  <div className="flex flex-col mb-4">
    <div className="flex items-center gap-2">
      <div className="h-[2px] w-6 bg-[#d9ff00]" />
      <span className="text-[#d9ff00] text-[20px] font-black uppercase tracking-[0.3em]">
        Categories
      </span>
    </div>
  </div>

  {/* CATEGORY SCROLLER */}
  <div className="flex items-center gap-3 overflow-x-auto pb-6 no-scrollbar -mx-4 px-4 snap-x snap-mandatory scroll-smooth">
    
    {/* "ALL" TILE */}
    <button
      onClick={() => setSelectedCategory("")}
      className={`group relative flex-shrink-0 flex flex-col justify-between p-4 w-28 h-28 md:w-32 md:h-32 rounded-[24px] border transition-all duration-500 snap-start overflow-hidden
        ${selectedCategory === "" 
          ? "bg-[#d9ff00] border-[#d9ff00] text-black shadow-[0_20px_40px_-15px_rgba(217,255,0,0.3)]" 
          : "bg-[#120c24] border-white/10 text-white hover:border-[#d9ff00]/50"
        }`}
    >
      <div className="relative z-10">
        <Zap 
          size={24} 
          className={selectedCategory === "" ? "fill-black text-black" : "text-[#d9ff00]"} 
        />
      </div>
      <span className="relative z-10 text-[11px] font-black uppercase tracking-wider text-left leading-tight">
        All<br/>Arenas
      </span>
      
      {/* Background Icon Watermark */}
      <div className={`absolute -right-4 -bottom-4 transition-all duration-700 ${
        selectedCategory === "" ? "opacity-20 scale-110 rotate-12" : "opacity-5 scale-100"
      }`}>
        <Zap size={100} className={selectedCategory === "" ? "fill-black" : "fill-white"} />
      </div>
    </button>

    {/* CATEGORY TILES */}
    {categories.map((cat) => {
      const isActive = selectedCategory === cat.name;
      const Icon = cat.icon;

      return (
        <button
          key={cat.name}
          onClick={() => setSelectedCategory(isActive ? "" : cat.name)}
          className={`group relative flex-shrink-0 flex flex-col justify-between p-4 w-28 h-28 md:w-32 md:h-32 rounded-[24px] border transition-all duration-500 snap-start overflow-hidden
            ${isActive 
              ? "bg-[#d9ff00]  border-white text-black shadow-[0_20px_40px_-15px_rgba(255,255,255,0.2)] scale-[1.02]" 
              : "bg-[#120c24] border-white/10 text-white hover:bg-[#1a162e] hover:border-white/20"
            }`}
        >
          {/* Top Row: Icon & Status */}
          <div className="flex justify-between items-start relative z-10">
            <div className={`p-2 rounded-xl transition-all duration-500 ${
              isActive ? "bg-black text-white" : "bg-white/5 text-white/60 group-hover:bg-[#d9ff00] group-hover:text-black"
            }`}>
              <Icon size={20} />
            </div>
            {isActive && (
              <div className="w-1.5 h-1.5 bg-black rounded-full animate-ping mt-2 mr-1" />
            )}
          </div>

          {/* Bottom Row: Label */}
          <div className="flex flex-col items-start text-left relative z-10">
            <span className="text-[11px] font-black uppercase tracking-tight leading-none">
              {cat.name}
            </span>
            <span className="text-[8px] font-bold uppercase mt-1 opacity-50">
              {isActive ? "Selected" : "Browse"}
            </span>
          </div>

          {/* Background Icon Watermark */}
          <div className={`absolute -right-5 -bottom-5 transition-all duration-700 pointer-events-none ${
            isActive ? "opacity-15 scale-110 -rotate-12" : "opacity-[0.03] scale-100 group-hover:opacity-10 group-hover:rotate-6"
          }`}>
            <Icon size={110} />
          </div>
        </button>
      );
    })}
  </div>
</section>


      {/* ===== VENUES SECTION ===== */}
      <section ref={venuesRef} className="px-6 pb-32 mx-auto relative z-10 max-w-7xl">
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