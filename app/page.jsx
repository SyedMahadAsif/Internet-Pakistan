"use client";

import { useState } from "react";
import Header from "@/components/Header";
import SearchBar from "@/components/SearchBar";
import CategoryBar from "@/components/CategoryBar";
import VenueGrid from "@/components/VenueGrid";
import { venues } from "@/data/venues";
import Hero from "@/components/Hero"

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Filter venues based on search and category
  const filteredVenues = venues.filter((venue) => {
    const matchesSearch =
      venue.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      venue.area.toLowerCase().includes(searchQuery.toLowerCase()) ||
      venue.sport.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = !selectedCategory || venue.sport === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    // <div className="min-h-screen  bg-[#0A0A0A] text-white overflow-x-hidden">
          <div className="min-h-screen bg-[#080415] text-white overflow-x-hidden">

      <Header />
      <Hero/>
      {/* <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <CategoryBar
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      /> */}

      {/* <main className="max-w-[1600px] mx-auto px-4 lg:px-8 py-6">
        <VenueGrid venues={filteredVenues} selectedCategory={selectedCategory} />
      </main> */}
    </div>
  );
}
