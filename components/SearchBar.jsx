"use client";

import { Search, MapPin, Target, ChevronRight, ChevronDown, X } from "lucide-react";

export default function SearchBar({ searchQuery, setSearchQuery, onExploreClick }) {
  return (
    <div className="relative overflow-hidden py-8 md:py-12 px-4 md:px-6">
      {/* Background Decorative Element */}
      <Target size={200} className="absolute -top-20 -right-20 text-white/[0.02] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto">
        <div className="relative group max-w-5xl mx-auto">
          
          {/* TOP METADATA ROW */}
          <div className="hidden sm:flex items-center justify-between mb-4 px-4">
            <div className="flex items-center gap-3">
              <div className="h-[2px] w-10 bg-[#d9ff00]" />
              <h2 className="text-[10px] uppercase font-black tracking-[0.4em] text-white/40">
                Arena Discovery Engine
              </h2>
            </div>
          </div>

          {/* THE SEARCH CHASSIS */}
          <div className="bg-[#1a162e]/80 backdrop-blur-2xl p-1.5 md:p-2 rounded-[24px] md:rounded-full border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col md:flex-row items-stretch md:items-center gap-1 md:gap-2 transition-all duration-500 hover:border-white/20">
            
            {/* Input Section */}
            <div className="flex-[1.5] flex items-center gap-3 px-4 md:px-6 py-3 md:py-0 relative">
              <Search size={18} className="text-slate-500 shrink-0" />
              <input
                className="bg-transparent text-white text-sm md:text-base w-full focus:outline-none placeholder:text-slate-600 font-bold italic pr-8"
                placeholder="Find football, cricket..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              
              {/* CLEAR BUTTON (X) */}
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-2 md:right-4 p-1 rounded-full hover:bg-white/10 text-slate-500 hover:text-[#d9ff00] transition-all"
                >
                  <X size={16} strokeWidth={3} />
                </button>
              )}
            </div>

            {/* Vertical Divider */}
            <div className="hidden md:block h-10 w-px bg-white/10" />

            {/* Location Selector */}
            <button className="flex items-center justify-between gap-4 px-4 md:px-6 py-2 md:py-0 group/item">
              <div className="flex items-center gap-3">
                <MapPin size={16} className="text-slate-500 group-hover/item:text-[#d9ff00] transition-colors shrink-0" />
                <div className="text-left">
                  <p className="hidden md:block text-[8px] uppercase font-black text-slate-500 leading-none mb-1">Area</p>
                  <p className="text-xs md:text-sm font-black text-white italic tracking-tight">Karachi, PK</p>
                </div>
              </div>
              {/* <ChevronDown size={12} className="text-slate-600" /> */}
            </button>

            {/* THE BIG ACTION BUTTON */}
            <button 
              onClick={onExploreClick} 
              className="bg-[#d9ff00] text-black font-black px-8 md:px-12 py-3.5 md:py-5 rounded-[18px] md:rounded-full flex items-center justify-center gap-2 md:gap-3 hover:bg-[#c4e600] transition-all active:scale-95 shadow-xl shadow-[#d9ff00]/20 group/btn"
            >
              <span className="tracking-tighter italic text-xs md:text-base">EXPLORE</span>
              <ChevronRight strokeWidth={4} className="w-4 h-4 md:w-5 md:h-5 group-hover/btn:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Bottom Labels */}
          <div className="mt-4 md:mt-6 flex flex-wrap justify-center gap-3 md:gap-6">
            {['Fast Booking', 'Zero Calls'].map((text, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="h-1 w-1 rounded-full bg-white/40" />
                <span className="text-[7px] md:text-[9px] font-black uppercase tracking-[0.2em] text-white/60">
                  {text}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}