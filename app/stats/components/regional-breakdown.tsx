"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'

const regions = [
  {
    id: 1,
    name: 'South West',
    projects: 450,
    funding: 2800000,
    beneficiaries: 125000,
    progress: 85
  },
  {
    id: 2,
    name: 'North Central',
    projects: 380,
    funding: 2200000,
    beneficiaries: 98000,
    progress: 75
  },
  {
    id: 3,
    name: 'North-West',
    projects: 320,
    funding: 1900000,
    beneficiaries: 85000,
    progress: 68
  },
  {
    id: 4,
    name: 'South East',
    projects: 280,
    funding: 1500000,
    beneficiaries: 72000,
    progress: 62
  },
  {
    id: 5,
    name: 'South South',
    projects: 250,
    funding: 1200000,
    beneficiaries: 65000,
    progress: 55
  }
]

const RegionalBreakdown = () => {
  return (
    <section className="section-container bg-gray-50 dark:bg-gray-900">
      <h2 className="section-title">Regional Performance</h2>
      <p className="section-subtitle">
        Analyzing impact and progress across different regions of Africa
      </p>
      
      <div className="grid gap-6">
        {regions.map((region, index) => (
          <motion.div
            key={region.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardHeader className="pb-4">
                <CardTitle>{region.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Projects</p>
                    <p className="text-2xl font-bold">{region.projects}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Funding</p>
                    <p className="text-2xl font-bold">
                      ${(region.funding / 1000000).toFixed(1)}M
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Beneficiaries</p>
                    <p className="text-2xl font-bold">
                      {(region.beneficiaries / 1000).toFixed(1)}K
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Progress</p>
                    <div className="flex items-center gap-2">
                      <Progress value={region.progress} className="h-2" />
                      <span className="text-sm font-medium">{region.progress}%</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default RegionalBreakdown