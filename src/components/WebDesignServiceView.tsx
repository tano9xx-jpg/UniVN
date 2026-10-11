import React, { useState } from 'react';
import { COMPANY_INFO, ThemeItem } from '../data/siteData';
import { ThemeExplorer } from './ThemeExplorer';
import {
  Check,
  X,
  Phone,
  Mail,
  MapPin,
  Sparkles,
  ShieldCheck,
  Zap,
  ArrowRight,
  ExternalLink,
  ChevronRight,
  Send,
  CheckCircle2,
  HelpCircle,
  Award,
  Layers,
  Code2,
  Clock,
  Globe,
  Server,
  FileText,
  Smartphone,
  Eye,
  Gift
} from 'lucide-react';

interface WebDesignServiceViewProps {
  onNavigateHome: () => void;
  onOpenCalculator?: () => void;
  onNavigateToTheme?: (slug: string) => void;
  onNavigateToThemes?: () => void;
}

export const WebDesignServiceView: React.FC<WebDesignServiceViewProps> = ({
  onNavigateHome,
  onOpenCalculator,
  onNavigateToTheme,
  onNavigateToThemes
}) => {
  // State for consultation form
  const [selectedPackage, setSelectedPackage] = useState<string>('GÓI PRO - 4.000.000 vnđ');
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [clientDomain, setClientDomain] = useState('');
  const [clientNote, setClientNote] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientPhone.trim()) return;
    setSubmitted(true);
  };

  const handleSelectPackageForOrder = (packName: string) => {
    setSelectedPackage(packName);
    const el = document.getElementById('web-consultation-form');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  // 19 Criteria Comparison Rows from univn.vn/thiet-ke-website-tron-goi/
  const comparisonRows = [
    {
      label: 'Giao diện website',
      startup: 'Giao diện có sẵn (Kho 180+ mẫu)',
      pro: 'Giao diện có sẵn tối ưu UI/UX',
      vip: 'Giao diện độc quyền may đo 1:1',
      isText: true
    },
    {
      label: 'Thời gian bàn giao',
      startup: '1 - 2 ngày',
      pro: '3 - 5 ngày',
      vip: 'Trên 7 ngày',
      isText: true,
      highlight: true
    },
    {
      label: 'Tặng kèm Tên miền',
      startup: 'Tặng .com / .net',
      pro: 'Tặng .com / .net',
      vip: 'Tặng .com / .net / .info / .org',
      isText: true
    },
    {
      label: 'Dung lượng lưu trữ (Hosting NVMe)',
      startup: '1 GB NVMe SSD',
      pro: '1.5 GB NVMe SSD',
      vip: '3 - 10 GB NVMe SSD',
      isText: true
    },
    {
      label: 'Băng thông máy chủ',
      startup: 'Không giới hạn',
      pro: 'Không giới hạn',
      vip: 'Không giới hạn',
      isText: true
    },
    {
      label: 'Bảo mật SSL Let\'s Encrypt',
      startup: true,
      pro: true,
      vip: true
    },
    {
      label: 'Tối ưu chuẩn SEO Onpage',
      startup: 'Chuẩn SEO 100%',
      pro: 'Chuẩn SEO 100% Chuyên sâu',
      vip: 'Chuẩn SEO 100% May đo',
      isText: true
    },
    {
      label: 'Tương thích di động (Responsive)',
      startup: true,
      pro: true,
      vip: true
    },
    {
      label: 'Thiết kế Banner trình diễn',
      startup: '1 Banner chuyên nghiệp',
      pro: '1 Banner chuyên nghiệp',
      vip: '2 Banner cao cấp độc quyền',
      isText: true
    },
    {
      label: 'Ngôn ngữ website',
      startup: 'Google Dịch tự động',
      pro: 'Google Dịch tự động',
      vip: 'Đa ngôn ngữ chuyên sâu',
      isText: true
    },
    {
      label: 'Hỗ trợ đăng bài viết demo',
      startup: '10 bài viết',
      pro: '15 bài viết chuẩn SEO',
      vip: '20 bài viết chuẩn SEO VIP',
      isText: true
    },
    {
      label: 'Hỗ trợ tùy chỉnh giao diện',
      startup: 'Đổi màu sắc nhận diện',
      pro: 'Đổi màu sắc & bố cục',
      vip: 'Tùy chỉnh theo yêu cầu 100%',
      isText: true
    },
    {
      label: 'Chiết khấu Email doanh nghiệp',
      startup: 'Giảm 5%',
      pro: 'Giảm 7%',
      vip: 'Giảm 10%',
      isText: true
    },
    {
      label: 'Chiết khấu Nhận diện thương hiệu',
      startup: 'Giảm 5%',
      pro: 'Giảm 7%',
      vip: 'Giảm 10%',
      isText: true
    },
    {
      label: 'Bàn giao 100% Source Code & Database',
      startup: true,
      pro: true,
      vip: true
    },
    {
      label: 'Miễn phí tư vấn Marketing Online',
      startup: false,
      pro: true,
      vip: true
    },
    {
      label: 'Tặng Voucher Dịch vụ Quảng Cáo',
      startup: 'Tặng voucher 200.000 vnđ',
      pro: 'Tặng voucher 350.000 vnđ',
      vip: 'Tặng voucher 500.000 vnđ',
      isText: true,
      highlight: true
    },
    {
      label: 'Bảo hành website trọn đời',
      startup: 'Bảo hành trọn đời khi dùng hosting',
      pro: 'Bảo hành trọn đời khi dùng hosting',
      vip: 'Bảo hành trọn đời & hỗ trợ riêng',
      isText: true
    },
    {
      label: 'Thông báo Bộ Công Thương',
      startup: 'Hướng dẫn thông báo',
      pro: 'Hướng dẫn thông báo',
      vip: 'Hỗ trợ nộp hồ sơ trọn gói',
      isText: true
    }
  ];

  // 6 Quy Trình Thiết Kế Website from univn.vn/thiet-ke-website-tron-goi/
  const workflowSteps = [
    {
      step: '01',
      title: 'Tiếp nhận yêu cầu',
      desc: 'Chuyên viên tư vấn của chúng tôi sẽ liên hệ, tiếp nhận yêu cầu của quý khách hàng về mục tiêu kinh doanh, ngành hàng và định hướng thiết kế.'
    },
    {
      step: '02',
      title: 'Tư vấn và báo giá',
      desc: 'Tư vấn phương án tối ưu và báo giá phù hợp nhất với những yêu cầu và ngân sách của quý khách hàng, minh bạch không chi phí ẩn.'
    },
    {
      step: '03',
      title: 'Thực hiện dự án',
      desc: 'Sau khi chốt phương án, đội ngũ kỹ thuật của Uni Creation sẽ bắt tay ngay vào thực hiện dự án: cài đặt hosting, domain, dựng layout và tính năng.'
    },
    {
      step: '04',
      title: 'Gửi Demo dự án',
      desc: 'Nhanh nhất sau 2 ngày, chúng tôi sẽ gửi lại demo để quý khách đánh giá, xem xét, góp ý và hoàn thiện dự án theo đúng kỳ vọng.'
    },
    {
      step: '05',
      title: 'Hướng dẫn quản trị',
      desc: 'Sau khi khách hàng kiểm duyệt xong demo, chúng tôi sẽ hoàn thiện dự án và hướng dẫn quản trị chi tiết 1:1 để bạn tự tin cập nhật nội dung.'
    },
    {
      step: '06',
      title: 'Bàn giao dự án',
      desc: 'Chúng tôi bàn giao website theo yêu cầu của quý khách hàng, cung cấp toàn bộ tài khoản quản trị cao nhất, full source code và thanh toán hợp đồng.'
    }
  ];

  // 6 Lý Do Nên Chọn Uni Creation from univn.vn/thiet-ke-website-tron-goi/
  const whyReasons = [
    {
      iconUrl: 'https://univn.vn/wp-content/themes/unicreation/lib/images/thiet-ke-web/ic1.png',
      title: 'Web vận hành tốt, đầy đủ chức năng',
      desc: 'Website chúng tôi cung cấp luôn có tốc độ truy soát nhanh, tương thích với mọi thiết bị và đầy đủ tất cả các chức năng theo yêu cầu kinh doanh.'
    },
    {
      iconUrl: 'https://univn.vn/wp-content/themes/unicreation/lib/images/thiet-ke-web/ic2.png',
      title: 'Mã nguồn tối ưu',
      desc: 'Mã nguồn chuẩn SEO Onpage 100%, dễ dàng SEO website lên TOP Google nhanh chóng. Bàn giao đầy đủ mã nguồn và cơ sở dữ liệu không mã hóa.'
    },
    {
      iconUrl: 'https://univn.vn/wp-content/themes/unicreation/lib/images/thiet-ke-web/ic3.png',
      title: 'Hoàn toàn bảo mật',
      desc: 'Hệ thống hạ tầng máy chủ đạt chuẩn an toàn thông tin, bảo mật SSL miễn phí trọn đời và tích hợp quét chống phần mềm độc hại tự động.'
    },
    {
      iconUrl: 'https://univn.vn/wp-content/themes/unicreation/lib/images/thiet-ke-web/ic4.png',
      title: 'Giá cạnh tranh và miễn phí tư vấn marketing',
      desc: 'Một website trọn gói chỉ từ 2,5 triệu, ngoài ra bạn còn được miễn phí tư vấn marketing trực tuyến. Điều độc quyền chỉ có ở Uni Creation.'
    },
    {
      iconUrl: 'https://univn.vn/wp-content/themes/unicreation/lib/images/thiet-ke-web/ic5.png',
      title: 'Bảo hành trọn đời',
      desc: 'Chúng tôi áp dụng chế độ bảo hành kỹ thuật trọn đời khi sử dụng hosting tại Uni Creation. Bạn hoàn toàn an tâm phát triển kinh doanh bền vững.'
    },
    {
      iconUrl: 'https://univn.vn/wp-content/themes/unicreation/lib/images/thiet-ke-web/ic6.png',
      title: 'Chăm sóc hậu mãi chu đáo',
      desc: 'Khách hàng của chúng tôi luôn luôn được hưởng dịch vụ hậu mãi tốt nhất sau bán hàng, đội ngũ kỹ thuật phản hồi siêu tốc 24/7/365.'
    }
  ];

  // 5 Real Customer Testimonials with Authentic Logos from univn.vn/thiet-ke-website-tron-goi/
  const clientTestimonials = [
    {
      name: 'Nguyễn Hà Trang',
      role: 'CEO',
      logoUrl: 'https://univn.vn/wp-content/uploads/2020/01/logo_vn.png',
      quote: 'Trước khi thuê công ty Uni Creation thiết kế web chúng tôi đã seo rất nhiều đơn vị. Nhưng họ làm không hiệu quả. Tôi mới dùng dịch vụ của Uni Creation được mấy tháng thôi nhưng tôi rất hài lòng và muốn làm lâu dài.'
    },
    {
      name: 'Mạnh Thưởng',
      role: 'Chủ cửa hàng UpWeb',
      logoUrl: 'https://univn.vn/wp-content/uploads/2020/01/upweb-01.png',
      quote: 'Sau khi dùng dịch vụ của nhiều bên thiết kế website khác nhau, và đã tìm được Uni Creation, với đội ngũ nhiệt tình, đảm bảo về thời gian cũng như công việc cam kết. Cảm ơn các bạn đã hỗ trợ trong thời gian qua.'
    },
    {
      name: 'Bùi Công Thơm',
      role: 'CEO Sơn Thạch Bích',
      logoUrl: 'https://univn.vn/wp-content/uploads/2020/01/logo_stbg.png',
      quote: 'Cảm ơn đội ngũ Uni Creation đã hỗ trợ và giúp đỡ tôi trong quá trình xây dựng thương hiệu, tôi rất vui khi được làm việc với một đội ngũ trẻ nhiệt huyết trong công việc. Xử lý các vấn đề nhanh gọn và đúng yêu cầu.'
    },
    {
      name: 'Chị Linh',
      role: 'Kinh doanh TPT Group',
      logoUrl: 'https://univn.vn/wp-content/uploads/2020/01/logo_tpt.png',
      quote: 'Tôi rất hài lòng với dịch vụ Thiết kế website của Uni Creation. Nhân viên hỗ trợ nhiệt tình. Đảm bảo đúng thời gian cũng như tiến độ đã cam kết. Từ khi làm web và tự seo tôi có thêm rất nhiều khách hàng mới.'
    },
    {
      name: 'Trang Nguyễn',
      role: 'Trưởng phòng Marketing ADN',
      logoUrl: 'https://univn.vn/wp-content/uploads/2020/01/logo_adn.png',
      quote: 'Tôi đã sử dụng dịch vụ thiết kế website tại Uni Creation. Họ làm rất trách nhiệm, Tư vấn và hỗ trợ tôi rất nhiều trong việc hoàn thiện website, tối ưu hóa trải nghiệm người dùng tốt nhất. Rất cảm ơn UNI.'
    }
  ];

  // FAQs
  const webFaqs = [
    {
      q: 'Chi phí thiết kế website trọn gói 2.500.000 vnđ đã bao gồm những gì?',
      a: 'Chi phí đã bao gồm trọn gói: Tên miền quốc tế (.com/.net), Hosting lưu trữ SSD NVMe tốc độ cao 1 năm, chứng chỉ bảo mật SSL, giao diện chuẩn SEO, tương thích hiển thị trên điện thoại, đăng tải 10 bài viết demo và bảo hành kỹ thuật trọn đời.'
    },
    {
      q: 'Thời gian hoàn thiện website trọn gói mất bao lâu?',
      a: 'Với Gói Startup sử dụng giao diện có sẵn, thời gian bàn giao siêu tốc chỉ từ 1 – 2 ngày làm việc. Gói Pro hoàn thành từ 3 – 5 ngày. Gói VIP thiết kế độc quyền theo nhận diện thương hiệu từ 7 – 15 ngày.'
    },
    {
      q: 'Tôi có được sở hữu toàn bộ mã nguồn sau khi bàn giao không?',
      a: 'Có! Uni Creation cam kết bàn giao 100% Source Code (mã nguồn) và cơ sở dữ liệu không mã hóa. Bạn toàn quyền sở hữu, sao lưu và nâng cấp khi cần thiết.'
    },
    {
      q: 'Sau khi hoàn thành, tôi có thể tự thay đổi nội dung, hình ảnh và bài viết không?',
      a: 'Hoàn toàn được. Hệ thống quản trị (CMS) được xây dựng bằng tiếng Việt trực quan, kéo thả dễ dàng. Kỹ thuật viên Uni Creation sẽ quay video hướng dẫn chi tiết và hỗ trợ 1:1 để bạn tự quản trị 100% mà không phụ thuộc kỹ thuật.'
    },
    {
      q: 'Chính sách bảo hành website trọn đời được áp dụng như thế nào?',
      a: 'Khi website được lưu trữ trên hạ tầng máy chủ của Uni Creation, bạn được bảo hành kỹ thuật trọn đời miễn phí: sửa lỗi phát sinh, vá lỗi bảo mật, tự động sao lưu dữ liệu hàng tuần và hỗ trợ kỹ thuật 24/7.'
    },
    {
      q: 'Hàng năm tôi cần thanh toán những chi phí duy trì nào?',
      a: 'Từ năm thứ 2 trở đi, để website duy trì hoạt động trên Internet, bạn chỉ cần đóng phí duy trì Tên miền và Hosting (khoảng từ 1.280.000 vnđ/năm). Phí bảo trì kỹ thuật, chứng chỉ SSL và hỗ trợ hệ thống được miễn phí trọn đời.'
    }
  ];

  return (
    <div className="w-full flex flex-col">
      
      {/* 1. HERO BANNER & MOCKUP SHOWCASE (`#tkw1` from univn.vn - FULL WIDTH) */}
      <section id="web-hero-section" className="w-full bg-gradient-to-b from-teal-50/70 via-white to-slate-50 border-b border-slate-200/80 pt-6 pb-16 sm:pb-24 relative overflow-hidden">
        
        {/* Soft background glows */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#0baba0]/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-10 -left-10 w-80 h-80 bg-[#91c544]/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 relative z-10">
          
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs text-slate-500 font-medium">
            <button onClick={onNavigateHome} className="hover:text-slate-800 cursor-pointer">
              Trang chủ
            </button>
            <span>»</span>
            <span className="text-slate-600">Dịch vụ thiết kế web</span>
            <span>»</span>
            <span className="font-bold text-[#0baba0]">Thiết kế website trọn gói</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-5">
              
              <div className="flex flex-wrap items-center gap-2.5">
                <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#0baba0]/10 border border-[#0baba0]/30 rounded-full text-xs text-[#088c83] font-semibold">
                  <Sparkles className="w-3.5 h-3.5 text-[#91c544]" />
                  <span>Chỉ Từ 2.500.000 vnđ · Bàn Giao 1 - 2 Ngày</span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-amber-50 border border-amber-200 rounded-full text-xs text-amber-700 font-semibold">
                  <Award className="w-3.5 h-3.5 text-amber-600" />
                  <span>Bảo Hành Trọn Đời · Full Source Code</span>
                </div>
              </div>

              <div className="space-y-2">
                <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#0baba0] block">
                  Uni Creation Việt Nam
                </span>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                  <span className="text-[#0baba0]">Uni Creation</span> Cung Cấp Dịch Vụ <br className="hidden sm:inline" />
                  Thiết Kế Website Trọn Gói, Chuẩn SEO Giá Rẻ
                </h1>
              </div>

              {/* Exact description from univn.vn */}
              <p className="text-base sm:text-lg text-slate-700 font-medium leading-relaxed max-w-2xl">
                Chúng tôi cung cấp dịch vụ thiết kế web trọn gói với giao diện đẹp, độc đáo, sáng tạo. Hệ thống tính năng website đầy đủ, mang tính ứng dụng cao và phù hợp với từng cá nhân, doanh nghiệp. Sáng tạo không ngừng nghỉ, ý tưởng luôn đổi mới, quy trình chuẩn hóa quốc tế, Uni Creation cam kết đem đến cho bạn 1 website ấn tượng về giao diện, hoàn hảo về chức năng và trải nghiệm người dùng nhưng luôn giữ được tính bảo mật tuyệt đối.
              </p>

              {/* Key value bullets */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 font-medium bg-white p-3 rounded-xl border border-slate-200/80 shadow-2xs">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>Tặng tên miền .com/.net & Hosting NVMe</span>
                </div>

                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 font-medium bg-white p-3 rounded-xl border border-slate-200/80 shadow-2xs">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>Chuẩn SEO 100%, tốc độ tải &lt; 1 giây</span>
                </div>

                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 font-medium bg-white p-3 rounded-xl border border-slate-200/80 shadow-2xs">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>Tương thích 100% Mobile & Tablet</span>
                </div>

                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 font-medium bg-white p-3 rounded-xl border border-slate-200/80 shadow-2xs">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>Bàn giao 100% mã nguồn không mã hóa</span>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="pt-3 flex flex-wrap items-center gap-3.5">
                <button
                  onClick={() => {
                    const el = document.getElementById('web-consultation-form');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-7 py-3.5 btn-brand-gradient text-white text-xs sm:text-sm font-bold uppercase tracking-wider rounded-2xl shadow-md hover:shadow-lg transition-all cursor-pointer flex items-center gap-2"
                >
                  <span>Đăng Ký Nhận Khuyến Mại</span>
                  <ChevronRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => {
                    const el = document.getElementById('web-pricing-table');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-6 py-3.5 bg-white text-[#088c83] hover:text-[#0baba0] border border-[#0baba0]/30 hover:border-[#0baba0] rounded-2xl text-xs sm:text-sm font-bold shadow-2xs transition-all cursor-pointer"
                >
                  Xem Bảng Giá Trọn Gói
                </button>

                {onOpenCalculator && (
                  <button
                    onClick={onOpenCalculator}
                    className="px-5 py-3.5 bg-white text-slate-700 hover:text-[#0baba0] border border-slate-200 hover:border-[#0baba0] rounded-2xl text-xs sm:text-sm font-bold shadow-2xs transition-all cursor-pointer"
                  >
                    Dự Toán Chi Phí Web
                  </button>
                )}
              </div>

            </div>

            {/* Right: Authentic Mockup Image from univn.vn */}
            <div className="lg:col-span-5 flex items-center justify-center">
              <div className="relative group w-full max-w-lg">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#0baba0]/30 to-[#91c544]/30 rounded-3xl blur-xl group-hover:blur-2xl transition duration-500 opacity-70"></div>
                
                <div className="relative bg-white/90 backdrop-blur-xs rounded-3xl p-4 sm:p-6 border border-slate-200/90 shadow-2xl space-y-4">
                  <div className="overflow-hidden rounded-2xl bg-slate-100 border border-slate-200/60">
                    <img
                      src="https://univn.vn/wp-content/themes/unicreation/lib/images/thiet-ke-web/mockup.png"
                      alt="Uni Creation Thiết Kế Website Trọn Gói Mockup"
                      className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <div className="flex items-center justify-between text-xs text-slate-600 pt-1">
                    <div className="flex items-center gap-1.5 font-bold text-slate-800">
                      <Smartphone className="w-4 h-4 text-[#0baba0]" />
                      <span>Đa thiết bị: Desktop · Tablet · Mobile</span>
                    </div>
                    <span className="px-2.5 py-0.5 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-full font-bold text-[11px]">
                      Core Web Vitals 99/100
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 2. BẢNG GIÁ THIẾT KẾ WEBSITE TRỌN GÓI (`#home-package` from univn.vn - FULL WIDTH) */}
      <section id="web-pricing-table" className="w-full bg-[#f8fafc] border-b border-slate-200/80 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#0baba0]/10 border border-[#0baba0]/30 rounded-full text-xs font-semibold text-[#088c83]">
              <Sparkles className="w-3.5 h-3.5 text-[#91c544]" />
              <span>Bảng Giá Niêm Yết Công Khai</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              BẢNG GIÁ THIẾT KẾ WEBSITE TRỌN GÓI
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-medium">
              Công nghệ web hàng đầu – Tiết kiệm Chi Phí – Bàn giao web nhanh chóng
            </p>
          </div>

          {/* 4-Column Full Feature Matrix */}
          <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xl overflow-hidden">
            
            {/* Header Row */}
            <div className="grid grid-cols-1 md:grid-cols-12 bg-slate-50 border-b border-slate-200">
              
              {/* Column 1: Feature Title */}
              <div className="md:col-span-3 p-5 sm:p-6 flex flex-col justify-end border-b md:border-b-0 md:border-r border-slate-200">
                <span className="text-xs font-black uppercase tracking-wider text-slate-500">Chức năng</span>
                <span className="text-xs text-slate-400 mt-1">Thông số kỹ thuật gói web</span>
              </div>

              {/* Column 2: Gói Startup */}
              <div className="md:col-span-3 p-5 sm:p-6 text-center border-b md:border-b-0 md:border-r border-slate-200 space-y-2 bg-slate-50/60 flex flex-col justify-between">
                <div className="h-5 flex items-center justify-center"></div>
                <span className="inline-block px-3 py-1 bg-slate-200/80 text-slate-700 text-[11px] font-black rounded-full uppercase tracking-wider">
                  GÓI STARTUP
                </span>
                <div className="text-3xl font-black text-slate-900 font-mono pt-1">
                  2.500.000 <span className="text-xs font-medium text-slate-500">vnđ</span>
                </div>
                <div className="text-[11px] text-slate-500">Bàn giao 1 - 2 ngày</div>
              </div>

              {/* Column 3: Gói Pro (Nổi bật) */}
              <div className="md:col-span-3 p-5 sm:p-6 text-center border-b md:border-b-0 md:border-r border-slate-200 space-y-2 bg-teal-50/50 flex flex-col justify-between">
                <div className="h-5 flex items-center justify-center">
                  <span className="px-3 py-0.5 btn-brand-gradient text-white text-[10px] font-bold rounded-full uppercase tracking-wider shadow">
                    Nổi Bật
                  </span>
                </div>
                <span className="inline-block px-3 py-1 bg-[#0baba0] text-white text-[11px] font-black rounded-full uppercase tracking-wider shadow-2xs">
                  GÓI PRO
                </span>
                <div className="text-3xl font-black text-[#0baba0] font-mono pt-1">
                  4.000.000 <span className="text-xs font-medium text-slate-500">vnđ</span>
                </div>
                <div className="text-[11px] text-slate-500">Bàn giao 3 - 5 ngày</div>
              </div>

              {/* Column 4: Gói VIP */}
              <div className="md:col-span-3 p-5 sm:p-6 text-center space-y-2 bg-amber-50/40 flex flex-col justify-between">
                <div className="h-5 flex items-center justify-center"></div>
                <span className="inline-block px-3 py-1 bg-amber-100 text-amber-800 border border-amber-300 text-[11px] font-black rounded-full uppercase tracking-wider">
                  GÓI VIP
                </span>
                <div className="text-3xl font-black text-amber-700 font-mono pt-1">
                  Liên hệ <span className="text-xs font-medium text-slate-500">tư vấn</span>
                </div>
                <div className="text-[11px] text-slate-500">May đo độc quyền &gt; 7 ngày</div>
              </div>

            </div>

            {/* Matrix Body Rows */}
            <div className="divide-y divide-slate-100 text-xs sm:text-sm">
              {comparisonRows.map((row, rIdx) => (
                <div
                  key={rIdx}
                  className={`grid grid-cols-1 md:grid-cols-12 transition-colors ${
                    row.highlight
                      ? 'bg-teal-50/30 font-bold'
                      : rIdx % 2 === 0
                      ? 'bg-white'
                      : 'bg-slate-50/40'
                  }`}
                >
                  {/* Feature Label */}
                  <div className="md:col-span-3 p-4 sm:px-6 flex items-center font-medium text-slate-800 md:border-r border-slate-100">
                    <span>{row.label}</span>
                  </div>

                  {/* Startup */}
                  <div className="md:col-span-3 p-4 flex items-center justify-center md:border-r border-slate-100 text-slate-700 text-center">
                    {row.isText ? (
                      <span className={row.highlight ? 'font-mono text-base font-black text-slate-900' : 'font-medium'}>
                        {row.startup as string}
                      </span>
                    ) : row.startup ? (
                      <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                    ) : (
                      <div className="w-5 h-5 rounded-full bg-rose-50 text-rose-400 flex items-center justify-center">
                        <X className="w-3.5 h-3.5" />
                      </div>
                    )}
                  </div>

                  {/* Pro */}
                  <div className="md:col-span-3 p-4 flex items-center justify-center md:border-r border-slate-100 text-slate-700 bg-teal-50/20 text-center">
                    {row.isText ? (
                      <span className={row.highlight ? 'font-mono text-base font-black text-[#0baba0]' : 'font-semibold text-slate-900'}>
                        {row.pro as string}
                      </span>
                    ) : row.pro ? (
                      <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                    ) : (
                      <div className="w-5 h-5 rounded-full bg-rose-50 text-rose-400 flex items-center justify-center">
                        <X className="w-3.5 h-3.5" />
                      </div>
                    )}
                  </div>

                  {/* VIP */}
                  <div className="md:col-span-3 p-4 flex items-center justify-center text-slate-700 bg-amber-50/20 text-center">
                    {row.isText ? (
                      <span className={row.highlight ? 'font-mono text-base font-black text-amber-700' : 'font-semibold text-slate-900'}>
                        {row.vip as string}
                      </span>
                    ) : row.vip ? (
                      <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                    ) : (
                      <div className="w-5 h-5 rounded-full bg-rose-50 text-rose-400 flex items-center justify-center">
                        <X className="w-3.5 h-3.5" />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Footer Registration Action Row */}
            <div className="grid grid-cols-1 md:grid-cols-12 bg-slate-50 border-t border-slate-200 p-4 sm:p-6 gap-3">
              <div className="md:col-span-3 flex items-center text-xs font-bold text-slate-600">
                <span>Đăng ký chọn gói:</span>
              </div>

              <div className="md:col-span-3">
                <button
                  onClick={() => handleSelectPackageForOrder('GÓI STARTUP - 2.500.000 vnđ')}
                  className="w-full py-2.5 px-3 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-800 text-xs font-bold transition-all cursor-pointer"
                >
                  Đăng ký Gói Startup
                </button>
              </div>

              <div className="md:col-span-3">
                <button
                  onClick={() => handleSelectPackageForOrder('GÓI PRO - 4.000.000 vnđ')}
                  className="w-full py-2.5 px-3 rounded-xl btn-brand-gradient text-white text-xs font-bold shadow-md hover:shadow-lg transition-all cursor-pointer"
                >
                  Đăng ký Gói Pro
                </button>
              </div>

              <div className="md:col-span-3">
                <button
                  onClick={() => handleSelectPackageForOrder('GÓI VIP MAY ĐO - Liên hệ tư vấn')}
                  className="w-full py-2.5 px-3 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold shadow-md transition-all cursor-pointer"
                >
                  Đăng ký Gói VIP
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. QUY TRÌNH THIẾT KẾ WEBSITE (`#tkw3` from univn.vn with Image `1.png` - FULL WIDTH) */}
      <section id="web-workflow-section" className="w-full bg-white border-b border-slate-200/80 py-16 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            
            {/* Left 7 Columns: Header + 6 Step Cards */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#0baba0]/10 border border-[#0baba0]/30 rounded-full text-xs font-semibold text-[#088c83]">
                  <Clock className="w-3.5 h-3.5 text-[#91c544]" />
                  <span>Quy Chuẩn Chuyên Nghiệp Quốc Tế</span>
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
                  QUY TRÌNH THIẾT KẾ WEBSITE
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Quy trình làm việc đầy đủ của chúng tôi để mang lại một website hoàn chỉnh, vận hành mượt mà và chuyển đổi khách hàng tối đa cho quý khách.
                </p>
              </div>

              {/* 6 Steps in 2 Columns */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {workflowSteps.map((ws, i) => (
                  <div
                    key={i}
                    className="bg-slate-50/80 hover:bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/80 hover:border-[#0baba0]/50 hover:shadow-md transition-all space-y-2 group"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-black font-mono text-[#0baba0] group-hover:scale-105 transition-transform">
                        {ws.step}
                      </span>
                      <div className="w-6 h-6 rounded-full bg-teal-50 text-[#0baba0] flex items-center justify-center font-bold text-xs">
                        ✓
                      </div>
                    </div>

                    <h3 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-[#0baba0] transition-colors">
                      {ws.title}
                    </h3>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {ws.desc}
                    </p>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <button
                  onClick={() => {
                    const el = document.getElementById('web-consultation-form');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-7 py-3 btn-brand-gradient text-white text-xs font-bold uppercase tracking-wider rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer"
                >
                  Đăng Ký Nhận Khuyến Mại Lớn Nhất!
                </button>
              </div>
            </div>

            {/* Right 5 Columns: Sticky Graphic `1.png` Card with Key Value Highlights */}
            <div className="lg:col-span-5 lg:sticky lg:top-24 flex flex-col items-center">
              <div className="w-full bg-gradient-to-b from-teal-50/50 via-white to-slate-50 rounded-3xl p-6 sm:p-8 border border-[#0baba0]/20 shadow-lg text-center space-y-5">
                <div className="relative">
                  <img
                    src="https://univn.vn/wp-content/themes/unicreation/lib/images/thiet-ke-web/1.png"
                    alt="Quy trình thiết kế website Uni Creation"
                    className="w-full max-h-[340px] sm:max-h-[380px] object-contain mx-auto drop-shadow-md"
                  />
                </div>

                <div className="space-y-2.5 pt-3 border-t border-slate-100 text-left">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
                    <Check className="w-4 h-4 text-[#91c544] shrink-0" />
                    <span>Tiến độ bàn giao nhanh nhất sau 2 ngày</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
                    <Check className="w-4 h-4 text-[#91c544] shrink-0" />
                    <span>Gửi Demo trực quan, kiểm duyệt chi tiết 1:1</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
                    <Check className="w-4 h-4 text-[#91c544] shrink-0" />
                    <span>Bàn giao 100% mã nguồn & bảo hành trọn đời</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 4. LÝ DO NÊN CHỌN UNICREATION (`#tkw4` with Image `2.png` & Icons `ic1..ic6` - FULL WIDTH) */}
      <section id="web-why-choose-us" className="w-full bg-[#f8fafc] border-b border-slate-200/80 py-16 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            
            {/* Left 5 Columns: Sticky Graphic `2.png` Card with Trust Highlights */}
            <div className="lg:col-span-5 lg:sticky lg:top-24 flex flex-col items-center">
              <div className="w-full bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-lg text-center space-y-5">
                <div className="relative">
                  <img
                    src="https://univn.vn/wp-content/themes/unicreation/lib/images/thiet-ke-web/2.png"
                    alt="Lý do nên chọn Uni Creation"
                    className="w-full max-h-[340px] sm:max-h-[380px] object-contain mx-auto drop-shadow-md"
                  />
                </div>

                <div className="space-y-2.5 pt-3 border-t border-slate-100 text-left">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
                    <ShieldCheck className="w-4 h-4 text-[#91c544] shrink-0" />
                    <span>Hơn +1.200 doanh nghiệp tin dùng</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
                    <ShieldCheck className="w-4 h-4 text-[#91c544] shrink-0" />
                    <span>Mã nguồn chuẩn SEO Onpage 100%</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
                    <ShieldCheck className="w-4 h-4 text-[#91c544] shrink-0" />
                    <span>Tặng gói tư vấn Marketing Online miễn phí</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right 7 Columns: Header + 6 Reason Cards with Authentic Icons ic1.png - ic6.png */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#0baba0]/10 border border-[#0baba0]/30 rounded-full text-xs font-semibold text-[#088c83]">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#91c544]" />
                  <span>Cam Kết Chất Lượng Hàng Đầu</span>
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
                  LÝ DO NÊN CHỌN UNICREATION
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Dưới đây là các ưu điểm nổi bật chỉ chúng tôi có, sẽ giúp bạn sở hữu được một website chất lượng với chi phí thấp nhất.
                </p>
              </div>

              {/* 6 Reasons in 2 Columns */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {whyReasons.map((wr, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/90 shadow-2xs hover:border-[#0baba0]/50 hover:shadow-md transition-all space-y-3 group flex flex-col justify-between"
                  >
                    <div className="space-y-2">
                      <div className="w-12 h-12 rounded-xl bg-teal-50 group-hover:bg-[#0baba0]/10 flex items-center justify-center p-2 transition-colors">
                        <img
                          src={wr.iconUrl}
                          alt={wr.title}
                          className="w-full h-full object-contain"
                        />
                      </div>

                      <h3 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-[#0baba0] transition-colors leading-snug">
                        {wr.title}
                      </h3>

                      <p className="text-xs text-slate-600 leading-relaxed">
                        {wr.desc}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-slate-100 flex items-center gap-1.5 text-[11px] text-[#088c83] font-bold">
                      <Check className="w-3.5 h-3.5 text-[#91c544]" />
                      <span>Tiêu chuẩn Uni Creation</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 5. KHO +1000 GIAO DIỆN WEBSITE NỔI BẬT (ĐỒNG BỘ HOÀN TOÀN VỚI TRANG CHỦ) */}
      <section id="web-themes-showcase" className="w-full bg-[#f8fafc] border-b border-slate-200/80 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-1.5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#0baba0]/10 border border-[#0baba0]/30 rounded-full text-xs font-semibold text-[#088c83]">
                <Sparkles className="w-3.5 h-3.5 text-[#91c544]" />
                <span>Kho Mẫu Thiết Kế Mới 2026</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
                +1000 Giao Diện Website Nổi Bật Nhất
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl">
                Khám phá hơn 180+ giao diện độc bản chuẩn SEO, tốc độ siêu tốc và tối ưu chuyển đổi cho từng lĩnh vực kinh doanh do Uni Creation thiết kế.
              </p>
            </div>

            {onNavigateToThemes && (
              <button
                onClick={onNavigateToThemes}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 hover:border-[#0baba0] text-xs font-bold text-[#088c83] shadow-2xs hover:shadow-sm transition-all cursor-pointer shrink-0 self-start sm:self-auto"
              >
                <span>Xem toàn bộ 180+ mẫu</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#91c544]" />
              </button>
            )}
          </div>

          <ThemeExplorer
            initialCategory="gioi-thieu-cong-ty"
            hideHeader={true}
            onViewThemeDetail={(slug) => onNavigateToTheme?.(slug)}
            onSelectTheme={(t) => {
              handleSelectPackageForOrder(`Mẫu website ${t.title} (${t.package})`);
            }}
            onOpenCalculator={() => onOpenCalculator?.()}
          />

        </div>
      </section>

      {/* 6. +1200 KHÁCH HÀNG ĐÃ SỬ DỤNG DỊCH VỤ CỦA CHÚNG TÔI (`#home-customer` with Authentic Logos - FULL WIDTH) */}
      <section id="web-testimonials-section" className="w-full bg-white border-b border-slate-200/80 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0baba0]">
              Khách Hàng Nói Về Uni Creation
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              <strong>+1200</strong> Khách Hàng Đã Sử Dụng Dịch Vụ Của Chúng Tôi
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-medium">
              Sự hài lòng của khách hàng chính là thành công lớn nhất của Uni Creation
            </p>
          </div>

          {/* 5 Real Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {clientTestimonials.map((ct, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-2xs hover:border-[#0baba0]/40 hover:shadow-lg transition-all flex flex-col justify-between space-y-5"
              >
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                  "{ct.quote}"
                </p>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-4">
                  <div>
                    <h4 className="font-bold text-sm text-slate-900">{ct.name}</h4>
                    <span className="text-xs text-slate-500 font-medium">{ct.role}</span>
                  </div>

                  <div className="h-10 max-w-[130px] flex items-center justify-end">
                    <img
                      src={ct.logoUrl}
                      alt={ct.name}
                      className="max-h-8 max-w-full object-contain grayscale hover:grayscale-0 transition-all"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 7. FORM ĐĂNG KÝ TƯ VẤN & BÁO GIÁ (`#home-register` from univn.vn - FULL WIDTH) */}
      <section id="web-consultation-form" className="w-full bg-gradient-to-b from-[#f0fdfa]/70 via-[#e6f8f7]/40 to-white border-b border-teal-200/60 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Info */}
            <div className="lg:col-span-5 space-y-5">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0baba0] block">
                Đăng Ký Tư Vấn Ngay
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Để Được Nhận Các Khuyến Mại Mới Nhất
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Mời bạn điền vào các trường thông tin bên cạnh, chúng tôi sẽ gọi lại cho bạn. Cuộc gọi hoàn toàn miễn phí và chuyên viên sẽ tư vấn phương án thiết kế web tối ưu chi phí nhất!
              </p>

              <div className="space-y-3 pt-2 text-xs">
                <div className="flex items-start gap-3 text-slate-700 bg-white p-3.5 rounded-2xl border border-slate-200/70 shadow-2xs">
                  <Phone className="w-4 h-4 text-[#0baba0] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-900 block">Hotline tư vấn 24/7:</span>
                    <a href={`tel:${COMPANY_INFO.hotline.replace(/\s|\./g, '')}`} className="font-mono text-[#0baba0] font-bold text-sm hover:underline">
                      {COMPANY_INFO.hotline}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-slate-700 bg-white p-3.5 rounded-2xl border border-slate-200/70 shadow-2xs">
                  <Mail className="w-4 h-4 text-[#0baba0] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-900 block">Email tiếp nhận yêu cầu:</span>
                    <span className="font-mono text-slate-600">{COMPANY_INFO.email}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-slate-700 bg-white p-3.5 rounded-2xl border border-slate-200/70 shadow-2xs">
                  <MapPin className="w-4 h-4 text-[#0baba0] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-900 block">Địa chỉ trụ sở chính:</span>
                    <span className="text-slate-600 leading-relaxed">{COMPANY_INFO.offices[0].address}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs text-slate-500 font-medium pt-1">
                <ShieldCheck className="w-4 h-4 text-[#91c544]" />
                <span>Hợp đồng kinh tế pháp nhân · Xuất hóa đơn VAT điện tử hợp pháp</span>
              </div>
            </div>

            {/* Right Form */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-xl">
              {submitted ? (
                <div className="py-8 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-slate-900">Đã Nhận Yêu Cầu Thành Công!</h3>
                  <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Cảm ơn bạn <strong className="text-slate-900">{clientName || 'Quý khách'}</strong>! Chuyên viên Uni Creation sẽ liên hệ lại qua số điện thoại <strong className="text-[#0baba0] font-mono">{clientPhone}</strong> trong vòng 15 phút để tư vấn và gửi demo mẫu website phù hợp.
                  </p>
                  <div className="p-3 bg-slate-50 rounded-xl text-xs text-slate-500 font-medium max-w-sm mx-auto">
                    Gói dịch vụ: <strong className="text-slate-800">{selectedPackage}</strong>
                  </div>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-2 px-6 py-2.5 btn-brand-gradient text-white rounded-xl text-xs font-bold cursor-pointer"
                  >
                    Gửi thêm yêu cầu khác
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Tên của bạn
                      </label>
                      <input
                        type="text"
                        placeholder="Nguyễn Văn A"
                        value={clientName}
                        onChange={(e) => setClientName(e.target.value)}
                        className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0baba0]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Số điện thoại (*) <span className="text-red-500">Bắt buộc</span>
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="0912 345 678"
                        value={clientPhone}
                        onChange={(e) => setClientPhone(e.target.value)}
                        className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0baba0]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Gói thiết kế website quan tâm
                      </label>
                      <select
                        value={selectedPackage}
                        onChange={(e) => setSelectedPackage(e.target.value)}
                        className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0baba0] bg-white font-medium"
                      >
                        <option value="GÓI STARTUP - 2.500.000 vnđ">GÓI STARTUP - 2.500.000 vnđ (1-2 ngày)</option>
                        <option value="GÓI PRO - 4.000.000 vnđ">GÓI PRO - 4.000.000 vnđ (3-5 ngày)</option>
                        <option value="GÓI VIP MAY ĐO - Liên hệ tư vấn">GÓI VIP MAY ĐO - Liên hệ tư vấn</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Tên miền mong muốn (nếu có)
                      </label>
                      <input
                        type="text"
                        placeholder="congtycuaban.com"
                        value={clientDomain}
                        onChange={(e) => setClientDomain(e.target.value)}
                        className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0baba0]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Mô tả yêu cầu hoặc ngành nghề kinh doanh
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Ví dụ: Thiết kế web bán hàng mỹ phẩm, cần chức năng giỏ hàng và tư vấn Zalo..."
                      value={clientNote}
                      onChange={(e) => setClientNote(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0baba0]"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-4 btn-brand-gradient text-white rounded-xl text-xs font-bold uppercase tracking-wider shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer transition-all"
                  >
                    <Send className="w-4 h-4" />
                    <span>GỬI ĐĂNG KÝ NHẬN KHUYẾN MẠI NGAY</span>
                  </button>

                  <p className="text-[11px] text-center text-slate-400">
                    (*) Trường thông tin bắt buộc. Cuộc gọi và tư vấn demo hoàn toàn miễn phí.
                  </p>
                </form>
              )}
            </div>

          </div>

        </div>
      </section>

      {/* 8. CÂU HỎI THƯỜNG GẶP (FAQS - FULL WIDTH) */}
      <section className="w-full bg-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          
          <div className="flex items-center gap-2 text-[#0baba0] font-bold text-xs uppercase tracking-wider">
            <HelpCircle className="w-4 h-4" />
            <span>Giải Đáp Thắc Mắc Về Thiết Kế Website Trọn Gói</span>
          </div>

          <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 tracking-tight">
            Câu Hỏi Thường Gặp Của Khách Hàng
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-3">
            {webFaqs.map((faq, i) => (
              <div key={i} className="p-5 bg-slate-50 rounded-2xl border border-slate-200/70 space-y-2">
                <h4 className="font-bold text-xs sm:text-sm text-slate-900 flex items-start gap-2">
                  <span className="text-[#0baba0] font-mono">Q{i + 1}.</span>
                  <span>{faq.q}</span>
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed pl-6">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
};
