"use client";

import { Zap, Menu, User } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();

  return (
    <header className="fixed top-0 left-0 w-full z-[100] flex justify-center p-6 pointer-events-none">
      {/* THE TACTICAL DOCK */}
      <nav className="
        pointer-events-auto
        flex items-center gap-6 
        px-6 py-3 
        bg-[#080415]/80 backdrop-blur-2xl 
        border border-white/10 
        rounded-[24px] 
        shadow-[0_20px_50px_rgba(0,0,0,0.5)]
        transition-all duration-500 hover:border-white/20
      ">
        
        {/* LOGO SECTION */}
        <div 
          onClick={() => router.push("/")}
          className="flex items-center gap-4 cursor-pointer group"
        >
          <div className="relative">
            {/* Glow effect behind logo */}
            <div className="absolute inset-0 bg-[#d9ff00] blur-xl opacity-20 group-hover:opacity-40 transition-opacity" />
            <div className="relative bg-[#d9ff00] p-2 rounded-xl transform rotate-[-6deg] group-hover:rotate-0 transition-all duration-500 shadow-[0_0_20px_rgba(217,255,0,0.3)]">
              <Zap size={18} className="text-black fill-black" />
            </div>
          </div>

          <div className="flex flex-col">
            <h1 className="text-sm md:text-lg font-black uppercase tracking-tighter leading-none text-white italic">
              Internet <span className="text-[#d9ff00]">Pakistan</span>
            </h1>
            <div className="flex items-center gap-1.5 mt-1">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#d9ff00] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#d9ff00]"></span>
              </span>
              <span className="text-[7px] font-black uppercase tracking-[0.2em] text-white/40 leading-none">
                Karachi HQ // Live Slots
              </span>
            </div>
          </div>
        </div>

        {/* VERTICAL DIVIDER */}
        {/* <div className="h-8 w-px bg-white/10 mx-2 hidden md:block" /> */}

        {/* USER CONTROLS */}
        {/* <div className="flex items-center gap-3">
          <button className="hidden md:flex items-center justify-center h-10 w-10 rounded-xl bg-white/5 border border-white/10 text-white/70 hover:bg-[#d9ff00] hover:text-black hover:border-[#d9ff00] transition-all">
            <Menu size={18} />
          </button>
          
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#d9ff00] to-lime-600 rounded-full opacity-30 group-hover:opacity-100 transition duration-500 blur-[2px]"></div>
            <button className="relative flex items-center gap-2 bg-[#080415] px-2 py-2 md:pr-4 rounded-full border border-white/10 transition-all">
               <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center overflow-hidden border border-white/20">
                  <User size={14} className="text-white/60" />
               </div>
               <span className="hidden md:block text-[10px] font-black uppercase tracking-widest text-white">
                 Account
               </span>
            </button>
          </div>
        </div> */}
      </nav>
    </header>
  );
}