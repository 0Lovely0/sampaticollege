"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { collegeInfo } from "@/lib/data"
import {
  GraduationCap,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ChevronRight,
  Home,
} from "lucide-react"

interface DepartmentLayoutProps {
  children: React.ReactNode
  department: {
    name: string
    shortName: string
    slug: string
    color: string
    bgColor: string
    textColor: string
  }
  navLinks: { name: string; href: string }[]
}

export function DepartmentLayout({ children, department, navLinks }: DepartmentLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Department Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
        <div className={`h-1 bg-gradient-to-r ${department.color}`} />
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <Link href="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground">
                <Home className="h-4 w-4" />
                <span className="text-sm">Main Site</span>
              </Link>
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
              <Link href={`/departments/${department.slug}`} className="flex items-center gap-2">
                <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${department.color} flex items-center justify-center`}>
                  <GraduationCap className="h-4 w-4 text-white" />
                </div>
                <span className="font-semibold text-foreground">{department.shortName}</span>
              </Link>
            </div>

            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="px-3 py-2 text-sm text-foreground/70 hover:text-foreground transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            <Button size="sm" className={`bg-gradient-to-r ${department.color} text-white border-0`} asChild>
              <Link href="/admissions">Apply Now</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* Department Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${department.color} flex items-center justify-center`}>
                  <GraduationCap className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">{department.name}</h3>
                  <p className="text-xs text-slate-400">{collegeInfo.name}</p>
                </div>
              </div>
              <p className="text-sm text-slate-400">
                Providing quality education and training for future healthcare professionals.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-sm hover:text-white transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Contact</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-sm">
                  <Phone className="h-4 w-4" />
                  {collegeInfo.phone}
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <Mail className="h-4 w-4" />
                  {collegeInfo.email}
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <MapPin className="h-4 w-4 mt-0.5" />
                  {collegeInfo.address}
                </li>
              </ul>
              <div className="flex gap-3 mt-4">
                {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                  <a key={i} href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-slate-700">
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-sm text-slate-500">
            <p>&copy; {new Date().getFullYear()} {collegeInfo.name}. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
