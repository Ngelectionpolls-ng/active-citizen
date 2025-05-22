"use client"

import { Icons } from "@/components/shared/icons"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MapPin, Link as LinkIcon, User, Heart, Users, BookOpen, Lightbulb, Sprout, Home, Globe, Shield, Brain, HandHeart, GraduationCap, Trophy, Target, Flame, Award } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

const dummyUser = {
  name: "Adewale Johnson",
  username: "adewalej",
  email: "adewalej@example.com",
  avatar: "https://i.pravatar.cc/150?img=3",
  location: "Lagos, Nigeria",
  joinDate: "Jan 2024",
  bio: "I'm a tech enthusiast passionate about sustainability and community development. I love building impactful projects and supporting causes that bring positive change.",
  website: "https://adewale.dev",
  twitter: "https://twitter.com/adewalej",
  github: "https://github.com/adewalej",
  followers: 120,
  following: 87,
  interests: ["Tech Innovation", "Climate Change", "Community Engagement", "Education", "Human Rights"],
  stats: {
    totalImpact: 1000000,
    successRate: 95,
    campaignsCreated: 100,
    goalAchievement: 98,
    achievements: {
      signatures: 10,
      donations: 100,
      supporters: 1000,
      impacts: 10000,
      petitionsWon: 100000,
      fundingRaised: 1000000
    },
  },
  myPetitions: [
    {
      id: "p1",
      title: "Tech Education for Rural Areas",
      summary: "Bringing digital literacy to underserved communities",
      signatures: 1234,
      status: "Active",
      goalReached: 75
    },
    {
      id: "p2",
      title: "Clean Water Initiative",
      summary: "Ensuring access to clean water in remote villages",
      signatures: 2156,
      status: "Active",
      goalReached: 90
    },
    {
      id: "p3",
      title: "Youth Employment Program",
      summary: "Creating job opportunities for young graduates",
      signatures: 856,
      status: "Completed",
      goalReached: 100
    }
  ],
  myCampaigns: [
    {
      id: "c1",
      title: "School Building Project",
      description: "Building a new school in rural community",
      raised: 12345,
      goal: 15000,
      status: "Active"
    },
    {
      id: "c2",
      title: "Healthcare Outreach",
      description: "Mobile clinic for remote villages",
      raised: 8500,
      goal: 10000,
      status: "Active"
    }
  ],
  signedPetitions: [
    {
      id: 1,
      title: "Save Local Parks",
      creator: "Jane Smith",
      date: "2024-01-15",
      impact: 10000
    },
    {
      id: 2,
      title: "Education For All",
      creator: "John Doe",
      date: "2024-02-01",
      impact: 100000
    }
  ],
  supportedCampaigns: [
    {
      id: 1,
      title: "Clean Water Initiative",
      amount: 1500,
      date: "2024-01-20",
      impact: 100000
    },
    {
      id: 2,
      title: "Tech Education Fund",
      amount: 2500,
      date: "2024-02-05",
      impact: 250000
    }
  ],
  badges: [
    {
      id: "b1",
      name: "Impact Starter",
      icon: "🌱",
      level: "Bronze",
      description: "Impacted 10 lives",
      threshold: 10,
      unlocked: true
    },
    {
      id: "b2",
      name: "Community Builder",
      icon: "🤝",
      level: "Bronze",
      description: "Impacted 100 lives",
      threshold: 100,
      unlocked: true
    },
    {
      id: "b3",
      name: "Change Maker",
      icon: "🌟",
      level: "Silver",
      description: "Impacted 1,000 lives",
      threshold: 1000,
      unlocked: true
    },
    {
      id: "b4",
      name: "Impact Leader",
      icon: "🏆",
      level: "Silver",
      description: "Impacted 10,000 lives",
      threshold: 10000,
      unlocked: true
    },
    {
      id: "b5",
      name: "Visionary",
      icon: "🚀",
      level: "Gold",
      description: "Impacted 100,000 lives",
      threshold: 100000,
      unlocked: true
    },
    {
      id: "b6",
      name: "World Changer",
      icon: "🌍",
      level: "Gold",
      description: "Impacted 1,000,000 lives",
      threshold: 1000000,
      unlocked: true
    }
  ]
}

