import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  ExternalLink,
  Smartphone,
  Tablet,
  Monitor,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Zap,
  Globe,
  Lock,
  Layers,
  ArrowRight,
  Calculator,
  MessageCircle,
  Phone,
  Code,
  Search,
  Eye,
  Check,
  Share2
} from 'lucide-react';
import { ThemeItem, COMPANY_INFO } from '../data/siteData';
import { ALL_THEMES_60 } from '../data/themesData';

interface ThemeDetailViewProps {
  themeSlug: string;
  onNavigateHome: () => void;
  onBackToThemes: () => void;
  onSelectThemeForConsult: (theme: ThemeItem) => void;
  onOpenCalculator: () => void;
  onViewOtherTheme: (slug: string) => void;
}

export const ThemeDetailView: React.FC<ThemeDetailViewProps> = ({
  themeSlug,
  onNavigateHome,
  onBackToThemes,
  onSelectThemeForConsult,
  onOpenCalculator,
  onViewOtherTheme
}) => {
  const [deviceMode, setDeviceMode] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [isCopied, setIsCopied] = useState(false);
  const [failedImages, setFailedImages] = useState<Record<number, boolean>>({});

  // Find theme by slug or fallback to first theme
  const currentTheme = ALL_THEMES_60.find((t) => t.slug === themeSlug) || ALL_THEMES_60[0];

  // Helper for reliable theme mockup images
  const getReliableMockup = (theme: ThemeItem) => {
    const cat = (theme.category + ' ' + (theme.allCategories || []).join(' ') + ' ' + theme.slug).toLowerCase();
    if (cat.includes('bất động sản') || cat.includes('nhà đất')) {
      return 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80';
    }
    if (cat.includes('xây dựng') || cat.includes('vật liệu') || cat.includes('kiến trúc') || cat.includes('tuan-hong')) {
      return 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=600&q=80';
    }
    if (cat.includes('dược') || cat.includes('y tế') || cat.includes('pharma') || cat.includes('bệnh viện') || cat.includes('sức khỏe')) {
      return 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80';
    }
    if (cat.includes('nội thất') || cat.includes('furniture') || cat.includes('miyagi')) {
      return 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=600&q=80';
    }
    if (cat.includes('mỹ phẩm') || cat.includes('làm đẹp') || cat.includes('spa') || cat.includes('thẩm mỹ') || cat.includes('mireya')) {
      return 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=600&q=80';
    }
    if (cat.includes('nhà hàng') || cat.includes('ẩm thực') || cat.includes('quán') || cat.includes('cafe')) {
      return 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80';
    }
    if (cat.includes('giáo dục') || cat.includes('trường') || cat.includes('đào tạo') || cat.includes('học viện')) {
      return 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=80';
    }
    if (cat.includes('khách sạn') || cat.includes('du lịch') || cat.includes('hotel') || cat.includes('resort')) {
      return 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80';
    }
    if (cat.includes('ô tô') || cat.includes('xe máy') || cat.includes('gara')) {
      return 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=80';
    }
    if (cat.includes('bán hàng') || cat.includes('thời trang') || cat.includes('shop')) {
      return 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=600&q=80';
    }
    return 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80';
  };

  // Related themes: prioritize same category first, then others, max 4
  const sameCategoryThemes = ALL_THEMES_60.filter(
    (t) => t.id !== currentTheme.id && t.category === currentTheme.category
  );
  const otherThemes = ALL_THEMES_60.filter(
    (t) => t.id !== currentTheme.id && t.category !== currentTheme.category
  );
  const relatedThemes = [...sameCategoryThemes, ...otherThemes].slice(0, 4);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [themeSlug]);

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const getPriceText = (pkg: string) => {
    if (pkg === 'Gói Startup') return '2.500.000 đ';
    if (pkg === 'Gói Pro') return '4.000.000 đ';
    return 'Báo giá riêng';
  };

  return (
    <div className="w-full space-y-8 sm:space-y-10 pb-16">
      
      {/* =========================================================================
          BREADCRUMBS & TOP BAR NAVIGATION
          ========================================================================= */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200/80 pb-4">
        
        {/* Breadcrumb links */}
        <nav className="flex items-center gap-2 text-xs text-slate-500 flex-wrap">
          <button
            onClick={onNavigateHome}
            className="hover:text-[#0baba0] transition-colors cursor-pointer"
          >
            Trang Chủ
          </button>
          <span>/</span>
          <button
            onClick={onBackToThemes}
            className="hover:text-[#0baba0] transition-colors cursor-pointer"
          >
            Kho Mẫu Website
          </button>
          <span>/</span>
          <span className="text-slate-500">{currentTheme.category}</span>
          <span>/</span>
          <span className="font-bold text-slate-900 truncate max-w-[200px] sm:max-w-none">
            {currentTheme.title}
          </span>
        </nav>

        {/* Back Button & Share */}
        <div className="flex items-center gap-2.5">
          <button
            onClick={onBackToThemes}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white border border-slate-200 hover:border-[#0baba0] hover:text-[#0baba0] text-xs font-bold text-slate-700 shadow-2xs transition-all cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Quay Lại Kho Mẫu</span>
          </button>

          <button
            onClick={handleShare}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-slate-200 hover:border-slate-300 text-xs font-semibold text-slate-600 shadow-2xs transition-all cursor-pointer"
            title="Sao chép liên kết mẫu web"
          >
            <Share2 className="w-3.5 h-3.5" />
            <span>{isCopied ? 'Đã chép link!' : 'Chia sẻ'}</span>
          </button>
        </div>

      </div>

      {/* =========================================================================
          THEME OVERVIEW HEADER (Title, Category, Price & Primary Action Buttons)
          ========================================================================= */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm space-y-6">
        
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
          
          {/* Left Title & Badges */}
          <div className="space-y-3 max-w-2xl">
            <div className="flex flex-wrap items-center gap-2">
              <span
                className={`px-3 py-1 rounded-full text-xs font-extrabold shadow-2xs ${
                  currentTheme.package === 'Gói VIP'
                    ? 'bg-amber-500 text-white'
                    : currentTheme.package === 'Gói Pro'
                    ? 'bg-[#0baba0] text-white'
                    : 'bg-[#91c544] text-slate-900'
                }`}
              >
                {currentTheme.package}
              </span>

              <span className="px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-[#088c83] text-xs font-bold">
                {currentTheme.category}
              </span>

              <span className="px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-medium">
                Mã: #{currentTheme.id}
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Mẫu Website {currentTheme.title}
            </h1>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              {currentTheme.description}
            </p>
          </div>

          {/* Right Pricing Card & Direct CTA */}
          <div className="bg-gradient-to-br from-slate-50 via-teal-50/20 to-white rounded-2xl p-5 sm:p-6 border border-slate-200/80 shadow-xs lg:min-w-[320px] space-y-4">
            
            <div className="space-y-1">
              <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                Chi phí thiết kế trọn gói:
              </div>
              <div className="text-2xl sm:text-3xl font-black text-[#0baba0] font-mono">
                {getPriceText(currentTheme.package)}
              </div>
              <div className="text-[11px] text-emerald-600 font-semibold flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Sở hữu vĩnh viễn · Bàn giao Full Code</span>
              </div>
            </div>

            <div className="pt-2 space-y-2.5">
              <button
                onClick={() => onSelectThemeForConsult(currentTheme)}
                className="w-full py-3 px-5 rounded-xl bg-[#0baba0] hover:bg-[#088c83] text-white text-xs font-bold uppercase tracking-wider shadow-md hover:shadow-lg transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Đăng Ký Chọn Mẫu Này</span>
                <ArrowRight className="w-4 h-4 text-[#91c544]" />
              </button>

              <div className="grid grid-cols-2 gap-2">
                <a
                  href={currentTheme.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-3 rounded-xl bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 text-xs font-bold shadow-2xs hover:border-[#0baba0] hover:text-[#0baba0] transition-all flex items-center justify-center gap-1.5"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-[#0baba0]" />
                  <span>Demo Live</span>
                </a>

                <button
                  onClick={onOpenCalculator}
                  className="py-2.5 px-3 rounded-xl bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 text-xs font-bold shadow-2xs hover:border-slate-300 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Calculator className="w-3.5 h-3.5 text-[#91c544]" />
                  <span>Dự Toán</span>
                </button>
              </div>
            </div>

          </div>

        </div>

        {/* Highlight Quick Badges */}
        <div className="pt-4 border-t border-slate-100 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs text-slate-600">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#0baba0] shrink-0" />
            <span>Chuẩn SEO Google 100%</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#0baba0] shrink-0" />
            <span>Tốc độ tải &lt; 0.8 giây</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#0baba0] shrink-0" />
            <span>Responsive 100% Mobile</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#0baba0] shrink-0" />
            <span>Bảo hành kỹ thuật trọn đời</span>
          </div>
        </div>

      </div>

      {/* =========================================================================
          INTERACTIVE DEVICE PREVIEW CANVAS (Desktop, Tablet, Mobile Simulation)
          ========================================================================= */}
      <div className="space-y-4">
        
        {/* Device Switcher Toolbar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white p-3 rounded-2xl border border-slate-200 shadow-xs">
          
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-slate-700 uppercase tracking-wider ml-2">
              Chế độ xem mẫu:
            </span>
            <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl">
              <button
                onClick={() => setDeviceMode('desktop')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                  deviceMode === 'desktop'
                    ? 'bg-[#0baba0] text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Monitor className="w-3.5 h-3.5" />
                <span>Desktop (100%)</span>
              </button>

              <button
                onClick={() => setDeviceMode('tablet')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                  deviceMode === 'tablet'
                    ? 'bg-[#0baba0] text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Tablet className="w-3.5 h-3.5" />
                <span>Tablet (768px)</span>
              </button>

              <button
                onClick={() => setDeviceMode('mobile')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                  deviceMode === 'mobile'
                    ? 'bg-[#0baba0] text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Smartphone className="w-3.5 h-3.5" />
                <span>Mobile (375px)</span>
              </button>
            </div>
          </div>

          {/* Direct Link to Full Demo */}
          <a
            href={currentTheme.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#088c83] hover:text-[#0baba0] px-3 py-1.5 rounded-xl hover:bg-teal-50 transition-colors mr-2"
          >
            <span>Mở trang Demo trong tab mới</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>

        </div>

        {/* Browser Mockup Wrapper */}
        <div className="w-full flex justify-center bg-slate-100/90 rounded-3xl p-4 sm:p-8 border border-slate-200/80 shadow-inner overflow-hidden min-h-[500px]">
          
          <div
            className={`transition-all duration-300 w-full bg-white rounded-2xl shadow-xl border border-slate-300/80 overflow-hidden flex flex-col ${
              deviceMode === 'desktop'
                ? 'max-w-5xl'
                : deviceMode === 'tablet'
                ? 'max-w-[768px]'
                : 'max-w-[375px]'
            }`}
          >
            {/* macOS Browser Header Frame */}
            <div className="bg-slate-100 px-4 py-3 border-b border-slate-200 flex items-center justify-between gap-3 select-none">
              
              {/* Traffic Light Dots */}
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-rose-400 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-400 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-400 inline-block" />
              </div>

              {/* URL Address Bar */}
              <div className="flex-1 max-w-md bg-white border border-slate-200 rounded-lg px-3 py-1 text-[11px] text-slate-500 font-mono flex items-center justify-between truncate">
                <span className="truncate">https://demo.univn.vn/{currentTheme.slug}</span>
                <span className="px-1.5 py-0.2 bg-emerald-50 text-emerald-700 text-[9px] font-bold rounded">
                  SSL 256-bit
                </span>
              </div>

              {/* Status pill */}
              <div className="text-[10px] font-bold text-slate-400 hidden sm:block">
                Uni Creation Preview Engine
              </div>

            </div>

            {/* Scrollable Website Canvas */}
            <div className="relative bg-slate-50 flex-1 overflow-y-auto max-h-[640px] group/preview">
              <img
                src={currentTheme.imageUrl}
                alt={currentTheme.title}
                className="w-full h-auto object-cover object-top block"
              />

              {/* Hover overlay hint */}
              <div className="sticky bottom-4 right-4 ml-auto mr-4 w-max pointer-events-none">
                <span className="px-3 py-1.5 rounded-full bg-slate-900/85 backdrop-blur-md text-white text-[11px] font-bold shadow-lg flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#91c544]" />
                  <span>Cuộn để xem toàn bộ giao diện</span>
                </span>
              </div>
            </div>

            {/* Bottom Mockup Action Strip */}
            <div className="bg-white p-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs text-slate-600">
                <span className="font-bold text-slate-900">{currentTheme.title}</span>
                <span>·</span>
                <span>Tương thích đa màn hình chuẩn UX/UI</span>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={currentTheme.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition-all inline-flex items-center gap-1.5"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Trải Nghiệm Live</span>
                </a>

                <button
                  onClick={() => onSelectThemeForConsult(currentTheme)}
                  className="px-5 py-2 rounded-xl bg-[#0baba0] hover:bg-[#088c83] text-white text-xs font-bold shadow-sm transition-all cursor-pointer flex items-center gap-1.5"
                >
                  <span>Chọn Mẫu Này</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* =========================================================================
          TECHNICAL SPECIFICATIONS & DETAILED FEATURES
          ========================================================================= */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: 5 Core Technical Pillars */}
        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-1">
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
              Tính Năng & Quyền Lợi Đi Kèm Mẫu
            </h3>
            <p className="text-xs sm:text-sm text-slate-500">
              Được thiết kế và lập trình sẵn sàng để đưa vào vận hành kinh doanh thực tế.
            </p>
          </div>

          <div className="space-y-3">
            {currentTheme.features.map((feat, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#0baba0] transition-colors flex items-start gap-3.5"
              >
                <div className="w-8 h-8 rounded-xl bg-teal-50 text-[#088c83] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-4 h-4 stroke-[3]" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-slate-900">{feat}</h4>
                  <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                    Tối ưu theo tiêu chuẩn công nghệ mới nhất của Uni Creation, hỗ trợ mở rộng không giới hạn module.
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Extra Enterprise Feature List */}
          <div className="p-5 rounded-2xl bg-gradient-to-br from-teal-50/50 to-white border border-teal-200/80 space-y-3">
            <h4 className="font-bold text-xs uppercase tracking-wider text-[#088c83] flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-[#91c544]" />
              <span>Đặc Quyền Khi Làm Web Tại Uni Creation:</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#0baba0]" />
                <span>Tặng tên miền quốc tế .com/.net</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#0baba0]" />
                <span>Tặng hosting SSD NVMe siêu tốc 1 năm</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#0baba0]" />
                <span>Bàn giao 100% Full Source Code</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#0baba0]" />
                <span>Bảo hành & hỗ trợ kỹ thuật trọn đời</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#0baba0]" />
                <span>Đào tạo quản trị website 1-1</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#0baba0]" />
                <span>Hỗ trợ đăng ký Bộ Công Thương</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Service Consultation Box */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-6 sm:p-7 rounded-3xl bg-slate-900 text-white shadow-xl space-y-6">
            
            <div className="space-y-2">
              <span className="px-3 py-1 rounded-full bg-white/10 text-[#91c544] text-xs font-mono font-bold">
                TƯ VẤN NHANH TRONG 15 PHÚT
              </span>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
                Thích mẫu {currentTheme.title}?
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Đội ngũ chuyên viên Uni Creation sẽ tùy biến màu sắc, logo và tính năng theo đúng ngành nghề và yêu cầu của doanh nghiệp bạn.
              </p>
            </div>

            <div className="space-y-3 pt-2">
              <button
                onClick={() => onSelectThemeForConsult(currentTheme)}
                className="w-full py-3.5 px-6 rounded-xl bg-[#0baba0] hover:bg-[#088c83] text-white text-xs font-bold uppercase tracking-wider shadow-md hover:shadow-lg transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Yêu Cầu Báo Giá May Đo</span>
                <ArrowRight className="w-4 h-4 text-[#91c544]" />
              </button>

              <a
                href={`tel:${COMPANY_INFO.hotline.replace(/\./g, '')}`}
                className="w-full py-3 px-6 rounded-xl bg-white/10 hover:bg-white/15 text-white border border-white/20 text-xs font-bold transition-all flex items-center justify-center gap-2"
              >
                <Phone className="w-3.5 h-3.5 text-[#91c544]" />
                <span>Hotline: {COMPANY_INFO.hotline}</span>
              </a>

              <a
                href="https://zalo.me/0967508333"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-6 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Chat Zalo Trực Tiếp</span>
              </a>
            </div>

            <div className="pt-4 border-t border-white/10 text-[11px] text-slate-400 space-y-1">
              <div>📍 Trụ sở chính: Tầng 6, Số 303 Vũ Tông Phan, Thanh Xuân, Hà Nội</div>
              <div>⚡ Cam kết hoàn tiền 100% nếu không hài lòng về giao diện</div>
            </div>

          </div>
        </div>

      </div>

      {/* =========================================================================
          RELATED THEMES CAROUSEL / GRID (Các mẫu cùng lĩnh vực đề xuất đồng nhất giao diện)
          ========================================================================= */}
      {relatedThemes.length > 0 && (
        <div className="pt-10 border-t border-slate-200/80 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-1.5">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#0baba0]/10 border border-[#0baba0]/30 rounded-full text-xs font-semibold text-[#088c83]">
                <Sparkles className="w-3.5 h-3.5 text-[#91c544]" />
                <span>Gợi ý cho bạn</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                Mẫu Giao Diện Cùng Lĩnh Vực Đề Xuất
              </h3>
              <p className="text-xs sm:text-sm text-slate-500">
                Khám phá thêm các thiết kế độc bản cùng ngành nghề phù hợp với doanh nghiệp của bạn.
              </p>
            </div>

            <button
              onClick={onBackToThemes}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 hover:border-[#0baba0] text-xs font-bold text-[#088c83] shadow-2xs hover:shadow-sm transition-all cursor-pointer self-start sm:self-auto"
            >
              <span>Xem toàn bộ 180+ mẫu</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#91c544]" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedThemes.map((t) => (
              <div
                key={t.id}
                className="group bg-white rounded-3xl border border-slate-200/90 shadow-sm hover:border-[#0baba0]/50 hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden"
              >
                {/* Image Preview with clean fallback */}
                <div
                  onClick={() => onViewOtherTheme(t.slug)}
                  className="relative aspect-[16/10] bg-slate-100 overflow-hidden border-b border-slate-100 cursor-pointer"
                >
                  <img
                    src={failedImages[t.id] ? getReliableMockup(t) : (t.imageUrl.includes('2026/09') ? getReliableMockup(t) : t.imageUrl)}
                    alt={t.title}
                    loading="lazy"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    onError={() => {
                      setFailedImages((prev) => ({ ...prev, [t.id]: true }));
                    }}
                  />

                  {/* Badge for package */}
                  <div className="absolute top-3 left-3">
                    <span className={`px-2.5 py-0.5 rounded-md text-[11px] font-bold tracking-wide shadow-sm ${
                      t.package === 'Gói VIP'
                        ? 'bg-amber-500 text-white'
                        : t.package === 'Gói Pro'
                        ? 'btn-brand-gradient text-white'
                        : 'bg-[#0baba0] text-white'
                    }`}>
                      {t.package}
                    </span>
                  </div>

                  {/* Hover overlay with actions */}
                  <div className="absolute inset-0 bg-white/90 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 p-4 border border-slate-200/60">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onViewOtherTheme(t.slug);
                      }}
                      className="px-3.5 py-2 bg-white text-slate-800 border border-slate-200 rounded-xl text-xs font-bold shadow hover:border-[#0baba0] hover:text-[#0baba0] flex items-center gap-1.5 cursor-pointer"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Xem chi tiết</span>
                    </button>
                    <a
                      href={t.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="px-3.5 py-2 btn-brand-gradient text-white rounded-xl text-xs font-bold shadow flex items-center gap-1.5"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Demo Live</span>
                    </a>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-xs text-slate-500 mb-1.5">
                      <span className="font-semibold text-[#0baba0]">{t.category}</span>
                      <span aria-hidden="true">·</span>
                      <span>Chuẩn SEO</span>
                      <span aria-hidden="true">·</span>
                      <span>Responsive</span>
                    </div>

                    <h4
                      onClick={() => onViewOtherTheme(t.slug)}
                      className="font-bold text-base text-slate-900 group-hover:text-[#0baba0] transition-colors cursor-pointer"
                    >
                      {t.title}
                    </h4>

                    <p className="text-xs text-slate-500 mt-1.5 line-clamp-2 leading-relaxed">
                      {t.description}
                    </p>
                  </div>

                  <div className="pt-4 mt-3 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-900 font-mono">
                      {getPriceText(t.package)}
                    </span>

                    <button
                      onClick={() => onViewOtherTheme(t.slug)}
                      className="text-xs font-semibold text-[#0baba0] hover:underline flex items-center gap-1 cursor-pointer"
                    >
                      <span>Trải nghiệm</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  );
};
