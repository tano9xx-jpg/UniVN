import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/siteData';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  ShieldCheck,
  Headphones,
  ExternalLink,
  Navigation,
  Copy,
  Check,
  Building2,
  Sparkles,
  ChevronRight,
  MessageSquare,
  HelpCircle,
  FileText,
  DollarSign,
  Laptop,
  Flame,
  ArrowRight
} from 'lucide-react';

interface ContactViewProps {
  preselectedService?: string;
  onNavigateHome?: () => void;
}

interface OfficeDetail {
  id: string;
  city: string;
  role: string;
  isHeadquarter: boolean;
  address: string;
  phone: string;
  email: string;
  hours: string;
  parking: string;
  directionsUrl: string;
  mapsOpenUrl: string;
  embedUrl: string;
}

const OFFICES: OfficeDetail[] = [
  {
    id: 'hanoi',
    city: 'Hà Nội',
    role: 'Trụ sở chính',
    isHeadquarter: true,
    address: 'Tầng 6, Số 303 Vũ Tông Phan, Phường Khương Đình, Quận Thanh Xuân, TP. Hà Nội',
    phone: COMPANY_INFO.hotline,
    email: COMPANY_INFO.email,
    hours: '08:00 – 18:00 (Thứ 2 – Thứ 7) | Trực Hotline 24/7',
    parking: 'Bãi đỗ ô tô và xe máy rộng rãi ngay sảnh tòa nhà, thang máy tốc độ cao lên Tầng 6',
    directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=303+Vũ+Tông+Phan,+Thanh+Xuân,+Hà+Nội',
    mapsOpenUrl: 'https://www.google.com/maps?cid=42986113966893208&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAMYASAFKgSnqNcy&hl=vi&source=embed',
    embedUrl: 'https://maps.google.com/maps?cid=42986113966893208&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAMYASAFKgSnqNcy&hl=vi&source=embed&output=embed'
  },
  {
    id: 'danang',
    city: 'Đà Nẵng',
    role: 'Chi nhánh Miền Trung',
    isHeadquarter: false,
    address: '41 Khuê Mỹ Đông 14, Phường Khuê Mỹ, Quận Ngũ Hành Sơn, TP. Đà Nẵng',
    phone: '0373.165.333',
    email: 'danang@unicreation.vn',
    hours: '08:00 – 17:30 (Thứ 2 – Thứ 7)',
    parking: 'Khu vực đỗ xe thoáng mát, vị trí thuận tiện di chuyển trung tâm Đà Nẵng',
    directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=41+Khuê+Mỹ+Đông+14,+Khuê+Mỹ,+Ngũ+Hành+Sơn,+Đà+Nẵng',
    mapsOpenUrl: 'https://www.google.com/maps/search/?api=1&query=41+Khuê+Mỹ+Đông+14,+Khuê+Mỹ,+Ngũ+Hành+Sơn,+Đà+Nẵng',
    embedUrl: 'https://maps.google.com/maps?q=41+Khu%C3%AA+M%E1%BB%B9+%C4%90%C3%B4ng+14,+Khu%C3%AA+M%E1%BB%B9,+Ng%C5%A9+H%C3%A0nh+S%C6%A1n,+%C4%90%C3%A0+N%E1%BA%B5ng&hl=vi&output=embed'
  },
  {
    id: 'hcm',
    city: 'TP. Hồ Chí Minh',
    role: 'Chi nhánh Miền Nam',
    isHeadquarter: false,
    address: '973/136 Nguyễn Ảnh Thủ, Phường Tân Chánh Hiệp, Quận 12, TP. Hồ Chí Minh',
    phone: COMPANY_INFO.hotline,
    email: 'hcm@unicreation.vn',
    hours: '08:00 – 17:30 (Thứ 2 – Thứ 7)',
    parking: 'Có chỗ gửi xe máy & ô tô thuận tiện, hỗ trợ đón tiếp khách hàng tận tình',
    directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=973/136+Nguyễn+Ảnh+Thủ,+Tân+Chánh+Hiệp,+Quận+12,+Hồ+Chí+Minh',
    mapsOpenUrl: 'https://www.google.com/maps/search/?api=1&query=973/136+Nguyễn+Ảnh+Thủ,+Tân+Chánh+Hiệp,+Quận+12,+Hồ+Chí+Minh',
    embedUrl: 'https://maps.google.com/maps?q=973/136+Nguy%E1%BB%85n+%E1%BA%A2nh+Th%E1%BB%A7,+T%C3%A2n+Ch%C3%A1nh+Hi%E1%BB%87p,+Qu%E1%BA%ADn+12,+H%E1%BB%93+Ch%C3%AD+Minh&hl=vi&output=embed'
  }
];

