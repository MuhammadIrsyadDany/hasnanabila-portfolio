import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Training from './components/Training';
import Achievement from './components/Achievement';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useScrollReveal } from './hooks/useScrollReveal';

export default function App() {
  // Initialize lightweight IntersectionObserver scroll reveal
  useScrollReveal();

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FCFF] text-[#0F172A] selection:bg-[#BAE6FD] selection:text-[#0F172A]">
      {/* Sticky Top Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-grow">
        <Hero />
        <About />
        <Experience />
        <Education />
        <Skills />
        <Certifications />
        <Training />
        <Achievement />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
