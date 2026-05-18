"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Heart, Stethoscope, PawPrint, Pill, Clock, Users, GraduationCap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { departments } from "@/lib/data"

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Heart,
  Stethoscope,
  PawPrint,
  Pill,
}

export default function DepartmentsPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Departments</h1>
            <p className="text-xl text-primary-foreground/80">
              Explore our diverse range of healthcare and pharmaceutical programs designed to prepare you for a successful career.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Departments Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {departments.map((dept, index) => {
              const Icon = iconMap[dept.icon] || Heart
              return (
                <motion.div
                  key={dept.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="group bg-card rounded-2xl overflow-hidden shadow-lg border hover:shadow-xl transition-all duration-300">
                    <div className="grid md:grid-cols-2">
                      {/* Image */}
                      <div className="relative aspect-video md:aspect-auto overflow-hidden">
                        <img
                          src={dept.image}
                          alt={dept.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div
                          className="absolute top-4 left-4 p-3 rounded-xl"
                          style={{ backgroundColor: dept.color }}
                        >
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-8 flex flex-col justify-center">
                        <h2 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                          {dept.name}
                        </h2>
                        <p className="text-muted-foreground mb-6">{dept.description}</p>

                        <div className="space-y-3 mb-6">
                          <div className="flex items-center gap-3 text-sm">
                            <Clock className="h-4 w-4 text-primary" />
                            <span>Duration: {dept.duration}</span>
                          </div>
                          <div className="flex items-center gap-3 text-sm">
                            <Users className="h-4 w-4 text-primary" />
                            <span>Seats: {dept.seats}</span>
                          </div>
                          <div className="flex items-center gap-3 text-sm">
                            <GraduationCap className="h-4 w-4 text-primary" />
                            <span>Eligibility: {dept.eligibility}</span>
                          </div>
                        </div>

                        <Button asChild className="w-full">
                          <Link href={`/departments/${dept.id}`}>
                            Explore Department
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your Healthcare Career?
            </h2>
            <p className="text-muted-foreground mb-8">
              Applications are now open for all programs. Take the first step towards a rewarding career in healthcare.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="/admissions">
                  Apply Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
