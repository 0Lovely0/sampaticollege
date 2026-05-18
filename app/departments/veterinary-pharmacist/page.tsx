"use client"

import { DepartmentLayout } from "@/components/department/department-layout"
import { DepartmentHero } from "@/components/department/department-hero"
import { CurriculumSection } from "@/components/department/curriculum-section"
import { FacultySection } from "@/components/department/faculty-section"
import { EligibilitySection } from "@/components/department/eligibility-section"
import { departments } from "@/lib/data"

const department = departments.find(d => d.slug === "veterinary-pharmacist")!

const navLinks = [
  { name: "Overview", href: "/departments/veterinary-pharmacist" },
  { name: "Curriculum", href: "/departments/veterinary-pharmacist#curriculum" },
  { name: "Faculty", href: "/departments/veterinary-pharmacist#faculty" },
  { name: "Admission", href: "/departments/veterinary-pharmacist#admission" },
  { name: "Apply Now", href: "/admissions" },
]

const curriculum = [
  {
    name: "Year 1 - Semester 1",
    subjects: [
      "Veterinary Anatomy",
      "Veterinary Physiology",
      "Pharmaceutical Chemistry I",
      "Pharmacognosy",
      "English Communication",
    ],
  },
  {
    name: "Year 1 - Semester 2",
    subjects: [
      "Veterinary Pathology",
      "Pharmaceutical Chemistry II",
      "Pharmacology I",
      "Animal Husbandry",
      "Computer Applications",
    ],
  },
  {
    name: "Year 2 - Semester 3",
    subjects: [
      "Veterinary Pharmacology II",
      "Clinical Pharmacy",
      "Pharmaceutical Microbiology",
      "Drug Store Management",
    ],
  },
  {
    name: "Year 2 - Semester 4",
    subjects: [
      "Veterinary Therapeutics",
      "Pharmaceutical Jurisprudence",
      "Hospital & Clinical Pharmacy",
      "Practical Training",
    ],
  },
]

const faculty = [
  {
    name: "Dr. Vikram Singh",
    designation: "HOD & Associate Professor",
    qualification: "B.V.Sc., M.V.Sc., Ph.D.",
    specialization: "Veterinary Pharmacology",
  },
  {
    name: "Dr. Neha Patel",
    designation: "Senior Lecturer",
    qualification: "M.Pharm",
    specialization: "Clinical Pharmacy",
  },
  {
    name: "Mr. Suresh Yadav",
    designation: "Lecturer",
    qualification: "B.V.Sc., M.V.Sc.",
    specialization: "Animal Husbandry",
  },
  {
    name: "Mrs. Lakshmi Devi",
    designation: "Lab Instructor",
    qualification: "D.Pharm, B.Pharm",
    specialization: "Pharmaceutical Chemistry",
  },
]

const eligibility = [
  "Passed 10+2 examination with Science stream (PCB/PCM)",
  "Minimum 45% marks in aggregate (40% for reserved categories)",
  "Minimum age: 17 years as on admission date",
  "Interest in animal healthcare and pharmaceutical sciences",
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
  { item: "Tuition Fee (per year)", amount: "Rs. 40,000" },
  { item: "Admission Fee (one time)", amount: "Rs. 8,000" },
  { item: "Laboratory Fee (per year)", amount: "Rs. 8,000" },
  { item: "Library Fee (per year)", amount: "Rs. 3,000" },
  { item: "Examination Fee (per year)", amount: "Rs. 3,500" },
  { item: "Hostel Fee (optional)", amount: "Rs. 30,000" },
]

export default function VeterinaryPharmacistPage() {
  return (
    <DepartmentLayout department={department} navLinks={navLinks}>
      <DepartmentHero department={department} />
      
      <section id="overview" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-6">About the Program</h2>
            <div className="prose prose-slate max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                The Veterinary Pharmacist Diploma is a specialized 2-year program that combines veterinary 
                sciences with pharmaceutical knowledge. Students learn about animal anatomy, physiology, 
                pharmacology, and the proper dispensing of veterinary medicines.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                This unique program addresses the growing need for trained professionals who can support 
                veterinary clinics, animal hospitals, and the veterinary pharmaceutical industry. Students 
                gain practical experience through internships at veterinary facilities.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Career opportunities include working in veterinary clinics, animal hospitals, pharmaceutical 
                companies dealing in veterinary medicines, livestock farms, poultry industries, and government 
                veterinary services.
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
