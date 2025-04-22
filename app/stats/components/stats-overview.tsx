"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { 
  Users,
  Heart,
  HandHeart,
  CircleDollarSign,
  Target,
  TrendingUp,
  BadgeCheck,
  Globe
} from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

const stats = [
  {
    id: 1,
    title: 'Total Users',
    value: '250K+',
    change: '+25%',
    icon: <Users className="h-5 w-5" />,
    description: 'Active platform users'
  },
  {
    id: 2,
    title: 'Lives Impacted',
    value: '1.2M+',
    change: '+40%',
    icon: <Heart className="h-5 w-5" />,
    description: 'People reached through initiatives'
  },
  {
    id: 3,
    title: 'Donations',
    value: '$5.8M',
    change: '+32%',
    icon: <CircleDollarSign className="h-5 w-5" />,
    description: 'Total contributions received'
  },
  {
    id: 4,
    title: 'Success Rate',
    value: '92%',
    change: '+5%',
    icon: <Target className="h-5 w-5" />,
    description: 'Campaign completion rate'
  },
  {
    id: 5,
    title: 'Volunteers',
    value: '45K+',
    change: '+28%',
    icon: <HandHeart className="h-5 w-5" />,
    description: 'Active volunteers'
  },
  {
    id: 6,
    title: 'Growth Rate',
    value: '138%',
    change: '+15%',
    icon: <TrendingUp className="h-5 w-5" />,
    description: 'Year-over-year platform growth'
  },
  {
    id: 7,
    title: 'Projects',
    value: '3.2K',
    change: '+45%',
    icon: <BadgeCheck className="h-5 w-5" />,
    description: 'Successful projects completed'
  },
  {
    id: 8,
    title: 'Countries',
    value: '28',
    change: '+4',
    icon: <Globe className="h-5 w-5" />,
    description: 'Countries with active projects'
  }
]

const StatsOverview = () => {
  return (
    <section id="stats-overview" className="section-container bg-gray-50 dark:bg-gray-900">
      <h2 className="section-title">Key Performance Metrics</h2>
      <p className="section-subtitle">
        Track our growth and impact through these key statistics
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="hover:shadow-lg transition-all duration-300">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-brandgreen/10 p-3 rounded-lg">
                    <div className="text-brandgreen">
                      {stat.icon}
                    </div>
                  </div>
                  <div className="bg-green-50 dark:bg-green-900/20 px-2 py-1 rounded">
                    <span className="text-green-600 dark:text-green-400 text-sm font-medium">
                      {stat.change}
                    </span>
                  </div>
                </div>
                <div className="space-y-1">
                  <h3 className="font-medium text-sm text-muted-foreground">
                    {stat.title}
                  </h3>
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">
                    {stat.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default StatsOverview