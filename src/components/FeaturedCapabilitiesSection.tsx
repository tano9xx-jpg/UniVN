import React, { useState } from 'react';
import {
  Sparkles,
  Layout,
  Search,
  Zap,
  Smartphone,
  ShieldCheck,
  Code,
  HeartHandshake,
  Headphones,
  CheckCircle2,
  Cpu,
  Layers,
  ArrowRight,
  ExternalLink,
  Lock
} from 'lucide-react';

interface FeatureItem {
  id: string;
  title: string;
  category: string;
  badge: string;
  desc: string;
  metric: string;
  metricLabel: string;
  icon: React.ElementType;
  highlights: string[];
}

export const FeaturedCapabilitiesSection: React.FC<{
  onOpenCalculator?: () => void;
  onExploreThemes?: () => void;
}> = ({ onOpenCalculator, onExploreThemes }) => {
  const [activeTab, setActiveTab] = useState<string>('uiux');

  const features: FeatureItem[] = [
    {
      id: 'uiux',
      title: 'Giao Diện Chuẩn UI/UX Độc Quyền',
      category: 'Thiết Kế Sáng Tạo',
      badge: 'Độc Bản 100%',
      desc: 'Mỗi website được may đo theo nhận diện thương hiệu riêng biệt. Không sử dụng template rập khuôn, tối ưu từng điểm chạm giúp giữ chân khách hàng lâu hơn.',
      metric: '300%',
      metricLabel: 'Tăng thời gian ở lại trang',
      icon: Layout,
      highlights: [
        'Bản vẽ thiết kế độc quyền phù hợp nhận diện ngành',
        'Tối ưu bố cục thị giác (Visual Hierarchy)',
        'Định dạng Typography và bảng màu thương hiệu chuẩn',
        'Call-to-action bố trí khoa học, tăng tỷ lệ click'
      ]
    },
    {
      id: 'seo',
      title: 'Tối Ưu SEO Onpage 100% Chuẩn Google',
      category: 'Tiếp Thị Tự Nhiên',
      badge: 'Chuẩn 100/100',
      desc: 'Cấu trúc mã nguồn chuẩn W3C, hệ thống thẻ Heading H1-H6, meta tags, OpenGraph, sitemap.xml tự động và cấu trúc Schema Rich Snippets giúp từ khóa nhanh chóng lên top tìm kiếm.',
      metric: '100%',
      metricLabel: 'Điểm SEO Google Lighthouse',
      icon: Search,
      highlights: [
        'Cấu trúc dữ liệu Schema.org Rich Snippets',
        'Tự động sinh Sitemap.xml & Robots.txt chuẩn',
        'Tối ưu thẻ Canonical, Breadcrumbs & OpenGraph',
        'Tích hợp sẵn Google Analytics 4 & Search Console'
      ]
    },
    {
      id: 'speed',
      title: 'Tốc Độ Tải Trang Siêu Tốc < 0.8s',
      category: 'Hiệu Năng Vượt Trội',
      badge: 'Core Web Vitals',
      desc: 'Áp dụng công nghệ nén ảnh thế hệ mới WebP/AVIF, mã nguồn CSS/JS nén gọn, bộ nhớ đệm LiteSpeed Cache và máy chủ Pure NVMe U.2 mang lại trải nghiệm mở trang tức thì.',
      metric: '0.6s',
      metricLabel: 'Thời gian tải trang trung bình',
      icon: Zap,
      highlights: [
        'Tối ưu chỉ số LCP < 1.2s, FID < 50ms, CLS < 0.05',
        'Tự động nén ảnh WebP/AVIF không giảm chất lượng',
        'Hỗ trợ công nghệ CDN tăng tốc truy cập toàn cầu',
        'LiteSpeed Web Server tăng tốc gấp 6 lần Apache'
      ]
    },
    {
      id: 'responsive',
      title: 'Tương Thích Mọi Thiết Bị (Responsive 100%)',
      category: 'Trải Nghiệm Đa Màn Hình',
      badge: 'Mobile-First',
      desc: 'Công nghệ Responsive thích ứng mượt mà trên mọi kích thước màn hình từ iPhone, iPad, smartphone Android cho đến màn hình laptop và PC 4K mà không bị vỡ layout.',
      metric: '100%',
      metricLabel: 'Tương thích mọi thiết bị',
      icon: Smartphone,
      highlights: [
        'Thiết kế Mobile-First tối ưu chạm lướt ngón tay cái',
        'Thanh điều hướng nổi chuyên biệt cho điện thoại',
        'Nút gọi Hotline & Chat Zalo ghim tiện lợi trên mobile',
        'Chữ và hình ảnh tự động co giãn sắc nét'
      ]
    },
    {
      id: 'cms',
      title: 'Hệ Quản Trị CMS Tiếng Việt Thông Minh',
      category: 'Dễ Dàng Quản Lý',
      badge: 'Không Cần Biết Code',
      desc: 'Giao diện quản trị trực quan 100% bằng Tiếng Việt. Đăng sản phẩm, viết bài tin tức, quản lý đơn hàng và thay đổi banner chỉ với thao tác kéo thả đơn giản.',
      metric: '5 Phút',
      metricLabel: 'Thành thạo quản trị website',
      icon: Layers,
      highlights: [
        'Giao diện trực quan, thân thiện với người không chuyên',
        'Trình soạn thảo trực quan hỗ trợ tải ảnh kéo thả',
        'Quản lý kho hàng, thông báo đơn mới qua Email/Zalo',
        'Tài liệu & Video hướng dẫn 1-1 độc quyền từ Uni'
      ]
    },
    {
      id: 'security',
      title: 'Bảo Mật SSL & Tường Lửa Chống DDoS',
      category: 'An Toàn Tuyệt Đối',
      badge: 'SSL Trọn Đời',
      desc: 'Tích hợp sẵn chứng chỉ bảo mật SSL Let\'s Encrypt / Sectigo mã hóa dữ liệu 256-bit. Tường lửa Web Application Firewall (WAF) và phần mềm quét mã độc tự động ngăn ngừa xâm nhập.',
      metric: '99.99%',
      metricLabel: 'Uptime & An toàn dữ liệu',
      icon: ShieldCheck,
      highlights: [
        'Cài đặt sẵn chứng chỉ SSL chuẩn HTTPS xanh lá',
        'Tường lửa Imunify360 quét mã độc và chặn IP xấu',
        'Tự động sao lưu dữ liệu JetBackup định kỳ hàng ngày',
        'Chống brute force và ngăn chặn form spam'
      ]
    },
    {
      id: 'convert',
      title: 'Tích Hợp Đa Kênh & Cổng Thanh Toán',
      category: 'Tăng Trưởng Doanh Thu',
      badge: 'Bán Hàng Tự Động',
      desc: 'Kết nối trọn bộ công cụ bán hàng: Nút gọi nhanh Hotline, Chat Zalo, Messenger, bản đồ Google Maps, giỏ hàng trực tuyến và các cổng thanh toán QR Code / VNPay / MoMo.',
      metric: '+250%',
      metricLabel: 'Tăng tỷ lệ liên hệ mua hàng',
      icon: CheckCircle2,
      highlights: [
        'Nút chuyển đổi Zalo, Hotline, Messenger nổi bật',
        'Tích hợp thanh toán quét mã VietQR tự động xác nhận',
        'Kết nối phần mềm bán hàng KiotViet, Sapo (tùy chọn)',
        'Form gửi thông tin liên hệ gửi thẳng về Email'
      ]
    },
    {
      id: 'warranty',
      title: 'Bàn Giao 100% Source Code & Bảo Hành Trọn Đời',
      category: 'Cam Kết Vàng',
      badge: 'Bảo Hành Trọn Đời',
      desc: 'Khách hàng sở hữu hoàn toàn 100% mã nguồn và cơ sở dữ liệu sau khi bàn giao, không bị phụ thuộc. Uni Creation cam kết đồng hành kỹ thuật miễn phí trong suốt vòng đời sử dụng.',
      metric: '100%',
      metricLabel: 'Khách hàng nắm giữ bản quyền',
      icon: HeartHandshake,
      highlights: [
        'Bàn giao đầy đủ file mã nguồn & database gốc',
        'Không mã hóa code, khách hàng tự do nâng cấp',
        'Bảo hành kỹ thuật, khắc phục sự cố miễn phí trọn đời',
        'Đội ngũ hỗ trợ phản hồi trong 15-30 phút 24/7'
      ]
    }
  ];

  const currentFeature = features.find(f => f.id === activeTab) || features[0];
  const CurrentIcon = currentFeature.icon;

  return (
    <section className="space-y-8">
      {/* Header section */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#0baba0]/10 border border-[#0baba0]/30 rounded-full text-xs font-semibold text-[#088c83]">
          <Sparkles className="w-3.5 h-3.5 text-[#91c544]" />
          <span>Công Nghệ & Tính Năng Vượt Trội</span>
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
          Tính Năng Tiêu Biểu Trên Mỗi Sản Phẩm Website
        </h2>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          Mọi website được Uni Creation kiến tạo đều hội tụ đầy đủ các tiêu chuẩn khắt khe nhất về giao diện, tốc độ, bảo mật và khả năng chuyển đổi đơn hàng cho doanh nghiệp.
        </p>
      </div>

      {/* Main Interactive Showcase Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        
        {/* Left Side: 8 Feature Category Selector Pills */}
        <div className="lg:col-span-5 flex flex-col gap-2">
          {features.map((feat) => {
            const Icon = feat.icon;
            const isSelected = activeTab === feat.id;
            return (
              <button
                key={feat.id}
                onClick={() => setActiveTab(feat.id)}
                className={`flex items-center justify-between p-3.5 rounded-2xl text-left transition-all duration-200 cursor-pointer border ${
                  isSelected
                    ? 'bg-white border-[#0baba0] shadow-md ring-2 ring-[#0baba0]/20 translate-x-1'
                    : 'bg-white/80 hover:bg-white border-slate-200/90 hover:border-slate-300 text-slate-700'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                      isSelected
                        ? 'bg-gradient-to-tr from-[#0baba0] to-[#91c544] text-white shadow-xs'
                        : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className={`text-xs font-bold ${isSelected ? 'text-[#088c83]' : 'text-slate-900'}`}>
                      {feat.title}
                    </h3>
                    <p className="text-[11px] text-slate-500 line-clamp-1">
                      {feat.category}
                    </p>
                  </div>
                </div>

                <span
                  className={`text-[10px] font-bold px-2 py-0.5 rounded-md shrink-0 ${
                    isSelected
                      ? 'bg-teal-50 text-[#088c83] border border-teal-200'
                      : 'bg-slate-100 text-slate-500'
                  }`}
                >
                  {feat.badge}
                </span>
              </button>
            );
          })}
        </div>

        {/* Right Side: Detailed Showcase Card with Visual Inspector */}
        <div className="lg:col-span-7 bg-white rounded-3xl border border-teal-100/80 shadow-lg p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden">
          
          {/* Ambient top decoration */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-teal-100/40 via-emerald-50/20 to-transparent rounded-full blur-2xl pointer-events-none -z-0"></div>

          <div className="relative z-10 space-y-6">
            
            {/* Header with Metric Callout */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#0baba0] to-[#91c544] text-white flex items-center justify-center shadow-md">
                  <CurrentIcon className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#0baba0]">
                    {currentFeature.category}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                    {currentFeature.title}
                  </h3>
                </div>
              </div>

              {/* Metric Card */}
              <div className="bg-gradient-to-br from-teal-50 to-emerald-50 border border-teal-200/70 rounded-2xl px-4 py-2.5 text-center shrink-0">
                <div className="text-2xl font-black text-[#0baba0]">
                  {currentFeature.metric}
                </div>
                <div className="text-[10px] font-bold text-slate-600 uppercase tracking-wider">
                  {currentFeature.metricLabel}
                </div>
              </div>
            </div>

            {/* Feature Description */}
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              {currentFeature.desc}
            </p>

            {/* Checklist of Technical Highlights */}
            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5 text-[#0baba0]" />
                <span>Tiêu Chuẩn Kỹ Thuật Đạt Được:</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {currentFeature.highlights.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs font-medium text-slate-800"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#91c544] shrink-0 mt-0.5" />
                    <span className="leading-snug">{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Action Row */}
          <div className="relative z-10 pt-6 mt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
            <div className="text-xs text-slate-500 font-medium">
              Tất cả tính năng đã bao gồm trong cả 3 gói: <span className="font-bold text-slate-800">Startup, Pro, VIP</span>
            </div>
            
            <div className="flex items-center gap-2">
              {onExploreThemes && (
                <button
                  onClick={onExploreThemes}
                  className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-bold transition-colors cursor-pointer"
                >
                  Xem mẫu demo
                </button>
              )}
              {onOpenCalculator && (
                <button
                  onClick={onOpenCalculator}
                  className="px-4 py-2 btn-brand-gradient text-white rounded-xl text-xs font-bold shadow-xs hover:shadow-md transition-all cursor-pointer inline-flex items-center gap-1.5"
                >
                  <span>Dự toán tính năng</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
