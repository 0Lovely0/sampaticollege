// "use client";

// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Button } from "@/components/ui/button";
// import { ArrowRight, Play, ChevronLeft, ChevronRight } from "lucide-react";
// import Link from "next/link";

// const carouselImages = [
//   "/main/college.png",
//   "/main/college.png", 
//   "/main/college.png"
// ];

// const posterImages = {
//   front: "/main/front.png",
//   back: "/main/back.png" 
// };

// export function HeroSection() {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isFlipped, setIsFlipped] = useState(false);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
//     }, 6000);
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
      
//       {/* 1. TOP CAROUSEL WINDOW */}
//       <div className="absolute top-0 left-0 w-full h-[55vh] md:h-[70vh] z-0 bg-slate-900">
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={currentIndex}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.8 }}
//             className="absolute inset-0 w-full h-full"
//           >
//             <div 
//               className="w-full h-full bg-cover bg-[center_top] md:bg-center bg-no-repeat transition-all duration-500"
//               style={{ backgroundImage: `url(${carouselImages[currentIndex]})` }}
//             />
//           </motion.div>
//         </AnimatePresence>

//         <div className="absolute inset-0 z-10 " />

//         {/* Carousel Controls */}
//         <div className="absolute top-1/3 -translate-y-1/2 left-2 right-2 md:left-4 md:right-4 flex justify-between z-30">
//           <button 
//             onClick={handlePrev}
//             className="p-1.5 md:p-2 rounded-full bg-black/40 hover:bg-white/20 text-white backdrop-blur-md transition-all border border-white/10"
//           >
//             <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
//           </button>
//           <button 
//             onClick={handleNext}
//             className="p-1.5 md:p-2 rounded-full bg-black/40 hover:bg-white/20 text-white backdrop-blur-md transition-all border border-white/10"
//           >
//             <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
//           </button>
//         </div>
//       </div>

//       {/* 2. BOTTOM CONTENTS SECTION */}
//       <div className="relative z-20 w-full mt-[55vh] md:mt-[65vh] lg:mt-[72vh] flex-grow flex items-end">
//         <div className="container mx-auto pb-6 md:pb-10 w-full">
          
//           {/* Glassmorphic Central Content Box */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="w-full bg-slate-900/85 backdrop-blur-xl border border-white/10 rounded-2xl md:rounded-3xl p-5 md:p-8 lg:p-10 shadow-2xl shadow-black/80"
//           >
//             <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
//               {/* Left Column: Copywriting & Actions */}
//               <div className="lg:col-span-7 space-y-4 md:space-y-6">
//                 <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-cyan-500/30 px-3 py-1 rounded-full text-xs font-medium text-cyan-300">
//                   <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
//                   Admissions Open for 2026-27
//                 </div>

//                 <h1 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
//                   Shape Your Future in{" "}
//                   <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400">
//                     Healthcare
//                   </span>
//                 </h1>

//                 <p className="text-slate-300 text-sm md:text-base max-w-xl leading-relaxed">
//                   Join Sampati Group of Colleges and embark on a journey towards
//                   excellence in nursing, pharmacy, and veterinary sciences with
//                   world-class educational infrastructure.
//                 </p>

//                 <div className="flex flex-row flex-wrap gap-3 pt-1">
//                   <Button
//                     size="default"
//                     className="text-sm md:text-base px-5 py-5 md:py-6 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-bold transition-all shadow-lg shadow-cyan-500/20 rounded-xl"
//                     asChild
//                   >
//                     <Link href="/admissions">
//                       Apply Now
//                       <ArrowRight className="ml-1.5 h-4 w-4 md:h-5 md:w-5" />
//                     </Link>
//                   </Button>

//                   <Button
//                     size="default"
//                     variant="outline"
//                     className="text-sm md:text-base px-5 py-5 md:py-6 border-slate-700 bg-slate-800/40 text-slate-200 hover:bg-slate-800 hover:text-white rounded-xl"
//                   >
//                     <Play className="mr-1.5 h-3.5 w-3.5 fill-current" />
//                     Watch Video
//                   </Button>
//                 </div>
//               </div>

//               {/* Right Column: FIXED 3D POSTER FLIP CARD */}
//               <div className="lg:col-span-5 w-full flex justify-center items-center">
//                 <div 
//                   className="relative w-full max-w-[350px] aspect-[4/5] md:aspect-[3/4] cursor-pointer"
//                   onClick={() => setIsFlipped(!isFlipped)}
//                   onMouseEnter={() => setIsFlipped(true)}
//                   onMouseLeave={() => setIsFlipped(false)}
//                   style={{ perspective: "1200px" }}
//                 >
//                   <motion.div
//                     className="w-full h-full relative rounded-2xl shadow-2xl"
//                     style={{ transformStyle: "preserve-3d" }}
//                     animate={{ rotateY: isFlipped ? 180 : 0 }}
//                     transition={{ duration: 0.6, ease: "easeInOut" }}
//                   >
                    
//                     {/* POSTER FRONT */}
//                     <div 
//                       className="absolute inset-0 w-full h-full bg-contain bg-center rounded-2xl border border-white/10"
//                       style={{ 
//                         backfaceVisibility: "hidden",
//                         WebkitBackfaceVisibility: "hidden",
//                         transform: "translateZ(1px)", // Fixes layering order bleeding
//                         backgroundImage: `url(${posterImages.front})`
//                       }}
//                     />

