'use client';

import { useState, useEffect } from "react";
import { Feed } from "@/app/timeline/components/article-card";
import { ArticleCard } from "@/app/timeline/components/article-card";
import { FeedCard } from "@/app/feeds/components/feed-card";

interface PetitionGridProps {
  petitions: Feed[];
  columns?: number;
  className?: string;
  itemsPerPage?: number;
}

export function DonationGrid({ petitions, columns = 3, className = "", itemsPerPage = 6 }: PetitionGridProps) {
  const [gridColumns, setGridColumns] = useState(columns);
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the petitions to display for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPetitions = petitions.slice(startIndex, endIndex);

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

  // Calculate total pages
  const totalPages = Math.ceil(petitions.length / itemsPerPage);

  return (
    <div>
      {/* Masonry Grid */}
      <div 
        className={`grid gap-6 ${className}`} 
        style={{ 
          gridTemplateColumns: `repeat(${gridColumns}, minmax(0, 1fr))`,
          gridAutoRows: "1fr",
        }}
      >
        {currentPetitions.map((petition) => (
          <div key={petition.id} className="break-inside-avoid">
            <FeedCard {...petition} />
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
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