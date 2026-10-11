// Structured data faithfully reconstructed from univn.vn
export interface ThemeItem {
  id: number;
  slug: string;
  title: string;
  category: string;
  allCategories: string[];
  package: string;
  demoUrl: string;
  imageUrl: string;
  description: string;
  features: string[];
}

export interface PostItem {
  id: number;
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  imageUrl: string;
  category: string;
  author?: string;
  tags?: string[];
  content?: string;
  readingTime?: string;
}

export interface WebPackage {
  name: string;
  price: string;
  priceNum: number;
  badge?: string;
  popular?: boolean;
  timeDelivery: string;
  uiUx: string;
  domain: string;
  storage: string;
  bandwidth: string;
  ssl: string;
  seo: string;
  seoOnpage: string;
  responsive: string;
  banners: string;
  language: string;
  contentArticles: string;
  customization: string;
  emailDiscount: string;
  brandingDiscount: string;
  voucherAds: string;
  giftVoucher: string;
  warranty: string;
  bctSupport: string;
  codeHandover: boolean;
  features: string[];
}

export interface HostingPackage {
  name: string;
  tier: 'Cá nhân' | 'Doanh nghiệp' | 'Cao cấp';
  price: string;
  priceMonthly: number;
  disk: string;
  bandwidth: string;
  mysql: string;
  domains: string;
  subdomain: string;
  ssl: string;
  backup: string;
  highlight?: boolean;
}

export interface VpsPackage {
  name: string;
  code: string;
  price: string;
  priceMonthly: number;
  cpu: string;
  ram: string;
  disk: string;
  bandwidth: string;
  ip: string;
  highlight?: boolean;
}

export interface EmailPackage {
  name: string;
  price: string;
  priceMonthly: number;
  storage: string;
  accounts: string;
  dailyLimit: string;
  highlight?: boolean;
}

export const COMPANY_INFO = {
  name: "CÔNG TY CỔ PHẦN UNI CREATION VIỆT NAM",
  brandName: "Uni Creation / UNIVN",
  shortName: "Uni Creation",
  domain: "univn.vn",
  taxCode: "0109090636",
  slogan: "Khẳng Định Vị Thế Số – Bứt Phá Doanh Thu Cùng Giải Pháp Web & Hạ Tầng Chuẩn SEO",
  status: "Đối tác tiềm năng của Google tại thị trường Việt Nam (Google Partner)",
  milestones: [
    { year: "2015", title: "Khởi đầu đam mê", desc: "Khởi đầu từ nhóm lập trình viên trẻ đam mê công nghệ tại Hà Nội." },
    { year: "2017 – 2018", title: "Mở rộng năng lực", desc: "Mở rộng danh mục dự án, tích lũy công nghệ tối ưu web chuẩn SEO Google." },
    { year: "2019 – 2020", title: "Thành lập pháp nhân", desc: "Chính thức thành lập Công ty Cổ phần Uni Creation Việt Nam, mở rộng mạng lưới chi nhánh toàn quốc." }
  ],
  hotline: "0967.508.333",
  techHotline: "0373.085.333",
  techEmail: "kythuat@unicreation.vn",
  consultantHotline: "0373.165.333",
  cskhHotline: "0373.165.333",
  adsHotline: "0373.064.333 - 0373.087.333",
  email: "info@unicreation.vn",
  offices: [
    {
      city: "Hà Nội",
      role: "Trụ sở chính",
      address: "Tầng 6, Số 303 Vũ Tông Phan, Quận Thanh Xuân, TP. Hà Nội",
      phone: "0967.508.333",
      isHeadquarter: true
    },
    {
      city: "Đà Nẵng",
      role: "Chi nhánh miền Trung",
      address: "41 Khuê Mỹ Đông 14, Phường Khuê Mỹ, Quận Ngũ Hành Sơn, TP. Đà Nẵng",
      phone: "0373.165.333",
      isHeadquarter: false
    },
    {
      city: "TP. Hồ Chí Minh",
      role: "Chi nhánh miền Nam",
      address: "973/136 Nguyễn Ảnh Thủ, Phường Tân Chánh Hiệp, Quận 12, TP. Hồ Chí Minh",
      phone: "0967.508.333",
      isHeadquarter: false
    }
  ],
  bankAccounts: {
    company: {
      id: "company",
      type: "Tài khoản Công ty",
      bankName: "Ngân hàng TMCP Ngoại thương Việt Nam (Vietcombank)",
      shortName: "Vietcombank",
      code: "VCB",
      bin: "970436",
      branch: "Sở Giao dịch",
      accountNumber: "1012895425",
      accountHolder: "Công ty Cổ phần Uni Creation Việt Nam",
      vatNote: "Nếu khách hàng chuyển vào tài khoản công ty thì bắt buộc phải xuất hóa đơn VAT",
      qrUrl: "https://img.vietqr.io/image/970436-1012895425-compact.png"
    },
    personal: {
      id: "personal",
      type: "Tài khoản Cá nhân",
      bankName: "Ngân hàng TMCP Công Thương Việt Nam (Vietinbank)",
      shortName: "Vietinbank",
      code: "CTG",
      bin: "970415",
      branch: "Cầu Giấy",
      accountNumber: "103002451143",
      accountHolder: "Trần Thị Diện",
      vatNote: null,
      qrUrl: "https://img.vietqr.io/image/970415-103002451143-compact.png"
    }
  },
  bankAccount: {
    bankName: "Ngân hàng TMCP Ngoại thương Việt Nam (Vietcombank)",
    branch: "Sở Giao Dịch Hà Nội",
    accountNumber: "1012895425",
    accountHolder: "Công ty Cổ phần Uni Creation Việt Nam",
    syntaxNote: "[Mã Đơn Hàng] + [Số Điện Thoại]"
  }
};

