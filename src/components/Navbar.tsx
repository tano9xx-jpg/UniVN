import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { UniLogo } from './UniLogo';
import { Search, ChevronDown, Phone, Menu, X, ArrowRight, Sparkles } from 'lucide-react';

interface NavbarProps {
  currentView: string;
  onNavigate: (view: string, param?: string) => void;
  onOpenCalculator: () => void;
  onOpenSearch: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentView,
  onNavigate,
  onOpenCalculator,
  onOpenSearch
}) => {
  const [openDropdown, setOpenDropdown] = useState<'themeCat' | 'themePkg' | 'services' | null>(null);
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<'themeCat' | 'themePkg' | 'services' | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const navRef = useRef<HTMLDivElement>(null);

  // Active tab determines where the floating pill rests
  const activeTab = hoveredNav || openDropdown || (currentView === 'home' ? 'home' : null);

  // Detect scroll to style sticky menu when scrolling past top header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleNav = (view: string, param?: string) => {
    setOpenDropdown(null);
    setMobileMenuOpen(false);
    onNavigate(view, param);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="w-full relative z-50">
      
      {/* 1. TOP MINI BAR (Normal flow - will NOT fix/stick when scrolling down, clean crisp white) */}
      <div className="w-full bg-white border-b border-slate-100 text-slate-600 text-xs py-2 px-4 sm:px-6 lg:px-8 transition-colors">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          <div className="hidden sm:flex items-center gap-4 text-[11px] text-slate-500">
            <span>Công ty Thiết Kế Website Chuẩn SEO Uni Creation</span>
            <span>·</span>
            <span>Hotline: <strong className="text-[#0baba0]">0967.508.333</strong></span>
          </div>

          <div className="flex items-center justify-end w-full sm:w-auto gap-4 sm:gap-6 text-xs font-medium">
            <button
              onClick={() => handleNav('about')}
              className={`hover:text-[#0baba0] transition-colors cursor-pointer ${
                currentView === 'about' ? 'text-[#0baba0] font-bold' : ''
              }`}
            >
              Về UniCreation
            </button>
            <button
              onClick={() => handleNav('payment')}
              className={`hover:text-[#0baba0] transition-colors cursor-pointer ${
                currentView === 'payment' ? 'text-[#0baba0] font-bold' : ''
              }`}
            >
              Thanh toán
            </button>
            <button
              onClick={() => handleNav('news')}
              className={`hover:text-[#0baba0] transition-colors cursor-pointer ${
                currentView === 'news' ? 'text-[#0baba0] font-bold' : ''
              }`}
            >
              Tin tức
            </button>
            <button
              onClick={() => handleNav('news', 'kien-thuc')}
              className="hover:text-[#0baba0] transition-colors cursor-pointer hidden md:inline"
            >
              Kiến thức Website
            </button>
            <button
              onClick={() => handleNav('recruitment')}
              className={`hover:text-[#0baba0] transition-colors cursor-pointer ${
                currentView === 'recruitment' ? 'text-[#0baba0] font-bold' : ''
              }`}
            >
              Tuyển Dụng
            </button>
            <button
              onClick={() => handleNav('contact')}
              className={`hover:text-[#0baba0] transition-colors cursor-pointer ${
                currentView === 'contact' ? 'text-[#0baba0] font-bold' : ''
              }`}
            >
              Liên hệ
            </button>

            {/* Search icon */}
            <button
              onClick={onOpenSearch}
              className="p-1 text-slate-500 hover:text-[#0baba0] transition-colors cursor-pointer"
              title="Tìm kiếm"
            >
              <Search className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </div>

      {/* 2. MAIN NAVIGATION BAR (STICKY/FIXED ON TOP WHEN SCROLLING DOWN) */}
      <header
        ref={navRef}
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? 'fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-md border-b border-slate-200/80 py-0'
            : currentView === 'home'
            ? 'relative z-50 bg-transparent border-b border-transparent py-0'
            : 'relative z-50 bg-white/90 backdrop-blur-sm shadow-xs border-b border-slate-100 py-0'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 sm:h-20">
          
          {/* Logo on the left */}
          <button
            onClick={() => handleNav('home')}
            className="flex items-center gap-3 text-left focus:outline-none cursor-pointer"
          >
            <UniLogo size="md" showText={true} />
          </button>

          {/* CENTER FLOATING CAPSULE DOCK (Ultra-Translucent Frosted Mirrored Glass with Gliding Pill) */}
          <nav
            onMouseLeave={() => {
              setHoveredNav(null);
              setOpenDropdown(null);
            }}
            className="hidden lg:flex items-center bg-white/35 backdrop-blur-2xl border border-white/75 shadow-[0_10px_35px_rgba(15,23,42,0.08),inset_0_1.5px_2px_rgba(255,255,255,0.95),inset_0_-1px_1px_rgba(255,255,255,0.35)] rounded-full p-1.5 text-xs sm:text-sm font-semibold text-slate-700 transition-all duration-300 relative select-none"
          >
            
            {/* ITEM 1: Trang chủ */}
            <div className="relative">
              {activeTab === 'home' && (
                <motion.div
                  layoutId="floatingNavPillGlider"
                  className="absolute inset-0 bg-white/95 rounded-full shadow-[0_4px_14px_rgba(15,23,42,0.12),inset_0_1px_1px_rgba(255,255,255,1)] border border-white/90 -z-0"
                  transition={{ type: 'spring', stiffness: 380, damping: 28 }}
                />
              )}
              <button
                onClick={() => handleNav('home')}
                onMouseEnter={() => {
                  setHoveredNav('home');
                  setOpenDropdown(null);
                }}
                className={`relative z-10 px-4 py-1.5 rounded-full transition-colors cursor-pointer ${
                  activeTab === 'home'
                    ? 'text-slate-900 font-extrabold'
                    : 'text-slate-700 hover:text-slate-950 font-semibold'
                }`}
              >
                Trang chủ
              </button>
            </div>

            {/* ITEM 2: Giao diện theo chủ đề */}
            <div className="relative">
              {activeTab === 'themeCat' && (
                <motion.div
                  layoutId="floatingNavPillGlider"
                  className="absolute inset-0 bg-white/95 rounded-full shadow-[0_4px_14px_rgba(15,23,42,0.12),inset_0_1px_1px_rgba(255,255,255,1)] border border-white/90 -z-0"
                  transition={{ type: 'spring', stiffness: 380, damping: 28 }}
                />
              )}
              <button
                onClick={() => setOpenDropdown(openDropdown === 'themeCat' ? null : 'themeCat')}
                onMouseEnter={() => {
                  setHoveredNav('themeCat');
                  setOpenDropdown('themeCat');
                }}
                className={`relative z-10 flex items-center gap-1.5 px-3.5 py-1.5 rounded-full cursor-pointer transition-colors ${
                  activeTab === 'themeCat'
                    ? 'text-[#088c83] font-extrabold'
                    : 'text-slate-700 hover:text-slate-950 font-semibold'
                }`}
              >
                <span>Giao diện theo chủ đề</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${openDropdown === 'themeCat' ? 'rotate-180 text-[#0baba0]' : 'text-slate-500'}`} />
              </button>
            </div>

            {/* ITEM 3: Giao diện theo gói (HOT) */}
            <div className="relative">
              {activeTab === 'themePkg' && (
                <motion.div
                  layoutId="floatingNavPillGlider"
                  className="absolute inset-0 bg-white/95 rounded-full shadow-[0_4px_14px_rgba(15,23,42,0.12),inset_0_1px_1px_rgba(255,255,255,1)] border border-white/90 -z-0"
                  transition={{ type: 'spring', stiffness: 380, damping: 28 }}
                />
              )}
              <button
                onClick={() => setOpenDropdown(openDropdown === 'themePkg' ? null : 'themePkg')}
                onMouseEnter={() => {
                  setHoveredNav('themePkg');
                  setOpenDropdown('themePkg');
                }}
                className={`relative z-10 flex items-center gap-1.5 px-3.5 py-1.5 rounded-full cursor-pointer transition-colors ${
                  activeTab === 'themePkg'
                    ? 'text-[#088c83] font-extrabold'
                    : 'text-slate-700 hover:text-slate-950 font-semibold'
                }`}
              >
                <span>Giao diện theo gói</span>
                <span className="px-1.5 py-0.2 bg-gradient-to-r from-rose-500 to-pink-500 text-white text-[9px] font-black rounded uppercase shadow-2xs">
                  HOT
                </span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${openDropdown === 'themePkg' ? 'rotate-180 text-[#0baba0]' : 'text-slate-500'}`} />
              </button>
            </div>

            {/* ITEM 4: Dịch vụ cung cấp */}
            <div className="relative">
              {activeTab === 'services' && (
                <motion.div
                  layoutId="floatingNavPillGlider"
                  className="absolute inset-0 bg-white/95 rounded-full shadow-[0_4px_14px_rgba(15,23,42,0.12),inset_0_1px_1px_rgba(255,255,255,1)] border border-white/90 -z-0"
                  transition={{ type: 'spring', stiffness: 380, damping: 28 }}
                />
              )}
              <button
                onClick={() => setOpenDropdown(openDropdown === 'services' ? null : 'services')}
                onMouseEnter={() => {
                  setHoveredNav('services');
                  setOpenDropdown('services');
                }}
                className={`relative z-10 flex items-center gap-1.5 px-3.5 py-1.5 rounded-full cursor-pointer transition-colors ${
                  activeTab === 'services'
                    ? 'text-[#088c83] font-extrabold'
                    : 'text-slate-700 hover:text-slate-950 font-semibold'
                }`}
              >
                <span>Dịch vụ cung cấp</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${openDropdown === 'services' ? 'rotate-180 text-[#0baba0]' : 'text-slate-500'}`} />
              </button>
            </div>

            {/* =========================================================================
                CENTERED SUBMENU MEGA MENUS (Directly centered under the capsule dock)
                ========================================================================= */}

            {/* 1. Mega menu: Giao diện theo chủ đề */}
            {openDropdown === 'themeCat' && (
              <div
                className="absolute left-1/2 -translate-x-1/2 top-full mt-3 w-[580px] bg-white rounded-2xl shadow-2xl border-t-2 border-[#0baba0] p-6 grid grid-cols-3 gap-6 animate-in fade-in zoom-in-95 duration-150 z-50 text-xs before:content-[''] before:absolute before:-top-3 before:left-0 before:right-0 before:h-3"
              >
                {/* Column 1 */}
                <div className="space-y-3">
                  <button
                    onClick={() => handleNav('themes', 'gioi-thieu-cong-ty')}
                    className="w-full text-left font-medium text-slate-700 hover:text-[#0baba0] hover:translate-x-1 transition-all cursor-pointer"
                  >
                    Giới thiệu công ty
                  </button>
                  <button
                    onClick={() => handleNav('themes', 'o-to')}
                    className="w-full text-left font-medium text-slate-700 hover:text-[#0baba0] hover:translate-x-1 transition-all cursor-pointer"
                  >
                    Ô tô
                  </button>
                  <button
                    onClick={() => handleNav('themes', 'du-lich')}
                    className="w-full text-left font-medium text-slate-700 hover:text-[#0baba0] hover:translate-x-1 transition-all cursor-pointer"
                  >
                    Du lịch
                  </button>
                </div>

                {/* Column 2 */}
                <div className="space-y-3">
                  <button
                    onClick={() => handleNav('themes', 'thuong-mai-dien-tu')}
                    className="w-full text-left font-medium text-slate-700 hover:text-[#0baba0] hover:translate-x-1 transition-all cursor-pointer"
                  >
                    Thương mại điện tử
                  </button>
                  <button
                    onClick={() => handleNav('themes', 'noi-that')}
                    className="w-full text-left font-medium text-slate-700 hover:text-[#0baba0] hover:translate-x-1 transition-all cursor-pointer"
                  >
                    Nội thất
                  </button>
                  <button
                    onClick={() => handleNav('themes', 'du-hoc')}
                    className="w-full text-left font-medium text-slate-700 hover:text-[#0baba0] hover:translate-x-1 transition-all cursor-pointer"
                  >
                    Du học
                  </button>
                </div>

                {/* Column 3 */}
                <div className="space-y-3">
                  <button
                    onClick={() => handleNav('themes', 'bat-dong-san')}
                    className="w-full text-left font-medium text-slate-700 hover:text-[#0baba0] hover:translate-x-1 transition-all cursor-pointer"
                  >
                    Bất động sản
                  </button>
                  <button
                    onClick={() => handleNav('themes', 'xay-dung')}
                    className="w-full text-left font-medium text-slate-700 hover:text-[#0baba0] hover:translate-x-1 transition-all cursor-pointer"
                  >
                    Xây dựng
                  </button>
                  <button
                    onClick={() => handleNav('themes', 'dich-vu-khac')}
                    className="w-full text-left font-medium text-slate-700 hover:text-[#0baba0] hover:translate-x-1 transition-all cursor-pointer"
                  >
                    Dịch vụ khác
                  </button>
                </div>
              </div>
            )}

            {/* 2. Dropdown: Giao diện theo gói (HOT) */}
            {openDropdown === 'themePkg' && (
              <div
                className="absolute left-1/2 -translate-x-1/2 top-full mt-3 w-60 bg-white rounded-2xl shadow-2xl border-t-2 border-[#0baba0] p-4 space-y-2.5 animate-in fade-in zoom-in-95 duration-150 z-50 text-xs before:content-[''] before:absolute before:-top-3 before:left-0 before:right-0 before:h-3"
              >
                <button
                  onClick={() => handleNav('pricing', 'startup')}
                  className="w-full text-left font-medium text-slate-700 hover:text-[#0baba0] hover:translate-x-1 transition-all cursor-pointer p-1.5 rounded-lg hover:bg-slate-50"
                >
                  Gói Startup (2.5 Tr)
                </button>
                <button
                  onClick={() => handleNav('pricing', 'pro')}
                  className="w-full text-left font-medium text-slate-700 hover:text-[#0baba0] hover:translate-x-1 transition-all cursor-pointer p-1.5 rounded-lg hover:bg-slate-50"
                >
                  Gói Pro (4.0 Tr)
                </button>
                <button
                  onClick={() => handleNav('pricing', 'vip')}
                  className="w-full text-left font-medium text-slate-700 hover:text-[#0baba0] hover:translate-x-1 transition-all cursor-pointer p-1.5 rounded-lg hover:bg-slate-50"
                >
                  Các dự án VIP (May đo)
                </button>
              </div>
            )}

            {/* 3. Mega menu: Dịch vụ cung cấp (12 dịch vụ đầy đủ) */}
            {openDropdown === 'services' && (
              <div
                className="absolute left-1/2 -translate-x-1/2 top-full mt-3 w-[720px] bg-white rounded-2xl shadow-2xl border-t-2 border-[#0baba0] p-6 grid grid-cols-3 gap-6 animate-in fade-in zoom-in-95 duration-150 z-50 text-xs before:content-[''] before:absolute before:-top-3 before:left-0 before:right-0 before:h-3"
              >
                {/* Column 1 */}
                <div className="space-y-3">
                  <button
                    onClick={() => handleNav('service-detail', 'thiet-ke-website-tron-goi')}
                    className="w-full text-left font-medium text-slate-700 hover:text-[#0baba0] hover:translate-x-1 transition-all cursor-pointer"
                  >
                    Thiết kế website trọn gói
                  </button>
                  <button
                    onClick={() => handleNav('service-detail', 'dich-vu-vps-gia-re')}
                    className="w-full text-left font-medium text-slate-700 hover:text-[#0baba0] hover:translate-x-1 transition-all cursor-pointer"
                  >
                    Dịch vụ VPS giá rẻ
                  </button>
                  <button
                    onClick={() => handleNav('service-detail', 'dich-vu-ten-mien')}
                    className="w-full text-left font-medium text-slate-700 hover:text-[#0baba0] hover:translate-x-1 transition-all cursor-pointer"
                  >
                    Dịch vụ tên miền
                  </button>
                  <button
                    onClick={() => handleNav('service-detail', 'nhan-dien-thuong-hieu')}
                    className="w-full text-left font-medium text-slate-700 hover:text-[#0baba0] hover:translate-x-1 transition-all cursor-pointer"
                  >
                    Nhận diện thương hiệu
                  </button>
                </div>

                {/* Column 2 */}
                <div className="space-y-3">
                  <button
                    onClick={() => handleNav('service-detail', 'dich-vu-quang-cao')}
                    className="w-full text-left font-medium text-slate-700 hover:text-[#0baba0] hover:translate-x-1 transition-all cursor-pointer"
                  >
                    Dịch vụ quảng cáo
                  </button>
                  <button
                    onClick={() => handleNav('service-detail', 'dich-vu-vps-pro-ssd')}
                    className="w-full text-left font-medium text-slate-700 hover:text-[#0baba0] hover:translate-x-1 transition-all cursor-pointer"
                  >
                    Dịch vụ VPS PRO SSD
                  </button>
                  <button
                    onClick={() => handleNav('service-detail', 'dich-vu-email-hosting')}
                    className="w-full text-left font-medium text-slate-700 hover:text-[#0baba0] hover:translate-x-1 transition-all cursor-pointer"
                  >
                    Dịch vụ Email Hosting
                  </button>
                  <button
                    onClick={() => handleNav('service-detail', 'viet-noi-dung-website')}
                    className="w-full text-left font-medium text-slate-700 hover:text-[#0baba0] hover:translate-x-1 transition-all cursor-pointer"
                  >
                    Viết nội dung website
                  </button>
                </div>

                {/* Column 3 */}
                <div className="space-y-3">
                  <button
                    onClick={() => handleNav('service-detail', 'dich-vu-hosting')}
                    className="w-full text-left font-medium text-slate-700 hover:text-[#0baba0] hover:translate-x-1 transition-all cursor-pointer"
                  >
                    Dịch vụ Hosting
                  </button>
                  <button
                    onClick={() => handleNav('service-detail', 'dich-vu-vps-nvme')}
                    className="w-full text-left font-medium text-slate-700 hover:text-[#0baba0] hover:translate-x-1 transition-all cursor-pointer"
                  >
                    Dịch vụ VPS NVME
                  </button>
                  <button
                    onClick={() => handleNav('service-detail', 'dich-vu-email-google')}
                    className="w-full text-left font-medium text-slate-700 hover:text-[#0baba0] hover:translate-x-1 transition-all cursor-pointer"
                  >
                    Dịch vụ Email Google
                  </button>
                  <button
                    onClick={() => handleNav('service-detail', 'dich-vu-facebook')}
                    className="w-full text-left font-medium text-slate-700 hover:text-[#0baba0] hover:translate-x-1 transition-all cursor-pointer"
                  >
                    Dịch vụ Facebook
                  </button>
                </div>
              </div>
            )}

          </nav>

          {/* Action button on right: "ĐĂNG KÝ TƯ VẤN" (exact gradient pill button) */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => handleNav('contact')}
              className="btn-brand-gradient px-6 py-2.5 rounded-full font-bold text-xs uppercase tracking-wider text-white shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all cursor-pointer"
            >
              ĐĂNG KÝ TƯ VẤN
            </button>
          </div>

          {/* Mobile hamburger & search */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenSearch}
              className="p-2 text-slate-600 hover:text-[#0baba0]"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-[#0baba0] rounded-lg"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* 3. MOBILE DRAWER WITH ALL ACCORDION SECTIONS */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-4 shadow-xl max-h-[85vh] overflow-y-auto">
          
          <button
            onClick={() => handleNav('contact')}
            className="w-full py-3 btn-brand-gradient text-white rounded-full font-bold text-xs uppercase tracking-wider text-center shadow"
          >
            ĐĂNG KÝ TƯ VẤN NGAY
          </button>

          {/* Mobile Accordion 1: Giao diện theo chủ đề */}
          <div className="border border-slate-100 rounded-xl overflow-hidden">
            <button
              onClick={() => setMobileExpanded(mobileExpanded === 'themeCat' ? null : 'themeCat')}
              className="w-full px-3.5 py-2.5 bg-slate-50 flex items-center justify-between text-xs font-bold text-slate-800"
            >
              <span>Giao diện theo chủ đề</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${mobileExpanded === 'themeCat' ? 'rotate-180' : ''}`} />
            </button>
            {mobileExpanded === 'themeCat' && (
              <div className="p-3 bg-white grid grid-cols-2 gap-2 text-xs">
                {['gioi-thieu-cong-ty', 'thuong-mai-dien-tu', 'bat-dong-san', 'o-to', 'noi-that', 'xay-dung', 'du-lich', 'du-hoc', 'dich-vu-khac'].map((c) => (
                  <button
                    key={c}
                    onClick={() => handleNav('themes', c)}
                    className="text-left py-1 text-slate-600 hover:text-[#0baba0]"
                  >
                    • {c.replace(/-/g, ' ')}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Mobile Accordion 2: Giao diện theo gói */}
          <div className="border border-slate-100 rounded-xl overflow-hidden">
            <button
              onClick={() => setMobileExpanded(mobileExpanded === 'themePkg' ? null : 'themePkg')}
              className="w-full px-3.5 py-2.5 bg-slate-50 flex items-center justify-between text-xs font-bold text-slate-800"
            >
              <div className="flex items-center gap-2">
                <span>Giao diện theo gói</span>
                <span className="px-1.5 py-0.2 bg-rose-500 text-white text-[9px] font-black rounded">HOT</span>
              </div>
              <ChevronDown className={`w-4 h-4 transition-transform ${mobileExpanded === 'themePkg' ? 'rotate-180' : ''}`} />
            </button>
            {mobileExpanded === 'themePkg' && (
              <div className="p-3 bg-white space-y-1.5 text-xs">
                <button onClick={() => handleNav('pricing', 'startup')} className="block text-left w-full text-slate-600 py-1">• Gói Startup (2.5 Tr)</button>
                <button onClick={() => handleNav('pricing', 'pro')} className="block text-left w-full text-slate-600 py-1">• Gói Pro (4.0 Tr)</button>
                <button onClick={() => handleNav('pricing', 'vip')} className="block text-left w-full text-slate-600 py-1">• Các dự án VIP (May đo)</button>
              </div>
            )}
          </div>

          {/* Mobile Accordion 3: Dịch vụ cung cấp (all 12 services) */}
          <div className="border border-slate-100 rounded-xl overflow-hidden">
            <button
              onClick={() => setMobileExpanded(mobileExpanded === 'services' ? null : 'services')}
              className="w-full px-3.5 py-2.5 bg-slate-50 flex items-center justify-between text-xs font-bold text-slate-800"
            >
              <span>Dịch vụ cung cấp (12 dịch vụ)</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${mobileExpanded === 'services' ? 'rotate-180' : ''}`} />
            </button>
            {mobileExpanded === 'services' && (
              <div className="p-3 bg-white grid grid-cols-1 gap-2 text-xs">
                {[
                  { slug: 'thiet-ke-website-tron-goi', title: 'Thiết kế website trọn gói' },
                  { slug: 'dich-vu-hosting', title: 'Dịch vụ Hosting' },
                  { slug: 'dich-vu-ten-mien', title: 'Dịch vụ tên miền' },
                  { slug: 'dich-vu-vps-pro-ssd', title: 'Dịch vụ VPS PRO SSD' },
                  { slug: 'dich-vu-vps-nvme', title: 'Dịch vụ VPS NVME' },
                  { slug: 'dich-vu-vps-gia-re', title: 'Dịch vụ VPS giá rẻ' },
                  { slug: 'dich-vu-email-hosting', title: 'Dịch vụ Email Hosting' },
                  { slug: 'dich-vu-email-google', title: 'Dịch vụ Email Google' },
                  { slug: 'nhan-dien-thuong-hieu', title: 'Nhận diện thương hiệu' },
                  { slug: 'viet-noi-dung-website', title: 'Viết nội dung website' },
                  { slug: 'dich-vu-quang-cao', title: 'Dịch vụ quảng cáo' },
                  { slug: 'dich-vu-facebook', title: 'Dịch vụ Facebook' }
                ].map((s) => (
                  <button
                    key={s.slug}
                    onClick={() => handleNav('service-detail', s.slug)}
                    className="text-left py-1 text-slate-600 hover:text-[#0baba0]"
                  >
                    • {s.title}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Quick static pages */}
          <div className="grid grid-cols-2 gap-2 text-xs pt-1">
            <button onClick={() => handleNav('about')} className="p-2 bg-slate-50 text-slate-700 rounded-lg text-left">Về UniCreation</button>
            <button onClick={() => handleNav('payment')} className="p-2 bg-slate-50 text-slate-700 rounded-lg text-left">Thanh toán</button>
            <button onClick={() => handleNav('news')} className="p-2 bg-slate-50 text-slate-700 rounded-lg text-left">Tin tức & Blog</button>
            <button onClick={() => handleNav('recruitment')} className="p-2 bg-slate-50 text-slate-700 rounded-lg text-left">Tuyển Dụng</button>
            <button onClick={() => handleNav('contact')} className="p-2 bg-slate-50 text-slate-700 rounded-lg text-left">Liên hệ</button>
            <button onClick={onOpenCalculator} className="p-2 bg-teal-50 text-[#0baba0] font-bold rounded-lg text-left">Tính giá web</button>
          </div>

        </div>
      )}

      </header>

      {/* Spacer to prevent layout jump when header switches to fixed */}
      {isScrolled && (
        <div className="h-18 sm:h-20 w-full pointer-events-none -z-10" />
      )}
    </div>
  );
};
