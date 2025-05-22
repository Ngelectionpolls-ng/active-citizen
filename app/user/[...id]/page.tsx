"use client"

import { Icons } from "@/components/shared/icons"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { MapPin, Link as LinkIcon, User, Heart, Users, BookOpen, Lightbulb, Sprout, Home, Globe, Shield, Brain, HandHeart, GraduationCap } from "lucide-react"
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
  interests: [
    "Tech Innovation",
    "Climate Change",
    "Community Engagement",
    "Education",
    "Human Rights"
  ],
  pinnedPosts: [
    {
      id: "p1",
      title: "Tech for Good",
      summary: "How technology is empowering African communities."
    },
    {
      id: "p2",
      title: "Fighting Inequality",
      summary: "Grassroots movements bridging social gaps."
    },
  ],
  created: [
    {
      id: "1",
      title: "Save the Ocean",
      description: "Support ocean cleanup initiatives and reduce plastic pollution."
    },
    {
      id: "2",
      title: "Tree Planting",
      description: "Help us plant 1000 trees to combat climate change."
    },
  ],
  supported: [
    {
      id: "3",
      title: "Education for All",
      description: "Support building schools in underserved communities."
    },
  ],
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
            <TabsList className="grid w-full grid-cols-7 bg-muted h-auto p-1 gap-1">
              <TabsTrigger value="overview" className="text-xs">Overview</TabsTrigger>
              <TabsTrigger value="petitions" className="text-xs">Petitions</TabsTrigger>
              <TabsTrigger value="campaigns" className="text-xs">Campaigns</TabsTrigger>
              <TabsTrigger value="contributed" className="text-xs">Contributed</TabsTrigger>
              <TabsTrigger value="signed" className="text-xs">Signed</TabsTrigger>
              <TabsTrigger value="impacts" className="text-xs">Impacts</TabsTrigger>
              <TabsTrigger value="stats" className="text-xs">Stats</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="mt-6">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="p-4 border rounded-lg">
                  <h3 className="text-sm font-medium mb-2">Total Impact</h3>
                  <p className="text-2xl font-bold">12,450</p>
                  <p className="text-xs text-muted-foreground">Lives impacted</p>
                </div>
                <div className="p-4 border rounded-lg">
                  <h3 className="text-sm font-medium mb-2">Campaigns</h3>
                  <p className="text-2xl font-bold">{user.created.length}</p>
                  <p className="text-xs text-muted-foreground">Created</p>
                </div>
                <div className="p-4 border rounded-lg">
                  <h3 className="text-sm font-medium mb-2">Petitions</h3>
                  <p className="text-2xl font-bold">8</p>
                  <p className="text-xs text-muted-foreground">Started</p>
                </div>
                <div className="p-4 border rounded-lg">
                  <h3 className="text-sm font-medium mb-2">Contributions</h3>
                  <p className="text-2xl font-bold">{user.supported.length}</p>
                  <p className="text-xs text-muted-foreground">Total</p>
                </div>
              </div>

              <div className="mt-8">
                <h2 className="text-lg font-semibold mb-4">Achievement Badges</h2>
                <div className="grid grid-cols-5 gap-4">
                  {[
                    { name: "First Impact", icon: "🌟", unlocked: true },
                    { name: "Community Builder", icon: "👥", unlocked: true },
                    { name: "Change Maker", icon: "🌍", unlocked: true },
                    { name: "Voice of Many", icon: "📢", unlocked: false },
                    { name: "Rising Star", icon: "⭐", unlocked: false },
                  ].map((badge) => (
                    <div key={badge.name} className={`flex flex-col items-center p-4 rounded-lg border ${badge.unlocked ? 'bg-white' : 'bg-gray-50 opacity-50'}`}>
                      <span className="text-2xl mb-2">{badge.icon}</span>
                      <p className="text-xs text-center font-medium">{badge.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="petitions" className="mt-6">
              <h2 className="text-lg font-semibold mb-4">My Petitions</h2>
              <div className="space-y-4">
                {user.pinnedPosts.map((post) => (
                  <div key={post.id} className="p-4 border rounded-lg">
                    <h3 className="font-medium">{post.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{post.summary}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <Badge variant="secondary">1,234 signatures</Badge>
                      <Badge variant="outline">Active</Badge>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="campaigns" className="mt-6">
              <h2 className="text-lg font-semibold mb-4">My Campaigns</h2>
              <div className="space-y-4">
                {user.created.map((campaign) => (
                  <div key={campaign.id} className="p-4 border rounded-lg">
                    <h3 className="font-medium">{campaign.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{campaign.description}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <Badge variant="secondary">$12,345 raised</Badge>
                      <Badge variant="outline">Ongoing</Badge>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="impacts" className="mt-6">
              <div className="mb-8">
                <h2 className="text-lg font-semibold mb-4">Impact Achievements</h2>
                <div className="grid grid-cols-5 gap-4">
                  {[
                    { name: "100 Lives", icon: "💖", count: "100", unlocked: true },
                    { name: "Earth Guardian", icon: "🌍", count: "500", unlocked: true },
                    { name: "Hope Bearer", icon: "🕊️", count: "1000", unlocked: true },
                    { name: "Community Hero", icon: "👑", count: "5000", unlocked: false },
                    { name: "Legend", icon: "⚡", count: "10000", unlocked: false },
                  ].map((badge) => (
                    <div key={badge.name} className={`flex flex-col items-center p-4 rounded-lg border ${badge.unlocked ? 'bg-white' : 'bg-gray-50 opacity-50'}`}>
                      <span className="text-2xl mb-2">{badge.icon}</span>
                      <p className="text-xs text-center font-medium">{badge.name}</p>
                      <p className="text-xs text-muted-foreground">{badge.count} lives</p>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="stats" className="mt-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="font-medium">Campaign Performance</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Success Rate</span>
                      <span className="font-medium">85%</span>
                    </div>
                    <Progress value={85} />
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="font-medium">Petition Success</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Goal Achievement</span>
                      <span className="font-medium">92%</span>
                    </div>
                    <Progress value={92} />
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}