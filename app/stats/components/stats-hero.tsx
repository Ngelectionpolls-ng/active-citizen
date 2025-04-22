"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowDown } from 'lucide-react'

const StatsHero = () => {
  const scrollToStats = () => {
    const statsSection = document.getElementById('stats-overview')
    if (statsSection) {
      statsSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative h-[50vh] pb-12 flex items-center justify-center overflow-hidden bg-gray-900">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-brandgreen/20 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.8)_100%)]" />
      </div>
      
      <div className="section-container relative z-10 text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
            Impact by the <span className="text-brandgreen">Numbers</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
            Explore detailed metrics and insights about our community's collective impact
            across Africa through data-driven analytics.
          </p>
          <Button 
            size="lg"
            onClick={scrollToStats}
            className="bg-brandgreen hover:bg-brandgreen/90"
          >
            View Statistics
          </Button>
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

export default StatsHero