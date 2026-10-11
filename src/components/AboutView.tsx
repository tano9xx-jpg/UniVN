import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { COMPANY_INFO } from '../data/siteData';
import { CLIENT_PROJECTS, ClientProjectItem } from '../data/clientProjectsData';
import { ClientProjectModal } from './ClientProjectModal';
import { AboutAiSection } from './AboutAiSection';
import { AiVideoDemoSection } from './AiVideoDemoSection';
import {
  Building2,
  Bot,
  ShieldCheck,
  Shield,
  Award,
  Target,
  Compass,
  HeartHandshake,
  Phone,
  Mail,
  MapPin,
  Printer,
  CheckCircle2,
  Users,
  Code2,
  Server,
  Zap,
  Check,
  ArrowRight,
  ExternalLink,
  ChevronRight,
  Sparkles,
  Star,
  Layers,
  Clock,
  TrendingUp,
  FileText,
  BadgeCheck,
  Briefcase,
  Monitor,
  Database,
  Lock,
  X,
  Share2,
  Laptop,
  Palette,
  Cpu,
  Flame,
  Lightbulb,
  Eye,
  Sliders,
  DollarSign,
  Car,
  Plane,
  Home,
  GraduationCap,
  ShoppingBag,
  Send,
  MessageSquare,
  Globe,
  Radio,
  CheckCheck,
  FolderKanban,
  Headphones,
  Search,
  Filter
} from 'lucide-react';

