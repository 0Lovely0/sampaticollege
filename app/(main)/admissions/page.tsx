"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, FileText, Calendar, CheckCircle, HelpCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { departments } from "@/lib/data"

const admissionSteps = [
  { step: 1, title: "Check Eligibility", description: "Review the eligibility criteria for your desired program." },
  { step: 2, title: "Fill Application Form", description: "Complete the online application form with accurate details." },
  { step: 3, title: "Submit Documents", description: "Upload required documents including mark sheets and certificates." },
  { step: 4, title: "Pay Application Fee", description: "Pay the non-refundable application processing fee." },
  { step: 5, title: "Entrance Test / Interview", description: "Appear for entrance test or personal interview as applicable." },
  { step: 6, title: "Admission Confirmation", description: "Complete fee payment to confirm your admission." },
]

const documents = [
  "10th Mark Sheet & Certificate",
  "12th Mark Sheet & Certificate",
  "Transfer Certificate",
  "Migration Certificate",
  "Character Certificate",
  "Passport Size Photographs (6)",
  "Aadhar Card / ID Proof",
  "Caste Certificate (if applicable)",
  "Income Certificate (for scholarship)",
  "Medical Fitness Certificate",
]

export default function AdmissionsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 bg-primary text-primary-foreground">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`, backgroundSize: "40px 40px" }} />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div className="max-w-3xl" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block px-4 py-2 rounded-full bg-primary-foreground/20 text-primary-foreground text-sm font-medium mb-4">Admissions 2024-25 Open</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Admissions</h1>
            <p className="text-xl text-primary-foreground/80">Begin your journey to a successful healthcare career. Apply now for our world-class programs.</p>
          </motion.div>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Available Programs</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Choose from our range of healthcare and pharmaceutical programs.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {departments.map((dept, index) => (
              <motion.div key={dept.id} className="bg-card rounded-xl p-6 shadow-lg border hover:shadow-xl transition-all" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.1 }} style={{ borderTopColor: dept.borderColor, borderTopWidth: "4px" }}>
                <h3 className="font-bold text-lg mb-2">{dept.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{dept.duration}</p>
                <div className="text-sm space-y-2 mb-4">
                  <p><strong>Seats:</strong> {dept.seats}</p>
                  <p><strong>Eligibility:</strong> {dept.eligibility}</p>
                </div>
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <Link href={`/departments/${dept.id}`}>Learn More</Link>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">How to Apply</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Admission Process</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Follow these simple steps to complete your admission application.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {admissionSteps.map((step, index) => (
              <motion.div key={step.step} className="relative bg-card rounded-xl p-6 shadow-lg border" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.1 }}>
                <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">{step.step}</div>
                <h3 className="font-bold text-lg mb-2 mt-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Documents Required */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">Checklist</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Documents Required</h2>
              <p className="text-muted-foreground mb-8">Ensure you have the following documents ready before starting your application.</p>
              <div className="grid gap-3">
                {documents.map((doc, index) => (
                  <motion.div key={doc} className="flex items-center gap-3 p-3 rounded-lg bg-muted/50" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.05 }}>
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-sm">{doc}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div className="bg-card rounded-2xl p-8 shadow-lg border" initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h3 className="text-2xl font-bold mb-6">Important Dates</h3>
              <div className="space-y-4">
                {[
                  { label: "Application Start", date: "January 15, 2024" },
                  { label: "Application Deadline", date: "March 31, 2024" },
                  { label: "Entrance Test", date: "April 15, 2024" },
                  { label: "Session Begins", date: "July 1, 2024" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-4 p-4 rounded-xl bg-muted/50">
                    <Calendar className="h-6 w-6 text-primary" />
                    <div>
                      <p className="font-medium">{item.label}</p>
                      <p className="text-sm text-muted-foreground">{item.date}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 space-y-4">
                <Button className="w-full" size="lg">Apply Online Now<ArrowRight className="ml-2 h-5 w-5" /></Button>
                <Button variant="outline" className="w-full" size="lg"><FileText className="mr-2 h-5 w-5" />Download Prospectus</Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Help Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <motion.div className="max-w-3xl mx-auto text-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <HelpCircle className="h-16 w-16 mx-auto mb-6 opacity-80" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Help with Admissions?</h2>
            <p className="text-primary-foreground/80 mb-8">Our admissions team is here to guide you through the process. Feel free to reach out with any questions.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="secondary" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90" asChild><Link href="/contact">Contact Admissions</Link></Button>
              <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10" asChild><Link href="/faq">View FAQs</Link></Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
