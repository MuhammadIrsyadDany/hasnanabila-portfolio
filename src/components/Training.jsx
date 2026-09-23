import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { 
  BookMarked, 
  Calendar, 
  Building, 
  CheckCircle, 
  Layers 
} from 'lucide-react';

export default function Training() {
  const { training } = portfolioData;

  return (
    <section id="training" className="py-20 bg-[#F8FCFF] relative engineering-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E0F2FE] border border-[#BAE6FD] text-[#0369A1] font-bold text-xs uppercase tracking-wider mb-3">
            <BookMarked className="w-3.5 h-3.5 text-[#0284C7]" />
            <span>Professional Development</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
            Training & Workshops
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#475569]">
            Pelatihan terstruktur dalam manajemen kepemimpinan organisasi kemahasiswaan dan keahlian desain sirkuit elektronika.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-[#38BDF8] to-[#60A5FA] mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Training Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {training.map((item, idx) => (
            <div
              key={idx}
              className="glass-card rounded-3xl p-6 bg-white border border-[#BAE6FD]/80 shadow-soft hover:shadow-soft-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Category Pill */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#0284C7] bg-[#E0F2FE] px-2.5 py-1 rounded-md border border-[#BAE6FD]">
                    {item.category}
                  </span>
                  <div className="w-8 h-8 rounded-xl bg-[#F0F9FF] text-[#0284C7] flex items-center justify-center font-bold">
                    <Layers className="w-4 h-4" />
                  </div>
                </div>

                {/* Training Title */}
                <h3 className="text-base sm:text-lg font-extrabold text-[#0F172A] leading-snug mb-3">
                  {item.title}
                </h3>

                {/* Organizer */}
                <div className="flex items-center gap-2 text-xs text-[#475569] mb-4">
                  <Building className="w-3.5 h-3.5 text-[#0284C7] flex-shrink-0" />
                  <span className="font-medium">{item.organizer}</span>
                </div>
              </div>

              {/* Period Footer */}
              <div className="pt-4 border-t border-[#E0F2FE] flex items-center justify-between text-xs text-[#64748B]">
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#0284C7]" />
                  <span>Periode</span>
                </div>
                <span className="font-semibold text-[#0F172A]">
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
