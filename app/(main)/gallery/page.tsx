"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { galleryImages } from "@/lib/data"

const categories = ["All", "Campus", "Facilities", "Labs", "Events"]

// Extended gallery data
const extendedGallery = [
  ...galleryImages,
  { id: 7, src: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=80", alt: "Lecture Hall", category: "Facilities" },
  { id: 8, src: "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?w=800&q=80", alt: "Sports Day", category: "Events" },
  { id: 9, src: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80", alt: "Nursing Practice", category: "Labs" },
  { id: 10, src: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&q=80", alt: "Study Area", category: "Campus" },
  { id: 11, src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80", alt: "Seminar Hall", category: "Events" },
  { id: 12, src: "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?w=800&q=80", alt: "Research Lab", category: "Labs" },
]

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredImages = activeCategory === "All"
    ? extendedGallery
    : extendedGallery.filter((img) => img.category === activeCategory)

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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Gallery</h1>
            <p className="text-xl text-primary-foreground/80">
              Explore our world-class campus, facilities, and memorable moments captured through the lens.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          {/* Filter Tabs */}
          <motion.div
            className="flex flex-wrap justify-center gap-2 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted hover:bg-muted/80"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                className="group relative aspect-square overflow-hidden rounded-2xl"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                layout
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="font-semibold">{image.alt}</p>
                    <p className="text-sm text-white/70">{image.category}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
