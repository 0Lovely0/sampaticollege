// // "use client";

// // import { motion } from "framer-motion";
// // import { Button } from "@/components/ui/button";
// // import { ArrowRight, Play } from "lucide-react";
// // import Image from "next/image";
// // import Link from "next/link";

// // export function HeroSection() {
// //   return (
// //     <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-primary/20">
// //       <div className="absolute inset-0 opacity-20">
// //         <div className="absolute top-20 left-10 w-72 h-72 bg-primary/30 rounded-full blur-3xl" />
// //         <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" />
// //       </div>

// //       <div className="container mx-auto px-4 relative z-10">
// //         <div className="grid lg:grid-cols-2 gap-12 items-center">
// //           <motion.div
// //             initial={{ opacity: 0, x: -50 }}
// //             animate={{ opacity: 1, x: 0 }}
// //             transition={{ duration: 0.8 }}
// //             className="text-white"
// //           >
// //             <motion.div
// //               initial={{ opacity: 0, y: 20 }}
// //               animate={{ opacity: 1, y: 0 }}
// //               transition={{ delay: 0.2 }}
// //               className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm mb-6"
// //             >
// //               <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
// //               Admissions Open for 2024-25
// //             </motion.div>

// //             <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-balance">
// //               Shape Your Future in{" "}
// //               <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-primary">
// //                 Healthcare
// //               </span>
// //             </h1>

// //             <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-xl leading-relaxed text-pretty">
// //               Join Sampati Group of Colleges and embark on a journey towards
// //               excellence in nursing, pharmacy, and veterinary sciences with
// //               world-class education.
// //             </p>

// //             <div className="flex flex-col sm:flex-row gap-4">
// //               <Button size="lg" className="text-lg px-8 py-6" asChild>
// //                 <Link href="/admissions">
// //                   Apply Now
// //                   <ArrowRight className="ml-2 h-5 w-5" />
// //                 </Link>
// //               </Button>
// //               <Button
// //                 size="lg"
// //                 variant="outline"
// //                 className="text-lg px-8 py-6 border-white/30 text-white hover:bg-white/10"
// //               >
// //                 <Play className="mr-2 h-5 w-5" />
// //                 Watch Video
// //               </Button>
// //             </div>

// //             <motion.div
// //               initial={{ opacity: 0, y: 20 }}
// //               animate={{ opacity: 1, y: 0 }}
// //               transition={{ delay: 0.6 }}
// //               className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-white/10"
// //             >
// //               <div>
// //                 <div className="text-3xl font-bold text-white">15+</div>
// //                 <div className="text-sm text-slate-400">
// //                   Years of Excellence
// //                 </div>
// //               </div>
// //               <div>
// //                 <div className="text-3xl font-bold text-white">2500+</div>
// //                 <div className="text-sm text-slate-400">Students Enrolled</div>
// //               </div>
// //               <div>
// //                 <div className="text-3xl font-bold text-white">95%</div>
// //                 <div className="text-sm text-slate-400">Placement Rate</div>
// //               </div>
// //             </motion.div>
// //           </motion.div>

// //           <motion.div
// //             initial={{ opacity: 0, x: 50 }}
// //             animate={{ opacity: 1, x: 0 }}
// //             transition={{ duration: 0.8, delay: 0.2 }}
// //             className="hidden lg:block"
// //           >
// //             <div className="relative">
// //               <div className="w-full h-[500px] bg-gradient-to-br from-primary/20 to-cyan-500/20 rounded-3xl backdrop-blur-sm border border-white/10 flex items-center justify-center">
// //                 <div className="text-center p-8">
// //                   <div className="w-32 h-32 mx-auto mb-6 bg-white/10 rounded-full flex items-center justify-center">
// //                     <svg
// //                       className="w-16 h-16 text-white"
// //                       viewBox="0 0 24 24"
// //                       fill="none"
// //                       stroke="currentColor"
// //                       strokeWidth="1.5"
// //                     >
// //                       <path d="M12 14l9-5-9-5-9 5 9 5z" />
// //                       <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
// //                       <path d="M12 14l9-5-9-5-9 5 9 5zm0 0v7" />
// //                     </svg>
// //                   </div>
// //                   {/* <h3 className="text-2xl font-bold text-white mb-2">Excellence in Education</h3>
// //                   <p className="text-slate-300">Nurturing future healthcare professionals</p> */}
// //                   <Image
// //                     src="/main/college.png"
// //                     alt="College Logo"
// //                   fill
// //                     className="object-contain"
// //                   />
// //                 </div>
// //               </div>

