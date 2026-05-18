"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ChevronDown, Heart, Phone, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface DepartmentNavbarProps {
  departmentName: string
  departmentId: string
  themeColor: string
}

export function DepartmentNavbar({ departmentName, departmentId, themeColor }: DepartmentNavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navLinks = [
    { href: `/departments/${departmentId}`, label: "Home" },
    { href: `/departments/${departmentId}/about`, label: "About" },
    { href: `/departments/${departmentId}/faculty`, label: "Faculty" },
    { href: `/departments/${departmentId}/labs`, label: "Labs" },
    { href: `/departments/${departmentId}/training`, label: "Training" },
    { href: `/departments/${departmentId}/placements`, label: "Placements" },
    { href: `/departments/${departmentId}/gallery`, label: "Gallery" },
    { href: `/departments/${departmentId}/contact`, label: "Contact" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      {/* Top Bar */}
      <div style={{ backgroundColor: themeColor }} className="text-white py-2 text-sm">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Main Website</span>
          </Link>
          <div className="hidden md:flex items-center gap-4">
            <a href="tel:+911234567890" className="flex items-center gap-1 hover:underline">
              <Phone className="h-3 w-3" />
              +91 1234 567 890
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <motion.header
        className={cn(
          "sticky top-0 z-50 w-full transition-all duration-300",
          isScrolled
            ? "bg-background/95 backdrop-blur-md shadow-lg"
            : "bg-background"
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href={`/departments/${departmentId}`} className="flex items-center gap-3">
              <div className="rounded-xl p-2" style={{ backgroundColor: themeColor }}>
                <Heart className="h-8 w-8 text-white" />
              </div>
              <div className="hidden sm:block">
                <h1 className="font-bold text-lg leading-tight">{departmentName}</h1>
                <p className="text-xs text-muted-foreground">Sampati Group of Colleges</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                    "hover:bg-accent hover:text-accent-foreground"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-3">
              <Button style={{ backgroundColor: themeColor }} className="hover:opacity-90" asChild>
                <Link href="/admissions">Apply Now</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-accent"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </nav>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-background border-t"
            >
              <div className="container mx-auto px-4 py-4 space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block px-4 py-3 rounded-lg text-sm font-medium hover:bg-accent transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="pt-4">
                  <Button style={{ backgroundColor: themeColor }} className="w-full hover:opacity-90" asChild>
                    <Link href="/admissions">Apply Now</Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  )
}
