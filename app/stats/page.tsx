"use client"

import CampaignMetrics from "./components/campaign-metrics"
import DonationStats from "./components/donation-stats"
import GrowthMetrics from "./components/growth-metrics"
import RegionalBreakdown from "./components/regional-breakdown"
import StatsComparison from "./components/stat-comparison"
import StatsCharts from "./components/stats-chart"
import StatsHero from "./components/stats-hero"
import StatsOverview from "./components/stats-overview"


const StatsPage = () => {
  return (
    <main className="min-h-screen flex flex-col space-y-3 bg-background">
      <StatsHero />
      <StatsOverview />
      <StatsCharts />
      <RegionalBreakdown />
      <GrowthMetrics />
      <DonationStats />
      <CampaignMetrics />
      <StatsComparison />
    </main>
  )
}

export default StatsPage