export const ContactView: React.FC<ContactViewProps> = ({ preselectedService, onNavigateHome }) => {
  const [selectedOfficeId, setSelectedOfficeId] = useState<string>('hanoi');
  const [copiedText, setCopiedText] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: preselectedService || 'Gói Pro - 4.000.000 đ (Khuyên dùng)',
    budget: '5.000.000 đ - 15.000.000 đ',
    note: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const activeOffice = OFFICES.find((o) => o.id === selectedOfficeId) || OFFICES[0];

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard?.writeText(text);
    setCopiedText(label);
    setTimeout(() => {
      setCopiedText(null);
    }, 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.phone.trim()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const faqs = [
    {
      q: 'Doanh nghiệp ở các tỉnh xa hoặc nước ngoài có thể ký hợp đồng và làm việc được không?',
      a: 'Hoàn toàn được! Hơn 65% khách hàng của Uni Creation làm việc từ xa qua Zalo, Zoom, Google Meet. Chúng tôi áp dụng quy trình ký hợp đồng điện tử có chữ ký số và chuyển phát nhanh hợp đồng cứng tận nơi đảm bảo đầy đủ giá trị pháp lý.'
    },
    {
      q: 'Đăng ký tư vấn và nhận bản phác thảo demo ban đầu có mất phí không?',
      a: '100% Hoàn toàn miễn phí! Đội ngũ chuyên viên Uni Creation sẽ nghiên cứu sản phẩm ngành nghề của bạn, tư vấn cấu trúc web, lập dự toán chi phí minh bạch mà không phát sinh bất kỳ khoản phí khảo sát nào.'
    },
    {
      q: 'Sau khi gửi form liên hệ, bao lâu thì Uni Creation phản hồi?',
      a: 'Bộ phận tư vấn cam kết liên hệ lại qua số điện thoại hoặc Zalo trong vòng 15 – 30 phút trong giờ làm việc. Trường hợp ngoài giờ hoặc cuối tuần, chúng tôi vẫn có chuyên viên trực tổng đài hỗ trợ kịp thời.'
    },
    {
      q: 'Uni Creation có xuất hóa đơn giá trị gia tăng (VAT) hợp lệ không?',
      a: 'Có. Công ty Cổ phần Uni Creation Việt Nam (MST: 0109090636) xuất hóa đơn điện tử VAT đầy đủ theo quy định của Tổng cục Thuế cho mọi gói dịch vụ thiết kế website, hosting và tên miền.'
    }
  ];

  return (
    <div className="w-full bg-slate-50/70 pb-20">
      {/* 1. HERO SECTION (Full-width, Modern, Centered, Clean Aesthetic) */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white pt-16 pb-20 sm:pt-20 sm:pb-24 border-b border-slate-800">
        {/* Glow ambient background rings */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-80 bg-gradient-to-r from-teal-500/15 via-[#0baba0]/25 to-emerald-500/15 blur-3xl rounded-full pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(#0baba0_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center">
          {/* Centered Breadcrumb & Badge */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-5">
            <div className="flex items-center gap-1.5 text-xs text-slate-300">
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
              <span className="text-[#0baba0] font-semibold">Liên Hệ</span>
            </div>
            <span className="text-slate-600 hidden sm:inline">•</span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#0baba0]/15 text-[#30e2d5] border border-[#0baba0]/30 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#0baba0] animate-pulse" />
              Tổng Đài & Kỹ Thuật Trực 24/7
            </span>
          </div>

          {/* Centered Main Title & Description */}
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
              Liên Hệ & Nhận Báo Giá <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0baba0] via-teal-300 to-emerald-400">Uni Creation</span>
            </h1>
            <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Đội ngũ kỹ sư công nghệ và chuyên viên tư vấn giàu kinh nghiệm sẵn sàng lắng nghe, khảo sát nhu cầu và mang đến giải pháp website tối ưu chi phí & bứt phá doanh số cho doanh nghiệp của bạn.
            </p>
          </div>

          {/* 4 Wide Metric Highlights (No single-word line breaks) */}
          <div className="w-full max-w-5xl mt-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 text-center">
              <div className="bg-slate-900/80 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-slate-800 shadow-md flex flex-col items-center justify-center transition-transform hover:-translate-y-0.5">
                <span className="text-2xl sm:text-3xl font-extrabold text-[#0baba0] tracking-tight">15 Phút</span>
                <span className="text-xs sm:text-sm font-medium text-slate-300 mt-1 whitespace-nowrap">
                  Phản hồi báo giá nhanh
                </span>
              </div>

              <div className="bg-slate-900/80 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-slate-800 shadow-md flex flex-col items-center justify-center transition-transform hover:-translate-y-0.5">
                <span className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">3 Văn Phòng</span>
                <span className="text-xs sm:text-sm font-medium text-slate-300 mt-1 whitespace-nowrap">
                  Hà Nội • Đà Nẵng • TP.HCM
                </span>
              </div>

              <div className="bg-slate-900/80 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-slate-800 shadow-md flex flex-col items-center justify-center transition-transform hover:-translate-y-0.5">
                <span className="text-2xl sm:text-3xl font-extrabold text-emerald-400 tracking-tight">24/7/365</span>
                <span className="text-xs sm:text-sm font-medium text-slate-300 mt-1 whitespace-nowrap">
                  Hỗ trợ máy chủ & web
                </span>
              </div>

              <div className="bg-slate-900/80 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-slate-800 shadow-md flex flex-col items-center justify-center transition-transform hover:-translate-y-0.5">
                <span className="text-2xl sm:text-3xl font-extrabold text-amber-300 tracking-tight">100% Free</span>
                <span className="text-xs sm:text-sm font-medium text-slate-300 mt-1 whitespace-nowrap">
                  Khảo sát & Tư vấn demo
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. DEPARTMENT HOTLINE HUB (4 Dedicated Cards for Departments) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Card 1: Sales / Hotline Tổng Đài */}
          <div className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-md hover:shadow-lg transition-all duration-300 flex flex-col justify-between group hover:border-[#0baba0]/40">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold bg-teal-50 text-[#088c83] border border-teal-200/60">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0baba0]" />
                  Tổng Đài 24/7
                </span>
                <Phone className="w-4 h-4 text-[#0baba0] group-hover:rotate-12 transition-transform" />
              </div>
              <h3 className="font-bold text-slate-900 text-sm">Tư Vấn & Báo Giá Website</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Tư vấn chọn gói web, giao diện mẫu, khảo sát chi phí may đo theo ngành.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-100 mt-4 space-y-2">
              <a
                href={`tel:${COMPANY_INFO.hotline}`}
                className="flex items-center justify-between text-base font-extrabold font-mono text-[#088c83] hover:text-[#0baba0] transition-colors"
              >
                <span>{COMPANY_INFO.hotline}</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <div className="flex items-center gap-2 text-[11px]">
                <button
                  type="button"
                  onClick={() => handleCopy(COMPANY_INFO.hotline, 'hotline')}
                  className="text-slate-500 hover:text-slate-800 flex items-center gap-1 cursor-pointer"
                >
                  {copiedText === 'hotline' ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                  <span>{copiedText === 'hotline' ? 'Đã sao chép' : 'Sao chép'}</span>
                </button>
                <span className="text-slate-300">•</span>
                <a
                  href={`https://zalo.me/${COMPANY_INFO.hotline.replace(/\./g, '')}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-600 hover:underline font-semibold"
                >
                  Chat Zalo
                </a>
              </div>
            </div>
          </div>

          {/* Card 2: Tech Support & Hosting */}
          <div className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-md hover:shadow-lg transition-all duration-300 flex flex-col justify-between group hover:border-blue-400/40">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold bg-blue-50 text-blue-700 border border-blue-200/60">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  Kỹ Thuật Máy Chủ
                </span>
                <Headphones className="w-4 h-4 text-blue-600 group-hover:rotate-12 transition-transform" />
              </div>
              <h3 className="font-bold text-slate-900 text-sm">Hỗ Trợ Kỹ Thuật 24/7</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Tiếp nhận sự cố, xử lý lỗi website, cấu hình DNS tên miền và sao lưu máy chủ.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-100 mt-4 space-y-2">
              <a
                href={`tel:${COMPANY_INFO.techHotline}`}
                className="flex items-center justify-between text-base font-extrabold font-mono text-blue-700 hover:text-blue-800 transition-colors"
              >
                <span>{COMPANY_INFO.techHotline}</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <div className="flex items-center gap-2 text-[11px]">
                <a
                  href={`mailto:${COMPANY_INFO.techEmail}`}
                  className="text-slate-600 hover:text-slate-900 truncate max-w-[190px]"
                  title={COMPANY_INFO.techEmail}
                >
                  {COMPANY_INFO.techEmail}
                </a>
              </div>
            </div>
          </div>

          {/* Card 3: Marketing & Ads */}
          <div className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-md hover:shadow-lg transition-all duration-300 flex flex-col justify-between group hover:border-emerald-400/40">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200/60">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  Tăng Trưởng Số
                </span>
                <Sparkles className="w-4 h-4 text-emerald-600 group-hover:rotate-12 transition-transform" />
              </div>
              <h3 className="font-bold text-slate-900 text-sm">Quảng Cáo & SEO Google</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Chiến dịch Google Ads, Facebook Ads, dịch vụ SEO tổng thể và bài viết chuẩn SEO.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-100 mt-4 space-y-2">
              <a
                href={`tel:${COMPANY_INFO.adsHotline.split('-')[0].trim()}`}
                className="flex items-center justify-between text-base font-extrabold font-mono text-emerald-700 hover:text-emerald-800 transition-colors"
              >
                <span>{COMPANY_INFO.adsHotline.split('-')[0].trim()}</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <div className="flex items-center gap-2 text-[11px]">
                <button
                  type="button"
                  onClick={() => handleCopy(COMPANY_INFO.adsHotline, 'ads')}
                  className="text-slate-500 hover:text-slate-800 flex items-center gap-1 cursor-pointer"
                >
                  {copiedText === 'ads' ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                  <span>{copiedText === 'ads' ? 'Đã sao chép' : 'Sao chép 2 số'}</span>
                </button>
              </div>
            </div>
          </div>

          {/* Card 4: Customer Care & Contracts */}
          <div className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-md hover:shadow-lg transition-all duration-300 flex flex-col justify-between group hover:border-purple-400/40">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold bg-purple-50 text-purple-700 border border-purple-200/60">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                  Hợp Đồng & Hóa Đơn
                </span>
                <FileText className="w-4 h-4 text-purple-600 group-hover:rotate-12 transition-transform" />
              </div>
              <h3 className="font-bold text-slate-900 text-sm">Chăm Sóc & Kế Toán VAT</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Xuất hóa đơn GTGT, gia hạn tên miền, hợp đồng dịch vụ và hồ sơ thanh toán.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-100 mt-4 space-y-2">
              <a
                href={`tel:${COMPANY_INFO.cskhHotline}`}
                className="flex items-center justify-between text-base font-extrabold font-mono text-purple-700 hover:text-purple-800 transition-colors"
              >
                <span>{COMPANY_INFO.cskhHotline}</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <div className="flex items-center gap-2 text-[11px]">
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="text-slate-600 hover:text-slate-900 truncate max-w-[190px]"
                  title={COMPANY_INFO.email}
                >
                  {COMPANY_INFO.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. INTERACTIVE OFFICE NETWORK & GOOGLE MAPS SECTION (Exact requested embed) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 sm:mt-16">
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
          
          {/* Section Header */}
          <div className="p-6 sm:p-8 border-b border-slate-200/80 bg-gradient-to-r from-slate-50/70 via-white to-slate-50/70">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-[#0baba0]/10 text-[#088c83] mb-2 border border-[#0baba0]/20">
                  <MapPin className="w-3.5 h-3.5 text-[#0baba0]" />
                  <span>Mạng Lưới Toàn Quốc & Bản Đồ Tọa Độ Trực Quan</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  Địa Chỉ Văn Phòng Làm Việc & Bản Đồ Google Maps
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  Uni Creation có trụ sở chính tại Hà Nội và 2 chi nhánh tại Đà Nẵng, TP. Hồ Chí Minh luôn sẵn sàng đón tiếp quý khách hàng.
                </p>
              </div>

              {/* Office Selector Tabs */}
              <div className="flex flex-wrap items-center gap-2 bg-slate-100 p-1.5 rounded-2xl border border-slate-200 shrink-0">
                {OFFICES.map((office) => {
                  const isActive = office.id === selectedOfficeId;
                  return (
                    <button
                      key={office.id}
                      type="button"
                      onClick={() => setSelectedOfficeId(office.id)}
                      className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 flex items-center gap-1.5 cursor-pointer ${
                        isActive
                          ? 'bg-white text-slate-900 shadow-sm border border-slate-200/80'
                          : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                      }`}
                    >
                      <Building2 className={`w-3.5 h-3.5 ${isActive ? 'text-[#0baba0]' : 'text-slate-400'}`} />
                      <span>{office.city}</span>
                      {office.isHeadquarter && (
                        <span className="text-[10px] font-extrabold px-1.5 py-0.5 rounded-md bg-[#0baba0]/15 text-[#088c83]">
                          HQ
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Map + Detailed Office Card Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
            
            {/* Left: Office Specific Info Card (4 cols) */}
            <div className="lg:col-span-5 p-6 sm:p-8 bg-slate-50/50 border-b lg:border-b-0 lg:border-r border-slate-200 flex flex-col justify-between space-y-6">
              <div className="space-y-5">
                {/* Office Header */}
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-extrabold uppercase tracking-wider text-[#088c83] bg-teal-50 px-2.5 py-1 rounded-lg border border-teal-200/60">
                      {activeOffice.role}
                    </span>
                    {activeOffice.isHeadquarter && (
                      <span className="text-[11px] font-bold text-amber-700 bg-amber-50 px-2.5 py-1 rounded-lg border border-amber-200/60">
                        ⭐ Trụ sở chính Công ty
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">
                    Văn Phòng Uni Creation {activeOffice.city}
                  </h3>
                </div>

                {/* Info Points */}
                <div className="space-y-4 text-xs">
                  {/* Address */}
                  <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-2xs space-y-2">
                    <div className="flex items-center justify-between text-slate-500 font-medium">
                      <span className="flex items-center gap-1.5 text-slate-700 font-bold">
                        <MapPin className="w-4 h-4 text-[#0baba0]" />
                        <span>Địa chỉ chi tiết:</span>
                      </span>
                      <button
                        type="button"
                        onClick={() => handleCopy(activeOffice.address, 'address')}
                        className="text-[#088c83] hover:underline flex items-center gap-1 font-semibold cursor-pointer"
                      >
                        {copiedText === 'address' ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                        <span>{copiedText === 'address' ? 'Đã sao chép' : 'Sao chép'}</span>
                      </button>
                    </div>
                    <p className="text-slate-800 text-sm font-semibold leading-relaxed">
                      {activeOffice.address}
                    </p>
                  </div>

                  {/* Hotline & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="bg-white rounded-2xl p-3.5 border border-slate-200/80 shadow-2xs space-y-1">
                      <div className="flex items-center gap-1.5 text-slate-500 font-medium">
                        <Phone className="w-3.5 h-3.5 text-[#0baba0]" />
                        <span>Hotline tiếp nhận:</span>
                      </div>
                      <a
                        href={`tel:${activeOffice.phone}`}
                        className="text-sm font-bold font-mono text-slate-900 hover:text-[#0baba0] block"
                      >
                        {activeOffice.phone}
                      </a>
                    </div>

                    <div className="bg-white rounded-2xl p-3.5 border border-slate-200/80 shadow-2xs space-y-1">
                      <div className="flex items-center gap-1.5 text-slate-500 font-medium">
                        <Mail className="w-3.5 h-3.5 text-[#0baba0]" />
                        <span>Hộp thư điện tử:</span>
                      </div>
                      <a
                        href={`mailto:${activeOffice.email}`}
                        className="text-sm font-semibold text-slate-900 hover:text-[#0baba0] block truncate"
                        title={activeOffice.email}
                      >
                        {activeOffice.email}
                      </a>
                    </div>
                  </div>

                  {/* Working Hours */}
                  <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-2xs space-y-1.5">
                    <div className="flex items-center gap-1.5 text-slate-700 font-bold">
                      <Clock className="w-4 h-4 text-[#0baba0]" />
                      <span>Thời gian làm việc trực tiếp:</span>
                    </div>
                    <p className="text-slate-600 leading-relaxed">
                      {activeOffice.hours}
                    </p>
                  </div>

                  {/* Parking & Facility Note */}
                  <div className="bg-emerald-50/60 rounded-2xl p-3.5 border border-emerald-200/70 text-[11px] text-emerald-900 space-y-1">
                    <span className="font-bold flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      Tiện ích & Cơ sở vật chất:
                    </span>
                    <p className="text-emerald-800 leading-relaxed">
                      {activeOffice.parking}
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons: Open in Google Maps & Get Directions */}
              <div className="space-y-2 pt-2">
                <div className="grid grid-cols-2 gap-2.5">
                  <a
                    href={activeOffice.mapsOpenUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-2.5 px-3.5 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 text-slate-800 font-bold text-xs flex items-center justify-center gap-2 shadow-2xs transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5 text-slate-600" />
                    <span>Mở Google Maps</span>
                  </a>

                  <a
                    href={activeOffice.directionsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-2.5 px-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-sm transition-colors"
                  >
                    <Navigation className="w-3.5 h-3.5 text-[#0baba0]" />
                    <span>Chỉ Đường Đi</span>
                  </a>
                </div>

                <p className="text-[11px] text-slate-500 text-center">
                  💡 Nhấp vào bản đồ bên phải để phóng to, thu nhỏ hoặc xem chế độ vệ tinh
                </p>
              </div>
            </div>

            {/* Right: Embedded Interactive Google Map (7 cols) */}
            <div className="lg:col-span-7 bg-slate-100 relative min-h-[460px] sm:min-h-[520px] lg:min-h-full">
              <iframe
                key={activeOffice.id}
                title={`Google Maps ${activeOffice.city} - Uni Creation`}
                src={activeOffice.embedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full min-h-[460px] sm:min-h-[520px] lg:min-h-full block"
              />

              {/* Floating Map Watermark Badge */}
              <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-xl shadow-md border border-slate-200/90 text-xs flex items-center gap-2 pointer-events-none">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                <span className="font-bold text-slate-800">Bản đồ định vị: {activeOffice.city}</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. CONSULTATION & QUOTE REQUEST FORM (Modern 2-column Layout) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 sm:mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Value Proposition & Trust Commitments (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-gradient-to-br from-white via-teal-50/30 to-emerald-50/30 rounded-3xl p-6 sm:p-8 border border-[#0baba0]/25 shadow-md space-y-6">
              
              <div className="space-y-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#0baba0]/10 text-[#088c83] border border-[#0baba0]/20">
                  <Sparkles className="w-3.5 h-3.5 text-[#0baba0]" />
                  Đặc Quyền Khi Liên Hệ Online
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Tại Sao Khách Hàng Chọn Uni Creation?
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Chúng tôi không chỉ viết code làm website, mà đồng hành kiến tạo giải pháp bán hàng, nâng tầm vị thế thương hiệu doanh nghiệp bạn trên môi trường số.
                </p>
              </div>

              {/* 4 Trust Highlights */}
              <div className="space-y-3.5">
                <div className="flex items-start gap-3 p-3.5 bg-white rounded-2xl border border-slate-200/80 shadow-2xs">
                  <div className="w-9 h-9 rounded-xl bg-teal-50 text-[#088c83] flex items-center justify-center shrink-0 font-bold">
                    <DollarSign className="w-5 h-5 text-[#0baba0]" />
                  </div>
                  <div className="space-y-0.5">
                    <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Tặng Voucher 500.000 VNĐ Khi Đăng Ký Online</h4>
                    <p className="text-slate-500 text-[11px] leading-relaxed">
                      Áp dụng trực tiếp vào gói Hosting NVMe SSD siêu tốc hoặc giảm trừ phí đăng ký tên miền quốc tế.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 bg-white rounded-2xl border border-slate-200/80 shadow-2xs">
                  <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 font-bold">
                    <ShieldCheck className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div className="space-y-0.5">
                    <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Bàn Giao 100% Full Source Code & Bản Quyền</h4>
                    <p className="text-slate-500 text-[11px] leading-relaxed">
                      Khách hàng toàn quyền sở hữu mã nguồn, dữ liệu và hosting, không bị giam giữ code hay phát sinh chi phí duy trì ẩn.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 bg-white rounded-2xl border border-slate-200/80 shadow-2xs">
                  <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center shrink-0 font-bold">
                    <Clock className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="space-y-0.5">
                    <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Bảo Hành Kỹ Thuật Trọn Đời 24/7</h4>
                    <p className="text-slate-500 text-[11px] leading-relaxed">
                      Đội ngũ kỹ sư trực hotline sẵn sàng khắc phục sự cố, vá lỗ hổng bảo mật và hỗ trợ cập nhật nội dung bất cứ khi nào.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 bg-white rounded-2xl border border-slate-200/80 shadow-2xs">
                  <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 font-bold">
                    <Laptop className="w-5 h-5 text-amber-600" />
                  </div>
                  <div className="space-y-0.5">
                    <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Tốc Độ Tải Siêu Nhanh & Chuẩn SEO Google 100%</h4>
                    <p className="text-slate-500 text-[11px] leading-relaxed">
                      Tối ưu Core Web Vitals, Responsive mọi màn hình điện thoại và máy tính bảng không vỡ giao diện.
                    </p>
                  </div>
                </div>
              </div>

              {/* Customer Rating Banner */}
              <div className="p-4 bg-white/90 rounded-2xl border border-slate-200/90 shadow-2xs flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-1 text-amber-400">
                    {'★'.repeat(5)}
                  </div>
                  <span className="text-xs font-bold text-slate-900 block mt-0.5">
                    Đánh Giá 4.9/5 ⭐ Trên Google Maps
                  </span>
                  <span className="text-[11px] text-slate-500">Từ hơn 1,000+ doanh nghiệp đã triển khai</span>
                </div>
                <div className="text-right">
                  <a
                    href="https://www.google.com/maps?cid=42986113966893208&hl=vi"
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs font-bold text-[#088c83] hover:underline flex items-center gap-1"
                  >
                    <span>Xem đánh giá</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

            </div>

            {/* Quick Direct Connect Socials */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-3">
              <h4 className="font-bold text-xs uppercase tracking-wider text-slate-500">
                Kênh Trao Đổi Trực Tuyến Nhanh
              </h4>
              <div className="grid grid-cols-2 gap-2 text-xs font-bold">
                <a
                  href={`https://zalo.me/${COMPANY_INFO.hotline.replace(/\./g, '')}`}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-xl bg-blue-50 text-blue-700 hover:bg-blue-100/80 transition-colors flex items-center justify-center gap-2 border border-blue-200/60"
                >
                  <MessageSquare className="w-4 h-4 text-blue-600" />
                  <span>Zalo Official Account</span>
                </a>

                <a
                  href={`tel:${COMPANY_INFO.hotline}`}
                  className="p-3 rounded-xl bg-teal-50 text-[#088c83] hover:bg-teal-100/80 transition-colors flex items-center justify-center gap-2 border border-teal-200/60"
                >
                  <Phone className="w-4 h-4 text-[#0baba0]" />
                  <span>Gọi Hotline Ngay</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Working Consultation Form (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm">
            {submitted ? (
              <div className="py-12 text-center space-y-5">
                <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center shadow-inner">
                  <CheckCircle2 className="w-12 h-12" />
                </div>
                <div className="space-y-2">
                  <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                    Gửi Thành Công
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                    Cảm Ơn Bạn Đã Gửi Yêu Cầu!
                  </h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Chuyên viên kỹ thuật và quản lý dự án Uni Creation đã nhận được thông tin. Chúng tôi sẽ gọi lại cho bạn qua số <strong className="text-slate-900 font-mono">{formData.phone}</strong> trong vòng <span className="text-[#088c83] font-bold">15 – 30 phút</span> để tư vấn giải pháp và báo giá cụ thể.
                  </p>
                </div>

                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 max-w-md mx-auto text-left text-xs space-y-1.5">
                  <div className="flex justify-between text-slate-500">
                    <span>Dịch vụ quan tâm:</span>
                    <strong className="text-slate-800">{formData.service}</strong>
                  </div>
                  <div className="flex justify-between text-slate-500">
                    <span>Mức ngân sách:</span>
                    <strong className="text-slate-800">{formData.budget}</strong>
                  </div>
                  {formData.email && (
                    <div className="flex justify-between text-slate-500">
                      <span>Email nhận bản demo:</span>
                      <strong className="text-slate-800">{formData.email}</strong>
                    </div>
                  )}
                </div>

                <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        phone: '',
                        email: '',
                        service: 'Gói Pro - 4.000.000 đ (Khuyên dùng)',
                        budget: '5.000.000 đ - 15.000.000 đ',
                        note: ''
                      });
                    }}
                    className="px-6 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl text-xs font-bold transition-colors cursor-pointer"
                  >
                    Gửi thêm yêu cầu khác
                  </button>

                  <a
                    href={`tel:${COMPANY_INFO.hotline}`}
                    className="px-6 py-2.5 btn-brand-gradient text-white rounded-xl text-xs font-bold shadow-md inline-flex items-center gap-2"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Cần Gấp? Gọi Ngay Hotline</span>
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#0baba0]/10 text-[#088c83] mb-2 border border-[#0baba0]/20">
                    <Headphones className="w-3.5 h-3.5 text-[#0baba0]" />
                    <span>Biểu Mẫu Tiếp Nhận Dự Án</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                    Đăng Ký Nhận Báo Giá & Tư Vấn Miễn Phí
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">
                    Nhập thông tin bên dưới để chuyên viên Uni Creation khảo sát và gửi mẫu giao diện demo phù hợp nhất.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Họ và tên của bạn <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ví dụ: Nguyễn Văn An"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0baba0] focus:border-transparent bg-slate-50/50 hover:bg-white transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Số điện thoại / Zalo <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="Ví dụ: 0912 345 678"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0baba0] focus:border-transparent bg-slate-50/50 hover:bg-white transition-colors font-mono"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Địa chỉ Email (Nhận báo giá chi tiết)
                    </label>
                    <input
                      type="email"
                      placeholder="email@doanhnghiep.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0baba0] focus:border-transparent bg-slate-50/50 hover:bg-white transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Ngân sách dự kiến
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-4 py-3 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0baba0] bg-white cursor-pointer"
                    >
                      <option value="Dưới 3.000.000 đ">Dưới 3.000.000 đ (Gói Tiết Kiệm)</option>
                      <option value="3.000.000 đ - 5.000.000 đ">3.000.000 đ - 5.000.000 đ (Khuyên Dùng)</option>
                      <option value="5.000.000 đ - 15.000.000 đ">5.000.000 đ - 15.000.000 đ (Doanh Nghiệp / Bán Hàng)</option>
                      <option value="15.000.000 đ - 35.000.000 đ">15.000.000 đ - 35.000.000 đ (May Đo VIP Cao Cấp)</option>
                      <option value="Trên 35.000.000 đ">Trên 35.000.000 đ (Hệ Thống Lớn / Sàn TMĐT)</option>
                      <option value="Cần chuyên viên tư vấn định lượng">Chưa rõ (Cần tư vấn theo thực tế)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Dịch vụ bạn đang quan tâm <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0baba0] bg-white cursor-pointer"
                  >
                    <optgroup label="🌟 Thiết Kế Website Trọn Gói">
                      <option value="Gói Startup - 2.500.000 đ">Gói Startup - 2.500.000 đ (Nhanh gọn, đầy đủ tính năng)</option>
                      <option value="Gói Pro - 4.000.000 đ (Khuyên dùng)">Gói Pro - 4.000.000 đ (Khuyên dùng - Đầy đủ SEO & Responsive)</option>
                      <option value="Gói Doanh Nghiệp - 4.500.000 đ">Gói Doanh Nghiệp - 4.500.000 đ (Nhận diện thương hiệu chuẩn)</option>
                      <option value="Gói VIP May Đo Độc Quyền">Gói VIP May Đo Độc Quyền (Thiết kế riêng theo yêu cầu UI/UX)</option>
                      <option value="Thiết kế web bán hàng & TMĐT">Thiết kế web bán hàng & Thương mại điện tử</option>
                      <option value="Thiết kế web Bất Động Sản">Thiết kế web Bất Động Sản / Dự án</option>
                    </optgroup>
                    <optgroup label="🚀 Hạ Tầng Máy Chủ & Tên Miền">
                      <option value="Hosting NVMe SSD Siêu Tốc">Hosting NVMe SSD Siêu Tốc (LiteSpeed Cache)</option>
                      <option value="Đăng ký & Quản lý Tên Miền">Đăng ký & Quản trị Tên Miền (.VN / .COM)</option>
                      <option value="Email Doanh Nghiệp Google Workspace">Email Doanh Nghiệp Google Workspace</option>
                      <option value="Chứng chỉ bảo mật SSL & Tường lửa">Chứng chỉ bảo mật SSL & Tường lửa Cloudflare</option>
                    </optgroup>
                    <optgroup label="📈 Marketing & Nhận Diện">
                      <option value="Thiết kế Logo & Bộ nhận diện">Thiết kế Logo & Bộ nhận diện thương hiệu</option>
                      <option value="Quảng cáo Google Ads & Facebook Ads">Quảng cáo Google Ads & Facebook Ads</option>
                      <option value="Dịch vụ SEO Tổng Thể Top Google">Dịch vụ SEO Tổng Thể Top Google</option>
                      <option value="Bảo trì & Chăm sóc website trọn gói">Bảo trì & Chăm sóc nội dung website trọn gói</option>
                    </optgroup>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Mô tả yêu cầu hoặc trang web tham khảo (Nếu có)
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Ví dụ: Công ty mình kinh doanh thiết bị nội thất tại Hà Nội, cần làm web bán hàng có tính năng lọc sản phẩm theo kích thước, đặt hàng qua Zalo và tích hợp cổng thanh toán..."
                    value={formData.note}
                    onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                    className="w-full px-4 py-3 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0baba0] bg-slate-50/50 hover:bg-white transition-colors"
                  />
                </div>

                <div className="p-3.5 bg-teal-50/70 rounded-2xl text-[11px] text-[#007064] flex items-center gap-2.5 border border-[#0baba0]/20">
                  <ShieldCheck className="w-5 h-5 text-[#0baba0] shrink-0" />
                  <span>
                    <strong>Cam kết bảo mật 100%:</strong> Thông tin của bạn được bảo mật tuyệt đối theo chính sách bảo mật thông tin khách hàng của Uni Creation. Chúng tôi không bao giờ chia sẻ dữ liệu hoặc spam cuộc gọi.
                  </span>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 btn-brand-gradient text-white font-extrabold text-sm uppercase tracking-wider rounded-xl shadow-lg hover:shadow-xl cursor-pointer flex items-center justify-center gap-2.5 transition-all duration-200 disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Đang Gửi Yêu Cầu...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Gửi Yêu Cầu Tư Vấn & Nhận Báo Giá Trong 15 Phút</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>
      </section>

      {/* 5. WORKFLOW CONSULTATION TIMELINE (4 Steps to Success) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 sm:mt-20">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#0baba0]/10 text-[#088c83] border border-[#0baba0]/20">
            Quy Trình Chuẩn Quốc Tế
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            4 Bước Hỗ Trợ Khách Hàng Nhanh Chóng & Minh Bạch
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Từ lúc gửi thông tin đến khi website vận hành hoàn hảo, mọi khâu đều được thông báo rõ ràng tới quý khách.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-2xs relative">
            <span className="text-3xl font-black text-slate-200 absolute top-4 right-4">01</span>
            <div className="w-10 h-10 rounded-xl bg-teal-50 text-[#088c83] flex items-center justify-center font-bold mb-3 border border-teal-200/60">
              <Send className="w-5 h-5 text-[#0baba0]" />
            </div>
            <h4 className="font-bold text-slate-900 text-sm mb-1">Tiếp Nhận Nhu Cầu</h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              Ngay khi quý khách gửi form hoặc gọi Hotline, thông tin được chuyển trực tiếp tới chuyên viên phụ trách mảng ngành nghề.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-2xs relative">
            <span className="text-3xl font-black text-slate-200 absolute top-4 right-4">02</span>
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center font-bold mb-3 border border-blue-200/60">
              <Headphones className="w-5 h-5 text-blue-600" />
            </div>
            <h4 className="font-bold text-slate-900 text-sm mb-1">Khảo Sát & Tư Vấn Demo</h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              Liên hệ lại trong vòng 15 – 30 phút để phân tích đối tượng khách hàng, tư vấn phong cách UI/UX và gửi bản demo giải pháp.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-2xs relative">
            <span className="text-3xl font-black text-slate-200 absolute top-4 right-4">03</span>
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold mb-3 border border-emerald-200/60">
              <FileText className="w-5 h-5 text-emerald-600" />
            </div>
            <h4 className="font-bold text-slate-900 text-sm mb-1">Báo Giá & Ký Kết</h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              Gửi bảng báo giá chi tiết, các hạng mục công việc minh bạch và ký hợp đồng kinh tế bảo vệ quyền lợi hai bên.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-2xs relative">
            <span className="text-3xl font-black text-slate-200 absolute top-4 right-4">04</span>
            <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center font-bold mb-3 border border-purple-200/60">
              <CheckCircle2 className="w-5 h-5 text-purple-600" />
            </div>
            <h4 className="font-bold text-slate-900 text-sm mb-1">Bàn Giao & Bảo Hành Trọn Đời</h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              Bàn giao 100% full source code, hướng dẫn quản trị web chi tiết và kích hoạt chế độ bảo hành kỹ thuật 24/7 trọn đời.
            </p>
          </div>
        </div>
      </section>

      {/* 6. FAQ ACCORDION (Giải đáp thắc mắc thường gặp) */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 sm:mt-20">
        <div className="text-center space-y-3 mb-8">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#0baba0]/10 text-[#088c83] border border-[#0baba0]/20">
            <HelpCircle className="w-3.5 h-3.5 text-[#0baba0]" />
            Thắc Mắc Phổ Biến
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Câu Hỏi Thường Gặp Khi Liên Hệ Hợp Tác
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Một số câu hỏi khách hàng thường băn khoăn trước khi triển khai dự án cùng Uni Creation.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200/90 shadow-2xs overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50/60 transition-colors"
                >
                  <span className="text-sm font-bold text-slate-900">{faq.q}</span>
                  <ChevronRight
                    className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-90 text-[#0baba0]' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-0 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 mt-1">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 7. BOTTOM BANNER CALL TO ACTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 sm:mt-20">
        <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 rounded-3xl p-8 sm:p-12 text-white border border-slate-800 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#0baba0]/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="space-y-2 text-center md:text-left relative z-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#0baba0]/20 text-[#30e2d5] border border-[#0baba0]/40">
              <Flame className="w-3.5 h-3.5 text-[#0baba0]" />
              Khởi Động Dự Án Số Của Bạn Ngay Hôm Nay
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Sẵn Sàng Xây Dựng Website Đẳng Cấp & Chuẩn SEO?
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 max-w-xl">
              Đừng ngần ngại gọi trực tiếp hoặc gửi tin nhắn Zalo. Chúng tôi luôn sẵn sàng lắng nghe mọi ý tưởng và giải quyết bài toán của bạn!
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 relative z-10 shrink-0">
            <a
              href={`tel:${COMPANY_INFO.hotline}`}
              className="px-6 py-3.5 btn-brand-gradient text-white rounded-xl text-xs sm:text-sm font-extrabold shadow-lg hover:shadow-xl transition-all duration-200 flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>Gọi Hotline: {COMPANY_INFO.hotline}</span>
            </a>

            <a
              href={`https://zalo.me/${COMPANY_INFO.hotline.replace(/\./g, '')}`}
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white rounded-xl text-xs sm:text-sm font-bold border border-white/20 transition-all duration-200 flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4 text-[#0baba0]" />
              <span>Nhắn Tin Zalo</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
