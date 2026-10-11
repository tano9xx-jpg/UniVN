import React from 'react';
import { COMPANY_INFO } from '../data/siteData';
import { UniLogo } from './UniLogo';
import { MapPin, Phone, Mail, ShieldCheck, ArrowUp, ExternalLink, CheckCircle } from 'lucide-react';

interface FooterProps {
  onNavigate: (view: string, param?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#091e24] text-slate-300 pt-16 pb-20 lg:pb-12 text-xs border-t border-teal-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top footer row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">
          
          {/* Brand & Slogan (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <UniLogo size="md" showText={true} />
            </div>

            <p className="text-slate-400 text-xs leading-relaxed">
              {COMPANY_INFO.name} – Đơn vị tiên phong cung cấp giải pháp thiết kế website chuyên nghiệp, chuẩn SEO Google, hạ tầng máy chủ Pure NVMe và giải pháp số toàn diện tại Việt Nam.
            </p>

            {/* Offices List */}
            <div className="space-y-2.5 pt-2 text-xs text-slate-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#0baba0] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white">Hà Nội: </span>
                  <span className="text-slate-400">Tầng 6, số 303 Vũ Tông Phan, Thanh Xuân, Hà Nội</span>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#0baba0] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white">Đà Nẵng: </span>
                  <span className="text-slate-400">41 Khuê Mỹ Đông 14, Q. Ngũ Hành Sơn, Đà Nẵng</span>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#0baba0] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white">TP. Hồ Chí Minh: </span>
                  <span className="text-slate-400">973/136 Nguyễn Ảnh Thủ, Quận 12, TP.HCM</span>
                </div>
              </div>
            </div>

            {/* Contact numbers */}
            <div className="pt-2 grid grid-cols-2 gap-2 text-xs">
              <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                <div className="text-[10px] text-slate-400">Hotline Tư Vấn:</div>
                <a href={`tel:${COMPANY_INFO.hotline.replace(/\./g, '')}`} className="font-bold text-[#0baba0] hover:underline font-mono">
                  {COMPANY_INFO.hotline}
                </a>
              </div>
              <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                <div className="text-[10px] text-slate-400">Hỗ Trợ Kỹ Thuật:</div>
                <a href={`tel:${COMPANY_INFO.techHotline.replace(/\./g, '')}`} className="font-bold text-[#91c544] hover:underline font-mono">
                  {COMPANY_INFO.techHotline}
                </a>
              </div>
            </div>
          </div>

          {/* Dịch vụ (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-extrabold text-white uppercase tracking-wider text-xs flex items-center gap-1.5">
              <span className="w-1.5 h-3.5 bg-[#0baba0] rounded-full"></span>
              <span>Dịch Vụ Cung Cấp</span>
            </h4>
            <ul className="space-y-2.5 text-slate-400 text-xs">
              <li>
                <button onClick={() => onNavigate('service-detail', 'thiet-ke-website-tron-goi')} className="hover:text-white transition-colors cursor-pointer text-left flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-[#0baba0]"></span>
                  <span>Thiết kế website trọn gói</span>
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('service-detail', 'dich-vu-hosting')} className="hover:text-white transition-colors cursor-pointer text-left flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-[#0baba0]"></span>
                  <span>Dịch vụ Hosting Pure NVMe</span>
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('service-detail', 'dich-vu-ten-mien')} className="hover:text-white transition-colors cursor-pointer text-left flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-[#0baba0]"></span>
                  <span>Tra cứu & Đăng ký tên miền</span>
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('service-detail', 'dich-vu-email-google')} className="hover:text-white transition-colors cursor-pointer text-left flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-[#0baba0]"></span>
                  <span>Email Google Workspace</span>
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('service-detail', 'nhan-dien-thuong-hieu')} className="hover:text-white transition-colors cursor-pointer text-left flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-[#0baba0]"></span>
                  <span>Nhận diện thương hiệu & Logo</span>
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('service-detail', 'viet-noi-dung-website')} className="hover:text-white transition-colors cursor-pointer text-left flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-[#0baba0]"></span>
                  <span>Viết nội dung bài chuẩn SEO</span>
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('service-detail', 'dich-vu-quang-cao')} className="hover:text-white transition-colors cursor-pointer text-left flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-[#0baba0]"></span>
                  <span>Quảng cáo Google Ads & Facebook</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Chính sách (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-extrabold text-white uppercase tracking-wider text-xs flex items-center gap-1.5">
              <span className="w-1.5 h-3.5 bg-[#91c544] rounded-full"></span>
              <span>Thông Tin & Hỗ Trợ</span>
            </h4>
            <ul className="space-y-2.5 text-slate-400 text-xs">
              <li>
                <button onClick={() => onNavigate('policies')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Quy định sử dụng dịch vụ
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('policies')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Chính sách bảo mật dữ liệu
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('policies')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Chính sách bảo hành trọn đời
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('payment')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Hướng dẫn thanh toán
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('recruitment')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Tuyển dụng nhân sự
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('news')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Tin tức & Cẩm nang số
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Về Uni Creation Việt Nam
                </button>
              </li>
            </ul>
          </div>

          {/* Chứng nhận uy tín & Badges (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-extrabold text-white uppercase tracking-wider text-xs flex items-center gap-1.5">
              <span className="w-1.5 h-3.5 bg-[#0baba0] rounded-full"></span>
              <span>Chứng Nhận & Bản Quyền</span>
            </h4>

            {/* Badges container */}
            <div className="space-y-2.5">
              {/* Bộ Công Thương badge */}
              <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-red-600/20 text-red-400 flex items-center justify-center font-bold text-xs shrink-0">
                  ★
                </div>
                <div>
                  <div className="text-[11px] font-bold text-white">Đã Thông Báo Bộ Công Thương</div>
                  <div className="text-[10px] text-slate-400">Giấy phép sàn thương mại điện tử</div>
                </div>
              </div>

              {/* NCSC badge */}
              <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-teal-500/20 text-teal-400 flex items-center justify-center font-bold text-xs shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-white">NCSC Tín Nhiệm Mạng</div>
                  <div className="text-[10px] text-slate-400">Giám sát an toàn không gian mạng</div>
                </div>
              </div>

              {/* Google Partner badge */}
              <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold text-xs shrink-0">
                  G
                </div>
                <div>
                  <div className="text-[11px] font-bold text-white">Google Partner Certified</div>
                  <div className="text-[10px] text-slate-400">Đối tác giải pháp Google Workspace & Ads</div>
                </div>
              </div>
            </div>

            <div className="text-[11px] text-slate-400">
              Mã số thuế: <span className="font-mono text-white font-bold">0109090636</span> · Cấp bởi Sở KH&ĐT TP. Hà Nội
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <div>
            © 2026 {COMPANY_INFO.name}. Tất cả quyền được bảo lưu.
          </div>

          <div className="flex items-center gap-6">
            <span className="text-[#91c544] flex items-center gap-1 font-semibold">
              <CheckCircle className="w-3.5 h-3.5 text-[#91c544]" />
              Cam kết bảo hành kỹ thuật trọn đời
            </span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-slate-300 hover:text-[#0baba0] cursor-pointer transition-colors"
            >
              <span>Về đầu trang</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