// //               <motion.div
// //                 animate={{ y: [0, -10, 0] }}
// //                 transition={{ duration: 3, repeat: Infinity }}
// //                 className="absolute -top-4 -right-4 bg-white rounded-xl p-4 shadow-xl"
// //               >
// //                 <div className="text-sm font-semibold text-slate-800">
// //                   4 Programs
// //                 </div>
// //                 <div className="text-xs text-slate-500">Healthcare Courses</div>
// //               </motion.div>

// //               <motion.div
// //                 animate={{ y: [0, 10, 0] }}
// //                 transition={{ duration: 3, repeat: Infinity, delay: 1 }}
// //                 className="absolute -bottom-4 -left-4 bg-primary rounded-xl p-4 shadow-xl"
// //               >
// //                 <div className="text-sm font-semibold text-white">120+</div>
// //                 <div className="text-xs text-primary-foreground/80">
// //                   Expert Faculty
// //                 </div>
// //               </motion.div>
// //             </div>
// //           </motion.div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }


// "use client";

// import { motion } from "framer-motion";
// import { Button } from "@/components/ui/button";
// import { ArrowRight, Play } from "lucide-react";
// import Image from "next/image";
// import Link from "next/link";

// export function HeroSection() {
//   return (
//     <section className="relative w-full h-screen overflow-hidden">
      
//       {/* Background Image */}
//       <Image
//         src="/main/college.png"
//         alt="College Campus"
//         fill
//         priority
//         className="object-cover"
//       />

//       {/* Dark Overlay */}
//       <div className="absolute inset-0 bg-black/70 z-10" />

//       {/* Gradient Overlay */}
//       <div className="absolute inset-0 z-10" />

//       {/* Content */}
//       <div className="relative z-20 flex items-center justify-center h-full">
//         <div className="container mx-auto px-4">
          
//           <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="max-w-4xl text-white"
//           >
            
//             {/* Badge */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.2 }}
//               className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-sm mb-6 border border-white/20"
//             >
//               <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
//               Admissions Open for 2024-25
//             </motion.div>

//             {/* Heading */}
//             <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
//               Shape Your Future in{" "}
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
//                 Healthcare
//               </span>
//             </h1>

//             {/* Description */}
//             <p className="text-lg md:text-xl text-slate-200 max-w-2xl mb-8 leading-relaxed">
//               Join Sampati Group of Colleges and embark on a journey towards
//               excellence in nursing, pharmacy, and veterinary sciences with
//               world-class education.
//             </p>

//             {/* Buttons */}
//             <div className="flex flex-col sm:flex-row gap-4 mb-12">
              
//               <Button
//                 size="lg"
//                 className="text-lg px-8 py-6 bg-primary hover:bg-primary/90"
//                 asChild
//               >
//                 <Link href="/admissions">
//                   Apply Now
//                   <ArrowRight className="ml-2 h-5 w-5" />
//                 </Link>
//               </Button>

//               <Button
//                 size="lg"
//                 variant="outline"
//                 className="text-lg px-8 py-6 border-white/30 text-black hover:bg-white/10 hover:text-blue-200"
//               >
//                 <Play className="mr-2 h-5 w-5" />
//                 Watch Video
//               </Button>
//             </div>

//             {/* Stats */}
//             <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-8 border-t border-white/20 max-w-3xl">
              
//               <div>
//                 <div className="text-3xl font-bold">15+</div>
//                 <div className="text-sm text-slate-300">
//                   Years of Excellence
//                 </div>
//               </div>

//               <div>
//                 <div className="text-3xl font-bold">2500+</div>
//                 <div className="text-sm text-slate-300">
//                   Students Enrolled
//                 </div>
//               </div>

