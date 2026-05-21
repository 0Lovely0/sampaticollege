"use client";

import React, { useState } from 'react';
import Link from 'next/link'; // Replaced with 'none' or standard routing elements based on local config
import { toppersData } from "@/lib/data";

export default function ToppersDetailedPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredToppers = toppersData.filter(topper => 
    topper.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    topper.achievement.toLowerCase().includes(searchTerm.toLowerCase()) ||
    topper.college.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getExamBadgeColors = (text: string) => {
    if (text.includes("NORCET")) return "bg-blue-50 text-blue-700 border-blue-200";
    if (text.includes("MNS")) return "bg-purple-50 text-purple-700 border-purple-200";
    return "bg-emerald-50 text-emerald-700 border-emerald-200";
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-sky-500 selection:text-white">
      
      {/* Dynamic Background Accents */}
      <div className="absolute top-0 inset-x-0 h-96 bg-gradient-to-b from-sky-100/40 via-slate-50/20 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 relative z-10">
        
        {/* Navigation Deck */}
        <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
          <Link 
            href="/" 
            className="inline-flex items-center text-sm font-semibold text-slate-600 hover:text-sky-600 bg-white px-5 py-2.5 rounded-2xl shadow-sm border border-slate-200/80 hover:shadow-md transition-all duration-200 group"
          >
            <svg className="w-4 h-4 mr-2 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            Dashboard
          </Link>

          <div className="text-xs font-bold tracking-wider text-slate-400 uppercase bg-slate-200/50 px-3 py-1.5 rounded-lg">
            Verified Alumni Database
          </div>
        </div>

        {/* Minimalist Header & Intelligent Filter */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-200 pb-8">
            <div>
              <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900">
                Institutional <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-blue-700">Hall of Fame</span>
              </h1>
              <p className="mt-2 text-slate-500 max-w-xl text-sm sm:text-base font-medium">
                Celebrating our graduates who secured top ranks across competitive national nursing and healthcare examinations.
              </p>
            </div>

            {/* Premium Compact Search */}
            <div className="w-full md:w-80 flex-shrink-0">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search by name, college, rank..."
                  className="w-full pl-4 pr-10 py-3 rounded-2xl border border-slate-200 bg-white text-slate-900 placeholder-slate-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all text-sm font-medium"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-slate-400">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.603 10.603z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Refined Modular Grid Layout */}
        {filteredToppers.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredToppers.map((topper) => (
              <div 
                key={topper.id} 
                className="bg-white rounded-3xl border border-slate-200/70 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col group"
              >
                {/* 1. Portrait Frame (Optimized for genuine proportions) */}
                <div className="w-full aspect-[4/5] relative bg-slate-50 border-b border-slate-100 overflow-hidden flex items-center justify-center p-4">
                  
                  {/* Subtle decorative framing overlay */}
                  <div className="absolute inset-4 border border-slate-200/40 rounded-2xl pointer-events-none z-10 transition-colors group-hover:border-sky-500/20" />
                  
                  <img
                    src={topper.imageUrl}
                    alt={topper.name}
                    className="max-w-full max-h-full object-contain rounded-xl shadow-sm transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                  
                  {/* Absolute Badge */}
                  <span className={`absolute top-6 left-6 z-20 text-[10px] font-extrabold tracking-widest uppercase px-2.5 py-1 rounded-md border shadow-sm ${getExamBadgeColors(topper.achievement)}`}>
                    {topper.achievement.includes("NORCET") ? "NORCET" : topper.achievement.includes("MNS") ? "MNS" : "Ranker"}
                  </span>
                </div>

                {/* 2. Informational Profile Dossier */}
                <div className="p-6 flex flex-col justify-between flex-grow">
                  <div>
                    {/* Identity Heading */}
                    <div className="mb-4">
                      <h2 className="text-xl font-bold text-slate-900 tracking-tight group-hover:text-sky-600 transition-colors">
                        {topper.name}
                      </h2>
                      <p className="text-xs font-semibold text-slate-400 mt-0.5">
                        S/o or D/o {topper.fatherName}
                      </p>
                    </div>

                    {/* Achievement Callout Box */}
                    <div className="bg-slate-50 border border-slate-100 p-3.5 rounded-xl mb-5">
                      <div className="text-[11px] uppercase tracking-wider text-slate-400 font-bold mb-1">Placement / Selection</div>
                      <p className="text-xs font-bold text-slate-800 leading-normal">
                        {topper.achievement}
                      </p>
                    </div>

                    {/* Academic Profiles Metadata */}
                    <div className="space-y-2.5 text-xs">
                      <div className="flex items-start gap-4">
                        <span className="w-20 text-slate-400 font-semibold flex-shrink-0">Course</span>
                        <span className="text-slate-700 font-medium">{topper.degree}</span>
                      </div>
                      <div className="flex items-start gap-4">
                        <span className="w-20 text-slate-400 font-semibold flex-shrink-0">College</span>
                        <span className="text-slate-700 font-medium leading-normal">{topper.college}</span>
                      </div>
                      <div className="flex items-start gap-4">
                        <span className="w-20 text-slate-400 font-semibold flex-shrink-0">Schooling</span>
                        <span className="text-slate-600 font-normal leading-normal">{topper.school}</span>
                      </div>
                    </div>
                  </div>

                  {/* Card Footer: Geographic Origin */}
                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-[11px] text-slate-400 font-medium">
                    <svg className="w-3.5 h-3.5 text-slate-300 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25s-7.5-4.108-7.5-11.25a7.5 7.5 0 1115 0z" />
                    </svg>
                    <span className="truncate">
                      Home Base: <strong className="text-slate-600 font-semibold">{topper.address}</strong>
                    </span>
                  </div>
                </div>

              </div>
            ))}
          </div>
        ) : (
          /* Empty Search Frame */
          <div className="text-center py-16 bg-white rounded-2xl border border-slate-200 shadow-sm max-w-md mx-auto">
            <svg className="mx-auto h-10 w-10 text-slate-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75l-2.489-2.489m0 0a3.375 3.375 0 10-4.773-4.773 3.375 3.375 0 004.773 4.773z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12c0 5.385 4.365 9.75 9.75 9.75s9.75-4.365 9.75-9.75S17.385 2.25 12 2.25 2.25 6.615 2.25 12z" />
            </svg>
            <h3 className="mt-4 text-sm font-bold text-slate-900">No student profiles match</h3>
            <p className="mt-1 text-xs text-slate-500 px-6">
              Try adjusting your spelling or searching for a specific exam title instead.
            </p>
          </div>
        )}

      </div>
    </div>
  );
}