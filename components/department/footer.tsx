"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import {
  Heart,
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ArrowRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface DepartmentFooterProps {
  departmentName: string
  departmentId: string
  themeColor: string
}

export function DepartmentFooter({ departmentName, departmentId, themeColor }: DepartmentFooterProps) {
  const quickLinks = [
    { href: `/departments/${departmentId}`, label: "Home" },
    { href: `/departments/${departmentId}/about`, label: "About" },
    { href: `/departments/${departmentId}/faculty`, label: "Faculty" },
    { href: `/departments/${departmentId}/labs`, label: "Labs" },
    { href: `/departments/${departmentId}/placements`, label: "Placements" },
    { href: `/departments/${departmentId}/contact`, label: "Contact" },
  ]

  const mainLinks = [
    { href: "/", label: "Main Website" },
    { href: "/departments", label: "All Departments" },
    { href: "/admissions", label: "Admissions" },
    { href: "/placements", label: "Career Services" },
    { href: "/contact", label: "Contact College" },
  ]

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ]

  return (
    <footer className="bg-foreground text-background">
      {/* CTA Banner */}
      <div style={{ backgroundColor: themeColor }} className="py-12">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to Join {departmentName}?
          </h3>
          <p className="text-white/80 mb-6 max-w-2xl mx-auto">
            Take the first step towards a rewarding career in healthcare. Apply now for the upcoming academic session.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="secondary" size="lg" asChild>
              <Link href="/admissions">
                Apply Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white/10" asChild>
              <Link href={`/departments/${departmentId}/contact`}>Contact Department</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Department Info */}
          <div className="lg:col-span-1">
            <Link href={`/departments/${departmentId}`} className="flex items-center gap-3 mb-6">
              <div className="rounded-xl p-2" style={{ backgroundColor: themeColor }}>
                <Heart className="h-6 w-6 text-white" />
              </div>
              <div>
                <h2 className="font-bold text-lg">{departmentName}</h2>
                <p className="text-xs text-background/70">Sampati Group of Colleges</p>
              </div>
            </Link>
            <p className="text-background/70 mb-6 text-sm">
              Dedicated to excellence in healthcare education and professional development.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 rounded-full bg-background/10 hover:bg-background/20 transition-colors"
                  style={{ color: themeColor }}
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Department Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-background/70 text-sm hover:text-background transition-colors"
                    style={{ ["--hover-color" as string]: themeColor }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Main Links */}
          <div>
            <h3 className="font-semibold text-lg mb-6">College Links</h3>
            <ul className="space-y-3">
              {mainLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-background/70 text-sm hover:text-background transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-0.5" style={{ color: themeColor }} />
                <span className="text-background/70 text-sm">
                  123 Education Boulevard, Academic City, State 560001
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5" style={{ color: themeColor }} />
                <a href="tel:+911234567890" className="text-background/70 text-sm hover:text-background transition-colors">
                  +91 1234 567 890
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5" style={{ color: themeColor }} />
                <a href={`mailto:${departmentId}@sampaticollege.edu`} className="text-background/70 text-sm hover:text-background transition-colors">
                  {departmentId}@sampaticollege.edu
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-background/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-background/50 text-sm">
              &copy; {new Date().getFullYear()} Sampati Group of Colleges - {departmentName}. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-sm text-background/50">
              <Link href="/privacy" className="hover:text-background transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-background transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
