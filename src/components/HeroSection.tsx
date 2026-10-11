import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  ShieldCheck,
  Zap,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Play,
  Pause,
  Globe,
  Server,
  Mail,
  Gift,
  Layers,
  Check,
  Gauge,
  Search,
  Bell,
  HardDrive,
  BarChart3
} from 'lucide-react';

interface HeroSectionProps {
  onExploreThemes: () => void;
  onViewPricing: () => void;
  onOpenCalculator: () => void;
  onNavigateToService?: (slug: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreThemes,
  onViewPricing,
  onOpenCalculator,
  onNavigateToService
}) => {
  const [[currentSlide, direction], setSlideState] = useState<[number, number]>([0, 0]);
  const [isPlaying, setIsPlaying] = useState(true);

  const slides = [
    {
      id: 'slide-web-design',
      badge: 'Web Chuẩn SEO',
      mobileName: 'Web SEO',
      titleMain: 'Thiết Kế Website Chuẩn SEO,',
      titleHighlight: 'Bứt Phá Doanh Số Online',
      description: 'Giao diện độc quyền chuẩn UI/UX, tốc độ tải dưới 0.8 giây, chuẩn Mobile 100% và bảo hành kỹ thuật trọn đời.',
      primaryLabel: 'Khám Phá Mẫu Web',
      primaryAction: onExploreThemes,
      secondaryLabel: 'Xem Báo Giá Trọn Gói',
      secondaryAction: onViewPricing,
      type: 'web-design',
      icon: Globe
    },
    {
      id: 'slide-cloud-infra',
      badge: 'Cloud Pure NVMe',
      mobileName: 'Cloud NVMe',
      titleMain: 'Máy Chủ NVMe Siêu Tốc &',
      titleHighlight: 'Email Google Doanh Nghiệp',
      description: 'Hạ tầng NVMe 3.400+ MB/s tại Viettel IDC & VNPT, Uptime 99.99%, tường lửa WAF và bảo mật Google Workspace.',
      primaryLabel: 'Gói Hosting NVMe',
      primaryAction: () => (onNavigateToService ? onNavigateToService('dich-vu-hosting') : onViewPricing()),
      secondaryLabel: 'Tra Cứu Tên Miền',
      secondaryAction: () => (onNavigateToService ? onNavigateToService('dich-vu-ten-mien') : onViewPricing()),
      type: 'cloud-infra',
      icon: Server
    },
    {
      id: 'slide-startup-combo',
      badge: 'Gói Khởi Nghiệp 2.5Tr',
      mobileName: 'Gói 2.5Tr',
      titleMain: 'Website Doanh Nghiệp Trọn Gói,',
      titleHighlight: 'Chỉ Từ 2.500.000 đ',
      description: 'Tặng kèm tên miền quốc tế .COM và hosting SSD 1 năm. Bàn giao nhanh 24 - 48h, bàn giao full mã nguồn.',
      primaryLabel: 'Nhận Ưu Đãi 2.5Tr',
      primaryAction: onViewPricing,
      secondaryLabel: 'Dự Toán Chi Phí',
      secondaryAction: onOpenCalculator,
      type: 'startup',
      icon: Gift
    },
    {
      id: 'slide-themes-gallery',
      badge: 'Kho 180+ Mẫu Web',
      mobileName: '180+ Mẫu Web',
      titleMain: 'Kho Giao Diện Mới Nhất,',
      titleHighlight: 'Đa Dạng Hơn 30+ Ngành',
      description: 'Bán hàng, Bất động sản, Nội thất, Xây dựng, Spa... Trải nghiệm trực quan trên đa thiết bị và tùy biến tức thì.',
      primaryLabel: 'Xem Toàn Bộ 180+ Mẫu',
      primaryAction: onExploreThemes,
      secondaryLabel: 'Tư Vấn Chọn Mẫu',
      secondaryAction: onOpenCalculator,
      type: 'themes',
      icon: Layers
    }
  ];

  // Auto-play timer
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isPlaying) {
      timer = setInterval(() => {
        setSlideState(([prev]) => [(prev + 1) % slides.length, 1]);
      }, 6000);
    }
    return () => clearInterval(timer);
  }, [isPlaying, slides.length]);

  const paginate = (newDirection: number) => {
    setSlideState(([prev]) => {
      let next = prev + newDirection;
      if (next < 0) next = slides.length - 1;
      if (next >= slides.length) next = 0;
      return [next, newDirection];
    });
  };

  const goToSlide = (index: number) => {
    setSlideState(([prev]) => [index, index > prev ? 1 : -1]);
  };

  const slide = slides[currentSlide];

  // Slide entrance variants
  const slideVariants = {
    enter: (dir: number) => ({
      y: dir > 0 ? 25 : -25,
      opacity: 0,
      filter: 'blur(3px)'
    }),
    center: {
      y: 0,
      opacity: 1,
      filter: 'blur(0px)',
      transition: {
        y: { type: 'spring' as const, stiffness: 280, damping: 28 },
        opacity: { duration: 0.35 },
        filter: { duration: 0.25 }
      }
    },
    exit: (dir: number) => ({
      y: dir > 0 ? -25 : 25,
      opacity: 0,
      filter: 'blur(3px)',
      transition: {
        duration: 0.25,
        ease: 'easeInOut' as const
      }
    })
  };

  return (
    <section id="hero-main-section" className="relative overflow-x-hidden w-full min-h-[calc(100vh-98px)] flex flex-col justify-between pt-24 sm:pt-28 lg:pt-32 pb-0 select-none bg-gradient-to-b from-[#bfe0fa]/70 via-[#e0f2fe]/50 to-white">
      
      {/* =========================================================================
          SKY & REALISTIC CLOUDS ATMOSPHERE
          ========================================================================= */}
      
      {/* Top Left Puffy Cloud Formation */}
      <motion.div
        animate={{
          x: [0, 20, 0],
          y: [0, -8, 0],
          opacity: [0.85, 0.95, 0.85]
        }}
        transition={{ repeat: Infinity, duration: 14, ease: 'easeInOut' }}
        className="absolute top-0 -left-16 sm:-left-8 pointer-events-none -z-10"
      >
        <div className="relative w-80 sm:w-[420px] h-48 sm:h-64">
          <div className="absolute top-4 left-6 w-56 h-36 bg-white/80 rounded-full blur-2xl" />
          <div className="absolute top-10 left-32 w-64 h-44 bg-white/90 rounded-full blur-xl" />
          <div className="absolute top-0 left-0 w-44 h-44 bg-sky-100/60 rounded-full blur-3xl" />
          <svg className="w-full h-full opacity-70 filter drop-shadow-sm" viewBox="0 0 400 240" fill="white">
            <path d="M70,180 Q40,180 30,150 Q20,120 50,100 Q60,70 100,70 Q130,40 180,50 Q230,30 270,70 Q320,60 340,100 Q380,120 370,160 Q360,180 320,180 Z" />
          </svg>
        </div>
      </motion.div>

      {/* Top Right Puffy Cloud Formation */}
      <motion.div
        animate={{
          x: [0, -20, 0],
          y: [0, 10, 0],
          opacity: [0.85, 0.95, 0.85]
        }}
        transition={{ repeat: Infinity, duration: 16, ease: 'easeInOut', delay: 1 }}
        className="absolute top-0 -right-16 sm:-right-8 pointer-events-none -z-10"
      >
        <div className="relative w-80 sm:w-[440px] h-48 sm:h-64">
          <div className="absolute top-6 right-8 w-60 h-40 bg-white/85 rounded-full blur-2xl" />
          <div className="absolute top-12 right-36 w-64 h-44 bg-white/90 rounded-full blur-xl" />
          <div className="absolute top-0 right-0 w-48 h-48 bg-sky-100/70 rounded-full blur-3xl" />
          <svg className="w-full h-full opacity-70 filter drop-shadow-sm" viewBox="0 0 400 240" fill="white">
            <path d="M120,180 Q80,180 60,150 Q40,120 80,100 Q100,60 150,60 Q190,30 240,50 Q290,40 320,80 Q360,80 370,120 Q380,160 330,180 Z" />
          </svg>
        </div>
      </motion.div>

      {/* Center Sky Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-56 bg-gradient-to-b from-white/70 via-white/30 to-transparent blur-3xl pointer-events-none -z-10" />

      {/* =========================================================================
          MAIN HERO TOP CONTENT (Clean Centered Typography & Action Buttons)
          ========================================================================= */}
      <div className="max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center relative z-10 flex-none space-y-3 sm:space-y-3.5">
        
        {/* Subtle Top Micro Tag */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-white/80 backdrop-blur-md rounded-full border border-sky-200/80 text-xs font-semibold text-[#088c83] shadow-2xs">
          <Sparkles className="w-3.5 h-3.5 text-[#91c544]" />
          <span>Giải Pháp Công Nghệ Số Hàng Đầu 2026 · Uni Creation</span>
        </div>

        {/* Dynamic Animated Headline & Subtitle */}
        <AnimatePresence custom={direction} initial={false} mode="wait">
          <motion.div
            key={slide.id}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="w-full max-w-4xl space-y-2 sm:space-y-2.5"
          >
            {/* Centered Large Headline */}
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-[52px] font-extrabold text-slate-900 tracking-tight leading-[1.2] px-2">
              {slide.titleMain}{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0baba0] via-[#099a90] to-[#82ba36]">
                {slide.titleHighlight}
              </span>
            </h1>

            {/* Centered Short Subtitle */}
            <p className="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed max-w-xl mx-auto font-normal px-2">
              {slide.description}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Dual Centered Pill Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 pt-0.5 w-full sm:w-auto">
          {/* Primary Pill Button */}
          <button
            onClick={slide.primaryAction}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-2.5 sm:py-3 rounded-full btn-brand-gradient text-white text-xs sm:text-sm font-bold shadow-lg shadow-[#0baba0]/25 hover:shadow-xl hover:scale-105 active:scale-95 transition-all cursor-pointer whitespace-nowrap"
          >
            <span>{slide.primaryLabel}</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          {/* Secondary Pill Button with Live Pulsing Green Dot (Bright elegant style) */}
          <button
            onClick={slide.secondaryAction}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-white/95 hover:bg-white text-slate-800 hover:text-[#088c83] text-xs sm:text-sm font-semibold shadow-md shadow-teal-900/10 hover:shadow-lg border-2 border-[#0baba0]/30 hover:border-[#0baba0] hover:scale-105 active:scale-95 transition-all cursor-pointer whitespace-nowrap backdrop-blur-sm"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shrink-0 ring-2 ring-emerald-200" />
            <span>{slide.secondaryLabel}</span>
          </button>
        </div>

      </div>

      {/* =========================================================================
          DEVICE SHOWCASE CENTERPIECE (Display Mockup with Ultra-Thin Bezel)
          ========================================================================= */}
      <div className="relative w-full max-w-5xl mx-auto px-2 sm:px-6 lg:px-8 mt-2.5 sm:mt-5 flex-1 flex flex-col items-center justify-end">
        
        {/* Main Floating Container (Screen + Overlapping 4 Buttons float together smoothly) */}
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
          className="relative w-full flex flex-col items-center select-none"
        >

          {/* PRIMARY DISPLAY MOCKUP: ULTRA-THIN SLEEK BEZEL, AMBIENT DEPTH MIST & CRISP BORDER */}
          <div className="w-full max-w-3xl lg:max-w-4xl rounded-2xl sm:rounded-3xl p-[2px] sm:p-[3px] bg-slate-800/90 border border-slate-300/50 shadow-2xl shadow-sky-950/20 relative z-20">
            
            {/* Soft Ambient Depth Mist Glow behind the screen */}
            <div className="absolute -inset-2 rounded-3xl bg-sky-400/20 blur-xl pointer-events-none -z-10" />

            {/* Depth Mist Overlays gently veiling the outer borders for 3D realism */}
            <div className="absolute -top-1 bottom-0 -left-1 w-3 sm:w-5 bg-gradient-to-r from-sky-200/50 via-sky-100/20 to-transparent blur-[2px] pointer-events-none z-30" />
            <div className="absolute -top-1 bottom-0 -right-1 w-3 sm:w-5 bg-gradient-to-l from-sky-200/50 via-sky-100/20 to-transparent blur-[2px] pointer-events-none z-30" />
            <div className="absolute -top-1 left-0 right-0 h-3 sm:h-4 bg-gradient-to-b from-sky-200/50 via-sky-100/20 to-transparent blur-[2px] pointer-events-none z-30" />
            <div className="absolute inset-0 rounded-2xl sm:rounded-3xl pointer-events-none z-30 shadow-[inset_0_0_10px_rgba(255,255,255,0.45)]" />

            {/* Inner Dashboard Canvas */}
            <div className="w-full bg-white rounded-[13px] sm:rounded-[20px] overflow-hidden border border-slate-200/90">
              
              {/* Device Top Bar */}
              <div className="px-3 sm:px-6 py-2 sm:py-2.5 bg-slate-50/90 border-b border-slate-200/80 flex items-center justify-between">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-lg bg-gradient-to-tr from-[#0baba0] to-[#91c544] flex items-center justify-center text-white font-black text-xs shadow-xs">
                    ✦
                  </div>
                  <span className="text-xs sm:text-sm font-extrabold text-slate-900 tracking-tight">
                    Uni Creation
                  </span>
                  <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                    Live Demo
                  </span>
                </div>

                <div className="hidden md:flex items-center gap-2 px-3 py-1 bg-white rounded-full border border-slate-200 text-slate-400 text-xs shadow-2xs w-64">
                  <Search className="w-3.5 h-3.5 text-slate-400" />
                  <span className="text-[11px] font-mono text-slate-500 truncate">univn.vn/du-an-2026</span>
                </div>

                <div className="flex items-center gap-2 sm:gap-3">
                  <button className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-slate-900 text-xs shadow-2xs">
                    <Bell className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                  </button>
                  <div className="flex items-center gap-1.5 pl-1">
                    <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#0baba0]/20 border border-[#0baba0]/40 flex items-center justify-center text-[#088c83] font-bold text-[11px] sm:text-xs">
                      UN
                    </div>
                    <span className="text-xs font-bold text-slate-700 hidden lg:inline">
                      Uni Creation VN
                    </span>
                  </div>
                </div>
              </div>

              {/* Main Dashboard Canvas Body (fixed height & consistent layout so frame never jumps) */}
              <div className="relative p-3.5 sm:p-5 md:p-6 pb-6 sm:pb-8 md:pb-9 bg-gradient-to-b from-white to-slate-50/60 h-[305px] sm:h-[325px] md:h-[335px] overflow-hidden">
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={slide.id}
                    custom={direction}
                    initial={{ opacity: 0, x: direction > 0 ? 30 : -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: direction > 0 ? -30 : 30 }}
                    transition={{ duration: 0.32, ease: [0.25, 0.1, 0.25, 1.0] }}
                    className="w-full space-y-3"
                  >
                
                    {/* SLIDE 1: Web Design Analytics Dashboard */}
                    {slide.type === 'web-design' && (
                      <div className="space-y-3">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 pb-2 border-b border-slate-100">
                          <div>
                            <h3 className="text-sm sm:text-lg font-extrabold text-slate-900 flex items-center gap-2">
                              <span>Bảng Điều Khiển Hiệu Suất</span>
                              <span className="text-[10px] sm:text-xs font-semibold px-2 py-0.5 rounded-md bg-teal-50 text-[#088c83] border border-teal-200">
                                Chuẩn SEO 100%
                              </span>
                            </h3>
                            <p className="text-[11px] sm:text-xs text-slate-500 hidden sm:block">
                              Hệ thống website tối ưu chuyển đổi và đo lường trực quan thời gian thực.
                            </p>
                          </div>

                          <div className="flex items-center gap-2">
                            <button
                              onClick={onExploreThemes}
                              className="px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg btn-brand-gradient text-white text-[11px] sm:text-xs font-bold shadow-xs cursor-pointer hover:opacity-95"
                            >
                              Trải nghiệm ngay
                            </button>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-12 gap-2.5 sm:gap-3.5">
                          <div className="md:col-span-8 p-3 sm:p-4 rounded-2xl bg-white border border-slate-200/90 shadow-xs space-y-2">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <BarChart3 className="w-4 h-4 text-[#0baba0]" />
                                <span className="text-[11px] sm:text-xs font-bold text-slate-800">Lưu lượng & Đơn hàng</span>
                              </div>
                              <span className="text-[9px] sm:text-[10px] font-mono text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md font-bold">
                                +48.64% Tăng trưởng
                              </span>
                            </div>

                            <div className="h-20 sm:h-28 flex items-end justify-between gap-1 sm:gap-2.5 pt-1 px-1">
                              {[35, 45, 60, 40, 75, 95, 80, 65, 88, 100, 78, 92].map((val, idx) => (
                                <div key={idx} className="flex-1 flex flex-col items-center gap-1 h-full justify-end group">
                                  <div
                                    style={{ height: `${val}%` }}
                                    className={`w-full rounded-t-md transition-all duration-300 ${
                                      idx === 9
                                        ? 'bg-gradient-to-t from-[#0baba0] to-[#91c544] shadow-sm'
                                        : 'bg-slate-200/80 group-hover:bg-[#0baba0]/40'
                                    }`}
                                  />
                                  <span className="text-[7px] sm:text-[9px] text-slate-400 font-mono">
                                    T{idx + 1}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div className="md:col-span-4 grid grid-cols-2 md:grid-cols-1 gap-2">
                            <div className="p-2 sm:p-3 rounded-2xl bg-white border border-slate-200/90 shadow-xs flex items-center justify-between">
                              <div>
                                <div className="text-[9px] sm:text-[10px] text-slate-400 font-bold uppercase">PageSpeed</div>
                                <div className="text-base sm:text-xl font-black text-[#91c544]">99 / 100</div>
                                <div className="text-[8px] sm:text-[9px] text-emerald-600 font-medium">Core Vitals</div>
                              </div>
                              <div className="w-8 sm:w-9 h-8 sm:h-9 rounded-xl bg-lime-100 flex items-center justify-center text-[#82ba36]">
                                <Gauge className="w-4 h-4" />
                              </div>
                            </div>

                            <div className="p-2 sm:p-3 rounded-2xl bg-white border border-slate-200/90 shadow-xs flex items-center justify-between">
                              <div>
                                <div className="text-[9px] sm:text-[10px] text-slate-400 font-bold uppercase">Tốc độ tải</div>
                                <div className="text-base sm:text-xl font-black text-[#0baba0]">&lt; 0.8s</div>
                                <div className="text-[8px] sm:text-[9px] text-[#088c83] font-medium">Phản hồi 100%</div>
                              </div>
                              <div className="w-8 sm:w-9 h-8 sm:h-9 rounded-xl bg-teal-100 flex items-center justify-center text-[#088c83]">
                                <Zap className="w-4 h-4" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* SLIDE 2: Cloud Infrastructure */}
                    {slide.type === 'cloud-infra' && (
                      <div className="space-y-3">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 pb-2 border-b border-slate-100">
                          <div>
                            <h3 className="text-sm sm:text-lg font-extrabold text-slate-900 flex items-center gap-2">
                              <span>Máy Chủ Pure NVMe Enterprise</span>
                              <span className="text-[10px] sm:text-xs font-semibold px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200">
                                Uptime 99.99%
                              </span>
                            </h3>
                            <p className="text-[11px] sm:text-xs text-slate-500 hidden sm:block">
                              Hạ tầng tại Viettel IDC & VNPT Data Center, tốc độ đọc ghi 3.400+ MB/s.
                            </p>
                          </div>

                          <span className="text-[10px] sm:text-xs font-bold text-teal-700 bg-teal-50 px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg border border-teal-200/70">
                            Ping 1ms Siêu Tốc
                          </span>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3">
                          <div className="p-2.5 sm:p-3.5 rounded-2xl bg-white border border-slate-200/90 shadow-xs space-y-1">
                            <div className="flex items-center justify-between">
                              <span className="text-xs font-bold text-slate-800">Tốc độ NVMe</span>
                              <HardDrive className="w-4 h-4 text-cyan-600" />
                            </div>
                            <div className="text-lg sm:text-2xl font-black text-cyan-600 font-mono">3.420 MB/s</div>
                            <div className="text-[9px] text-slate-500">Chuẩn U.2 Enterprise</div>
                          </div>

                          <div className="p-2.5 sm:p-3.5 rounded-2xl bg-white border border-slate-200/90 shadow-xs space-y-1">
                            <div className="flex items-center justify-between">
                              <span className="text-xs font-bold text-slate-800">Email Workspace</span>
                              <Mail className="w-4 h-4 text-[#0baba0]" />
                            </div>
                            <div className="text-lg sm:text-2xl font-black text-[#0baba0] font-mono">Inbox 99.9%</div>
                            <div className="text-[9px] text-slate-500">Bảo mật 2FA 2 lớp</div>
                          </div>

                          <div className="p-2.5 sm:p-3.5 rounded-2xl bg-white border border-slate-200/90 shadow-xs space-y-1">
                            <div className="flex items-center justify-between">
                              <span className="text-xs font-bold text-slate-800">Tường Lửa WAF</span>
                              <ShieldCheck className="w-4 h-4 text-emerald-600" />
                            </div>
                            <div className="text-lg sm:text-2xl font-black text-emerald-600 font-mono">24/7 Active</div>
                            <div className="text-[9px] text-slate-500">Chống DDoS tự động</div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* SLIDE 3: Startup Offer Package (Rich Deliverables & Zero Awkward Whitespace) */}
                    {slide.type === 'startup' && (
                      <div className="space-y-3">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 pb-2 border-b border-slate-100">
                          <div>
                            <h3 className="text-sm sm:text-lg font-extrabold text-slate-900 flex items-center gap-2">
                              <span>Gói Khởi Nghiệp Trọn Gói 2026</span>
                              <span className="text-[10px] sm:text-xs font-bold px-2 py-0.5 rounded-md bg-[#91c544] text-white">
                                ƯU ĐÃI
                              </span>
                            </h3>
                            <p className="text-[11px] sm:text-xs text-slate-500 hidden sm:block">
                              Bàn giao chìa khóa trao tay: giao diện, tên miền, hosting và trọn bộ mã nguồn gốc.
                            </p>
                          </div>

                          <div className="text-right">
                            <span className="text-[9px] text-slate-400 uppercase font-bold">Trọn gói chỉ:</span>
                            <div className="text-base sm:text-xl font-black text-[#088c83]">2.500.000 đ</div>
                          </div>
                        </div>

                        {/* 6 High-Value Deliverable Cards */}
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-2.5">
                          <div className="p-2 sm:p-2.5 rounded-xl bg-teal-50/70 border border-teal-200/80 space-y-0.5">
                            <div className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                              <Check className="w-3.5 h-3.5 text-[#0baba0] shrink-0" /> Tên Miền .COM
                            </div>
                            <div className="text-[10px] text-slate-600">Miễn phí 1 năm quốc tế chính chủ</div>
                          </div>

                          <div className="p-2 sm:p-2.5 rounded-xl bg-teal-50/70 border border-teal-200/80 space-y-0.5">
                            <div className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                              <Check className="w-3.5 h-3.5 text-[#0baba0] shrink-0" /> Hosting NVMe SSD
                            </div>
                            <div className="text-[10px] text-slate-600">Miễn phí 1 năm tốc độ 3.400MB/s</div>
                          </div>

                          <div className="p-2 sm:p-2.5 rounded-xl bg-teal-50/70 border border-teal-200/80 space-y-0.5">
                            <div className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                              <Check className="w-3.5 h-3.5 text-[#0baba0] shrink-0" /> Full Mã Nguồn Gốc
                            </div>
                            <div className="text-[10px] text-slate-600">Bàn giao 100% source, không mã hóa</div>
                          </div>

                          <div className="p-2 sm:p-2.5 rounded-xl bg-emerald-50/70 border border-emerald-200/80 space-y-0.5">
                            <div className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                              <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" /> Chuẩn SEO & Mobile
                            </div>
                            <div className="text-[10px] text-slate-600">Google PageSpeed &gt;90 điểm tối ưu</div>
                          </div>

                          <div className="p-2 sm:p-2.5 rounded-xl bg-emerald-50/70 border border-emerald-200/80 space-y-0.5">
                            <div className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                              <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" /> Nút Chốt Sale Đa Kênh
                            </div>
                            <div className="text-[10px] text-slate-600">Tích hợp Zalo, Hotline & Messenger</div>
                          </div>

                          <div className="p-2 sm:p-2.5 rounded-xl bg-emerald-50/70 border border-emerald-200/80 space-y-0.5">
                            <div className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                              <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" /> Bảo Hành Trọn Đời
                            </div>
                            <div className="text-[10px] text-slate-600">Hỗ trợ kỹ thuật 24/7 & sao lưu định kỳ</div>
                          </div>
                        </div>

                        {/* Bottom Deliverable Guarantee Badge */}
                        <div className="flex items-center justify-between px-3 py-1.5 bg-slate-50 rounded-lg border border-slate-200/80 text-[10px] text-slate-600">
                          <div className="flex items-center gap-1.5 font-medium">
                            <Zap className="w-3.5 h-3.5 text-[#0baba0]" />
                            <span>Bàn giao chìa khóa trao tay: <strong className="text-slate-800">24h - 48h</strong></span>
                          </div>
                          <span className="font-semibold text-emerald-600">✓ Tặng SSL 256-Bit Vĩnh Viễn</span>
                        </div>
                      </div>
                    )}

                    {/* SLIDE 4: Theme Explorer Gallery (Reliable Images & Zero Height Jump) */}
                    {slide.type === 'themes' && (
                      <div className="space-y-3">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 pb-2 border-b border-slate-100">
                          <div>
                            <h3 className="text-sm sm:text-lg font-extrabold text-slate-900 flex items-center gap-2">
                              <span>Kho 180+ Mẫu Giao Diện</span>
                              <span className="text-[10px] sm:text-xs font-semibold px-2 py-0.5 rounded-md bg-teal-50 text-[#088c83] border border-teal-200">
                                30+ Ngành
                              </span>
                            </h3>
                            <p className="text-[11px] sm:text-xs text-slate-500 hidden sm:block">
                              Xem trước trực quan, tùy biến theo nhận diện thương hiệu.
                            </p>
                          </div>

                          <button
                            onClick={onExploreThemes}
                            className="px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg btn-brand-gradient text-white text-[11px] sm:text-xs font-bold cursor-pointer"
                          >
                            Khám phá kho mẫu
                          </button>
                        </div>

                        <div className="grid grid-cols-4 gap-1.5 sm:gap-2.5">
                          {[
                            { title: 'Tuấn Hồng Tiles', cat: 'Xây dựng', img: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=400&q=80' },
                            { title: 'Miyagi Furniture', cat: 'Nội thất', img: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=400&q=80' },
                            { title: 'Green Pharmacy', cat: 'Dược phẩm', img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=400&q=80' },
                            { title: 'Aura Luxury Spa', cat: 'Làm đẹp', img: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=400&q=80' }
                          ].map((item, i) => (
                            <div key={i} className="rounded-xl overflow-hidden border border-slate-200 bg-white group cursor-pointer hover:border-[#0baba0] transition-colors">
                              <div className="h-14 sm:h-20 bg-slate-100 overflow-hidden relative">
                                <img
                                  src={item.img}
                                  alt={item.title}
                                  onError={(e) => {
                                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=400&q=80';
                                  }}
                                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                              </div>
                              <div className="p-1 sm:p-1.5 text-left">
                                <div className="text-[9px] sm:text-[10px] font-bold text-slate-800 truncate">{item.title}</div>
                                <div className="text-[7.5px] sm:text-[8px] text-[#0baba0] font-semibold truncate">{item.cat}</div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                  </motion.div>
                </AnimatePresence>

              </div>
            </div>
          </div>

          {/* 4 BUTTONS DOCK - VERTICALLY CENTERED ON THE BOTTOM BORDER OF THE SCREEN (STRADDLING THE BORDER) */}
          <div className="w-full max-w-3xl lg:max-w-4xl px-3 sm:px-6 relative z-30 -translate-y-1/2">
            <div className="w-full bg-white/95 backdrop-blur-xl rounded-xl sm:rounded-2xl border border-slate-200/90 shadow-[0_14px_35px_-4px_rgba(15,23,42,0.18),0_4px_16px_-2px_rgba(15,23,42,0.1)] hover:shadow-[0_18px_42px_-4px_rgba(15,23,42,0.22)] ring-1 ring-black/5 transition-all p-1 sm:p-1.5">
              <div className="grid grid-cols-4 gap-1 sm:gap-2 w-full">
                {slides.map((s, idx) => {
                  const Icon = s.icon;
                  const isActive = currentSlide === idx;
                  return (
                    <button
                      key={s.id}
                      onClick={() => goToSlide(idx)}
                      className={`relative flex items-center justify-center gap-1 sm:gap-2 py-2 sm:py-3 px-1 sm:px-3 rounded-lg sm:rounded-xl text-[11px] sm:text-xs md:text-sm font-bold transition-all duration-200 cursor-pointer text-center w-full ${
                        isActive
                          ? 'text-white shadow-md shadow-[#0baba0]/25'
                          : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
                      }`}
                    >
                      {isActive && (
                        <motion.div
                          layoutId="heroSlideActivePillBottom"
                          className="absolute inset-0 btn-brand-gradient rounded-lg sm:rounded-xl -z-0"
                          transition={{ type: 'spring', stiffness: 240, damping: 28, mass: 0.6 }}
                        />
                      )}
                      <span className="relative z-10 flex items-center justify-center gap-1 sm:gap-2 truncate">
                        <Icon className={`w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0 ${isActive ? 'text-white' : 'text-[#0baba0]'}`} />
                        <span className="hidden sm:inline truncate">{s.badge}</span>
                        <span className="sm:hidden text-[10px] sm:text-[11px] truncate">{s.mobileName}</span>
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

        </motion.div>

      </div>

      {/* =========================================================================
          CONTROLS & CONNECTOR TO ABOUT US SECTION (30px Spacing Below Text)
          ========================================================================= */}
      <div className="relative z-30 w-full max-w-3xl lg:max-w-4xl mx-auto px-4 mt-2 sm:mt-3 pb-[30px] flex flex-col items-center gap-3">
        
        {/* Play/Pause & Chevrons & Dots Controls */}
        <div className="flex items-center justify-center gap-3">
          <button
            onClick={() => paginate(-1)}
            className="p-1 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
            title="Slide trước"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          
          <div className="flex items-center gap-1.5">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => goToSlide(i)}
                className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                  currentSlide === i ? 'w-5 bg-[#0baba0]' : 'w-1.5 bg-slate-300 hover:bg-slate-400'
                }`}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={() => paginate(1)}
            className="p-1 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
            title="Slide tiếp theo"
          >
            <ChevronRight className="w-4 h-4" />
          </button>

          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="p-1 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer ml-1"
            title={isPlaying ? 'Tạm dừng trượt' : 'Tự động chạy slider'}
          >
            {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
          </button>
        </div>

        {/* Visual Downward Connector to About Us & services below */}
        <motion.div
          animate={{ y: [0, 4, 0] }}
          transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
          onClick={() => {
            const aboutEl = document.getElementById('about-home-section') || document.getElementById('services-home-section');
            if (aboutEl) {
              aboutEl.scrollIntoView({ behavior: 'smooth' });
            } else {
              window.scrollBy({ top: 350, behavior: 'smooth' });
            }
          }}
          className="flex items-center gap-1.5 text-[11px] sm:text-xs font-semibold text-slate-500 hover:text-[#0baba0] cursor-pointer transition-colors pt-0.5 select-none text-center px-2"
        >
          <span>Khám phá về Uni Creation & hệ sinh thái dịch vụ bên dưới</span>
          <ChevronDown className="w-3.5 h-3.5 text-[#0baba0] shrink-0" />
        </motion.div>

      </div>

    </section>
  );
};
