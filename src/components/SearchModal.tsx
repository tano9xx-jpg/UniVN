import React, { useState } from 'react';
import { THEMES_LIST, POSTS_LIST } from '../data/siteData';
import { ALL_SERVICES } from '../data/servicesData';
import { Search, X, ArrowRight, Layout, Server, BookOpen } from 'lucide-react';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectResult: (type: 'theme' | 'service' | 'news' | 'news-detail', id: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose, onSelectResult }) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const q = query.toLowerCase().trim();

  const matchedServices = Object.values(ALL_SERVICES).filter(s =>
    !q || s.title.toLowerCase().includes(q) || s.shortDesc.toLowerCase().includes(q)
  );

  const matchedThemes = THEMES_LIST.filter(t =>
    !q || t.title.toLowerCase().includes(q) || t.category.toLowerCase().includes(q)
  );

  const matchedPosts = POSTS_LIST.filter(p =>
    !q || p.title.toLowerCase().includes(q) || p.excerpt.toLowerCase().includes(q)
  );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center p-4 sm:p-6 bg-slate-950/70 backdrop-blur-sm pt-20">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[80vh]">
        
        {/* Search Input Bar */}
        <div className="p-4 border-b border-slate-200 flex items-center gap-3">
          <Search className="w-5 h-5 text-[#0baba0]" />
          <input
            type="text"
            autoFocus
            placeholder="Tìm mẫu website, dịch vụ hosting, tên miền, bài viết..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 text-sm bg-transparent border-none focus:outline-none placeholder-slate-400 font-medium"
          />
          <button
            onClick={onClose}
            className="p-1 text-slate-400 hover:text-slate-700 rounded-lg cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results List */}
        <div className="flex-1 overflow-y-auto p-4 space-y-6">
          
          {/* Services */}
          {matchedServices.length > 0 && (
            <div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
                <Server className="w-3.5 h-3.5 text-[#0baba0]" />
                <span>Dịch Vụ Cung Cấp</span>
              </div>
              <div className="space-y-1">
                {matchedServices.slice(0, 4).map((s) => (
                  <button
                    key={s.slug}
                    onClick={() => {
                      onSelectResult('service', s.slug);
                      onClose();
                    }}
                    className="w-full text-left p-2.5 rounded-xl hover:bg-slate-50 flex items-center justify-between text-xs transition-colors cursor-pointer group"
                  >
                    <div>
                      <strong className="text-slate-900 group-hover:text-[#0baba0] block font-semibold">{s.title}</strong>
                      <span className="text-slate-500 line-clamp-1 text-[11px]">{s.shortDesc}</span>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#0baba0] shrink-0" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Themes */}
          {matchedThemes.length > 0 && (
            <div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
                <Layout className="w-3.5 h-3.5 text-[#91c544]" />
                <span>Mẫu Website ({matchedThemes.length})</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {matchedThemes.slice(0, 6).map((t) => (
                  <button
                    key={t.id}
                    onClick={() => {
                      onSelectResult('theme', t.slug);
                      onClose();
                    }}
                    className="text-left p-2.5 rounded-xl border border-slate-100 hover:border-[#0baba0] hover:bg-slate-50 text-xs transition-all cursor-pointer group"
                  >
                    <div className="flex items-center justify-between">
                      <strong className="text-slate-900 group-hover:text-[#0baba0] font-semibold truncate">{t.title}</strong>
                      <span className="text-[10px] text-[#0baba0] bg-teal-50 px-1.5 py-0.5 rounded font-bold">{t.package}</span>
                    </div>
                    <span className="text-[11px] text-slate-500 block mt-0.5">{t.category}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Posts */}
          {matchedPosts.length > 0 && (
            <div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-sky-500" />
                <span>Kiến Thức & Tin Tức</span>
              </div>
              <div className="space-y-1">
                {matchedPosts.slice(0, 3).map((p) => (
                  <button
                    key={p.id}
                    onClick={() => {
                      onSelectResult('news-detail', p.slug);
                      onClose();
                    }}
                    className="w-full text-left p-2 rounded-lg hover:bg-slate-50 flex items-center justify-between text-xs cursor-pointer group"
                  >
                    <span className="text-slate-800 group-hover:text-[#0baba0] font-medium truncate">{p.title}</span>
                    <span className="text-[10px] text-slate-400 shrink-0">{p.date}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Footer info */}
        <div className="p-3 bg-slate-50 border-t border-slate-100 text-[11px] text-slate-400 text-center">
          Nhấn ESC hoặc click ra ngoài để đóng tìm kiếm
        </div>
      </div>
    </div>
  );
};
