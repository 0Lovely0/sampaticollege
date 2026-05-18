"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Users,
  FileText,
  GraduationCap,
  TrendingUp,
  Bell,
  Calendar,
  ArrowRight,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react"

const stats = [
  {
    title: "Total Students",
    value: "2,547",
    change: "+12%",
    trend: "up",
    icon: Users,
    color: "bg-blue-500",
  },
  {
    title: "New Applications",
    value: "156",
    change: "+23%",
    trend: "up",
    icon: FileText,
    color: "bg-green-500",
  },
  {
    title: "Active Programs",
    value: "4",
    change: "0%",
    trend: "neutral",
    icon: GraduationCap,
    color: "bg-purple-500",
  },
  {
    title: "Placement Rate",
    value: "95%",
    change: "+2%",
    trend: "up",
    icon: TrendingUp,
    color: "bg-orange-500",
  },
]

const recentApplications = [
  { name: "Priya Sharma", program: "B.SC. Nursing", date: "2024-03-15", status: "pending" },
  { name: "Rahul Kumar", program: "D.Pharm", date: "2024-03-14", status: "approved" },
  { name: "Anjali Verma", program: "Post Basic BSc", date: "2024-03-14", status: "pending" },
  { name: "Suresh Yadav", program: "Veterinary Pharmacist", date: "2024-03-13", status: "rejected" },
  { name: "Meena Kumari", program: "B.SC. Nursing", date: "2024-03-13", status: "approved" },
]

const upcomingEvents = [
  { title: "Admission Deadline", date: "Mar 30, 2024", type: "deadline" },
  { title: "Annual Sports Day", date: "Apr 5, 2024", type: "event" },
  { title: "Guest Lecture", date: "Apr 10, 2024", type: "academic" },
]

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Dashboard</h1>
          <p className="text-muted-foreground">Welcome back! Here&apos;s what&apos;s happening today.</p>
        </div>
        <Button>
          <Bell className="mr-2 h-4 w-4" />
          Post Notice
        </Button>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className={`w-12 h-12 rounded-lg ${stat.color} flex items-center justify-center`}>
                    <stat.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className={`flex items-center gap-1 text-sm ${
                    stat.trend === "up" ? "text-green-600" : stat.trend === "down" ? "text-red-600" : "text-muted-foreground"
                  }`}>
                    {stat.change}
                    {stat.trend === "up" && <ArrowUpRight className="h-4 w-4" />}
                    {stat.trend === "down" && <ArrowDownRight className="h-4 w-4" />}
                  </div>
                </div>
                <div className="mt-4">
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.title}</div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Recent Applications */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Recent Applications</CardTitle>
              <CardDescription>Latest admission applications</CardDescription>
            </div>
            <Button variant="ghost" size="sm">
              View All
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentApplications.map((app, index) => (
                <div key={index} className="flex items-center justify-between py-2 border-b border-border last:border-0">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-sm font-medium text-primary">{app.name.charAt(0)}</span>
                    </div>
                    <div>
                      <div className="font-medium text-sm">{app.name}</div>
                      <div className="text-xs text-muted-foreground">{app.program}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-muted-foreground">{app.date}</span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      app.status === "approved" ? "bg-green-100 text-green-700" :
                      app.status === "rejected" ? "bg-red-100 text-red-700" :
                      "bg-yellow-100 text-yellow-700"
                    }`}>
                      {app.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Upcoming Events */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Upcoming Events</CardTitle>
              <CardDescription>Important dates and events</CardDescription>
            </div>
            <Button variant="ghost" size="sm">
              View Calendar
              <Calendar className="ml-2 h-4 w-4" />
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingEvents.map((event, index) => (
                <div key={index} className="flex items-center gap-4 p-3 rounded-lg bg-muted/50">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex flex-col items-center justify-center">
                    <span className="text-xs text-primary font-medium">{event.date.split(" ")[0]}</span>
                    <span className="text-lg font-bold text-primary">{event.date.split(" ")[1].replace(",", "")}</span>
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-sm">{event.title}</div>
                    <div className="text-xs text-muted-foreground capitalize">{event.type}</div>
                  </div>
                  <Button variant="ghost" size="sm">View</Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>Common administrative tasks</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "Add Student", icon: Users, color: "bg-blue-500" },
              { title: "Post Notice", icon: Bell, color: "bg-green-500" },
              { title: "Create Event", icon: Calendar, color: "bg-purple-500" },
              { title: "Upload Gallery", icon: FileText, color: "bg-orange-500" },
            ].map((action) => (
              <Button
                key={action.title}
                variant="outline"
                className="h-auto py-4 flex flex-col items-center gap-2"
              >
                <div className={`w-10 h-10 rounded-lg ${action.color} flex items-center justify-center`}>
                  <action.icon className="h-5 w-5 text-white" />
                </div>
                <span>{action.title}</span>
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
