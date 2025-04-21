"use client"
import Navbar from "@/components/shared/navbar";
import React, { useState, useMemo } from "react";
import { PetitionGrid } from "./components/petition-grid";
import { mockPetitions } from "@/utils/constants";
import { FilterSection } from "@/app/feeds/components/filter-section";
import { courses } from "@/utils/constants"; // Import courses for categories
import ListCourses from "@/components/home-components/compaigns";
import StartCompaign from "@/components/home-components/start-compaign";
import Footer from "@/components/shared/footer";

const PetitionPage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = courses.map((course) => ({
    id: course.id,
    course: course.course,
    icon: course.icon,
  }));

  const filteredPetitions = useMemo(() => {
    return mockPetitions.filter((petition) => {
      // Filter by search query
      const matchesSearch =
        searchQuery === "" ||
        petition.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        petition.description.toLowerCase().includes(searchQuery.toLowerCase());

      // Filter by category
      const matchesCategory =
        selectedCategory === "all" ||
        (petition.category &&
          petition.category
            .toLowerCase()
            .includes(selectedCategory.toLowerCase()));

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
  };

  const handleCategoryChange = (value: string) => {
    setSelectedCategory(value);
  };

  return (
    <section>
      <Navbar />
 <section className="bg-gray-50 py-20 min-h-[60vh] flex items-center">
  <div className="w-full px-6 md:px-12 lg:px-20 mx-auto max-w-7xl">
    <div className="max-w-4xl mx-auto text-center">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
        Our Petitions
      </h1>
      <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
        {`Active Citizen is a community of more than a million people who – in a moment away from their busy days – take small actions on issues they care about, which all add up to something bigger, a movement for a better Britain for everyone who calls our country home. We come from all walks of life; we’re nurses, taxi drivers, parents, shopkeepers, pensioners and more. Too often people like us are told we can’t make a difference. But together we’ve achieved so much – from proving the public backs Channel 4 to getting Walkers to recycle their crisp packets to holding Boris Johnson to account on Partygate. While our team works on the day-to-day of campaigns, the voices of our supporters are always front and centre and anyone can start their own petition on our Campaigns by You platform. Whether we’re older or younger, from a big city or a small town, whether we’re Black, white, Asian or Brown, scraping to get by or a bit more comfortable – we know that when we come together, we can be powerful.`}
      </p>
    </div>
  </div>
</section>

      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8">
          <h1 className="text-3xl font-bold text-left">All Petitions</h1>

          {/* Filter Section */}
          <FilterSection
            categories={categories} // Use dynamic categories
            onSearchChange={handleSearchChange}
            onCategoryChange={handleCategoryChange}
            onTypeChange={(value: string) => {
              console.log("Type changed to:", value); // Add your logic here
            }}
          />

          {/* Petition Grid */}
          <div className="mt-6">
            <PetitionGrid petitions={filteredPetitions} itemsPerPage={6} />
          </div>
        </div>
      </div>
      <ListCourses />
  <StartCompaign />
      <Footer />
    </section>
  );
};

export default PetitionPage;