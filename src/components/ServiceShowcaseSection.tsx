import React, { useState, useEffect, useRef } from 'react';
import {
  WebDesignAnimation,
  ServerHostingAnimation,
  DomainAnimation,
  EmailAnimation,
  BrandIdentityAnimation,
  ContentWritingAnimation,
  AdsMarketingAnimation,
  FacebookSocialAnimation
} from './ServiceAnimations';
import {
  Globe,
  Server,
  Search,
  Mail,
  Palette,
  FileEdit,
  Megaphone,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Zap,
  Play,
  Pause,
  ChevronLeft,
  ChevronRight,
  Smartphone
} from 'lucide-react';

interface ServiceShowcaseSectionProps {
  onNavigateToService: (serviceSlug: string) => void;
  onOpenCalculator: () => void;
}

export const ServiceShowcaseSection: React.FC<ServiceShowcaseSectionProps> = ({
  onNavigateToService,
  onOpenCalculator
}) => {
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(false);
  const pillsContainerRef = useRef<HTMLDivElement>(null);

  const services = [
    {
      id: 'web',
      slug: 'thiet-ke-website-tron-goi',
      name: 'Thiết Kế Website',
      shortName: 'Thiết Kế Website',
      icon: Globe,
      badge: 'Từ 2.500.000 đ',
      heading: 'Thiết Kế Website Trọn Gói Chuẩn SEO 2026',
      description: 'Giao diện độc bản chuẩn UI/UX, tương thích 100% mọi thiết bị di động, tốc độ tải trang dưới 0.8s, tặng tên miền và hosting.',
      features: [
        'Bàn giao 100% Full Source Code không mã hóa',
        'Tặng tên miền quốc tế .com / .net & SSL trọn đời',
        'Chuẩn SEO Onpage 100%, tích hợp Google Analytics 4',
        'Chính sách bảo hành kỹ thuật miễn phí trọn đời'
      ],
      component: <WebDesignAnimation />
    },
    {
      id: 'hosting',
      slug: 'dich-vu-hosting',
      name: 'Hosting & Cloud VPS',
      shortName: 'Hosting NVMe',
      icon: Server,
      badge: 'Uptime 99.9%',
      heading: 'Hosting & Máy Chủ Cloud Pure NVMe U.2',
      description: 'Hạ tầng máy chủ Dell PowerEdge cao cấp đặt tại Viettel IDC & VNPT, ổ cứng Pure NVMe SSD tốc độ đọc ghi 3.400+ MB/s.',
      features: [
        'LiteSpeed Web Server + LSCache tăng tốc gấp 6 lần',
        'CloudLinux OS cô lập tài nguyên, chống tấn công local',
        'Bảo mật Imunify360 quét mã độc và chặn bot độc hại',
        'JetBackup tự động sao lưu định kỳ hàng ngày'
      ],
      component: <ServerHostingAnimation />
    },
    {
      id: 'domain',
      slug: 'dich-vu-ten-mien',
      name: 'Tra Cứu Tên Miền',
      shortName: 'Tên Miền DNS',
      icon: Search,
      badge: 'Từ 320k/năm',
      heading: 'Dịch Vụ Đăng Ký Tên Miền Quốc Tế & Việt Nam',
      description: 'Hệ thống quản lý DNS Anycast tốc độ cao, xác thực chính chủ VNNIC, kích hoạt tức thì sau 5 phút.',
      features: [
        'Bảo hộ thương hiệu với đuôi tên miền .vn, .com.vn',
        'Hỗ trợ DNS Anycast phân tán toàn cầu cực nhanh',
        'Khóa tên miền Domain Lock chống đánh cắp dữ liệu',
        'Hỗ trợ cấu hình trỏ IP và bản ghi DNS miễn phí'
      ],
      component: <DomainAnimation />
    },
    {
      id: 'email',
      slug: 'dich-vu-email-google',
      name: 'Email Doanh Nghiệp',
      shortName: 'Email Google',
      icon: Mail,
      badge: 'Inbox 99.9%',
      heading: 'Google Workspace & Email Tên Miền Riêng',
      description: 'Khẳng định uy tín thương hiệu với địa chỉ email chuyên nghiệp user@tencongty.com, dung lượng Drive lớn, bảo mật 2FA.',
      features: [
        'Giao diện Gmail quen thuộc trên PC và Smartphone',
        'Bộ công cụ Google Drive, Docs, Sheets, Google Meet',
        'Bộ lọc chống thư rác và phishing thông minh',
        'Hỗ trợ di chuyển dữ liệu từ hệ thống email cũ'
      ],
      component: <EmailAnimation />
    },
    {
      id: 'branding',
      slug: 'nhan-dien-thuong-hieu',
      name: 'Nhận Diện Thương Hiệu',
      shortName: 'Logo & Brand',
      icon: Palette,
      badge: 'Độc Quyền 100%',
      heading: 'Thiết Kế Logo & Hệ Thống Nhận Diện Thương Hiệu',
      description: 'Xây dựng hình ảnh thương hiệu chuyên nghiệp, chuẩn phong thủy và tỷ lệ vàng hình học, giúp doanh nghiệp ghi dấu ấn bền vững.',
      features: [
        'Bộ 3 - 5 phương án thiết kế logo độc bản sáng tạo',
        'Bàn giao đầy đủ file gốc in ấn Vector AI, EPS, PDF',
        'Quy chuẩn Brand Guidelines, hệ màu và typography',
        'Thiết kế ấn phẩm văn phòng: Card visit, phong bì, kẹp file'
      ],
      component: <BrandIdentityAnimation />
    },
    {
      id: 'content',
      slug: 'viet-noi-dung-website',
      name: 'Viết Bài Chuẩn SEO',
      shortName: 'Nội Dung SEO',
      icon: FileEdit,
      badge: 'Unique 100%',
      heading: 'Dịch Vụ Biên Tập Bài Viết Chuẩn SEO Chuyên Sâu',
      description: 'Nội dung cuốn hút, chuẩn cấu trúc Semantic Search và Search Intent của khách hàng, tăng tỷ lệ chuyển đổi đơn hàng.',
      features: [
        'Bài viết unique 100%, không copy, thông tin xác thực',
        'Nghiên cứu từ khóa chính và bộ từ khóa LSI chuyên sâu',
        'Thiết kế ảnh minh họa độc quyền kèm chèn logo thương hiệu',
        'Index nhanh chóng trên Google và hỗ trợ đăng bài website'
      ],
      component: <ContentWritingAnimation />
    },
    {
      id: 'ads',
      slug: 'dich-vu-quang-cao',
      name: 'Quảng Cáo Google & Facebook',
      shortName: 'Quảng Cáo Ads',
      icon: Megaphone,
      badge: 'ROI +280%',
      heading: 'Quảng Cáo Google Ads & Facebook Social Marketing',
      description: 'Tối ưu chi phí trên từng lượt click (CPA), nhắm trúng đối tượng khách hàng có nhu cầu mua sắm thực tế, bứt phá doanh thu.',
      features: [
        'Quảng cáo Google Search xuất hiện top 1-3 ngay sau setup',
        'Quảng cáo Google Shopping phủ sóng sản phẩm kèm giá',
        'Quảng cáo Facebook & Instagram Lead Ads thu thập khách hàng',
        'Tích hợp công cụ chặn click ảo, click tặc tự động'
      ],
      component: <AdsMarketingAnimation />
    }
  ];

  // Auto-play interval
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % services.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isAutoPlaying, services.length]);

  const currentService = services[activeIdx];

  const handlePrev = () => {
    setActiveIdx((prev) => (prev - 1 + services.length) % services.length);
  };

  const handleNext = () => {
    setActiveIdx((prev) => (prev + 1) % services.length);
  };

  const scrollPills = (direction: 'left' | 'right') => {
    if (pillsContainerRef.current) {
      const scrollAmount = direction === 'left' ? -220 : 220;
      pillsContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="space-y-6">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#0baba0]/10 border border-[#0baba0]/30 rounded-full text-xs font-semibold text-[#088c83] mb-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#91c544]" />
            <span>Toàn Bộ Các Dịch Vụ Cung Cấp · Hoạt Ảnh Trực Quan</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Khám Phá Các Dịch Vụ Tại Uni Creation
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm mt-1 max-w-2xl">
            Bấm chọn hoặc bật chế độ tự động chạy để xem mô phỏng hoạt ảnh và chi tiết tính năng của từng dịch vụ.
          </p>
        </div>

        {/* Feature controls: Run / Auto-play button & Prev/Next arrows */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 shadow-xs ${
              isAutoPlaying
                ? 'bg-emerald-600 text-white shadow-emerald-600/30 ring-2 ring-emerald-500/30'
                : 'bg-white hover:bg-slate-50 text-slate-700 border border-slate-200/90'
            }`}
            title={isAutoPlaying ? 'Tạm dừng chạy tự động' : 'Bấm chạy tự động xem lần lượt các dịch vụ'}
          >
            {isAutoPlaying ? (
              <>
                <Pause className="w-4 h-4 animate-pulse" />
                <span>Đang Tự Động Chạy ({activeIdx + 1}/{services.length})</span>
              </>
            ) : (
              <>
                <Play className="w-4 h-4 text-[#0baba0]" />
                <span className="font-bold">Bấm Chạy Tự Động</span>
              </>
            )}
          </button>

          <div className="flex items-center gap-1">
            <button
              onClick={handlePrev}
              className="p-2 bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 rounded-xl shadow-2xs hover:border-[#0baba0] hover:text-[#0baba0] cursor-pointer transition-colors"
              title="Xem dịch vụ trước"
              aria-label="Dịch vụ trước"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              className="p-2 bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 rounded-xl shadow-2xs hover:border-[#0baba0] hover:text-[#0baba0] cursor-pointer transition-colors"
              title="Xem dịch vụ tiếp theo"
              aria-label="Dịch vụ tiếp theo"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Full Services Navigation Pills with Scroll Arrows & Full Visibility */}
      <div className="relative group">
        {/* Scroll Left Button for small/medium viewports */}
        <button
          onClick={() => scrollPills('left')}
          className="absolute -left-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-white border border-slate-200 shadow-md text-slate-700 hover:text-[#0baba0] flex items-center justify-center cursor-pointer transition-all md:hidden"
          aria-label="Cuộn sang trái"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        {/* Scroll Right Button for small/medium viewports */}
        <button
          onClick={() => scrollPills('right')}
          className="absolute -right-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-white border border-slate-200 shadow-md text-slate-700 hover:text-[#0baba0] flex items-center justify-center cursor-pointer transition-all md:hidden"
          aria-label="Cuộn sang phải"
        >
          <ChevronRight className="w-4 h-4" />
        </button>

        {/* Pills wrapper: Wraps cleanly into full grid or clean flex rows so nothing is ever hidden */}
        <div
          ref={pillsContainerRef}
          className="flex flex-nowrap lg:flex-wrap items-center gap-2 overflow-x-auto lg:overflow-x-visible pb-2 pt-1 px-1 scrollbar-none justify-start lg:justify-center"
        >
          {services.map((s, idx) => {
            const Icon = s.icon;
            const isActive = activeIdx === idx;
            return (
              <button
                key={s.id}
                onClick={() => {
                  setActiveIdx(idx);
                  setIsAutoPlaying(false);
                }}
                className={`flex items-center gap-2 px-3.5 py-2.5 rounded-2xl text-xs font-bold transition-all cursor-pointer shrink-0 ${
                  isActive
                    ? 'btn-brand-gradient text-white shadow-md scale-102 ring-2 ring-[#0baba0]/30'
                    : 'bg-white text-slate-700 hover:text-[#0baba0] hover:bg-slate-50 border border-slate-200/90 shadow-2xs hover:border-[#0baba0]/50'
                }`}
              >
                <Icon className="w-4 h-4 shrink-0" />
                <span className="whitespace-nowrap">{s.shortName}</span>
                <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-semibold whitespace-nowrap ${
                  isActive ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500'
                }`}>
                  {s.badge}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Service Showcase Card (Split Layout: Copy + Interactive Animation) */}
      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-xl relative overflow-hidden transition-all duration-300">
        {/* Soft background glow */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#0baba0]/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
          
          {/* Left copy */}
          <div className="lg:col-span-6 space-y-5">
            <div className="flex items-center justify-between">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 text-emerald-800 border border-emerald-200/80 rounded-full text-xs font-bold">
                <Zap className="w-3.5 h-3.5 text-[#91c544]" />
                <span>Dịch Vụ {activeIdx + 1}/{services.length}: {currentService.name}</span>
              </div>

              {/* Prev / Next controls inside card */}
              <div className="flex items-center gap-1.5 text-xs text-slate-500">
                <button
                  onClick={handlePrev}
                  className="px-2.5 py-1 bg-slate-100 hover:bg-slate-200 rounded-lg font-bold text-slate-700 transition-colors cursor-pointer"
                >
                  ← Trước
                </button>
                <button
                  onClick={handleNext}
                  className="px-2.5 py-1 bg-slate-100 hover:bg-slate-200 rounded-lg font-bold text-slate-700 transition-colors cursor-pointer"
                >
                  Tiếp theo →
                </button>
              </div>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
              {currentService.heading}
            </h3>

            <p className="text-slate-600 text-sm leading-relaxed">
              {currentService.description}
            </p>

            {/* Checklist */}
            <div className="space-y-2.5 pt-1 text-xs sm:text-sm text-slate-700">
              {currentService.features.map((feat, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#91c544] shrink-0 mt-0.5" />
                  <span className="font-medium">{feat}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="pt-3 flex flex-wrap items-center gap-3">
              <button
                onClick={() => onNavigateToService(currentService.slug)}
                className="btn-brand-gradient text-white text-xs font-bold uppercase tracking-wider px-6 py-3.5 rounded-2xl shadow-md hover:shadow-lg transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Xem Báo Giá & Chi Tiết Dịch Vụ</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {currentService.id === 'web' && (
                <button
                  onClick={onOpenCalculator}
                  className="px-5 py-3.5 bg-slate-50 hover:bg-slate-100 text-slate-800 border border-slate-200/90 text-xs font-bold rounded-2xl transition-colors cursor-pointer"
                >
                  Dự Toán Ngân Sách Nhanh
                </button>
              )}
            </div>
          </div>

          {/* Right interactive animation */}
          <div className="lg:col-span-6">
            {currentService.component}
          </div>

        </div>

        {/* Bottom service indicator strip */}
        <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
          <span className="font-medium">
            Đang xem: <strong className="text-slate-900">{currentService.name}</strong> ({currentService.badge})
          </span>
          <div className="flex items-center gap-1.5">
            {services.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIdx(i)}
                className={`h-2 rounded-full transition-all cursor-pointer ${
                  activeIdx === i ? 'w-5 bg-[#0baba0]' : 'w-2 bg-slate-300 hover:bg-slate-400'
                }`}
                aria-label={`Dịch vụ ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
