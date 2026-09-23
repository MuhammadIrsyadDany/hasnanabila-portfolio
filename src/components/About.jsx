import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { 
  User, 
  Zap, 
  CheckCircle, 
  Target
} from 'lucide-react';

export default function About() {
  const { stats } = portfolioData;

  const competencies = [
    { label: 'Electrical Maintenance', desc: 'Preventive & corrective maintenance motor listrik, monitoring vibrasi, dan sistem kelistrikan.' },
    { label: 'Instrumentation & Control', desc: 'Kalibrasi transmitter, sensor suhu RTD, gas analyzer, pneumatic actuator, dan tuning VSD.' },
    { label: 'Industrial & Power Plant', desc: 'Pengalaman langsung di PT. PLN Nusantara Power (PLTU) & PT. Solusi Bangun Indonesia (Semen ID).' },
    { label: 'Engineering Software', desc: 'Kemampuan teknis pada STM32CubeIDE, PSIM, Proteus, AutoCAD Electrical, & MS Office.' },
  ];

  const softCompetencies = [
    'Problem Solving',
    'Analytical Thinking',
    'Teamwork & Collaboration',
    'Effective Communication',
    'High Adaptability',
    'Safety & 5S Mindset',
  ];

  return (
    <section id="about" className="py-14 sm:py-16 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div data-reveal className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E0F2FE] border border-[#BAE6FD] text-[#0369A1] font-bold text-xs uppercase tracking-wider mb-2.5">
            <User className="w-3.5 h-3.5 text-[#0284C7]" />
            <span>Profile Overview</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
            About Me
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#475569]">
            Latar belakang akademik, fokus kompetensi industri, dan dedikasi profesional dalam sistem kelistrikan.
          </p>
          <div className="w-14 h-1 bg-gradient-to-r from-[#38BDF8] to-[#60A5FA] mx-auto mt-3 rounded-full"></div>
        </div>

        {/* Stats Grid - Compact & Responsive */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5 sm:gap-5 mb-10">
          {stats.map((item, idx) => (
            <div
              key={idx}
              data-reveal
              data-delay={idx + 1}
              className="glass-card rounded-2xl p-4 sm:p-5 text-center bg-gradient-to-b from-white to-[#F8FCFF] border border-[#BAE6FD]/80"
            >
              <span className="block text-2xl sm:text-3xl font-extrabold text-[#0284C7] tracking-tight mb-0.5">
                {item.value}
              </span>
              <span className="block text-xs sm:text-sm font-bold text-[#0F172A] mb-0.5">
                {item.label}
              </span>
              <span className="text-[11px] text-[#64748B] font-medium">
                {item.detail}
              </span>
            </div>
          ))}
        </div>

        {/* Narrative & Focus Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          
          {/* Left Narrative Card */}
          <div data-reveal data-delay="1" className="lg:col-span-7 glass-card rounded-3xl p-5 sm:p-7 flex flex-col justify-between bg-white border border-[#BAE6FD]">
            <div>
              <div className="flex items-center gap-2 text-[#0284C7] font-bold text-xs uppercase tracking-wider mb-3">
                <Target className="w-4 h-4" />
                <span>Executive Summary</span>
              </div>
              
              <h3 className="text-lg sm:text-xl font-bold text-[#0F172A] leading-snug mb-3">
                Fresh Graduate D4 Teknik Elektro Industri Berdedikasi untuk Keandalan & Efisiensi Sistem Kelistrikan
              </h3>

              <div className="space-y-3 text-[#475569] text-xs sm:text-sm leading-relaxed">
                <p>
                  Saya merupakan lulusan D4 Teknik Elektro Industri dari <strong>Politeknik Elektronika Negeri Surabaya (PENS)</strong> dengan IPK <strong>3,52/4,00</strong>. Berpengalaman di bidang Electrical Maintenance, Instrumentation, dan Control pada lingkungan pembangkit listrik dan industri semen.
                </p>
                <p>
                  Terampil dalam pemeliharaan motor listrik, kalibrasi instrumen (transmitter, RTD, gas analyzer), analisis proteksi, serta pengoperasian software teknis seperti <strong>STM32CubeIDE, PSIM, Proteus,</strong> dan <strong>AutoCAD</strong>.
                </p>
                <p>
                  Dengan pemikiran analitis, kemampuan problem-solving terstruktur, serta adaptabilitas tinggi, saya siap berkontribusi langsung dalam menjaga keandalan operasional industri.
                </p>
              </div>
            </div>

            {/* Soft Competencies Badges */}
            <div className="mt-6 pt-5 border-t border-[#E0F2FE]">
              <span className="block text-[11px] font-bold uppercase tracking-wider text-[#64748B] mb-2.5">
                Core Professional Traits
              </span>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {softCompetencies.map((trait, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#F0F9FF] border border-[#BAE6FD] text-xs font-semibold text-[#0369A1]"
                  >
                    <CheckCircle className="w-3.5 h-3.5 text-[#38BDF8]" />
                    <span>{trait}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Cards: Pillars of Competency */}
          <div data-reveal data-delay="2" className="lg:col-span-5 flex flex-col gap-3">
            <div className="px-1">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#64748B] block mb-1">
                Engineering Competency Pillars
              </span>
            </div>

            {competencies.map((comp, idx) => (
              <div
                key={idx}
                className="glass-card rounded-2xl p-4 bg-gradient-to-r from-white to-[#F8FCFF] border border-[#BAE6FD]/80 hover:border-[#7DD3FC]"
              >
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-[#E0F2FE] text-[#0284C7] flex items-center justify-center font-bold flex-shrink-0 mt-0.5">
                    <Zap className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-[#0F172A] mb-0.5">
                      {comp.label}
                    </h4>
                    <p className="text-xs text-[#475569] leading-relaxed">
                      {comp.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
