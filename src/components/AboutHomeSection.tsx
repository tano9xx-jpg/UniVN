import React from 'react';
import { motion } from 'framer-motion';
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Zap,
  Headphones
} from 'lucide-react';

interface AboutHomeSectionProps {
  onNavigateToAbout: () => void;
}

export const AboutHomeSection: React.FC<AboutHomeSectionProps> = ({ onNavigateToAbout }) => {
  return (
    <section className="relative w-full">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
        
        {/* =========================================================================
            LEFT COLUMN: ASYMMETRICAL 4-PHOTO COLLAGE (Matching Screenshot 1:1)
            - Top-Left: Wide Team Landscape + Big Curve + Blue Accent Bracket
            - Top-Right: Tall Leader Portrait + Big Curve
            - Bottom-Left: Client Meeting + Star Sparkles (✦ ✦)
            - Bottom-Right: Wide Duo Landscape + Big Curve + Navy Accent Bracket
            - Center: Circular Blue Rotating Stamp Badge
            ========================================================================= */}
        <div className="lg:col-span-6 relative flex items-center justify-center">
          
          {/* Main Asymmetrical Collage Box */}
          <div className="relative w-full max-w-[470px] sm:max-w-[500px] aspect-[1/0.95] sm:aspect-square p-3 sm:p-4 select-none">
            
            {/* Top-Left Logo Green Accent Ribbon/Bracket (Hugging Top-Left Curve) */}
            <div className="absolute top-0 left-0 w-32 sm:w-42 h-32 sm:h-42 bg-[#0baba0] rounded-tl-[85px] sm:rounded-tl-[105px] -z-10 shadow-lg shadow-[#0baba0]/30" />

            {/* Bottom-Right Dark Navy Accent Ribbon/Bracket (Hugging Bottom-Right Curve) */}
            <div className="absolute bottom-0 right-0 w-32 sm:w-42 h-32 sm:h-42 bg-slate-950 rounded-br-[85px] sm:rounded-br-[105px] -z-10 shadow-xl shadow-slate-950/35" />

            {/* 2-Row Asymmetrical Staggered Photo Grid */}
            <div className="relative z-10 w-full h-full flex flex-col gap-3 sm:gap-3.5">
              
              {/* ROW 1: TOP (Team celebration wide ~60% + Leader portrait narrow ~40%) */}
              <div className="flex gap-3 sm:gap-3.5 h-[53%] w-full">
                
                {/* Photo 1: Top-Left (Wide Team Celebration with huge top-left curve) */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.25 }}
                  className="w-[60%] h-full relative rounded-tl-[75px] sm:rounded-tl-[95px] rounded-tr-2xl rounded-bl-2xl rounded-br-2xl overflow-hidden shadow-md border-2 border-white bg-slate-100"
                >
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=700&q=80"
                    alt="Uni Creation Teamwork Celebration"
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/25 via-transparent to-transparent pointer-events-none" />
                </motion.div>

                {/* Photo 2: Top-Right (Tall Executive Leader in suit with huge top-right curve) */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.25 }}
                  className="w-[40%] h-full relative rounded-tr-[75px] sm:rounded-tr-[95px] rounded-tl-2xl rounded-bl-2xl rounded-br-2xl overflow-hidden shadow-md border-2 border-white bg-slate-100"
                >
                  <img
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=500&q=80"
                    alt="Uni Creation Leadership"
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/25 via-transparent to-transparent pointer-events-none" />
                </motion.div>

              </div>

              {/* ROW 2: BOTTOM (Meeting portrait narrow ~42% + Specialists duo wide ~58%) */}
              <div className="flex gap-3 sm:gap-3.5 h-[47%] w-full">
                
                {/* Photo 3: Bottom-Left (Consulting meeting with rounded-bl curve) */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.25 }}
                  className="w-[42%] h-full relative rounded-bl-[40px] sm:rounded-bl-[50px] rounded-tl-2xl rounded-tr-2xl rounded-br-2xl overflow-hidden shadow-md border-2 border-white bg-slate-100"
                >
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=500&q=80"
                    alt="Uni Creation Consulting"
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/25 via-transparent to-transparent pointer-events-none" />
                </motion.div>

                {/* Photo 4: Bottom-Right (Specialists at laptop with huge bottom-right curve) */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.25 }}
                  className="w-[58%] h-full relative rounded-br-[75px] sm:rounded-br-[95px] rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl overflow-hidden shadow-md border-2 border-white bg-slate-100"
                >
                  <img
                    src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=700&q=80"
                    alt="Uni Creation Digital Specialists"
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/25 via-transparent to-transparent pointer-events-none" />
                </motion.div>

              </div>

            </div>

            {/* Central Circular Rotating Logo Green Stamp Badge (Overlapping all 4 photos at junction) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none">
              <div className="relative w-20 sm:w-24 h-20 sm:h-24 rounded-full bg-gradient-to-tr from-[#088c83] to-[#0baba0] p-1 shadow-2xl shadow-[#0baba0]/50 border-3 border-white flex items-center justify-center">
                
                {/* Rotating SVG circular text */}
                <motion.svg
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 18, ease: 'linear' }}
                  className="absolute inset-0 w-full h-full"
                  viewBox="0 0 100 100"
                >
                  <path
                    id="circlePathBadge"
                    d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                    fill="none"
                  />
                  <text className="text-[9px] font-black uppercase tracking-[2.6px] fill-white">
                    <textPath href="#circlePathBadge" startOffset="0%">
                      • UNI CREATION • SINCE 2015 • AGENCY
                    </textPath>
                  </text>
                </motion.svg>

                {/* Inner Center Badge Icon */}
                <div className="w-9 sm:w-11 h-9 sm:h-11 rounded-full bg-slate-950 border border-white/40 flex items-center justify-center shadow-inner">
                  <Sparkles className="w-5 sm:w-6 h-5 sm:h-6 text-[#91c544]" />
                </div>
              </div>
            </div>

            {/* Decorative Sparkle Stars at Bottom-Left Corner (✦ ✦) */}
            <div className="absolute -bottom-4 -left-3 flex flex-col items-start pointer-events-none z-20">
              <motion.div
                animate={{ scale: [1, 1.25, 1], rotate: [0, 15, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
                className="text-2xl sm:text-3xl font-black text-[#0baba0] drop-shadow-sm select-none"
              >
                ✦
              </motion.div>
              <motion.div
                animate={{ scale: [1, 1.2, 1], rotate: [0, -15, 0] }}
                transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut', delay: 0.4 }}
                className="text-base sm:text-lg font-black text-[#91c544] -mt-1 ml-3 drop-shadow-sm select-none"
              >
                ✦
              </motion.div>
            </div>

          </div>

        </div>

        {/* =========================================================================
            RIGHT COLUMN: TYPOGRAPHY, STATS COUNTERS & CEO SIGNATURE
            ========================================================================= */}
        <div className="lg:col-span-6 space-y-6 sm:space-y-7">
          
          {/* Eyebrow Tag */}
          <div className="flex items-center gap-2">
            <span className="text-[#0baba0] font-black text-sm tracking-wider">//</span>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Về Chúng Tôi · About Uni Creation
            </span>
          </div>

          {/* Headline (Transforming Ideas into Digital Reality) */}
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-slate-900 tracking-tight leading-[1.2]">
            Chuyển Hóa Ý Tưởng{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0baba0] via-[#088c83] to-[#91c544]">
              Thành Hiện Thực Số
            </span>
          </h2>

          {/* Description */}
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Trải qua hơn 10 năm hình thành và phát triển không ngừng từ năm 2015, <strong>Uni Creation</strong> tự hào là đối tác chiến lược của hơn <strong>2.500+ doanh nghiệp</strong> trên toàn quốc. Chúng tôi kiến tạo những website độc bản, tốc độ siêu tốc và tối ưu chuyển đổi, lấy triết lý <em>“Cái tâm, cái tầm”</em> làm kim chỉ nam phụng sự khách hàng.
          </p>

          {/* 4 Core Pillars Badges */}
          <div className="grid grid-cols-2 gap-2.5 pt-1">
            <div className="flex items-center gap-2 p-2.5 rounded-xl bg-teal-50/70 border border-teal-100/90 text-slate-800 shadow-xs">
              <ShieldCheck className="w-4 h-4 text-[#0baba0] shrink-0" />
              <span className="text-xs font-semibold">100% Bàn giao mã nguồn</span>
            </div>
            <div className="flex items-center gap-2 p-2.5 rounded-xl bg-emerald-50/70 border border-emerald-100/90 text-slate-800 shadow-xs">
              <CheckCircle2 className="w-4 h-4 text-[#088c83] shrink-0" />
              <span className="text-xs font-semibold">Bảo hành kỹ thuật trọn đời</span>
            </div>
            <div className="flex items-center gap-2 p-2.5 rounded-xl bg-sky-50/70 border border-sky-100/90 text-slate-800 shadow-xs">
              <Zap className="w-4 h-4 text-sky-600 shrink-0" />
              <span className="text-xs font-semibold">PageSpeed chuẩn SEO 90+</span>
            </div>
            <div className="flex items-center gap-2 p-2.5 rounded-xl bg-amber-50/70 border border-amber-100/90 text-slate-800 shadow-xs">
              <Headphones className="w-4 h-4 text-amber-600 shrink-0" />
              <span className="text-xs font-semibold">Hỗ trợ 24/7 dưới 15 phút</span>
            </div>
          </div>

          {/* Key Metrics Row (3 Stats with Elegant Vertical Dividers) */}
          <div className="grid grid-cols-3 gap-3 sm:gap-6 py-4 border-y border-slate-200/90">
            {/* Stat 1 */}
            <div className="space-y-1">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900">
                10<span className="text-[#0baba0]">+</span>
              </div>
              <div className="text-[11px] sm:text-xs text-slate-500 font-semibold leading-tight">
                Năm Kinh Nghiệm
              </div>
            </div>

            {/* Stat 2 with divider */}
            <div className="space-y-1 border-l border-slate-200 pl-3 sm:pl-6">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900">
                2500<span className="text-[#0baba0]">+</span>
              </div>
              <div className="text-[11px] sm:text-xs text-slate-500 font-semibold leading-tight">
                Dự Án Thành Công
              </div>
            </div>

            {/* Stat 3 with divider */}
            <div className="space-y-1 border-l border-slate-200 pl-3 sm:pl-6">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0baba0]">
                99<span className="text-slate-900">%</span>
              </div>
              <div className="text-[11px] sm:text-xs text-slate-500 font-semibold leading-tight">
                Hài Lòng Tuyệt Đối
              </div>
            </div>
          </div>

          {/* Founder Signature & CTA Row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5 pt-2">
            
            {/* Signature Area (Cursive Script & Title) */}
            <div className="space-y-1">
              <div className="font-serif italic text-2xl sm:text-3xl text-slate-900 tracking-wide select-none transform -rotate-1">
                Nguyen Van Tuan
              </div>
              <div className="text-xs text-slate-500 font-medium">
                Nguyễn Văn Tuấn · Founder & CEO Uni Creation
              </div>
            </div>

            {/* Button: Discover More */}
            <button
              onClick={onNavigateToAbout}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold uppercase tracking-wider shadow-md hover:shadow-lg hover:scale-102 transition-all cursor-pointer whitespace-nowrap self-start sm:self-auto"
            >
              <span>Xem Hồ Sơ Năng Lực</span>
              <ArrowRight className="w-4 h-4 text-[#91c544]" />
            </button>

          </div>

        </div>

      </div>
    </section>
  );
};
