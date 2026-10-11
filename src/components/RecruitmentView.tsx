import React, { useState, useMemo, useEffect } from 'react';
import { COMPANY_INFO } from '../data/siteData';
import {
  Briefcase,
  MapPin,
  Clock,
  DollarSign,
  Send,
  CheckCircle2,
  Award,
  Users,
  Sparkles,
  Phone,
  Mail,
  ArrowRight,
  ChevronRight,
  X,
  FileText,
  Calendar,
  Search,
  Building2,
  Check,
  HelpCircle,
  Laptop,
  GraduationCap,
  HeartHandshake,
  TrendingUp,
  Share2,
  Filter,
  ShieldCheck,
  ChevronDown
} from 'lucide-react';

export interface JobPosition {
  id: string;
  title: string;
  department: string;
  category: 'all' | 'sales' | 'dev' | 'design' | 'content' | 'cskh';
  type: string;
  salary: string;
  location: string;
  shortLocation: string;
  experience: string;
  deadline: string;
  vacancies: number;
  isUrgent?: boolean;
  isHot?: boolean;
  shortSummary: string;
  description: string[];
  requirements: string[];
  benefits: string[];
  workHours: string;
  workAddress: string;
}

export const JOBS_DATA: JobPosition[] = [
  {
    id: 'cskh',
    title: 'Chuyên Viên Chăm Sóc Khách Hàng (CSKH & Vận Hành Web)',
    department: 'Chăm Sóc Khách Hàng',
    category: 'cskh',
    type: 'Toàn thời gian',
    salary: '8 - 14 Triệu / tháng',
    location: 'Hà Nội (Trụ sở Thanh Xuân)',
    shortLocation: 'Hà Nội',
    experience: 'Từ 6 tháng trở lên',
    deadline: '30/11/2026',
    vacancies: 2,
    isHot: true,
    shortSummary: 'Hỗ trợ khách hàng sau bàn giao, hướng dẫn quản trị web, tiếp nhận phản hồi và duy trì gia hạn Hosting/Tên miền.',
    description: [
      'Hướng dẫn khách hàng thao tác quản trị website, cập nhật banner, sản phẩm sau khi nghiệm thu.',
      'Tiếp nhận các yêu cầu phát sinh hoặc phản hồi kỹ thuật, phối hợp cùng lập trình viên để xử lý kịp thời.',
      'Theo dõi, thông báo định kỳ và hỗ trợ khách hàng gia hạn dịch vụ Hosting, Tên miền, SSL.',
      'Thực hiện các khảo sát độ hài lòng của khách hàng (CSAT) và đề xuất cải tiến dịch vụ.'
    ],
    requirements: [
      'Giọng nói chuẩn, giao tiếp nhẹ nhàng, lưu loát, tinh thần phục vụ và hỗ trợ khách hàng tận tâm.',
      'Thành thạo tin học văn phòng, nhanh nhạy trong việc học cách sử dụng các hệ thống CMS quản trị web.',
      'Ưu tiên ứng viên từng có kinh nghiệm CSKH tại các công ty phần mềm, digital agency hoặc viễn thông.',
      'Có khả năng sắp xếp công việc gọn gàng, xử lý tình huống linh hoạt và kiên nhẫn.'
    ],
    benefits: [
      'Lương cứng 8 - 12 Triệu + Thưởng KPI duy trì khách hàng + Thưởng dịch vụ gia hạn (Thu nhập 12 - 16M).',
      'Được đào tạo bài bản 1-1 về kiến thức website, SEO, quản trị hosting và quy trình CSKH chuyên nghiệp.',
      'Đóng BHXH, BHYT đầy đủ theo quy định Pháp luật ngay sau thời gian thử việc.',
      'Môi trường làm việc năng động, trà cafe hoa quả miễn phí hàng ngày, du lịch nghỉ dưỡng 1-2 lần/năm.'
    ],
    workHours: 'Thứ 2 - Thứ 6 (8h30 - 17h30), Thứ 7 làm luân phiên buổi sáng',
    workAddress: 'Tầng 6, Số 303 Vũ Tông Phan, Quận Thanh Xuân, TP. Hà Nội'
  },
  {
    id: 'sales-executive',
    title: 'Chuyên Viên Kinh Doanh Website & Digital Marketing',
    department: 'Kinh Doanh & Phát Triển',
    category: 'sales',
    type: 'Toàn thời gian',
    salary: '12 - 30 Triệu + Hoa hồng % cao',
    location: 'Hà Nội & TP. Hồ Chí Minh',
    shortLocation: 'Hà Nội / TP.HCM',
    experience: 'Không yêu cầu (Được đào tạo)',
    deadline: '25/11/2026',
    vacancies: 5,
    isUrgent: true,
    isHot: true,
    shortSummary: 'Tư vấn giải pháp thiết kế website trọn gói từ data khách hàng nóng công ty cung cấp, chốt hợp đồng và nhận hoa hồng hấp dẫn.',
    description: [
      'Tiếp nhận data khách hàng tiềm năng có nhu cầu thiết kế web và dịch vụ số do Marketing đem về hàng ngày.',
      'Tư vấn trực tiếp hoặc qua điện thoại/Zalo giải pháp gói website (Startup, Pro, VIP) phù hợp nhất với ngành nghề khách hàng.',
      'Báo giá, soạn thảo hợp đồng, đàm phán các điều khoản và tiến hành ký kết hợp đồng dịch vụ.',
      'Phối hợp với phòng Kỹ thuật theo dõi tiến độ dự án và chăm sóc khách hàng để tái ký/giới thiệu thêm khách hàng mới.'
    ],
    requirements: [
      'Đam mê kinh doanh, năng động, nhiệt huyết, khao khát kiếm thu nhập cao và bứt phá bản thân.',
      'Kỹ năng giao tiếp và thuyết phục tốt, tự tin khi trao đổi với chủ doanh nghiệp, trưởng phòng kinh doanh.',
      'Có kinh nghiệm telesale, tư vấn B2B hoặc bán hàng dịch vụ là lợi thế lớn (chưa có kinh nghiệm được đào tạo bài bản từ A-Z).',
      'Thái độ tích cực, chủ động, có tinh thần kỷ luật và trách nhiệm với mục tiêu doanh số.'
    ],
    benefits: [
      'Lương cứng 6.000.000 - 10.000.000 đ (tùy năng lực) + Thưởng hoa hồng 8% - 18% doanh số hợp đồng + Thưởng nóng tuần/tháng.',
      'Tổng thu nhập trung bình 15.000.000 - 35.000.000 đ/tháng, không giới hạn trần thu nhập.',
      'Được cấp nguồn data khách hàng có nhu cầu thực tế cao, không phải tự mò mẫm tìm kiếm từ con số 0.',
      'Lộ trình thăng tiến rõ ràng lên Trưởng nhóm (Team Leader) sau 6 tháng nếu đạt thành tích tốt.'
    ],
    workHours: 'Thứ 2 - Thứ 6 (8h30 - 17h30), nghỉ Thứ 7 và Chủ Nhật',
    workAddress: 'Hà Nội: 303 Vũ Tông Phan | TP.HCM: 973/136 Nguyễn Ảnh Thủ, Q.12'
  },
  {
    id: 'frontend-wp',
    title: 'Lập Trình Viên Web Frontend & WordPress Specialist',
    department: 'Kỹ Thuật & Công Nghệ',
    category: 'dev',
    type: 'Toàn thời gian / Hybrid',
    salary: '14 - 24 Triệu / tháng',
    location: 'Hà Nội / Hỗ trợ làm Hybrid',
    shortLocation: 'Hà Nội (Hybrid)',
    experience: '1 - 3 năm kinh nghiệm',
    deadline: '20/11/2026',
    vacancies: 3,
    isHot: true,
    shortSummary: 'Cắt giao diện chuẩn Responsive từ Figma, lập trình WordPress/React tối ưu tốc độ Google PageSpeed 95+ và chuẩn SEO.',
    description: [
      'Cắt giao diện HTML5, Tailwind CSS, JavaScript từ bản vẽ thiết kế Figma pixel-perfect và chuẩn responsive.',
      'Phát triển Custom Theme & Plugin WordPress theo yêu cầu đặc thù của từng dự án doanh nghiệp.',
      'Tối ưu hóa hiệu năng website, tối ưu Core Web Vitals, Google PageSpeed đạt điểm xanh trên 90 điểm.',
      'Tích hợp các API bên thứ ba (Cổng thanh toán VietQR/VNPAY/Momo, Chatbot, CRM, Google Analytics, Zalo ZNS).'
    ],
    requirements: [
      'Thành thạo HTML5, CSS3, SCSS/Tailwind CSS, JavaScript (ES6+), PHP và cấu trúc WordPress Core.',
      'Hiểu rõ về tối ưu Onpage SEO, cấu trúc Semantic HTML, Schema.org và tốc độ tải trang.',
      'Biết sử dụng Git, hiểu về REST API / AJAX để kết nối dữ liệu mượt mà.',
      'Ưu tiên ứng viên có kiến thức React.js, Next.js hoặc TypeScript là lợi thế cộng thêm.'
    ],
    benefits: [
      'Lương cạnh tranh 14 - 24 Triệu (deal theo năng lực thực tế) + Thưởng hoàn thành dự án sớm + Thưởng chất lượng code.',
      'Trang bị máy tính cấu hình cao, màn hình đôi sắc nét phục vụ lập trình tối ưu.',
      'Chính sách làm việc Hybrid linh hoạt, xét tăng lương định kỳ 2 lần/năm.',
      'Hỗ trợ 100% kinh phí thi các chứng chỉ công nghệ, tham gia các khóa đào tạo nâng cao chuyên môn.'
    ],
    workHours: 'Thứ 2 - Thứ 6 (8h30 - 17h30)',
    workAddress: 'Tầng 6, Số 303 Vũ Tông Phan, Quận Thanh Xuân, TP. Hà Nội'
  },
  {
    id: 'uiux-designer',
    title: 'Chuyên Viên Thiết Kế Giao Diện UI/UX Web & Mobile',
    department: 'Thiết Kế Sáng Tạo',
    category: 'design',
    type: 'Toàn thời gian',
    salary: '12 - 20 Triệu / tháng',
    location: 'Hà Nội & Làm việc linh hoạt',
    shortLocation: 'Hà Nội',
    experience: '1 - 2 năm kinh nghiệm',
    deadline: '15/11/2026',
    vacancies: 2,
    isUrgent: false,
    shortSummary: 'Thiết kế giao diện website doanh nghiệp, sàn TMĐT trên Figma chuẩn Design System, tối ưu trải nghiệm người dùng và chuyển đổi.',
    description: [
      'Nghiên cứu yêu cầu dự án, phân tích hành vi khách hàng mục tiêu để xây dựng Wireframe, User Flow và Prototype.',
      'Thiết kế giao diện website hoàn chỉnh (Homepage, Landing Page, Dashboard, Mobile App) trên Figma chuẩn Design System.',
      'Bàn giao File thiết kế chuẩn chỉ cho lập trình viên kèm hướng dẫn UI Component, Spacing, Typography.',
      'Đề xuất các ý tưởng sáng tạo về hình ảnh, màu sắc, animation nhằm gia tăng tỷ lệ chuyển đổi cho khách hàng.'
    ],
    requirements: [
      'Thành thạo công cụ Figma, Adobe Illustrator, Photoshop. Có Portfolio dự án thực tế thể hiện gu thẩm mỹ tốt.',
      'Hiểu sâu về nguyên lý UI/UX: Hierarchy, Color Theory, Typography, Responsive Grid system.',
      'Có tư duy thẩm mỹ hiện đại, cập nhật nhanh các xu hướng thiết kế web quốc tế (Minimalism, Bento Grid, Neomorphism).',
      'Kỹ năng lắng nghe, tiếp nhận phản hồi và phối hợp ăn ý với bộ phận Kinh Doanh & Kỹ Thuật.'
    ],
    benefits: [
      'Mức lương 12 - 20 Triệu + Thưởng dự án xuất sắc + Thưởng sáng tạo.',
      'Môi trường tôn trọng tuyệt đối chất riêng và sự sáng tạo của Designer, không gò bó rập khuôn.',
      'Cơ hội tham gia thiết kế cho các thương hiệu doanh nghiệp hàng đầu đa lĩnh vực (Bất động sản, Luật, Giáo dục, TMĐT).',
      'Được cấp bản quyền phần mềm thiết kế chuyên nghiệp, kho tài nguyên ảnh/icon bản quyền không giới hạn.'
    ],
    workHours: 'Thứ 2 - Thứ 6 (8h30 - 17h30)',
    workAddress: 'Tầng 6, Số 303 Vũ Tông Phan, Quận Thanh Xuân, TP. Hà Nội'
  },
  {
    id: 'seo-content',
    title: 'Chuyên Viên Sáng Tạo Nội Dung & SEO Content',
    department: 'Marketing & Nội Dung',
    category: 'content',
    type: 'Toàn thời gian / Bán thời gian',
    salary: '9 - 16 Triệu / tháng',
    location: 'Hà Nội & Đà Nẵng',
    shortLocation: 'Hà Nội / Đà Nẵng',
    experience: 'Từ 6 tháng trở lên',
    deadline: '30/11/2026',
    vacancies: 3,
    isUrgent: true,
    shortSummary: 'Sản xuất bài viết chuẩn SEO Onpage, bài PR truyền thông và quản trị nội dung website đa ngành nghề cho các dự án khách hàng.',
    description: [
      'Nghiên cứu bộ từ khóa, lập dàn ý và viết bài viết chuẩn SEO Onpage theo từng ngành nghề được giao.',
      'Biên tập nội dung landing page, thông điệp thương hiệu, bài giới thiệu dịch vụ và tin tức doanh nghiệp.',
      'Tìm kiếm, xử lý hình ảnh và thiết kế banner minh họa trực quan, bắt mắt bằng Canva/Photoshop.',
      'Đăng tải bài viết lên hệ thống CMS, tối ưu tiêu đề SEO, Meta Description, thẻ H2/H3 và liên kết nội bộ.'
    ],
    requirements: [
      'Khả năng viết lách tốt, hành văn lưu loát, ngôn từ mạch lạc, tuyệt đối không sai lỗi chính tả và ngữ pháp.',
      'Hiểu rõ cấu trúc bài viết chuẩn SEO, mật độ từ khóa và cách ứng dụng các công cụ AI (Gemini, ChatGPT) hỗ trợ hiệu quả.',
      'Có tinh thần tự giác, chủ động tìm tòi kiến thức chuyên môn của các ngành nghề khác nhau để viết nội dung sâu sắc.',
      'Biết sử dụng cơ bản Photoshop hoặc Canva là một lợi thế.'
    ],
    benefits: [
      'Lương 9 - 16 Triệu (theo năng lực và số lượng bài) + Thưởng bài viết đạt Top Google + Thưởng KPI tháng.',
      'Được đào tạo chuyên sâu về Technical SEO, tư duy làm Content Strategy từ chuyên gia SEO 8+ năm kinh nghiệm.',
      'Cung cấp tài khoản trả phí các công cụ SEO hiện đại: Ahrefs, SEMrush, SurferSEO, Canva Pro.',
      'Chế độ phúc lợi, bảo hiểm, thưởng lễ tết và du lịch đầy đủ theo chính sách của công ty.'
    ],
    workHours: 'Thứ 2 - Thứ 6 (8h30 - 17h30)',
    workAddress: 'Hà Nội: 303 Vũ Tông Phan | Đà Nẵng: 41 Khuê Mỹ Đông 14'
  },
  {
    id: 'fullstack-dev',
    title: 'Kỹ Sư Lập Trình Web Fullstack (Node.js & React)',
    department: 'Kỹ Thuật & Công Nghệ',
    category: 'dev',
    type: 'Toàn thời gian',
    salary: '18 - 30 Triệu / tháng',
    location: 'Hà Nội (Trụ sở chính)',
    shortLocation: 'Hà Nội',
    experience: 'Từ 2 năm kinh nghiệm',
    deadline: '28/11/2026',
    vacancies: 2,
    isHot: true,
    shortSummary: 'Xây dựng web app hiệu năng cao, hệ thống quản lý SaaS, tích hợp Cloud VPS NVMe và các giải pháp AI tự động hóa.',
    description: [
      'Tham gia kiến trúc và phát triển các hệ thống Web Application, cổng thông tin doanh nghiệp, mini-SaaS.',
      'Xây dựng RESTful API, GraphQL an toàn và tối ưu tải bằng Node.js / Express / NestJS.',
      'Phát triển giao diện tương tác tốc độ cao với React, Next.js, Tailwind CSS.',
      'Tối ưu hóa cơ sở dữ liệu PostgreSQL/MySQL/MongoDB và thiết lập quy trình triển khai CI/CD trên Docker/Linux VPS.'
    ],
    requirements: [
      'Ít nhất 2 năm kinh nghiệm làm việc với JavaScript/TypeScript, React và Node.js.',
      'Nắm vững kiến thức về Database Design, Indexing, Caching (Redis) và bảo mật Web Application.',
      'Quen thuộc với môi trường Linux VPS, Nginx, Docker, quản lý Domain & SSL.',
      'Tư duy giải quyết vấn đề tốt, viết code sạch, có tinh thần trách nhiệm cao với sản phẩm.'
    ],
    benefits: [
      'Lương thỏa thuận 18 - 30 Triệu tùy năng lực + Thưởng kết quả kinh doanh năm + Thưởng dự án trọng điểm.',
      'Được làm việc với các công nghệ mới nhất, hệ thống Cloud hạ tầng VPS NVMe tốc độ cao và tích hợp AI.',
      'Xét tăng lương 2 lần/năm, lộ trình phát triển rõ ràng lên vị trí Tech Lead.',
      'Gói khám sức khỏe định kỳ hàng năm tại bệnh viện quốc tế, hỗ trợ thiết bị làm việc theo yêu cầu.'
    ],
    workHours: 'Thứ 2 - Thứ 6 (8h30 - 17h30)',
    workAddress: 'Tầng 6, Số 303 Vũ Tông Phan, Quận Thanh Xuân, TP. Hà Nội'
  }
];

