import React from 'react';
import { ArrowUp, Mail, MapPin, Zap } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

function LinkedInIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 1 0 0-3.28 1.64 1.64 0 0 0 0 3.28m1.4 9.74v-8.37H5.06v8.37z" />
    </svg>
  );
}

export default function Footer() {
  const { personal } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-r from-[#E0F2FE] via-[#BAE6FD] to-[#7DD3FC] text-[#0F172A] border-t border-[#7DD3FC]/50 pt-16 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pb-12 border-b border-[#0284C7]/20">
          
          {/* Brand & Tagline */}
          <div className="md:col-span-8 flex flex-col items-start">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-xl bg-white/90 border border-white text-[#0284C7] flex items-center justify-center font-extrabold text-sm shadow-sm">
                HN
              </div>
              <span className="text-xl font-extrabold tracking-tight text-[#0F172A]">
                HASNA NABILA
              </span>
            </div>
            
            <p className="text-sm font-semibold text-[#0369A1] tracking-wide mb-3">
              Electrical Engineering | Maintenance | Instrumentation & Control
            </p>

            <p className="text-xs text-[#334155] max-w-lg leading-relaxed">
              D4 Teknik Elektro Industri - Politeknik Elektronika Negeri Surabaya (PENS). Berkomitmen meningkatkan keandalan dan efisiensi sistem kelistrikan di sektor industri dan energi.
            </p>
          </div>

          {/* Back to top action */}
          <div className="md:col-span-4 flex flex-col md:items-end items-start gap-4">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/90 hover:bg-white text-xs font-bold text-[#0F172A] shadow-soft border border-white/60 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
              aria-label="Back to Top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-4 h-4 text-[#0284C7]" />
            </button>

            <div className="flex items-center gap-3 text-xs text-[#334155] font-medium">
              <a
                href={personal.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#0284C7] transition-colors"
              >
                LinkedIn
              </a>
              <span>•</span>
              <a
                href={`mailto:${personal.contact.email}`}
                className="hover:text-[#0284C7] transition-colors"
              >
                Email
              </a>
              <span>•</span>
              <a
                href={`https://wa.me/6285706284697`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#0284C7] transition-colors"
              >
                WhatsApp
              </a>
            </div>
          </div>

        </div>

        {/* Bottom copyright row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-[#334155]">
          <p>© 2026 Hasna Nabila. All rights reserved.</p>
          <p className="text-center sm:text-right">
            Designed for Cloudflare Pages Deployment • Built with Clean React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