export const COMPANY_COMMITMENTS = [
  {
    id: "source-code",
    title: "Bàn giao Full Source Code",
    desc: "Khách hàng sở hữu 100% toàn bộ mã nguồn và cơ sở dữ liệu sau khi hoàn tất dự án, không bị ràng buộc hệ thống độc quyền kín."
  },
  {
    id: "best-price",
    title: "Cam kết giá tốt nhất",
    desc: "Chi phí tối ưu so với thị trường cho các trang web doanh nghiệp và bán hàng trực tuyến chất lượng cao."
  },
  {
    id: "lifetime-warranty",
    title: "Bảo hành trọn đời 24/7",
    desc: "Hỗ trợ kỹ thuật 24/7 và bảo hành mã nguồn trong suốt vòng đời sử dụng (khi lưu trữ trên hệ sinh thái hạ tầng Univn)."
  },
  {
    id: "unlimited-upgrade",
    title: "Khả năng nâng cấp không giới hạn",
    desc: "Cấu trúc module linh hoạt, dễ dàng tích hợp và phát triển tính năng mới khi doanh nghiệp mở rộng quy mô."
  },
  {
    id: "money-back",
    title: "Chính sách hoàn tiền 100%",
    desc: "Cam kết bảo vệ quyền lợi khách hàng nếu sản phẩm không đáp ứng đúng yêu cầu hợp đồng đã ký kết."
  }
];

