export interface Topper {
  id: number;
  name: string;
  achievement: string;
  fatherName: string;
  motherName: string;
  degree: string;
  college: string;
  school: string;
  address: string;
  imageUrl: string;
}

export const toppersData: Topper[] = [
  {
    id: 1,
    name: "Pratima",
    achievement: "NORCET 7.0 Qualified - Selected as Nursing Officer at AIIMS Patna",
    fatherName: "Sh. Jagdish Chand",
    motherName: "Smt. Surekha Devi",
    degree: "B.Sc Nursing",
    college: "Sampati Devi Memorial Nursing College, Bijni Mandi (H.P.)",
    school: "Govt. Senior Secondary School, Paunta",
    address: "Vill. Upper Barot, Teh. Sarkaghat, Distt. Mandi, HP (175024)",
    // High-quality clinical placeholder
    imageUrl: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Shivani",
    achievement: "NORCET 9.0 Qualified - Selected as Nursing Officer at AIIMS Delhi",
    fatherName: "Late Sh. Mohan Lal",
    motherName: "Smt. Veena Devi",
    degree: "B.Sc Nursing (4 Yrs)",
    college: "Sampati Devi Memorial Nursing College, Bijni Mandi (H.P.)",
    school: "Govt. Sen. Sec. School, Paunta (10+2)",
    address: "Vill. Lunadha, PO Fatehpur, Teh. Sarkaghat, Distt. Mandi, HP (175024)",
    imageUrl: "https://images.unsplash.com/photo-1594824813573-246434e33963?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Sheetal Kumari",
    achievement: "Assistant Staff Nurse (26004 Qualified)",
    fatherName: "Sh. Mast Ram",
    motherName: "Smt. Pramila Devi",
    degree: "B.Sc Nursing (4 Yrs)",
    college: "Sampati Devi Memorial Nursing College, Bijni Mandi (H.P.)",
    school: "Project Sen. Sec. School, Bhabanagar, Kinnaur",
    address: "Village Kache, PO Solding, Teh. Nichar, Distt. Kinnaur, HP (172115)",
    imageUrl: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Lt. Heena Kumari",
    achievement: "MNS SCC 2024 Qualified - Selected as Lieutenant (Nursing Officer) at Command Hospital Airforce, Bangalore, Karnataka",
    fatherName: "Sh. Balvir Singh",
    motherName: "Smt. Kamla Devi",
    degree: "B.Sc Nursing (4 Yrs)",
    college: "Sampati Devi Memorial Nursing College, Bijni Mandi (H.P.)",
    school: "GHS Tandi (8th) | GSSS Nanawan (10th) | GSSS Randhara (12th)",
    address: "VPO Gagal, Teh. Balh, Distt. Mandi, HP (175006)",
    imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop",
  }
];
export const departments = [
  {
    id: "bsc-nursing",
    name: "B.SC. Nursing",
    shortName: "BSN",
    slug: "bsc-nursing",
    description:
      "A comprehensive 4-year undergraduate program that prepares students for professional nursing practice.",
    duration: "4 Years",
    seats: 30,
    eligibility: "10+2 with Physics, Chemistry, Biology with minimum 45% marks",

    image: "/departments/bsc-nursing.jpg",

    color: "from-teal-500 to-cyan-600",
    bgColor: "bg-teal-50",
    textColor: "text-teal-700",
    borderColor: "border-teal-200",
    icon: "Heart",
  },

  {
    id: "post-basic-nursing",
    name: "Post Basic B.SC. Nursing",
    shortName: "PBBN",
    slug: "post-basic-nursing",
    description:
      "A 2-year program designed for registered nurses to enhance their qualifications and career prospects.",
    duration: "2 Years",
    seats: 40,
    eligibility: "GNM with minimum 1 year experience",

    image: "/departments/post-basic.jpg",

    color: "from-rose-500 to-pink-600",
    bgColor: "bg-rose-50",
    textColor: "text-rose-700",
    borderColor: "border-rose-200",
    icon: "Stethoscope",
  },

  {
    id: "veterinary-pharmacist",
    name: "Veterinary Pharmacist",
    shortName: "VP",
    slug: "veterinary-pharmacist",
    description:
      "A specialized diploma program focused on veterinary pharmaceutical sciences and animal healthcare.",
    duration: "2 Years",
    seats: 40,
    eligibility: "10+2 with Science stream",

    image: "/departments/veterinary.jpg",

    color: "from-emerald-500 to-green-600",
    bgColor: "bg-emerald-50",
    textColor: "text-emerald-700",
    borderColor: "border-emerald-200",
    icon: "PawPrint",
  },

  {
    id: "D.pharmacy",
    name: "Pharmacy (D.Pharm)",
    shortName: "D.Pharm",
    slug: "pharmacy",
    description:
      "A 2-year diploma program that provides comprehensive training in pharmaceutical sciences.",
    duration: "2 Years",
    seats: 60,
    eligibility: "10+2 with Physics, Chemistry, Biology/Mathematics",

    image: "/departments/pharmacy.jpg",

    color: "from-blue-500 to-indigo-600",
    bgColor: "bg-blue-50",
    textColor: "text-blue-700",
    borderColor: "border-blue-200",
    icon: "Pill",
  },
  {
  id: "multipurpose-health-worker",
  name: "Multipurpose Health Worker",
  shortName: "MPHW",
  slug: "mphw",
  description:
    "A 2-year diploma program designed to train healthcare professionals in community healthcare, emergency first aid, and rural medical assistance.",
  duration: "2 Years",
  seats: 60,
  eligibility: "10+2 in any stream (Science preferred) from a recognized educational board",

  image: "/departments/mphw.jpg",

  color: "from-emerald-500 to-teal-600",
  bgColor: "bg-emerald-50",
  textColor: "text-emerald-700",
  borderColor: "border-emerald-200",
  icon: "HeartPulse",
}
];

