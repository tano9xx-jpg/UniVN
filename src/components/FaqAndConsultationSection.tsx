import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  HelpCircle,
  ChevronDown,
  Send,
  CheckCircle2,
  Phone,
  Mail,
  User,
  MessageSquare,
  ShieldCheck,
  Sparkles,
  Clock,
  Code2,
  FileCheck
} from 'lucide-react';
import { COMPANY_INFO } from '../data/siteData';

interface FaqItem {
  id: number;
  tag: string;
  question: string;
  answer: string;
}

export const FaqAndConsultationSection: React.FC = () => {
  // Accordion open item state (first one open by default)
  const [openFaq, setOpenFaq] = useState<number | null>(1);

  // Form states
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Thiết kế website doanh nghiệp trọn gói',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const faqs: FaqItem[] = [
    {
      id: 1,
      tag: 'Chi Phí',
      question: 'Chi phí thiết kế website trọn gói tại Uni Creation đã bao gồm những gì? Có phát sinh không?',
      answer: 'Chi phí báo giá tại Uni Creation là trọn gói 100%, cam kết không phát sinh bất kỳ khoản phí ẩn nào. Gói dịch vụ đã bao gồm: Đăng ký tên miền quốc tế (.com/.net), Hosting lưu trữ SSD NVMe tốc độ cao 1 năm, chứng chỉ bảo mật SSL chính hãng, thiết kế giao diện theo yêu cầu chuẩn Mobile & chuẩn SEO Google, nhập liệu ban đầu và bảo hành kỹ thuật trọn đời.'
    },
    {
      id: 2,
      tag: 'Thời Gian',
      question: 'Thời gian hoàn thiện và bàn giao website là bao lâu?',
      answer: 'Tùy theo quy mô dự án: Đối với các mẫu giao diện có sẵn và tùy biến thương hiệu, thời gian bàn giao thông thường từ 3 – 5 ngày làm việc. Đối với các dự án thiết kế độc bản theo yêu cầu nghiệp vụ riêng (Gói Pro & VIP), thời gian triển khai từ 7 – 15 ngày, bao gồm các bước duyệt bản vẽ Figma, lập trình tính năng và kiểm thử nghiêm ngặt trước khi bàn giao.'
    },
    {
      id: 3,
      tag: 'Mã Nguồn',
      question: 'Tôi có được bàn giao 100% mã nguồn (Source Code) và toàn quyền quản trị không?',
      answer: 'Có. Sau khi nghiệm thu và bàn giao, khách hàng sở hữu 100% mã nguồn sạch, cơ sở dữ liệu và toàn quyền quản trị cao nhất (Super Admin). Uni Creation cung cấp đầy đủ tài khoản Hosting, cPanel/DirectAdmin, tài khoản quản trị CMS. Bạn có toàn quyền chuyển đổi máy chủ hoặc nâng cấp sau này mà không bị ràng buộc bất kỳ điều kiện nào.'
    },
    {
      id: 4,
      tag: 'Chuẩn SEO',
      question: 'Website có đảm bảo chuẩn SEO Google và tải nhanh trên điện thoại không?',
      answer: 'Tất cả website tại Uni Creation đều được lập trình theo công nghệ Responsive Mobile First tương thích hoàn hảo từ điện thoại, máy tính bảng đến màn hình 4K. Về SEO, website được tối ưu cấu trúc thẻ Heading, Meta, Sitemap XML tự động, Schema.org Rich Snippets và cam kết đạt điểm tốc độ cao trên Google PageSpeed Insights.'
    },
    {
      id: 5,
      tag: 'Bảo Hành',
      question: 'Chính sách bảo hành và hỗ trợ kỹ thuật sau khi bàn giao như thế nào?',
      answer: 'Uni Creation áp dụng chính sách bảo hành kỹ thuật trọn đời (khi khách hàng duy trì hosting tại Uni Creation) và tối thiểu 12 tháng đối với mọi trường hợp. Đội ngũ kỹ thuật trực hỗ trợ 24/7/365 qua Hotline, Zalo và Email, cam kết tiếp nhận và xử lý sự cố trong vòng 15 – 30 phút.'
    },
    {
      id: 6,
      tag: 'Quản Trị',
      question: 'Nếu tôi chưa có kinh nghiệm quản trị web thì có tự cập nhật bài viết, sản phẩm được không?',
      answer: 'Hoàn toàn được. Hệ thống quản trị tại Uni Creation được tùy biến bằng tiếng Việt 100%, trực quan và cực kỳ dễ sử dụng. Khi bàn giao, đội ngũ kỹ thuật sẽ có buổi hướng dẫn 1-1 trực tiếp hoặc qua UltraViewer/Google Meet, kèm tài liệu và video hướng dẫn từng bước chi tiết giúp nhân viên của bạn làm chủ website chỉ sau 30 phút.'
    }
  ];

  const handleToggleFaq = (id: number) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      setErrorMessage('Vui lòng nhập họ và tên của bạn');
      return;
    }
    if (!formData.phone.trim() || formData.phone.length < 9) {
      setErrorMessage('Vui lòng nhập số điện thoại hợp lệ để chúng tôi liên hệ tư vấn');
      return;
    }

    setErrorMessage('');
    setIsSubmitting(true);

    // Simulate instant submit & verification
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({
        name: '',
        phone: '',
        email: '',
        service: 'Thiết kế website doanh nghiệp trọn gói',
        message: ''
      });
    }, 600);
  };

  return (
    <div className="w-full space-y-10 sm:space-y-12">
      
      {/* =========================================================================
          SECTION HEADER: CLEAN, REFINED & BALANCED
          ========================================================================= */}
      <div className="flex flex-col items-center text-center max-w-2xl mx-auto space-y-2.5 px-4">
        
        {/* Top Badge matching CoreServicesGrid style */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#0baba0]/10 border border-[#0baba0]/30 rounded-full text-xs font-semibold text-[#088c83]">
          <Sparkles className="w-3.5 h-3.5 text-[#91c544]" />
          <span>Giải Đáp Thắc Mắc & Tư Vấn Trực Tiếp 24/7</span>
        </div>

        {/* Main H2 Heading */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
          Giải Đáp Thắc Mắc & <span className="text-[#0baba0]">Đăng Ký Tư Vấn Nhanh</span>
        </h2>

        {/* Subtitle */}
        <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto">
          Tất cả những gì bạn cần biết trước khi khởi tạo website cùng Uni Creation. Đội ngũ chuyên gia luôn sẵn sàng giải đáp và hỗ trợ bạn 24/7.
        </p>

        {/* 3 Trust Key Badges in Header */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-4 pt-1">
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200/80 text-[11px] font-medium text-slate-700 shadow-2xs">
            <Clock className="w-3.5 h-3.5 text-[#0baba0]" />
            <span>Phản hồi trong <strong>15 - 30 phút</strong></span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200/80 text-[11px] font-medium text-slate-700 shadow-2xs">
            <Code2 className="w-3.5 h-3.5 text-[#91c544]" />
            <span>Sở hữu <strong>100% mã nguồn</strong></span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200/80 text-[11px] font-medium text-slate-700 shadow-2xs">
            <FileCheck className="w-3.5 h-3.5 text-[#0baba0]" />
            <span>Khảo sát & Báo giá <strong>0 đồng</strong></span>
          </div>
        </div>
      </div>

      {/* =========================================================================
          TWO-COLUMN LAYOUT: FAQs (Left) + High-End Consultation Card (Right)
          ========================================================================= */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
        
        {/* ========================================================
            LEFT COLUMN: FAQs ACCORDION (7 Cols)
            ======================================================== */}
        <div className="lg:col-span-7 space-y-3">
          <div className="flex items-center justify-between pb-2 border-b border-slate-200/80 mb-1">
            <h3 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
              <HelpCircle className="w-4 h-4 text-[#0baba0]" />
              <span>Câu Hỏi Thường Gặp (FAQs)</span>
            </h3>
            <span className="text-[11px] text-[#088c83] font-bold bg-teal-50 border border-teal-200/70 px-2.5 py-0.5 rounded-full">
              6 giải đáp chi tiết
            </span>
          </div>

          <div className="space-y-2.5">
            {faqs.map((faq) => {
              const isOpen = openFaq === faq.id;

              return (
                <div
                  key={faq.id}
                  className={`rounded-2xl transition-all duration-200 overflow-hidden border bg-white ${
                    isOpen
                      ? 'border-[#0baba0] shadow-md shadow-[#0baba0]/5'
                      : 'border-slate-200/80 hover:border-slate-300'
                  }`}
                >
                  {/* Accordion Question Header */}
                  <button
                    type="button"
                    onClick={() => handleToggleFaq(faq.id)}
                    className="w-full p-4 sm:p-4.5 flex items-start justify-between gap-3 text-left cursor-pointer transition-colors"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-start gap-2.5 sm:gap-3">
                      <span
                        className={`text-[11px] font-bold px-2 py-0.5 rounded-md mt-0.5 shrink-0 transition-colors ${
                          isOpen
                            ? 'bg-[#0baba0] text-white shadow-2xs'
                            : 'bg-teal-50 text-[#088c83] border border-teal-100'
                        }`}
                      >
                        {faq.tag}
                      </span>
                      <span
                        className={`text-xs sm:text-sm font-bold leading-snug transition-colors ${
                          isOpen ? 'text-[#088c83]' : 'text-slate-800 hover:text-[#0baba0]'
                        }`}
                      >
                        {faq.question}
                      </span>
                    </div>

                    <div
                      className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full shrink-0 flex items-center justify-center transition-all duration-200 mt-0.5 ${
                        isOpen
                          ? 'bg-[#0baba0] text-white rotate-180 shadow-xs'
                          : 'bg-slate-100 text-slate-400 group-hover:text-slate-700'
                      }`}
                    >
                      <ChevronDown className="w-3.5 h-3.5" />
                    </div>
                  </button>

                  {/* Accordion Answer Content */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2, ease: 'easeInOut' }}
                      >
                        <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

        {/* ========================================================
            RIGHT COLUMN: REFINED CONSULTATION CARD (5 Cols)
            ======================================================== */}
        <div className="lg:col-span-5">
          <div className="bg-white rounded-3xl border border-slate-200/90 p-5 sm:p-7 shadow-xl shadow-slate-900/5 relative overflow-hidden">
            
            {/* Top decorative gradient accent line */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#0baba0] via-[#2dd4bf] to-[#91c544]" />

            <div className="mb-5">
              <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#088c83] bg-teal-50 border border-teal-200/80 px-2.5 py-0.5 rounded-full mb-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0baba0] animate-pulse" />
                <span>Tiếp nhận & xử lý tức thì</span>
              </span>
              <h3 className="text-lg sm:text-xl font-black text-slate-900">
                Để Lại Thông Tin Dự Án
              </h3>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                Chuyên viên tư vấn sẽ liên hệ trực tiếp, gửi bản vẽ demo và dự toán chi phí chi tiết cho bạn.
              </p>
            </div>

            {/* Error Message */}
            {errorMessage && (
              <div className="mb-3.5 p-3 bg-red-50 border border-red-200 rounded-xl text-xs text-red-600 font-medium">
                {errorMessage}
              </div>
            )}

            {/* Success State */}
            {isSuccess ? (
              <div className="p-6 bg-teal-50 border border-teal-200 rounded-2xl text-center space-y-3 my-2">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-[#0baba0] to-[#91c544] text-white flex items-center justify-center mx-auto shadow-xs">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold text-slate-900">
                  Gửi Yêu Cầu Thành Công!
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Cảm ơn bạn đã tin tưởng Uni Creation. Chuyên viên kỹ thuật sẽ gọi lại cho bạn qua số điện thoại đã cung cấp trong vòng <strong>15 – 30 phút</strong>.
                </p>
                <button
                  type="button"
                  onClick={() => setIsSuccess(false)}
                  className="mt-2 text-xs font-bold text-[#088c83] hover:underline cursor-pointer"
                >
                  Gửi yêu cầu cho dự án khác →
                </button>
              </div>
            ) : (
              /* Contact Form */
              <form onSubmit={handleSubmit} className="space-y-3.5">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Họ và tên của bạn <span className="text-[#0baba0]">*</span>
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      placeholder="Ví dụ: Nguyễn Văn An"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm bg-slate-50/70 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:border-[#0baba0] focus:ring-2 focus:ring-[#0baba0]/15 transition-all text-slate-800 placeholder-slate-400"
                    />
                  </div>
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Số điện thoại / Zalo <span className="text-[#0baba0]">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="tel"
                      required
                      placeholder="Ví dụ: 0967 508 333"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm bg-slate-50/70 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:border-[#0baba0] focus:ring-2 focus:ring-[#0baba0]/15 transition-all text-slate-800 placeholder-slate-400"
                    />
                  </div>
                </div>

                {/* Email Address */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Địa chỉ Email (Tùy chọn)
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      placeholder="email@doanhnghiep.vn"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm bg-slate-50/70 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:border-[#0baba0] focus:ring-2 focus:ring-[#0baba0]/15 transition-all text-slate-800 placeholder-slate-400"
                    />
                  </div>
                </div>

                {/* Service Choice */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Dịch vụ bạn quan tâm
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-3 py-2 text-xs sm:text-sm bg-slate-50/70 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:border-[#0baba0] focus:ring-2 focus:ring-[#0baba0]/15 transition-all text-slate-800 cursor-pointer"
                  >
                    <option value="Thiết kế website doanh nghiệp trọn gói">Thiết kế website doanh nghiệp trọn gói</option>
                    <option value="Thiết kế website bán hàng / E-Commerce">Thiết kế website bán hàng / E-Commerce</option>
                    <option value="Thiết kế website bất động sản">Thiết kế website bất động sản</option>
                    <option value="Thiết kế website xuất khẩu & đa ngôn ngữ">Thiết kế website xuất khẩu & đa ngôn ngữ</option>
                    <option value="Nâng cấp & tối ưu tốc độ website cũ">Nâng cấp & tối ưu tốc độ website cũ</option>
                    <option value="Đăng ký Hosting NVMe / Thuê VPS Cloud">Đăng ký Hosting NVMe / Thuê VPS Cloud</option>
                    <option value="Tư vấn giải pháp khác">Tư vấn giải pháp khác</option>
                  </select>
                </div>

                {/* Note / Message */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Ghi chú yêu cầu dự án (Tùy chọn)
                  </label>
                  <div className="relative">
                    <MessageSquare className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                    <textarea
                      rows={2}
                      placeholder="Mô tả ngành nghề, tính năng mong muốn hoặc ngân sách dự kiến..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm bg-slate-50/70 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:border-[#0baba0] focus:ring-2 focus:ring-[#0baba0]/15 transition-all text-slate-800 placeholder-slate-400 resize-none"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-2.5 sm:py-3 px-6 btn-brand-gradient hover:opacity-95 text-white font-bold text-xs sm:text-sm rounded-full shadow-md hover:shadow-lg flex items-center justify-center gap-2 transition-all cursor-pointer active:scale-98 disabled:opacity-70 mt-1"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Đang tiếp nhận...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>GỬI YÊU CẦU TƯ VẤN MIỄN PHÍ</span>
                    </>
                  )}
                </button>

                {/* Trust Guarantees */}
                <div className="pt-1 flex items-center justify-center gap-3 text-[11px] text-slate-500 font-medium">
                  <div className="flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#0baba0]" />
                    <span>Bảo mật 100%</span>
                  </div>
                  <span>·</span>
                  <div className="flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#91c544]" />
                    <span>Báo giá chi tiết 0đ</span>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};
