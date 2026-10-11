import React, { useState, useMemo, useEffect } from 'react';
import { ALL_POSTS, BlogPost } from '../data/blogData';
import { COMPANY_INFO } from '../data/siteData';
import {
  Calendar,
  Clock,
  ArrowLeft,
  Share2,
  Phone,
  CheckCircle2,
  BookOpen,
  User,
  Eye,
  Check,
  ChevronRight,
  TrendingUp,
  Tag,
  List,
  Sparkles,
  ArrowRight,
  MessageSquare,
  ShieldCheck,
  Quote
} from 'lucide-react';

interface NewsDetailViewProps {
  postSlug: string;
  onBackToNews: () => void;
  onNavigateHome: () => void;
  onSelectOtherPost: (slug: string) => void;
  onOpenContact?: (subject?: string) => void;
}

export const NewsDetailView: React.FC<NewsDetailViewProps> = ({
  postSlug,
  onBackToNews,
  onNavigateHome,
  onSelectOtherPost,
  onOpenContact
}) => {
  const [copiedLink, setCopiedLink] = useState(false);
  const [activeTocId, setActiveTocId] = useState<string>('');

  // Scroll to top on slug change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [postSlug]);

  // Find post by slug or ID
  const post: BlogPost = useMemo(() => {
    const found = ALL_POSTS.find(
      (p) => p.slug === postSlug || String(p.id) === postSlug
    );
    return found || ALL_POSTS[0];
  }, [postSlug]);

  // Related posts from same category or others
  const relatedPosts = useMemo(() => {
    const others = ALL_POSTS.filter((p) => p.id !== post.id);
    const sameCategory = others.filter(
      (p) => p.category.toLowerCase() === post.category.toLowerCase()
    );
    if (sameCategory.length >= 3) {
      return sameCategory.slice(0, 3);
    }
    const combined = [...sameCategory, ...others.filter((p) => !sameCategory.includes(p))];
    return combined.slice(0, 3);
  }, [post]);

  // Trending / Most Read Posts for Sidebar
  const trendingPosts = useMemo(() => {
    return ALL_POSTS.filter((p) => p.id !== post.id).slice(0, 5);
  }, [post]);

  // Extract headings for Table of Contents
  const tableOfContents = useMemo(() => {
    const lines = post.content.split('\n\n');
    const headings: { id: string; text: string }[] = [];
    let count = 0;
    lines.forEach((line) => {
      const trimmed = line.trim();
      if (trimmed.startsWith('###')) {
        const text = trimmed.replace(/^###\s*/, '').trim();
        headings.push({
          id: `heading-${count++}`,
          text
        });
      }
    });
    return headings;
  }, [post]);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  const handleScrollToHeading = (id: string) => {
    setActiveTocId(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Estimate view count deterministically from post ID
  const estimatedViews = useMemo(() => {
    return 1250 + (post.id % 890);
  }, [post.id]);

  let headingCounter = 0;

  return (
    <div className="space-y-8 sm:space-y-12 animate-in fade-in duration-300 pb-12">
      {/* 1. Breadcrumbs & Top Quick Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200/80 pb-4">
        <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-slate-500 flex-wrap">
          <button
            onClick={onNavigateHome}
            className="hover:text-[#0baba0] transition-colors cursor-pointer font-medium"
          >
            Trang chủ
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <button
            onClick={onBackToNews}
            className="hover:text-[#0baba0] transition-colors cursor-pointer font-medium"
          >
            Tin tức & Cẩm nang
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <span className="text-[#088c83] font-semibold">{post.category}</span>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0 hidden sm:inline" />
          <span className="text-slate-800 font-medium truncate max-w-[200px] sm:max-w-xs hidden sm:inline">
            {post.title}
          </span>
        </nav>

        <button
          onClick={onBackToNews}
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-bold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 rounded-xl hover:border-[#0baba0] hover:text-[#0baba0] transition-all cursor-pointer shadow-xs"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Quay lại danh sách</span>
        </button>
      </div>

      {/* 2. Main Article Grid (8 cols content, 4 cols sidebar) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
        
        {/* Left Column: Article Body & Content */}
        <div className="lg:col-span-8 space-y-7">
          
          {/* Header Info */}
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2">
              <span className="px-3 py-1 bg-gradient-to-r from-[#0baba0] to-[#088c83] text-white text-xs font-bold rounded-lg shadow-xs">
                {post.category}
              </span>
              <span className="text-xs font-semibold text-teal-700 bg-teal-50 px-2.5 py-1 rounded-md border border-teal-200/60">
                Chuyên trang Công nghệ & Website
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 leading-tight tracking-tight">
              {post.title}
            </h1>

            {/* Author & Meta Row */}
            <div className="flex flex-wrap items-center justify-between gap-4 py-3 border-y border-slate-100 text-xs text-slate-500">
              <div className="flex flex-wrap items-center gap-3 sm:gap-5">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#0baba0] to-[#088c83] text-white flex items-center justify-center font-bold text-xs shadow-xs">
                    <User className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 block leading-tight">
                      {post.author}
                    </span>
                    <span className="text-[11px] text-slate-400">Uni Creation Tech Team</span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-slate-500">
                  <Calendar className="w-3.5 h-3.5 text-[#0baba0]" />
                  <span>{post.date}</span>
                </div>

                <div className="flex items-center gap-1.5 text-slate-500">
                  <Clock className="w-3.5 h-3.5 text-[#0baba0]" />
                  <span>{post.readingTime}</span>
                </div>

                <div className="flex items-center gap-1.5 text-slate-500">
                  <Eye className="w-3.5 h-3.5 text-[#0baba0]" />
                  <span>{estimatedViews.toLocaleString('vi-VN')} lượt xem</span>
                </div>
              </div>

              {/* Quick Share action */}
              <button
                onClick={handleShare}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-lg text-slate-600 text-xs font-semibold cursor-pointer transition-colors"
                title="Sao chép liên kết bài viết"
              >
                {copiedLink ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-700 font-bold">Đã sao chép!</span>
                  </>
                ) : (
                  <>
                    <Share2 className="w-3.5 h-3.5 text-slate-500" />
                    <span>Chia sẻ</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Featured Hero Thumbnail */}
          <div className="relative aspect-[16/9] rounded-3xl overflow-hidden bg-slate-900 shadow-lg border border-slate-100 group">
            <img
              src={post.imageUrl}
              alt={post.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-102"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-3 left-4 right-4 text-[11px] text-white/90 bg-slate-900/60 backdrop-blur-md px-3 py-1.5 rounded-lg inline-block w-fit">
              Hình ảnh minh họa: {post.title} | Nguồn: Uni Creation
            </div>
          </div>

          {/* Sapo / Excerpt Summary Box */}
          <div className="relative p-5 sm:p-6 bg-gradient-to-br from-teal-50/70 to-slate-50 rounded-2xl border-l-4 border-l-[#0baba0] border border-teal-100/60 text-slate-800">
            <div className="flex items-start gap-3">
              <Quote className="w-7 h-7 text-[#0baba0] shrink-0 mt-0.5 opacity-80" />
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#088c83] block mb-1">
                  Tóm Tắt Bài Viết
                </span>
                <p className="text-sm sm:text-base font-medium text-slate-700 leading-relaxed italic">
                  {post.excerpt.replace(/\[&hellip;\]/g, '...')}
                </p>
              </div>
            </div>
          </div>

          {/* Table of Contents (Mục lục bài viết) */}
          {tableOfContents.length > 0 && (
            <div className="p-5 sm:p-6 bg-white rounded-2xl border border-slate-200 shadow-xs space-y-3">
              <div className="flex items-center gap-2 pb-3 border-b border-slate-100 text-slate-900 font-extrabold text-sm sm:text-base">
                <List className="w-4 h-4 text-[#0baba0]" />
                <span>Mục Lục Nội Dung Bài Viết</span>
              </div>
              <nav className="grid grid-cols-1 gap-2 pt-1">
                {tableOfContents.map((item, idx) => (
                  <button
                    key={item.id}
                    onClick={() => handleScrollToHeading(item.id)}
                    className={`text-left text-xs sm:text-sm py-1.5 px-3 rounded-lg flex items-start gap-2.5 transition-all cursor-pointer ${
                      activeTocId === item.id
                        ? 'bg-teal-50 text-[#088c83] font-bold'
                        : 'text-slate-600 hover:bg-slate-50 hover:text-[#0baba0]'
                    }`}
                  >
                    <span className="font-mono text-xs font-semibold text-[#0baba0] shrink-0 mt-0.5">
                      0{idx + 1}.
                    </span>
                    <span className="leading-snug">{item.text}</span>
                  </button>
                ))}
              </nav>
            </div>
          )}

          {/* Main Article Paragraphs */}
          <div className="space-y-6 pt-2 text-slate-700 leading-relaxed text-sm sm:text-base">
            {post.content.split('\n\n').map((para, idx) => {
              const clean = para.trim();
              if (!clean) return null;

              if (clean.startsWith('###')) {
                const headingText = clean.replace(/^###\s*/, '').trim();
                const currentId = `heading-${headingCounter++}`;
                return (
                  <div key={idx} id={currentId} className="pt-6 sm:pt-8 scroll-mt-24 space-y-2">
                    <h2 className="text-lg sm:text-xl lg:text-2xl font-extrabold text-slate-900 flex items-center gap-2.5 pb-2 border-b border-slate-200/80">
                      <span className="w-1.5 h-6 bg-gradient-to-b from-[#0baba0] to-[#91c544] rounded-full shrink-0"></span>
                      <span>{headingText}</span>
                    </h2>
                  </div>
                );
              }

              // Normal paragraph
              return (
                <p key={idx} className="text-slate-700 leading-relaxed text-sm sm:text-base">
                  {clean}
                </p>
              );
            })}
          </div>

          {/* Key Takeaways Callout Box */}
          <div className="p-5 sm:p-6 bg-emerald-50/60 rounded-2xl border border-emerald-200/80 space-y-3">
            <div className="flex items-center gap-2 text-emerald-800 font-extrabold text-sm sm:text-base">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
              <span>Lời Khuyên Thực Tiễn Từ Uni Creation</span>
            </div>
            <p className="text-xs sm:text-sm text-emerald-950 leading-relaxed">
              Việc áp dụng công nghệ số và lựa chọn nền tảng hạ tầng tối ưu ngay từ ban đầu giúp doanh nghiệp tiết kiệm 40% chi phí vận hành dài hạn, đồng thời duy trì vị thế dẫn đầu trong thứ hạng SEO Google và gia tăng tỉ lệ chuyển đổi đơn hàng.
            </p>
          </div>

          {/* In-Article Promotion CTA Banner */}
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-teal-950 text-white shadow-xl space-y-4 relative overflow-hidden">
            <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-radial from-[#0baba0]/20 to-transparent pointer-events-none" />
            <div className="relative z-10 space-y-3">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#0baba0]/20 border border-[#0baba0]/40 rounded-full text-xs font-semibold text-teal-300">
                <Sparkles className="w-3.5 h-3.5 text-[#91c544]" />
                <span>Giải Pháp Độc Quyền Tại Uni Creation</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                Bạn Cần Tư Vấn Thiết Kế Website Hoặc Triển Khai Hạ Tầng?
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm max-w-xl leading-relaxed">
                Đội ngũ chuyên gia của chúng tôi sẵn sàng phân tích nhu cầu, kiểm toán website hiện tại và đưa ra giải pháp toàn diện với chi phí minh bạch nhất.
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a
                  href={`tel:${COMPANY_INFO.hotline.replace(/\./g, '')}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 btn-brand-gradient text-white text-xs sm:text-sm font-bold rounded-xl shadow-md cursor-pointer hover:shadow-lg transition-all"
                >
                  <Phone className="w-4 h-4" />
                  <span>Gọi Ngay: {COMPANY_INFO.hotline}</span>
                </a>
                <button
                  onClick={() => onOpenContact?.(`Tư vấn từ bài viết: ${post.title}`)}
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs sm:text-sm font-semibold rounded-xl cursor-pointer transition-colors"
                >
                  <span>Gửi Yêu Cầu Tư Vấn</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Tags & Article Footer */}
          <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2 flex-wrap text-xs">
              <Tag className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <span className="font-bold text-slate-600">Thẻ tag:</span>
              <span className="px-2.5 py-1 bg-slate-100 text-slate-700 rounded-lg hover:bg-teal-50 hover:text-[#0baba0] cursor-pointer transition-colors">
                #ThietKeWeb
              </span>
              <span className="px-2.5 py-1 bg-slate-100 text-slate-700 rounded-lg hover:bg-teal-50 hover:text-[#0baba0] cursor-pointer transition-colors">
                #ChuanSEO
              </span>
              <span className="px-2.5 py-1 bg-slate-100 text-slate-700 rounded-lg hover:bg-teal-50 hover:text-[#0baba0] cursor-pointer transition-colors">
                #CongNghe
              </span>
              <span className="px-2.5 py-1 bg-slate-100 text-slate-700 rounded-lg hover:bg-teal-50 hover:text-[#0baba0] cursor-pointer transition-colors">
                #UniCreation
              </span>
            </div>

            {/* Social Share Buttons */}
            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-500 font-medium">Chia sẻ:</span>
              <button
                onClick={handleShare}
                className="p-2 rounded-xl bg-slate-100 hover:bg-teal-50 text-slate-600 hover:text-[#0baba0] transition-colors cursor-pointer"
                title="Sao chép link bài viết"
              >
                <Share2 className="w-4 h-4" />
              </button>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-xl bg-[#1877f2]/10 hover:bg-[#1877f2]/20 text-[#1877f2] font-bold text-xs transition-colors cursor-pointer"
              >
                Facebook
              </a>
              <a
                href={`https://zalo.me/share?url=${encodeURIComponent(window.location.href)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-xl bg-sky-500/10 hover:bg-sky-500/20 text-sky-600 font-bold text-xs transition-colors cursor-pointer"
              >
                Zalo
              </a>
            </div>
          </div>

          {/* Author Bio Box */}
          <div className="p-5 sm:p-6 bg-white rounded-3xl border border-slate-200 shadow-xs flex flex-col sm:flex-row items-center sm:items-start gap-4">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#0baba0] to-[#088c83] text-white flex items-center justify-center font-extrabold text-xl shadow-md shrink-0">
              UNI
            </div>
            <div className="space-y-1.5 text-center sm:text-left flex-1">
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                <h4 className="font-extrabold text-slate-900 text-base">{post.author}</h4>
                <span className="px-2 py-0.5 bg-teal-50 text-[#088c83] text-[10px] font-bold rounded-md border border-teal-200/50">
                  Tác giả chính thức
                </span>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                Đội ngũ chuyên gia công nghệ, kỹ sư phát triển phần mềm và chuyên viên SEO tại Uni Creation Việt Nam. Chúng tôi cam kết mang lại kiến thức giá trị, thực tiễn và cập nhật mới nhất cho cộng đồng doanh nghiệp số.
              </p>
              <div className="pt-1 flex items-center justify-center sm:justify-start gap-3 text-xs font-bold text-[#0baba0]">
                <a href={`tel:${COMPANY_INFO.hotline.replace(/\./g, '')}`} className="hover:underline flex items-center gap-1">
                  <Phone className="w-3.5 h-3.5" />
                  <span>Hotline: {COMPANY_INFO.hotline}</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Right Column: Sticky Sidebar Widgets */}
        <div className="lg:col-span-4 space-y-6">
          
          {/* Widget 1: Quick Consultation Card */}
          <div className="p-6 bg-gradient-to-br from-white to-teal-50/40 rounded-3xl border border-teal-200/60 shadow-sm space-y-4">
            <div className="flex items-center gap-2.5 text-[#088c83] font-bold text-xs uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-[#91c544]" />
              <span>Hỗ Trợ Doanh Nghiệp 24/7</span>
            </div>
            <h3 className="font-extrabold text-lg text-slate-900 leading-snug">
              Cần Báo Giá Website Hoặc Hạ Tầng Máy Chủ?
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Nhận tư vấn phương án thiết kế website, demo giao diện trực tiếp và báo giá chi tiết trong vòng 15 phút.
            </p>
            <div className="space-y-2.5 pt-1">
              <a
                href={`tel:${COMPANY_INFO.hotline.replace(/\./g, '')}`}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 btn-brand-gradient text-white text-xs font-bold rounded-2xl shadow-sm hover:shadow transition-all cursor-pointer"
              >
                <Phone className="w-4 h-4" />
                <span>Hotline: {COMPANY_INFO.hotline}</span>
              </a>
              <button
                onClick={() => onOpenContact?.(`Tư vấn từ bài viết: ${post.title}`)}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 text-xs font-semibold rounded-2xl transition-colors cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 text-[#0baba0]" />
                <span>Để lại yêu cầu liên hệ</span>
              </button>
            </div>
          </div>

          {/* Widget 2: Trending / Top Read Articles */}
          <div className="p-6 bg-white rounded-3xl border border-slate-200 shadow-xs space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2 font-extrabold text-sm text-slate-900">
                <TrendingUp className="w-4 h-4 text-[#0baba0]" />
                <span>Bài Viết Đọc Nhiều Nhất</span>
              </div>
              <span className="text-[11px] font-bold text-teal-600 bg-teal-50 px-2 py-0.5 rounded-full">
                Hot
              </span>
            </div>

            <div className="space-y-3.5">
              {trendingPosts.map((tPost, idx) => (
                <div
                  key={tPost.id}
                  onClick={() => onSelectOtherPost(tPost.slug)}
                  className="group flex items-start gap-3 cursor-pointer p-2 rounded-xl hover:bg-slate-50 transition-colors"
                >
                  <span className={`w-6 h-6 rounded-lg flex items-center justify-center text-xs font-extrabold shrink-0 mt-0.5 ${
                    idx === 0
                      ? 'bg-[#0baba0] text-white shadow-xs'
                      : 'bg-slate-100 text-slate-600'
                  }`}>
                    {idx + 1}
                  </span>
                  <div className="space-y-1 flex-1 min-w-0">
                    <h5 className="text-xs font-bold text-slate-800 group-hover:text-[#0baba0] transition-colors leading-snug line-clamp-2">
                      {tPost.title}
                    </h5>
                    <div className="flex items-center gap-2 text-[10px] text-slate-400">
                      <span>{tPost.date}</span>
                      <span>·</span>
                      <span>{tPost.readingTime}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Widget 3: Categories Navigation */}
          <div className="p-6 bg-white rounded-3xl border border-slate-200 shadow-xs space-y-4">
            <div className="flex items-center gap-2 font-extrabold text-sm text-slate-900 pb-3 border-b border-slate-100">
              <BookOpen className="w-4 h-4 text-[#0baba0]" />
              <span>Chuyên Mục Kiến Thức</span>
            </div>
            <div className="space-y-1.5">
              {[
                { name: 'Kiến thức Website', count: 18 },
                { name: 'Hạ tầng & Cloud', count: 8 },
                { name: 'Marketing & SEO', count: 9 },
                { name: 'Hướng dẫn & Kỹ thuật', count: 5 },
                { name: 'Tuyển dụng', count: 2 }
              ].map((cat) => (
                <button
                  key={cat.name}
                  onClick={onBackToNews}
                  className="w-full flex items-center justify-between p-2.5 rounded-xl hover:bg-teal-50/70 text-xs font-medium text-slate-700 hover:text-[#088c83] transition-colors cursor-pointer"
                >
                  <div className="flex items-center gap-2">
                    <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                    <span>{cat.name}</span>
                  </div>
                  <span className="text-[11px] font-bold text-slate-400 bg-slate-100 px-2 py-0.5 rounded-full">
                    {cat.count}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Widget 4: Commitment / Warranty Badge */}
          <div className="p-5 bg-slate-50 rounded-3xl border border-slate-200 text-xs text-slate-600 space-y-2.5">
            <div className="flex items-center gap-2 font-bold text-slate-900">
              <ShieldCheck className="w-4 h-4 text-[#91c544]" />
              <span>Bảo Hành Website Trọn Đời</span>
            </div>
            <p className="text-[11px] leading-relaxed text-slate-500">
              100% dự án website tại Uni Creation đều được bảo hành kỹ thuật trọn đời, backup dữ liệu hàng tuần tự động và hỗ trợ vận hành liên tục.
            </p>
          </div>

        </div>

      </div>

      {/* 3. Related Articles Section (Bài viết liên quan) */}
      <div className="pt-8 border-t border-slate-200 space-y-6">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <div className="text-xs font-bold text-[#0baba0] uppercase tracking-wider mb-1">
              Khám Phá Thêm
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              Bài Viết Cùng Chuyên Mục
            </h3>
          </div>
          <button
            onClick={onBackToNews}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0baba0] hover:underline cursor-pointer"
          >
            <span>Xem tất cả bài viết</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {relatedPosts.map((rPost) => (
            <article
              key={rPost.id}
              onClick={() => onSelectOtherPost(rPost.slug)}
              className="group bg-white rounded-3xl border border-slate-200 hover:border-[#0baba0] overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer"
            >
              <div>
                <div className="aspect-[16/9] bg-slate-900 relative overflow-hidden">
                  <img
                    src={rPost.imageUrl}
                    alt={rPost.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  <div className="absolute top-3 left-3 z-10">
                    <span className="px-2.5 py-1 bg-[#0baba0] text-white text-[11px] font-bold rounded-lg shadow-xs">
                      {rPost.category}
                    </span>
                  </div>
                </div>

                <div className="p-5 space-y-2">
                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    <span>{rPost.date}</span>
                    <span>·</span>
                    <span>{rPost.readingTime}</span>
                  </div>
                  <h4 className="font-bold text-sm sm:text-base text-slate-900 group-hover:text-[#0baba0] transition-colors line-clamp-2 leading-snug">
                    {rPost.title}
                  </h4>
                  <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                    {rPost.excerpt.replace(/\[&hellip;\]/g, '...')}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0 flex items-center justify-between text-xs font-bold text-[#0baba0]">
                <span>Đọc bài viết</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};
