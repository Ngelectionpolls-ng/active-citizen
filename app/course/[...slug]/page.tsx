"use client";

import { useParams } from "next/navigation";
import { FilterSection } from "@/app/feeds/components/filter-section";
import { PetitionGrid } from "@/app/petitions/components/petition-grid";
import ListCourses from "@/components/home-components/compaigns";
import StartCompaign from "@/components/home-components/start-compaign";
import Footer from "@/components/shared/footer";
import Navbar from "@/components/shared/navbar";
import { courses, mockPetitions } from "@/utils/constants";
import React, { useMemo, useState } from "react";

const Page = () => {
  const { slug } = useParams(); // 👈 get slug from URL
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = courses.map((course) => ({
    id: course.id,
    course: course.course,
    icon: course.icon,
  }));

  const filteredPetitions = useMemo(() => {
    return mockPetitions.filter((petition) => {
      const matchesSearch =
        searchQuery === "" ||
        petition.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        petition.description.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory =
        selectedCategory === "all" ||
        (petition.category &&
          petition.category
            .toLowerCase()
            .includes(selectedCategory.toLowerCase()));

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const handleSearchChange = (value: string) => setSearchQuery(value);
  const handleCategoryChange = (value: string) => setSelectedCategory(value);

  // 👇 filter course based on slug
  const matchedCourse = courses.find((course) => course.slug === slug);

  return (
    <section>
      <Navbar />

      <section className="bg-gray-50 py-20 min-h-[60vh] flex items-center">
        <div className="w-full px-6 md:px-12 lg:px-20 mx-auto max-w-7xl">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
              {matchedCourse?.course ?? "Our Petitions"}
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
              {matchedCourse?.description ??
                `Active Citizen is a community of more than a million people who – in a moment away from their busy days – take small actions on issues they care about...`}
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8">
          <h1 className="text-3xl font-bold text-left">All Petitions</h1>

          <FilterSection
            categories={categories}
            onSearchChange={handleSearchChange}
            onCategoryChange={handleCategoryChange}
            onTypeChange={(value: string) => {
              console.log("Type changed to:", value);
            }}
          />

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

export default Page;
