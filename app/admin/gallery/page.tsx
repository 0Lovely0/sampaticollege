"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Search,
  Plus,
  Upload,
  Trash2,
  Image as ImageIcon,
  MoreHorizontal,
  Eye,
  Grid3X3,
  List,
} from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const galleryImages = [
  { id: 1, title: "College Main Building", category: "Campus", date: "2024-03-15", size: "2.4 MB", dimensions: "1920x1080" },
  { id: 2, title: "Modern Laboratory", category: "Infrastructure", date: "2024-03-10", size: "1.8 MB", dimensions: "1920x1080" },
  { id: 3, title: "Annual Day Celebration", category: "Events", date: "2024-03-05", size: "3.2 MB", dimensions: "2560x1440" },
  { id: 4, title: "Smart Classroom", category: "Infrastructure", date: "2024-02-28", size: "2.1 MB", dimensions: "1920x1080" },
  { id: 5, title: "Sports Day 2024", category: "Events", date: "2024-02-20", size: "2.8 MB", dimensions: "2560x1440" },
  { id: 6, title: "Digital Library", category: "Infrastructure", date: "2024-02-15", size: "1.9 MB", dimensions: "1920x1080" },
  { id: 7, title: "Nursing Practice Lab", category: "Infrastructure", date: "2024-02-10", size: "2.3 MB", dimensions: "1920x1080" },
  { id: 8, title: "Convocation 2023", category: "Events", date: "2024-01-25", size: "4.1 MB", dimensions: "2560x1440" },
  { id: 9, title: "Campus Garden", category: "Campus", date: "2024-01-20", size: "2.6 MB", dimensions: "1920x1080" },
  { id: 10, title: "Hostel Building", category: "Campus", date: "2024-01-15", size: "2.2 MB", dimensions: "1920x1080" },
  { id: 11, title: "Pharmacy Lab", category: "Infrastructure", date: "2024-01-10", size: "1.7 MB", dimensions: "1920x1080" },
  { id: 12, title: "Blood Donation Camp", category: "Events", date: "2024-01-05", size: "2.9 MB", dimensions: "2560x1440" },
]

const categories = ["Campus", "Infrastructure", "Events", "Students", "Faculty", "Placements"]

export default function GalleryPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [isUploadDialogOpen, setIsUploadDialogOpen] = useState(false)
  const [activeCategory, setActiveCategory] = useState("all")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [selectedImages, setSelectedImages] = useState<number[]>([])

  const filteredImages = galleryImages.filter((image) => {
    const matchesSearch = image.title.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = activeCategory === "all" || image.category === activeCategory
    return matchesSearch && matchesCategory
  })

  const toggleImageSelection = (id: number) => {
    setSelectedImages(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Gallery</h1>
          <p className="text-muted-foreground">Manage photos and media</p>
        </div>
        <div className="flex items-center gap-2">
          {selectedImages.length > 0 && (
            <Button variant="destructive" size="sm">
              <Trash2 className="mr-2 h-4 w-4" />
              Delete ({selectedImages.length})
            </Button>
          )}
          <Dialog open={isUploadDialogOpen} onOpenChange={setIsUploadDialogOpen}>
            <DialogTrigger asChild>
              <Button>
                <Upload className="mr-2 h-4 w-4" />
                Upload Images
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px]">
              <DialogHeader>
                <DialogTitle>Upload Images</DialogTitle>
                <DialogDescription>Add new images to the gallery.</DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-8 text-center hover:border-primary/50 transition-colors cursor-pointer">
                  <Upload className="h-10 w-10 mx-auto text-muted-foreground mb-4" />
                  <p className="text-sm text-muted-foreground mb-2">
                    Drag and drop images here, or click to browse
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Supports: JPG, PNG, WebP (Max 10MB each)
                  </p>
                  <Input type="file" className="hidden" multiple accept="image/*" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="category">Category</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        {categories.map((cat) => (
                          <SelectItem key={cat} value={cat.toLowerCase()}>{cat}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="title">Title (Optional)</Label>
                    <Input id="title" placeholder="Image title" />
                  </div>
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setIsUploadDialogOpen(false)}>Cancel</Button>
                <Button onClick={() => setIsUploadDialogOpen(false)}>Upload</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <Card>
        <CardHeader>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <CardTitle>All Images</CardTitle>
              <CardDescription>{filteredImages.length} images in gallery</CardDescription>
            </div>
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <div className="relative flex-1 sm:flex-initial">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search images..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-9 w-full sm:w-[200px]"
                />
              </div>
              <Select value={activeCategory} onValueChange={setActiveCategory}>
                <SelectTrigger className="w-[140px]">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  {categories.map((cat) => (
                    <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <div className="flex items-center border rounded-md">
                <Button
                  variant={viewMode === "grid" ? "secondary" : "ghost"}
                  size="icon"
                  className="h-9 w-9 rounded-r-none"
                  onClick={() => setViewMode("grid")}
                >
                  <Grid3X3 className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "secondary" : "ghost"}
                  size="icon"
                  className="h-9 w-9 rounded-l-none"
                  onClick={() => setViewMode("list")}
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {viewMode === "grid" ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.2, delay: index * 0.03 }}
                  className={`relative group rounded-lg overflow-hidden border-2 transition-colors cursor-pointer ${
                    selectedImages.includes(image.id) ? "border-primary" : "border-transparent"
                  }`}
                  onClick={() => toggleImageSelection(image.id)}
                >
                  <div className="aspect-square bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center">
                    <ImageIcon className="h-12 w-12 text-muted-foreground/50" />
                  </div>
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-3">
                    <p className="text-white text-sm font-medium truncate">{image.title}</p>
                    <p className="text-white/70 text-xs">{image.category}</p>
                  </div>
                  <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild onClick={(e) => e.stopPropagation()}>
                        <Button variant="secondary" size="icon" className="h-8 w-8">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>
                          <Eye className="mr-2 h-4 w-4" />
                          View
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-red-600">
                          <Trash2 className="mr-2 h-4 w-4" />
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                  {selectedImages.includes(image.id) && (
                    <div className="absolute top-2 left-2 w-5 h-5 bg-primary rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="space-y-2">
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: index * 0.03 }}
                  className={`flex items-center gap-4 p-3 rounded-lg border transition-colors cursor-pointer hover:bg-muted/50 ${
                    selectedImages.includes(image.id) ? "border-primary bg-primary/5" : ""
                  }`}
                  onClick={() => toggleImageSelection(image.id)}
                >
                  <div className="w-16 h-16 rounded-md bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center shrink-0">
                    <ImageIcon className="h-6 w-6 text-muted-foreground/50" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium truncate">{image.title}</p>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <Badge variant="outline">{image.category}</Badge>
                      <span>{image.size}</span>
                      <span>{image.dimensions}</span>
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground hidden sm:block">
                    {new Date(image.date).toLocaleDateString("en-IN")}
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild onClick={(e) => e.stopPropagation()}>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>
                        <Eye className="mr-2 h-4 w-4" />
                        View
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-red-600">
                        <Trash2 className="mr-2 h-4 w-4" />
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </motion.div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