//               <div>
//                 <div className="text-3xl font-bold">95%</div>
//                 <div className="text-sm text-slate-300">
//                   Placement Rate
//                 </div>
//               </div>

//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }

// "use client";

// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Button } from "@/components/ui/button";
// import { ArrowRight, Play, ChevronLeft, ChevronRight } from "lucide-react";
// import Link from "next/link";

// // Mock carousel images - replace these paths with your real assets
// const carouselImages = [
//   "/main/college.png",
//   "/main/college.png", // Add more high-res campus images
//   "/main/college.png"
// ];

// export function HeroSection() {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   // Auto-play loop for the carousel
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
//     }, 6000); // changes every 6 seconds
//     return () => clearInterval(timer);
//   }, []);

//   const handleNext = () => {
//     setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
//   };

//   const handlePrev = () => {
//     setCurrentIndex((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
//   };

//   return (
//     <section className="relative w-full min-h-screen flex flex-col justify-between overflow-hidden bg-slate-950">
      
//       {/* 1. TOP SECTION: THE CAROUSEL WINDOW */}
//       <div className="absolute inset-0 w-full h-[70vh] md:h-[75vh] z-0">
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={currentIndex}
//             initial={{ opacity: 0, scale: 1.05 }}
//             animate={{ opacity: 1, scale: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 1 }}
//             className="absolute inset-0 w-full h-full"
//           >
//             {/* Background Image rendering via CSS backdrops */}
//             <div 
//               className="w-full h-full bg-cover bg-center"
//               style={{ backgroundImage: `url(${carouselImages[currentIndex]})` }}
//             />
//           </motion.div>
//         </AnimatePresence>

//         {/* Cinematic Overlays over the carousel */}
//         <div className="absolute inset-0 z-10" />

//         {/* Carousel Arrow Navigation Controls */}
//         <div className="absolute top-1/2 -translate-y-1/2 left-4 right-4 flex justify-between z-30">
//           <button 
//             onClick={handlePrev}
//             className="p-2 rounded-full bg-black/30 hover:bg-white/20 text-white backdrop-blur-md transition-all border border-white/10"
//           >
//             <ChevronLeft className="h-6 w-6" />
//           </button>
//           <button 
//             onClick={handleNext}
//             className="p-2 rounded-full bg-black/30 hover:bg-white/20 text-white backdrop-blur-md transition-all border border-white/10"
//           >
//             <ChevronRight className="h-6 w-6" />
//           </button>
//         </div>
//       </div>

//       {/* 2. BOTTOM SECTION: CONTENT & DETAILS OVERLAPPING THE BASE */}
//       <div className="relative z-20 w-full mt-[55vh] md:mt-[70vh] flex-grow flex items-end">
//         <div className="container mx-auto px-4 pb-12 w-full">
          
//           {/* Glassmorphic Central Box */}
//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="w-full bg-slate-900/70 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-10 shadow-2xl shadow-black/50"
//           >
//             <div className="grid lg:grid-cols-12 gap-8 items-center">
              
//               {/* Left Column: Heading, Copy & CTAs */}
//               <div className="lg:col-span-7 space-y-6">
                
//                 {/* Dynamic Live Badge */}
//                 <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-cyan-500/30 px-4 py-1.5 rounded-full text-xs md:text-sm font-medium text-cyan-300">
//                   <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
//                   Admissions Open for 2024-25
//                 </div>

//                 {/* Engaging Header Typography */}
//                 <h1 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight text-white leading-none">
//                   Shape Your Future in{" "}
//                   <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400">
//                     Healthcare
//                   </span>
//                 </h1>

//                 {/* Subtext description */}
//                 <p className="text-slate-300 text-sm md:text-base max-w-xl leading-relaxed">
//                   Join Sampati Group of Colleges and embark on a journey towards
//                   excellence in nursing, pharmacy, and veterinary sciences with
//                   world-class educational infrastructure.
//                 </p>

