import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MessageSquare,
  FileCheck2,
  Palette,
  Code2,
  TestTube2,
  Rocket,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Clock,
  X,
  FileCode,
  Award,
  Zap
} from 'lucide-react';

interface WorkflowStep {
  step: string;
  title: string;
  shortTitle: string;
  timeframe: string;
  icon: React.ElementType;
  description: string;
  deliverables: string[];
  kpis: { label: string; value: string }[];
}

export const WorkflowSection: React.FC<{
  onConsult?: () => void;
}> = ({ onConsult }) => {
  const [selectedStep, setSelectedStep] = useState<WorkflowStep | null>(null);

  const steps: WorkflowStep[] = [
    {
      step: '01',
      title: 'Khảo Sát & Giải Pháp',
      shortTitle: 'Khảo Sát & Tư Vấn',
      timeframe: 'Trong 2 - 4 giờ',
      icon: MessageSquare,
      description: 'Khảo sát định hướng kinh doanh, phân tích đối thủ cùng ngành và tư vấn cấu trúc sitemap, tính năng và gói chi phí tối ưu nhất.',
      deliverables: [
        'Bản khảo sát mục tiêu kinh doanh & hành vi khách hàng',
        'Bản phác thảo sơ đồ sitemap và luồng người dùng',
        'Báo giá chi tiết, minh bạch không phát sinh chi phí ẩn'
      ],
      kpis: [
        { label: 'Thời gian phản hồi', value: '< 30 Phút' },
        { label: 'Tư vấn giải pháp', value: '1-1 Miễn phí' },
        { label: 'Phân tích đối thủ', value: '3 - 5 Đơn vị' }
      ]
    },
    {
      step: '02',
      title: 'Hợp Đồng & Wireframe',
      shortTitle: 'Ký Kết & Wireframe',
      timeframe: 'Ngày 01',
      icon: FileCheck2,
      description: 'Ký kết hợp đồng pháp lý có dấu đỏ công ty, cam kết tiến độ và xây dựng khung sườn Wireframe định hình vị trí khối nội dung.',
      deliverables: [
        'Hợp đồng pháp lý có dấu đỏ công ty Uni Creation',
        'Kế hoạch tiến độ chi tiết từng mốc bàn giao',
        'Bản vẽ cấu trúc khung sườn Wireframe trang chủ và các trang con'
      ],
      kpis: [
        { label: 'Pháp lý', value: 'Hợp đồng VAT' },
        { label: 'Cam kết tiến độ', value: '100% Đúng hẹn' },
        { label: 'Cấu trúc khối', value: 'Chuẩn UX/UI' }
      ]
    },
    {
      step: '03',
      title: 'Thiết Kế UI/UX Demo',
      shortTitle: 'Thiết Kế UI/UX',
      timeframe: 'Ngày 02 - 03',
      icon: Palette,
      description: 'May đo giao diện độc bản theo nhận diện thương hiệu, gửi demo Figma để khách hàng trực tiếp trải nghiệm và góp ý duyệt mẫu.',
      deliverables: [
        'Giao diện may đo 100% theo bảng màu thương hiệu',
        'Tương thích hoàn hảo tỷ lệ PC, Tablet và Mobile',
        'Chỉnh sửa và hoàn thiện đến khi khách hàng hoàn toàn hài lòng'
      ],
      kpis: [
        { label: 'Bản quyền giao diện', value: 'Độc bản 1:1' },
        { label: 'Lần chỉnh sửa', value: 'Không giới hạn' },
        { label: 'Tương thích', value: '100% Mobile' }
      ]
    },
    {
      step: '04',
      title: 'Lập Trình & Chuẩn SEO',
      shortTitle: 'Lập Trình Tính Năng',
      timeframe: 'Ngày 03 - 05',
      icon: Code2,
      description: 'Lập trình mã nguồn sạch chuẩn W3C, tối ưu tốc độ tải trang siêu tốc <1s và cấu trúc Schema chuẩn Google SEO Onpage 100%.',
      deliverables: [
        'Mã nguồn sạch, tối ưu nén tài nguyên tải trang siêu tốc',
        'Cấu trúc thẻ Heading (H1-H6), Meta, OpenGraph, Sitemap XML',
        'Tích hợp nút gọi Zalo, Messenger, Hotline, Google Maps'
      ],
      kpis: [
        { label: 'Chuẩn SEO Onpage', value: '100% Google' },
        { label: 'Tốc độ tải', value: '< 1.0 Giây' },
        { label: 'Bảo mật SSL', value: 'Mã hóa 256-bit' }
      ]
    },
    {
      step: '05',
      title: 'Kiểm Thử Toàn Diện',
      shortTitle: 'Kiểm Thử UAT',
      timeframe: 'Ngày 05 - 06',
      icon: TestTube2,
      description: 'Chạy kiểm thử trên 10+ thiết bị thật (iPhone, Samsung, iPad, PC), rà soát bảo mật và đo điểm Google PageSpeed đạt trên 90+.',
      deliverables: [
        'Kiểm thử hiển thị Responsive đa trình duyệt (Chrome, Safari, Edge)',
        'Test quy trình đặt hàng, gửi form liên hệ và bảo mật',
        'Tối ưu chỉ số Core Web Vitals (FCP, LCP, CLS)'
      ],
      kpis: [
        { label: 'Google Speed', value: '95 - 100 Điểm' },
        { label: 'Lỗi phát hiện', value: '0 Lỗi còn tồn' },
        { label: 'Thiết bị test', value: '10+ Thiết bị' }
      ]
    },
    {
      step: '06',
      title: 'Bàn Giao & Bảo Hành',
      shortTitle: 'Bàn Giao & Bảo Trì',
      timeframe: 'Nghiệm thu chính thức',
      icon: Rocket,
      description: 'Bàn giao 100% full mã nguồn không mã hóa, hướng dẫn quản trị trực quan 1-1 và kích hoạt chế độ bảo hành kỹ thuật trọn đời.',
      deliverables: [
        'Bàn giao toàn bộ mã nguồn (Full Source Code) và tài khoản quản trị',
        'Video và cẩm nang hướng dẫn quản trị trực quan, dễ thao tác',
        'Hỗ trợ đăng ký Bộ Công Thương và bảo hành kỹ thuật trọn đời'
      ],
      kpis: [
        { label: 'Sở hữu mã nguồn', value: '100% Khách hàng' },
        { label: 'Bảo hành kỹ thuật', value: 'Trọn đời 24/7' },
        { label: 'Bộ Công Thương', value: 'Hỗ trợ trọn gói' }
      ]
    }
  ];

  return (
    <section className="space-y-12 sm:space-y-16">
      
      {/* =========================================================================
          TIÊU ĐỀ: CHUẨN THEO ẢNH MẪU (Eyebrow // Our Work Process & Headline)
          - Bỏ dòng chữ "Từng giai đoạn đều minh bạch..."
          - Bỏ cụm nút tab "Thanh tiến trình", "Dạng lưới", "Tự động chạy"
          ========================================================================= */}
      <div className="text-center max-w-3xl mx-auto space-y-2.5 px-4">
        {/* Eyebrow Tag: // Our Work Process */}
        <div className="flex items-center justify-center gap-1.5 text-xs font-bold text-slate-500 uppercase tracking-widest">
          <span className="text-[#0baba0] font-black tracking-wider text-sm">//</span>
          <span>Quy Trình Triển Khai Chuẩn Hóa</span>
        </div>

        {/* Headline */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
          Quy Trình Triển Khai <span className="text-[#0baba0]">6 Bước Tại Uni Creation</span>
        </h2>
      </div>

      {/* =========================================================================
          QUY TRÌNH KẾT NỐI NGANG THEO ĐÚNG ẢNH MẪU
          - Các nút tròn lớn màu xanh logo (#0baba0) với icon trắng
          - Huy hiệu số nhỏ (01, 02, 03,...) màu đen viền trắng đính ở góc trên bên phải
          - Đường kẻ ngang kết nối xuyên suốt các bước
          - Tiêu đề & mô tả ngắn gọn đặt ngay phía dưới
          ========================================================================= */}
      <div className="relative w-full">
        
        {/* Scroll wrapper for mobile / tablet to guarantee zero horizontal squishing */}
        <div className="overflow-x-auto pb-4 pt-2 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-none">
          <div className="min-w-[780px] lg:min-w-0 relative">
            
            {/* Connecting Horizontal Line passing through the centers of all circles */}
            <div className="absolute top-9 sm:top-10 left-[8%] right-[8%] h-0.5 bg-slate-200 pointer-events-none -z-0" />

            {/* 6 Steps Grid */}
            <div className="grid grid-cols-6 gap-3 sm:gap-4 relative z-10">
              {steps.map((st, idx) => {
                const Icon = st.icon;

                return (
                  <motion.div
                    key={st.step}
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.2 }}
                    onClick={() => setSelectedStep(st)}
                    className="flex flex-col items-center text-center group cursor-pointer"
                  >
                    
                    {/* Main Circular Step Node matching screenshot */}
                    <div className="relative mb-4 sm:mb-5">
                      
                      {/* Big Circular Icon Container (Logo Green Solid / Soft Gradient) */}
                      <div className="w-18 h-18 sm:w-20 sm:h-20 rounded-full bg-gradient-to-tr from-[#088c83] to-[#0baba0] text-white flex items-center justify-center shadow-lg shadow-[#0baba0]/25 group-hover:shadow-xl group-hover:shadow-[#0baba0]/40 group-hover:scale-105 transition-all duration-300 ring-4 ring-white">
                        <Icon className="w-8 h-8 sm:w-9 sm:h-9 text-white stroke-[1.8]" />
                      </div>

                      {/* Small Dark Step Number Badge on Top-Right Corner (Matching screenshot 01, 02, 03) */}
                      <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-slate-950 text-white text-[11px] font-mono font-bold flex items-center justify-center border-2 border-white shadow-md">
                        {st.step}
                      </span>

                    </div>

                    {/* Step Title */}
                    <h3 className="font-extrabold text-sm sm:text-base text-slate-900 group-hover:text-[#0baba0] transition-colors leading-snug px-1">
                      {st.title}
                    </h3>

                    {/* Timeframe Tag */}
                    <span className="text-[11px] font-semibold text-[#088c83] bg-[#0baba0]/10 px-2 py-0.5 rounded-full inline-block mt-1">
                      {st.timeframe}
                    </span>

                    {/* Short Description */}
                    <p className="text-xs text-slate-500 mt-2 leading-relaxed px-1 max-w-[190px] mx-auto line-clamp-3 group-hover:text-slate-700 transition-colors">
                      {st.description}
                    </p>

                    {/* Subtle Click Hint */}
                    <span className="mt-2 text-[10px] text-[#0baba0] font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                      Xem chi tiết →
                    </span>

                  </motion.div>
                );
              })}
            </div>

          </div>
        </div>

        {/* Mobile Swipe Hint */}
        <div className="lg:hidden text-center text-[11px] text-slate-400 mt-3 flex items-center justify-center gap-1.5">
          <span>← Vuốt ngang để xem trọn vẹn 6 bước →</span>
        </div>

      </div>

      {/* =========================================================================
          STEP DETAIL PREVIEW MODAL (When clicking any step)
          ========================================================================= */}
      <AnimatePresence>
        {selectedStep && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-xl bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-200 space-y-6"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedStep(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Modal Header */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#088c83] to-[#0baba0] text-white flex items-center justify-center shrink-0 shadow-md">
                  <selectedStep.icon className="w-7 h-7" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-teal-50 border border-teal-200 text-[#088c83] font-mono text-xs font-bold">
                      Bước {selectedStep.step} / 06
                    </span>
                    <span className="text-xs font-semibold text-slate-500 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#0baba0]" />
                      {selectedStep.timeframe}
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 mt-1">
                    {selectedStep.title}
                  </h3>
                </div>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed bg-slate-50 p-4 rounded-2xl border border-slate-100">
                {selectedStep.description}
              </p>

              {/* Deliverables List */}
              <div className="space-y-2.5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Hạng Mục Bàn Giao Cốt Lõi:
                </h4>
                <div className="space-y-2">
                  {selectedStep.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-[#91c544] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* KPIs Row */}
              <div className="grid grid-cols-3 gap-2.5 pt-2 border-t border-slate-100">
                {selectedStep.kpis.map((k, idx) => (
                  <div key={idx} className="p-2.5 bg-slate-50 rounded-xl text-center border border-slate-100">
                    <div className="text-[10px] text-slate-400 font-medium">{k.label}</div>
                    <div className="font-extrabold text-xs sm:text-sm text-[#088c83] mt-0.5">{k.value}</div>
                  </div>
                ))}
              </div>

              {/* Modal CTA */}
              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  onClick={() => setSelectedStep(null)}
                  className="px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold cursor-pointer"
                >
                  Đóng
                </button>
                {onConsult && (
                  <button
                    onClick={() => {
                      setSelectedStep(null);
                      onConsult();
                    }}
                    className="px-6 py-2.5 rounded-xl bg-[#0baba0] hover:bg-[#088c83] text-white text-xs font-bold shadow-md cursor-pointer flex items-center gap-1.5"
                  >
                    <span>Tư vấn giai đoạn này</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* =========================================================================
          BOTTOM GUARANTEE BANNER
          ========================================================================= */}
      <div className="bg-gradient-to-r from-teal-50/60 via-white to-emerald-50/60 rounded-3xl p-6 sm:p-8 border border-teal-200/80 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-13 h-13 rounded-2xl bg-gradient-to-br from-[#088c83] to-[#0baba0] text-white flex items-center justify-center shrink-0 shadow-md">
            <ShieldCheck className="w-7 h-7" />
          </div>
          <div>
            <h4 className="text-base sm:text-lg font-extrabold text-slate-900">
              Cam Kết 100% Đúng Tiến Độ & Hoàn Tiền Nếu Không Hài Lòng
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
              Khách hàng sở hữu 100% mã nguồn, bảo hành kỹ thuật trọn đời và hỗ trợ 24/7/365.
            </p>
          </div>
        </div>

        {onConsult && (
          <button
            onClick={onConsult}
            className="shrink-0 px-6 py-3 bg-[#0baba0] hover:bg-[#088c83] text-white rounded-2xl text-xs font-bold uppercase tracking-wider shadow-md hover:shadow-lg hover:shadow-[#0baba0]/25 transition-all cursor-pointer inline-flex items-center gap-2"
          >
            <span>Tư vấn dự án của bạn</span>
            <ArrowRight className="w-4 h-4 text-[#91c544]" />
          </button>
        )}
      </div>

    </section>
  );
};
