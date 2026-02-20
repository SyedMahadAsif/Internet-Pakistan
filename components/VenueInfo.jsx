"use client";

import { useState, useMemo } from "react";
import emailjs from "@emailjs/browser";
import { 
  ChevronDown, User, Smartphone, Calendar, Clock, CheckCircle2, Mail, MapPin 
} from "lucide-react";

export default function VenueBookingPage({ venue }) {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState("");
  const [formData, setFormData] = useState({ name: "", phone: "", email: "" });
  const [dateOpen, setDateOpen] = useState(false);
  const [timeOpen, setTimeOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const dates = useMemo(() => 
    Array.from({ length: 10 }, (_, i) => {
      const d = new Date();
      d.setDate(d.getDate() + i);
      return {
        full: d.toDateString(),
        display: d.toLocaleDateString("en-GB", { 
          day: "numeric", 
          month: "short", 
          weekday: "short" 
        })
      };
    }), []
  );

  const timeSlots = [
    "08:00 AM", "10:00 AM", "12:00 PM",
    "02:00 PM", "04:00 PM", "06:00 PM",
    "08:00 PM", "10:00 PM"
  ];

  const handleFinalize = async () => {
    if (
      !selectedDate ||
      !selectedTime ||
      !formData.name ||
      !formData.phone ||
      !formData.email
    ) return;

    setLoading(true);

    const templateParams = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      venue: venue.name,
      area: venue.area,
      date: selectedDate.display,
      time: selectedTime,
      price: venue.price,
    };

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      // Redirect only after success
      const params = new URLSearchParams(templateParams);
      window.location.href = `/confirmation?${params.toString()}`;

    } catch (error) {
      console.error("Email sending failed:", error);
      alert("Something went wrong while sending your booking. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen text-white p-4 md:p-12 font-sans">
      <div className="max-w-5xl mx-auto mb-8 text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-black italic uppercase">
          Secure Your <span className="text-[#d9ff00]">Booking</span>
        </h1>
        <p className="text-sm uppercase mt-2">
          Complete the form below to finalize your session at {venue.name}
        </p>
      </div>

      <div className="max-w-5xl mx-auto bg-[#110c1d] rounded-3xl flex flex-col md:flex-row overflow-hidden">

        {/* LEFT SIDE */}
        <div className="md:w-5/12 p-8 bg-gradient-to-br from-[#1a1329] to-[#110c1d] border-r border-white/10">
          <h2 className="text-xl font-bold uppercase mb-6">{venue.name}</h2>

          <div className="space-y-4">
            <div className="flex items-center gap-3 text-white/70">
              <MapPin size={18} className="text-[#d9ff00]" />
              <p>{venue.area}</p>
            </div>

            <div className="p-6 bg-black/40 rounded-2xl">
              <p className="text-xs uppercase mb-2">Total Price</p>
              <span className="text-3xl font-black">
                PKR {venue.price}
              </span>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="md:w-7/12 p-8">

          {/* DATE & TIME */}
          <div className="grid sm:grid-cols-2 gap-4 mb-6">

            {/* DATE */}
            <div className="relative">
              <button
                type="button"
                onClick={() => {
                  setDateOpen(!dateOpen);
                  setTimeOpen(false);
                }}
                className="w-full bg-[#1c1629] h-14 rounded-xl px-4 flex justify-between items-center"
              >
                <div className="flex items-center gap-3">
                  <Calendar size={18} />
                  {selectedDate ? selectedDate.display : "Pick Date"}
                </div>
                <ChevronDown size={16} />
              </button>

              {dateOpen && (
                <div className="absolute w-full mt-2 bg-[#1c1629] rounded-xl max-h-48 overflow-y-auto z-50">
                  {dates.map((d, i) => (
                    <div
                      key={i}
                      onClick={() => {
                        setSelectedDate(d);
                        setDateOpen(false);
                      }}
                      className="p-4 hover:bg-[#d9ff00] hover:text-black cursor-pointer"
                    >
                      {d.display}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* TIME */}
            <div className="relative">
              <button
                type="button"
                onClick={() => {
                  setTimeOpen(!timeOpen);
                  setDateOpen(false);
                }}
                className="w-full bg-[#1c1629] h-14 rounded-xl px-4 flex justify-between items-center"
              >
                <div className="flex items-center gap-3">
                  <Clock size={18} />
                  {selectedTime || "Pick Time"}
                </div>
                <ChevronDown size={16} />
              </button>

              {timeOpen && (
                <div className="absolute w-full mt-2 bg-[#1c1629] rounded-xl max-h-48 overflow-y-auto z-50">
                  {timeSlots.map((slot) => (
                    <div
                      key={slot}
                      onClick={() => {
                        setSelectedTime(slot);
                        setTimeOpen(false);
                      }}
                      className="p-4 hover:bg-[#d9ff00] hover:text-black cursor-pointer"
                    >
                      {slot}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* CONTACT FORM */}
          <div className="space-y-4">

            <input
              type="text"
              placeholder="Full Name"
              className="w-full bg-[#1c1629] h-14 px-4 rounded-xl"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full bg-[#1c1629] h-14 px-4 rounded-xl"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />

            <input
              type="tel"
              placeholder="WhatsApp Number"
              className="w-full bg-[#1c1629] h-14 px-4 rounded-xl"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
            />
          </div>

          {/* SUBMIT BUTTON */}
          <button
            disabled={
              loading ||
              !selectedDate ||
              !selectedTime ||
              !formData.name ||
              !formData.phone ||
              !formData.email
            }
            onClick={handleFinalize}
            className="w-full mt-6 bg-[#d9ff00] text-black h-16 rounded-xl font-black uppercase disabled:opacity-40 flex items-center justify-center gap-3"
          >
            {loading ? "Processing..." : "Confirm Booking"}
            <CheckCircle2 size={20} />
          </button>

        </div>
      </div>
    </div>
  );
}
