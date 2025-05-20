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
import { MapPin, Link as LinkIcon, User, Heart, Users } from "lucide-react"

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
    "Accountability in Governance": Icons.accountability,
    "Community Engagement": Icons.community,
    "Crime & Justice": Icons.crime,
    "Election Integrity": Icons.election,
    "Insecurity": Icons.accountability,
    "Tech Innovation": Icons.tech,
    "Education": Icons.education,
    "Campaign Against Misinformation": Icons.community,
    "Environment Pollution": Icons.election,
    "Inequality": Icons.election,
    "Climate Change": Icons.climate,
    "Healthcare Outreach": Icons.healthcare,
    "Food Security For Africa": Icons.crime,
    "Human Rights": Icons.tech,
    "Citizen Empowerment": Icons.empowerment,
    "Judiciary Reform In Africa": Icons.judiciary
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
        
        <div className="mt-4 text-muted-foreground">
          <h3 className="text-sm font-medium mb-2">Interests</h3>
          <div className="flex flex-wrap gap-2">
            {user.interests.map((interest) => {
              const Icon = interestIcons[interest as keyof typeof interestIcons] || User
              return (
                <span key={interest} className="bg-white shadow-sm p-1 flex rounded-[4px] items-center">
                  <Icon className="size-4" />
                  <p className='text-sm ml-1'>{interest}</p>
                </span>
              )
            })}
          </div>
        </div>


        <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          <div className="bg-muted rounded-lg py-4">
            <p className="text-xl font-bold">{user.following}</p>
            <p className="text-xs text-muted-foreground">Following</p>
          </div>
          <div className="bg-muted rounded-lg py-4">
            <p className="text-xl font-bold">{user.followers}</p>
            <p className="text-xs text-muted-foreground">Followers</p>
          </div>
          <div className="bg-muted rounded-lg py-4">
            <p className="text-xl font-bold">{user.created.length}</p>
            <p className="text-xs text-muted-foreground">Campaigns Created</p>
          </div>
          <div className="bg-muted rounded-lg py-4">
            <p className="text-xl font-bold">{user.supported.length}</p>
            <p className="text-xs text-muted-foreground">Campaigns Supported</p>
          </div>
        </div>

        <div className="mt-10">
          <h2 className="font-semibold text-lg mb-4">Pinned Posts</h2>
          {user.pinnedPosts.length ? (
            <ul className="space-y-4">
              {user.pinnedPosts.map((post) => (
                <li key={post.id} className="p-4 bg-white border rounded-lg shadow-sm">
                  <h3 className="font-semibold text-lg">{post.title}</h3>
                  <p className="text-sm text-muted-foreground">{post.summary}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-muted-foreground">No pinned posts yet.</p>
          )}
        </div>
      </div>

      <div className="mt-10 px-6 sm:px-8">
        <Tabs defaultValue="created" className="w-full">
          <TabsList className="grid w-full grid-cols-2 bg-muted">
            <TabsTrigger value="created">Campaigns Created</TabsTrigger>
            <TabsTrigger value="supported">Campaigns Supported</TabsTrigger>
          </TabsList>

          <TabsContent value="created" className="mt-6">
            {user.created.length > 0 ? (
              <ul className="space-y-4">
                {user.created.map((campaign) => (
                  <li key={campaign.id} className="p-4 rounded-lg border bg-white shadow-sm">
                    <h3 className="font-semibold text-lg">{campaign.title}</h3>
                    <p className="text-sm text-muted-foreground">{campaign.description}</p>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-muted-foreground">No campaigns created yet.</p>
            )}
          </TabsContent>

          <TabsContent value="supported" className="mt-6">
            {user.supported.length > 0 ? (
              <ul className="space-y-4">
                {user.supported.map((campaign) => (
                  <li key={campaign.id} className="p-4 rounded-lg border bg-white shadow-sm">
                    <h3 className="font-semibold text-lg">{campaign.title}</h3>
                    <p className="text-sm text-muted-foreground">{campaign.description}</p>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-muted-foreground">No campaigns supported yet.</p>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}