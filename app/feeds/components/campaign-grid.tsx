'use client';

import { useState, useEffect } from "react";
import { FeedCard } from "../components/feed-card";
import { Feed } from "@/app/timeline/components/article-card";

interface CampaignGridProps {
  feeds: Feed[];
  columns?: number;
  className?: string;
  itemsPerPage?: number; // New prop for items per page
}

export function CampaignGrid({ feeds, columns = 3, className = "", itemsPerPage = 10 }: CampaignGridProps) {
  const [gridColumns, setGridColumns] = useState(columns);
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the feeds to display for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentFeeds = feeds.slice(startIndex, endIndex);

  // Adjust columns based on viewport width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setGridColumns(1);
      } else if (window.innerWidth < 1024) {
        setGridColumns(2);
      } else {
        setGridColumns(columns);
      }
    };

    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [columns]);


  const totalPages = Math.ceil(feeds.length / itemsPerPage);

  return (
    <div>
   \
      <div 
        className={`grid gap-6 ${className}`} 
        style={{ 
          gridTemplateColumns: `repeat(${gridColumns}, minmax(0, 1fr))`,
          gridAutoRows: "1fr", // Ensures masonry effect
        }}
      >
        {currentFeeds.map((feed) => (
          <div key={feed.id} className="break-inside-avoid">
            <FeedCard
              {...feed}
              type={feed.type as "petition" | "campaign"}
            />
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-4 space-x-2">
        <button 
          className="px-4 py-2 bg-brandgreen text-white rounded disabled:opacity-50"
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            className={`px-4 py-2 rounded ${currentPage === index + 1 ? "bg-brandgreen text-white" : "bg-gray-200"}`}
            onClick={() => setCurrentPage(index + 1)}
          >
            {index + 1}
          </button>
        ))}
        <button 
          className="px-4 py-2 bg-brandgreen text-white rounded disabled:opacity-50"
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}