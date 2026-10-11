import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/siteData';
import { Phone, Send, CheckCircle2, ShieldCheck, Sparkles, Clock, Headphones } from 'lucide-react';

export const ConsultationCtaBar: React.FC = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [selectedService, setSelectedService] = useState('Thiết kế website trọn gói');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phoneNumber.trim()) return;
    setIsSubmitted(true);
    setTimeout(() => {
      // Keep message for a few seconds
    }, 5000);
  };

  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#0baba0] via-[#099a90] to-[#82ba36] text-white p-8 sm:p-12 shadow-xl border border-teal-200/40">
      
      {/* Decorative ambient background */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-black/10 rounded-full blur-2xl pointer-events-none"></div>

      <div className="relative z-10 max-w-5xl mx-auto">
        
        {/* Top Badges */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-4 text-xs font-semibold">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-white">
            <Sparkles className="w-3.5 h-3.5 text-lime-200" />
            <span>Tư Vấn Miễn Phí 100%</span>
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-white">
            <Clock className="w-3.5 h-3.5 text-lime-200" />
            <span>Phản Hồi Trong 5 Phút</span>
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-white">
            <ShieldCheck className="w-3.5 h-3.5 text-lime-200" />
            <span>Bảo Mật Thông Tin 100%</span>
          </span>
        </div>

        {/* Headline */}
        <div className="text-center space-y-2 mb-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-white">
            Đăng Ký Tư Vấn & Nhận Báo Giá Chi Tiết
          </h2>
          <p className="text-teal-50 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
            Nhập số điện thoại để chuyên viên của Uni Creation liên hệ tư vấn giải pháp tối ưu nhất và gửi tặng voucher ưu đãi 500.000đ ngay hôm nay.
          </p>
        </div>

        {/* Form Container */}
        {isSubmitted ? (
          <div className="bg-white/95 text-slate-900 rounded-2xl p-6 text-center max-w-lg mx-auto shadow-lg space-y-2 animate-fadeIn">
            <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-2">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h3 className="font-extrabold text-lg text-slate-900">
              Đăng Ký Thành Công!
            </h3>
            <p className="text-xs text-slate-600">
              Chuyên viên tư vấn của Uni Creation sẽ liên hệ với số điện thoại <span className="font-bold text-teal-700">{phoneNumber}</span> trong vòng 5 - 15 phút.
            </p>
            <button
              onClick={() => {
                setIsSubmitted(false);
                setPhoneNumber('');
              }}
              className="mt-3 text-xs font-bold text-[#0baba0] hover:underline cursor-pointer"
            >
              Gửi yêu cầu khác
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-3xl mx-auto">
            <div className="bg-white/15 backdrop-blur-md p-2 sm:p-2.5 rounded-2xl sm:rounded-full border border-white/30 shadow-2xl flex flex-col sm:flex-row items-center gap-2">
              
              {/* Service Select */}
              <div className="w-full sm:w-auto shrink-0 px-3">
                <select
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full sm:w-auto bg-white/90 text-slate-800 text-xs font-bold rounded-xl px-3 py-2.5 outline-none border-none cursor-pointer"
                >
                  <option value="Thiết kế website trọn gói">Thiết kế website trọn gói</option>
                  <option value="Dịch vụ Hosting NVMe">Dịch vụ Hosting NVMe</option>
                  <option value="Đăng ký tên miền">Đăng ký tên miền</option>
                  <option value="Email Google Workspace">Email Google Workspace</option>
                  <option value="Nhận diện thương hiệu & Logo">Nhận diện thương hiệu & Logo</option>
                  <option value="Quảng cáo Google / Facebook">Quảng cáo Google / Facebook</option>
                  <option value="Viết bài chuẩn SEO">Viết bài chuẩn SEO</option>
                </select>
              </div>

              {/* Phone Input */}
              <div className="flex-1 w-full px-3 flex items-center gap-2">
                <Phone className="w-4 h-4 text-white/80 shrink-0" />
                <input
                  type="tel"
                  required
                  placeholder="Nhập số điện thoại của bạn (VD: 0912 345 678)..."
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="w-full bg-transparent text-white placeholder-white/70 text-xs sm:text-sm font-semibold outline-none border-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full sm:w-auto px-7 py-3 bg-white text-[#088c83] hover:bg-teal-50 font-black text-xs uppercase tracking-wider rounded-xl sm:rounded-full shadow-lg hover:shadow-xl transition-all cursor-pointer whitespace-nowrap inline-flex items-center justify-center gap-2 shrink-0"
              >
                <span>ĐĂNG KÝ NGAY</span>
                <Send className="w-3.5 h-3.5" />
              </button>

            </div>
          </form>
        )}

        {/* Hotlines info below bar */}
        <div className="mt-8 pt-6 border-t border-white/20 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs">
          <div className="flex items-center gap-2">
            <Headphones className="w-4 h-4 text-lime-200" />
            <span className="text-white/80">Hotline Tư Vấn:</span>
            <a href={`tel:${COMPANY_INFO.hotline.replace(/\./g, '')}`} className="font-black text-white hover:underline">
              {COMPANY_INFO.hotline}
            </a>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-white/80">Kỹ Thuật:</span>
            <a href={`tel:${COMPANY_INFO.techHotline.replace(/\./g, '')}`} className="font-black text-white hover:underline">
              {COMPANY_INFO.techHotline}
            </a>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-white/80">CSKH:</span>
            <a href={`tel:${COMPANY_INFO.cskhHotline.replace(/\./g, '')}`} className="font-black text-white hover:underline">
              {COMPANY_INFO.cskhHotline}
            </a>
          </div>
        </div>

      </div>

    </div>
  );
};
