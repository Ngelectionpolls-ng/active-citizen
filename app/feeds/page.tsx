'use client';

import { useState, useMemo } from "react";
import { courses, mockFeeds } from "@/utils/constants";
import { Feed } from "../timeline/components/article-card";
import { CampaignGrid } from "./components/campaign-grid";
import { FilterSection } from "./components/filter-section";

import { Input } from "@/components/ui/input";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";

export default function FeedHome() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState("all");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [showTabs, setShowTabs] = useState(true);
  const [activeTab, setActiveTab] = useState("all");

 const filteredFeeds = useMemo(() => {
  return (mockFeeds as Feed[]).filter((feed) => {
    const matchesTab = activeTab === "all" || 
      (activeTab === "petitions" && feed.type === "petition") ||
      (activeTab === "campaigns" && feed.type === "campaign");
      
    const matchesSearch = searchQuery === "" || 
      feed.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      feed.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesType = selectedType === "all" || feed.type === selectedType;
    
    const matchesCategory = selectedCategory === "all" || 
      (feed.category && feed.category.split(',').some(cat => 
        cat.trim().toLowerCase() === selectedCategory.toLowerCase()
      ));
    
    return matchesSearch && matchesType && matchesCategory && matchesTab;
  });
}, [searchQuery, selectedType, selectedCategory, activeTab]);

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);

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
      <div className=" py-8 ">
        <div className="flex flex-col gap-8">
          
          <div className="flex justify-between items-center gap-4 w-full flex-col sm:flex-row">
          <FilterSection 
            categories={courses}
            onSearchChange={handleSearchChange}
            onTypeChange={handleTypeChange}
            onCategoryChange={handleCategoryChange}
          />
          <div className="w-full">
            <div className="w-full grid grid-cols-3 gap-3 ">
              <button
                onClick={() => setActiveTab("all")}
                className={`rounded-md px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50
                  ${activeTab === "all" ? "bg-brandgreen text-white" : "bg-muted text-muted-foreground"}`}
              >
                All
              </button>
              <button
                onClick={() => setActiveTab("petitions")}
                className={`rounded-md px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50
                  ${activeTab === "petitions" ? "bg-brandgreen text-white" : "bg-muted text-muted-foreground"}`}
              >
                Petitions
              </button>
              <button
                onClick={() => setActiveTab("campaigns")}
                className={`rounded-md px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50
                  ${activeTab === "campaigns" ? "bg-brandgreen text-white" : "bg-muted text-muted-foreground"}`}
              >
                Campaigns
              </button>
            </div>
          </div>
          </div>
          <div className="w-full flex justify-end items-end">
            <div className="flex gap-3">
              <Select onValueChange={handleTypeChange}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Created" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="petition">By Us</SelectItem>
                  <SelectItem value="donation">By You</SelectItem>
                </SelectContent>
              </Select>

              <Select onValueChange={handleCategoryChange}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Categories" />
                </SelectTrigger>
                <SelectContent className="max-h-[300px]">
                  <SelectItem value="all">All Categories</SelectItem>
                  {courses.map((category) => (
                    <SelectItem key={category.id} value={category.course.toLowerCase()}>
                      {category.course}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="mt-6">
            <CampaignGrid feeds={filteredFeeds} />
          </div>
        </div>
      </div>
    </main>
  );
}