export const WEB_PACKAGES: WebPackage[] = [
  {
    name: "Gói Startup",
    price: "Từ 2.500.000 VNĐ",
    priceNum: 2500000,
    timeDelivery: "1 - 2 ngày",
    uiUx: "Chọn từ kho 1.000+ giao diện mẫu có sẵn",
    domain: "Tặng tên miền quốc tế (.com / .net) 1 năm",
    storage: "1.000 MB SSD Cloud tốc độ cao",
    bandwidth: "Không giới hạn",
    ssl: "Cung cấp miễn phí chứng chỉ SSL",
    seo: "Chuẩn SEO Google Onpage 100%",
    seoOnpage: "Chuẩn SEO Google cơ bản",
    responsive: "Tương thích 100% PC, Tablet & Mobile",
    banners: "Thiết kế 1 Banner phong cách riêng",
    language: "Tích hợp Google Dịch đa ngôn ngữ",
    contentArticles: "Hỗ trợ 10 bài viết demo chuẩn SEO",
    customization: "Tùy biến màu sắc, logo, thông tin doanh nghiệp",
    emailDiscount: "Ưu đãi giảm 5% gói email tên miền",
    brandingDiscount: "Giảm 5% khi làm kèm bộ nhận diện",
    voucherAds: "Tặng voucher 200.000 VNĐ chạy Ads",
    giftVoucher: "Tặng voucher Ads 200.000 VNĐ",
    warranty: "Bảo hành trọn đời (khi dùng hosting Uni)",
    bctSupport: "Hướng dẫn đăng ký Bộ Công Thương",
    codeHandover: true,
    features: [
      "Bàn giao 100% mã nguồn (Full Source Code)",
      "Chọn từ kho giao diện mẫu có sẵn tối ưu",
      "Miễn phí chứng chỉ bảo mật SSL trọn đời",
      "Chuẩn SEO Google, tốc độ tải nhanh",
      "Ưu đãi giảm 5% Email doanh nghiệp",
      "Giảm 5% làm kèm bộ nhận diện thương hiệu",
      "Tặng voucher chạy Ads 200.000 VNĐ",
      "Bảo hành kỹ thuật trọn đời trên Hosting Uni",
      "Hướng dẫn đăng ký Bộ Công Thương"
    ]
  },
  {
    name: "Gói Doanh nghiệp",
    price: "Từ 4.500.000 VNĐ",
    priceNum: 4500000,
    badge: "Phổ Biến Nhất",
    popular: true,
    timeDelivery: "3 - 5 ngày",
    uiUx: "Thiết kế tùy biến theo nhận diện thương hiệu",
    domain: "Tặng tên miền quốc tế (.com / .net) 1 năm",
    storage: "2.000 MB SSD NVMe siêu tốc",
    bandwidth: "Không giới hạn",
    ssl: "Cung cấp miễn phí chứng chỉ SSL cao cấp",
    seo: "Chuẩn SEO Google Onpage chuyên sâu",
    seoOnpage: "Chuẩn SEO Google Onpage chuyên sâu",
    responsive: "Tương thích hoàn hảo mọi màn hình (Responsive 100%)",
    banners: "Thiết kế 2-3 Banner phong cách chuyên nghiệp",
    language: "Đa ngôn ngữ chuyên biệt hoặc Google Dịch",
    contentArticles: "Hỗ trợ 15 bài viết chuẩn SEO viết sẵn",
    customization: "Tùy biến giao diện, bố cục theo nhận diện",
    emailDiscount: "Ưu đãi giảm 10% gói email tên miền",
    brandingDiscount: "Giảm 10% khi làm kèm bộ nhận diện",
    voucherAds: "Tặng voucher 350.000 VNĐ chạy Ads",
    giftVoucher: "Tặng voucher Ads 350.000 VNĐ",
    warranty: "Bảo hành trọn đời (khi dùng hosting Uni)",
    bctSupport: "Hướng dẫn đăng ký Bộ Công Thương",
    codeHandover: true,
    features: [
      "Bàn giao 100% mã nguồn (Full Source Code)",
      "Thiết kế tùy biến theo nhận diện thương hiệu",
      "Miễn phí chứng chỉ bảo mật SSL cao cấp",
      "Chuẩn SEO Google chuyên sâu, đo lường GA4",
      "Ưu đãi giảm 10% Email doanh nghiệp",
      "Giảm 10% khi làm kèm bộ nhận diện thương hiệu",
      "Tặng voucher chạy Ads 350.000 VNĐ",
      "Bảo hành kỹ thuật trọn đời trên Hosting Uni",
      "Hướng dẫn hoàn tất đăng ký Bộ Công Thương"
    ]
  },
  {
    name: "Gói Chuyên nghiệp / Custom",
    price: "Báo giá theo yêu cầu",
    priceNum: 8000000,
    badge: "Độc Quyền & May Đo",
    timeDelivery: "Từ 7 - 10 ngày",
    uiUx: "Thiết kế UI/UX độc quyền 100% may đo 1:1",
    domain: "Tặng tên miền (.com / .net / .info / .org)",
    storage: "5.000 MB - 10.000 MB SSD NVMe Enterprise",
    bandwidth: "Không giới hạn",
    ssl: "Cung cấp miễn phí chứng chỉ SSL Doanh nghiệp",
    seo: "Chuẩn SEO đa tầng & Schema Markup VIP",
    seoOnpage: "Chuẩn SEO đa tầng & Schema Markup VIP",
    responsive: "Tương thích hoàn hảo 100% đa nền tảng",
    banners: "Bộ 4-6 Banner nhận diện thương hiệu độc bản",
    language: "Tích hợp đa ngôn ngữ chuẩn bản địa (EN/VI/JP/KR)",
    contentArticles: "Hỗ trợ 25-30 bài viết chuẩn SEO chuyên sâu",
    customization: "Lập trình chức năng riêng biệt, may đo theo luồng",
    emailDiscount: "Tặng gói email tên miền doanh nghiệp",
    brandingDiscount: "Chiết khấu gói nhận diện cao cấp độc bản",
    voucherAds: "Tặng voucher 500.000 VNĐ chạy Ads",
    giftVoucher: "Tặng voucher Ads 500.000 VNĐ",
    warranty: "Bảo hành trọn đời (khi dùng hosting Uni)",
    bctSupport: "Hỗ trợ trực tiếp khai báo Bộ Công Thương",
    codeHandover: true,
    features: [
      "Bàn giao 100% mã nguồn độc quyền & tài liệu API",
      "Thiết kế UI/UX độc quyền 100% trên Figma trước khi code",
      "Cung cấp miễn phí chứng chỉ bảo mật SSL Doanh nghiệp",
      "Chuẩn SEO đa tầng & Schema Rich Snippets Google",
      "Tặng gói Email doanh nghiệp theo tên miền riêng",
      "Chiết khấu gói nhận diện thương hiệu cao cấp",
      "Tặng voucher chạy Ads 500.000 VNĐ",
      "Bảo hành trọn đời trên Hosting Uni, backup hàng ngày",
      "Hỗ trợ trực tiếp khai báo Bộ Công Thương hoàn chỉnh"
    ]
  }
];

