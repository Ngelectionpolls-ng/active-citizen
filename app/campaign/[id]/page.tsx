'use client';

import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Calendar, Heart, Share2, Users } from "lucide-react";
import { useParams } from "next/navigation";

// Mock data - replace with actual API call
const mockCampaign = {
  id: "1",
  type: "petition",
  title: "Save Local Wildlife Park",
  description: `Help us protect our local wildlife park from being turned into a commercial development. We need your support to preserve this vital ecosystem.

Our local wildlife park has been a sanctuary for countless species and a beloved community space for over 50 years. Now, it faces the threat of being converted into a shopping complex.

Key reasons to support this petition:
- Home to 100+ species of local wildlife
- Educational resource for schools
- Green space for community recreation
- Historical significance to our region

Your signature can make a difference in preserving this irreplaceable natural habitat for future generations.`,
  imageUrl: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05",
  target: 10000,
  current: 7500,
  daysLeft: 15,
  organizer: "Wildlife Protection Alliance",
  dateStarted: "2024-01-15",
  updates: [
    {
      date: "2024-03-20",
      title: "Milestone Reached!",
      content: "We've reached 75% of our target! Thank you for your continued support.",
    },
    {
      date: "2024-02-28",
      title: "Community Meeting Success",
      content: "Yesterday's community meeting was attended by over 200 supporters. Local council members have agreed to review our proposal.",
    },
  ],
};

export default function CampaignPage() {
  const params = useParams();
  const progress = (mockCampaign.current / mockCampaign.target) * 100;

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <img
                src={mockCampaign.imageUrl}
                alt={mockCampaign.title}
                className="w-full h-[400px] object-cover"
              />
              <div className="p-6">
                <h1 className="text-3xl font-bold mb-4">{mockCampaign.title}</h1>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>Started {mockCampaign.dateStarted}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    <span>By {mockCampaign.organizer}</span>
                  </div>
                </div>
                <div className="prose max-w-none">
                  {mockCampaign.description.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="mb-4">{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>

            {/* Updates Section */}
            <div className="mt-8 bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-semibold mb-6">Campaign Updates</h2>
              <div className="space-y-6">
                {mockCampaign.updates.map((update, index) => (
                  <div key={index}>
                    <div className="flex items-center gap-4 mb-2">
                      <h3 className="font-semibold">{update.title}</h3>
                      <span className="text-sm text-muted-foreground">{update.date}</span>
                    </div>
                    <p className="text-muted-foreground">{update.content}</p>
                    {index < mockCampaign.updates.length - 1 && (
                      <Separator className="mt-6" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-8">
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center gap-2">
                    {mockCampaign.type === 'petition' ? (
                      <>
                        <Users className="h-5 w-5" />
                        <span className="font-semibold">{mockCampaign.current.toLocaleString()} signatures</span>
                      </>
                    ) : (
                      <>
                        <Heart className="h-5 w-5" />
                        <span className="font-semibold">${mockCampaign.current.toLocaleString()} raised</span>
                      </>
                    )}
                  </div>
                  <span className="text-[#174023] font-medium">{Math.round(progress)}%</span>
                </div>
                <Progress value={progress} className="h-2 mb-2" />
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>
                    {mockCampaign.type === 'petition' 
                      ? `${mockCampaign.target.toLocaleString()} target signatures`
                      : `$${mockCampaign.target.toLocaleString()} target`
                    }
                  </span>
                  <span>{mockCampaign.daysLeft} days left</span>
                </div>
              </div>

              <div className="space-y-4">
                <Button className="w-full bg-[#174023] hover:bg-[#0f2816]">
                  {mockCampaign.type === 'petition' ? 'Sign Petition' : 'Donate Now'}
                </Button>
                <Button variant="outline" className="w-full">
                  <Share2 className="h-4 w-4 mr-2" />
                  Share Campaign
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}