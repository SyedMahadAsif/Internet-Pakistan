function VenueDetails({ venue, onClose }) {
  return (
    <div className="fixed inset-0 z-[100] flex justify-end">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity" onClick={onClose} />
      
      {/* Slide-over Content */}
      <div className="relative w-full max-w-2xl bg-[#080415] h-full shadow-2xl border-l border-white/10 overflow-y-auto animate-slide-left">
        {/* Header Image */}
        <div className="relative h-96">
          <img src={venue.image} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080415] via-transparent to-transparent" />
          <button onClick={onClose} className="absolute top-8 left-8 p-3 bg-black/50 hover:bg-black rounded-full border border-white/10 transition-all">
            <X size={24} />
          </button>
        </div>

        <div className="p-10 -mt-20 relative z-10">
          <div className="flex justify-between items-end mb-8">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-[#d9ff00] text-black px-3 py-1 rounded-lg text-[10px] font-black uppercase">{venue.sport}</span>
                <div className="flex items-center gap-1 text-[#d9ff00] font-bold text-sm">
                  <Star size={14} fill="currentColor" /> {venue.rating}
                </div>
              </div>
              <h2 className="text-5xl font-black italic uppercase tracking-tighter leading-none mb-2">{venue.name}</h2>
              <p className="text-slate-400 font-medium flex items-center gap-2"><MapPin size={16} className="text-[#d9ff00]" /> {venue.area}, Karachi</p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-10">
            {[
              { icon: <Clock size={18} />, label: "Timing", val: venue.openTime || "08:00 AM - 12:00 AM" },
              { icon: <Trophy size={18} />, label: "Surface", val: "Premium Turf" },
              { icon: <Info size={18} />, label: "Status", val: "Open Now" }
            ].map((stat, i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-4 rounded-3xl">
                <div className="text-[#d9ff00] mb-2">{stat.icon}</div>
                <p className="text-[10px] text-slate-500 uppercase font-black">{stat.label}</p>
                <p className="text-xs font-bold">{stat.val}</p>
              </div>
            ))}
          </div>

          <div className="mb-10">
            <h4 className="text-sm font-black uppercase tracking-[0.2em] mb-4 text-[#d9ff00]">Description</h4>
            <p className="text-slate-400 leading-relaxed italic">{venue.description || "Experience top-tier sporting action at this premium facility. Perfect for professional matches and casual play alike."}</p>
          </div>

          {/* Checkout Section */}
          <div className="sticky bottom-0 bg-[#080415] pt-6 pb-2">
             <div className="flex items-center justify-between mb-6 bg-white/5 p-6 rounded-[32px] border border-white/10">
                <div>
                    <p className="text-[10px] font-black uppercase text-slate-500 mb-1">Total Pricing</p>
                    <p className="text-3xl font-black italic text-[#d9ff00]">Rs.{venue.price}<span className="text-sm text-white/40 ml-1">/HR</span></p>
                </div>
                <button className="bg-[#d9ff00] text-black px-10 py-5 rounded-[22px] font-black text-xs uppercase hover:bg-white transition-all shadow-lg shadow-[#d9ff00]/10">
                    Confirm Slot
                </button>
             </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slide-left {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        .animate-slide-left {
          animation: slide-left 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
      `}</style>
    </div>
  );
}