export const stats = [
  { label: "Students Enrolled", value: "2500+", icon: "Users" },
  { label: "Years of Excellence", value: "15+", icon: "Award" },
  { label: "Placement Rate", value: "95%", icon: "TrendingUp" },
  { label: "Faculty Members", value: "120+", icon: "GraduationCap" },
];

export const notices = [
  {
    id: 1,
    title: "Admission Open for 2024-25 Academic Year",
    date: "2024-03-15",
    category: "Admission",
    isNew: true,
  },
  {
    id: 2,
    title: "Annual Sports Day Celebration",
    date: "2024-03-20",
    category: "Events",
    isNew: true,
  },
  {
    id: 3,
    title: "Scholarship Application Deadline Extended",
    date: "2024-03-10",
    category: "Scholarship",
    isNew: false,
  },
  {
    id: 4,
    title: "Guest Lecture on Modern Healthcare Practices",
    date: "2024-03-25",
    category: "Academic",
    isNew: true,
  },
];

export const events = [
  {
    id: 1,
    title: "National Nurses Day Celebration",
    date: "2024-05-12",
    time: "10:00 AM",
    location: "Main Auditorium",
    description:
      "Celebrating the dedication and contributions of nurses worldwide.",
    image: "/events/nurses-day.jpg",
  },
  {
    id: 2,
    title: "Healthcare Innovation Summit",
    date: "2024-04-15",
    time: "9:00 AM",
    location: "Conference Hall",
    description:
      "A summit bringing together healthcare professionals and innovators.",
    image: "/events/summit.jpg",
  },
  {
    id: 3,
    title: "Alumni Meet 2024",
    date: "2024-06-20",
    time: "11:00 AM",
    location: "Campus Grounds",
    description: "Annual gathering of our distinguished alumni.",
    image: "/events/alumni.jpg",
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "B.SC. Nursing Graduate, 2023",
    content:
      "The education and practical training I received at Sampati College prepared me excellently for my nursing career. The faculty is dedicated and supportive.",
    image: "/testimonials/student1.jpg",
    rating: 5,
  },
  {
    id: 2,
    name: "Rahul Kumar",
    role: "D.Pharm Graduate, 2022",
    content:
      "Excellent infrastructure and hands-on training in the pharmacy labs. I secured a job at a leading pharmaceutical company right after graduation.",
    image: "/testimonials/student2.jpg",
    rating: 5,
  },
  {
    id: 3,
    name: "Anjali Verma",
    role: "Post Basic B.SC. Nursing, 2023",
    content:
      "The program helped me advance my nursing career significantly. The flexible schedule allowed me to continue working while studying.",
    image: "/testimonials/student3.jpg",
    rating: 5,
  },
];

