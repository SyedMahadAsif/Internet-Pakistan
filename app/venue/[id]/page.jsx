// "use client";

// import { useParams, useRouter } from "next/navigation";
// import { ChevronLeft } from "lucide-react";
// import Header from "@/components/Header";
// import VenueInfo from "@/components/VenueInfo";
// import VenueHero from "@/components/VenueHero";
// import VenueMap from "@/components/VenueMap";
// import { venues } from "@/data/venues";

// export default function VenueDetailsPage() {
//   const params = useParams();
//   const router = useRouter();
//   const venue = venues.find((v) => v.id === parseInt(params.id));

//   if (!venue) {
//     return (
//       <div className="min-h-screen bg-[#0A0A0A] text-white flex items-center justify-center">
//         <div className="text-center">
//           <h1 className="text-2xl font-black mb-4">Venue Not Found</h1>
//           <button
//             onClick={() => router.push("/")}
//             className="bg-lime-400 text-black px-6 py-3 rounded-xl font-black"
//           >
//             Back to Home
//           </button>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-[#0A0A0A] text-white overflow-x-hidden">
//       <Header />

//       <main className="max-w-[1600px] mx-auto px-4 lg:px-8 py-6">
//         <button
//           onClick={() => router.push("/")}
//           className="flex items-center gap-2 text-lime-400 hover:text-lime-300 transition text-sm font-bold mb-6"
//         >
//           <ChevronLeft size={18} />
//           Back to all venues
//         </button>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//           {/* LEFT - Venue Info */}
//           <div className="space-y-4">
//             <VenueInfo venue={venue} />
//           </div>

//           {/* RIGHT - Hero Image & Map */}
//           <div className="space-y-4">
//             <VenueHero venue={venue} />
//             <VenueMap venue={venue} />
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }

"use client";

import { useParams, useRouter } from "next/navigation";
import { ChevronLeft } from "lucide-react";
import Header from "@/components/Header";
import VenueInfo from "@/components/VenueInfo";
import VenueHero from "@/components/VenueHero";
import VenueMap from "@/components/VenueMap";
import { venues } from "@/data/venues";

export default function VenueDetailsPage() {
  const params = useParams();
  const router = useRouter();
  const venue = venues.find((v) => v.id === parseInt(params.id));

  if (!venue) {
    return (
      <div className="min-h-screen bg-[#FCFCFC] text-slate-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-black mb-4 uppercase italic tracking-tighter">Venue Not Found</h1>
          <button
            onClick={() => router.push("/")}
            className="bg-lime-400 hover:bg-slate-900 hover:text-white text-black px-8 py-4 font-black uppercase tracking-widest transition-all [clip-path:polygon(10%_0,100%_0,90%_100%,0%_100%)]"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FCFCFC] text-slate-900 overflow-x-hidden">
      <Header />

      <main className="max-w-[1600px] mx-auto px-4 lg:px-8 py-6">
        {/* Navigation Control */}
        <button
          onClick={() => router.push("/")}
          className="group flex items-center gap-2 text-slate-400 hover:text-lime-600 transition-all text-[10px] font-black uppercase tracking-[0.3em] mb-6"
        >
          <div className="bg-white border border-slate-200 p-1.5 transition-colors group-hover:border-lime-500">
             <ChevronLeft size={14} />
          </div>
          Back to all venues
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* LEFT - Venue Info (Tactical Data) */}
          <div className="space-y-4">
            <VenueInfo venue={venue} />
          </div>

          {/* RIGHT - Hero Image & Map (Visual Data) */}
          <div className="space-y-4">
            <VenueHero venue={venue} />
            <div className="border border-slate-200 p-1 bg-white shadow-sm">
                <VenueMap venue={venue} />
            </div>
          </div>
        </div>
      </main>

      {/* Decorative Branding Element */}
      <div className="fixed bottom-10 right-10 pointer-events-none opacity-[0.03] rotate-90 origin-right">
        <span className="text-[12rem] font-black uppercase italic italic tracking-tighter leading-none select-none">
          {venue.sport}
        </span>
      </div>
    </div>
  );
}
