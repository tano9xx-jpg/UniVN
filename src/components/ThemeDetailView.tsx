import React, { useState, useEffect, useRef } from 'react';
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
  ArrowRight,
  Calculator,
  MessageCircle,
  Phone,
  Code,
  Eye,
  Check,
  Share2,
  RotateCw,
  Maximize2,
  Minimize2,
  Star
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
  const [viewMode, setViewMode] = useState<'live' | 'image'>('live');
  const [isIframeLoading, setIsIframeLoading] = useState(true);
  const [iframeReloadKey, setIframeReloadKey] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const [failedImages, setFailedImages] = useState<Record<number, boolean>>({});
  const iframeContainerRef = useRef<HTMLDivElement>(null);

  // Find theme by slug or fallback to first theme
  const currentTheme = ALL_THEMES_60.find((t) => t.slug === themeSlug) || ALL_THEMES_60[0];

  // Helper to ensure demo URLs use the exact specified HTTP protocol
  const getActiveDemoUrl = (theme: ThemeItem) => {
    const rawUrl = theme.demoUrl || '';
    if (rawUrl.includes('giaodiendep.com')) {
      return rawUrl;
    }

    // Map themes to the 4 live demo links based on content & category
    const text = (theme.slug + ' ' + theme.category + ' ' + (theme.allCategories || []).join(' ') + ' ' + theme.title).toLowerCase();

    if (text.includes('tuan-hong') || text.includes('xay-dung') || text.includes('gach') || text.includes('tiles') || text.includes('kien-truc') || text.includes('vat-lieu') || text.includes('bat-dong-san') || text.includes('nha-dat')) {
      return 'http://tuanhongtiles.giaodiendep.com/';
    }
    if (text.includes('sorai') || text.includes('duoc') || text.includes('y-te') || text.includes('pharma') || text.includes('bac-si') || text.includes('suc-khoe') || text.includes('benh-vien') || text.includes('my-pham') || text.includes('spa')) {
      return 'http://soraipharma.giaodiendep.com/';
    }
    if (text.includes('khanh-an') || text.includes('moi-truong') || text.includes('cong-ty') || text.includes('doanh-nghiep') || text.includes('dich-vu') || text.includes('giao-duc') || text.includes('du-lich')) {
      return 'http://moitruongkhanhan.giaodiendep.com/';
    }
    if (text.includes('miyagi') || text.includes('noi-that') || text.includes('ban-hang') || text.includes('shop') || text.includes('ecommerce') || text.includes('furniture')) {
      return 'http://miyagi.giaodiendep.com/';
    }

    // Fallback to one of the 4 live working demo links
    const workingDemos = [
      'http://tuanhongtiles.giaodiendep.com/',
      'http://soraipharma.giaodiendep.com/',
      'http://moitruongkhanhan.giaodiendep.com/',
      'http://miyagi.giaodiendep.com/'
    ];
    return workingDemos[theme.id % workingDemos.length];
  };

  const activeDemoUrl = getActiveDemoUrl(currentTheme);

  // When served inside an HTTPS page, browser blocks http iframe due to Mixed Content security.
  // Because all 4 giaodiendep.com hosts have valid SSL certificates on port 443,
  // we load the iframe using https when the page is https so the browser renders the live website directly!
  const getIframeSrc = (url: string) => {
    if (typeof window !== 'undefined' && window.location.protocol === 'https:') {
      return url.replace(/^http:\/\//i, 'https://');
    }
    return url;
  };

  const iframeSrc = getIframeSrc(activeDemoUrl);

  // Helper for reliable theme mockup images matching ThemeExplorer
  const getReliableMockup = (theme: ThemeItem) => {
    const cat = (theme.category + ' ' + (theme.allCategories || []).join(' ') + ' ' + theme.slug).toLowerCase();
    if (cat.includes('bất động sản') || cat.includes('nhà đất') || cat.includes('vinhomes') || cat.includes('ecopark') || cat.includes('đất xanh')) {
      return 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80';
    }
    if (cat.includes('xây dựng') || cat.includes('vật liệu') || cat.includes('kiến trúc') || cat.includes('tuấn hồng')) {
      return 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80';
    }
    if (cat.includes('dược') || cat.includes('y tế') || cat.includes('pharma') || cat.includes('bác sĩ') || cat.includes('sức khỏe')) {
      return 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80';
    }
    if (cat.includes('nội thất') || cat.includes('furniture') || cat.includes('miyagi') || cat.includes('xhome') || cat.includes('gỗ óc chó')) {
      return 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80';
    }
    if (cat.includes('mỹ phẩm') || cat.includes('làm đẹp') || cat.includes('spa') || cat.includes('thẩm mỹ') || cat.includes('mireya') || cat.includes('seoul')) {
      return 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80';
    }
    if (cat.includes('du lịch') || cat.includes('khách sạn') || cat.includes('hotel') || cat.includes('resort') || cat.includes('tour')) {
      return 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80';
    }
    if (cat.includes('giáo dục') || cat.includes('du học') || cat.includes('đào tạo') || cat.includes('school') || cat.includes('học viện')) {
      return 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80';
    }
    if (cat.includes('ô tô') || cat.includes('xe máy') || cat.includes('gara') || cat.includes('vinfast') || cat.includes('toyota')) {
      return 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80';
    }
    if (cat.includes('bán hàng') || cat.includes('thương mại điện tử') || cat.includes('shop') || cat.includes('ecommerce')) {
      return 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80';
    }
    if (cat.includes('công ty') || cat.includes('doanh nghiệp') || cat.includes('hồ sơ năng lực')) {
      return 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80';
    }
    const defaults = [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80'
    ];
    return defaults[theme.id % defaults.length];
  };

  // Related themes: Exactly 3 items per row (take 6 items for 2 full rows of 3)
  const sameCategoryThemes = ALL_THEMES_60.filter(
    (t) => t.id !== currentTheme.id && (
      t.category === currentTheme.category ||
      (t.allCategories && currentTheme.allCategories && t.allCategories.some((c) => currentTheme.allCategories.includes(c)))
    )
  );
  const otherThemes = ALL_THEMES_60.filter(
    (t) => t.id !== currentTheme.id && !sameCategoryThemes.some((sc) => sc.id === t.id)
  );
  // Get exactly 6 related themes (for 2 rows of 3)
  const relatedThemes = [...sameCategoryThemes, ...otherThemes].slice(0, 6);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsIframeLoading(true);
    setViewMode('live');
    setIframeReloadKey((prev) => prev + 1);
  }, [themeSlug]);

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const handleReloadIframe = () => {
    setIsIframeLoading(true);
    setIframeReloadKey((prev) => prev + 1);
  };

  const getPriceText = (pkg: string) => {
    if (pkg === 'Gói Startup') return '2.500.000 đ';
    if (pkg === 'Gói Pro') return '4.000.000 đ';
    return 'Báo giá riêng';
  };

  return (
    <div className="w-full space-y-8 sm:space-y-12 pb-16">
      
      {/* =========================================================================
          1. BREADCRUMBS & TOP NAVIGATION
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
          <span className="text-[#0baba0] font-bold">{currentTheme.category}</span>
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
          2. THEME OVERVIEW HERO CARD (Specs, Price, Quick Action Hub)
          ========================================================================= */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm space-y-6 relative overflow-hidden">
        {/* Subtle accent glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#0baba0]/10 via-emerald-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 relative z-10">
          
          {/* Left Title & Badges */}
          <div className="space-y-3.5 max-w-3xl">
            <div className="flex flex-wrap items-center gap-2">
              <span
                className={`px-3 py-1 rounded-full text-xs font-extrabold shadow-2xs ${
                  currentTheme.package === 'Gói VIP'
                    ? 'bg-amber-500 text-white'
                    : currentTheme.package === 'Gói Pro'
                    ? 'btn-brand-gradient text-white'
                    : 'bg-[#0baba0] text-white'
                }`}
              >
                {currentTheme.package}
              </span>

              <span className="px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-[#088c83] text-xs font-bold">
                {currentTheme.category}
              </span>

              <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-50 border border-amber-200/60 text-amber-700 text-xs font-bold">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                <span>4.9/5 (180+ Đánh giá)</span>
              </div>

              <span className="px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-mono">
                Mã: #{currentTheme.id}
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight leading-tight">
              Mẫu Website {currentTheme.title}
            </h1>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl">
              {currentTheme.description} Thiết kế hiện đại chuẩn công nghệ 2026, tối ưu hóa giao diện người dùng UX/UI chuyên sâu theo ngành nghề kinh doanh, nâng cao tỷ lệ chuyển đổi khách hàng tiềm năng.
            </p>

            {/* Tech stack highlights */}
            <div className="flex flex-wrap items-center gap-2 pt-1 text-[11px] font-semibold text-slate-600">
              <span className="px-2.5 py-1 rounded-lg bg-slate-100 border border-slate-200 flex items-center gap-1">
                <Code className="w-3 h-3 text-[#0baba0]" />
                <span>Next.js &amp; React</span>
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-slate-100 border border-slate-200 flex items-center gap-1">
                <Zap className="w-3 h-3 text-amber-500" />
                <span>Tốc độ &lt; 0.8s</span>
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-slate-100 border border-slate-200 flex items-center gap-1">
                <ShieldCheck className="w-3 h-3 text-emerald-500" />
                <span>SSL 256-bit &amp; Bảo mật 100%</span>
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-slate-100 border border-slate-200 flex items-center gap-1">
                <Globe className="w-3 h-3 text-teal-600" />
                <span>Chuẩn SEO Onpage 100%</span>
              </span>
            </div>
          </div>

          {/* Right Pricing Card & Direct CTA */}
          <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-teal-950 text-white rounded-2xl p-5 sm:p-6 shadow-xl lg:min-w-[340px] space-y-4 border border-slate-700">
            
            <div className="space-y-1">
              <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                Chi phí hoàn thiện trọn gói:
              </div>
              <div className="text-2xl sm:text-3xl font-black text-[#30e2d5] font-mono">
                {getPriceText(currentTheme.package)}
              </div>
              <div className="text-[11px] text-emerald-400 font-medium flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                <span>Sở hữu vĩnh viễn · Bàn giao Full Mã Nguồn</span>
              </div>
            </div>

            <div className="pt-1 space-y-2.5">
              <button
                onClick={() => onSelectThemeForConsult(currentTheme)}
                className="w-full py-3 px-5 rounded-xl btn-brand-gradient text-white text-xs font-bold uppercase tracking-wider shadow-md hover:shadow-lg transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Đăng Ký Chọn Mẫu Này</span>
                <ArrowRight className="w-4 h-4 text-[#91c544]" />
              </button>

              <div className="grid grid-cols-2 gap-2">
                <a
                  href={activeDemoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-3 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 text-xs font-bold shadow-2xs transition-all flex items-center justify-center gap-1.5"
                  title="Mở demo trực tiếp trong tab mới theo giao thức HTTP"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-[#30e2d5]" />
                  <span>Tab Mới (HTTP)</span>
                </a>

                <button
                  onClick={onOpenCalculator}
                  className="py-2.5 px-3 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 text-xs font-bold shadow-2xs transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Calculator className="w-3.5 h-3.5 text-[#91c544]" />
                  <span>Dự Toán</span>
                </button>
              </div>

              <div className="text-[11px] text-slate-300 text-center pt-1">
                Tư vấn miễn phí qua Hotline: <strong className="text-white">{COMPANY_INFO.hotline}</strong>
              </div>
            </div>

          </div>

        </div>

        {/* 4 Trust Highlights Strip */}
        <div className="pt-4 border-t border-slate-100 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs text-slate-600">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#0baba0] shrink-0" />
            <span>Chuẩn SEO Google 100% Onpage</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#0baba0] shrink-0" />
            <span>Tốc độ tải siêu tốc &lt; 0.8 giây</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#0baba0] shrink-0" />
            <span>Responsive 100% Mobile &amp; Tablet</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#0baba0] shrink-0" />
            <span>Bảo hành &amp; Bảo trì trọn đời 24/7</span>
          </div>
        </div>

      </div>

      {/* =========================================================================
          3. LIVE DEMO DIRECT IFRAME ENGINE (LOAD & HIỂN THỊ TRỰC TIẾP TỪ LINK DEMO)
          ========================================================================= */}
      <div className="space-y-4" ref={iframeContainerRef}>
        
        {/* Device Switcher & Preview Controls Toolbar */}
        <div className="bg-white p-3 sm:p-4 rounded-2xl border border-slate-200/90 shadow-2xs flex flex-col md:flex-row md:items-center justify-between gap-4">
          
          {/* Left: Device Mode Switchers */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <span className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Chế độ xem mẫu trực tiếp:</span>
            </span>

            <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl">
              <button
                onClick={() => setDeviceMode('desktop')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                  deviceMode === 'desktop'
                    ? 'bg-[#0baba0] text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
                title="Xem trên màn hình máy tính (100%)"
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
                title="Xem trên máy tính bảng (768px)"
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
                title="Xem trên điện thoại (390px)"
              >
                <Smartphone className="w-3.5 h-3.5" />
                <span>Mobile (390px)</span>
              </button>
            </div>
          </div>

          {/* Right: Preview Controls (Reload, View Mode, Fullscreen, Open In Tab) */}
          <div className="flex items-center gap-2 self-end md:self-auto flex-wrap">
            
            {/* View Mode Switcher: Live Web vs Static Image */}
            <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl text-xs font-semibold">
              <button
                onClick={() => setViewMode('live')}
                className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer flex items-center gap-1 ${
                  viewMode === 'live'
                    ? 'bg-white text-[#088c83] shadow-2xs font-bold'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                <Globe className="w-3 h-3 text-[#0baba0]" />
                <span>Live Web Trực Tiếp</span>
              </button>
              <button
                onClick={() => setViewMode('image')}
                className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer flex items-center gap-1 ${
                  viewMode === 'image'
                    ? 'bg-white text-[#088c83] shadow-2xs font-bold'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                <Eye className="w-3 h-3 text-slate-500" />
                <span>Ảnh Tĩnh</span>
              </button>
            </div>

            {/* Reload Iframe Button */}
            {viewMode === 'live' && (
              <button
                onClick={handleReloadIframe}
                className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors cursor-pointer"
                title="Tải lại trang demo"
              >
                <RotateCw className="w-3.5 h-3.5" />
              </button>
            )}

            {/* Toggle Fullscreen Modal */}
            <button
              onClick={() => setIsFullscreen(!isFullscreen)}
              className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors cursor-pointer"
              title={isFullscreen ? 'Thu nhỏ giao diện' : 'Toàn màn hình'}
            >
              {isFullscreen ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
            </button>

            {/* Direct Link to Demo in new tab */}
            <a
              href={activeDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-teal-50 hover:bg-[#0baba0] text-[#088c83] hover:text-white text-xs font-bold border border-teal-200/80 transition-all shadow-2xs"
            >
              <span>Mở Tab Mới (HTTP)</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

        {/* Live Device Frame Wrapper */}
        <div
          className={`w-full flex justify-center bg-slate-900/95 rounded-3xl p-3 sm:p-6 border border-slate-800 shadow-2xl overflow-hidden transition-all duration-300 ${
            isFullscreen ? 'fixed inset-0 z-50 rounded-none p-4 bg-slate-950 flex-col items-center justify-start overflow-y-auto' : ''
          }`}
        >
          {isFullscreen && (
            <div className="w-full max-w-6xl mb-3 flex items-center justify-between text-white pb-2 border-b border-slate-800">
              <span className="text-sm font-bold flex items-center gap-2">
                <Globe className="w-4 h-4 text-[#0baba0]" />
                <span>Chế độ xem toàn màn hình: {currentTheme.title}</span>
              </span>
              <button
                onClick={() => setIsFullscreen(false)}
                className="px-3 py-1 bg-white/10 hover:bg-white/20 rounded-lg text-xs font-bold text-white transition-colors cursor-pointer"
              >
                Đóng toàn màn hình (Esc)
              </button>
            </div>
          )}

          {/* Browser / Device Shell */}
          <div
            className={`transition-all duration-300 w-full bg-white rounded-2xl shadow-2xl border border-slate-300/80 overflow-hidden flex flex-col ${
              deviceMode === 'desktop'
                ? 'max-w-6xl'
                : deviceMode === 'tablet'
                ? 'max-w-[768px]'
                : 'max-w-[390px]'
            }`}
          >
            {/* macOS Browser Header Frame */}
            <div className="bg-slate-100 px-4 py-2.5 border-b border-slate-200 flex items-center justify-between gap-3 select-none">
              
              {/* Traffic Light Dots */}
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-rose-400 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-400 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-400 inline-block" />
              </div>

              {/* URL Address Bar with Live Demo Link */}
              <div className="flex-1 max-w-md bg-white border border-slate-200 rounded-lg px-3 py-1 text-[11px] text-slate-600 font-mono flex items-center justify-between gap-2 shadow-2xs">
                <div className="flex items-center gap-1.5 truncate">
                  <Globe className="w-3 h-3 text-blue-500 shrink-0" />
                  <span className="truncate">{activeDemoUrl}</span>
                </div>
                <span className="px-1.5 py-0.2 bg-amber-50 text-amber-800 text-[9px] font-bold rounded shrink-0 border border-amber-200/60">
                  HTTP
                </span>
              </div>

              {/* Live Interactive status */}
              <div className="text-[10px] font-bold text-slate-500 hidden sm:flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-[#0baba0] animate-ping" />
                <span>Live Interactive Demo</span>
              </div>

            </div>

            {/* LIVE IFRAME / IMAGE CANVAS */}
            <div className="relative bg-slate-50 flex-1 overflow-hidden h-[620px] sm:h-[720px] lg:h-[780px]">
              
              {viewMode === 'live' ? (
                <>
                  {/* Subtle Loading overlay that dismisses smoothly */}
                  {isIframeLoading && (
                    <div className="absolute inset-0 z-10 bg-slate-50/90 backdrop-blur-xs flex flex-col items-center justify-center space-y-4 p-6 text-center">
                      <div className="w-12 h-12 rounded-2xl btn-brand-gradient text-white flex items-center justify-center shadow-lg animate-spin">
                        <RotateCw className="w-6 h-6" />
                      </div>
                      <div className="space-y-1">
                        <h4 className="font-extrabold text-sm text-slate-900">
                          Đang tải giao diện mẫu trực tiếp từ link demo...
                        </h4>
                        <p className="text-xs text-slate-500 font-mono">
                          {activeDemoUrl}
                        </p>
                      </div>
                      <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
                        <a
                          href={activeDemoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 rounded-xl bg-[#0baba0] hover:bg-[#088c83] text-white text-xs font-bold shadow-sm flex items-center gap-1.5"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          <span>Mở Trực Tiếp Trên Tab Mới (HTTP)</span>
                        </a>
                      </div>
                    </div>
                  )}

                  {/* Interactive Live Demo Iframe loading directly */}
                  <iframe
                    key={iframeReloadKey}
                    src={iframeSrc}
                    title={`Live Demo - ${currentTheme.title}`}
                    className="w-full h-full border-0 bg-white"
                    onLoad={() => setIsIframeLoading(false)}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  />
                </>
              ) : (
                /* Static High-Res Mockup scrollable view */
                <div className="w-full h-full overflow-y-auto">
                  <img
                    src={failedImages[currentTheme.id] ? getReliableMockup(currentTheme) : (currentTheme.imageUrl.includes('2026/09') ? getReliableMockup(currentTheme) : currentTheme.imageUrl)}
                    alt={currentTheme.title}
                    className="w-full h-auto object-cover object-top block"
                    onError={() => {
                      setFailedImages((prev) => ({ ...prev, [currentTheme.id]: true }));
                    }}
                  />
                </div>
              )}

            </div>

            {/* Bottom Mockup Action Strip */}
            <div className="bg-slate-50 p-3.5 sm:p-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2 text-xs text-slate-600">
                <span className="font-bold text-slate-900">{currentTheme.title}</span>
                <span>•</span>
                <span className="text-slate-500 font-mono">Giao diện tải trực tiếp theo công nghệ Responsive 2026</span>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={activeDemoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2 rounded-xl bg-white hover:bg-slate-100 text-slate-800 border border-slate-200 text-xs font-bold transition-all inline-flex items-center gap-1.5 shadow-2xs"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-[#0baba0]" />
                  <span>Mở Tab Mới (HTTP)</span>
                </a>

                <button
                  onClick={() => onSelectThemeForConsult(currentTheme)}
                  className="px-4 py-2 rounded-xl btn-brand-gradient text-white text-xs font-bold shadow-sm transition-all cursor-pointer flex items-center gap-1.5"
                >
                  <span>Chọn Mẫu Này</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#91c544]" />
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* =========================================================================
          4. TECHNICAL SPECIFICATIONS & PACKAGES INCLUSION
          ========================================================================= */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Core Technical Pillars */}
        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#0baba0]/10 text-[#088c83] border border-[#0baba0]/20">
              <Sparkles className="w-3.5 h-3.5 text-[#0baba0]" />
              <span>Tiêu Chuẩn Lập Trình &amp; Vận Hành</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
              Tính Năng &amp; Quyền Lợi Đi Kèm Mẫu
            </h3>
            <p className="text-xs sm:text-sm text-slate-500">
              Được thiết kế và lập trình sẵn sàng để đưa vào vận hành kinh doanh thực tế ngay lập tức.
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
                    Tối ưu theo tiêu chuẩn công nghệ mới nhất của Uni Creation, hỗ trợ mở rộng không giới hạn module theo nhu cầu kinh doanh.
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Extra Enterprise Feature List */}
          <div className="p-6 rounded-3xl bg-gradient-to-br from-teal-50/60 via-white to-emerald-50/40 border border-teal-200/80 space-y-4 shadow-2xs">
            <h4 className="font-bold text-xs uppercase tracking-wider text-[#088c83] flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-[#91c544]" />
              <span>6 Đặc Quyền Vàng Khi Làm Web Tại Uni Creation:</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0baba0] shrink-0" />
                <span>Tặng tên miền quốc tế .com/.net 1 năm</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0baba0] shrink-0" />
                <span>Tặng hosting SSD NVMe siêu tốc 1 năm</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0baba0] shrink-0" />
                <span>Bàn giao 100% Full Source Code gốc</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0baba0] shrink-0" />
                <span>Bảo hành &amp; hỗ trợ kỹ thuật trọn đời 24/7</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0baba0] shrink-0" />
                <span>Đào tạo quản trị website 1-1 tận tình</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0baba0] shrink-0" />
                <span>Hỗ trợ đăng ký khai báo Bộ Công Thương</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Service Consultation Box */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-6 sm:p-7 rounded-3xl bg-slate-900 text-white shadow-xl space-y-6 border border-slate-800">
            
            <div className="space-y-2">
              <span className="px-3 py-1 rounded-full bg-white/10 text-[#30e2d5] text-xs font-mono font-bold">
                TƯ VẤN NHANH TRONG 15 PHÚT
              </span>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
                Ưa thích mẫu {currentTheme.title}?
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Đội ngũ chuyên viên Uni Creation sẽ tùy biến màu sắc thương hiệu, bố cục banner và tính năng theo đúng ngành nghề và mục tiêu doanh nghiệp của bạn.
              </p>
            </div>

            <div className="space-y-3 pt-2">
              <button
                onClick={() => onSelectThemeForConsult(currentTheme)}
                className="w-full py-3.5 px-6 rounded-xl btn-brand-gradient text-white text-xs font-bold uppercase tracking-wider shadow-md hover:shadow-lg transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Yêu Cầu Báo Giá May Đo</span>
                <ArrowRight className="w-4 h-4 text-[#91c544]" />
              </button>

              <a
                href={`tel:${COMPANY_INFO.hotline.replace(/\./g, '')}`}
                className="w-full py-3 px-6 rounded-xl bg-white/10 hover:bg-white/15 text-white border border-white/20 text-xs font-bold transition-all flex items-center justify-center gap-2"
              >
                <Phone className="w-3.5 h-3.5 text-[#30e2d5]" />
                <span>Hotline: {COMPANY_INFO.hotline}</span>
              </a>

              <a
                href="https://zalo.me/0967508333"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-6 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition-all flex items-center justify-center gap-2 shadow-sm"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Chat Zalo Trực Tiếp (0967.508.333)</span>
              </a>
            </div>

            <div className="pt-4 border-t border-white/10 text-[11px] text-slate-400 space-y-1.5">
              <div>📍 Trụ sở chính: Tầng 6, Số 303 Vũ Tông Phan, Thanh Xuân, Hà Nội</div>
              <div>⚡ Cam kết hoàn tiền 100% nếu không đúng cam kết ban đầu</div>
            </div>

          </div>
        </div>

      </div>

      {/* =========================================================================
          5. MẪU GIAO DIỆN CÙNG LĨNH VỰC ĐỀ XUẤT (3 CÁI 1 HÀNG - ĐỒNG BỘ CARD TRANG CHỦ & DANH MỤC)
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
                Khám phá thêm các thiết kế độc bản cùng ngành nghề phù hợp với doanh nghiệp của bạn (Hiển thị 3 mẫu một hàng chuẩn đồng bộ).
              </p>
            </div>

            <button
              onClick={onBackToThemes}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 hover:border-[#0baba0] text-xs font-bold text-[#088c83] shadow-2xs hover:shadow-sm transition-all cursor-pointer self-start sm:self-auto"
            >
              <span>Xem toàn bộ kho mẫu</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#91c544]" />
            </button>
          </div>

          {/* 3 CARDS PER ROW GRID (grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedThemes.map((theme) => (
              <div
                key={theme.id}
                className="group bg-white rounded-3xl border border-slate-200/90 shadow-sm hover:border-[#0baba0]/50 hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden"
              >
                {/* Image Preview with Hover Actions */}
                <div
                  onClick={() => onViewOtherTheme(theme.slug)}
                  className="relative aspect-[16/10] bg-slate-100 overflow-hidden border-b border-slate-100 cursor-pointer"
                >
                  <img
                    src={failedImages[theme.id] ? getReliableMockup(theme) : (theme.imageUrl.includes('2026/09') ? getReliableMockup(theme) : theme.imageUrl)}
                    alt={theme.title}
                    loading="lazy"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    onError={() => {
                      setFailedImages((prev) => ({ ...prev, [theme.id]: true }));
                    }}
                  />

                  {/* Package Badge on top-left (NO 'Xem' badge in the corner!) */}
                  <div className="absolute top-3 left-3">
                    <span className={`px-2.5 py-0.5 rounded-md text-[11px] font-bold tracking-wide shadow-sm ${
                      theme.package === 'Gói VIP'
                        ? 'bg-amber-500 text-white'
                        : theme.package === 'Gói Pro'
                        ? 'btn-brand-gradient text-white'
                        : 'bg-[#0baba0] text-white'
                    }`}>
                      {theme.package}
                    </span>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 p-4">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onViewOtherTheme(theme.slug);
                      }}
                      className="px-3.5 py-2 bg-white text-slate-800 rounded-xl text-xs font-bold shadow hover:bg-slate-100 flex items-center gap-1.5 cursor-pointer"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      Xem Chi Tiết
                    </button>
                    <a
                      href={getActiveDemoUrl(theme)}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="px-3.5 py-2 btn-brand-gradient text-white rounded-xl text-xs font-bold shadow flex items-center gap-1.5"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      Demo Live
                    </a>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <div className="flex items-center gap-2 text-xs text-slate-500 mb-1.5">
                      <span className="font-bold text-[#0baba0]">{theme.category}</span>
                      <span>•</span>
                      <span>Chuẩn SEO</span>
                      <span>•</span>
                      <span>Tốc độ &lt; 1s</span>
                    </div>

                    <h3
                      onClick={() => onViewOtherTheme(theme.slug)}
                      className="font-bold text-base text-slate-900 group-hover:text-[#0baba0] transition-colors cursor-pointer"
                    >
                      {theme.title}
                    </h3>

                    <p className="text-xs text-slate-500 mt-1 line-clamp-2 leading-relaxed">
                      {theme.description}
                    </p>
                  </div>

                  {/* Card Footer: Price on left, 'Chọn mẫu này' on right (NO 'Xem' button) */}
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-900 font-mono">
                      {getPriceText(theme.package)}
                    </span>

                    <button
                      onClick={() => onSelectThemeForConsult(theme)}
                      className="px-3.5 py-1.5 text-xs font-bold text-[#088c83] bg-teal-50 hover:bg-[#0baba0] hover:text-white rounded-xl transition-all duration-200 cursor-pointer shadow-2xs"
                    >
                      Chọn mẫu này
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
