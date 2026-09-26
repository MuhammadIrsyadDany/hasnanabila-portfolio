import React from 'react';
import { portfolioData } from '../data/portfolioData';
import AnimatedCounter from './AnimatedCounter';
import { 
  User, 
  Zap, 
  CheckCircle, 
  Target,
  Award,
  GraduationCap,
  Briefcase,
  Cpu,
  Sparkles
} from 'lucide-react';

export default function About() {
  const competencies = [
    { 
      num: '01',
      label: 'Electrical Maintenance', 
      desc: 'Preventive & corrective maintenance motor induksi 3-fasa, monitoring vibrasi, megger test, dan keandalan sistem kelistrikan industri.',
      color: 'from-[#0284C7] to-[#38BDF8]'
    },
    { 
      num: '02',
      label: 'Instrumentation & Control', 
      desc: 'Kalibrasi transmitter tekanan/level, sensor suhu RTD Pt100, gas analyzer continuous emission, pneumatic control valve, dan inverter VSD.',
      color: 'from-[#6366F1] to-[#818CF8]'
    },
    { 
      num: '03',
      label: 'Industrial & Power Plant', 
      desc: 'Pengalaman lapangan langsung di PT. PLN Nusantara Power (PLTU Tanjung Awar-Awar) & PT. Solusi Bangun Indonesia (Semen Indonesia Group).',
      color: 'from-[#0EA5E9] to-[#0284C7]'
    },
    { 
      num: '04',
      label: 'Engineering Software', 
      desc: 'Pemodelan & komputasi teknis pada STM32CubeIDE, PSIM, Proteus VSM, AutoCAD Electrical, serta analisis data teknis di MS Office.',
      color: 'from-[#38BDF8] to-[#6366F1]'
    },
  ];

  const softCompetencies = [
    'Problem Solving Terstruktur',
    'Analytical Thinking',
    'Teamwork & Kolaborasi',
    'Komunikasi Teknis Efektif',
    'Adaptabilitas Cepat',
    'Safety & 5S Mindset',
  ];

  return (
    <section id="about" className="py-16 sm:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div data-reveal className="text-center max-w-2xl mx-auto mb-12">
          <div className="section-badge mb-3">
            <User className="w-3.5 h-3.5 text-[#0284C7]" />
            <span>Profile Overview</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#475569] max-w-xl mx-auto">
            Latar belakang akademik, fokus kompetensi industri, dan dedikasi profesional dalam keandalan sistem kelistrikan & instrumentasi.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-[#38BDF8] via-[#0284C7] to-[#818CF8] mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Stats Grid - Premium Liquid Stat Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5 mb-12">
          
          {/* Stat 1: GPA */}
          <div data-reveal data-delay="1" className="liquid-stat rounded-3xl p-5 text-center flex flex-col items-center justify-center">
            <div className="w-9 h-9 rounded-2xl bg-gradient-to-tr from-[#0284C7] to-[#38BDF8] text-white flex items-center justify-center mb-2 shadow-sm">
              <Award className="w-4 h-4" />
            </div>
            <span className="block text-2xl sm:text-3xl font-extrabold text-[#0284C7] tracking-tight mb-0.5">
              <AnimatedCounter endValue={3.52} decimals={2} />
              <span className="text-xs font-semibold text-slate-400"> / 4.00</span>
            </span>
            <span className="block text-xs sm:text-sm font-bold text-[#0F172A] mb-0.5">
              GPA (IPK)
            </span>
            <span className="text-[11px] text-[#64748B] font-medium">
              Skala 4.00 · Predikat Sangat Memuaskan
            </span>
          </div>

          {/* Stat 2: Education Period */}
          <div data-reveal data-delay="2" className="liquid-stat rounded-3xl p-5 text-center flex flex-col items-center justify-center">
            <div className="w-9 h-9 rounded-2xl bg-gradient-to-tr from-[#0EA5E9] to-[#38BDF8] text-white flex items-center justify-center mb-2 shadow-sm">
              <GraduationCap className="w-4 h-4" />
            </div>
            <span className="block text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight mb-0.5">
              2022–2026
            </span>
            <span className="block text-xs sm:text-sm font-bold text-[#0F172A] mb-0.5">
              D4 Teknik Elektro
            </span>
            <span className="text-[11px] text-[#64748B] font-medium">
              PENS Surabaya
            </span>
          </div>

          {/* Stat 3: Industrial Experience */}
          <div data-reveal data-delay="3" className="liquid-stat rounded-3xl p-5 text-center flex flex-col items-center justify-center">
            <div className="w-9 h-9 rounded-2xl bg-gradient-to-tr from-[#6366F1] to-[#818CF8] text-white flex items-center justify-center mb-2 shadow-sm">
              <Briefcase className="w-4 h-4" />
            </div>
            <span className="block text-2xl sm:text-3xl font-extrabold text-[#0284C7] tracking-tight mb-0.5">
              <AnimatedCounter endValue={2} suffix="+" />
            </span>
            <span className="block text-xs sm:text-sm font-bold text-[#0F172A] mb-0.5">
              Industrial Internships
            </span>
            <span className="text-[11px] text-[#64748B] font-medium">
              PLN NP & Semen Indonesia
            </span>
          </div>

          {/* Stat 4: Engineering Focus */}
          <div data-reveal data-delay="4" className="liquid-stat rounded-3xl p-5 text-center flex flex-col items-center justify-center">
            <div className="w-9 h-9 rounded-2xl bg-gradient-to-tr from-[#0284C7] to-[#6366F1] text-white flex items-center justify-center mb-2 shadow-sm">
              <Cpu className="w-4 h-4" />
            </div>
            <span className="block text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight mb-0.5">
              Electrical
            </span>
            <span className="block text-xs sm:text-sm font-bold text-[#0F172A] mb-0.5">
              Core Specialty
            </span>
            <span className="text-[11px] text-[#64748B] font-medium">
              Maintenance & I&C
            </span>
          </div>

        </div>

        {/* Narrative & Focus Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          
          {/* Left Narrative Card - Liquid Glass */}
          <div data-reveal data-delay="1" className="lg:col-span-7 liquid-glass rounded-3xl p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-[#0284C7] font-bold text-xs uppercase tracking-wider mb-3">
                <Target className="w-4 h-4" />
                <span>Executive Summary</span>
              </div>
              
              <h3 className="text-xl sm:text-2xl font-extrabold text-[#0F172A] leading-snug mb-4">
                Fresh Graduate D4 Teknik Elektro Industri Berdedikasi untuk Keandalan & Efisiensi Sistem Kelistrikan
              </h3>

              <div className="space-y-3.5 text-[#475569] text-sm leading-relaxed">
                <p>
                  Saya merupakan lulusan D4 Teknik Elektro Industri dari <strong className="text-[#0F172A]">Politeknik Elektronika Negeri Surabaya (PENS)</strong> dengan IPK <strong className="text-[#0284C7]">3,52 / 4,00</strong>. Memiliki bekal praktis dan teoritis yang solid di bidang Electrical Maintenance, Instrumentation, dan Control pada industri pembangkit listrik dan manufaktur berskala besar.
                </p>
                <p>
                  Berpengalaman dalam pemeliharaan motor listrik industri (preventive & corrective), inspeksi proteksi, kalibrasi instrumen lapangan (transmitter tekanan, sensor suhu RTD, gas analyzer continuous emission), serta perancangan elektronika daya dan software rekayasa seperti <strong className="text-[#0F172A]">STM32CubeIDE, PSIM, Proteus</strong>, dan <strong className="text-[#0F172A]">AutoCAD</strong>.
                </p>
                <p>
                  Dengan pemikiran analitis yang sistematis, kegigihan dalam problem solving lapangan, serta standar keselamatan kerja (K3 & 5S), saya siap berkontribusi secara profesional untuk mendukung kelancaran operasional perusahaan.
                </p>
              </div>
            </div>

            {/* Soft Competencies Badges */}
            <div className="mt-8 pt-6 border-t border-slate-200/60">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#64748B]">
                  Core Professional Traits
                </span>
                <span className="text-[10px] text-[#0284C7] font-semibold flex items-center gap-1">
                  <Sparkles className="w-3 h-3" /> Siap Terjun Industri
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {softCompetencies.map((trait, i) => (
                  <span
                    key={i}
                    className="liquid-pill px-3 py-1.5 rounded-full text-xs font-semibold text-[#0369A1] inline-flex items-center gap-1.5 transition-all hover:scale-105"
                  >
                    <CheckCircle className="w-3.5 h-3.5 text-[#38BDF8]" />
                    <span>{trait}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Cards: Pillars of Competency */}
          <div data-reveal data-delay="2" className="lg:col-span-5 flex flex-col gap-3.5">
            <div className="px-1 flex items-center justify-between">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#64748B] block">
                Engineering Competency Pillars
              </span>
              <span className="text-[10px] text-slate-400 font-medium">4 Core Areas</span>
            </div>

            {competencies.map((comp, idx) => (
              <div
                key={idx}
                className="liquid-glass rounded-2xl p-4 sm:p-4.5 transition-all duration-300 group hover:border-sky-300/80"
              >
                <div className="flex items-start gap-3.5">
                  <div className={`w-9 h-9 rounded-xl bg-gradient-to-tr ${comp.color} text-white flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5 shadow-sm group-hover:scale-105 transition-transform`}>
                    {comp.num}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-bold text-[#0F172A] mb-1 group-hover:text-[#0284C7] transition-colors">
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
