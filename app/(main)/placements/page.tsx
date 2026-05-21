// "use client"

// import { motion } from "framer-motion"
// import Link from "next/link"
// import { ArrowRight, TrendingUp, Briefcase, Building2, Users, CheckCircle } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import { placements, testimonials } from "@/lib/data"

// const placementHighlights = ["Dedicated Placement Cell", "Pre-placement Training", "Resume Building Workshops", "Mock Interview Sessions", "Industry Mentorship Program", "Internship Opportunities"]

// export default function PlacementsPage() {
//   return (
//     <>
//       {/* Hero Section */}
//       <section className="relative py-24 bg-primary text-primary-foreground">
//         <div className="absolute inset-0 opacity-10"><div className="absolute inset-0" style={{ backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`, backgroundSize: "40px 40px" }} /></div>
//         <div className="container mx-auto px-4 relative z-10">
//           <motion.div className="max-w-3xl" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
//             <h1 className="text-4xl md:text-5xl font-bold mb-6">Placements</h1>
//             <p className="text-xl text-primary-foreground/80">Our dedicated placement cell ensures every student gets the best career opportunities in healthcare.</p>
//           </motion.div>
//         </div>
//       </section>

//       {/* Placement Stats */}
//       <section className="py-24">
//         <div className="container mx-auto px-4">
//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {[
//               { icon: TrendingUp, label: "Average Package", value: placements.stats.averagePackage },
//               { icon: Briefcase, label: "Highest Package", value: placements.stats.highestPackage },
//               { icon: Users, label: "Placement Rate", value: placements.stats.placementRate },
//              { icon: Building2, label: "Recruiters", value: placements.stats.companiesVisited },
//             ].map((stat, index) => (
//               <motion.div key={stat.label} className="bg-card rounded-2xl p-8 text-center shadow-lg border" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.1 }}>
//                 <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4"><stat.icon className="h-8 w-8 text-primary" /></div>
//                 <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
//                 <div className="text-muted-foreground">{stat.label}</div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Our Recruiters */}
//       <section className="py-24 bg-muted/30">
//         <div className="container mx-auto px-4">
//           <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
//             <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">Our Partners</span>
//             <h2 className="text-3xl md:text-4xl font-bold mb-4">Top Recruiters</h2>
//             <p className="text-muted-foreground max-w-2xl mx-auto">Leading healthcare organizations and pharmaceutical companies visit our campus for recruitment.</p>
//           </motion.div>
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//             {placements.companies.map((company, index) => (
//               <motion.div key={company} className="bg-card rounded-xl p-8 flex items-center justify-center shadow-sm border hover:shadow-md transition-all" initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.1 }}>
//                 <span className="font-semibold text-center">{company}</span>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Placement Process */}
//       <section className="py-24">
//         <div className="container mx-auto px-4">
//           <div className="grid lg:grid-cols-2 gap-16 items-center">
//             <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
//               <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">Placement Support</span>
//               <h2 className="text-3xl md:text-4xl font-bold mb-6">Comprehensive Career Support</h2>
//               <p className="text-muted-foreground mb-8">Our placement cell provides end-to-end support to help students secure their dream jobs in leading healthcare organizations.</p>
//               <div className="grid gap-4">
//                 {placementHighlights.map((highlight, index) => (
//                   <motion.div key={highlight} className="flex items-center gap-3 p-4 rounded-xl bg-muted/50" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.1 }}>
//                     <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
//                     <span>{highlight}</span>
//                   </motion.div>
//                 ))}
//               </div>
//             </motion.div>
//             <motion.div className="relative" initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
//               <img src="https://images.unsplash.com/photo-1559523161-0fc0d8b38a7a?w=800&q=80" alt="Career Fair" className="rounded-2xl w-full" />
//               <div className="absolute -bottom-8 -left-8 bg-primary text-primary-foreground p-6 rounded-2xl shadow-xl">
//                 <Briefcase className="h-8 w-8 mb-2" />
//                 <div className="text-3xl font-bold">500+</div>
//                 <div className="text-primary-foreground/80 text-sm">Students Placed Annually</div>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Success Stories */}
//       <section className="py-24 bg-muted/30">
//         <div className="container mx-auto px-4">
//           <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
//             <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">Success Stories</span>
//             <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Alumni Speak</h2>
//             <p className="text-muted-foreground max-w-2xl mx-auto">Hear from our successful alumni about their journey from campus to career.</p>
//           </motion.div>
//           <div className="grid md:grid-cols-3 gap-8">
//             {testimonials.map((testimonial, index) => (
//               <motion.div key={testimonial.id} className="bg-card rounded-2xl p-8 shadow-lg border" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.1 }}>
//                 <p className="text-muted-foreground mb-6 italic">&ldquo;{testimonial.quote}&rdquo;</p>
//                 <div className="flex items-center gap-4">
//                   <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover" />
//                   <div>
//                     <h4 className="font-semibold">{testimonial.name}</h4>
//                     <p className="text-sm text-muted-foreground">{testimonial.role}</p>
//                     <p className="text-sm text-primary font-medium">{testimonial.company}</p>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA */}
//       <section className="py-24 bg-primary text-primary-foreground">
//         <div className="container mx-auto px-4">
//           <motion.div className="max-w-3xl mx-auto text-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
//             <h2 className="text-3xl md:text-4xl font-bold mb-6">Start Your Career Journey Today</h2>
//             <p className="text-primary-foreground/80 mb-8">Join Sampati Group of Colleges and get access to the best placement opportunities in healthcare.</p>
//             <Button size="lg" variant="secondary" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90" asChild>
//               <Link href="/admissions">Apply Now<ArrowRight className="ml-2 h-5 w-5" /></Link>
//             </Button>
//           </motion.div>
//         </div>
//       </section>
//     </>
//   )
// }