export const facilities = [
  {
    title: "Modern Laboratories",
    description:
      "State-of-the-art labs equipped with the latest equipment for practical training.",
    icon: "FlaskConical",
  },
  {
    title: "Digital Library",
    description:
      "Extensive collection of books, journals, and online resources.",
    icon: "BookOpen",
  },
  {
    title: "Hospital Tie-ups",
    description: "Partnerships with leading hospitals for clinical training.",
    icon: "Hospital",
  },
  {
    title: "Hostel Facilities",
    description: "Comfortable accommodation with modern amenities.",
    icon: "Home",
  },
  {
    title: "Sports Complex",
    description: "Multi-sport facilities for physical fitness and recreation.",
    icon: "Dumbbell",
  },
  {
    title: "Cafeteria",
    description: "Hygienic food services with nutritious meal options.",
    icon: "UtensilsCrossed",
  },
];

export const placements = {
  companies: [
    "Apollo Hospitals",
    "Fortis Healthcare",
    "Max Healthcare",
    "AIIMS",
    "Medanta",
    "Cipla",
    "Sun Pharma",
    "Dr. Reddy's",
  ],
  stats: {
    averagePackage: "4.5 LPA",
    highestPackage: "12 LPA",
    placementRate: "95%",
    companiesVisited: "50+",
  },
};

export const faqs = [
  {
    question: "What are the admission requirements?",
    answer:
      "Admission requirements vary by program. Generally, you need to have completed 10+2 with relevant subjects. Please check the specific program page for detailed eligibility criteria.",
  },
  {
    question: "Is there a hostel facility available?",
    answer:
      "Yes, we have separate hostel facilities for boys and girls with modern amenities, 24/7 security, and nutritious food services.",
  },
  {
    question: "What is the fee structure?",
    answer:
      "Fee structure varies by program. Please contact our admissions office or visit the specific department page for detailed fee information.",
  },
  {
    question: "Are scholarships available?",
    answer:
      "Yes, we offer merit-based and need-based scholarships. Government scholarships are also applicable for eligible students.",
  },
  {
    question: "What are the placement opportunities?",
    answer:
      "We have a dedicated placement cell that works with leading healthcare organizations. Our placement rate is above 95% with competitive salary packages.",
  },
];

export const galleryImages = [
  {
    id: 1,
    src: "/gallery/campus-1.jpg",
    alt: "College Campus",
    category: "Campus",
  },
  {
    id: 2,
    src: "/gallery/lab-1.jpg",
    alt: "Modern Laboratory",
    category: "Infrastructure",
  },
  {
    id: 3,
    src: "/gallery/event-1.jpg",
    alt: "Cultural Event",
    category: "Events",
  },
  {
    id: 4,
    src: "/gallery/classroom-1.jpg",
    alt: "Smart Classroom",
    category: "Infrastructure",
  },
  {
    id: 5,
    src: "/gallery/sports-1.jpg",
    alt: "Sports Day",
    category: "Events",
  },
  {
    id: 6,
    src: "/gallery/library-1.jpg",
    alt: "Digital Library",
    category: "Infrastructure",
  },
];

// Ensure the keyword 'export' is right before 'const collegeInfo'
export const collegeInfo = {
  name: "Sampati Group of Colleges",
  shortName: "SGC",
  tagline: "Excellence in Healthcare Education",
  established: "2005",

  phone: "8219620060",
  email: "info@sampatidevi.com",
  address: "Bijni Mandi, Himachal Pradesh, 175024",
  timing: "9:00 AM - 5:00 PM",
};