//                 {/* Action CTA Buttons */}
//                 <div className="flex flex-wrap gap-4 pt-2">
//                   <Button
//                     size="lg"
//                     className="text-base px-6 py-5 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-semibold transition-all shadow-lg shadow-cyan-500/20"
//                     asChild
//                   >
//                     <Link href="/admissions">
//                       Apply Now
//                       <ArrowRight className="ml-2 h-5 w-5" />
//                     </Link>
//                   </Button>

//                   <Button
//                     size="lg"
//                     variant="outline"
//                     className="text-base px-6 py-5 border-slate-700 bg-slate-800/40 text-slate-200 hover:bg-slate-800 hover:text-white"
//                   >
//                     <Play className="mr-2 h-4 w-4 fill-current" />
//                     Watch Video
//                   </Button>
//                 </div>
//               </div>

//               {/* Right Column: Statistics Grid Layout */}
//               <div className="lg:col-span-5 grid grid-cols-3 lg:grid-cols-1 gap-4 lg:gap-6 border-t lg:border-t-0 lg:border-l border-slate-800 ">
                
//                 <div className="space-y-1">
//                   <div className="text-2xl md:text-4xl font-extrabold text-white tracking-tight">15+</div>
//                   <div className="text-xs md:text-sm text-slate-400 font-medium">Years of Excellence</div>
//                 </div>

//                 <div className="space-y-1">
//                   <div className="text-2xl md:text-4xl font-extrabold text-white tracking-tight">2500+</div>
//                   <div className="text-xs md:text-sm text-slate-400 font-medium">Students Enrolled</div>
//                 </div>

//                 <div className="space-y-1">
//                   <div className="text-2xl md:text-4xl font-extrabold text-cyan-400 tracking-tight">95%</div>
//                   <div className="text-xs md:text-sm text-slate-400 font-medium">Placement Rate</div>
//                 </div>

//               </div>
//             </div>

//             {/* Carousel Active Progress Bars */}
//             <div className="flex items-center justify-start gap-2 mt-8 pt-6 border-t border-slate-800/60">
//               {carouselImages.map((_, index) => (
//                 <button
//                   key={index}
//                   onClick={() => setCurrentIndex(index)}
//                   className="h-1.5 rounded-full transition-all duration-300"
//                   style={{
//                     width: currentIndex === index ? "2rem" : "0.5rem",
//                     backgroundColor: currentIndex === index ? "#22d3ee" : "#475569"
//                   }}
//                   aria-label={`Go to slide ${index + 1}`}
//                 />
//               ))}
//             </div>

//           </motion.div>
          
//         </div>
//       </div>
      
//     </section>
//   );
// }


"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

// Mock carousel images - replace these paths with your real assets
const carouselImages = [
  "/main/college.png",
  "/main/college.png", 
  "/main/college.png"
];

