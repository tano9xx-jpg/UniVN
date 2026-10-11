import React, { useState, useEffect } from 'react';
import { ALL_SERVICES, ServiceTier } from '../data/servicesData';
import { COMPANY_INFO } from '../data/siteData';
import { DomainChecker } from './DomainChecker';
import {
  WebDesignAnimation,
  ServerHostingAnimation,
  DomainAnimation,
  EmailAnimation,
  AdsMarketingAnimation,
  BrandIdentityAnimation,
  ContentWritingAnimation,
  FacebookSocialAnimation
} from './ServiceAnimations';
import {
  Check,
  ShieldCheck,
  Phone,
  ArrowRight,
  CheckCircle2,
  HelpCircle,
  Sparkles,
  Send,
  Server,
  Cpu,
  HardDrive,
  Zap,
  Globe,
  Lock,
  RefreshCw,
  Clock,
  Headphones,
  FileText,
  Mail,
  ChevronDown,
  ChevronUp,
  Activity,
  Layers,
  Award
} from 'lucide-react';
import { GoogleAdsServiceView } from './GoogleAdsServiceView';
import { WebDesignServiceView } from './WebDesignServiceView';

interface ServiceDetailViewProps {
  serviceSlug: string;
  onNavigateHome: () => void;
  onOpenCalculator: () => void;
  onNavigateToTheme?: (slug: string) => void;
  onNavigateToThemes?: () => void;
}

