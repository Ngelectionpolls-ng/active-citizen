'use client';

import { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

interface FilterSectionProps {
  categories: { id: string; course: string; icon: any }[];
  onSearchChange: (value: string) => void;
  onTypeChange: (value: string) => void;
  onCategoryChange: (value: string) => void;
  className?: string;
}

export function FilterSection({
  categories,
  onSearchChange,
  onTypeChange,
  onCategoryChange,
  className
}: FilterSectionProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);
    onSearchChange(value);
  };

  return (
    <div className={cn("w-full flex flex-col sm:flex-row gap-4", className)}>
      <div className="relative  flex-grow w-full max-w-2xl">
        {/* <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" /> */}
        <Input
          placeholder="Search..."
          className="pl-4"
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>
      
      {/* <div className="flex gap-3">
        <Select onValueChange={onTypeChange}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Campaign Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Types</SelectItem>
            <SelectItem value="petition">Petitions</SelectItem>
            <SelectItem value="donation">Donations</SelectItem>
          </SelectContent>
        </Select>

        <Select onValueChange={onCategoryChange}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Categories" />
          </SelectTrigger>
          <SelectContent className="max-h-[300px]">
            <SelectItem value="all">All Categories</SelectItem>
            {categories.map((category) => (
              <SelectItem key={category.id} value={category.course.toLowerCase()}>
                {category.course}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div> */}
    </div>
  );
}