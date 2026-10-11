import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Bot,
  Sparkles,
  Brain,
  Code2,
  TrendingUp,
  Zap,
  Target,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  MessageSquare,
  FileText,
  ShoppingBag,
  Search,
  ScanLine,
  RefreshCw,
  Terminal,
  Cpu,
  Layers,
  Send,
  Sliders,
  Award,
  Globe,
  Database,
  Lock,
  ChevronRight
} from 'lucide-react';

interface AboutAiSectionProps {
  onConsult?: (serviceName?: string) => void;
}

type AiFeatureTab = 'sales' | 'seo' | 'cro' | 'ocr' | 'search';

export const AboutAiSection: React.FC<AboutAiSectionProps> = ({ onConsult }) => {
  const [activeTab, setActiveTab] = useState<AiFeatureTab>('sales');
  const [isSimulating, setIsSimulating] = useState(false);
  const [demoState, setDemoState] = useState<number>(0);

  // Trigger brief simulation animation when switching tabs or clicking demo button
  const handleSimulate = () => {
    setIsSimulating(true);
    setTimeout(() => {
      setIsSimulating(false);
      setDemoState((prev) => (prev + 1) % 2);
    }, 700);
  };

  // 4 Core AI Engineering Pillars (Uni Creation Internal Workflow)
  const AI_PILLARS = [
    {
      id: 'pillar-code',
      title: 'AI Code Copilot & Rà Soát Bảo Mật Tự Động',
      badge: 'Lập Trình & Kiểm Thử',
      icon: Code2,
      accentColor: 'text-[#0baba0] bg-teal-50 border-teal-200',
      description:
        'Đội ngũ kỹ sư Uni Creation ứng dụng các mô hình AI chuyên sâu trong phân tích mã nguồn (Static Analysis), tự động phát hiện lỗ hổng bảo mật chuẩn OWASP, tối ưu hóa truy vấn SQL và dọn dẹp mã thừa trước khi triển khai.',
      kpis: [
        { label: 'Tốc độ code sạch', val: 'Tăng 2.5x' },
        { label: 'Lỗi cú pháp tồn đọng', val: '0%' },
        { label: 'Rút ngắn bàn giao', val: '65%' }
      ]
    },
    {
      id: 'pillar-seo',
      title: 'AI Generative SEO & Cấu Trúc Thực Thể (Entity)',
      badge: 'Tối Ưu Tìm Kiếm',
      icon: Sparkles,
      accentColor: 'text-emerald-600 bg-emerald-50 border-emerald-200',
      description:
        'Mô hình xử lý ngôn ngữ tự nhiên quét phân tích đối thủ top đầu ngành trên Google, tự động xây dựng cây từ khóa ngữ nghĩa LSI, chuẩn hóa hệ thống thẻ Heading (H1–H4), thẻ Meta và sinh dữ liệu có cấu trúc Schema JSON-LD đa tầng.',
      kpis: [
        { label: 'Điểm Onpage Entity', val: '95/100' },
        { label: 'Tốc độ Index Google', val: 'Nhanh 3.5x' },
        { label: 'Tiết kiệm chi phí SEO', val: '75%' }
      ]
    },
    {
      id: 'pillar-speed',
      title: 'AI Tối Ưu Nén Ảnh & Chuẩn Core Web Vitals',
      badge: 'Hiệu Năng & Tốc Độ',
      icon: Zap,
      accentColor: 'text-amber-600 bg-amber-50 border-amber-200',
      description:
        'Hệ thống AI tự động hóa pipeline xử lý tài nguyên: chuyển đổi và nén ảnh lossless sang định dạng AVIF/WebP thế hệ mới, tự động inline Critical CSS và trì hoãn JavaScript không thiết yếu để đạt chuẩn Core Web Vitals xuất sắc.',
      kpis: [
        { label: 'Thời gian tải trang', val: '< 1.2s' },
        { label: 'Điểm Google PageSpeed', val: '85 – 95+' },
        { label: 'Tiết kiệm dung lượng', val: '70%' }
      ]
    },
    {
      id: 'pillar-cro',
      title: 'AI Phân Tích Hành Vi & Tối Ưu Chuyển Đổi (CRO)',
      badge: 'Trải Nghiệm & Doanh Số',
      icon: Target,
      accentColor: 'text-blue-600 bg-blue-50 border-blue-200',
      description:
        'Phân tích dữ liệu bản đồ nhiệt (Heatmap) và thói quen tương tác của người dùng Việt Nam. AI dự đoán điểm chạm chú ý cao nhất trên màn hình để định vị các nút kêu gọi hành động (CTA), form đăng ký và thanh giỏ hàng thông minh.',
      kpis: [
        { label: 'Tỷ lệ điền form', val: '+40%' },
        { label: 'Giảm tỷ lệ thoát trang', val: '-32%' },
        { label: 'Tăng doanh thu đơn web', val: '+28%' }
      ]
    }
  ];

  // 5 AI Features applied directly on client websites
  const AI_CLIENT_FEATURES = [
    {
      id: 'sales' as AiFeatureTab,
      name: 'Trợ Lý AI Chatbot Bán Hàng 24/7',
      shortTitle: 'AI Chatbot Bán Hàng',
      icon: Bot,
      highlight: 'Không lo trễ tin nhắn đêm',
      techBadge: 'Bot & LLM Agent',
      badgeIcon: Bot,
      color: 'from-teal-500 to-emerald-600',
      summary:
        'Trợ lý ảo được huấn luyện theo tài liệu bảng giá và sản phẩm riêng của doanh nghiệp. Hiểu tiếng Việt tự nhiên, giải đáp chính sách, tư vấn giải pháp và tự động thu thập số điện thoại khách hàng gửi về CRM/Zalo.',
      tags: ['Tự học dữ liệu catalog', 'Phản hồi < 0.8s', 'Tích hợp Zalo & CRM', 'Hỗ trợ đa ngôn ngữ'],
      benefits: [
        'Trực chat 24/7/365, không bỏ lỡ khách hàng tiềm năng ngoài giờ hành chính',
        'Tự động phân loại nhu cầu (Lead Scoring) và chuyển tiếp cho nhân viên kinh doanh',
        'Giảm 80% chi phí nhân sự trực ca đêm và trả lời các câu hỏi lặp đi lặp lại'
      ]
    },
    {
      id: 'seo' as AiFeatureTab,
      name: 'AI Tự Động Sinh Nội Dung & Bài Viết Chuẩn SEO',
      shortTitle: 'AI Viết Bài Chuẩn SEO',
      icon: Brain,
      highlight: 'Lên bài viết trong 15 giây',
      techBadge: 'Brain & NLP Generation',
      badgeIcon: Brain,
      color: 'from-purple-500 to-indigo-600',
      summary:
        'Chỉ cần nhập tên sản phẩm hoặc chủ đề kinh doanh, hệ thống AI sẽ tự động sinh bài viết giới thiệu 800 – 1.500 từ chuẩn SEO với đầy đủ thẻ H2, H3, thẻ mô tả Meta Description, từ khóa liên quan và cấu trúc câu hỏi FAQ.',
      tags: ['Chuẩn Semantic Search', 'Chống trùng lặp 100%', 'Tự sinh Meta Title & Alt', 'Schema FAQ tự động'],
      benefits: [
        'Tạo hàng chục bài viết chuyên ngành chuẩn SEO mỗi ngày mà không cần đội content lớn',
        'Tự động cập nhật xu hướng từ khóa tìm kiếm mới nhất của Google',
        'Đi kèm bộ lọc văn phong chuyên nghiệp, phù hợp với từng ngành nghề kinh doanh'
      ]
    },
    {
      id: 'cro' as AiFeatureTab,
      name: 'AI Đề Xuất Sản Phẩm Cá Nhân Hóa (Recommendation Engine)',
      shortTitle: 'AI Gợi Ý Mua Kèm',
      icon: Cpu,
      highlight: 'Tăng giá trị đơn hàng +35%',
      techBadge: 'Cpu & Predictive ML',
      badgeIcon: Cpu,
      color: 'from-amber-500 to-orange-600',
      summary:
        'Học hỏi thói quen bấm click, thời gian xem trang và lịch sử mua sắm để tự động gợi ý các combo "Khách hàng thường mua cùng nhau" hoặc sản phẩm tương tự phù hợp đúng nhu cầu khách hàng theo thời gian thực.',
      tags: ['Cross-sell & Up-sell tự động', 'Học hành vi thời gian thực', 'Tối ưu giỏ hàng', 'A/B Testing thông minh'],
      benefits: [
        'Gia tăng giá trị trung bình trên mỗi đơn hàng (AOV) từ 25% đến 40%',
        'Giữ chân khách hàng duyệt xem nhiều trang sản phẩm hơn',
        'Tự động đề xuất ưu đãi cá nhân hóa khi khách hàng có dấu hiệu rời trang'
      ]
    },
    {
      id: 'ocr' as AiFeatureTab,
      name: 'AI Đối Soát & Quét Ảnh Chuyển Khoản VietQR',
      shortTitle: 'AI Quét Hóa Đơn VietQR',
      icon: ScanLine,
      highlight: 'Xác thực thanh toán 0.3s',
      techBadge: 'Computer Vision & OCR',
      badgeIcon: ScanLine,
      color: 'from-cyan-500 to-blue-600',
      summary:
        'Ứng dụng thị giác máy tính (Computer Vision) nhận diện ảnh chụp biên lai chuyển khoản ngân hàng, tự động trích xuất mã giao dịch, số tài khoản và số tiền để xác thực đơn hàng tự động mà không cần kế toán kiểm tra thủ công.',
      tags: ['Độ chính xác 99.8%', 'Tất cả ngân hàng Việt Nam', 'Tự động kích hoạt đơn', 'Chống gian lận ảnh giả'],
      benefits: [
        'Xác thực giao dịch tự động chỉ trong vài giây, khách hàng không phải chờ đợi',
        'Giảm 95% thời gian đối soát kế toán và hạn chế tối đa nhầm lẫn con người',
        'Hệ thống AI tự động phát hiện các ảnh chụp chỉnh sửa hoặc làm giả giao dịch'
      ]
    },
    {
      id: 'search' as AiFeatureTab,
      name: 'AI Tìm Kiếm Ngữ Nghĩa & Giọng Nói Tiếng Việt',
      shortTitle: 'AI Tìm Kiếm Ngữ Nghĩa',
      icon: Sparkles,
      highlight: 'Hiểu từ lóng & lỗi chính tả',
      techBadge: 'Semantic & Voice AI',
      badgeIcon: Sparkles,
      color: 'from-emerald-500 to-teal-600',
      summary:
        'Công nghệ tìm kiếm theo ngữ cảnh (Semantic Search) cho phép khách hàng gõ hoặc nói bằng giọng nói tự nhiên (ví dụ: "tìm váy dự tiệc sang trọng dưới 1 triệu"), AI sẽ tự động phân tích ý định và trả về đúng sản phẩm mong muốn.',
      tags: ['Voice Search tiếng Việt', 'Tự sửa lỗi chính tả', 'Tìm theo ngân sách', 'Tìm kiếm đa thuộc tính'],
      benefits: [
        'Khách hàng tìm thấy ngay sản phẩm cần mua dù gõ sai chính tả hay dùng từ ngữ địa phương',
        'Tăng tỷ lệ chuyển đổi từ tìm kiếm sang giỏ hàng lên thêm 30%',
        'Hỗ trợ tìm kiếm bằng giọng nói trực tiếp trên giao diện điện thoại di động'
      ]
    }
  ];

  const currentFeature = AI_CLIENT_FEATURES.find((f) => f.id === activeTab) || AI_CLIENT_FEATURES[0];

  return (
    <section className="w-full relative overflow-hidden bg-gradient-to-b from-teal-50/50 via-slate-50/60 to-white py-16 sm:py-24 border-b border-teal-100/70">
      
      {/* Background ambient lighting orbs */}
      <div className="absolute top-1/4 -left-20 w-[450px] h-[450px] bg-[#0baba0]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-cyan-400/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-10 right-1/3 w-[300px] h-[300px] bg-[#91c544]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* =========================================================================
            HEADER: AI STRATEGY & VISION
            ========================================================================= */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-teal-200/80 text-xs text-[#088c83] shadow-xs">
            <Sparkles className="w-4 h-4 text-[#0baba0] animate-pulse" />
            <span className="font-extrabold uppercase tracking-wider text-[11px]">
              TIÊN PHONG CÔNG NGHỆ 4.0 · AI-POWERED ENGINEERING & SMART CAPABILITIES
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Ứng Dụng <span className="bg-gradient-to-r from-[#0baba0] via-[#088c83] to-[#91c544] bg-clip-text text-transparent">Trí Tuệ Nhân Tạo (AI)</span> Vào Phát Triển & Vận Hành Website
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Tại <strong>Uni Creation (UNIVN)</strong>, chúng tôi kết hợp nền tảng kinh nghiệm vững chắc với các mô hình AI tiên tiến nhất hiện nay (Generative AI, Large Language Models & Machine Learning). Chúng tôi ứng dụng AI vào cả <strong>hai phương diện</strong>: tối ưu hóa quy trình kỹ thuật nội bộ và tích hợp các tính năng thông minh trực tiếp trên website của quý khách.
          </p>
        </div>

        {/* =========================================================================
            PART A: 4 TRỤ CỘT PHÁT TRIỂN KỸ THUẬT NỘI BỘ (AI IN ENGINEERING)
            ========================================================================= */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 pb-3 border-b border-slate-200">
            <div>
              <span className="text-xs font-bold text-[#0baba0] uppercase tracking-wider">Hiệu Suất & Chất Lượng Mã Nguồn</span>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                4 Trụ Cột Kỹ Thuật Được Tăng Cường Bởi AI Tại Uni Creation
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 max-w-md">
              AI đóng vai trò như trợ lý kỹ sư cao cấp đồng hành trong từng khâu viết code, kiểm thử bảo mật và tối ưu tốc độ.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {AI_PILLARS.map((pillar, idx) => {
              const IconComp = pillar.icon;
              return (
                <motion.div
                  key={pillar.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="group p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-xl hover:border-teal-300 transition-all duration-300 flex flex-col justify-between space-y-6 relative overflow-hidden"
                >
                  {/* Subtle top accent highlight */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#0baba0]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3.5">
                        <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center border ${pillar.accentColor} shadow-xs group-hover:scale-105 transition-transform`}>
                          <IconComp className="w-6 h-6 sm:w-7 sm:h-7" />
                        </div>
                        <div>
                          <span className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider block">
                            TRỤ CỘT 0{idx + 1}
                          </span>
                          <span className="text-xs font-bold text-[#088c83]">
                            {pillar.badge}
                          </span>
                        </div>
                      </div>
                      <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-slate-100 text-slate-600 border border-slate-200/60">
                        AI Workflow
                      </span>
                    </div>

                    <div className="space-y-2">
                      <h4 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-[#088c83] transition-colors leading-snug">
                        {pillar.title}
                      </h4>
                      <p className="text-sm text-slate-600 leading-relaxed font-normal">
                        {pillar.description}
                      </p>
                    </div>
                  </div>

                  {/* 3 Metric Pills with generous breathing space */}
                  <div className="pt-4 border-t border-slate-100 space-y-2.5">
                    <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider flex items-center justify-between">
                      <span>Chỉ số đo lường hiệu quả (KPIs)</span>
                      <span className="text-[#0baba0] text-[10px] font-medium font-sans">Đo kiểm thực tế</span>
                    </div>

                    <div className="grid grid-cols-3 gap-3 sm:gap-4 text-center">
                      {pillar.kpis.map((kpi, kIdx) => (
                        <div
                          key={kIdx}
                          className="bg-slate-50/90 group-hover:bg-teal-50/40 p-3 sm:p-3.5 rounded-2xl border border-slate-200/80 group-hover:border-teal-200/80 transition-all flex flex-col justify-center"
                        >
                          <div className="text-base sm:text-lg font-black text-[#088c83] font-mono leading-tight tracking-tight whitespace-nowrap">
                            {kpi.val}
                          </div>
                          <div className="text-xs text-slate-600 font-medium mt-1 leading-snug">
                            {kpi.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* =========================================================================
            PART B: 5 TÍNH NĂNG AI TÍCH HỢP TRỰC TIẾP TRÊN WEBSITE KHÁCH HÀNG (INTERACTIVE SHOWCASE)
            ========================================================================= */}
        <div className="space-y-8 pt-4">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold text-[#0baba0] uppercase tracking-wider">Giá Trị Thực Tiễn Cho Khách Hàng</span>
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
              Các Tính Năng AI Sẵn Sàng Tích Hợp Lên Website Doanh Nghiệp
            </h3>
            <p className="text-xs sm:text-sm text-slate-500">
              Chọn một tính năng bên dưới để xem chi tiết ứng dụng và trải nghiệm mô phỏng cách tính năng vận hành thực tế:
            </p>
          </div>

          {/* Tab Selector Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 max-w-4xl mx-auto">
            {AI_CLIENT_FEATURES.map((tab) => {
              const TabIcon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id);
                    setDemoState(0);
                  }}
                  className={`inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full text-xs font-bold transition-all cursor-pointer shadow-xs ${
                    isActive
                      ? 'bg-gradient-to-r from-[#0baba0] to-[#088c83] text-white shadow-md shadow-[#0baba0]/25 scale-105 ring-2 ring-[#0baba0]/30'
                      : 'bg-white hover:bg-teal-50/60 text-slate-700 hover:text-[#088c83] border border-slate-200'
                  }`}
                >
                  <span className={`w-6 h-6 rounded-lg flex items-center justify-center ${
                    isActive ? 'bg-white/20 text-white' : 'bg-teal-50 text-[#0baba0]'
                  }`}>
                    <TabIcon className="w-3.5 h-3.5" />
                  </span>
                  <span>{tab.shortTitle}</span>
                  {tab.highlight && (
                    <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ml-0.5 hidden sm:inline ${
                      isActive ? 'bg-white/20 text-white' : 'bg-teal-100 text-[#088c83]'
                    }`}>
                      {tab.highlight}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Tab Content Display & Interactive Mockup */}
          <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-slate-200">
              
              {/* Left Column: Feature Specifications & Business Value (7 cols) */}
              <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 space-y-7">
                <div className="space-y-4">
                  {/* Badges with prominent Lucide Icons */}
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200 text-[#088c83] text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-2xs">
                      {React.createElement(currentFeature.badgeIcon, { className: 'w-4 h-4 text-[#0baba0]' })}
                      <span>{currentFeature.techBadge}</span>
                    </span>
                    <span className="px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-[11px] font-semibold flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-amber-500" />
                      {currentFeature.highlight}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-[11px] font-semibold">
                      Tích hợp nhanh trong 24h
                    </span>
                  </div>

                  <div className="flex items-start gap-4 pt-1">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-teal-50 to-teal-100/80 border border-teal-200/80 text-[#0baba0] flex items-center justify-center shadow-xs shrink-0 mt-1">
                      {React.createElement(currentFeature.icon, { className: 'w-7 h-7' })}
                    </div>
                    <div>
                      <h4 className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight">
                        {currentFeature.name}
                      </h4>
                      <p className="text-sm text-slate-600 leading-relaxed font-normal mt-2">
                        {currentFeature.summary}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Feature Tags Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-2 gap-2.5">
                  {currentFeature.tags.map((tag, tIdx) => (
                    <div key={tIdx} className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-xs font-semibold text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-[#0baba0] shrink-0" />
                      <span className="truncate">{tag}</span>
                    </div>
                  ))}
                </div>

                {/* Key Business Benefits */}
                <div className="space-y-2.5 pt-2">
                  <h5 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Lợi ích cốt lõi cho doanh nghiệp của bạn
                  </h5>
                  <div className="space-y-2">
                    {currentFeature.benefits.map((benefit, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                        <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-[10px] font-black shrink-0 mt-0.5">
                          ✓
                        </span>
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action CTA */}
                <div className="pt-2 flex flex-wrap items-center gap-3">
                  {onConsult && (
                    <button
                      onClick={() => onConsult(`Tư vấn tích hợp tính năng ${currentFeature.name}`)}
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-[#0baba0] to-[#088c83] text-white text-xs sm:text-sm font-bold shadow-md shadow-[#0baba0]/20 hover:scale-105 active:scale-95 transition-all cursor-pointer"
                    >
                      <Bot className="w-4 h-4" />
                      <span>Đăng Ký Tích Hợp Cho Website</span>
                    </button>
                  )}

                  <button
                    onClick={handleSimulate}
                    disabled={isSimulating}
                    className="inline-flex items-center gap-2 px-4 py-3 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs sm:text-sm font-bold transition-all cursor-pointer disabled:opacity-50"
                  >
                    <RefreshCw className={`w-4 h-4 text-[#0baba0] ${isSimulating ? 'animate-spin' : ''}`} />
                    <span>Thử Nghiệm Tương Tác</span>
                  </button>
                </div>
              </div>

              {/* Right Column: Live Interactive Demo Mockup (5 cols) */}
              <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-6 sm:p-8 flex flex-col justify-between text-white relative">
                
                {/* Window header */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500/80" />
                    <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <span className="w-3 h-3 rounded-full bg-green-500/80" />
                    <span className="text-[11px] font-mono text-slate-400 ml-2">Uni AI Simulation Engine</span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-teal-500/20 text-teal-300 border border-teal-500/30">
                    Live Preview
                  </span>
                </div>

                {/* Simulated Visual Content based on activeTab */}
                <div className="py-6 min-h-[320px] flex flex-col justify-center">
                  <AnimatePresence mode="wait">
                    
                    {/* CASE 1: AI SALES CHATBOT */}
                    {activeTab === 'sales' && (
                      <motion.div
                        key="demo-sales"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="space-y-3 font-sans text-xs"
                      >
                        {/* User Bubble */}
                        <div className="flex justify-end">
                          <div className="bg-[#0baba0] text-white p-3 rounded-2xl rounded-tr-xs max-w-[85%] shadow-sm leading-relaxed">
                            {demoState === 0
                              ? 'Em ơi tư vấn làm website công ty kiến trúc nội thất có bàn giao full code không?'
                              : 'Báo giá gói Pro 4 triệu có bao gồm tên miền và hosting tốc độ cao chưa em?'}
                          </div>
                        </div>

                        {/* AI Response Bubble */}
                        <div className="flex items-start gap-2.5">
                          <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-[#0baba0] to-[#91c544] flex items-center justify-center shrink-0 shadow-md">
                            <Bot className="w-4 h-4 text-white" />
                          </div>
                          <div className="bg-slate-800 border border-slate-700/80 p-3.5 rounded-2xl rounded-tl-xs max-w-[88%] text-slate-200 leading-relaxed space-y-2">
                            {isSimulating ? (
                              <div className="flex items-center gap-2 text-teal-300 py-2">
                                <span className="w-2 h-2 rounded-full bg-teal-400 animate-ping" />
                                <span>AI đang phân tích catalog và sinh phản hồi...</span>
                              </div>
                            ) : demoState === 0 ? (
                              <>
                                <p>
                                  Dạ chào anh/chị! Với công ty kiến trúc nội thất, Uni Creation khuyến nghị <strong>Gói Pro (4.000.000đ)</strong>: tích hợp sẵn bộ lọc dự án công trình, hosting Pure NVMe 3GB và <strong>cam kết bàn giao 100% Source Code gốc</strong> kèm bảo hành trọn đời ạ!
                                </p>
                                <div className="pt-1.5 flex flex-wrap gap-1.5">
                                  <span className="text-[10px] bg-slate-700 px-2 py-0.5 rounded-md text-teal-300 border border-teal-500/30">
                                    ✓ Bàn giao 100% Code
                                  </span>
                                  <span className="text-[10px] bg-slate-700 px-2 py-0.5 rounded-md text-teal-300 border border-teal-500/30">
                                    ✓ Bảo hành trọn đời
                                  </span>
                                </div>
                              </>
                            ) : (
                              <>
                                <p>
                                  Dạ có đầy đủ trọn gói ạ! Gói Pro đã tặng miễn phí <strong>Tên miền quốc tế (.com/.net)</strong> trong 1 năm + <strong>Hosting Pure NVMe 3.000 MB</strong> siêu tốc không phát sinh thêm chi phí nào ạ!
                                </p>
                                <div className="text-[11px] text-emerald-400 font-bold">
                                  ⚡ Tốc độ phản hồi AI: 0.35 giây
                                </div>
                              </>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {/* CASE 2: AI SEO CONTENT */}
                    {activeTab === 'seo' && (
                      <motion.div
                        key="demo-seo"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="space-y-3 font-mono text-[11px]"
                      >
                        <div className="bg-slate-800/90 p-3 rounded-xl border border-slate-700 space-y-1.5">
                          <div className="text-slate-400 text-[10px] uppercase">Từ khóa đầu vào:</div>
                          <div className="text-teal-300 font-bold">"Thiết kế website chuẩn SEO chuyên nghiệp"</div>
                        </div>

                        <div className="bg-slate-800/60 p-3 rounded-xl border border-slate-700/80 space-y-2">
                          <div className="flex items-center justify-between text-[10px] text-slate-400 border-b border-slate-700 pb-1.5">
                            <span>ĐIỂM CHUẨN ONPAGE</span>
                            <span className="text-emerald-400 font-bold font-sans">96 / 100 (Xuất sắc)</span>
                          </div>
                          <div className="text-slate-300 leading-relaxed font-sans text-xs">
                            <span className="text-teal-400 font-bold">H1:</span> 10 Tiêu Chí Vàng Đánh Giá Website Chuẩn SEO Bứt Phá Doanh Thu<br />
                            <span className="text-teal-400 font-bold">Meta:</span> Hướng dẫn toàn diện từ chuyên gia Uni Creation giúp doanh nghiệp tối ưu Onpage 100%...<br />
                            <span className="text-teal-400 font-bold">Schema:</span> Article, FAQPage, Organization (JSON-LD)
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {/* CASE 3: AI CRO & RECOMMENDATION */}
                    {activeTab === 'cro' && (
                      <motion.div
                        key="demo-cro"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="space-y-3 font-sans text-xs"
                      >
                        <div className="text-[11px] text-slate-400 flex items-center gap-1.5">
                          <Sparkles className="w-3.5 h-3.5 text-teal-400" />
                          <span>AI Smart Recommender (Độ chính xác 98%)</span>
                        </div>
                        <div className="bg-slate-800/90 p-3.5 rounded-2xl border border-slate-700 space-y-2.5">
                          <div className="text-[11px] text-slate-300">
                            Khách hàng vừa xem: <strong className="text-white">Mẫu Website Bất Động Sản Pro</strong>
                          </div>
                          <div className="p-2.5 bg-slate-900 rounded-xl border border-teal-500/40 flex items-center justify-between">
                            <div className="space-y-0.5">
                              <div className="font-bold text-white text-[11px]">Gợi ý mua kèm Combo:</div>
                              <div className="text-[10px] text-slate-400">Hosting NVMe Pure + Tích Hợp Zalo AI Chatbot</div>
                            </div>
                            <span className="px-2 py-1 bg-emerald-500/20 text-emerald-300 text-[10px] font-bold rounded-lg border border-emerald-500/30">
                              +35% Doanh số
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {/* CASE 4: AI PAYMENT OCR */}
                    {activeTab === 'ocr' && (
                      <motion.div
                        key="demo-ocr"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="space-y-3 font-mono text-[11px]"
                      >
                        <div className="p-3 bg-slate-800/90 rounded-xl border border-slate-700 flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <ScanLine className="w-4 h-4 text-teal-400" />
                            <span className="text-slate-300 font-sans text-xs">Biên lai VietQR Scan</span>
                          </div>
                          <span className="text-emerald-400 text-[10px] font-bold">OCR SUCCESS (0.28s)</span>
                        </div>

                        <div className="bg-slate-900 p-3.5 rounded-xl border border-slate-700 space-y-1.5 text-slate-300">
                          <div>Ngân hàng: <span className="text-white font-bold">Vietcombank</span></div>
                          <div>Số tiền: <span className="text-emerald-400 font-bold font-sans">4.000.000 VNĐ</span></div>
                          <div>Mã giao dịch: <span className="text-teal-300">FT2409871149</span></div>
                          <div className="pt-1 text-[10px] text-emerald-400 font-sans font-bold flex items-center gap-1">
                            <CheckCircle2 className="w-3.5 h-3.5" />
                            Tự động xác nhận thanh toán đơn hàng #UNI-9821
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {/* CASE 5: AI SEMANTIC SEARCH */}
                    {activeTab === 'search' && (
                      <motion.div
                        key="demo-search"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="space-y-3 font-sans text-xs"
                      >
                        <div className="p-3 bg-slate-800 rounded-xl border border-slate-700 space-y-1">
                          <div className="text-[10px] text-slate-400">Khách tìm kiếm bằng giọng nói/từ lóng:</div>
                          <div className="text-teal-300 font-mono text-xs">"lam web ban hang thoi trang duoi 4 cu"</div>
                        </div>

                        <div className="bg-slate-900 p-3.5 rounded-xl border border-slate-700/80 space-y-2">
                          <div className="text-[10px] text-slate-400 font-mono">
                            AI Ý định: <span className="text-emerald-400">Gói Web E-commerce | Ngân sách ≤ 4.000.000đ</span>
                          </div>
                          <div className="text-slate-200 text-xs font-medium space-y-1">
                            <div>✓ Mẫu Thời Trang H-Fashion (3.500.000đ)</div>
                            <div>✓ Mẫu Mỹ Phẩm GlowStore (4.000.000đ)</div>
                          </div>
                        </div>
                      </motion.div>
                    )}

                  </AnimatePresence>
                </div>

                {/* Bottom Footer Status */}
                <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                  <span>Mô hình kết nối: <strong>Gemini 2.5 Flash & GPT-4o</strong></span>
                  <span className="text-teal-400 font-mono">Uptime 99.9%</span>
                </div>

              </div>

            </div>
          </div>
        </div>

        {/* =========================================================================
            PART C: ĐỐI TÁC CÔNG NGHỆ AI & NGUYÊN TẮC BẢO MẬT DỮ LIỆU DOANH NGHIỆP
            ========================================================================= */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-slate-900 via-slate-950 to-teal-950 text-white shadow-xl space-y-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-3">
              <span className="px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 text-[11px] font-bold border border-teal-500/30 uppercase tracking-wider">
                An Toàn & Bảo Mật Tuyệt Đối
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white">
                Cam Kết Đạo Đức & Bảo Vệ Dữ Liệu Khi Ứng Dụng AI
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                Uni Creation tuân thủ các tiêu chuẩn bảo mật dữ liệu doanh nghiệp khắt khe nhất. Quý khách hoàn toàn an tâm khi đưa trí tuệ nhân tạo vào hệ thống kinh doanh trực tuyến của mình.
              </p>
            </div>

            <div className="lg:col-span-5 flex flex-wrap items-center justify-start lg:justify-end gap-3 text-xs font-bold text-slate-300">
              <span className="px-3 py-1.5 rounded-xl bg-white/10 border border-white/15">OpenAI GPT-4o</span>
              <span className="px-3 py-1.5 rounded-xl bg-white/10 border border-white/15">Google Gemini</span>
              <span className="px-3 py-1.5 rounded-xl bg-white/10 border border-white/15">Claude 3.5</span>
              <span className="px-3 py-1.5 rounded-xl bg-white/10 border border-white/15">Hugging Face</span>
              <span className="px-3 py-1.5 rounded-xl bg-white/10 border border-white/15">DeepSeek</span>
            </div>

          </div>

          {/* 3 Golden Commitments */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-2">
            
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-2">
              <div className="w-9 h-9 rounded-xl bg-[#0baba0]/20 text-[#0baba0] flex items-center justify-center">
                <Lock className="w-5 h-5 text-teal-300" />
              </div>
              <h4 className="text-sm font-bold text-white">Bảo Mật Dữ Liệu 100% (Private Data)</h4>
              <p className="text-xs text-slate-300 leading-relaxed font-light">
                Dữ liệu khách hàng, giá vốn và bí mật kinh doanh được mã hóa riêng biệt, cam kết không bao giờ bị dùng để huấn luyện mô hình AI công cộng.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-2">
              <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-300 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5 text-emerald-300" />
              </div>
              <h4 className="text-sm font-bold text-white">Bàn Giao Trọn Quyền Mã Nguồn & API</h4>
              <p className="text-xs text-slate-300 leading-relaxed font-light">
                Doanh nghiệp sở hữu toàn bộ mã nguồn tích hợp, không phụ thuộc vào bên thứ ba và có thể tùy chỉnh kịch bản phản hồi bất kỳ lúc nào.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-2">
              <div className="w-9 h-9 rounded-xl bg-cyan-500/20 text-cyan-300 flex items-center justify-center">
                <Database className="w-5 h-5 text-cyan-300" />
              </div>
              <h4 className="text-sm font-bold text-white">Tối Ưu Chi Phí API Đến 85%</h4>
              <p className="text-xs text-slate-300 leading-relaxed font-light">
                Kiến trúc Caching thông minh lưu trữ các câu trả lời phổ biến, giúp doanh nghiệp vận hành trợ lý AI cả tháng chỉ với chi phí rất nhỏ.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
