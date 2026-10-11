import React, { useState, useMemo, useEffect } from 'react';
import { THEMES_LIST, THEME_COLLECTIONS, ThemeItem } from '../data/siteData';
import { Search, ExternalLink, Eye, Check, X, ArrowRight, Sparkles, Filter } from 'lucide-react';

interface ThemeExplorerProps {
  initialCategory?: string;
  initialPackage?: string;
  hideHeader?: boolean;
  onSelectTheme: (theme: ThemeItem) => void;
  onOpenCalculator: () => void;
  onViewThemeDetail?: (slug: string) => void;
}

export const ThemeExplorer: React.FC<ThemeExplorerProps> = ({
  initialCategory,
  initialPackage,
  hideHeader = false,
  onSelectTheme,
  onOpenCalculator,
  onViewThemeDetail
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory || 'all');
  const [selectedPackage, setSelectedPackage] = useState<string>(initialPackage || 'all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [failedImages, setFailedImages] = useState<Record<number, boolean>>({});

  const getReliableMockup = (theme: ThemeItem) => {
    const cat = (theme.category + ' ' + (theme.allCategories || []).join(' ') + ' ' + theme.slug).toLowerCase();
    if (cat.includes('bất động sản') || cat.includes('nhà đất')) {
      return 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80';
    }
    if (cat.includes('xây dựng') || cat.includes('vật liệu') || cat.includes('kiến trúc') || cat.includes('tuan-hong')) {
      return 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=600&q=80';
    }
    if (cat.includes('dược') || cat.includes('y tế') || cat.includes('pharma') || cat.includes('bệnh viện') || cat.includes('sức khỏe')) {
      return 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80';
    }
    if (cat.includes('nội thất') || cat.includes('furniture') || cat.includes('miyagi')) {
      return 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=600&q=80';
    }
    if (cat.includes('mỹ phẩm') || cat.includes('làm đẹp') || cat.includes('spa') || cat.includes('thẩm mỹ') || cat.includes('mireya')) {
      return 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=600&q=80';
    }
    if (cat.includes('nhà hàng') || cat.includes('ẩm thực') || cat.includes('quán') || cat.includes('cafe')) {
      return 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80';
    }
    if (cat.includes('giáo dục') || cat.includes('trường') || cat.includes('đào tạo') || cat.includes('học viện')) {
      return 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=80';
    }
    if (cat.includes('khách sạn') || cat.includes('du lịch') || cat.includes('hotel') || cat.includes('resort')) {
      return 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80';
    }
    if (cat.includes('ô tô') || cat.includes('xe máy') || cat.includes('gara')) {
      return 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=80';
    }
    if (cat.includes('bán hàng') || cat.includes('thời trang') || cat.includes('shop')) {
      return 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=600&q=80';
    }
    const defaults = [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80'
    ];
    return defaults[theme.id % defaults.length];
  };

  // Update when props change
  useEffect(() => {
    if (initialCategory) setSelectedCategory(initialCategory);
  }, [initialCategory]);

  useEffect(() => {
    if (initialPackage) setSelectedPackage(initialPackage);
  }, [initialPackage]);

  // Filtered themes
  const filteredThemes = useMemo(() => {
    return THEMES_LIST.filter((theme) => {
      // Category match
      let matchCat = true;
      if (selectedCategory !== 'all') {
        const found = THEME_COLLECTIONS.find((c) => c.id === selectedCategory);
        if (found) {
          matchCat = theme.category.toLowerCase().includes(found.name.toLowerCase()) ||
                     theme.allCategories.some(ac => ac.toLowerCase().includes(found.name.toLowerCase())) ||
                     theme.category.toLowerCase().includes(selectedCategory.replace(/-/g, ' ').toLowerCase());
        } else {
          matchCat = theme.category.toLowerCase().includes(selectedCategory.replace(/-/g, ' ').toLowerCase());
        }
      }

      // Package match
      let matchPkg = true;
      if (selectedPackage !== 'all') {
        matchPkg = theme.package.toLowerCase().includes(selectedPackage.toLowerCase());
      }

      // Search match
      let matchSearch = true;
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        matchSearch = theme.title.toLowerCase().includes(q) ||
                      theme.category.toLowerCase().includes(q) ||
                      theme.description.toLowerCase().includes(q);
      }

      return matchCat && matchPkg && matchSearch;
    });
  }, [selectedCategory, selectedPackage, searchQuery]);

  const handleOpenDetail = (theme: ThemeItem) => {
    if (onViewThemeDetail) {
      onViewThemeDetail(theme.slug);
    } else {
      onSelectTheme(theme);
    }
  };

  return (
    <div className="space-y-8">
      {/* Header & Controls Filter Card */}
      <div className="bg-white rounded-3xl p-5 sm:p-7 border border-slate-200/80 shadow-sm space-y-4">
        
        {/* Conditional Header: Only rendered when hideHeader is false to eliminate repetitive title on home page */}
        {!hideHeader ? (
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#0baba0]/10 border border-[#0baba0]/30 rounded-full text-xs font-semibold text-[#088c83] mb-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#91c544]" />
                <span>Kho Mẫu Giao Diện Website 2026</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
                Mẫu Website Chuẩn SEO Đa Ngành Nghề
              </h2>
              <p className="text-slate-500 text-xs sm:text-sm mt-1">
                Hơn 180+ mẫu thiết kế chuẩn UX/UI mới, tốc độ tải cao, tối ưu chuẩn di động 100%
              </p>
            </div>

            {/* Search bar */}
            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
              <input
                type="text"
                placeholder="Tìm theo tên hoặc ngành nghề..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0baba0] focus:bg-white"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-2.5 text-slate-400 hover:text-slate-600"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        ) : (
          /* Compact Controls Row when hideHeader is true */
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-1">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-teal-50 text-[#088c83] flex items-center justify-center shrink-0">
                <Filter className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs font-bold text-slate-800 block">
                  Bộ Lọc Ngành Nghề & Gói Cước
                </span>
                <span className="text-[11px] text-slate-500">
                  Hiển thị <strong>{filteredThemes.length}</strong> mẫu giao diện phù hợp
                </span>
              </div>
            </div>

            {/* Search bar */}
            <div className="relative w-full sm:w-80">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
              <input
                type="text"
                placeholder="Tìm theo tên hoặc ngành nghề..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#0baba0] focus:bg-white"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-2.5 text-slate-400 hover:text-slate-600 cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        )}

        {/* Category Filter Buttons */}
        <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-100">
          {THEME_COLLECTIONS.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                selectedCategory === cat.id
                  ? 'btn-brand-gradient text-white shadow-sm'
                  : 'bg-white border border-slate-200 text-slate-600 hover:border-[#0baba0] hover:text-[#0baba0]'
              }`}
            >
              <span>{cat.name}</span>
              <span className="ml-1.5 text-[10px] opacity-75">({cat.count})</span>
            </button>
          ))}
        </div>

        {/* Tier filter pill buttons */}
        <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-100 text-xs text-slate-500">
          <span className="font-medium mr-1">Lọc theo gói:</span>
          {['all', 'Gói Startup', 'Gói Pro', 'Gói VIP'].map((pkg) => (
            <button
              key={pkg}
              onClick={() => setSelectedPackage(pkg)}
              className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                selectedPackage === pkg
                  ? 'bg-[#0baba0] text-white shadow-xs'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              {pkg === 'all' ? 'Tất cả các gói' : pkg}
            </button>
          ))}

          {/* Quick Calculator CTA */}
          <button
            onClick={onOpenCalculator}
            className="ml-auto text-xs font-bold text-[#088c83] hover:text-[#0baba0] hover:underline cursor-pointer hidden sm:inline-flex items-center gap-1"
          >
            <span>Dự toán chi phí web theo tính năng</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Themes Grid */}
      {filteredThemes.length === 0 ? (
        <div className="p-12 text-center bg-white rounded-3xl border border-slate-200 text-slate-500 space-y-3">
          <p className="font-semibold text-base">Không tìm thấy mẫu website phù hợp với tiêu chí lọc.</p>
          <button
            onClick={() => {
              setSelectedCategory('all');
              setSelectedPackage('all');
              setSearchQuery('');
            }}
            className="px-4 py-2 btn-brand-gradient text-white rounded-xl text-xs font-bold cursor-pointer"
          >
            Đặt lại bộ lọc
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredThemes.map((theme) => (
            <div
              key={theme.id}
              className="group bg-white rounded-3xl border border-slate-200/90 shadow-sm hover:border-[#0baba0]/50 hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden"
            >
              {/* Image Preview with clean fallback */}
              <div
                onClick={() => handleOpenDetail(theme)}
                className="relative aspect-[16/10] bg-slate-100 overflow-hidden border-b border-slate-100 cursor-pointer"
              >
                <img
                  src={failedImages[theme.id] ? getReliableMockup(theme) : (theme.imageUrl.includes('2026/09') ? getReliableMockup(theme) : theme.imageUrl)}
                  alt={theme.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  onError={() => {
                    setFailedImages((prev) => ({ ...prev, [theme.id]: true }));
                  }}
                />

                {/* Badge for package */}
                <div className="absolute top-3 left-3">
                  <span className={`px-2.5 py-0.5 rounded-md text-[11px] font-bold tracking-wide shadow-sm ${
                    theme.package === 'Gói VIP'
                      ? 'bg-amber-500 text-white'
                      : theme.package === 'Gói Pro'
                      ? 'btn-brand-gradient text-white'
                      : 'bg-[#0baba0] text-white'
                  }`}>
                    {theme.package}
                  </span>
                </div>

                {/* Hover overlay with actions */}
                <div className="absolute inset-0 bg-white/90 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 p-4 border border-slate-200/60">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleOpenDetail(theme);
                    }}
                    className="px-3.5 py-2 bg-white text-slate-800 border border-slate-200 rounded-xl text-xs font-bold shadow hover:border-[#0baba0] hover:text-[#0baba0] flex items-center gap-1.5 cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    Xem chi tiết
                  </button>
                  <a
                    href={theme.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="px-3.5 py-2 btn-brand-gradient text-white rounded-xl text-xs font-bold shadow flex items-center gap-1.5"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    Demo Live
                  </a>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs text-slate-500 mb-1.5">
                    <span className="font-semibold text-[#0baba0]">{theme.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>Chuẩn SEO</span>
                    <span aria-hidden="true">·</span>
                    <span>Responsive</span>
                  </div>

                  <h3
                    onClick={() => handleOpenDetail(theme)}
                    className="font-bold text-base text-slate-900 group-hover:text-[#0baba0] transition-colors cursor-pointer"
                  >
                    {theme.title}
                  </h3>

                  <p className="text-xs text-slate-500 mt-1.5 line-clamp-2 leading-relaxed">
                    {theme.description}
                  </p>
                </div>

                <div className="pt-4 mt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-900 font-mono">
                    {theme.package === 'Gói Startup' ? '2.500.000 đ' : theme.package === 'Gói Pro' ? '4.000.000 đ' : 'Báo giá riêng'}
                  </span>

                  <button
                    onClick={() => handleOpenDetail(theme)}
                    className="text-xs font-semibold text-[#0baba0] hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <span>Trải nghiệm</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

    </div>
  );
};
