import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/siteData';
import {
  Check,
  X,
  Phone,
  Mail,
  MapPin,
  TrendingUp,
  Target,
  Sparkles,
  ShieldCheck,
  Zap,
  BarChart3,
  Search,
  ShoppingBag,
  Layers,
  Repeat,
  Send,
  CheckCircle2,
  HelpCircle,
  Award,
  Users,
  MousePointerClick,
  DollarSign,
  ChevronRight,
  Calculator,
  ArrowUpRight,
  Flame,
  Globe
} from 'lucide-react';

interface GoogleAdsServiceViewProps {
  onNavigateHome: () => void;
  onOpenCalculator?: () => void;
}

export const GoogleAdsServiceView: React.FC<GoogleAdsServiceViewProps> = ({
  onNavigateHome,
}) => {
  // State for consultation form
  const [selectedPackage, setSelectedPackage] = useState<string>('GÓI NÂNG CAO (Từ 20 - 50 triệu/tháng)');
  const [selectedChannel, setSelectedChannel] = useState<string>('Quảng cáo từ khóa Google (Search)');
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [clientWebsite, setClientWebsite] = useState('');
  const [clientNote, setClientNote] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // State for active service filter
  const [serviceFilter, setServiceFilter] = useState<'all' | 'google' | 'social'>('all');
  const [selectedServiceModal, setSelectedServiceModal] = useState<any | null>(null);

  // State for interactive ROI & Budget calculator
  const [monthlyBudget, setMonthlyBudget] = useState<number>(30); // in millions VNĐ

  // Calculate dynamic fees and estimates based on budget
  const calculateFeeRate = (budgetMillion: number) => {
    if (budgetMillion < 20) return { percent: 20, packName: 'Gói Cơ Bản (< 20 tr/tháng)', fee: budgetMillion * 0.2 };
    if (budgetMillion <= 50) return { percent: 15, packName: 'Gói Nâng Cao (20 - 50 tr/tháng)', fee: budgetMillion * 0.15 };
    return { percent: 10, packName: 'Gói Đặc Biệt (> 50 tr/tháng)', fee: budgetMillion * 0.1 };
  };

  const currentFeeInfo = calculateFeeRate(monthlyBudget);
  const estimatedClicks = Math.round((monthlyBudget * 1000000) / 4500); // average CPC ~4.5k
  const estimatedLeads = Math.round(estimatedClicks * 0.055); // average 5.5% conversion rate

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientPhone.trim()) return;
    setSubmitted(true);
  };

  const handleSelectPackageForOrder = (packName: string) => {
    setSelectedPackage(packName);
    const el = document.getElementById('ads-consultation-form');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  // 8 Marketing Services from univn.vn
  const marketingServices = [
    {
      id: 'google-search',
      name: 'Quảng cáo từ khóa Google',
      category: 'google',
      icon: Search,
      tag: 'Phổ biến nhất',
      tagColor: 'bg-blue-100 text-blue-700 border-blue-200',
      bullets: [
        'Có thể quảng cáo nhiều từ khóa một lúc',
        'Quảng cáo hiển thị top đầu 30 phút sau setup',
        'Tiếp cận khách hàng mục tiêu nhanh nhất'
      ],
      desc: 'Quảng cáo từ khóa tìm kiếm (Google Search Ads) giúp website của bạn xuất hiện ngay vị trí đầu tiên trên kết quả tìm kiếm khi khách hàng có nhu cầu mua sắm thực sự. Tối ưu điểm chất lượng để giảm tối đa chi phí mỗi click (CPC).'
    },
    {
      id: 'google-shopping',
      name: 'Quảng cáo Google Shopping',
      category: 'google',
      icon: ShoppingBag,
      tag: 'Bán lẻ & E-commerce',
      tagColor: 'bg-emerald-100 text-emerald-700 border-emerald-200',
      bullets: [
        'Có thể quảng cáo nhiều sản phẩm, dịch vụ cùng 1 lúc',
        'Hiển thị full thông tin sản phẩm ở vị trí đẹp nhất',
        'Tăng trưởng doanh số chóng mặt'
      ],
      desc: 'Hiển thị hình ảnh sản phẩm, mức giá niêm yết và tên thương hiệu trực tiếp trên thanh tìm kiếm Google. Khách hàng nhìn thấy sản phẩm trực quan trước khi click, mang lại tỷ lệ chốt đơn cao gấp 2-3 lần.'
    },
    {
      id: 'google-gdn',
      name: 'Quảng cáo banner GDN',
      category: 'google',
      icon: Layers,
      tag: 'Phủ sóng thương hiệu',
      tagColor: 'bg-purple-100 text-purple-700 border-purple-200',
      bullets: [
        'Quảng cáo hiển thị ở mọi nơi',
        'Tiếp cận khách hàng mục tiêu nhanh và lớn',
        'Chi phí thấp, hiệu quả cao'
      ],
      desc: 'Mạng hiển thị Google Display Network bao phủ hơn 90% người dùng Internet tại Việt Nam thông qua hệ thống báo điện tử lớn (VnExpress, Dân Trí, 24h, Zing...) và hàng triệu website đối tác.'
    },
    {
      id: 'remarketing',
      name: 'Quảng Cáo Remarketing',
      category: 'google',
      icon: Repeat,
      tag: 'Tăng x3 Chuyển Đổi',
      tagColor: 'bg-amber-100 text-amber-700 border-amber-200',
      bullets: [
        'Phân loại khách hàng: cũ, mới, tiềm năng',
        'Tối ưu hóa quảng cáo cao, giảm chi phí marketing',
        'Tiếp cận đúng khách hàng tiềm năng'
      ],
      desc: 'Tiếp thị lại bám đuổi thông minh đến những người đã từng ghé thăm website hoặc xem sản phẩm nhưng chưa mua hàng. Nhắc nhở và kích thích nhu cầu mua sắm với chi phí cực thấp.'
    },
    {
      id: 'gmail-ads',
      name: 'Gmail Ads',
      category: 'google',
      icon: Mail,
      tag: 'Tệp B2B & Công sở',
      tagColor: 'bg-red-100 text-red-700 border-red-200',
      bullets: [
        'Mức độ phủ sóng cao',
        'Tiếp cận lượng khách hàng lớn',
        'Chi phí quảng cáo thấp'
      ],
      desc: 'Quảng cáo trực tiếp trong tab Khuyến mại (Promotions) và Xã hội (Social) của Gmail người dùng. Khi click vào, thông điệp mở rộng toàn màn hình như một bức email giới thiệu chuyên nghiệp.'
    },
    {
      id: 'facebook-ads',
      name: 'Facebook Ads',
      category: 'social',
      icon: Users,
      tag: 'Lan tỏa mạng xã hội',
      tagColor: 'bg-indigo-100 text-indigo-700 border-indigo-200',
      bullets: [
        'Tính tương tác và lan truyền cao',
        'Mẫu quảng cáo ấn tượng, không giới hạn',
        'Nhắm đúng nhân khẩu học, sở thích và hành vi'
      ],
      desc: 'Tiếp cận hàng triệu khách hàng tiềm năng trên Meta Facebook & Instagram với đa dạng định dạng: Bài viết tương tác, Video Reels ngắn, tin nhắn Messenger và chiến dịch thu thập khách hàng tiềm năng (Lead Ads).'
    },
    {
      id: 'youtube-ads',
      name: 'Youtube Ads',
      category: 'social',
      icon: Flame,
      tag: 'Video & Nhận diện',
      tagColor: 'bg-rose-100 text-rose-700 border-rose-200',
      bullets: [
        'Độ phủ cao, tương tác cao',
        'Tăng xếp hạng trên google',
        'Tiếp cận lượng khách hàng tiềm năng lớn'
      ],
      desc: 'Quảng cáo video TrueView có thể bỏ qua hoặc đệm 6 giây trước/trong khi xem video trên nền tảng YouTube. Giúp truyền tải câu chuyện sản phẩm sống động và khắc sâu nhận diện thương hiệu.'
    },
    {
      id: 'coccoc-ads',
      name: 'Cốc Cốc Ads',
      category: 'social',
      icon: Globe,
      tag: 'Chi phí tiết kiệm',
      tagColor: 'bg-emerald-100 text-emerald-700 border-emerald-200',
      bullets: [
        'Tiết kiệm chi phí quảng cáo',
        'Cạnh tranh thấp',
        'Đa dạng loại hình quảng cáo'
      ],
      desc: 'Kênh quảng cáo độc quyền trên trình duyệt Cốc Cốc với hơn 25 triệu người dùng thường xuyên tại Việt Nam. Vị trí quảng cáo banner tab mới bắt mắt và quảng cáo từ khóa tìm kiếm với mức giá thầu CPC rất hợp lý.'
    }
  ];

  const filteredServices = marketingServices.filter((s) => {
    if (serviceFilter === 'google') return s.category === 'google';
    if (serviceFilter === 'social') return s.category === 'social';
    return true;
  });

  // Feature Comparison Matrix Rows (from univn.vn)
  const comparisonRows = [
    {
      label: 'Dành cho khách hàng ngân sách',
      basic: 'Dưới 20 triệu/tháng',
      pro: 'Từ 20 - 50 triệu/tháng',
      vip: 'Trên 50 triệu/tháng',
      isText: true
    },
    {
      label: 'Chi phí quảng cáo (Phí quản trị)',
      basic: '20%',
      pro: '15%',
      vip: '10%',
      isText: true,
      highlight: true
    },
    {
      label: 'Tư vấn chiến dịch quảng cáo',
      basic: true,
      pro: true,
      vip: true
    },
    {
      label: 'Tư vấn content website & Landing Page',
      basic: true,
      pro: true,
      vip: true
    },
    {
      label: 'Tối ưu hóa website (tốc độ, UX)',
      basic: false,
      pro: true,
      vip: true
    },
    {
      label: 'Tối ưu hóa tài khoản & Quality Score',
      basic: true,
      pro: true,
      vip: true
    },
    {
      label: 'Gửi báo cáo quảng cáo',
      basic: 'Định kỳ',
      pro: 'Theo tuần',
      vip: 'Theo tuần & Realtime',
      isText: true
    },
    {
      label: 'Tư vấn SEO miễn phí',
      basic: false,
      pro: true,
      vip: true
    },
    {
      label: 'Hỗ trợ thiết kế banner quảng cáo',
      basic: false,
      pro: true,
      vip: true
    },
    {
      label: 'Không giới hạn số lượng từ khóa',
      basic: false,
      pro: true,
      vip: true
    },
    {
      label: 'Đa dạng kênh quảng cáo cùng lúc',
      basic: false,
      pro: false,
      vip: true
    },
    {
      label: 'Tư vấn Marketing tổng thể đa kênh',
      basic: false,
      pro: false,
      vip: true
    }
  ];

  // 5 Process Steps from univn.vn
  const workflowSteps = [
    {
      step: '01',
      title: 'Tiếp cận thông tin',
      desc: 'Trao đổi với khách hàng để tiếp nhận thông tin sản phẩm, ngành nghề, chân dung khách hàng mục tiêu và ngân sách dự kiến.',
      icon: Users
    },
    {
      step: '02',
      title: 'Đề xuất giải pháp',
      desc: 'Uni Creation đề xuất các giải pháp phù hợp với dịch vụ và ngân sách của khách hàng (Google Search, Shopping, GDN, Facebook...).',
      icon: Target
    },
    {
      step: '03',
      title: 'Lập kế hoạch cụ thể',
      desc: 'Sau khi thống nhất phương án, Uni Creation đưa ra plan cụ thể với khách hàng (danh sách từ khóa, thông điệp, lịch biểu, KPIs cam kết).',
      icon: BarChart3
    },
    {
      step: '04',
      title: 'Triển khai quảng cáo',
      desc: 'Uni Creation triển khai các chiến dịch quảng cáo như plan đã chốt với khách hàng, hỗ trợ gắn Goal đo lường chuyển đổi 100%.',
      icon: Zap
    },
    {
      step: '05',
      title: 'Đo lường và tối ưu',
      desc: 'Đo lường hiệu quả quảng cáo của khách hàng và tối ưu chuyển đổi cao nhất, chặn click tặc, nâng cao điểm chất lượng và tăng doanh số.',
      icon: TrendingUp
    }
  ];

  // 6 Big Reasons from univn.vn
  const whyReasons = [
    {
      title: 'Đội ngũ > 10 năm kinh nghiệm',
      desc: 'Với đội ngũ quản lý, kỹ thuật viên nhiều năm kinh nghiệm thực tế và được đào tạo chuyên sâu sẽ giúp chiến dịch được hiệu quả và minh bạch nhất. Giúp khách hàng gia tăng doanh số.',
      icon: Award
    },
    {
      title: 'Đối tác cao cấp Google ở Việt Nam',
      desc: '100% kỹ thuật có chứng chỉ của Google, hàng tuần họp và hội thảo trực tiếp với Google để cập nhật tính năng mới cũng như khắc phục mọi vấn đề về chiến dịch.',
      icon: ShieldCheck
    },
    {
      title: 'Chi phí quảng cáo minh bạch',
      desc: 'Với dịch vụ của chúng tôi, bạn sẽ hoàn toàn yên tâm về tính minh bạch trong quá trình triển khai chiến dịch. (Ngân sách triển khai, số nhấp chuột, lượt hiển thị...).',
      icon: DollarSign
    },
    {
      title: 'Uni Creation là đối tác cao cấp của Google',
      desc: 'Chúng tôi là đối tác Cao Cấp Google tại Việt Nam. Quản lý hơn +2000 chiến dịch khác nhau. Luôn đảm bảo uy tín và trách nhiệm đối với Khách Hàng.',
      icon: Sparkles
    },
    {
      title: 'Nâng cao hiệu quả quảng cáo',
      desc: 'Hỗ trợ triển khai gắn Goal cho 100% Khách Hàng. Giúp Khách Hàng dễ dàng theo dõi chuyển đổi trên Website, từ đó đo lường chính xác và tối ưu nhất tỷ lệ chuyển đổi ra đơn hàng.',
      icon: TrendingUp
    },
    {
      title: 'Chăm sóc khách hàng từ những điều nhỏ nhất',
      desc: 'Chúng tôi lên kế hoạch chăm sóc 24/24 lúc nào cũng sẵn sàng nghe máy để khắc phục cũng như giải đáp các vấn đề nhanh nhất cho khách hàng với phương châm : khách hàng luôn đúng.',
      icon: Phone
    }
  ];

  // 3 Customer Testimonials from univn.vn
  const testimonials = [
    {
      quote: 'Trong lúc cạnh tranh cao và loay hoay tìm kiếm khách hàng mới, chúng tôi biết đến dịch vụ quảng cáo của unicreation. Các bạn đã hỗ trợ rất tốt, lượng khách hàng của chúng tôi tăng lên đều đặn. Cảm ơn các bạn rất nhiều!',
      client: 'Anh Tiến',
      domain: 'quangcaonetviethn.com',
      avatarText: 'AT'
    },
    {
      quote: 'Nhờ UniCreation mà doanh số của chúng tôi tăng mạnh, lượng khách hàng biết đến dịch vụ của chúng tôi nhiều hơn. Nhân viên thì luôn tư vấn nhiệt tình, hỗ trợ mọi thứ. Chúng tôi rất hài lòng về dịch vụ của UniCreation!',
      client: 'Chị Yến',
      domain: 'namhaiglass.com',
      avatarText: 'CY'
    },
    {
      quote: 'Với chiến lược quảng cáo thông minh và target chính xác, UniCreation đã giúp chúng tôi khẳng định thương hiệu trên thị trường và chiếm lĩnh thị phần. Cảm ơn và hi vọng hợp tác với các bạn trong nhiều lĩnh vực khác!',
      client: 'Anh Tuyến',
      domain: 'kinhcuongluchp.com',
      avatarText: 'AT'
    }
  ];

  // FAQs
  const adsFaqs = [
    {
      q: 'Ngân sách quảng cáo thanh toán như thế nào? Uni Creation có thu phí ẩn không?',
      a: 'Tại Uni Creation, 100% chi phí quảng cáo hoàn toàn minh bạch. Bạn có thể thanh toán trực tiếp ngân sách quảng cáo cho Google bằng thẻ Visa/Mastercard của chính mình, hoặc Uni Creation hỗ trợ thanh toán nạp ngân sách và xuất hóa đơn VAT điện tử đầy đủ theo hợp đồng. Uni Creation chỉ thu phí dịch vụ quản trị theo thỏa thuận (20%, 15% hoặc 10%), tuyệt đối không có chi phí ẩn.'
    },
    {
      q: 'Sau bao lâu kể từ khi kích hoạt thì quảng cáo xuất hiện trên Google?',
      a: 'Chiến dịch quảng cáo từ khóa Google Search thông thường sẽ được duyệt và hiển thị ở vị trí top đầu chỉ sau 30 phút đến vài giờ sau khi hoàn tất setup tài khoản và nạp ngân sách.'
    },
    {
      q: 'Uni Creation xử lý vấn đề click tặc và click ảo như thế nào?',
      a: 'Chúng tôi thiết lập hệ thống tự động nhận diện và chặn các địa chỉ IP có dấu hiệu click ảo lặp đi lặp lại. Đồng thời, kỹ thuật viên tối ưu cụm từ tìm kiếm, loại trừ từ khóa phủ định và thiết lập cài đặt đấu thầu thông minh để ngăn chặn tối đa hành vi chơi xấu từ đối thủ.'
    },
    {
      q: 'Gắn Goal theo dõi chuyển đổi là gì và tại sao lại cần thiết?',
      a: 'Gắn Goal (Conversion Tracking) là việc cài đặt mã theo dõi hành vi thực tế của khách truy cập trên website: bấm số điện thoại hotline, gửi form liên hệ, chat Zalo, thêm vào giỏ hàng hoặc hoàn tất mua hàng. Uni Creation hỗ trợ triển khai gắn Goal cho 100% khách hàng, giúp bạn đo lường chính xác tỷ lệ chuyển đổi và doanh số thu về trên từng đồng ngân sách.'
    },
    {
      q: 'Khách hàng có được nhận báo cáo chi tiết không?',
      a: 'Có. Khách hàng được cấp quyền theo dõi trực tiếp tài khoản quảng cáo hoặc nhận báo cáo định kỳ theo tuần/tháng với đầy đủ các chỉ số: Số lượt hiển thị, Số lượt nhấp chuột (Clicks), Tỷ lệ click (CTR), Chi phí mỗi click (CPC), và Số lượt chuyển đổi thành công.'
    },
    {
      q: 'Doanh nghiệp của tôi có ngân sách nhỏ thì có chạy quảng cáo được không?',
      a: 'Hoàn toàn được! Gói Cơ Bản của Uni Creation được thiết kế riêng cho ngân sách dưới 20 triệu/tháng, tập trung vào những từ khóa ngách có ý định mua sắm cao nhất giúp bạn tiết kiệm chi phí tối đa nhưng vẫn mang lại khách hàng tiềm năng ngay từ ngày đầu tiên.'
    }
  ];

  return (
    <div className="w-full flex flex-col">
      
      {/* 1. TOP BREADCRUMBS & HERO SLIDE SECTION (FULL-WIDTH SECTION, NO BOX) */}
      <section id="ads-hero-section" className="w-full bg-gradient-to-b from-teal-50/70 via-white to-slate-50 border-b border-slate-200/80 pt-6 pb-14 sm:pb-20 relative overflow-hidden">
        
        {/* Decorative soft glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#0baba0]/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-10 -left-10 w-80 h-80 bg-[#91c544]/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 relative z-10">
          
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs text-slate-500 font-medium">
            <button onClick={onNavigateHome} className="hover:text-slate-800 cursor-pointer">
              Trang chủ
            </button>
            <span>»</span>
            <span className="text-slate-600">Dịch vụ Marketing</span>
            <span>»</span>
            <span className="font-bold text-[#0baba0]">Dịch vụ quảng cáo Uni Creation</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-5">
              {/* Badges */}
              <div className="flex flex-wrap items-center gap-2.5">
                <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#0baba0]/10 border border-[#0baba0]/30 rounded-full text-xs text-[#088c83] font-semibold">
                  <Sparkles className="w-3.5 h-3.5 text-[#91c544]" />
                  <span>Đối Tác Cao Cấp Google Tại Việt Nam</span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-amber-50 border border-amber-200 rounded-full text-xs text-amber-700 font-semibold">
                  <Award className="w-3.5 h-3.5 text-amber-600" />
                  <span>+10 Năm Kinh Nghiệm · +2000 Chiến Dịch</span>
                </div>
              </div>

              {/* Main title from univn.vn: Digital marketing */}
              <div className="space-y-2">
                <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#0baba0] block">
                  Uni Creation Digital Marketing
                </span>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                  <span className="text-[#0baba0]">Digital</span> Marketing & <br className="hidden sm:inline" />
                  Dịch Vụ Quảng Cáo Google Ads
                </h1>
              </div>

              {/* Exact slogan from univn.vn */}
              <p className="text-base sm:text-lg text-slate-700 font-medium leading-relaxed max-w-2xl">
                Giải pháp Marketing tại Uni Creation sẽ giúp bạn gia tăng doanh số và phát triển thương hiệu vượt bậc.
              </p>

              {/* Value bullets */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 font-medium bg-white p-3 rounded-xl border border-slate-200/80 shadow-2xs">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>Hiển thị Top 1 Google chỉ sau 30 phút</span>
                </div>

                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 font-medium bg-white p-3 rounded-xl border border-slate-200/80 shadow-2xs">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>100% Minh bạch ngân sách & click</span>
                </div>

                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 font-medium bg-white p-3 rounded-xl border border-slate-200/80 shadow-2xs">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>Gắn Goal đo lường chuyển đổi 100%</span>
                </div>

                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 font-medium bg-white p-3 rounded-xl border border-slate-200/80 shadow-2xs">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>Chặn click tặc & Tối ưu Quality Score</span>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="pt-3 flex flex-wrap items-center gap-3.5">
                <button
                  onClick={() => {
                    const el = document.getElementById('ads-consultation-form');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-7 py-3.5 btn-brand-gradient text-white text-xs sm:text-sm font-bold uppercase tracking-wider rounded-2xl shadow-md hover:shadow-lg transition-all cursor-pointer flex items-center gap-2"
                >
                  <span>ĐĂNG KÝ TƯ VẤN NGAY</span>
                  <ChevronRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => {
                    const el = document.getElementById('ads-pricing-table');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-6 py-3.5 bg-white text-[#088c83] hover:text-[#0baba0] border border-[#0baba0]/30 hover:border-[#0baba0] rounded-2xl text-xs sm:text-sm font-bold shadow-2xs transition-all cursor-pointer"
                >
                  Xem Bảng Giá Dịch Vụ
                </button>

                <a
                  href={`tel:${COMPANY_INFO.hotline.replace(/\s|\./g, '')}`}
                  className="inline-flex items-center gap-2 px-4 py-3.5 text-slate-700 hover:text-[#0baba0] text-xs font-bold transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#0baba0]" />
                  <span>Hotline: <strong className="font-mono text-slate-900">{COMPANY_INFO.hotline}</strong></span>
                </a>
              </div>
            </div>

            {/* Hero Right: Live Interactive Dashboard Simulation */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-200/90 shadow-xl relative space-y-4">
                
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                    <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
                    <span className="text-xs font-bold text-slate-800 ml-1">Google Ads Partner Dashboard</span>
                  </div>
                  <span className="px-2.5 py-0.5 bg-emerald-50 text-emerald-700 border border-emerald-200 text-[11px] font-bold rounded-full flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    Đang hoạt động
                  </span>
                </div>

                {/* KPI Badges */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100 space-y-1">
                    <div className="flex items-center justify-between text-[11px] text-slate-500 font-medium">
                      <span>Vị trí trung bình</span>
                      <Search className="w-3.5 h-3.5 text-[#0baba0]" />
                    </div>
                    <div className="text-xl font-black text-slate-900 flex items-baseline gap-1">
                      <span>Top 1.0</span>
                      <span className="text-[10px] text-emerald-600 font-bold">98.5% share</span>
                    </div>
                  </div>

                  <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100 space-y-1">
                    <div className="flex items-center justify-between text-[11px] text-slate-500 font-medium">
                      <span>Điểm chất lượng (QS)</span>
                      <Award className="w-3.5 h-3.5 text-[#91c544]" />
                    </div>
                    <div className="text-xl font-black text-[#0baba0] flex items-baseline gap-1">
                      <span>10 / 10</span>
                      <span className="text-[10px] text-slate-500">Tối ưu thầu</span>
                    </div>
                  </div>

                  <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100 space-y-1">
                    <div className="flex items-center justify-between text-[11px] text-slate-500 font-medium">
                      <span>Tỷ lệ Click (CTR)</span>
                      <MousePointerClick className="w-3.5 h-3.5 text-blue-600" />
                    </div>
                    <div className="text-xl font-black text-blue-600 flex items-baseline gap-1">
                      <span>18.6%</span>
                      <span className="text-[10px] text-emerald-600 font-bold">+350% ngành</span>
                    </div>
                  </div>

                  <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100 space-y-1">
                    <div className="flex items-center justify-between text-[11px] text-slate-500 font-medium">
                      <span>Tỷ lệ chuyển đổi Goal</span>
                      <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
                    </div>
                    <div className="text-xl font-black text-emerald-600 flex items-baseline gap-1">
                      <span>8.4%</span>
                      <span className="text-[10px] text-emerald-600 font-bold">Đơn thực</span>
                    </div>
                  </div>
                </div>

                {/* Sample Google Search snippet preview */}
                <div className="p-3.5 bg-gradient-to-r from-teal-50/60 to-emerald-50/40 rounded-2xl border border-teal-100/80 space-y-1.5 text-left">
                  <div className="flex items-center gap-1.5 text-[11px] font-bold text-slate-600">
                    <span className="px-1.5 py-0.2 bg-slate-200 text-slate-800 text-[10px] font-black rounded">Được tài trợ</span>
                    <span className="text-slate-500">https://tenmien-doanhnghiep.vn</span>
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-blue-700 hover:underline">
                    Dịch Vụ Uy Tín Hàng Đầu · Báo Giá Ưu Đãi 2026
                  </div>
                  <p className="text-[11px] text-slate-600 line-clamp-2">
                    Cam kết chất lượng chuẩn quốc tế, bảo hành trọn đời, báo giá trọn gói không phát sinh chi phí. Tư vấn miễn phí 24/7.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-1 text-[10px] font-semibold text-blue-700">
                    <span className="bg-white/80 px-2 py-0.5 rounded border border-blue-200">📞 Gọi 0967.508.333</span>
                    <span className="bg-white/80 px-2 py-0.5 rounded border border-blue-200">⭐ Bảng giá ưu đãi</span>
                    <span className="bg-white/80 px-2 py-0.5 rounded border border-blue-200">🚀 Đăng ký tư vấn</span>
                  </div>
                </div>

                {/* Bottom live assurance */}
                <div className="flex items-center justify-between text-[11px] text-slate-500 pt-1 border-t border-slate-100">
                  <div className="flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#91c544]" />
                    <span>Bộ lọc chặn IP click tặc tự động</span>
                  </div>
                  <span className="font-bold text-[#088c83]">Uni Creation Partner</span>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 2. CÁC DỊCH VỤ MARKETING CỦA UNI CREATION (FULL-WIDTH SECTION, NO BOX) */}
      <section id="ads-services-grid" className="w-full bg-white border-b border-slate-200/80 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="text-center max-w-3xl mx-auto space-y-2.5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#0baba0]/10 border border-[#0baba0]/30 rounded-full text-xs font-semibold text-[#088c83]">
              <Target className="w-3.5 h-3.5 text-[#91c544]" />
              <span>Đa Dạng Kênh Tiếp Cận Khách Hàng</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              Các Dịch Vụ Marketing Của Uni Creation
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Hệ sinh thái tiếp thị đa kênh chuyên sâu, tối ưu hóa từ khóa, hình ảnh và video nhằm thu hút khách hàng có nhu cầu mua sắm thực sự.
            </p>

            {/* Interactive filter tabs */}
            <div className="inline-flex p-1 bg-slate-100 rounded-2xl border border-slate-200/80 gap-1 mt-2">
              <button
                onClick={() => setServiceFilter('all')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  serviceFilter === 'all'
                    ? 'bg-white text-[#088c83] shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Tất Cả (8 dịch vụ)
              </button>
              <button
                onClick={() => setServiceFilter('google')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  serviceFilter === 'google'
                    ? 'bg-white text-[#088c83] shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Hệ Sinh Thái Google (5)
              </button>
              <button
                onClick={() => setServiceFilter('social')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  serviceFilter === 'social'
                    ? 'bg-white text-[#088c83] shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Mạng Xã Hội & Cốc Cốc (3)
              </button>
            </div>
          </div>

          {/* 8 Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredServices.map((svc) => {
              const IconComp = svc.icon;
              return (
                <div
                  key={svc.id}
                  className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-sm hover:border-[#0baba0]/50 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    
                    {/* Top Icon & Tag */}
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-2xl bg-teal-50 group-hover:bg-[#0baba0] text-[#088c83] group-hover:text-white flex items-center justify-center transition-colors shadow-2xs">
                        <IconComp className="w-6 h-6" />
                      </div>
                      <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold border ${svc.tagColor}`}>
                        {svc.tag}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-extrabold text-base sm:text-lg text-slate-900 group-hover:text-[#0baba0] transition-colors leading-snug">
                      {svc.name}
                    </h3>

                    {/* Bullets directly from univn.vn */}
                    <ul className="space-y-2 text-xs text-slate-600 pt-1">
                      {svc.bullets.map((b, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-[#91c544] shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{b}</span>
                        </li>
                      ))}
                    </ul>

                  </div>

                  {/* Bottom Action buttons */}
                  <div className="pt-6 mt-4 border-t border-slate-100 flex items-center gap-2">
                    <button
                      onClick={() => setSelectedServiceModal(svc)}
                      className="flex-1 py-2 px-3 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-700 text-xs font-bold border border-slate-200 transition-colors text-center cursor-pointer"
                    >
                      Xem chi tiết
                    </button>
                    <button
                      onClick={() => {
                        setSelectedChannel(svc.name);
                        const el = document.getElementById('ads-consultation-form');
                        el?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="py-2 px-3 rounded-xl btn-brand-gradient text-white text-xs font-bold shadow-2xs hover:shadow transition-all text-center cursor-pointer flex items-center justify-center"
                      title={`Chọn ${svc.name}`}
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 3. BẢNG GIÁ DỊCH VỤ QUẢNG CÁO & MA TRẬN SO SÁNH 4 CỘT (FULL-WIDTH SECTION, NO BOX) */}
      <section id="ads-pricing-table" className="w-full bg-[#f8fafc] border-b border-slate-200/80 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#0baba0]/10 border border-[#0baba0]/30 rounded-full text-xs font-semibold text-[#088c83]">
              <DollarSign className="w-3.5 h-3.5 text-[#91c544]" />
              <span>Biểu Phí Quản Trị Minh Bạch 100%</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              Bảng Giá Dịch Vụ Quảng Cáo
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-medium">
              Liên hệ hotline: <strong className="text-slate-900 font-mono">{COMPANY_INFO.hotline}</strong> để được tư vấn cụ thể nhất
            </p>
          </div>

          {/* Full 4-Column Feature Matrix */}
          <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xl overflow-hidden">
            
            {/* Header Row */}
            <div className="grid grid-cols-1 md:grid-cols-12 bg-slate-50 border-b border-slate-200">
              
              {/* Column 1: Feature Heading */}
              <div className="md:col-span-3 p-5 sm:p-6 flex flex-col justify-end border-b md:border-b-0 md:border-r border-slate-200">
                <span className="text-xs font-black uppercase tracking-wider text-slate-500">Chức năng</span>
                <span className="text-xs text-slate-400 mt-1">Dành cho khách hàng ngân sách</span>
              </div>

              {/* Column 2: Gói Cơ Bản */}
              <div className="md:col-span-3 p-5 sm:p-6 text-center border-b md:border-b-0 md:border-r border-slate-200 space-y-2 bg-slate-50/60 flex flex-col justify-between">
                <div className="h-5 flex items-center justify-center"></div>
                <span className="inline-block px-3 py-1 bg-slate-200/80 text-slate-700 text-[11px] font-black rounded-full uppercase tracking-wider">
                  GÓI CƠ BẢN
                </span>
                <div className="text-xs text-slate-500 font-medium">Dưới 20 triệu/tháng</div>
                <div className="text-3xl font-black text-slate-900 font-mono pt-1">
                  20% <span className="text-xs font-medium text-slate-500">/tháng</span>
                </div>
              </div>

              {/* Column 3: Gói Nâng Cao (Popular) */}
              <div className="md:col-span-3 p-5 sm:p-6 text-center border-b md:border-b-0 md:border-r border-slate-200 space-y-2 bg-teal-50/50 flex flex-col justify-between">
                <div className="h-5 flex items-center justify-center">
                  <span className="px-3 py-0.5 btn-brand-gradient text-white text-[10px] font-bold rounded-full uppercase tracking-wider shadow">
                    Khuyên Dùng
                  </span>
                </div>
                <span className="inline-block px-3 py-1 bg-[#0baba0] text-white text-[11px] font-black rounded-full uppercase tracking-wider shadow-2xs">
                  GÓI NÂNG CAO
                </span>
                <div className="text-xs text-slate-500 font-medium">Từ 20 - 50 triệu/tháng</div>
                <div className="text-3xl font-black text-[#0baba0] font-mono pt-1">
                  15% <span className="text-xs font-medium text-slate-500">/tháng</span>
                </div>
              </div>

              {/* Column 4: Gói Đặc Biệt (VIP) */}
              <div className="md:col-span-3 p-5 sm:p-6 text-center space-y-2 bg-amber-50/40 flex flex-col justify-between">
                <div className="h-5 flex items-center justify-center"></div>
                <span className="inline-block px-3 py-1 bg-amber-100 text-amber-800 border border-amber-300 text-[11px] font-black rounded-full uppercase tracking-wider">
                  GÓI ĐẶC BIỆT
                </span>
                <div className="text-xs text-slate-500 font-medium">Trên 50 triệu/tháng</div>
                <div className="text-3xl font-black text-amber-700 font-mono pt-1">
                  10% <span className="text-xs font-medium text-slate-500">/tháng</span>
                </div>
              </div>

            </div>

            {/* Matrix Rows */}
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

                  {/* Gói Cơ Bản */}
                  <div className="md:col-span-3 p-4 flex items-center justify-center md:border-r border-slate-100 text-slate-700">
                    {row.isText ? (
                      <span className={row.highlight ? 'font-mono text-base font-black text-slate-900' : 'font-medium'}>
                        {row.basic as string}
                      </span>
                    ) : row.basic ? (
                      <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                    ) : (
                      <div className="w-5 h-5 rounded-full bg-rose-50 text-rose-400 flex items-center justify-center">
                        <X className="w-3.5 h-3.5" />
                      </div>
                    )}
                  </div>

                  {/* Gói Nâng Cao */}
                  <div className="md:col-span-3 p-4 flex items-center justify-center md:border-r border-slate-100 text-slate-700 bg-teal-50/20">
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

                  {/* Gói Đặc Biệt */}
                  <div className="md:col-span-3 p-4 flex items-center justify-center text-slate-700 bg-amber-50/20">
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

            {/* Footer CTA Row with Registration Buttons */}
            <div className="grid grid-cols-1 md:grid-cols-12 bg-slate-50 border-t border-slate-200 p-4 sm:p-6 gap-3">
              <div className="md:col-span-3 flex items-center text-xs font-bold text-slate-600">
                <span>Đăng ký triển khai:</span>
              </div>

              <div className="md:col-span-3">
                <button
                  onClick={() => handleSelectPackageForOrder('GÓI CƠ BẢN ADS (Dưới 20 triệu/tháng)')}
                  className="w-full py-2.5 px-3 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-800 text-xs font-bold transition-all cursor-pointer"
                >
                  Đăng ký Gói Cơ Bản
                </button>
              </div>

              <div className="md:col-span-3">
                <button
                  onClick={() => handleSelectPackageForOrder('GÓI NÂNG CAO ADS (20 - 50 triệu/tháng)')}
                  className="w-full py-2.5 px-3 rounded-xl btn-brand-gradient text-white text-xs font-bold shadow-md hover:shadow-lg transition-all cursor-pointer"
                >
                  Đăng ký Gói Nâng Cao
                </button>
              </div>

              <div className="md:col-span-3">
                <button
                  onClick={() => handleSelectPackageForOrder('GÓI ĐẶC BIỆT ADS (Trên 50 triệu/tháng)')}
                  className="w-full py-2.5 px-3 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold shadow-md transition-all cursor-pointer"
                >
                  Đăng ký Gói Đặc Biệt
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 4. CÔNG CỤ DỰ TOÁN NGÂN SÁCH & ROI (FULL-WIDTH SECTION, NO BOX) */}
      <section className="w-full bg-white border-b border-slate-200/80 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-gradient-to-br from-white via-teal-50/40 to-emerald-50/30 rounded-3xl p-6 sm:p-10 border border-[#0baba0]/30 shadow-lg space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="space-y-1">
                <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0baba0]">
                  <Calculator className="w-4 h-4" />
                  <span>CÔNG CỤ DỰ TOÁN NGÂN SÁCH & HIỆU QUẢ GOOGLE ADS</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  Ước Tính Số Lượt Click & Khách Hàng Tiềm Năng
                </h3>
              </div>
              <span className="px-3.5 py-1 bg-white text-slate-700 border border-slate-200 rounded-full text-xs font-bold shadow-2xs self-start sm:self-auto">
                Công Thức Minh Bạch Theo Ngành
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              
              {/* Slider Control */}
              <div className="lg:col-span-7 space-y-4">
                <div className="flex justify-between items-baseline">
                  <span className="text-xs font-bold text-slate-700">Ngân sách chi trả trực tiếp cho Google / tháng:</span>
                  <span className="text-2xl font-black text-[#0baba0] font-mono">
                    {monthlyBudget}.000.000 đ
                  </span>
                </div>

                <input
                  type="range"
                  min={5}
                  max={100}
                  step={5}
                  value={monthlyBudget}
                  onChange={(e) => setMonthlyBudget(Number(e.target.value))}
                  className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#0baba0]"
                />

                <div className="flex justify-between text-[11px] text-slate-400 font-medium">
                  <span>5 triệu (Thử nghiệm)</span>
                  <span>20 triệu</span>
                  <span>50 triệu</span>
                  <span>100+ triệu (VIP Doanh nghiệp)</span>
                </div>

                <div className="p-3 bg-white/90 rounded-2xl border border-slate-200/80 text-xs text-slate-600 flex items-center justify-between">
                  <span>Gói dịch vụ tương ứng: <strong className="text-slate-900">{currentFeeInfo.packName}</strong></span>
                  <span>Phí dịch vụ quản trị: <strong className="text-[#0baba0] font-mono font-bold">{currentFeeInfo.percent}%</strong> ({currentFeeInfo.fee.toFixed(1)} tr/tháng)</span>
                </div>
              </div>

              {/* Estimates Cards */}
              <div className="lg:col-span-5 grid grid-cols-2 gap-3">
                <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-2xs space-y-1">
                  <span className="text-[11px] text-slate-500 font-medium block">Lượt Click mục tiêu / tháng</span>
                  <span className="text-2xl font-black text-blue-600 font-mono">
                    ~{estimatedClicks.toLocaleString('vi-VN')}
                  </span>
                  <span className="text-[10px] text-slate-400 block">Traffic thực ghé thăm web</span>
                </div>

                <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-2xs space-y-1">
                  <span className="text-[11px] text-slate-500 font-medium block">Cuộc gọi & Lead tiềm năng</span>
                  <span className="text-2xl font-black text-emerald-600 font-mono">
                    ~{estimatedLeads.toLocaleString('vi-VN')}
                  </span>
                  <span className="text-[10px] text-slate-400 block">Tỷ lệ chuyển đổi ~5.5%</span>
                </div>

                <div className="col-span-2 pt-1">
                  <button
                    onClick={() => {
                      setSelectedPackage(`${currentFeeInfo.packName} - Ngân sách ${monthlyBudget} tr/tháng`);
                      const el = document.getElementById('ads-consultation-form');
                      el?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="w-full py-2.5 px-4 btn-brand-gradient text-white rounded-xl text-xs font-bold shadow transition-all cursor-pointer text-center"
                  >
                    Chọn mức ngân sách {monthlyBudget} triệu để nhận tư vấn
                  </button>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 5. QUY TRÌNH TRIỂN KHAI QUẢNG CÁO CHỈ CÓ Ở UNI CREATION (FULL-WIDTH DARK SECTION, NO BOX) */}
      <section className="w-full bg-gradient-to-b from-slate-900 via-[#0a232b] to-slate-900 text-white border-b border-teal-950 py-16 sm:py-24 relative overflow-hidden">
        
        {/* Soft background accents */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#0baba0]/15 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#91c544]">
              Tiêu Chuẩn Thực Chiến Chuẩn Google Partner
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              Quy Trình Triển Khai Quảng Cáo <br className="hidden sm:inline" />
              Chỉ Có Ở Uni Creation
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Mỗi chiến dịch được chuẩn hóa qua 5 giai đoạn nghiêm ngặt nhằm đảm bảo từng đồng ngân sách sinh lời tối đa cho doanh nghiệp.
            </p>
          </div>

          {/* 5 Steps Grid with Connecting Visuals */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 pt-2">
            {workflowSteps.map((s, idx) => {
              const IconComponent = s.icon;
              return (
                <div
                  key={idx}
                  className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/10 hover:border-[#0baba0] hover:bg-white/15 transition-all duration-300 flex flex-col justify-between space-y-3 group"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-black font-mono text-[#91c544]">
                        {s.step}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-white/10 group-hover:bg-[#0baba0] text-[#91c544] group-hover:text-white flex items-center justify-center transition-colors">
                        <IconComponent className="w-5 h-5" />
                      </div>
                    </div>

                    <h3 className="font-bold text-sm sm:text-base text-white group-hover:text-[#91c544] transition-colors">
                      {s.title}
                    </h3>

                    <p className="text-xs text-slate-300 leading-relaxed">
                      {s.desc}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-white/10 flex items-center gap-1.5 text-[11px] text-[#0baba0] font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Bước {idx + 1}/5</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Banner */}
          <div className="bg-white/5 rounded-2xl p-4 sm:p-5 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div className="space-y-1">
              <span className="text-xs sm:text-sm font-bold text-white block">
                Bạn cần khởi động chiến dịch quảng cáo ngay hôm nay?
              </span>
              <span className="text-xs text-slate-300">
                Đội ngũ kỹ thuật viên Uni Creation sẵn sàng lên phương án và kích hoạt trong vòng 30 phút.
              </span>
            </div>

            <button
              onClick={() => {
                const el = document.getElementById('ads-consultation-form');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-6 py-2.5 btn-brand-gradient text-white text-xs font-bold uppercase rounded-xl shadow cursor-pointer shrink-0"
            >
              Nhận Plan Quảng Cáo 1:1
            </button>
          </div>

        </div>
      </section>

      {/* 6. TẠI SAO 100.000+ DOANH NGHIỆP ĐÃ TIN TƯỞNG (FULL-WIDTH SECTION, NO BOX) */}
      <section className="w-full bg-white border-b border-slate-200/80 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="text-center max-w-3xl mx-auto space-y-2.5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#0baba0]/10 border border-[#0baba0]/30 rounded-full text-xs font-semibold text-[#088c83]">
              <Award className="w-3.5 h-3.5 text-[#91c544]" />
              <span>Niềm Tin Từ Hơn 100.000+ Khách Hàng</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              Tại Sao 100.000+ Doanh Nghiệp Đã Tin Tưởng Và <br className="hidden sm:inline" />
              Sử Dụng Dịch Vụ Digital Marketing Tại Uni Creation?
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Uy tín, chuyên môn cao và tính minh bạch tuyệt đối là những giá trị cốt lõi giúp Uni Creation đồng hành cùng hàng nghìn doanh nghiệp bứt phá doanh số.
            </p>
          </div>

          {/* 6 Reasons Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyReasons.map((r, i) => {
              const IconComp = r.icon;
              return (
                <div
                  key={i}
                  className="bg-slate-50/70 rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-2xs hover:bg-white hover:border-[#0baba0]/50 hover:shadow-lg transition-all space-y-3 group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-teal-50 group-hover:bg-[#0baba0] text-[#088c83] group-hover:text-white flex items-center justify-center transition-colors shadow-2xs">
                    <IconComp className="w-6 h-6" />
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-[#0baba0] transition-colors">
                    {r.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {r.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 7. GIẢI PHÁP MARKETING ONLINE TỐT NHẤT & CÔNG NGHỆ SHOWCASE (FULL-WIDTH SECTION, NO BOX) */}
      <section className="w-full bg-gradient-to-b from-[#f8fafc] via-teal-50/20 to-white border-b border-slate-200/80 py-16 sm:py-20 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="max-w-3xl mx-auto space-y-2">
            <span className="text-xs font-bold text-[#0baba0] uppercase tracking-wider">
              Nền Tảng Công Nghệ Đột Phá
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Uni Creation Sẽ Cung Cấp Cho Khách Hàng <br className="hidden sm:inline" />
              Giải Pháp Marketing Online Tốt Nhất
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Hạ tầng quản trị hiện đại, tích hợp Google Analytics 4, Tag Manager và hệ thống chống click ảo thời gian thực.
            </p>
          </div>

          {/* Responsive Multi-Device Visual Mockup */}
          <div className="max-w-4xl mx-auto bg-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-800 space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
                <span className="text-white font-bold">Realtime Marketing Ecosystem</span>
              </div>
              <div className="hidden sm:flex items-center gap-4 text-[11px]">
                <span>Google Search</span>
                <span>•</span>
                <span>Google Shopping</span>
                <span>•</span>
                <span>GDN Network</span>
                <span>•</span>
                <span>Meta Ads</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
              <div className="bg-white/5 p-4 rounded-2xl border border-white/10 space-y-1.5">
                <span className="text-[11px] text-slate-400 block">Tỷ lệ đấu thầu Top Đầu</span>
                <span className="text-2xl font-black text-[#91c544] font-mono">99.2%</span>
                <p className="text-[11px] text-slate-300">Quảng cáo luôn hiển thị vị trí 1-3 tìm kiếm khi khách hàng tra cứu từ khóa.</p>
              </div>

              <div className="bg-white/5 p-4 rounded-2xl border border-white/10 space-y-1.5">
                <span className="text-[11px] text-slate-400 block">Tối ưu chi phí mỗi nhấp (CPC)</span>
                <span className="text-2xl font-black text-[#0baba0] font-mono">-35% CPC</span>
                <p className="text-[11px] text-slate-300">Nhờ tối ưu điểm chất lượng và trang đích Landing Page chuẩn SEO tốc độ cao.</p>
              </div>

              <div className="bg-white/5 p-4 rounded-2xl border border-white/10 space-y-1.5">
                <span className="text-[11px] text-slate-400 block">Bảo vệ ngân sách 24/7</span>
                <span className="text-2xl font-black text-amber-400 font-mono">0% Thất Thoát</span>
                <p className="text-[11px] text-slate-300">Hệ thống AI tự động chặn IP khả nghi, chống click phá hoại từ đối thủ cạnh tranh.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 8. CẢM NHẬN CỦA KHÁCH HÀNG VỀ UNI CREATION (FULL-WIDTH SECTION, NO BOX) */}
      <section className="w-full bg-white border-b border-slate-200/80 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0baba0]">Đánh Giá Thực Tế</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Cảm Nhận Của Khách Hàng Về Uni Creation
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Lắng nghe phản hồi từ các đối tác doanh nghiệp đã và đang hợp tác thành công cùng chúng tôi.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="bg-slate-50/70 rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-2xs hover:bg-white hover:border-[#0baba0]/40 hover:shadow-md transition-all flex flex-col justify-between space-y-4"
              >
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                  "{t.quote}"
                </p>

                <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#0baba0] to-[#91c544] text-white font-black text-sm flex items-center justify-center shrink-0 shadow-2xs">
                    {t.avatarText}
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-slate-900">{t.client}</h4>
                    <a
                      href={`https://${t.domain}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-[#0baba0] hover:underline font-mono"
                    >
                      {t.domain}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 9. FORM ĐĂNG KÝ TƯ VẤN & NHẬN BÁO GIÁ (FULL-WIDTH SECTION, NO BOX) */}
      <section id="ads-consultation-form" className="w-full bg-gradient-to-b from-[#f0fdfa]/70 via-[#e6f8f7]/40 to-white border-b border-teal-200/60 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Info */}
            <div className="lg:col-span-5 space-y-5">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0baba0] block">
                Đăng Ký Tư Vấn Ngay
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Để Được Nhận Các Khuyến Mãi Mới Nhất
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Mời bạn điền vào các trường thông tin bên cạnh, chúng tôi sẽ gọi lại cho bạn. Cuộc gọi hoàn toàn miễn phí và chuyên viên sẽ tư vấn bộ từ khóa ngành tốt nhất!
              </p>

              <div className="space-y-3 pt-2 text-xs">
                <div className="flex items-start gap-3 text-slate-700 bg-white p-3.5 rounded-2xl border border-slate-200/70 shadow-2xs">
                  <Phone className="w-4 h-4 text-[#0baba0] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-900 block">Hotline 24/7:</span>
                    <a href={`tel:${COMPANY_INFO.hotline.replace(/\s|\./g, '')}`} className="font-mono text-[#0baba0] font-bold text-sm hover:underline">
                      {COMPANY_INFO.hotline}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-slate-700 bg-white p-3.5 rounded-2xl border border-slate-200/70 shadow-2xs">
                  <Mail className="w-4 h-4 text-[#0baba0] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-900 block">Email tiếp nhận:</span>
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
                <span>Cam kết bảo mật thông tin & Hợp đồng pháp nhân chính thức</span>
              </div>
            </div>

            {/* Right Form */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-xl">
              {submitted ? (
                <div className="py-8 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-slate-900">Đăng Ký Tư Vấn Thành Công!</h3>
                  <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Cảm ơn bạn <strong className="text-slate-900">{clientName || 'Quý khách'}</strong>! Chuyên viên Digital Marketing Uni Creation sẽ liên hệ lại qua số điện thoại <strong className="text-[#0baba0] font-mono">{clientPhone}</strong> trong vòng 15 phút để phân tích thị trường và gửi kế hoạch quảng cáo chi tiết.
                  </p>
                  <div className="p-3 bg-slate-50 rounded-xl text-xs text-slate-500 font-medium max-w-sm mx-auto">
                    Gói quan tâm: <strong className="text-slate-800">{selectedPackage}</strong>
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
                        Gói dịch vụ quan tâm
                      </label>
                      <select
                        value={selectedPackage}
                        onChange={(e) => setSelectedPackage(e.target.value)}
                        className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0baba0] bg-white font-medium"
                      >
                        <option value="GÓI CƠ BẢN ADS (Dưới 20 triệu/tháng - 20%)">Gói Cơ Bản (Dưới 20 triệu/tháng - 20%)</option>
                        <option value="GÓI NÂNG CAO ADS (Từ 20 - 50 triệu/tháng - 15%)">Gói Nâng Cao (Từ 20 - 50 triệu/tháng - 15%)</option>
                        <option value="GÓI ĐẶC BIỆT ADS (Trên 50 triệu/tháng - 10%)">Gói Đặc Biệt (Trên 50 triệu/tháng - 10%)</option>
                        <option value="Tư vấn tổng thể đa kênh theo yêu cầu">Tư vấn tổng thể đa kênh theo yêu cầu</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Kênh quảng cáo ưu tiên
                      </label>
                      <select
                        value={selectedChannel}
                        onChange={(e) => setSelectedChannel(e.target.value)}
                        className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0baba0] bg-white font-medium"
                      >
                        <option value="Quảng cáo từ khóa Google (Search)">Quảng cáo từ khóa Google (Search)</option>
                        <option value="Quảng cáo Google Shopping">Quảng cáo Google Shopping</option>
                        <option value="Quảng cáo banner GDN">Quảng cáo banner GDN</option>
                        <option value="Quảng cáo Remarketing bám đuổi">Quảng cáo Remarketing bám đuổi</option>
                        <option value="Gmail Ads">Gmail Ads</option>
                        <option value="Facebook Ads & Meta">Facebook Ads & Meta</option>
                        <option value="YouTube Video Ads">YouTube Video Ads</option>
                        <option value="Cốc Cốc Ads">Cốc Cốc Ads</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Website của bạn (nếu có)
                    </label>
                    <input
                      type="text"
                      placeholder="tencongty.vn"
                      value={clientWebsite}
                      onChange={(e) => setClientWebsite(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0baba0]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Nhu cầu cụ thể hoặc ngành hàng cần đẩy mạnh
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Ví dụ: Cần chạy từ khóa ngành nội thất, mục tiêu có 5-10 cuộc gọi mỗi ngày..."
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
                    <span>GỬI YÊU CẦU ĐĂNG KÝ TƯ VẤN NGAY</span>
                  </button>

                  <p className="text-[11px] text-center text-slate-400">
                    (*) Trường thông tin bắt buộc. Cuộc gọi và kế hoạch tư vấn hoàn toàn miễn phí.
                  </p>
                </form>
              )}
            </div>

          </div>

        </div>
      </section>

      {/* 10. CÂU HỎI THƯỜNG GẶP (FAQS) (FULL-WIDTH SECTION, NO BOX) */}
      <section className="w-full bg-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          
          <div className="flex items-center gap-2 text-[#0baba0] font-bold text-xs uppercase tracking-wider">
            <HelpCircle className="w-4 h-4" />
            <span>Giải Đáp Thắc Mắc Về Dịch Vụ Quảng Cáo Google Ads</span>
          </div>

          <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 tracking-tight">
            Câu Hỏi Thường Gặp Của Khách Hàng
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-3">
            {adsFaqs.map((faq, i) => (
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

      {/* MODAL FOR SERVICE DETAIL */}
      {selectedServiceModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 border border-slate-200 shadow-2xl space-y-5 relative animate-in fade-in zoom-in-95 duration-150">
            <button
              onClick={() => setSelectedServiceModal(null)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-[#0baba0]/10 text-[#088c83] flex items-center justify-center">
                {React.createElement(selectedServiceModal.icon, { className: 'w-6 h-6' })}
              </div>
              <div>
                <span className="text-[11px] font-bold text-[#0baba0] uppercase tracking-wider">Uni Creation Ads Service</span>
                <h3 className="text-xl font-extrabold text-slate-900">{selectedServiceModal.name}</h3>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {selectedServiceModal.desc}
            </p>

            <div className="space-y-2 bg-slate-50 p-4 rounded-2xl border border-slate-100">
              <span className="text-xs font-bold text-slate-800 block">Ưu điểm nổi bật theo univn.vn:</span>
              <ul className="space-y-2 text-xs text-slate-600">
                {selectedServiceModal.bullets.map((b: string, i: number) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-[#91c544] shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={() => {
                  setSelectedChannel(selectedServiceModal.name);
                  setSelectedServiceModal(null);
                  const el = document.getElementById('ads-consultation-form');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="flex-1 py-3 btn-brand-gradient text-white rounded-xl text-xs font-bold uppercase tracking-wider shadow cursor-pointer text-center"
              >
                Nhận Tư Vấn Kênh Này
              </button>
              <button
                onClick={() => setSelectedServiceModal(null)}
                className="px-5 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-bold cursor-pointer"
              >
                Đóng
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
