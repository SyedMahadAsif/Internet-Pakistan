// "use client";

// import { MapPin, Navigation, ExternalLink, Compass } from "lucide-react";

// export default function VenueMap({ venue }) {
//   // Reliable Google Embed URL
//   const mapUrl = `https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=${venue.location?.lat},${venue.location?.lng}&zoom=15`;
  
//   // If you don't have an API key yet, use the free 'output=embed' version:
//   const freeMapUrl = `https://maps.google.com/maps?q=${venue.location?.lat},${venue.location?.lng}&z=15&output=embed`;

//   const handleOpenMaps = () => {
//     window.open(`https://www.google.com/maps/search/?api=1&query=${venue.location?.lat},${venue.location?.lng}`, "_blank");
//   };

//   return (
//     <div className="relative group overflow-hidden border border-white/10 bg-[#080808] transition-all duration-500 hover:border-lime-400/30">
      
//       {/* 1. TOP STATUS HEADER */}
//       <div className="absolute top-0 left-0 right-0 z-20 bg-black/80 backdrop-blur-md border-b border-white/10 px-4 py-2.5 flex justify-between items-center">
//         <div className="flex items-center gap-2">
//           <div className="relative flex h-2 w-2">
//             <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75"></span>
//             <span className="relative inline-flex rounded-full h-2 w-2 bg-lime-400"></span>
//           </div>
//           <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white">Live Satellite Feed</span>
//         </div>
//         <div className="flex items-center gap-3">
//             <span className="text-[9px] font-mono text-white/30 hidden sm:block">
//               LOC: {venue.location?.lat.toFixed(4)}, {venue.location?.lng.toFixed(4)}
//             </span>
//             <button 
//               onClick={handleOpenMaps}
//               className="text-white/40 hover:text-lime-400 transition-colors"
//             >
//               <ExternalLink size={14} />
//             </button>
//         </div>
//       </div>

//       {/* 2. THE MAP VIEWPORT (Restored to Natural Colors) */}
//       <div className="h-[350px] relative bg-[#111]">
//         <iframe
//           width="100%"
//           height="100%"
//           style={{ border: 0 }}
//           loading="lazy"
//           allowFullScreen
//           src={freeMapUrl}
//           title={`${venue.name} Location`}
//           /* Removed grayscale and invert filters to show true colors */
//           className="opacity-90 contrast-[1.05] brightness-[0.95]"
//         />
        
//         {/* Subtle Decorative UI Corners */}
//         <div className="absolute top-12 left-4 pointer-events-none opacity-40">
//            <Compass size={32} className="text-white/20" />
//         </div>
//       </div>

//       {/* 3. TACTICAL DATA FOOTER */}
//       <div className="relative z-20 bg-black p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
//         <div className="flex gap-4">
//           <div className="bg-white/5 h-12 w-12 flex items-center justify-center border border-white/10">
//             <MapPin size={24} className="text-lime-400" />
//           </div>
//           <div className="space-y-1">
//             <p className="text-[9px] font-black uppercase tracking-widest text-lime-400">Deployment Coordinates</p>
//             <p className="text-sm font-bold text-white max-w-[280px] leading-tight italic">
//               {venue.address}
//             </p>
//           </div>
//         </div>

//         <button 
//           onClick={handleOpenMaps}
//           className="flex items-center justify-center gap-3 bg-lime-400 hover:bg-white text-black px-8 py-3.5 text-[11px] font-black uppercase tracking-[0.2em] transition-all [clip-path:polygon(0_0,100%_0,90%_100%,10%_100%)]"
//         >
//           <Navigation size={14} className="fill-current" />
//           Get Directions
//         </button>
//       </div>
//     </div>
//   );
// }

"use client";

import { MapPin, Navigation, ExternalLink, Compass } from "lucide-react";

export default function VenueMap({ venue }) {
  // Reliable Google Embed URL
  const freeMapUrl = `https://maps.google.com/maps?q=${venue.location?.lat},${venue.location?.lng}&z=15&output=embed`;

  const handleOpenMaps = () => {
    window.open(`https://www.google.com/maps?q=${venue.location?.lat},${venue.location?.lng}`, "_blank");
  };

  return (
    <div className="relative group overflow-hidden border border-slate-200 bg-white shadow-sm transition-all duration-500 hover:border-lime-500/30">
      
      {/* 1. TOP STATUS HEADER */}
      <div className="absolute top-0 left-0 right-0 z-20 bg-white/80 backdrop-blur-md border-b border-slate-200 px-4 py-2.5 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-lime-500"></span>
          </div>
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-800">Live Satellite Feed</span>
        </div>
        <div className="flex items-center gap-3">
            <span className="text-[9px] font-mono text-slate-400 hidden sm:block">
              LOC: {venue.location?.lat.toFixed(4)}, {venue.location?.lng.toFixed(4)}
            </span>
            <button 
              onClick={handleOpenMaps}
              className="text-slate-400 hover:text-lime-600 transition-colors"
            >
              <ExternalLink size={14} />
            </button>
        </div>
      </div>

      {/* 2. THE MAP VIEWPORT */}
      <div className="h-[350px] relative bg-slate-100">
        <iframe
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          src={freeMapUrl}
          title={`${venue.name} Location`}
          className="opacity-95 contrast-[1.05] brightness-[1.02]"
        />
        
        {/* Subtle Decorative UI Corners */}
        <div className="absolute top-12 left-4 pointer-events-none opacity-60">
           <Compass size={32} className="text-slate-900/10" />
        </div>
      </div>

      {/* 3. TACTICAL DATA FOOTER */}
      <div className="relative z-20 bg-white p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-slate-100">
        <div className="flex gap-4">
          <div className="bg-slate-50 h-12 w-12 flex items-center justify-center border border-slate-200 shadow-sm">
            <MapPin size={24} className="text-lime-600" />
          </div>
          <div className="space-y-1">
            <p className="text-[9px] font-black uppercase tracking-widest text-lime-600">Deployment Coordinates</p>
            <p className="text-sm font-bold text-slate-900 max-w-[280px] leading-tight italic">
              {venue.address}
            </p>
          </div>
        </div>

        <button 
          onClick={handleOpenMaps}
          className="flex items-center justify-center gap-3 bg-lime-400 hover:bg-slate-900 hover:text-white text-black px-8 py-3.5 text-[11px] font-black uppercase tracking-[0.2em] transition-all [clip-path:polygon(0_0,100%_0,90%_100%,10%_100%)] shadow-sm"
        >
          <Navigation size={14} className="fill-current" />
          Get Directions
        </button>
      </div>
    </div>
  );
}