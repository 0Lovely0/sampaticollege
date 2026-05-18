"use client"

import { motion } from "framer-motion"
import { Target, Eye, Award, Users, BookOpen, Heart } from "lucide-react"

const values = [
  {
    icon: Target,
    title: "Excellence",
    description: "Striving for the highest standards in education and healthcare training.",
  },
  {
    icon: Heart,
    title: "Compassion",
    description: "Nurturing empathy and care as core values in healthcare professionals.",
  },
  {
    icon: Users,
    title: "Integrity",
    description: "Upholding ethical practices and honesty in all endeavors.",
  },
  {
    icon: BookOpen,
    title: "Innovation",
    description: "Embracing new technologies and methodologies in education.",
  },
]

export default function AboutPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
            <p className="text-xl text-primary-foreground/80">
              Discover our legacy of excellence in healthcare education spanning over 19 years.
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Content */}
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
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Building Healthcare Leaders Since 2005
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Sampati Group of Colleges was established in 2005 with a vision to create a premier institution for healthcare education in the region. What started as a single nursing program has grown into a comprehensive educational ecosystem offering multiple healthcare and pharmaceutical programs.
                </p>
                <p>
                  Our journey has been marked by continuous growth, innovation, and an unwavering commitment to excellence. Today, we are proud to be recognized as one of the leading healthcare education institutions, with over 5,000 students and 250+ faculty members.
                </p>
                <p>
                  We believe in holistic education that combines academic rigor with practical training, ensuring our graduates are well-prepared to meet the challenges of the healthcare industry.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://images.unsplash.com/photo-1562774053-701939374585?w=400&q=80"
                  alt="Campus"
                  className="rounded-2xl w-full h-48 object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&q=80"
                  alt="Healthcare Education"
                  className="rounded-2xl w-full h-48 object-cover mt-8"
                />
                <img
                  src="https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?w=400&q=80"
                  alt="Library"
                  className="rounded-2xl w-full h-48 object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&q=80"
                  alt="Students"
                  className="rounded-2xl w-full h-48 object-cover mt-8"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              className="bg-card rounded-2xl p-8 shadow-lg border"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <Eye className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-muted-foreground">
                To be a globally recognized center of excellence in healthcare education, producing competent professionals who contribute to the advancement of healthcare services and improve the quality of life in communities.
              </p>
            </motion.div>

            <motion.div
              className="bg-card rounded-2xl p-8 shadow-lg border"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-muted-foreground">
                To provide quality healthcare education through innovative teaching methods, state-of-the-art facilities, and industry partnerships, fostering the development of skilled, compassionate, and ethical healthcare professionals.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              What Guides Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These principles guide everything we do at Sampati Group of Colleges.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="text-center p-6 rounded-2xl bg-muted/50 hover:bg-muted transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Accreditations */}
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
              Recognition
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Accreditations & Affiliations</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our programs are recognized and accredited by leading educational and healthcare regulatory bodies.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {["Indian Nursing Council", "State Nursing Council", "Pharmacy Council of India", "State University"].map(
              (accreditation, index) => (
                <motion.div
                  key={accreditation}
                  className="bg-card rounded-xl p-6 text-center shadow-sm border"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Award className="h-10 w-10 text-primary mx-auto mb-3" />
                  <p className="font-medium text-sm">{accreditation}</p>
                </motion.div>
              )
            )}
          </div>
        </div>
      </section>
    </>
  )
}
