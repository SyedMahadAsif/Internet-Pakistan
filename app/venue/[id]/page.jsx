"use client";

import { useParams, useRouter } from "next/navigation";
import { ChevronLeft, Share2, Heart, MapPin, Zap } from "lucide-react";
import Header from "@/components/Header";
import VenueInfo from "@/components/VenueInfo";
import VenueHero from "@/components/VenueHero"; 
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
    <div className="min-h-screen bg-[#080415] text-white overflow-x-hidden pb-20 selection:bg-[#d9ff00] selection:text-black">
      <Header />

      <main className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ===== TOP NAVIGATION BAR ===== */}
        <div className="flex items-center justify-between py-6">
        
        </div>

        {/* ===== INTEGRATED MEDIA STACK ===== */}
        <section className="relative mb-12">
          <div className="rounded-[32px] md:rounded-[48px] overflow-hidden border border-white/10 bg-[#120c24] shadow-2xl">
            <VenueHero venue={venue} />
          </div>

          {/* Secure Spot Bar - Re-integrated with improved visibility */}
          <div className="mt-8 flex flex-col md:flex-row items-center justify-between bg-[#1a162e]/80 backdrop-blur-xl border border-white/10 p-6 md:p-8 rounded-[32px] shadow-2xl gap-6">
            <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
              <div>
                <h1 className="text-3xl md:text-5xl font-black italic uppercase tracking-tighter text-white leading-none mb-2">
                  {venue.name}
                </h1>
                <p className="flex items-center justify-center md:justify-start gap-2 text-slate-400 text-xs font-bold uppercase">
                  <MapPin size={14} className="text-[#d9ff00]" /> {venue.area}, Karachi
                </p>
              </div>
              <div className="hidden md:block h-12 w-px bg-white/10" />
             
            </div>

             <div>
                <p className="text-[10px] font-black text-slate-500 uppercase mb-1">Price Starts At</p>
                <p className="text-2xl font-black text-[#d9ff00] italic">Rs. {venue.price}<span className="text-xs opacity-60 ml-1">/hr</span></p>
              </div>
          </div>
        </section>

        {/* ===== TACTICAL DATA GRID ===== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mt-12">
          
          {/* LEFT: Core Booking & Info */}
          <div className="lg:col-span-8 space-y-10">
                <VenueInfo venue={venue} />
          </div>

          {/* RIGHT: Map & Location Context */}
          <aside className="lg:col-span-4 space-y-6">
            <div className="bg-[#120c24] border border-white/10 rounded-[32px] p-2 overflow-hidden shadow-xl">
                <div className="p-5">
                    <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-1">Arena Location</h3>
                    <p className="text-lg font-bold italic text-white uppercase">{venue.area}</p>
                </div>
                <div className="rounded-[24px] overflow-hidden aspect-square lg:aspect-auto lg:min-h-[350px] bg-white/5">
                    <VenueMap venue={venue} />
                </div>
            </div>
            
            {/* Promo Card */}
            <div className="bg-gradient-to-br from-[#d9ff00] to-[#b8d900] p-8 rounded-[32px] text-black relative overflow-hidden group">
                <div className="relative z-10">
                  <h4 className="font-black text-2xl italic uppercase leading-tight mb-3">Member <br />Discount?</h4>
                  <p className="text-sm font-bold opacity-80 mb-6 max-w-[200px]">Get 10% off on your first midnight slot booking.</p>
                  <button className="text-[10px] font-black uppercase tracking-widest border-b-2 border-black/40 hover:border-black transition-all">
                    Learn More
                  </button>
                </div>
                {/* Decorative background icon */}
                <Zap className="absolute -right-6 -bottom-6 w-32 h-32 opacity-10 -rotate-12 group-hover:rotate-0 transition-transform duration-500" />
            </div>
          </aside>

        </div>
      </main>

      {/* Background Branding - Fixed z-index so it doesn't block clicks */}
      <div className="fixed -bottom-20 -left-20 pointer-events-none opacity-[0.03] select-none z-0">
        <h2 className="text-[25rem] font-black italic leading-none uppercase tracking-tighter">
          {venue.sport}
        </h2>
      </div>
    </div>
  );
}