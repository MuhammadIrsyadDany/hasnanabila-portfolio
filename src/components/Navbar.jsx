import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Education', href: '#education' },
  { name: 'Skills', href: '#skills' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Training', href: '#training' },
  { name: 'Achievement', href: '#achievement' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }

      const sections = NAV_LINKS.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 160;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed top-3 left-0 right-0 z-50 flex justify-center px-3 sm:px-6 pointer-events-none">
      <div className="w-full max-w-6xl pointer-events-auto">
        {/* Floating Liquid Glass Capsule Container */}
        <div className="liquid-glass-nav rounded-full px-4 sm:px-6 py-2.5 flex items-center justify-between relative overflow-hidden transition-all duration-300">
          
          {/* Scroll progress hairline */}
          <div 
            className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-[#38BDF8] via-[#0284C7] to-[#818CF8] transition-all duration-150 rounded-full"
            style={{ width: `${scrollProgress}%` }}
          />

          {/* Logo with Stylized Monogram */}
          <a
            href="#home"
            className="group flex items-center gap-2.5 text-decoration-none focus:outline-none rounded-full p-1"
            aria-label="Hasna Nabila Home"
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#0284C7] via-[#0EA5E9] to-[#38BDF8] flex items-center justify-center shadow-sm text-white font-extrabold text-xs tracking-wider transition-transform duration-300 group-hover:scale-110 border border-white/60">
              HN
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-sm tracking-tight text-[#0F172A] group-hover:text-[#0284C7] transition-colors leading-none">
                HASNA NABILA
              </span>
              <span className="text-[9px] font-bold text-[#0284C7] tracking-widest uppercase flex items-center gap-1 mt-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] glow-indicator"></span>
                Electrical Engineer
              </span>
            </div>
          </a>

          {/* Desktop Nav - iOS Capsule Segments */}
          <nav className="hidden xl:flex items-center gap-0.5 bg-black/[0.03] border border-white/60 p-1 rounded-full backdrop-blur-md shadow-inner">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-1 rounded-full text-xs font-semibold transition-all duration-200 relative ${
                    isActive
                      ? 'bg-white text-[#0284C7] shadow-sm font-bold border border-white/80 scale-[1.02]'
                      : 'text-[#475569] hover:text-[#0F172A] hover:bg-white/40'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action CTA */}
          <div className="hidden lg:flex items-center gap-2.5">
            <a
              href="#contact"
              className="liquid-btn-primary inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold shadow-sm"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex xl:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="p-1.5 rounded-full text-[#0F172A] hover:bg-white/70 border border-white/80 transition-colors focus:outline-none"
              aria-expanded={isOpen}
              aria-label="Toggle Navigation Menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile Frosted Glass Drawer */}
        {isOpen && (
          <div className="xl:hidden mt-2 liquid-glass rounded-3xl p-4 shadow-2xl border border-white/80 transition-all animate-fadeIn">
            <nav className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={closeMenu}
                    className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all flex items-center justify-between ${
                      isActive
                        ? 'bg-white/90 text-[#0284C7] font-bold border border-white shadow-sm'
                        : 'text-[#475569] hover:bg-white/50 hover:text-[#0F172A]'
                    }`}
                  >
                    <span>{link.name}</span>
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#0284C7]"></span>}
                  </a>
                );
              })}
              <div className="pt-2 mt-1 border-t border-slate-200/50">
                <a
                  href="#contact"
                  onClick={closeMenu}
                  className="liquid-btn-primary w-full flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-xs font-bold"
                >
                  <span>Hubungi Saya</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
