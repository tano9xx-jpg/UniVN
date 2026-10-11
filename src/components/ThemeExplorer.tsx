import React, { useState, useMemo, useEffect } from 'react';
import { THEMES_LIST, ThemeItem, COMPANY_INFO } from '../data/siteData';
import { ALL_THEMES_60 } from '../data/themesData';
import { THEME_CATEGORIES_DATA, ThemeCategoryInfo, getCategoryById } from '../data/themeCategoriesData';
import {
  Search,
  ExternalLink,
  Eye,
  Check,
  X,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  Filter,
  Building2,
  ShoppingBag,
  Home,
  Palette,
  Hammer,
  Compass,
  GraduationCap,
  HeartPulse,
  Car,
  Layers,
  CheckCircle2,
  Clock,
  ShieldCheck,
  Phone,
  Zap,
  ChevronRight
} from 'lucide-react';

interface ThemeExplorerProps {
  initialCategory?: string;
  initialPackage?: string;
  hideHeader?: boolean;
  onSelectTheme: (theme: ThemeItem) => void;
  onOpenCalculator: () => void;
  onViewThemeDetail?: (slug: string) => void;
  onNavigateHome?: () => void;
}

export const ThemeExplorer: React.FC<ThemeExplorerProps> = ({
  initialCategory,
  initialPackage,
  hideHeader = false,
  onSelectTheme,
  onOpenCalculator,
  onViewThemeDetail,
  onNavigateHome
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory || 'all');
  const [selectedPackage, setSelectedPackage] = useState<string>(initialPackage || 'all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [failedImages, setFailedImages] = useState<Record<number, boolean>>({});

  // Sync with initialCategory when prop changes (e.g. from Mega Menu navigation)
  useEffect(() => {
    if (initialCategory) {
      setSelectedCategory(initialCategory);
    }
  }, [initialCategory]);

  useEffect(() => {
    if (initialPackage) {
      setSelectedPackage(initialPackage);
    }
  }, [initialPackage]);

  // Helper to render matching Lucide icon for each category
  const renderCategoryIcon = (iconName: string, className: string = 'w-4 h-4') => {
    switch (iconName) {
      case 'Building2':
        return <Building2 className={className} />;
      case 'ShoppingBag':
        return <ShoppingBag className={className} />;
      case 'Home':
        return <Home className={className} />;
      case 'Palette':
        return <Palette className={className} />;
      case 'Hammer':
        return <Hammer className={className} />;
      case 'Compass':
        return <Compass className={className} />;
      case 'GraduationCap':
        return <GraduationCap className={className} />;
      case 'HeartPulse':
        return <HeartPulse className={className} />;
      case 'Sparkles':
        return <Sparkles className={className} />;
      case 'Car':
        return <Car className={className} />;
      case 'Layers':
      default:
        return <Layers className={className} />;
    }
  };

  // Helper for reliable theme mockups
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

  // Helper to ensure demo URLs are always live, accessible and HTTP as specified
  const getActiveDemoUrl = (theme: ThemeItem) => {
    const rawUrl = theme.demoUrl || '';
    if (rawUrl.includes('giaodiendep.com')) {
      return rawUrl;
    }

    const text = (theme.slug + ' ' + theme.category + ' ' + (theme.allCategories || []).join(' ') + ' ' + theme.title).toLowerCase();

    if (text.includes('tuan-hong') || text.includes('xay-dung') || text.includes('gach') || text.includes('tiles') || text.includes('kien-truc') || text.includes('vat-lieu')) {
      return 'http://tuanhongtiles.giaodiendep.com/';
    }
    if (text.includes('sorai') || text.includes('duoc') || text.includes('y-te') || text.includes('pharma') || text.includes('bac-si') || text.includes('suc-khoe')) {
      return 'http://soraipharma.giaodiendep.com/';
    }
    if (text.includes('khanh-an') || text.includes('moi-truong') || text.includes('cong-ty') || text.includes('doanh-nghiep') || text.includes('dich-vu')) {
      return 'http://moitruongkhanhan.giaodiendep.com/';
    }
    if (text.includes('miyagi') || text.includes('noi-that') || text.includes('ban-hang') || text.includes('shop') || text.includes('ecommerce') || text.includes('furniture')) {
      return 'http://miyagi.giaodiendep.com/';
    }

    const workingDemos = [
      'http://tuanhongtiles.giaodiendep.com/',
      'http://soraipharma.giaodiendep.com/',
      'http://moitruongkhanhan.giaodiendep.com/',
      'http://miyagi.giaodiendep.com/'
    ];
    return workingDemos[theme.id % workingDemos.length];
  };

  // Find active category info
  const activeCategoryInfo = useMemo(() => {
    if (selectedCategory === 'all') return null;
    return getCategoryById(selectedCategory) || null;
  }, [selectedCategory]);

  // Compute themes for the selected category (ONLY matching themes!)
  const categorySpecificThemes = useMemo(() => {
    if (selectedCategory === 'all') {
      return ALL_THEMES_60;
    }
    if (!activeCategoryInfo) {
      return ALL_THEMES_60;
    }

    const keywords = activeCategoryInfo.matchKeywords.map((k) => k.toLowerCase());

    const matched = ALL_THEMES_60.filter((theme) => {
      const hayStack = [
        theme.category,
        ...(theme.allCategories || []),
        theme.title,
        theme.slug,
        theme.description
      ].join(' ').toLowerCase();

      return keywords.some((kw) => hayStack.includes(kw));
    });

    return matched;
  }, [selectedCategory, activeCategoryInfo]);

  // Filtered by search & package within the category
  const filteredThemes = useMemo(() => {
    return categorySpecificThemes.filter((theme) => {
      // Package filter
      if (selectedPackage !== 'all') {
        if (!theme.package.toLowerCase().includes(selectedPackage.toLowerCase())) {
          return false;
        }
      }

      // Search filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchTitle = theme.title.toLowerCase().includes(q);
        const matchDesc = theme.description.toLowerCase().includes(q);
        const matchCat = theme.category.toLowerCase().includes(q);
        if (!matchTitle && !matchDesc && !matchCat) {
          return false;
        }
      }

      return true;
    });
  }, [categorySpecificThemes, selectedPackage, searchQuery]);

  const handleOpenDetail = (theme: ThemeItem) => {
    if (onViewThemeDetail) {
      onViewThemeDetail(theme.slug);
    } else {
      onSelectTheme(theme);
    }
  };

  return (
    <div className="w-full">


      {/* =========================================================================
          CASE A: DEDICATED CATEGORY VIEW (When a specific category is selected)
          ========================================================================= */}
      {selectedCategory !== 'all' && activeCategoryInfo && (
        <div className="w-full animate-in fade-in duration-200">
          
          {/* 1. FULL-WIDTH CATEGORY HERO BANNER (EDGE-TO-EDGE, NO BOX CONTAINER) */}
          <div className="w-full bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white border-b border-slate-800 py-12 sm:py-16 relative overflow-hidden">
            {/* Ambient background glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-80 bg-gradient-to-r from-teal-500/15 via-[#0baba0]/25 to-emerald-500/15 blur-3xl rounded-full pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(#0baba0_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center text-center">
              {/* Centered Breadcrumbs */}
              <div className="flex flex-wrap items-center justify-center gap-2 text-xs text-slate-300 mb-4">
                {onNavigateHome ? (
                  <button
                    onClick={onNavigateHome}
                    className="hover:text-[#0baba0] transition-colors cursor-pointer"
                  >
                    Trang Chủ
                  </button>
                ) : (
                  <span>Trang Chủ</span>
                )}
                <span className="text-slate-500">/</span>
                <button
                  onClick={() => setSelectedCategory('all')}
                  className="hover:text-[#0baba0] transition-colors cursor-pointer"
                >
                  Giao Diện Theo Chủ Đề
                </button>
                <span className="text-slate-500">/</span>
                <span className="text-[#0baba0] font-bold">{activeCategoryInfo.shortName}</span>
              </div>

              {/* Category Badge */}
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold bg-[#0baba0]/20 text-[#30e2d5] border border-[#0baba0]/40 mb-3 shadow-xs">
                {renderCategoryIcon(activeCategoryInfo.iconName, 'w-3.5 h-3.5')}
                <span>{activeCategoryInfo.badge}</span>
              </div>

              {/* Main Title */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight max-w-4xl mx-auto">
                Mẫu Website {activeCategoryInfo.name}
              </h1>

              {/* Tagline */}
              <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto mt-3 leading-relaxed">
                {activeCategoryInfo.tagline}
              </p>

              {/* 4 Wide Metric Highlights (No single word wrap) */}
              <div className="w-full max-w-5xl mt-8">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 text-center">
                  <div className="bg-slate-900/80 backdrop-blur-md rounded-2xl p-4 border border-slate-800 shadow-md">
                    <span className="text-slate-400 block text-xs">Số lượng mẫu sẵn sàng</span>
                    <strong className="text-xl sm:text-2xl font-extrabold text-[#0baba0] font-mono mt-0.5 block whitespace-nowrap">
                      {categorySpecificThemes.length} Mẫu thiết kế
                    </strong>
                  </div>
                  <div className="bg-slate-900/80 backdrop-blur-md rounded-2xl p-4 border border-slate-800 shadow-md">
                    <span className="text-slate-400 block text-xs">Thời gian bàn giao</span>
                    <strong className="text-xl sm:text-2xl font-extrabold text-white mt-0.5 block whitespace-nowrap">
                      {activeCategoryInfo.deliveryTime}
                    </strong>
                  </div>
                  <div className="bg-slate-900/80 backdrop-blur-md rounded-2xl p-4 border border-slate-800 shadow-md">
                    <span className="text-slate-400 block text-xs">Gói cước khuyên dùng</span>
                    <strong className="text-base sm:text-lg font-extrabold text-emerald-400 mt-0.5 block truncate" title={activeCategoryInfo.recommendedPackage}>
                      {activeCategoryInfo.recommendedPackage.split('(')[0].trim()}
                    </strong>
                  </div>
                  <div className="bg-slate-900/80 backdrop-blur-md rounded-2xl p-4 border border-slate-800 shadow-md">
                    <span className="text-slate-400 block text-xs">Bảo hành kỹ thuật</span>
                    <strong className="text-xl sm:text-2xl font-extrabold text-amber-300 mt-0.5 block whitespace-nowrap">
                      Trọn Đời 24/7
                    </strong>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* MAIN CONTENT AREA */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-10">
            
            {/* Section Toolbar: Package Filter & Search within Category */}
            <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-2xs flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-bold text-slate-700">Lọc theo gói:</span>
                {['all', 'Gói Startup', 'Gói Pro', 'Gói VIP'].map((pkg) => (
                  <button
                    key={pkg}
                    onClick={() => setSelectedPackage(pkg)}
                    className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                      selectedPackage === pkg
                        ? 'bg-[#0baba0] text-white shadow-xs'
                        : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                    }`}
                  >
                    {pkg === 'all' ? 'Tất cả gói' : pkg}
                  </button>
                ))}
              </div>

              {/* Search Input */}
              <div className="relative w-full md:w-72">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                <input
                  type="text"
                  placeholder={`Tìm trong ${activeCategoryInfo.shortName}...`}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-8 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#0baba0] focus:bg-white"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-2.5 text-slate-400 hover:text-slate-600 cursor-pointer"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>

            {/* 2. TEMPLATES SHOWCASE: DISPLAYED FIRST */}
            <div className="space-y-6">
              <div className="flex items-center justify-between px-1">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#0baba0]" />
                  <h2 className="text-lg sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                    Các Mẫu Website Thuộc Chủ Đề {activeCategoryInfo.name}
                  </h2>
                </div>
                <span className="text-xs text-slate-500">
                  Hiển thị <strong>{filteredThemes.length}</strong> mẫu giao diện
                </span>
              </div>

              {filteredThemes.length === 0 ? (
                <div className="p-12 text-center bg-white rounded-3xl border border-slate-200 text-slate-500 space-y-3">
                  <p className="font-semibold text-base">Không tìm thấy mẫu phù hợp với từ khóa tìm kiếm trong danh mục này.</p>
                  <button
                    onClick={() => {
                      setSelectedPackage('all');
                      setSearchQuery('');
                    }}
                    className="px-4 py-2 btn-brand-gradient text-white rounded-xl text-xs font-bold cursor-pointer"
                  >
                    Đặt lại bộ lọc tìm kiếm
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredThemes.map((theme) => (
                    <div
                      key={theme.id}
                      className="group bg-white rounded-3xl border border-slate-200/90 shadow-sm hover:border-[#0baba0]/50 hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden"
                    >
                      {/* Image Preview with Hover Actions */}
                      <div
                        onClick={() => handleOpenDetail(theme)}
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

                        {/* Package Badge */}
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
                              handleOpenDetail(theme);
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
                            <span className="font-bold text-[#0baba0]">{activeCategoryInfo.shortName}</span>
                            <span>•</span>
                            <span>Chuẩn SEO</span>
                            <span>•</span>
                            <span>Tốc độ &lt; 1s</span>
                          </div>

                          <h3
                            onClick={() => handleOpenDetail(theme)}
                            className="font-bold text-base text-slate-900 group-hover:text-[#0baba0] transition-colors cursor-pointer"
                          >
                            {theme.title}
                          </h3>

                          <p className="text-xs text-slate-500 mt-1 line-clamp-2 leading-relaxed">
                            {theme.description}
                          </p>
                        </div>

                        {/* Card Footer: Price on left, 'Chọn mẫu này' on right (NO 'Xem' button as requested) */}
                        <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                          <span className="text-xs font-bold text-slate-900 font-mono">
                            {theme.package === 'Gói Startup' ? '2.500.000 đ' : theme.package === 'Gói Pro' ? '4.000.000 đ' : 'Báo giá riêng'}
                          </span>

                          <button
                            onClick={() => onSelectTheme(theme)}
                            className="px-3 py-1.5 text-xs font-bold text-[#088c83] bg-teal-50 hover:bg-[#0baba0] hover:text-white rounded-xl transition-all duration-200 cursor-pointer shadow-2xs"
                          >
                            Chọn mẫu này
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* 3. EDITORIAL DESCRIPTION & INDUSTRY STANDARDS: MOVED BELOW TEMPLATES */}
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-sm space-y-8">
              
              {/* Header */}
              <div className="border-b border-slate-100 pb-4">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#0baba0]/10 text-[#088c83] mb-2 border border-[#0baba0]/20">
                  <Sparkles className="w-3.5 h-3.5 text-[#0baba0]" />
                  <span>Thông Tin Ngành Nghề Chuyên Sâu</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  Đặc Thù & Tiêu Chuẩn Thiết Kế Website Ngành {activeCategoryInfo.shortName}
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Khám phá lý do tại sao doanh nghiệp của bạn cần một giao diện website chuyên biệt và cách Uni Creation tối ưu hóa trải nghiệm số.
                </p>
              </div>

              {/* Detailed Editorial Paragraphs & Industry Image Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
                  <div className="p-4 bg-teal-50/70 rounded-2xl border border-teal-200/70 text-[#00695c] font-medium leading-relaxed">
                    💡 <strong>Tổng quan giải pháp:</strong> {activeCategoryInfo.overview}
                  </div>

                  {activeCategoryInfo.detailedDescription.map((p, idx) => (
                    <p key={idx} className="text-slate-600 leading-relaxed">
                      {p}
                    </p>
                  ))}

                  <div className="pt-2 text-xs text-slate-600 bg-slate-50 p-3.5 rounded-xl border border-slate-200/80">
                    <strong className="text-slate-900">Đối tượng áp dụng phù hợp:</strong> {activeCategoryInfo.targetAudience}
                  </div>
                </div>

                {/* Banner Graphic Preview */}
                <div className="lg:col-span-5 relative rounded-2xl overflow-hidden shadow-md border border-slate-200 aspect-[16/11]">
                  <img
                    src={activeCategoryInfo.bannerImage}
                    alt={activeCategoryInfo.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-5">
                    <span className="text-white text-xs font-bold">
                      Thiết kế chuẩn UX/UI 2026 ngành {activeCategoryInfo.shortName}
                    </span>
                  </div>
                </div>
              </div>

              {/* 4 Core Features for this Industry */}
              <div className="pt-6 border-t border-slate-100">
                <div className="flex items-center gap-2 mb-4">
                  <CheckCircle2 className="w-4 h-4 text-[#0baba0]" />
                  <h3 className="font-extrabold text-slate-900 text-sm sm:text-base">
                    4 Tiêu Chuẩn & Tính Năng Trọng Tâm Của Website {activeCategoryInfo.shortName}
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {activeCategoryInfo.keyFeatures.map((feat, idx) => (
                    <div
                      key={idx}
                      className="bg-slate-50/70 p-4.5 rounded-2xl border border-slate-200/80 shadow-2xs space-y-1.5 hover:bg-white hover:border-[#0baba0]/40 transition-colors"
                    >
                      <div className="flex items-center gap-2 text-[#088c83] font-bold text-xs">
                        <CheckCircle2 className="w-4 h-4 text-[#0baba0] shrink-0" />
                        <span>{feat.title}</span>
                      </div>
                      <p className="text-[11px] text-slate-500 leading-relaxed">
                        {feat.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* 4. CATEGORY CONSULTATION CTA BOX */}
            <div className="bg-gradient-to-r from-slate-900 via-teal-950 to-slate-900 rounded-3xl p-6 sm:p-8 text-white border border-teal-800/40 shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-1.5 text-center md:text-left">
                <span className="text-xs font-bold text-[#30e2d5] uppercase tracking-wider">
                  Tư Vấn Miễn Phí Ngành {activeCategoryInfo.shortName}
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                  Cần Thiết Kế Website {activeCategoryInfo.shortName} May Đo Độc Bản?
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
                  Chuyên viên Uni Creation sẵn sàng khảo sát yêu cầu riêng, phác thảo Wireframe và gửi bản demo giải pháp trong vòng 15 – 30 phút.
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
                <button
                  onClick={() => {
                    onSelectTheme({
                      id: 9999,
                      slug: `tu-van-${activeCategoryInfo.id}`,
                      title: `Tư vấn thiết kế website ${activeCategoryInfo.name}`,
                      category: activeCategoryInfo.name,
                      allCategories: [activeCategoryInfo.name],
                      package: activeCategoryInfo.recommendedPackage,
                      demoUrl: '',
                      imageUrl: '',
                      description: '',
                      features: []
                    });
                  }}
                  className="px-5 py-3 btn-brand-gradient text-white rounded-xl text-xs font-bold shadow-md cursor-pointer"
                >
                  Nhận Báo Giá {activeCategoryInfo.shortName}
                </button>

                <a
                  href={`tel:${COMPANY_INFO.hotline}`}
                  className="px-5 py-3 bg-white/10 hover:bg-white/20 text-white rounded-xl text-xs font-bold border border-white/20 transition-colors flex items-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5 text-[#0baba0]" />
                  <span>{COMPANY_INFO.hotline}</span>
                </a>
              </div>
            </div>

          </div>

        </div>
      )}

      {/* =========================================================================
          CASE B: CATEGORY DIRECTORY OVERVIEW HUB (When selectedCategory === 'all')
          ========================================================================= */}
      {selectedCategory === 'all' && (
        <div className="w-full animate-in fade-in duration-200">
          
          {/* Full-width Category Hub Header when hideHeader is false */}
          {!hideHeader && (
            <div className="w-full bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white border-b border-slate-800 py-12 sm:py-16 text-center relative overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-80 bg-gradient-to-r from-teal-500/15 via-[#0baba0]/25 to-emerald-500/15 blur-3xl rounded-full pointer-events-none" />
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
                <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#0baba0]/20 border border-[#0baba0]/40 rounded-full text-xs font-semibold text-[#30e2d5]">
                  <Sparkles className="w-3.5 h-3.5 text-[#91c544]" />
                  <span>11 Danh Mục Chủ Đề Ngành Nghề Chuyên Sâu</span>
                </div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
                  Kho Giao Diện Website Theo Từng Chủ Đề Ngành Nghề
                </h1>
                <p className="text-slate-300 text-xs sm:text-base max-w-2xl mx-auto leading-relaxed">
                  Nhấp vào từng danh mục để khám phá các mẫu thiết kế website độc bản, chỉ hiển thị đúng các mẫu của ngành nghề đó kèm nội dung mô tả đặc thù chuyên sâu.
                </p>
              </div>
            </div>
          )}

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-10">
            {/* 11 CATEGORY CARDS GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {THEME_CATEGORIES_DATA.map((cat) => {
              // Count matching themes
              const kws = cat.matchKeywords.map((k) => k.toLowerCase());
              const count = ALL_THEMES_60.filter((theme) => {
                const hay = [
                  theme.category,
                  ...(theme.allCategories || []),
                  theme.title,
                  theme.slug,
                  theme.description
                ].join(' ').toLowerCase();
                return kws.some((kw) => hay.includes(kw));
              }).length;

              return (
                <div
                  key={cat.id}
                  onClick={() => {
                    setSelectedCategory(cat.id);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="group bg-white rounded-3xl border border-slate-200/90 shadow-sm hover:border-[#0baba0]/60 hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden cursor-pointer"
                >
                  {/* Category Image Cover */}
                  <div className="relative aspect-[16/9] overflow-hidden bg-slate-100">
                    <img
                      src={cat.bannerImage}
                      alt={cat.name}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/30 to-transparent flex flex-col justify-between p-4">
                      <div className="self-end">
                        <span className="px-2.5 py-1 rounded-full text-[10px] font-extrabold bg-[#0baba0] text-white shadow-xs">
                          {cat.badge}
                        </span>
                      </div>
                      <div className="text-white">
                        <span className="text-xs font-mono text-[#30e2d5] font-bold">
                          {count} Mẫu Sẵn Sàng
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-xl bg-teal-50 text-[#088c83] flex items-center justify-center shrink-0">
                          {renderCategoryIcon(cat.iconName, 'w-4 h-4 text-[#0baba0]')}
                        </div>
                        <h3 className="font-extrabold text-base text-slate-900 group-hover:text-[#0baba0] transition-colors leading-snug">
                          {cat.name}
                        </h3>
                      </div>

                      <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                        {cat.overview}
                      </p>

                      {/* 2 Key Feature Pills */}
                      <div className="space-y-1 pt-1 text-[11px] text-slate-600">
                        {cat.keyFeatures.slice(0, 2).map((feat, idx) => (
                          <div key={idx} className="flex items-center gap-1.5 truncate">
                            <Check className="w-3 h-3 text-[#0baba0] shrink-0" />
                            <span className="truncate">{feat.title}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-xs font-bold text-[#088c83]">
                        Gói {cat.recommendedPackage.split('(')[0].trim()}
                      </span>

                      <span className="text-xs font-extrabold text-[#0baba0] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                        <span>Khám phá danh mục</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Quick Calculator / Consultation Banner */}
          <div className="p-6 bg-gradient-to-r from-teal-50/80 via-white to-emerald-50/80 rounded-3xl border border-teal-200/70 shadow-2xs flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-[#0baba0] text-white flex items-center justify-center shrink-0 shadow-xs">
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm">Chưa tìm thấy mẫu ưng ý hoặc muốn may đo giao diện độc bản?</h4>
                <p className="text-xs text-slate-500">Uni Creation hỗ trợ thiết kế UI/UX theo nhận diện thương hiệu độc quyền cho mọi ngành nghề.</p>
              </div>
            </div>

            <button
              onClick={onOpenCalculator}
              className="px-5 py-2.5 btn-brand-gradient text-white rounded-xl text-xs font-bold shadow-sm cursor-pointer whitespace-nowrap shrink-0"
            >
              Dự toán chi phí web theo tính năng
            </button>
            {/* Close calculator banner */}
            </div>

            {/* Close max-w-7xl content area */}
          </div>

          {/* Close animate-in wrapper */}
        </div>
      )}

    </div>
  );
};
