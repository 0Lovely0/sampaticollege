"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import {
  Search,
  MoreHorizontal,
  Eye,
  CheckCircle2,
  XCircle,
  Clock,
  Download,
  FileText,
  Mail,
  Phone,
} from "lucide-react"

const applications = [
  { id: "APP001", name: "Priya Sharma", email: "priya@example.com", phone: "+91 98765 43210", department: "B.SC. Nursing", appliedDate: "2024-03-15", status: "pending", qualification: "10+2 (PCB)", percentage: "78%" },
  { id: "APP002", name: "Rahul Kumar", email: "rahul@example.com", phone: "+91 98765 43211", department: "D.Pharm", appliedDate: "2024-03-14", status: "approved", qualification: "10+2 (PCM)", percentage: "82%" },
  { id: "APP003", name: "Anjali Verma", email: "anjali@example.com", phone: "+91 98765 43212", department: "Post Basic BSc", appliedDate: "2024-03-14", status: "pending", qualification: "GNM + 1yr exp", percentage: "75%" },
  { id: "APP004", name: "Suresh Yadav", email: "suresh@example.com", phone: "+91 98765 43213", department: "Veterinary Pharmacist", appliedDate: "2024-03-13", status: "rejected", qualification: "10+2 (Science)", percentage: "42%" },
  { id: "APP005", name: "Meena Kumari", email: "meena@example.com", phone: "+91 98765 43214", department: "B.SC. Nursing", appliedDate: "2024-03-13", status: "approved", qualification: "10+2 (PCB)", percentage: "85%" },
  { id: "APP006", name: "Amit Singh", email: "amit@example.com", phone: "+91 98765 43215", department: "D.Pharm", appliedDate: "2024-03-12", status: "pending", qualification: "10+2 (PCB)", percentage: "72%" },
  { id: "APP007", name: "Kavita Devi", email: "kavita@example.com", phone: "+91 98765 43216", department: "B.SC. Nursing", appliedDate: "2024-03-11", status: "approved", qualification: "10+2 (PCB)", percentage: "88%" },
  { id: "APP008", name: "Ravi Prasad", email: "ravi@example.com", phone: "+91 98765 43217", department: "Veterinary Pharmacist", appliedDate: "2024-03-10", status: "pending", qualification: "10+2 (Science)", percentage: "65%" },
]

