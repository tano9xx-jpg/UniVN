import React, { useState } from 'react';
import { OFFICIAL_POLICIES } from '../data/policiesData';
import { ShieldCheck, FileText, Lock, BookOpen, Scale, CheckCircle2, Phone, Download, Printer } from 'lucide-react';
import { COMPANY_INFO } from '../data/siteData';

export const PolicyView: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('warranty');

  const tabs = [
    { id: 'warranty', label: 'Chính Sách Bảo Hành Trọn Đời', icon: ShieldCheck },
    { id: 'terms', label: 'Quy Định Sử Dụng Dịch Vụ', icon: FileText },
    { id: 'privacy', label: 'Chính Sách Bảo Mật Thông Tin', icon: Lock },
    { id: 'general', label: 'Chính Sách & Quy Định Chung', icon: Scale },
    { id: 'bctGuide', label: 'Hướng Dẫn & Bộ Công Thương', icon: BookOpen }
  ];

  const currentPolicy = OFFICIAL_POLICIES[activeTab] || OFFICIAL_POLICIES['warranty'];

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="max-w-5xl mx-auto space-y-10">
      {/* Header Banner */}
      <div className="bg-gradient-to-br from-white via-teal-50/50 to-emerald-50/40 rounded-3xl p-8 sm:p-12 border border-[#0baba0]/20 shadow-md relative overflow-hidden">
        <div className="max-w-3xl space-y-3 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#0baba0]/10 border border-[#0baba0]/30 rounded-full text-xs font-semibold text-[#088c83]">
            <Scale className="w-3.5 h-3.5 text-[#91c544]" />
            <span>Pháp Lý & Tiêu Chuẩn Dịch Vụ · Uni Creation</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Chính Sách, Điều Khoản & Quy Định Dịch Vụ
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Uni Creation cam kết minh bạch 100% về điều khoản pháp lý, bảo vệ quyền lợi hợp pháp của khách hàng, bàn giao toàn bộ mã nguồn và đồng hành kỹ thuật trọn đời.
          </p>
        </div>
      </div>

      {/* Tabs Bar */}
      <div className="flex flex-wrap items-center justify-start sm:justify-center gap-2 p-1.5 bg-slate-100/80 rounded-2xl border border-slate-200">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
                isActive
                  ? 'bg-white text-[#088c83] shadow-sm border border-teal-200'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
              }`}
            >
              <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-[#0baba0]' : 'text-slate-400'}`} />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Policy Content Card */}
      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-sm space-y-6">
        {/* Document Header */}
        <div className="border-b border-slate-100 pb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#0baba0]">Văn Bản Chính Thức</span>
            <h2 className="text-2xl font-extrabold text-slate-900 mt-1">
              {currentPolicy.title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              {currentPolicy.subtitle}
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 rounded-xl text-xs font-semibold cursor-pointer transition-colors"
            >
              <Printer className="w-3.5 h-3.5 text-slate-500" />
              <span>In văn bản</span>
            </button>
          </div>
        </div>

        {/* Formatted Text Body */}
        <div className="text-sm text-slate-700 leading-relaxed space-y-4">
          {currentPolicy.content.split('\n\n').map((paragraph, pIdx) => {
            const cleanP = paragraph.trim();
            if (!cleanP) return null;
            if (cleanP.startsWith('###')) {
              return (
                <h3 key={pIdx} className="text-base sm:text-lg font-bold text-slate-900 pt-3 border-t border-slate-100 mt-5">
                  {cleanP.replace('###', '').trim()}
                </h3>
              );
            }
            if (cleanP.startsWith('Điều ') || cleanP.startsWith('1.') || cleanP.startsWith('2.') || cleanP.startsWith('3.') || cleanP.startsWith('4.') || cleanP.startsWith('5.')) {
              return (
                <h4 key={pIdx} className="text-sm font-bold text-slate-900 pt-2 text-[#088c83]">
                  {cleanP}
                </h4>
              );
            }
            return (
              <p key={pIdx} className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                {cleanP}
              </p>
            );
          })}
        </div>

        {/* Commitment Highlight Callout */}
        <div className="p-5 bg-gradient-to-r from-teal-50/70 via-emerald-50/40 to-white rounded-2xl border border-teal-200/80 space-y-3">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-[#0baba0]" />
            <span className="font-bold text-slate-900 text-sm">Cam Kết Trực Tiếp Từ Ban Giám Đốc Uni Creation</span>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed">
            Mọi dịch vụ do Uni Creation cung cấp đều được ký kết hợp đồng pháp lý đầy đủ, xuất hóa đơn tài chính VAT theo yêu cầu, bàn giao toàn bộ mã nguồn không mã hóa và có đầu mối hỗ trợ kỹ thuật 24/7.
          </p>
          <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-semibold text-[#088c83]">
            <span>Tổng đài pháp lý: {COMPANY_INFO.hotline}</span>
            <span>·</span>
            <span>Email hỗ trợ: {COMPANY_INFO.email}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
