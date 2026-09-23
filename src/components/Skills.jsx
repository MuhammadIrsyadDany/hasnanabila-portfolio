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
    <section id="skills" className="py-20 bg-[#F8FCFF] relative engineering-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E0F2FE] border border-[#BAE6FD] text-[#0369A1] font-bold text-xs uppercase tracking-wider mb-3">
            <Sliders className="w-3.5 h-3.5 text-[#0284C7]" />
            <span>Technical & Professional Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
            Skills & Competencies
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#475569]">
            Keahlian teknis teknik elektro, penggunaan software rekayasa industri, alat produktivitas kerja, serta keterampilan interpersonal.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-[#38BDF8] to-[#60A5FA] mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => {
            const IconComponent = iconMap[category.icon] || Zap;
            const isFeatured = idx === 0; // Electrical Engineering is primary

            return (
              <div
                key={idx}
                className={`glass-card rounded-3xl p-6 sm:p-7 bg-white border transition-all duration-300 flex flex-col justify-between ${
                  isFeatured 
                    ? 'border-[#7DD3FC] shadow-soft-lg md:col-span-2 lg:col-span-2 bg-gradient-to-br from-white via-white to-[#F0F9FF]' 
                    : 'border-[#BAE6FD]/80 shadow-soft'
                }`}
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-2xl bg-[#E0F2FE] text-[#0284C7] flex items-center justify-center font-bold shadow-sm">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-lg font-extrabold text-[#0F172A]">
                          {category.title}
                        </h3>
                        <span className="text-[11px] font-semibold text-[#64748B]">
                          {category.skills.length} verified competencies
                        </span>
                      </div>
                    </div>
                    {isFeatured && (
                      <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#0369A1] bg-[#BAE6FD]/50 px-2.5 py-1 rounded-full border border-[#7DD3FC]">
                        <Sparkles className="w-3 h-3 text-[#0284C7]" />
                        <span>Core Field</span>
                      </span>
                    )}
                  </div>

                  {/* Skills Chips */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {category.skills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                          isFeatured
                            ? 'bg-[#F0F9FF] hover:bg-[#E0F2FE] text-[#0369A1] border border-[#BAE6FD]'
                            : 'bg-[#F8FCFF] hover:bg-[#E0F2FE] text-[#334155] border border-[#BAE6FD]/70'
                        }`}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]"></span>
                        <span>{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Subtle bottom note for confidence */}
                <div className="mt-6 pt-4 border-t border-[#E0F2FE] flex items-center justify-between text-[11px] text-[#64748B]">
                  <span>Verified via Academic & Field Practice</span>
                  <Check className="w-3.5 h-3.5 text-[#0284C7]" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
