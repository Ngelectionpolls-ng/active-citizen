"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowDown } from 'lucide-react'

const ImpactHero = () => {
  const scrollToStats = () => {
    const statsSection = document.getElementById('impact-stats')
    if (statsSection) {
      statsSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative h-[70vh] md:h-[80vh] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0 bg-black opacity-50"
        style={{
          backgroundImage: "url('/images/photo.jpeg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'multiply',
        }}
      />
      <div className="section-container relative z-10 text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
            Our <span className="text-brandgreen">Impact</span> in Communities
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
            Discover how we're transforming lives and creating positive change across Africa through the power of community action and meaningful initiatives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-brandgreen hover:bg-brandgreen/90 text-white"
              onClick={scrollToStats}
            >
              See Our Impact
            </Button>
          
          </div>
        </motion.div>
      </div>
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        animate={{ 
          y: [0, 10, 0],
        }}
        transition={{ 
          repeat: Infinity, 
          duration: 1.5 
        }}
        onClick={scrollToStats}
      >
        <ArrowDown className="text-white w-8 h-8" />
      </motion.div>
    </section>
  )
}

export default ImpactHero