import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Calendar,
  CheckCircle2,
  Award,
  Building2,
  MapPin,
  Sparkles,
  TrendingUp,
  Users,
  Server,
  Shield,
  Globe,
  ArrowRight,
  ChevronRight,
  Check,
  Zap,
  Clock,
  Layers,
  Code2,
  ExternalLink
} from 'lucide-react';

export interface MilestoneItem {
  id: string;
  year: string;
  period: string;
  phase: string;
  title: string;
  location?: string;
  summary: string;
  details: string[];
  achievements: string[];
  metrics: {
    projects: string;
    team: string;
    highlight: string;
  };
  tags: string[];
  color: string;
}

export const MILESTONES_DATA: MilestoneItem[] = [
  {
    id: 'm-2015',
    year: '2015',
    period: 'Tháng 03/2015',
    phase: 'Giai Đoạn Khởi Nghiệp',
    title: 'Khởi Đầu Từ Đam Mê Của 5 Kỹ Sư Trẻ',
    location: 'Hà Nội',
    summary: 'Uni Creation bắt đầu từ một nhóm 5 lập trình viên trẻ đam mê công nghệ tại Hà Nội, chuyên sâu về giải pháp mã nguồn mở và tối ưu trải nghiệm người dùng.',
    details: [
      'Thành lập nhóm lập trình viên độc lập với tôn chỉ: "Viết từng dòng mã bằng cái tâm, nói không với website rập khuôn kém chất lượng".',
      'Tập trung nghiên cứu sâu kiến trúc web nhẹ, bảo mật cao và tương thích đa trình duyệt.',
      'Đặt nền móng kỹ thuật vững chắc với 45 khách hàng đầu tiên trong ngành giáo dục, dịch vụ và bán lẻ.'
    ],
    achievements: [
      'Bàn giao 45+ dự án website đầu tiên thành công',
      'Đạt 100% tỷ lệ khách hàng hài lòng và tiếp tục giới thiệu',
      'Xây dựng thành công bộ khung code chuẩn SEO sơ khai'
    ],
    metrics: {
      projects: '45+ Dự án',
      team: '05 Kỹ sư sáng lập',
      highlight: '100% Mã nguồn tự viết'
    },
    tags: ['Khởi đầu', 'Mã nguồn mở', 'Hà Nội'],
    color: 'teal'
  },
  {
    id: 'm-2016',
    year: '2016',
    period: 'Năm 2016',
    phase: 'Đón Đầu Xu Hướng',
    title: 'Tiên Phong Kiến Trúc Mobile-First & Responsive Web',
    location: 'Hà Nội & Miền Bắc',
    summary: 'Khi người dùng di động bắt đầu bùng nổ, Uni Creation tiên phong áp dụng thiết kế Responsive 100% cho mọi dự án, giúp website khách hàng hiển thị hoàn hảo trên smartphone.',
    details: [
      'Chuẩn hóa quy trình thiết kế theo triết lý Mobile-First, tối ưu hóa kích thước trang tải dưới 3 giây trên mạng 3G/4G.',
      'Mở rộng quy mô đội ngũ thiết kế UI/UX chuyên trách, tách biệt khâu thiết kế giao diện và khâu lập trình tính năng.',
      'Bắt đầu phục vụ các khách hàng doanh nghiệp sản xuất và thương mại tại các khu công nghiệp Bắc Ninh, Hải Dương, Hà Nội.'
    ],
    achievements: [
      'Tăng trưởng lên 150+ khách hàng doanh nghiệp',
      'Giúp website khách hàng tăng 40% chuyển đổi từ di động',
      'Chuẩn hóa quy trình kiểm thử QA/QC trên 12 loại màn hình'
    ],
    metrics: {
      projects: '150+ Dự án',
      team: '10 Nhân sự',
      highlight: 'Chuẩn Mobile 100%'
    },
    tags: ['Responsive Web', 'Mobile First', 'UI/UX'],
    color: 'teal'
  },
  {
    id: 'm-2017-2018',
    year: '2017 – 2018',
    period: '2017 - 2018',
    phase: 'Bứt Phá Chuyển Mình',
    title: 'Đột Phá Năng Lực Với Hơn 500+ Khách Hàng',
    location: 'Toàn Miền Bắc',
    summary: 'Uni Creation có những bước chuyển mình mạnh mẽ, phục vụ đa dạng các ngành nghề trọng điểm: Xây dựng, Bất động sản, Nội thất, Dược phẩm và Du lịch.',
    details: [
      'Nghiên cứu và ứng dụng giải pháp nén ảnh chuẩn WebP, tích hợp CDN toàn cầu giúp website đạt điểm Google PageSpeed trên 90.',
      'Phát triển hệ thống bảng điều khiển CMS quản trị bằng tiếng Việt dễ sử dụng, giúp khách hàng tự quản trị tin tức và sản phẩm trong 5 phút.',
      'Mở rộng dịch vụ tư vấn chiến lược SEO tổng thể và quản trị quảng cáo Google Ads tối ưu chi phí.'
    ],
    achievements: [
      'Cán mốc 500+ doanh nghiệp đồng hành tin cậy',
      'Top đơn vị thiết kế web uy tín hàng đầu miền Bắc',
      'Tỷ lệ khách hàng tái ký và nâng cấp dịch vụ đạt 85%'
    ],
    metrics: {
      projects: '500+ Doanh nghiệp',
      team: '18 Kỹ sư & Designer',
      highlight: 'PageSpeed >90'
    },
    tags: ['Chuẩn SEO Google', 'Tối ưu tốc độ', 'CMS tiếng Việt'],
    color: 'emerald'
  },
  {
    id: 'm-2019-2020',
    year: '2019 – 2020',
    period: 'Ngày 24/07/2019',
    phase: 'Thành Lập Pháp Nhân',
    title: 'Chính Thức Thành Lập Công Ty Cổ Phần & Đầu Tư Máy Chủ Cloud NVMe',
    location: 'Trụ sở chính: Hà Nội',
    summary: 'Đánh dấu bước ngoặt lịch sử khi chính thức thành lập Công ty Cổ phần Uni Creation Việt Nam (MST: 0108986542), đồng thời tự chủ hạ tầng Cloud Server NVMe tại Viettel IDC.',
    details: [
      'Chính thức nâng cấp tư cách pháp nhân thành Công ty Cổ phần Uni Creation Việt Nam, vốn điều lệ minh bạch, xuất hóa đơn VAT hợp chuẩn.',
      'Đầu tư cụm máy chủ Cloud Server Pure NVMe Enterprise Raid 10 tại Viettel IDC & VNPT Data Center, không còn phụ thuộc vào hạ tầng thuê ngoài.',
      'Được ghi nhận là đối tác tiềm năng của Google tại Việt Nam và kết nối trực tiếp với Trung tâm Internet Việt Nam (VNNIC).'
    ],
    achievements: [
      'Thành lập pháp nhân Công ty Cổ phần chính quy (MST: 0108986542)',
      'Tự chủ 100% hạ tầng máy chủ Cloud NVMe tốc độ 3.400MB/s',
      'Đạt thỏa thuận hợp tác phân phối giải pháp số với Google'
    ],
    metrics: {
      projects: '1.000+ Dự án',
      team: '25 Nhân sự',
      highlight: 'MST: 0108986542'
    },
    tags: ['Pháp nhân chính quy', 'Cloud NVMe', 'Viettel IDC'],
    color: 'teal'
  },
  {
    id: 'm-2021-2022',
    year: '2021 – 2022',
    period: '2021 - 2022',
    phase: 'Mở Rộng Miền Trung',
    title: 'Khai Trương Chi Nhánh Đà Nẵng & Vượt Thách Thức Đại Dịch',
    location: 'Chi nhánh: Đà Nẵng',
    summary: 'Đồng hành cùng hàng trăm doanh nghiệp chuyển đổi số bán hàng online trong mùa dịch, đồng thời mở rộng văn phòng đại diện miền Trung tại TP. Đà Nẵng.',
    details: [
      'Triển khai các gói giải pháp website thương mại điện tử cấp tốc trong 24h - 48h giúp doanh nghiệp chuyển đổi bán hàng trực tuyến.',
      'Khai trương văn phòng chi nhánh miền Trung tại số 41 Khuê Mỹ Đông 14, Quận Ngũ Hành Sơn, TP. Đà Nẵng.',
      'Thiết lập đội ngũ hỗ trợ kỹ thuật trực chiến 24/7 với cam kết phản hồi trong vòng 15 - 30 phút.'
    ],
    achievements: [
      'Khai trương văn phòng chi nhánh miền Trung tại Đà Nẵng',
      'Cán mốc 1.800+ khách hàng trên toàn quốc',
      'Cam kết chuẩn SLA hỗ trợ kỹ thuật trong 15 - 30 phút'
    ],
    metrics: {
      projects: '1.800+ Dự án',
      team: '32 Nhân sự',
      highlight: 'Chi nhánh Đà Nẵng'
    },
    tags: ['Chi nhánh Đà Nẵng', 'E-Commerce', 'SLA 15 phút'],
    color: 'cyan'
  },
  {
    id: 'm-2023-2024',
    year: '2023 – 2024',
    period: '2023 - 2024',
    phase: 'Hiện Diện 3 Miền',
    title: 'Nam Tiến Khai Trương Chi Nhánh TP.HCM & Ra Mắt Kho 180+ Mẫu Giao Diện',
    location: 'Chi nhánh: TP. Hồ Chí Minh',
    summary: 'Hoàn thiện mạng lưới hiện diện 3 miền Bắc - Trung - Nam với văn phòng đại diện tại TP.HCM. Công bố kho 180+ mẫu giao diện độc bản phục vụ hơn 30 ngành nghề.',
    details: [
      'Mở chi nhánh miền Nam tại số 973/136 Nguyễn Ảnh Thủ, Phường Tân Chánh Hiệp, Quận 12, TP. Hồ Chí Minh.',
      'Ra mắt hệ sinh thái Theme Explorer với 180+ mẫu giao diện đa ngành chuẩn SEO, hỗ trợ xem trước trực quan và tùy biến theo nhận diện thương hiệu.',
      'Ký kết hợp đồng cung cấp giải pháp chuyển đổi số cho nhiều tập đoàn lớn: Lumi Việt Nam, Sun Group, Novaland, VPBank, Gentis...'
    ],
    achievements: [
      'Khai trương chi nhánh miền Nam tại TP. Hồ Chí Minh',
      'Ra mắt kho 180+ mẫu website độc quyền thuộc 30+ ngành nghề',
      'Vượt mốc 2.200+ khách hàng doanh nghiệp trên toàn quốc'
    ],
    metrics: {
      projects: '2.200+ Doanh nghiệp',
      team: '40 Nhân sự',
      highlight: '3 Văn phòng toàn quốc'
    },
    tags: ['Chi nhánh TP.HCM', 'Kho 180+ Mẫu', 'Đa chi nhánh'],
    color: 'emerald'
  },
  {
    id: 'm-2025-2026',
    year: '2025 – 2026',
    period: 'Hiện Tại (2025 - 2026)',
    phase: 'Vươn Tầm Toàn Diện',
    title: 'Cán Mốc 2.500+ Doanh Nghiệp, Nâng Cấp Hạ Tầng & Ứng Dụng Trí Tuệ Nhân Tạo AI',
    location: 'Toàn quốc (Hà Nội · Đà Nẵng · TP.HCM)',
    summary: 'Uni Creation vững vàng vị thế hàng đầu với hơn 2.500+ doanh nghiệp đồng hành. Nâng cấp toàn diện máy chủ Pure NVMe Enterprise thế hệ mới và tích hợp AI tối ưu hóa chuyển đổi.',
    details: [
      'Nâng cấp toàn bộ hệ thống máy chủ lên chuẩn Pure NVMe Enterprise thế hệ mới với tốc độ đọc ghi đạt 3.420 MB/s, đảm bảo Uptime 99.99%.',
      'Ứng dụng AI phân tích hành vi khách hàng, tự động đề xuất từ khóa SEO và tối ưu hóa tỷ lệ chuyển đổi cho website khách hàng.',
      'Kiên định chính sách vàng: Bàn giao 100% Full Source Code, bảo hành kỹ thuật trọn đời 24/7 và hỗ trợ pháp lý Bộ Công Thương miễn phí.'
    ],
    achievements: [
      'Vượt mốc 2.500+ khách hàng doanh nghiệp và tập đoàn',
      'Tỷ lệ hài lòng kỹ thuật đạt 99.4% theo khảo sát khách hàng',
      '100% Dự án bàn giao Full Source Code và Database gốc'
    ],
    metrics: {
      projects: '2.500+ Khách hàng',
      team: '45+ Kỹ sư',
      highlight: 'Uptime 99.99%'
    },
    tags: ['2.500+ Doanh nghiệp', 'Kỷ nguyên AI', 'Bảo hành trọn đời'],
    color: 'teal'
  }
];

