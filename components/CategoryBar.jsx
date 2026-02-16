"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight, LayoutGrid } from "lucide-react";

// Clean, high-quality category data
const categories = [
  { name: "Football", count: "12 Venues", image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400" },
  { name: "Padel", count: "8 Venues", image: "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=400" },
  { name: "Cricket", count: "15 Venues", image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400" },
  { name: "Tennis", count: "6 Venues", image: "https://images.unsplash.com/photo-1595435064212-44585a6a3b6d?w=400" },
  { name: "Basketball", count: "4 Venues", image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=400" },
];

export default function CategoryBar({ selectedCategory, setSelectedCategory }) {
  const categoryRef = useRef(null);

  const scroll = (dir) => {
    if (categoryRef.current) {
      const scrollAmount = window.innerWidth < 768 ? 300 : 500;
      categoryRef.current.scrollBy({
        left: dir === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="bg-[#080415] sticky top-0 z-50 py-8 md:py-12 border-b border-white/5">
      {/* Subtle Stadium Net Pattern Background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 20 L40 20 M20 0 L20 40' fill='none' stroke='%23ffffff' stroke-width='1'/%3E%3C/svg%3E")` }} 
      />

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        
        {/* HEADER AREA */}
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-sm font-black uppercase tracking-[0.4em] text-[#d9ff00] mb-2">Categories</h2>
            <div className="flex items-center gap-4">
              <h3 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter text-white">
                Choose <span className="text-white/20">Sport</span>
              </h3>
            </div>
          </div>

          <div className="hidden md:flex gap-3 pb-2">
            <button onClick={() => scroll("left")} className="h-14 w-14 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all">
              <ChevronLeft size={20} />
            </button>
            <button onClick={() => scroll("right")} className="h-14 w-14 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* OVAL KINETIC CARDS */}
        <div className="relative">
          <div
            ref={categoryRef}
            className="flex items-center gap-6 overflow-x-auto no-scrollbar scroll-smooth py-4"
          >
            {/* "ALL" CARD - Distinctive Style */}
            <button
              onClick={() => setSelectedCategory(null)}
              className="group flex-shrink-0"
            >
              <div className={`w-32 h-48 md:w-40 md:h-56 rounded-full flex flex-col items-center justify-center transition-all duration-500 border ${
                selectedCategory === null 
                ? "bg-[#d9ff00] border-[#d9ff00] text-black" 
                : "bg-white/5 border-white/10 text-white group-hover:border-white/40"
              }`}>
                <LayoutGrid size={32} strokeWidth={1.5} className="mb-4" />
                <span className="text-[10px] font-black uppercase tracking-widest">View All</span>
              </div>
            </button>

            {categories.map((cat) => {
              const isActive = selectedCategory === cat.name;
              return (
                <button
                  key={cat.name}
                  onClick={() => setSelectedCategory(cat.name)}
                  className="group relative flex-shrink-0"
                >
                  <div className={`relative w-32 h-48 md:w-40 md:h-56 rounded-full overflow-hidden transition-all duration-700 ${
                    isActive ? "ring-4 ring-[#d9ff00] ring-offset-4 ring-offset-[#080415] scale-105" : "opacity-60 group-hover:opacity-100"
                  }`}>
                    {/* Background Image */}
                    <img
                      src={cat.image}
                      alt={cat.name}
                      className={`w-full h-full object-cover transition-transform duration-1000 ${
                        isActive ? "scale-110 grayscale-0" : "grayscale group-hover:grayscale-0 group-hover:scale-110"
                      }`}
                    />
                    
                    {/* Elegant Dark Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                    {/* Content inside Oval */}
                    <div className="absolute inset-0 flex flex-col items-center justify-end pb-8 px-4 text-center">
                        <span className="text-[10px] font-bold text-[#d9ff00] uppercase tracking-tighter mb-1 opacity-0 group-hover:opacity-100 transition-all">
                           {cat.count}
                        </span>
                        <span className="text-lg md:text-xl font-black text-white uppercase italic tracking-tighter">
                          {cat.name}
                        </span>
                    </div>
                  </div>
                </button>
              );
            })}
            
            <div className="flex-shrink-0 w-12" />
          </div>

          {/* Luxury Edge Fades */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#080415] to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#080415] to-transparent pointer-events-none" />
        </div>
      </div>

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
}




{/* ===== QUICK FILTERS ===== */}
      {/* <section className="px-6 mb-16 overflow-x-auto no-scrollbar relative z-10">
        <div className="flex gap-4 max-w-4xl mx-auto">
          {['All Games', 'Football', 'Padel', 'Cricket', 'Basketball'].map((filter, i) => (
            <button key={i} className={`whitespace-nowrap px-8 py-3 rounded-2xl text-[11px] font-black uppercase tracking-widest border transition-all ${i === 0 ? 'bg-[#d9ff00] text-black border-[#d9ff00]' : 'bg-white/5 border-white/10 text-white/50 hover:border-white/30'}`}>
              {filter}
            </button>
          ))}
        </div>
      </section> */}