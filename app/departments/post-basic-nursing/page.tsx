"use client"

import { DepartmentLayout } from "@/components/department/department-layout"
import { DepartmentHero } from "@/components/department/department-hero"
import { CurriculumSection } from "@/components/department/curriculum-section"
import { FacultySection } from "@/components/department/faculty-section"
import { EligibilitySection } from "@/components/department/eligibility-section"
import { departments } from "@/lib/data"

const department = departments.find(d => d.slug === "post-basic-nursing")!

const navLinks = [
  { name: "Overview", href: "/departments/post-basic-nursing" },
  { name: "Curriculum", href: "/departments/post-basic-nursing#curriculum" },
  { name: "Faculty", href: "/departments/post-basic-nursing#faculty" },
  { name: "Admission", href: "/departments/post-basic-nursing#admission" },
  { name: "Apply Now", href: "/admissions" },
]

const curriculum = [
  {
    name: "Year 1 - Semester 1",
    subjects: [
      "Nursing Foundation",
      "Applied Anatomy & Physiology",
      "Applied Microbiology",
      "Applied Nutrition & Dietetics",
      "English",
    ],
  },
  {
    name: "Year 1 - Semester 2",
    subjects: [
      "Medical Surgical Nursing I",
      "Pharmacology",
      "Pathology & Genetics",
      "Psychology for Nurses",
      "Computer Applications",
    ],
  },
  {
    name: "Year 2 - Semester 3",
    subjects: [
      "Medical Surgical Nursing II",
      "Obstetric & Gynecological Nursing",
      "Child Health Nursing",
      "Mental Health Nursing",
    ],
  },
  {
    name: "Year 2 - Semester 4",
    subjects: [
      "Community Health Nursing",
      "Nursing Research & Statistics",
      "Nursing Education",
      "Nursing Administration",
      "Clinical Practicum",
    ],
  },
]

const faculty = [
  {
    name: "Mrs. Rekha Devi",
    designation: "HOD & Associate Professor",
    qualification: "M.Sc. Nursing, Ph.D. (Pursuing)",
    specialization: "Medical Surgical Nursing",
  },
  {
    name: "Mrs. Priya Gupta",
    designation: "Senior Lecturer",
    qualification: "M.Sc. Nursing",
    specialization: "Community Health Nursing",
  },
  {
    name: "Mr. Arun Mishra",
    designation: "Lecturer",
    qualification: "M.Sc. Nursing",
    specialization: "Mental Health Nursing",
  },
  {
    name: "Mrs. Kavita Rani",
    designation: "Clinical Instructor",
    qualification: "B.Sc. Nursing, PG Diploma",
    specialization: "Critical Care Nursing",
  },
]

const eligibility = [
  "Registered Nurse and Registered Midwife (R.N. R.M.)",
  "Passed GNM course from a recognized institution",
  "Minimum 1 year of clinical experience after GNM",
  "Valid registration with State Nursing Council",
  "Age limit: As per INC/University norms",
]

const documents = [
  "GNM Mark sheets and Certificates",
  "R.N. R.M. Registration Certificate",
  "Experience Certificate (minimum 1 year)",
  "Transfer Certificate",
  "Character Certificate",
  "Category Certificate (if applicable)",
  "Aadhaar Card",
  "Passport size photographs (6 copies)",
]

const feeStructure = [
  { item: "Tuition Fee (per year)", amount: "Rs. 50,000" },
  { item: "Admission Fee (one time)", amount: "Rs. 10,000" },
  { item: "Laboratory Fee (per year)", amount: "Rs. 8,000" },
  { item: "Library Fee (per year)", amount: "Rs. 4,000" },
  { item: "Examination Fee (per year)", amount: "Rs. 4,000" },
  { item: "Hostel Fee (optional)", amount: "Rs. 36,000" },
]

export default function PostBasicNursingPage() {
  return (
    <DepartmentLayout department={department} navLinks={navLinks}>
      <DepartmentHero department={department} />
      
      <section id="overview" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-6">About the Program</h2>
            <div className="prose prose-slate max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                The Post Basic B.Sc. Nursing program is a 2-year degree course designed for registered nurses 
                who have completed their General Nursing and Midwifery (GNM) diploma. This program provides 
                an opportunity for working nurses to upgrade their qualifications and enhance their career prospects.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The curriculum focuses on advanced nursing concepts, research methodology, leadership, and 
                management skills. Students benefit from flexible class schedules that accommodate their 
                work commitments while pursuing higher education.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Graduates can pursue careers in nursing education, administration, specialized clinical practice, 
                and are eligible for further studies like M.Sc. Nursing and doctoral programs.
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
