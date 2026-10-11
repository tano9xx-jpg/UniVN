import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

interface BackToTopButtonProps {
  heroElementId?: string;
  scrollThreshold?: number;
}

export const BackToTopButton: React.FC<BackToTopButtonProps> = ({
  heroElementId = 'hero-section',
  scrollThreshold = 450
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollPx = window.scrollY || document.documentElement.scrollTop;
          const winHeight = window.innerHeight;
          const docHeight = document.documentElement.scrollHeight;
          const totalScrollable = docHeight - winHeight;

          // Calculate current scroll percentage for SVG progress circle
          if (totalScrollable > 0) {
            const currentProgress = Math.min(100, Math.max(0, (scrollPx / totalScrollable) * 100));
            setScrollProgress(currentProgress);
          }

          // Check whether the user has scrolled past the hero section
          const heroEl = document.getElementById(heroElementId) || document.getElementById('hero-main-section');
          if (heroEl) {
            const rect = heroEl.getBoundingClientRect();
            // Button appears strictly after the hero section has scrolled past the top
            setIsVisible(rect.bottom <= 60);
          } else {
            // Fallback for views without a hero section (About, Pricing, Themes, etc.)
            setIsVisible(scrollPx > scrollThreshold);
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    // Initial check
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [heroElementId, scrollThreshold]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // SVG Circular progress math (viewBox 0 0 44 44, radius 18)
  const radius = 18;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 20 }}
          transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-36 right-4 sm:bottom-34 sm:right-6 z-40 flex items-center group pointer-events-auto"
        >
          {/* Tooltip on hover (desktop) */}
          <span className="hidden sm:inline-block pointer-events-none opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-200 mr-2.5 px-2.5 py-1.5 bg-slate-900/90 backdrop-blur-sm text-white text-[11px] font-bold rounded-xl shadow-lg whitespace-nowrap border border-slate-700/50">
            Lên đầu trang
          </span>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.94 }}
            className="relative w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-white/95 hover:bg-white text-slate-700 hover:text-[#0baba0] shadow-xl hover:shadow-2xl border border-slate-200/90 hover:border-[#0baba0]/50 transition-colors duration-200 cursor-pointer focus:outline-none focus:ring-4 focus:ring-[#0baba0]/25 backdrop-blur-md"
            aria-label="Cuộn lên đầu trang"
            title="Lên đầu trang"
          >
            {/* SVG Circular Scroll Progress Ring */}
            <svg
              className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none p-0.5"
              viewBox="0 0 44 44"
            >
              {/* Background Ring Track */}
              <circle
                cx="22"
                cy="22"
                r={radius}
                className="stroke-slate-200/70"
                strokeWidth="2.5"
                fill="none"
              />
              {/* Dynamic Progress Stroke */}
              <circle
                cx="22"
                cy="22"
                r={radius}
                className="stroke-[#0baba0] transition-[stroke-dashoffset] duration-150 ease-out"
                strokeWidth="2.5"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
                fill="none"
              />
            </svg>

            {/* Up Arrow Icon with hover elevation effect */}
            <ArrowUp className="w-5 h-5 text-slate-700 group-hover:text-[#0baba0] transition-transform duration-200 group-hover:-translate-y-0.5" />
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
