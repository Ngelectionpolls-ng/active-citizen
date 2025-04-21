'use client';

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CampaignGrid } from "./campaign-grid";
import { Feed } from "@/app/timeline/components/article-card";

interface FeedTabsProps {
  feeds: Feed[];
  className?: string;
}

export function FeedTabs({ feeds, className }: FeedTabsProps) {
  const [activeTab, setActiveTab] = useState("all");

  const filteredFeeds = (tab: string) => {
    if (tab === "all") return feeds;
    if (tab === "petitions") return feeds.filter((feed) => feed.type === "petition");
    if (tab === "campaigns") return feeds.filter((feed) => feed.type === "campaign");
    return feeds;
  };

  return (
    <Tabs 
      defaultValue="all" 
      className={`w-full ${className}`}
      onValueChange={setActiveTab}
    >
      <TabsList className="w-full max-w-md mx-auto grid grid-cols-3">
        <TabsTrigger value="all">All</TabsTrigger>
        <TabsTrigger value="petitions">Petitions</TabsTrigger>
        <TabsTrigger value="campaigns">Campaigns</TabsTrigger>
      </TabsList>
      
      <TabsContent value="all" className="mt-6">
        <CampaignGrid feeds={filteredFeeds(activeTab)} />
      </TabsContent>
      
      <TabsContent value="petitions" className="mt-6">
        <CampaignGrid feeds={filteredFeeds(activeTab)} />
      </TabsContent>
      
      <TabsContent value="campaigns" className="mt-6">
        <CampaignGrid feeds={filteredFeeds(activeTab)} />
      </TabsContent>
    </Tabs>
  );
}