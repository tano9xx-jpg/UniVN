import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { PricingSection } from './components/PricingSection';
import { ThemeExplorer } from './components/ThemeExplorer';
import { InfrastructureServices } from './components/InfrastructureServices';
import { WhyChooseUsSection } from './components/WhyChooseUsSection';
import { NewsSection } from './components/NewsSection';
import { NewsDetailView } from './components/NewsDetailView';
import { AboutView } from './components/AboutView';
import { ContactView } from './components/ContactView';
import { PaymentView } from './components/PaymentView';
import { PolicyView } from './components/PolicyView';
import { ServiceDetailView } from './components/ServiceDetailView';
import { ThemeDetailView } from './components/ThemeDetailView';
import { RecruitmentView } from './components/RecruitmentView';
import { SearchModal } from './components/SearchModal';
import { Footer } from './components/Footer';
import { CostCalculator } from './components/CostCalculator';
import { MobileStickyBar } from './components/MobileStickyBar';
import { DomainChecker } from './components/DomainChecker';
import { ServiceShowcaseSection } from './components/ServiceShowcaseSection';
import { CoreServicesGrid } from './components/CoreServicesGrid';
import { AboutHomeSection } from './components/AboutHomeSection';
import { WorkflowSection } from './components/WorkflowSection';
import { NetworkConnectionSection } from './components/NetworkConnectionSection';
import { TrustedPartnersSection } from './components/TrustedPartnersSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { TechStackSection } from './components/TechStackSection';
import { FaqAndConsultationSection } from './components/FaqAndConsultationSection';
import { ChatbotWidget } from './components/ChatbotWidget';
import { BackToTopButton } from './components/BackToTopButton';
import { COMPANY_INFO, WebPackage } from './data/siteData';
import { ArrowRight, Sparkles, Phone } from 'lucide-react';

