import React from 'react';
import {
  Globe,
  Server,
  Palette,
  Megaphone,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Zap,
  Mail
} from 'lucide-react';

interface CoreService {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  priceNote: string;
  icon: React.ElementType;
  gradient: string;
  iconColor: string;
  bgImage: string;
  description: string;
  features: string[];
}

export const CoreServicesGrid: React.FC<{
  onNavigateToService: (slug: string) => void;
  onOpenCalculator?: () => void;
}> = ({ onNavigateToService }) => {
  const services: CoreService[] = [
    {
      id: 'web-design',
      slug: 'thiet-ke-website-tron-goi',
      title: 'Thiết Kế Website',
      subtitle: 'Chuẩn SEO & Tối ưu chuyển đổi',
      priceNote: 'Từ 2.500.000 đ',
      icon: Globe,
      gradient: 'from-teal-500/10 to-emerald-500/10',
      iconColor: 'text-[#0baba0]',
      bgImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=700&q=80',
      description: 'May đo giao diện độc quyền, tốc độ tải <0.8s, bàn giao trọn gói mã nguồn.',
      features: [
        'Chuẩn SEO Onpage 100%',
        'Tương thích mọi thiết bị',
        'Bảo hành kỹ thuật trọn đời'
      ]
    },
    {
      id: 'hosting',
      slug: 'dich-vu-hosting',
      title: 'Hosting & Tên Miền',
      subtitle: 'Pure NVMe 3.400+ MB/s',
      priceNote: 'Từ 45.000 đ/th',
      icon: Server,
      gradient: 'from-cyan-500/10 to-teal-500/10',
      iconColor: 'text-teal-600',
      bgImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=700&q=80',
      description: 'Hạ tầng máy chủ NVMe tại Viettel & VNPT, kích hoạt tên miền chỉ trong 5 phút.',
      features: [
        'Uptime 99.99% ổn định',
        'Tường lửa WAF chống DDoS',
        'Sao lưu tự động mỗi ngày'
      ]
    },
    {
      id: 'ads',
      slug: 'dich-vu-quang-cao',
      title: 'Quảng Cáo Google & FB',
      subtitle: 'Tối ưu CPA & Chặn click ảo',
      priceNote: 'Tối ưu chi phí',
      icon: Megaphone,
      gradient: 'from-amber-500/10 to-orange-500/10',
      iconColor: 'text-amber-600',
      bgImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=700&q=80',
      description: 'Tiếp cận đúng khách hàng mục tiêu, bứt phá đơn hàng với chi phí tối thiểu.',
      features: [
        'Top 1-3 Google sau 30 phút',
        'Chặn click tặc tự động 24/7',
        'Báo cáo minh bạch số liệu'
      ]
    },
    {
      id: 'branding',
      slug: 'nhan-dien-thuong-hieu',
      title: 'Nhận Diện Thương Hiệu',
      subtitle: 'Logo & Bộ ấn phẩm độc bản',
      priceNote: 'Độc quyền 100%',
      icon: Palette,
      gradient: 'from-lime-500/10 to-emerald-500/10',
      iconColor: 'text-[#91c544]',
      bgImage: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=700&q=80',
      description: 'Thiết kế logo sáng tạo, nâng tầm đẳng cấp thương hiệu và ấn phẩm in ấn chuẩn.',
      features: [
        '3 - 5 Concept logo độc bản',
        'Bàn giao full file vector',
        'Cẩm nang Brand Guidelines'
      ]
    },
    {
      id: 'content',
      slug: 'viet-noi-dung-website',
      title: 'Viết Nội Dung Web',
      subtitle: 'Bài viết chuẩn SEO chuyên sâu',
      priceNote: 'Unique 100%',
      icon: Zap,
      gradient: 'from-emerald-500/10 to-teal-500/10',
      iconColor: 'text-emerald-600',
      bgImage: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=700&q=80',
      description: 'Nội dung cuốn hút chuẩn văn phong, giữ chân người dùng và gia tăng thứ hạng.',
      features: [
        'Nghiên cứu từ khóa Intent',
        'Unique 100% không copy',
        'Thiết kế banner minh họa'
      ]
    },
    {
      id: 'email',
      slug: 'dich-vu-email-google',
      title: 'Email Doanh Nghiệp',
      subtitle: 'Google Workspace & Tên miền',
      priceNote: 'Inbox 99.9%',
      icon: Mail,
      gradient: 'from-[#0baba0]/10 to-[#91c544]/10',
      iconColor: 'text-[#0baba0]',
      bgImage: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=700&q=80',
      description: 'Email theo tên miền công ty chuyên nghiệp, bảo mật 2FA và chống spam triệt để.',
      features: [
        'Đuôi @tencongty.com',
        'Bảo mật Google 2 lớp 2FA',
        'Đồng bộ PC & Smartphone'
      ]
    }
  ];

  return (
    <div className="space-y-8 sm:space-y-10">
      {/* Header: Concise & Elegant */}
      <div className="text-center max-w-2xl mx-auto space-y-2.5">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#0baba0]/10 border border-[#0baba0]/30 rounded-full text-xs font-semibold text-[#088c83]">
          <Sparkles className="w-3.5 h-3.5 text-[#91c544]" />
          <span>Hệ Sinh Thái Dịch Vụ Toàn Diện</span>
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
          Dịch Vụ Của Chúng Tôi
        </h2>
        <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto">
          Giải pháp số trọn gói từ Uni Creation giúp doanh nghiệp chuyển đổi số nhanh chóng, tối ưu chi phí và tăng trưởng bền vững.
        </p>
      </div>

      {/* 6 Cards Grid with Subtle Themed Background Images */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        {services.map((srv) => {
          const Icon = srv.icon;
          return (
            <div
              key={srv.id}
              onClick={() => onNavigateToService(srv.slug)}
              className="relative rounded-3xl p-6 sm:p-7 border border-slate-200/90 hover:border-[#0baba0] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group overflow-hidden cursor-pointer bg-white"
            >
              {/* Background Image Layer (Underneath the card content with soft opacity & gentle zoom on hover) */}
              <div className="absolute inset-0 z-0 overflow-hidden rounded-3xl pointer-events-none">
                <img
                  src={srv.bgImage}
                  alt={srv.title}
                  className="w-full h-full object-cover object-center opacity-12 group-hover:opacity-20 group-hover:scale-108 transition-all duration-700 ease-out"
                />
                {/* Clean gradient wash for perfect text readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/90 to-white/96 group-hover:from-white/90 group-hover:via-white/85 group-hover:to-white/92 transition-all duration-300" />
                <div className={`absolute top-0 right-0 w-36 h-36 bg-gradient-to-br ${srv.gradient} rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500`} />
              </div>

              {/* Main Content (Elevated above background image) */}
              <div className="relative z-10">
                {/* Top: Icon + Price Tag */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200/80 group-hover:bg-gradient-to-tr group-hover:from-[#0baba0] group-hover:to-[#91c544] group-hover:border-transparent flex items-center justify-center transition-all duration-300 shadow-2xs">
                    <Icon className={`w-6 h-6 ${srv.iconColor} group-hover:text-white transition-colors`} />
                  </div>
                  <span className="text-[11px] font-bold text-[#088c83] bg-teal-50/90 px-2.5 py-1 rounded-full border border-teal-200/60 shadow-2xs">
                    {srv.priceNote}
                  </span>
                </div>

                {/* Title & Subtitle (Concise) */}
                <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 group-hover:text-[#0baba0] transition-colors mb-1">
                  {srv.title}
                </h3>
                <p className="text-xs font-semibold text-slate-500 mb-2.5">
                  {srv.subtitle}
                </p>

                {/* Short 1-sentence description */}
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {srv.description}
                </p>

                {/* 3 Compact Feature Pills */}
                <div className="space-y-1.5 pt-2.5 border-t border-slate-100/90 mb-5">
                  {srv.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#91c544] shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom: Action Link */}
              <div className="pt-3.5 border-t border-slate-100/90 flex items-center justify-between relative z-10">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0baba0] group-hover:text-[#088c83]">
                  <span>Xem chi tiết</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>

                <span className="text-[11px] text-slate-400 group-hover:text-slate-600 font-medium">
                  Uni Creation
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