// Standard Service Detail View with unconditional hooks
const StandardServiceDetailView: React.FC<ServiceDetailViewProps> = ({
  serviceSlug,
  onNavigateHome,
  onOpenCalculator,
  onNavigateToTheme,
  onNavigateToThemes
}) => {
  const service = ALL_SERVICES[serviceSlug] || ALL_SERVICES['dich-vu-hosting'];

  // State for subcategory tabs (e.g., Pro Hosting vs Pro Platinum Hosting)
  const [activeTabId, setActiveTabId] = useState<string>(
    service.tierTabs?.[0]?.id || ''
  );

  // Compute current tiers based on active tab
  const currentTab = service.tierTabs?.find((t) => t.id === activeTabId);
  const displayedTiers: ServiceTier[] = currentTab
    ? currentTab.tiers
    : service.tiers || [];

  // Form & selection state
  const [selectedTier, setSelectedTier] = useState<string>(
    displayedTiers[0]?.name || ''
  );
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [clientDomain, setClientDomain] = useState('');
  const [clientNote, setClientNote] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Synchronize selected tier when tab changes
  useEffect(() => {
    if (displayedTiers.length > 0 && !displayedTiers.some((t) => t.name === selectedTier)) {
      setSelectedTier(displayedTiers[0].name);
    }
  }, [activeTabId, displayedTiers, selectedTier]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientPhone.trim()) return;
    setSubmitted(true);
  };

  const handleSelectTierAndScroll = (tierName: string) => {
    setSelectedTier(tierName);
    const el = document.getElementById('service-order-form');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  // Dynamic icon helper for tech cards
  const renderTechIcon = (iconName?: string) => {
    switch (iconName) {
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-[#0baba0]" />;
      case 'HardDrive':
        return <HardDrive className="w-5 h-5 text-[#0baba0]" />;
      case 'Zap':
        return <Zap className="w-5 h-5 text-[#91c544]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-[#0baba0]" />;
      case 'RefreshCw':
        return <RefreshCw className="w-5 h-5 text-[#0baba0]" />;
      case 'Server':
        return <Server className="w-5 h-5 text-[#0baba0]" />;
      case 'Globe':
        return <Globe className="w-5 h-5 text-[#0baba0]" />;
      case 'Lock':
        return <Lock className="w-5 h-5 text-[#0baba0]" />;
      case 'Clock':
        return <Clock className="w-5 h-5 text-[#0baba0]" />;
      case 'Headphones':
        return <Headphones className="w-5 h-5 text-[#0baba0]" />;
      case 'Mail':
        return <Mail className="w-5 h-5 text-[#0baba0]" />;
      case 'FileText':
        return <FileText className="w-5 h-5 text-[#0baba0]" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#0baba0]" />;
    }
  };

  // Determine appropriate interactive animation for the service
  const renderServiceAnimation = () => {
    switch (service.slug) {
      case 'thiet-ke-website-tron-goi':
        return <WebDesignAnimation />;
      case 'dich-vu-hosting':
      case 'dich-vu-vps-pro-ssd':
      case 'dich-vu-vps-nvme':
      case 'dich-vu-vps-gia-re':
        return <ServerHostingAnimation />;
      case 'dich-vu-ten-mien':
        return <DomainAnimation />;
      case 'dich-vu-email-google':
      case 'dich-vu-email-hosting':
        return <EmailAnimation />;
      case 'nhan-dien-thuong-hieu':
        return <BrandIdentityAnimation />;
      case 'viet-noi-dung-website':
        return <ContentWritingAnimation />;
      case 'dich-vu-quang-cao':
        return <AdsMarketingAnimation />;
      case 'dich-vu-facebook':
        return <FacebookSocialAnimation />;
      default:
        return <ServerHostingAnimation />;
    }
  };

  return (
    <div className="w-full bg-white text-slate-900">
      
      {/* 1. HERO SECTION (FULL WIDTH ENTERPRISE DESIGN - VIBRANT BRAND GRADIENT) */}
      <section className="w-full relative overflow-hidden bg-gradient-to-br from-[#f0fdfa] via-[#e6f8f7]/70 to-[#ecfdf5] border-b border-[#0baba0]/20 py-12 sm:py-18">
        {/* Soft decorative background orbs for color depth */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#0baba0]/12 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute top-1/2 -right-20 w-80 h-80 bg-[#91c544]/15 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-10 left-1/3 w-72 h-72 bg-teal-300/10 rounded-full blur-2xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 relative z-10">
          
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs text-slate-500 font-medium">
            <button
              onClick={onNavigateHome}
              className="hover:text-[#0baba0] transition-colors cursor-pointer"
            >
              Trang chủ
            </button>
            <span className="text-slate-300">/</span>
            <span className="text-slate-500">Dịch vụ cung cấp</span>
            <span className="text-slate-300">/</span>
            <span className="font-bold text-[#0baba0]">{service.title}</span>
          </nav>

          {/* Hero Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-5">
              
              {/* Category & Badge */}
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1 bg-white/90 backdrop-blur-xs border border-[#0baba0]/40 rounded-full text-xs text-[#088c83] font-bold shadow-xs">
                  <Sparkles className="w-3.5 h-3.5 text-[#91c544]" />
                  <span>{service.category} · Tiêu Chuẩn Uni Creation</span>
                </span>
                {service.tagline && (
                  <span className="hidden sm:inline-flex items-center gap-1 px-3 py-1 bg-white/80 backdrop-blur-xs border border-emerald-200/80 rounded-full text-xs text-emerald-800 font-medium shadow-2xs">
                    <Activity className="w-3 h-3 text-[#0baba0]" />
                    <span>Tier III Datacenter</span>
                  </span>
                )}
              </div>

              {/* Title */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 leading-[1.15]">
                {service.title}
              </h1>

              {/* Subtitle / Tagline */}
              {service.tagline && (
                <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#0baba0]">
                  {service.tagline}
                </p>
              )}

              {/* Short description */}
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {service.shortDesc}
              </p>

              {/* Highlights checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                {service.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 font-medium bg-white/70 backdrop-blur-2xs p-2 rounded-xl border border-white/80 shadow-2xs">
                    <Check className="w-4 h-4 text-[#91c544] shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="pt-3 flex flex-wrap items-center gap-3.5">
                <button
                  onClick={() => {
                    const el = document.getElementById('service-pricing-matrix');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-6 py-3.5 btn-brand-gradient text-white text-xs font-bold uppercase tracking-wider rounded-xl shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer flex items-center gap-2"
                >
                  <span>Xem Bảng Giá Các Gói</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => {
                    const el = document.getElementById('service-order-form');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-5 py-3.5 bg-white text-slate-700 hover:text-[#0baba0] border border-slate-300 hover:border-[#0baba0] rounded-xl text-xs font-bold transition-all shadow-xs cursor-pointer flex items-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5 text-[#0baba0]" />
                  <span>Tư Vấn Cấu Hình: {COMPANY_INFO.hotline}</span>
                </button>
              </div>

            </div>

            {/* Animation illustration card */}
            <div className="lg:col-span-5">
              <div className="bg-white/95 backdrop-blur-xs rounded-3xl p-6 sm:p-8 border border-white shadow-xl ring-1 ring-[#0baba0]/15 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-[#0baba0]/10 rounded-full blur-3xl pointer-events-none"></div>
                {renderServiceAnimation()}
              </div>
            </div>

          </div>

          {/* Key capability metrics bar (Bright Glassmorphism Cards) */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-4 border-t border-[#0baba0]/15">
            <div className="p-3.5 sm:p-4 bg-white/90 backdrop-blur-xs rounded-2xl border border-white shadow-sm hover:shadow-md transition-all space-y-1">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">Cam Kết Uptime</span>
              <span className="text-xl sm:text-2xl font-black text-[#0baba0] font-mono">99.99%</span>
              <p className="text-[11px] text-slate-500">Giám sát tự động 24/7</p>
            </div>
            <div className="p-3.5 sm:p-4 bg-white/90 backdrop-blur-xs rounded-2xl border border-white shadow-sm hover:shadow-md transition-all space-y-1">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">Băng Thông Mạng</span>
              <span className="text-xl sm:text-2xl font-black text-slate-900 font-mono">10 Gbps</span>
              <p className="text-[11px] text-slate-500">Datacenter Viettel IDC & FPT</p>
            </div>
            <div className="p-3.5 sm:p-4 bg-white/90 backdrop-blur-xs rounded-2xl border border-white shadow-sm hover:shadow-md transition-all space-y-1">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">Di Chuyển Dữ Liệu</span>
              <span className="text-xl sm:text-2xl font-black text-[#91c544] font-mono">0 VNĐ</span>
              <p className="text-[11px] text-slate-500">Hỗ trợ trọn gói không gián đoạn</p>
            </div>
            <div className="p-3.5 sm:p-4 bg-white/90 backdrop-blur-xs rounded-2xl border border-white shadow-sm hover:shadow-md transition-all space-y-1">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">Hỗ Trợ Kỹ Thuật</span>
              <span className="text-xl sm:text-2xl font-black text-slate-900 font-mono">24/7/365</span>
              <p className="text-[11px] text-slate-500">Phản hồi dưới 15 phút</p>
            </div>
          </div>

        </div>
      </section>

      {/* 2. EMBEDDED DOMAIN CHECKER (Only for Domain Service) */}
      {service.slug === 'dich-vu-ten-mien' && (
        <section className="w-full bg-[#f8fafc] border-b border-slate-200/80 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <DomainChecker />
          </div>
        </section>
      )}

      {/* 3. CORE TECHNICAL ARCHITECTURE & INFRASTRUCTURE FEATURES */}
      {service.techFeatures && service.techFeatures.length > 0 && (
        <section className="w-full bg-gradient-to-b from-white via-teal-50/20 to-white border-b border-slate-200/80 py-14 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 bg-emerald-50 border border-emerald-200/90 rounded-full text-xs text-[#088c83] font-bold uppercase tracking-wider shadow-2xs">
                <Layers className="w-3.5 h-3.5 text-[#91c544]" />
                Công Nghệ Đột Phá
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
                Hạ Tầng Phần Cứng & Tính Năng Vượt Trội
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Được chuẩn hóa theo tiêu chuẩn công nghệ của các nhà cung cấp hạ tầng điện toán đám mây hàng đầu, mang lại tốc độ tải trang thần tốc và độ bảo mật tuyệt đối.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.techFeatures.map((feat, idx) => (
                <div
                  key={idx}
                  className="p-6 bg-white hover:bg-gradient-to-b hover:from-white hover:to-teal-50/30 rounded-3xl border border-slate-200/90 hover:border-[#0baba0] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 space-y-3 group cursor-default"
                >
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-teal-50/80 border border-teal-100 flex items-center justify-center group-hover:scale-110 group-hover:bg-[#0baba0] group-hover:text-white transition-all shadow-xs">
                      {renderTechIcon(feat.icon)}
                    </div>
                    {feat.badge && (
                      <span className="px-2.5 py-1 bg-emerald-50 border border-emerald-200 text-[#088c83] rounded-full text-[11px] font-bold shadow-2xs">
                        {feat.badge}
                      </span>
                    )}
                  </div>
                  <h3 className="font-bold text-base text-slate-900 group-hover:text-[#0baba0] transition-colors">
                    {feat.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </section>
      )}

      {/* 4. PRICING & TIER MATRIX SECTION (FULL-WIDTH, TABBED IF AVAILABLE) */}
      <section id="service-pricing-matrix" className="w-full bg-gradient-to-b from-[#f8fafc] via-teal-50/25 to-[#f8fafc] border-b border-slate-200/80 py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 bg-teal-50 border border-teal-200 rounded-full text-xs text-[#0baba0] font-bold uppercase tracking-wider shadow-2xs">
              Bảng Giá Niêm Yết Minh Bạch
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              Các Gói Cấu Hình {service.title}
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Chi phí niêm yết rõ ràng, không phát sinh phụ phí ẩn. Hỗ trợ đầy đủ hợp đồng và hóa đơn VAT điện tử hợp pháp cho mọi doanh nghiệp.
            </p>

            {/* Sub-tabs if tierTabs exist (e.g. Pro Hosting vs Pro Platinum Hosting) */}
            {service.tierTabs && service.tierTabs.length > 0 && (
              <div className="pt-4 flex flex-wrap items-center justify-center gap-2">
                {service.tierTabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTabId(tab.id)}
                    className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
                      activeTabId === tab.id
                        ? 'btn-brand-gradient text-white shadow-md scale-105'
                        : 'bg-white text-slate-700 hover:text-[#0baba0] border border-slate-300 hover:border-[#0baba0] shadow-2xs'
                    }`}
                  >
                    <span>{tab.label}</span>
                    {tab.badge && (
                      <span className={`text-[10px] px-2 py-0.5 rounded-full uppercase ${
                        activeTabId === tab.id
                          ? 'bg-white/20 text-white'
                          : 'bg-emerald-50 text-[#088c83]'
                      }`}>
                        {tab.badge}
                      </span>
                    )}
                  </button>
                ))}
              </div>
            )}

            {/* Description of the active tab */}
            {currentTab?.description && (
              <p className="text-xs text-slate-500 max-w-xl mx-auto italic pt-1">
                {currentTab.description}
              </p>
            )}
          </div>

          {/* Pricing cards grid */}
          <div className={`grid grid-cols-1 md:grid-cols-2 ${displayedTiers.length >= 4 ? 'lg:grid-cols-4' : 'lg:grid-cols-3'} gap-6 items-stretch`}>
            {displayedTiers.map((tier, idx) => (
              <div
                key={idx}
                className={`bg-white rounded-3xl p-6 sm:p-7 border transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 ${
                  tier.popular
                    ? 'border-2 border-[#0baba0] bg-gradient-to-b from-[#e6f8f7]/50 via-white to-white shadow-xl ring-4 ring-[#0baba0]/10 relative'
                    : 'border-slate-200/90 shadow-sm hover:border-[#0baba0]/60 hover:shadow-lg'
                }`}
              >
                {/* Popular or custom badge */}
                {(tier.popular || tier.badge) && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="px-3.5 py-0.5 btn-brand-gradient text-white text-[11px] font-bold rounded-full uppercase tracking-wider shadow">
                      {tier.badge || 'Khuyên Dùng'}
                    </span>
                  </div>
                )}

                <div>
                  <div className="border-b pb-4 mb-4 border-slate-100">
                    <h3 className="font-extrabold text-lg text-slate-900">{tier.name}</h3>
                    
                    {/* Highlight Spec pill if provided */}
                    {tier.highlightSpec && (
                      <div className="mt-1.5 inline-block text-[11px] font-semibold text-[#088c83] bg-teal-50 px-2.5 py-0.5 rounded-md border border-teal-100">
                        {tier.highlightSpec}
                      </div>
                    )}

                    <div className="mt-3 flex items-baseline gap-1.5">
                      <span className="text-2xl sm:text-3xl font-black font-mono text-[#0baba0] tabular-nums">
                        {tier.price}
                      </span>
                      {tier.period && (
                        <span className="text-xs text-slate-500 font-medium">/{tier.period}</span>
                      )}
                    </div>
                  </div>

                  {/* Checklist of features */}
                  <ul className="space-y-2.5 text-xs text-slate-600">
                    {tier.features.map((f, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-[#91c544] shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 mt-4 border-t border-slate-100">
                  <button
                    onClick={() => handleSelectTierAndScroll(tier.name)}
                    className={`w-full py-3 px-4 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                      tier.popular
                        ? 'btn-brand-gradient text-white shadow-md hover:shadow-lg hover:scale-[1.02]'
                        : 'bg-emerald-50 hover:bg-[#0baba0] text-[#088c83] hover:text-white border border-[#0baba0]/30'
                    }`}
                  >
                    <span>Chọn {tier.name}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Promotion incentive note */}
          <div className="p-4 bg-white rounded-2xl border border-teal-200 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2.5 text-slate-700">
              <Award className="w-5 h-5 text-[#91c544] shrink-0" />
              <span>
                <strong>Chính sách thanh toán dài hạn:</strong> Đăng ký từ 12 tháng tặng thêm 1 tháng sử dụng, đăng ký từ 24 tháng tặng 3 tháng + Miễn phí chứng chỉ SSL trọn đời.
              </span>
            </div>
            <button
              onClick={() => handleSelectTierAndScroll(displayedTiers[0]?.name || '')}
              className="text-[#0baba0] font-bold hover:underline shrink-0 cursor-pointer"
            >
              Tư vấn ưu đãi ngay →
            </button>
          </div>

        </div>
      </section>

      {/* 5. DETAILED TECHNICAL SPECIFICATIONS TABLE (Comparison Matrix inspired by AZDIGI & Mat Bao) */}
      {service.specsTable && (
        <section className="w-full bg-white border-b border-slate-200/80 py-14 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            
            <div className="text-center max-w-3xl mx-auto space-y-2">
              <span className="text-xs font-bold text-[#0baba0] uppercase tracking-wider">So Sánh Trực Quan</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Bảng Thông Số Kỹ Thuật Chi Tiết
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm">
                Minh bạch 100% tài nguyên phân bổ, giúp bạn dễ dàng đối chiếu và lựa chọn gói cấu hình tối ưu.
              </p>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-xs bg-white">
              <table className="w-full text-left text-xs text-slate-700">
                <thead className="bg-[#f8fafc] text-slate-900 font-bold border-b border-slate-200">
                  <tr>
                    {service.specsTable.headers.map((head, i) => (
                      <th key={i} className={`py-4 px-4 sm:px-6 ${i === 0 ? 'text-slate-900 font-extrabold' : 'text-center font-bold text-[#0baba0]'}`}>
                        {head}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {service.specsTable.rows.map((row, rIdx) => (
                    <tr key={rIdx} className={rIdx % 2 === 0 ? 'bg-white' : 'bg-slate-50/50 hover:bg-teal-50/30 transition-colors'}>
                      <td className="py-3.5 px-4 sm:px-6 font-semibold text-slate-900 whitespace-nowrap">
                        {row.label}
                      </td>
                      {row.values.map((val, vIdx) => (
                        <td key={vIdx} className="py-3.5 px-4 sm:px-6 text-center whitespace-nowrap font-medium text-slate-600">
                          {val}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

          </div>
        </section>
      )}

      {/* 6. STANDARDIZED 4-STEP IMPLEMENTATION PROCESS */}
      <section className="w-full bg-gradient-to-b from-teal-50/20 via-white to-teal-50/30 border-b border-slate-200/80 py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0baba0]">Quy Trình Chuẩn Hóa</span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              4 Bước Triển Khai Nhanh Chóng & Chuyên Nghiệp
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm">
              Tiết kiệm thời gian, kích hoạt hệ thống tức thì và cam kết hỗ trợ toàn diện trong suốt quá trình sử dụng.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-3xl p-6 border border-slate-200/80 hover:border-[#0baba0] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 space-y-3 relative group">
              <div className="w-10 h-10 rounded-2xl bg-teal-50 text-[#0baba0] font-mono font-black flex items-center justify-center text-sm shadow-2xs group-hover:bg-[#0baba0] group-hover:text-white transition-colors">
                01
              </div>
              <h3 className="font-bold text-base text-slate-900">Tư Vấn & Chọn Gói</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Chuyên viên phân tích nhu cầu thực tế, ước tính lưu lượng truy cập và đề xuất gói cấu hình tối ưu chi phí nhất.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-slate-200/80 hover:border-[#0baba0] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 space-y-3 relative group">
              <div className="w-10 h-10 rounded-2xl bg-teal-50 text-[#0baba0] font-mono font-black flex items-center justify-center text-sm shadow-2xs group-hover:bg-[#0baba0] group-hover:text-white transition-colors">
                02
              </div>
              <h3 className="font-bold text-base text-slate-900">Kích Hoạt Trong 5 Phút</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Hệ thống tự động khởi tạo máy chủ, cài đặt hệ điều hành và gửi toàn bộ thông tin đăng nhập quản trị qua Email/Zalo.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-slate-200/80 hover:border-[#0baba0] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 space-y-3 relative group">
              <div className="w-10 h-10 rounded-2xl bg-teal-50 text-[#0baba0] font-mono font-black flex items-center justify-center text-sm shadow-2xs group-hover:bg-[#0baba0] group-hover:text-white transition-colors">
                03
              </div>
              <h3 className="font-bold text-base text-slate-900">Chuyển Dữ Liệu Miễn Phí</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Kỹ thuật viên hỗ trợ chuyển toàn bộ website, cơ sở dữ liệu và cấu hình từ máy chủ cũ sang Uni Creation với 0đ chi phí.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-slate-200/80 hover:border-[#0baba0] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 space-y-3 relative group">
              <div className="w-10 h-10 rounded-2xl bg-teal-50 text-[#0baba0] font-mono font-black flex items-center justify-center text-sm shadow-2xs group-hover:bg-[#0baba0] group-hover:text-white transition-colors">
                04
              </div>
              <h3 className="font-bold text-base text-slate-900">Bảo Hành & Trợ Giúp 24/7</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Đội ngũ kỹ sư túc trực 24/7/365, tự động giám sát Uptime và sao lưu dữ liệu an toàn mỗi ngày.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 7. 5-STAR QUALITY COMMITMENTS & ENTERPRISE GUARANTEES */}
      <section className="w-full bg-white border-b border-slate-200/80 py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#91c544]">Cam Kết Chất Lượng</span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              Vì Sao Khách Hàng Tin Tưởng Uni Creation?
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm">
              Hơn +10 năm kinh nghiệm trong ngành giải pháp số, phục vụ hàng nghìn doanh nghiệp trên khắp cả nước.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {(service.guarantees || [
              { title: 'Chuyển Dữ Liệu Miễn Phí', desc: 'Hỗ trợ chuyển toàn bộ website và dữ liệu từ nhà cung cấp cũ sang Uni Creation hoàn toàn miễn phí không gián đoạn.' },
              { title: 'Cam Kết Hoàn Tiền 30 Ngày', desc: 'Hoàn trả 100% chi phí nếu hệ thống không đáp ứng đúng tiêu chuẩn kỹ thuật hoặc bạn không hài lòng về tốc độ.' },
              { title: '100% Tài Nguyên Thực', desc: 'Không oversell, cam kết phân bổ đủ CPU, RAM và NVMe độc lập cho từng gói dịch vụ.' },
              { title: 'Hỗ Trợ Kỹ Thuật 24/7/365', desc: 'Đội ngũ kỹ sư hệ thống trực tiếp xử lý sự cố trong vòng 15 phút qua Hotline, Zalo và Ticket.' }
            ]).map((g, idx) => (
              <div key={idx} className="p-6 bg-gradient-to-b from-white to-teal-50/20 rounded-3xl border border-slate-200/80 hover:border-[#0baba0] hover:shadow-md transition-all duration-300 space-y-2.5 shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-200 flex items-center justify-center text-[#0baba0]">
                  <ShieldCheck className="w-5 h-5 text-[#0baba0]" />
                </div>
                <h4 className="font-bold text-sm text-slate-900">{g.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{g.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 8. WORKING CONSULTATION & ORDER FORM (FULL-WIDTH MODERN LIGHT DESIGN) */}
      <section id="service-order-form" className="w-full bg-gradient-to-br from-[#f8fafc] via-white to-teal-50/30 border-b border-slate-200/80 py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-white rounded-3xl p-6 sm:p-12 border border-slate-200 shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              <div className="lg:col-span-5 space-y-5">
                <div className="inline-flex items-center gap-1.5 px-3.5 py-1 bg-[#0baba0]/10 border border-[#0baba0]/30 rounded-full text-xs text-[#088c83] font-bold">
                  <Sparkles className="w-3.5 h-3.5 text-[#91c544]" />
                  <span>Đăng Ký Khởi Tạo Nhanh</span>
                </div>

                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                  Nhận Báo Giá & Tư Vấn Gói {selectedTier ? `"${selectedTier}"` : service.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Để lại thông tin bên dưới hoặc gọi trực tiếp đến tổng đài chuyên gia để được tư vấn cấu hình phù hợp và nhận mã chiết khấu tốt nhất trong vòng 15 phút.
                </p>

                <div className="pt-2 space-y-3 text-xs">
                  <div className="flex items-center gap-2.5 text-slate-700">
                    <Phone className="w-4 h-4 text-[#0baba0]" />
                    <span>Tổng đài tư vấn: <strong className="text-slate-900 font-mono text-sm">{COMPANY_INFO.hotline}</strong></span>
                  </div>
                  <div className="flex items-center gap-2.5 text-slate-700">
                    <Headphones className="w-4 h-4 text-[#0baba0]" />
                    <span>Hỗ trợ kỹ thuật 24/7: <strong className="text-slate-900 font-mono text-sm">{COMPANY_INFO.techHotline}</strong></span>
                  </div>
                  <div className="flex items-center gap-2.5 text-slate-700">
                    <ShieldCheck className="w-4 h-4 text-[#91c544]" />
                    <span>Hợp đồng kinh tế & Xuất hóa đơn VAT điện tử 100% hợp pháp</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7 bg-[#f8fafc] rounded-2xl p-6 sm:p-8 border border-slate-200">
                {submitted ? (
                  <div className="py-10 text-center space-y-4">
                    <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center shadow-xs">
                      <CheckCircle2 className="w-9 h-9" />
                    </div>
                    <h4 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                      Đã Gửi Yêu Cầu Thành Công!
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                      Cảm ơn bạn! Chuyên viên giải pháp của Uni Creation sẽ gọi lại qua số điện thoại <strong className="text-[#0baba0] font-mono">{clientPhone}</strong> trong vòng 15 phút để hỗ trợ khởi tạo dịch vụ <strong>{selectedTier || service.title}</strong>.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-2 px-6 py-2.5 btn-brand-gradient text-white rounded-xl text-xs font-bold cursor-pointer shadow"
                    >
                      Gửi thêm yêu cầu khác
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Họ và tên của bạn (*)
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Ví dụ: Nguyễn Văn A"
                          value={clientName}
                          onChange={(e) => setClientName(e.target.value)}
                          className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0baba0] bg-white"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Số điện thoại / Zalo (*)
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="Ví dụ: 0912 345 678"
                          value={clientPhone}
                          onChange={(e) => setClientPhone(e.target.value)}
                          className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0baba0] bg-white font-mono"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Gói dịch vụ quan tâm
                        </label>
                        <select
                          value={selectedTier}
                          onChange={(e) => setSelectedTier(e.target.value)}
                          className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0baba0] bg-white font-medium"
                        >
                          {displayedTiers.map((t, i) => (
                            <option key={i} value={t.name}>
                              {t.name} - {t.price} {t.period ? `/${t.period}` : ''}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Tên miền / Website hiện tại (nếu có)
                        </label>
                        <input
                          type="text"
                          placeholder="Ví dụ: tencongty.vn"
                          value={clientDomain}
                          onChange={(e) => setClientDomain(e.target.value)}
                          className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0baba0] bg-white"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Ghi chú hoặc yêu cầu cụ thể (Cần chuyển web, xuất VAT,...)
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Ví dụ: Cần chuyển dữ liệu từ nhà cung cấp cũ, hỗ trợ cài đặt mã nguồn..."
                        value={clientNote}
                        onChange={(e) => setClientNote(e.target.value)}
                        className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0baba0] bg-white"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 px-4 btn-brand-gradient text-white rounded-xl text-xs font-bold uppercase tracking-wider shadow-md hover:shadow-lg hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      <span>Gửi Yêu Cầu Đăng Ký Ngay</span>
                    </button>
                  </form>
                )}
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 9. FREQUENTLY ASKED QUESTIONS (ACCORDION SECTION) */}
      {service.faqs && service.faqs.length > 0 && (
        <section className="w-full bg-white py-14 sm:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            
            <div className="text-center space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0baba0] inline-flex items-center gap-1.5">
                <HelpCircle className="w-3.5 h-3.5" />
                Giải Đáp Thắc Mắc
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Câu Hỏi Thường Gặp Về {service.title}
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm">
                Nếu bạn có câu hỏi khác chưa được giải đáp, hãy liên hệ tổng đài 24/7 của chúng tôi.
              </p>
            </div>

            <div className="space-y-3 pt-2">
              {service.faqs.map((faq, i) => {
                const isOpen = openFaqIndex === i;
                return (
                  <div
                    key={i}
                    className="border border-slate-200 rounded-2xl overflow-hidden transition-all bg-[#f8fafc]"
                  >
                    <button
                      onClick={() => setOpenFaqIndex(isOpen ? null : i)}
                      className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-bold text-sm text-slate-900 hover:text-[#0baba0] transition-colors cursor-pointer"
                    >
                      <span>{faq.question}</span>
                      {isOpen ? (
                        <ChevronUp className="w-4 h-4 text-[#0baba0] shrink-0" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                      )}
                    </button>

                    {isOpen && (
                      <div className="px-4 pb-4 sm:px-5 sm:pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-white pt-3">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

          </div>
        </section>
      )}

    </div>
  );
};

// Dispatcher Component: Selects the appropriate view without any hook order inconsistencies
export const ServiceDetailView: React.FC<ServiceDetailViewProps> = ({
  serviceSlug,
  onNavigateHome,
  onOpenCalculator,
  onNavigateToTheme,
  onNavigateToThemes
}) => {
  if (serviceSlug === 'dich-vu-quang-cao') {
    return (
      <GoogleAdsServiceView
        onNavigateHome={onNavigateHome}
        onOpenCalculator={onOpenCalculator}
      />
    );
  }

  if (serviceSlug === 'thiet-ke-website-tron-goi') {
    return (
      <WebDesignServiceView
        onNavigateHome={onNavigateHome}
        onOpenCalculator={onOpenCalculator}
        onNavigateToTheme={onNavigateToTheme}
        onNavigateToThemes={onNavigateToThemes}
      />
    );
  }

  return (
    <StandardServiceDetailView
      key={serviceSlug}
      serviceSlug={serviceSlug}
      onNavigateHome={onNavigateHome}
      onOpenCalculator={onOpenCalculator}
      onNavigateToTheme={onNavigateToTheme}
      onNavigateToThemes={onNavigateToThemes}
    />
  );
};
