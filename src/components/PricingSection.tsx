import React from 'react';
import {
  Check,
  Sparkles,
  Zap,
  ArrowRight,
  ShieldCheck,
  Calculator
} from 'lucide-react';
import { WEB_PACKAGES, WebPackage } from '../data/siteData';

interface PricingSectionProps {
  onSelectPackage: (pkg: WebPackage) => void;
  onOpenCalculator: () => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({
  onSelectPackage,
  onOpenCalculator
}) => {
  const startupPkg = WEB_PACKAGES.find((p) => p.name.includes('Startup')) || WEB_PACKAGES[0];
  const proPkg =
    WEB_PACKAGES.find((p) => p.name.includes('Doanh nghiệp') || p.priceNum === 4500000) ||
    WEB_PACKAGES[1];
  const customPkg =
    WEB_PACKAGES.find((p) => p.name.includes('Chuyên nghiệp') || p.name.includes('Custom')) ||
    WEB_PACKAGES[2];

  const packagesData = [
    {
      pkg: startupPkg,
      badge: null,
      icon: Zap,
      name: 'Startup',
      subtitle: 'Khởi đầu nhanh chóng cho cá nhân, cửa hàng và startup mới thành lập.',
      price: '2.500.000 đ',
      period: '/ trọn gói',
      features: [
        'Tặng tên miền quốc tế (.com / .net) 1 năm',
        'Tặng Hosting SSD Cloud 1.000 MB tốc độ cao',
        'Miễn phí chứng chỉ bảo mật SSL trọn đời',
        'Kho giao diện mẫu đa dạng tối ưu',
        'Chuẩn SEO Google Onpage 100%',
        'Bàn giao 100% mã nguồn (Full Source Code)',
        'Bảo hành kỹ thuật trọn đời 24/7'
      ],
      popular: false,
      btnText: 'Chọn Gói Startup',
      btnStyle: 'bg-slate-100 hover:bg-slate-200 text-slate-800'
    },
    {
      pkg: proPkg,
      badge: 'Phổ biến nhất',
      icon: Sparkles,
      name: 'Doanh Nghiệp',
      subtitle: 'Giải pháp toàn diện tối ưu nhận diện thương hiệu và tăng trưởng doanh thu.',
      price: '4.500.000 đ',
      period: '/ trọn gói',
      features: [
        'Tặng tên miền quốc tế (.com / .net) 1 năm',
        'Tặng Hosting SSD NVMe 2.000 MB siêu tốc',
        'Thiết kế tùy biến theo nhận diện thương hiệu',
        'Chuẩn SEO Google chuyên sâu + GA4',
        'Thiết kế 2 - 3 Banner chuyên nghiệp',
        'Bàn giao 100% mã nguồn (Full Source Code)',
        'Bảo hành kỹ thuật trọn đời 24/7'
      ],
      popular: true,
      btnText: 'Đăng Ký Gói Doanh Nghiệp',
      btnStyle: 'btn-brand-gradient text-white shadow-lg shadow-[#0baba0]/30 hover:shadow-xl'
    },
    {
      pkg: customPkg,
      badge: 'May đo 1:1',
      icon: ShieldCheck,
      name: 'Chuyên Nghiệp',
      subtitle: 'Thiết kế UI/UX độc quyền và lập trình tính năng riêng biệt theo yêu cầu.',
      price: 'Báo giá',
      period: '/ may đo riêng',
      features: [
        'Thiết kế UI/UX độc quyền Figma 100%',
        'Tặng tên miền VIP (.com / .net / .vn)',
        'Hosting SSD Enterprise 5GB - 10GB',
        'Lập trình module & chức năng riêng biệt',
        'Tích hợp đa ngôn ngữ & cổng thanh toán',
        'Bàn giao 100% mã nguồn & quyền sở hữu',
        'Kỹ sư chuyên trách hỗ trợ 1-1 trọn đời'
      ],
      popular: false,
      btnText: 'Tư Vấn May Đo',
      btnStyle: 'bg-slate-900 hover:bg-slate-800 text-white'
    }
  ];

  return (
    <section id="pricing-packages-section" className="space-y-8 sm:space-y-10 py-2">
      
      {/* Clean Minimalist Header */}
      <div className="text-center max-w-2xl mx-auto space-y-2.5 px-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#0baba0]/10 border border-[#0baba0]/25 rounded-full text-xs font-semibold text-[#088c83]">
          <Sparkles className="w-3.5 h-3.5 text-[#91c544]" />
          <span>Chi Phí Minh Bạch – Sở Hữu Vĩnh Viễn</span>
        </div>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
          Bảng Giá Thiết Kế Website 2026
        </h2>
      </div>

      {/* 3 Minimalist Clean Cards (Matching Screenshot 1:1 Style) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7 max-w-6xl mx-auto px-4 sm:px-6 items-stretch">
        {packagesData.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className={`relative rounded-[32px] p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 ${
                item.popular
                  ? 'bg-white border-2 border-[#0baba0] shadow-xl shadow-[#0baba0]/15 ring-4 ring-[#0baba0]/10 lg:-translate-y-2'
                  : 'bg-white border border-slate-200/80 shadow-sm hover:shadow-lg hover:border-slate-300'
              }`}
            >
              <div>
                {/* Top Row: Icon on Left, Pill Badge on Right */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div
                    className={`w-10 h-10 rounded-2xl flex items-center justify-center ${
                      item.popular
                        ? 'bg-[#0baba0]/15 text-[#0baba0]'
                        : 'bg-slate-100 text-slate-700'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>

                  {item.badge ? (
                    <span
                      className={`px-3 py-1 rounded-full text-[11px] font-bold tracking-wide ${
                        item.popular
                          ? 'bg-[#0baba0]/10 text-[#088c83] border border-[#0baba0]/30'
                          : 'bg-slate-100 text-slate-600 border border-slate-200'
                      }`}
                    >
                      {item.badge}
                    </span>
                  ) : (
                    <span className="w-1" />
                  )}
                </div>

                {/* Plan Name */}
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                  {item.name}
                </h3>

                {/* Plan Subtitle (1 Short Sentence) */}
                <p className="text-xs text-slate-500 mt-1.5 leading-relaxed min-h-[34px]">
                  {item.subtitle}
                </p>

                {/* Price */}
                <div className="mt-5 pb-5 border-b border-slate-100 flex items-baseline gap-1.5">
                  <span
                    className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
                      item.popular ? 'text-[#0baba0]' : 'text-slate-900'
                    }`}
                  >
                    {item.price}
                  </span>
                  <span className="text-xs text-slate-500 font-medium">
                    {item.period}
                  </span>
                </div>

                {/* Feature Checklist (Solid Circle Checkmarks) */}
                <div className="py-5 space-y-3">
                  {item.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2.5 text-xs text-slate-700">
                      <div
                        className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 ${
                          item.popular
                            ? 'bg-[#0baba0] text-white'
                            : 'bg-slate-200 text-slate-700'
                        }`}
                      >
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </div>
                      <span className="leading-snug">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pill Button at Bottom (Like Screenshot) */}
              <div className="pt-2">
                <button
                  onClick={() => onSelectPackage(item.pkg)}
                  className={`w-full py-3.5 px-5 rounded-full font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer ${item.btnStyle}`}
                >
                  <span>{item.btnText}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Subtle Bottom Link to Calculator */}
      <div className="text-center pt-2">
        <button
          onClick={onOpenCalculator}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-[#0baba0] transition-colors cursor-pointer"
        >
          <Calculator className="w-3.5 h-3.5" />
          <span>Cần tính năng riêng? Sử dụng công cụ dự toán chi phí tự động</span>
          <ArrowRight className="w-3 h-3" />
        </button>
      </div>

    </section>
  );
};