export const HOSTING_PACKAGES: HostingPackage[] = [
  {
    name: "Startup 1",
    tier: "Cá nhân",
    price: "80.000 đ/tháng",
    priceMonthly: 80000,
    disk: "1.000 MB NVMe SSD",
    bandwidth: "Không giới hạn",
    mysql: "2 MySQL",
    domains: "2 Domain",
    subdomain: "Không giới hạn",
    ssl: "Miễn phí SSL",
    backup: "Hàng ngày JetBackup"
  },
  {
    name: "Startup 2",
    tier: "Cá nhân",
    price: "110.000 đ/tháng",
    priceMonthly: 110000,
    disk: "1.500 MB NVMe SSD",
    bandwidth: "Không giới hạn",
    mysql: "3 MySQL",
    domains: "3 Domain",
    subdomain: "Không giới hạn",
    ssl: "Miễn phí SSL",
    backup: "Hàng ngày JetBackup"
  },
  {
    name: "Startup 3",
    tier: "Cá nhân",
    price: "140.000 đ/tháng",
    priceMonthly: 140000,
    disk: "2.000 MB NVMe SSD",
    bandwidth: "Không giới hạn",
    mysql: "4 MySQL",
    domains: "4 Domain",
    subdomain: "Không giới hạn",
    ssl: "Miễn phí SSL",
    backup: "Hàng ngày JetBackup"
  },
  {
    name: "Enterprise 1",
    tier: "Doanh nghiệp",
    price: "160.000 đ/tháng",
    priceMonthly: 160000,
    disk: "3.000 MB NVMe SSD",
    bandwidth: "Không giới hạn",
    mysql: "5 MySQL",
    domains: "5 Domain",
    subdomain: "Không giới hạn",
    ssl: "Miễn phí SSL Doanh Nghiệp",
    backup: "Hàng ngày JetBackup"
  },
  {
    name: "Enterprise 2",
    tier: "Doanh nghiệp",
    price: "190.000 đ/tháng",
    priceMonthly: 190000,
    disk: "4.000 MB NVMe SSD",
    bandwidth: "Không giới hạn",
    mysql: "6 MySQL",
    domains: "6 Domain",
    subdomain: "Không giới hạn",
    ssl: "Miễn phí SSL Doanh Nghiệp",
    backup: "Hàng ngày JetBackup"
  },
  {
    name: "Enterprise 3",
    tier: "Doanh nghiệp",
    price: "230.000 đ/tháng",
    priceMonthly: 230000,
    disk: "5.000 MB NVMe SSD",
    bandwidth: "Không giới hạn",
    mysql: "8 MySQL",
    domains: "8 Domain",
    subdomain: "Không giới hạn",
    ssl: "Miễn phí SSL Doanh Nghiệp",
    backup: "Hàng ngày JetBackup",
    highlight: true
  },
  {
    name: "Enterprise 4",
    tier: "Doanh nghiệp",
    price: "380.000 đ/tháng",
    priceMonthly: 380000,
    disk: "10.000 MB NVMe SSD",
    bandwidth: "Không giới hạn",
    mysql: "10 MySQL",
    domains: "10 Domain",
    subdomain: "Không giới hạn",
    ssl: "Miễn phí SSL Doanh Nghiệp",
    backup: "Hàng ngày JetBackup"
  }
];

