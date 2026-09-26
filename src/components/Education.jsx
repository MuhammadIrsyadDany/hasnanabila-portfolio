import React from 'react';
import { portfolioData } from '../data/portfolioData';
import AnimatedCounter from './AnimatedCounter';
import { 
  GraduationCap, 
  Calendar, 
  MapPin, 
  Award, 
  CheckCircle,
  Building,
  Sparkles,
  BookOpen
} from 'lucide-react';

export default function Education() {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-16 sm:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div data-reveal className="text-center max-w-2xl mx-auto mb-14">
          <div className="section-badge mb-3">
            <GraduationCap className="w-3.5 h-3.5 text-[#0284C7]" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight">
            Academic <span className="gradient-text">Education</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#475569] max-w-xl mx-auto">
            Fondasi akademik teknik elektro industri di salah satu politeknik teknologi terbaik di Indonesia.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-[#38BDF8] via-[#0284C7] to-[#818CF8] mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Education Highlight Card - Liquid Glass */}
        <div data-reveal data-delay="1" className="max-w-4xl mx-auto">
          <div className="liquid-glass rounded-3xl p-7 sm:p-9 relative group">
            
            {/* Top decorative circuit trace */}
            <div className="absolute top-0 right-0 w-64 h-64 opacity-15 pointer-events-none">
              <svg viewBox="0 0 100 100" fill="none" className="w-full h-full stroke-[#0284C7]">
                <circle cx="50" cy="50" r="40" strokeWidth="1.5" strokeDasharray="4 4" className="animate-spin origin-center" style={{ animationDuration: '35s' }} />
                <path d="M50 10 L50 90 M10 50 L90 50" strokeWidth="1" />
              </svg>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Campus & Degree */}
              <div className="lg:col-span-8">
                
                {/* Institution Tag */}
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="liquid-pill inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[#0369A1] font-bold text-xs">
                    <Calendar className="w-3 h-3 text-[#0284C7]" />
                    <span>{education.period}</span>
                  </span>
                  <span className="liquid-pill inline-flex items-center gap-1 px-3 py-1 rounded-full text-[#64748B] text-xs font-semibold">
                    <MapPin className="w-3 h-3 text-[#0284C7]" />
                    <span>{education.location}</span>
                  </span>
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10px] font-bold">
                    <Sparkles className="w-3 h-3" /> Akreditasi Unggul
                  </span>
                </div>

                {/* Degree Title */}
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#0F172A] tracking-tight mb-2">
                  {education.program}
                </h3>

                {/* Institution Name */}
                <h4 className="text-base sm:text-lg font-bold text-[#0284C7] mb-4 flex items-center gap-2">
                  <Building className="w-5 h-5 flex-shrink-0 text-[#0284C7]" />
                  <span>{education.institution}</span>
                </h4>

                {/* Highlights */}
                <div className="space-y-2.5 mt-5 pt-5 border-t border-slate-200/60">
                  <span className="block text-[11px] font-bold uppercase tracking-wider text-[#64748B] mb-2 flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-[#0284C7]" />
                    <span>Fokus Pembelajaran & Keunggulan Akademik</span>
                  </span>
                  {education.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#475569] leading-relaxed">
                      <CheckCircle className="w-4 h-4 text-[#0284C7] flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

              </div>

              {/* Right Column: GPA Widget Display (iOS Glass Widget) */}
              <div className="lg:col-span-4 flex flex-col items-center justify-center">
                <div className="w-full max-w-[230px] rounded-3xl liquid-stat p-6 text-center relative group/widget">
                  
                  {/* Subtle top indicator */}
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#0284C7] to-[#38BDF8] text-white flex items-center justify-center mx-auto mb-3 shadow-md group-hover/widget:scale-105 transition-transform">
                    <Award className="w-6 h-6" />
                  </div>

                  <span className="block text-[11px] font-bold uppercase tracking-wider text-[#64748B] mb-1">
                    Cumulative GPA
                  </span>

                  <span className="block text-4xl sm:text-5xl font-extrabold text-[#0284C7] tracking-tight mb-1">
                    <AnimatedCounter endValue={3.52} decimals={2} />
                  </span>

                  <span className="inline-block text-xs font-semibold text-slate-500 mb-2">
                    Skala 4.00
                  </span>

                  <div className="pt-2 border-t border-slate-200/60">
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#0369A1] bg-sky-50 px-2.5 py-1 rounded-full border border-sky-200/80">
                      Sangat Memuaskan
                    </span>
                  </div>

                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
