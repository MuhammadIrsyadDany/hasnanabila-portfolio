import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Copy, 
  Check, 
  Send, 
  ArrowUpRight,
  MessageSquare,
  Sparkles
} from 'lucide-react';

function LinkedInIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 1 0 0-3.28 1.64 1.64 0 0 0 0 3.28m1.4 9.74v-8.37H5.06v8.37z" />
    </svg>
  );
}

export default function Contact() {
  const { contact } = portfolioData.personal;
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-14 sm:py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div data-reveal className="text-center max-w-2xl mx-auto mb-14">
          <div className="section-badge mb-3">
            <MessageSquare className="w-3.5 h-3.5 text-[#0284C7]" />
            <span>Get in Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#475569] max-w-xl mx-auto">
            Terbuka untuk peluang karir dan kolaborasi di bidang Electrical Engineering, Maintenance, & Control.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-[#38BDF8] via-[#0284C7] to-[#818CF8] mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Contact Cards Layout */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            
            {/* Email Card */}
            <div data-reveal data-delay="1" className="liquid-glass rounded-3xl p-5 flex flex-col justify-between group">
              <div>
                <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#0284C7] to-[#38BDF8] text-white flex items-center justify-center font-bold mb-3 shadow-md group-hover:scale-105 transition-transform duration-200">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="block text-[11px] font-bold uppercase tracking-wider text-[#64748B] mb-0.5">
                  Email
                </span>
                <a
                  href={`mailto:${contact.email}`}
                  className="text-xs sm:text-sm font-bold text-[#0F172A] hover:text-[#0284C7] transition-colors break-all block"
                >
                  {contact.email}
                </a>
              </div>
              <div className="mt-4 pt-2.5 border-t border-slate-200/50">
                <button
                  onClick={handleCopyEmail}
                  className="liquid-pill w-full inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-[#0369A1] transition-all"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#10B981]" />
                      <span className="text-[#10B981] font-bold">Email Tersalin!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-[#0284C7]" />
                      <span>Salin Email</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Phone Card */}
            <div data-reveal data-delay="2" className="liquid-glass rounded-3xl p-5 flex flex-col justify-between group">
              <div>
                <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#0284C7] to-[#38BDF8] text-white flex items-center justify-center font-bold mb-3 shadow-md group-hover:scale-105 transition-transform duration-200">
                  <Phone className="w-4 h-4" />
                </div>
                <span className="block text-[11px] font-bold uppercase tracking-wider text-[#64748B] mb-0.5">
                  Phone / WhatsApp
                </span>
                <a
                  href={`tel:${contact.phone}`}
                  className="text-xs sm:text-sm font-bold text-[#0F172A] hover:text-[#0284C7] transition-colors block"
                >
                  {contact.phoneFormatted || contact.phone}
                </a>
              </div>
              <div className="mt-4 pt-2.5 border-t border-slate-200/50">
                <a
                  href={`https://wa.me/6285706284697`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="liquid-pill w-full inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-[#0369A1] transition-all"
                >
                  <span>Chat WhatsApp</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Location Card */}
            <div data-reveal data-delay="3" className="liquid-glass rounded-3xl p-5 flex flex-col justify-between group">
              <div>
                <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#0284C7] to-[#38BDF8] text-white flex items-center justify-center font-bold mb-3 shadow-md group-hover:scale-105 transition-transform duration-200">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="block text-[11px] font-bold uppercase tracking-wider text-[#64748B] mb-0.5">
                  Location
                </span>
                <p className="text-xs sm:text-sm font-bold text-[#0F172A]">
                  {contact.location}
                </p>
              </div>
              <div className="mt-4 pt-2.5 border-t border-slate-200/50">
                <span className="text-[11px] text-[#64748B] block text-center font-medium">
                  Indonesia (WIB / GMT+7)
                </span>
              </div>
            </div>

            {/* LinkedIn Card */}
            <div data-reveal data-delay="4" className="liquid-glass rounded-3xl p-5 flex flex-col justify-between group">
              <div>
                <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#0284C7] to-[#38BDF8] text-white flex items-center justify-center font-bold mb-3 shadow-md group-hover:scale-105 transition-transform duration-200">
                  <LinkedInIcon className="w-4 h-4" />
                </div>
                <span className="block text-[11px] font-bold uppercase tracking-wider text-[#64748B] mb-0.5">
                  LinkedIn
                </span>
                <a
                  href={contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-[#0F172A] hover:text-[#0284C7] transition-colors block truncate"
                >
                  {contact.linkedinDisplay}
                </a>
              </div>
              <div className="mt-4 pt-2.5 border-t border-slate-200/50">
                <a
                  href={contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="liquid-pill w-full inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-[#0369A1] transition-all"
                >
                  <span>Buka Profil</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>

          {/* Action Banner Card - Iridescent Liquid Glass */}
          <div data-reveal data-delay="2" className="liquid-glass rounded-3xl p-7 sm:p-9 text-center relative overflow-hidden border border-white/90 shadow-xl shadow-sky-500/10">
            
            {/* Ambient colorful backlight */}
            <div className="absolute -top-16 -left-16 w-48 h-48 bg-sky-400/25 rounded-full blur-2xl pointer-events-none"></div>
            <div className="absolute -bottom-16 -right-16 w-48 h-48 bg-indigo-400/25 rounded-full blur-2xl pointer-events-none"></div>

            <div className="relative z-10">
              <div className="liquid-pill inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-[#0369A1] mb-3">
                <Sparkles className="w-3.5 h-3.5 text-[#0284C7]" />
                <span>Open for Opportunities</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-[#0F172A] tracking-tight mb-2">
                Siap Berkontribusi pada Tim Engineering Anda
              </h3>
              <p className="text-xs sm:text-sm text-[#334155] max-w-lg mx-auto mb-6 leading-relaxed">
                Terbuka untuk peluang Full-time, MT/Graduate Trainee, maupun Project Engineer di bidang Electrical Maintenance & Instrumentation.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-3">
                <a
                  href={`mailto:${contact.email}?subject=Diskusi%20Peluang%20Karir%20-%20Hasna%20Nabila&body=Halo%20Hasna%2C%0A%0ASaya%20tertarik%20untuk%20mendiskusikan%20peluang%20karir%20bersama%20Anda.`}
                  className="liquid-btn-primary inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-bold text-xs sm:text-sm shadow-md"
                >
                  <Send className="w-4 h-4" />
                  <span>Kirim Pesan Email</span>
                </a>

                <a
                  href={contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="liquid-btn-secondary inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-bold text-xs sm:text-sm"
                >
                  <LinkedInIcon className="w-4 h-4 text-[#0284C7]" />
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#64748B]" />
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
