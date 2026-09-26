import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { 
  Zap, 
  Cpu, 
  FileSpreadsheet, 
  Palette, 
  Users, 
  Check, 
  Sparkles,
  Sliders
} from 'lucide-react';

const iconMap = {
  Zap: Zap,
  Cpu: Cpu,
  FileSpreadsheet: FileSpreadsheet,
  Palette: Palette,
  Users: Users,
};

export default function Skills() {
  const { skillCategories } = portfolioData;

  return (
    <section id="skills" className="py-16 sm:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div data-reveal className="text-center max-w-2xl mx-auto mb-14">
          <div className="section-badge mb-3">
            <Sliders className="w-3.5 h-3.5 text-[#0284C7]" />
            <span>Technical & Professional Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight">
            Skills & <span className="gradient-text">Competencies</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#475569] max-w-xl mx-auto">
            Kombinasi keahlian teknik elektro industri, software perancangan & komputasi, serta kapabilitas interpersonal profesional.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-[#38BDF8] via-[#0284C7] to-[#818CF8] mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((category, idx) => {
            const IconComponent = iconMap[category.icon] || Zap;
            const isFeatured = idx === 0;

            return (
              <div
                key={idx}
                data-reveal
                data-delay={(idx % 3) + 1}
                className={`liquid-glass rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 ${
                  isFeatured 
                    ? 'md:col-span-2 lg:col-span-2 border-sky-300 shadow-xl shadow-sky-500/10' 
                    : ''
                }`}
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#0284C7] to-[#38BDF8] text-white flex items-center justify-center font-bold shadow-sm">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-base sm:text-lg font-extrabold text-[#0F172A]">
                          {category.title}
                        </h3>
                        <span className="text-[11px] font-semibold text-[#64748B]">
                          {category.skills.length} kompetensi terverifikasi
                        </span>
                      </div>
                    </div>
                    {isFeatured && (
                      <span className="liquid-pill inline-flex items-center gap-1.5 text-[11px] font-bold text-[#0369A1] px-3 py-1 rounded-full border border-sky-200">
                        <Sparkles className="w-3.5 h-3.5 text-[#0284C7]" />
                        <span>Core Field</span>
                      </span>
                    )}
                  </div>

                  {/* Skills Chips - Liquid Pills */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {category.skills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className={`liquid-pill inline-flex items-center gap-2 px-3.5 py-2 rounded-full text-xs font-semibold cursor-default transition-all duration-200 hover:-translate-y-1 hover:border-sky-300 ${
                          isFeatured
                            ? 'text-[#0284C7] font-bold bg-white/90 shadow-sm'
                            : 'text-[#334155]'
                        }`}
                      >
                        <span className="w-2 h-2 rounded-full bg-gradient-to-tr from-[#0284C7] to-[#38BDF8]"></span>
                        <span>{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom subtle accent line for featured card */}
                {isFeatured && (
                  <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center justify-between text-xs text-[#64748B]">
                    <span className="font-medium text-[11px]">Bidang utama dalam perawatan sistem tenaga & kontrol otomatis</span>
                    <span className="text-[11px] font-bold text-[#0284C7]">PENS • 2026</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
