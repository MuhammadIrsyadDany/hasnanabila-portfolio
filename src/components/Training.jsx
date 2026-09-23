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
    <section id="training" className="py-14 sm:py-16 bg-[#F8FCFF] relative engineering-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div data-reveal className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E0F2FE] border border-[#BAE6FD] text-[#0369A1] font-bold text-xs uppercase tracking-wider mb-2.5">
            <BookMarked className="w-3.5 h-3.5 text-[#0284C7]" />
            <span>Professional Development</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
            Training & Workshops
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#475569]">
            Pelatihan terstruktur kepemimpinan manajerial organisasi kemahasiswaan dan desain sirkuit elektronika.
          </p>
          <div className="w-14 h-1 bg-gradient-to-r from-[#38BDF8] to-[#60A5FA] mx-auto mt-3 rounded-full"></div>
        </div>

        {/* Training Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {training.map((item, idx) => (
            <div
              key={idx}
              data-reveal
              data-delay={idx + 1}
              className="glass-card rounded-2xl p-5 bg-white border border-[#BAE6FD]/80 shadow-soft hover:shadow-soft-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Category Pill */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#0284C7] bg-[#E0F2FE] px-2 py-0.5 rounded border border-[#BAE6FD]">
                    {item.category}
                  </span>
                  <div className="w-7 h-7 rounded-lg bg-[#F0F9FF] text-[#0284C7] flex items-center justify-center font-bold">
                    <Layers className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Training Title */}
                <h3 className="text-sm sm:text-base font-extrabold text-[#0F172A] leading-snug mb-2">
                  {item.title}
                </h3>

                {/* Organizer */}
                <div className="flex items-center gap-1.5 text-xs text-[#475569] mb-3">
                  <Building className="w-3.5 h-3.5 text-[#0284C7] flex-shrink-0" />
                  <span className="font-medium">{item.organizer}</span>
                </div>
              </div>

              {/* Period Footer */}
              <div className="pt-3 border-t border-[#E0F2FE] flex items-center justify-between text-xs text-[#64748B]">
                <div className="flex items-center gap-1">
                  <Calendar className="w-3 h-3 text-[#0284C7]" />
                  <span>Periode:</span>
                </div>
                <span className="font-semibold text-[#0F172A] text-[11px]">
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
