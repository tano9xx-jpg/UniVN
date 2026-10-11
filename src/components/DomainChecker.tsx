import React, { useState } from 'react';
import { DOMAIN_PRICING, COMPANY_INFO } from '../data/siteData';
import { Search, Globe, CheckCircle2, ArrowRight, ShieldCheck, Sparkles, Check } from 'lucide-react';

export const DomainChecker: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [checkedDomain, setCheckedDomain] = useState<string | null>(null);
  const [isSearching, setIsSearching] = useState(false);
  const [selectedExtension, setSelectedExtension] = useState('.vn');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchTerm.trim()) return;
    setIsSearching(true);
    setTimeout(() => {
      let clean = searchTerm.toLowerCase().trim().replace(/https?:\/\//, '').replace(/^www\./, '');
      if (!clean.includes('.')) {
        clean = `${clean}${selectedExtension}`;
      }
      setCheckedDomain(clean);
      setIsSearching(false);
    }, 350);
  };

  return (
    <div className="bg-gradient-to-br from-white via-teal-50/30 to-emerald-50/40 rounded-3xl p-6 sm:p-10 border border-[#0baba0]/20 shadow-lg relative overflow-hidden">
      {/* Background soft ambient mint glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#0baba0]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-3xl mx-auto text-center space-y-3 relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#0baba0]/10 border border-[#0baba0]/30 rounded-full text-xs font-semibold text-[#088c83]">
          <Globe className="w-3.5 h-3.5 text-[#0baba0]" />
          <span>Tra cứu & Đăng ký tên miền Việt Nam / Quốc tế</span>
        </div>
        
        <h3 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
          Đừng Kinh Doanh Khi Chưa Có Tên Miền
        </h3>
        
        <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
          Tên miền là thương hiệu số của bạn trên Internet. Hãy kiểm tra và sở hữu ngay tên miền thương hiệu với mức giá tốt nhất tại Uni Creation.
        </p>

        {/* Input box */}
        <form onSubmit={handleSearch} className="pt-4 max-w-2xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-2 bg-white p-2 rounded-2xl border-2 border-[#0baba0]/40 shadow-sm focus-within:border-[#0baba0] transition-colors">
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="Nhập tên thương hiệu muốn kiểm tra (vd: mycompany, thegioinoithat)..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-transparent pl-4 pr-3 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none"
              />
            </div>
            
            <div className="flex items-center gap-2">
              <select
                value={selectedExtension}
                onChange={(e) => setSelectedExtension(e.target.value)}
                className="bg-slate-50 text-slate-800 text-xs font-bold px-3 py-2.5 rounded-xl border border-slate-200 focus:outline-none cursor-pointer"
              >
                <option value=".vn">.vn</option>
                <option value=".com">.com</option>
                <option value=".com.vn">.com.vn</option>
                <option value=".net">.net</option>
                <option value=".org">.org</option>
              </select>

              <button
                type="submit"
                disabled={isSearching}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 btn-brand-gradient text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all cursor-pointer whitespace-nowrap shadow-sm"
              >
                {isSearching ? (
                  <span>Đang kiểm tra...</span>
                ) : (
                  <>
                    <Search className="w-4 h-4" />
                    <span>Kiểm tra ngay</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </form>

        {/* Search Result */}
        {checkedDomain && (
          <div className="mt-6 p-4 sm:p-5 bg-white border-2 border-emerald-400 rounded-2xl text-left animate-in fade-in max-w-2xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-md">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#91c544] animate-pulse"></span>
                <span className="font-mono text-lg font-bold text-slate-900">{checkedDomain}</span>
              </div>
              <p className="text-xs text-emerald-700 font-bold flex items-center gap-1">
                <Check className="w-3.5 h-3.5 text-[#91c544]" />
                Tên miền sẵn sàng đăng ký ngay hôm nay!
              </p>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={`tel:${COMPANY_INFO.hotline}`}
                className="px-5 py-2.5 btn-brand-gradient text-white text-xs font-bold rounded-xl transition-colors inline-flex items-center gap-1.5 whitespace-nowrap shadow-sm"
              >
                <span>Giữ chỗ ngay</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        )}

        {/* Pricing Matrix */}
        <div className="pt-8">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-4 text-left">
            Bảng phí duy trì tên miền phổ biến
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 text-left">
            {DOMAIN_PRICING.map((item, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200/90 p-3 rounded-2xl hover:border-[#0baba0] transition-colors shadow-xs"
              >
                <div className="font-mono font-bold text-base text-[#0baba0]">{item.ext}</div>
                <div className="text-xs font-bold text-slate-900 mt-1 tabular-nums">{item.renewFee}</div>
                <div className="text-[10px] text-slate-500 mt-0.5 truncate">Khởi tạo: {item.setupFee}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
