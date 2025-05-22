
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
    totalImpact: 12450,
    petitionsStarted: 8,
    campaignsCreated: 5,
    totalContributions: 15,
    successRate: 85,
    goalAchievement: 92
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
      id: "sp1",
      title: "Save Local Wildlife",
      creator: "Wildlife Foundation",
      date: "2024-02-15"
    },
    {
      id: "sp2",
      title: "Renewable Energy Initiative",
      creator: "Green Earth NGO",
      date: "2024-02-10"
    }
  ],
  supportedCampaigns: [
    {
      id: "sc1",
      title: "Food Bank Support",
      amount: 500,
      date: "2024-02-20"
    },
    {
      id: "sc2",
      title: "Emergency Relief Fund",
      amount: 750,
      date: "2024-02-18"
    }
  ],
  badges: [
    {
      id: "b1",
      name: "Impact Pioneer",
      icon: "🌟",
      level: "Gold",
      description: "Reached 10,000+ lives",
      progress: 100
    },
    {
      id: "b2",
      name: "Campaign Master",
      icon: "🎯",
      level: "Silver",
      description: "Created 5 successful campaigns",
      progress: 80
    },
    {
      id: "b3",
      name: "Community Champion",
      icon: "👥",
      level: "Gold",
      description: "Built strong supporter base",
      progress: 100
    },
    {
      id: "b4",
      name: "Change Catalyst",
      icon: "⚡",
      level: "Bronze",
      description: "Initiated impactful changes",
      progress: 60
    }
  ]
}

