import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { 
  User, 
  Award, 
  Calendar, 
  Briefcase, 
  Zap, 
  CheckCircle, 
  Target, 
  Layers, 
  FileText 
} from 'lucide-react';

export default function About() {
  const { personal, stats } = portfolioData;

  const competencies = [
    { label: 'Electrical Maintenance', desc: 'Pemeliharaan preventif & korektif motor listrik, vibrasi, dan kelistrikan industri.' },
    { label: 'Instrumentation & Control', desc: 'Kalibrasi transmitter, sensor, gas analyzer, pneumatic actuator, dan RTD.' },
    { label: 'Industrial & Power Plant', desc: 'Pengalaman langsung di lingkungan pembangkit listrik (PLN NP) dan manufaktur semen (SBI).' },
    { label: 'Engineering Software', desc: 'Terampil menggunakan STM32CubeIDE, PSIM, Proteus, AutoCAD, dan MS Office.' },
  ];

  const softCompetencies = [
    'Problem Solving',
    'Analytical Thinking',
    'Teamwork & Collaboration',
    'Effective Communication',
    'High Adaptability',
    'Continuous Learning',
  ];

  return (
    <section id="about" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E0F2FE] border border-[#BAE6FD] text-[#0369A1] font-bold text-xs uppercase tracking-wider mb-3">
            <User className="w-3.5 h-3.5 text-[#0284C7]" />
            <span>Profile Overview</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
            About Me
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#475569]">
            Mengenal lebih dalam latar belakang akademik, fokus kompetensi, dan dedikasi profesional saya.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-[#38BDF8] to-[#60A5FA] mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {stats.map((item, idx) => (
            <div
              key={idx}
              className="glass-card rounded-2xl p-5 sm:p-6 text-center bg-gradient-to-b from-white to-[#F8FCFF] border border-[#BAE6FD]/80"
            >
              <span className="block text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0284C7] tracking-tight mb-1">
                {item.value}
              </span>
              <span className="block text-sm font-bold text-[#0F172A] mb-1">
                {item.label}
              </span>
              <span className="text-xs text-[#64748B] font-medium">
                {item.detail}
              </span>
            </div>
          ))}
        </div>

        {/* Narrative & Focus Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Narrative Card */}
          <div className="lg:col-span-7 glass-card rounded-3xl p-6 sm:p-8 flex flex-col justify-between bg-white border border-[#BAE6FD]">
            <div>
              <div className="flex items-center gap-2 text-[#0284C7] font-bold text-sm mb-4">
                <Target className="w-4 h-4" />
                <span>Executive Summary</span>
              </div>
              
              <h3 className="text-xl sm:text-2xl font-bold text-[#0F172A] leading-snug mb-4">
                Fresh Graduate D4 Teknik Elektro Industri Berdedikasi untuk Efisiensi & Keandalan Sistem Kelistrikan
              </h3>

              <div className="space-y-4 text-[#475569] text-sm sm:text-base leading-relaxed">
                <p>
                  Saya merupakan fresh graduate D4 Teknik Elektro Industri dari <strong>Politeknik Elektronika Negeri Surabaya (PENS)</strong> dengan IPK <strong>3,52/4,00</strong>. Memiliki pengalaman di bidang Electrical Maintenance, Instrumentation, dan Control pada lingkungan industri dan pembangkit listrik.
                </p>
                <p>
                  Memiliki ketertarikan dan kompetensi di bidang electrical engineering dan maintenance, serta terampil menggunakan <strong>STM32CubeIDE, PSIM, Proteus, AutoCAD,</strong> dan <strong>Microsoft Office</strong>. 
                </p>
                <p>
                  Didukung kemampuan problem solving, analytical thinking, teamwork, komunikasi, dan adaptasi yang kuat, saya berkomitmen untuk terus mengembangkan kompetensi dan berkontribusi secara nyata dalam meningkatkan keandalan dan efisiensi sistem kelistrikan di lingkungan industri.
                </p>
              </div>
            </div>

            {/* Soft Competencies Badges */}
            <div className="mt-8 pt-6 border-t border-[#E0F2FE]">
              <span className="block text-xs font-bold uppercase tracking-wider text-[#64748B] mb-3">
                Core Professional Traits
              </span>
              <div className="flex flex-wrap gap-2">
                {softCompetencies.map((trait, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#F0F9FF] border border-[#BAE6FD] text-xs font-semibold text-[#0369A1]"
                  >
                    <CheckCircle className="w-3.5 h-3.5 text-[#38BDF8]" />
                    <span>{trait}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Cards: Pillars of Competency */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="px-1">
              <span className="text-xs font-bold uppercase tracking-wider text-[#64748B] block mb-1">
                Engineering Competency Highlights
              </span>
            </div>

            {competencies.map((comp, idx) => (
              <div
                key={idx}
                className="glass-card rounded-2xl p-5 bg-gradient-to-r from-white to-[#F8FCFF] border border-[#BAE6FD]/80 hover:border-[#7DD3FC]"
              >
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#E0F2FE] text-[#0284C7] flex items-center justify-center font-bold flex-shrink-0 mt-0.5">
                    <Zap className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#0F172A] mb-1">
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
