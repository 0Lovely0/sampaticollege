"use client"

import { motion } from "framer-motion"
import { Calendar, Clock, MapPin, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { events } from "@/lib/data"

// Extended events data
const allEvents = [
  ...events,
  {
    id: 4,
    title: "Alumni Meet 2024",
    date: "2024-03-15",
    time: "4:00 PM",
    location: "College Campus",
    image: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=800&q=80",
    description: "Reconnect with your batchmates and share your success stories.",
  },
  {
    id: 5,
    title: "Health Awareness Camp",
    date: "2024-03-20",
    time: "9:00 AM",
    location: "Community Center",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    description: "Free health checkups and awareness sessions for the community.",
  },
  {
    id: 6,
    title: "Research Symposium",
    date: "2024-04-01",
    time: "10:00 AM",
    location: "Conference Hall",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80",
    description: "Present your research findings and network with experts.",
  },
]

export default function EventsPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Events & Activities</h1>
            <p className="text-xl text-primary-foreground/80">
              Stay connected with the vibrant campus life through our events, workshops, and activities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allEvents.map((event, index) => (
              <motion.div
                key={event.id}
                className="group bg-card rounded-2xl overflow-hidden shadow-lg border hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {/* Image */}
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 bg-primary text-primary-foreground rounded-xl p-3 text-center">
                    <div className="text-2xl font-bold leading-none">
                      {new Date(event.date).getDate()}
                    </div>
                    <div className="text-xs uppercase">
                      {new Date(event.date).toLocaleDateString("en-US", { month: "short" })}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {event.description}
                  </p>
                  <div className="space-y-2 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full group/btn">
                    View Details
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
