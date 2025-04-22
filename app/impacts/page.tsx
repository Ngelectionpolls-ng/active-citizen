import React from 'react'
import ImpactHero from './components/impact-hero'
import CallToAction from './components/call-to-action'
import ImpactCategories from './components/impact-categories'
import ImpactMap from './components/impact-map'
import ImpactStats from './components/impact-stat'
import ImpactTimeline from './components/impact-timeline'
import SuccessStories from './components/success-stories'
import Testimonials from './components/testimonials'

const ImpactsPage = () => {
  return (
     <main className="min-h-screen flex flex-col space-y-4 bg-background">
       <ImpactHero />
       <ImpactStats />
      <SuccessStories />
      <ImpactCategories />
      <Testimonials />
      <ImpactMap />
      <ImpactTimeline />
      <CallToAction />
        </main>
  )
}

export default ImpactsPage