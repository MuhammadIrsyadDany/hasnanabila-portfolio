import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { 
  Briefcase, 
  MapPin, 
  Calendar, 
  CheckCircle2, 
  Building2, 
  Cpu, 
  Wrench,
  FileCheck,
  ChevronRight
} from 'lucide-react';

export default function Experience() {
  const { experiences } = portfolioData;

  return (
    <section id="experience" className="py-20 bg-[#F8FCFF] relative engineering-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E0F2FE] border border-[#BAE6FD] text-[#0369A1] font-bold text-xs uppercase tracking-wider mb-3">
            <Briefcase className="w-3.5 h-3.5 text-[#0284C7]" />
            <span>Industrial Experience</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
            Work Experience
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#475569]">
            Pengalaman industri nyata pada pemeliharaan kelistrikan, instrumentasi, dan sistem kontrol di sektor pembangkitan listrik dan manufaktur semen.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-[#38BDF8] to-[#60A5FA] mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Vertical Timeline Guide Line */}
          <div className="absolute top-4 bottom-4 left-4 md:left-1/2 -ml-px w-0.5 bg-gradient-to-b from-[#38BDF8] via-[#BAE6FD] to-[#E0F2FE] hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;

              return (
                <div key={exp.id} className="relative flex flex-col md:flex-row items-center">
                  
                  {/* Timeline Badge Dot (Desktop Center) */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-white border-4 border-[#38BDF8] shadow-glow z-10 items-center justify-center text-[#0284C7]">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#0284C7]"></span>
                  </div>

                  {/* Card wrapper */}
                  <div
                    className={`w-full md:w-1/2 ${
                      isEven ? 'md:pr-12 md:text-left' : 'md:pl-12 md:ml-auto md:text-left'
                    }`}
                  >
                    <div className="glass-card rounded-3xl p-6 sm:p-8 bg-white border border-[#BAE6FD] shadow-soft hover:shadow-soft-lg transition-all duration-300 relative overflow-hidden group">
                      
                      {/* Top subtle highlight bar */}
                      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#38BDF8] to-[#60A5FA]" />

                      {/* Header Info */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E0F2FE] text-[#0369A1] font-bold text-xs">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{exp.period}</span>
                        </span>
                        <span className="text-xs font-semibold text-[#0284C7] bg-[#F0F9FF] px-2.5 py-0.5 rounded-md border border-[#BAE6FD]">
                          {exp.type}
                        </span>
                      </div>

                      {/* Company Name */}
                      <div className="flex items-start gap-2.5 mb-2">
                        <Building2 className="w-5 h-5 text-[#0284C7] flex-shrink-0 mt-0.5" />
                        <div>
                          <h3 className="text-lg sm:text-xl font-extrabold text-[#0F172A] leading-snug">
                            {exp.company}
                          </h3>
                          <div className="flex items-center gap-1 text-xs text-[#64748B] mt-0.5">
                            <MapPin className="w-3 h-3 text-[#0284C7]" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>

                      {/* Role */}
                      <div className="mb-4 inline-block bg-[#F8FCFF] border border-[#BAE6FD]/80 rounded-xl px-3 py-1.5">
                        <p className="text-sm font-bold text-[#0284C7]">
                          {exp.role}
                        </p>
                      </div>

                      {/* Responsibilities list */}
                      <div className="space-y-3 mb-5">
                        {exp.bullets.map((bullet, bIdx) => (
                          <div key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#475569] leading-relaxed">
                            <CheckCircle2 className="w-4 h-4 text-[#38BDF8] flex-shrink-0 mt-0.5" />
                            <span>{bullet}</span>
                          </div>
                        ))}
                      </div>

                      {/* Key equipment / tags chips */}
                      <div className="pt-4 border-t border-[#E0F2FE]">
                        <span className="block text-[11px] font-bold uppercase tracking-wider text-[#64748B] mb-2">
                          Key Equipment & Scope
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {exp.highlights.map((tag, tIdx) => (
                            <span
                              key={tIdx}
                              className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-[#F0F9FF] text-[#0369A1] border border-[#BAE6FD]/60"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
