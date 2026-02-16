"use client";

import { MapPin, Star, Zap, Clock, Users, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function VenueCard({ venue }) {
  return (
    <Link href={`/venue/${venue.id}`} className="block h-full group">
      <div className="relative h-full bg-[#0f0a1e] border border-white/5 flex flex-col transition-all duration-500 hover:border-lime-400/50 hover:-translate-y-2 rounded-[28px] overflow-hidden shadow-2xl">
        
        {/* ===== THE NET BACKGROUND ===== */}
        {/* This SVG creates a subtle, repeating sports net pattern across the whole card */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
             style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 20 L40 20 M20 0 L20 40' fill='none' stroke='%23ffffff' stroke-width='1'/%3E%3C/svg%3E")`, backgroundSize: '20px 20px' }}>
        </div>

        {/* IMAGE SECTION */}
        <div className="relative h-52 w-full overflow-hidden">
          <div className="absolute top-4 left-4 z-20 flex flex-col gap-2">
            <div className="bg-lime-400 text-black px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-wider shadow-lg">
              {venue.sport}
            </div>
            <div className="bg-white/10 backdrop-blur-md text-white px-3 py-1 rounded-lg text-[9px] font-bold uppercase tracking-tight flex items-center gap-1.5 border border-white/10">
              <div className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-pulse" />
              Fast Filling
            </div>
          </div>

          <img
            src={venue.image}
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-80 group-hover:opacity-100"
            alt={venue.name}
          />

          {/* Bottom Gradient overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f0a1e] via-transparent to-transparent opacity-80" />
        </div>

        {/* CONTENT SECTION */}
        <div className="p-6 flex-1 flex flex-col relative z-10">
          <div className="mb-4">
            <div className="flex items-center gap-1.5 text-lime-400 mb-1">
              <MapPin size={12} />
              <span className="text-[10px] font-black uppercase tracking-[0.2em]">{venue.area}</span>
            </div>
            <h3 className="text-2xl font-black text-white leading-none italic uppercase tracking-tighter">
              {venue.name}
            </h3>
          </div>

          {/* FEATURE GRID */}
          <div className="grid grid-cols-2 gap-2 mb-6">
            <div className="flex items-center gap-2 bg-white/5 border border-white/5 p-2 rounded-2xl">
              <Zap size={14} className="text-lime-400 fill-lime-400" />
              <span className="text-[9px] font-bold text-white/70 uppercase leading-tight text-center w-full">Instant<br/>Book</span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 border border-white/5 p-2 rounded-2xl">
              <Users size={14} className="text-blue-400 fill-blue-400" />
              <span className="text-[9px] font-bold text-white/70 uppercase leading-tight text-center w-full">12<br/>Players</span>
            </div>
          </div>

          {/* PRICE & ACTION */}
          <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between">
            <div className="flex flex-col">
              <div className="flex items-center gap-1 mb-0.5">
                <Star size={10} fill="#d9ff00" className="text-lime-400" />
                <span className="text-[10px] font-bold text-white/40 uppercase">{venue.rating} Rating</span>
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-black text-white italic tracking-tighter">Rs.{venue.price}</span>
                <span className="text-[10px] font-bold text-white/40 uppercase">/hr</span>
              </div>
            </div>

            <div className="h-12 w-12 bg-lime-400 text-black rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:w-24 group-hover:gap-2 overflow-hidden shadow-[0_0_20px_rgba(163,230,53,0.2)]">
              <span className="hidden group-hover:block text-[11px] font-black uppercase">Book</span>
              <ChevronRight size={20} strokeWidth={3} />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}