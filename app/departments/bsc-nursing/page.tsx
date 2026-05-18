"use client"

import { DepartmentLayout } from "@/components/department/department-layout"
import { DepartmentHero } from "@/components/department/department-hero"
import { CurriculumSection } from "@/components/department/curriculum-section"
import { FacultySection } from "@/components/department/faculty-section"
import { EligibilitySection } from "@/components/department/eligibility-section"
import { departments } from "@/lib/data"

const department = departments.find(d => d.slug === "bsc-nursing")!

const navLinks = [
  { name: "Overview", href: "/departments/bsc-nursing" },
  { name: "Curriculum", href: "/departments/bsc-nursing#curriculum" },
  { name: "Faculty", href: "/departments/bsc-nursing#faculty" },
  { name: "Admission", href: "/departments/bsc-nursing#admission" },
  { name: "Apply Now", href: "/admissions" },
]

const curriculum = [
  {
    name: "Year 1 - Semester 1",
    subjects: [
      "Anatomy",
      "Physiology",
      "Nutrition & Biochemistry",
      "Nursing Foundations",
      "Psychology",
      "English",
    ],
  },
  {
    name: "Year 1 - Semester 2",
    subjects: [
      "Microbiology",
      "Pharmacology",
      "Medical Surgical Nursing I",
      "Pathology",
      "Genetics",
      "Computer Science",
    ],
  },
  {
    name: "Year 2 - Semester 3",
    subjects: [
      "Medical Surgical Nursing II",
      "Community Health Nursing I",
      "Communication & Educational Technology",
      "Sociology",
    ],
  },
  {
    name: "Year 2 - Semester 4",
    subjects: [
      "Medical Surgical Nursing III",
      "Child Health Nursing",
      "Mental Health Nursing",
      "Introduction to Nursing Research",
    ],
  },
  {
    name: "Year 3 - Semester 5",
    subjects: [
      "Midwifery & Obstetrical Nursing",
      "Community Health Nursing II",
      "Nursing Research & Statistics",
      "Management of Nursing Services",
    ],
  },
  {
    name: "Year 4 - Internship",
    subjects: [
      "Clinical Rotation - Medical Ward",
      "Clinical Rotation - Surgical Ward",
      "Clinical Rotation - Pediatrics",
      "Clinical Rotation - Obstetrics",
      "Clinical Rotation - Community Health",
      "Clinical Rotation - ICU/Emergency",
    ],
  },
]

const faculty = [
  {
    name: "Dr. Sunita Sharma",
    designation: "Principal & Professor",
    qualification: "Ph.D. Nursing, M.Sc. Nursing",
    specialization: "Medical Surgical Nursing",
  },
  {
    name: "Mrs. Meena Kumari",
    designation: "Vice Principal",
    qualification: "M.Sc. Nursing",
    specialization: "Obstetrics & Gynecology",
  },
  {
    name: "Mr. Rajesh Kumar",
    designation: "Senior Lecturer",
    qualification: "M.Sc. Nursing",
    specialization: "Community Health Nursing",
  },
  {
    name: "Mrs. Anjali Singh",
    designation: "Lecturer",
    qualification: "M.Sc. Nursing",
    specialization: "Pediatric Nursing",
  },
]

const eligibility = [
  "Passed 10+2 examination with Physics, Chemistry, Biology and English",
  "Minimum 45% marks in aggregate (40% for SC/ST candidates)",
  "Minimum age: 17 years as on 31st December of admission year",
  "Maximum age: 35 years",
  "Medically fit",
]

const documents = [
  "10th & 12th Mark sheets and Certificates",
  "Transfer Certificate",
  "Migration Certificate (if applicable)",
  "Character Certificate",
  "Category Certificate (if applicable)",
  "Medical Fitness Certificate",
  "Aadhaar Card",
  "Passport size photographs (6 copies)",
]

const feeStructure = [
  { item: "Tuition Fee (per year)", amount: "Rs. 75,000" },
  { item: "Admission Fee (one time)", amount: "Rs. 15,000" },
  { item: "Laboratory Fee (per year)", amount: "Rs. 10,000" },
  { item: "Library Fee (per year)", amount: "Rs. 5,000" },
  { item: "Examination Fee (per year)", amount: "Rs. 5,000" },
  { item: "Hostel Fee (optional)", amount: "Rs. 36,000" },
]

export default function BSCNursingPage() {
  return (
    <DepartmentLayout department={department} navLinks={navLinks}>
      <DepartmentHero department={department} />
      
      <section id="overview" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-6">About the Program</h2>
            <div className="prose prose-slate max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                The Bachelor of Science in Nursing (B.Sc. Nursing) is a 4-year undergraduate degree program 
                that prepares students for a career in professional nursing. This comprehensive program combines 
                theoretical knowledge with extensive clinical practice to develop competent and compassionate nurses.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our program is approved by the Indian Nursing Council (INC) and is affiliated with the state 
                health university. Students gain hands-on experience through clinical rotations at our partner 
                hospitals, preparing them for various healthcare settings.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Upon completion, graduates are eligible to register with the State Nursing Council and can 
                pursue careers in hospitals, community health centers, nursing education, and administration.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div id="curriculum">
        <CurriculumSection semesters={curriculum} color={department.color} />
      </div>

      <div id="faculty">
        <FacultySection faculty={faculty} color={department.color} />
      </div>

      <div id="admission">
        <EligibilitySection 
          eligibility={eligibility} 
          documents={documents} 
          feeStructure={feeStructure}
          color={department.color}
        />
      </div>
    </DepartmentLayout>
  )
}
