import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { 
  ArrowRight, 
  Mail, 
  Wrench, 
  Cpu, 
  CheckCircle2, 
  GraduationCap, 
  MapPin, 
  Sliders
} from 'lucide-react';

export default function Hero() {
  const { personal } = portfolioData;

  return (
    <section
      id="home"
      className="relative pt-28 pb-14 md:pt-36 md:pb-18 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Top Pill Label - iOS Capsule */}
            <div className="hero-1 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full liquid-pill text-[#0369A1] font-bold text-xs tracking-wider uppercase mb-4">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#38BDF8] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0284C7]"></span>
              </span>
              <span>{personal.heroLabel}</span>
            </div>

            {/* Headline */}
            <h1 className="hero-2 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0F172A] tracking-tight leading-[1.12] mb-3">
              Hi, I'm <span className="gradient-text">{personal.name}</span>
            </h1>

            {/* Subheadline */}
            <h2 className="hero-3 text-lg sm:text-xl font-bold text-[#334155] leading-snug mb-4">
              {personal.tagline}
            </h2>

            {/* Description */}
            <p className="hero-4 text-sm sm:text-base text-[#475569] leading-relaxed mb-6 max-w-2xl font-normal">
              {personal.shortBio}
            </p>

            {/* Action Buttons - Liquid Buttons with Glare */}
            <div className="hero-5 flex flex-wrap items-center gap-3.5 w-full sm:w-auto">
              <a
                href="#experience"
                className="liquid-btn-primary w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-bold text-xs sm:text-sm text-white"
              >
                <span>Lihat Pengalaman Industri</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="liquid-btn-secondary w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-bold text-xs sm:text-sm text-[#0369A1]"
              >
                <Mail className="w-4 h-4 text-[#0284C7]" />
                <span>Hubungi Saya</span>
              </a>
            </div>

            {/* Quick trust metrics - Liquid Pills */}
            <div className="mt-8 pt-5 border-t border-slate-200/60 flex flex-wrap items-center gap-3 text-xs text-[#475569] font-medium">
              <div className="liquid-pill px-3 py-1.5 rounded-full flex items-center gap-1.5">
                <GraduationCap className="w-3.5 h-3.5 text-[#0284C7]" />
                <span>PENS D4 TEI (IPK 3.52)</span>
              </div>
              <div className="liquid-pill px-3 py-1.5 rounded-full flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#0284C7]" />
                <span>Tuban, Jawa Timur</span>
              </div>
              <div className="liquid-pill px-3 py-1.5 rounded-full flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981]" />
                <span>Siap Bekerja & Berkontribusi</span>
              </div>
            </div>

          </div>

          {/* Right Column: Full Photo Card with Floating Badges */}
          <div className="lg:col-span-5 relative flex justify-center hero-card">
            
            {/* Outer Container with Glow */}
            <div className="relative w-full max-w-[260px] sm:max-w-[300px]">
              
              {/* Ambient Glow behind photo card */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#38BDF8]/40 via-[#818CF8]/30 to-[#0284C7]/40 rounded-[32px] blur-xl opacity-60 pointer-events-none"></div>

              {/* Full Photo Card - iOS Liquid Glass Frame */}
              <div className="liquid-glass rounded-[28px] p-2 sm:p-2.5 relative z-10 shadow-2xl overflow-hidden group">
                <div className="w-full h-[330px] sm:h-[380px] rounded-[20px] overflow-hidden relative bg-slate-100">
                  <img
                    src="/hasna.jpeg"
                    alt="Hasna Nabila - Electrical Engineer"
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    loading="eager"
                  />
                  {/* Frosted Specular Glare Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-white/15 pointer-events-none rounded-[20px]" />
                </div>
              </div>

              {/* Floating Badge 1: Electrical Engineering (Top Left) */}
              <div className="absolute -top-4 -left-4 sm:-top-5 sm:-left-5 z-20 animate-float flex items-center gap-2 liquid-pill px-3 py-1.5 rounded-full border border-white shadow-xl">
                <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-[#0284C7] to-[#38BDF8] text-white flex items-center justify-center shadow-md flex-shrink-0">
                  <Cpu className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="block text-[7px] sm:text-[8px] uppercase font-bold text-[#64748B] tracking-wider">Field</span>
                  <span className="text-[10px] sm:text-xs font-extrabold text-[#0F172A] whitespace-nowrap">Electrical Engineering</span>
                </div>
              </div>

              {/* Floating Badge 2: Maintenance (Lower-left, slightly above card bottom) */}
              <div className="absolute bottom-6 -left-5 sm:-left-6 z-20 animate-float-delayed flex items-center gap-2 liquid-pill px-3 py-1.5 rounded-full border border-white shadow-xl">
                <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-[#0284C7] to-[#38BDF8] text-white flex items-center justify-center shadow-md flex-shrink-0">
                  <Wrench className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="block text-[7px] sm:text-[8px] uppercase font-bold text-[#64748B] tracking-wider">Expertise</span>
                  <span className="text-[10px] sm:text-xs font-extrabold text-[#0F172A] whitespace-nowrap">Maintenance</span>
                </div>
              </div>

              {/* Floating Badge 3: Instrumentation & Control (Below card, right) */}
              <div className="absolute -bottom-8 -right-3 sm:-bottom-10 sm:-right-4 z-20 animate-float-slow flex items-center gap-2 liquid-pill px-3 py-1.5 rounded-full border border-white shadow-xl">
                <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-[#0284C7] to-[#38BDF8] text-white flex items-center justify-center shadow-md flex-shrink-0">
                  <Sliders className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="block text-[7px] sm:text-[8px] uppercase font-bold text-[#64748B] tracking-wider">Specialty</span>
                  <span className="text-[10px] sm:text-xs font-extrabold text-[#0F172A] whitespace-nowrap">Instrumentation & Control</span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
