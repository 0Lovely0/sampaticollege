"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { departments } from "@/lib/data"
import { ArrowRight, Heart, Stethoscope, PawPrint, Pill } from "lucide-react"
import Link from "next/link"

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Heart,
  Stethoscope,
  PawPrint,
  Pill,
}

export function DepartmentsSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Departments</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our diverse range of healthcare programs designed to prepare you for a successful career in the medical field.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {departments.map((dept, index) => {
            const Icon = iconMap[dept.icon] || Heart
            return (
              <motion.div
                key={dept.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full group hover:shadow-lg transition-all duration-300 overflow-hidden">
                  <CardContent className="p-6">
                    <div className={"w-14 h-14 rounded-xl bg-gradient-to-br " + dept.color + " flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"}>
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">{dept.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{dept.description}</p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <span>{dept.duration}</span>
                      <span>|</span>
                      <span>{dept.seats} Seats</span>
                    </div>
                    <Button variant="ghost" className="p-0 h-auto text-primary hover:text-primary/80" asChild>
                      <Link href={"/departments/" + dept.slug}>
                        Learn More
                        <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <Button size="lg" variant="outline" asChild>
            <Link href="/departments">
              View All Departments
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
