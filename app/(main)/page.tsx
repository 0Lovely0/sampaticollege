import { HeroSection } from "@/components/main/hero-section"
import { StatsSection } from "@/components/main/stats-section"
import { DepartmentsSection } from "@/components/main/departments-section"
import { WhyChooseUs } from "@/components/main/why-choose-us"
import { NoticesSection } from "@/components/main/notices-section"
import { EventsSection } from "@/components/main/events-section"
import { TestimonialsSection } from "@/components/main/testimonials-section"
import { GalleryPreview } from "@/components/main/gallery-preview"
import { PlacementsSection } from "@/components/main/placements-section"
import { AdmissionCTA } from "@/components/main/admission-cta"
import { FAQSection } from "@/components/main/faq-section"
import { ContactSection } from "@/components/main/contact-section"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <DepartmentsSection />
      <WhyChooseUs />
      <NoticesSection />
      <EventsSection />
      <TestimonialsSection />
      <GalleryPreview />
      <PlacementsSection />
      <AdmissionCTA />
      <FAQSection />
      <ContactSection />
    </>
  )
}
