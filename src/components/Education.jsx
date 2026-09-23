import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { 
  GraduationCap, 
  Calendar, 
  MapPin, 
  Award, 
  CheckCircle,
  Building
} from 'lucide-react';

export default function Education() {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-14 sm:py-16 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div data-reveal className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E0F2FE] border border-[#BAE6FD] text-[#0369A1] font-bold text-xs uppercase tracking-wider mb-2.5">
            <GraduationCap className="w-3.5 h-3.5 text-[#0284C7]" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
            Education
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#475569]">
            Fondasi akademik teknik elektro industri di salah satu politeknik teknologi terbaik di Indonesia.
          </p>
          <div className="w-14 h-1 bg-gradient-to-r from-[#38BDF8] to-[#60A5FA] mx-auto mt-3 rounded-full"></div>
        </div>

        {/* Education Highlight Card */}
        <div data-reveal data-delay="1" className="max-w-4xl mx-auto">
          <div className="glass-card rounded-3xl p-5 sm:p-8 bg-gradient-to-br from-white via-[#F8FCFF] to-[#F0F9FF] border border-[#BAE6FD] shadow-soft relative overflow-hidden">
            
            {/* Top decorative circuit trace */}
            <div className="absolute top-0 right-0 w-48 h-48 opacity-15 pointer-events-none">
              <svg viewBox="0 0 100 100" fill="none" className="w-full h-full stroke-[#0284C7]">
                <circle cx="50" cy="50" r="40" strokeWidth="2" strokeDasharray="4 4" />
                <path d="M50 10 L50 90 M10 50 L90 50" strokeWidth="1.5" />
              </svg>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              
              {/* Left Column: Campus & Degree */}
              <div className="lg:col-span-8">
                
                {/* Institution Tag */}
                <div className="flex flex-wrap items-center gap-2 mb-2.5">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#E0F2FE] text-[#0369A1] font-bold text-xs">
                    <Calendar className="w-3 h-3" />
                    <span>{education.period}</span>
                  </span>
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#F0F9FF] text-[#64748B] text-xs font-semibold border border-[#BAE6FD]">
                    <MapPin className="w-3 h-3 text-[#0284C7]" />
                    <span>{education.location}</span>
                  </span>
                </div>

                {/* Degree Title */}
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#0F172A] tracking-tight mb-1">
                  {education.program}
                </h3>

                {/* Institution Name */}
                <h4 className="text-sm sm:text-base font-bold text-[#0284C7] mb-3 flex items-center gap-2">
                  <Building className="w-4 h-4 flex-shrink-0" />
                  <span>{education.institution}</span>
                </h4>

                {/* Highlights */}
                <div className="space-y-2 mt-4">
                  {education.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-[#475569] leading-relaxed">
                      <CheckCircle className="w-4 h-4 text-[#38BDF8] flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

              </div>

              {/* Right Column: GPA Badge Display */}
              <div className="lg:col-span-4 flex flex-col items-center justify-center">
                <div className="w-full max-w-[200px] rounded-2xl bg-gradient-to-b from-white to-[#E0F2FE] p-5 text-center border-2 border-[#7DD3FC] shadow-soft relative">
                  
                  <div className="w-9 h-9 rounded-full bg-[#38BDF8] text-white flex items-center justify-center mx-auto mb-2 shadow-sm">
                    <Award className="w-4 h-4" />
                  </div>

                  <span className="block text-[11px] font-bold uppercase tracking-wider text-[#64748B] mb-0.5">
                    Cumulative GPA
                  </span>

                  <span className="block text-3xl sm:text-4xl font-extrabold text-[#0284C7] tracking-tight mb-1">
                    {education.gpa}
                  </span>

                  <span className="inline-block text-[10px] font-semibold text-[#0369A1] bg-[#BAE6FD]/60 px-2.5 py-0.5 rounded-full">
                    Skala 4.00
                  </span>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