export const VPS_PACKAGES: VpsPackage[] = [
  {
    name: "SSD 1G",
    code: "PRO SSD1",
    price: "160.000 - 180.000 đ/tháng",
    priceMonthly: 170000,
    cpu: "1 vCPU",
    ram: "1.024 MB (1GB) RAM",
    disk: "20GB - 25GB SSD",
    bandwidth: "Không giới hạn",
    ip: "1 IPv4 Riêng"
  },
  {
    name: "SSD 2G",
    code: "PRO SSD2",
    price: "260.000 - 280.000 đ/tháng",
    priceMonthly: 270000,
    cpu: "1 - 2 vCPU",
    ram: "2.048 MB (2GB) RAM",
    disk: "30GB SSD",
    bandwidth: "Không giới hạn",
    ip: "1 IPv4 Riêng"
  },
  {
    name: "SSD 4G",
    code: "PRO SSD3/4",
    price: "480.000 - 560.000 đ/tháng",
    priceMonthly: 520000,
    cpu: "2 - 4 vCPU",
    ram: "4.096 MB (4GB) RAM",
    disk: "40GB SSD",
    bandwidth: "Không giới hạn",
    ip: "1 IPv4 Riêng",
    highlight: true
  },
  {
    name: "SSD 8G",
    code: "PRO SSD5/6",
    price: "680.000 - 880.000 đ/tháng",
    priceMonthly: 780000,
    cpu: "4 - 6 vCPU",
    ram: "8.192 MB (8GB) RAM",
    disk: "50GB - 60GB SSD",
    bandwidth: "Không giới hạn",
    ip: "1 IPv4 Riêng"
  },
  {
    name: "SSD 16G",
    code: "PRO SSD 16G",
    price: "1.280.000 đ/tháng",
    priceMonthly: 1280000,
    cpu: "8 vCPU",
    ram: "16.384 MB (16GB) RAM",
    disk: "100GB+ SSD",
    bandwidth: "Không giới hạn",
    ip: "1 IPv4 Riêng"
  },
  {
    name: "Gói V.I.P",
    code: "PRO VIP",
    price: "Báo giá theo quy mô",
    priceMonthly: 2000000,
    cpu: "Tùy chỉnh vCPU",
    ram: "Tùy chỉnh RAM",
    disk: "Tùy chỉnh SSD",
    bandwidth: "Không giới hạn",
    ip: "Đa IPv4 Riêng"
  }
];

