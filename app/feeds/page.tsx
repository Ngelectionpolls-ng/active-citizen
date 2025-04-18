'use client';

import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search } from "lucide-react";
import { FeedCard } from "./components/feed-card";
import { mockFeeds } from "@/utils/constants";



export interface Feed {
  id: string;
  type: 'petition' | 'donation';
  title: string;
  description: string;
  imageUrl: string;
  target: number;
  current: number;
  daysLeft: number;
  creatorName: string;
  creatorUsername: string;
  creatorAvatarUrl?: string;
}


export default function FeedHome() {
  return (
    <main className="min-h-screen  section-container">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input 
              placeholder="Search campaigns..." 
              className="pl-10"
            />
          </div>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="w-full max-w-md mx-auto grid grid-cols-3">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="petitions">Petitions</TabsTrigger>
              <TabsTrigger value="Campaign">Campaigns</TabsTrigger>
            </TabsList>
            <TabsContent value="all" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {(mockFeeds as Feed[]).map((feed: Feed) => (
                  <FeedCard
                    key={feed.id}
                    {...feed}
                    type={feed.type as "petition" | "donation"}
                  />
                ))}
              </div>
            </TabsContent>
            <TabsContent value="petitions" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {mockFeeds
                  .filter((feed) => feed.type === "petition")
                  .map((feed) => (
                    <FeedCard key={feed.id} {...feed} type={feed.type as "petition" | "donation"} />
                  ))}
              </div>
            </TabsContent>
            <TabsContent value="Campaign" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {mockFeeds
                  .filter((feed) => feed.type === "donation")
                  .map((feed) => (
                    <FeedCard key={feed.id} {...feed} type={feed.type as "petition" | "donation"} />
                  ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </main>
  );
}