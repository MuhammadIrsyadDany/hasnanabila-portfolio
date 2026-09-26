import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { 
  Briefcase, 
  MapPin, 
  Calendar, 
  CheckCircle2, 
  Building2,
  Camera,
  X,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

function PhotoLightbox({ photos, initialIndex, onClose }) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const goNext = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % photos.length);
  };

  const goPrev = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };

  // Close on Escape
  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') setCurrentIndex((p) => (p + 1) % photos.length);
      if (e.key === 'ArrowLeft') setCurrentIndex((p) => (p - 1 + photos.length) % photos.length);
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [photos.length, onClose]);

  return (
    <div
      className="fixed inset-0 z-[99998] flex items-center justify-center bg-black/80 backdrop-blur-sm cursor-pointer"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white flex items-center justify-center transition-all"
        aria-label="Tutup"
      >
        <X className="w-5 h-5" />
      </button>

      {/* Navigation Arrows */}
      {photos.length > 1 && (
        <>
          <button
            onClick={goPrev}
            className="absolute left-3 sm:left-6 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white flex items-center justify-center transition-all"
            aria-label="Foto sebelumnya"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={goNext}
            className="absolute right-3 sm:right-6 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white flex items-center justify-center transition-all"
            aria-label="Foto berikutnya"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </>
      )}

      {/* Photo */}
      <div
        className="relative max-w-4xl max-h-[85vh] w-[92%] flex items-center justify-center cursor-default"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={photos[currentIndex].src}
          alt={photos[currentIndex].alt}
          className="max-w-full max-h-[82vh] rounded-2xl shadow-2xl object-contain"
        />
      </div>

      {/* Dots indicator */}
      {photos.length > 1 && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2">
          {photos.map((_, idx) => (
            <button
              key={idx}
              onClick={(e) => {
                e.stopPropagation();
                setCurrentIndex(idx);
              }}
              className={`w-2 h-2 rounded-full transition-all ${
                idx === currentIndex
                  ? 'bg-white w-5'
                  : 'bg-white/40 hover:bg-white/60'
              }`}
              aria-label={`Foto ${idx + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default function Experience() {
  const { experiences } = portfolioData;
  const [lightbox, setLightbox] = useState(null); // { photos, index }

  const openLightbox = (photos, index) => {
    setLightbox({ photos, index });
  };

  const closeLightbox = () => {
    setLightbox(null);
  };

  return (
    <section id="experience" className="py-16 sm:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div data-reveal className="text-center max-w-2xl mx-auto mb-14">
          <div className="section-badge mb-3">
            <Briefcase className="w-3.5 h-3.5 text-[#0284C7]" />
            <span>Industrial Experience</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#475569] max-w-xl mx-auto">
            Pengalaman praktis pemeliharaan kelistrikan & sistem kontrol di pembangkit listrik tenaga uap dan industri manufaktur semen.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-[#38BDF8] via-[#0284C7] to-[#818CF8] mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Vertical Timeline Guide Line */}
          <div className="absolute top-6 bottom-6 left-4 md:left-1/2 -ml-px w-0.5 bg-gradient-to-b from-[#38BDF8] via-[#0284C7] to-[#818CF8] hidden md:block opacity-40" />

          <div className="space-y-10">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={exp.id}
                  data-reveal
                  data-delay={index + 1}
                  className="relative flex flex-col md:flex-row items-center"
                >
                  
                  {/* Timeline Badge Dot (Desktop Center) */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-white/95 backdrop-blur-md border-2 border-[#38BDF8] shadow-lg shadow-sky-500/25 z-10 items-center justify-center text-[#0284C7] transition-transform hover:scale-110">
                    <span className="w-3 h-3 rounded-full bg-gradient-to-tr from-[#0284C7] to-[#38BDF8] glow-indicator"></span>
                  </div>

                  {/* Card wrapper */}
                  <div
                    className={`w-full md:w-1/2 ${
                      isEven ? 'md:pr-12 md:text-left' : 'md:pl-12 md:ml-auto md:text-left'
                    }`}
                  >
                    <div className="liquid-glass rounded-3xl p-6 sm:p-7 transition-all duration-300 relative group hover:border-sky-300">
                      
                      {/* Top subtle highlight bar */}
                      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#38BDF8] via-[#0EA5E9] to-[#818CF8]" />

                      {/* Header Info */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span className="liquid-pill inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[#0369A1] font-bold text-xs">
                          <Calendar className="w-3 h-3 text-[#0284C7]" />
                          <span>{exp.period}</span>
                        </span>
                        <span className="text-[11px] font-bold text-[#0284C7] bg-[#F0F9FF] px-3 py-0.5 rounded-full border border-sky-200/80 shadow-xs">
                          {exp.type}
                        </span>
                      </div>

                      {/* Company Name */}
                      <div className="flex items-start gap-3 mb-3">
                        <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#0284C7] to-[#38BDF8] text-white flex items-center justify-center font-bold flex-shrink-0 mt-0.5 shadow-md group-hover:scale-105 transition-transform">
                          <Building2 className="w-5 h-5" />
                        </div>
                        <div>
                          <h3 className="text-base sm:text-lg font-extrabold text-[#0F172A] leading-snug group-hover:text-[#0284C7] transition-colors">
                            {exp.company}
                          </h3>
                          <div className="flex items-center gap-1.5 text-xs text-[#64748B] mt-0.5 font-medium">
                            <MapPin className="w-3.5 h-3.5 text-[#0284C7]" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>

                      {/* Role Pill */}
                      <div className="mb-4 inline-flex items-center gap-1.5 liquid-pill px-3.5 py-1.5 rounded-xl border border-sky-200/60">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0284C7]"></span>
                        <p className="text-xs sm:text-sm font-bold text-[#0284C7]">
                          {exp.role}
                        </p>
                      </div>

                      {/* Responsibilities list */}
                      <div className="space-y-2.5 mb-5">
                        {exp.bullets.map((bullet, bIdx) => (
                          <div key={bIdx} className="flex items-start gap-2.5 text-xs text-[#475569] leading-relaxed">
                            <CheckCircle2 className="w-4 h-4 text-[#0284C7] flex-shrink-0 mt-0.5" />
                            <span>{bullet}</span>
                          </div>
                        ))}
                      </div>

                      {/* Key equipment / tags chips */}
                      <div className="pt-4 border-t border-slate-200/60">
                        <span className="block text-[10px] font-bold uppercase tracking-wider text-[#64748B] mb-2">
                          Fokus Peralatan & Lingkup Kerja
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {exp.highlights.map((tag, tIdx) => (
                            <span
                              key={tIdx}
                              className="liquid-pill text-[10px] font-semibold px-2.5 py-1 rounded-full text-[#0369A1] transition-transform hover:-translate-y-0.5"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Photo Gallery */}
                      {exp.photos && exp.photos.length > 0 && (
                        <div className="mt-5 pt-4 border-t border-slate-200/60">
                          <div className="flex items-center justify-between mb-2.5">
                            <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[#0284C7]">
                              <Camera className="w-3.5 h-3.5 text-[#0284C7]" />
                              <span>Dokumentasi Kegiatan Magang</span>
                            </span>
                            <span className="text-[10px] text-slate-400 font-medium">
                              {exp.photos.length} Foto
                            </span>
                          </div>
                          <div className="grid grid-cols-3 gap-2.5">
                            {exp.photos.map((photo, pIdx) => (
                              <button
                                key={pIdx}
                                onClick={() => openLightbox(exp.photos, pIdx)}
                                className="aspect-square rounded-2xl overflow-hidden border border-white/80 shadow-sm hover:shadow-lg hover:border-sky-300 transition-all duration-300 group/photo relative cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#0284C7] focus:ring-offset-2"
                                title={photo.alt}
                              >
                                <img
                                  src={photo.src}
                                  alt={photo.alt}
                                  loading="lazy"
                                  className="w-full h-full object-cover transition-transform duration-500 group-hover/photo:scale-110"
                                />
                                {/* Hover overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover/photo:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-2">
                                  <span className="text-[9px] font-semibold text-white/90 bg-black/30 px-2 py-0.5 rounded-full backdrop-blur-sm">
                                    Lihat Foto
                                  </span>
                                </div>
                              </button>
                            ))}
                          </div>
                        </div>
                      )}

                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>

      {/* Lightbox Modal */}
      {lightbox && (
        <PhotoLightbox
          photos={lightbox.photos}
          initialIndex={lightbox.index}
          onClose={closeLightbox}
        />
      )}
    </section>
  );
}
