import { HeroSection } from "@/components/hero-section"
import { FeaturesGrid } from "@/components/features-grid"
import { UspsSection } from "@/components/usps-section"
import { StatsSection } from "@/components/stats-section"
import { ModulesSection } from "@/components/modules-section"
import { TechStackSection } from "@/components/tech-stack-section"
import { CtaSection } from "@/components/cta-section"
import { Header } from "@/components/header"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <StatsSection />
      <UspsSection />
      <FeaturesGrid />
      <ModulesSection />
      <TechStackSection />
      <CtaSection />
    </main>
  )
}
