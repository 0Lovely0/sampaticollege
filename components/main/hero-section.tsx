// "use client";

// import { motion } from "framer-motion";
// import { Button } from "@/components/ui/button";
// import { ArrowRight, Play } from "lucide-react";
// import Image from "next/image";
// import Link from "next/link";

// export function HeroSection() {
//   return (
//     <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-primary/20">
//       <div className="absolute inset-0 opacity-20">
//         <div className="absolute top-20 left-10 w-72 h-72 bg-primary/30 rounded-full blur-3xl" />
//         <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" />
//       </div>

//       <div className="container mx-auto px-4 relative z-10">
//         <div className="grid lg:grid-cols-2 gap-12 items-center">
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             className="text-white"
//           >
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.2 }}
//               className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm mb-6"
//             >
//               <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
//               Admissions Open for 2024-25
//             </motion.div>

//             <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-balance">
//               Shape Your Future in{" "}
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-primary">
//                 Healthcare
//               </span>
//             </h1>

//             <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-xl leading-relaxed text-pretty">
//               Join Sampati Group of Colleges and embark on a journey towards
//               excellence in nursing, pharmacy, and veterinary sciences with
//               world-class education.
//             </p>

//             <div className="flex flex-col sm:flex-row gap-4">
//               <Button size="lg" className="text-lg px-8 py-6" asChild>
//                 <Link href="/admissions">
//                   Apply Now
//                   <ArrowRight className="ml-2 h-5 w-5" />
//                 </Link>
//               </Button>
//               <Button
//                 size="lg"
//                 variant="outline"
//                 className="text-lg px-8 py-6 border-white/30 text-white hover:bg-white/10"
//               >
//                 <Play className="mr-2 h-5 w-5" />
//                 Watch Video
//               </Button>
//             </div>

//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.6 }}
//               className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-white/10"
//             >
//               <div>
//                 <div className="text-3xl font-bold text-white">15+</div>
//                 <div className="text-sm text-slate-400">
//                   Years of Excellence
//                 </div>
//               </div>
//               <div>
//                 <div className="text-3xl font-bold text-white">2500+</div>
//                 <div className="text-sm text-slate-400">Students Enrolled</div>
//               </div>
//               <div>
//                 <div className="text-3xl font-bold text-white">95%</div>
//                 <div className="text-sm text-slate-400">Placement Rate</div>
//               </div>
//             </motion.div>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="hidden lg:block"
//           >
//             <div className="relative">
//               <div className="w-full h-[500px] bg-gradient-to-br from-primary/20 to-cyan-500/20 rounded-3xl backdrop-blur-sm border border-white/10 flex items-center justify-center">
//                 <div className="text-center p-8">
//                   <div className="w-32 h-32 mx-auto mb-6 bg-white/10 rounded-full flex items-center justify-center">
//                     <svg
//                       className="w-16 h-16 text-white"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       stroke="currentColor"
//                       strokeWidth="1.5"
//                     >
//                       <path d="M12 14l9-5-9-5-9 5 9 5z" />
//                       <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
//                       <path d="M12 14l9-5-9-5-9 5 9 5zm0 0v7" />
//                     </svg>
//                   </div>
//                   {/* <h3 className="text-2xl font-bold text-white mb-2">Excellence in Education</h3>
//                   <p className="text-slate-300">Nurturing future healthcare professionals</p> */}
//                   <Image
//                     src="/main/college.png"
//                     alt="College Logo"
//                   fill
//                     className="object-contain"
//                   />
//                 </div>
//               </div>

//               <motion.div
//                 animate={{ y: [0, -10, 0] }}
//                 transition={{ duration: 3, repeat: Infinity }}
//                 className="absolute -top-4 -right-4 bg-white rounded-xl p-4 shadow-xl"
//               >
//                 <div className="text-sm font-semibold text-slate-800">
//                   4 Programs
//                 </div>
//                 <div className="text-xs text-slate-500">Healthcare Courses</div>
//               </motion.div>

//               <motion.div
//                 animate={{ y: [0, 10, 0] }}
//                 transition={{ duration: 3, repeat: Infinity, delay: 1 }}
//                 className="absolute -bottom-4 -left-4 bg-primary rounded-xl p-4 shadow-xl"
//               >
//                 <div className="text-sm font-semibold text-white">120+</div>
//                 <div className="text-xs text-primary-foreground/80">
//                   Expert Faculty
//                 </div>
//               </motion.div>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      
      {/* Background Image */}
      <Image
        src="/main/college.png"
        alt="College Campus"
        fill
        priority
        className="object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70 z-10" />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-10" />

      {/* Content */}
      <div className="relative z-20 flex items-center justify-center h-full">
        <div className="container mx-auto px-4">
          
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl text-white"
          >
            
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-sm mb-6 border border-white/20"
            >
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              Admissions Open for 2024-25
            </motion.div>

            {/* Heading */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              Shape Your Future in{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Healthcare
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-slate-200 max-w-2xl mb-8 leading-relaxed">
              Join Sampati Group of Colleges and embark on a journey towards
              excellence in nursing, pharmacy, and veterinary sciences with
              world-class education.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              
              <Button
                size="lg"
                className="text-lg px-8 py-6 bg-primary hover:bg-primary/90"
                asChild
              >
                <Link href="/admissions">
                  Apply Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 border-white/30 text-black hover:bg-white/10 hover:text-blue-200"
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Video
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-8 border-t border-white/20 max-w-3xl">
              
              <div>
                <div className="text-3xl font-bold">15+</div>
                <div className="text-sm text-slate-300">
                  Years of Excellence
                </div>
              </div>

              <div>
                <div className="text-3xl font-bold">2500+</div>
                <div className="text-sm text-slate-300">
                  Students Enrolled
                </div>
              </div>

              <div>
                <div className="text-3xl font-bold">95%</div>
                <div className="text-sm text-slate-300">
                  Placement Rate
                </div>
              </div>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}