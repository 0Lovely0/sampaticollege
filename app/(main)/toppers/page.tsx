"use client";

import React, { useState } from 'react';
import Link from 'next/link';

interface Topper {
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
  badgeColor?: string; // Optional custom tags for specific achievements
}

const detailedToppers: Topper[] = [
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

export default function ToppersDetailedPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredToppers = detailedToppers.filter(topper => 
    topper.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    topper.achievement.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Helper helper function to parse dynamic subheadings out of the raw text strings safely
  const getExamBadge = (text: string) => {
    if (text.includes("NORCET")) return "NORCET ACHIever";
    if (text.includes("MNS")) return "MILITARY NURSING CORPS";
    return "STATE SELECTION";
  };

  return (
    <div className="min-h-screen bg-slate-50/60 py-6 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Modern Breadcrumb Button */}
        <div className="mb-8">
          <Link 
            href="/" 
            className="inline-flex items-center text-sm font-semibold text-sky-600 hover:text-sky-700 bg-white px-4 py-2 rounded-full shadow-sm border border-slate-100 hover:shadow transition-all group"
          >
            <svg className="w-4 h-4 mr-2 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            Back to Dashboard
          </Link>
        </div>

        {/* Premium Header Architecture */}
        <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 rounded-3xl p-8 sm:p-12 shadow-xl mb-12 relative overflow-hidden text-white border border-slate-800">
          <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-500/5 rounded-full blur-2xl -ml-20 -mb-20 pointer-events-none" />
          
          <div className="relative z-10 lg:flex lg:items-center lg:justify-between gap-8">
            <div className="max-w-2xl text-center lg:text-left">
              <span className="bg-gradient-to-r from-amber-400 to-yellow-300 text-slate-950 text-xs font-black px-3.5 py-1.5 rounded-full uppercase tracking-widest shadow-sm">
                Hall of Fame
              </span>
              <h1 className="text-4xl sm:text-5xl font-black tracking-tight mt-4 text-white">
                Our Institutional Toppers
              </h1>
              <p className="mt-4 text-slate-300 text-base sm:text-lg font-medium leading-relaxed">
                Honoring the dedication, exceptional clinical proficiency, and monumental career milestones achieved by our elite alumni network.
              </p>
            </div>
            
            {/* Minimalist Search Deck */}
            <div className="mt-8 lg:mt-0 w-full lg:w-96 flex-shrink-0">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-slate-400" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.603 10.603z" />
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="Filter by name, exam, or station..."
                  className="w-full pl-11 pr-4 py-3.5 rounded-2xl border border-slate-700 bg-slate-900/60 text-white placeholder-slate-400 shadow-inner focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all backdrop-blur-md text-sm"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="mt-2 text-right">
                <span className="text-xs font-semibold text-slate-400">
                  Showing {filteredToppers.length} of {detailedToppers.length} Rankers
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Grid Map */}
        {filteredToppers.length > 0 ? (
          <div className="grid grid-cols-1 gap-3">
            {filteredToppers.map((topper) => (
              <div 
                key={topper.id} 
                className="bg-white rounded-3xl shadow-md hover:shadow-xl border border-slate-100 flex flex-col sm:flex-row transition-all duration-300 overflow-hidden transform hover:-translate-y-1 group"
              >
                {/* Photo Studio Card Block */}
                <div className="w-full sm:w-52 md:w-62 lg:w-82 h-72 sm:h-auto relative bg-slate-900 flex-shrink-0 overflow-hidden border-b sm:border-b-0 sm:border-r border-slate-100">
                  <img
                    src={topper.imageUrl}
                    alt={topper.name}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.src = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop"; 
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Structured Credentials Content Sheet */}
                <div className="p-8 flex flex-col justify-between flex-grow bg-white">
                  <div>
                    {/* Header: Name and Status Badge */}
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-4 mb-4">
                      <div>
                        <span className="text-xs font-extrabold tracking-widest text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-md uppercase mb-1 inline-block">
                          {getExamBadge(topper.achievement)}
                        </span>
                        <h2 className="text-2xl font-black text-slate-900 tracking-tight mt-0.5 group-hover:text-blue-900 transition-colors">
                          {topper.name}
                        </h2>
                      </div>
                    </div>
                    
                    {/* Verified Selection Banner */}
                    <div className="bg-slate-50 border border-slate-200/60 p-4 rounded-2xl flex items-start gap-3 shadow-inner">
                      <div className="bg-white p-1.5 rounded-lg shadow-sm text-lg mt-0.5 flex-shrink-0">
                        🏥
                      </div>
                      <p className="text-sm font-bold text-slate-800 leading-snug">
                        {topper.achievement}
                      </p>
                    </div>

                    {/* Metadata Profiler Grid */}
                    <div className="mt-5 space-y-3">
                      <div className="grid grid-cols-3 text-xs py-1 border-b border-dashed border-slate-100 items-baseline">
                        <span className="text-slate-400 font-semibold tracking-wide uppercase">Parents</span>
                        <span className="text-slate-800 font-bold col-span-2">
                          {topper.fatherName} & {topper.motherName}
                        </span>
                      </div>
                      
                      <div className="grid grid-cols-3 text-xs py-1 border-b border-dashed border-slate-100 items-baseline">
                        <span className="text-slate-400 font-semibold tracking-wide uppercase">Qualification</span>
                        <span className="text-slate-800 font-medium col-span-2">{topper.degree}</span>
                      </div>

                      <div className="grid grid-cols-3 text-xs py-1 border-b border-dashed border-slate-100">
                        <span className="text-slate-400 font-semibold tracking-wide uppercase mt-0.5">Alma Mater</span>
                        <span className="text-slate-700 font-medium col-span-2 leading-relaxed">
                          {topper.college}
                        </span>
                      </div>

                      <div className="grid grid-cols-3 text-xs py-1">
                        <span className="text-slate-400 font-semibold tracking-wide uppercase mt-0.5">Schooling</span>
                        <span className="text-slate-600 font-medium col-span-2 leading-relaxed">
                          {topper.school}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Footnote Location Banner */}
                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs text-slate-500 font-medium bg-slate-50/50 -mx-8 -mb-8 px-8 py-3.5">
                    <svg className="w-4 h-4 text-slate-400 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25s-7.5-4.108-7.5-11.25a7.5 7.5 0 1115 0z" />
                    </svg>
                    <span className="truncate">
                      <strong className="text-slate-700 font-bold">Native Base:</strong> {topper.address}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Sleek Empty Search State */
          <div className="text-center py-20 bg-white rounded-3xl border border-slate-150 shadow-sm max-w-xl mx-auto">
            <div className="text-4xl mb-4">🔍</div>
            <h3 className="text-lg font-bold text-slate-800">No records discovered</h3>
            <p className="text-slate-500 text-sm mt-1 px-6">
              We couldn't find matches for "{searchTerm}". Double check the spelling or type an institution name.
            </p>
          </div>
        )}

      </div>
    </div>
  );
}