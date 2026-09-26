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
import LiquidBackground from './components/LiquidBackground';
import WelcomeScreen from './components/WelcomeScreen';
import { useScrollReveal } from './hooks/useScrollReveal';

export default function App() {
  // Initialize lightweight IntersectionObserver scroll reveal
  useScrollReveal();

  return (
    <div className="min-h-screen flex flex-col text-[#0F172A] selection:bg-[#BAE6FD] selection:text-[#0F172A] relative" style={{ position: 'relative', zIndex: 1 }}>
      {/* Welcome Intro Screen (Runs only when first visiting the site / opening new session) */}
      <WelcomeScreen />

      {/* Dynamic iOS Liquid Morphing Background with Interactive Spotlight */}
      <LiquidBackground />

      {/* Floating Liquid Glass Top Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-grow">
        <Hero />
        <div className="section-divider max-w-4xl mx-auto my-2 opacity-50" />
        <About />
        <div className="section-divider max-w-4xl mx-auto my-2 opacity-50" />
        <Experience />
        <div className="section-divider max-w-4xl mx-auto my-2 opacity-50" />
        <Education />
        <div className="section-divider max-w-4xl mx-auto my-2 opacity-50" />
        <Skills />
        <div className="section-divider max-w-4xl mx-auto my-2 opacity-50" />
        <Certifications />
        <div className="section-divider max-w-4xl mx-auto my-2 opacity-50" />
        <Training />
        <div className="section-divider max-w-4xl mx-auto my-2 opacity-50" />
        <Achievement />
        <div className="section-divider max-w-4xl mx-auto my-2 opacity-50" />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
