"use client";

import { Star, Clock, MapPin, Phone, MessageCircle, Target, ShieldCheck, Zap, Activity, Info } from "lucide-react";

export default function VenueInfo({ venue }) {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      `Hi, I'm interested in booking ${venue.name} in ${venue.area}.`
    );
    window.open(`https://wa.me/${venue.phone.replace(/\D/g, "")}?text=${message}`, "_blank");
  };

  return (
    <div className="bg-[#080415] border border-white/10 relative overflow-hidden rounded-[32px]">
      
      {/* 1. HEADER SECTION (Tactical ID) */}
      <div className="p-8 pb-4">
        <div className="flex justify-between items-start mb-6">
          <div className="flex flex-col gap-2">
            <div className="inline-flex items-center gap-2 bg-[#d9ff00] text-black px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] [clip-path:polygon(0_0,100%_0,90%_100%,0%_100%)]">
              <Activity size={12} />
              Operational Dossier
            </div>
            <h1 className="text-5xl font-black uppercase italic tracking-tighter leading-none text-white mt-2">
              {venue.name}
            </h1>
          </div>
          
          <div className="bg-white/5 border border-white/10 p-4 rounded-2xl flex flex-col items-end">
            <div className="flex items-center gap-1 text-[#d9ff00]">
              <Star size={16} fill="currentColor" />
              <span className="text-xl font-black">{venue.rating}</span>
            </div>
            <span className="text-[8px] text-white/40 uppercase font-black tracking-widest mt-1">Global Rating</span>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-4 text-white/40 font-bold text-[10px] uppercase tracking-[0.3em] mb-8">
          <span className="flex items-center gap-2 border-r border-white/10 pr-4">
            <MapPin size={12} className="text-[#d9ff00]" /> {venue.area}
          </span>
          <span className="flex items-center gap-2 border-r border-white/10 pr-4">
            <Target size={12} className="text-[#d9ff00]" /> {venue.sport}
          </span>
          <span className="text-[#d9ff00]/60 italic">Status: Available</span>
        </div>

        <div className="relative p-6 bg-white/[0.02] border border-white/5 rounded-2xl">
          <Info size={16} className="absolute top-4 right-4 text-white/10" />
          <p className="text-sm text-white/60 leading-relaxed font-medium italic border-l-2 border-[#d9ff00] pl-6">
            {venue.description}
          </p>
        </div>
      </div>

      {/* 2. DATA GRID (Monochrome Shift) */}
      <div className="px-8 py-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white/5 border border-white/5 p-5 rounded-2xl flex flex-col gap-1 hover:border-[#d9ff00]/30 transition-colors">
            <div className="flex items-center gap-2 text-white/30">
              <Clock size={14} />
              <span className="text-[9px] font-black uppercase tracking-widest text-[#d9ff00]/60">Operational Window</span>
            </div>
            <p className="text-md font-black text-white">{venue.openTime}</p>
          </div>

          <div className="bg-white/5 border border-white/5 p-5 rounded-2xl flex flex-col gap-1 hover:border-[#d9ff00]/30 transition-colors">
            <div className="flex items-center gap-2 text-white/30">
              <Zap size={14} />
              <span className="text-[9px] font-black uppercase tracking-widest text-[#d9ff00]/60">Booking Priority</span>
            </div>
            <p className="text-md font-black text-[#d9ff00]">INSTANT VERIFICATION</p>
          </div>
        </div>
      </div>

      {/* 3. PRICE MONOLITH */}
      <div className="px-8 py-6">
        <div className="relative bg-[#d9ff00] p-8 flex items-center justify-between rounded-[24px] overflow-hidden group">
            <div className="relative z-10">
                <p className="text-[10px] font-black text-black/40 uppercase tracking-widest mb-1">Standard Hourly Rate</p>
                <div className="flex items-baseline gap-1">
                    <span className="text-xs font-bold text-black/60">PKR</span>
                    <span className="text-5xl font-black text-black tracking-tighter italic leading-none">{venue.price}</span>
                </div>
            </div>
            {/* Visual Flair */}
            <div className="absolute right-0 top-0 h-full w-32 bg-black/5 [clip-path:polygon(20%_0,100%_0,100%_100%,0%_100%)]" />
            <ShieldCheck size={48} className="relative z-10 text-black/20" />
        </div>
      </div>

      {/* 4. ACTION TERMINAL */}
      <div className="p-8 pt-2 space-y-4">
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={handleWhatsAppClick}
            className="flex-[1.5] bg-white hover:bg-[#d9ff00] text-black px-6 py-5 text-xs font-black uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-3 rounded-2xl shadow-xl active:scale-95"
          >
            <MessageCircle size={18} fill="currentColor" />
            Connect via WhatsApp
          </button>
          <button className="flex-1 bg-white/5 hover:bg-white/10 text-white px-6 py-5 text-[10px] font-black uppercase tracking-[0.2em] border border-white/10 transition-all rounded-2xl active:scale-95">
            View Policy
          </button>
        </div>

        {/* 5. FOOTER DETAILS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-white/5">
          <div className="flex items-center gap-4">
            <div className="bg-white/5 p-3 rounded-xl text-[#d9ff00]">
                <MapPin size={16} />
            </div>
            <span className="text-[10px] font-bold text-white/40 uppercase tracking-tight leading-tight">
                {venue.address}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-white/5 p-3 rounded-xl text-[#d9ff00]">
                <Phone size={16} />
            </div>
            <a href={`tel:${venue.phone}`} className="text-sm font-black text-white hover:text-[#d9ff00] transition tracking-tighter">
              {venue.phone}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}