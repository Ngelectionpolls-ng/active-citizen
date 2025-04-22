"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'

const campaigns = [
  {
    id: 1,
    name: 'Clean Water Initiative',
    target: 1000000,
    raised: 850000,
    donors: 1250,
    daysLeft: 15,
    progress: 85
  },
  {
    id: 2,
    name: 'Education for All',
    target: 750000,
    raised: 600000,
    donors: 980,
    daysLeft: 25,
    progress: 80
  },
  {
    id: 3,
    name: 'Healthcare Access',
    target: 500000,
    raised: 375000,
    donors: 720,
    daysLeft: 30,
    progress: 75
  },
  {
    id: 4,
    name: 'Tech Innovation Hub',
    target: 300000,
    raised: 210000,
    donors: 450,
    daysLeft: 20,
    progress: 70
  },
  {
    id: 5,
    name: 'Community Center',
    target: 250000,
    raised: 162500,
    donors: 380,
    daysLeft: 35,
    progress: 65
  }
]

const CampaignMetrics = () => {
  return (
    <section className="section-container bg-white dark:bg-gray-950">
      <h2 className="section-title">Active Campaign Performance</h2>
      <p className="section-subtitle">
        Monitoring our ongoing campaigns and their progress
      </p>
      
      <div className="grid gap-6">
        {campaigns.map((campaign, index) => (
          <motion.div
            key={campaign.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardHeader className="pb-4">
                <CardTitle>{campaign.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Target</p>
                    <p className="text-2xl font-bold">
                      ${(campaign.target / 1000).toFixed(0)}K
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Raised</p>
                    <p className="text-2xl font-bold text-brandgreen">
                      ${(campaign.raised / 1000).toFixed(0)}K
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Donors</p>
                    <p className="text-2xl font-bold">{campaign.donors}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Days Left</p>
                    <p className="text-2xl font-bold">{campaign.daysLeft}</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Progress</span>
                    <span className="text-brandgreen">{campaign.progress}%</span>
                  </div>
                  <Progress value={campaign.progress} className="h-2" />
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default CampaignMetrics