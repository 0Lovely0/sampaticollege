"use client"

import { DepartmentLayout } from "@/components/department/department-layout"
import { DepartmentHero } from "@/components/department/department-hero"
import { CurriculumSection } from "@/components/department/curriculum-section"
import { FacultySection } from "@/components/department/faculty-section"
import { EligibilitySection } from "@/components/department/eligibility-section"
import { departments } from "@/lib/data"

const department = departments.find(d => d.slug === "pharmacy")!

const navLinks = [
  { name: "Overview", href: "/departments/pharmacy" },
  { name: "Curriculum", href: "/departments/pharmacy#curriculum" },
  { name: "Faculty", href: "/departments/pharmacy#faculty" },
  { name: "Admission", href: "/departments/pharmacy#admission" },
  { name: "Apply Now", href: "/admissions" },
]

const curriculum = [
  {
    name: "Year 1 - Semester 1",
    subjects: [
      "Pharmaceutics I",
      "Pharmaceutical Chemistry I",
      "Pharmacognosy",
      "Biochemistry & Clinical Pathology",
      "Human Anatomy & Physiology",
    ],
  },
  {
    name: "Year 1 - Semester 2",
    subjects: [
      "Pharmaceutics II",
      "Pharmaceutical Chemistry II",
      "Pharmacology & Toxicology",
      "Pharmaceutical Jurisprudence",
      "Drug Store & Business Management",
    ],
  },
  {
    name: "Year 2 - Semester 3",
    subjects: [
      "Pharmaceutics III",
      "Hospital & Clinical Pharmacy",
      "Pharmacology II",
      "Pharmaceutical Microbiology",
    ],
  },
  {
    name: "Year 2 - Semester 4",
    subjects: [
      "Practical Training",
      "Community Pharmacy",
      "Quality Assurance",
      "Project Work",
    ],
  },
]

const faculty = [
  {
    name: "Dr. Amit Kumar",
    designation: "Principal & Professor",
    qualification: "M.Pharm, Ph.D.",
    specialization: "Pharmaceutics",
  },
  {
    name: "Mr. Sanjay Verma",
    designation: "HOD & Associate Professor",
    qualification: "M.Pharm",
    specialization: "Pharmaceutical Chemistry",
  },
  {
    name: "Mrs. Pooja Sharma",
    designation: "Senior Lecturer",
    qualification: "M.Pharm",
    specialization: "Pharmacology",
  },
  {
    name: "Mr. Rahul Gupta",
    designation: "Lecturer",
    qualification: "M.Pharm",
    specialization: "Pharmacognosy",
  },
]

const eligibility = [
  "Passed 10+2 examination with Physics, Chemistry and Biology/Mathematics",
  "Minimum 50% marks in aggregate (45% for reserved categories)",
  "Minimum age: 17 years as on 31st December of admission year",
  "Registered with State Pharmacy Council (after completion)",
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
  { item: "Tuition Fee (per year)", amount: "Rs. 55,000" },
  { item: "Admission Fee (one time)", amount: "Rs. 10,000" },
  { item: "Laboratory Fee (per year)", amount: "Rs. 12,000" },
  { item: "Library Fee (per year)", amount: "Rs. 4,000" },
  { item: "Examination Fee (per year)", amount: "Rs. 4,000" },
  { item: "Hostel Fee (optional)", amount: "Rs. 36,000" },
]

export default function PharmacyPage() {
  return (
    <DepartmentLayout department={department} navLinks={navLinks}>
      <DepartmentHero department={department} />
      
      <section id="overview" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-6">About the Program</h2>
            <div className="prose prose-slate max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                The Diploma in Pharmacy (D.Pharm) is a 2-year undergraduate program approved by the 
                Pharmacy Council of India (PCI). This program provides comprehensive training in 
                pharmaceutical sciences, preparing students for careers in the pharmaceutical industry.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Students learn about drug formulation, dispensing, pharmaceutical chemistry, pharmacology, 
                and hospital pharmacy practice. The program includes extensive laboratory work and 
                practical training in community and hospital pharmacy settings.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                After completion, graduates can register with the State Pharmacy Council and work as 
                licensed pharmacists in retail pharmacies, hospitals, pharmaceutical companies, research 
                laboratories, or pursue higher studies like B.Pharm and M.Pharm.
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
