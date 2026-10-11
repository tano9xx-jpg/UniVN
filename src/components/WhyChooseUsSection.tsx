import React from 'react';
import { CORE_FEATURES } from '../data/siteData';
import {
  Layout,
  Search,
  Smartphone,
  Zap,
  ShieldCheck,
  Code,
  HeartHandshake,
  Clock,
  CheckCircle2,
  Sparkles,
  Award,
  Users,
  Check,
  TrendingUp
} from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Layout: <Layout className="w-5 h-5 text-[#0baba0]" />,
  Search: <Search className="w-5 h-5 text-[#91c544]" />,
  Smartphone: <Smartphone className="w-5 h-5 text-[#0baba0]" />,
  Zap: <Zap className="w-5 h-5 text-amber-500" />,
  ShieldCheck: <ShieldCheck className="w-5 h-5 text-emerald-600" />,
  Code: <Code className="w-5 h-5 text-[#0baba0]" />,
  HeartHandshake: <HeartHandshake className="w-5 h-5 text-rose-500" />,
  Clock: <Clock className="w-5 h-5 text-[#91c544]" />
};

export const WhyChooseUsSection: React.FC<{
  onConsult?: () => void;
}> = ({ onConsult }) => {
  return (
    <section className="space-y-12">
      {/* Top Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#0baba0]/10 border border-[#0baba0]/30 rounded-full text-xs font-semibold text-[#088c83]">
          <Sparkles className="w-3.5 h-3.5 text-[#91c544]" />
          <span>Lợi Thế Cạnh Tranh & Cam Kết Vàng</span>
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
          Vì Sao Hơn 2.500+ Doanh Nghiệp Chọn Uni Creation?
        </h2>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          Với hơn 10 năm kinh nghiệm trong lĩnh vực giải pháp số, chúng tôi đặt chất lượng thực tế và sự phát triển bền vững của khách hàng làm thước đo thành công.
        </p>
      </div>

      {/* 4 Standout Pillar Cards with Live Metrics */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        <div className="bg-white rounded-3xl p-6 border border-teal-100 shadow-sm hover:shadow-md transition-shadow text-center">
          <div className="w-12 h-12 mx-auto rounded-2xl bg-teal-50 text-[#0baba0] flex items-center justify-center mb-3">
            <Award className="w-6 h-6" />
          </div>
          <div className="text-3xl sm:text-4xl font-black text-slate-900">
            10+ <span className="text-base font-bold text-[#0baba0]">Năm</span>
          </div>
          <div className="text-xs font-bold text-slate-700 mt-1">Kinh Nghiệm Chuyên Sâu</div>
          <p className="text-[11px] text-slate-500 mt-1">Hoạt động uy tín từ năm 2014</p>
        </div>

        <div className="bg-white rounded-3xl p-6 border border-emerald-100 shadow-sm hover:shadow-md transition-shadow text-center">
          <div className="w-12 h-12 mx-auto rounded-2xl bg-emerald-50 text-[#91c544] flex items-center justify-center mb-3">
            <Users className="w-6 h-6" />
          </div>
          <div className="text-3xl sm:text-4xl font-black text-slate-900">
            2.500+ <span className="text-base font-bold text-[#91c544]">Dự Án</span>
          </div>
          <div className="text-xs font-bold text-slate-700 mt-1">Khách Hàng Toàn Quốc</div>
          <p className="text-[11px] text-slate-500 mt-1">Đa dạng hơn 30+ ngành nghề</p>
        </div>

        <div className="bg-white rounded-3xl p-6 border border-cyan-100 shadow-sm hover:shadow-md transition-shadow text-center">
          <div className="w-12 h-12 mx-auto rounded-2xl bg-cyan-50 text-cyan-600 flex items-center justify-center mb-3">
            <TrendingUp className="w-6 h-6" />
          </div>
          <div className="text-3xl sm:text-4xl font-black text-slate-900">
            99.8%
          </div>
          <div className="text-xs font-bold text-slate-700 mt-1">Tỷ Lệ Hài Lòng</div>
          <p className="text-[11px] text-slate-500 mt-1">Khách hàng tiếp tục gia hạn</p>
        </div>

        <div className="bg-white rounded-3xl p-6 border border-blue-100 shadow-sm hover:shadow-md transition-shadow text-center">
          <div className="w-12 h-12 mx-auto rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-3">
            <Clock className="w-6 h-6" />
          </div>
          <div className="text-3xl sm:text-4xl font-black text-slate-900">
            24/7
          </div>
          <div className="text-xs font-bold text-slate-700 mt-1">Hỗ Trợ Kỹ Thuật</div>
          <p className="text-[11px] text-slate-500 mt-1">Phản hồi trong 15-30 phút</p>
        </div>
      </div>

      {/* 8 Core Commitments Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {CORE_FEATURES.map((feat, idx) => (
          <div
            key={idx}
            className="bg-white rounded-3xl p-6 border border-slate-200/90 hover:border-[#0baba0] shadow-2xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-teal-50 group-hover:bg-[#0baba0]/10 flex items-center justify-center transition-colors mb-4">
                {iconMap[feat.icon] || <Check className="w-5 h-5 text-[#0baba0]" />}
              </div>
              <h3 className="font-bold text-base text-slate-900 group-hover:text-[#0baba0] transition-colors leading-snug">
                {feat.title}
              </h3>
              <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                {feat.desc}
              </p>
            </div>
            
            <div className="pt-4 mt-4 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-bold text-emerald-700">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#91c544]" />
              <span>Tiêu chuẩn cam kết chính thức</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
