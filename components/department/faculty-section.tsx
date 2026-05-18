"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Mail } from "lucide-react"

interface FacultySectionProps {
  faculty: {
    name: string
    designation: string
    qualification: string
    specialization: string
  }[]
  color: string
}

export function FacultySection({ faculty, color }: FacultySectionProps) {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Faculty
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Learn from experienced educators and healthcare professionals
            dedicated to your success.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {faculty.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full text-center">
                <CardContent className="p-6">
                  <div className={`w-20 h-20 mx-auto rounded-full bg-gradient-to-br ${color} flex items-center justify-center mb-4`}>
                    <span className="text-2xl font-bold text-white">
                      {member.name.split(" ").map(n => n[0]).join("")}
                    </span>
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">{member.name}</h3>
                  <p className="text-sm text-primary mb-2">{member.designation}</p>
                  <p className="text-xs text-muted-foreground mb-1">{member.qualification}</p>
                  <p className="text-xs text-muted-foreground">{member.specialization}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
