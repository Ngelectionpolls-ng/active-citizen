'use client';

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Edit2, Flag, Heart, Mail, MapPin, User } from "lucide-react";
import { useState } from "react";
import * as z from "zod";
import { FeedCard } from "../feeds/components/feed-card";

const profileFormSchema = z.object({
  name: z.string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name cannot exceed 50 characters"),
  email: z.string()
    .email("Please enter a valid email address"),
  location: z.string()
    .min(2, "Location must be at least 2 characters")
    .max(100, "Location cannot exceed 100 characters"),
  avatar: z.string()
    .url("Please enter a valid URL")
    .optional()
    .or(z.literal("")),
});

type ProfileFormData = z.infer<typeof profileFormSchema>;

// Mock user data - replace with actual API call
const mockUser = {
  name: "Sarah Johnson",
  email: "sarah.johnson@example.com",
  location: "San Francisco, CA",
  avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
  joinDate: "January 2024",
  isActive: true,
  stats: {
    petitionsSigned: 28,
    petitionsCreated: 3,
    totalDonated: 1250,
    campaignsSupported: 15
  },
  campaigns: {
    created: [
      {
    id: "2",
    type: "donation",
    title: "Emergency Relief Fund",
    description:
      "Support communities affected by recent natural disasters. Your donation will provide essential supplies and aid to those in need.",
    imageUrl: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b",
    target: 50000,
    current: 35000,
    daysLeft: 30,
    creatorName: "James Nolan",
    creatorUsername: "jamesnolan",
    creatorAvatarUrl: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    id: "3",
    type: "petition",
    title: "Protect Ocean Wildlife",
    description:
      "Join our campaign to ban single-use plastics and protect marine life from plastic pollution. Every signature counts towards cleaner oceans.",
    imageUrl: "https://picsum.photos/seed/picsum/800/800",
    target: 25000,
    current: 18750,
    daysLeft: 20,
    creatorName: "Sophia Chen",
    creatorUsername: "sophiachen",
    creatorAvatarUrl: "https://randomuser.me/api/portraits/women/3.jpg",
  },
  {
    id: "4",
    type: "donation",
    title: "Education for All",
    description:
      "Help provide quality education to underprivileged children. Your contribution will fund school supplies, books, and teaching resources.",
    imageUrl: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6",
    target: 75000,
    current: 42000,
    daysLeft: 45,
    creatorName: "Marcus Grant",
    creatorUsername: "marcusgrant",
    creatorAvatarUrl: "https://randomuser.me/api/portraits/men/4.jpg",
  },
    ],
    supported: [
      {
    id: "2",
    type: "donation",
    title: "Emergency Relief Fund",
    description:
      "Support communities affected by recent natural disasters. Your donation will provide essential supplies and aid to those in need.",
    imageUrl: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b",
    target: 50000,
    current: 35000,
    daysLeft: 30,
    creatorName: "James Nolan",
    creatorUsername: "jamesnolan",
    creatorAvatarUrl: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    id: "3",
    type: "petition",
    title: "Protect Ocean Wildlife",
    description:
      "Join our campaign to ban single-use plastics and protect marine life from plastic pollution. Every signature counts towards cleaner oceans.",
    imageUrl: "https://picsum.photos/seed/picsum/800/800",
    target: 25000,
    current: 18750,
    daysLeft: 20,
    creatorName: "Sophia Chen",
    creatorUsername: "sophiachen",
    creatorAvatarUrl: "https://randomuser.me/api/portraits/women/3.jpg",
  },
  {
    id: "4",
    type: "donation",
    title: "Education for All",
    description:
      "Help provide quality education to underprivileged children. Your contribution will fund school supplies, books, and teaching resources.",
    imageUrl: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6",
    target: 75000,
    current: 42000,
    daysLeft: 45,
    creatorName: "Marcus Grant",
    creatorUsername: "marcusgrant",
    creatorAvatarUrl: "https://randomuser.me/api/portraits/men/4.jpg",
  },
    ]
  }
};

