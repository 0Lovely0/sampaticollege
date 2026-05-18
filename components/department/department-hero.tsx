"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Clock, Users, Award } from "lucide-react"
import Link from "next/link"

interface DepartmentHeroProps {
  department: {
    name: string
    description: string
    duration: string
    seats: number
    color: string
  }
}

export function DepartmentHero({ department }: DepartmentHeroProps) {
  return (
    <section className={`relative py-20 md:py-28 bg-gradient-to-br ${department.color} overflow-hidden`}>
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-white rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            {department.name}
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
            {department.description}
          </p>

          <div className="flex flex-wrap gap-6 mb-8">
            <div className="flex items-center gap-2 text-white/90">
              <Clock className="h-5 w-5" />
              <span>{department.duration}</span>
            </div>
            <div className="flex items-center gap-2 text-white/90">
              <Users className="h-5 w-5" />
              <span>{department.seats} Seats</span>
            </div>
            <div className="flex items-center gap-2 text-white/90">
              <Award className="h-5 w-5" />
              <span>Recognized Program</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" variant="secondary" className="text-lg" asChild>
              <Link href="/admissions">
                Apply Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg border-white/30 text-white hover:bg-white/10"
            >
              Download Brochure
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
