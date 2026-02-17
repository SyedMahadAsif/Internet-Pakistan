"use client";

import { useState, useEffect } from "react";
import { MessageCircle, ArrowLeft, ShieldCheck, MapPin, Calendar, Clock, Phone, Mail, Tag } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function ConfirmationPage() {
  const [mounted, setMounted] = useState(false);
  const [bgIndex, setBgIndex] = useState(0);
  const [bookingData, setBookingData] = useState({
    name: "",
    email: "",
    venue: "",
    area: "",
    date: "",
    time: "",
    phone: "",
    price: ""
  });
  const [protocolId, setProtocolId] = useState("");

  const backgrounds = [
    "/images/background.jpg",
    "/images/background2.png",
    "/images/background3.jpg",
    "/images/background4.jpg",
  ];

  useEffect(() => {
    setMounted(true);
    
    // 1. Get ALL data from URL
    const params = new URLSearchParams(window.location.search);
    setBookingData({
      name: params.get("name") || "N/A",
      email: params.get("email") || "N/A",
      venue: params.get("venue") || "Venue",
      area: params.get("area") || "Area",
      date: params.get("date") || "TBD",
      time: params.get("time") || "TBD",
      phone: params.get("phone") || "N/A",
      price: params.get("price") || "0"
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
              index === bgIndex ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url(${src})` }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-[#080415]/95 via-[#080415]/70 to-[#080415]" />
      </div>

      {/* CONTENT CARD */}
      <div className="relative z-10 max-w-md w-full animate-in fade-in zoom-in duration-700 rounded-xl">
        <div className="bg-black/60 backdrop-blur-2xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
          
          {/* HEADER */}
         <div className="bg-[#25D366]  px-4 py-3 flex items-center justify-center gap-3 text-center rounded-xl">
  
  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-black/10 text-black">
    <FaWhatsapp 
      size={22} 
      className="animate-pulse"
    />
  </div>

  <h1 className="text-lg md:text-xl font-black text-black uppercase italic tracking-tight whitespace-nowrap">
    Check WhatsApp
  </h1>

</div>


          <div className="p-6 space-y-6">
            {/* ALERT BOX */}
            <div className="bg-[#d9ff00]/10 border border-[#d9ff00]/20 rounded-2xl p-4">
              <p className="text-white text-sm leading-relaxed text-center">
                Your booking for <span className="text-[#d9ff00] font-bold uppercase">{bookingData.venue}</span> is being processed. 
                <span> We will contact you on WhatsApp shortly.</span>
              </p>
            </div>

            {/* TACTICAL DATA GRID */}
            <div className="grid grid-cols-2 gap-4 py-2">
              <DataField label="Name" value={bookingData.name} />
              <DataField label="Phone" value={bookingData.phone} />
              <div className="col-span-2">
                <DataField label="Email" value={bookingData.email} />
              </div>
              <DataField label="Area" value={bookingData.area} />
              <DataField label="Price" value={`Rs. ${bookingData.price}`} highlight />
              <DataField label="Date" value={bookingData.date} highlight />
              <DataField label="Time" value={bookingData.time} highlight />
            </div>

            {/* ACTION BUTTON */}
            <div className="pt-2">
              <button 
                onClick={() => window.location.href = "/"}
                className="w-full bg-white/5 hover:bg-white/10 border border-white/10 text-white py-4 rounded-2xl font-black uppercase tracking-widest text-[10px] transition-all flex items-center justify-center gap-2 group"
              >
                 <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> 
                 Back to Main Menu
              </button>
            </div>

           
          </div>
        </div>
      </div>
    </div>
  );
}

// Sub-component for clean data layout
function DataField({ label, value, highlight = false }) {
  return (
    <div className="flex flex-col gap-1 border-l border-white/10 pl-3">
      <span className="text-[8px] text-white uppercase tracking-[0.2em]">{label}</span>
      <span className={`text-[11px] font-bold uppercase truncate ${highlight ? "text-[#d9ff00]" : "text-white"}`}>
        {value}
      </span>
    </div>
  );
}