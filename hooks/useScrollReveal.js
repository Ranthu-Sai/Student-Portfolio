// Placeholder hook for future scroll-reveal effects. Currently unused.
import { useEffect } from 'react';

export default function useScrollReveal(selector, options = {}) {
  useEffect(() => {
    const elements = typeof selector === 'string' ? document.querySelectorAll(selector) : selector;
    if (!elements || !('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2, ...options }
    );

    elements.forEach?.(el => observer.observe(el));
    return () => observer.disconnect();
  }, [selector]);
}
