"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { 
  Droplet, 
  BookOpen, 
  Heart, 
  Sprout, 
  Home, 
  Lightbulb 
} from 'lucide-react'

// Mock data for impact categories
const categories = [
  {
    id: 1,
    name: 'Clean Water',
    description: 'Providing sustainable water solutions to communities in need',
    icon: <Droplet className="h-10 w-10 mb-4 text-brandgreen" />,
    projects: 42,
    people: '145,000+',
  },
  {
    id: 2,
    name: 'Education',
    description: 'Expanding access to quality education for all children',
    icon: <BookOpen className="h-10 w-10 mb-4 text-brandgreen" />,
    projects: 78,
    people: '68,500+',
  },
  {
    id: 3,
    name: 'Healthcare',
    description: 'Improving access to essential health services',
    icon: <Heart className="h-10 w-10 mb-4 text-brandgreen" />,
    projects: 53,
    people: '102,300+',
  },
  {
    id: 4,
    name: 'Environmental',
    description: 'Protecting natural ecosystems and promoting sustainability',
    icon: <Sprout className="h-10 w-10 mb-4 text-brandgreen" />,
    projects: 35,
    people: 'Communities across Africa',
  },
  {
    id: 5,
    name: 'Housing',
    description: 'Creating safe and affordable housing solutions',
    icon: <Home className="h-10 w-10 mb-4 text-brandgreen" />,
    projects: 29,
    people: '12,700+',
  },
  {
    id: 6,
    name: 'Innovation',
    description: 'Supporting technological solutions to community challenges',
    icon: <Lightbulb className="h-10 w-10 mb-4 text-brandgreen" />,
    projects: 24,
    people: '18,500+',
  }
]

const CategoryCard = ({ category, index }: { category: any, index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="category-card"
    >
      {category.icon}
      <h3 className="text-xl font-bold mb-2">{category.name}</h3>
      <p className="text-sm text-brandgray text-center mb-4">{category.description}</p>
      <div className="mt-auto pt-4 border-t border-gray-100 dark:border-gray-700 w-full">
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center">
            <p className="text-sm text-brandgray">Projects</p>
            <p className="text-lg font-bold">{category.projects}</p>
          </div>
          <div className="text-center">
            <p className="text-sm text-brandgray">People Reached</p>
            <p className="text-lg font-bold">{category.people}</p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

const ImpactCategories = () => {
  return (
    <section className="section-container bg-gray-50 dark:bg-gray-900">
      <h2 className="section-title">Impact Categories</h2>
      <p className="section-subtitle">
        We work across multiple sectors to address the most pressing needs of communities
      </p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category, index) => (
          <CategoryCard key={category.id} category={category} index={index} />
        ))}
      </div>
    </section>
  )
}

export default ImpactCategories