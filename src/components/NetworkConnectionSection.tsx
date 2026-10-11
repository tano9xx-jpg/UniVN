import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Users,
  Zap,
  TrendingUp,
  Globe
} from 'lucide-react';

interface NetworkConnectionSectionProps {
  onLearnMore?: () => void;
  onConsult?: () => void;
}

interface ClientNode {
  id: string;
  name: string;
  role: string;
  company: string;
  result: string;
  avatar: string;
  x: number;
  y: number;
}

export const NetworkConnectionSection: React.FC<NetworkConnectionSectionProps> = ({
  onLearnMore,
  onConsult
}) => {
  const [activeNode, setActiveNode] = useState<string | null>(null);

  // Center hub coordinate in 1000 x 480 viewBox
  const HUB_CX = 500;
  const HUB_CY = 240;

  // 10 Client Nodes positioned symmetrically & organically around center hub
  const rawNodes = [
    // Left hemisphere (5 clients)
    {
      id: 'c1',
      name: 'Nguyễn Hoàng Nam',
      role: 'CEO & Founder',
      company: 'TechCorp Solutions',
      result: '+240% Doanh số online',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
      x: 120,
      y: 90
    },
    {
      id: 'c2',
      name: 'Trần Mai Anh',
      role: 'Sáng lập chuỗi Spa',
      company: 'Aura Luxury Spa',
      result: 'Gấp 3x lượng đặt lịch',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80',
      x: 270,
      y: 135
    },
    {
      id: 'c3',
      name: 'Lê Văn Tuấn',
      role: 'Giám đốc Điều hành',
      company: 'Tuấn Hồng Construction',
      result: 'Top 1 Google ngành đá hoa cương',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
      x: 95,
      y: 255
    },
    {
      id: 'c4',
      name: 'Đặng Thanh Thảo',
      role: 'Chủ thương hiệu thời trang',
      company: 'Mina Fashion Studio',
      result: '+18.000 Đơn hàng / tháng',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
      x: 230,
      y: 370
    },
    {
      id: 'c5',
      name: 'Phạm Đức Thịnh',
      role: 'Tổng giám đốc',
      company: 'Miyagi Furniture',
      result: 'Tiếp cận 120.000+ khách VIP',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
      x: 360,
      y: 425
    },
    // Right hemisphere (5 clients)
    {
      id: 'c6',
      name: 'Vũ Minh Khang',
      role: 'Giám đốc Y khoa',
      company: 'Green Pharmacy & Clinic',
      result: 'Tự động hóa 100% hồ sơ',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80',
      x: 740,
      y: 95
    },
    {
      id: 'c7',
      name: 'Hoàng Bích Ngọc',
      role: 'Phó Tổng Giám Đốc',
      company: 'Vinacom Global Trade',
      result: 'Mở rộng thị trường xuất khẩu',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
      x: 885,
      y: 155
    },
    {
      id: 'c8',
      name: 'Đỗ Hữu Kiên',
      role: 'Chủ chuỗi Nhà hàng',
      company: 'Sài Gòn Delights F&B',
      result: 'Tăng 45% khách đặt bàn online',
      avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=80',
      x: 910,
      y: 285
    },
    {
      id: 'c9',
      name: 'Bùi Lan Phương',
      role: 'Trưởng ban Marketing',
      company: 'EcoGreen Real Estate',
      result: 'Tối ưu 70% chi phí Ads',
      avatar: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=200&q=80',
      x: 770,
      y: 395
    },
    {
      id: 'c10',
      name: 'Ngô Quốc Bảo',
      role: 'Sáng lập viên',
      company: 'EduSmart Academy',
      result: '+30.000 Học viên đăng ký',
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80',
      x: 640,
      y: 430
    }
  ];

  // Helper to calculate ultra-smooth S-curve cubic bezier tangents
  const getSmoothCurve = (nx: number, ny: number) => {
    const dx = nx - HUB_CX;
    const dy = ny - HUB_CY;
    // Inflection control points with soft horizontal tangents
    const cp1x = HUB_CX + dx * 0.45;
    const cp1y = HUB_CY + dy * 0.08;
    const cp2x = HUB_CX + dx * 0.58;
    const cp2y = ny;
    return `M ${HUB_CX} ${HUB_CY} C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${nx} ${ny}`;
  };

  const clientNodes = rawNodes.map((n) => ({
    ...n,
    curve: getSmoothCurve(n.x, n.y)
  }));

  return (
    <div className="w-full select-none">
      
      {/* =========================================================================
          FULL SECTION: BỎ HOÀN TOÀN KHUNG BO VIỀN (ZERO ENCLOSING BOX FRAME)
          ========================================================================= */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">
        
        {/* Section Header Row: Left Title + Right Description & Dual CTA */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-2 border-b border-slate-200/60">
          
          {/* Left Headline */}
          <div className="max-w-xl space-y-2.5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#0baba0]/10 border border-[#0baba0]/30 rounded-full text-xs font-semibold text-[#088c83]">
              <Zap className="w-3.5 h-3.5 text-[#91c544]" />
              <span>Giải Pháp Kết Nối Toàn Diện</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-black text-slate-900 tracking-tight leading-[1.2]">
              <span className="text-[#0baba0]">Uni Creation</span> và Giải Pháp{' '}
              <span className="text-slate-900">Kết Nối Khách Hàng?</span>
            </h2>
          </div>

          {/* Right Summary & Action Buttons */}
          <div className="max-w-md space-y-3.5">
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Uni Creation là nền tảng giải pháp số toàn diện, kết nối doanh nghiệp với hàng triệu khách hàng tiềm năng thông qua website chuẩn SEO, hạ tầng cloud siêu tốc và chiến lược marketing đa kênh.
            </p>

            <div className="flex items-center gap-3 pt-0.5">
              <button
                onClick={onLearnMore}
                className="px-5 sm:px-6 py-2.5 rounded-xl bg-[#0baba0] hover:bg-[#088c83] text-white text-xs font-bold shadow-md hover:shadow-lg hover:shadow-[#0baba0]/25 transition-all cursor-pointer whitespace-nowrap"
              >
                Tìm Hiểu Thêm
              </button>
              <button
                onClick={onConsult}
                className="px-5 sm:px-6 py-2.5 rounded-xl bg-white hover:bg-teal-50/50 text-slate-700 border border-slate-300 hover:border-[#0baba0] hover:text-[#0baba0] text-xs font-bold shadow-2xs transition-all cursor-pointer whitespace-nowrap"
              >
                Tư Vấn Miễn Phí
              </button>
            </div>
          </div>

        </div>

        {/* =====================================================================
            INTERACTIVE ANIMATED NETWORK CANVAS (SMOOTH GREEN CURVES + PARTICLES)
            ===================================================================== */}
        <div className="relative w-full aspect-[2.1/1] min-h-[320px] sm:min-h-[420px] lg:min-h-[480px] max-h-[520px] flex items-center justify-center rounded-3xl bg-gradient-to-b from-white via-teal-50/20 to-white/40 overflow-hidden">
          
          {/* Subtle Technical Dot Grid with Logo Green Color */}
          <div
            className="absolute inset-0 pointer-events-none opacity-25"
            style={{
              backgroundImage: 'radial-gradient(#0baba0 1px, transparent 1px)',
              backgroundSize: '24px 24px'
            }}
          />

          {/* SVG Smooth Connecting Curves & Flowing Energy Streams */}
          <svg
            viewBox="0 0 1000 480"
            className="absolute inset-0 w-full h-full pointer-events-none"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              {/* Glow filter for active pulses (Brand Green / Lime) */}
              <filter id="glowPulseGreen" x="-30%" y="-30%" width="160%" height="160%">
                <feGaussianBlur stdDeviation="3.5" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>

              {/* Linear gradient for connector curves matching logo colors */}
              <linearGradient id="curveGradientGreen" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0baba0" stopOpacity="0.3" />
                <stop offset="50%" stopColor="#91c544" stopOpacity="0.75" />
                <stop offset="100%" stopColor="#0baba0" stopOpacity="0.3" />
              </linearGradient>

              {/* Radial gradient background aura for center hub */}
              <radialGradient id="centerHubAura" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#0baba0" stopOpacity="0.25" />
                <stop offset="60%" stopColor="#91c544" stopOpacity="0.1" />
                <stop offset="100%" stopColor="#0baba0" stopOpacity="0" />
              </radialGradient>
            </defs>

            {/* Central Hub Background Aura */}
            <circle cx={HUB_CX} cy={HUB_CY} r="140" fill="url(#centerHubAura)" />

            {/* 1. Base Silky Smooth Connecting Bezier Curves */}
            {clientNodes.map((node) => (
              <path
                key={`path-${node.id}`}
                d={node.curve}
                stroke="url(#curveGradientGreen)"
                strokeWidth={activeNode === node.id ? '2.8' : '2'}
                strokeLinecap="round"
                className="transition-all duration-300"
                opacity={activeNode === node.id ? 1 : 0.65}
              />
            ))}

            {/* 2. Flowing Animated Dashes / Motion Stream (Brand Teal & Lime) */}
            {clientNodes.map((node) => (
              <path
                key={`dash-${node.id}`}
                d={node.curve}
                stroke="#0baba0"
                strokeWidth="2.2"
                strokeDasharray="6 14"
                strokeLinecap="round"
                opacity={activeNode === node.id ? '1' : '0.85'}
              >
                <animate
                  attributeName="stroke-dashoffset"
                  values="0; -40"
                  dur="1.8s"
                  repeatCount="indefinite"
                />
              </path>
            ))}

            {/* 3. Glowing Energy Particles Moving between Clients & Company */}
            {clientNodes.map((node, i) => (
              <circle
                key={`particle-${node.id}`}
                r="3.5"
                fill="#91c544"
                filter="url(#glowPulseGreen)"
              >
                <animateMotion
                  path={node.curve}
                  dur={`${2.2 + (i % 3) * 0.4}s`}
                  repeatCount="indefinite"
                  keyPoints="0;1"
                  keyTimes="0;1"
                />
              </circle>
            ))}
          </svg>

          {/* ===================================================================
              CENTRAL HUB: UNI CREATION LOGO / SMILE BADGE WITH EXPANDING RIPPLES
              =================================================================== */}
          <div
            className="absolute z-20 flex flex-col items-center justify-center cursor-pointer pointer-events-auto group"
            style={{
              left: `${(HUB_CX / 1000) * 100}%`,
              top: `${(HUB_CY / 480) * 100}%`,
              transform: 'translate(-50%, -50%)'
            }}
            onClick={onConsult}
          >
            {/* Expanding Ripple Wave Rings (Brand Teal & Lime Green) */}
            <motion.div
              animate={{ scale: [1, 1.8, 2.2], opacity: [0.6, 0.2, 0] }}
              transition={{ repeat: Infinity, duration: 2.8, ease: 'easeOut' }}
              className="absolute w-20 sm:w-28 h-20 sm:h-28 rounded-full bg-[#0baba0]/20 -z-10"
            />
            <motion.div
              animate={{ scale: [1, 1.4, 1.8], opacity: [0.8, 0.3, 0] }}
              transition={{ repeat: Infinity, duration: 2.8, delay: 0.8, ease: 'easeOut' }}
              className="absolute w-20 sm:w-28 h-20 sm:h-28 rounded-full bg-[#91c544]/25 -z-10"
            />

            {/* Central Badge Outer Glow (Logo Gradient: Teal to Lime) */}
            <div className="relative w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 rounded-full bg-gradient-to-tr from-[#088c83] via-[#0baba0] to-[#91c544] p-1.5 shadow-2xl shadow-[#0baba0]/40 border-4 border-white flex items-center justify-center group-hover:scale-108 transition-transform duration-300">
              
              {/* Central Mascot / Brand Smile Icon */}
              <div className="w-full h-full rounded-full bg-white flex items-center justify-center shadow-inner">
                <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-2xl bg-[#0baba0] text-white flex flex-col items-center justify-center shadow-md">
                  {/* Friendly Smile Logo */}
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-white" />
                    <span className="w-1.5 h-1.5 rounded-full bg-white" />
                  </div>
                  <div className="w-4 h-2 border-b-2 border-white rounded-b-full" />
                </div>
              </div>

            </div>

            {/* Center Company Label */}
            <div className="mt-2.5 text-center pointer-events-none">
              <span className="px-3 py-0.5 rounded-full bg-teal-50 border border-teal-200/90 text-[10px] sm:text-xs font-black text-[#088c83] shadow-2xs whitespace-nowrap">
                Uni Creation Hub
              </span>
            </div>
          </div>

          {/* ===================================================================
              PERIPHERAL CLIENT AVATAR NODES (Positioned Relative to 1000x480)
              =================================================================== */}
          {clientNodes.map((node) => {
            const leftPercent = (node.x / 1000) * 100;
            const topPercent = (node.y / 480) * 100;
            const isHovered = activeNode === node.id;

            return (
              <div
                key={node.id}
                className="absolute z-20 -translate-x-1/2 -translate-y-1/2 pointer-events-auto"
                style={{
                  left: `${leftPercent}%`,
                  top: `${topPercent}%`
                }}
                onMouseEnter={() => setActiveNode(node.id)}
                onMouseLeave={() => setActiveNode(null)}
              >
                <motion.div
                  animate={{
                    y: [0, -5, 0]
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 3 + (node.x % 3),
                    ease: 'easeInOut'
                  }}
                  whileHover={{ scale: 1.25 }}
                  className="relative cursor-pointer group"
                >
                  {/* Avatar Circle Container with Logo Green Border & Glow */}
                  <div className="w-9 sm:w-12 md:w-14 h-9 sm:h-12 md:h-14 rounded-full p-0.5 bg-white border-2 border-[#0baba0]/50 shadow-md group-hover:border-[#0baba0] group-hover:shadow-lg group-hover:shadow-[#0baba0]/30 transition-all duration-200 overflow-hidden">
                    <img
                      src={node.avatar}
                      alt={node.name}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>

                  {/* Online Glowing Pulse Dot (Lime Green) */}
                  <span className="absolute bottom-0 right-0 w-2.5 sm:w-3.5 h-2.5 sm:h-3.5 rounded-full bg-[#91c544] border-2 border-white shadow-xs" />

                  {/* Floating Info Tooltip on Hover / Touch */}
                  <div
                    className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 sm:w-56 p-2.5 rounded-2xl bg-slate-900/95 backdrop-blur-md text-white text-[10px] sm:text-xs shadow-xl transition-all duration-200 pointer-events-none z-30 ${
                      isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-95 hidden sm:block'
                    }`}
                  >
                    <div className="font-bold text-white leading-tight">{node.name}</div>
                    <div className="text-[9px] sm:text-[10px] text-teal-300 font-medium">
                      {node.role} · {node.company}
                    </div>
                    <div className="mt-1 pt-1 border-t border-slate-700/80 flex items-center gap-1 text-[9px] sm:text-[10px] text-[#91c544] font-semibold">
                      <TrendingUp className="w-3 h-3 shrink-0" />
                      <span>{node.result}</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            );
          })}

        </div>

        {/* Footer Metrics Row */}
        <div className="pt-2 border-t border-slate-200/60 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#91c544] animate-pulse" />
            <span><strong>2.500+ Khách Hàng</strong> đang vận hành hệ thống cùng Uni Creation</span>
          </div>

          <div className="flex items-center gap-4 text-[11px] sm:text-xs font-semibold text-slate-600">
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#0baba0]" />
              Tốc độ phản hồi &lt;15 phút
            </span>
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#0baba0]" />
              Hỗ trợ kỹ thuật 24/7/365
            </span>
          </div>
        </div>

      </div>

    </div>
  );
};