export const VPS_ADDONS = [
  { item: "Thêm 01 vCPU", price: "200.000 - 300.000 đ/tháng" },
  { item: "Thêm 01 GB RAM", price: "150.000 đ/tháng" },
  { item: "Thêm 01 GB SSD", price: "15.000 đ/tháng" },
  { item: "Thêm 01 IPv4 riêng", price: "150.000 - 321.000 đ/tháng" }
];

export const EMAIL_PACKAGES: EmailPackage[] = [
  {
    name: "Email E5",
    price: "80.000 đ/tháng",
    priceMonthly: 80000,
    storage: "5 GB Dung lượng",
    accounts: "5 Tài khoản Email",
    dailyLimit: "200 email/ngày/tài khoản"
  },
  {
    name: "Email E10",
    price: "125.000 đ/tháng",
    priceMonthly: 125000,
    storage: "15 GB Dung lượng",
    accounts: "10 Tài khoản Email",
    dailyLimit: "200 email/ngày/tài khoản",
    highlight: true
  },
  {
    name: "Email E20",
    price: "250.000 đ/tháng",
    priceMonthly: 250000,
    storage: "30 GB Dung lượng",
    accounts: "20 Tài khoản Email",
    dailyLimit: "500 email/ngày/tài khoản"
  },
  {
    name: "Email E50",
    price: "375.000 đ/tháng",
    priceMonthly: 375000,
    storage: "80 GB Dung lượng",
    accounts: "50 Tài khoản Email",
    dailyLimit: "500 email/ngày/tài khoản"
  }
];

export const CONTENT_MARKETING_INFO = {
  pricePerArticle: "Từ 20.000 VNĐ / bài",
  bulkDiscount: "Giảm trực tiếp 30% khi đặt hàng từ 200 bài trở lên",
  standards: [
    "Nghiên cứu từ khóa chính, từ khóa LSI và ý định tìm kiếm (Search Intent)",
    "Tối ưu cấu trúc thẻ Heading (H1, H2, H3) phân cấp logic",
    "Tối ưu mật độ từ khóa, thẻ Meta Title và Meta Description",
    "Tỷ lệ trùng lặp thấp (Unique 100%), tuyệt đối không sao chép nguyên văn"
  ],
  monthlyCarePackage: {
    title: "Gói Quản Trị & Chăm Sóc Fanpage / Website Theo Tháng",
    tasks: [
      "Lập kế hoạch nội dung chi tiết theo từng tuần/tháng theo định hướng ngành",
      "Biên tập bài viết, thiết kế hình ảnh và banner theo nhận diện thương hiệu",
      "Giám sát độ ổn định kỹ thuật, kiểm tra liên kết gãy, backup dữ liệu 24/7",
      "Xử lý các sự cố về server, hosting và tấn công mã độc nhanh chóng"
    ]
  }
};

export const ANNUAL_MAINTENANCE_INFO = {
  title: "Chi Phí Duy Trì Website Hàng Năm",
  items: [
    { name: "Phí duy trì Tên miền (Domain)", note: "Duy trì quyền sở hữu tên miền quốc tế (.com, .net) hoặc tên miền Việt Nam (.vn, .com.vn) hàng năm." },
    { name: "Phí duy trì Máy chủ lưu trữ (Hosting)", note: "Gia hạn gói lưu trữ SSD NVMe tốc độ cao đảm bảo website vận hành thông suốt 24/7/365." },
    { name: "Phí bảo trì & Nâng cấp kỹ thuật", note: "Miễn phí 100% khi khách hàng lưu trữ trên hosting của Uni Creation (Bảo hành trọn đời)." }
  ]
};

