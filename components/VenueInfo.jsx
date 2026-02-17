"use client";

import { useState, useMemo } from "react";
import { 
  ChevronRight, MapPin, Activity, ChevronDown, User, Smartphone, Calendar, Clock, CheckCircle2 
} from "lucide-react";

export default function VenueBookingPage({ venue }) {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState("");
  const [formData, setFormData] = useState({ name: "", phone: "" });
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
      time: selectedTime,
      phone: formData.phone
    });
    
    window.location.href = `/confirmation?${params.toString()}`;
  };

  return (
    <div className="min-h-screen  text-white p-4 md:p-12 font-sans">
      {/* HEADER */}
      <div className="max-w-5xl mx-auto mb-6 md:mb-10 text-center md:text-left">
        <h1 className="text-3xl md:text-6xl font-black italic uppercase tracking-tighter mb-2">
          Secure Your <span className="text-[#d9ff00]">Booking</span>
        </h1>
        <p className="text-white font-bold tracking-widest text-[10px] md:text-xs uppercase px-4 md:px-0">
          Complete the form below to finalize your session at {venue.name}
        </p>
      </div>

      <div className="max-w-5xl mx-auto bg-[#110c1d] border border-white/10 rounded-[1.5rem] md:rounded-[2rem] overflow-hidden flex flex-col md:flex-row shadow-2xl">
        
        {/* LEFT SIDE: VENUE INFO */}
        <div className="w-full md:w-5/12 p-6 md:p-8 bg-gradient-to-br from-[#1a1329] to-[#110c1d] border-b md:border-b-0 md:border-r border-white/10 flex flex-col">
          <div className="flex items-center gap-4 mb-6 md:mb-8">
            
            <div>
              <p className="text-[10px] font-black text-[#d9ff00] uppercase tracking-widest leading-tight">Selected Venue</p>
              <h2 className="text-lg md:text-xl font-bold uppercase leading-none">{venue.name}</h2>
            </div>
          </div>

          <div className="space-y-4 md:space-y-6 flex-grow">
            <div className="flex items-center gap-3 text-white/70">
              <MapPin className="text-[#d9ff00]" size={18} />
              <p className="text-sm font-medium">{venue.area}</p>
            </div>

            <div className="p-4 md:p-6 bg-black/40 border border-white/5 rounded-2xl">
              <p className="text-[10px] font-bold text-white uppercase tracking-[0.2em] mb-2">Pricing Details</p>
              <div className="flex justify-between items-baseline">
                <span className="text-2xl md:text-3xl font-black italic text-white">PKR {venue.price}</span>
                <span className="text-[10px] font-black text-[#d9ff00]">TOTAL</span>
              </div>
            </div>
          </div>

          
        </div>

        {/* RIGHT SIDE: THE FORM */}
        <div className="w-full md:w-7/12 p-6 md:p-10 bg-black/20">
          <div className="space-y-6 md:space-y-8">
            
            {/* STEP 1: DATE & TIME */}
            <section className="relative z-[60]">
              <div className="flex items-center gap-2 mb-4">
                <span className="h-5 w-5 rounded-full bg-[#d9ff00] text-black text-[10px] flex items-center justify-center font-black">1</span>
                <h3 className="text-[11px] font-black uppercase tracking-[0.2em] text-white/80">Select Schedule</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="relative">
                  <button 
                    type="button"
                    onClick={() => {setDateOpen(!dateOpen); setTimeOpen(false);}}
                    className={`w-full bg-[#1c1629] border transition-all h-14 rounded-xl px-4 flex items-center justify-between text-sm font-bold ${selectedDate ? 'border-[#d9ff00]/40 ring-1 ring-[#d9ff00]/20' : 'border-white/10'}`}
                  >
                    <div className="flex items-center gap-3">
                      <Calendar size={18} className={selectedDate ? 'text-[#d9ff00]' : 'text-white/20'} />
                      {selectedDate ? selectedDate.display : "Pick Date"}
                    </div>
                    <ChevronDown size={16} className={dateOpen ? 'rotate-180 text-[#d9ff00]' : ''} />
                  </button>
                  {dateOpen && (
                    <div className="absolute top-full left-0 w-full mt-2 bg-[#1c1629] border border-white/20 rounded-xl z-[70] max-h-48 overflow-y-auto shadow-2xl backdrop-blur-xl">
                      {dates.map((d, i) => (
                        <div key={i} onClick={() => {setSelectedDate(d); setDateOpen(false);}} className="p-4 hover:bg-[#d9ff00] hover:text-black cursor-pointer font-bold border-b border-white/5 text-sm transition-colors">{d.display}</div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="relative">
                  <button 
                    type="button"
                    onClick={() => {setTimeOpen(!timeOpen); setDateOpen(false);}}
                    className={`w-full bg-[#1c1629] border transition-all h-14 rounded-xl px-4 flex items-center justify-between text-sm font-bold ${selectedTime ? 'border-[#d9ff00]/40 ring-1 ring-[#d9ff00]/20' : 'border-white/10'}`}
                  >
                    <div className="flex items-center gap-3">
                      <Clock size={18} className={selectedTime ? 'text-[#d9ff00]' : 'text-white/20'} />
                      {selectedTime || "Pick Time"}
                    </div>
                    <ChevronDown size={16} className={timeOpen ? 'rotate-180 text-[#d9ff00]' : ''} />
                  </button>
                  {timeOpen && (
                    <div className="absolute top-full left-0 w-full mt-2 bg-[#1c1629] border border-white/20 rounded-xl z-[70] max-h-48 overflow-y-auto shadow-2xl backdrop-blur-xl">
                      {timeSlots.map((slot) => (
                        <div key={slot} onClick={() => {setSelectedTime(slot); setTimeOpen(false);}} className="p-4 hover:bg-[#d9ff00] hover:text-black cursor-pointer font-bold border-b border-white/5 text-sm transition-colors">{slot}</div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </section>

            {/* STEP 2: CONTACT */}
            <section className="relative z-[50]">
              <div className="flex items-center gap-2 mb-4">
                <span className="h-5 w-5 rounded-full bg-[#d9ff00] text-black text-[10px] flex items-center justify-center font-black">2</span>
                <h3 className="text-[11px] font-black uppercase tracking-[0.2em] text-white/80">Contact Information</h3>
              </div>
              <div className="space-y-3">
                <div className="relative group">
                  <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-[#d9ff00] transition-colors" />
                  <input 
                    className="w-full bg-[#1c1629] border border-white/10 text-white text-base font-medium h-14 pl-12 pr-4 rounded-xl outline-none focus:border-[#d9ff00]/50 focus:ring-1 focus:ring-[#d9ff00]/20 transition-all placeholder:text-white/20" 
                    placeholder="Enter Full Name" 
                    onChange={(e) => setFormData({...formData, name: e.target.value})} 
                  />
                </div>
                <div className="relative group">
                  <Smartphone size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-[#d9ff00] transition-colors" />
                  <input 
                    type="tel"
                    className="w-full bg-[#1c1629] border border-white/10 text-white text-base font-medium h-14 pl-12 pr-4 rounded-xl outline-none focus:border-[#d9ff00]/50 focus:ring-1 focus:ring-[#d9ff00]/20 transition-all placeholder:text-white/20" 
                    placeholder="WhatsApp Number" 
                    onChange={(e) => setFormData({...formData, phone: e.target.value})} 
                  />
                </div>
              </div>
            </section>

            <button
              disabled={!selectedDate || !selectedTime || !formData.name || !formData.phone}
              onClick={handleFinalize}
              className="w-full bg-[#d9ff00] disabled:bg-white/5 disabled:text-white/20 disabled:cursor-not-allowed text-black h-16 rounded-xl font-black uppercase text-xs tracking-[0.2em] transition-all active:scale-[0.98] flex items-center justify-center gap-3 mt-4 shadow-[0_10px_40px_rgba(217,255,0,0.15)]"
            >
              Confirm Booking Details <CheckCircle2 size={20} strokeWidth={2.5} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}