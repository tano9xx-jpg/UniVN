import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Building2, ShieldCheck, Award } from 'lucide-react';
import { CLIENT_PARTNERS } from '../data/siteData';
import { CLIENT_PROJECTS, findProjectForPartner, ClientProjectItem } from '../data/clientProjectsData';
import { ClientProjectModal } from './ClientProjectModal';

// Extended list of top tier clients and enterprise partners
const ENTERPRISE_PARTNERS = [
  { name: 'Viettel Telecom', logoText: 'VIETTEL', category: 'Tập đoàn Viễn thông', highlight: true },
  { name: 'Techcombank', logoText: 'TECHCOMBANK', category: 'Ngân hàng TMCP', highlight: true },
  { name: 'VinGroup', logoText: 'VINGROUP', category: 'Tập đoàn Đa ngành', highlight: true },
  { name: 'Sun Group', logoText: 'SUN GROUP', category: 'Du lịch & Bất động sản', highlight: false },
  { name: 'MobiFone', logoText: 'MOBIFONE', category: 'Tổng công ty Viễn thông', highlight: false },
  { name: 'Novaland', logoText: 'NOVALAND', category: 'Tập đoàn Địa ốc', highlight: false },
  { name: 'VPBank', logoText: 'VPBANK', category: 'Ngân hàng Việt Nam Thịnh Vượng', highlight: true },
  { name: 'Masan Group', logoText: 'MASAN GROUP', category: 'Hàng tiêu dùng & Bán lẻ', highlight: false },
  { name: 'Cen Group', logoText: 'CEN GROUP', category: 'Tập đoàn Bất động sản', highlight: false },
  { name: 'Lumi Smart Home', logoText: 'LUMI VIETNAM', category: 'Nhà thông minh IoT', highlight: true },
  { name: 'Scots English', logoText: 'SCOTS ENGLISH', category: 'Hệ thống Anh ngữ Úc', highlight: false },
  { name: 'FPT Skillking', logoText: 'SKILLKING', category: 'Đào tạo Digital Mkt', highlight: true },
  { name: 'Gentis', logoText: 'GENTIS', category: 'Y tế & Di truyền học', highlight: false },
  { name: 'Bảo Việt Life', logoText: 'BẢO VIỆT LIFE', category: 'Tài chính & Bảo hiểm', highlight: true },
  { name: 'Hoà Bình Minh', logoText: 'HOÀ BÌNH MINH', category: 'Ô tô & Vật liệu XD', highlight: false },
  { name: 'SmartMen', logoText: 'SMARTMEN', category: 'Thời trang nam cao cấp', highlight: false },
  { name: 'GTE Media', logoText: 'GTE MEDIA', category: 'Truyền thông số', highlight: false },
  { name: 'Luxuryfan', logoText: 'LUXURYFAN', category: 'Nội thất & Quạt Mỹ', highlight: false },
  { name: 'VBI Bảo Hiểm', logoText: 'VBI VIETINBANK', category: 'Bảo hiểm Ngân hàng', highlight: false },
  { name: 'Emera Group', logoText: 'EMERA GROUP', category: 'Bất động sản cao cấp', highlight: false },
  { name: 'TCE Machinery', logoText: 'TCE SANY', category: 'Máy công trình quốc tế', highlight: false },
  { name: 'Dicom IoT', logoText: 'DICOM IOT', category: 'Công nghệ nhà thông minh', highlight: false },
  { name: 'Sông Cầu Green', logoText: 'SÔNG CẦU GREEN', category: 'Năng lượng tái tạo', highlight: false },
  { name: 'Bekids Education', logoText: 'BEKIDS', category: 'Giáo dục sớm & Tư duy', highlight: false }
];

