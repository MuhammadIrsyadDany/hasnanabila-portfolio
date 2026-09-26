import React, { useEffect, useState } from 'react';

export default function LiquidBackground() {
  const [mousePos, setMousePos] = useState({ x: -200, y: -200 });

  useEffect(() => {
    let animationFrameId;
    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let currentX = targetX;
    let currentY = targetY;

    const handleMouseMove = (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    const updatePosition = () => {
      currentX += (targetX - currentX) * 0.08;
      currentY += (targetY - currentY) * 0.08;
      setMousePos({ x: currentX, y: currentY });
      animationFrameId = requestAnimationFrame(updatePosition);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    animationFrameId = requestAnimationFrame(updatePosition);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      <div
        style={{
          position: 'fixed',
          top: 0, left: 0, right: 0, bottom: 0,
          width: '100vw', height: '100vh',
          zIndex: 0,
          pointerEvents: 'none',
          backgroundColor: '#EDF6FF',
        }}
      >
        {/* ── Subtle Blueprint Dot Grid ── */}
        <svg
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0.07 }}
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="dot-grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="1" fill="#0284C7" />
            </pattern>
            {/* Subtle circuit tile - just a few traces, no clutter */}
            <pattern id="circuit-tile" x="0" y="0" width="160" height="160" patternUnits="userSpaceOnUse">
              <path d="M0 40 L50 40 L60 30 L100 30 L110 40 L160 40" fill="none" stroke="#0284C7" strokeWidth="1" />
              <path d="M0 120 L40 120 L50 110 L80 110 L90 120 L160 120" fill="none" stroke="#0284C7" strokeWidth="1" />
              <path d="M40 0 L40 30 L50 40 L50 80 L40 90 L40 160" fill="none" stroke="#0284C7" strokeWidth="1" />
              <circle cx="60" cy="30" r="3" fill="none" stroke="#0284C7" strokeWidth="1" />
              <circle cx="100" cy="30" r="3" fill="none" stroke="#0284C7" strokeWidth="1" />
              <circle cx="50" cy="40" r="2" fill="#0284C7" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dot-grid)" />
          <rect width="100%" height="100%" fill="url(#circuit-tile)" />
        </svg>

        {/* ── Minimal Industrial Accents ── */}
        <svg
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0.09 }}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="#0369A1"
        >
          {/* Subtle sine wave — top */}
          <path
            d="M-20,100 C40,100 60,65 100,65 C140,65 160,135 200,135 C240,135 260,65 300,65 C340,65 360,135 400,135 C440,135 460,65 500,65 C540,65 560,135 600,135 C640,135 660,65 700,65 C740,65 760,135 800,135 C840,135 860,65 900,65 C940,65 960,135 1000,135 C1040,135 1060,65 1100,65 C1140,65 1160,135 1200,135 C1240,135 1260,65 1536,65"
            strokeWidth="1.5"
            strokeLinecap="round"
          />

          {/* Subtle sine wave — bottom */}
          <path
            d="M-20,650 C50,650 70,615 110,615 C150,615 170,685 210,685 C250,685 270,615 310,615 C350,615 370,685 410,685 C450,685 470,615 510,615 C550,615 570,685 610,685 C650,685 670,615 710,615 C750,615 770,685 810,685 C850,685 870,615 910,615 C950,615 970,685 1010,685 C1050,685 1070,615 1110,615 C1150,615 1170,685 1536,685"
            strokeWidth="1.5"
            strokeLinecap="round"
            opacity="0.6"
          />

          {/* Single gear — bottom left, subtle */}
          <g transform="translate(60,520)">
            <circle cx="38" cy="38" r="24" strokeWidth="1.2" />
            <circle cx="38" cy="38" r="9" strokeWidth="1.2" />
            {[0,40,80,120,160,200,240,280,320].map((deg, i) => {
              const rad = (deg * Math.PI) / 180;
              return (
                <line
                  key={i}
                  x1={38 + 24 * Math.cos(rad)} y1={38 + 24 * Math.sin(rad)}
                  x2={38 + 32 * Math.cos(rad)} y2={38 + 32 * Math.sin(rad)}
                  strokeWidth="3.5" strokeLinecap="round"
                />
              );
            })}
          </g>

          {/* Corner circuit trace — top left only */}
          <g transform="translate(16,16)" strokeWidth="1.2">
            <path d="M0 70 L0 20 Q0 0 20 0 L70 0" strokeLinecap="round" />
            <circle cx="20" cy="0" r="3.5" fill="#0369A1" stroke="none" />
            <circle cx="0" cy="20" r="3.5" fill="#0369A1" stroke="none" />
          </g>

          {/* Minimal gauge ring — top right */}
          <g transform="translate(1430,30)">
            <circle cx="38" cy="38" r="34" strokeWidth="1.2" />
            <circle cx="38" cy="38" r="26" strokeWidth="0.7" />
            {[0,60,120,180,240,300].map((deg, i) => {
              const rad = ((deg - 90) * Math.PI) / 180;
              return (
                <line
                  key={i}
                  x1={38 + 26 * Math.cos(rad)} y1={38 + 26 * Math.sin(rad)}
                  x2={38 + 20 * Math.cos(rad)} y2={38 + 20 * Math.sin(rad)}
                  strokeWidth="1.2"
                />
              );
            })}
            <line x1="38" y1="38" x2="52" y2="20" strokeWidth="1.5" strokeLinecap="round" />
            <circle cx="38" cy="38" r="3" fill="#0369A1" />
          </g>
        </svg>

        {/* ── Soft Liquid Orbs ── */}
        <div style={{
          position: 'absolute', top: '-5rem', left: '-4rem',
          width: '500px', height: '500px', borderRadius: '9999px', opacity: 0.45,
          background: 'radial-gradient(circle, rgba(56,189,248,0.35) 0%, rgba(14,165,233,0.15) 50%, transparent 70%)',
        }} />
        <div style={{
          position: 'absolute', top: '2rem', right: '-5rem',
          width: '460px', height: '460px', borderRadius: '9999px', opacity: 0.35,
          background: 'radial-gradient(circle, rgba(129,140,248,0.3) 0%, rgba(99,102,241,0.12) 50%, transparent 70%)',
        }} />
        <div style={{
          position: 'absolute', top: '45%', left: '-6rem',
          width: '420px', height: '420px', borderRadius: '9999px', opacity: 0.3,
          background: 'radial-gradient(circle, rgba(52,211,153,0.25) 0%, rgba(56,189,248,0.12) 60%, transparent 75%)',
        }} />
        <div style={{
          position: 'absolute', bottom: '4rem', right: '-5rem',
          width: '450px', height: '450px', borderRadius: '9999px', opacity: 0.4,
          background: 'radial-gradient(circle, rgba(14,165,233,0.28) 0%, rgba(186,230,253,0.18) 60%, transparent 75%)',
        }} />

        {/* ── Cursor Spotlight ── */}
        <div
          style={{
            position: 'fixed',
            width: '320px', height: '320px',
            borderRadius: '9999px',
            transform: 'translate(-50%, -50%)',
            opacity: 0.28,
            filter: 'blur(48px)',
            pointerEvents: 'none',
            left: `${mousePos.x}px`,
            top: `${mousePos.y}px`,
            background: 'radial-gradient(circle, rgba(56,189,248,0.4) 0%, rgba(129,140,248,0.2) 45%, transparent 70%)',
          }}
        />
      </div>
    </>
  );
}
