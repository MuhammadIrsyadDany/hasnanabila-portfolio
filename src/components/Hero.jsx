import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { 
  ArrowRight, 
  Mail, 
  Activity, 
  Wrench, 
  Cpu, 
  CheckCircle2, 
  GraduationCap, 
  MapPin, 
  Sparkles,
  Sliders
} from 'lucide-react';

export default function Hero() {
  const { personal } = portfolioData;

  return (
    <section
      id="home"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-gradient-to-b from-[#F0F9FF] via-[#F8FCFF] to-[#FFFFFF] engineering-grid"
    >
      {/* Decorative ambient light blur bubbles */}
      <div className="absolute top-12 left-1/4 w-72 h-72 md:w-96 md:h-96 bg-[#BAE6FD]/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-[#7DD3FC]/30 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-64 h-64 bg-[#E0F2FE]/60 rounded-full blur-2xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Top Pill Label */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E0F2FE] border border-[#BAE6FD] text-[#0369A1] font-bold text-xs tracking-wider uppercase mb-5 shadow-sm">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#38BDF8] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0284C7]"></span>
              </span>
              <span>{personal.heroLabel}</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0F172A] tracking-tight leading-[1.15] mb-4">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0284C7] via-[#0EA5E9] to-[#38BDF8]">{personal.name}</span>
            </h1>

            {/* Subheadline */}
            <h2 className="text-xl sm:text-2xl font-bold text-[#334155] leading-snug mb-5">
              {personal.tagline}
            </h2>

            {/* Description */}
            <p className="text-base sm:text-lg text-[#475569] leading-relaxed mb-8 max-w-2xl font-normal">
              {personal.shortBio}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <a
                href="#experience"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-[#38BDF8] to-[#60A5FA] hover:from-[#0284C7] hover:to-[#2563EB] shadow-soft hover:shadow-soft-lg transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>View My Experience</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm text-[#0369A1] bg-white border border-[#BAE6FD] hover:bg-[#F0F9FF] hover:border-[#7DD3FC] shadow-sm hover:shadow-soft transition-all duration-200"
              >
                <Mail className="w-4 h-4 text-[#0284C7]" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Quick trust metrics under CTA */}
            <div className="mt-10 pt-6 border-t border-[#BAE6FD]/60 flex flex-wrap items-center gap-6 text-xs text-[#475569] font-medium">
              <div className="flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-[#0284C7]" />
                <span>PENS D4 Teknik Elektro Industri (IPK 3.52)</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#0284C7]" />
                <span>Tuban, Jawa Timur</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0284C7]" />
                <span>Siap Bekerja & Berkontribusi</span>
              </div>
            </div>

          </div>

          {/* Right Column: Profile & Floating Cards */}
          <div className="lg:col-span-5 relative flex justify-center">
            
            {/* Outer Container with Glow */}
            <div className="relative w-full max-w-md">
              
              {/* Profile Card Main */}
              <div className="glass-card rounded-3xl p-6 sm:p-8 bg-gradient-to-b from-white/95 to-[#F8FCFF]/90 border border-[#BAE6FD] shadow-soft-lg relative z-10 overflow-hidden">
                
                {/* Circuit Line Graphic at the top corner */}
                <div className="absolute top-0 right-0 w-32 h-32 opacity-25 pointer-events-none">
                  <svg viewBox="0 0 100 100" fill="none" className="w-full h-full stroke-[#0284C7]">
                    <path d="M10 0 v30 h30 v40 h30" strokeWidth="2" strokeDasharray="3 3" />
                    <circle cx="10" cy="30" r="3" fill="#38BDF8" />
                    <circle cx="40" cy="70" r="3" fill="#38BDF8" />
                    <circle cx="70" cy="70" r="3" fill="#0284C7" />
                  </svg>
                </div>

                {/* Header of Profile Card */}
                <div className="flex items-center justify-between mb-6">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E0F2FE] border border-[#BAE6FD] text-[11px] font-bold text-[#0369A1]">
                    <span className="w-2 h-2 rounded-full bg-[#10B981] glow-indicator"></span>
                    <span>Ready for Hire</span>
                  </div>
                  <span className="text-xs font-semibold text-[#64748B]">Batch 2026</span>
                </div>

                {/* Professional Engineering Avatar Illustration (No random synthetic photo) */}
                <div className="flex flex-col items-center text-center my-4">
                  <div className="relative mb-5">
                    <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-2xl bg-gradient-to-br from-[#E0F2FE] via-[#BAE6FD] to-[#7DD3FC] p-1 shadow-soft">
                      <div className="w-full h-full rounded-2xl bg-white flex flex-col items-center justify-center p-3 relative overflow-hidden border border-[#BAE6FD]">
                        {/* Schematic Grid in Avatar Background */}
                        <div className="absolute inset-0 bg-[#F0F9FF]/80 engineering-grid opacity-60"></div>
                        
                        {/* Engineering Monogram & Crest */}
                        <div className="relative z-10 flex flex-col items-center">
                          <div className="w-14 h-14 rounded-xl bg-gradient-to-tr from-[#0284C7] to-[#38BDF8] flex items-center justify-center text-white font-extrabold text-2xl shadow-soft mb-1">
                            HN
                          </div>
                          <span className="text-[10px] font-extrabold tracking-wider text-[#0F172A] uppercase">
                            Hasna Nabila
                          </span>
                          <span className="text-[9px] font-bold text-[#0284C7]">
                            D4 TEI • PENS
                          </span>
                        </div>

                        {/* Subtle spark icon */}
                        <div className="absolute -bottom-1 -right-1 w-7 h-7 rounded-lg bg-[#38BDF8] text-white flex items-center justify-center shadow-sm">
                          <Sparkles className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-xl font-extrabold text-[#0F172A]">Hasna Nabila</h3>
                  <p className="text-xs font-semibold text-[#0284C7] mt-0.5">
                    D4 Teknik Elektro Industri - PENS
                  </p>
                  <p className="text-xs text-[#64748B] mt-1 flex items-center justify-center gap-1">
                    <MapPin className="w-3 h-3 text-[#0284C7]" />
                    Tuban, Jawa Timur, Indonesia
                  </p>
                </div>

                {/* Key Metrics Quick Ribbon inside card */}
                <div className="grid grid-cols-2 gap-2 mt-6 pt-5 border-t border-[#E0F2FE]">
                  <div className="bg-[#F8FCFF] border border-[#BAE6FD]/80 rounded-xl p-2.5 text-center">
                    <span className="block text-base font-extrabold text-[#0284C7]">3.52</span>
                    <span className="text-[11px] font-semibold text-[#64748B]">IPK / GPA</span>
                  </div>
                  <div className="bg-[#F8FCFF] border border-[#BAE6FD]/80 rounded-xl p-2.5 text-center">
                    <span className="block text-base font-extrabold text-[#0284C7]">2+ Industri</span>
                    <span className="text-[11px] font-semibold text-[#64748B]">PLN & Semen ID</span>
                  </div>
                </div>

              </div>

              {/* Floating Card 1: Electrical Engineering (Top Left) */}
              <div className="hidden sm:flex absolute -top-5 -left-8 z-20 animate-soft-float items-center gap-3 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-[#BAE6FD] shadow-soft-lg">
                <div className="w-8 h-8 rounded-xl bg-[#E0F2FE] text-[#0284C7] flex items-center justify-center font-bold">
                  <Cpu className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-[10px] uppercase font-bold text-[#64748B] tracking-wider">Field</span>
                  <span className="text-xs font-extrabold text-[#0F172A]">Electrical Engineering</span>
                </div>
              </div>

              {/* Floating Card 2: Maintenance (Bottom Left) */}
              <div className="hidden sm:flex absolute -bottom-5 -left-6 z-20 animate-soft-float-delayed items-center gap-3 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-[#BAE6FD] shadow-soft-lg">
                <div className="w-8 h-8 rounded-xl bg-[#E0F2FE] text-[#0284C7] flex items-center justify-center font-bold">
                  <Wrench className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-[10px] uppercase font-bold text-[#64748B] tracking-wider">Expertise</span>
                  <span className="text-xs font-extrabold text-[#0F172A]">Maintenance</span>
                </div>
              </div>

              {/* Floating Card 3: Instrumentation & Control (Bottom Right) */}
              <div className="hidden sm:flex absolute -bottom-4 -right-6 z-20 animate-soft-float items-center gap-3 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-[#BAE6FD] shadow-soft-lg">
                <div className="w-8 h-8 rounded-xl bg-[#E0F2FE] text-[#0284C7] flex items-center justify-center font-bold">
                  <Sliders className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-[10px] uppercase font-bold text-[#64748B] tracking-wider">Specialty</span>
                  <span className="text-xs font-extrabold text-[#0F172A]">Instrumentation & Control</span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
