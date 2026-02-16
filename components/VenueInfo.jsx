"use client";

import { useState, useMemo } from "react";
// Replace with your router of choice (e.g., import { useRouter } from 'next/navigation')
import { 
  ChevronRight, Smartphone, User, Mail, 
  Calendar, Clock, MapPin, Activity, ChevronDown 
} from "lucide-react";

export default function VenueBookingPage({ venue }) {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState("");
  const [formData, setFormData] = useState({ name: "", phone: "", email: "" });
  const [dateOpen, setDateOpen] = useState(false);
  const [timeOpen, setTimeOpen] = useState(false);

  const dates = useMemo(() => Array.from({ length: 10 }, (_, i) => {
    const d = new Date();
    d.setDate(d.getDate() + i);
    return {
      full: d.toDateString(),
      display: d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', weekday: 'short' })
    };
  }), []);

  const timeSlots = ["08:00 AM", "10:00 AM", "12:00 PM", "02:00 PM", "04:00 PM", "06:00 PM", "08:00 PM", "10:00 PM"];

  const handleFinalize = () => {
    const params = new URLSearchParams({
      name: formData.name,
      venue: venue.name,
      date: selectedDate?.display || "",
      time: selectedTime
    });
    
    window.location.href = `/confirmation?${params.toString()}`;
  };

  return (
    <div className="min-h-screen bg-[#05020a] text-white p-4 md:p-8 font-sans">
      <div className="max-w-4xl mx-auto bg-[#0d061a] border border-white/10 rounded-[40px] overflow-hidden flex flex-col md:flex-row shadow-2xl">
        
        {/* LEFT SIDEBAR: COMPACT VENUE INFO */}
        <div className="w-full md:w-5/12 p-6 bg-[#120a24] border-b md:border-b-0 md:border-r border-white/10 flex flex-col justify-between">
          <div>
            <div className="inline-flex items-center gap-1.5 bg-[#d9ff00] text-black px-2 py-0.5 rounded-full text-[8px] font-black uppercase tracking-wider mb-4">
              <Activity size={10} /> Live Status
            </div>
            <h1 className="text-2xl font-black uppercase italic tracking-tighter text-white mb-2 leading-none">
              {venue.name}
            </h1>
            <p className="flex items-center gap-1.5 text-white/30 font-bold uppercase text-[9px] tracking-[0.2em]">
              <MapPin size={10} className="text-[#d9ff00]" /> {venue.area}
            </p>
          </div>

          <div className="mt-8 bg-white/5 border border-white/5 rounded-2xl p-4">
            <p className="text-[8px] font-black text-white/20 uppercase tracking-[0.2em] mb-1">Standard Rate</p>
            <p className="text-xl font-black text-[#d9ff00] italic">PKR {venue.price}</p>
          </div>
        </div>

        {/* RIGHT SIDEBAR: BOOKING TERMINAL */}
        <div className="w-full md:w-7/12 p-6 flex flex-col space-y-5 min-h-[500px]">
          <h2 className="text-[9px] font-black text-[#d9ff00] uppercase tracking-[0.3em]">Phase 01 / Deployment</h2>

          {/* DATE SELECTOR */}
          <div className="relative">
            <label className="text-[9px] font-black text-white/30 uppercase mb-2 block tracking-widest">Date Selection</label>
            <button 
              onClick={() => {setDateOpen(!dateOpen); setTimeOpen(false);}}
              className="w-full bg-white/5 border border-white/10 text-white rounded-xl p-3 flex items-center justify-between text-xs font-bold"
            >
              {selectedDate ? selectedDate.display : "Choose Date"}
              <ChevronDown size={14} className={`text-white/20 ${dateOpen ? 'rotate-180' : ''}`} />
            </button>
            {dateOpen && (
              <div className="absolute top-full left-0 w-full mt-1 bg-[#1a1129] border border-white/10 rounded-xl z-50 max-h-40 overflow-y-auto shadow-2xl">
                {dates.map((d, i) => (
                  <div key={i} onClick={() => {setSelectedDate(d); setDateOpen(false);}} className="p-3 hover:bg-[#d9ff00] hover:text-black cursor-pointer font-bold border-b border-white/5 text-xs">{d.display}</div>
                ))}
              </div>
            )}
          </div>

          {/* TIME SELECTOR */}
          <div className="relative">
            <label className="text-[9px] font-black text-white/30 uppercase mb-2 block tracking-widest">Window Selection</label>
            <button 
              onClick={() => {setTimeOpen(!timeOpen); setDateOpen(false);}}
              className="w-full bg-white/5 border border-white/10 text-white rounded-xl p-3 flex items-center justify-between text-xs font-bold"
            >
              {selectedTime || "Choose Slot"}
              <ChevronDown size={14} className={`text-white/20 ${timeOpen ? 'rotate-180' : ''}`} />
            </button>
            {timeOpen && (
              <div className="absolute top-full left-0 w-full mt-1 bg-[#1a1129] border border-white/10 rounded-xl z-50 max-h-40 overflow-y-auto shadow-2xl">
                {timeSlots.map((slot) => (
                  <div key={slot} onClick={() => {setSelectedTime(slot); setTimeOpen(false);}} className="p-3 hover:bg-[#d9ff00] hover:text-black cursor-pointer font-bold border-b border-white/5 text-xs">{slot}</div>
                ))}
              </div>
            )}
          </div>

          {/* USER INFO INPUTS */}
          <div className="space-y-3 pt-2">
            <div className="bg-white/5 border border-white/10 p-4 rounded-xl">
              <label className="text-[8px] font-black text-white/30 uppercase block mb-1">Personnel Name</label>
              <input 
                className="bg-transparent w-full text-white text-sm font-bold outline-none placeholder:text-white/5" 
                placeholder="Required" 
                onChange={(e) => setFormData({...formData, name: e.target.value})} 
              />
            </div>
            <div className="bg-white/5 border border-white/10 p-4 rounded-xl">
              <label className="text-[8px] font-black text-white/30 uppercase block mb-1">WhatsApp Connection</label>
              <input 
                className="bg-transparent w-full text-white text-sm font-bold outline-none placeholder:text-white/5" 
                placeholder="03XXXXXXXXX" 
                onChange={(e) => setFormData({...formData, phone: e.target.value})} 
              />
            </div>
          </div>

          <div className="mt-auto pt-4">
            <button
              disabled={!selectedDate || !selectedTime || !formData.name || !formData.phone}
              onClick={handleFinalize}
              className="w-full bg-[#d9ff00] disabled:opacity-10 text-black py-4 rounded-xl font-black uppercase text-[10px] tracking-widest transition-all flex items-center justify-center gap-2"
            >
              Finalize Booking <ChevronRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}