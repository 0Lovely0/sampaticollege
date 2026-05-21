"use client";

import React from 'react';
import Link from 'next/link';
import { toppersData } from "@/lib/data";

export default function ToppersMarquee() {
  // We multiply the data row to ensure it loops smoothly without gaps on wide screens
  const marqueeToppers = [...toppersData, ...toppersData, ...toppersData, ...toppersData];

  return (
    <div className="w-full bg-gray-50 py-16 overflow-hidden flex flex-col items-center">
      {/* Dynamic CSS Keyframes Injection to guarantee auto-scrolling immediately */}
      <style jsx global>{`
        @keyframes scrollLeftToRight {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0%);
          }
        }
        .animate-scroll-lr {
          display: flex;
          width: max-content;
          animation: scrollLeftToRight 30s linear infinite;
        }
        .animate-scroll-lr:hover {
          animation-play-state: paused;
        }
      `}</style>

      <h2 className="text-3xl font-bold text-gray-800 mb-2 tracking-wide uppercase text-center">
        Our Proud Toppers
      </h2>
      <p className="text-gray-500 mb-8 text-sm text-center px-4">
        Hover over any card to pause scrolling and view full profile details
      </p>
      
      {/* Outer Viewport Container */}
      <div className="relative w-full overflow-x-hidden border-y border-gray-200 bg-white py-8 shadow-sm">
        
        {/* Infinite Scrolling Track */}
        <div className="animate-scroll-lr space-x-6">
          {marqueeToppers.map((topper, index) => (
            <div
              key={`${topper.id}-${index}`}
              className="relative flex-shrink-0 w-80 h-[420px] rounded-2xl overflow-hidden shadow-lg border border-gray-100 group bg-gray-900 transition-transform duration-300 hover:scale-105 mx-3"
            >
              {/* Candidate Image */}
              <img
                src={topper.imageUrl}
                alt={topper.name}
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110 opacity-90 group-hover:opacity-30"
              />

              {/* Default Ambient Text (Visible while scrolling) */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/80 to-transparent p-6 text-white transition-opacity duration-300 group-hover:opacity-0">
                <h3 className="text-xl font-bold">{topper.name}</h3>
                <p className="text-xs text-yellow-400 font-semibold mt-1.5 line-clamp-2">
                  {topper.achievement.split(" - ")[0]}
                </p>
              </div>

              {/* Comprehensive Hover Details Panel */}
              <div className="absolute inset-0 bg-blue-950/95 p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between overflow-y-auto">
                <div>
                  <span className="bg-yellow-500 text-blue-950 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                    Topper Profile
                  </span>
                  <h3 className="text-2xl font-black mt-2 text-yellow-400 border-b border-white/20 pb-2">
                    {topper.name}
                  </h3>
                  
                  <div className="mt-4 space-y-2.5 text-xs">
                    <p>
                      <strong className="text-gray-300 block mb-0.5">Selection:</strong> 
                      <span className="text-green-400 font-medium leading-relaxed">{topper.achievement}</span>
                    </p>
                    <p><strong className="text-gray-300">Father's Name:</strong> {topper.fatherName}</p>
                    <p><strong className="text-gray-300">Mother's Name:</strong> {topper.motherName}</p>
                    <p><strong className="text-gray-300">Degree:</strong> {topper.degree}</p>
                    <p><strong className="text-gray-300">College:</strong> {topper.college}</p>
                    <p><strong className="text-gray-300">School:</strong> {topper.school}</p>
                  </div>
                </div>

                <div className="border-t border-white/10 pt-3 mt-3 text-[11px] text-gray-300 italic leading-normal">
                  <strong>Address:</strong> {topper.address}
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>

      {/* Navigation Redirect Trigger */}
      <div className="mt-10">
        <Link 
          href="/toppers" 
          className="inline-flex items-center px-8 py-3 bg-blue-600 text-white font-semibold rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg transition-all duration-200 group transform hover:-translate-y-0.5"
        >
          See All Toppers
          <svg 
            className="w-5 h-5 ml-2 transition-transform duration-200 group-hover:translate-x-1" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      </div>
    </div>
  );
}