export default function ProfilePage() {
  const [userData, setUserData] = useState(mockUser);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const form = useForm<ProfileFormData>({
    resolver: zodResolver(profileFormSchema),
    defaultValues: {
      name: userData.name,
      email: userData.email,
      location: userData.location,
      avatar: userData.avatar,
    },
  });

  const onSubmit = async (data: ProfileFormData) => {
    try {
      // In a real app, this would be an API call
      setUserData({
        ...userData,
        ...data,
      });
      setIsDialogOpen(false);
      form.reset(data); // Reset form with new values
    } catch (error) {
      console.error('Failed to update profile:', error);
    }
  };

  return (
    <main className="min-h-screen section-container">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* Profile Header */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="relative">
              <Avatar className="w-24 h-24">
                <AvatarImage src={userData.avatar} alt={userData.name} />
                <AvatarFallback>
                  <User className="w-12 h-12" />
                </AvatarFallback>
              </Avatar>
              <span className={`absolute top-1 right-1 w-3.5 h-3.5 rounded-full ${userData.isActive ? 'bg-green-500' : 'bg-red-500'} border-2 border-white`}></span>
            </div>
            <div className="flex-grow">
              <div className="flex items-start justify-between">
                <div>
                  <h1 className="text-2xl font-bold mb-2">{userData.name}</h1>
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Mail className="w-4 h-4" />
                      <span>{userData.email}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{userData.location}</span>
                    </div>
                  </div>
                </div>
                <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                  <DialogTrigger asChild>
                    <Button variant="outline" className="hidden md:flex">
                      <Edit2 className="w-4 h-4 mr-2" />
                      Edit Profile
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle>Edit Profile</DialogTitle>
                    </DialogHeader>
                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Name</FormLabel>
                              <FormControl>
                                <Input 
                                  placeholder="Enter your full name"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email</FormLabel>
                              <FormControl>
                                <Input 
                                  type="email"
                                  placeholder="your.email@example.com"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="location"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Location</FormLabel>
                              <FormControl>
                                <Input 
                                  placeholder="City, Country"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="avatar"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Avatar URL</FormLabel>
                              <FormControl>
                                <Input 
                                  placeholder="https://example.com/avatar.jpg"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <Button 
                          type="submit" 
                          className="w-full bg-[#174023] hover:bg-[#0f2816]"
                          disabled={!form.formState.isDirty || form.formState.isSubmitting}
                        >
                          {form.formState.isSubmitting ? "Saving..." : "Save Changes"}
                        </Button>
                      </form>
                    </Form>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </div>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button variant="outline" className="mt-4 md:hidden w-full">
                <Edit2 className="w-4 h-4 mr-2" />
                Edit Profile
              </Button>
            </DialogTrigger>
          </Dialog>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Petitions Signed
              </CardTitle>
              <Flag className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{userData.stats.petitionsSigned}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Petitions Created
              </CardTitle>
              <Edit2 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{userData.stats.petitionsCreated}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Donated
              </CardTitle>
              <Heart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">${userData.stats.totalDonated}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Campaigns Supported
              </CardTitle>
              <User className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{userData.stats.campaignsSupported}</div>
            </CardContent>
          </Card>
        </div>

        {/* Campaigns Tabs */}
        <Tabs defaultValue="created" className="w-full">
          <TabsList className="w-full max-w-md mx-auto grid grid-cols-2">
            <TabsTrigger value="created">Created Campaigns</TabsTrigger>
            <TabsTrigger value="supported">Supported Campaigns</TabsTrigger>
          </TabsList>
          <TabsContent value="created" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {userData.campaigns.created.map((campaign) => (
                <FeedCard key={campaign.id} {...{ ...campaign, type: campaign.type as "donation" | "petition" }} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="supported" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {userData.campaigns.supported.map((campaign) => (
                <FeedCard key={campaign.id} {...{ ...campaign, type: campaign.type as "donation" | "petition" }} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
}