export default function ApplicationsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeTab, setActiveTab] = useState("all")
  const [selectedApplication, setSelectedApplication] = useState<typeof applications[0] | null>(null)

  const filteredApplications = applications.filter((app) => {
    const matchesSearch = app.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.id.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesTab = activeTab === "all" || app.status === activeTab
    return matchesSearch && matchesTab
  })

  const counts = {
    all: applications.length,
    pending: applications.filter(a => a.status === "pending").length,
    approved: applications.filter(a => a.status === "approved").length,
    rejected: applications.filter(a => a.status === "rejected").length,
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Applications</h1>
          <p className="text-muted-foreground">Review and manage admission applications</p>
        </div>
        <Button variant="outline">
          <Download className="mr-2 h-4 w-4" />
          Export
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardContent className="p-4 flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center">
              <FileText className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <div className="text-2xl font-bold">{counts.all}</div>
              <div className="text-sm text-muted-foreground">Total Applications</div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-yellow-100 flex items-center justify-center">
              <Clock className="h-6 w-6 text-yellow-600" />
            </div>
            <div>
              <div className="text-2xl font-bold">{counts.pending}</div>
              <div className="text-sm text-muted-foreground">Pending Review</div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center">
              <CheckCircle2 className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <div className="text-2xl font-bold">{counts.approved}</div>
              <div className="text-sm text-muted-foreground">Approved</div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-red-100 flex items-center justify-center">
              <XCircle className="h-6 w-6 text-red-600" />
            </div>
            <div>
              <div className="text-2xl font-bold">{counts.rejected}</div>
              <div className="text-sm text-muted-foreground">Rejected</div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <CardTitle>All Applications</CardTitle>
              <CardDescription>Review and process admission applications</CardDescription>
            </div>
            <div className="relative w-full sm:w-auto">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search applications..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9 w-full sm:w-[250px]"
              />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="mb-4">
              <TabsTrigger value="all">All ({counts.all})</TabsTrigger>
              <TabsTrigger value="pending">Pending ({counts.pending})</TabsTrigger>
              <TabsTrigger value="approved">Approved ({counts.approved})</TabsTrigger>
              <TabsTrigger value="rejected">Rejected ({counts.rejected})</TabsTrigger>
            </TabsList>

            <TabsContent value={activeTab}>
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Application ID</TableHead>
                      <TableHead>Applicant</TableHead>
                      <TableHead className="hidden md:table-cell">Department</TableHead>
                      <TableHead className="hidden lg:table-cell">Applied Date</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredApplications.map((app, index) => (
                      <motion.tr
                        key={app.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2, delay: index * 0.05 }}
                        className="border-b transition-colors hover:bg-muted/50"
                      >
                        <TableCell className="font-medium">{app.id}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                              <span className="text-xs font-medium text-primary">{app.name.charAt(0)}</span>
                            </div>
                            <div>
                              <div className="font-medium">{app.name}</div>
                              <div className="text-xs text-muted-foreground hidden sm:block">{app.email}</div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell className="hidden md:table-cell">{app.department}</TableCell>
                        <TableCell className="hidden lg:table-cell text-muted-foreground">
                          {new Date(app.appliedDate).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}
                        </TableCell>
                        <TableCell>
                          <Badge variant={
                            app.status === "approved" ? "default" :
                            app.status === "rejected" ? "destructive" : "secondary"
                          }>
                            {app.status}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon">
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem onClick={() => setSelectedApplication(app)}>
                                <Eye className="mr-2 h-4 w-4" />
                                View Details
                              </DropdownMenuItem>
                              {app.status === "pending" && (
                                <>
                                  <DropdownMenuItem className="text-green-600">
                                    <CheckCircle2 className="mr-2 h-4 w-4" />
                                    Approve
                                  </DropdownMenuItem>
                                  <DropdownMenuItem className="text-red-600">
                                    <XCircle className="mr-2 h-4 w-4" />
                                    Reject
                                  </DropdownMenuItem>
                                </>
                              )}
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </motion.tr>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* Application Details Dialog */}
      <Dialog open={!!selectedApplication} onOpenChange={() => setSelectedApplication(null)}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Application Details</DialogTitle>
            <DialogDescription>Application ID: {selectedApplication?.id}</DialogDescription>
          </DialogHeader>
          {selectedApplication && (
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-2xl font-medium text-primary">{selectedApplication.name.charAt(0)}</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{selectedApplication.name}</h3>
                  <p className="text-sm text-muted-foreground">{selectedApplication.department}</p>
                </div>
              </div>

              <div className="grid gap-3">
                <div className="flex items-center gap-3 text-sm">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <span>{selectedApplication.email}</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <span>{selectedApplication.phone}</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t">
                <div>
                  <div className="text-sm text-muted-foreground">Qualification</div>
                  <div className="font-medium">{selectedApplication.qualification}</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Percentage</div>
                  <div className="font-medium">{selectedApplication.percentage}</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Applied Date</div>
                  <div className="font-medium">{new Date(selectedApplication.appliedDate).toLocaleDateString("en-IN")}</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Status</div>
                  <Badge variant={
                    selectedApplication.status === "approved" ? "default" :
                    selectedApplication.status === "rejected" ? "destructive" : "secondary"
                  }>
                    {selectedApplication.status}
                  </Badge>
                </div>
              </div>
            </div>
          )}
          <DialogFooter>
            {selectedApplication?.status === "pending" && (
              <>
                <Button variant="outline" className="text-red-600">Reject</Button>
                <Button className="bg-green-600 hover:bg-green-700">Approve</Button>
              </>
            )}
            {selectedApplication?.status !== "pending" && (
              <Button variant="outline" onClick={() => setSelectedApplication(null)}>Close</Button>
            )}
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
