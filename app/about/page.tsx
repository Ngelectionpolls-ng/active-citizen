"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Users, Heart, ArrowRight, Building2, Target } from "lucide-react"
import Link from "next/link"

const teamMembers = [
  {
    name: "Sarah Johnson",
    role: "Executive Director",
    image: "https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg",
  },
  {
    name: "Michael Chen",
    role: "Campaign Director",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
  },
  {
    name: "Aisha Patel",
    role: "Community Outreach",
    image: "https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg",
  },
  {
    name: "David Rodriguez",
    role: "Technology Lead",
    image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg",
  }
]

const impactStats = [
  { number: "1M+", label: "Community Members" },
  { number: "500+", label: "Successful Campaigns" },
  { number: "50K+", label: "Volunteers" },
  { number: "100+", label: "Partner Organizations" }
]

const values = [
  {
    icon: Users,
    title: "Community First",
    description: "We believe in the power of people coming together to create positive change."
  },
  {
    icon: Heart,
    title: "Compassion",
    description: "Every action we take is guided by empathy and understanding."
  },
  {
    icon: Target,
    title: "Impact Driven",
    description: "We focus on measurable results that make a real difference in people's lives."
  },
  {
    icon: Building2,
    title: "Transparency",
    description: "We maintain open communication and accountability in all our work."
  }
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative h-[500px] overflow-hidden">
        <div className="absolute inset-0 bg-orange-500/90">
          <img 
            src="https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg"
            alt="Community action"
            className="w-full h-full object-cover mix-blend-overlay"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
        <div className="relative max-w-5xl mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              About Us
            </h1>
            <p className="text-xl text-white/90 mb-8">
              We're a community of more than a million people who take small actions on issues they care about, which all add up to create big change.
            </p>
            <Button asChild size="lg">
              <Link href="/join">
                Join Our Movement
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Impact Stats */}
      <div className="py-20 bg-muted">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-orange-500 mb-2">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Purpose */}
      <div className="py-20">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Our Purpose</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <p className="text-lg text-muted-foreground">
                Too often people like us are told we can't make a difference. A handful of powerful, often wealthy people and corporations have made it their mission to divide us so they can force through laws and rules that suit their narrow interests and line their pockets, all while trashing our living standards and our environment in the process.
              </p>
              <p className="text-lg text-muted-foreground">
                But whether we're older or younger, from a big city or a small town, whether we're Black, white, Asian or Brown, scraping to get by or a bit more comfortable – we know that when we come together, we can be powerful.
              </p>
            </div>
            <div className="space-y-6">
              {values.map((value, index) => (
                <Card key={index} className="p-4">
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-orange-100">
                      <value.icon className="h-6 w-6 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{value.title}</h3>
                      <p className="text-sm text-muted-foreground">{value.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Our Team */}
      <div className="py-20 bg-muted">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Team</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center">
                <div className="aspect-square rounded-full overflow-hidden mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-semibold">{member.name}</h3>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Get Involved */}
      <div className="py-20">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Get Involved</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join our community of changemakers and help us create positive impact. Whether you're an individual or an organization, there's a place for you in our movement.
          </p>
          <div className="flex justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/join">Start a Campaign</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/donate">Support Our Work</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}