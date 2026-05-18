"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { departments } from "@/lib/data"
import {
  GraduationCap,
  Users,
  BookOpen,
  Settings,
  ArrowRight,
  Heart,
  Stethoscope,
  PawPrint,
  Pill,
} from "lucide-react"
import Link from "next/link"

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Heart,
  Stethoscope,
  PawPrint,
  Pill,
}

const departmentStats = [
  { id: "bsc-nursing", students: 240, faculty: 35, courses: 48 },
  { id: "post-basic-nursing", students: 90, faculty: 15, courses: 24 },
  { id: "veterinary-pharmacist", students: 120, faculty: 18, courses: 32 },
  { id: "pharmacy", students: 180, faculty: 25, courses: 40 },
]

export default function DepartmentsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Departments</h1>
          <p className="text-muted-foreground">Manage academic departments and programs</p>
        </div>
      </div>

      {/* Overview Stats */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardContent className="p-4 flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center">
              <GraduationCap className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <div className="text-2xl font-bold">4</div>
              <div className="text-sm text-muted-foreground">Total Departments</div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center">
              <Users className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <div className="text-2xl font-bold">630</div>
              <div className="text-sm text-muted-foreground">Total Students</div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center">
              <Users className="h-6 w-6 text-purple-600" />
            </div>
            <div>
              <div className="text-2xl font-bold">93</div>
              <div className="text-sm text-muted-foreground">Total Faculty</div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center">
              <BookOpen className="h-6 w-6 text-orange-600" />
            </div>
            <div>
              <div className="text-2xl font-bold">144</div>
              <div className="text-sm text-muted-foreground">Total Courses</div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Department Cards */}
      <div className="grid gap-6 md:grid-cols-2">
        {departments.map((dept, index) => {
          const Icon = iconMap[dept.icon] || GraduationCap
          const stats = departmentStats.find(s => s.id === dept.id)

          return (
            <motion.div
              key={dept.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${dept.color} flex items-center justify-center`}>
                        <Icon className="h-7 w-7 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{dept.name}</CardTitle>
                        <CardDescription>{dept.duration} Program</CardDescription>
                      </div>
                    </div>
                    <Badge variant="outline">{dept.seats} Seats</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">{dept.description}</p>

                  <div className="grid grid-cols-3 gap-4 mb-4">
                    <div className="text-center p-3 bg-muted/50 rounded-lg">
                      <div className="text-xl font-bold text-foreground">{stats?.students || 0}</div>
                      <div className="text-xs text-muted-foreground">Students</div>
                    </div>
                    <div className="text-center p-3 bg-muted/50 rounded-lg">
                      <div className="text-xl font-bold text-foreground">{stats?.faculty || 0}</div>
                      <div className="text-xs text-muted-foreground">Faculty</div>
                    </div>
                    <div className="text-center p-3 bg-muted/50 rounded-lg">
                      <div className="text-xl font-bold text-foreground">{stats?.courses || 0}</div>
                      <div className="text-xs text-muted-foreground">Courses</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <Button variant="outline" className="flex-1" asChild>
                      <Link href={`/departments/${dept.slug}`} target="_blank">
                        View Page
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Settings className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