export const CompanyTimeline: React.FC = () => {
  const [selectedMilestone, setSelectedMilestone] = useState<MilestoneItem>(MILESTONES_DATA[MILESTONES_DATA.length - 1]);
  const [filterPhase, setFilterPhase] = useState<string>('all');

  const filteredMilestones = filterPhase === 'all'
    ? MILESTONES_DATA
    : MILESTONES_DATA.filter((m) => m.id === filterPhase);

  return (
    <div className="space-y-8">
      
      {/* Timeline Controls & Quick Year Navigator */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-200/80">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-[#0baba0] flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5" />
            Trục Thời Gian Lịch Sử
          </span>
          <p className="text-xs text-slate-600 mt-0.5">
            Bấm chọn từng năm để theo dõi chi tiết từng bước chuyển mình của Uni Creation
          </p>
        </div>

        {/* Phase Filter Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none text-xs font-medium">
          <button
            onClick={() => setFilterPhase('all')}
            className={`px-3 py-1.5 rounded-xl transition-all cursor-pointer whitespace-nowrap ${
              filterPhase === 'all'
                ? 'bg-slate-900 text-white font-bold shadow-xs'
                : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200/80'
            }`}
          >
            Tất cả 11 năm (2015 - 2026)
          </button>
          {MILESTONES_DATA.map((m) => (
            <button
              key={m.id}
              onClick={() => {
                setFilterPhase(m.id);
                setSelectedMilestone(m);
              }}
              className={`px-2.5 py-1.5 rounded-xl font-mono transition-all cursor-pointer whitespace-nowrap text-xs ${
                filterPhase === m.id
                  ? 'bg-gradient-to-r from-[#0baba0] to-[#088c83] text-white font-bold shadow-xs'
                  : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200/80'
              }`}
            >
              {m.year}
            </button>
          ))}
        </div>
      </div>

      {/* Horizontal Interactive Year Progress Bar */}
      <div className="relative py-4 px-2 hidden md:block">
        {/* Continuous Connecting Rail */}
        <div className="absolute top-1/2 left-8 right-8 h-1 bg-gradient-to-r from-teal-200 via-[#0baba0] to-[#91c544] -translate-y-1/2 rounded-full z-0" />
        
        <div className="relative z-10 flex items-center justify-between">
          {MILESTONES_DATA.map((m, idx) => {
            const isSelected = selectedMilestone.id === m.id;
            return (
              <button
                key={m.id}
                onClick={() => setSelectedMilestone(m)}
                className="flex flex-col items-center gap-2 group cursor-pointer focus:outline-none"
              >
                {/* Node Circle */}
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 font-mono font-extrabold text-xs shadow-md ${
                    isSelected
                      ? 'bg-gradient-to-br from-[#0baba0] to-[#088c83] text-white scale-125 ring-4 ring-teal-100 ring-offset-2'
                      : 'bg-white text-slate-700 border-2 border-slate-300 group-hover:border-[#0baba0] group-hover:scale-110'
                  }`}
                >
                  {idx + 1}
                </div>

                {/* Year Label */}
                <span
                  className={`text-xs font-bold transition-colors ${
                    isSelected ? 'text-[#088c83]' : 'text-slate-500 group-hover:text-slate-900'
                  }`}
                >
                  {m.year}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Selected Milestone Spotlight Banner (Interactive Deep-Dive) */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedMilestone.id}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.25 }}
          className="p-6 sm:p-8 bg-gradient-to-br from-white via-sky-50/50 to-teal-50/40 rounded-3xl border border-teal-200/80 shadow-md relative overflow-hidden"
        >
          {/* Subtle Ambient Background Watermark */}
          <span className="absolute -right-4 -bottom-6 text-8xl sm:text-9xl font-black text-slate-900/[0.03] select-none pointer-events-none font-mono">
            {selectedMilestone.year}
          </span>

          <div className="relative z-10 space-y-6">
            
            {/* Spotlight Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-teal-100">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-[#0baba0]/15 text-[#088c83] font-bold text-xs font-mono">
                  Năm {selectedMilestone.year}
                </span>
                <span className="text-xs text-slate-500 font-semibold flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-slate-400" />
                  {selectedMilestone.period}
                </span>
                {selectedMilestone.location && (
                  <span className="text-xs text-slate-500 font-semibold flex items-center gap-1 hidden sm:inline-flex">
                    <MapPin className="w-3.5 h-3.5 text-[#0baba0]" />
                    {selectedMilestone.location}
                  </span>
                )}
              </div>

              <span className="text-xs font-extrabold uppercase tracking-wider text-[#088c83] bg-white px-3 py-1 rounded-full border border-teal-200/80 shadow-2xs self-start sm:self-auto">
                {selectedMilestone.phase}
              </span>
            </div>

            {/* Spotlight Title & Summary */}
            <div className="space-y-2">
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                {selectedMilestone.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed max-w-3xl font-medium">
                {selectedMilestone.summary}
              </p>
            </div>

            {/* Spotlight 3 KPI Metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-3.5 bg-white/90 rounded-2xl border border-slate-200/80 space-y-1">
                <div className="text-[11px] font-semibold text-slate-500">Quy mô dự án:</div>
                <div className="text-base sm:text-lg font-black text-slate-900 font-mono">
                  {selectedMilestone.metrics.projects}
                </div>
              </div>

              <div className="p-3.5 bg-white/90 rounded-2xl border border-slate-200/80 space-y-1">
                <div className="text-[11px] font-semibold text-slate-500">Quy mô đội ngũ:</div>
                <div className="text-base sm:text-lg font-black text-[#088c83] font-mono">
                  {selectedMilestone.metrics.team}
                </div>
              </div>

              <div className="p-3.5 bg-white/90 rounded-2xl border border-slate-200/80 space-y-1">
                <div className="text-[11px] font-semibold text-slate-500">Dấu ấn công nghệ:</div>
                <div className="text-base sm:text-lg font-black text-[#82ba36] truncate">
                  {selectedMilestone.metrics.highlight}
                </div>
              </div>
            </div>

            {/* Two-Column Breakdown: Details vs Achievements */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              
              {/* Detailed Journey */}
              <div className="p-5 bg-white rounded-2xl border border-slate-200/80 space-y-3 shadow-2xs">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-[#0baba0]" />
                  Chi Tiết Triển Khai Trong Giai Đoạn
                </h4>
                <ul className="space-y-2 text-xs text-slate-600 leading-relaxed">
                  {selectedMilestone.details.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0baba0] shrink-0 mt-1.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Achievements Highlight */}
              <div className="p-5 bg-emerald-50/60 rounded-2xl border border-emerald-200/80 space-y-3 shadow-2xs">
                <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-900 flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-emerald-600" />
                  Thành Tựu Cốt Lõi Đạt Được
                </h4>
                <ul className="space-y-2 text-xs text-emerald-800 leading-relaxed">
                  {selectedMilestone.achievements.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* Tag Badges */}
            <div className="flex flex-wrap items-center gap-2 pt-1 text-xs">
              <span className="text-slate-400 font-medium">Từ khóa then chốt:</span>
              {selectedMilestone.tags.map((t, i) => (
                <span
                  key={i}
                  className="px-2.5 py-0.5 rounded-md bg-white border border-slate-200 text-slate-700 text-[11px] font-semibold"
                >
                  #{t}
                </span>
              ))}
            </div>

          </div>
        </motion.div>
      </AnimatePresence>

      {/* Vertical Continuous Timeline Feed (All Milestones with Vertical Rail) */}
      <div className="space-y-6 pt-4">
        <div className="flex items-center justify-between pb-2 border-b border-slate-200">
          <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#0baba0]" />
            Dòng Lịch Sử Liên Tục (2015 – 2026)
          </h4>
          <span className="text-xs text-slate-500">7 Cột mốc vàng khẳng định thương hiệu</span>
        </div>

        {/* Vertical Rail Container */}
        <div className="relative pl-6 sm:pl-8 border-l-2 border-teal-200/80 space-y-8 sm:space-y-10 ml-3 sm:ml-4">
          {filteredMilestones.map((m, idx) => {
            const isCurrentSelected = selectedMilestone.id === m.id;
            return (
              <div
                key={m.id}
                className="relative group transition-all"
              >
                {/* Node on Rail */}
                <div
                  className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center font-mono font-bold text-[11px] transition-all ${
                    isCurrentSelected
                      ? 'bg-[#0baba0] text-white ring-4 ring-teal-100 ring-offset-1 scale-110 shadow-sm'
                      : 'bg-white text-slate-600 border-2 border-teal-400 group-hover:scale-110'
                  }`}
                >
                  {idx + 1}
                </div>

                {/* Milestone Card */}
                <div
                  onClick={() => setSelectedMilestone(m)}
                  className={`p-5 sm:p-6 rounded-2xl transition-all cursor-pointer border ${
                    isCurrentSelected
                      ? 'bg-white border-[#0baba0] shadow-md ring-1 ring-[#0baba0]/20'
                      : 'bg-slate-50/80 border-slate-200/90 hover:bg-white hover:border-slate-300 hover:shadow-xs'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-100">
                    <div className="flex items-center gap-2.5">
                      <span className="text-lg font-black text-[#0baba0] font-mono">
                        {m.year}
                      </span>
                      <span className="text-xs font-semibold text-slate-500">· {m.period}</span>
                      {m.location && (
                        <span className="text-xs text-slate-400 hidden sm:inline">({m.location})</span>
                      )}
                    </div>
                    
                    <span className="text-[11px] font-bold text-[#088c83] bg-teal-50 px-2.5 py-0.5 rounded-full border border-teal-200/70 self-start sm:self-auto">
                      {m.phase}
                    </span>
                  </div>

                  <div className="pt-3 space-y-2">
                    <h5 className="font-extrabold text-sm sm:text-base text-slate-900 group-hover:text-[#0baba0] transition-colors">
                      {m.title}
                    </h5>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {m.summary}
                    </p>
                  </div>

                  {/* Highlights Summary Bar */}
                  <div className="mt-4 pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2 text-xs">
                    <div className="flex items-center gap-3 text-slate-500 font-medium">
                      <span>✓ {m.metrics.projects}</span>
                      <span>·</span>
                      <span>{m.metrics.team}</span>
                      <span>·</span>
                      <span className="text-emerald-600 font-semibold">{m.metrics.highlight}</span>
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedMilestone(m);
                      }}
                      className="text-xs font-bold text-[#088c83] hover:text-[#0baba0] flex items-center gap-1"
                    >
                      <span>Xem trọng tâm</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
};