export const DOMAIN_PRICING = [
  { ext: ".vn", setupFee: "200.000 đ", renewFee: "450.000 đ/năm", desc: "Tên miền quốc gia Việt Nam uy tín hàng đầu" },
  { ext: ".com.vn", setupFee: "200.000 đ", renewFee: "350.000 đ/năm", desc: "Tên miền thương mại doanh nghiệp Việt Nam" },
  { ext: ".com", setupFee: "0 đ", renewFee: "320.000 đ/năm", desc: "Tên miền quốc tế phổ biến số 1 thế giới" },
  { ext: ".net", setupFee: "0 đ", renewFee: "340.000 đ/năm", desc: "Tên miền công nghệ và mạng dịch vụ" },
  { ext: ".org", setupFee: "0 đ", renewFee: "350.000 đ/năm", desc: "Tên miền tổ chức và cộng đồng" },
  { ext: ".edu.vn", setupFee: "200.000 đ", renewFee: "200.000 đ/năm", desc: "Tên miền giáo dục và đào tạo" }
];

export const CLIENT_PARTNERS = [
  { name: "Scots English College", category: "Giáo dục quốc tế", logoText: "SCOTS ENGLISH", desc: "Hệ thống Anh ngữ tiêu chuẩn Úc tại Việt Nam" },
  { name: "FPT Skillking", category: "Đào tạo Digital Marketing", logoText: "SKILLKING", desc: "Học viện đào tạo Full-stack Digital Marketer" },
  { name: "Lumi Smart Home", category: "Nhà thông minh IoT", logoText: "LUMI VIETNAM", desc: "Nhà sản xuất thiết bị nhà thông minh số 1 Việt Nam" },
  { name: "CIS School", category: "Trường Quốc Tế", logoText: "CIS SCHOOL", desc: "Hệ thống trường liên cấp song ngữ quốc tế" },
  { name: "Gentis", category: "Y tế & Di truyền học", logoText: "GENTIS", desc: "Trung tâm xét nghiệm di truyền công nghệ cao" },
  { name: "Bảo Việt Life", category: "Tài chính Bảo hiểm", logoText: "BẢO VIỆT LIFE", desc: "Tập đoàn tài chính và bảo hiểm hàng đầu Việt Nam" },
  { name: "Hòa Bình Minh", category: "Ô tô & Vật liệu", logoText: "HOÀ BÌNH MINH", desc: "Tập đoàn phân phối ô tô và vật liệu xây dựng" },
  { name: "SmartMen", category: "Thời trang nam cao cấp", logoText: "SMARTMEN", desc: "Thương hiệu giày da và thời trang nam hàng đầu" },
  { name: "GTE Media", category: "Truyền thông số", logoText: "GTE MEDIA", desc: "Công ty truyền thông & quảng cáo đa nền tảng" },
  { name: "Luxuryfan", category: "Nội thất cao cấp", logoText: "LUXURYFAN", desc: "Nhà phân phối quạt trần Mỹ chính hãng" },
  { name: "VBI Bảo Hiểm", category: "Bảo hiểm ngân hàng", logoText: "VBI", desc: "Tổng công ty Bảo hiểm VietinBank" },
  { name: "Camp Long Biên", category: "Du lịch & Cắm trại", logoText: "CAMP LONG BIÊN", desc: "Khu du lịch sinh thái và trải nghiệm dã ngoại" },
  { name: "Emera Group", category: "Bất động sản", logoText: "EMERA", desc: "Tập đoàn phát triển bất động sản và du lịch" },
  { name: "Hưng Tín Pharma", category: "Dược phẩm", logoText: "HƯNG TÍN", desc: "Công ty phân phối dược phẩm và TPCN" },
  { name: "TCE Machinery", category: "Máy công trình", logoText: "TCE", desc: "Nhà phân phối máy xây dựng SANY độc quyền" },
  { name: "Sông Cầu Green", category: "Năng lượng xanh", logoText: "SÔNG CẦU GREEN", desc: "Dự án phát triển năng lượng tái tạo bền vững" },
  { name: "Dicom IoT", category: "Công nghệ thông minh", logoText: "DICOM", desc: "Giải pháp công nghệ điều khiển thông minh" },
  { name: "Hiwin", category: "Cơ khí chính xác", logoText: "HIWIN", desc: "Thương hiệu linh kiện cơ khí tự động hóa quốc tế" },
  { name: "Bekids", category: "Giáo dục sớm", logoText: "BEKIDS", desc: "Hệ thống phát triển tư duy trẻ em" }
];

