"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  Legend,
  PieChart,
  Pie,
  Cell
} from 'recharts'

const monthlyData = [
  { month: 'Jan', users: 4000, donations: 2400, projects: 1800 },
  { month: 'Feb', users: 5000, donations: 2800, projects: 2000 },
  { month: 'Mar', users: 4800, donations: 3200, projects: 2200 },
  { month: 'Apr', users: 5500, donations: 3800, projects: 2400 },
  { month: 'May', users: 6000, donations: 4200, projects: 2600 },
  { month: 'Jun', users: 7000, donations: 4800, projects: 2800 },
  { month: 'Jul', users: 8000, donations: 5200, projects: 3000 },
  { month: 'Aug', users: 9000, donations: 5800, projects: 3200 },
  { month: 'Sep', users: 10000, donations: 6200, projects: 3400 },
  { month: 'Oct', users: 11000, donations: 6800, projects: 3600 },
  { month: 'Nov', users: 12000, donations: 7200, projects: 3800 },
  { month: 'Dec', users: 13000, donations: 7800, projects: 4000 }
]

const categoryData = [
  { name: 'Education', value: 35 },
  { name: 'Healthcare', value: 25 },
  { name: 'Environment', value: 20 },
  { name: 'Community', value: 15 },
  { name: 'Technology', value: 5 }
]

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8']

const StatsCharts = () => {
  return (
    <section className="section-container bg-white dark:bg-gray-950">
      <h2 className="section-title">Detailed Analytics</h2>
      <p className="section-subtitle">
        Visualizing our growth and impact through comprehensive data analysis
      </p>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Growth Trends</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    data={monthlyData}
                    margin={{
                      top: 10,
                      right: 30,
                      left: 0,
                      bottom: 0,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Area
                      type="monotone"
                      dataKey="users"
                      stackId="1"
                      stroke="#8884d8"
                      fill="#8884d8"
                    />
                    <Area
                      type="monotone"
                      dataKey="donations"
                      stackId="1"
                      stroke="#82ca9d"
                      fill="#82ca9d"
                    />
                    <Area
                      type="monotone"
                      dataKey="projects"
                      stackId="1"
                      stroke="#ffc658"
                      fill="#ffc658"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Impact Distribution</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={categoryData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={150}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                      {categoryData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

export default StatsCharts