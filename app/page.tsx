"use client"

import { SiteHeader } from "@/components/landing-page/SiteHeader"
import { SiteFooter } from "@/components/landing-page/SiteFooter"
import HeroSection from "@/components/landing-page/HeroSection"
import FeaturesSection from "@/components/landing-page/FeaturesSection"
import SecuritySection from "@/components/landing-page/SecuritySection"
import CallToActionSection from "@/components/landing-page/CallToActionSection"
import ContactSection from "@/components/landing-page/ContactSection"

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-foreground">
      <SiteHeader />
      <main>
        <HeroSection />
        <FeaturesSection />
        <SecuritySection />
        <CallToActionSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  );
}
