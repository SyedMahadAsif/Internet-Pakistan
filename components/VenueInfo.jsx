// "use client";

// import { Star, Clock, MapPin, Phone, MessageCircle, Target, ShieldCheck, Zap } from "lucide-react";

// export default function VenueInfo({ venue }) {
//   const handleWhatsAppClick = () => {
//     const message = encodeURIComponent(
//       `Hi, I'm interested in booking ${venue.name} in ${venue.area}.`
//     );
//     window.open(`https://wa.me/${venue.phone.replace(/\D/g, "")}?text=${message}`, "_blank");
//   };

//   return (
//     <div className="bg-[#0A0A0A] border border-white/10 relative overflow-hidden">
//       {/* 1. IMAGE AREA WITH TACTICAL OVERLAY */}
//       <div className="relative h-72 w-full overflow-hidden">
//         <img
//           src={venue.image}
//           className="w-full h-full object-cover"
//           alt={venue.name}
//         />
//         {/* Angled Sport Badge */}
//         <div className="absolute top-0 left-0 z-20 bg-lime-400 text-black px-6 py-2 text-xs font-black uppercase tracking-[0.2em] [clip-path:polygon(0_0,100%_0,85%_100%,0%_100%)]">
//           {venue.sport}
//         </div>
        
//         {/* Glassmorphism Rating Pill */}
//         <div className="absolute bottom-4 left-4 z-20 bg-black/60 backdrop-blur-md border border-white/10 px-3 py-1.5 flex items-center gap-2">
//           <Star size={14} fill="#a3e635" className="text-lime-400" />
//           <span className="text-sm font-black text-white">{venue.rating}</span>
//           <span className="text-[10px] text-white/40 uppercase font-bold tracking-tighter italic border-l border-white/20 pl-2">Verified Arena</span>
//         </div>

//         <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent" />
//       </div>

//       {/* 2. MAIN CONTENT Dossier */}
//       <div className="p-8 space-y-8">
//         {/* Title & Status */}
//         <div className="relative">
//           <h1 className="text-4xl font-black uppercase italic tracking-tighter leading-none text-white mb-2">
//             {venue.name}
//           </h1>
//           <div className="flex items-center gap-2 text-lime-400/60 font-bold text-[10px] uppercase tracking-[0.3em]">
//             <MapPin size={12} />
//             {venue.area} // PAKISTAN
//           </div>
//         </div>

//         <p className="text-sm text-white/50 leading-relaxed font-medium italic border-l-2 border-lime-400 pl-6 max-w-xl">
//           {venue.description}
//         </p>

//         {/* Technical Data Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10">
//           <div className="bg-[#0D0D0D] p-4 flex flex-col gap-1">
//             <div className="flex items-center gap-2 text-white/30">
//               <Clock size={14} />
//               <span className="text-[9px] font-black uppercase tracking-widest">Operational Window</span>
//             </div>
//             <p className="text-sm font-black text-white">{venue.openTime}</p>
//           </div>

//           <div className="bg-[#0D0D0D] p-4 flex flex-col gap-1">
//             <div className="flex items-center gap-2 text-white/30">
//               <Zap size={14} />
//               <span className="text-[9px] font-black uppercase tracking-widest">Booking Status</span>
//             </div>
//             <p className="text-sm font-black text-lime-400">INSTANT CONFIRMATION</p>
//           </div>
//         </div>

//         {/* PRICE BLOCK - MONOLITHIC */}
//         <div className="relative bg-lime-400 p-6 flex items-center justify-between group overflow-hidden">
//             <div className="relative z-10">
//                 <p className="text-[10px] font-black text-black/40 uppercase tracking-widest mb-1">Standard Hourly Rate</p>
//                 <div className="flex items-baseline gap-1">
//                     <span className="text-xs font-bold text-black/60">PKR</span>
//                     <span className="text-4xl font-black text-black tracking-tighter italic">{venue.price}</span>
//                 </div>
//             </div>
//             <Target size={80} className="absolute -right-4 -bottom-4 text-black/5 rotate-12" />
//             <ShieldCheck size={24} className="text-black/20" />
//         </div>

//         {/* ACTION TERMINAL */}
//         <div className="flex flex-col sm:flex-row gap-2">
//           <button
//             onClick={handleWhatsAppClick}
//             className="flex-1 bg-white hover:bg-lime-400 text-black px-6 py-5 text-xs font-black uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-3 [clip-path:polygon(0_0,95%_0,100%_100%,5%_100%)] sm:[clip-path:none]"
//           >
//             <MessageCircle size={18} />
//             Connect via WhatsApp
//           </button>
//           <button className="flex-1 bg-[#111] hover:bg-white hover:text-black text-white px-6 py-5 text-xs font-black uppercase tracking-[0.2em] border border-white/10 transition-all">
//             Proceed to Booking
//           </button>
//         </div>

//         {/* FOOTER INFO */}
//         <div className="pt-6 border-t border-white/5 grid grid-cols-1 sm:grid-cols-2 gap-4">
//           <div className="flex items-start gap-3">
//             <div className="bg-white/5 p-2 rounded-sm text-lime-400">
//                 <MapPin size={16} />
//             </div>
//             <span className="text-[11px] font-bold text-white/40 uppercase tracking-tight leading-relaxed">
//                 {venue.address}
//             </span>
//           </div>
//           <div className="flex items-center gap-3">
//              <div className="bg-white/5 p-2 rounded-sm text-lime-400">
//                 <Phone size={16} />
//             </div>
//             <a href={`tel:${venue.phone}`} className="text-sm font-black text-white hover:text-lime-400 transition tracking-tighter">
//               {venue.phone}
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import { Star, Clock, MapPin, Phone, MessageCircle, Target, ShieldCheck, Zap } from "lucide-react";

