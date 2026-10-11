import React, { useState } from 'react';
import { HOSTING_PACKAGES, DOMAIN_PRICING, COMPANY_INFO } from '../data/siteData';
import { Server, Globe, Mail, Cpu, Palette, Megaphone, FileText, Check, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { DomainChecker } from './DomainChecker';
import {
  ServerHostingAnimation,
  EmailAnimation,
  AdsMarketingAnimation,
  BrandIdentityAnimation,
  ContentWritingAnimation
} from './ServiceAnimations';

interface InfrastructureServicesProps {
  onOpenConsultation: (serviceName: string) => void;
}

export const InfrastructureServices: React.FC<InfrastructureServicesProps> = ({ onOpenConsultation }) => {
  const [activeTab, setActiveTab] = useState<'hosting' | 'domain' | 'email' | 'branding' | 'marketing'>('hosting');

  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#0baba0]/10 border border-[#0baba0]/30 rounded-full text-xs font-semibold text-[#088c83]">
          <Sparkles className="w-3.5 h-3.5 text-[#91c544]" />
          <span>Giải Pháp Hạ Tầng & Dịch Vụ Số Toàn Diện</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Hệ Sinh Thái Dịch Vụ Công Nghệ Uni Creation
        </h2>
        <p className="text-slate-600 text-sm sm:text-base">
          Cung cấp trọn gói từ máy chủ tốc độ cao, tên miền chính hãng, email doanh nghiệp tới nhận diện thương hiệu và giải pháp marketing tăng trưởng.
        </p>

        {/* Tab selection (Bright, Clean, Fresh Styling) */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
          <button
            onClick={() => setActiveTab('hosting')}
            className={`px-4 py-2.5 rounded-2xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === 'hosting'
                ? 'btn-brand-gradient text-white shadow-md'
                : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200'
            }`}
          >
            <Server className="w-3.5 h-3.5" />
            <span>Hosting & VPS NVMe</span>
          </button>

          <button
            onClick={() => setActiveTab('domain')}
            className={`px-4 py-2.5 rounded-2xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === 'domain'
                ? 'btn-brand-gradient text-white shadow-md'
                : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200'
            }`}
          >
            <Globe className="w-3.5 h-3.5" />
            <span>Dịch Vụ Tên Miền</span>
          </button>

          <button
            onClick={() => setActiveTab('email')}
            className={`px-4 py-2.5 rounded-2xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === 'email'
                ? 'btn-brand-gradient text-white shadow-md'
                : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200'
            }`}
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Email Google Workspace</span>
          </button>

          <button
            onClick={() => setActiveTab('branding')}
            className={`px-4 py-2.5 rounded-2xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === 'branding'
                ? 'btn-brand-gradient text-white shadow-md'
                : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200'
            }`}
          >
            <Palette className="w-3.5 h-3.5" />
            <span>Nhận Diện Thương Hiệu</span>
          </button>

          <button
            onClick={() => setActiveTab('marketing')}
            className={`px-4 py-2.5 rounded-2xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === 'marketing'
                ? 'btn-brand-gradient text-white shadow-md'
                : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200'
            }`}
          >
            <Megaphone className="w-3.5 h-3.5" />
            <span>Quảng Cáo & Bài Viết</span>
          </button>
        </div>
      </div>

      {/* Tab 1: Hosting & Cloud VPS */}
      {activeTab === 'hosting' && (
        <div className="space-y-8 animate-in fade-in">
          {/* Top visual row with Server Hosting animation */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-sm space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0baba0]">Hạ Tầng Điện Toán Đám Mây</span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Hosting NVMe Tốc Độ Siêu Tốc & Cloud VPS Doanh Nghiệp
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Máy chủ Dell PowerEdge cao cấp đặt tại Datacenter chuẩn Tier 3 tại Việt Nam (Viettel IDC, VNPT). Ổ cứng 100% Pure NVMe SSD U.2 cho tốc độ truy xuất dữ liệu gấp 10 lần so với SSD thông thường.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700 pt-2">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#91c544]" />
                  <span>LiteSpeed Web Server + LSCache tăng tốc 600%</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#91c544]" />
                  <span>CloudLinux OS cách ly tài nguyên an toàn 100%</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#91c544]" />
                  <span>Sao lưu tự động JetBackup định kỳ hàng ngày</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#91c544]" />
                  <span>Bảo mật Imunify360 quét mã độc và chống DDoS</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onOpenConsultation('Hosting NVMe Doanh Nghiệp')}
                  className="px-6 py-3 btn-brand-gradient text-white rounded-2xl text-xs font-bold uppercase tracking-wider shadow cursor-pointer"
                >
                  Đăng Ký Tư Vấn Gói Hosting
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <ServerHostingAnimation />
            </div>
          </div>

          {/* Hosting Packages Grid */}
          <div className="space-y-4">
            <h4 className="text-xl font-bold text-slate-900 text-center">Bảng Giá Các Gói Hosting Chuyên Dụng</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {HOSTING_PACKAGES.map((pkg, i) => (
                <div
                  key={i}
                  className={`bg-white rounded-3xl p-6 border transition-all duration-300 flex flex-col justify-between ${
                    pkg.highlight
                      ? 'border-2 border-[#0baba0] shadow-lg ring-4 ring-[#0baba0]/10 scale-100 lg:-translate-y-1'
                      : 'border-slate-200/90 shadow-sm hover:shadow-md'
                  }`}
                >
                  <div>
                    {pkg.highlight && (
                      <span className="inline-block px-2.5 py-0.5 bg-emerald-100 text-emerald-800 text-[10px] font-bold rounded-full uppercase mb-2">
                        Phổ Biến Nhất
                      </span>
                    )}
                    <h5 className="font-bold text-base text-slate-900">{pkg.name}</h5>
                    <div className="mt-2 text-xl font-black text-[#0baba0] font-mono">
                      {pkg.price}
                    </div>

                    <ul className="mt-4 space-y-2 text-xs text-slate-600 border-t border-slate-100 pt-4">
                      <li className="flex items-center gap-1.5">
                        <Check className="w-3.5 h-3.5 text-[#91c544]" />
                        <span>Dung lượng: <strong>{pkg.disk}</strong> NVMe</span>
                      </li>
                      <li className="flex items-center gap-1.5">
                        <Check className="w-3.5 h-3.5 text-[#91c544]" />
                        <span>Băng thông: {pkg.bandwidth}</span>
                      </li>
                      <li className="flex items-center gap-1.5">
                        <Check className="w-3.5 h-3.5 text-[#91c544]" />
                        <span>Tên miền addon: {pkg.domains}</span>
                      </li>
                      <li className="flex items-center gap-1.5">
                        <Check className="w-3.5 h-3.5 text-[#91c544]" />
                        <span>Cơ sở dữ liệu: {pkg.mysql} MySQL</span>
                      </li>
                      <li className="flex items-center gap-1.5">
                        <Check className="w-3.5 h-3.5 text-[#91c544]" />
                        <span>Sao lưu: {pkg.backup}</span>
                      </li>
                    </ul>
                  </div>

                  <div className="pt-6 mt-4 border-t border-slate-100">
                    <button
                      onClick={() => onOpenConsultation(`Hosting ${pkg.name}`)}
                      className={`w-full py-2.5 text-xs font-bold rounded-xl transition-all cursor-pointer ${
                        pkg.highlight
                          ? 'btn-brand-gradient text-white shadow'
                          : 'bg-emerald-50 hover:bg-[#0baba0] text-[#088c83] hover:text-white border border-[#0baba0]/30'
                      }`}
                    >
                      Đăng Ký Ngay
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Domain Checker */}
      {activeTab === 'domain' && (
        <div className="space-y-6 animate-in fade-in">
          <DomainChecker />
        </div>
      )}

      {/* Tab 3: Email */}
      {activeTab === 'email' && (
        <div className="space-y-8 animate-in fade-in">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-sm space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-50 rounded-full text-xs font-semibold text-blue-800">
                <Mail className="w-3.5 h-3.5 text-blue-600" />
                <span>Email Tên Miền Doanh Nghiệp @domain.com</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Dịch Vụ Email Google Workspace & Doanh Nghiệp Uy Tín
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Tạo dựng sự tin cậy tuyệt đối trong mắt khách hàng và đối tác với địa chỉ email theo tên miền công ty (ví dụ: contact@tencongty.com). Tỷ lệ vào inbox 99.9%, tích hợp bảo mật chống spam hàng đầu thế giới.
              </p>

              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#91c544]" />
                  <span>Giao diện quen thuộc của Gmail, đồng bộ trên điện thoại và máy tính</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#91c544]" />
                  <span>Dung lượng lưu trữ từ 30GB đến 2TB mỗi hộp thư điện tử</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#91c544]" />
                  <span>Bảo mật 2 lớp 2FA, mã hóa dữ liệu theo chuẩn bảo mật Google</span>
                </li>
              </ul>

              <div className="pt-2">
                <button
                  onClick={() => onOpenConsultation('Email Google Workspace')}
                  className="px-6 py-3 btn-brand-gradient text-white rounded-2xl text-xs font-bold uppercase tracking-wider shadow cursor-pointer"
                >
                  Nhận Báo Giá Email Doanh Nghiệp
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <EmailAnimation />
            </div>
          </div>
        </div>
      )}

      {/* Tab 4: Branding */}
      {activeTab === 'branding' && (
        <div className="space-y-8 animate-in fade-in">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-sm space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0baba0]">Hệ Thống Nhận Diện Thương Hiệu</span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Thiết Kế Logo & Bộ Nhận Diện Thương Hiệu Độc Quyền
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Bạn có muốn khách hàng nhìn thấy sự chuyên nghiệp ngay từ lần đầu tiên tiếp xúc? Hãy bắt đầu từ việc thiết kế logo chuyên nghiệp và quy chuẩn đồng bộ màu sắc, typography, card visit, catalogue cho doanh nghiệp.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700 pt-2">
                <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200/80 space-y-1">
                  <div className="font-bold text-slate-900">Thiết Kế Logo Độc Bản</div>
                  <p className="text-slate-500">Đưa ra 3-5 ý tưởng, chỉnh sửa không giới hạn, bàn giao file vector in ấn.</p>
                </div>
                <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200/80 space-y-1">
                  <div className="font-bold text-slate-900">Ấn Phẩm Văn Phòng</div>
                  <p className="text-slate-500">Card visit, phong bì thư, kẹp file, tiêu đề thư, thẻ nhân viên và đồng phục.</p>
                </div>
                <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200/80 space-y-1">
                  <div className="font-bold text-slate-900">Cẩm Nang Thương Hiệu</div>
                  <p className="text-slate-500">Quy chuẩn logo, hệ màu RGB/CMYK, font chữ chuẩn, hướng dẫn ứng dụng.</p>
                </div>
                <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200/80 space-y-1">
                  <div className="font-bold text-slate-900">Đồng Bộ Website</div>
                  <p className="text-slate-500">Áp dụng chuẩn màu nhận diện vào website và các kênh mạng xã hội.</p>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onOpenConsultation('Thiết kế Logo & Nhận diện')}
                  className="px-6 py-3 btn-brand-gradient text-white rounded-2xl text-xs font-bold uppercase tracking-wider shadow cursor-pointer"
                >
                  Tư Vấn Thiết Kế Logo
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <BrandIdentityAnimation />
            </div>
          </div>
        </div>
      )}

      {/* Tab 5: Marketing & Content */}
      {activeTab === 'marketing' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 animate-in fade-in">
          {/* Card 1: Ads */}
          <div className="space-y-4">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm space-y-4">
              <div className="w-10 h-10 rounded-2xl bg-amber-50 text-amber-700 flex items-center justify-center">
                <Megaphone className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Chiến Dịch Quảng Cáo Google Ads & Facebook</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Giải pháp Marketing tại Uni Creation giúp bạn gia tăng doanh số và tiếp cận đúng khách hàng tiềm năng:
              </p>
              <ul className="space-y-2 text-xs text-slate-700">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#91c544]" />
                  <span>Quảng cáo từ khóa Google Search hiển thị top 1-3 ngay sau 30 phút setup</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#91c544]" />
                  <span>Quảng cáo Google Shopping phủ sóng sản phẩm kèm hình ảnh và giá bán</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#91c544]" />
                  <span>Quảng cáo Facebook Ads nhắm đúng độ tuổi, vị trí địa lý và sở thích</span>
                </li>
              </ul>
              <div className="pt-2">
                <button
                  onClick={() => onOpenConsultation('Quảng cáo Google Ads')}
                  className="w-full py-3 btn-brand-gradient text-white rounded-xl text-xs font-bold shadow cursor-pointer"
                >
                  Đăng Ký Setup Quảng Cáo
                </button>
              </div>
            </div>

            <AdsMarketingAnimation />
          </div>

          {/* Card 2: Content Writing */}
          <div className="space-y-4">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm space-y-4">
              <div className="w-10 h-10 rounded-2xl bg-lime-50 text-lime-700 flex items-center justify-center">
                <FileText className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Biên Tập Nội Dung Website Chuẩn SEO Onpage</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Nội dung chất lượng là chìa khóa giữ chân khách hàng và đạt top bền vững trên Google:
              </p>
              <ul className="space-y-2 text-xs text-slate-700">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#91c544]" />
                  <span>Bài viết Unique 100%, không trùng lặp, chuẩn tiêu chí Google Helpful Content</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#91c544]" />
                  <span>Tối ưu tiêu đề, mô tả meta, thẻ Heading H1-H4 và mật độ từ khóa 1-3%</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#91c544]" />
                  <span>Thiết kế hình ảnh minh họa độc quyền kèm chèn logo thương hiệu</span>
                </li>
              </ul>
              <div className="pt-2">
                <button
                  onClick={() => onOpenConsultation('Viết nội dung website')}
                  className="w-full py-3 btn-brand-gradient text-white rounded-xl text-xs font-bold shadow cursor-pointer"
                >
                  Đăng Ký Gói Viết Bài Chuẩn SEO
                </button>
              </div>
            </div>

            <ContentWritingAnimation />
          </div>
        </div>
      )}

    </div>
  );
};
