import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { 
  Award, 
  ShieldCheck, 
  Calendar, 
  Building, 
  CheckCircle2,
  FileCheck
} from 'lucide-react';

export default function Certifications() {
  const { certifications } = portfolioData;

  return (
    <section id="certifications" className="py-16 sm:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div data-reveal className="text-center max-w-2xl mx-auto mb-14">
          <div className="section-badge mb-3">
            <Award className="w-3.5 h-3.5 text-[#0284C7]" />
            <span>Credentials & Standards</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight">
            Official <span className="gradient-text">Certifications</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#475569] max-w-xl mx-auto">
            Sertifikasi kompetensi nasional BNSP dan kemahiran bahasa Inggris profesional yang telah terverifikasi resmi.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-[#38BDF8] via-[#0284C7] to-[#818CF8] mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Certifications Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {certifications.map((cert, idx) => (
            <div
              key={idx}
              data-reveal
              data-delay={idx + 1}
              className="liquid-glass rounded-3xl p-6 sm:p-7 transition-all duration-300 relative group hover:border-sky-300 hover:scale-[1.01]"
            >
              {/* Subtle top indicator bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#38BDF8] via-[#0EA5E9] to-[#818CF8]" />

              {/* Status and Icon */}
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#0284C7] to-[#38BDF8] text-white flex items-center justify-center font-bold shadow-md group-hover:scale-105 transition-transform duration-200">
                  <ShieldCheck className="w-6 h-6 text-white" />
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold backdrop-blur-md shadow-xs">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{cert.status}</span>
                </div>
              </div>

              {/* Category / Type */}
              <span className="block text-[11px] font-bold uppercase tracking-wider text-[#0284C7] mb-1">
                {cert.type}
              </span>

              {/* Certification Name */}
              <h3 className="text-base sm:text-lg font-extrabold text-[#0F172A] leading-snug mb-3">
                {cert.name}
              </h3>

              {/* Issuer */}
              <div className="flex items-center gap-2 text-xs sm:text-sm text-[#475569] mb-4 font-medium">
                <Building className="w-4 h-4 text-[#0284C7] flex-shrink-0" />
                <span>{cert.issuer}</span>
              </div>

              {/* Validity Period */}
              <div className="pt-4 border-t border-slate-200/60 flex items-center justify-between text-xs text-[#64748B]">
                <div className="flex items-center gap-1.5 font-medium">
                  <Calendar className="w-3.5 h-3.5 text-[#0284C7]" />
                  <span>Masa Berlaku:</span>
                </div>
                <span className="liquid-pill font-bold text-[#0F172A] px-3 py-1 rounded-full text-xs">
                  {cert.period}
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