export const CORE_FEATURES = [
  {
    icon: "Layout",
    title: "Giao diện hiện đại & Độc đáo",
    desc: "Thiết kế chuẩn UX/UI mới, sáng tạo không giới hạn, phù hợp đặc thù từng ngành nghề kinh doanh."
  },
  {
    icon: "Search",
    title: "Tối ưu hóa SEO 100%",
    desc: "Cấu trúc thẻ heading, meta, schema rich snippets chuẩn Google giúp từ khóa nhanh chóng lên top tìm kiếm."
  },
  {
    icon: "Smartphone",
    title: "Tương thích 100% thiết bị",
    desc: "Công nghệ Responsive mượt mà trên iPhone, iPad, laptop, màn hình lớn 4K không vỡ layout."
  },
  {
    icon: "Zap",
    title: "Tốc độ tải trang < 1.2s",
    desc: "Tối ưu nén ảnh WebP/AVIF, mã nguồn sạch, bộ nhớ đệm LiteSpeed Cache giúp trải nghiệm người dùng tức thì."
  },
  {
    icon: "ShieldCheck",
    title: "Bảo mật SSL & Chống DDoS",
    desc: "Cung cấp chứng chỉ SSL miễn phí trọn đời, tường lửa Web Application Firewall bảo vệ dữ liệu."
  },
  {
    icon: "Code",
    title: "Bàn giao Full Source Code",
    desc: "Khách hàng sở hữu 100% mã nguồn và cơ sở dữ liệu sau khi bàn giao, không phụ thuộc hay giữ code."
  },
  {
    icon: "HeartHandshake",
    title: "Bảo hành website trọn đời",
    desc: "Cam kết đồng hành lâu dài, sửa lỗi kỹ thuật miễn phí trong suốt quá trình khách hàng vận hành."
  },
  {
    icon: "Clock",
    title: "Hỗ trợ kỹ thuật 24/7",
    desc: "Kỹ thuật viên chuyên nghiệp phản hồi nhanh trong 15 - 30 phút qua Hotline, Zalo và Email."
  }
];

export const THEME_COLLECTIONS = [
  { id: "all", name: "Tất cả mẫu website", count: 186 },
  { id: "gioi-thieu-cong-ty", name: "Giới thiệu công ty", count: 56 },
  { id: "thuong-mai-dien-tu", name: "Thương mại điện tử & Bán hàng", count: 86 },
  { id: "bat-dong-san", name: "Bất động sản", count: 11 },
  { id: "noi-that", name: "Nội thất & Kiến trúc", count: 12 },
  { id: "xay-dung", name: "Xây dựng & Vật liệu", count: 13 },
  { id: "du-lich", name: "Du lịch & Khách sạn", count: 10 },
  { id: "du-hoc", name: "Du học & Giáo dục", count: 11 },
  { id: "duoc-pham", name: "Dược phẩm & Y tế", count: 9 },
  { id: "spa", name: "Spa & Thẩm mỹ viện", count: 4 },
  { id: "o-to", name: "Ô tô & Xe máy", count: 7 }
];

import { ALL_THEMES_60 } from './themesData';
import { ALL_POSTS, BlogPost } from './blogData';

export const THEMES_LIST: ThemeItem[] = ALL_THEMES_60;
export const POSTS_LIST: PostItem[] = ALL_POSTS;
export const NEWS_ARTICLES = ALL_POSTS;
export type NewsArticle = BlogPost;