interface AboutViewProps {
  onConsult?: (serviceName?: string) => void;
  onExploreThemes?: () => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onConsult, onExploreThemes }) => {
  // E-Profile Modal state
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);

  // Client Project Modal state
  const [selectedProject, setSelectedProject] = useState<ClientProjectItem | null>(null);
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);

  // Industry Portfolio active tab
  const [activeIndustry, setActiveIndustry] = useState<number>(0);

  // 5-Step ISO Process active step
  const [activeStep, setActiveStep] = useState<number>(0);

  // Gallery Filter state
  const [galleryFilter, setGalleryFilter] = useState<'all' | 'workspace' | 'tech' | 'culture'>('all');

  // Pricing Comparison Tab state ('packages' | 'vs_others')
  const [comparisonTab, setComparisonTab] = useState<'packages' | 'vs_others'>('packages');

  // Clients & Partners Filter and Search State
  const [partnerCategory, setPartnerCategory] = useState<string>('all');
  const [partnerSearch, setPartnerSearch] = useState<string>('');

  // Contact Form State
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    service: 'Gói Doanh Nghiệp (Pro) - 4.000.000 VNĐ',
    notes: ''
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone) return;
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        fullName: '',
        phone: '',
        email: '',
        service: 'Gói Doanh Nghiệp (Pro) - 4.000.000 VNĐ',
        notes: ''
      });
    }, 5000);
  };

  const handleOpenProject = (proj: ClientProjectItem) => {
    setSelectedProject(proj);
    setIsProjectModalOpen(true);
  };

  const handlePrevProject = () => {
    if (!selectedProject) return;
    const currentIndex = CLIENT_PROJECTS.findIndex((p) => p.id === selectedProject.id);
    const prevIndex = (currentIndex - 1 + CLIENT_PROJECTS.length) % CLIENT_PROJECTS.length;
    setSelectedProject(CLIENT_PROJECTS[prevIndex]);
  };

  const handleNextProject = () => {
    if (!selectedProject) return;
    const currentIndex = CLIENT_PROJECTS.findIndex((p) => p.id === selectedProject.id);
    const nextIndex = (currentIndex + 1) % CLIENT_PROJECTS.length;
    setSelectedProject(CLIENT_PROJECTS[nextIndex]);
  };

  // Helper to categorize clients
  const getClientCategoryKey = (proj: ClientProjectItem): string => {
    const id = proj.id.toLowerCase();
    const cat = proj.category.toLowerCase();
    if (['vingroup', 'sun-group', 'novaland', 'cen-group', 'emera'].includes(id) || cat.includes('bất động sản') || cat.includes('địa ốc') || cat.includes('đa ngành')) {
      return 'corporation';
    }
    if (['techcombank', 'vpbank', 'bao-viet', 'vbi'].includes(id) || cat.includes('ngân hàng') || cat.includes('tài chính') || cat.includes('bảo hiểm')) {
      return 'finance';
    }
    if (['viettel', 'mobifone', 'lumi', 'fpt-skillking', 'dicom'].includes(id) || cat.includes('viễn thông') || cat.includes('iot') || cat.includes('thông minh') || cat.includes('công nghệ')) {
      return 'tech';
    }
    return 'retail';
  };

  const filteredClientProjects = CLIENT_PROJECTS.filter((proj) => {
    const matchCat = partnerCategory === 'all' || getClientCategoryKey(proj) === partnerCategory;
    const matchSearch =
      !partnerSearch.trim() ||
      proj.name.toLowerCase().includes(partnerSearch.toLowerCase()) ||
      proj.shortName.toLowerCase().includes(partnerSearch.toLowerCase()) ||
      proj.category.toLowerCase().includes(partnerSearch.toLowerCase()) ||
      proj.tagline.toLowerCase().includes(partnerSearch.toLowerCase());
    return matchCat && matchSearch;
  });

  // 4T Core Values
  const CORE_VALUES_4T = [
    {
      id: 'tan-tam',
      key: 'Tận Tâm',
      english: 'Dedication',
      badge: 'Chăm Sóc 24/7/365',
      icon: HeartHandshake,
      color: 'from-teal-500 to-emerald-500',
      bgColor: 'bg-teal-50',
      borderColor: 'border-teal-200',
      textColor: 'text-[#088c83]',
      desc: 'Hỗ trợ khách hàng 24/7/365, tiếp nhận và phản hồi xử lý mọi sự cố kỹ thuật trong vòng 15 – 30 phút.',
      points: [
        'Đội ngũ kỹ sư túc trực 24/7 không nghỉ lễ',
        'Phản hồi siêu tốc trong 15 – 30 phút',
        'Xử lý triệt để, không gián đoạn kinh doanh'
      ]
    },
    {
      id: 'tien-phong',
      key: 'Tiên Phong',
      english: 'Innovation',
      badge: 'Công Nghệ Đỉnh Cao',
      icon: Lightbulb,
      color: 'from-blue-600 to-indigo-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      textColor: 'text-blue-600',
      desc: 'Luôn đón đầu và cập nhật công nghệ web hiện đại nhất, hạ tầng Pure NVMe Enterprise và thuật toán Google Search.',
      points: [
        'Ứng dụng AI & tự động hóa vào UX/UI',
        'Hạ tầng Pure NVMe đọc ghi 3.420 MB/s',
        'Thuật toán chuẩn SEO Onpage Google mới nhất'
      ]
    },
    {
      id: 'tu-chu',
      key: 'Tự Chủ',
      english: 'Ownership',
      badge: '100% Source Code',
      icon: ShieldCheck,
      color: 'from-emerald-500 to-teal-600',
      bgColor: 'bg-emerald-50',
      borderColor: 'border-emerald-200',
      textColor: 'text-emerald-600',
      desc: 'Bàn giao 100% toàn bộ mã nguồn và dữ liệu gốc, trao quyền sở hữu tuyệt đối tài sản số cho khách hàng.',
      points: [
        'Bàn giao đầy đủ Full Source Code & Database',
        'Không mã hóa hay giữ bản quyền ngầm',
        'Tự do lưu trữ và nâng cấp không giới hạn'
      ]
    },
    {
      id: 'thuc-chat',
      key: 'Thực Chất',
      english: 'Effectiveness',
      badge: 'Tối Ưu Chuyển Đổi (CRO)',
      icon: Target,
      color: 'from-amber-500 to-orange-500',
      bgColor: 'bg-amber-50',
      borderColor: 'border-amber-200',
      textColor: 'text-amber-600',
      desc: 'Website thiết kế ra phải bán được hàng, phải chuẩn SEO lên top Google và tối ưu chuyển đổi doanh thu thực tế.',
      points: [
        'Tối ưu chuyển đổi (CRO) từng vị trí nút bấm',
        'Tốc độ Google PageSpeed PC đạt 70 – 95+ điểm',
        'Báo cáo hiệu quả minh bạch, rõ ràng'
      ]
    }
  ];

  // Leadership Team
  const LEADERSHIP_MEMBERS = [
    {
      name: 'Nguyễn Văn Tuấn',
      role: 'Founder & Giám Đốc Điều Hành (CEO)',
      experience: '11+ năm kinh nghiệm',
      expertise: 'Chiến lược Sản phẩm & Kiến trúc Hệ thống',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80',
      desc: 'Người đặt nền móng cho triết lý "Cái tâm, cái tầm", dẫn dắt Uni Creation từ 2015 trở thành đối tác tin cậy của 1.200+ doanh nghiệp.'
    },
    {
      name: 'Trần Minh Đức',
      role: 'Giám Đốc Công Nghệ (CTO)',
      experience: '12+ năm kinh nghiệm',
      expertise: 'Cloud NVMe Architecture, Full-stack Security',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80',
      desc: 'Chuyên gia cao cấp về hạ tầng đám mây phân tán, tối ưu hóa tốc độ tải trang dưới 1.5 giây và bảo mật web đa tầng.'
    },
    {
      name: 'Lê Phương Thảo',
      role: 'Trưởng Phòng Thiết Kế Sáng Tạo (Head of UI/UX)',
      experience: '8+ năm kinh nghiệm',
      expertise: 'Design Systems, Human-Centric UX, Micro-interactions',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
      desc: 'Định hình ngôn ngữ thị giác hiện đại, chuẩn hóa trải nghiệm giao diện người dùng theo DNA thương hiệu từng đối tác.'
    },
    {
      name: 'Hoàng Thu Trang',
      role: 'Trưởng Phòng Dịch Vụ Khách Hàng (Customer Success)',
      experience: '7+ năm kinh nghiệm',
      expertise: 'Quy trình ISO, Đào tạo Quản trị & Hỗ trợ 24/7',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80',
      desc: 'Phụ trách tiêu chuẩn phản hồi kỹ thuật 15 – 30 phút, cam kết 99.4% sự hài lòng của khách hàng trên toàn quốc.'
    }
  ];

  // Photo Gallery
  const GALLERY_PHOTOS = [
    {
      id: 'p1',
      category: 'workspace',
      title: 'Không Gian Mở Sáng Tạo Tại Trụ Sở Hà Nội',
      desc: 'Khu vực làm việc mở tràn ngập ánh sáng tự nhiên kích thích tư duy giải pháp.',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
      tag: 'Trụ Sở 303 Vũ Tông Phan'
    },
    {
      id: 'p2',
      category: 'tech',
      title: 'Phòng Lab R&D & Thử Nghiệm Công Nghệ Mới',
      desc: 'Nơi các kỹ sư thử nghiệm kiến trúc AI, Next.js và tối ưu PageSpeed 98/100.',
      image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80',
      tag: 'Software Lab'
    },
    {
      id: 'p3',
      category: 'tech',
      title: 'Hạ Tầng Cụm Máy Chủ NVMe Pure SSD Enterprise',
      desc: 'Trung tâm dữ liệu tiêu chuẩn quốc tế Viettel IDC Tier 3 với băng thông không giới hạn.',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
      tag: 'Cloud Server Tier 3'
    },
    {
      id: 'p4',
      category: 'culture',
      title: 'Buổi Tư Vấn Chiến Lược Trực Tiếp Cho Doanh Nghiệp',
      desc: 'Chuyên gia Univn ngồi lại cùng chủ doanh nghiệp phân tích hành vi khách hàng.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80',
      tag: 'Tư Vấn Giải Pháp'
    },
    {
      id: 'p5',
      category: 'culture',
      title: 'Đào Tạo Nghiệp Vụ & Nâng Cao Kỹ Năng Đội Ngũ',
      desc: 'Chương trình huấn luyện công nghệ và chuẩn hóa chăm sóc khách hàng hàng tuần.',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
      tag: 'Văn Hóa Gắn Kết'
    },
    {
      id: 'p6',
      category: 'workspace',
      title: 'Phòng Hội Thảo Trực Tuyến & Kết Nối 3 Miền',
      desc: 'Kết nối thông suốt giữa các chi nhánh Hà Nội, Đà Nẵng và TP. Hồ Chí Minh.',
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80',
      tag: 'Hệ Thống 3 Miền'
    }
  ];

  const filteredGallery = galleryFilter === 'all'
    ? GALLERY_PHOTOS
    : GALLERY_PHOTOS.filter(p => p.category === galleryFilter);

  // 5 Strategic USPs
  const STRATEGIC_USPS = [
    {
      number: '01',
      title: 'Bàn Giao 100% Bộ Mã Nguồn (Source Code)',
      subtitle: 'Toàn Quyền Sở Hữu Tài Sản Số',
      icon: Code2,
      desc: 'Khách hàng toàn quyền tải về, sao lưu hoặc di dời sang bất kỳ server nào mà không bị giữ mã nguồn hay phụ thuộc đơn vị thiết kế.',
      tag: 'Quyền Sở Hữu Tuyệt Đối',
      badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200'
    },
    {
      number: '02',
      title: 'Bảo Hành Kỹ Thuật Trọn Đời (Lifetime)',
      subtitle: 'Vận Hành Ổn Định Suốt Đời',
      icon: ShieldCheck,
      desc: 'Cam kết sửa lỗi, vá lỗ hổng bảo mật và bảo trì vận hành trong suốt vòng đời sử dụng (khi lưu trữ trên hạ tầng máy chủ Univn).',
      tag: 'Bảo Hành Trọn Đời',
      badgeColor: 'bg-blue-50 text-blue-700 border-blue-200'
    },
    {
      number: '03',
      title: 'Chính Sách Hoàn Tiền 100%',
      subtitle: 'Bảo Vệ Quyền Lợi Tuyệt Đối',
      icon: Award,
      desc: 'Cam kết hoàn tiền 100% nếu sản phẩm bàn giao không đáp ứng đúng thỏa thuận và các tiêu chuẩn trong cam kết hợp đồng pháp lý.',
      tag: 'Cam Kết Bằng Hợp Đồng',
      badgeColor: 'bg-amber-50 text-amber-700 border-amber-200'
    },
    {
      number: '04',
      title: 'Chuẩn SEO Độc Quyền & Tốc Độ Siêu Tốc',
      subtitle: 'Google PageSpeed 70 – 90+ Điểm',
      icon: Zap,
      desc: 'Cấu trúc Silo rõ ràng, Schema chuẩn thực thể doanh nghiệp, nén ảnh WebP thế hệ mới, tốc độ tải trang thần tốc dưới 1.5 giây.',
      tag: 'Google PageSpeed 70-90+',
      badgeColor: 'bg-teal-50 text-[#088c83] border-teal-200'
    },
    {
      number: '05',
      title: 'Hỗ Trợ Kỹ Thuật Siêu Tốc 15 – 30 Phút',
      subtitle: 'Đội Ngũ Túc Trực 24/7/365',
      icon: Clock,
      desc: 'Kỹ thuật viên chuyên trách túc trực hỗ trợ giải quyết sự cố kỹ thuật từ 15 – 30 phút, đảm bảo kinh doanh không bao giờ gián đoạn.',
      tag: 'Phản Hồi Siêu Tốc',
      badgeColor: 'bg-purple-50 text-purple-700 border-purple-200'
    },
    {
      number: '06',
      title: 'Tiên Phong Ứng Dụng AI & Tính Năng Thông Minh',
      subtitle: 'Trợ Lý AI 24/7 & Tự Động Hóa SEO',
      icon: Sparkles,
      desc: 'Tích hợp trợ lý AI Chatbot thông minh tự động tư vấn báo giá, sinh bài viết chuẩn SEO và quét hóa đơn VietQR tự động, bứt phá doanh số.',
      tag: 'Công Nghệ AI Tiên Phong',
      badgeColor: 'bg-teal-50 text-[#088c83] border-teal-200'
    }
  ];

  // 6 Industry Specific Solutions
  const INDUSTRY_SOLUTIONS = [
    {
      id: 'ecommerce',
      title: 'Thương Mại Điện Tử & Bán Lẻ',
      icon: ShoppingBag,
      tag: 'E-Commerce & Retail',
      summary: 'Quản lý kho hàng thông minh, biến thể màu sắc/kích thước, cổng thanh toán tự động QR/VNPay/Momo, giỏ hàng checkout 1 bước.',
      image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=800&q=80',
      features: [
        'Hệ thống quản lý tồn kho và biến thể sản phẩm đa tầng',
        'Tích hợp thanh toán trực tuyến quét mã VietQR, VNPay, MoMo, Visa/Master',
        'Quy trình giỏ hàng và đặt hàng tinh gọn 1 bước (One-step Checkout)',
        'Đồng bộ đơn hàng tự động và thông báo qua Email & Telegram'
      ],
      metrics: 'Tăng 42% tỷ lệ hoàn tất đơn hàng so với web thông thường',
      demoClient: 'Giày Da Smartmen, Thời Trang Hàng Hiệu'
    },
    {
      id: 'realestate',
      title: 'Bất Động Sản & Dự Án',
      icon: Home,
      tag: 'Real Estate & Projects',
      summary: 'Tích hợp bộ lọc diện tích/mức giá, bản đồ định vị vị trí dự án, xem mặt bằng căn hộ, form thu hút khách hàng tiềm năng nét.',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80',
      features: [
        'Bộ lọc tìm kiếm đa tiêu chí: Vị trí, phân khúc giá, diện tích, hướng nhà',
        'Tích hợp bản đồ quy hoạch số và hạ tầng kết nối liên vùng',
        'Thư viện mặt bằng tầng căn hộ tương tác 360 độ và Virtual Tour',
        'Biểu mẫu nhận bảng giá (Lead Form) tối ưu tỷ lệ chuyển đổi khách nét'
      ],
      metrics: 'Tối ưu chi phí mỗi Lead chất lượng giảm đến 35%',
      demoClient: 'Tập Đoàn Sun Group, Emera Group'
    },
    {
      id: 'travel',
      title: 'Du Lịch & Lữ Hành',
      icon: Plane,
      tag: 'Travel & Hospitality',
      summary: 'Module đặt tour trực tuyến, quản lý lịch khởi hành, đếm số chỗ khả dụng, tích hợp đánh giá khách hàng thực tế.',
      image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=800&q=80',
      features: [
        'Bộ máy đặt tour và kiểm tra tình trạng chỗ trống theo thời gian thực',
        'Quản lý bảng giá theo ngày khởi hành (Mùa cao điểm / Ngày thường)',
        'Thanh toán đặt cọc trực tuyến linh hoạt nhiều cổng thanh toán',
        'Hệ thống đánh giá và chứng thực trải nghiệm khách hàng chuẩn SEO'
      ],
      metrics: 'Tự động hóa 80% quy trình tư vấn và giữ chỗ tour',
      demoClient: 'Việt Tour Luxury, Vietnam Discovery Travel'
    },
    {
      id: 'automotive',
      title: 'Ô Tô, Xe Máy & Showroom',
      icon: Car,
      tag: 'Automotive & Showroom',
      summary: 'Tính toán chi phí lăn bánh theo tỉnh thành, bảng dự toán vay ngân hàng trả góp, nút đặt lịch hẹn lái thử tức thì.',
      image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80',
      features: [
        'Công cụ tính chi phí lăn bánh chính xác theo biểu phí từng tỉnh thành',
        'Bảng tính kế hoạch vay vốn trả góp ngân hàng với lãi suất linh hoạt',
        'Form đặt lịch lái thử xe tại showroom với định vị chi nhánh gần nhất',
        'So sánh thông số kỹ thuật trực quan giữa các phiên bản xe'
      ],
      metrics: 'Gấp 3 lần lượt đăng ký lái thử trực tiếp từ kênh website',
      demoClient: 'Tập đoàn Ô tô Hòa Bình Minh, TCE Machinery'
    },
    {
      id: 'interior',
      title: 'Kiến Trúc, Nội Thất & Xây Dựng',
      icon: Palette,
      tag: 'Architecture & Construction',
      summary: 'Thư viện công trình chuẩn WebP sắc nét, hồ sơ năng lực dự án tải tốc độ cao, dự toán báo giá thi công trọn gói.',
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80',
      features: [
        'Thư viện ảnh công trình độ nét cực cao chuẩn WebP, tải dưới 1 giây',
        'Phân loại dự án theo phong cách: Hiện đại, Tân cổ điển, Indochine, Tối giản',
        'Module tính toán chi phí xây thô và hoàn thiện nội thất sơ bộ',
        'Tải Profile năng lực công ty trực tiếp với dung lượng tối ưu'
      ],
      metrics: 'Thời gian dừng chân của khách hàng trên trang tăng 2.8 lần',
      demoClient: 'Thiết bị Hiwin, Luxuryfan Quạt Mỹ, Tuấn Hồng Tiles'
    },
    {
      id: 'education',
      title: 'Giáo Dục, Đào Tạo & Du Học',
      icon: GraduationCap,
      tag: 'Education & Study Abroad',
      summary: 'Cổng tra cứu học bổng theo quốc gia, hệ thống form đăng ký tư vấn visa, lịch kiểm tra trình độ xếp lớp tự động.',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80',
      features: [
        'Hệ thống tra cứu học bổng và danh sách trường đối tác theo quốc gia',
        'Form đăng ký tư vấn xét duyệt hồ sơ du học và định cư đa tầng',
        'Lịch thi thử và kiểm tra trình độ trực tuyến (Online Placement Test)',
        'Quản lý lịch khai giảng và hệ thống khóa học theo lộ trình'
      ],
      metrics: 'Thu hút hơn 5.000+ hồ sơ đăng ký tư vấn khóa học mỗi tháng',
      demoClient: 'Scots English Australia, FPT Aptech Skillking, Babilala'
    }
  ];

  // Tech Stack Matrix
  const TECH_STACK_ITEMS = [
    { name: 'React 19 & Next.js 15', role: 'Frontend Framework Siêu Tốc', icon: Code2, color: 'text-cyan-600 bg-cyan-50' },
    { name: 'TypeScript & Tailwind', role: 'Mã Nguồn Chặt Chẽ & Responsive', icon: Cpu, color: 'text-blue-600 bg-blue-50' },
    { name: 'Generative AI & LLMs', role: 'Tích Hợp Chatbot & Tự Động Hóa SEO', icon: Bot, color: 'text-purple-600 bg-purple-50' },
    { name: 'Node.js & PHP Laravel', role: 'Backend Hiệu Năng Cao & Bảo Mật', icon: Server, color: 'text-emerald-600 bg-emerald-50' },
    { name: 'Pure NVMe Enterprise', role: 'Ổ Cứng Tốc Độ Đọc 3.420 MB/s', icon: Zap, color: 'text-amber-600 bg-amber-50' },
    { name: 'Viettel IDC Tier 3', role: 'Trung Tâm Dữ Liệu Quốc Tế Uptime 99.9%', icon: Database, color: 'text-red-600 bg-red-50' },
    { name: 'Cloudflare Enterprise CDN', role: 'Tăng Tốc Toàn Cầu & Chống DDoS', icon: Globe, color: 'text-orange-600 bg-orange-50' },
    { name: 'SSL 256-Bit Certificate', role: 'Mã Hóa Dữ Liệu Ngân Hàng', icon: Lock, color: 'text-teal-600 bg-teal-50' }
  ];

  // 5-Step ISO Process
  const ISO_5_STEPS = [
    {
      step: '01',
      title: 'Tư Vấn & Ký Kết Hợp Đồng',
      subtitle: 'Khảo sát nhu cầu – Đề xuất giải pháp – Ký kết hợp đồng',
      timeline: 'Ngày 01',
      icon: FileText,
      desc: 'Chuyên viên kỹ thuật khảo sát chi tiết yêu cầu ngành nghề, tư vấn kiến trúc website, gói hạ tầng máy chủ tối ưu và ký hợp đồng bảo đảm quyền lợi kèm tạm ứng 50%.',
      deliverables: [
        'Bản đặc tả yêu cầu tính năng chi tiết (SRS)',
        'Báo giá chi tiết kèm hợp đồng pháp lý đầy đủ',
        'Biên bản tạm ứng 50% theo tiến độ cam kết'
      ]
    },
    {
      step: '02',
      title: 'Thiết Kế UI/UX Demo',
      subtitle: 'Lên bản vẽ giao diện – Tùy chỉnh màu sắc – Khách duyệt demo',
      timeline: 'Ngày 02 – 03',
      icon: Palette,
      desc: 'Đội ngũ UI/UX thiết kế bản vẽ độc bản theo đúng bộ nhận diện thương hiệu. Tối ưu trải nghiệm thao tác người dùng và gửi demo trực quan để khách hàng duyệt.',
      deliverables: [
        'Bản vẽ giao diện trang chủ và các trang con mẫu',
        'Tùy chỉnh phối màu, typography chuẩn thương hiệu',
        'Khách hàng nghiệm thu bản thiết kế UI/UX'
      ]
    },
    {
      step: '03',
      title: 'Lập Trình AI Copilot & Tối Ưu SEO',
      subtitle: 'Phát triển tính năng – Tối ưu Onpage SEO – Tích hợp tính năng AI thông minh',
      timeline: 'Ngày 04 – 07',
      icon: Code2,
      desc: 'Lập trình viên kết hợp trợ lý AI Code Copilot chuyển hóa bản vẽ thành mã nguồn sạch. Tối ưu Onpage SEO 100%, tích hợp các module AI Chatbot / tìm kiếm thông minh theo yêu cầu và chuẩn hóa Schema dữ liệu thực thể.',
      deliverables: [
        'Mã nguồn sạch, chuẩn Semantic HTML5 & CSS3',
        'Tối ưu Onpage SEO 100% và tốc độ PageSpeed cao',
        'Tích hợp module AI thông minh & bài viết mẫu chuẩn SEO'
      ]
    },
    {
      step: '04',
      title: 'Nghiệm Thu & Đào Tạo Quản Trị',
      subtitle: 'Kiểm thử đa thiết bị – Bàn giao tài khoản – Hướng dẫn chi tiết',
      timeline: 'Ngày 08 – 09',
      icon: Laptop,
      desc: 'Kiểm thử toàn diện trên mọi kích thước màn hình PC, Tablet, Mobile. Bàn giao tài khoản quản trị hệ thống và video clip/tài liệu hướng dẫn sử dụng trực quan.',
      deliverables: [
        'Báo cáo kiểm thử tương thích đa trình duyệt & di động',
        'Tài khoản quản trị cấp cao với bảo mật 2 lớp',
        'Video và tài liệu đào tạo quản trị web chi tiết'
      ]
    },
    {
      step: '05',
      title: 'Bàn Giao Source Code & Kích Hoạt Bảo Hành',
      subtitle: 'Bàn giao 100% mã nguồn – Thanh toán 50% – Kích hoạt bảo hành trọn đời',
      timeline: 'Ngày 10 & Trọn đời',
      icon: ShieldCheck,
      desc: 'Bàn giao toàn bộ 100% mã nguồn gốc và cơ sở dữ liệu cho khách hàng sở hữu tuyệt đối. Quyết toán 50% còn lại và kích hoạt chế độ bảo hành kỹ thuật trọn đời 24/7.',
      deliverables: [
        'Trọn bộ Full Source Code và Database gốc',
        'Biên bản bàn giao và thanh lý hợp đồng',
        'Kích hoạt bảo hành kỹ thuật trọn đời trên Hosting Uni'
      ]
    }
  ];

  // Pricing Packages
  const PRICING_PACKAGES = [
    {
      id: 'startup',
      name: 'Gói Startup',
      price: 'Từ 2.500.000 VNĐ',
      tag: 'Khởi Nghiệp Tối Ưu',
      highlight: false,
      desc: 'Phù hợp cho cá nhân kinh doanh, hộ kinh doanh và doanh nghiệp mới thành lập muốn có website chuẩn SEO nhanh chóng với chi phí tiết kiệm nhất.',
      features: [
        { label: 'Giao diện (UI/UX)', val: 'Chọn từ kho 1.000+ mẫu đa ngành nghề' },
        { label: 'Bàn giao Source Code', val: 'Có – Toàn quyền sở hữu 100%', bold: true },
        { label: 'Bảo mật SSL', val: 'Cung cấp miễn phí trọn đời' },
        { label: 'Tối ưu SEO Onpage', val: 'Chuẩn SEO Google Onpage 100%' },
        { label: 'Tốc độ Google Speed', val: 'PC 70+ điểm' },
        { label: 'Bảo hành kỹ thuật', val: 'Trọn đời (khi dùng Host Uni)', bold: true },
        { label: 'Bài viết mẫu tặng kèm', val: 'Tặng 10 bài viết demo chuẩn SEO' },
        { label: 'Ưu đãi tặng kèm', val: 'Giảm 5% Email DN + Voucher Ads 200k' }
      ]
    },
    {
      id: 'pro',
      name: 'Gói Doanh Nghiệp (Pro)',
      price: 'Từ 4.000.000 VNĐ',
      tag: 'Nổi Bật · Khuyên Dùng',
      highlight: true,
      desc: 'Lựa chọn số 1 của hơn 80% doanh nghiệp vừa và nhỏ (SMEs). Thiết kế tùy biến nhận diện thương hiệu, chuẩn SEO chuyên sâu và tối ưu tỷ lệ chuyển đổi.',
      features: [
        { label: 'Giao diện (UI/UX)', val: 'Tùy biến chuẩn nhận diện thương hiệu' },
        { label: 'Bàn giao Source Code', val: 'Có – Toàn quyền sở hữu 100%', bold: true },
        { label: 'Bảo mật SSL', val: 'Cung cấp miễn phí trọn đời' },
        { label: 'Tối ưu SEO Onpage', val: 'Chuẩn SEO nâng cao, Schema thực thể' },
        { label: 'Tốc độ Google Speed', val: 'PC 75 – 85+ điểm' },
        { label: 'Bảo hành kỹ thuật', val: 'Trọn đời (khi dùng Host Uni)', bold: true },
        { label: 'Bài viết mẫu tặng kèm', val: 'Tặng 15 bài viết chuẩn SEO chuyên sâu' },
        { label: 'Ưu đãi tặng kèm', val: 'Giảm 7% Email DN + Voucher Ads 300k' }
      ]
    },
    {
      id: 'vip',
      name: 'Gói VIP / Custom',
      price: 'Báo Giá Theo Yêu Cầu',
      tag: 'Độc Quyền · Cao Cấp',
      highlight: false,
      desc: 'Dành cho tập đoàn, thương hiệu lớn hoặc dự án có tính năng phức tạp. Thiết kế độc bản 100%, hiệu ứng chuyển động chuyên sâu và hạ tầng chuyên dụng.',
      features: [
        { label: 'Giao diện (UI/UX)', val: 'Thiết kế độc quyền 100% theo yêu cầu' },
        { label: 'Bàn giao Source Code', val: 'Có – Toàn quyền sở hữu 100%', bold: true },
        { label: 'Bảo mật SSL', val: 'SSL Doanh nghiệp nâng cao chuyên dụng' },
        { label: 'Tối ưu SEO Onpage', val: 'Chuẩn SEO đa tầng & Cấu trúc Silo' },
        { label: 'Tốc độ Google Speed', val: 'Tối ưu PC/Mobile 85 – 95+ điểm' },
        { label: 'Bảo hành kỹ thuật', val: 'Trọn đời (khi dùng Host Uni)', bold: true },
        { label: 'Bài viết mẫu tặng kèm', val: 'Tặng 30 bài viết chuẩn SEO chất lượng cao' },
        { label: 'Ưu đãi tặng kèm', val: 'Giảm 10% Email DN + Voucher Ads 500k' }
      ]
    }
  ];

  interface PackageComparisonRow {
    criterion: string;
    startup: string;
    pro: string;
    vip: string;
    isPrice?: boolean;
    isBadge?: boolean;
    isHighlight?: boolean;
    isBold?: boolean;
  }

  interface PackageComparisonGroup {
    groupTitle: string;
    rows: PackageComparisonRow[];
  }

  // Column-based Detailed Package Comparison Data
  const PACKAGE_COMPARISON_GROUPS: PackageComparisonGroup[] = [
    {
      groupTitle: 'Chi Phí & Tiến Độ Triển Khai',
      rows: [
        {
          criterion: 'Chi phí trọn gói',
          startup: 'Từ 2.500.000 VNĐ',
          pro: 'Từ 4.000.000 VNĐ',
          vip: 'Báo Giá Theo Yêu Cầu',
          isPrice: true
        },
        {
          criterion: 'Chi phí phát sinh',
          startup: 'Cam kết 0đ',
          pro: 'Cam kết 0đ',
          vip: 'Cam kết 0đ',
          isBadge: true
        },
        {
          criterion: 'Thời gian bàn giao demo',
          startup: '3 – 5 ngày',
          pro: '7 – 10 ngày',
          vip: '15 – 25 ngày'
        }
      ]
    },
    {
      groupTitle: 'Giao Diện Thiết Kế & Bản Quyền (UI/UX)',
      rows: [
        {
          criterion: 'Phong cách thiết kế giao diện',
          startup: 'Chọn từ kho 1.000+ mẫu đa ngành',
          pro: 'Tùy biến chuẩn nhận diện thương hiệu',
          vip: 'Thiết kế độc quyền 100% độc bản',
          isBold: true
        },
        {
          criterion: 'Bàn giao 100% Source Code',
          startup: 'Toàn quyền sở hữu 100%',
          pro: 'Toàn quyền sở hữu 100%',
          vip: 'Toàn quyền sở hữu 100%',
          isHighlight: true
        },
        {
          criterion: 'Tối ưu Responsive đa thiết bị',
          startup: 'PC, Tablet & Mobile',
          pro: 'PC, Tablet & Mobile',
          vip: 'Pixel-Perfect từng kích thước'
        },
        {
          criterion: 'Hiệu ứng chuyển động (Motion & Micro-interactions)',
          startup: 'Tiêu chuẩn mượt mà',
          pro: 'Hiện đại, bắt mắt & bay bổng',
          vip: 'Độc quyền theo kịch bản thương hiệu'
        }
      ]
    },
    {
      groupTitle: 'Chuẩn SEO, Tốc Độ & Nội Dung',
      rows: [
        {
          criterion: 'Tối ưu SEO Onpage Google',
          startup: 'Chuẩn SEO Onpage 100%',
          pro: 'Chuẩn SEO nâng cao, Schema thực thể',
          vip: 'Chuẩn SEO đa tầng & Cấu trúc Silo',
          isBold: true
        },
        {
          criterion: 'Tốc độ Google PageSpeed',
          startup: 'PC 70+ điểm',
          pro: 'PC 75 – 85+ điểm',
          vip: 'Tối ưu siêu tốc 85 – 95+ điểm',
          isBold: true
        },
        {
          criterion: 'Chuẩn Core Web Vitals (LCP, FID, CLS)',
          startup: 'Đạt chuẩn Google',
          pro: 'Đạt chuẩn xuất sắc',
          vip: 'Tối ưu chuyên sâu theo ngành'
        },
        {
          criterion: 'Bài viết demo chuẩn SEO tặng kèm',
          startup: 'Tặng 10 bài viết demo',
          pro: 'Tặng 15 bài viết chuyên sâu',
          vip: 'Tặng 30 bài viết chất lượng cao'
        }
      ]
    },
    {
      groupTitle: 'Ứng Dụng Trí Tuệ Nhân Tạo (AI) & Tính Năng Thông Minh',
      rows: [
        {
          criterion: 'Trợ lý AI Chatbot trực bán hàng 24/7',
          startup: 'Tùy chọn tích hợp thêm',
          pro: 'Tặng cấu hình AI Chatbot cơ bản',
          vip: 'AI Chatbot huấn luyện Catalog chuyên sâu',
          isBold: true
        },
        {
          criterion: 'Công cụ AI viết bài & gợi ý từ khóa SEO',
          startup: 'Hỗ trợ hướng dẫn cơ bản',
          pro: 'Tích hợp Editor & Prompt SEO Onpage',
          vip: 'AI Auto-Writer & Schema tự động 100%',
          isBold: true
        },
        {
          criterion: 'Tính năng AI gợi ý sản phẩm mua kèm (CRO)',
          startup: 'Không hỗ trợ',
          pro: 'Gợi ý sản phẩm liên quan thông minh',
          vip: 'Smart Recommendation Engine đa tầng'
        },
        {
          criterion: 'AI đối soát thanh toán VietQR (OCR)',
          startup: 'Không hỗ trợ',
          pro: 'Tùy chọn tích hợp',
          vip: 'Tích hợp quét biên lai VietQR tự động 100%'
        }
      ]
    },
    {
      groupTitle: 'Hạ Tầng Lưu Trữ & An Toàn Bảo Mật',
      rows: [
        {
          criterion: 'Tên miền quốc tế (.com / .net)',
          startup: 'Tặng miễn phí 1 năm',
          pro: 'Tặng miễn phí 1 năm',
          vip: 'Tặng miễn phí 1 năm'
        },
        {
          criterion: 'Dung lượng Hosting máy chủ',
          startup: 'SSD Cloud 1.000 MB',
          pro: 'NVMe Pure SSD 3.000 MB',
          vip: 'NVMe Dedicated / Cluster riêng',
          isBold: true
        },
        {
          criterion: 'Chứng chỉ bảo mật SSL',
          startup: 'Miễn phí trọn đời',
          pro: 'Miễn phí trọn đời',
          vip: 'SSL Doanh nghiệp cao cấp'
        },
        {
          criterion: 'Tự động sao lưu dữ liệu (Backup)',
          startup: 'Hàng tuần',
          pro: 'Hàng tuần tự động',
          vip: 'Hàng ngày (Daily Dual Backup)'
        }
      ]
    },
    {
      groupTitle: 'Chính Sách Bảo Hành & Hỗ Trợ 24/7',
      rows: [
        {
          criterion: 'Bảo hành kỹ thuật',
          startup: 'Trọn đời (khi dùng Host Uni)',
          pro: 'Trọn đời (khi dùng Host Uni)',
          vip: 'Trọn đời (khi dùng Host Uni)',
          isHighlight: true
        },
        {
          criterion: 'Thời gian hỗ trợ phản hồi',
          startup: 'Giờ hành chính & Khẩn cấp',
          pro: '24/7 ưu tiên dưới 15 phút',
          vip: 'Kỹ sư trưởng phục vụ riêng 24/7'
        },
        {
          criterion: 'Cam kết hoàn tiền 100%',
          startup: 'Có – theo hợp đồng pháp lý',
          pro: 'Có – theo hợp đồng pháp lý',
          vip: 'Có – theo hợp đồng pháp lý',
          isHighlight: true
        },
        {
          criterion: 'Ưu đãi & Voucher khuyến mại',
          startup: 'Giảm 5% Email + Ads 200k',
          pro: 'Giảm 7% Email + Ads 300k',
          vip: 'Giảm 10% Email + Ads 500k'
        }
      ]
    }
  ];

  // Direct 1:1 reproduction of Screenshot 2 (Uni Creation vs Đơn vị khác)
  const VS_OTHERS_DATA = [
    { criterion: 'Kinh nghiệm ngành', uni: '9+ năm (2015)', other: '1-3 năm', uniIsCheck: false, otherIsCross: false },
    { criterion: 'Google Premium Partner', uni: true, other: false, uniIsCheck: true, otherIsCross: true },
    { criterion: 'Đội ngũ thiết kế chuyên nghiệp', uni: true, other: 'Ngoài luồng', uniIsCheck: true, otherIsCross: false },
    { criterion: 'Bảo hành website', uni: 'Trọn đời', other: '6-12 tháng', uniIsCheck: false, otherIsCross: false, uniHighlight: true },
    { criterion: 'Hỗ trợ 24/7', uni: true, other: 'Giờ hành chính', uniIsCheck: true, otherIsCross: false },
    { criterion: 'Chuẩn SEO Core Web Vitals', uni: true, other: false, uniIsCheck: true, otherIsCross: true },
    { criterion: 'Tối ưu tốc độ tải (<2s)', uni: true, other: '3-5s', uniIsCheck: true, otherIsCross: false },
    { criterion: 'Responsive đa thiết bị', uni: true, other: 'Một phần', uniIsCheck: true, otherIsCross: false },
    { criterion: 'Báo cáo phân tích định kỳ', uni: 'Hàng tháng', other: 'Không có', uniIsCheck: false, otherIsCross: false },
    { criterion: 'Đa văn phòng (3 chi nhánh)', uni: true, other: false, uniIsCheck: true, otherIsCross: true },
    { criterion: 'SLA cam kết thời gian', uni: '99.9%', other: 'Không cam kết', uniIsCheck: false, otherIsCross: false, uniHighlight: true },
    { criterion: 'Bảo mật SSL miễn phí', uni: true, other: 'Phụ thu', uniIsCheck: true, otherIsCross: false },
    { criterion: 'Bàn giao 100% Source Code', uni: 'Toàn quyền sở hữu', other: 'Giữ mã nguồn / Thuê', uniIsCheck: false, otherIsCross: false, uniHighlight: true },
    { criterion: 'Tích hợp Trí tuệ Nhân tạo (AI)', uni: 'Hỗ trợ Chatbot & SEO AI thế hệ mới', other: 'Không hỗ trợ / Chỉ dùng web tĩnh', uniIsCheck: false, otherIsCross: false, uniHighlight: true },
    { criterion: 'Cam kết hoàn tiền hợp đồng', uni: '100% nếu không hài lòng', other: 'Không hoàn tiền', uniIsCheck: false, otherIsCross: false, uniHighlight: true }
  ];

  return (
    <div className="w-full flex flex-col bg-white">

      {/* =========================================================================
          1. HERO BANNER SÁNG & HIỆN ĐẠI (BRIGHT LUMINOUS CANVAS)
          ========================================================================= */}
      <section className="w-full relative overflow-hidden bg-gradient-to-b from-teal-50/70 via-slate-50/60 to-white py-16 sm:py-24 border-b border-teal-100/70">
        
        {/* Soft glowing ambient light orbs */}
        <div className="absolute top-10 left-10 w-96 h-96 bg-[#0baba0]/12 rounded-full blur-[130px] pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-[#91c544]/12 rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 space-y-7"
            >
              
              {/* Eyebrow Badge */}
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-teal-200/80 text-xs text-[#088c83] shadow-xs">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                </span>
                <span className="font-bold tracking-wide uppercase text-[11px]">Đối tác thiết kế web chuẩn SEO & Tiên phong ứng dụng AI</span>
                <span aria-hidden="true" className="text-slate-300">|</span>
                <span className="text-slate-700 font-semibold">UNIVN</span>
              </div>

              {/* Headline */}
              <div className="space-y-3">
                <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-black tracking-tight leading-[1.12] text-slate-900">
                  Kiến Tạo <span className="bg-gradient-to-r from-[#0baba0] via-[#088c83] to-[#91c544] bg-clip-text text-transparent">Website Chuẩn SEO</span>, Bứt Phá Doanh Thu Đột Phá
                </h1>
                <p className="text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl font-normal">
                  <strong>CÔNG TY CỔ PHẦN UNI CREATION VIỆT NAM (UNIVN)</strong> khẳng định vị thế số với cam kết chất lượng vượt trội: <strong>Bàn giao 100% Source Code gốc</strong>, <strong>Bảo hành kỹ thuật trọn đời</strong>, <strong>Tối ưu Google PageSpeed 70 – 90+ điểm</strong> và <strong>Tích hợp các giải pháp Trí Tuệ Nhân Tạo (AI)</strong> thúc đẩy chuyển đổi doanh số.
                </p>
              </div>

              {/* 4 Stats Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 pt-1">
                <motion.div whileHover={{ y: -4 }} className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-[#0baba0] hover:shadow-md transition-all">
                  <div className="text-2xl sm:text-3xl font-black font-mono text-[#0baba0]">1.200+</div>
                  <div className="text-[11px] text-slate-600 font-medium mt-0.5">Doanh nghiệp tin chọn</div>
                </motion.div>
                <motion.div whileHover={{ y: -4 }} className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-[#0baba0] hover:shadow-md transition-all">
                  <div className="text-2xl sm:text-3xl font-black font-mono text-slate-900">9+ Năm</div>
                  <div className="text-[11px] text-slate-600 font-medium mt-0.5">Kinh nghiệm chuyên sâu</div>
                </motion.div>
                <motion.div whileHover={{ y: -4 }} className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-[#0baba0] hover:shadow-md transition-all">
                  <div className="text-2xl sm:text-3xl font-black font-mono text-[#91c544]">99.9%</div>
                  <div className="text-[11px] text-slate-600 font-medium mt-0.5">Uptime hạ tầng cam kết</div>
                </motion.div>
                <motion.div whileHover={{ y: -4 }} className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-[#0baba0] hover:shadow-md transition-all">
                  <div className="text-2xl sm:text-3xl font-black font-mono text-emerald-600">100%</div>
                  <div className="text-[11px] text-slate-600 font-medium mt-0.5">Bàn giao Source Code</div>
                </motion.div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => setIsProfileModalOpen(true)}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-[#0baba0] to-[#91c544] text-white text-xs sm:text-sm font-bold shadow-lg shadow-[#0baba0]/25 hover:scale-105 active:scale-95 cursor-pointer transition-all"
                >
                  <FileText className="w-4 h-4" />
                  <span>Xem & Tải E-Profile A4 (PDF)</span>
                </button>

                {onConsult && (
                  <button
                    onClick={() => onConsult('Tư vấn giải pháp chuyển đổi số & Hồ sơ năng lực')}
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-slate-50 text-slate-800 text-xs sm:text-sm font-bold border border-slate-300 shadow-xs hover:shadow-sm transition-all cursor-pointer"
                  >
                    <Phone className="w-4 h-4 text-[#0baba0]" />
                    <span>Đăng Ký Tư Vấn Trực Tiếp</span>
                  </button>
                )}
              </div>

            </motion.div>

            {/* Right Visual Image & Floating Badges */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-5 relative flex justify-center"
            >
              <div className="relative w-full max-w-[460px] aspect-[4/4.7] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100 group">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                  alt="Uni Creation Teamwork & Creative Powerhouse"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent" />

                <div className="absolute bottom-0 inset-x-0 p-6 space-y-2 z-10 text-white">
                  <span className="px-2.5 py-0.5 rounded-full bg-[#0baba0] text-white text-[10px] font-black uppercase tracking-wider">
                    CÔNG TY CỔ PHẦN UNI CREATION VIỆT NAM
                  </span>
                  <h3 className="text-lg font-bold leading-tight">
                    Tổ Hợp Giải Pháp Số: Web Chuẩn SEO · Pure NVMe · Marketing
                  </h3>
                  <p className="text-xs text-slate-200 leading-relaxed font-light">
                    Mã số thuế: <strong>0109090636</strong> · Đối tác tiềm năng của Google (Google Partner)
                  </p>
                </div>
              </div>

              {/* Floating Top Badge */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut' }}
                className="absolute -top-4 -left-4 sm:-left-8 p-3.5 rounded-2xl bg-white/95 backdrop-blur-xl border border-slate-200 shadow-xl text-slate-900 space-y-0.5 z-20"
              >
                <div className="flex items-center gap-1.5 text-xs font-black text-emerald-600">
                  <Zap className="w-4 h-4 text-emerald-500 fill-emerald-500" />
                  PageSpeed 98/100
                </div>
                <div className="text-[10px] text-slate-500 font-semibold">Tối Ưu Chuẩn Google Speed</div>
              </motion.div>

              {/* Floating Bottom Badge */}
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut', delay: 0.5 }}
                className="absolute -bottom-4 -right-4 sm:-right-6 p-3.5 rounded-2xl bg-white/95 backdrop-blur-xl border border-slate-200 shadow-xl text-slate-900 space-y-0.5 z-20"
              >
                <div className="flex items-center gap-1.5 text-xs font-black text-[#088c83]">
                  <ShieldCheck className="w-4 h-4 text-[#91c544]" />
                  SSL 256-Bit Active
                </div>
                <div className="text-[10px] text-slate-500 font-medium">Hạ Tầng Pure NVMe 3.420 MB/s</div>
              </motion.div>

            </motion.div>

          </div>
        </div>

      </section>

      {/* =========================================================================
          2. THƯ NGỎ (OPENING LETTER) & BẢNG THÔNG TIN PHÁP LÝ (CRISP PURE WHITE)
          ========================================================================= */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6 }}
        className="w-full bg-white py-16 sm:py-24 border-b border-slate-200/80"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left: Thư Ngỏ */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-1 pb-4 border-b border-slate-100">
                <span className="text-xs font-bold uppercase tracking-wider text-[#0baba0]">Phần I · Mục 01</span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
                  Thư Ngỏ Từ Ban Lãnh Đạo
                </h2>
                <div className="text-xs text-slate-500 font-medium">OPENING LETTER · CÔNG TY CỔ PHẦN UNI CREATION VIỆT NAM</div>
              </div>

              <div className="prose prose-slate max-w-none text-sm sm:text-base text-slate-600 space-y-4 leading-relaxed font-normal">
                <p className="font-bold text-slate-900">
                  Kính gửi: Quý Khách hàng và Quý Đối tác,
                </p>
                <p>
                  Trong kỷ nguyên số hóa, website không đơn thuần là tấm danh thiếp điện tử mà là <strong>trụ sở số</strong>, là kênh bán hàng tự động 24/7 và là tài sản chiến lược quyết định năng lực cạnh tranh của mỗi doanh nghiệp.
                </p>
                <p>
                  Khởi nguồn từ năm 2015 bởi đội ngũ kỹ sư công nghệ giàu nhiệt huyết, <strong>Công ty Cổ phần Uni Creation Việt Nam (UNIVN)</strong> tự hào mang đến hệ sinh thái giải pháp số toàn diện: từ <strong>Thiết kế website chuẩn SEO chuyên sâu</strong>, <strong>Hạ tầng máy chủ lưu trữ (Hosting/Cloud VPS NVMe/Email doanh nghiệp)</strong> đến <strong>Tiếp thị nội dung & Quảng cáo trực tuyến</strong>.
                </p>
                <p>
                  Với triết lý lấy khách hàng làm trung tâm, Uni Creation tạo dựng sự khác biệt rõ nét bằng các cam kết vàng: <strong>Bàn giao 100% mã nguồn (Source Code)</strong>, <strong>Bảo hành kỹ thuật trọn đời</strong> và <strong>Tối ưu tốc độ tải trang vượt trội</strong>. Chúng tôi đã đồng hành cùng hơn <strong>1.200+ doanh nghiệp</strong> trên khắp cả nước xây dựng nền tảng vững chắc, bứt phá doanh số bền vững.
                </p>
                <p>
                  Trân trọng cảm ơn sự tin tưởng của Quý đối tác và chào đón cơ hội hợp tác cùng kiến tạo giá trị lâu dài!
                </p>
              </div>

              {/* Signature */}
              <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                <div className="space-y-1">
                  <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider">TM. BAN LÃNH ĐẠO UNI CREATION VIỆT NAM</div>
                  <div className="font-serif italic text-2xl text-slate-900 font-bold">Giám Đốc Điều Hành</div>
                  <div className="text-xs text-[#0baba0] font-semibold">CÔNG TY CỔ PHẦN UNI CREATION VIỆT NAM</div>
                </div>
                <div className="p-3 bg-teal-50 rounded-2xl border border-teal-100 text-center">
                  <Award className="w-8 h-8 text-[#0baba0] mx-auto" />
                  <div className="text-[10px] text-teal-800 font-bold mt-1">DẤU ẤN 2015 - 2026</div>
                </div>
              </div>
            </div>

            {/* Right: Hồ Sơ Pháp Lý Sáng Sủa */}
            <div className="lg:col-span-5 bg-gradient-to-br from-teal-50/40 via-white to-slate-50 p-7 sm:p-9 rounded-3xl border border-teal-200/90 shadow-sm space-y-6">
              <div className="space-y-1 pb-4 border-b border-slate-200">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0baba0]/10 text-[#088c83] text-[11px] font-bold uppercase tracking-wider">
                  Hồ Sơ Doanh Nghiệp Chính Thức
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Thông Tin Pháp Lý Doanh Nghiệp
                </h3>
              </div>

              <div className="space-y-3.5 text-xs sm:text-sm">
                <div className="space-y-1 p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-2xs">
                  <span className="text-slate-500 text-xs">Tên doanh nghiệp đầy đủ:</span>
                  <div className="font-bold text-slate-900 text-sm">CÔNG TY CỔ PHẦN UNI CREATION VIỆT NAM</div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-2xs space-y-1">
                    <span className="text-slate-500 text-xs">Tên thương hiệu:</span>
                    <div className="font-bold text-[#088c83]">UNI CREATION / UNIVN</div>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-2xs space-y-1">
                    <span className="text-slate-500 text-xs">Mã số thuế (MST):</span>
                    <div className="font-bold font-mono text-emerald-600 text-sm">0109090636</div>
                  </div>
                </div>

                <div className="space-y-1 p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-2xs">
                  <span className="text-slate-500 text-xs">Vị thế ngành & Chứng nhận:</span>
                  <div className="font-semibold text-slate-800 flex items-center gap-2">
                    <Award className="w-4 h-4 text-[#91c544] shrink-0" />
                    <span>Đối tác tiềm năng của Google tại thị trường Việt Nam (Google Partner)</span>
                  </div>
                </div>

                <div className="space-y-1 p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-2xs">
                  <span className="text-slate-500 text-xs">Lĩnh vực hoạt động chính:</span>
                  <p className="text-slate-700 text-xs leading-relaxed font-normal">
                    Giải pháp phần mềm, Thiết kế Website chuẩn SEO, Hạ tầng Cloud Server, Digital Marketing
                  </p>
                </div>

                <div className="space-y-1 p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-2xs">
                  <span className="text-slate-500 text-xs">Cổng thông tin điện tử:</span>
                  <a
                    href="https://univn.vn/"
                    target="_blank"
                    rel="noreferrer"
                    className="font-mono text-[#088c83] hover:underline flex items-center gap-1.5 text-xs font-bold"
                  >
                    <span>https://univn.vn/</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => setIsProfileModalOpen(true)}
                    className="w-full py-3 rounded-xl btn-brand-gradient text-white font-bold text-xs shadow-md hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer flex items-center justify-center gap-2"
                  >
                    <Printer className="w-3.5 h-3.5" />
                    <span>In Toàn Bộ Hồ Sơ Pháp Lý (PDF)</span>
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </motion.section>

      {/* =========================================================================
          3. TẦM NHÌN, SỨ MỆNH & TRIẾT LÝ 4T (SOFT PEARL STONE #f8fafc)
          ========================================================================= */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6 }}
        className="w-full bg-[#f8fafc] py-16 sm:py-24 border-b border-slate-200/80"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Tầm nhìn & Sứ mệnh */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div whileHover={{ y: -4 }} className="p-8 sm:p-10 rounded-3xl bg-white border border-teal-200/90 shadow-sm space-y-4 relative overflow-hidden">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-teal-50 border border-teal-200 flex items-center justify-center text-[#0baba0]">
                  <Target className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#088c83]">Định Hướng Chiến Lược</span>
                  <h3 className="text-2xl sm:text-3xl font-black text-slate-900">TẦM NHÌN</h3>
                </div>
              </div>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                Trở thành <strong>đơn vị công nghệ và thiết kế giải pháp số hàng đầu Việt Nam</strong> cho phân khúc doanh nghiệp vừa và nhỏ (SMEs), tiên phong ứng dụng công nghệ hiện đại và <strong>trí tuệ nhân tạo (AI)</strong> vào tối ưu trải nghiệm người dùng (UX/UI).
              </p>
            </motion.div>

            <motion.div whileHover={{ y: -4 }} className="p-8 sm:p-10 rounded-3xl bg-white border border-emerald-200/90 shadow-sm space-y-4 relative overflow-hidden">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600">
                  <Compass className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">Trách Nhiệm Phụng Sự</span>
                  <h3 className="text-2xl sm:text-3xl font-black text-slate-900">SỨ MỆNH</h3>
                </div>
              </div>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                <strong>Bình dân hóa công nghệ số chất lượng cao</strong>, đem lại cho mỗi doanh nghiệp một kênh bán hàng trực tuyến chuẩn SEO, tốc độ cao, <strong>độc lập về công nghệ</strong> với chi phí đầu tư hợp lý nhất.
              </p>
            </motion.div>
          </div>

          {/* Triết lý 4T */}
          <div className="space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-slate-200">
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-[#0baba0]">Triết Lý Hành Động</span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
                  4 Giá Trị Cốt Lõi (Triết Lý 4T)
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-500 max-w-md">
                4 kim chỉ nam định hình văn hóa phụng sự, chất lượng kỹ thuật và cam kết trường tồn của Univn.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {CORE_VALUES_4T.map((v) => {
                const IconComp = v.icon;
                return (
                  <motion.div
                    key={v.id}
                    whileHover={{ y: -6, scale: 1.01 }}
                    className="p-7 rounded-3xl bg-white border border-slate-200/90 hover:border-[#0baba0] hover:shadow-xl transition-all space-y-5 flex flex-col justify-between group"
                  >
                    <div className="space-y-3.5">
                      <div className="flex items-center justify-between">
                        <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${v.color} text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform`}>
                          <IconComp className="w-6 h-6" />
                        </div>
                        <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full ${v.bgColor} ${v.textColor} border ${v.borderColor}`}>
                          {v.badge}
                        </span>
                      </div>

                      <div>
                        <h4 className="text-xl font-black text-slate-900 group-hover:text-[#0baba0] transition-colors">
                          {v.key}
                        </h4>
                        <div className="text-xs text-slate-400 font-semibold">{v.english}</div>
                      </div>

                      <p className="text-xs text-slate-600 leading-relaxed font-normal">
                        {v.desc}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-slate-100 space-y-1.5">
                      {v.points.map((pt, idx) => (
                        <div key={idx} className="flex items-start gap-1.5 text-[11px] text-slate-700">
                          <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{pt}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>
      </motion.section>

      {/* =========================================================================
          4. BAN ĐIỀU HÀNH & ĐỘI NGŨ NHÂN SỰ TINH HOA (CRISP PURE WHITE - NEW SECTION)
          ========================================================================= */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6 }}
        className="w-full bg-white py-16 sm:py-24 border-b border-slate-200/80"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-slate-200">
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0baba0]">Con Người Là Cốt Lõi</span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
                Ban Lãnh Đạo & Đội Ngũ Nhân Sự Tinh Hoa
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 max-w-md">
              Hơn 45+ kỹ sư phần mềm, chuyên gia kiến trúc đám mây và nhà thiết kế UI/UX giàu kinh nghiệm thực chiến.
            </p>
          </div>

          {/* Leadership Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {LEADERSHIP_MEMBERS.map((m, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -6 }}
                className="rounded-3xl bg-[#fafbfc] border border-slate-200/80 overflow-hidden shadow-xs hover:shadow-xl hover:border-[#0baba0] transition-all flex flex-col justify-between group"
              >
                <div className="aspect-[4/4.5] overflow-hidden relative">
                  <img
                    src={m.image}
                    alt={m.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-white/20 backdrop-blur-md">
                      {m.experience}
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-2.5">
                  <div>
                    <h4 className="text-lg font-black text-slate-900 group-hover:text-[#0baba0] transition-colors">
                      {m.name}
                    </h4>
                    <div className="text-xs text-[#088c83] font-bold mt-0.5">{m.role}</div>
                  </div>
                  <div className="text-[11px] text-slate-500 font-medium">
                    Chuyên môn: <span className="text-slate-700">{m.expertise}</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed font-light pt-1 border-t border-slate-200/60">
                    {m.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Department Structure Breakdown */}
          <div className="p-6 sm:p-8 rounded-3xl bg-[#f8fafc] border border-slate-200 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 text-center">
            <div className="p-4 rounded-2xl bg-white border border-slate-200/70 shadow-2xs space-y-1">
              <div className="text-2xl font-black font-mono text-[#0baba0]">22</div>
              <div className="text-xs font-bold text-slate-900">Kỹ Sư Phần Mềm</div>
              <div className="text-[10px] text-slate-500">React, Next.js, Node.js</div>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-slate-200/70 shadow-2xs space-y-1">
              <div className="text-2xl font-black font-mono text-blue-600">08</div>
              <div className="text-xs font-bold text-slate-900">UI/UX Designers</div>
              <div className="text-[10px] text-slate-500">Figma, Design System</div>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-slate-200/70 shadow-2xs space-y-1">
              <div className="text-2xl font-black font-mono text-emerald-600">06</div>
              <div className="text-xs font-bold text-slate-900">Kỹ Sư DevOps & Cloud</div>
              <div className="text-[10px] text-slate-500">NVMe, Viettel IDC Tier 3</div>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-slate-200/70 shadow-2xs space-y-1">
              <div className="text-2xl font-black font-mono text-amber-600">05</div>
              <div className="text-xs font-bold text-slate-900">SEO & Marketing</div>
              <div className="text-[10px] text-slate-500">Content, Google Ads</div>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-slate-200/70 shadow-2xs space-y-1 col-span-2 sm:col-span-1">
              <div className="text-2xl font-black font-mono text-purple-600">04</div>
              <div className="text-xs font-bold text-slate-900">CSKH & Hỗ Trợ 24/7</div>
              <div className="text-[10px] text-slate-500">Phản hồi 15 – 30 phút</div>
            </div>
          </div>

        </div>
      </motion.section>

      {/* =========================================================================
          5. THƯ VIỆN ẢNH HOẠT ĐỘNG & VĂN HÓA DOANH NGHIỆP (SOFT STONE #fafbfc - NEW)
          ========================================================================= */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6 }}
        className="w-full bg-[#fafbfc] py-16 sm:py-24 border-b border-slate-200/80"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-slate-200">
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0baba0]">Không Gian & Hoạt Động</span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
                Văn Hóa Sáng Tạo & Không Gian Thực Tế
              </h2>
            </div>
            
            {/* Filter Buttons */}
            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={() => setGalleryFilter('all')}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  galleryFilter === 'all' ? 'bg-[#0baba0] text-white shadow-xs' : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
                }`}
              >
                Tất Cả Ảnh
              </button>
              <button
                onClick={() => setGalleryFilter('workspace')}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  galleryFilter === 'workspace' ? 'bg-[#0baba0] text-white shadow-xs' : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
                }`}
              >
                Không Gian Làm Việc
              </button>
              <button
                onClick={() => setGalleryFilter('tech')}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  galleryFilter === 'tech' ? 'bg-[#0baba0] text-white shadow-xs' : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
                }`}
              >
                Phòng Lab & Máy Chủ
              </button>
              <button
                onClick={() => setGalleryFilter('culture')}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  galleryFilter === 'culture' ? 'bg-[#0baba0] text-white shadow-xs' : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
                }`}
              >
                Văn Hóa & Tư Vấn
              </button>
            </div>
          </div>

          {/* Photo Grid with Smooth Animation */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {filteredGallery.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35 }}
                  className="rounded-3xl overflow-hidden bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:border-[#0baba0] transition-all group flex flex-col justify-between"
                >
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-600"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#088c83] text-[10px] font-bold shadow-xs">
                        {item.tag}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 space-y-1.5">
                    <h4 className="font-extrabold text-base text-slate-900 group-hover:text-[#0baba0] transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed font-light">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

        </div>
      </motion.section>

      {/* =========================================================================
          6. NĂNG LỰC HỆ SINH THÁI DỊCH VỤ CỐT LÕI (CRISP PURE WHITE)
          ========================================================================= */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6 }}
        className="w-full bg-white py-16 sm:py-24 border-b border-slate-200/80"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-slate-200">
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0baba0]">Phần I · Mục 04</span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
                Hệ Sinh Thái Giải Pháp Số Toàn Diện
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 max-w-md">
              Bộ 3 năng lực cốt lõi giúp doanh nghiệp xây dựng nền tảng vững chắc và tự động hóa kinh doanh 24/7.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Card 1: Web Design */}
            <motion.div whileHover={{ y: -6 }} className="p-8 sm:p-10 rounded-3xl bg-[#fafbfc] border-2 border-teal-500/30 shadow-sm hover:shadow-xl hover:border-[#0baba0] transition-all space-y-6 flex flex-col justify-between relative">
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-teal-50 border border-teal-100 flex items-center justify-center text-[#0baba0] shadow-xs">
                  <Code2 className="w-7 h-7" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#0baba0]">Dịch Vụ Trọng Tâm</span>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 mt-1">
                    Thiết Kế Website Chuẩn SEO
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                  Xây dựng website may đo hoặc kho mẫu hiện đại, tối ưu Onpage 100%, cấu trúc Schema thực thể, tốc độ siêu tốc và bàn giao trọn vẹn mã nguồn.
                </p>

                <div className="space-y-2.5 pt-2">
                  <div className="flex items-center gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span><strong>100% Full Source Code</strong> gốc trao tay</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Bảo hành kỹ thuật trọn đời trên Host Uni</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Google PageSpeed PC đạt 70 – 95+ điểm</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Cung cấp chứng chỉ SSL bảo mật miễn phí</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200">
                <button
                  onClick={() => {
                    const el = document.getElementById('pricing-anchor');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                >
                  <span>Xem Bảng So Sánh Các Gói</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#91c544]" />
                </button>
              </div>
            </motion.div>

            {/* Card 2: NVMe Cloud */}
            <motion.div whileHover={{ y: -6 }} className="p-8 sm:p-10 rounded-3xl bg-[#fafbfc] border border-slate-200 shadow-sm hover:shadow-xl hover:border-[#0baba0] transition-all space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shadow-xs">
                  <Server className="w-7 h-7" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-600">Hạ Tầng Lưu Trữ</span>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 mt-1">
                    Hạ Tầng NVMe Cloud & Email DN
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                  Hệ thống máy chủ Pure SSD NVMe Enterprise đặt tại Viettel IDC Tier 3, cam kết 99.9% uptime cùng hệ thống Email tên miền chống spam 99%.
                </p>

                <div className="space-y-2.5 pt-2">
                  <div className="flex items-center gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0" />
                    <span><strong>Cloud Hosting NVMe</strong> băng thông không giới hạn</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0" />
                    <span><strong>Cloud VPS PRO SSD</strong> tài nguyên ảo hóa độc lập</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0" />
                    <span><strong>Email Hosting Tên Miền</strong> chống SPAM 99%</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0" />
                    <span>Tương thích mượt mà Outlook, Gmail & Mobile</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200">
                <a
                  href="tel:0373085333"
                  className="w-full py-3.5 rounded-xl bg-white border border-slate-300 hover:bg-slate-100 text-slate-800 font-bold text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-2xs"
                >
                  <Phone className="w-3.5 h-3.5 text-blue-600" />
                  <span>Kỹ Thuật Máy Chủ: 0373.085.333</span>
                </a>
              </div>
            </motion.div>

            {/* Card 3: Marketing */}
            <motion.div whileHover={{ y: -6 }} className="p-8 sm:p-10 rounded-3xl bg-[#fafbfc] border border-slate-200 shadow-sm hover:shadow-xl hover:border-[#0baba0] transition-all space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-600 shadow-xs">
                  <TrendingUp className="w-7 h-7" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-600">Tăng Trưởng Bền Vững</span>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 mt-1">
                    Content Chuẩn SEO & Marketing
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                  Dịch vụ viết bài chuẩn SEO từ 20.000 VNĐ/bài, quản trị website theo tháng và chạy chiến dịch Google Ads, Facebook Ads minh bạch ngân sách.
                </p>

                <div className="space-y-2.5 pt-2">
                  <div className="flex items-center gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
                    <span>Viết bài chuẩn SEO chỉ từ <strong>20.000 VNĐ/bài</strong></span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
                    <span>Chiết khấu đến <strong>30%</strong> khi đặt từ 200 bài</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
                    <span>Chăm sóc & quản trị website trọn gói theo tháng</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
                    <span>Quảng cáo Google Ads & Facebook Ads tối ưu CPC</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200">
                <a
                  href="tel:0373064333"
                  className="w-full py-3.5 rounded-xl bg-white border border-slate-300 hover:bg-slate-100 text-slate-800 font-bold text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-2xs"
                >
                  <Phone className="w-3.5 h-3.5 text-amber-600" />
                  <span>Tư Vấn Ads: 0373.064.333</span>
                </a>
              </div>
            </motion.div>

          </div>

        </div>
      </motion.section>

      {/* =========================================================================
          7. MA TRẬN CÔNG NGHỆ & HẠ TẦNG KỸ THUẬT (SOFT MINT WASH - NEW SECTION)
          ========================================================================= */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6 }}
        className="w-full bg-gradient-to-b from-teal-50/50 via-slate-50/60 to-white py-16 sm:py-24 border-b border-teal-100/70"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-slate-200">
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0baba0]">Tiêu Chuẩn Kỹ Thuật</span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
                Nền Tảng Công Nghệ & Hạ Tầng Máy Chủ
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 max-w-md">
              Hệ thống công nghệ tiên tiến đảm bảo tính ổn định, tốc độ tải trang thần tốc và bảo mật tuyệt đối.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TECH_STACK_ITEMS.map((tech, idx) => {
              const IconComp = tech.icon;
              return (
                <motion.div
                  key={idx}
                  whileHover={{ y: -4 }}
                  className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-[#0baba0] transition-all space-y-3"
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${tech.color}`}>
                      <IconComp className="w-5 h-5" />
                    </div>
                    <div className="font-extrabold text-sm text-slate-900">{tech.name}</div>
                  </div>
                  <p className="text-xs text-slate-600 font-light leading-relaxed">
                    {tech.role}
                  </p>
                </motion.div>
              );
            })}
          </div>

        </div>
      </motion.section>

      {/* =========================================================================
          7.5. CHIẾN LƯỢC & NĂNG LỰC ỨNG DỤNG AI (AI-POWERED ENGINEERING & SMART FEATURES)
          ========================================================================= */}
      <AboutAiSection onConsult={onConsult} />

      {/* =========================================================================
          7.6. VIDEO DEMO AI: QUY TRÌNH LÀM VIỆC VỚI AI TẠI UNI CREATION
          ========================================================================= */}
      <AiVideoDemoSection onConsult={onConsult} />

      {/* =========================================================================
          8. BẢNG SO SÁNH CHI TIẾT CÁC GÓI WEBSITE (DẠNG CỘT CHUẨN ĐỐI CHIẾU)
          ========================================================================= */}
      <motion.section
        id="pricing-anchor"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6 }}
        className="w-full bg-[#f8fafc] py-16 sm:py-24 border-b border-slate-200/80"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          {/* Header & View Switcher */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-4 border-b border-slate-300/80">
            <div className="space-y-1.5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200/80 text-[#088c83] text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-[#0baba0]" />
                <span>Minh Bạch Chi Phí · Bảng Đối Chiếu Dạng Cột</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
                Bảng So Sánh Chi Tiết Các Gói Website
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 font-medium">
                Tất cả các gói đều cam kết bàn giao 100% Source Code & Bảo hành kỹ thuật trọn đời
              </p>
            </div>

            {/* Switcher: Packages Comparison vs Uni Creation vs Others */}
            <div className="flex items-center p-1.5 rounded-2xl bg-white border border-slate-200 shadow-sm self-start md:self-auto">
              <button
                onClick={() => setComparisonTab('packages')}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  comparisonTab === 'packages'
                    ? 'bg-gradient-to-r from-[#0baba0] to-[#088c83] text-white shadow-md'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span>So Sánh 3 Gói Website</span>
              </button>
              <button
                onClick={() => setComparisonTab('vs_others')}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  comparisonTab === 'vs_others'
                    ? 'bg-gradient-to-r from-[#0baba0] to-[#088c83] text-white shadow-md'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                <Award className="w-3.5 h-3.5" />
                <span>Uni Creation vs Đơn Vị Khác</span>
              </button>
            </div>
          </div>

          {/* TAB 1: 3 WEBSITE PACKAGES IN FULL COLUMN TABLE */}
          {comparisonTab === 'packages' && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="space-y-4"
            >
              {/* Mobile Swipe Hint */}
              <div className="flex items-center justify-between text-xs text-slate-500 lg:hidden px-1">
                <span>← Vuốt ngang để so sánh chi tiết cả 3 cột gói →</span>
                <span className="font-bold text-[#088c83]">★ Gói Pro khuyên dùng</span>
              </div>

              {/* Table Container Card */}
              <div className="w-full bg-white rounded-3xl border border-slate-200/90 shadow-xl overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse min-w-[780px] sm:min-w-[920px]">
                    
                    {/* Header Columns */}
                    <thead>
                      <tr className="border-b border-slate-200 bg-slate-50/80">
                        
                        {/* Column 1: Criteria */}
                        <th className="w-[31%] py-6 px-6 align-bottom sticky left-0 bg-slate-50/95 backdrop-blur-xs z-20 border-r border-slate-200/80">
                          <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                            Bảng Đối Chiếu
                          </div>
                          <div className="text-base font-black text-slate-900">
                            Tiêu Chí So Sánh
                          </div>
                        </th>

                        {/* Column 2: Startup */}
                        <th className="w-[23%] py-6 px-5 text-center align-top border-r border-slate-200/70">
                          <div className="space-y-2">
                            {/* Height spacer to match Star badge in Pro column */}
                            <div className="h-7 invisible mb-1" aria-hidden="true" />
                            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-[11px] font-bold">
                              <Zap className="w-3.5 h-3.5 text-amber-500" />
                              <span>Khởi Nghiệp</span>
                            </div>
                            <h3 className="text-xl font-black text-slate-900">Gói Startup</h3>
                            <div className="text-lg font-black font-mono text-[#088c83]">
                              Từ 2.500.000 VNĐ
                            </div>
                            <p className="text-[11px] text-slate-500 font-normal leading-relaxed">
                              Dành cho cá nhân & hộ kinh doanh mới
                            </p>
                          </div>
                        </th>

                        {/* Column 3: Pro (Featured Highlight Column) */}
                        <th className="w-[24%] py-6 px-5 text-center align-top bg-gradient-to-b from-teal-50/70 to-teal-50/30 border-x-2 border-t-2 border-[#0baba0] shadow-inner">
                          <div className="space-y-2">
                            {/* Chỗ Nổi bật khuyên dùng -> chỉ để biểu tượng ngôi sao ⭐ */}
                            <div className="flex items-center justify-center h-7 mb-1">
                              <div className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-gradient-to-tr from-amber-400 to-amber-500 text-white shadow-md ring-2 ring-amber-100/70" title="Khuyên dùng">
                                <Star className="w-4 h-4 fill-white text-white" />
                              </div>
                            </div>
                            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0baba0]/15 text-[#088c83] text-[11px] font-bold">
                              <Sparkles className="w-3.5 h-3.5 text-[#0baba0]" />
                              <span>Doanh Nghiệp (Pro)</span>
                            </div>
                            <h3 className="text-xl font-black text-slate-900 flex items-center justify-center gap-1.5">
                              <span>Gói Doanh Nghiệp</span>
                              <Star className="w-4 h-4 fill-amber-400 text-amber-400 shrink-0" />
                            </h3>
                            <div className="text-lg font-black font-mono text-transparent bg-clip-text bg-gradient-to-r from-[#088c83] to-[#0baba0]">
                              Từ 4.000.000 VNĐ
                            </div>
                            <p className="text-[11px] text-slate-600 font-semibold leading-relaxed">
                              Tùy biến nhận diện thương hiệu chuyên sâu
                            </p>
                          </div>
                        </th>

                        {/* Column 4: VIP / Custom */}
                        <th className="w-[22%] py-6 px-5 text-center align-top">
                          <div className="space-y-2">
                            {/* Height spacer to match Star badge in Pro column */}
                            <div className="h-7 invisible mb-1" aria-hidden="true" />
                            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-50 text-purple-700 text-[11px] font-bold">
                              <Award className="w-3.5 h-3.5 text-purple-600" />
                              <span>Độc Quyền</span>
                            </div>
                            <h3 className="text-xl font-black text-slate-900">Gói VIP / Custom</h3>
                            <div className="text-lg font-black font-mono text-purple-700">
                              Báo Giá Theo Yêu Cầu
                            </div>
                            <p className="text-[11px] text-slate-500 font-normal leading-relaxed">
                              Dành cho tập đoàn & thương hiệu lớn
                            </p>
                          </div>
                        </th>

                      </tr>
                    </thead>

                    {/* Table Body - Grouped Categorically */}
                    <tbody>
                      {PACKAGE_COMPARISON_GROUPS.map((group, gIdx) => (
                        <React.Fragment key={gIdx}>
                          
                          {/* Group Section Divider Header */}
                          <tr className="bg-slate-100/90 border-y border-slate-200">
                            <td
                              colSpan={4}
                              className="py-3 px-6 text-xs font-black uppercase tracking-wider text-slate-800 sticky left-0 bg-slate-100/95 backdrop-blur-xs z-10"
                            >
                              <div className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-[#0baba0]" />
                                <span>{group.groupTitle}</span>
                              </div>
                            </td>
                          </tr>

                          {/* Data Rows */}
                          {group.rows.map((row, rIdx) => (
                            <tr
                              key={rIdx}
                              className="border-b border-slate-100 hover:bg-slate-50/70 transition-colors"
                            >
                              {/* Criterion Label */}
                              <td className="py-4 px-6 text-xs sm:text-sm font-semibold text-slate-800 sticky left-0 bg-white hover:bg-slate-50/70 transition-colors z-10 border-r border-slate-200/70">
                                {row.criterion}
                              </td>

                              {/* Startup Cell */}
                              <td className="py-4 px-5 text-xs sm:text-sm text-center text-slate-700 border-r border-slate-200/70">
                                {row.isPrice ? (
                                  <span className="font-bold text-[#088c83] font-mono">{row.startup}</span>
                                ) : row.isBadge ? (
                                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200">
                                    {row.startup}
                                  </span>
                                ) : row.isHighlight ? (
                                  <div className="flex items-center justify-center gap-1.5 text-emerald-600 font-bold">
                                    <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-500" />
                                    <span>{row.startup}</span>
                                  </div>
                                ) : (
                                  <span className={row.isBold ? 'font-bold text-slate-900' : 'text-slate-600'}>
                                    {row.startup}
                                  </span>
                                )}
                              </td>

                              {/* Pro Cell (Highlighted Center Column) */}
                              <td className="py-4 px-5 text-xs sm:text-sm text-center bg-teal-50/35 border-x-2 border-[#0baba0]/40 font-medium text-slate-900">
                                {row.isPrice ? (
                                  <span className="font-extrabold text-[#088c83] font-mono text-base">{row.pro}</span>
                                ) : row.isBadge ? (
                                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-black border border-emerald-300">
                                    {row.pro}
                                  </span>
                                ) : row.isHighlight ? (
                                  <div className="flex items-center justify-center gap-1.5 text-[#088c83] font-black">
                                    <CheckCircle2 className="w-4 h-4 shrink-0 text-[#0baba0]" />
                                    <span>{row.pro}</span>
                                  </div>
                                ) : (
                                  <span className="font-bold text-slate-900 bg-white/60 px-2 py-0.5 rounded-md inline-block">
                                    {row.pro}
                                  </span>
                                )}
                              </td>

                              {/* VIP Cell */}
                              <td className="py-4 px-5 text-xs sm:text-sm text-center text-slate-700">
                                {row.isPrice ? (
                                  <span className="font-bold text-purple-700 font-mono">{row.vip}</span>
                                ) : row.isBadge ? (
                                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200">
                                    {row.vip}
                                  </span>
                                ) : row.isHighlight ? (
                                  <div className="flex items-center justify-center gap-1.5 text-purple-700 font-bold">
                                    <CheckCircle2 className="w-4 h-4 shrink-0 text-purple-600" />
                                    <span>{row.vip}</span>
                                  </div>
                                ) : (
                                  <span className={row.isBold ? 'font-bold text-slate-900' : 'text-slate-600'}>
                                    {row.vip}
                                  </span>
                                )}
                              </td>

                            </tr>
                          ))}

                        </React.Fragment>
                      ))}

                      {/* Bottom Call-To-Action Row */}
                      <tr className="bg-slate-50 border-t-2 border-slate-200">
                        <td className="py-6 px-6 text-xs font-bold text-slate-500 uppercase tracking-wider sticky left-0 bg-slate-50/95 backdrop-blur-xs z-10 border-r border-slate-200/80">
                          Hành Động Khởi Tạo
                        </td>

                        {/* CTA Startup */}
                        <td className="py-6 px-4 text-center border-r border-slate-200/70">
                          <button
                            onClick={() => {
                              if (onConsult) {
                                onConsult('Gói Startup');
                              } else {
                                const formEl = document.getElementById('consult-form-anchor');
                                if (formEl) formEl.scrollIntoView({ behavior: 'smooth' });
                              }
                            }}
                            className="w-full py-3 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold uppercase tracking-wider transition-all shadow-md hover:shadow-lg cursor-pointer"
                          >
                            Chọn Gói Startup
                          </button>
                        </td>

                        {/* CTA Pro (Highlighted) */}
                        <td className="py-6 px-4 text-center bg-teal-50/60 border-x-2 border-b-2 border-[#0baba0]">
                          <button
                            onClick={() => {
                              if (onConsult) {
                                onConsult('Gói Doanh Nghiệp (Pro)');
                              } else {
                                const formEl = document.getElementById('consult-form-anchor');
                                if (formEl) formEl.scrollIntoView({ behavior: 'smooth' });
                              }
                            }}
                            className="w-full py-3.5 px-4 rounded-xl btn-brand-gradient text-white text-xs font-black uppercase tracking-wider transition-all shadow-lg hover:scale-102 cursor-pointer shadow-[#0baba0]/30"
                          >
                            Đăng Ký Gói Pro
                          </button>
                        </td>

                        {/* CTA VIP */}
                        <td className="py-6 px-4 text-center">
                          <button
                            onClick={() => {
                              if (onConsult) {
                                onConsult('Gói VIP / Custom');
                              } else {
                                const formEl = document.getElementById('consult-form-anchor');
                                if (formEl) formEl.scrollIntoView({ behavior: 'smooth' });
                              }
                            }}
                            className="w-full py-3 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold uppercase tracking-wider transition-all shadow-md hover:shadow-lg cursor-pointer"
                          >
                            Tư Vấn Gói VIP
                          </button>
                        </td>

                      </tr>

                    </tbody>

                  </table>
                </div>
              </div>
            </motion.div>
          )}

          {/* TAB 2: UNI CREATION VS ĐƠN VỊ KHÁC (DIRECT REPRODUCTION OF SCREENSHOT 2) */}
          {comparisonTab === 'vs_others' && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="space-y-4"
            >
              {/* Table Container Card Matching Screenshot 2 Style */}
              <div className="w-full bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse min-w-[650px] sm:min-w-[800px]">
                    
                    {/* Header Columns matching Screenshot 2 */}
                    <thead>
                      <tr className="border-b border-slate-200/90 bg-gradient-to-r from-slate-50 via-teal-50/40 to-slate-50">
                        
                        {/* Column 1: Tiêu chí */}
                        <th className="w-[40%] py-5 px-6 text-sm font-bold text-slate-800">
                          Tiêu chí
                        </th>

                        {/* Column 2: Uni Creation with Sparkles icon badge */}
                        <th className="w-[30%] py-5 px-6 text-center">
                          <div className="flex flex-col items-center justify-center gap-1.5">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#088c83] to-[#0baba0] flex items-center justify-center text-white shadow-md shadow-[#0baba0]/30">
                              <Sparkles className="w-5 h-5" />
                            </div>
                            <span className="text-sm font-bold text-[#088c83]">Uni Creation</span>
                          </div>
                        </th>

                        {/* Column 3: Đơn vị khác with Building icon badge */}
                        <th className="w-[30%] py-5 px-6 text-center">
                          <div className="flex flex-col items-center justify-center gap-1.5">
                            <div className="w-10 h-10 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-500">
                              <Building2 className="w-5 h-5" />
                            </div>
                            <span className="text-sm font-bold text-slate-600">Đơn vị khác</span>
                          </div>
                        </th>

                      </tr>
                    </thead>

                    {/* Body Rows matching Screenshot 2 */}
                    <tbody>
                      {VS_OTHERS_DATA.map((item, idx) => (
                        <tr
                          key={idx}
                          className="border-b border-slate-100 hover:bg-slate-50/60 transition-colors"
                        >
                          {/* Criterion Label */}
                          <td className="py-4 px-6 text-xs sm:text-sm font-medium text-slate-900">
                            {item.criterion}
                          </td>

                          {/* Uni Creation Column */}
                          <td className="py-4 px-6 text-center bg-teal-50/20">
                            {item.uniIsCheck ? (
                              <div className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 shadow-xs">
                                <Check className="w-4 h-4 stroke-[3]" />
                              </div>
                            ) : item.uniHighlight ? (
                              <span className="inline-block px-3 py-1 rounded-full bg-teal-50 text-[#088c83] text-xs sm:text-sm font-bold border border-teal-200">
                                {item.uni}
                              </span>
                            ) : (
                              <span className="text-xs sm:text-sm font-bold text-slate-800">
                                {item.uni}
                              </span>
                            )}
                          </td>

                          {/* Other Agencies Column */}
                          <td className="py-4 px-6 text-center text-slate-500">
                            {item.otherIsCross ? (
                              <div className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-rose-50 text-rose-500 border border-rose-200 shadow-xs">
                                <X className="w-4 h-4 stroke-[2.5]" />
                              </div>
                            ) : (
                              <span className="text-xs sm:text-sm text-slate-500 font-medium">
                                {item.other}
                              </span>
                            )}
                          </td>

                        </tr>
                      ))}
                    </tbody>

                  </table>
                </div>

                {/* Bottom CTA for Agency Comparison */}
                <div className="p-6 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-xs text-slate-600 font-medium text-center sm:text-left">
                    Lựa chọn đối tác đúng đắn là chìa khóa để sở hữu một nền tảng số bền vững và độc lập lâu dài.
                  </div>
                  <button
                    onClick={() => {
                      if (onConsult) {
                        onConsult('Tư vấn giải pháp Uni Creation');
                      } else {
                        const formEl = document.getElementById('consult-form-anchor');
                        if (formEl) formEl.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl btn-brand-gradient text-white text-xs font-bold uppercase tracking-wider shadow-md hover:scale-102 transition-all cursor-pointer whitespace-nowrap"
                  >
                    <span>Liên Hệ Tư Vấn Ngay</span>
                    <ArrowRight className="w-4 h-4 text-[#91c544]" />
                  </button>
                </div>

              </div>
            </motion.div>
          )}

        </div>
      </motion.section>

      {/* =========================================================================
          9. GIẢI PHÁP THEO ĐẶC THÙ 6 NGÀNH NGHỀ (CRISP PURE WHITE)
          ========================================================================= */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6 }}
        className="w-full bg-white py-16 sm:py-24 border-b border-slate-200/80"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-slate-100">
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0baba0]">Phần I · Mục 05</span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
                Giải Pháp Theo Đặc Thù Ngành Nghề
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 max-w-md">
              Mỗi lĩnh vực kinh doanh sở hữu một cấu trúc giao diện và hành vi chuyển đổi khách hàng hoàn toàn riêng biệt.
            </p>
          </div>

          {/* Industry Tabs */}
          <div className="flex flex-wrap items-center gap-2.5">
            {INDUSTRY_SOLUTIONS.map((ind, idx) => {
              const Icon = ind.icon;
              return (
                <button
                  key={ind.id}
                  onClick={() => setActiveIndustry(idx)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    activeIndustry === idx
                      ? 'bg-[#0baba0] text-white shadow-md'
                      : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200'
                  }`}
                >
                  <Icon className="w-4 h-4 shrink-0" />
                  <span>{ind.title}</span>
                </button>
              );
            })}
          </div>

          {/* Spotlight Box with Image */}
          <div className="p-8 sm:p-10 rounded-3xl bg-[#fafbfc] border border-slate-200/90 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-xs">
            <div className="lg:col-span-7 space-y-4">
              <div className="space-y-1">
                <span className="text-xs font-bold text-[#088c83] uppercase tracking-wider">
                  {INDUSTRY_SOLUTIONS[activeIndustry].tag}
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
                  {INDUSTRY_SOLUTIONS[activeIndustry].title}
                </h3>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                {INDUSTRY_SOLUTIONS[activeIndustry].summary}
              </p>

              <div className="space-y-2 pt-2">
                <div className="text-xs font-bold text-slate-800 uppercase tracking-wider">Tính Năng Cốt Lõi Vượt Trội:</div>
                {INDUSTRY_SOLUTIONS[activeIndustry].features.map((feat, fIdx) => (
                  <div key={fIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <div className="px-3.5 py-1.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold">
                  📈 {INDUSTRY_SOLUTIONS[activeIndustry].metrics}
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <div className="aspect-[16/10] rounded-xl overflow-hidden shadow-xs relative">
                <img
                  src={INDUSTRY_SOLUTIONS[activeIndustry].image}
                  alt={INDUSTRY_SOLUTIONS[activeIndustry].title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-1">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Dự Án Tiêu Biểu Trong Ngành</div>
                <div className="font-bold text-slate-900 text-base">
                  {INDUSTRY_SOLUTIONS[activeIndustry].demoClient}
                </div>
              </div>

              <div className="pt-1">
                <button
                  onClick={() => {
                    if (onConsult) onConsult(`Tư vấn website ngành ${INDUSTRY_SOLUTIONS[activeIndustry].title}`);
                    else {
                      const formEl = document.getElementById('consult-form-anchor');
                      if (formEl) formEl.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="w-full py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                >
                  <span>Nhận Tư Vấn Cho Ngành Này</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#91c544]" />
                </button>
              </div>
            </div>
          </div>

        </div>
      </motion.section>

      {/* =========================================================================
          10. 5 ĐIỂM KHÁC BIỆT CHIẾN LƯỢC (USP - BRIGHT ELEGANT CARDS)
          ========================================================================= */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6 }}
        className="w-full bg-gradient-to-b from-slate-50/80 via-teal-50/20 to-white py-16 sm:py-24 border-b border-slate-200/80"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-slate-200">
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0baba0]">Lợi Thế Cạnh Tranh</span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
                6 Điểm Khác Biệt Chiến Lược (USP)
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 max-w-md">
              Những cam kết vàng & công nghệ AI đột phá tạo nên thương hiệu Uni Creation suốt hơn 9 năm qua.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {STRATEGIC_USPS.map((usp, idx) => {
              const Icon = usp.icon;
              return (
                <motion.div
                  key={idx}
                  whileHover={{ y: -6 }}
                  className="p-7 rounded-3xl bg-white border border-slate-200/90 hover:border-[#0baba0] hover:shadow-xl transition-all space-y-4 flex flex-col justify-between group shadow-xs"
                >
                  <div className="space-y-3.5">
                    <div className="flex items-center justify-between">
                      <span className="text-3xl font-black font-mono text-slate-200 group-hover:text-[#0baba0] transition-colors">
                        {usp.number}
                      </span>
                      <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${usp.badgeColor}`}>
                        {usp.tag}
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-slate-100 text-[#088c83] flex items-center justify-center shrink-0 border border-slate-200 group-hover:bg-[#0baba0] group-hover:text-white transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-extrabold text-sm sm:text-base text-slate-900 leading-snug">
                          {usp.title}
                        </h4>
                        <div className="text-[11px] text-[#088c83] font-semibold">{usp.subtitle}</div>
                      </div>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
                      {usp.desc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                    <span>Cam kết bằng hợp đồng pháp lý</span>
                    <Check className="w-4 h-4 text-emerald-600" />
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </motion.section>

      {/* =========================================================================
          11. QUY TRÌNH 5 BƯỚC CHUẨN ISO (CLEAN STONE #fafbfc)
          ========================================================================= */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6 }}
        className="w-full bg-[#fafbfc] py-16 sm:py-24 border-b border-slate-200/80"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-slate-200">
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0baba0]">Chuẩn Hóa Chất Lượng</span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
                Quy Trình Triển Khai 5 Bước Chuẩn ISO
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 max-w-md">
              Mọi dự án tại Uni Creation đều tuân thủ nghiêm ngặt 5 bước tiêu chuẩn để đảm bảo tiến độ và chất lượng tuyệt đối.
            </p>
          </div>

          {/* 5 Step Buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5">
            {ISO_5_STEPS.map((step, idx) => (
              <button
                key={step.step}
                onClick={() => setActiveStep(idx)}
                className={`p-4 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between space-y-2 ${
                  activeStep === idx
                    ? 'bg-slate-900 text-white border-slate-900 shadow-md scale-102'
                    : 'bg-white hover:bg-slate-50 text-slate-700 border-slate-200'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className={`font-mono text-sm font-black ${activeStep === idx ? 'text-[#91c544]' : 'text-[#0baba0]'}`}>
                    Bước {step.step}
                  </span>
                  <span className={`text-[10px] px-1.5 py-0.5 rounded-md ${activeStep === idx ? 'bg-white/10 text-slate-300' : 'bg-slate-100 text-slate-500'}`}>
                    {step.timeline}
                  </span>
                </div>
                <div className="font-bold text-xs line-clamp-2">
                  {step.title}
                </div>
              </button>
            ))}
          </div>

          {/* Active Step Details */}
          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="space-y-1">
                <span className="px-2.5 py-0.5 rounded-full bg-teal-50 text-[#088c83] text-[10px] font-bold uppercase tracking-wider">
                  Tiến độ cam kết: {ISO_5_STEPS[activeStep].timeline}
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">
                  Bước {ISO_5_STEPS[activeStep].step}: {ISO_5_STEPS[activeStep].title}
                </h3>
                <div className="text-xs text-[#088c83] font-semibold">
                  {ISO_5_STEPS[activeStep].subtitle}
                </div>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed font-light">
                {ISO_5_STEPS[activeStep].desc}
              </p>

              <div className="space-y-2 pt-2">
                <div className="text-xs font-bold text-slate-800 uppercase tracking-wider">Sản Phẩm Bàn Giao Của Giai Đoạn:</div>
                {ISO_5_STEPS[activeStep].deliverables.map((del, dIdx) => (
                  <div key={dIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{del}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-4 bg-[#f8fafc] p-6 sm:p-8 rounded-2xl border border-slate-200 space-y-4 text-center">
              <div className="w-16 h-16 rounded-2xl bg-[#0baba0] text-white flex items-center justify-center mx-auto shadow-md">
                {React.createElement(ISO_5_STEPS[activeStep].icon, { className: 'w-8 h-8' })}
              </div>
              <div className="space-y-1">
                <div className="font-extrabold text-sm text-slate-900">Cam Kết Chuẩn Hóa ISO</div>
                <p className="text-xs text-slate-500 font-light">
                  Kiểm soát tiến độ qua phần mềm quản lý dự án trực quan, báo cáo định kỳ mỗi ngày.
                </p>
              </div>
            </div>
          </div>

        </div>
      </motion.section>

      {/* =========================================================================
          12. ĐỐI TÁC TIÊU BIỂU & DỰ ÁN (SÁNG TẠO - CAO CẤP - THU HÚT)
          ========================================================================= */}
      <motion.section
        id="partners-section"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6 }}
        className="w-full bg-gradient-to-b from-white via-slate-50/70 to-white py-16 sm:py-24 border-b border-slate-200/80 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Section Header with Eyebrow & Trust Counters */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-slate-200">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200/60 text-[#088c83] text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-[#0baba0]" />
                <span>Phần I · Mục 07 · Khách Hàng & Đối Tác</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                Khách Hàng & Đối Tác Tiêu Biểu
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Hơn <strong className="text-slate-900 font-extrabold">500+ doanh nghiệp, tập đoàn kinh tế và tổ chức đa quốc gia</strong> đã tin tưởng lựa chọn Uni Creation để kiến tạo hệ sinh thái website, cổng thông tin dự án và giải pháp nhận diện số dẫn đầu thị trường.
              </p>
            </div>

            {/* Quick Trust Highlights Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-3 lg:w-96 shrink-0">
              <div className="p-3.5 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:border-[#0baba0] transition-colors">
                <div className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#088c83] to-[#0baba0]">500+</div>
                <div className="text-[11px] font-semibold text-slate-500">Khách hàng tin chọn</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:border-amber-400 transition-colors">
                <div className="text-2xl font-black text-amber-500">18+</div>
                <div className="text-[11px] font-semibold text-slate-500">Tập đoàn đầu ngành</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:border-teal-400 transition-colors">
                <div className="text-2xl font-black text-[#088c83]">99.2%</div>
                <div className="text-[11px] font-semibold text-slate-500">Hài lòng nghiệm thu</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:border-purple-400 transition-colors">
                <div className="text-2xl font-black text-purple-600">100%</div>
                <div className="text-[11px] font-semibold text-slate-500">Bàn giao mã nguồn</div>
              </div>
            </div>
          </div>

          {/* DẢI BĂNG CHUYỀN THƯƠNG HIỆU VÔ TẬN (INFINITE BRAND TICKER) */}
          <div className="relative w-full overflow-hidden py-3 bg-slate-900 text-white rounded-3xl shadow-xl">
            {/* Gradient Edge Masks for soft fade */}
            <div className="absolute left-0 inset-y-0 w-16 sm:w-28 bg-gradient-to-r from-slate-900 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 inset-y-0 w-16 sm:w-28 bg-gradient-to-l from-slate-900 to-transparent z-10 pointer-events-none" />

            <div className="px-6 py-1.5 flex items-center justify-between text-xs border-b border-slate-800 mb-3 text-slate-400">
              <span className="font-bold uppercase tracking-wider flex items-center gap-2 text-teal-400">
                <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
                Hệ Sinh Thái Thương Hiệu Đồng Hành Cùng Uni Creation
              </span>
              <span className="hidden sm:inline text-[11px] text-slate-400">
                Bấm vào thương hiệu bất kỳ để mở hồ sơ năng lực dự án ↗
              </span>
            </div>

            <motion.div
              animate={{ x: ['0%', '-50%'] }}
              transition={{ repeat: Infinity, duration: 34, ease: 'linear' }}
              className="flex items-center gap-4 w-max hover:[animation-play-state:paused]"
            >
              {[...CLIENT_PROJECTS, ...CLIENT_PROJECTS].map((proj, idx) => (
                <button
                  key={`ticker-${proj.id}-${idx}`}
                  onClick={() => handleOpenProject(proj)}
                  className="flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-slate-800/80 hover:bg-slate-700/90 border border-slate-700/60 hover:border-[#0baba0] text-left transition-all cursor-pointer group shrink-0"
                >
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center font-black text-xs shadow-md shrink-0 ring-1 ring-white/20"
                    style={{ backgroundColor: proj.logoAccent.bg, color: proj.logoAccent.text }}
                  >
                    {proj.logoAccent.initials}
                  </div>
                  <div className="space-y-0.5">
                    <div className="font-black text-xs text-white group-hover:text-teal-300 transition-colors whitespace-nowrap">
                      {proj.shortName}
                    </div>
                    <div className="text-[10px] text-slate-400 whitespace-nowrap">
                      {proj.category}
                    </div>
                  </div>
                  <ExternalLink className="w-3 h-3 text-slate-500 group-hover:text-teal-400 transition-colors ml-1" />
                </button>
              ))}
            </motion.div>
          </div>

          {/* 4 HERO SPOTLIGHT CLIENTS (TẬP ĐOÀN ĐỐI TÁC TRỌNG ĐIỂM) */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                <h3 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight">
                  Tập Đoàn Đối Tác Trọng Điểm
                </h3>
              </div>
              <span className="text-xs text-[#088c83] font-bold">
                Bấm vào thẻ để xem case study & website thực tế →
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                CLIENT_PROJECTS.find((p) => p.id === 'vingroup')!,
                CLIENT_PROJECTS.find((p) => p.id === 'sun-group')!,
                CLIENT_PROJECTS.find((p) => p.id === 'viettel')!,
                CLIENT_PROJECTS.find((p) => p.id === 'techcombank')!
              ]
                .filter(Boolean)
                .map((proj) => (
                  <motion.div
                    key={`spotlight-${proj.id}`}
                    whileHover={{ y: -6 }}
                    transition={{ duration: 0.25 }}
                    onClick={() => handleOpenProject(proj)}
                    className="group relative rounded-3xl bg-white border-2 border-slate-200/90 hover:border-[#0baba0] shadow-md hover:shadow-2xl transition-all overflow-hidden cursor-pointer flex flex-col justify-between"
                  >
                    {/* Top Preview Banner with Image */}
                    <div className="relative h-44 w-full overflow-hidden bg-slate-900">
                      <img
                        src={proj.previewImage}
                        alt={proj.name}
                        className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

                      {/* Floating Brand Badge */}
                      <div className="absolute top-3 left-3 flex items-center gap-2">
                        <div
                          className="w-10 h-10 rounded-xl flex items-center justify-center font-black text-xs shadow-lg ring-2 ring-white/30"
                          style={{ backgroundColor: proj.logoAccent.bg, color: proj.logoAccent.text }}
                        >
                          {proj.logoAccent.initials}
                        </div>
                        <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider border border-white/10">
                          {proj.category}
                        </span>
                      </div>

                      <div className="absolute bottom-3 left-3 right-3 text-white">
                        <div className="text-[11px] font-semibold text-teal-300 flex items-center gap-1">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          <span>Đối tác chiến lược</span>
                        </div>
                        <h4 className="text-base font-black text-white group-hover:text-teal-200 transition-colors line-clamp-1">
                          {proj.shortName}
                        </h4>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                      <div className="space-y-2">
                        <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                          {proj.tagline}
                        </p>

                        {/* Feature pills */}
                        <div className="flex flex-wrap gap-1.5 pt-1">
                          <span className="px-2 py-0.5 rounded-md bg-teal-50 text-[#088c83] text-[10px] font-bold">
                            ⚡ Tải trang &lt;0.8s
                          </span>
                          <span className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 text-[10px] font-bold">
                            🛡️ Bảo mật ISO
                          </span>
                          <span className="px-2 py-0.5 rounded-md bg-amber-50 text-amber-700 text-[10px] font-bold">
                            ★ Top 1 SEO
                          </span>
                        </div>
                      </div>

                      {/* Action Bar */}
                      <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                        <span className="text-xs font-bold text-[#088c83] group-hover:text-[#0baba0] flex items-center gap-1">
                          <span>Xem Case Study</span>
                          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                        </span>
                        <span className="text-[10px] text-slate-400 font-mono">
                          {proj.badge}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
            </div>
          </div>

          {/* BỘ LỌC TƯƠNG TÁC & TÌM KIẾM THƯƠNG HIỆU */}
          <div className="space-y-6 pt-4">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
              
              {/* Category Tabs */}
              <div className="flex flex-wrap items-center gap-2">
                {[
                  { id: 'all', label: 'Tất Cả Thương Hiệu', count: CLIENT_PROJECTS.length },
                  { id: 'corporation', label: 'Tập Đoàn & BĐS', count: 5 },
                  { id: 'finance', label: 'Tài Chính & Ngân Hàng', count: 4 },
                  { id: 'tech', label: 'Công Nghệ & Viễn Thông', count: 5 },
                  { id: 'retail', label: 'Bán Lẻ & Dịch Vụ', count: 10 }
                ].map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setPartnerCategory(cat.id)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
                      partnerCategory === cat.id
                        ? 'btn-brand-gradient text-white shadow-md shadow-[#0baba0]/25'
                        : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'
                    }`}
                  >
                    <span>{cat.label}</span>
                    <span
                      className={`text-[10px] px-1.5 py-0.2 rounded-full font-black ${
                        partnerCategory === cat.id
                          ? 'bg-white/25 text-white'
                          : 'bg-slate-100 text-slate-500'
                      }`}
                    >
                      {cat.count}
                    </span>
                  </button>
                ))}
              </div>

              {/* Live Search Input */}
              <div className="relative w-full lg:w-72">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="text"
                  value={partnerSearch}
                  onChange={(e) => setPartnerSearch(e.target.value)}
                  placeholder="Tìm thương hiệu, lĩnh vực..."
                  className="w-full pl-9 pr-8 py-2 rounded-xl bg-white border border-slate-200 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#0baba0] focus:ring-2 focus:ring-[#0baba0]/20 transition-all shadow-2xs"
                />
                {partnerSearch && (
                  <button
                    onClick={() => setPartnerSearch('')}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-0.5 cursor-pointer"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

            </div>

            {/* LƯỚI THƯƠNG HIỆU SÁNG TẠO (CREATIVE CARD GRID) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
              {filteredClientProjects.map((proj) => (
                <motion.div
                  key={proj.id}
                  whileHover={{ y: -4 }}
                  onClick={() => handleOpenProject(proj)}
                  className="p-5 rounded-2xl bg-white hover:bg-gradient-to-br hover:from-white hover:to-teal-50/25 border border-slate-200/90 hover:border-[#0baba0] hover:shadow-xl transition-all cursor-pointer group flex flex-col justify-between space-y-4 shadow-xs relative overflow-hidden"
                >
                  {/* Top brand accent bar */}
                  <div
                    className="absolute top-0 left-0 right-0 h-1 transition-all group-hover:h-1.5"
                    style={{ backgroundColor: proj.logoAccent.bg || '#0baba0' }}
                  />

                  {/* Header Row: Avatar Monogram + Sector */}
                  <div className="flex items-start justify-between gap-3 pt-1">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-11 h-11 rounded-xl flex items-center justify-center font-black text-xs shadow-md shrink-0 ring-1 ring-black/5 group-hover:scale-105 transition-transform"
                        style={{ backgroundColor: proj.logoAccent.bg, color: proj.logoAccent.text }}
                      >
                        {proj.logoAccent.initials}
                      </div>
                      <div className="space-y-0.5">
                        <span className="text-[10px] font-bold text-[#088c83] bg-teal-50 px-2 py-0.5 rounded-md inline-block">
                          {proj.category}
                        </span>
                        <div className="text-xs font-bold text-slate-500">
                          {proj.shortName}
                        </div>
                      </div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-slate-300 group-hover:text-[#0baba0] transition-colors shrink-0 mt-1" />
                  </div>

                  {/* Body: Full Title & Tagline */}
                  <div className="space-y-1.5 flex-1">
                    <h4 className="font-extrabold text-sm text-slate-900 group-hover:text-[#0baba0] transition-colors leading-snug line-clamp-2">
                      {proj.name}
                    </h4>
                    <p className="text-[11px] text-slate-500 line-clamp-2 leading-relaxed">
                      {proj.tagline}
                    </p>
                  </div>

                  {/* Footer: Project Badge & Action link */}
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="text-[10px] text-slate-400 font-medium truncate max-w-[140px]">
                      {proj.website.replace('https://', '').replace('/', '')}
                    </span>
                    <span className="text-[11px] font-bold text-[#088c83] group-hover:text-[#0baba0] flex items-center gap-1 shrink-0">
                      <span>Chi tiết</span>
                      <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Empty search state */}
            {filteredClientProjects.length === 0 && (
              <div className="p-12 text-center bg-white rounded-3xl border border-slate-200 space-y-3">
                <Search className="w-8 h-8 text-slate-400 mx-auto" />
                <h4 className="text-base font-bold text-slate-800">Không tìm thấy thương hiệu phù hợp</h4>
                <p className="text-xs text-slate-500 max-w-sm mx-auto">
                  Không có đối tác nào trùng khớp với từ khóa "{partnerSearch}". Vui lòng thử tìm kiếm tên khác hoặc chọn danh mục "Tất Cả Thương Hiệu".
                </p>
                <button
                  onClick={() => {
                    setPartnerSearch('');
                    setPartnerCategory('all');
                  }}
                  className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-colors cursor-pointer"
                >
                  Xóa bộ lọc tìm kiếm
                </button>
              </div>
            )}

          </div>

          {/* BANNER CAM KẾT ĐỒNG HÀNH & CTA */}
          <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-[#064e4a] text-white shadow-2xl relative overflow-hidden">
            {/* Background decorative glow */}
            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-60 h-60 bg-teal-500/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-60 h-60 bg-[#91c544]/20 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6">
              <div className="space-y-2 text-center lg:text-left max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-teal-300 text-xs font-bold">
                  <ShieldCheck className="w-4 h-4 text-teal-400" />
                  <span>Cam Kết Bảo Mật & Đồng Hành Trọn Đời</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-white">
                  Đưa Doanh Nghiệp Của Bạn Gia Nhập Mạng Lưới Đối Tác Tiên Phong
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Uni Creation cam kết bảo mật thông tin 100%, bàn giao toàn quyền sở hữu mã nguồn không phát sinh chi phí duy trì bản quyền, và đồng hành bảo hành hệ thống trọn đời cho mọi khách hàng.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
                <button
                  onClick={() => {
                    if (onConsult) {
                      onConsult('Dự Án Doanh Nghiệp');
                    } else {
                      const formEl = document.getElementById('consult-form-anchor');
                      if (formEl) formEl.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="px-6 py-3.5 rounded-xl btn-brand-gradient text-white text-xs font-black uppercase tracking-wider shadow-lg shadow-[#0baba0]/30 hover:scale-102 transition-all cursor-pointer flex items-center gap-2"
                >
                  <span>Đăng Ký Tư Vấn Dự Án Ngay</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href={`tel:${COMPANY_INFO.hotline.replace(/\s/g, '')}`}
                  className="px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition-all border border-white/20 flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-teal-400" />
                  <span>Hotline: {COMPANY_INFO.hotline}</span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </motion.section>

      {/* =========================================================================
          13. MẠNG LƯỚI 3 VĂN PHÒNG & HOTLINE (WARM SLATE #f8fafc)
          ========================================================================= */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6 }}
        className="w-full bg-[#f8fafc] py-16 sm:py-24 border-b border-slate-200/80"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-slate-200">
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0baba0]">Hiện Diện Toàn Quốc</span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
                Hệ Thống 3 Văn Phòng & Đầu Mối 24/7
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 max-w-md">
              Mạng lưới chi nhánh tại Hà Nội, Đà Nẵng, TP.HCM sẵn sàng tiếp đón và phục vụ trực tiếp.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Trụ sở chính Hà Nội */}
            <motion.div whileHover={{ y: -4 }} className="p-7 rounded-3xl bg-white border-2 border-teal-500/30 shadow-md space-y-4 flex flex-col justify-between hover:border-[#0baba0] transition-colors">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded-full bg-teal-50 text-[#088c83] text-[10px] font-bold uppercase">
                    Trụ Sở Chính
                  </span>
                  <Building2 className="w-5 h-5 text-[#0baba0]" />
                </div>
                <h4 className="text-xl font-black text-slate-900">
                  Hà Nội (Headquarter)
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed font-light">
                  Tầng 6, Số 303 Vũ Tông Phan, Phường Khương Đình, Quận Thanh Xuân, TP. Hà Nội.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-400">Hotline:</span>
                <a href="tel:0967508333" className="font-bold text-[#0baba0] hover:underline">0967.508.333</a>
              </div>
            </motion.div>

            {/* Chi nhánh Đà Nẵng */}
            <motion.div whileHover={{ y: -4 }} className="p-7 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4 flex flex-col justify-between hover:border-[#0baba0] transition-colors">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 text-[10px] font-bold uppercase">
                    Chi Nhánh Miền Trung
                  </span>
                  <MapPin className="w-5 h-5 text-blue-600" />
                </div>
                <h4 className="text-xl font-black text-slate-900">
                  Đà Nẵng
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed font-light">
                  41 Khuê Mỹ Đông 14, Phường Khuê Mỹ, Quận Ngũ Hành Sơn, TP. Đà Nẵng.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-400">Hotline:</span>
                <a href="tel:0373165333" className="font-bold text-blue-600 hover:underline">0373.165.333</a>
              </div>
            </motion.div>

            {/* Chi nhánh TP. Hồ Chí Minh */}
            <motion.div whileHover={{ y: -4 }} className="p-7 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4 flex flex-col justify-between hover:border-[#0baba0] transition-colors">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 text-[10px] font-bold uppercase">
                    Chi Nhánh Miền Nam
                  </span>
                  <MapPin className="w-5 h-5 text-amber-600" />
                </div>
                <h4 className="text-xl font-black text-slate-900">
                  TP. Hồ Chí Minh
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed font-light">
                  973/136 Nguyễn Ảnh Thủ, Phường Tân Chánh Hiệp, Quận 12, TP. Hồ Chí Minh.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-400">Hotline:</span>
                <a href="tel:0967508333" className="font-bold text-amber-600 hover:underline">0967.508.333</a>
              </div>
            </motion.div>

          </div>

          {/* Hotline Box */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1">
              <span className="text-slate-500 text-[11px]">Tổng đài tư vấn dịch vụ:</span>
              <div className="font-mono font-bold text-[#0baba0] text-sm sm:text-base">0967.508.333</div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1">
              <span className="text-slate-500 text-[11px]">Hỗ trợ kỹ thuật 24/7/365:</span>
              <div className="font-mono font-bold text-emerald-600 text-sm sm:text-base">0373.085.333</div>
              <div className="text-[10px] text-slate-400">kythuat@unicreation.vn</div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1">
              <span className="text-slate-500 text-[11px]">Tư vấn giải pháp & báo giá:</span>
              <div className="font-mono font-bold text-blue-600 text-sm sm:text-base">0373.165.333</div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1">
              <span className="text-slate-500 text-[11px]">Tư vấn quảng cáo Google Ads:</span>
              <div className="font-mono font-bold text-amber-600 text-sm sm:text-base">0373.064.333 – 0373.087.333</div>
            </div>
          </div>

        </div>
      </motion.section>

      {/* =========================================================================
          14. FORM ĐĂNG KÝ TƯ VẤN (BRIGHT MINT & SLATE GRADIENT)
          ========================================================================= */}
      <motion.section
        id="consult-form-anchor"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6 }}
        className="w-full bg-gradient-to-b from-teal-50/60 via-slate-50 to-white py-16 sm:py-24 border-t border-slate-200/80"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0baba0]/10 text-[#088c83] text-xs font-bold uppercase tracking-wider">
                Khởi Động Dự Án Số
              </div>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-900 leading-tight">
                Đăng Ký Tư Vấn & Nhận Báo Giá Miễn Phí
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                Điền thông tin yêu cầu của bạn, chuyên viên kỹ sư của Uni Creation sẽ liên hệ lại trong vòng <strong>15 – 30 phút</strong> để tư vấn giải pháp tối ưu nhất.
              </p>

              <div className="space-y-2.5 pt-2">
                <div className="flex items-center gap-2 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Khảo sát và tư vấn cấu trúc web hoàn toàn miễn phí</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Tặng gói voucher quảng cáo Google Ads trị giá tới 500k</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Cam kết bảo mật thông tin doanh nghiệp tuyệt đối</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 bg-white text-slate-900 p-7 sm:p-10 rounded-3xl shadow-xl border border-slate-200/80">
              {formSubmitted ? (
                <div className="text-center py-8 space-y-3">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <Check className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">Gửi Yêu Cầu Thành Công!</h3>
                  <p className="text-xs text-slate-600 max-w-md mx-auto">
                    Cảm ơn bạn đã liên hệ Uni Creation. Chuyên viên tư vấn sẽ liên hệ lại trong vòng 15 – 30 phút. Hotline hỗ trợ 24/7: <strong>0967.508.333</strong>.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-700">Họ và Tên *</label>
                      <input
                        type="text"
                        required
                        placeholder="Nguyễn Văn A"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-800 focus:outline-none focus:border-[#0baba0]"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-700">Số Điện Thoại / Zalo *</label>
                      <input
                        type="tel"
                        required
                        placeholder="0987 654 321"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-800 focus:outline-none focus:border-[#0baba0]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-700">Email Liên Hệ</label>
                      <input
                        type="email"
                        placeholder="contact@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-800 focus:outline-none focus:border-[#0baba0]"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-700">Gói Dịch Vụ Quan Tâm</label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-800 focus:outline-none focus:border-[#0baba0] bg-white"
                      >
                        <option value="Gói Startup - 2.500.000 VNĐ">Gói Startup - Từ 2.500.000 VNĐ</option>
                        <option value="Gói Doanh Nghiệp (Pro) - 4.000.000 VNĐ">Gói Doanh Nghiệp (Pro) - Từ 4.000.000 VNĐ (Khuyên Dùng)</option>
                        <option value="Gói VIP / Custom Theo Yêu Cầu">Gói VIP / Custom Theo Yêu Cầu</option>
                        <option value="Hạ tầng Cloud Hosting NVMe & Email">Hạ tầng Cloud Hosting NVMe & Email</option>
                        <option value="Dịch vụ Viết Bài Chuẩn SEO & Ads">Dịch vụ Viết Bài Chuẩn SEO & Google Ads</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700">Ghi Chú Yêu Cầu Hoặc Lĩnh Vực Kinh Doanh</label>
                    <textarea
                      rows={2}
                      placeholder="VD: Cần thiết kế website bán hàng nội thất, đã có logo và hình ảnh..."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full px-4 py-2 rounded-xl border border-slate-200 text-xs text-slate-800 focus:outline-none focus:border-[#0baba0]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl btn-brand-gradient text-white font-bold text-xs uppercase tracking-wider shadow-md hover:scale-[1.01] transition-all cursor-pointer flex items-center justify-center gap-2"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Gửi Yêu Cầu Tư Vấn Miễn Phí (15 – 30 Phút)</span>
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </motion.section>

      {/* =========================================================================
          MODAL 1: CLIENT PROJECT MODAL PREVIEW
          ========================================================================= */}
      {selectedProject && (
        <ClientProjectModal
          isOpen={isProjectModalOpen}
          onClose={() => setIsProjectModalOpen(false)}
          project={selectedProject}
          onPrev={handlePrevProject}
          onNext={handleNextProject}
        />
      )}

      {/* =========================================================================
          MODAL 2: E-PROFILE DOSSIER A4 (XEM & IN TRỰC TIẾP HOẶC LƯU PDF)
          ========================================================================= */}
      <AnimatePresence>
        {isProfileModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/70 backdrop-blur-md overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-auto max-h-[92vh] flex flex-col"
            >
              
              {/* Modal Top Toolbar */}
              <div className="flex items-center justify-between px-6 py-4 bg-slate-900 text-white shrink-0">
                <div className="flex items-center gap-2">
                  <FileText className="w-5 h-5 text-[#91c544]" />
                  <span className="font-bold text-sm">Hồ Sơ Năng Lực Doanh Nghiệp (E-Profile A4) · UNIVN</span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => window.print()}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition-colors cursor-pointer"
                  >
                    <Printer className="w-3.5 h-3.5" />
                    <span>In Hồ Sơ (PDF)</span>
                  </button>
                  <button
                    onClick={() => setIsProfileModalOpen(false)}
                    className="p-1.5 rounded-lg hover:bg-white/10 text-slate-300 hover:text-white transition-colors cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Printable Body */}
              <div className="p-6 sm:p-10 overflow-y-auto space-y-8 text-slate-800 text-xs sm:text-sm">
                
                {/* Cover Header */}
                <div className="p-6 rounded-2xl bg-gradient-to-r from-teal-50 to-emerald-50 border border-teal-200 text-slate-900 space-y-2">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#088c83]">
                    HỒ SƠ NĂNG LỰC DOANH NGHIỆP (COMPANY PROFILE)
                  </div>
                  <h1 className="text-xl sm:text-2xl font-black text-slate-900">
                    CÔNG TY CỔ PHẦN UNI CREATION VIỆT NAM (UNIVN)
                  </h1>
                  <p className="text-xs text-slate-600 italic">
                    Khẳng Định Vị Thế Số – Bứt Phá Doanh Thu Cùng Giải Pháp Web & Hạ Tầng Chuẩn SEO
                  </p>
                  <div className="pt-2 flex flex-wrap gap-4 text-xs font-mono text-[#088c83] font-bold">
                    <span>Mã số thuế: 0109090636</span>
                    <span>·</span>
                    <span>Google Partner</span>
                    <span>·</span>
                    <span>Hotline: 0967.508.333</span>
                  </div>
                </div>

                {/* Section 1: Thư Ngỏ */}
                <div className="space-y-2">
                  <h3 className="font-black text-sm uppercase tracking-wide text-[#088c83] border-b pb-1">
                    1. THƯ NGỎ TỪ BAN LÃNH ĐẠO
                  </h3>
                  <p className="leading-relaxed text-slate-600 text-xs">
                    Kính gửi Quý Khách hàng và Quý Đối tác. Trong kỷ nguyên số hóa, website không đơn thuần là tấm danh thiếp điện tử mà là trụ sở số, là kênh bán hàng tự động 24/7 và là tài sản chiến lược quyết định năng lực cạnh tranh. Khởi nguồn từ 2015, Uni Creation tự hào mang đến hệ sinh thái giải pháp số toàn diện: Web Chuẩn SEO, Máy chủ Pure NVMe và Tiếp thị đa kênh, đồng hành cùng hơn 1.200+ doanh nghiệp trên khắp cả nước.
                  </p>
                </div>

                {/* Section 2: Thông Tin Pháp Lý & Văn Phòng */}
                <div className="space-y-2">
                  <h3 className="font-black text-sm uppercase tracking-wide text-[#088c83] border-b pb-1">
                    2. THÔNG TIN PHÁP LÝ & MẠNG LƯỚI VĂN PHÒNG
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                      <div className="font-bold text-slate-900">Trụ sở chính Hà Nội</div>
                      <div className="text-slate-600 mt-1">Tầng 6, Số 303 Vũ Tông Phan, Q. Thanh Xuân, TP. Hà Nội</div>
                      <div className="text-[#0baba0] font-bold mt-1">0967.508.333</div>
                    </div>
                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                      <div className="font-bold text-slate-900">Chi nhánh Đà Nẵng</div>
                      <div className="text-slate-600 mt-1">41 Khuê Mỹ Đông 14, Q. Ngũ Hành Sơn, TP. Đà Nẵng</div>
                      <div className="text-blue-600 font-bold mt-1">0373.165.333</div>
                    </div>
                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                      <div className="font-bold text-slate-900">Chi nhánh TP.HCM</div>
                      <div className="text-slate-600 mt-1">973/136 Nguyễn Ảnh Thủ, Q. 12, TP. Hồ Chí Minh</div>
                      <div className="text-amber-600 font-bold mt-1">0967.508.333</div>
                    </div>
                  </div>
                </div>

                {/* Section 3: Bảng Giá */}
                <div className="space-y-2">
                  <h3 className="font-black text-sm uppercase tracking-wide text-[#088c83] border-b pb-1">
                    3. BẢNG DỊCH VỤ WEBSITE CHUẨN SEO
                  </h3>
                  <table className="w-full text-left text-xs border border-slate-200">
                    <thead className="bg-slate-100 font-bold text-slate-700">
                      <tr>
                        <th className="p-2 border">Hạng mục</th>
                        <th className="p-2 border">Gói Startup</th>
                        <th className="p-2 border text-[#088c83]">Gói Doanh Nghiệp (Pro)</th>
                        <th className="p-2 border">Gói VIP / Custom</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="p-2 border font-semibold">Mức đầu tư</td>
                        <td className="p-2 border font-bold">Từ 2.500.000 VNĐ</td>
                        <td className="p-2 border font-bold text-[#088c83]">Từ 4.000.000 VNĐ</td>
                        <td className="p-2 border font-bold">Theo yêu cầu</td>
                      </tr>
                      <tr>
                        <td className="p-2 border font-semibold">Bàn giao Source Code</td>
                        <td className="p-2 border text-emerald-600 font-bold">100% Mã nguồn gốc</td>
                        <td className="p-2 border text-emerald-600 font-bold">100% Mã nguồn gốc</td>
                        <td className="p-2 border text-emerald-600 font-bold">100% Mã nguồn gốc</td>
                      </tr>
                      <tr>
                        <td className="p-2 border font-semibold">Bảo hành</td>
                        <td className="p-2 border text-emerald-600 font-bold">Trọn đời (Host Uni)</td>
                        <td className="p-2 border text-emerald-600 font-bold">Trọn đời (Host Uni)</td>
                        <td className="p-2 border text-emerald-600 font-bold">Trọn đời (Host Uni)</td>
                      </tr>
                      <tr>
                        <td className="p-2 border font-semibold">Tốc độ Speed</td>
                        <td className="p-2 border">PC 70+ điểm</td>
                        <td className="p-2 border">PC 75 – 85+ điểm</td>
                        <td className="p-2 border">PC/Mobile 85 – 95+ điểm</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Section 4: 5 Cam Kết Vàng */}
                <div className="space-y-2">
                  <h3 className="font-black text-sm uppercase tracking-wide text-[#088c83] border-b pb-1">
                    4. NĂM CAM KẾT VÀNG (USP)
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    <div className="p-2 bg-slate-50 rounded-lg">1. Bàn giao 100% trọn bộ mã nguồn gốc</div>
                    <div className="p-2 bg-slate-50 rounded-lg">2. Bảo hành kỹ thuật trọn đời 24/7/365</div>
                    <div className="p-2 bg-slate-50 rounded-lg">3. Chính sách hoàn tiền 100% nếu sai cam kết</div>
                    <div className="p-2 bg-slate-50 rounded-lg">4. Chuẩn SEO độc quyền, PageSpeed 70 – 90+ điểm</div>
                    <div className="p-2 bg-slate-50 rounded-lg sm:col-span-2">5. Hỗ trợ kỹ thuật siêu tốc phản hồi trong 15 – 30 phút</div>
                  </div>
                </div>

                {/* Footer */}
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-center text-xs text-slate-500">
                  © 2015 – 2026 CÔNG TY CỔ PHẦN UNI CREATION VIỆT NAM (UNIVN) · Hotline 0967.508.333 · Website: univn.vn
                </div>

              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
};