//                     {/* POSTER BACK */}
//                     <div 
//                       className="absolute inset-0 w-full h-full bg-contain bg-center rounded-2xl border border-white/10"
//                       style={{ 
//                         backfaceVisibility: "hidden", 
//                         WebkitBackfaceVisibility: "hidden",
//                         transform: "rotateY(180deg) translateZ(1px)", // Ensures back stays on top after flip
//                         backgroundImage: `url(${posterImages.back})`
//                       }}
//                     />
// a
//                   </motion.div>
//                 </div>
//               </div>

//             </div>

//             {/* Slider Navigation Trackers */}
//             <div className="flex items-center justify-start gap-1.5 mt-6 pt-4 border-t border-slate-800/60">
//               {carouselImages.map((_, index) => (
//                 <button
//                   key={index}
//                   onClick={() => setCurrentIndex(index)}
//                   className="h-1 rounded-full transition-all duration-300"
//                   style={{
//                     width: currentIndex === index ? "1.5rem" : "0.4rem",
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

const carouselImages = [
  "/main/college.png",
  "/main/college.png", 
  "/main/college.png"
];

const posterImages = {
  front: "/main/front.png",
  back: "/main/back.png" 
};

export function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

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
    <section className="relative w-full min-h-screen flex flex-col justify-between overflow-hidden bg-slate-950">
      
      {/* 1. TOP CAROUSEL WINDOW */}
     <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] md:aspect-[16/9] lg:aspect-[21/9] z-0 bg-slate-900">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 w-full h-full"
          >
            <div 
              className="w-full h-full bg-cover bg-[center_top] md:bg-center bg-no-repeat transition-all duration-500"
              style={{ backgroundImage: `url(${carouselImages[currentIndex]})` }}
            />
          </motion.div>
        </AnimatePresence>

        <div className="absolute inset-0 z-10 " />

        {/* Carousel Controls */}
        <div className="absolute top-1/3 -translate-y-1/2 left-2 right-2 md:left-4 md:right-4 flex justify-between z-30">
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
      <div className=" w-full flex-grow flex items-end">
        {/* Replaced .container bound constraints with a full width profile built out for desktop bounds */}
        <div className="w-full mx-auto pb-0 md:pb-10 lg:max-w-7xl">
          
          {/* Glassmorphic Central Content Box */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full bg-slate-900/85 backdrop-blur-xl border-y border-x-0 md:border-x border-white/10 rounded-none md:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10 shadow-2xl shadow-black/80"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Copywriting & Actions */}
              <div className="lg:col-span-7 space-y-4 md:space-y-6">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-cyan-500/30 px-3 py-1 rounded-full text-xs font-medium text-cyan-300">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                  Admissions Open for 2026-27
                </div>

                <h1 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
                  Shape Your Future in{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400">
                    Healthcare
                  </span>
                </h1>

                <p className="text-slate-300 text-sm md:text-base max-w-xl leading-relaxed">
                  Join Sampati Group of Colleges and embark on a journey towards
                  excellence in nursing, pharmacy, and veterinary sciences with
                  world-class educational infrastructure.
                </p>

                <div className="flex flex-row flex-wrap gap-3 pt-1">
                  <Button
                    size="default"
                    className="text-sm md:text-base px-5 py-5 md:py-6 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-bold transition-all shadow-lg shadow-cyan-500/20 rounded-xl"
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
                    className="text-sm md:text-base px-5 py-5 md:py-6 border-slate-700 bg-slate-800/40 text-slate-200 hover:bg-slate-800 hover:text-white rounded-xl"
                  >
                    <Play className="mr-1.5 h-3.5 w-3.5 fill-current" />
                    Watch Video
                  </Button>
                </div>
              </div>

              {/* Right Column: FIXED 3D POSTER FLIP CARD */}
              <div className="lg:col-span-5 w-full h-full flex justify-center items-center">
            <div className="relative w-full max-w-none lg:max-w-[300px] h-auto aspect-[4/5] md:aspect-[2/3] mx-auto cursor-pointer mt-10"
                  onClick={() => setIsFlipped(!isFlipped)}
                  onMouseEnter={() => setIsFlipped(true)}
                  onMouseLeave={() => setIsFlipped(false)}
                  style={{ perspective: "1200px" }}
                >
                  <motion.div
                    className="w-full h-full relative rounded-2xl shadow-2xl"
                    style={{ transformStyle: "preserve-3d" }}
                    animate={{ rotateY: isFlipped ? 180 : 0 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                  >
                    
                    {/* POSTER FRONT */}
                    <div 
                    className="absolute inset-0 w-full h-full bg-contain bg-center bg-no-repeat rounded-2xl border border-white/10"
                      style={{ 
                        backfaceVisibility: "hidden",
                        WebkitBackfaceVisibility: "hidden",
                        transform: "translateZ(1px)", 
                        backgroundImage: `url(${posterImages.front})`
                      }}
                    />

                    {/* POSTER BACK */}
                    <div 
                     className="absolute inset-0 w-full h-full bg-contain bg-center bg-no-repeat rounded-2xl border border-white/10"
                      style={{ 
                        backfaceVisibility: "hidden", 
                        WebkitBackfaceVisibility: "hidden",
                        transform: "rotateY(180deg) translateZ(1px)", 
                        backgroundImage: `url(${posterImages.back})`
                      }}
                    />

                  </motion.div>
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