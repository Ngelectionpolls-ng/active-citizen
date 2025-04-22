"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend
} from 'recharts'

const growthData = [
  {
    year: '2018',
    userGrowth: 20,
    projectGrowth: 15,
    impactGrowth: 10
  },
  {
    year: '2019',
    userGrowth: 35,
    projectGrowth: 28,
    impactGrowth: 25
  },
  {
    year: '2020',
    userGrowth: 55,
    projectGrowth: 45,
    impactGrowth: 40
  },
  {
    year: '2021',
    userGrowth: 80,
    projectGrowth: 68,
    impactGrowth: 65
  },
  {
    year: '2022',
    userGrowth: 120,
    projectGrowth: 98,
    impactGrowth: 95
  },
  {
    year: '2023',
    userGrowth: 180,
    projectGrowth: 145,
    impactGrowth: 140
  },
  {
    year: '2024',
    userGrowth: 250,
    projectGrowth: 200,
    impactGrowth: 190
  }
]

const GrowthMetrics = () => {
  return (
    <section className="section-container bg-white dark:bg-gray-950">
      <h2 className="section-title">Growth Trajectory</h2>
      <p className="section-subtitle">
        Tracking our year-over-year growth across key metrics
      </p>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <Card>
          <CardHeader>
            <CardTitle>Annual Growth Comparison</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={growthData}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="userGrowth"
                    name="User Growth"
                    stroke="#8884d8"
                    activeDot={{ r: 8 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="projectGrowth"
                    name="Project Growth"
                    stroke="#82ca9d"
                    activeDot={{ r: 8 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="impactGrowth"
                    name="Impact Growth"
                    stroke="#ffc658"
                    activeDot={{ r: 8 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  )
}

export default GrowthMetrics