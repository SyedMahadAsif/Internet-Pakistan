"use client";

import { Search, MapPin, Calendar, Target, SlidersHorizontal, ChevronRight, ChevronDown } from "lucide-react";

export default function SearchBar({ searchQuery, setSearchQuery, onExploreClick }) {
  return (
    <div className="relative overflow-hidden py-12 px-6">
      {/* Background Decorative Element */}
      <Target size={200} className="absolute -top-20 -right-20 text-white/[0.02] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto">
        <div className="relative group max-w-5xl mx-auto">
          
          {/* TOP METADATA ROW */}
          <div className="hidden md:block lg:block flex items-center justify-between mb-4 px-4">
            <div className="flex items-center gap-3">
              <div className="h-[2px] w-10 bg-[#d9ff00]" />
              <h2 className="text-[10px] uppercase font-black tracking-[0.4em] text-white/40">
                Arena Discovery Engine
              </h2>
            </div>
            <div className="hidden md:flex items-center gap-4 text-[10px] font-black uppercase text-[#d9ff00]/60 tracking-widest">
              {/* <span className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-[#d9ff00] animate-pulse" />
                Search Venues
              </span> */}
            </div>
          </div>

          {/* THE SEARCH CHASSIS (Based on your reference) */}
          <div className="bg-[#1a162e]/80 backdrop-blur-2xl p-2 rounded-[32px] md:rounded-full border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col md:flex-row items-stretch md:items-center gap-2 transition-all duration-500 hover:border-white/20">
            
            {/* Input Section */}
            <div className="flex-[1.5] flex items-center gap-4 px-6 py-4 md:py-0">
              <Search size={22} className="text-slate-500" />
              <input
                className="bg-transparent text-white text-base w-full focus:outline-none placeholder:text-slate-600 font-bold italic"
                placeholder="Find football, padel, cricket..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Vertical Divider */}
            <div className="hidden md:block h-10 w-px bg-white/10" />

            {/* Location Selector */}
            <button className="flex items-center justify-between gap-4 px-6 py-4 md:py-0 group/item">
              <div className="flex items-center gap-3">
                <MapPin size={18} className="text-slate-500 group-hover/item:text-[#d9ff00] transition-colors" />
                <div className="text-left">
                  <p className="text-[8px] uppercase font-black text-slate-500 leading-none mb-1">Area</p>
                  <p className="text-sm font-black text-white italic tracking-tight">Karachi, PK</p>
                </div>
              </div>
              <ChevronDown size={14} className="text-slate-600" />
            </button>

            {/* Vertical Divider */}
            <div className="hidden md:block h-10 w-px bg-white/10" />

            {/* Date Selector */}
            {/* <button className="flex items-center justify-between gap-4 px-6 py-4 md:py-0 group/item">
              <div className="flex items-center gap-3">
                <Calendar size={18} className="text-slate-500 group-hover/item:text-[#d9ff00] transition-colors" />
                <div className="text-left">
                  <p className="text-[8px] uppercase font-black text-slate-500 leading-none mb-1">Schedule</p>
                  <p className="text-sm font-black text-white italic tracking-tight whitespace-nowrap">Today</p>
                </div>
              </div>
              <ChevronDown size={14} className="text-slate-600" />
            </button> */}

            {/* Filter Toggle (Mobile/Tablet Only) */}
            {/* <button className="md:hidden flex items-center justify-center gap-2 py-4 text-slate-400 font-bold text-xs uppercase tracking-widest border-t border-white/5">
              <SlidersHorizontal size={14} /> Advanced Filters
            </button> */}

            {/* THE BIG ACTION BUTTON (Matches your reference) */}
            <button         onClick={onExploreClick} // ✅ scroll to venues
 className="bg-[#d9ff00] text-black font-black px-12 py-5 rounded-[26px] md:rounded-full flex items-center justify-center gap-3 hover:bg-[#c4e600] transition-all active:scale-95 shadow-xl shadow-[#d9ff00]/20 group/btn">
              <span className="tracking-tighter italic">EXPLORE</span>
              <ChevronRight size={20} strokeWidth={4} className="group-hover/btn:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Bottom Labels */}
          <div className="mt-6 flex flex-wrap justify-center gap-6 ">
            {['Fast Booking', 'No Hidden Fees', 'Zero Phone Calls'].map((text, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="h-1 w-1 rounded-full bg-white" />
                <span className="text-[9px] font-black uppercase tracking-[0.2em] text-white">
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