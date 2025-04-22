"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ResponsiveContainer,
  Legend
} from 'recharts'

const comparisonData = [
  {
    metric: 'User Engagement',
    current: 85,
    previous: 65
  },
  {
    metric: 'Project Success',
    current: 90,
    previous: 75
  },
  {
    metric: 'Donor Retention',
    current: 80,
    previous: 60
  },
  {
    metric: 'Community Growth',
    current: 95,
    previous: 70
  },
  {
    metric: 'Impact Score',
    current: 88,
    previous: 72
  },
  {
    metric: 'Resource Efficiency',
    current: 82,
    previous: 68
  }
]

const StatsComparison = () => {
  return (
    <section className="section-container bg-gray-50 dark:bg-gray-900">
      <h2 className="section-title">Year-over-Year Comparison</h2>
      <p className="section-subtitle">
        Comparing key performance indicators with previous year
      </p>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <Card>
          <CardHeader>
            <CardTitle>Performance Metrics Comparison</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart data={comparisonData}>
                  <PolarGrid />
                  <PolarAngleAxis dataKey="metric" />
                  <PolarRadiusAxis angle={30} domain={[0, 100]} />
                  <Radar
                    name="Current Year"
                    dataKey="current"
                    stroke="#8884d8"
                    fill="#8884d8"
                    fillOpacity={0.6}
                  />
                  <Radar
                    name="Previous Year"
                    dataKey="previous"
                    stroke="#82ca9d"
                    fill="#82ca9d"
                    fillOpacity={0.6}
                  />
                  <Legend />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  )
}

export default StatsComparison