export default function ProfilePage() {
  const user = dummyUser

  const interestIcons = {
    "Accountability in Governance": Shield,
    "Community Engagement": Users,
    "Crime & Justice": Shield,
    "Election Integrity": Globe,
    "Insecurity": Shield,
    "Tech Innovation": Lightbulb,
    "Education": GraduationCap,
    "Campaign Against Misinformation": Brain,
    "Environment Pollution": Sprout,
    "Inequality": HandHeart,
    "Climate Change": Sprout,
    "Healthcare Outreach": Heart,
    "Food Security For Africa": Home,
    "Human Rights": HandHeart,
    "Citizen Empowerment": Users,
    "Judiciary Reform In Africa": BookOpen
  }

  return (
    <div className="max-w-5xl mx-auto pt-4 mb-12">
      <div className="relative w-full h-48 bg-gray-200 rounded-lg overflow-hidden">
        <img
          src="https://source.unsplash.com/featured/?community"
          alt="Cover"
          className="w-full h-full object-cover"
        />
        <Avatar className="w-32 h-32 absolute -bottom-16 left-6 border-4 border-white shadow-md">
          <AvatarImage src={user.avatar} />
          <AvatarFallback>
            <User className="w-10 h-10" />
          </AvatarFallback>
        </Avatar>
      </div>

      <div className="pt-20 px-6 sm:px-8">
        <h1 className="text-2xl font-bold text-gray-900">{user.name}</h1>
        <p className="text-muted-foreground text-sm mb-4">@{user.username}</p>

        <div className="flex items-center text-sm text-muted-foreground gap-3 mt-2 flex-wrap">
          <span className="flex items-center gap-1">
            <MapPin className="w-4 h-4" />
            {user.location}
          </span>
          <span>Joined {user.joinDate}</span>
        </div>

        <div className="mt-4 max-w-2xl text-sm text-gray-700">
          {user.bio}
        </div>

        <div className="flex flex-wrap gap-4 mt-4">
          <a href={user.website} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline flex items-center gap-1 text-sm">
            <LinkIcon className="w-4 h-4" />
            Website
          </a>
          <a href={user.twitter} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline flex items-center gap-1 text-sm">
            <svg fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4">
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0022.4.36a9.14 9.14 0 01-2.88 1.1 4.48 4.48 0 00-7.64 4.08A12.7 12.7 0 013 2.16a4.48 4.48 0 001.39 5.98A4.41 4.41 0 012 7.5v.05a4.48 4.48 0 003.6 4.4 4.5 4.5 0 01-2 .08 4.48 4.48 0 004.19 3.12A9 9 0 012 19.54 12.66 12.66 0 008.29 21c7.55 0 11.68-6.26 11.68-11.68 0-.18 0-.35-.01-.53A8.4 8.4 0 0023 3z" />
            </svg>
            Twitter
          </a>
          <a href={user.github} target="_blank" rel="noopener noreferrer" className="text-black hover:underline flex items-center gap-1 text-sm">
            <svg fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4">
              <path d="M12 .297a12 12 0 00-3.79 23.4c.6.113.82-.26.82-.577v-2.234c-3.34.726-4.042-1.61-4.042-1.61a3.18 3.18 0 00-1.335-1.75c-1.093-.75.084-.735.084-.735a2.52 2.52 0 011.84 1.235 2.55 2.55 0 003.48.997 2.55 2.55 0 01.762-1.61c-2.66-.3-5.467-1.33-5.467-5.93a4.63 4.63 0 011.235-3.22 4.29 4.29 0 01.117-3.175s1.01-.322 3.3 1.23a11.46 11.46 0 016 0c2.29-1.552 3.3-1.23 3.3-1.23.48 1.295.434 2.747.117 3.175a4.63 4.63 0 011.236 3.22c0 4.61-2.807 5.628-5.48 5.922a2.85 2.85 0 01.813 2.22v3.293c0 .32.218.694.825.577A12.004 12.004 0 0012 .297z" />
            </svg>
            GitHub
          </a>
        </div>

        <div className="mt-4 text-muted-foreground flex items-center gap-4">
          <h3 className="text-sm font-medium whitespace-nowrap">Interests:</h3>
          <div className="flex flex-wrap gap-2">
            {user.interests.map((interest) => {
              const Icon = interestIcons[interest as keyof typeof interestIcons] || User
              return (
                <span key={interest} className="bg-white shadow-md p-2 flex rounded-[6px] items-center gap-2 hover:bg-gray-50 transition-colors">
                  <Icon className="size-5 text-brandgreen" />
                  <p className='text-sm'>{interest}</p>
                </span>
              )
            })}
          </div>
        </div>

        <div className="flex items-center gap-5 mt-6 border-b pb-3">
          <button className="hover:underline">
            <span className="font-bold">{user.following}</span>{" "}
            <span className="text-muted-foreground">Following</span>
          </button>
          <button className="hover:underline">
            <span className="font-bold">{user.followers}</span>{" "}
            <span className="text-muted-foreground">Followers</span>
          </button>
        </div>

        <div className="mt-8">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="flex w-full bg-transparent border-b h-auto">
              <TabsTrigger value="overview" className="flex-1 px-4 py-3 text-sm font-medium border-b-2 border-transparent data-[state=active]:border-brandgreen data-[state=active]:text-brandgreen rounded-none hover:bg-gray-50">Overview</TabsTrigger>
              <TabsTrigger value="my-petitions" className="flex-1 px-4 py-3 text-sm font-medium border-b-2 border-transparent data-[state=active]:border-brandgreen data-[state=active]:text-brandgreen rounded-none hover:bg-gray-50">My Petitions</TabsTrigger>
              <TabsTrigger value="my-campaigns" className="flex-1 px-4 py-3 text-sm font-medium border-b-2 border-transparent data-[state=active]:border-brandgreen data-[state=active]:text-brandgreen rounded-none hover:bg-gray-50">My Campaigns</TabsTrigger>
              <TabsTrigger value="signed" className="flex-1 px-4 py-3 text-sm font-medium border-b-2 border-transparent data-[state=active]:border-brandgreen data-[state=active]:text-brandgreen rounded-none hover:bg-gray-50">Signed Petitions</TabsTrigger>
              <TabsTrigger value="supported" className="flex-1 px-4 py-3 text-sm font-medium border-b-2 border-transparent data-[state=active]:border-brandgreen data-[state=active]:text-brandgreen rounded-none hover:bg-gray-50">Supported</TabsTrigger>
              <TabsTrigger value="badges" className="flex-1 px-4 py-3 text-sm font-medium border-b-2 border-transparent data-[state=active]:border-brandgreen data-[state=active]:text-brandgreen rounded-none hover:bg-gray-50">Badges</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="mt-6">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="p-6 border rounded-lg bg-gradient-to-br from-white to-gray-50">
                  <div className="flex items-center gap-3 mb-3">
                    <Trophy className="w-5 h-5 text-yellow-500" />
                    <h3 className="text-sm font-medium">Total Impact</h3>
                  </div>
                  <p className="text-3xl font-bold text-gray-900">{user.stats.totalImpact.toLocaleString()}</p>
                  <p className="text-sm text-muted-foreground mt-1">Lives impacted</p>
                </div>
                <div className="p-6 border rounded-lg bg-gradient-to-br from-white to-gray-50">
                  <div className="flex items-center gap-3 mb-3">
                    <Target className="w-5 h-5 text-blue-500" />
                    <h3 className="text-sm font-medium">Success Rate</h3>
                  </div>
                  <p className="text-3xl font-bold text-gray-900">{user.stats.successRate}%</p>
                  <p className="text-sm text-muted-foreground mt-1">Campaign success</p>
                </div>
                <div className="p-6 border rounded-lg bg-gradient-to-br from-white to-gray-50">
                  <div className="flex items-center gap-3 mb-3">
                    <Flame className="w-5 h-5 text-orange-500" />
                    <h3 className="text-sm font-medium">Total Campaigns</h3>
                  </div>
                  <p className="text-3xl font-bold text-gray-900">{user.stats.campaignsCreated}</p>
                  <p className="text-sm text-muted-foreground mt-1">Initiatives started</p>
                </div>
                <div className="p-6 border rounded-lg bg-gradient-to-br from-white to-gray-50">
                  <div className="flex items-center gap-3 mb-3">
                    <Award className="w-5 h-5 text-purple-500" />
                    <h3 className="text-sm font-medium">Goal Achievement</h3>
                  </div>
                  <p className="text-3xl font-bold text-gray-900">{user.stats.goalAchievement}%</p>
                  <p className="text-sm text-muted-foreground mt-1">Average completion</p>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="my-petitions" className="mt-6">
              <div className="space-y-6">
                {user.myPetitions.map((petition) => (
                  <div key={petition.id} className="p-6 border rounded-lg bg-white hover:bg-gray-50 transition-colors">
                    <div className="flex justify-between items-start">
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
                    <div className="mt-4 flex items-center gap-4">
                      <Badge variant="outline" className="text-green-600">
                        {petition.signatures.toLocaleString()} signatures
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="my-campaigns" className="mt-6">
              <div className="space-y-6">
                {user.myCampaigns.map((campaign) => (
                  <div key={campaign.id} className="p-6 border rounded-lg bg-white hover:bg-gray-50 transition-colors">
                    <div className="flex justify-between items-start">
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
              <div className="space-y-4">
                {user.signedPetitions.map((petition) => (
                  <div key={petition.id} className="p-4 border rounded-lg bg-white hover:bg-gray-50 transition-colors">
                    <h3 className="font-medium">{petition.title}</h3>
                    <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
                      <span>Created by {petition.creator}</span>
                      <span>•</span>
                      <span>Signed on {petition.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="supported" className="mt-6">
              <div className="space-y-4">
                {user.supportedCampaigns.map((campaign) => (
                  <div key={campaign.id} className="p-4 border rounded-lg bg-white hover:bg-gray-50 transition-colors">
                    <h3 className="font-medium">{campaign.title}</h3>
                    <div className="flex items-center gap-2 mt-2">
                      <Badge variant="outline" className="text-green-600">
                        Contributed ${campaign.amount}
                      </Badge>
                      <span className="text-sm text-muted-foreground">{campaign.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="badges" className="mt-6">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                {user.badges.map((badge) => (
                  <div key={badge.id} className={`p-6 rounded-lg border ${
                    badge.level === 'Gold' ? 'bg-gradient-to-br from-yellow-50 to-yellow-100 border-yellow-200' :
                    badge.level === 'Silver' ? 'bg-gradient-to-br from-gray-50 to-gray-100 border-gray-200' :
                    'bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200'
                  }`}>
                    <div className="flex flex-col items-center text-center">
                      <span className="text-4xl mb-3">{badge.icon}</span>
                      <h3 className="font-semibold">{badge.name}</h3>
                      <span className={`text-sm px-2 py-1 rounded-full mt-2 ${
                        badge.level === 'Gold' ? 'bg-yellow-200 text-yellow-700' :
                        badge.level === 'Silver' ? 'bg-gray-200 text-gray-700' :
                        'bg-orange-200 text-orange-700'
                      }`}>
                        {badge.level}
                      </span>
                      <p className="text-sm text-muted-foreground mt-2">{badge.description}</p>
                      <div className="w-full mt-3">
                        <Progress value={badge.progress} className="h-1.5" />
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
