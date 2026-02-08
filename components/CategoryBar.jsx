"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight, LayoutGrid } from "lucide-react";
import { categories } from "@/data/venues";

export default function CategoryBar({ selectedCategory, setSelectedCategory }) {
  const categoryRef = useRef(null);

  const scroll = (dir) => {
    if (categoryRef.current) {
      const scrollAmount = window.innerWidth < 768 ? 280 : 450;
      categoryRef.current.scrollBy({
        left: dir === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="bg-white sticky top-0 z-50 border-b border-slate-200">
      <div className="max-w-[1600px] mx-auto px-4 md:px-8 pt-4 pb-2 md:pt-6">
        
        {/* TOP ROW: Controls & Anchor */}
        <div className="flex items-center justify-between mb-2 md:mb-4">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`flex items-center gap-3 transition-all duration-300 ${
              selectedCategory === null ? "opacity-100" : "opacity-50 hover:opacity-100"
            }`}
          >
            <div className={`p-2.5 rounded-xl transition-all ${
              selectedCategory === null 
              ? "bg-slate-900 text-lime-400 shadow-lg" 
              : "bg-slate-100 text-slate-500"
            }`}>
              <LayoutGrid size={18} strokeWidth={2.5} />
            </div>
            <span className="text-lg md:text-2xl font-black uppercase italic tracking-tighter text-slate-900">
              All <span className="hidden sm:inline text-slate-300">Sports</span>
            </span>
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={() => scroll("left")}
              className="h-9 w-9 md:h-11 md:w-11 flex items-center justify-center rounded-xl bg-slate-900 text-white hover:bg-lime-500 hover:text-black transition-all shadow-md active:scale-90"
            >
              <ChevronLeft size={18} strokeWidth={3} />
            </button>
            <button
              onClick={() => scroll("right")}
              className="h-9 w-9 md:h-11 md:w-11 flex items-center justify-center rounded-xl bg-slate-900 text-white hover:bg-lime-500 hover:text-black transition-all shadow-md active:scale-90"
            >
              <ChevronRight size={18} strokeWidth={3} />
            </button>
          </div>
        </div>

        {/* BOTTOM ROW: The Kinetic Track */}
        <div className="relative">
          <div
            ref={categoryRef}
            // Added overflow-visible and specific padding-y to prevent "cutting" when selected/hovered
            className="flex items-center gap-6 md:gap-12 overflow-x-auto no-scrollbar scroll-smooth py-6 overflow-visible"
          >
            {categories.map((cat) => {
              const isActive = selectedCategory === cat.name;
              return (
                <button
                  key={cat.name}
                  onClick={() => setSelectedCategory(cat.name)}
                  className="group relative flex-shrink-0 flex items-center gap-3 md:gap-5 transition-all duration-500"
                >
                  {/* Floating Squircle Container */}
                  <div className="relative h-12 w-12 md:h-16 md:w-16 shrink-0">
                    <div className={`absolute inset-0 transition-all duration-500 rounded-xl md:rounded-2xl ${
                      isActive 
                      ? "bg-slate-900 rotate-12 scale-110 shadow-xl" 
                      : "bg-slate-50 rotate-0 group-hover:rotate-6 group-hover:bg-slate-100"
                    }`} />
                    
                    <div className={`absolute inset-0 overflow-hidden rounded-xl md:rounded-2xl border-2 transition-all duration-500 ${
                      isActive ? "border-lime-400 -translate-y-2" : "border-white shadow-sm"
                    }`}>
                      <img
                        src={cat.image}
                        alt={cat.name}
                        className={`w-full h-full object-cover transition-all duration-700 ${
                          isActive ? "scale-110 grayscale-0" : "grayscale opacity-50 group-hover:grayscale-0"
                        }`}
                      />
                    </div>
                  </div>

                  {/* Sport Label */}
                  <div className="flex flex-col items-start text-left">
                    <span className={`text-2xl md:text-5xl font-black uppercase italic tracking-tighter leading-none transition-all duration-500 ${
                      isActive 
                      ? "text-slate-900 translate-x-1" 
                      : "text-slate-200 group-hover:text-slate-400"
                    }`}>
                      {cat.name}
                    </span>
                    {isActive && (
                      <div className="h-1 w-full bg-lime-500 mt-1 shadow-[0_0_8px_rgba(163,230,53,0.4)]" />
                    )}
                  </div>
                </button>
              );
            })}
            
            {/* SCROLL END FIX: Invisible spacer so the last card doesn't cut off */}
            <div className="flex-shrink-0 w-20 h-1" />
          </div>
          
          {/* Visual gradient indicator for more content */}
          <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-white to-transparent pointer-events-none" />
        </div>
      </div>

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
}