export function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play loop for the carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  return (
    // min-h-screen ensures everything fills the page gracefully on all form factors
    <section className="relative w-full min-h-screen flex flex-col justify-between overflow-hidden bg-slate-950">
      
      {/* 1. TOP CAROUSEL WINDOW */}
      {/* Mobile: h-[40vh] (shorter window) | Tablet/Desktop: md:h-[60vh] */}
      <div className="absolute top-0 left-0 w-full h-[60vh] md:h-[80vh] z-0 bg-slate-900">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 w-full h-full"
          >
            {/* 
              UI FIXES APPLIED:
              - md:bg-center keeps desktop framing centered.
              - bg-[center_top] ensures that on vertical mobile screens, crucial parts of the building/campus aren't cut off from the top.
              - bg-cover scales dynamically across widths.
            */}
            <div 
              className="w-full h-full bg-cover bg-[center_top] md:bg-center bg-no-repeat transition-all duration-500"
              style={{ backgroundImage: `url(${carouselImages[currentIndex]})` }}
            />
          </motion.div>
        </AnimatePresence>

        {/* Dynamic Dark Gradient: Blends the image directly into the dark background below */}
        <div className="absolute inset-0 z-10" />

        {/* Compact Carousel Navigation Controls */}
        <div className="absolute top-1/2 -translate-y-1/2 left-2 right-2 md:left-4 md:right-4 flex justify-between z-30">
          <button 
            onClick={handlePrev}
            className="p-1.5 md:p-2 rounded-full bg-black/40 hover:bg-white/20 text-white backdrop-blur-md transition-all border border-white/10"
          >
            <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
          </button>
          <button 
            onClick={handleNext}
            className="p-1.5 md:p-2 rounded-full bg-black/40 hover:bg-white/20 text-white backdrop-blur-md transition-all border border-white/10"
          >
            <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
          </button>
        </div>
      </div>

      {/* 2. BOTTOM CONTENTS SECTION */}
      {/* mt-[38vh] on mobile pushes text directly beneath the 40vh carousel boundary layer safely */}
      <div className="relative z-20 w-full mt-[55vh] md:mt-[75vh] flex-grow flex items-stretch md:items-end">
        <div className="container mx-auto px-4 pb-6 md:pb-12 w-full flex flex-col justify-between">
          
          {/* Glassmorphic Central Content Box */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-2xl md:rounded-3xl p-5 md:p-10 shadow-2xl shadow-black/60"
          >
            <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-center">
              
              {/* Left Column: Badges, Copywriting, Main Action Items */}
              <div className="lg:col-span-7 space-y-4 md:space-y-6">
                
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-cyan-500/30 px-3 py-1 rounded-full text-xs font-medium text-cyan-300">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                  Admissions Open for 2024-25
                </div>

                <h1 className="text-2xl md:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
                  Shape Your Future in{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400">
                    Healthcare
                  </span>
                </h1>

                <p className="text-slate-300 text-xs md:text-base max-w-xl leading-relaxed">
                  Join Sampati Group of Colleges and embark on a journey towards
                  excellence in nursing, pharmacy, and veterinary sciences with
                  world-class educational infrastructure.
                </p>

                <div className="flex flex-row flex-wrap gap-3 pt-1">
                  <Button
                    size="default"
                    className="text-sm md:text-base px-5 py-4 md:py-6 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-semibold transition-all shadow-lg shadow-cyan-500/20"
                    asChild
                  >
                    <Link href="/admissions">
                      Apply Now
                      <ArrowRight className="ml-1.5 h-4 w-4 md:h-5 md:w-5" />
                    </Link>
                  </Button>

                  <Button
                    size="default"
                    variant="outline"
                    className="text-sm md:text-base px-5 py-4 md:py-6 border-slate-700 bg-slate-800/40 text-slate-200 hover:bg-slate-800 hover:text-white"
                  >
                    <Play className="mr-1.5 h-3.5 w-3.5 fill-current" />
                    Watch Video
                  </Button>
                </div>
              </div>

              {/* Right Column: Information Statistics Grid */}
              <div className="lg:col-span-5 grid grid-cols-3 lg:grid-cols-1 gap-2 md:gap-4 lg:gap-6 border-t lg:border-t-0 lg:border-l border-slate-800/80 pt-4 lg:pt-0 lg:pl-8">
                <div className="space-y-0.5">
                  <div className="text-xl md:text-4xl font-extrabold text-white tracking-tight">15+</div>
                  <div className="text-[10px] md:text-sm text-slate-400 font-medium">Years Active</div>
                </div>
                <div className="space-y-0.5">
                  <div className="text-xl md:text-4xl font-extrabold text-white tracking-tight">2500+</div>
                  <div className="text-[10px] md:text-sm text-slate-400 font-medium">Students</div>
                </div>
                <div className="space-y-0.5">
                  <div className="text-xl md:text-4xl font-extrabold text-cyan-400 tracking-tight">95%</div>
                  <div className="text-[10px] md:text-sm text-slate-400 font-medium">Placements</div>
                </div>
              </div>

            </div>

            {/* Slider Navigation Trackers */}
            <div className="flex items-center justify-start gap-1.5 mt-6 pt-4 border-t border-slate-800/60">
              {carouselImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className="h-1 rounded-full transition-all duration-300"
                  style={{
                    width: currentIndex === index ? "1.5rem" : "0.4rem",
                    backgroundColor: currentIndex === index ? "#22d3ee" : "#475569"
                  }}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}