export default function ProfilePage() {
  const user = dummyUser

  const interestIcons = {
    "Tech Innovation": Lightbulb,
    "Climate Change": Sprout,
    "Community Engagement": Users,
    "Education": GraduationCap,
    "Human Rights": HandHeart
  }

  return (
    <div className="max-w-5xl mx-auto pt-4 mb-12 px-4 sm:px-6">
      <div className="relative w-full h-48 sm:h-64 bg-gray-200 rounded-lg overflow-hidden">
        <img
          src="https://source.unsplash.com/featured/?community"
          alt="Cover"
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 px-6 py-4 bg-gradient-to-t from-black/60 to-transparent">
          <Avatar className="w-24 h-24 sm:w-32 sm:h-32 border-4 border-white shadow-md">
            <AvatarImage src={user.avatar} />
            <AvatarFallback>
              <User className="w-10 h-10" />
            </AvatarFallback>
          </Avatar>
        </div>
      </div>

      <div className="pt-4 sm:pt-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">{user.name}</h1>
            <p className="text-muted-foreground text-sm">@{user.username}</p>
          </div>

          <div className="flex items-center text-sm text-muted-foreground gap-3 mt-2 sm:mt-0">
            <span className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              {user.location}
            </span>
            <span>Joined {user.joinDate}</span>
          </div>
        </div>

        <div className="mt-4 text-sm text-gray-700">{user.bio}</div>

        <div className="flex flex-wrap gap-4 mt-4">
          {user.website && (
            <a href={user.website} target="_blank" rel="noopener noreferrer" 
               className="text-blue-600 hover:underline flex items-center gap-1 text-sm">
              <LinkIcon className="w-4 h-4" />
              Website
            </a>
          )}
          {user.twitter && (
            <a href={user.twitter} target="_blank" rel="noopener noreferrer" 
               className="text-blue-500 hover:underline flex items-center gap-1 text-sm">
              <Icons.twitter className="w-4 h-4" />
              Twitter
            </a>
          )}
        </div>

        <div className="mt-6">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="flex w-full overflow-x-auto bg-transparent border-b h-auto">
              <TabsTrigger value="overview" className="flex-1 min-w-[120px] px-4 py-3 text-sm font-medium border-b-2 border-transparent data-[state=active]:border-brandgreen data-[state=active]:text-brandgreen rounded-none hover:bg-gray-50">
                Overview
              </TabsTrigger>
              <TabsTrigger value="my-petitions" className="flex-1 min-w-[120px] px-4 py-3 text-sm font-medium border-b-2 border-transparent data-[state=active]:border-brandgreen data-[state=active]:text-brandgreen rounded-none hover:bg-gray-50">
                My Petitions
              </TabsTrigger>
              <TabsTrigger value="my-campaigns" className="flex-1 min-w-[120px] px-4 py-3 text-sm font-medium border-b-2 border-transparent data-[state=active]:border-brandgreen data-[state=active]:text-brandgreen rounded-none hover:bg-gray-50">
                My Campaigns
              </TabsTrigger>
              <TabsTrigger value="signed" className="flex-1 min-w-[120px] px-4 py-3 text-sm font-medium border-b-2 border-transparent data-[state=active]:border-brandgreen data-[state=active]:text-brandgreen rounded-none hover:bg-gray-50">
                Signed Petitions
              </TabsTrigger>
              <TabsTrigger value="my-supports" className="flex-1 min-w-[120px] px-4 py-3 text-sm font-medium border-b-2 border-transparent data-[state=active]:border-brandgreen data-[state=active]:text-brandgreen rounded-none hover:bg-gray-50">
                My Supports
              </TabsTrigger>
              <TabsTrigger value="achievements" className="flex-1 min-w-[120px] px-4 py-3 text-sm font-medium border-b-2 border-transparent data-[state=active]:border-brandgreen data-[state=active]:text-brandgreen rounded-none hover:bg-gray-50">
                Achievements
              </TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="mt-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="p-6 border rounded-lg bg-gradient-to-br from-white to-gray-50">
                  <div className="flex items-center gap-3 mb-3">
                    <Trophy className="w-5 h-5 text-yellow-500" />
                    <h3 className="text-sm font-medium">Total Impact</h3>
                  </div>
                  <p className="text-3xl font-bold text-gray-900">{user.stats.achievements.impacts.toLocaleString()}</p>
                  <p className="text-sm text-muted-foreground mt-1">Lives touched</p>
                </div>

                <div className="p-6 border rounded-lg bg-gradient-to-br from-white to-gray-50">
                  <div className="flex items-center gap-3 mb-3">
                    <Award className="w-5 h-5 text-purple-500" />
                    <h3 className="text-sm font-medium">Petitions Won</h3>
                  </div>
                  <p className="text-3xl font-bold text-gray-900">{user.stats.achievements.petitionsWon.toLocaleString()}</p>
                  <p className="text-sm text-muted-foreground mt-1">Successful campaigns</p>
                </div>

                <div className="p-6 border rounded-lg bg-gradient-to-br from-white to-gray-50">
                  <div className="flex items-center gap-3 mb-3">
                    <Heart className="w-5 h-5 text-red-500" />
                    <h3 className="text-sm font-medium">Total Raised</h3>
                  </div>
                  <p className="text-3xl font-bold text-gray-900">${user.stats.achievements.fundingRaised.toLocaleString()}</p>
                  <p className="text-sm text-muted-foreground mt-1">Funds generated</p>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="my-petitions" className="mt-6">
              <div className="grid gap-6">
                {user.myPetitions.map((petition) => (
                  <div key={petition.id} className="p-6 border rounded-lg bg-white hover:bg-gray-50 transition-colors">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div>
                        <h3 className="font-semibold text-lg">{petition.title}</h3>
                        <p className="text-sm text-muted-foreground mt-1">{petition.summary}</p>
                      </div>
                      <Badge variant={petition.status === "Active" ? "default" : "secondary"}>
                        {petition.status}
                      </Badge>
                    </div>
                    <div className="mt-4">
                      <div className="flex justify-between text-sm mb-2">
                        <span>Progress</span>
                        <span className="font-medium">{petition.goalReached}%</span>
                      </div>
                      <Progress value={petition.goalReached} className="h-2" />
                    </div>
                    <div className="mt-4">
                      <Badge variant="outline" className="text-green-600">
                        {petition.signatures.toLocaleString()} signatures
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="my-campaigns" className="mt-6">
              <div className="grid gap-6">
                {user.myCampaigns.map((campaign) => (
                  <div key={campaign.id} className="p-6 border rounded-lg bg-white hover:bg-gray-50 transition-colors">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div>
                        <h3 className="font-semibold text-lg">{campaign.title}</h3>
                        <p className="text-sm text-muted-foreground mt-1">{campaign.description}</p>
                      </div>
                      <Badge variant={campaign.status === "Active" ? "default" : "secondary"}>
                        {campaign.status}
                      </Badge>
                    </div>
                    <div className="mt-4">
                      <div className="flex justify-between text-sm mb-2">
                        <span>Fundraising Progress</span>
                        <span className="font-medium">${campaign.raised.toLocaleString()} of ${campaign.goal.toLocaleString()}</span>
                      </div>
                      <Progress value={(campaign.raised / campaign.goal) * 100} className="h-2" />
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="signed" className="mt-6">
              <div className="grid gap-4">
                {user.signedPetitions.map((petition) => (
                  <div key={petition.id} className="p-4 border rounded-lg bg-white hover:bg-gray-50 transition-colors">
                    <h3 className="font-medium">{petition.title}</h3>
                    <div className="flex flex-wrap items-center gap-2 mt-2 text-sm text-muted-foreground">
                      <span>Created by {petition.creator}</span>
                      <span>•</span>
                      <span>Signed on {petition.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="my-supports" className="mt-6">
              <div className="grid gap-4">
                {user.supportedCampaigns.map((campaign) => (
                  <div key={campaign.id} className="p-4 border rounded-lg bg-white hover:bg-gray-50 transition-colors">
                    <h3 className="font-medium">{campaign.title}</h3>
                    <div className="flex flex-wrap items-center gap-2 mt-2">
                      <Badge variant="outline" className="text-green-600">
                        Contributed ${campaign.amount}
                      </Badge>
                      <span className="text-sm text-muted-foreground">{campaign.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="achievements" className="mt-6">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {user.badges.map((badge) => (
                  <div 
                    key={badge.id} 
                    className={`p-6 rounded-lg border transition-all ${
                      badge.unlocked 
                        ? badge.level === 'Gold' 
                          ? 'bg-gradient-to-br from-yellow-50 to-yellow-100 border-yellow-200' 
                          : badge.level === 'Silver' 
                            ? 'bg-gradient-to-br from-gray-50 to-gray-100 border-gray-200' 
                            : 'bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200'
                        : 'bg-gray-100 border-gray-300 opacity-50'
                    }`}
                  >
                    <div className="flex flex-col items-center text-center">
                      <span className="text-4xl mb-3">{badge.icon}</span>
                      <h3 className="font-semibold">{badge.name}</h3>
                      <span className={`text-sm px-2 py-1 rounded-full mt-2 ${
                        badge.unlocked 
                          ? badge.level === 'Gold' 
                            ? 'bg-yellow-200 text-yellow-700' 
                            : badge.level === 'Silver' 
                              ? 'bg-gray-200 text-gray-700' 
                              : 'bg-orange-200 text-orange-700'
                          : 'bg-gray-200 text-gray-500'
                      }`}>
                        {badge.level}
                      </span>
                      <p className="text-sm text-muted-foreground mt-2">{badge.description}</p>
                      <div className="w-full mt-3">
                        <Progress 
                          value={badge.unlocked ? 100 : Math.min((user.stats.achievements.impacts / badge.threshold) * 100, 100)} 
                          className="h-1.5" 
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}