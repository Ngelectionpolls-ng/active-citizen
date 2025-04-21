'use client';

import { useState, useMemo } from "react";
import { courses, mockFeeds } from "@/utils/constants";
import { Feed } from "../timeline/components/article-card";
import { CampaignGrid } from "./components/campaign-grid";
import { FeedTabs } from "./components/feed-tab";
import { FilterSection } from "./components/filter-section";



export default function FeedHome() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState("all");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [showTabs, setShowTabs] = useState(true);

  const filteredFeeds = useMemo(() => {
    return (mockFeeds as Feed[]).filter((feed) => {
      // Filter by search query
      const matchesSearch = searchQuery === "" || 
        feed.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        feed.description.toLowerCase().includes(searchQuery.toLowerCase());
      
      // Filter by type
      const matchesType = selectedType === "all" || feed.type === selectedType;
      
      // Filter by category (assuming feeds have categories)
      const matchesCategory = selectedCategory === "all" || 
        (feed.category && feed.category.split(',').some(cat => 
          cat.trim().toLowerCase() === selectedCategory.toLowerCase()
        ));
      
      return matchesSearch && matchesType && matchesCategory;
    });
  }, [searchQuery, selectedType, selectedCategory]);

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    // Hide tabs when searching or filtering
    setShowTabs(value === "" && selectedType === "all" && selectedCategory === "all");
  };

  const handleTypeChange = (value: string) => {
    setSelectedType(value);
    setShowTabs(searchQuery === "" && value === "all" && selectedCategory === "all");
  };

  const handleCategoryChange = (value: string) => {
    setSelectedCategory(value);
    setShowTabs(searchQuery === "" && selectedType === "all" && value === "all");
  };

  return (
    <main className="min-h-screen section-container">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8">
          <h1 className="text-3xl font-bold text-left">All campaigns</h1>
          
          <FilterSection 
            categories={courses}
            onSearchChange={handleSearchChange}
            onTypeChange={handleTypeChange}
            onCategoryChange={handleCategoryChange}
          />

            <div className="mt-6">
          
              <CampaignGrid feeds={filteredFeeds} />
            </div>
        </div>
      </div>
    </main>
  );
}