export const TrustedPartnersSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ClientProjectItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenProject = (partnerIdentifier: string) => {
    const proj = findProjectForPartner(partnerIdentifier);
    setSelectedProject(proj);
    setIsModalOpen(true);
  };

  const handlePrev = () => {
    if (!selectedProject) return;
    const currentIndex = CLIENT_PROJECTS.findIndex(p => p.id === selectedProject.id);
    const prevIndex = (currentIndex - 1 + CLIENT_PROJECTS.length) % CLIENT_PROJECTS.length;
    setSelectedProject(CLIENT_PROJECTS[prevIndex]);
  };

  const handleNext = () => {
    if (!selectedProject) return;
    const currentIndex = CLIENT_PROJECTS.findIndex(p => p.id === selectedProject.id);
    const nextIndex = (currentIndex + 1) % CLIENT_PROJECTS.length;
    setSelectedProject(CLIENT_PROJECTS[nextIndex]);
  };

  // Split into 2 rows for opposite scrolling directions
  const row1 = ENTERPRISE_PARTNERS.slice(0, 12);
  const row2 = ENTERPRISE_PARTNERS.slice(12);

  // Duplicate arrays to ensure seamless infinite looping marquee
  const marqueeRow1 = [...row1, ...row1, ...row1];
  const marqueeRow2 = [...row2, ...row2, ...row2];

  return (
    <div className="w-full space-y-8 sm:space-y-10">
      
      {/* =========================================================================
          TIÊU ĐỀ: CHUẨN ĐỒNG BỘ 100% VỚI MỤC "DỊCH VỤ CỦA CHÚNG TÔI"
          ========================================================================= */}
      <div className="text-center max-w-2xl mx-auto space-y-2.5 px-4">
        {/* Top Badge matching CoreServicesGrid */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#0baba0]/10 border border-[#0baba0]/30 rounded-full text-xs font-semibold text-[#088c83]">
          <Sparkles className="w-3.5 h-3.5 text-[#91c544]" />
          <span>Hơn 2.500+ Doanh Nghiệp Đồng Hành</span>
        </div>

        {/* Main H2 Heading matching CoreServicesGrid */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
          Được Tin Tưởng Bởi Hàng Nghìn Doanh Nghiệp
        </h2>

        {/* Subtitle matching CoreServicesGrid typography */}
        <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto">
          Tự hào kiến tạo giải pháp chuyển đổi số và phát triển thương hiệu bền vững cho các tập đoàn, doanh nghiệp và tổ chức hàng đầu Việt Nam.
        </p>

        {/* Interactive Click Hint */}
        <div className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-[#088c83] bg-teal-50 px-3 py-1 rounded-full border border-teal-200/60 shadow-2xs">
          <Sparkles className="w-3.5 h-3.5 text-[#91c544]" />
          <span>Bấm vào logo bất kỳ để xem hồ sơ dự án & website thực tế</span>
        </div>
      </div>

      {/* =========================================================================
          LOGO CHẠY NGANG (HORIZONTAL CONTINUOUS MARQUEE CAROUSEL)
          ========================================================================= */}
      <div className="relative w-full overflow-hidden py-3 group select-none">
        
        {/* Left & Right Soft Fade Masks (Zero hard edge cut-off) */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-28 md:w-36 bg-gradient-to-r from-white via-white/80 to-transparent z-20" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-28 md:w-36 bg-gradient-to-l from-white via-white/80 to-transparent z-20" />

        <div className="space-y-3.5 sm:space-y-4">
          
          {/* TRACK 1: RUNNING LEFT */}
          <motion.div
            className="flex items-center gap-3.5 sm:gap-4 shrink-0 w-max"
            animate={{ x: ['0%', '-33.333%'] }}
            transition={{
              repeat: Infinity,
              duration: 35,
              ease: 'linear'
            }}
            whileHover={{ transition: { duration: 80 } }} // Slow down on hover
          >
            {marqueeRow1.map((partner, index) => (
              <div
                key={`row1-${index}`}
                onClick={() => handleOpenProject(partner.name)}
                title={`Bấm để xem thông tin dự án ${partner.name}`}
                className="group/card flex items-center gap-3 px-5 sm:px-6 py-3 rounded-2xl bg-white border border-slate-200/80 hover:border-[#0baba0] hover:shadow-lg hover:shadow-[#0baba0]/15 hover:-translate-y-0.5 active:scale-95 transition-all duration-300 cursor-pointer shrink-0 min-w-[210px] sm:min-w-[240px]"
              >
                {/* Brand Initial Badge with Logo Green Accent */}
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-slate-50 to-teal-50/60 border border-slate-200/80 group-hover/card:border-[#0baba0]/40 group-hover/card:bg-[#0baba0]/10 flex items-center justify-center font-black text-slate-700 group-hover/card:text-[#0baba0] transition-colors shrink-0 text-sm">
                  {partner.logoText.slice(0, 2)}
                </div>

                <div className="text-left overflow-hidden">
                  <div className="font-extrabold text-xs sm:text-sm text-slate-800 group-hover/card:text-[#0baba0] transition-colors tracking-tight truncate font-mono">
                    {partner.logoText}
                  </div>
                  <div className="text-[10px] sm:text-[11px] text-slate-400 group-hover/card:text-slate-600 transition-colors truncate">
                    {partner.category}
                  </div>
                </div>

                {partner.highlight && (
                  <span className="ml-auto w-1.5 h-1.5 rounded-full bg-[#91c544] shrink-0" />
                )}
              </div>
            ))}
          </motion.div>

          {/* TRACK 2: RUNNING RIGHT (OPPOSITE DIRECTION) */}
          <motion.div
            className="flex items-center gap-3.5 sm:gap-4 shrink-0 w-max"
            animate={{ x: ['-33.333%', '0%'] }}
            transition={{
              repeat: Infinity,
              duration: 38,
              ease: 'linear'
            }}
            whileHover={{ transition: { duration: 80 } }} // Slow down on hover
          >
            {marqueeRow2.map((partner, index) => (
              <div
                key={`row2-${index}`}
                onClick={() => handleOpenProject(partner.name)}
                title={`Bấm để xem thông tin dự án ${partner.name}`}
                className="group/card flex items-center gap-3 px-5 sm:px-6 py-3 rounded-2xl bg-white border border-slate-200/80 hover:border-[#0baba0] hover:shadow-lg hover:shadow-[#0baba0]/15 hover:-translate-y-0.5 active:scale-95 transition-all duration-300 cursor-pointer shrink-0 min-w-[210px] sm:min-w-[240px]"
              >
                {/* Brand Initial Badge */}
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-slate-50 to-teal-50/60 border border-slate-200/80 group-hover/card:border-[#0baba0]/40 group-hover/card:bg-[#0baba0]/10 flex items-center justify-center font-black text-slate-700 group-hover/card:text-[#0baba0] transition-colors shrink-0 text-sm">
                  {partner.logoText.slice(0, 2)}
                </div>

                <div className="text-left overflow-hidden">
                  <div className="font-extrabold text-xs sm:text-sm text-slate-800 group-hover/card:text-[#0baba0] transition-colors tracking-tight truncate font-mono">
                    {partner.logoText}
                  </div>
                  <div className="text-[10px] sm:text-[11px] text-slate-400 group-hover/card:text-slate-600 transition-colors truncate">
                    {partner.category}
                  </div>
                </div>

                {partner.highlight && (
                  <span className="ml-auto w-1.5 h-1.5 rounded-full bg-[#0baba0] shrink-0" />
                )}
              </div>
            ))}
          </motion.div>

        </div>

        {/* Small Bottom Trust Indicators */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs font-semibold text-slate-500">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#0baba0]" />
            <span>100% Doanh Nghiệp Hài Lòng Vận Hành</span>
          </div>
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-[#91c544]" />
            <span>Đối Tác Hạ Tầng Viettel & VNPT IDC</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#91c544] animate-ping" />
            <span>Hỗ Trợ Kỹ Thuật 24/7/365</span>
          </div>
        </div>

      </div>

      {/* Client Project Details Modal Popup */}
      <ClientProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </div>
  );
};
