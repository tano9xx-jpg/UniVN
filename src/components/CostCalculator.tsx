import React, { useState } from 'react';
import { X, Check, Calculator, ArrowRight, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';

interface CostCalculatorProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectPackage?: (pkgName: string) => void;
}

export const CostCalculator: React.FC<CostCalculatorProps> = ({ isOpen, onClose, onSelectPackage }) => {
  const [selectedTier, setSelectedTier] = useState<'startup' | 'pro' | 'vip'>('pro');
  const [domainChoice, setDomainChoice] = useState<'free' | 'vn' | 'comvn'>('free');
  const [hostingYears, setHostingYears] = useState<number>(1);
  const [addonEmail, setAddonEmail] = useState(false);
  const [addonArticles, setAddonArticles] = useState(false);
  const [addonBranding, setAddonBranding] = useState(false);
  const [addonSSL, setAddonSSL] = useState(false);

  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  // Base prices
  const basePrices = {
    startup: 2500000,
    pro: 4000000,
    vip: 8000000
  };

  const domainPrices = {
    free: 0,
    vn: 650000,
    comvn: 550000
  };

  let total = basePrices[selectedTier] + domainPrices[domainChoice];

  if (hostingYears === 2) {
    total += 800000 * 0.9;
  } else if (hostingYears === 3) {
    total += 800000 * 1.6;
  }

  if (addonEmail) total += 500000;
  if (addonArticles) total += 1200000;
  if (addonBranding) total += 1500000;
  if (addonSSL) total += 300000;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientPhone.trim()) return;
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/40 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-6">
        
        {/* Header (Bright Mint Theme) */}
        <div className="bg-gradient-to-r from-teal-50 via-emerald-50 to-teal-50 text-slate-900 p-5 sm:p-6 flex items-start justify-between border-b border-teal-100">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-white border border-[#0baba0]/30 flex items-center justify-center text-[#0baba0] shadow-xs">
              <Calculator className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold tracking-tight text-slate-900">
                Dự Toán Chi Phí Website Trực Tuyến
              </h3>
              <p className="text-xs sm:text-sm text-slate-600">
                Công cụ tính giá minh bạch chuẩn xác theo bảng giá Uni Creation
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h4 className="text-xl font-bold text-slate-900">Đã Nhận Yêu Cầu Báo Giá Thành Công!</h4>
            <p className="text-slate-600 text-sm max-w-md mx-auto">
              Cảm ơn anh/chị <span className="font-semibold text-slate-900">{clientName || 'khách hàng'}</span>! Chuyên viên tư vấn kỹ thuật Uni Creation sẽ gọi tới số <span className="font-bold text-[#0baba0]">{clientPhone}</span> trong vòng 15 phút để gửi bản đề xuất chi tiết và chiết khấu tốt nhất.
            </p>
            <div className="p-4 bg-slate-50 rounded-2xl text-left text-xs text-slate-600 space-y-1.5 max-w-sm mx-auto border border-slate-200">
              <div className="flex justify-between font-medium text-slate-800">
                <span>Gói dịch vụ đã chọn:</span>
                <span>{selectedTier === 'startup' ? 'Gói Startup (2.5 Tr)' : selectedTier === 'pro' ? 'Gói Pro (4 Tr)' : 'Gói VIP May Đo'}</span>
              </div>
              <div className="flex justify-between font-bold text-[#0baba0] pt-1 border-t border-slate-200 text-sm">
                <span>Dự toán tạm tính:</span>
                <span>{total.toLocaleString('vi-VN')} đ</span>
              </div>
            </div>
            <button
              onClick={onClose}
              className="px-6 py-2.5 btn-brand-gradient text-white rounded-xl text-sm font-semibold transition-colors cursor-pointer shadow-sm"
            >
              Đóng cửa sổ
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-5 sm:p-6 space-y-6">
            
            {/* Step 1: Chọn gói */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2.5">
                1. Chọn gói thiết kế website
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedTier('startup')}
                  className={`p-3 rounded-2xl border text-left transition-all cursor-pointer ${
                    selectedTier === 'startup'
                      ? 'border-[#0baba0] bg-teal-50/50 shadow-xs ring-2 ring-[#0baba0]/20'
                      : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div className="font-bold text-sm text-slate-900">Gói Startup</div>
                  <div className="text-xs text-[#0baba0] font-bold mt-0.5">2.500.000 đ</div>
                  <div className="text-[11px] text-slate-500 mt-1">Bàn giao 1-2 ngày · .com/.net</div>
                </button>

                <button
                  type="button"
                  onClick={() => setSelectedTier('pro')}
                  className={`p-3 rounded-2xl border text-left transition-all cursor-pointer relative ${
                    selectedTier === 'pro'
                      ? 'border-[#0baba0] bg-teal-50/50 shadow-xs ring-2 ring-[#0baba0]/20'
                      : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <span className="absolute -top-2 right-2 px-1.5 py-0.5 btn-brand-gradient text-white text-[10px] font-bold rounded">Khuyên dùng</span>
                  <div className="font-bold text-sm text-slate-900">Gói Pro</div>
                  <div className="text-xs text-[#0baba0] font-bold mt-0.5">4.000.000 đ</div>
                  <div className="text-[11px] text-slate-500 mt-1">Bàn giao 3-5 ngày · Chuẩn SEO VIP</div>
                </button>

                <button
                  type="button"
                  onClick={() => setSelectedTier('vip')}
                  className={`p-3 rounded-2xl border text-left transition-all cursor-pointer ${
                    selectedTier === 'vip'
                      ? 'border-[#0baba0] bg-teal-50/50 shadow-xs ring-2 ring-[#0baba0]/20'
                      : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div className="font-bold text-sm text-slate-900">Gói VIP May Đo</div>
                  <div className="text-xs text-[#0baba0] font-bold mt-0.5">Từ 8.000.000 đ</div>
                  <div className="text-[11px] text-slate-500 mt-1">Giao diện độc quyền 1:1</div>
                </button>
              </div>
            </div>

            {/* Step 2: Tên miền & Hosting */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  2. Đuôi tên miền
                </label>
                <div className="space-y-1.5 text-xs">
                  <label className="flex items-center gap-2.5 p-2 rounded-xl border border-slate-200 hover:bg-slate-50 cursor-pointer">
                    <input
                      type="radio"
                      name="domain"
                      checked={domainChoice === 'free'}
                      onChange={() => setDomainChoice('free')}
                      className="text-[#0baba0]"
                    />
                    <span className="flex-1 text-slate-700 font-medium">.com / .net (Tặng kèm miễn phí)</span>
                    <span className="text-emerald-600 font-bold">0 đ</span>
                  </label>
                  <label className="flex items-center gap-2.5 p-2 rounded-xl border border-slate-200 hover:bg-slate-50 cursor-pointer">
                    <input
                      type="radio"
                      name="domain"
                      checked={domainChoice === 'vn'}
                      onChange={() => setDomainChoice('vn')}
                      className="text-[#0baba0]"
                    />
                    <span className="flex-1 text-slate-700 font-medium">Tên miền quốc gia .vn</span>
                    <span className="text-slate-900 font-bold">+650.000 đ</span>
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  3. Thời hạn Hosting
                </label>
                <div className="grid grid-cols-3 gap-2 text-xs">
                  <button
                    type="button"
                    onClick={() => setHostingYears(1)}
                    className={`py-2 px-1 rounded-xl border text-center cursor-pointer ${
                      hostingYears === 1 ? 'border-[#0baba0] bg-teal-50 font-bold text-[#088c83]' : 'border-slate-200 text-slate-600'
                    }`}
                  >
                    1 Năm
                    <span className="block text-[10px] text-slate-500 font-normal">Tiêu chuẩn</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setHostingYears(2)}
                    className={`py-2 px-1 rounded-xl border text-center cursor-pointer ${
                      hostingYears === 2 ? 'border-[#0baba0] bg-teal-50 font-bold text-[#088c83]' : 'border-slate-200 text-slate-600'
                    }`}
                  >
                    2 Năm
                    <span className="block text-[10px] text-emerald-600 font-normal">Giảm 10%</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setHostingYears(3)}
                    className={`py-2 px-1 rounded-xl border text-center cursor-pointer ${
                      hostingYears === 3 ? 'border-[#0baba0] bg-teal-50 font-bold text-[#088c83]' : 'border-slate-200 text-slate-600'
                    }`}
                  >
                    3 Năm
                    <span className="block text-[10px] text-amber-600 font-normal">Tặng 1 năm</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Step 3: Dịch vụ bổ sung */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                4. Dịch vụ bổ trợ (Tùy chọn)
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                <label className="flex items-center gap-2 p-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={addonEmail}
                    onChange={(e) => setAddonEmail(e.target.checked)}
                    className="rounded text-[#0baba0]"
                  />
                  <span className="flex-1 text-slate-700">Email doanh nghiệp Google</span>
                  <span className="text-slate-900 font-bold">+500.000 đ</span>
                </label>

                <label className="flex items-center gap-2 p-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={addonArticles}
                    onChange={(e) => setAddonArticles(e.target.checked)}
                    className="rounded text-[#0baba0]"
                  />
                  <span className="flex-1 text-slate-700">Viết 15 bài chuẩn SEO Onpage</span>
                  <span className="text-slate-900 font-bold">+1.200.000 đ</span>
                </label>

                <label className="flex items-center gap-2 p-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={addonBranding}
                    onChange={(e) => setAddonBranding(e.target.checked)}
                    className="rounded text-[#0baba0]"
                  />
                  <span className="flex-1 text-slate-700">Thiết kế Logo & Bộ nhận diện</span>
                  <span className="text-slate-900 font-bold">+1.500.000 đ</span>
                </label>

                <label className="flex items-center gap-2 p-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={addonSSL}
                    onChange={(e) => setAddonSSL(e.target.checked)}
                    className="rounded text-[#0baba0]"
                  />
                  <span className="flex-1 text-slate-700">Bảo mật SSL Doanh nghiệp VIP</span>
                  <span className="text-slate-900 font-bold">+300.000 đ</span>
                </label>
              </div>
            </div>

            {/* Total calculation banner (Bright Mint & Teal) */}
            <div className="bg-gradient-to-r from-teal-50 via-emerald-50 to-teal-50 border border-[#0baba0]/30 p-4 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-3 shadow-xs">
              <div>
                <div className="text-xs text-slate-600 font-medium">Tổng chi phí dự kiến (Trọn gói):</div>
                <div className="text-2xl font-black text-[#088c83] tracking-tight font-mono tabular-nums">
                  {total.toLocaleString('vi-VN')} đ
                </div>
              </div>
              <div className="text-right text-xs text-slate-500">
                <span className="text-emerald-700 flex items-center gap-1 justify-end font-medium">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#91c544]" />
                  Bảo hành trọn đời & Bàn giao 100% code
                </span>
                <span>Bàn giao từ 1 - 5 ngày làm việc</span>
              </div>
            </div>

            {/* Client quick info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div>
                <input
                  type="text"
                  placeholder="Họ và tên của bạn..."
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0baba0]"
                />
              </div>
              <div>
                <input
                  type="tel"
                  required
                  placeholder="Số điện thoại nhận báo giá (*)..."
                  value={clientPhone}
                  onChange={(e) => setClientPhone(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0baba0]"
                />
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2.5 text-xs font-medium text-slate-600 hover:text-slate-900 cursor-pointer"
              >
                Hủy bỏ
              </button>
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-6 py-2.5 btn-brand-gradient text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-md transition-colors cursor-pointer"
              >
                <span>Nhận tư vấn & Khuyến mãi ngay</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