export default function App() {
  const [currentView, setCurrentView] = useState<string>('home');
  const [activeServiceSlug, setActiveServiceSlug] = useState<string>('thiet-ke-website-tron-goi');
  const [activeThemeSlug, setActiveThemeSlug] = useState<string>('tuan-hong-tiles');
  const [activeNewsSlug, setActiveNewsSlug] = useState<string>('dich-vu-vps-nvme-giai-phap-toi-uu-cho-website-va-marketing-online');
  const [themeCategoryFilter, setThemeCategoryFilter] = useState<string>('all');
  const [themePackageFilter, setThemePackageFilter] = useState<string>('all');
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState<string>('');

  const navigateTo = (view: string, param?: string) => {
    if (view === 'service-detail' && param) {
      setActiveServiceSlug(param);
      setCurrentView('service-detail');
    } else if (view === 'theme-detail' && param) {
      setActiveThemeSlug(param);
      setCurrentView('theme-detail');
    } else if (view === 'news-detail' && param) {
      setActiveNewsSlug(param);
      setCurrentView('news-detail');
    } else if (view === 'themes') {
      if (param) setThemeCategoryFilter(param);
      else setThemeCategoryFilter('all');
      setCurrentView('themes');
    } else if (view === 'pricing') {
      if (param) setThemePackageFilter(param);
      setCurrentView('pricing');
    } else {
      setCurrentView(view);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectPackage = (pkg: WebPackage) => {
    setPreselectedService(`${pkg.name} - ${pkg.price}`);
    setCurrentView('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenConsultation = (serviceName: string) => {
    setPreselectedService(serviceName);
    setCurrentView('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans selection:bg-[#0baba0] selection:text-white">
      {/* Top Navbar matching exact univn.vn structure & colors */}
      <Navbar
        currentView={currentView}
        onNavigate={navigateTo}
        onOpenCalculator={() => setIsCalculatorOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1 w-full">
        
        {/* VIEW 1: HOME (Divided into alternating colored sections for rich, engaging visual experience) */}
        {currentView === 'home' && (
          <div className="w-full flex flex-col">
            
            {/* Section 1: Hero Banner Multi-Campaign Slider (Full Screen Sky & Device Showcase) */}
            <section id="hero-section" className="w-full overflow-hidden -mt-18 sm:-mt-20">
              <HeroSection
                onExploreThemes={() => navigateTo('themes')}
                onViewPricing={() => navigateTo('pricing')}
                onOpenCalculator={() => setIsCalculatorOpen(true)}
                onNavigateToService={(slug) => navigateTo('service-detail', slug)}
              />
            </section>

            {/* Section 1.5: Về Chúng Tôi (About Us Showcase - Transforming Ideas into Digital Reality) */}
            <section id="about-home-section" className="w-full bg-white border-b border-slate-200/80 pt-12 sm:pt-16 lg:pt-20 pb-12 sm:pb-16 lg:pb-20">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <AboutHomeSection onNavigateToAbout={() => navigateTo('about')} />
              </div>
            </section>

            {/* Section 2: Core Services Grid - Dịch Vụ Của Chúng Tôi (Soft Pearl-Stone Wash) */}
            <section id="services-home-section" className="w-full bg-[#f8fafc] border-b border-slate-200/80 py-12 sm:py-16">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <CoreServicesGrid
                  onNavigateToService={(slug) => navigateTo('service-detail', slug)}
                  onOpenCalculator={() => setIsCalculatorOpen(true)}
                />
              </div>
            </section>

            {/* Section 2.3: Trusted Partners Showcase (Được Tin Tưởng Bởi Hàng Nghìn Doanh Nghiệp - Horizontal Marquee) */}
            <section className="w-full bg-white border-b border-slate-200/80 py-12 sm:py-16">
              <TrustedPartnersSection />
            </section>

            {/* Section 2.5: Network Connection Showcase (Uni Creation và Giải Pháp Kết Nối Toàn Diện - Full Section, No Box Border) */}
            <section className="w-full bg-gradient-to-b from-[#f8fafc]/60 via-white to-white border-b border-slate-200/80 py-12 sm:py-16">
              <NetworkConnectionSection
                onLearnMore={() => navigateTo('about')}
                onConsult={() => {
                  setPreselectedService('Tư vấn kết nối giải pháp doanh nghiệp');
                  setCurrentView('contact');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              />
            </section>

            {/* Section 3: Pricing Packages & Comparison Matrix (Pure Crisp White Canvas) */}
            <section className="w-full bg-white border-b border-slate-200/80 py-12 sm:py-16">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <PricingSection
                  onSelectPackage={handleSelectPackage}
                  onOpenCalculator={() => setIsCalculatorOpen(true)}
                />
              </div>
            </section>

            {/* Section 5: Professional Workflow - Quy Trình Triển Khai 6 Bước (Subtle Teal Gradient Canvas) */}
            <section className="w-full bg-gradient-to-b from-slate-50 via-teal-50/30 to-white border-b border-teal-100/70 py-12 sm:py-16">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <WorkflowSection
                  onConsult={() => {
                    setPreselectedService('Tư vấn thiết kế website theo quy trình');
                    setCurrentView('contact');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                />
              </div>
            </section>

            {/* Section 6: Theme Explorer & Design Library (Cool Clean Pearl-Stone Canvas) */}
            <section className="w-full bg-[#f8fafc] border-b border-slate-200/80 py-12 sm:py-16">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
                <div>
                  <div className="space-y-1.5 w-full">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#0baba0]/10 border border-[#0baba0]/30 rounded-full text-xs font-semibold text-[#088c83]">
                      <Sparkles className="w-3.5 h-3.5 text-[#91c544]" />
                      <span>Kho Mẫu Thiết Kế Mới 2026</span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
                      Mẫu Website Đa Dạng Theo Từng Ngành Nghề
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-3xl">
                      Khám phá hơn 180+ giao diện độc bản chuẩn SEO, tốc độ siêu tốc và tối ưu chuyển đổi cho từng lĩnh vực kinh doanh.
                    </p>
                  </div>
                </div>

                <ThemeExplorer
                  initialCategory="gioi-thieu-cong-ty"
                  hideHeader={true}
                  onViewThemeDetail={(slug) => navigateTo('theme-detail', slug)}
                  onSelectTheme={(t) => {
                    setPreselectedService(`Mẫu website ${t.title} (${t.package})`);
                    setCurrentView('contact');
                  }}
                  onOpenCalculator={() => setIsCalculatorOpen(true)}
                />
              </div>
            </section>

            {/* Section 7: Domain Search & Availability Radar (Highlight Warm Mint Ribbon) */}
            <section className="w-full bg-gradient-to-r from-teal-50 via-emerald-100/40 to-teal-100/30 border-b border-teal-200/70 py-10 sm:py-14">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <DomainChecker />
              </div>
            </section>

            {/* Section 8: Why Choose Us - Lợi Thế Cạnh Tranh & 8 Cam Kết Vàng (Crisp Modern White) */}
            <section className="w-full bg-white border-b border-slate-200/70 py-12 sm:py-16">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <WhyChooseUsSection
                  onConsult={() => {
                    setPreselectedService('Tư vấn dịch vụ Uni Creation');
                    setCurrentView('contact');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                />
              </div>
            </section>

            {/* Section 9: Customer Testimonials - Khách Hàng Nói Gì Về Uni Creation? (Clean Modern Canvas Matching Screenshot) */}
            <section className="w-full bg-[#fafbfc] border-b border-slate-200/80 py-14 sm:py-20 lg:py-24">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <TestimonialsSection />
              </div>
            </section>

            {/* Section 10: Technologies We Use - Công Nghệ Chúng Tôi Sử Dụng */}
            <section className="w-full bg-white border-b border-slate-200/80 py-14 sm:py-20 lg:py-24">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <TechStackSection />
              </div>
            </section>

            {/* Section 11: News, Knowledge & Blog (Cool Slate Wash) */}
            <section className="w-full bg-slate-50/90 border-b border-slate-200/70 py-12 sm:py-16">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <NewsSection
                  isHomeView={true}
                  onViewPostDetail={(slug) => navigateTo('news-detail', slug)}
                  onViewAllPosts={() => navigateTo('news')}
                />
              </div>
            </section>

            {/* Section 12: FAQs & Consultation Form (Clean, Modern Light Canvas) */}
            <section className="w-full relative overflow-hidden bg-[#fafbfc] py-14 sm:py-20 lg:py-24 border-t border-b border-slate-200/80">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <FaqAndConsultationSection />
              </div>
            </section>

          </div>
        )}

        {/* VIEW 6: ABOUT US (Về Uni Creation - Hồ Sơ Năng Lực Doanh Nghiệp - FULL WIDTH) */}
        {currentView === 'about' && (
          <div className="w-full">
            <AboutView
              onConsult={(serviceName) => {
                setPreselectedService(serviceName || 'Tư vấn giải pháp chuyển đổi số & Hồ sơ năng lực');
                setCurrentView('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onExploreThemes={() => navigateTo('themes')}
            />
          </div>
        )}

        {/* VIEW 7: RECRUITMENT (Tuyển Dụng - FULL SECTION WIDTH) */}
        {currentView === 'recruitment' && (
          <div className="w-full">
            <RecruitmentView />
          </div>
        )}

        {/* VIEW 9: CONTACT & GOOGLE MAPS (Liên Hệ - FULL SECTION WIDTH) */}
        {currentView === 'contact' && (
          <div className="w-full">
            <ContactView
              preselectedService={preselectedService}
              onNavigateHome={() => navigateTo('home')}
            />
          </div>
        )}

        {/* VIEW: DEDICATED FULL-WIDTH SERVICES (All Service Detail Pages) */}
        {currentView === 'service-detail' && (
          <div className="w-full">
            <ServiceDetailView
              key={activeServiceSlug}
              serviceSlug={activeServiceSlug}
              onNavigateHome={() => navigateTo('home')}
              onOpenCalculator={() => setIsCalculatorOpen(true)}
              onNavigateToTheme={(slug) => navigateTo('theme-detail', slug)}
              onNavigateToThemes={() => navigateTo('themes')}
            />
          </div>
        )}

        {/* OTHER DEDICATED VIEWS (Pricing, Themes, News, Article Detail, Checkout, etc.) */}
        {currentView !== 'home' && currentView !== 'about' && currentView !== 'recruitment' && currentView !== 'contact' && currentView !== 'service-detail' && (
          <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">

            {/* VIEW 3: PRICING (Gói Startup, Gói Pro, Gói VIP) */}
            {currentView === 'pricing' && (
              <div className="space-y-12">
                <PricingSection
                  onSelectPackage={handleSelectPackage}
                  onOpenCalculator={() => setIsCalculatorOpen(true)}
                />
                <WhyChooseUsSection />
                <ContactView preselectedService={preselectedService || 'Gói Pro - 4.000.000 đ'} />
              </div>
            )}

            {/* VIEW 4: THEMES (With all 9 categories: Giới thiệu công ty, Bất động sản, Ô tô, Nội thất...) */}
            {currentView === 'themes' && (
              <div className="space-y-12">
                <ThemeExplorer
                  initialCategory={themeCategoryFilter}
                  initialPackage={themePackageFilter}
                  onSelectTheme={(t) => {
                    setPreselectedService(`Mẫu website ${t.title} (${t.package})`);
                    setCurrentView('contact');
                  }}
                  onViewThemeDetail={(slug) => navigateTo('theme-detail', slug)}
                  onOpenCalculator={() => setIsCalculatorOpen(true)}
                />
                <DomainChecker />
              </div>
            )}

            {/* VIEW 4.5: DEDICATED THEME DETAIL VIEW (Trang Chi Tiết Mẫu Giao Diện Web) */}
            {currentView === 'theme-detail' && (
              <ThemeDetailView
                themeSlug={activeThemeSlug}
                onNavigateHome={() => navigateTo('home')}
                onBackToThemes={() => navigateTo('themes')}
                onSelectThemeForConsult={(theme) => {
                  setPreselectedService(`Mẫu website ${theme.title} (${theme.package})`);
                  setCurrentView('contact');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                onOpenCalculator={() => setIsCalculatorOpen(true)}
                onViewOtherTheme={(slug) => navigateTo('theme-detail', slug)}
              />
            )}

            {/* VIEW 5: INFRASTRUCTURE SERVICES ECOSYSTEM */}
            {currentView === 'services' && (
              <div className="space-y-12">
                <InfrastructureServices onOpenConsultation={handleOpenConsultation} />
                <WhyChooseUsSection />
              </div>
            )}

            {/* VIEW 8: NEWS & KNOWLEDGE */}
            {currentView === 'news' && (
              <div className="space-y-12">
                <NewsSection onViewPostDetail={(slug) => navigateTo('news-detail', slug)} />
              </div>
            )}

            {/* VIEW 8.5: DEDICATED NEWS DETAIL VIEW */}
            {currentView === 'news-detail' && (
              <div className="space-y-12">
                <NewsDetailView
                  postSlug={activeNewsSlug}
                  onBackToNews={() => navigateTo('news')}
                  onNavigateHome={() => navigateTo('home')}
                  onSelectOtherPost={(slug) => navigateTo('news-detail', slug)}
                  onOpenContact={(subject) => {
                    setPreselectedService(subject || 'Tư vấn từ bài viết tin tức');
                    setCurrentView('contact');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                />
              </div>
            )}


            {/* VIEW 10: PAYMENT (Vietcombank & VietQR) */}
            {currentView === 'payment' && (
              <div className="space-y-12">
                <PaymentView />
              </div>
            )}

            {/* VIEW 11: POLICIES & LIFETIME WARRANTY */}
            {currentView === 'policies' && (
              <div className="space-y-12">
                <PolicyView />
              </div>
            )}

          </div>
        )}

      </main>

      {/* Footer with brand links and mirrors */}
      <Footer onNavigate={navigateTo} />

      {/* Mobile Sticky Quick Contact Bar */}
      <MobileStickyBar
        onOpenCalculator={() => setIsCalculatorOpen(true)}
        onNavigateToContact={() => navigateTo('contact')}
      />

      {/* Floating Desktop Quick Hotline & Zalo Buttons matching univn.vn */}
      <div className="hidden lg:flex fixed bottom-6 left-6 z-40 items-center gap-3">
        <a
          href={`tel:${COMPANY_INFO.hotline.replace(/\./g, '')}`}
          className="flex items-center gap-2.5 bg-red-600 hover:bg-red-700 text-white font-black text-xs px-4 py-2.5 rounded-full shadow-xl hover:scale-105 transition-all cursor-pointer ring-4 ring-red-500/20"
        >
          <span className="w-6 h-6 rounded-full bg-white text-red-600 flex items-center justify-center animate-pulse">
            <Phone className="w-3.5 h-3.5 fill-current" />
          </span>
          <span className="font-mono tracking-wide">{COMPANY_INFO.hotline}</span>
        </a>
      </div>

      {/* Floating Desktop Quick Zalo Button */}
      <div className="hidden lg:flex fixed bottom-20 right-6 z-40 flex-col items-end gap-3">
        <a
          href="https://zalo.me/0967508333"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-[#0baba0] hover:bg-[#088c83] text-white font-bold text-xs px-4 py-2.5 rounded-full shadow-xl hover:scale-105 transition-all cursor-pointer ring-4 ring-[#0baba0]/20"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-[#91c544] animate-ping"></span>
          <span>Tư Vấn Zalo 24/7</span>
        </a>
      </div>

      {/* Floating AI Chatbot Widget (Consultative AI Assistant) */}
      <ChatbotWidget
        onNavigate={navigateTo}
        onOpenCalculator={() => setIsCalculatorOpen(true)}
      />

      {/* Floating Smooth Back-To-Top Button with circular scroll progress */}
      <BackToTopButton />

      {/* Interactive Website Cost Calculator Modal */}
      <CostCalculator
        isOpen={isCalculatorOpen}
        onClose={() => setIsCalculatorOpen(false)}
        onSelectPackage={(pkgName) => {
          setPreselectedService(pkgName);
          setIsCalculatorOpen(false);
          navigateTo('contact');
        }}
      />

      {/* Global Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectResult={(type, id) => {
          if (type === 'service') {
            navigateTo('service-detail', id);
          } else if (type === 'theme') {
            navigateTo('theme-detail', id);
          } else if (type === 'news-detail') {
            navigateTo('news-detail', id);
          } else {
            navigateTo('news');
          }
        }}
      />
    </div>
  );
}
