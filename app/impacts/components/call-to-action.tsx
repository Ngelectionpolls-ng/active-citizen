"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { 
  HandHeart, 
  MessagesSquare, 
  Share2 
} from 'lucide-react'

const CallToAction = () => {
  return (
    <section className="section-container bg-gray-50 dark:bg-gray-900">
      <div className="max-w-5xl mx-auto">
        <h2 className="section-title">Join Our Movement for Change</h2>
        <p className="section-subtitle">
          Together, we can create even more meaningful impact in communities across Africa
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-all"
          >
            <div className="bg-brandgreen/10 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-4">
              <HandHeart className="h-8 w-8 text-brandgreen" />
            </div>
            <h3 className="text-xl font-bold mb-2">Support a Cause</h3>
            <p className="text-brandgray mb-4">
              Contribute directly to projects that align with your passion for change.
            </p>
            <Button className="w-full bg-brandgreen hover:bg-brandgreen/90">
              Donate Now
            </Button>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-all"
          >
            <div className="bg-brandgreen/10 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-4">
              <MessagesSquare className="h-8 w-8 text-brandgreen" />
            </div>
            <h3 className="text-xl font-bold mb-2">Start a Campaign</h3>
            <p className="text-brandgray mb-4">
              Initiate positive change in your own community with our support.
            </p>
            <Button className="w-full bg-brandgreen hover:bg-brandgreen/90">
              Start Now
            </Button>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-all"
          >
            <div className="bg-brandgreen/10 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-4">
              <Share2 className="h-8 w-8 text-brandgreen" />
            </div>
            <h3 className="text-xl font-bold mb-2">Spread the Word</h3>
            <p className="text-brandgray mb-4">
              Share our impact stories and help us reach more communities.
            </p>
            <Button className="w-full bg-brandgreen hover:bg-brandgreen/90">
              Share Now
            </Button>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md"
        >
          <h3 className="text-2xl font-bold text-center mb-6">Stay Connected</h3>
          <p className="text-center text-brandgray mb-8">
            Subscribe to our newsletter to get updates on our projects and impact stories.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <Input 
              placeholder="Enter your email" 
              className="flex-grow" 
            />
            <Button className="bg-brandgreen hover:bg-brandgreen/90 whitespace-nowrap">
              Subscribe
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CallToAction