import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { 
  Trophy, 
  Cpu, 
  Activity, 
  Sparkles, 
  CheckCircle2, 
  Binary, 
  SlidersHorizontal,
  Compass,
  Radio
} from 'lucide-react';

export default function Achievement() {
  const { achievement } = portfolioData;

  return (
    <section id="achievement" className="py-14 sm:py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div data-reveal className="text-center max-w-2xl mx-auto mb-14">
          <div className="section-badge mb-3">
            <Trophy className="w-3.5 h-3.5 text-[#0284C7]" />
            <span>Featured Capstone</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight">
            Final Project – <span className="gradient-text">Electrical Engineering</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#475569] max-w-xl mx-auto">
            Riset dan realisasi konverter daya AC-DC terkontrol SPWaM satu fasa berbasis modulasi gelombang gergaji.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-[#38BDF8] via-[#0284C7] to-[#818CF8] mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Featured Project Big Showcase Card - Liquid Glass Dark Mode */}
        <div data-reveal data-delay="1" className="max-w-5xl mx-auto">
          <div className="liquid-glass-dark rounded-3xl p-6 sm:p-8 lg:p-10 text-white relative group">
            
            {/* Background Engineering Schematic Circuit Lines */}
            <div className="absolute inset-0 pointer-events-none opacity-25 engineering-grid-dark"></div>
            
            {/* Ambient Iridescent Liquid Orbs */}
            <div className="absolute -top-24 -right-24 w-80 h-80 bg-sky-500/20 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none"></div>

            <div className="relative z-10">
              
              {/* Top Meta Badges */}
              <div className="flex flex-wrap items-center justify-between gap-2.5 mb-5">
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-gradient-to-r from-[#0284C7] to-[#0EA5E9] text-white text-[11px] font-extrabold shadow-sm border border-white/20">
                    <Sparkles className="w-3 h-3 text-[#7DD3FC]" />
                    <span>Graduation Capstone 2026</span>
                  </span>
                  <span className="text-[11px] font-bold text-[#7DD3FC] bg-sky-950/60 px-3 py-1 rounded-full border border-sky-400/30 backdrop-blur-md">
                    PENS D4 TEI
                  </span>
                </div>

                <div className="inline-flex items-center gap-2 text-xs font-bold text-[#38BDF8] bg-sky-950/50 px-3 py-1 rounded-full border border-sky-500/30">
                  <span className="w-2 h-2 rounded-full bg-[#38BDF8] glow-indicator"></span>
                  <Activity className="w-3.5 h-3.5 text-[#38BDF8]" />
                  <span>Hardware & Simulation Validated</span>
                </div>
              </div>

              {/* Title of Final Project */}
              <h3 className="text-lg sm:text-xl lg:text-2xl font-extrabold text-white leading-snug tracking-tight mb-3">
                "{achievement.title}"
              </h3>

              {/* Description */}
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 max-w-3xl">
                {achievement.description} Mengembangkan topologi konverter daya satu fasa terkontrol untuk menghasilkan keluaran SPWaM optimal melalui strategi modulasi lebar pulsa (PWM) berbasis carrier gelombang gergaji dan kendali mikrokontroler berpresisi tinggi.
              </p>

              {/* Visual Engineering Graphic: Oscilloscope Waveform & Modulation Visual */}
              <div className="mb-6 bg-[#040814]/90 rounded-2xl border border-sky-500/30 p-4 shadow-2xl relative overflow-hidden">
                
                {/* Oscilloscope Header / Controls Bar */}
                <div className="flex items-center justify-between mb-2.5 text-xs pb-2 border-b border-slate-800">
                  <div className="flex items-center gap-2 text-[#38BDF8] font-bold">
                    <Radio className="w-3.5 h-3.5 text-[#38BDF8] animate-pulse" />
                    <span>Digital Oscilloscope DSO-5000 (Real-Time Waveform Monitor)</span>
                  </div>
                  <div className="flex items-center gap-2 text-[10px] font-mono text-slate-400">
                    <span className="text-emerald-400 font-bold bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/40">CH1 50Hz</span>
                    <span className="text-sky-300 font-bold bg-sky-950/60 px-2 py-0.5 rounded border border-sky-500/40">PWM: SPWaM</span>
                    <span className="hidden sm:inline text-slate-400">TRIG: AUTO</span>
                  </div>
                </div>

                {/* Oscilloscope CRT / Screen with Scanline and Animated Waveforms */}
                <div className="w-full h-28 sm:h-32 bg-[#02050D] rounded-xl relative overflow-hidden flex items-center justify-center p-2 border border-sky-900/60">
                  
                  {/* Glowing Laser Scanline passing through */}
                  <div className="absolute inset-x-0 h-10 bg-gradient-to-b from-transparent via-[#38BDF8]/15 to-transparent oscilloscope-scanline pointer-events-none z-10" />

                  <svg
                    viewBox="0 0 600 100"
                    preserveAspectRatio="none"
                    className="w-full h-full relative z-0"
                  >
                    {/* Grid lines inside oscilloscope view */}
                    <defs>
                      <pattern id="scopeGrid3" width="30" height="20" patternUnits="userSpaceOnUse">
                        <path d="M 30 0 L 0 0 0 20" fill="none" stroke="#162235" strokeWidth="0.8" />
                      </pattern>
                      <linearGradient id="waveGlow3" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#38BDF8" />
                        <stop offset="50%" stopColor="#7DD3FC" />
                        <stop offset="100%" stopColor="#818CF8" />
                      </linearGradient>
                    </defs>
                    <rect width="600" height="100" fill="url(#scopeGrid3)" />

                    {/* Sawtooth carrier waveform - Animated trace */}
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
                      className="animate-osci-trace"
                      opacity="0.6"
                    />

                    {/* Reference Sine Envelope (Pink/Rose) */}
                    <path
                      d="
                        M 0 50 
                        Q 75 10, 150 50 
                        T 300 50 
                        T 450 50 
                        T 600 50
                      "
                      fill="none"
                      stroke="#FB7185"
                      strokeWidth="1.5"
                      opacity="0.65"
                    />

                    {/* Stepped SPWaM output pulses (Glow Neon Cyan) */}
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
                      stroke="url(#waveGlow3)"
                      strokeWidth="2.5"
                    />
                  </svg>
                  
                  {/* Legend overlay inside scope */}
                  <div className="absolute bottom-1 right-2 flex items-center gap-3 text-[10px] text-slate-300 font-mono z-20">
                    <span className="flex items-center gap-1">
                      <span className="w-2.5 h-0.5 bg-[#0284C7] inline-block"></span> Sawtooth
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="w-2.5 h-0.5 bg-[#38BDF8] inline-block"></span> SPWaM Pulse
                    </span>
                  </div>
                </div>
              </div>

              {/* Research Scope 4 Cards - Frosted Dark Glass */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                {achievement.scope.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-sky-400/50 backdrop-blur-md transition-all duration-300 flex items-start gap-2.5"
                  >
                    <div className="w-7 h-7 rounded-xl bg-gradient-to-tr from-[#0284C7] to-[#38BDF8] text-white flex items-center justify-center font-bold flex-shrink-0 mt-0.5 shadow-sm">
                      {idx === 0 && <Compass className="w-3.5 h-3.5" />}
                      {idx === 1 && <Cpu className="w-3.5 h-3.5" />}
                      {idx === 2 && <Binary className="w-3.5 h-3.5" />}
                      {idx === 3 && <Activity className="w-3.5 h-3.5" />}
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-white mb-0.5">
                        {item.label}
                      </h4>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Technology Tags & Verification */}
              <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap gap-1.5">
                  {achievement.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-xs font-semibold px-3 py-1 rounded-full bg-white/[0.06] text-[#7DD3FC] border border-white/10 backdrop-blur-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-1.5 text-xs text-[#38BDF8] font-bold">
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
