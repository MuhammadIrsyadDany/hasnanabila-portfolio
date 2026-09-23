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
  MessageSquare
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
    <section id="contact" className="py-20 bg-[#F8FCFF] relative engineering-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E0F2FE] border border-[#BAE6FD] text-[#0369A1] font-bold text-xs uppercase tracking-wider mb-3">
            <MessageSquare className="w-3.5 h-3.5 text-[#0284C7]" />
            <span>Get in Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
            Let's Connect
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#475569] max-w-2xl mx-auto">
            Interested in working together or discussing opportunities in electrical engineering, maintenance, instrumentation, and control? Feel free to get in touch.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-[#38BDF8] to-[#60A5FA] mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Contact Cards Layout */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            
            {/* Email Card */}
            <div className="glass-card rounded-2xl p-6 bg-white border border-[#BAE6FD] shadow-soft hover:shadow-soft-lg flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#E0F2FE] text-[#0284C7] flex items-center justify-center font-bold mb-4">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="block text-xs font-bold uppercase tracking-wider text-[#64748B] mb-1">
                  Email
                </span>
                <a
                  href={`mailto:${contact.email}`}
                  className="text-sm font-bold text-[#0F172A] hover:text-[#0284C7] transition-colors break-all block"
                >
                  {contact.email}
                </a>
              </div>
              <div className="mt-5 pt-3 border-t border-[#E0F2FE]">
                <button
                  onClick={handleCopyEmail}
                  className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-[#0369A1] bg-[#F0F9FF] hover:bg-[#E0F2FE] border border-[#BAE6FD] transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#10B981]" />
                      <span className="text-[#10B981]">Email Tersalin!</span>
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
            <div className="glass-card rounded-2xl p-6 bg-white border border-[#BAE6FD] shadow-soft hover:shadow-soft-lg flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#E0F2FE] text-[#0284C7] flex items-center justify-center font-bold mb-4">
                  <Phone className="w-5 h-5" />
                </div>
                <span className="block text-xs font-bold uppercase tracking-wider text-[#64748B] mb-1">
                  Phone / WhatsApp
                </span>
                <a
                  href={`tel:${contact.phone}`}
                  className="text-sm font-bold text-[#0F172A] hover:text-[#0284C7] transition-colors block"
                >
                  {contact.phone}
                </a>
              </div>
              <div className="mt-5 pt-3 border-t border-[#E0F2FE]">
                <a
                  href={`https://wa.me/6285706284697`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-[#0369A1] bg-[#F0F9FF] hover:bg-[#E0F2FE] border border-[#BAE6FD] transition-colors"
                >
                  <span>Chat via WhatsApp</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Location Card */}
            <div className="glass-card rounded-2xl p-6 bg-white border border-[#BAE6FD] shadow-soft hover:shadow-soft-lg flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#E0F2FE] text-[#0284C7] flex items-center justify-center font-bold mb-4">
                  <MapPin className="w-5 h-5" />
                </div>
                <span className="block text-xs font-bold uppercase tracking-wider text-[#64748B] mb-1">
                  Location
                </span>
                <p className="text-sm font-bold text-[#0F172A]">
                  {contact.location}
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-[#E0F2FE]">
                <span className="text-xs text-[#64748B] block text-center font-medium">
                  Indonesia (WIB)
                </span>
              </div>
            </div>

            {/* LinkedIn Card */}
            <div className="glass-card rounded-2xl p-6 bg-white border border-[#BAE6FD] shadow-soft hover:shadow-soft-lg flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#E0F2FE] text-[#0284C7] flex items-center justify-center font-bold mb-4">
                  <LinkedInIcon className="w-5 h-5" />
                </div>
                <span className="block text-xs font-bold uppercase tracking-wider text-[#64748B] mb-1">
                  LinkedIn
                </span>
                <a
                  href={contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-[#0F172A] hover:text-[#0284C7] transition-colors block break-all"
                >
                  {contact.linkedinDisplay}
                </a>
              </div>
              <div className="mt-5 pt-3 border-t border-[#E0F2FE]">
                <a
                  href={contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-[#0369A1] bg-[#F0F9FF] hover:bg-[#E0F2FE] border border-[#BAE6FD] transition-colors"
                >
                  <span>Buka Profil</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>

          {/* Action Banner Card */}
          <div className="glass-card rounded-3xl p-8 sm:p-10 bg-gradient-to-r from-[#E0F2FE] via-[#BAE6FD]/70 to-[#7DD3FC]/50 border border-[#BAE6FD] shadow-soft-lg text-center relative overflow-hidden">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight mb-3">
              Siap Berkontribusi pada Tim Engineering Anda
            </h3>
            <p className="text-sm sm:text-base text-[#334155] max-w-xl mx-auto mb-6">
              Terbuka untuk peluang posisi Full-time, MT/Graduate Trainee, maupun Project Engineer di bidang Electrical Maintenance, Instrumentation & Control.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href={`mailto:${contact.email}?subject=Diskusi%20Peluang%20Karir%20-%20Hasna%20Nabila&body=Halo%20Hasna%2C%0A%0ASaya%20tertarik%20untuk%20mendiskusikan%20peluang%20karir%20bersama%20Anda.`}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-[#38BDF8] to-[#60A5FA] hover:from-[#0284C7] hover:to-[#2563EB] shadow-soft hover:shadow-soft-lg transition-all duration-200 hover:-translate-y-0.5"
              >
                <Send className="w-4 h-4" />
                <span>Let's Talk</span>
              </a>

              <a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm text-[#0F172A] bg-white border border-[#BAE6FD] hover:bg-[#F8FCFF] shadow-sm hover:shadow-soft transition-all duration-200"
              >
                <LinkedInIcon className="w-4 h-4 text-[#0284C7]" />
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#64748B]" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
