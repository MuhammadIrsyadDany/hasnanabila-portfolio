import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { 
  Award, 
  ShieldCheck, 
  Calendar, 
  Building, 
  CheckCircle2
} from 'lucide-react';

export default function Certifications() {
  const { certifications } = portfolioData;

  return (
    <section id="certifications" className="py-14 sm:py-16 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div data-reveal className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E0F2FE] border border-[#BAE6FD] text-[#0369A1] font-bold text-xs uppercase tracking-wider mb-2.5">
            <Award className="w-3.5 h-3.5 text-[#0284C7]" />
            <span>Credentials & Standards</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
            Certifications
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#475569]">
            Sertifikasi kompetensi nasional dan kemahiran bahasa inggris profesional yang telah terverifikasi.
          </p>
          <div className="w-14 h-1 bg-gradient-to-r from-[#38BDF8] to-[#60A5FA] mx-auto mt-3 rounded-full"></div>
        </div>

        {/* Certifications Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {certifications.map((cert, idx) => (
            <div
              key={idx}
              data-reveal
              data-delay={idx + 1}
              className="glass-card rounded-2xl p-5 sm:p-6 bg-gradient-to-b from-white via-white to-[#F8FCFF] border border-[#BAE6FD] shadow-soft hover:shadow-soft-lg transition-all duration-300 relative overflow-hidden group"
            >
              {/* Subtle top indicator bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#38BDF8] to-[#60A5FA]" />

              {/* Status and Icon */}
              <div className="flex items-start justify-between gap-4 mb-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#E0F2FE] border border-[#BAE6FD] text-[#0284C7] flex items-center justify-center font-bold shadow-sm group-hover:scale-105 transition-transform duration-200">
                  <ShieldCheck className="w-5 h-5 text-[#0284C7]" />
                </div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#ECFDF5] border border-[#A7F3D0] text-[#065F46] text-xs font-bold">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981]" />
                  <span>{cert.status}</span>
                </div>
              </div>

              {/* Category / Type */}
              <span className="block text-[11px] font-bold uppercase tracking-wider text-[#0284C7] mb-0.5">
                {cert.type}
              </span>

              {/* Certification Name */}
              <h3 className="text-base sm:text-lg font-extrabold text-[#0F172A] leading-snug mb-2">
                {cert.name}
              </h3>

              {/* Issuer */}
              <div className="flex items-center gap-1.5 text-xs text-[#475569] mb-3">
                <Building className="w-3.5 h-3.5 text-[#0284C7] flex-shrink-0" />
                <span className="font-medium">{cert.issuer}</span>
              </div>

              {/* Validity Period */}
              <div className="pt-3 border-t border-[#E0F2FE] flex items-center justify-between text-xs text-[#64748B]">
                <div className="flex items-center gap-1">
                  <Calendar className="w-3 h-3 text-[#0284C7]" />
                  <span>Masa Berlaku:</span>
                </div>
                <span className="font-semibold text-[#0F172A] bg-[#F0F9FF] px-2 py-0.5 rounded border border-[#BAE6FD]/80 text-[11px]">
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
