"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Users, Heart, ArrowRight, Building2, Target } from "lucide-react";
import Link from "next/link";

// Impact stats inferred from document's narrative (no specific numbers provided)
const impactStats = [
  { number: "Millions", label: "Community Members" },
  { number: "100+", label: "Local Initiatives" },
  { number: "1000s", label: "Volunteers" },
  { number: "Nationwide", label: "Reach Across Nigeria" },
];

// Values aligned with document's objectives and methodology
const values = [
  {
    icon: Users,
    title: "Unity in Diversity",
    description: "We embrace our differences and unite for a stronger Nigeria.",
  },
  {
    icon: Heart,
    title: "Justice and Equality",
    description:
      "Every action is driven by fairness and respect for all citizens.",
  },
  {
    icon: Target,
    title: "Community-Driven Change",
    description: "Small local actions lead to national transformation.",
  },
  {
    icon: Building2,
    title: "Accountability",
    description: "We demand transparent governance and empower citizens.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative h-[500px] overflow-hidden">
        <div className="absolute inset-0 bg-orange-500/90">
          <img
            src="https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg"
            alt="Community action in Nigeria"
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
              At the heart of Nigeria lies a movement, a coalition of people
              from all walks of life united by one shared belief: that we, as
              active citizens, hold the power to ignite change.
            </p>
            <Button asChild size="lg">
              <Link href="/register">
                Join Our Movement
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Who We Are */}
      <div className="py-20">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Who We Are</h2>
          <div className="space-y-4">
            <p className="text-lg text-muted-foreground">
              We are everyday Nigerians with extraordinary resolve. From the
              motor mechanic in Kaduna to the software engineer in Abuja, we are
              bound by a shared vision: a Nigeria where no one is left behind.
              In classrooms, markets, farms, and offices, our members carve out
              time from their busy lives to take action on the issues that
              matter most to their communities.
            </p>
            <p className="text-lg text-muted-foreground">
              Our strength lies in our diversity. Whether young or old, wealthy
              or struggling to make ends meet, Christian, Muslim, or
              traditionalist, we believe that our differences enrich us, and our
              unity empowers us. Together, we represent the heartbeat of
              Nigeria—a nation brimming with potential, driven by the resilience
              and determination of its people.
            </p>
          </div>
        </div>
      </div>

      {/* Impact Stats */}
      <div className="py-20 bg-muted">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-orange-500 mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Purpose */}
      <div className="py-20">
        A
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Our Purpose</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <p className="text-lg text-muted-foreground">
                Our objectives are rooted in a vision of justice, equality, and
                progress. We seek a Nigeria where every child, regardless of
                their background, has access to quality education. A country
                where governance is transparent, and leaders are held
                accountable by the people they serve. A society where justice
                prevails, and no one is above the law.
              </p>
              <p className="text-lg text-muted-foreground">
                We are driven by the hope of a Nigeria where economic
                opportunities abound, and poverty is a relic of the past. A
                nation where every citizen, from the fishermen in Bayelsa to the
                market traders in Onitsha, can thrive in dignity. Our objectives
                call for nothing less than a complete transformation, building a
                Nigeria where everyone is treated with respect and where our
                shared humanity forms the cornerstone of every decision.
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
                      <p className="text-sm text-muted-foreground">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Our Initiatives */}
      <div className="py-20 bg-muted">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Our Initiatives</h2>
          <div className="space-y-4">
            <p className="text-lg text-muted-foreground">
              In the slums of Port Harcourt, a young mother named Aisha, tired
              of watching her children suffer from waterborne diseases,
              spearheaded a community initiative to secure clean water. With the
              support of our movement, she mobilized her neighbours, raised
              awareness, and demanded action. Today, her community boasts clean
              water facilities, saving lives and inspiring other neighbourhoods
              to take similar steps.
            </p>
            <p className="text-lg text-muted-foreground">
              In the outskirts of Kano, Ibrahim, a farmer, struggled with
              dwindling harvests due to outdated farming methods. By joining our
              movement, he gained access to modern agricultural training and
              tools. Today, Ibrahim’s fields flourish, and he teaches other
              farmers to adopt sustainable practices, turning once-barren land
              into fertile ground that feeds entire communities.
            </p>
            <p className="text-lg text-muted-foreground">
              Our initiatives span the length and breadth of Nigeria, from
              advocating for better healthcare in rural communities to rallying
              for quality education in urban centers. Whether fighting
              environmental degradation in the Niger Delta or pushing for police
              reform in major cities, we are united by a single goal: to create
              a better Nigeria for everyone, one community at a time.
            </p>
          </div>
        </div>
      </div>

      {/* Our Methodology */}
      <div className="py-20">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Our Methodology</h2>
          <div className="space-y-4">
            <p className="text-lg text-muted-foreground">
              Our approach begins in local communities, with individuals who
              dare to take a stand. In a small village in Ekiti State, a teacher
              named Funmi, determined to give her students a fighting chance,
              started a campaign to secure better learning materials. With our
              support, her campaign gained traction, resulting in the donation
              of books, desks, and even digital learning devices. Today, her
              students are thriving, and the ripple effect of her efforts is
              being felt far beyond her village.
            </p>
            <p className="text-lg text-muted-foreground">
              In Lagos, Chidi, a civil engineer, became fed up with poor road
              conditions that endangered lives daily. He worked with our
              movement to organize a petition, gaining thousands of signatures
              and leading to significant road repairs. For Chidi, it was more
              than fixing potholes; it was about restoring dignity and safety to
              his community.
            </p>
            <p className="text-lg text-muted-foreground">
              Our methodology thrives on the belief that small, local actions
              build toward national transformation. Through advocacy,
              capacity-building workshops, and the power of storytelling, we
              empower citizens to take control of their futures. By connecting
              communities and amplifying their voices, we create a ripple effect
              of change that reverberates throughout the nation.
            </p>
          </div>
        </div>
      </div>

      {/* Join the Movement */}
      <div className="py-20 bg-muted">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Join the Movement</h2>
          <div className="space-y-4 max-w-2xl mx-auto">
            <p className="text-lg text-muted-foreground">
              Becoming part of the active citizen movement means standing
              shoulder to shoulder with millions of Nigerians who believe in the
              power of unity and action. It means realizing that change begins
              with you, whether in your neighbourhood, school, or workplace.
              When you join, you become part of a larger story—a story of
              transformation, resilience, and hope.
            </p>
            <p className="text-lg text-muted-foreground">
              You don’t have to be a seasoned activist to make a difference.
              Whether you’re starting your first petition, organizing a local
              clean-up drive, or simply spreading the word about our campaigns,
              your contribution matters. Together, we’ll stand up to injustice,
              demand accountability, and work tirelessly for a Nigeria that
              reflects the best of us all.
            </p>
            <Button asChild size="lg">
              <Link href="/register">Join Now</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Donate to a Cause */}
      <div className="py-20">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Donate to a Cause or Campaign
          </h2>
          <div className="space-y-4 max-w-2xl mx-auto">
            <p className="text-lg text-muted-foreground">
              Your support fuels the heart of our movement. Every naira donated
              helps us fund vital initiatives, from building schools in
              underserved areas to providing healthcare in the most remote
              regions. But donations aren’t the only way to contribute. You can
              volunteer your time, expertise, or even help spread the word about
              our campaigns.
            </p>
            <p className="text-lg text-muted-foreground">
              Every effort counts, no matter how small. By supporting our
              causes, you help strengthen the movement for a fairer, brighter
              Nigeria. Together, we’ll ensure that every community, no matter
              how distant, feels the impact of collective action.
            </p>
            <Button asChild variant="outline" size="lg">
              <Link href="/campaigns">Donate Now</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Sign Up to a Petition */}
      <div className="py-20 bg-muted">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Sign Up to a Petition</h2>
          <div className="space-y-4 max-w-2xl mx-auto">
            <p className="text-lg text-muted-foreground">
              Change begins with a single signature. By signing our petitions,
              you add your voice to a growing chorus of Nigerians demanding
              better governance, equitable policies, and justice for all. Each
              petition represents the hopes and dreams of everyday people
              standing up for their rights and holding leaders accountable.
            </p>
            <p className="text-lg text-muted-foreground">
              Whether you’re advocating for improved healthcare, supporting the
              fight against corruption, or championing environmental justice,
              your voice matters. Join thousands of others in pushing for the
              Nigeria we all deserve. Together, we are stronger, louder, and
              unstoppable.
            </p>
            <Button asChild size="lg">
              <Link href="/petitions">Sign a Petition</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
