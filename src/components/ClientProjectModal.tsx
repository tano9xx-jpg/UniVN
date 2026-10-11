import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ExternalLink, ArrowRight, Sparkles, Lightbulb, Shield, Smartphone, Home, Wifi, CheckCircle2 } from 'lucide-react';
import { ClientProjectItem } from '../data/clientProjectsData';

interface ClientProjectModalProps {
  project: ClientProjectItem | null;
  isOpen: boolean;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export const ClientProjectModal: React.FC<ClientProjectModalProps> = ({
  project,
  isOpen,
  onClose,
  onPrev,
  onNext
}) => {
  // Handle ESC key and arrow keys
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, onPrev, onNext]);

  // Lock background scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && project && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-8">
        
        {/* Backdrop Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/65 backdrop-blur-sm cursor-pointer"
        />

        {/* Modal Window Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-5xl bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden border border-slate-200/90 z-10 flex flex-col md:flex-row max-h-[92vh] sm:max-h-[88vh]"
        >
          
          {/* Close Button at Top-Right */}
          <button
            onClick={onClose}
            className="absolute top-3.5 right-3.5 sm:top-5 sm:right-5 z-40 p-2 rounded-full text-slate-400 hover:text-slate-800 hover:bg-slate-100 transition-colors cursor-pointer group"
            title="Đóng popup"
            aria-label="Đóng popup"
          >
            <X className="w-6 h-6 sm:w-7 sm:h-7 group-hover:rotate-90 transition-transform duration-200 stroke-[2]" />
          </button>

          {/* Left Arrow (Prev Client) */}
          <button
            onClick={onPrev}
            className="absolute left-2 sm:left-3.5 top-1/2 -translate-y-1/2 z-40 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/90 hover:bg-white text-[#0baba0] hover:text-[#088c83] border border-slate-200/80 shadow-lg flex items-center justify-center hover:scale-110 active:scale-95 transition-all cursor-pointer"
            title="Dự án trước đó"
            aria-label="Dự án trước đó"
          >
            <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7 stroke-[2.5]" />
          </button>

          {/* Right Arrow (Next Client) */}
          <button
            onClick={onNext}
            className="absolute right-2 sm:right-3.5 top-1/2 -translate-y-1/2 z-40 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/90 hover:bg-white text-[#0baba0] hover:text-[#088c83] border border-slate-200/80 shadow-lg flex items-center justify-center hover:scale-110 active:scale-95 transition-all cursor-pointer"
            title="Dự án tiếp theo"
            aria-label="Dự án tiếp theo"
          >
            <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7 stroke-[2.5]" />
          </button>

          {/* =========================================================================
              LEFT COLUMN: DEVICE SHOWCASE & BRAND LOGO (Matching Screenshot 1:1)
              ========================================================================= */}
          <div className="w-full md:w-1/2 bg-gradient-to-b from-[#edf9f6] via-[#f4faf8] to-white relative p-5 sm:p-7 md:p-8 flex flex-col justify-between items-center border-b md:border-b-0 md:border-r border-slate-100 overflow-hidden">
            
            {/* Ambient Background Glow & Decorative Isometric Graphics */}
            <div className="absolute top-0 left-0 right-0 h-44 bg-gradient-to-b from-[#0baba0]/15 via-[#91c544]/10 to-transparent blur-2xl pointer-events-none" />

            {/* Smart Technology Floating Badges matching Lumi Screenshot */}
            <div className="w-full flex items-center justify-center gap-2 mb-2 relative z-10">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/80 backdrop-blur-md rounded-full border border-teal-200/80 text-[11px] font-bold text-[#088c83] shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-[#91c544]" />
                <span>{project.category}</span>
              </span>
            </div>

            {/* Isometric Smart Room / 3D Device Scene */}
            <div className="relative w-full max-w-sm my-auto py-3 sm:py-5 flex flex-col items-center justify-center">
              
              {/* Floating Green Smart Icons around the device (as seen in Screenshot 2) */}
              <div className="absolute -top-1 left-4 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-600 animate-pulse">
                <Lightbulb className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </div>
              <div className="absolute top-2 right-6 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-teal-500/15 border border-teal-500/30 flex items-center justify-center text-teal-600">
                <Wifi className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </div>
              <div className="absolute -bottom-1 left-8 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-sky-500/15 border border-sky-500/30 flex items-center justify-center text-sky-600">
                <Smartphone className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              </div>
              <div className="absolute bottom-4 right-6 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-lime-500/15 border border-lime-500/30 flex items-center justify-center text-lime-600">
                <Shield className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              </div>

              {/* 3D Angled iPad / Tablet Mockup */}
              <div className="relative w-full max-w-[310px] sm:max-w-[340px] perspective-[1000px] transition-transform duration-500 hover:scale-102">
                
                {/* Device Stand Base Reflection */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-48 sm:w-56 h-4 bg-slate-300/40 rounded-full blur-md" />
                
                {/* White iPad Frame */}
                <div className="relative bg-white rounded-2xl sm:rounded-3xl p-2 sm:p-2.5 pb-3 shadow-2xl border-4 border-slate-200/90 rotate-[-4deg] sm:rotate-[-6deg] hover:rotate-0 transition-transform duration-500">
                  
                  {/* Top Camera Dot */}
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-300 mx-auto mb-1.5" />

                  {/* Tablet Screen Content (Client Website Showcase) */}
                  <div className="w-full h-44 sm:h-52 bg-slate-900 rounded-xl overflow-hidden relative border border-slate-200">
                    
                    {/* Website Live Preview Mockup Header */}
                    <div className="w-full bg-slate-800/90 px-3 py-1.5 flex items-center justify-between text-white text-[9px] border-b border-slate-700/60">
                      <div className="flex items-center gap-1.5 font-bold tracking-tight text-teal-300 truncate">
                        <span>{project.shortName.toUpperCase()}</span>
                      </div>
                      <span className="font-mono text-[8px] text-slate-300 truncate max-w-[130px]">
                        {project.website.replace('https://', '')}
                      </span>
                    </div>

                    {/* Screenshot Hero Banner */}
                    <img
                      src={project.previewImage}
                      alt={project.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80';
                      }}
                    />

                    {/* Device Inset Overlay Card (As in Lumi Screenshot) */}
                    <div className="absolute bottom-2 left-2 right-2 p-2 rounded-lg bg-black/65 backdrop-blur-md text-white border border-white/20">
                      <div className="text-[10px] sm:text-[11px] font-black text-white flex items-center justify-between">
                        <span>{project.shortName} Live Portal</span>
                        <span className="text-[8px] px-1.5 py-0.2 rounded bg-emerald-500 font-bold">100% SEO</span>
                      </div>
                      <div className="text-[8px] sm:text-[9px] text-slate-200 truncate mt-0.5">
                        {project.tagline}
                      </div>
                    </div>
                  </div>

                  {/* White Keyboard / Stand bottom hinge */}
                  <div className="mt-1 flex items-center justify-center">
                    <div className="w-12 h-1 rounded-full bg-slate-300" />
                  </div>
                </div>

                {/* Stylus Pen resting beside the tablet (matching Screenshot 2) */}
                <div className="absolute -right-3 -top-2 w-2 sm:w-2.5 h-36 sm:h-44 bg-gradient-to-b from-white via-slate-100 to-emerald-500 rounded-full shadow-lg border border-slate-300 rotate-[22deg] pointer-events-none hidden sm:block">
                  <div className="w-full h-3 bg-emerald-500 rounded-t-full" />
                </div>

              </div>
            </div>

            {/* Bottom Brand Logo (Matching Screenshot 2 exact styling) */}
            <div className="w-full pt-3 flex items-center justify-center relative z-10">
              {project.id === 'lumi' ? (
                /* Authentic Lumi Green Circular Logo */
                <div className="flex items-center gap-2.5 py-1">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-[3px] border-[#10b981] flex items-center justify-center bg-white shadow-xs">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#10b981]" />
                  </div>
                  <span className="text-2xl sm:text-3xl font-black tracking-tight text-[#10b981] lowercase">
                    lumi<sup className="text-xs font-normal">®</sup>
                  </span>
                </div>
              ) : (
                /* Dynamic Enterprise Brand Logo */
                <div className="flex items-center gap-3 py-1">
                  <div
                    style={{ backgroundColor: project.logoAccent.bg, color: project.logoAccent.text }}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center font-black text-sm sm:text-base shadow-sm border border-slate-200/50"
                  >
                    {project.logoAccent.initials}
                  </div>
                  <div className="text-left">
                    <div className="text-lg sm:text-xl font-black text-slate-900 tracking-tight font-mono">
                      {project.logoText}
                    </div>
                    <div className="text-[10px] text-slate-500 font-medium">
                      Đối tác chiến lược Uni Creation
                    </div>
                  </div>
                </div>
              )}
            </div>

          </div>

          {/* =========================================================================
              RIGHT COLUMN: PROJECT DETAILS, LINKS & CTA (Matching Screenshot 1:1)
              ========================================================================= */}
          <div className="w-full md:w-1/2 p-6 sm:p-8 md:p-10 flex flex-col justify-between overflow-y-auto max-h-[500px] md:max-h-none">
            
            <div className="space-y-4 sm:space-y-5">
              
              {/* Category / Subtitle Badge */}
              <div className="text-[#82ba36] font-bold text-base sm:text-lg tracking-wide flex items-center gap-2">
                <span>{project.badge}</span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-lime-100 text-[#68942b] font-semibold">
                  Chính thức
                </span>
              </div>

              {/* Main Client Name Heading */}
              <h2 className="text-[#088c83] font-black text-2xl sm:text-3xl tracking-tight leading-snug">
                {project.name}
              </h2>

              {/* Tagline Paragraph */}
              <p className="text-slate-800 text-xs sm:text-sm font-medium leading-relaxed">
                {project.tagline}
              </p>

              {/* Main Description */}
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                {project.description}
              </p>

              {/* Partnership Value Delivered */}
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                {project.partnershipNote}
              </p>

              {/* Project Website Links */}
              <div className="pt-2 sm:pt-3 space-y-3 sm:space-y-3.5 border-t border-slate-100">
                
                {/* Link 1: Official Main Website */}
                <div className="space-y-1">
                  <div className="text-xs sm:text-sm font-bold text-slate-800">
                    1 - Website chính thức của {project.shortName}:
                  </div>
                  <a
                    href={project.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#0baba0] hover:text-[#088c83] text-xs sm:text-sm font-semibold hover:underline inline-flex items-center gap-1.5 transition-colors group cursor-pointer"
                  >
                    <span>{project.website}</span>
                    <ExternalLink className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100 transition-opacity" />
                  </a>
                </div>

                {/* Link 2: Sub-websites / Specialized Systems (if available) */}
                {project.subWebsites && project.subWebsites.length > 0 && (
                  project.subWebsites.map((sub, idx) => (
                    <div key={idx} className="space-y-1">
                      <div className="text-xs sm:text-sm font-bold text-slate-800">
                        {idx + 2} - {sub.label}:
                      </div>
                      <a
                        href={sub.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#0baba0] hover:text-[#088c83] text-xs sm:text-sm font-semibold hover:underline inline-flex items-center gap-1.5 transition-colors group cursor-pointer"
                      >
                        <span>{sub.url}</span>
                        <ExternalLink className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100 transition-opacity" />
                      </a>
                    </div>
                  ))
                )}

              </div>

            </div>

            {/* Bottom Action Button "Xem thực tế ⇥" */}
            <div className="pt-6 mt-4 sm:mt-6 border-t border-slate-100 flex items-center justify-between">
              <a
                href={project.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 sm:px-8 py-2.5 sm:py-3 rounded-full btn-brand-gradient text-white text-xs sm:text-sm font-bold shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all cursor-pointer group"
              >
                <span>Xem thực tế</span>
                <span className="group-hover:translate-x-1 transition-transform">⇥</span>
              </a>

              <div className="flex items-center gap-1.5 text-xs text-slate-400 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>Dự án đã bàn giao</span>
              </div>
            </div>

          </div>

        </motion.div>

      </div>
    )}
  </AnimatePresence>
);
};
