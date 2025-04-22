"use client"

import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Heart, 
  Users, 
  MapPin,
  HandHeart,
  Handshake,
  BadgeDollarSign
} from 'lucide-react'
import { 
  Card, 
  CardContent 
} from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'

// Mock data for statistics
const stats = [
  { 
    id: 1, 
    title: 'Communities Impacted', 
    value: 583, 
    icon: <MapPin className="h-8 w-8 text-brandgreen" />,
    growth: '+15% from last year',
    color: 'chart-1'
  },
  { 
    id: 2, 
    title: 'Lives Changed', 
    value: 49826, 
    icon: <Heart className="h-8 w-8 text-brandgreen" />,
    growth: '+23% from last year',
    color: 'chart-2'
  },
  { 
    id: 3, 
    title: 'Active Campaigners', 
    value: 12489, 
    icon: <Users className="h-8 w-8 text-brandgreen" />,
    growth: '+8% from last year',
    color: 'chart-3'
  },
  { 
    id: 4, 
    title: 'Donations Collected', 
    value: 2500000, 
    prefix: '$',
    icon: <BadgeDollarSign className="h-8 w-8 text-brandgreen" />,
    growth: '+18% from last year',
    color: 'chart-4'
  },
  { 
    id: 5, 
    title: 'Volunteer Hours', 
    value: 185000, 
    icon: <HandHeart className="h-8 w-8 text-brandgreen" />,
    growth: '+12% from last year',
    color: 'chart-5'
  },
  { 
    id: 6, 
    title: 'Partnerships Formed', 
    value: 127, 
    icon: <Handshake className="h-8 w-8 text-brandgreen" />,
    growth: '+7% from last year',
    color: 'chart-1'
  }
]

// A custom hook for animating count up
const useCountUp = (end: number, duration: number = 2000) => {
  const [count, setCount] = useState(0)
  
  useEffect(() => {
    let start = 0
    const increment = end / (duration / 16)
    
    const timer = setInterval(() => {
      start += increment
      setCount(Math.min(Math.floor(start), end))
      
      if (start >= end) {
        clearInterval(timer)
      }
    }, 16)
    
    return () => clearInterval(timer)
  }, [end, duration])
  
  return count
}

const StatCard = ({ stat, inView }: { stat: any, inView: boolean }) => {
  const count = useCountUp(inView ? stat.value : 0)
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: stat.id * 0.1 }}
    >
      <Card className="stat-card h-full">
        <CardContent className="p-6 flex flex-col items-center text-center">
          <div className="mb-3">{stat.icon}</div>
          <h3 className="text-lg font-semibold mb-2">{stat.title}</h3>
          <p className="text-3xl md:text-4xl font-bold mb-2 text-brandgreen">
            {stat.prefix || ''}{count.toLocaleString()}
          </p>
          <p className="text-sm text-brandgray">{stat.growth}</p>
          <Progress 
            value={75} 
            className="h-1.5 mt-4 w-full bg-gray-100" 
          />
        </CardContent>
      </Card>
    </motion.div>
  )
}

const ImpactStats = () => {
  const [inView, setInView] = useState(false)
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    
    const element = document.getElementById('impact-stats')
    if (element) observer.observe(element)
    
    return () => observer.disconnect()
  }, [])
  
  return (
    <section id="impact-stats" className="section-container bg-gray-50 dark:bg-gray-900">
      <h2 className="section-title">Our Impact in Numbers</h2>
      <p className="section-subtitle">
        Through collaborative efforts and dedicated initiatives, we've made significant
        progress in creating positive change across communities in Africa.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stats.map(stat => (
          <StatCard key={stat.id} stat={stat} inView={inView} />
        ))}
      </div>
    </section>
  )
}

export default ImpactStats