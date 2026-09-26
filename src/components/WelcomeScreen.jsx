import React, { useState, useEffect, useRef } from 'react';
import { Zap, ChevronRight, ArrowRight } from 'lucide-react';

export default function WelcomeScreen() {
  const [isVisible, setIsVisible] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const [hasEnteredText, setHasEnteredText] = useState(false);
  const [canClickToExit, setCanClickToExit] = useState(false);
  const canvasRef = useRef(null);
  const autoExitTimerRef = useRef(null);
  const textTimerRef = useRef(null);
  const clickGuardTimerRef = useRef(null);

  // Check sessionStorage or URL flag on initial mount
  useEffect(() => {
    try {
      const urlParams = new URLSearchParams(window.location.search);
      const forceWelcome = urlParams.has('welcome') || window.location.hash === '#welcome';
      const hasSeenIntro = sessionStorage.getItem('hasna_portfolio_welcome_seen');

      if (!hasSeenIntro || forceWelcome) {
        setIsVisible(true);
      }
    } catch {
      setIsVisible(true);
    }

    // Replay capability via custom event or global method
    const handleReplay = (e) => {
      if (e && e.stopPropagation) e.stopPropagation();
      try {
        sessionStorage.removeItem('hasna_portfolio_welcome_seen');
      } catch {
        // Fallback
      }
      setIsExiting(false);
      setHasEnteredText(false);
      setCanClickToExit(false);
      setIsVisible(true);
    };

    window.addEventListener('replay-welcome-screen', handleReplay);
    window.replayWelcomeIntro = handleReplay;

    return () => {
      window.removeEventListener('replay-welcome-screen', handleReplay);
      delete window.replayWelcomeIntro;
    };
  }, []);

  // Manage body scroll locking, text reveal timing, click-guard, and auto exit
  useEffect(() => {
    if (!isVisible) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Guard against instant accidental clicks on mount (e.g. from Replay button click)
    clickGuardTimerRef.current = setTimeout(() => {
      setCanClickToExit(true);
    }, 700);

    // Trigger text reveal after electrical animation ignites
    textTimerRef.current = setTimeout(() => {
      setHasEnteredText(true);
    }, 500);

    // Auto dismiss after complete cinematic experience (~4.6s)
    autoExitTimerRef.current = setTimeout(() => {
      handleComplete();
    }, 4600);

    // Keyboard support: Esc, Space, or Enter to dismiss immediately
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' || e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        handleComplete();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      if (clickGuardTimerRef.current) clearTimeout(clickGuardTimerRef.current);
      if (textTimerRef.current) clearTimeout(textTimerRef.current);
      if (autoExitTimerRef.current) clearTimeout(autoExitTimerRef.current);
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isVisible]);

  // Complete and exit animation
  const handleComplete = () => {
    if (autoExitTimerRef.current) clearTimeout(autoExitTimerRef.current);
    if (textTimerRef.current) clearTimeout(textTimerRef.current);
    if (clickGuardTimerRef.current) clearTimeout(clickGuardTimerRef.current);

    setIsExiting(true);

    try {
      sessionStorage.setItem('hasna_portfolio_welcome_seen', 'true');
    } catch {
      // Storage error fallback
    }

    // Wait for exit transition to complete before unmounting
    setTimeout(() => {
      setIsVisible(false);
      setIsExiting(false);
      setCanClickToExit(false);
      document.body.style.overflow = '';
    }, 700);
  };

  // Canvas Electrical Animation: PCB Circuit Traces, Energy Surge, & AC Sine Wave
  useEffect(() => {
    if (!isVisible) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initNetwork();
    };
    window.addEventListener('resize', handleResize);

    // Electrical Circuit Bus Traces (radiating from center)
    let traces = [];
    let pulses = [];
    let sparks = [];

    const initNetwork = () => {
      traces = [];
      pulses = [];
      sparks = [];

      const centerX = width / 2;
      const centerY = height / 2;
      const numLines = Math.min(24, Math.floor(width / 60));

      for (let i = 0; i < numLines; i++) {
        const angle = (i / numLines) * Math.PI * 2;
        const r1 = 40 + Math.random() * 50;
        const x1 = centerX + Math.cos(angle) * r1;
        const y1 = centerY + Math.sin(angle) * r1;

        // Orthogonal 45/90 degree bend typical in electrical routing
        const bendLen = 70 + Math.random() * 120;
        const bendAngle = angle + (Math.random() > 0.5 ? Math.PI / 4 : -Math.PI / 4);
        const x2 = x1 + Math.cos(bendAngle) * bendLen;
        const y2 = y1 + Math.sin(bendAngle) * bendLen;

        const endLen = 140 + Math.random() * 260;
        const x3 = x2 + Math.cos(angle) * endLen;
        const y3 = y2 + Math.sin(angle) * endLen;

        traces.push({
          points: [
            { x: centerX, y: centerY },
            { x: x1, y: y1 },
            { x: x2, y: y2 },
            { x: x3, y: y3 },
          ],
          color: i % 3 === 0 ? 'rgba(56, 189, 248, 0.28)' : 'rgba(2, 132, 199, 0.18)',
        });
      }

      // Spark particles
      for (let j = 0; j < 35; j++) {
        sparks.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.6,
          vy: (Math.random() - 0.5) * 0.6,
          size: Math.random() * 1.8 + 0.5,
          alpha: Math.random() * 0.6 + 0.2,
        });
      }
    };

    initNetwork();

    let startTime = performance.now();

    const render = (time) => {
      const elapsed = (time - startTime) / 1000;
      ctx.clearRect(0, 0, width, height);

      const centerX = width / 2;
      const centerY = height / 2;

      // 1. Ambient Central Electrical Glow
      const centerGlow = ctx.createRadialGradient(
        centerX,
        centerY,
        10,
        centerX,
        centerY,
        Math.min(width, height) * 0.45
      );
      centerGlow.addColorStop(0, 'rgba(14, 165, 233, 0.22)');
      centerGlow.addColorStop(0.5, 'rgba(2, 132, 199, 0.08)');
      centerGlow.addColorStop(1, 'rgba(3, 7, 18, 0)');
      ctx.fillStyle = centerGlow;
      ctx.fillRect(0, 0, width, height);

      // 2. Draw Circuit Traces with progressive illumination
      traces.forEach((trace) => {
        ctx.beginPath();
        ctx.moveTo(trace.points[0].x, trace.points[0].y);
        for (let i = 1; i < trace.points.length; i++) {
          ctx.lineTo(trace.points[i].x, trace.points[i].y);
        }
        ctx.strokeStyle = trace.color;
        ctx.lineWidth = 1.2;
        ctx.stroke();

        // Terminal contact pads
        const end = trace.points[trace.points.length - 1];
        ctx.beginPath();
        ctx.arc(end.x, end.y, 2.2, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(56, 189, 248, 0.4)';
        ctx.fill();
      });

      // 3. Electrical Pulses Traveling along traces
      if (Math.random() < 0.12 && pulses.length < 18) {
        const trace = traces[Math.floor(Math.random() * traces.length)];
        if (trace) {
          pulses.push({
            trace,
            progress: 0,
            speed: 0.015 + Math.random() * 0.02,
            size: 2.5 + Math.random() * 2,
            color: Math.random() > 0.2 ? '#38BDF8' : '#F59E0B',
          });
        }
      }

      for (let i = pulses.length - 1; i >= 0; i--) {
        const p = pulses[i];
        p.progress += p.speed;

        if (p.progress >= 1) {
          pulses.splice(i, 1);
          continue;
        }

        // Interpolate along multi-segment path
        const pts = p.trace.points;
        const totalSegments = pts.length - 1;
        const segProgress = p.progress * totalSegments;
        const segIndex = Math.min(Math.floor(segProgress), totalSegments - 1);
        const subT = segProgress - segIndex;

        const pA = pts[segIndex];
        const pB = pts[segIndex + 1];

        const curX = pA.x + (pB.x - pA.x) * subT;
        const curY = pA.y + (pB.y - pA.y) * subT;

        // Glowing electric spark
        ctx.beginPath();
        ctx.arc(curX, curY, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 12;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      // 4. Oscilloscope AC Sine Wave (Representing Power Electronics & Instrumentation)
      const waveY = centerY + 110;
      ctx.beginPath();
      for (let x = 0; x < width; x += 4) {
        // Dynamic Sine calculation with harmonic modulation
        const frequency = 0.012;
        const phase = elapsed * 3.2;
        const envelope = Math.exp(-Math.pow((x - centerX) / (width * 0.38), 2));
        const amplitude = 32 * envelope;
        const y = waveY + Math.sin(x * frequency + phase) * amplitude;

        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.strokeStyle = 'rgba(56, 189, 248, 0.45)';
      ctx.lineWidth = 1.8;
      ctx.shadowColor = '#38BDF8';
      ctx.shadowBlur = 10;
      ctx.stroke();
      ctx.shadowBlur = 0;

      // 5. Ambient Electric Ions / Sparks
      sparks.forEach((s) => {
        s.x += s.vx;
        s.y += s.vy;
        if (s.x < 0) s.x = width;
        if (s.x > width) s.x = 0;
        if (s.y < 0) s.y = height;
        if (s.y > height) s.y = 0;

        const alpha = Math.sin(elapsed * 2 + s.x) * 0.3 + 0.35;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(56, 189, 248, ${alpha})`;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <aside
      role="dialog"
      aria-modal="true"
      aria-label="Selamat Datang di Portofolio Hasna Nabila"
      onClick={() => {
        if (canClickToExit) handleComplete();
      }}
      className={`fixed inset-0 z-[99999] flex flex-col items-center justify-center overflow-hidden select-none transition-all duration-700 ease-out ${
        isExiting
          ? 'opacity-0 scale-105 pointer-events-none filter blur-md'
          : 'opacity-100 scale-100'
      }`}
    >
      {/* Deep Cinematic Electrical Backdrop */}
      <div className="absolute inset-0 bg-[#040814] pointer-events-none">
        {/* Optional video element (if user provides welcome-video.mp4 in public) */}
        <video
          src="/welcome-video.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-25 mix-blend-screen hidden"
          onError={(e) => {
            // Gracefully hide if no video asset is present
            e.currentTarget.style.display = 'none';
          }}
        />

        {/* Ambient Deep Gradients */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-[#0284C7]/20 via-[#0EA5E9]/15 to-transparent rounded-full blur-[120px]" />
        
        {/* Industrial Engineering Circuit Matrix Grid */}
        <div
          className="absolute inset-0 opacity-[0.09]"
          style={{
            backgroundImage: `
              radial-gradient(circle at 1px 1px, rgba(56, 189, 248, 0.4) 1px, transparent 0),
              linear-gradient(to right, rgba(56, 189, 248, 0.08) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(56, 189, 248, 0.08) 1px, transparent 1px)
            `,
            backgroundSize: '32px 32px, 64px 64px, 64px 64px',
          }}
        />
      </div>

      {/* Hardware-accelerated Electrical Motion Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-10"
      />

      {/* Top Controls: Sleek Skip Pill */}
      <div className="absolute top-6 right-6 sm:top-8 sm:right-8 z-30">
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleComplete();
          }}
          className="group relative inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium text-slate-300 bg-white/5 hover:bg-white/10 border border-white/15 hover:border-[#38BDF8]/50 shadow-lg backdrop-blur-md transition-all duration-300 hover:text-white"
          aria-label="Lewati intro"
        >
          <span>Lewati</span>
          <span className="text-[10px] px-1.5 py-0.5 rounded bg-white/10 text-slate-400 group-hover:text-white font-mono">
            ESC
          </span>
          <ChevronRight className="w-3.5 h-3.5 text-[#38BDF8] group-hover:translate-x-0.5 transition-transform" />
        </button>
      </div>

      {/* Center Cinematic Typography Reveal */}
      <div
        className="relative z-20 max-w-2xl w-[92%] sm:w-full mx-auto px-4 text-center"
        onClick={(e) => {
          e.stopPropagation();
          if (canClickToExit) handleComplete();
        }}
      >
        {hasEnteredText && (
          <div className="space-y-4">
            {/* 1. Electrical Major Pill */}
            <div className="animate-text-reveal-1 flex justify-center">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-950/70 border border-sky-400/30 text-[#38BDF8] text-[11px] sm:text-xs font-semibold tracking-widest uppercase shadow-[0_0_20px_rgba(56,189,248,0.25)] backdrop-blur-md">
                <Zap className="w-3.5 h-3.5 text-[#F59E0B] fill-[#F59E0B] animate-pulse" />
                <span>D4 TEKNIK ELEKTRO INDUSTRI • PENS</span>
              </div>
            </div>

            {/* 2. Main Full Name with Cinematic Electric Shimmer */}
            <h1 className="animate-text-reveal-2 text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white drop-shadow-[0_4px_30px_rgba(56,189,248,0.35)]">
              HASNA <span className="electric-title-shimmer">NABILA</span>
            </h1>

            {/* 3. Engineering Focus / Subtitle */}
            <p className="animate-text-reveal-3 text-sm sm:text-base md:text-lg text-slate-300 font-light tracking-wide max-w-xl mx-auto leading-relaxed">
              Electrical Maintenance <span className="text-[#38BDF8] font-bold mx-1.5">•</span> Instrumentation & Control
            </p>

            {/* 4. Elegant Action Enter CTA */}
            <div className="animate-text-reveal-4 pt-4 sm:pt-6">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleComplete();
                }}
                className="group relative inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-[#0284C7] via-[#0EA5E9] to-[#38BDF8] shadow-[0_0_25px_rgba(56,189,248,0.45)] hover:shadow-[0_0_35px_rgba(56,189,248,0.7)] border border-sky-300/40 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
              >
                <span>Masuk ke Portofolio</span>
                <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
              </button>
              <p className="text-[11px] text-slate-500 mt-2 font-light">
                Tekan Spasi, Enter, atau klik untuk melanjutkan
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Technical Spec Footer (Subtle & Clean) */}
      <div className="absolute bottom-6 left-0 right-0 z-20 flex justify-center items-center gap-4 text-[10px] text-slate-500 font-mono tracking-wider pointer-events-none">
        <span>50 Hz AC POWER</span>
        <span>•</span>
        <span>INSTRUMENTATION & CONTROL</span>
        <span>•</span>
        <span>TUBAN, ID</span>
      </div>
    </aside>
  );
}