export default function VenueInfo({ venue }) {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      `Hi, I'm interested in booking ${venue.name} in ${venue.area}.`
    );
    window.open(`https://wa.me/${venue.phone.replace(/\D/g, "")}?text=${message}`, "_blank");
  };

  return (
    <div className="bg-white border border-slate-200 relative overflow-hidden shadow-sm">
      {/* 1. IMAGE AREA WITH TACTICAL OVERLAY */}
      <div className="relative h-72 w-full overflow-hidden bg-slate-100">
        <img
          src={venue.image}
          className="w-full h-full object-cover"
          alt={venue.name}
        />
        {/* Angled Sport Badge */}
        <div className="absolute top-0 left-0 z-20 bg-lime-400 text-black px-6 py-2 text-xs font-black uppercase tracking-[0.2em] [clip-path:polygon(0_0,100%_0,85%_100%,0%_100%)]">
          {venue.sport}
        </div>
        
        {/* Glassmorphism Rating Pill - Adjusted for light background */}
        <div className="absolute bottom-4 left-4 z-20 bg-white/80 backdrop-blur-md border border-slate-200 px-3 py-1.5 flex items-center gap-2 shadow-sm">
          <Star size={14} fill="#84cc16" className="text-lime-600" />
          <span className="text-sm font-black text-slate-900">{venue.rating}</span>
          <span className="text-[10px] text-slate-500 uppercase font-bold tracking-tighter italic border-l border-slate-200 pl-2">Verified Arena</span>
        </div>

        {/* Gradient Transition */}
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
      </div>

      {/* 2. MAIN CONTENT Dossier */}
      <div className="p-8 space-y-8">
        {/* Title & Status */}
        <div className="relative">
          <h1 className="text-4xl font-black uppercase italic tracking-tighter leading-none text-slate-900 mb-2">
            {venue.name}
          </h1>
          <div className="flex items-center gap-2 text-lime-600 font-bold text-[10px] uppercase tracking-[0.3em]">
            <MapPin size={12} />
            {venue.area} // PAKISTAN
          </div>
        </div>

        <p className="text-sm text-slate-500 leading-relaxed font-medium italic border-l-2 border-lime-400 pl-6 max-w-xl">
          {venue.description}
        </p>

        {/* Technical Data Grid - Light Palette */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-slate-200 border border-slate-200">
          <div className="bg-slate-50 p-4 flex flex-col gap-1">
            <div className="flex items-center gap-2 text-slate-400">
              <Clock size={14} />
              <span className="text-[9px] font-black uppercase tracking-widest">Operational Window</span>
            </div>
            <p className="text-sm font-black text-slate-900">{venue.openTime}</p>
          </div>

          <div className="bg-slate-50 p-4 flex flex-col gap-1">
            <div className="flex items-center gap-2 text-slate-400">
              <Zap size={14} />
              <span className="text-[9px] font-black uppercase tracking-widest">Booking Status</span>
            </div>
            <p className="text-sm font-black text-lime-600">INSTANT CONFIRMATION</p>
          </div>
        </div>

        {/* PRICE BLOCK - MONOLITHIC (Remains High Contrast) */}
        <div className="relative bg-lime-400 p-6 flex items-center justify-between group overflow-hidden shadow-lg shadow-lime-400/20">
            <div className="relative z-10">
                <p className="text-[10px] font-black text-black/40 uppercase tracking-widest mb-1">Standard Hourly Rate</p>
                <div className="flex items-baseline gap-1">
                    <span className="text-xs font-bold text-black/60">PKR</span>
                    <span className="text-4xl font-black text-black tracking-tighter italic">{venue.price}</span>
                </div>
            </div>
            <Target size={80} className="absolute -right-4 -bottom-4 text-black/5 rotate-12" />
            <ShieldCheck size={24} className="text-black/20" />
        </div>

        {/* ACTION TERMINAL */}
        <div className="flex flex-col sm:flex-row gap-2">
          <button
            onClick={handleWhatsAppClick}
            className="flex-1 bg-slate-900 hover:bg-lime-400 text-white hover:text-black px-6 py-5 text-xs font-black uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-3 [clip-path:polygon(0_0,95%_0,100%_100%,5%_100%)] sm:[clip-path:none]"
          >
            <MessageCircle size={18} />
            Connect via WhatsApp
          </button>
          <button className="flex-1 bg-white hover:bg-slate-50 text-slate-900 px-6 py-5 text-xs font-black uppercase tracking-[0.2em] border border-slate-200 transition-all">
            Proceed to Booking
          </button>
        </div>

        {/* FOOTER INFO */}
        <div className="pt-6 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex items-start gap-3">
            <div className="bg-slate-100 p-2 rounded-sm text-lime-600">
                <MapPin size={16} />
            </div>
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-tight leading-relaxed">
                {venue.address}
            </span>
          </div>
          <div className="flex items-center gap-3">
             <div className="bg-slate-100 p-2 rounded-sm text-lime-600">
                <Phone size={16} />
            </div>
            <a href={`tel:${venue.phone}`} className="text-sm font-black text-slate-900 hover:text-lime-600 transition tracking-tighter">
              {venue.phone}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}