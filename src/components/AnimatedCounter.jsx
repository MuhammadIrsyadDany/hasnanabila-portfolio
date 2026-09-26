import React, { useEffect, useState, useRef } from 'react';

export default function AnimatedCounter({ endValue, duration = 1600, decimals = 0, suffix = '', prefix = '' }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          const startTime = performance.now();
          const target = parseFloat(endValue);

          const animate = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Ease out cubic
            const easeOutProgress = 1 - Math.pow(1 - progress, 3);
            const currentCount = easeOutProgress * target;

            setCount(currentCount);

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCount(target);
            }
          };

          requestAnimationFrame(animate);
          observer.unobserve(el);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [endValue, duration, hasAnimated]);

  return (
    <span ref={ref}>
      {prefix}
      {count.toFixed(decimals)}
      {suffix}
    </span>
  );
}