"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import {
  ArrowRight,
  TrendingUp,
  Briefcase,
  Building2,
  Users,
  CheckCircle,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { placements, testimonials } from "@/lib/data"

const placementHighlights = [
  "Dedicated Placement Cell",
  "Pre-placement Training",
  "Resume Building Workshops",
  "Mock Interview Sessions",
  "Industry Mentorship Program",
  "Internship Opportunities",
]

export default function PlacementsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 bg-primary text-primary-foreground">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Placements
            </h1>

            <p className="text-xl text-primary-foreground/80">
              Our dedicated placement cell ensures every student gets the best
              career opportunities in healthcare.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Placement Stats */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: TrendingUp,
                label: "Average Package",
                value: placements.stats.averagePackage,
              },
              {
                icon: Briefcase,
                label: "Highest Package",
                value: placements.stats.highestPackage,
              },
              {
                icon: Users,
                label: "Placement Rate",
                value: placements.stats.placementRate,
              },
              {
                icon: Building2,
                label: "Recruiters",
                value: placements.stats.companiesVisited,
              },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="bg-card rounded-2xl p-8 text-center shadow-lg border"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-primary" />
                </div>

                <div className="text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </div>

                <div className="text-muted-foreground">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Recruiters */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Our Partners
            </span>

            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Top Recruiters
            </h2>

            <p className="text-muted-foreground max-w-2xl mx-auto">
              Leading healthcare organizations and pharmaceutical companies
              visit our campus for recruitment.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {placements.companies.map((company, index) => (
              <motion.div
                key={company}
                className="bg-card rounded-xl p-8 flex items-center justify-center shadow-sm border hover:shadow-md transition-all"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <span className="font-semibold text-center">
                  {company}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Placement Process */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                Placement Support
              </span>

              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Comprehensive Career Support
              </h2>

              <p className="text-muted-foreground mb-8">
                Our placement cell provides end-to-end support to help students
                secure their dream jobs in leading healthcare organizations.
              </p>

              <div className="grid gap-4">
                {placementHighlights.map((highlight, index) => (
                  <motion.div
                    key={highlight}
                    className="flex items-center gap-3 p-4 rounded-xl bg-muted/50"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.1,
                    }}
                  >
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />

                    <span>{highlight}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="https://images.unsplash.com/photo-1559523161-0fc0d8b38a7a?w=800&q=80"
                alt="Career Fair"
                className="rounded-2xl w-full"
              />

              <div className="absolute -bottom-8 -left-8 bg-primary text-primary-foreground p-6 rounded-2xl shadow-xl">
                <Briefcase className="h-8 w-8 mb-2" />

                <div className="text-3xl font-bold">
                  500+
                </div>

                <div className="text-primary-foreground/80 text-sm">
                  Students Placed Annually
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Success Stories
            </span>

            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Alumni Speak
            </h2>

            <p className="text-muted-foreground max-w-2xl mx-auto">
              Hear from our successful alumni about their journey from campus
              to career.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                className="bg-card rounded-2xl p-8 shadow-lg border"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
              >
                <p className="text-muted-foreground mb-6 italic">
                  &ldquo;{testimonial.content}&rdquo;
                </p>

                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />

                  <div>
                    <h4 className="font-semibold">
                      {testimonial.name}
                    </h4>

                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Start Your Career Journey Today
            </h2>

            <p className="text-primary-foreground/80 mb-8">
              Join Sampati Group of Colleges and get access to the best
              placement opportunities in healthcare.
            </p>

            <Button
              size="lg"
              variant="secondary"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
              asChild
            >
              <Link href="/admissions">
                Apply Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  )
}