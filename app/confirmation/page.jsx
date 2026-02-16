"use client";

import { useState, useEffect } from "react";
import { MessageCircle, CheckCircle2, ArrowRight, ArrowLeft } from "lucide-react";

export default function ConfirmationPage() {
  const [mounted, setMounted] = useState(false);
  const [bgIndex, setBgIndex] = useState(0);
  const [bookingData, setBookingData] = useState({ name: "", venue: "", date: "", time: "" });
  const [protocolId, setProtocolId] = useState("");

  const backgrounds = [
    "/images/background.jpg",
    "/images/background2.png",
    "/images/background3.jpg",
    "/images/background4.jpg",
  ];

  useEffect(() => {
    setMounted(true);
    
    // 1. Get data from URL
    const params = new URLSearchParams(window.location.search);
    setBookingData({
      name: params.get("name") || "Personnel",
      venue: params.get("venue") || "Venue",
      date: params.get("date") || "TBD",
      time: params.get("time") || "TBD"
    });

    // 2. Set Protocol ID
    setProtocolId(Math.random().toString(36).substring(7).toUpperCase());

    // 3. Background Timer
    const timer = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % backgrounds.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [backgrounds.length]);

  if (!mounted) return <div className="min-h-screen bg-[#05020a]" />;

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center p-4 overflow-hidden font-sans">
      
      {/* BACKGROUND ENGINE */}
      <div className="absolute inset-0 z-0">
        {backgrounds.map((src, index) => (
          <div
            key={src}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out bg-cover bg-center ${
              index === bgIndex ? "" : "opacity-0"
            }`}
            style={{ backgroundImage: `url(${src})` }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-[#080415]/90 via-[#080415]/60 to-[#080415]" />
      </div>

      {/* CONTENT CARD */}
      <div className="relative z-10 max-w-sm w-full animate-in fade-in zoom-in duration-700">
        <div className="bg-black/60 backdrop-blur-xl border border-white/10 rounded-[40px] overflow-hidden shadow-2xl">
          
          {/* HEADER */}
          <div className="bg-[#25D366] p-6 text-center">
            <div className="inline-flex p-3 rounded-2xl bg-black/10 mb-3 text-black">
              <MessageCircle size={28} fill="currentColor" className="animate-pulse" />
            </div>
            <h1 className="text-xl font-black text-black uppercase italic tracking-tighter">Check WhatsApp</h1>
          </div>

          <div className="p-8 space-y-6">
            {/* ALERT BOX */}
            <div className="bg-white/5 border border-white/5 rounded-2xl p-4 text-center">
              <p className="text-white/60 text-xs italic">
                Your booking request for <span className="text-[#d9ff00] font-bold">{bookingData.venue}</span> has been received.
we will confirm your booking via whatsapp in few minutes.
              </p>
            </div>

            {/* TACTICAL DATA TABLE */}
            <div className="space-y-3 border-y border-white/10 py-5">
              <div className="flex justify-between items-center">
                <span className="text-[9px] text-white/30 uppercase tracking-[0.2em]">Personnel</span>
                <span className="text-xs font-bold text-white uppercase">{bookingData.name}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[9px] text-white/30 uppercase tracking-[0.2em]">Deployment</span>
                <span className="text-xs font-bold text-white uppercase">{bookingData.date}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[9px] text-white/30 uppercase tracking-[0.2em]">Time Window</span>
                <span className="text-xs font-bold text-[#d9ff00] uppercase">{bookingData.time}</span>
              </div>
            </div>

            {/* STATUS & BUTTON */}
            <div className="space-y-4">
              

              <button 
                onClick={() => window.location.href = "/"}
                className="w-full bg-white/10 hover:bg-white/20 text-white py-4 rounded-2xl font-black uppercase tracking-widest text-[10px] transition-all flex items-center justify-center gap-2"
              >
                 <ArrowLeft size={14} /> Back to Home
              </button>
            </div>

            {/* FOOTER */}
            
          </div>
        </div>
      </div>
    </div>
  );
}