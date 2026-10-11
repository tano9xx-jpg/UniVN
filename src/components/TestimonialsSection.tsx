import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronLeft,
  ChevronRight,
  Star,
  Quote,
  Sparkles,
  CheckCircle2
} from 'lucide-react';

interface ReviewItem {
  id: string;
  brand: string;
  eyebrow: string;
  headline: string[];
  comment: string;
  author: string;
  role: string;
  package: string;
  results: string;
  rating: number;
}

export const TestimonialsSection: React.FC = () => {
  const reviews: ReviewItem[] = [
    {
      id: 'amazon',
      brand: 'Amazon',
      eyebrow: 'Đánh giá từ khách hàng',
      headline: ['Rất tuyệt vời!', 'Kỹ lưỡng từng chi tiết', 'và luôn đúng hẹn!'],
      comment:
        'Dịch vụ của Uni Creation vô cùng tận tâm và chuyên nghiệp. Triển khai công việc với sự chuẩn xác và kỹ lưỡng đến từng chi tiết nhỏ... Kết quả hoàn thiện vượt xa mong đợi ban đầu của chúng tôi. Đội ngũ kỹ sư tối ưu giao diện mượt mà, tốc độ tải trang cực nhanh và vận hành ổn định bền bỉ. Chúng tôi hoàn toàn tin tưởng và khuyên mọi doanh nghiệp nên đồng hành cùng Uni Creation!',
      author: 'Nguyễn Tuấn Dũng',
      role: 'Giám Đốc Phát Triển E-Commerce',
      package: 'Hạ Tầng Cloud & Web Tối Ưu',
      results: '+350% Tốc độ tải trang & Uptime 99.99%',
      rating: 5
    },
    {
      id: 'google',
      brand: 'Google',
      eyebrow: 'Đánh giá từ khách hàng',
      headline: ['Hiệu suất vượt trội!', 'Tốc độ & Chuẩn SEO', 'vượt xa tiêu chuẩn!'],
      comment:
        'Điểm số Core Web Vitals đạt chuẩn xanh tuyệt đối trên mọi thiết bị di động. Cấu trúc mã nguồn tinh gọn, schema rich snippets chuẩn Google giúp các từ khóa ngành của chúng tôi lên top tìm kiếm tự nhiên rất nhanh chóng. Một giải pháp chuyển đổi số hiệu quả và chất lượng cao.',
      author: 'Trần Quốc Tuấn',
      role: 'Giám Đốc Kỹ Thuật & Tăng Trưởng',
      package: 'Gói VIP May Đo Chuẩn SEO',
      results: 'Top 3 Google cho hơn 80+ từ khóa mục tiêu',
      rating: 5
    },
    {
      id: 'youtube',
      brand: 'YouTube',
      eyebrow: 'Đánh giá từ khách hàng',
      headline: ['Trải nghiệm mượt mà!', 'Tải video đa phương tiện', 'nhanh tức thì!'],
      comment:
        'Hệ thống trình phát nội dung đa phương tiện và tài nguyên đồ họa chất lượng cao được đội ngũ Uni Creation tối ưu nén thế hệ mới WebP/AVIF. Tốc độ hiển thị trang chỉ mất chưa đầy 0.8 giây, mang lại trải nghiệm mãn nhãn tuyệt vời cho người xem.',
      author: 'Lê Hoàng Hải',
      role: 'Trưởng Ban Nền Tảng Đa Phương Tiện',
      package: 'Gói Pro Nâng Cao & Media CDN',
      results: 'Tải trang dưới 0.8s & Giảm 70% băng thông',
      rating: 5
    },
    {
      id: 'uber',
      brand: 'Uber',
      eyebrow: 'Đánh giá từ khách hàng',
      headline: ['Giao diện thông minh!', 'Tỷ lệ khách liên hệ', 'tăng gấp đôi!'],
      comment:
        'Thiết kế tinh gọn, luồng điều hướng khách hàng thông minh và tối ưu hoàn hảo cho trải nghiệm chạm lướt trên điện thoại. Tỷ lệ giữ chân người dùng và đặt lịch tư vấn trực tuyến tăng hơn 180% chỉ sau một tháng đầu tiên vận hành phiên bản mới.',
      author: 'Vũ Minh Trí',
      role: 'Trưởng Phòng Tối Ưu Chuyển Đổi',
      package: 'Gói May Đo Doanh Nghiệp',
      results: '+180% Tỷ lệ chuyển đổi đặt hàng trên di động',
      rating: 5
    },
    {
      id: 'twitter',
      brand: 'Twitter',
      eyebrow: 'Đánh giá từ khách hàng',
      headline: ['Phản hồi tức thì!', 'Đội ngũ kỹ thuật', 'hỗ trợ tận tâm 24/7!'],
      comment:
        'Điều chúng tôi ấn tượng nhất ở Uni Creation là văn hóa hỗ trợ kỹ thuật tận tâm và phản hồi siêu tốc. Khi có bất kỳ nhu cầu cập nhật hay điều chỉnh tính năng, các bạn đều xử lý nhanh gọn chỉ trong vài giờ với cam kết bảo hành trọn đời minh bạch.',
      author: 'Phạm Thu Trang',
      role: 'Trưởng Phòng Truyền Thông Số',
      package: 'Hệ Sinh Thái Bảo Trì Trọn Đời',
      results: 'Hỗ trợ kỹ thuật 24/7/365 & Bảo hành trọn đời',
      rating: 5
    },
    {
      id: 'starbucks',
      brand: 'Starbucks',
      eyebrow: 'Đánh giá từ khách hàng',
      headline: ['Chuẩn nhận diện!', 'Sang trọng và tinh tế', 'trong từng điểm ảnh!'],
      comment:
        'Bộ nhận diện thương hiệu được Uni Creation truyền tải trọn vẹn lên website với cảm xúc ấm áp, hiện đại và cao cấp. Khách hàng khi ghé thăm website đều đánh giá tính thẩm mỹ rất cao và mang lại sự an tâm, tin cậy tuyệt đối.',
      author: 'Nguyễn Mai Hương',
      role: 'Giám Đốc Trải Nghiệm Thương Hiệu',
      package: 'Thiết Kế Nhận Diện & Web Độc Bản',
      results: 'Khách hàng đánh giá độ thẩm mỹ đạt 99.8%',
      rating: 5
    },
    {
      id: 'nbc',
      brand: 'NBC',
      eyebrow: 'Đánh giá từ khách hàng',
      headline: ['Vận hành tin cậy!', 'Lưu lượng truy cập khủng', 'uptime 99.99%!'],
      comment:
        'Dù đón nhận lượng truy cập khổng lồ cùng thời điểm, hệ thống máy chủ và website do Uni Creation tối ưu vẫn phản hồi tức thì với độ ổn định 99.99%. Hạ tầng đám mây SSD NVMe và tường lửa bảo mật mang lại sự an tâm tuyệt đối cho ban điều hành.',
      author: 'Trần Quốc Khánh',
      role: 'Tổng Điều Phối Hạ Tầng Công Nghệ',
      package: 'Hạ Tầng Server & Tường Lửa DDoS',
      results: 'Uptime 99.99% & An toàn trước các đợt cao điểm',
      rating: 5
    },
    {
      id: 'dribbble',
      brand: 'Dribbble',
      eyebrow: 'Đánh giá từ khách hàng',
      headline: ['Sáng tạo đỉnh cao!', 'Thiết kế độc bản', 'đạt chuẩn quốc tế!'],
      comment:
        'Là những người làm trong ngành thiết kế sáng tạo, chúng tôi có tiêu chuẩn rất khắt khe về bố cục, màu sắc và chuyển động animation. Uni Creation đã vượt qua kỳ vọng với bản demo hoàn hảo, trải nghiệm mượt mà và phong cách hiện đại không tì vết.',
      author: 'Đỗ Tuấn Minh',
      role: 'Giám Đốc Nghệ Thuật & Thiết Kế',
      package: 'Thiết Kế Độc Quyền Theo Yêu Cầu',
      results: 'Duyệt bản demo 100% ngay từ lần trình bày đầu tiên',
      rating: 5
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const currentReview = reviews[activeIndex];

  // Auto rotation every 6 seconds, pauses when user hovers over section
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % reviews.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isPaused, reviews.length]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % reviews.length);
  };

  return (
    <div
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="w-full relative select-none"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        {/* =========================================================================
            LEFT COLUMN: TESTIMONIAL QUOTES & FEEDBACK DETAILS
            ========================================================================= */}
        <div className="lg:col-span-6 flex flex-col justify-center space-y-6 sm:space-y-8">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={currentReview.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="space-y-4 sm:space-y-6"
            >
              {/* Eyebrow badge matching the screenshot ("Customers review" in logo green) */}
              <div className="flex items-center gap-2">
                <span className="text-[#0baba0] font-bold text-sm sm:text-base tracking-wide uppercase">
                  {currentReview.eyebrow}
                </span>
                <div className="flex items-center gap-0.5 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
              </div>

              {/* Big bold headline matching the screenshot ("So great! Very thorough and on time!") */}
              <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-black text-slate-900 leading-[1.14] tracking-tight font-sans">
                {currentReview.headline.map((line, idx) => (
                  <span key={idx} className="block">
                    {line}
                  </span>
                ))}
              </h2>

              {/* Main review comment matching the screenshot description */}
              <p className="text-slate-500 text-sm sm:text-base leading-relaxed max-w-lg">
                {currentReview.comment}
              </p>

              {/* Author and Result callout */}
              <div className="pt-2 flex items-center gap-3 text-xs text-slate-600">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#0baba0] to-[#91c544] text-white font-bold flex items-center justify-center text-xs shadow-xs">
                  {currentReview.author.slice(0, 2).toUpperCase()}
                </div>
                <div>
                  <div className="font-bold text-slate-900 text-xs sm:text-sm">
                    {currentReview.author}
                  </div>
                  <div className="text-[11px] text-slate-500">
                    {currentReview.role} · <span className="text-[#088c83] font-semibold">{currentReview.package}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* =========================================================================
              BOTTOM CONTROLS: PAGINATION DOTS & BRAND NAME
              (Matching screenshot dots • • • • — Amazon)
              ========================================================================= */}
          <div className="pt-2 sm:pt-4 flex items-center gap-4 flex-wrap">
            {/* Pagination Dots */}
            <div className="flex items-center gap-2">
              {reviews.map((rev, idx) => {
                const isActive = idx === activeIndex;
                return (
                  <button
                    key={rev.id}
                    onClick={() => setActiveIndex(idx)}
                    className={`transition-all duration-300 rounded-full cursor-pointer ${
                      isActive
                        ? 'w-6 h-2 bg-[#0baba0]'
                        : 'w-2 h-2 bg-slate-300 hover:bg-slate-400'
                    }`}
                    aria-label={`Xem đánh giá từ ${rev.brand}`}
                  />
                );
              })}
            </div>

            {/* Dash separator matching screenshot */}
            <span className="text-slate-300 font-light select-none">—</span>

            {/* Active brand name matching screenshot */}
            <span className="font-extrabold text-sm sm:text-base text-slate-900 font-sans tracking-tight">
              {currentReview.brand}
            </span>

            {/* Next / Prev Arrow Navigation Buttons */}
            <div className="ml-auto flex items-center gap-1.5">
              <button
                onClick={handlePrev}
                className="w-8 h-8 rounded-full border border-slate-200 bg-white hover:border-[#0baba0] hover:text-[#0baba0] flex items-center justify-center text-slate-600 transition-colors cursor-pointer shadow-2xs"
                title="Đánh giá trước"
                aria-label="Đánh giá trước"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                className="w-8 h-8 rounded-full border border-slate-200 bg-white hover:border-[#0baba0] hover:text-[#0baba0] flex items-center justify-center text-slate-600 transition-colors cursor-pointer shadow-2xs"
                title="Đánh giá tiếp theo"
                aria-label="Đánh giá tiếp theo"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

        {/* =========================================================================
            RIGHT COLUMN: FLOATING SQUIRCLE BRAND LOGO CARDS
            (Exact matching layout from user screenshot)
            ========================================================================= */}
        <div className="lg:col-span-6 flex items-center justify-center py-4 sm:py-6">
          <div className="relative w-full max-w-[480px] sm:max-w-[540px] aspect-[1.15/1] flex items-center justify-center">
            
            {/* Ambient soft glow behind cards */}
            <div className="absolute inset-0 bg-gradient-to-tr from-teal-50/40 via-emerald-50/20 to-transparent rounded-full blur-3xl -z-10 pointer-events-none" />

            {/* Grid container replicating the exact positions in screenshot */}
            <div className="grid grid-cols-12 grid-rows-12 gap-3 sm:gap-4 w-full h-full p-2">
              
              {/* -------------------------------------------------------------
                  1. LARGE AMAZON CARD (Top-left, spans 6 cols x 6 rows)
                  ------------------------------------------------------------- */}
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setActiveIndex(reviews.findIndex((r) => r.id === 'amazon'))}
                className={`col-start-1 col-span-6 row-start-1 row-span-6 bg-white rounded-[28px] sm:rounded-[36px] p-5 sm:p-7 flex flex-col items-center justify-center cursor-pointer transition-all duration-300 border ${
                  activeIndex === reviews.findIndex((r) => r.id === 'amazon')
                    ? 'border-[#0baba0] ring-4 ring-[#0baba0]/15 shadow-2xl shadow-[#0baba0]/15'
                    : 'border-slate-100/90 shadow-[0_12px_36px_rgba(0,0,0,0.06)] hover:shadow-xl hover:border-slate-200'
                }`}
              >
                <div className="flex flex-col items-center select-none">
                  <span className="font-black text-2xl sm:text-3xl lg:text-4xl tracking-tighter text-slate-900 font-sans">
                    amazon
                  </span>
                  {/* Amazon curve smile arrow */}
                  <svg
                    className="w-20 sm:w-24 h-4 sm:h-5 text-[#ff9900] -mt-1 sm:-mt-1.5"
                    viewBox="0 0 100 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3.8"
                    strokeLinecap="round"
                  >
                    <path d="M 6 8 Q 50 25 94 8" />
                    <path d="M 86 5 L 96 8 L 90 18" fill="currentColor" stroke="none" />
                  </svg>
                </div>
              </motion.div>

              {/* -------------------------------------------------------------
                  2. NBC CARD (Top middle, col 7..9, row 1..3)
                  ------------------------------------------------------------- */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => setActiveIndex(reviews.findIndex((r) => r.id === 'nbc'))}
                className={`col-start-7 col-span-3 row-start-1 row-span-3 bg-white rounded-[22px] sm:rounded-[28px] p-2.5 sm:p-3 flex flex-col items-center justify-center cursor-pointer transition-all duration-300 border ${
                  activeIndex === reviews.findIndex((r) => r.id === 'nbc')
                    ? 'border-[#0baba0] ring-4 ring-[#0baba0]/15 shadow-xl shadow-[#0baba0]/15'
                    : 'border-slate-100/90 shadow-[0_10px_28px_rgba(0,0,0,0.05)] hover:shadow-lg hover:border-slate-200'
                }`}
              >
                <div className="flex flex-col items-center select-none scale-85 sm:scale-100">
                  <svg className="w-9 h-7" viewBox="0 0 100 80">
                    <ellipse cx="25" cy="50" rx="9" ry="22" transform="rotate(-50 25 50)" fill="#f6b800" />
                    <ellipse cx="36" cy="38" rx="9" ry="24" transform="rotate(-25 36 38)" fill="#e35205" />
                    <ellipse cx="50" cy="34" rx="9" ry="25" transform="rotate(0 50 34)" fill="#d50032" />
                    <ellipse cx="64" cy="38" rx="9" ry="24" transform="rotate(25 64 38)" fill="#782386" />
                    <ellipse cx="75" cy="50" rx="9" ry="22" transform="rotate(50 75 50)" fill="#0066b2" />
                    <ellipse cx="80" cy="65" rx="9" ry="18" transform="rotate(75 80 65)" fill="#009933" />
                  </svg>
                  <span className="text-[10px] sm:text-[11px] font-black tracking-widest text-slate-900 mt-0.5">
                    NBC
                  </span>
                </div>
              </motion.div>

              {/* -------------------------------------------------------------
                  3. GOOGLE CARD (Middle col 7..9, row 4..6)
                  ------------------------------------------------------------- */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => setActiveIndex(reviews.findIndex((r) => r.id === 'google'))}
                className={`col-start-7 col-span-3 row-start-4 row-span-3 bg-white rounded-[22px] sm:rounded-[28px] p-2.5 sm:p-3 flex items-center justify-center cursor-pointer transition-all duration-300 border ${
                  activeIndex === reviews.findIndex((r) => r.id === 'google')
                    ? 'border-[#0baba0] ring-4 ring-[#0baba0]/15 shadow-xl shadow-[#0baba0]/15'
                    : 'border-slate-100/90 shadow-[0_10px_28px_rgba(0,0,0,0.05)] hover:shadow-lg hover:border-slate-200'
                }`}
              >
                <div className="flex items-center text-sm sm:text-base lg:text-lg font-bold font-sans tracking-tight select-none">
                  <span className="text-[#4285F4]">G</span>
                  <span className="text-[#EA4335]">o</span>
                  <span className="text-[#FBBC05]">o</span>
                  <span className="text-[#4285F4]">g</span>
                  <span className="text-[#34A853]">l</span>
                  <span className="text-[#EA4335]">e</span>
                </div>
              </motion.div>

              {/* -------------------------------------------------------------
                  4. YOUTUBE CARD (Right col 10..12, row 4..6)
                  ------------------------------------------------------------- */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => setActiveIndex(reviews.findIndex((r) => r.id === 'youtube'))}
                className={`col-start-10 col-span-3 row-start-4 row-span-3 bg-white rounded-[22px] sm:rounded-[28px] p-2.5 sm:p-3 flex items-center justify-center cursor-pointer transition-all duration-300 border ${
                  activeIndex === reviews.findIndex((r) => r.id === 'youtube')
                    ? 'border-[#0baba0] ring-4 ring-[#0baba0]/15 shadow-xl shadow-[#0baba0]/15'
                    : 'border-slate-100/90 shadow-[0_10px_28px_rgba(0,0,0,0.05)] hover:shadow-lg hover:border-slate-200'
                }`}
              >
                <div className="flex items-center gap-1 sm:gap-1.5 select-none scale-85 sm:scale-100">
                  <div className="w-7 sm:w-8 h-5 sm:h-5.5 bg-[#FF0000] rounded-lg flex items-center justify-center shadow-2xs">
                    <div className="w-0 h-0 border-y-[3.5px] border-y-transparent border-l-[7px] border-l-white ml-0.5" />
                  </div>
                  <span className="font-extrabold text-[11px] sm:text-xs tracking-tight text-slate-900 font-sans hidden sm:inline">
                    YouTube
                  </span>
                </div>
              </motion.div>

              {/* -------------------------------------------------------------
                  5. UBER CARD (Lower left, col 4..6, row 7..9)
                  ------------------------------------------------------------- */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => setActiveIndex(reviews.findIndex((r) => r.id === 'uber'))}
                className={`col-start-4 col-span-3 row-start-7 row-span-3 bg-white rounded-[22px] sm:rounded-[28px] p-2.5 sm:p-3 flex items-center justify-center cursor-pointer transition-all duration-300 border ${
                  activeIndex === reviews.findIndex((r) => r.id === 'uber')
                    ? 'border-[#0baba0] ring-4 ring-[#0baba0]/15 shadow-xl shadow-[#0baba0]/15'
                    : 'border-slate-100/90 shadow-[0_10px_28px_rgba(0,0,0,0.05)] hover:shadow-lg hover:border-slate-200'
                }`}
              >
                <span className="font-extrabold text-base sm:text-lg lg:text-xl tracking-tight text-slate-900 font-sans select-none">
                  Uber
                </span>
              </motion.div>

              {/* -------------------------------------------------------------
                  6. TWITTER CARD (Lower middle, col 7..9, row 7..9)
                  ------------------------------------------------------------- */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => setActiveIndex(reviews.findIndex((r) => r.id === 'twitter'))}
                className={`col-start-7 col-span-3 row-start-7 row-span-3 bg-white rounded-[22px] sm:rounded-[28px] p-2.5 sm:p-3 flex items-center justify-center cursor-pointer transition-all duration-300 border ${
                  activeIndex === reviews.findIndex((r) => r.id === 'twitter')
                    ? 'border-[#0baba0] ring-4 ring-[#0baba0]/15 shadow-xl shadow-[#0baba0]/15'
                    : 'border-slate-100/90 shadow-[0_10px_28px_rgba(0,0,0,0.05)] hover:shadow-lg hover:border-slate-200'
                }`}
              >
                <svg className="w-6 sm:w-8 h-6 sm:h-8 text-[#1DA1F2] fill-current select-none" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.936 9.936 0 0024 4.59z"/>
                </svg>
              </motion.div>

              {/* -------------------------------------------------------------
                  7. STARBUCKS CARD (Lower right, col 10..12, row 7..9)
                  ------------------------------------------------------------- */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => setActiveIndex(reviews.findIndex((r) => r.id === 'starbucks'))}
                className={`col-start-10 col-span-3 row-start-7 row-span-3 bg-white rounded-[22px] sm:rounded-[28px] p-2.5 sm:p-3 flex items-center justify-center cursor-pointer transition-all duration-300 border ${
                  activeIndex === reviews.findIndex((r) => r.id === 'starbucks')
                    ? 'border-[#0baba0] ring-4 ring-[#0baba0]/15 shadow-xl shadow-[#0baba0]/15'
                    : 'border-slate-100/90 shadow-[0_10px_28px_rgba(0,0,0,0.05)] hover:shadow-lg hover:border-slate-200'
                }`}
              >
                <div className="w-8 sm:w-10 h-8 sm:h-10 rounded-full bg-[#006241] flex items-center justify-center p-1 sm:p-1.5 shadow-2xs select-none">
                  <svg className="w-full h-full text-white fill-current" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="1.6" />
                    <path d="M12 7l1 2.5h2.5l-2 1.5 1 2.5-2.5-1.5-2.5 1.5 1-2.5-2-1.5H11z" />
                  </svg>
                </div>
              </motion.div>

              {/* -------------------------------------------------------------
                  8. DRIBBBLE CARD (Bottom middle, col 7..9, row 10..12)
                  ------------------------------------------------------------- */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => setActiveIndex(reviews.findIndex((r) => r.id === 'dribbble'))}
                className={`col-start-7 col-span-3 row-start-10 row-span-3 bg-white rounded-[22px] sm:rounded-[28px] p-2.5 sm:p-3 flex items-center justify-center cursor-pointer transition-all duration-300 border ${
                  activeIndex === reviews.findIndex((r) => r.id === 'dribbble')
                    ? 'border-[#0baba0] ring-4 ring-[#0baba0]/15 shadow-xl shadow-[#0baba0]/15'
                    : 'border-slate-100/90 shadow-[0_10px_28px_rgba(0,0,0,0.05)] hover:shadow-lg hover:border-slate-200'
                }`}
              >
                <div className="w-8 sm:w-10 h-8 sm:h-10 rounded-full bg-[#EA4C89] flex items-center justify-center p-1.5 sm:p-2 shadow-2xs select-none">
                  <svg className="w-full h-full text-white fill-none stroke-currentColor stroke-width-2" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
                    <path d="M19.1 8.5C16.8 9.3 13.5 9.7 9.8 9.7M4.9 15.5c3.2-.8 6.7-1.1 10.3-.8M12 2c1.8 3.5 2.8 7.5 2.8 11.8 0 2.8-.4 5.5-1.2 8M7 4.2c2.4 3 5.4 7.2 7.4 12" />
                  </svg>
                </div>
              </motion.div>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
