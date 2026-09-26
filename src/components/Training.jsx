import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { 
  BookMarked, 
  Calendar, 
  Building, 
  Layers 
} from 'lucide-react';

export default function Training() {
  const { training } = portfolioData;

  return (
    <section id="training" className="py-16 sm:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div data-reveal className="text-center max-w-2xl mx-auto mb-14">
          <div className="section-badge mb-3">
            <BookMarked className="w-3.5 h-3.5 text-[#0284C7]" />
            <span>Professional Development</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight">
            Training & <span className="gradient-text">Workshops</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#475569] max-w-xl mx-auto">
            Pelatihan terstruktur kepemimpinan manajerial organisasi kemahasiswaan dan desain sirkuit elektronika.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-[#38BDF8] via-[#0284C7] to-[#818CF8] mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Training Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {training.map((item, idx) => (
            <div
              key={idx}
              data-reveal
              data-delay={idx + 1}
              className="liquid-glass rounded-3xl p-6 flex flex-col justify-between transition-all duration-300 group hover:border-sky-300 hover:scale-[1.01]"
            >
              <div>
                {/* Category Pill */}
                <div className="flex items-center justify-between mb-4">
                  <span className="liquid-pill text-[10px] font-bold uppercase tracking-wider text-[#0284C7] px-3 py-1 rounded-full">
                    {item.category}
                  </span>
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#0284C7] to-[#38BDF8] text-white flex items-center justify-center font-bold shadow-sm group-hover:scale-105 transition-transform">
                    <Layers className="w-4 h-4" />
                  </div>
                </div>

                {/* Training Title */}
                <h3 className="text-base font-extrabold text-[#0F172A] leading-snug mb-2.5 group-hover:text-[#0284C7] transition-colors">
                  {item.title}
                </h3>

                {/* Organizer */}
                <div className="flex items-center gap-2 text-xs sm:text-sm text-[#475569] mb-4">
                  <Building className="w-4 h-4 text-[#0284C7] flex-shrink-0" />
                  <span className="font-medium">{item.organizer}</span>
                </div>
              </div>

              {/* Period Footer */}
              <div className="pt-4 border-t border-slate-200/60 flex items-center justify-between text-xs text-[#64748B]">
                <div className="flex items-center gap-1.5 font-medium">
                  <Calendar className="w-3.5 h-3.5 text-[#0284C7]" />
                  <span>Periode:</span>
                </div>
                <span className="font-bold text-[#0F172A] text-xs">
                  {item.period}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
