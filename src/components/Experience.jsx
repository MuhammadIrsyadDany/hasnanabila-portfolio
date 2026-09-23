import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { 
  Briefcase, 
  MapPin, 
  Calendar, 
  CheckCircle2, 
  Building2
} from 'lucide-react';

export default function Experience() {
  const { experiences } = portfolioData;

  return (
    <section id="experience" className="py-14 sm:py-16 bg-[#F8FCFF] relative engineering-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div data-reveal className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E0F2FE] border border-[#BAE6FD] text-[#0369A1] font-bold text-xs uppercase tracking-wider mb-2.5">
            <Briefcase className="w-3.5 h-3.5 text-[#0284C7]" />
            <span>Industrial Experience</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
            Work Experience
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#475569]">
            Pengalaman praktis pemeliharaan kelistrikan & sistem kontrol di pembangkit listrik dan manufaktur semen.
          </p>
          <div className="w-14 h-1 bg-gradient-to-r from-[#38BDF8] to-[#60A5FA] mx-auto mt-3 rounded-full"></div>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Vertical Timeline Guide Line */}
          <div className="absolute top-4 bottom-4 left-4 md:left-1/2 -ml-px w-0.5 bg-gradient-to-b from-[#38BDF8] via-[#BAE6FD] to-[#E0F2FE] hidden md:block" />

          <div className="space-y-8">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={exp.id}
                  data-reveal
                  data-delay={index + 1}
                  className="relative flex flex-col md:flex-row items-center"
                >
                  
                  {/* Timeline Badge Dot (Desktop Center) */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white border-4 border-[#38BDF8] shadow-glow z-10 items-center justify-center text-[#0284C7]">
                    <span className="w-2 h-2 rounded-full bg-[#0284C7]"></span>
                  </div>

                  {/* Card wrapper */}
                  <div
                    className={`w-full md:w-1/2 ${
                      isEven ? 'md:pr-10 md:text-left' : 'md:pl-10 md:ml-auto md:text-left'
                    }`}
                  >
                    <div className="glass-card rounded-2xl p-5 sm:p-6 bg-white border border-[#BAE6FD] shadow-soft hover:shadow-soft-lg transition-all duration-300 relative overflow-hidden group">
                      
                      {/* Top subtle highlight bar */}
                      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#38BDF8] to-[#60A5FA]" />

                      {/* Header Info */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2.5">
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#E0F2FE] text-[#0369A1] font-bold text-xs">
                          <Calendar className="w-3 h-3" />
                          <span>{exp.period}</span>
                        </span>
                        <span className="text-[11px] font-semibold text-[#0284C7] bg-[#F0F9FF] px-2 py-0.5 rounded-md border border-[#BAE6FD]">
                          {exp.type}
                        </span>
                      </div>

                      {/* Company Name */}
                      <div className="flex items-start gap-2 mb-2">
                        <Building2 className="w-4 h-4 text-[#0284C7] flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="text-base sm:text-lg font-extrabold text-[#0F172A] leading-snug">
                            {exp.company}
                          </h3>
                          <div className="flex items-center gap-1 text-[11px] text-[#64748B] mt-0.5">
                            <MapPin className="w-3 h-3 text-[#0284C7]" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>

                      {/* Role */}
                      <div className="mb-3 inline-block bg-[#F8FCFF] border border-[#BAE6FD]/80 rounded-lg px-2.5 py-1">
                        <p className="text-xs sm:text-sm font-bold text-[#0284C7]">
                          {exp.role}
                        </p>
                      </div>

                      {/* Responsibilities list */}
                      <div className="space-y-2 mb-4">
                        {exp.bullets.map((bullet, bIdx) => (
                          <div key={bIdx} className="flex items-start gap-2 text-xs text-[#475569] leading-relaxed">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#38BDF8] flex-shrink-0 mt-0.5" />
                            <span>{bullet}</span>
                          </div>
                        ))}
                      </div>

                      {/* Key equipment / tags chips */}
                      <div className="pt-3 border-t border-[#E0F2FE]">
                        <span className="block text-[10px] font-bold uppercase tracking-wider text-[#64748B] mb-1.5">
                          Fokus Peralatan & Lingkup
                        </span>
                        <div className="flex flex-wrap gap-1">
                          {exp.highlights.map((tag, tIdx) => (
                            <span
                              key={tIdx}
                              className="text-[10px] font-medium px-2 py-0.5 rounded bg-[#F0F9FF] text-[#0369A1] border border-[#BAE6FD]/60"
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
