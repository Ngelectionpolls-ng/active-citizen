"use client"

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  Card, 
  CardContent, 
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription
} from '@/components/ui/card'

// Mock data for success stories
const successStories = [
  {
    id: 1,
    title: 'Clean Water Initiative in Kibera',
    description: 'Bringing clean water access to over 2,000 families in Kibera, Kenya through community-led infrastructure development.',
    impact: 'Reduced waterborne diseases by 65% and improved daily life for thousands.',
    image: 'https://images.pexels.com/photos/9887108/pexels-photo-9887108.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Infrastructure',
    location: 'Kenya'
  },
  {
    id: 2,
    title: 'Solar Power for Rural Schools',
    description: 'Installing solar panels in 12 rural schools across Tanzania, bringing reliable electricity for the first time.',
    impact: 'Enabled computer education and extended study hours, benefiting over 3,500 students.',
    image: 'https://images.pexels.com/photos/9875441/pexels-photo-9875441.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Education',
    location: 'Tanzania'
  },
  {
    id: 3,
    title: 'Women\'s Health Clinic in Lagos',
    description: 'Establishing a women\'s health clinic providing free services to underserved communities in Lagos.',
    impact: 'Provided essential healthcare to over 5,000 women and reduced maternal mortality in the area by 40%.',
    image: 'https://images.pexels.com/photos/6647037/pexels-photo-6647037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Healthcare',
    location: 'Nigeria'
  },
  {
    id: 4,
    title: 'Agricultural Training for Youth',
    description: 'Teaching sustainable farming techniques to youth in rural Ghana, creating pathways to economic independence.',
    impact: 'Trained 850 young people, with 75% now running successful micro-farms.',
    image: 'https://images.pexels.com/photos/2933243/pexels-photo-2933243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Agriculture',
    location: 'Ghana'
  },
  {
    id: 5,
    title: 'Tech Entrepreneurship Hub',
    description: 'Creating a technology innovation space in Kigali where young entrepreneurs can develop digital solutions.',
    impact: 'Launched 23 tech startups that have created over 120 jobs in the local economy.',
    image: 'https://images.pexels.com/photos/3182781/pexels-photo-3182781.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Technology',
    location: 'Rwanda'
  }
]

const SuccessStories = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  
  const nextStory = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === successStories.length - 1 ? 0 : prevIndex + 1
    )
  }
  
  const prevStory = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? successStories.length - 1 : prevIndex - 1
    )
  }
  
  const currentStory = successStories[currentIndex]
  
  return (
    <section className="section-container bg-white dark:bg-gray-950">
      <h2 className="section-title">Success Stories</h2>
      <p className="section-subtitle">
        Real stories of transformation and impact from communities across Africa
      </p>
      
      <div className="relative max-w-5xl mx-auto">
        <motion.div
          key={currentStory.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <Card className="overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="relative h-[300px] md:h-auto">
                <img 
                  src={currentStory.image} 
                  alt={currentStory.title} 
                  className="h-full w-full object-cover"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  <Badge className="bg-brandgreen text-white">{currentStory.category}</Badge>
                  <Badge variant="outline" className="bg-white/90 text-gray-800">{currentStory.location}</Badge>
                </div>
              </div>
              <div className="flex flex-col">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold">{currentStory.title}</CardTitle>
                  <CardDescription className="text-brandgray text-base">{currentStory.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-brandgray mb-2">IMPACT</h4>
                    <p className="text-lg">{currentStory.impact}</p>
                  </div>
                </CardContent>
                <CardFooter className="mt-auto">
                  <Button className="w-full bg-brandgreen hover:bg-brandgreen/90">
                    Read Full Story
                  </Button>
                </CardFooter>
              </div>
            </div>
          </Card>
          
          <div className="absolute -bottom-10 left-0 right-0 flex justify-center gap-1 mt-4">
            {successStories.map((_, index) => (
              <button
                key={index}
                className={`h-2 w-2 rounded-full transition-all ${
                  index === currentIndex 
                    ? 'bg-brandgreen w-6' 
                    : 'bg-gray-300 dark:bg-gray-700'
                }`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to story ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>
        
        <button 
          className="absolute top-1/2 -left-4 md:-left-12 transform -translate-y-1/2 bg-white dark:bg-gray-800 rounded-full p-2 shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          onClick={prevStory}
          aria-label="Previous story"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        
        <button 
          className="absolute top-1/2 -right-4 md:-right-12 transform -translate-y-1/2 bg-white dark:bg-gray-800 rounded-full p-2 shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          onClick={nextStory}
          aria-label="Next story"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>
      
      <div className="mt-20 text-center">
        <Button variant="outline" className="border-brandgreen text-brandgreen hover:bg-brandgreen hover:text-white">
          View All Success Stories
        </Button>
      </div>
    </section>
  )
}

export default SuccessStories