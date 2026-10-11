import React, { useState, useMemo } from 'react';
import { ALL_POSTS, BlogPost } from '../data/blogData';
import {
  Calendar,
  ArrowRight,
  Clock,
  BookOpen,
  Search,
  Sparkles,
  TrendingUp,
  Flame,
  ChevronRight,
  Phone,
  Filter,
  X,
  Share2,
  Check
} from 'lucide-react';
import { COMPANY_INFO } from '../data/siteData';

interface NewsSectionProps {
  onViewPostDetail?: (slug: string) => void;
  onViewAllPosts?: () => void;
  isHomeView?: boolean;
}

export const NewsSection: React.FC<NewsSectionProps> = ({
  onViewPostDetail,
  onViewAllPosts,
  isHomeView = false
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [visibleCount, setVisibleCount] = useState<number>(6);
  const [selectedModalPost, setSelectedModalPost] = useState<BlogPost | null>(null);
  const [copiedLink, setCopiedLink] = useState(false);

  // Category list with counts
  const categories = useMemo(() => {
    return [
      { id: 'all', label: 'Tất cả bài viết', count: ALL_POSTS.length },
      {
        id: 'Kiến thức Website',
        label: 'Kiến thức Website',
        count: ALL_POSTS.filter((p) => p.category.toLowerCase().includes('kiến thức website'.toLowerCase())).length
      },
      {
        id: 'Hạ tầng & Cloud',
        label: 'Hạ tầng & Cloud',
        count: ALL_POSTS.filter((p) => p.category.toLowerCase().includes('hạ tầng & cloud'.toLowerCase())).length
      },
      {
        id: 'Marketing & SEO',
        label: 'Marketing & SEO',
        count: ALL_POSTS.filter((p) => p.category.toLowerCase().includes('marketing & seo'.toLowerCase())).length
      },
      {
        id: 'Hướng dẫn & Kỹ thuật',
        label: 'Hướng dẫn & Kỹ thuật',
        count: ALL_POSTS.filter((p) => p.category.toLowerCase().includes('hướng dẫn & kỹ thuật'.toLowerCase())).length
      },
      {
        id: 'Tuyển dụng',
        label: 'Tuyển dụng',
        count: ALL_POSTS.filter((p) => p.category.toLowerCase().includes('tuyển dụng'.toLowerCase())).length
      }
    ];
  }, []);

  // Featured Lead Post (First post or specific top post)
  const leadFeaturedPost = ALL_POSTS[0]; // "Dịch Vụ VPS NVME: Giải Pháp Tối Ưu Cho Website và Marketing Online"

  // 5 Trending / Top Editor's Pick Posts
  const trendingPosts = useMemo(() => {
    return ALL_POSTS.slice(1, 6);
  }, []);

  // Filtered posts based on category and search query
  const filtered = useMemo(() => {
    return ALL_POSTS.filter((post) => {
      const matchCat =
        activeCategory === 'all' ||
        post.category.toLowerCase().includes(activeCategory.toLowerCase());
      const matchQuery =
        !searchQuery.trim() ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCat && matchQuery;
    });
  }, [activeCategory, searchQuery]);

  // Remove the lead featured post from the grid if viewing 'all' and no search query
  const gridPosts = useMemo(() => {
    if (activeCategory === 'all' && !searchQuery.trim()) {
      return filtered.filter((p) => p.id !== leadFeaturedPost.id).slice(0, visibleCount);
    }
    return filtered.slice(0, visibleCount);
  }, [filtered, activeCategory, searchQuery, visibleCount, leadFeaturedPost]);

  const handlePostClick = (post: BlogPost) => {
    if (onViewPostDetail) {
      onViewPostDetail(post.slug);
    } else {
      setSelectedModalPost(post);
    }
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  return (
    <section className="space-y-10 sm:space-y-12">
      {/* 1. Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200/80 pb-6">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#0baba0]/10 border border-[#0baba0]/30 rounded-full text-xs font-semibold text-[#088c83] mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#91c544]" />
            <span>Cẩm Nang Số & Kiến Thức Doanh Nghiệp</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900">
            Tin Tức & Cẩm Nang Xây Dựng Website
          </h2>
          <p className="text-slate-500 text-xs sm:text-sm mt-1.5 max-w-2xl leading-relaxed">
            Tổng hợp hơn 40 bài viết chuyên sâu về thiết kế web chuẩn SEO, công nghệ AI, hạ tầng máy chủ NVMe, marketing số và cập nhật công nghệ mới nhất.
          </p>
        </div>

        {/* Quick Actions / Hotline Consultation */}
        {isHomeView && onViewAllPosts ? (
          <button
            onClick={onViewAllPosts}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 hover:border-[#0baba0] text-xs font-bold text-[#088c83] shadow-2xs hover:shadow-sm transition-all cursor-pointer shrink-0 self-start md:self-auto"
          >
            <span>Xem tất cả bài viết</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#91c544]" />
          </button>
        ) : (
          <div className="hidden lg:flex items-center gap-3 bg-white border border-slate-200 p-2.5 rounded-2xl shadow-xs">
            <div className="w-9 h-9 rounded-xl bg-teal-50 text-[#0baba0] flex items-center justify-center font-bold">
              <Phone className="w-4 h-4" />
            </div>
            <div className="text-xs">
              <span className="text-slate-400 block text-[10px]">Tư vấn giải pháp miễn phí:</span>
              <a
                href={`tel:${COMPANY_INFO.hotline.replace(/\./g, '')}`}
                className="font-extrabold text-[#0baba0] hover:underline"
              >
                {COMPANY_INFO.hotline}
              </a>
            </div>
          </div>
        )}
      </div>

      {/* 2. SECTION: TIN NỔI BẬT (FEATURED NEWS SHOWCASE) */}
      {/* Render only when no active filter or search query, to highlight best articles */}
      {activeCategory === 'all' && !searchQuery.trim() && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="flex h-3 w-3 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0baba0] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#0baba0]"></span>
              </span>
              <h3 className="font-extrabold text-lg sm:text-xl text-slate-900 tracking-tight flex items-center gap-2">
                <span>Tin Nổi Bật & Tiêu Điểm</span>
              </h3>
            </div>
            <span className="text-xs font-semibold text-slate-400 hidden sm:inline">
              Được xem nhiều nhất trong tuần
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Big Lead Featured Post (7 cols) */}
            <div
              onClick={() => handlePostClick(leadFeaturedPost)}
              className="lg:col-span-7 group relative bg-white rounded-3xl border border-slate-200 hover:border-[#0baba0] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 cursor-pointer flex flex-col justify-between"
            >
              {/* Image with overlay */}
              <div className="aspect-[16/10] bg-slate-900 relative overflow-hidden">
                <img
                  src={leadFeaturedPost.imageUrl}
                  alt={leadFeaturedPost.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent pointer-events-none" />
                
                {/* Featured Badge */}
                <div className="absolute top-4 left-4 flex items-center gap-2 z-10">
                  <span className="px-3 py-1.5 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-extrabold rounded-xl shadow-md flex items-center gap-1.5">
                    <Flame className="w-3.5 h-3.5" />
                    <span>TIN TIÊU ĐIỂM</span>
                  </span>
                  <span className="px-2.5 py-1.5 bg-slate-900/80 backdrop-blur-md text-white text-xs font-bold rounded-xl shadow-xs">
                    {leadFeaturedPost.category}
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-white z-10 hidden sm:block">
                  <div className="flex items-center gap-3 text-xs text-white/80">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-teal-300" />
                      <span>{leadFeaturedPost.date}</span>
                    </span>
                    <span>·</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-teal-300" />
                      <span>{leadFeaturedPost.readingTime}</span>
                    </span>
                  </div>
                </div>
              </div>

              {/* Lead Body */}
              <div className="p-6 sm:p-7 space-y-3 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex sm:hidden items-center gap-2 text-xs text-slate-400 mb-2">
                    <Calendar className="w-3.5 h-3.5 text-[#0baba0]" />
                    <span>{leadFeaturedPost.date}</span>
                    <span>·</span>
                    <span>{leadFeaturedPost.readingTime}</span>
                  </div>

                  <h4 className="text-lg sm:text-2xl font-extrabold text-slate-900 group-hover:text-[#0baba0] transition-colors leading-snug">
                    {leadFeaturedPost.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2.5 leading-relaxed line-clamp-3">
                    {leadFeaturedPost.excerpt.replace(/\[&hellip;\]/g, '...')}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#0baba0]">
                  <span className="inline-flex items-center gap-2">
                    <span>Đọc toàn bộ bài viết</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <span className="text-[11px] text-slate-400 font-normal">
                    {leadFeaturedPost.author}
                  </span>
                </div>
              </div>
            </div>

            {/* 5 Trending Side Articles (5 cols) */}
            <div className="lg:col-span-5 flex flex-col justify-start">
              <div className="bg-slate-50/80 rounded-3xl p-5 border border-slate-200/90 space-y-3.5">
                <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                  <div className="flex items-center gap-2 text-xs font-extrabold text-slate-900 uppercase tracking-wider">
                    <TrendingUp className="w-4 h-4 text-[#0baba0]" />
                    <span>Đọc Nhiều Nhất</span>
                  </div>
                  <span className="text-[11px] font-bold text-[#088c83] bg-teal-50 px-2 py-0.5 rounded-md">
                    Top 5 Xu Hướng
                  </span>
                </div>

                <div className="space-y-3">
                  {trendingPosts.map((post, idx) => (
                    <div
                      key={post.id}
                      onClick={() => handlePostClick(post)}
                      className="group p-3 bg-white rounded-2xl border border-slate-200/80 hover:border-[#0baba0] hover:shadow-md transition-all duration-200 cursor-pointer flex items-center gap-3.5"
                    >
                      {/* Number Rank */}
                      <span className={`w-8 h-8 rounded-xl flex items-center justify-center text-xs font-extrabold shrink-0 shadow-xs ${
                        idx === 0
                          ? 'bg-[#0baba0] text-white'
                          : idx === 1
                          ? 'bg-teal-100 text-[#088c83]'
                          : 'bg-slate-100 text-slate-600'
                      }`}>
                        #{idx + 1}
                      </span>

                      {/* Small Thumbnail */}
                      <div className="w-16 h-16 sm:w-20 sm:h-16 rounded-xl overflow-hidden bg-slate-100 shrink-0 relative">
                        <img
                          src={post.imageUrl}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                          }}
                        />
                      </div>

                      {/* Text */}
                      <div className="min-w-0 flex-1 space-y-1">
                        <span className="text-[10px] font-bold text-[#0baba0] uppercase">
                          {post.category}
                        </span>
                        <h5 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-[#0baba0] transition-colors leading-snug line-clamp-2">
                          {post.title}
                        </h5>
                        <div className="flex items-center gap-2 text-[10px] text-slate-400">
                          <span>{post.date}</span>
                          <span>·</span>
                          <span>{post.readingTime}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* 3. Search Bar & Category Pills Filter (Hidden on homepage per user selection) */}
      {!isHomeView && (
        <div className="space-y-4 pt-2">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
            
            {/* Live Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setVisibleCount(6);
                }}
                placeholder="Tìm kiếm bài viết theo từ khóa..."
                className="w-full pl-10 pr-9 py-2.5 bg-white border border-slate-200 rounded-2xl text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#0baba0] focus:ring-2 focus:ring-[#0baba0]/20 transition-all shadow-xs"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Quick Counter */}
            <div className="text-xs text-slate-500 font-medium flex items-center gap-2 self-end sm:self-center">
              <Filter className="w-3.5 h-3.5 text-[#0baba0]" />
              <span>Hiển thị <strong>{filtered.length}</strong> bài viết</span>
            </div>
          </div>

          {/* Category Pills Bar */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    setActiveCategory(cat.id);
                    setVisibleCount(6);
                  }}
                  className={`px-3.5 py-2 text-xs font-bold rounded-xl transition-all cursor-pointer flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-[#0baba0] text-white shadow-sm'
                      : 'bg-white border border-slate-200 text-slate-600 hover:border-[#0baba0] hover:text-[#0baba0]'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                      isActive
                        ? 'bg-white/20 text-white font-mono'
                        : 'bg-slate-100 text-slate-500 font-mono'
                    }`}
                  >
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* 4. Articles Grid (Hidden on homepage per user selection) */}
      {!isHomeView && (
        gridPosts.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-slate-200 p-8 space-y-4">
            <BookOpen className="w-12 h-12 text-slate-300 mx-auto" />
            <h3 className="font-extrabold text-base text-slate-800">
              Không tìm thấy bài viết phù hợp
            </h3>
            <p className="text-xs text-slate-500 max-w-sm mx-auto">
              Không có kết quả nào cho &quot;{searchQuery}&quot;. Thử tìm kiếm với từ khóa khác hoặc chuyển sang chuyên mục khác.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('all');
              }}
              className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-xl transition-colors cursor-pointer"
            >
              Đặt lại bộ lọc
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gridPosts.map((post) => (
              <article
                key={post.id}
                onClick={() => handlePostClick(post)}
                className="group bg-white rounded-3xl border border-slate-200/90 hover:border-[#0baba0] overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer"
              >
                <div>
                  {/* Thumbnail */}
                  <div className="aspect-[16/9] bg-gradient-to-tr from-teal-900 to-slate-900 relative overflow-hidden">
                    <img
                      src={post.imageUrl}
                      alt={post.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />

                    <div className="absolute top-3 left-3 z-10">
                      <span className="px-2.5 py-1 bg-[#0baba0] text-white text-[11px] font-bold rounded-lg shadow-xs backdrop-blur-xs">
                        {post.category}
                      </span>
                    </div>

                    <div className="absolute top-3 right-3 z-10">
                      <span className="px-2 py-1 bg-slate-900/70 backdrop-blur-md text-white text-[10px] font-semibold rounded-lg">
                        {post.readingTime}
                      </span>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-5 sm:p-6 space-y-2.5">
                    <div className="flex items-center gap-2 text-xs text-slate-400">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-slate-400" />
                        <span>{post.date}</span>
                      </div>
                      <span>·</span>
                      <span className="truncate">{post.author}</span>
                    </div>

                    <h3 className="font-extrabold text-base text-slate-900 group-hover:text-[#0baba0] transition-colors leading-snug line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                      {post.excerpt.replace(/\[&hellip;\]/g, '...')}
                    </p>
                  </div>
                </div>

                {/* Card Footer Link */}
                <div className="p-5 sm:p-6 pt-0 flex items-center justify-between text-xs font-bold text-[#0baba0] border-t border-slate-50 mt-2">
                  <span className="group-hover:underline flex items-center gap-1">
                    <span>Đọc bài viết</span>
                  </span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                </div>
              </article>
            ))}
          </div>
        )
      )}

      {/* 5. Pagination / Load More Button (Hidden on homepage per user selection) */}
      {!isHomeView && visibleCount < filtered.length && (
        <div className="text-center pt-4">
          <button
            onClick={() => setVisibleCount((prev) => prev + 6)}
            className="px-6 py-3 bg-white hover:bg-slate-50 text-[#088c83] border border-slate-200/90 hover:border-[#0baba0] rounded-2xl text-xs font-bold transition-all shadow-xs hover:shadow-sm cursor-pointer inline-flex items-center gap-2"
          >
            <span>Xem thêm bài viết ({filtered.length - visibleCount} bài còn lại)</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* 6. Bottom Consultation & Newsletter Banner */}
      <div className="p-6 sm:p-8 bg-gradient-to-br from-slate-900 to-teal-950 text-white rounded-3xl shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center md:text-left max-w-xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/10 rounded-full text-xs font-semibold text-teal-300">
            <BookOpen className="w-3.5 h-3.5 text-[#91c544]" />
            <span>Cẩm Nang Chuyển Đổi Số 2026</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
            Cần Tư Vấn Chiến Lược Website & SEO Toàn Diện?
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Liên hệ chuyên gia Uni Creation để nhận báo cáo phân tích hiệu suất và phương án phát triển website doanh nghiệp tối ưu nhất.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
          <a
            href={`tel:${COMPANY_INFO.hotline.replace(/\./g, '')}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 btn-brand-gradient text-white text-xs sm:text-sm font-bold rounded-xl shadow-md cursor-pointer hover:shadow-lg transition-all"
          >
            <Phone className="w-4 h-4" />
            <span>Gọi Hotline: {COMPANY_INFO.hotline}</span>
          </a>
        </div>
      </div>

      {/* 7. Fallback Article Reader Modal if onViewPostDetail is not used */}
      {selectedModalPost && !onViewPostDetail && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/50 backdrop-blur-xs overflow-y-auto">
          <div className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-4 p-6 sm:p-8 space-y-5 animate-in fade-in max-h-[90vh] flex flex-col">
            
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 border-b pb-4 border-slate-100 shrink-0">
              <div>
                <span className="text-xs font-bold text-[#0baba0] uppercase tracking-wider">
                  {selectedModalPost.category}
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1 leading-snug">
                  {selectedModalPost.title}
                </h3>
                <div className="text-xs text-slate-400 mt-2 flex flex-wrap items-center gap-2 sm:gap-3">
                  <span>Ngày đăng: {selectedModalPost.date}</span>
                  <span>·</span>
                  <span>{selectedModalPost.author}</span>
                  <span>·</span>
                  <span>{selectedModalPost.readingTime}</span>
                </div>
              </div>
              <button
                onClick={() => setSelectedModalPost(null)}
                className="p-2 text-slate-400 hover:text-slate-800 rounded-xl hover:bg-slate-100 cursor-pointer shrink-0"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Scrollable Body */}
            <div className="overflow-y-auto pr-2 space-y-5 text-sm text-slate-700 leading-relaxed flex-1">
              <div className="aspect-[16/8] rounded-2xl overflow-hidden bg-slate-100">
                <img
                  src={selectedModalPost.imageUrl}
                  alt={selectedModalPost.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>

              {/* Excerpt Lead */}
              <div className="p-4 bg-teal-50/50 rounded-2xl border border-teal-100 text-xs sm:text-sm font-medium text-slate-800 leading-relaxed">
                {selectedModalPost.excerpt.replace(/\[&hellip;\]/g, '...')}
              </div>

              {/* Content Paragraphs */}
              <div className="space-y-4 pt-2">
                {selectedModalPost.content.split('\n\n').map((para, idx) => {
                  const clean = para.trim();
                  if (!clean) return null;
                  if (clean.startsWith('###')) {
                    return (
                      <h4 key={idx} className="text-base sm:text-lg font-bold text-slate-900 pt-3 border-t border-slate-100">
                        {clean.replace('###', '').trim()}
                      </h4>
                    );
                  }
                  return (
                    <p key={idx} className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {clean}
                    </p>
                  );
                })}
              </div>
            </div>

            {/* Modal Footer */}
            <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shrink-0">
              <button
                onClick={handleShare}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 rounded-xl text-xs font-semibold cursor-pointer transition-colors"
              >
                {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Share2 className="w-3.5 h-3.5 text-slate-500" />}
                <span>{copiedLink ? 'Đã sao chép liên kết' : 'Chia sẻ bài viết'}</span>
              </button>

              <a
                href={`tel:${COMPANY_INFO.hotline.replace(/\./g, '')}`}
                className="inline-flex items-center gap-2 px-4 py-2.5 btn-brand-gradient text-white text-xs font-bold rounded-xl shadow cursor-pointer"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Tư Vấn Miễn Phí: {COMPANY_INFO.hotline}</span>
              </a>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
