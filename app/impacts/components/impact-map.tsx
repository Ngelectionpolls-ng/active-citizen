"use client"

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

// Mock data for impact regions
const impactRegions = [
  {
    id: 1,
    country: 'Kenya',
    projects: 42,
    beneficiaries: 145000,
    top: '58%',
    left: '60%',
    categories: ['Water', 'Education', 'Health']
  },
  {
    id: 2,
    country: 'Nigeria',
    projects: 38,
    beneficiaries: 128000,
    top: '48%',
    left: '22%',
    categories: ['Health', 'Agriculture', 'Technology']
  },
  {
    id: 3,
    country: 'South Africa',
    projects: 31,
    beneficiaries: 95000,
    top: '82%',
    left: '52%',
    categories: ['Education', 'Housing', 'Innovation']
  },
  {
    id: 4,
    country: 'Ghana',
    projects: 27,
    beneficiaries: 76000,
    top: '50%',
    left: '18%',
    categories: ['Agriculture', 'Education', 'Water']
  },
  {
    id: 5,
    country: 'Rwanda',
    projects: 24,
    beneficiaries: 68000,
    top: '56%',
    left: '56%',
    categories: ['Technology', 'Healthcare', 'Education']
  },
  {
    id: 6,
    country: 'Tanzania',
    projects: 21,
    beneficiaries: 62000,
    top: '64%',
    left: '61%',
    categories: ['Water', 'Energy', 'Health']
  }
]

const ImpactMap = () => {
  const [selectedRegion, setSelectedRegion] = useState<number | null>(null)
  
  return (
    <section className="section-container bg-gray-50 dark:bg-gray-900">
      <h2 className="section-title">Our Impact Across Africa</h2>
      <p className="section-subtitle">
        Explore the regions where we've created meaningful change
      </p>
      
      <div className="relative w-full max-w-4xl h-[600px] mx-auto">
        <div className="relative w-full h-full bg-white dark:bg-gray-800 rounded-xl overflow-hidden">
          <img 
            src="https://images.pexels.com/photos/5466800/pexels-photo-5466800.jpeg?auto=compress&cs=tinysrgb&w=1600" 
            alt="Map of Africa" 
            className="w-full h-full object-cover opacity-30"
          />
          
          {impactRegions.map((region) => (
            <motion.div
              key={region.id}
              className="absolute"
              style={{ top: region.top, left: region.left }}
              whileHover={{ scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              <button
                className={`h-6 w-6 rounded-full border-4 cursor-pointer transition-all ${
                  selectedRegion === region.id
                    ? 'bg-brandgreen border-white' 
                    : 'bg-brandgreen/60 border-white/60 hover:bg-brandgreen hover:border-white'
                }`}
                onClick={() => setSelectedRegion(region.id === selectedRegion ? null : region.id)}
                aria-label={`View impact in ${region.country}`}
              />
            </motion.div>
          ))}
          
          {selectedRegion !== null && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-11/12 md:w-auto"
            >
              <Card className="w-full md:w-[400px]">
                <CardHeader>
                  <CardTitle>
                    {impactRegions.find(r => r.id === selectedRegion)?.country}
                  </CardTitle>
                  <CardDescription>
                    Impact Summary
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between mb-4">
                    <div>
                      <p className="text-sm text-brandgray">Projects</p>
                      <p className="text-2xl font-bold">
                        {impactRegions.find(r => r.id === selectedRegion)?.projects}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-brandgray">Beneficiaries</p>
                      <p className="text-2xl font-bold">
                        {impactRegions.find(r => r.id === selectedRegion)?.beneficiaries.toLocaleString()}+
                      </p>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-brandgray mb-2">Key Categories</p>
                    <div className="flex flex-wrap gap-2">
                      {impactRegions.find(r => r.id === selectedRegion)?.categories.map((category, index) => (
                        <Badge key={index} className="bg-brandgreen">
                          {category}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  )
}

export default ImpactMap