export const RecruitmentView: React.FC = () => {
  // Filter state
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchKeyword, setSearchKeyword] = useState<string>('');

  // Selected job for Detail Modal
  const [activeJobDetail, setActiveJobDetail] = useState<JobPosition | null>(null);

  // Application form state
  const [candidateName, setCandidateName] = useState('');
  const [candidatePhone, setCandidatePhone] = useState('');
  const [candidateEmail, setCandidateEmail] = useState('');
  const [candidatePosition, setCandidatePosition] = useState(JOBS_DATA[0].title);
  const [candidateExperience, setCandidateExperience] = useState('Dưới 1 năm');
  const [candidateCvLink, setCandidateCvLink] = useState('');
  const [candidateNote, setCandidateNote] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);

  // FAQ accordion state
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Close popup modal on Escape key press & prevent body scroll
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && activeJobDetail) {
        setActiveJobDetail(null);
      }
    };

    if (activeJobDetail) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeJobDetail]);

  // Filtered jobs
  const filteredJobs = useMemo(() => {
    return JOBS_DATA.filter((job) => {
      const matchCategory = selectedCategory === 'all' || job.category === selectedCategory;
      const matchSearch =
        searchKeyword.trim() === '' ||
        job.title.toLowerCase().includes(searchKeyword.toLowerCase()) ||
        job.department.toLowerCase().includes(searchKeyword.toLowerCase()) ||
        job.shortLocation.toLowerCase().includes(searchKeyword.toLowerCase()) ||
        job.salary.toLowerCase().includes(searchKeyword.toLowerCase());
      return matchCategory && matchSearch;
    });
  }, [selectedCategory, searchKeyword]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!candidatePhone.trim() || !candidateName.trim()) return;
    setSubmitted(true);
  };

  const handleApplyClick = (job: JobPosition) => {
    setCandidatePosition(job.title);
    if (activeJobDetail) {
      setActiveJobDetail(null);
    }
    const formElement = document.getElementById('recruitment-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCopyJobLink = (job: JobPosition) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    }
  };

  const scrollToPositions = () => {
    const element = document.getElementById('open-positions');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToForm = () => {
    const element = document.getElementById('recruitment-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const faqs = [
    {
      q: 'Sinh viên mới ra trường hoặc chưa có kinh nghiệm có thể ứng tuyển không?',
      a: 'Hoàn toàn có thể! Uni Creation luôn chào đón các bạn trẻ năng động, nhiệt huyết và có đam mê học hỏi. Tại các vị trí như Kinh doanh (Sales Executive) hay Chăm sóc khách hàng (CSKH), chúng tôi có chương trình đào tạo 1-1 toàn diện từ A-Z.'
    },
    {
      q: 'Quy trình tuyển dụng và phỏng vấn tại Uni Creation gồm mấy vòng?',
      a: 'Quy trình tuyển dụng tinh gọn và nhanh chóng gồm 2 vòng: Vòng 1 sàng lọc CV (phản hồi trong 24-48h) và Vòng 2 phỏng vấn trực tiếp hoặc online cùng Trưởng bộ phận. Ứng viên nhận được kết quả và Offer chỉ trong vòng 3 ngày làm việc sau phỏng vấn.'
    },
    {
      q: 'Công ty có chính sách làm việc Hybrid hoặc từ xa không?',
      a: 'Đối với khối Kỹ thuật (Frontend, Fullstack Developer) và Thiết kế UI/UX, sau thời gian thử việc đạt kết quả tốt, công ty hỗ trợ chính sách làm việc Hybrid linh hoạt (kết hợp làm tại văn phòng và làm từ xa).'
    },
    {
      q: 'Thời gian thử việc là bao lâu và chế độ đãi ngộ ra sao?',
      a: 'Thời gian thử việc tiêu chuẩn là 2 tháng. Mức lương thử việc nhận từ 85% - 100% lương chính thức kèm đầy đủ các khoản thưởng doanh số/dự án. Kết thúc thử việc, công ty ký hợp đồng chính thức và đóng BHXH theo luật định.'
    }
  ];

  return (
    <div className="w-full flex flex-col">
      {/* SECTION 1: HERO HEADER FULL-SECTION BANNER */}
      <section className="w-full bg-gradient-to-br from-slate-950 via-[#0a2325] to-[#041a1b] text-white py-16 sm:py-20 lg:py-24 border-b border-teal-900/40 relative overflow-hidden">
        {/* Subtle Decorative Glows */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0baba0]/15 rounded-full blur-3xl pointer-events-none -mr-28 -mt-28"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#91c544]/10 rounded-full blur-3xl pointer-events-none"></div>
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px)`,
            backgroundSize: '24px 24px'
          }}
        ></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center">
          {/* Centered Hero Heading & Action Section */}
          <div className="max-w-4xl mx-auto text-center space-y-6 flex flex-col items-center">
            {/* Breadcrumb & Tag Badge */}
            <div className="flex flex-wrap items-center justify-center gap-2">
              <span className="text-xs text-slate-400 font-medium">Trang Chủ / Tuyển Dụng</span>
              <span className="text-slate-600">•</span>
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-semibold text-[#91c544]">
                <Sparkles className="w-3.5 h-3.5 text-[#0baba0]" />
                <span>Uni Creation Careers 2026</span>
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-white max-w-3xl mx-auto">
              Xây Dựng Sự Nghiệp & Bứt Phá Thu Nhập Cùng Uni Creation
            </h1>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
              Gia nhập môi trường công nghệ số năng động với hơn 100+ nhân sự tài năng, lộ trình thăng tiến rõ ràng, chế độ đãi ngộ cạnh tranh cùng cơ hội tham gia các dự án website và phần mềm chuyển đổi số hàng đầu.
            </p>

            {/* Quick Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <button
                onClick={scrollToPositions}
                className="px-6 py-3 btn-brand-gradient text-white text-xs sm:text-sm font-bold rounded-xl shadow-lg hover:shadow-xl transition-all cursor-pointer flex items-center gap-2"
              >
                <Briefcase className="w-4 h-4" />
                <span>Khám Phá Vị Trí Đang Mở ({JOBS_DATA.length})</span>
              </button>
              <button
                onClick={scrollToForm}
                className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white border border-white/20 text-xs sm:text-sm font-bold rounded-xl transition-all cursor-pointer flex items-center gap-2"
              >
                <Send className="w-4 h-4 text-[#91c544]" />
                <span>Nộp Hồ Sơ Trực Tuyến</span>
              </button>
            </div>
          </div>

          {/* Quick Metrics Counter Grid - Expanded Wide Layout to prevent text breaking into single lines */}
          <div className="w-full max-w-5xl lg:max-w-6xl mx-auto pt-10 mt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-3.5 sm:gap-5">
            <div className="bg-white/5 hover:bg-white/10 transition-colors backdrop-blur-xs rounded-2xl p-4 sm:p-5 border border-white/10 text-center flex flex-col items-center justify-center shadow-xs">
              <div className="text-xl sm:text-2xl lg:text-3xl font-black text-[#0baba0]">4 Văn Phòng</div>
              <div className="text-xs sm:text-[13px] text-slate-300 mt-1 font-medium whitespace-nowrap">Hà Nội • TP.HCM • Đà Nẵng</div>
            </div>
            <div className="bg-white/5 hover:bg-white/10 transition-colors backdrop-blur-xs rounded-2xl p-4 sm:p-5 border border-white/10 text-center flex flex-col items-center justify-center shadow-xs">
              <div className="text-xl sm:text-2xl lg:text-3xl font-black text-[#91c544]">100+ Nhân Sự</div>
              <div className="text-xs sm:text-[13px] text-slate-300 mt-1 font-medium whitespace-nowrap">Đội ngũ trẻ trung, sáng tạo</div>
            </div>
            <div className="bg-white/5 hover:bg-white/10 transition-colors backdrop-blur-xs rounded-2xl p-4 sm:p-5 border border-white/10 text-center flex flex-col items-center justify-center shadow-xs">
              <div className="text-xl sm:text-2xl lg:text-3xl font-black text-amber-400">2 Lần/Năm</div>
              <div className="text-xs sm:text-[13px] text-slate-300 mt-1 font-medium whitespace-nowrap">Xét tăng lương & thăng tiến</div>
            </div>
            <div className="bg-white/5 hover:bg-white/10 transition-colors backdrop-blur-xs rounded-2xl p-4 sm:p-5 border border-white/10 text-center flex flex-col items-center justify-center shadow-xs">
              <div className="text-xl sm:text-2xl lg:text-3xl font-black text-emerald-400">100% Đào Tạo</div>
              <div className="text-xs sm:text-[13px] text-slate-300 mt-1 font-medium whitespace-nowrap">Mentor 1-1 chuyên sâu</div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: CULTURE & EMPLOYEE BENEFITS (FULL-WIDTH SECTION) */}
      <section className="w-full bg-slate-50/90 border-b border-slate-200/80 py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#088c83] bg-teal-50 px-3 py-1 rounded-full border border-teal-200/60 inline-block">
              Văn Hóa & Phúc Lợi Toàn Diện
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Vì Sao Bạn Nên Gia Nhập Uni Creation?
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm">
              Chúng tôi xây dựng môi trường làm việc lấy con người làm trọng tâm, nơi mọi nỗ lực đều được ghi nhận và tưởng thưởng xứng đáng.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <div className="p-6 bg-white rounded-3xl border border-slate-200/90 hover:border-[#0baba0] shadow-xs hover:shadow-md transition-all space-y-3 group">
              <div className="w-12 h-12 rounded-2xl bg-teal-50 text-[#088c83] border border-teal-200/60 flex items-center justify-center font-bold group-hover:scale-105 transition-transform">
                <TrendingUp className="w-6 h-6 text-[#0baba0]" />
              </div>
              <h3 className="font-bold text-base text-slate-900">Thu Nhập & Thưởng Đột Phá</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Lương cứng cạnh tranh, hoa hồng % lũy tiến, thưởng hiệu quả dự án hàng tháng và thưởng kết quả kinh doanh cuối năm (lương tháng 13, 14).
              </p>
            </div>

            <div className="p-6 bg-white rounded-3xl border border-slate-200/90 hover:border-[#0baba0] shadow-xs hover:shadow-md transition-all space-y-3 group">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 border border-emerald-200/60 flex items-center justify-center font-bold group-hover:scale-105 transition-transform">
                <GraduationCap className="w-6 h-6 text-[#91c544]" />
              </div>
              <h3 className="font-bold text-base text-slate-900">Đào Tạo & Mentor 1-1</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Kèm cặp trực tiếp bởi Tech Lead và Senior Manager, lộ trình phát triển nghề nghiệp rõ ràng, tài trợ 100% học phí thi các chứng chỉ chuyên ngành.
              </p>
            </div>

            <div className="p-6 bg-white rounded-3xl border border-slate-200/90 hover:border-[#0baba0] shadow-xs hover:shadow-md transition-all space-y-3 group">
              <div className="w-12 h-12 rounded-2xl bg-cyan-50 text-cyan-700 border border-cyan-200/60 flex items-center justify-center font-bold group-hover:scale-105 transition-transform">
                <Laptop className="w-6 h-6 text-cyan-600" />
              </div>
              <h3 className="font-bold text-base text-slate-900">Trang Thiết Bị Hiện Đại</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Văn phòng sáng tạo, máy tính cấu hình cao, màn hình đôi sắc nét, chế độ làm việc Hybrid linh hoạt, trà bánh và cafe miễn phí mỗi ngày.
              </p>
            </div>

            <div className="p-6 bg-white rounded-3xl border border-slate-200/90 hover:border-[#0baba0] shadow-xs hover:shadow-md transition-all space-y-3 group">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-700 border border-amber-200/60 flex items-center justify-center font-bold group-hover:scale-105 transition-transform">
                <HeartHandshake className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="font-bold text-base text-slate-900">Môi Trường Gắn Kết & Trẻ Trung</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Độ tuổi trung bình 24 - 30 tuổi, văn hóa tôn trọng ý kiến cá nhân, du lịch nghỉ dưỡng 1-2 lần/năm, tiệc sinh nhật tháng và teambuilding thường xuyên.
              </p>
            </div>

            <div className="p-6 bg-white rounded-3xl border border-slate-200/90 hover:border-[#0baba0] shadow-xs hover:shadow-md transition-all space-y-3 group">
              <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-700 border border-purple-200/60 flex items-center justify-center font-bold group-hover:scale-105 transition-transform">
                <Award className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-bold text-base text-slate-900">Xét Tăng Lương Định Kỳ</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Đánh giá KPI và xét tăng lương 2 lần/năm (tháng 6 và tháng 12). Cơ hội thăng tiến lên Trưởng nhóm (Leader) chỉ sau 6 tháng nếu đạt thành tích nổi bật.
              </p>
            </div>

            <div className="p-6 bg-white rounded-3xl border border-slate-200/90 hover:border-[#0baba0] shadow-xs hover:shadow-md transition-all space-y-3 group">
              <div className="w-12 h-12 rounded-2xl bg-rose-50 text-rose-700 border border-rose-200/60 flex items-center justify-center font-bold group-hover:scale-105 transition-transform">
                <ShieldCheck className="w-6 h-6 text-rose-600" />
              </div>
              <h3 className="font-bold text-base text-slate-900">Bảo Hiểm & Sức Khỏe Toàn Diện</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Đóng BHXH, BHYT, BHTN đầy đủ theo quy định ngay sau thời gian thử việc. Khám sức khỏe định kỳ hàng năm tại bệnh viện quốc tế.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: OPEN POSITIONS (FULL-WIDTH SECTION WITH CONCISE CARDS) */}
      <section id="open-positions" className="w-full bg-white py-14 sm:py-20 border-b border-slate-200/80 scroll-mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {/* Header & Controls Bar */}
          <div className="bg-slate-50/80 rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-2xs space-y-5">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 text-[#088c83] text-xs font-bold mb-1.5 border border-teal-200/60">
                  <Briefcase className="w-3.5 h-3.5 text-[#91c544]" />
                  <span>Đang Tuyển {filteredJobs.length} Vị Trí</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  Cơ Hội Nghề Nghiệp Tại Uni Creation
                </h2>
                <p className="text-slate-500 text-xs sm:text-sm mt-0.5">
                  Bấm vào nút <strong>Xem Chi Tiết</strong> để xem mô tả công việc, hoặc bấm <strong>Ứng Tuyển</strong> để nộp hồ sơ nhanh.
                </p>
              </div>

              {/* Search Input */}
              <div className="relative w-full md:w-80">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchKeyword}
                  onChange={(e) => setSearchKeyword(e.target.value)}
                  placeholder="Tìm vị trí, kỹ năng, địa điểm..."
                  className="w-full pl-9 pr-8 py-2.5 bg-white border border-slate-200/90 rounded-xl text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#0baba0] focus:ring-1 focus:ring-[#0baba0] transition-all shadow-2xs"
                />
                {searchKeyword && (
                  <button
                    onClick={() => setSearchKeyword('')}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>

            {/* Department Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs scrollbar-thin">
              <span className="text-slate-400 text-xs font-medium flex items-center gap-1 shrink-0 pl-1">
                <Filter className="w-3.5 h-3.5" /> Bộ phận:
              </span>
              {[
                { id: 'all', label: 'Tất Cả' },
                { id: 'sales', label: 'Kinh Doanh / Sales' },
                { id: 'dev', label: 'Lập Trình Web' },
                { id: 'design', label: 'Thiết Kế UI/UX' },
                { id: 'content', label: 'SEO & Content' },
                { id: 'cskh', label: 'Chăm Sóc Khách Hàng' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setSelectedCategory(tab.id)}
                  className={`px-3.5 py-1.5 rounded-xl font-semibold whitespace-nowrap transition-all cursor-pointer ${
                    selectedCategory === tab.id
                      ? 'bg-[#0baba0] text-white shadow-xs'
                      : 'bg-white text-slate-600 border border-slate-200/80 hover:bg-slate-100 hover:text-slate-900'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Job Cards Grid */}
          {filteredJobs.length === 0 ? (
            <div className="bg-slate-50/60 rounded-3xl p-12 text-center border border-slate-200 space-y-3">
              <Briefcase className="w-12 h-12 text-slate-300 mx-auto" />
              <h3 className="font-bold text-slate-800 text-base">Không tìm thấy vị trí tuyển dụng phù hợp</h3>
              <p className="text-xs text-slate-500 max-w-md mx-auto">
                Không có vị trí nào khớp với từ khóa "{searchKeyword}". Vui lòng thử tìm với từ khóa khác hoặc chọn xem "Tất Cả".
              </p>
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSearchKeyword('');
                }}
                className="px-4 py-2 bg-white border border-slate-200 text-slate-700 text-xs font-bold rounded-xl hover:bg-slate-100 transition-all cursor-pointer"
              >
                Xem tất cả vị trí
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredJobs.map((job) => (
                <div
                  key={job.id}
                  className="group bg-white rounded-3xl p-6 border border-slate-200 hover:border-[#0baba0] shadow-xs hover:shadow-lg transition-all flex flex-col justify-between relative overflow-hidden"
                >
                  {/* Accent Top Border Indicator */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0baba0] to-[#91c544] opacity-0 group-hover:opacity-100 transition-opacity"></div>

                  <div className="space-y-3.5">
                    {/* Badges Row: Department, Tags, Salary */}
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex flex-wrap items-center gap-1.5">
                        <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 text-[11px] font-semibold border border-slate-200/70">
                          {job.department}
                        </span>
                        {job.isUrgent && (
                          <span className="px-2 py-0.5 rounded-full bg-rose-50 text-rose-600 text-[10px] font-bold border border-rose-200/60 flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse"></span>
                            Tuyển gấp
                          </span>
                        )}
                        {job.isHot && (
                          <span className="px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 text-[10px] font-bold border border-amber-200/60">
                            Hot
                          </span>
                        )}
                      </div>

                      {/* Salary Highlight Badge */}
                      <span className="px-3 py-1 bg-emerald-50 text-[#088c83] font-extrabold text-xs rounded-xl border border-emerald-200/70 shrink-0 shadow-2xs">
                        {job.salary}
                      </span>
                    </div>

                    {/* Job Title */}
                    <div>
                      <h3
                        onClick={() => setActiveJobDetail(job)}
                        className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-[#0baba0] transition-colors cursor-pointer leading-snug"
                      >
                        {job.title}
                      </h3>
                    </div>

                    {/* Concise Key Parameters (Location, Exp, Deadline) */}
                    <div className="grid grid-cols-3 gap-2 py-2 px-3 bg-slate-50/80 rounded-xl border border-slate-100 text-[11px] text-slate-600">
                      <div className="flex items-center gap-1.5 truncate">
                        <MapPin className="w-3.5 h-3.5 text-[#0baba0] shrink-0" />
                        <span className="truncate" title={job.location}>{job.shortLocation}</span>
                      </div>
                      <div className="flex items-center gap-1.5 truncate">
                        <Clock className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                        <span className="truncate">{job.experience}</span>
                      </div>
                      <div className="flex items-center gap-1.5 truncate">
                        <Calendar className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                        <span className="truncate">Hạn: {job.deadline}</span>
                      </div>
                    </div>

                    {/* Short Summary (Concise information) */}
                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                      {job.shortSummary}
                    </p>
                  </div>

                  {/* Actions: "Xem Chi Tiết" & "Ứng Tuyển" */}
                  <div className="pt-4 mt-3 border-t border-slate-100 flex items-center gap-2.5">
                    <button
                      onClick={() => setActiveJobDetail(job)}
                      className="flex-1 py-2.5 px-3 bg-slate-100 hover:bg-[#0baba0]/10 hover:text-[#088c83] text-slate-700 text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer border border-slate-200/70 hover:border-[#0baba0]/30"
                    >
                      <span>Xem Chi Tiết</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#0baba0]" />
                    </button>

                    <button
                      onClick={() => handleApplyClick(job)}
                      className="py-2.5 px-5 btn-brand-gradient text-white text-xs font-bold rounded-xl transition-all shadow-xs hover:shadow-md cursor-pointer shrink-0"
                    >
                      Ứng Tuyển
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* SECTION 4: RECRUITMENT APPLICATION FORM (2-COLUMN FULL-WIDTH SECTION: IMAGE ONE SIDE, FORM ONE SIDE) */}
      <section id="recruitment-form" className="w-full bg-gradient-to-b from-[#f8fafc] via-[#f1f5f9] to-[#e6ecf2]/50 py-16 sm:py-24 border-b border-slate-200/80 scroll-mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
            {/* SIDE 1: LEFT COLUMN - IMAGE & HR INFO (5 COLS) */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
              {/* Photo Card with Overlay */}
              <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-200 group">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
                  alt="Uni Creation Team Workspace"
                  className="w-full h-64 sm:h-72 lg:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/40 to-transparent"></div>
                
                {/* Floating Badge on Image */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-slate-900 text-xs font-bold shadow-md flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    Đang Nhận Hồ Sơ Mọi Vị Trí
                  </span>
                </div>

                {/* Caption on Image Bottom */}
                <div className="absolute bottom-5 left-5 right-5 text-white space-y-1">
                  <h4 className="font-black text-lg text-white">Đồng Đội Uni Creation Chờ Đón Bạn</h4>
                  <p className="text-xs text-slate-300">
                    Môi trường làm việc mở, tôn trọng cá tính riêng và hỗ trợ nhau cùng phát triển.
                  </p>
                </div>
              </div>

              {/* Recruitment Highlights & Direct Contact Card */}
              <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-sm space-y-5 flex-1 flex flex-col justify-between">
                <div className="space-y-3.5">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold border border-emerald-200/60">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#91c544]" />
                    <span>Cam Kết Của Bộ Phận Nhân Sự</span>
                  </div>
                  
                  <h3 className="font-extrabold text-base sm:text-lg text-slate-900 leading-snug">
                    Phản Hồi Nhanh Trong 24 - 48 Giờ
                  </h3>
                  
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Sau khi tiếp nhận hồ sơ, phòng Nhân Sự Uni Creation sẽ liên hệ xác nhận và xếp lịch phỏng vấn sớm nhất cho các hồ sơ đạt yêu cầu.
                  </p>

                  <ul className="space-y-2 text-xs text-slate-700 pt-1">
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#0baba0] shrink-0" />
                      <span>Quy trình phỏng vấn văn minh, bình đẳng và tôn trọng ứng viên</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#0baba0] shrink-0" />
                      <span>Đãi ngộ tương xứng với năng lực, không gò bó trần thu nhập</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#0baba0] shrink-0" />
                      <span>Hỗ trợ thiết bị máy tính cấu hình cao và trang thiết bị hiện đại</span>
                    </li>
                  </ul>
                </div>

                {/* Direct HR Contacts */}
                <div className="pt-4 border-t border-slate-100 space-y-2.5 text-xs text-slate-600">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-teal-50 text-[#088c83] flex items-center justify-center shrink-0">
                      <Mail className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[11px]">Email Tiếp Nhận CV:</span>
                      <strong className="text-slate-900 font-bold">{COMPANY_INFO.email}</strong>
                    </div>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
                      <Phone className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[11px]">Hotline Tuyển Dụng Trực Tiếp:</span>
                      <strong className="text-[#088c83] font-bold">{COMPANY_INFO.hotline}</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* SIDE 2: RIGHT COLUMN - APPLICATION FORM (7 COLS) */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <div className="bg-white rounded-3xl p-6 sm:p-9 md:p-10 border border-slate-200/90 shadow-md space-y-6">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 text-[#088c83] text-xs font-bold mb-2 border border-teal-200/60">
                    <Send className="w-3.5 h-3.5 text-[#0baba0]" />
                    <span>Nộp Hồ Sơ Nhanh Chóng</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                    Gửi Hồ Sơ Ứng Tuyển Trực Tuyến
                  </h2>
                  <p className="text-slate-500 text-xs sm:text-sm mt-1">
                    Vui lòng điền thông tin và đính kèm đường link CV của bạn. Chúng tôi sẽ bảo mật tuyệt đối thông tin ứng viên.
                  </p>
                </div>

                {submitted ? (
                  <div className="p-8 bg-emerald-50 border border-emerald-200 rounded-3xl text-center space-y-4 animate-in zoom-in-95 duration-200">
                    <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto text-[#088c83]">
                      <CheckCircle2 className="w-10 h-10 text-[#91c544]" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-extrabold text-xl text-emerald-900">Gửi Hồ Sơ Thành Công!</h3>
                      <p className="text-xs sm:text-sm text-emerald-800 leading-relaxed max-w-md mx-auto">
                        Cảm ơn bạn <strong>{candidateName}</strong> đã ứng tuyển vị trí <strong>{candidatePosition}</strong> tại Uni Creation. Bộ phận Nhân Sự sẽ liên hệ qua số điện thoại <strong>{candidatePhone}</strong> trong vòng 24 - 48h tới.
                      </p>
                    </div>
                    <div className="pt-2">
                      <button
                        onClick={() => {
                          setSubmitted(false);
                          setCandidateName('');
                          setCandidatePhone('');
                          setCandidateEmail('');
                          setCandidateCvLink('');
                          setCandidateNote('');
                        }}
                        className="px-5 py-2.5 bg-white border border-emerald-300 text-emerald-800 text-xs font-bold rounded-xl hover:bg-emerald-100/60 transition-all cursor-pointer shadow-2xs"
                      >
                        Nộp thêm hồ sơ khác
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                          Họ và tên ứng viên <span className="text-rose-500">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={candidateName}
                          onChange={(e) => setCandidateName(e.target.value)}
                          placeholder="Ví dụ: Nguyễn Văn A"
                          className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#0baba0] focus:ring-1 focus:ring-[#0baba0] focus:bg-white transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                          Số điện thoại di động <span className="text-rose-500">*</span>
                        </label>
                        <input
                          type="tel"
                          required
                          value={candidatePhone}
                          onChange={(e) => setCandidatePhone(e.target.value)}
                          placeholder="Ví dụ: 0912 345 678"
                          className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#0baba0] focus:ring-1 focus:ring-[#0baba0] focus:bg-white transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                          Email liên hệ <span className="text-rose-500">*</span>
                        </label>
                        <input
                          type="email"
                          required
                          value={candidateEmail}
                          onChange={(e) => setCandidateEmail(e.target.value)}
                          placeholder="email@example.com"
                          className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#0baba0] focus:ring-1 focus:ring-[#0baba0] focus:bg-white transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                          Vị trí ứng tuyển <span className="text-rose-500">*</span>
                        </label>
                        <select
                          value={candidatePosition}
                          onChange={(e) => setCandidatePosition(e.target.value)}
                          className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#0baba0] focus:ring-1 focus:ring-[#0baba0] focus:bg-white transition-all cursor-pointer font-medium"
                        >
                          {JOBS_DATA.map((p) => (
                            <option key={p.id} value={p.title}>
                              {p.title}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1.5">Kinh nghiệm làm việc</label>
                        <select
                          value={candidateExperience}
                          onChange={(e) => setCandidateExperience(e.target.value)}
                          className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#0baba0] focus:ring-1 focus:ring-[#0baba0] focus:bg-white transition-all cursor-pointer"
                        >
                          <option value="Chưa có kinh nghiệm">Chưa có kinh nghiệm (Fresher)</option>
                          <option value="Dưới 1 năm">Dưới 1 năm kinh nghiệm</option>
                          <option value="1 - 2 năm">1 - 2 năm kinh nghiệm</option>
                          <option value="2 - 4 năm">2 - 4 năm kinh nghiệm</option>
                          <option value="Trên 4 năm">Trên 4 năm kinh nghiệm (Senior)</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                          Link CV / Portfolio (Google Drive, TopCV...) <span className="text-rose-500">*</span>
                        </label>
                        <input
                          type="url"
                          required
                          value={candidateCvLink}
                          onChange={(e) => setCandidateCvLink(e.target.value)}
                          placeholder="https://drive.google.com/... (để quyền xem)"
                          className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#0baba0] focus:ring-1 focus:ring-[#0baba0] focus:bg-white transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Giới thiệu ngắn & Điểm mạnh nổi bật của bạn
                      </label>
                      <textarea
                        rows={3}
                        value={candidateNote}
                        onChange={(e) => setCandidateNote(e.target.value)}
                        placeholder="Tóm tắt ngắn gọn các dự án đã thực hiện hoặc thế mạnh chuyên môn bạn tự tin nhất..."
                        className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#0baba0] focus:ring-1 focus:ring-[#0baba0] focus:bg-white transition-all"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 btn-brand-gradient text-white text-xs sm:text-sm font-bold rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer mt-3"
                    >
                      <Send className="w-4 h-4" />
                      <span>Gửi Hồ Sơ Ứng Tuyển Ngay</span>
                    </button>

                    <p className="text-[11px] text-slate-400 text-center pt-1">
                      Uni Creation cam kết bảo mật 100% hồ sơ và thông tin cá nhân của bạn.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: RECRUITMENT WORKFLOW PROCESS (FULL-WIDTH DARK SECTION) */}
      <section className="w-full bg-[#0a192f] text-white py-16 sm:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#91c544]">
              Quy Trình Gia Nhập
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              4 Bước Gia Nhập Đội Ngũ Uni Creation
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm">
              Quy trình tuyển dụng tinh gọn, minh bạch, phản hồi nhanh chóng và chuyên nghiệp.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="bg-white/5 backdrop-blur-xs p-6 rounded-3xl border border-white/10 space-y-3 relative hover:border-[#0baba0]/50 transition-all">
              <div className="w-10 h-10 rounded-xl bg-teal-500/20 text-[#0baba0] border border-teal-500/30 font-black text-sm flex items-center justify-center">
                01
              </div>
              <h4 className="font-bold text-sm text-white">Nộp Hồ Sơ Online</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Ứng viên gửi CV qua biểu mẫu trực tuyến hoặc email tuyển dụng. HR sàng lọc và phản hồi trong 24-48 giờ.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-xs p-6 rounded-3xl border border-white/10 space-y-3 relative hover:border-[#91c544]/50 transition-all">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-[#91c544] border border-emerald-500/30 font-black text-sm flex items-center justify-center">
                02
              </div>
              <h4 className="font-bold text-sm text-white">Phỏng Vấn Trực Tiếp</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Trao đổi cởi mở cùng Trưởng bộ phận về chuyên môn, sản phẩm thực tế và mục tiêu phát triển của bạn.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-xs p-6 rounded-3xl border border-white/10 space-y-3 relative hover:border-cyan-400/50 transition-all">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 font-black text-sm flex items-center justify-center">
                03
              </div>
              <h4 className="font-bold text-sm text-white">Nhận Thư Mời (Offer)</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Thỏa thuận mức đãi ngộ, chế độ thưởng và thống nhất ngày bắt đầu công việc sau khi hoàn tất phỏng vấn.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-xs p-6 rounded-3xl border border-white/10 space-y-3 relative hover:border-amber-400/50 transition-all">
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/30 font-black text-sm flex items-center justify-center">
                04
              </div>
              <h4 className="font-bold text-sm text-white">Onboarding & Mentor 1-1</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Tham gia văn hóa công ty, được kèm cặp 1-1 bài bản để hòa nhập và phát huy tối đa năng lực làm việc.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: FAQ TUYỂN DỤNG & GIẢI ĐÁP (FULL-WIDTH SECTION) */}
      <section className="w-full bg-white py-14 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#088c83] bg-teal-50 px-3 py-1 rounded-full border border-teal-200/60 inline-block">
              Giải Đáp Thắc Mắc
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Câu Hỏi Thường Gặp Của Ứng Viên
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm">
              Một số thông tin hữu ích giúp bạn hiểu rõ hơn về chính sách và môi trường làm việc tại Uni Creation.
            </p>
          </div>

          <div className="space-y-3.5">
            {faqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className="bg-slate-50/70 border border-slate-200/90 rounded-2xl overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-bold text-xs sm:text-sm text-slate-800 hover:text-[#0baba0] cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-[#0baba0]' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-4 sm:px-5 pb-5 text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-3 animate-in fade-in duration-200">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Bottom Help Banner */}
          <div className="p-5 bg-teal-50/60 rounded-2xl border border-teal-200/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-teal-100 text-[#088c83] flex items-center justify-center shrink-0">
                <HelpCircle className="w-5 h-5" />
              </div>
              <div>
                <strong className="text-slate-900 block font-bold">Bạn còn thắc mắc khác về công việc?</strong>
                <span className="text-slate-600">Liên hệ trực tiếp bộ phận tuyển dụng qua Hotline hoặc Zalo.</span>
              </div>
            </div>
            <a
              href={`tel:${COMPANY_INFO.hotline.replace(/\s/g, '')}`}
              className="px-4 py-2 btn-brand-gradient text-white font-bold rounded-xl shrink-0 cursor-pointer shadow-xs hover:shadow-md transition-all text-xs"
            >
              Gọi {COMPANY_INFO.hotline}
            </a>
          </div>
        </div>
      </section>

      {/* 4. MODAL CHI TIẾT BÀI TUYỂN DỤNG (BẤM RA NGOÀI ĐỂ TẮT HOẶC BẤM NÚT ĐÓNG / ESC) */}
      {activeJobDetail && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-200 cursor-pointer"
          onClick={() => setActiveJobDetail(null)}
          role="dialog"
          aria-modal="true"
        >
          {/* Modal Container: stopPropagation prevents click from closing when clicked inside */}
          <div
            className="bg-white w-full max-w-3xl max-h-[90vh] rounded-3xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden relative cursor-default animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-6 sm:p-8 bg-gradient-to-r from-slate-900 via-[#0d2a2c] to-[#041d1e] text-white relative">
              <button
                onClick={() => setActiveJobDetail(null)}
                className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all cursor-pointer"
                aria-label="Đóng popup"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="space-y-2.5 pr-8">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-white/10 text-emerald-300 text-[11px] font-semibold">
                    {activeJobDetail.department}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-[#0baba0]/20 text-[#91c544] text-[11px] font-bold">
                    {activeJobDetail.type}
                  </span>
                  {activeJobDetail.isUrgent && (
                    <span className="px-2.5 py-0.5 rounded-full bg-rose-500/30 text-rose-300 text-[10px] font-bold">
                      Tuyển gấp ({activeJobDetail.vacancies} chỉ tiêu)
                    </span>
                  )}
                </div>

                <h2 className="text-xl sm:text-2xl font-black text-white leading-snug">
                  {activeJobDetail.title}
                </h2>

                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-slate-300 pt-1">
                  <div className="flex items-center gap-1.5 text-emerald-300 font-bold">
                    <DollarSign className="w-4 h-4 text-[#91c544]" />
                    <span>Lương: {activeJobDetail.salary}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#0baba0]" />
                    <span>{activeJobDetail.location}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-amber-400" />
                    <span>Hạn nộp: {activeJobDetail.deadline}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Body - Scrollable Details */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-slate-700 text-xs sm:text-sm">
              {/* Short Summary Box */}
              <div className="p-4 bg-teal-50/60 rounded-2xl border border-[#0baba0]/20 text-slate-700 text-xs leading-relaxed">
                <strong className="text-[#088c83] block mb-1 font-bold">Tóm tắt vị trí:</strong>
                {activeJobDetail.shortSummary}
              </div>

              {/* 1. Mô tả công việc */}
              <div className="space-y-2.5">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-lg bg-teal-100 text-[#088c83] flex items-center justify-center font-bold text-xs">
                    1
                  </div>
                  <h3 className="font-extrabold text-sm sm:text-base text-slate-900">Mô Tả Công Việc Chi Tiết</h3>
                </div>
                <ul className="space-y-2 pl-2">
                  {activeJobDetail.description.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-600">
                      <CheckCircle2 className="w-4 h-4 text-[#0baba0] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 2. Yêu cầu ứng viên */}
              <div className="space-y-2.5">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-xs">
                    2
                  </div>
                  <h3 className="font-extrabold text-sm sm:text-base text-slate-900">Yêu Cầu Ứng Viên</h3>
                </div>
                <ul className="space-y-2 pl-2">
                  {activeJobDetail.requirements.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#91c544] shrink-0 mt-2"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 3. Quyền lợi & Phúc lợi */}
              <div className="space-y-2.5">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center font-bold text-xs">
                    3
                  </div>
                  <h3 className="font-extrabold text-sm sm:text-base text-slate-900">Quyền Lợi & Chế Độ Đãi Ngộ</h3>
                </div>
                <ul className="space-y-2 pl-2">
                  {activeJobDetail.benefits.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-600">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 4. Địa điểm & Thời gian làm việc */}
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/90 space-y-2 text-xs">
                <div className="flex items-start gap-2">
                  <Clock className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                  <div>
                    <strong>Thời gian làm việc:</strong> {activeJobDetail.workHours}
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                  <div>
                    <strong>Địa điểm làm việc:</strong> {activeJobDetail.workAddress}
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Footer Bar */}
            <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
              <button
                onClick={() => handleCopyJobLink(activeJobDetail)}
                className="py-2 px-3 text-xs text-slate-600 hover:text-slate-900 flex items-center gap-1.5 cursor-pointer rounded-lg hover:bg-slate-200/60 transition-all"
              >
                <Share2 className="w-3.5 h-3.5 text-slate-500" />
                <span>{copySuccess ? 'Đã sao chép liên kết!' : 'Chia sẻ bài viết'}</span>
              </button>

              <div className="flex items-center gap-2.5">
                <button
                  onClick={() => setActiveJobDetail(null)}
                  className="py-2.5 px-4 bg-white text-slate-700 text-xs font-bold rounded-xl border border-slate-300 hover:bg-slate-100 transition-all cursor-pointer"
                >
                  Đóng
                </button>
                <button
                  onClick={() => handleApplyClick(activeJobDetail)}
                  className="py-2.5 px-6 btn-brand-gradient text-white text-xs font-bold rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer flex items-center gap-1.5"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Ứng Tuyển Vị Trí Này</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
