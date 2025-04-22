"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend
} from 'recharts'

const donationData = [
  {
    category: 'Education',
    individual: 1200000,
    corporate: 800000,
    ngo: 500000
  },
  {
    category: 'Healthcare',
    individual: 900000,
    corporate: 1100000,
    ngo: 600000
  },
  {
    category: 'Environment',
    individual: 700000,
    corporate: 900000,
    ngo: 400000
  },
  {
    category: 'Technology',
    individual: 500000,
    corporate: 700000,
    ngo: 300000
  },
  {
    category: 'Community',
    individual: 800000,
    corporate: 600000,
    ngo: 450000
  }
]

const DonationStats = () => {
  return (
    <section className="section-container bg-gray-50 dark:bg-gray-900">
      <h2 className="section-title">Donation Analytics</h2>
      <p className="section-subtitle">
        Breaking down contributions by category and donor type
      </p>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <Card>
          <CardHeader>
            <CardTitle>Donation Distribution by Category</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={donationData}
                  margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="category" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar
                    dataKey="individual"
                    name="Individual Donors"
                    stackId="a"
                    fill="#8884d8"
                  />
                  <Bar
                    dataKey="corporate"
                    name="Corporate Sponsors"
                    stackId="a"
                    fill="#82ca9d"
                  />
                  <Bar
                    dataKey="ngo"
                    name="NGO Partners"
                    stackId="a"
                    fill="#ffc658"
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  )
}

export default DonationStats