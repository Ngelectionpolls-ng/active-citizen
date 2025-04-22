"use client"

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { QuoteIcon } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

// Mock data for testimonials
const testimonials = [
  {
    id: 1,
    quote: "ARM's clean water initiative transformed our village. Children no longer miss school due to waterborne illnesses, and our women don't have to walk for hours to fetch water. It's changed everything.",
    name: "Grace Mutua",
    role: "Community Leader",
    location: "Kibera, Kenya",
    image: "https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 2,
    quote: "The agricultural training program gave me the skills and confidence to start my own farm. Now I'm able to provide for my family and even employ others from my community.",
    name: "Kwame Osei",
    role: "Farmer",
    location: "Accra, Ghana",
    image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 3,
    quote: "Thanks to the women's health clinic, I received the prenatal care I needed during my pregnancy. The staff are compassionate and the services are free. I'm forever grateful.",
    name: "Amina Diallo",
    role: "Mother",
    location: "Lagos, Nigeria",
    image: "https://images.pexels.com/photos/6321584/pexels-photo-6321584.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 4,
    quote: "The solar power project at our school has revolutionized how we learn. We now have computers and can study after sunset. It's opened up a world of possibilities for us.",
    name: "David Mwangi",
    role: "Student",
    location: "Arusha, Tanzania",
    image: "https://images.pexels.com/photos/2406949/pexels-photo-2406949.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 5,
    quote: "As a tech entrepreneur, the innovation hub provided me with the resources, mentorship, and community I needed to develop my app and secure funding. ARM is building Africa's future.",
    name: "Sophie Ndlovu",
    role: "Tech Entrepreneur",
    location: "Kigali, Rwanda",
    image: "https://images.pexels.com/photos/2169434/pexels-photo-2169434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
]

const Testimonials = () => {
  const [current, setCurrent] = useState(0)
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % testimonials.length)
    }, 8000)
    return () => clearInterval(interval)
  }, [])
  
  const testimonial = testimonials[current]
  
  return (
    <section className="section-container bg-white dark:bg-gray-950">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title">Voices of Impact</h2>
        <p className="section-subtitle">
          Hear directly from the people whose lives have been transformed
        </p>
        
        <div className="relative">
          <QuoteIcon className="absolute text-gray-200 dark:text-gray-800 h-24 w-24 -top-6 -left-4 -z-10" />
          
          <AnimatePresence mode="wait">
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="testimonial-card"
            >
              <p className="text-xl md:text-2xl italic mb-8 text-center">
                "{testimonial.quote}"
              </p>
              
              <div className="flex flex-col items-center">
                <Avatar className="h-16 w-16 mb-4">
                  <AvatarImage src={testimonial.image} alt={testimonial.name} />
                  <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="text-center">
                  <h4 className="font-bold text-lg">{testimonial.name}</h4>
                  <p className="text-brandgray">{testimonial.role}, {testimonial.location}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`h-3 w-3 rounded-full transition-all ${
                  index === current ? 'bg-brandgreen' : 'bg-gray-300 dark:bg-gray-700'
                }`}
                onClick={() => setCurrent(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials