import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { 
  Trophy, 
  Cpu, 
  Activity, 
  Sparkles, 
  CheckCircle2, 
  Zap, 
  Binary, 
  SlidersHorizontal,
  Compass,
  Layers
} from 'lucide-react';

export default function Achievement() {
  const { achievement } = portfolioData;

  return (
    <section id="achievement" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E0F2FE] border border-[#BAE6FD] text-[#0369A1] font-bold text-xs uppercase tracking-wider mb-3">
            <Trophy className="w-3.5 h-3.5 text-[#0284C7]" />
            <span>Featured Achievement</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
            Final Project – Electrical Engineering
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#475569]">
            Riset dan implementasi perangkat keras tugas akhir D4 Teknik Elektro Industri PENS berfokus pada teknologi konversi daya AC-DC terkontrol.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-[#38BDF8] to-[#60A5FA] mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Featured Project Big Showcase Card */}
        <div className="max-w-5xl mx-auto">
          <div className="glass-card rounded-3xl p-6 sm:p-10 lg:p-12 bg-gradient-to-br from-white via-[#F8FCFF] to-[#EBF8FF] border-2 border-[#7DD3FC] shadow-soft-lg relative overflow-hidden">
            
            {/* Background Engineering Schematic Circuit Lines */}
            <div className="absolute inset-0 pointer-events-none opacity-20 engineering-grid"></div>
            
            <div className="relative z-10">
              
              {/* Top Meta Badges */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0284C7] text-white text-xs font-extrabold shadow-sm">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Graduation Capstone 2026</span>
                  </span>
                  <span className="text-xs font-bold text-[#0369A1] bg-[#BAE6FD]/60 px-3 py-1 rounded-full border border-[#7DD3FC]">
                    PENS D4 TEI
                  </span>
                </div>

                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0284C7]">
                  <Activity className="w-4 h-4 text-[#38BDF8]" />
                  <span>Hardware & Simulation Validated</span>
                </span>
              </div>

              {/* Title of Final Project */}
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#0F172A] leading-snug tracking-tight mb-4">
                "{achievement.title}"
              </h3>

              {/* Description */}
              <p className="text-sm sm:text-base text-[#475569] leading-relaxed mb-8 max-w-3xl">
                {achievement.description} Penelitian ini mengembangkan topologi inovatif konverter daya AC-DC terkontrol satu fasa untuk menghasilkan keluaran SPWaM yang optimal dengan strategi modulasi lebar pulsa (PWM) berbasis penyulutan gelombang gergaji dan kendali mikrokontroler presisi tinggi.
              </p>

              {/* Visual Engineering Graphic: Waveform & Modulation Visual */}
              <div className="mb-10 bg-white/90 rounded-2xl border border-[#BAE6FD] p-5 shadow-inner">
                <div className="flex items-center justify-between mb-3 text-xs">
                  <div className="flex items-center gap-2 text-[#0284C7] font-bold">
                    <SlidersHorizontal className="w-4 h-4" />
                    <span>Visualisasi Modulasi SPWaM & Gelombang Gergaji (Sawtooth Carrier)</span>
                  </div>
                  <span className="hidden sm:inline text-[#64748B] font-mono text-[11px]">
                    f(t) = Sawtooth vs Reference
                  </span>
                </div>

                {/* Subtle SVG Waveform Diagram */}
                <div className="w-full h-28 sm:h-32 bg-[#0F172A] rounded-xl relative overflow-hidden flex items-center justify-center p-2">
                  <svg
                    viewBox="0 0 600 100"
                    preserveAspectRatio="none"
                    className="w-full h-full stroke-current"
                  >
                    {/* Grid lines inside oscilloscope view */}
                    <defs>
                      <pattern id="scopeGrid" width="30" height="20" patternUnits="userSpaceOnUse">
                        <path d="M 30 0 L 0 0 0 20" fill="none" stroke="#1E293B" strokeWidth="0.8" />
                      </pattern>
                      <linearGradient id="waveGlow" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#38BDF8" />
                        <stop offset="50%" stopColor="#7DD3FC" />
                        <stop offset="100%" stopColor="#60A5FA" />
                      </linearGradient>
                    </defs>
                    <rect width="600" height="100" fill="url(#scopeGrid)" />

                    {/* Sawtooth carrier waveform (Light blue) */}
                    <path
                      d="
                        M 0 80 L 40 20 L 40 80 
                        L 80 20 L 80 80 
                        L 120 20 L 120 80 
                        L 160 20 L 160 80 
                        L 200 20 L 200 80 
                        L 240 20 L 240 80 
                        L 280 20 L 280 80 
                        L 320 20 L 320 80 
                        L 360 20 L 360 80 
                        L 400 20 L 400 80 
                        L 440 20 L 440 80 
                        L 480 20 L 480 80 
                        L 520 20 L 520 80 
                        L 560 20 L 560 80 
                        L 600 20
                      "
                      fill="none"
                      stroke="#0284C7"
                      strokeWidth="1.2"
                      strokeDasharray="2 2"
                      opacity="0.6"
                    />

                    {/* SPWaM modulated pulse waveform (Bright Cyan Glow) */}
                    <path
                      d="
                        M 0 50 
                        Q 75 10, 150 50 
                        T 300 50 
                        T 450 50 
                        T 600 50
                      "
                      fill="none"
                      stroke="#F43F5E"
                      strokeWidth="1.5"
                      opacity="0.5"
                    />

                    {/* Stepped SPWaM output pulses */}
                    <path
                      d="
                        M 0 80 
                        H 20 V 30 H 40 V 80 
                        H 60 V 22 H 80 V 80 
                        H 100 V 20 H 120 V 80 
                        H 140 V 26 H 160 V 80 
                        H 180 V 38 H 200 V 80 
                        H 220 V 80 H 240 V 80 
                        H 260 V 70 H 280 V 80 
                        H 300 V 30 H 320 V 80 
                        H 340 V 22 H 360 V 80 
                        H 380 V 20 H 400 V 80 
                        H 420 V 26 H 440 V 80 
                        H 460 V 38 H 480 V 80 
                        H 500 V 80 H 520 V 80 
                        H 540 V 70 H 560 V 80 
                        H 600 80
                      "
                      fill="none"
                      stroke="url(#waveGlow)"
                      strokeWidth="2.5"
                    />
                  </svg>
                  
                  {/* Legend overlay */}
                  <div className="absolute bottom-1 right-2 flex items-center gap-3 text-[10px] text-white/70 font-mono">
                    <span className="flex items-center gap-1">
                      <span className="w-2.5 h-0.5 bg-[#0284C7] inline-block"></span> Sawtooth
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="w-2.5 h-0.5 bg-[#38BDF8] inline-block"></span> SPWaM Pulse
                    </span>
                  </div>
                </div>
              </div>

              {/* Research Scope 4 Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {achievement.scope.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-white border border-[#BAE6FD] shadow-sm flex items-start gap-3"
                  >
                    <div className="w-8 h-8 rounded-xl bg-[#E0F2FE] text-[#0284C7] flex items-center justify-center font-bold flex-shrink-0 mt-0.5">
                      {idx === 0 && <Compass className="w-4 h-4" />}
                      {idx === 1 && <Cpu className="w-4 h-4" />}
                      {idx === 2 && <Binary className="w-4 h-4" />}
                      {idx === 3 && <Activity className="w-4 h-4" />}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#0F172A] mb-1">
                        {item.label}
                      </h4>
                      <p className="text-xs text-[#475569] leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Technology Tags */}
              <div className="pt-4 border-t border-[#BAE6FD]/80 flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap gap-2">
                  {achievement.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-xs font-semibold px-3 py-1 rounded-lg bg-[#E0F2FE] text-[#0369A1] border border-[#BAE6FD]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-1.5 text-xs text-[#0284C7] font-bold">
                  <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
                  <span>Sidang & Evaluasi Diselesaikan</span>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
