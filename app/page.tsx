import ListCourses from "@/components/home-components/compaigns";
import LatestCampaigns from "@/components/home-components/lastest-compaigns";
import OurInitiatives from "@/components/home-components/our-initiative";
import StartCompaign from "@/components/home-components/start-compaign";
import StatsContainer from "@/components/home-components/stats-container";
import WhoWeAre from "@/components/home-components/who-we-are";
import Footer from "@/components/shared/footer";
import Hero from "@/components/shared/hero";
import Navbar from "@/components/shared/navbar";
import ScrollToTop from "@/components/shared/scroll-to-top";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <StatsContainer/>
      <WhoWeAre />
      <OurInitiatives />
      <ListCourses />
      <LatestCampaigns />
      <StartCompaign />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
