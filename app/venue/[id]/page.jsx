"use client";

import { useParams, useRouter } from "next/navigation";
import { ChevronLeft, Share2, Heart, MapPin, Zap } from "lucide-react";
import Header from "@/components/Header";
import VenueInfo from "@/components/VenueInfo";
import VenueHero from "@/components/VenueHero"; // This now handles the integrated carousel
import VenueMap from "@/components/VenueMap";
import { venues } from "@/data/venues";

export default function VenueDetailsPage() {
  const params = useParams();
  const router = useRouter();
  const venue = venues.find((v) => v.id === parseInt(params.id));

  if (!venue) {
    return (
      <div className="min-h-screen bg-[#080415] text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-black italic uppercase tracking-tighter mb-6">Arena Missing</h1>
          <button
            onClick={() => router.push("/")}
            className="bg-[#d9ff00] text-black px-10 py-4 rounded-full font-black uppercase tracking-widest hover:bg-white transition-all"
          >
            Back to Base
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#080415] text-white overflow-x-hidden pb-20">
      <Header />

      <main className="max-w-[1400px] mx-auto px-4 lg:px-6">
        
        {/* ===== TOP NAVIGATION BAR ===== */}
        <div className="flex items-center justify-between py-6">
          {/* <button
            onClick={() => router.push("/")}
            className="group flex items-center gap-3 text-white/40 hover:text-[#d9ff00] transition-all text-[10px] font-black uppercase tracking-[0.3em]"
          >
            <div className="bg-white/5 border border-white/10 p-2 rounded-xl group-hover:border-[#d9ff00]/50">
              <ChevronLeft size={16} />
            </div>
            Back to Arenas
          </button> */}

          {/* <div className="flex items-center gap-3">
             <button className="p-3 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors">
                <Share2 size={18} />
             </button>
             <button className="p-3 bg-white/5 border border-white/10 rounded-xl hover:text-red-500 transition-colors">
                <Heart size={18} />
             </button>
          </div> */}
        </div>

        {/* ===== INTEGRATED MEDIA STACK (Hero + Carousel + Thumbnails) ===== */}
        {/* ===== INTEGRATED MEDIA STACK (Hero + Carousel + Thumbnails) ===== */}
<div className="relative mb-10 group">
  <div className="rounded-[40px] overflow-hidden border border-white/10 bg-[#120c24] shadow-2xl">
    {/* VenueHero now acts as the master container for carousel */}
    <VenueHero venue={venue} />
  </div>

  {/* Secure Spot Button + Quick Info */}
  <div className="mt-6 md:mt-8 flex flex-col md:flex-row items-start md:items-center justify-between bg-[#1a162e]/90 backdrop-blur-2xl border border-white/10 p-6 rounded-[28px] shadow-2xl">
    
    {/* Venue Info */}
    <div className="flex items-center gap-6 mb-4 md:mb-0">
      <div>
        <h1 className="text-3xl font-black italic uppercase tracking-tighter text-white leading-none">
          {venue.name}
        </h1>
        <p className="flex items-center gap-2 text-slate-400 text-[10px] font-bold uppercase mt-2">
          <MapPin size={12} className="text-[#d9ff00]" /> {venue.area}, Karachi
        </p>
      </div>
      <div className="h-10 w-px bg-white/10" />
      <div>
        <p className="text-[9px] font-black text-slate-500 uppercase mb-1">Price Starts At</p>
        <p className="text-xl font-black text-[#d9ff00] italic">Rs. {venue.price}/hr</p>
      </div>
    </div>

    {/* Secure Spot Button */}
    <button className="bg-[#d9ff00] text-black px-8 py-4 rounded-2xl font-black uppercase text-xs flex items-center gap-2 hover:bg-white transition-all shadow-lg shadow-[#d9ff00]/10">
      <Zap size={16} fill="black" /> Secure Spot
    </button>
  </div>
</div>


        {/* ===== TACTICAL DATA GRID ===== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-16 md:mt-20">
          
          {/* LEFT: Core Booking & Info (8 Cols) */}
          <div className="lg:col-span-8 space-y-8">
     <VenueInfo venue={venue} />
          </div>

          {/* RIGHT: Map & Location Context (4 Cols) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-[#120c24] border border-white/10 rounded-[32px] p-2 overflow-hidden shadow-xl group">
                <div className="p-4">
                    <h3 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-1">Arena Location</h3>
                    <p className="text-sm font-bold italic">{venue.area}</p>
                </div>
                <div className="rounded-[24px] overflow-hidden  transition-all duration-700">
                    <VenueMap venue={venue} />
                </div>
            </div>
            
            {/* Promo Card */}
            <div className="bg-gradient-to-br from-[#d9ff00] to-[#b8d900] p-8 rounded-[32px] text-black">
                <h4 className="font-black text-2xl italic uppercase leading-none mb-2">Member <br />Discount?</h4>
                <p className="text-sm font-bold opacity-70 mb-4">Get 10% off on your first midnight slot booking.</p>
                <div className="text-[10px] font-black uppercase tracking-widest border-b-2 border-black/20 inline-block">Learn More</div>
            </div>
          </div>

        </div>
      </main>

      {/* Background Branding */}
      <div className="fixed -bottom-20 -left-20 pointer-events-none opacity-[0.02] select-none">
        <h2 className="text-[25rem] font-black italic leading-none">{venue.sport}</h2>
      </div>
    </div>
  );
}