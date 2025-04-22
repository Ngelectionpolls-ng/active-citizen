"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'
import { Separator } from '@/components/ui/separator'

// Mock data for timeline
const timelineItems = [
  {
    id: 1,
    year: '2018',
    title: 'ARM Foundation Established',
    description: 'Started with a mission to empower communities across Africa through grassroots initiatives.',
    achievement: 'First project launched in Nairobi with 50 community members.'
  },
  {
    id: 2,
    year: '2019',
    title: 'Expanded to West Africa',
    description: 'Launched operations in Nigeria and Ghana, focusing on clean water and education initiatives.',
    achievement: 'Completed 10 projects reaching over 25,000 people.'
  },
  {
    id: 3,
    year: '2020',
    title: 'Digital Transformation',
    description: 'Created our online platform allowing supporters worldwide to contribute and track impact.',
    achievement: 'Grew our online community to 100,000 active supporters.'
  },
  {
    id: 4,
    year: '2021',
    title: 'Major Partnership Year',
    description: 'Formed strategic partnerships with international NGOs and corporate sponsors.',
    achievement: 'Doubled our annual impact reach and secured sustainable funding.'
  },
  {
    id: 5,
    year: '2022',
    title: 'Innovation Hub Launch',
    description: 'Created dedicated spaces for youth to develop tech solutions to community challenges.',
    achievement: 'Supported 20 startups led by young African entrepreneurs.'
  },
  {
    id: 6,
    year: '2023',
    title: 'Climate Resilience Focus',
    description: 'Added environmental sustainability as a core focus area across all projects.',
    achievement: 'Implemented green initiatives in 75% of our project communities.'
  },
  {
    id: 7,
    year: '2024',
    title: 'One Million Lives Milestone',
    description: 'Reached our goal of positively impacting one million lives across Africa.',
    achievement: 'Present in 15 countries with over 200 completed projects.'
  }
]

const TimelineItem = ({ item, index }: { item: any, index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-100px" }}
      className="timeline-item"
    >
      <div className="flex">
        <div className="flex flex-col items-center mr-4">
          <div className="flex items-center justify-center h-10 w-10 rounded-full bg-brandgreen text-white font-bold">
            {item.year.slice(-2)}
          </div>
          {index < timelineItems.length - 1 && (
            <div className="h-full w-0.5 bg-brandgreen/30 my-2" />
          )}
        </div>
        <div className="pt-1">
          <h3 className="text-xl font-bold mb-1">{item.title}</h3>
          <p className="text-brandgray mb-2">{item.description}</p>
          <div className="flex items-start mt-2">
            <CheckCircle className="h-5 w-5 text-brandgreen mr-2 mt-0.5 flex-shrink-0" />
            <p className="text-sm">{item.achievement}</p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

const ImpactTimeline = () => {
  return (
    <section className="section-container bg-white dark:bg-gray-950">
      <h2 className="section-title">Our Journey of Impact</h2>
      <p className="section-subtitle">
        From humble beginnings to meaningful change across the continent
      </p>
      
      <div className="max-w-3xl mx-auto mt-12">
        {timelineItems.map((item, index) => (
          <TimelineItem key={item.id} item={item} index={index} />
        ))}
      </div>
    </section>
  )
}

export default ImpactTimeline