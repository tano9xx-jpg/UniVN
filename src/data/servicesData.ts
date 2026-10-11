export interface ServiceSpec {
  label: string;
  value: string;
}

export interface ServiceTier {
  name: string;
  price: string;
  period?: string;
  popular?: boolean;
  badge?: string;
  highlightSpec?: string;
  specs?: Record<string, string>;
  features: string[];
}

export interface TechFeature {
  title: string;
  desc: string;
  badge?: string;
  icon?: string;
}

export interface SpecRow {
  label: string;
  values: string[];
}

export interface TierTab {
  id: string;
  label: string;
  badge?: string;
  description?: string;
  tiers: ServiceTier[];
}

export interface ServiceDetail {
  slug: string;
  title: string;
  category: string;
  tagline?: string;
  shortDesc: string;
  longDesc: string;
  highlights: string[];
  techFeatures?: TechFeature[];
  tierTabs?: TierTab[];
  tiers?: ServiceTier[];
  specsTable?: {
    headers: string[];
    rows: SpecRow[];
  };
  processSteps?: { step: string; title: string; desc: string }[];
  faqs: { question: string; answer: string }[];
  guarantees?: { title: string; desc: string }[];
}

export const ALL_SERVICES: Record<string, ServiceDetail> = {
  'thiet-ke-website-tron-goi': {
    slug: 'thiet-ke-website-tron-goi',
    title: 'Thiết Kế Website Trọn Gói',
    category: 'Thiết kế Web',
    shortDesc: 'Dịch vụ thiết kế web trọn gói chuẩn SEO, giao diện đẹp, sáng tạo và tối ưu trải nghiệm khách hàng đa thiết bị.',
    longDesc: 'Dịch vụ thiết kế web trọn gói của Uni Creation với giao diện đẹp, độc đáo, sáng tạo, hệ thống tính năng website đầy đủ, mang tính ứng dụng cao và phù hợp với từng cá nhân, doanh nghiệp. Sáng tạo không ngừng nghỉ, ý tưởng luôn đổi mới, quy trình chuẩn hóa quốc tế, Uni Creation cam kết đem đến cho bạn 1 website ấn tượng về giao diện, hoàn hảo về chức năng nhưng luôn giữ được tính bảo mật tuyệt đối.',
    highlights: [
      'Giao diện UI/UX độc bản, phù hợp nhận diện thương hiệu',
      'Tặng kèm tên miền quốc tế .com / .net & Hosting SSD NVMe',
      'Chuẩn SEO Onpage 100%, tốc độ tải trang dưới 1 giây',
      'Bàn giao 100% Source Code không mã hóa, bảo hành trọn đời'
    ],
    tiers: [
      {
        name: 'Gói Startup',
        price: '2.500.000 đ',
        period: 'trọn gói',
        features: [
          'Bàn giao 1 - 2 ngày',
          'Tặng tên miền .com / .net',
          'Hosting NVMe SSD 1 GB',
          'Bảo mật SSL miễn phí',
          'Chuẩn SEO 100%',
          'Hỗ trợ 10 bài viết demo',
          'Bảo hành trọn đời'
        ]
      },
      {
        name: 'Gói Pro',
        price: '4.000.000 đ',
        period: 'trọn gói',
        popular: true,
        features: [
          'Bàn giao 3 - 5 ngày',
          'Tặng tên miền .com / .net',
          'Hosting NVMe SSD 1.5 GB',
          'Chuẩn SEO Onpage VIP',
          'Hỗ trợ 15 bài viết chuẩn SEO',
          'Tặng voucher 350.000 đ',
          'Bàn giao Full Source Code'
        ]
      },
      {
        name: 'Gói VIP May Đo',
        price: 'Liên hệ tư vấn',
        period: 'may đo độc quyền',
        features: [
          'Thiết kế giao diện độc quyền 1:1',
          'Hosting NVMe SSD 3 - 10 GB',
          'Lập trình chức năng riêng biệt',
          'Tích hợp CRM, thanh toán online',
          'Hỗ trợ thông báo Bộ Công Thương',
          'Kỹ thuật viên 1-1 hỗ trợ riêng'
        ]
      }
    ],
    faqs: [
      {
        question: 'Chi phí thiết kế website trọn gói đã bao gồm những gì?',
        answer: 'Chi phí đã bao gồm trọn gói: Tên miền quốc tế (.com/.net), Hosting lưu trữ SSD NVMe tốc độ cao 1 năm, chứng chỉ bảo mật SSL, cài đặt chuẩn SEO, tương thích mobile và bảo hành kỹ thuật trọn đời.'
      },
      {
        question: 'Tôi có được sở hữu mã nguồn sau khi hoàn thành không?',
        answer: 'Có. Uni Creation bàn giao 100% Source Code và cơ sở dữ liệu không mã hóa. Bạn toàn quyền sở hữu và chuyển đổi máy chủ khi có nhu cầu.'
      }
    ]
  },

  'dich-vu-hosting': {
    slug: 'dich-vu-hosting',
    title: 'Dịch Vụ Hosting LiteSpeed & Pro Platinum NVMe',
    category: 'Hạ tầng máy chủ',
    tagline: 'Hạ Tầng Điện Toán Đám Mây Chuẩn Tier III · LiteSpeed Enterprise · 100% NVMe U.2 Enterprise',
    shortDesc: 'Dịch vụ Web Hosting chất lượng cao với ổ cứng Pure NVMe Enterprise, Web Server LiteSpeed tối ưu tốc độ x6 lần, CloudLinux cách ly tài nguyên và bảo mật Imunify360 AI.',
    longDesc: 'Dịch vụ Web Hosting tại Uni Creation được xây dựng trên hạ tầng máy chủ Dell Enterprise chuyên dụng kết hợp vi xử lý Intel® Xeon® Platinum thế hệ mới và AMD EPYC. Toàn bộ hệ thống sử dụng ổ cứng Pure NVMe Enterprise chạy RAID-10, mang lại tốc độ truy xuất dữ liệu vượt trội và độ an toàn thông tin tối đa. Kết hợp với Web Server LiteSpeed Enterprise và hệ điều hành CloudLinux OS, website của bạn sẽ luôn đạt điểm số Pagespeed cao nhất, chịu tải mượt mà ngay cả trong các chiến dịch quảng cáo cao điểm.',
    highlights: [
      'Vi xử lý Intel® Xeon Platinum & AMD EPYC thế hệ mới nhất',
      'Ổ cứng 100% Pure NVMe Enterprise RAID 10 siêu tốc độ',
      'Web Server LiteSpeed Enterprise tăng tốc độ tải trang tới 600%',
      'Hệ điều hành CloudLinux OS cách ly tài nguyên, chống tấn công local hack',
      'Tường lửa Imunify360 AI WAF tự động quét mã độc và chặn botnet',
      'Tự động sao lưu JetBackup mỗi ngày (lưu 14 bản sao lưu gần nhất)'
    ],
    techFeatures: [
      {
        title: 'CPU Intel Xeon Platinum & AMD EPYC',
        desc: 'Sử dụng dòng vi xử lý chuyên dụng cho máy chủ với xung nhịp cao lên tới 3.9GHz, phân bổ tài nguyên vCPU thực tế đảm bảo hiệu năng xử lý tác vụ PHP mượt mà.',
        badge: 'Hiệu năng đỉnh cao',
        icon: 'Cpu'
      },
      {
        title: 'Ổ Cứng Pure NVMe U.2 Enterprise',
        desc: 'Trang bị 100% ổ cứng chuẩn doanh nghiệp thiết lập RAID-10, cho tốc độ đọc/ghi dữ liệu lên đến 3.500MB/s và IOPS cực đại gấp 10 lần so với ổ SSD SATA thông thường.',
        badge: 'Tốc độ x10',
        icon: 'HardDrive'
      },
      {
        title: 'LiteSpeed Enterprise & LSCache',
        desc: 'Web Server LiteSpeed độc quyền xử lý đồng thời hàng chục nghìn kết nối với mức tiêu thụ RAM cực thấp, tích hợp sẵn module LiteSpeed Cache tối ưu riêng cho WordPress.',
        badge: 'Tăng tốc 600%',
        icon: 'Zap'
      },
      {
        title: 'Bảo Mật Kép CloudLinux & Imunify360',
        desc: 'Công nghệ LVE cách ly tài nguyên triệt để giữa các tài khoản, ngăn chặn 100% nguy cơ lây nhiễm chéo. Tường lửa Imunify360 ứng dụng AI tự động vá lỗ hổng và diệt mã độc thời gian thực.',
        badge: 'An toàn 99.99%',
        icon: 'ShieldCheck'
      },
      {
        title: 'Sao Lưu JetBackup Mỗi Ngày',
        desc: 'Cơ chế tự động sao lưu toàn bộ mã nguồn, cơ sở dữ liệu và hộp thư mỗi ngày độc lập sang cụm lưu trữ dự phòng, hỗ trợ khôi phục dữ liệu 1-click tức thì qua cPanel.',
        badge: 'Lưu 14 bản',
        icon: 'RefreshCw'
      },
      {
        title: 'Datacenter Chuẩn Tier III Viettel & FPT',
        desc: 'Hệ thống máy chủ đặt tại các trung tâm dữ liệu chuẩn quốc tế Tier III tại Việt Nam với đường truyền cáp quang băng thông 10Gbps, cam kết Uptime 99.9%.',
        badge: 'Uptime 99.9%',
        icon: 'Server'
      }
    ],
    tierTabs: [
      {
        id: 'pro-hosting',
        label: 'Pro Hosting (Tiêu Chuẩn)',
        badge: 'Phổ biến nhất',
        description: 'Giải pháp hosting tối ưu chi phí cho website cá nhân, doanh nghiệp vừa và nhỏ, blog tin tức và landing page.',
        tiers: [
          {
            name: 'Pro Hosting 1',
            price: '55.000 đ',
            period: 'tháng',
            highlightSpec: '2 GB NVMe · 1 vCPU · 1 GB RAM',
            features: [
              '2 GB Dung lượng NVMe Enterprise',
              '1 vCPU Intel Xeon Platinum',
              '1 GB RAM DDR4 ECC',
              'Băng thông: Không giới hạn',
              '1 Tên miền chính (Domain)',
              'Không giới hạn Subdomain & Database',
              'Chứng chỉ SSL Let\'s Encrypt miễn phí',
              'LiteSpeed Web Server + LSCache',
              'Sao lưu JetBackup hàng tuần'
            ]
          },
          {
            name: 'Pro Hosting 2',
            price: '95.000 đ',
            period: 'tháng',
            popular: true,
            badge: 'Khuyên Dùng',
            highlightSpec: '4 GB NVMe · 2 vCPU · 2 GB RAM',
            features: [
              '4 GB Dung lượng NVMe Enterprise',
              '2 vCPU Intel Xeon Platinum',
              '2 GB RAM DDR4 ECC',
              'Băng thông: Không giới hạn',
              '2 Tên miền (Addon Domain)',
              'Không giới hạn Subdomain & Database',
              'Chứng chỉ SSL Let\'s Encrypt miễn phí',
              'LiteSpeed Web Server + LSCache',
              'Sao lưu JetBackup hàng ngày'
            ]
          },
          {
            name: 'Pro Hosting 3',
            price: '145.000 đ',
            period: 'tháng',
            highlightSpec: '8 GB NVMe · 3 vCPU · 3 GB RAM',
            features: [
              '8 GB Dung lượng NVMe Enterprise',
              '3 vCPU Intel Xeon Platinum',
              '3 GB RAM DDR4 ECC',
              'Băng thông: Không giới hạn',
              '4 Tên miền (Addon Domain)',
              'Không giới hạn Subdomain & Database',
              'Chứng chỉ SSL Let\'s Encrypt miễn phí',
              'LiteSpeed Web Server + LSCache',
              'Sao lưu JetBackup hàng ngày'
            ]
          },
          {
            name: 'Pro Hosting 4',
            price: '220.000 đ',
            period: 'tháng',
            highlightSpec: '15 GB NVMe · 4 vCPU · 4 GB RAM',
            features: [
              '15 GB Dung lượng NVMe Enterprise',
              '4 vCPU Intel Xeon Platinum',
              '4 GB RAM DDR4 ECC',
              'Băng thông: Không giới hạn',
              'Không giới hạn Tên miền (Addon Domain)',
              'Không giới hạn Subdomain & Database',
              'Chứng chỉ SSL Let\'s Encrypt miễn phí',
              'LiteSpeed Web Server + Redis Cache',
              'Hỗ trợ kỹ thuật VIP 24/7'
            ]
          }
        ]
      },
      {
        id: 'pro-platinum',
        label: 'Pro Platinum Hosting (Cao Cấp AMD/Platinum)',
        badge: 'Chịu tải cao',
        description: 'Dành riêng cho website thương mại điện tử, WooCommerce, cổng thông tin có lượng truy cập lớn cần tài nguyên CPU/RAM vượt trội.',
        tiers: [
          {
            name: 'Platinum 1',
            price: '120.000 đ',
            period: 'tháng',
            highlightSpec: '6 GB NVMe U.2 · 2 vCPU · 2 GB RAM',
            features: [
              '6 GB Ổ cứng NVMe U.2 Enterprise',
              '2 vCPU Platinum 3.9GHz / AMD EPYC',
              '2 GB RAM DDR4 ECC 3200MHz',
              'Băng thông mạng 10Gbps Không giới hạn',
              '2 Tên miền (Addon Domain)',
              'LiteSpeed Web Server Enterprise',
              'Tích hợp sẵn Redis Cache & Memcached',
              'Imunify360 AI WAF tự động diệt malware',
              'Sao lưu JetBackup mỗi ngày (lưu 14 bản)'
            ]
          },
          {
            name: 'Platinum 2',
            price: '220.000 đ',
            period: 'tháng',
            popular: true,
            badge: 'Bán Chạy Nhất',
            highlightSpec: '10 GB NVMe U.2 · 4 vCPU · 4 GB RAM',
            features: [
              '10 GB Ổ cứng NVMe U.2 Enterprise',
              '4 vCPU Platinum 3.9GHz / AMD EPYC',
              '4 GB RAM DDR4 ECC 3200MHz',
              'Băng thông mạng 10Gbps Không giới hạn',
              '4 Tên miền (Addon Domain)',
              'LiteSpeed Web Server Enterprise',
              'Tích hợp sẵn Redis Cache & Memcached',
              'Imunify360 AI WAF tự động diệt malware',
              'Sao lưu JetBackup mỗi ngày (lưu 14 bản)'
            ]
          },
          {
            name: 'Platinum 3',
            price: '380.000 đ',
            period: 'tháng',
            highlightSpec: '20 GB NVMe U.2 · 4 vCPU · 6 GB RAM',
            features: [
              '20 GB Ổ cứng NVMe U.2 Enterprise',
              '4 vCPU Platinum 3.9GHz / AMD EPYC',
              '6 GB RAM DDR4 ECC 3200MHz',
              'Băng thông mạng 10Gbps Không giới hạn',
              'Không giới hạn Tên miền (Addon Domain)',
              'LiteSpeed Web Server Enterprise',
              'Tích hợp sẵn Redis Cache & Memcached',
              'Imunify360 AI WAF tự động diệt malware',
              'Sao lưu JetBackup mỗi ngày (lưu 14 bản)'
            ]
          },
          {
            name: 'Platinum 4',
            price: '580.000 đ',
            period: 'tháng',
            highlightSpec: '35 GB NVMe U.2 · 6 vCPU · 8 GB RAM',
            features: [
              '35 GB Ổ cứng NVMe U.2 Enterprise',
              '6 vCPU Platinum 3.9GHz / AMD EPYC',
              '8 GB RAM DDR4 ECC 3200MHz',
              'Băng thông mạng 10Gbps Không giới hạn',
              'Không giới hạn Tên miền (Addon Domain)',
              'LiteSpeed Web Server Enterprise VIP',
              'Tích hợp sẵn Redis Cache & Memcached',
              'Imunify360 AI WAF tự động diệt malware',
              'Hỗ trợ kỹ thuật 1-1 riêng biệt 24/7'
            ]
          }
        ]
      }
    ],
    specsTable: {
      headers: ['Thông Số Kỹ Thuật', 'Pro Hosting 1', 'Pro Hosting 2', 'Platinum 1', 'Platinum 2'],
      rows: [
        { label: 'Vi xử lý (CPU)', values: ['1 vCPU Xeon', '2 vCPU Xeon', '2 vCPU Platinum (3.9GHz)', '4 vCPU Platinum (3.9GHz)'] },
        { label: 'Bộ nhớ (RAM)', values: ['1 GB RAM DDR4', '2 GB RAM DDR4', '2 GB RAM ECC', '4 GB RAM ECC'] },
        { label: 'Ổ cứng lưu trữ', values: ['2 GB NVMe SSD', '4 GB NVMe SSD', '6 GB NVMe U.2 Enterprise', '10 GB NVMe U.2 Enterprise'] },
        { label: 'Tốc độ IOPS', values: ['5.000 IOPS', '8.000 IOPS', '20.000 IOPS', '35.000 IOPS'] },
        { label: 'Web Server', values: ['LiteSpeed Enterprise', 'LiteSpeed Enterprise', 'LiteSpeed Enterprise VIP', 'LiteSpeed Enterprise VIP'] },
        { label: 'Object Cache', values: ['LiteSpeed Cache', 'LiteSpeed Cache', 'Redis + Memcached', 'Redis + Memcached'] },
        { label: 'Bảo mật', values: ['ModSecurity + ClamAV', 'Imunify360', 'Imunify360 AI WAF', 'Imunify360 AI WAF'] },
        { label: 'Sao lưu (Backup)', values: ['Hàng tuần (1 bản)', 'Hàng ngày (7 bản)', 'Hàng ngày (14 bản)', 'Hàng ngày (14 bản)'] },
        { label: 'Tên miền Addon', values: ['1 Domain', '2 Domains', '2 Domains', '4 Domains'] },
        { label: 'Cam kết Uptime', values: ['99.9%', '99.9%', '99.99%', '99.99%'] }
      ]
    },
    guarantees: [
      { title: 'Chuyển Dữ Liệu Miễn Phí 100%', desc: 'Đội ngũ chuyên viên hỗ trợ di chuyển toàn bộ website và cơ sở dữ liệu từ nhà cung cấp cũ sang Uni Creation hoàn toàn miễn phí, cam kết không gián đoạn dịch vụ.' },
      { title: 'Cam Kết Hoàn Tiền Trong 30 Ngày', desc: 'Nếu bạn không hài lòng về chất lượng dịch vụ hoặc tốc độ xử lý, Uni Creation hoàn trả 100% chi phí không cần lý do phức tạp.' },
      { title: 'Hạ Tầng Không Oversell', desc: 'Cam kết phân bổ đúng 100% dung lượng RAM và vCPU được ghi trong gói, bảo đảm tính ổn định lâu dài cho website.' },
      { title: 'Hỗ Trợ Kỹ Thuật 24/7/365', desc: 'Đội ngũ kỹ sư túc trực 24/7 qua Ticket, Zalo và Tổng đài Hotline, thời gian phản hồi trung bình dưới 15 phút.' }
    ],
    faqs: [
      {
        question: 'Hosting tại Uni Creation có hỗ trợ di chuyển website từ nơi khác về không?',
        answer: 'Có. Đội ngũ kỹ thuật viên Uni Creation sẽ hỗ trợ chuyển toàn bộ mã nguồn, cơ sở dữ liệu và cấu hình từ nhà cung cấp cũ (như cPanel, DirectAdmin, Plesk...) sang máy chủ Uni Creation hoàn toàn miễn phí và đảm bảo website hoạt động liên tục không bị downtime.'
      },
      {
        question: 'Tôi nên chọn gói Pro Hosting hay Pro Platinum Hosting?',
        answer: 'Nếu bạn sở hữu website giới thiệu công ty, blog cá nhân hoặc landing page với lượt truy cập vừa phải, Pro Hosting là lựa chọn tối ưu chi phí. Nếu bạn vận hành website thương mại điện tử (WooCommerce, Magento), cổng tin tức lớn hoặc chạy chiến dịch quảng cáo Google/Facebook Ads với lượng truy cập đột biến, Pro Platinum Hosting với CPU Platinum 3.9GHz, RAM ECC và Redis Cache sẽ giúp website chịu tải mượt mà không bị nghẽn.'
      },
      {
        question: 'Hosting có hỗ trợ cài đặt WordPress tự động không?',
        answer: 'Có. Bảng điều khiển tích hợp công cụ Softaculous cho phép cài đặt WordPress, Laravel, Joomla, OpenCart... chỉ với 1 cú click chuột trong vòng 30 giây.'
      },
      {
        question: 'Dữ liệu của tôi được sao lưu như thế nào?',
        answer: 'Hệ thống sử dụng phần mềm JetBackup tự động tạo bản sao lưu toàn diện mỗi ngày độc lập sang cụm máy chủ lưu trữ chuyên dụng riêng biệt. Bạn có thể tự mình tải về hoặc khôi phục dữ liệu bất cứ lúc nào trong cPanel.'
      }
    ]
  },

  'dich-vu-ten-mien': {
    slug: 'dich-vu-ten-mien',
    title: 'Dịch Vụ Đăng Ký Tên Miền Quốc Tế & Quốc Gia Việt Nam .VN',
    category: 'Tên miền',
    tagline: 'Kích Hoạt Tự Động Trong 5 Phút · Hệ Thống Quản Lý DNS Tiếng Việt Chuẩn Anycast',
    shortDesc: 'Đơn vị cung cấp tên miền Việt Nam (.vn, .com.vn) và quốc tế (.com, .net, .org) uy tín, thủ tục nhanh chóng, kích hoạt ngay trong 5 phút.',
    longDesc: 'Công ty Cổ phần Uni Creation Việt Nam là đơn vị chuyên cung cấp dịch vụ tên miền Việt Nam và quốc tế giá rẻ, uy tín, chất lượng nhất Hà Nội và toàn quốc. Chúng tôi cung cấp tất cả các dạng tên miền .vn, .com.vn, .com, .net, .org... với bảng điều khiển DNS thân thiện, bảo mật Whois Privacy, khóa tên miền chống chiếm đoạt Domain Lock và hỗ trợ kỹ thuật cài đặt DNS trỏ về hosting tức thì.',
    highlights: [
      'Kích hoạt tên miền tự động ngay sau khi hoàn tất đăng ký',
      'Hệ thống quản lý DNS tiếng Việt trực quan trên nền tảng Anycast',
      'Bảo vệ tên miền chống chiếm quyền kiểm soát (Domain Lock)',
      'Miễn phí dịch vụ bảo mật thông tin chủ sở hữu (Whois Privacy)',
      'Hỗ trợ đầy đủ hóa đơn VAT điện tử hợp pháp cho doanh nghiệp'
    ],
    techFeatures: [
      { title: 'DNS Anycast Toàn Cầu', desc: 'Hệ thống máy chủ phân giải tên miền phân bố tại nhiều Datacenter trên thế giới, giúp tốc độ phản hồi DNS dưới 10ms.', icon: 'Globe' },
      { title: 'Khóa Tên Miền (Domain Lock)', desc: 'Tính năng bảo mật nâng cao ngăn chặn việc chuyển đổi tên miền trái phép mà không có sự xác nhận từ chủ sở hữu.', icon: 'Lock' },
      { title: 'Bảo Mật Thông Tin Whois', desc: 'Ẩn thông tin cá nhân như số điện thoại, email và địa chỉ trên hệ thống tra cứu công khai Whois, tránh spam và lừa đảo.', icon: 'ShieldCheck' },
      { title: 'Kích Hoạt Nhanh 5 Phút', desc: 'Quy trình xét duyệt hồ sơ online nhanh chóng, kích hoạt tên miền ngay sau khi thanh toán thành công.', icon: 'Zap' }
    ],
    tiers: [
      {
        name: 'Tên miền .com',
        price: '320.000 đ',
        period: 'năm',
        popular: true,
        badge: 'Phổ biến nhất thế giới',
        highlightSpec: 'Quốc tế · Uy tín toàn cầu',
        features: ['Tên miền quốc tế phổ biến nhất thế giới', 'Phí khởi tạo: 0 đ', 'DNS Anycast miễn phí', 'Khóa tên miền chống trộm Domain Lock', 'Hỗ trợ kỹ thuật 24/7']
      },
      {
        name: 'Tên miền .vn',
        price: '450.000 đ',
        period: 'năm',
        badge: 'Khuyên Dùng Tại VN',
        highlightSpec: 'Quốc gia Việt Nam · Ưu tiên SEO',
        features: ['Tên miền quốc gia Việt Nam uy tín hàng đầu', 'Phí cài đặt ban đầu: 200.000 đ', 'Được pháp luật Việt Nam bảo hộ thương hiệu', 'Tối ưu xếp hạng tìm kiếm Google Việt Nam', 'Xuất hóa đơn VAT đầy đủ']
      },
      {
        name: 'Tên miền .com.vn',
        price: '350.000 đ',
        period: 'năm',
        highlightSpec: 'Thương mại điện tử Việt Nam',
        features: ['Tên miền thương mại doanh nghiệp Việt Nam', 'Phí cài đặt ban đầu: 200.000 đ', 'Xác thực tư cách pháp nhân doanh nghiệp', 'Bảo mật thông tin đăng ký', 'Hỗ trợ thủ tục VNNIC trọn gói']
      },
      {
        name: 'Tên miền .net',
        price: '360.000 đ',
        period: 'năm',
        highlightSpec: 'Công nghệ & Mạng lưới',
        features: ['Tên miền quốc tế cho mảng công nghệ, phần mềm', 'Phí khởi tạo: 0 đ', 'Bảng điều khiển DNS chuyên nghiệp', 'Cập nhật bản ghi DNS sau 1 giây', 'Miễn phí chuyển nhượng nội bộ']
      }
    ],
    faqs: [
      {
        question: 'Tôi cần cung cấp những giấy tờ gì để đăng ký tên miền .vn?',
        answer: 'Đối với cá nhân: Căn cước công dân gắn chip (2 mặt) và bản khai điện tử. Đối với doanh nghiệp: Giấy phép đăng ký kinh doanh và chữ ký số hoặc con dấu của người đại diện pháp luật theo quy định của Trung tâm Internet Việt Nam (VNNIC).'
      },
      {
        question: 'Tên miền sau khi đăng ký bao lâu thì sử dụng được?',
        answer: 'Tên miền quốc tế (.com, .net) kích hoạt ngay sau 1 - 5 phút. Tên miền quốc gia (.vn, .com.vn) kích hoạt trong vòng 15 - 30 phút sau khi hoàn tất hồ sơ xác thực theo quy định VNNIC.'
      }
    ]
  },

  'dich-vu-vps-pro-ssd': {
    slug: 'dich-vu-vps-pro-ssd',
    title: 'Dịch Vụ Pro VPS – Máy Chủ Ảo KVM Chuyên Dụng',
    category: 'Máy chủ ảo',
    tagline: 'Ảo Hóa KVM Toàn Phần · CPU Intel Xeon E5 / Platinum · 100% SSD Enterprise RAID 10',
    shortDesc: 'Dịch vụ cho thuê Pro VPS với cấu hình mạnh mẽ, CPU Intel Xeon xung nhịp cao, ổ cứng SSD Enterprise RAID 10 và ảo hóa toàn phần KVM độc lập tài nguyên.',
    longDesc: 'Dịch vụ Pro VPS tại Uni Creation cung cấp giải pháp máy chủ ảo chuyên nghiệp với hạ tầng phần cứng chuẩn máy chủ vật lý Dell/HP. Sử dụng CPU Intel® Xeon® Enterprise tối ưu và cụm ổ cứng SSD Enterprise chuyên dụng cấu hình RAID-10, Pro VPS đem lại sự ổn định tuyệt đối và khả năng chịu tải liên tục 24/7/365. Công nghệ ảo hóa toàn phần KVM đảm bảo 100% tài nguyên CPU và RAM là của riêng bạn, không bị chia sẻ (No Overselling).',
    highlights: [
      'Công nghệ ảo hóa toàn phần KVM độc lập 100% tài nguyên',
      'Vi xử lý Intel® Xeon® Enterprise hiệu năng tính toán bền bỉ',
      'Hệ thống ổ cứng SSD Enterprise thiết lập mảng RAID-10 an toàn',
      'Băng thông mạng trong nước 1 Gbps không giới hạn dung lượng truyền tải',
      '1 Địa chỉ IPv4 riêng biệt cố định, hỗ trợ mua thêm IP khi có nhu cầu',
      'Toàn quyền quản trị Root/Administrator, tự động kích hoạt sau 60 giây'
    ],
    techFeatures: [
      { title: 'Ảo Hóa KVM Độc Lập 100%', desc: 'Ảo hóa phần cứng mức Kernel (KVM) đảm bảo tài nguyên CPU và RAM của VPS là riêng biệt hoàn toàn, không bị ảnh hưởng bởi các VPS khác trên cùng node.', icon: 'Cpu' },
      { title: 'SSD Enterprise RAID 10', desc: 'Toàn bộ ổ cứng là SSD chuyên dụng cho Datacenter, cấu hình RAID 10 vừa tăng tốc độ đọc ghi dữ liệu vừa đảm bảo an toàn nếu có ổ đĩa gặp sự cố.', icon: 'HardDrive' },
      { title: 'Cổng Mạng Trong Nước 1Gbps', desc: 'Kết nối mạng tốc độ cao tại Datacenter Tier III Viettel IDC, không giới hạn lưu lượng truyền tải hàng tháng, độ trễ cực thấp.', icon: 'Zap' },
      { title: 'Bản Quyền Control Panel', desc: 'Miễn phí bản quyền DirectAdmin hoặc hỗ trợ cài đặt các control panel phổ biến như cPanel, CyberPanel, aaPanel, LAMP, LEMP, Docker theo nhu cầu.', icon: 'Server' },
      { title: 'Sao Lưu Snapshot Tự Động', desc: 'Hệ thống tự động sao lưu dữ liệu hàng tuần và hỗ trợ tính năng tạo Snapshot tức thời giúp khôi phục hệ điều hành chỉ với 1 cú click.', icon: 'RefreshCw' },
      { title: 'Hỗ Trợ Kỹ Thuật 24/7/365', desc: 'Đội ngũ chuyên viên hệ thống Linux & Windows túc trực 24/7, hỗ trợ tối ưu cấu hình Web Server và bảo mật máy chủ hoàn toàn miễn phí.', icon: 'Headphones' }
    ],
    tiers: [
      {
        name: 'Pro VPS 1',
        price: '190.000 đ',
        period: 'tháng',
        highlightSpec: '1 vCPU · 2 GB RAM · 30 GB SSD Enterprise',
        features: [
          '1 vCPU Intel Xeon Enterprise',
          '2 GB RAM DDR4 ECC',
          '30 GB SSD Enterprise RAID 10',
          'Băng thông: Không giới hạn',
          '1 Địa chỉ IPv4 Riêng',
          'Công nghệ ảo hóa KVM toàn phần',
          'Miễn phí DirectAdmin bản quyền',
          'Hỗ trợ cài đặt Linux/Windows',
          'Backup hàng tuần miễn phí'
        ]
      },
      {
        name: 'Pro VPS 2',
        price: '380.000 đ',
        period: 'tháng',
        popular: true,
        badge: 'Khuyên Dùng',
        highlightSpec: '2 vCPU · 4 GB RAM · 60 GB SSD Enterprise',
        features: [
          '2 vCPU Intel Xeon Enterprise',
          '4 GB RAM DDR4 ECC',
          '60 GB SSD Enterprise RAID 10',
          'Băng thông: Không giới hạn',
          '1 Địa chỉ IPv4 Riêng',
          'Công nghệ ảo hóa KVM toàn phần',
          'Miễn phí DirectAdmin bản quyền',
          'Hỗ trợ tối ưu hóa Web Server & MySQL',
          'Backup hàng tuần tự động'
        ]
      },
      {
        name: 'Pro VPS 3',
        price: '690.000 đ',
        period: 'tháng',
        highlightSpec: '4 vCPU · 8 GB RAM · 120 GB SSD Enterprise',
        features: [
          '4 vCPU Intel Xeon Enterprise',
          '8 GB RAM DDR4 ECC',
          '120 GB SSD Enterprise RAID 10',
          'Băng thông: Không giới hạn',
          '1 Địa chỉ IPv4 Riêng',
          'Công nghệ ảo hóa KVM toàn phần',
          'Miễn phí DirectAdmin bản quyền',
          'Hỗ trợ di chuyển dữ liệu 0đ',
          'Backup tự động hàng tuần'
        ]
      },
      {
        name: 'Pro VPS 4',
        price: '1.290.000 đ',
        period: 'tháng',
        highlightSpec: '6 vCPU · 16 GB RAM · 200 GB SSD Enterprise',
        features: [
          '6 vCPU Intel Xeon Enterprise',
          '16 GB RAM DDR4 ECC',
          '200 GB SSD Enterprise RAID 10',
          'Băng thông: Không giới hạn',
          '1 Địa chỉ IPv4 Riêng (có thể mua thêm)',
          'Công nghệ ảo hóa KVM toàn phần',
          'Hỗ trợ cấu hình cụm cân bằng tải (Load Balancing)',
          'Kỹ thuật viên VIP hỗ trợ 1:1',
          'Snapshot & Backup định kỳ'
        ]
      }
    ],
    specsTable: {
      headers: ['Thông Số Kỹ Thuật', 'Pro VPS 1', 'Pro VPS 2', 'Pro VPS 3', 'Pro VPS 4'],
      rows: [
        { label: 'Số lượng vCPU', values: ['1 Core', '2 Cores', '4 Cores', '6 Cores'] },
        { label: 'Dung lượng RAM', values: ['2 GB DDR4 ECC', '4 GB DDR4 ECC', '8 GB DDR4 ECC', '16 GB DDR4 ECC'] },
        { label: 'Ổ cứng SSD RAID 10', values: ['30 GB Enterprise', '60 GB Enterprise', '120 GB Enterprise', '200 GB Enterprise'] },
        { label: 'Băng thông mạng', values: ['100 Mbps (Unmetered)', '200 Mbps (Unmetered)', '300 Mbps (Unmetered)', '500 Mbps (Unmetered)'] },
        { label: 'Địa chỉ IPv4 riêng', values: ['1 IPv4 Dedicated', '1 IPv4 Dedicated', '1 IPv4 Dedicated', '1 IPv4 Dedicated'] },
        { label: 'Công nghệ ảo hóa', values: ['KVM Hardware', 'KVM Hardware', 'KVM Hardware', 'KVM Hardware'] },
        { label: 'Hệ điều hành', values: ['Ubuntu/CentOS/AlmaLinux', 'Ubuntu/CentOS/AlmaLinux/Windows', 'Linux & Windows Server', 'Linux & Windows Server'] },
        { label: 'Quyền quản trị', values: ['Full Root Access', 'Full Root Access', 'Full Root Access', 'Full Root Access'] }
      ]
    },
    guarantees: [
      { title: '100% Tài Nguyên Thực', desc: 'Không oversell, cam kết phân bổ đủ vCPU và RAM độc lập cho từng VPS hoạt động ổn định.' },
      { title: 'Khởi Tạo Trong 60 Giây', desc: 'Hệ thống tự động kích hoạt máy chủ ảo ngay sau khi xác nhận thanh toán.' },
      { title: 'Di Chuyển Máy Chủ Miễn Phí', desc: 'Kỹ thuật viên hỗ trợ chuyển toàn bộ dữ liệu từ máy chủ cũ sang VPS mới mà không tính thêm bất kỳ phụ phí nào.' }
    ],
    faqs: [
      {
        question: 'Pro VPS có được cấp toàn quyền Root / Administrator không?',
        answer: 'Có. Bạn nhận được toàn quyền quản trị cao nhất (Full Root Access trên hệ điều hành Linux hoặc Administrator trên Windows Server), tự do cài đặt các phần mềm, thư viện và tùy chỉnh tường lửa theo mong muốn.'
      },
      {
        question: 'Tôi có thể cài đặt hệ điều hành nào trên Pro VPS?',
        answer: 'Pro VPS hỗ trợ hầu hết các hệ điều hành phổ biến: Ubuntu (20.04, 22.04, 24.04), AlmaLinux (8, 9), Debian (11, 12), CentOS Stream và Windows Server (2016, 2019, 2022).'
      },
      {
        question: 'Nếu cần nâng cấp tài nguyên VPS sau này thì làm thế nào?',
        answer: 'Bạn có thể nâng cấp RAM, CPU hoặc dung lượng ổ cứng bất cứ lúc nào qua portal quản trị hoặc liên hệ kỹ thuật. Dữ liệu được bảo toàn nguyên vẹn 100% trong quá trình nâng cấp.'
      }
    ]
  },

  'dich-vu-vps-nvme': {
    slug: 'dich-vu-vps-nvme',
    title: 'X-Platinum VPS – Máy Chủ Ảo Hiệu Năng Cao NVMe Enterprise',
    category: 'Máy chủ ảo',
    tagline: 'Vi Xử Lý Intel Xeon Platinum & AMD EPYC · 100% U.2 NVMe RAID-10 · Mạng 10Gbps Tier III',
    shortDesc: 'Dòng máy chủ ảo cao cấp chuyên dụng cho các hệ thống tải nặng, thương mại điện tử và dữ liệu lớn với CPU Intel Xeon Platinum Gen 2 xung nhịp 3.9GHz và 100% NVMe U.2 Enterprise.',
    longDesc: 'X-Platinum VPS là dịch vụ máy chủ ảo thế hệ mới tại Uni Creation, thiết kế riêng cho các ứng dụng đòi hỏi tốc độ xử lý tính toán cực hạn và băng thông I/O siêu nhanh. Sử dụng vi xử lý Intel® Xeon® Platinum Gen 2 (up to 3.9GHz Turbo) kết hợp cụm ổ cứng U.2 NVMe Enterprise cấu hình RAID-10, X-Platinum VPS mang lại tốc độ truy xuất cơ sở dữ liệu thời gian thực nhanh gấp 10 lần so với SSD thông thường. Đặt tại Datacenter Tier III với cổng mạng 10Gbps, hệ thống cam kết Uptime 99.99% và khả năng đáp ứng lượng truy cập hàng trăm nghìn người dùng đồng thời.',
    highlights: [
      'Vi xử lý Intel® Xeon® Platinum Gen 2 xung nhịp cực cao 3.9GHz Turbo',
      '100% Ổ cứng NVMe U.2 Enterprise RAID 10 tốc độ đọc ghi lên đến 3.500 MB/s',
      'Độ trễ truy xuất I/O cực thấp, tốc độ IOPS lên tới 100.000 IOPS',
      'Cổng mạng Datacenter 10Gbps, băng thông trong nước không giới hạn',
      'Ảo hóa toàn phần KVM độc lập, cam kết không oversell CPU/RAM',
      'Hỗ trợ cài đặt tối ưu Web Server, MySQL và tường lửa bảo mật chuyên sâu'
    ],
    techFeatures: [
      { title: 'Intel Xeon Platinum 3.9GHz', desc: 'Vi xử lý máy chủ cao cấp nhất với tập lệnh AVX-512 và xung nhịp Turbo 3.9GHz, xử lý nhanh các tác vụ nặng như Render, AI, Database lớn và Microservices.', icon: 'Cpu' },
      { title: 'NVMe U.2 Enterprise RAID 10', desc: 'Sử dụng dòng ổ cứng U.2 Samsung Enterprise cao cấp, giao tiếp trực tiếp qua PCIe Bus cho băng thông dữ liệu 3.500MB/s, bền bỉ tuyệt đối với DWPD cao.', icon: 'HardDrive' },
      { title: 'Băng Thông 10Gbps Siêu Tốc', desc: 'Hạ tầng kết nối mạng nội bộ 10Gbps tại Viettel IDC & FPT, độ trễ Ping trong nước dưới 5ms, đường truyền quốc tế định tuyến tối ưu.', icon: 'Zap' },
      { title: 'Kích Hoạt Tự Động 60 Giây', desc: 'Triển khai máy chủ tự động qua hệ thống portal hiện đại, hỗ trợ cài đặt lại hệ điều hành và đổi mật khẩu Root tức thì chỉ trong vài cú click.', icon: 'Clock' },
      { title: 'Sao Lưu Snapshot Tự Động', desc: 'Tự động sao lưu 2 bản backup hàng tuần sang cụm lưu trữ độc lập, hỗ trợ tạo Snapshot thời gian thực trước khi cập nhật mã nguồn.', icon: 'RefreshCw' },
      { title: 'Kỹ Thuật Viên Cao Cấp 24/7', desc: 'Hỗ trợ tối ưu chuyên sâu: Cấu hình Nginx, LiteSpeed, tối ưu MySQL Database InnoDB, Redis Caching và thiết lập bảo mật chống tấn công DDoS.', icon: 'ShieldCheck' }
    ],
    tiers: [
      {
        name: 'X-Platinum 1',
        price: '250.000 đ',
        period: 'tháng',
        highlightSpec: '2 Core Platinum · 4 GB RAM ECC · 40 GB NVMe U.2',
        features: [
          '2 Core CPU Intel Xeon Platinum 3.9GHz',
          '4 GB RAM DDR4 ECC',
          '40 GB NVMe U.2 Enterprise RAID 10',
          'Băng thông: Không giới hạn',
          '1 IPv4 Riêng biệt',
          'Cổng mạng 1 Gbps',
          'KVM ảo hóa toàn phần',
          'Full Root Access',
          'Backup hàng tuần tự động'
        ]
      },
      {
        name: 'X-Platinum 2',
        price: '490.000 đ',
        period: 'tháng',
        popular: true,
        badge: 'Phổ Biến Nhất',
        highlightSpec: '4 Core Platinum · 8 GB RAM ECC · 80 GB NVMe U.2',
        features: [
          '4 Core CPU Intel Xeon Platinum 3.9GHz',
          '8 GB RAM DDR4 ECC',
          '80 GB NVMe U.2 Enterprise RAID 10',
          'Băng thông: Không giới hạn',
          '1 IPv4 Riêng biệt',
          'Cổng mạng 1 Gbps',
          'KVM ảo hóa toàn phần',
          'Hỗ trợ tối ưu Web Server & Database VIP',
          'Backup hàng tuần tự động'
        ]
      },
      {
        name: 'X-Platinum 3',
        price: '890.000 đ',
        period: 'tháng',
        highlightSpec: '6 Core Platinum · 16 GB RAM ECC · 150 GB NVMe U.2',
        features: [
          '6 Core CPU Intel Xeon Platinum 3.9GHz',
          '16 GB RAM DDR4 ECC',
          '150 GB NVMe U.2 Enterprise RAID 10',
          'Băng thông: Không giới hạn',
          '1 IPv4 Riêng biệt',
          'Cổng mạng 1 Gbps',
          'KVM ảo hóa toàn phần',
          'Chuyên dụng sàn TMĐT & Ứng dụng tải cao',
          'Snapshot & Backup định kỳ'
        ]
      },
      {
        name: 'X-Platinum 4',
        price: '1.590.000 đ',
        period: 'tháng',
        highlightSpec: '8 Core Platinum · 32 GB RAM ECC · 300 GB NVMe U.2',
        features: [
          '8 Core CPU Intel Xeon Platinum 3.9GHz',
          '32 GB RAM DDR4 ECC',
          '300 GB NVMe U.2 Enterprise RAID 10',
          'Băng thông: Không giới hạn',
          '1 IPv4 Riêng biệt (có thể bổ sung)',
          'Cổng mạng 1 Gbps',
          'KVM ảo hóa toàn phần',
          'Kỹ sư hệ thống hỗ trợ 1:1 trọn đời',
          'Snapshot & Backup định kỳ'
        ]
      }
    ],
    specsTable: {
      headers: ['Thông Số Kỹ Thuật', 'X-Platinum 1', 'X-Platinum 2', 'X-Platinum 3', 'X-Platinum 4'],
      rows: [
        { label: 'Vi xử lý (CPU)', values: ['2 Core Platinum (3.9GHz)', '4 Core Platinum (3.9GHz)', '6 Core Platinum (3.9GHz)', '8 Core Platinum (3.9GHz)'] },
        { label: 'Bộ nhớ (RAM)', values: ['4 GB DDR4 ECC', '8 GB DDR4 ECC', '16 GB DDR4 ECC', '32 GB DDR4 ECC'] },
        { label: 'Ổ cứng NVMe U.2', values: ['40 GB RAID 10', '80 GB RAID 10', '150 GB RAID 10', '300 GB RAID 10'] },
        { label: 'Tốc độ Đọc/Ghi', values: ['~ 3.500 MB/s', '~ 3.500 MB/s', '~ 3.500 MB/s', '~ 3.500 MB/s'] },
        { label: 'Chỉ số IOPS', values: ['30.000 IOPS', '60.000 IOPS', '100.000 IOPS', '150.000 IOPS'] },
        { label: 'Cổng mạng', values: ['1 Gbps Unmetered', '1 Gbps Unmetered', '1 Gbps Unmetered', '1 Gbps Unmetered'] },
        { label: 'Địa chỉ IPv4', values: ['1 IPv4 Riêng', '1 IPv4 Riêng', '1 IPv4 Riêng', '1 IPv4 Riêng'] },
        { label: 'Cam kết Uptime', values: ['99.99%', '99.99%', '99.99%', '99.99%'] }
      ]
    },
    guarantees: [
      { title: 'Tốc Độ NVMe U.2 Vượt Trội', desc: 'Cam kết sử dụng đúng 100% ổ cứng NVMe U.2 chuẩn Enterprise, tốc độ IOPS gấp 10 lần SSD SATA.' },
      { title: 'Tài Nguyên Riêng Biệt 100%', desc: 'Ảo hóa KVM độc lập tài nguyên, không xảy ra tình trạng nghẽn do láng giềng chiếm dụng.' },
      { title: 'Kỹ Thuật Viên Hỗ Trợ 24/7', desc: 'Hỗ trợ chuyển dữ liệu máy chủ miễn phí, cấu hình tường lửa và tối ưu cơ sở dữ liệu chuyên sâu.' }
    ],
    faqs: [
      {
        question: 'Tại sao nên chọn X-Platinum VPS thay vì VPS SSD thông thường?',
        answer: 'X-Platinum VPS trang bị CPU Intel Xeon Platinum Gen 2 xung nhịp cao đến 3.9GHz kết hợp ổ cứng U.2 NVMe Enterprise. Giao thức NVMe kết nối trực tiếp qua bus PCIe giúp loại bỏ hoàn toàn nút thắt cổ chai của chuẩn SATA cũ, mang lại chỉ số IOPS cực đại lên tới 100.000 IOPS. Điều này giúp các truy vấn cơ sở dữ liệu phức tạp của website thương mại điện tử hoặc ứng dụng doanh nghiệp được phản hồi ngay lập tức không có độ trễ.'
      },
      {
        question: 'X-Platinum VPS có phù hợp cho website thương mại điện tử nhiều sản phẩm không?',
        answer: 'Rất phù hợp. Các nền tảng như WooCommerce, Magento, PrestaShop đòi hỏi tốc độ đọc ghi cơ sở dữ liệu liên tục khi khách hàng tìm kiếm và thanh toán. X-Platinum VPS xử lý mượt mà hàng triệu truy vấn mỗi ngày mà không bị giật lag hay quá tải CPU.'
      },
      {
        question: 'Tôi có thể mua thêm địa chỉ IPv4 không?',
        answer: 'Có. Mỗi VPS được trang bị sẵn 1 IPv4 riêng và bạn có thể mua thêm nhiều địa chỉ IP bổ sung theo nhu cầu vận hành với chi phí niêm yết minh bạch.'
      }
    ]
  },

  'dich-vu-vps-gia-re': {
    slug: 'dich-vu-vps-gia-re',
    title: 'Dịch Vụ VPS Giá Rẻ – Máy Chủ Ảo Tiết Kiệm Chi Phí',
    category: 'Máy chủ ảo',
    tagline: 'Ảo Hóa KVM · Ổ Cứng SSD Enterprise · Chi Phí Siêu Tiết Kiệm Chỉ Từ 89.000 đ/Tháng',
    shortDesc: 'Máy chủ ảo giá rẻ hiệu năng ổn định, sử dụng phần cứng máy chủ Dell chuyên dụng và ổ cứng SSD Enterprise đi kèm công nghệ KVM.',
    longDesc: 'Dịch vụ VPS giá rẻ tại Uni Creation vẫn sử dụng toàn bộ máy chủ Dell chuyên dụng và cụm ổ cứng SSD Enterprise đi kèm công nghệ ảo hóa toàn phần KVM, mang lại hiệu năng ổn định suốt thời gian dài sử dụng. Đây là giải pháp hoàn hảo cho học sinh, sinh viên, lập trình viên thử nghiệm mã nguồn, chạy web vệ tinh SEO hoặc các ứng dụng nhỏ cần môi trường máy chủ độc lập với chi phí tiết kiệm nhất.',
    highlights: [
      'Mức giá siêu tiết kiệm chỉ từ 89.000 đ/tháng',
      'Công nghệ ảo hóa KVM không chia sẻ tài nguyên',
      'Hạ tầng máy chủ đặt tại Datacenter Viettel IDC đạt chuẩn Tier 3',
      'Toàn quyền Root truy cập hệ thống qua SSH hoặc Remote Desktop',
      'Hỗ trợ cài đặt lại hệ điều hành tự động trong 1 cú click'
    ],
    tiers: [
      {
        name: 'VPS Eco 1',
        price: '89.000 đ',
        period: 'tháng',
        highlightSpec: '1 vCPU · 1 GB RAM · 20 GB SSD Enterprise',
        features: ['1 vCPU Intel Xeon', '1 GB RAM', '20 GB SSD Enterprise', 'Băng thông 100 Mbps không giới hạn', '1 IP Riêng', 'KVM Ảo hóa', 'Hỗ trợ kỹ thuật 24/7']
      },
      {
        name: 'VPS Eco 2',
        price: '169.000 đ',
        period: 'tháng',
        popular: true,
        badge: 'Phổ Biến',
        highlightSpec: '2 vCPU · 2 GB RAM · 40 GB SSD Enterprise',
        features: ['2 vCPU Intel Xeon', '2 GB RAM', '40 GB SSD Enterprise', 'Băng thông 100 Mbps không giới hạn', '1 IP Riêng', 'KVM Ảo hóa', 'Hỗ trợ kỹ thuật 24/7']
      },
      {
        name: 'VPS Eco 3',
        price: '299.000 đ',
        period: 'tháng',
        highlightSpec: '2 vCPU · 4 GB RAM · 60 GB SSD Enterprise',
        features: ['2 vCPU Intel Xeon', '4 GB RAM', '60 GB SSD Enterprise', 'Băng thông 100 Mbps không giới hạn', '1 IP Riêng', 'KVM Ảo hóa', 'Hỗ trợ kỹ thuật 24/7']
      }
    ],
    faqs: [
      {
        question: 'VPS giá rẻ có bị chia sẻ tài nguyên không?',
        answer: 'Không. Nhờ công nghệ ảo hóa phần cứng KVM, tài nguyên CPU và RAM được cấp phát riêng biệt cho từng VPS, đảm bảo độ ổn định cao và không bị ảnh hưởng bởi người dùng khác.'
      }
    ]
  },

  'dich-vu-email-google': {
    slug: 'dich-vu-email-google',
    title: 'Dịch Vụ Google Workspace – Email Doanh Nghiệp & Bộ Ứng Dụng Đám Mây',
    category: 'Email doanh nghiệp',
    tagline: 'Đối Tác Chính Thức Cung Cấp Google Workspace Tại Việt Nam · Hóa Đơn VAT Hợp Pháp',
    shortDesc: 'Bộ giải pháp văn phòng và email doanh nghiệp chuẩn quốc tế từ Google. Giao diện Gmail quen thuộc, bộ lọc AI chống spam đỉnh cao, lưu trữ Google Drive và họp trực tuyến Google Meet.',
    longDesc: 'Uni Creation là đối tác uy tín cung cấp bản quyền Google Workspace chính hãng tại thị trường Việt Nam. Giải pháp email doanh nghiệp Google Workspace mang lại sự chuyên nghiệp tối đa với địa chỉ email theo tên miền công ty (dangky@tencongty.com), bộ lọc spam thông minh của Google chặn 99.9% thư rác và lừa đảo, cùng bộ công cụ cộng tác trực tuyến toàn diện: Google Drive, Docs, Sheets, Slides, Google Meet và Calendar. Đội ngũ chuyên gia của Uni Creation hỗ trợ cài đặt toàn bộ bản ghi DNS chuẩn (MX, SPF, DKIM, DMARC) và di chuyển dữ liệu email cũ sang Google hoàn toàn miễn phí.',
    highlights: [
      'Giao diện Gmail quen thuộc, đồng bộ tức thì trên Máy tính, Điện thoại và Tablet',
      'Tỷ lệ thư gửi vào hộp thư đến Inbox đạt 99.9% nhờ danh tiếng máy chủ Google',
      'Bảo mật 2 lớp 2FA, mã hóa cấp ngân hàng và kiểm soát quyền truy cập tập trung',
      'Tích hợp sâu Google Drive, Google Meet họp video và bộ ứng dụng văn phòng',
      'Uni Creation hỗ trợ cài đặt toàn bộ bản ghi DNS chuẩn Google và xuất hóa đơn VAT',
      'Miễn phí chuyển toàn bộ dữ liệu email, danh bạ từ hệ thống cũ sang Google'
    ],
    techFeatures: [
      { title: 'Gmail Theo Tên Miền Riêng', desc: 'Khẳng định uy tín thương hiệu với địa chỉ email tenban@tencongty.com. Không có quảng cáo, bảo mật tuyệt đối, quản lý người dùng tập trung qua Google Admin Console.', icon: 'Mail' },
      { title: 'Lưu Trữ Đám Mây Google Drive', desc: 'Dung lượng từ 30GB đến 5TB/người dùng (hoặc không giới hạn), lưu trữ và chia sẻ tài liệu an toàn, làm việc nhóm theo thời gian thực không lo mất dữ liệu.', icon: 'HardDrive' },
      { title: 'Google Meet Họp Trực Tuyến', desc: 'Tổ chức cuộc họp video chuẩn HD từ 100 đến 500 người tham gia, tính năng chống ồn thông minh AI, giơ tay phát biểu và ghi lại cuộc họp trực tiếp vào Drive.', icon: 'Zap' },
      { title: 'Bảo Mật & Quản Trị Cấp Doanh Nghiệp', desc: 'Bảo vệ tài khoản với xác thực 2 bước (2FA), chính sách mật khẩu mạnh, quản lý thiết bị di động (MDM) và tính năng lưu trữ tuân thủ pháp lý Google Vault.', icon: 'ShieldCheck' },
      { title: 'Hóa Đơn VAT Điện Tử Hợp Pháp', desc: 'Cung cấp đầy đủ hợp đồng kinh tế và hóa đơn GTGT hợp lệ tại Việt Nam, giúp doanh nghiệp hạch toán chi phí thuế dễ dàng.', icon: 'FileText' },
      { title: 'Cài Đặt & Hỗ Trợ Kỹ Thuật Trọn Gói', desc: 'Kỹ sư Uni Creation trực tiếp cài đặt các bản ghi MX, SPF, DKIM, DMARC và hỗ trợ xử lý sự cố 24/7 bằng tiếng Việt.', icon: 'Headphones' }
    ],
    tiers: [
      {
        name: 'Business Starter',
        price: '185.000 đ',
        period: 'người dùng/tháng',
        highlightSpec: '30 GB Cloud Drive · Họp Meet 100 người',
        features: [
          'Email doanh nghiệp theo tên miền riêng (Gmail)',
          '30 GB Dung lượng lưu trữ đám mây cho mỗi người dùng',
          'Họp trực tuyến Google Meet lên đến 100 người tham gia',
          'Bộ ứng dụng văn phòng Docs, Sheets, Slides, Forms',
          'Bảo mật chống lừa đảo (phishing) và phần mềm độc hại',
          'Quản lý thiết bị cơ bản & Bảng điều khiển quản trị Admin',
          'Hỗ trợ cài đặt DNS (MX, SPF, DKIM) trọn gói',
          'Xuất hóa đơn VAT điện tử đầy đủ'
        ]
      },
      {
        name: 'Business Standard',
        price: '340.000 đ',
        period: 'người dùng/tháng',
        popular: true,
        badge: 'Phổ Biến Nhất',
        highlightSpec: '2 TB (2.000 GB) Cloud Drive · Ghi âm Meet 150 người',
        features: [
          'Email doanh nghiệp chuyên nghiệp theo tên miền',
          '2 TB (2.000 GB) Dung lượng lưu trữ trên Google Drive',
          'Họp trực tuyến Meet lên đến 150 người kèm tính năng ghi âm',
          'Bộ nhớ dùng chung cho đội ngũ công ty (Shared Drives)',
          'Bộ ứng dụng văn phòng đầy đủ cộng tác thời gian thực',
          'Kiểm soát bảo mật nâng cao và quản lý thiết bị di động',
          'Miễn phí chuyển toàn bộ dữ liệu từ hệ thống mail cũ',
          'Hỗ trợ kỹ thuật tiếng Việt 24/7'
        ]
      },
      {
        name: 'Business Plus',
        price: '560.000 đ',
        period: 'người dùng/tháng',
        highlightSpec: '5 TB (5.000 GB) Cloud Drive · Google Vault · Meet 250 người',
        features: [
          'Email doanh nghiệp cao cấp với eDiscovery và lưu trữ',
          '5 TB (5.000 GB) Dung lượng đám mây cho mỗi người dùng',
          'Họp video Meet 250 người kèm ghi âm và điểm danh tự động',
          'Google Vault để lưu trữ, tìm kiếm và tuân thủ pháp lý',
          'Quản lý thiết bị di động nâng cao (Advanced Endpoint Management)',
          'Hỗ trợ kỹ thuật ưu tiên 24/7 từ chuyên gia Google Workspace',
          'Xuất hóa đơn VAT điện tử hợp pháp 100%'
        ]
      },
      {
        name: 'Enterprise VIP',
        price: 'Liên hệ tư vấn',
        period: 'may đo doanh nghiệp',
        highlightSpec: 'Dung lượng tùy chỉnh không giới hạn · Bảo mật DLP cấp cao',
        features: [
          'Dung lượng lưu trữ đám mây tùy biến hoặc không giới hạn',
          'Họp trực tuyến Google Meet lên tới 500 người tham gia',
          'Chống thất thoát dữ liệu (DLP) cho Gmail và Drive',
          'Mã hóa S/MIME bảo vệ nội dung email nhạy cảm',
          'Trung tâm bảo mật chuyên sâu Security Center',
          'Kỹ sư cao cấp hỗ trợ 1:1 và đào tạo nội bộ doanh nghiệp'
        ]
      }
    ],
    specsTable: {
      headers: ['Tính Năng So Sánh', 'Business Starter', 'Business Standard', 'Business Plus', 'Enterprise'],
      rows: [
        { label: 'Dung lượng lưu trữ Drive', values: ['30 GB / người', '2 TB (2.000 GB) / người', '5 TB (5.000 GB) / người', 'Không giới hạn / Tùy chỉnh'] },
        { label: 'Email theo tên miền', values: ['Có (Gmail)', 'Có (Gmail)', 'Có (Gmail)', 'Có (Gmail)'] },
        { label: 'Số người tham gia Google Meet', values: ['100 người', '150 người', '250 người', '500 người'] },
        { label: 'Ghi âm cuộc họp Meet', values: ['Không', 'Có (Lưu vào Drive)', 'Có (Lưu vào Drive + Điểm danh)', 'Có (Khử ồn AI + Dịch trực tiếp)'] },
        { label: 'Bộ nhớ dùng chung (Shared Drive)', values: ['Không', 'Có', 'Có', 'Có'] },
        { label: 'Google Vault (Lưu trữ pháp lý)', values: ['Không', 'Không', 'Có', 'Có'] },
        { label: 'Quản lý thiết bị di động (MDM)', values: ['Cơ bản', 'Cơ bản', 'Nâng cao', 'Doanh nghiệp (Enterprise)'] },
        { label: 'Hóa đơn VAT tại Việt Nam', values: ['Có 100%', 'Có 100%', 'Có 100%', 'Có 100%'] }
      ]
    },
    guarantees: [
      { title: 'Bản Quyền Chính Hãng Google', desc: 'Uni Creation cung cấp giấy phép Google Workspace chính ngạch, đảm bảo an toàn tuyệt đối cho tài khoản doanh nghiệp.' },
      { title: 'Chuyển Đổi Dữ Liệu Miễn Phí', desc: 'Đội ngũ kỹ thuật hỗ trợ đồng bộ email, danh bạ và thư mục từ hệ thống cũ sang Google không làm mất một lá thư nào.' },
      { title: 'Hỗ Trợ Kỹ Thuật Tiếng Việt 24/7', desc: 'Tổng đài và kênh kỹ thuật xử lý sự cố nhanh chóng, hướng dẫn quản trị viên cấu hình chi tiết.' }
    ],
    faqs: [
      {
        question: 'Mua Google Workspace qua Uni Creation có lợi ích gì so với mua trực tiếp trên Google?',
        answer: 'Khi mua qua Uni Creation: Bạn được xuất hóa đơn đỏ VAT điện tử hợp pháp tại Việt Nam để hạch toán chi phí doanh nghiệp (mua trực tiếp chỉ có hóa đơn quốc tế khó giải trình thuế); được đội ngũ kỹ sư hỗ trợ cài đặt toàn bộ bản ghi DNS chuẩn; được hỗ trợ di chuyển dữ liệu email cũ; và có đội ngũ hỗ trợ kỹ thuật bằng tiếng Việt 24/7 qua điện thoại và Zalo.'
      },
      {
        question: 'Tôi có thể mua số lượng tài khoản theo nhu cầu thực tế không?',
        answer: 'Có. Bạn có thể đăng ký từ 1 tài khoản trở lên và dễ dàng thêm mới hoặc giảm số lượng người dùng bất cứ lúc nào theo quy mô nhân sự của công ty.'
      },
      {
        question: 'Tôi có thể tạo email bí danh (Alias) miễn phí không?',
        answer: 'Có. Mỗi tài khoản người dùng có thể tạo tới 30 email bí danh miễn phí (ví dụ: info@, contact@, sale@ cùng trỏ về hộp thư của một nhân viên) mà không cần phải trả thêm phí bản quyền.'
      }
    ]
  },

  'dich-vu-email-hosting': {
    slug: 'dich-vu-email-hosting',
    title: 'Dịch Vụ Email Hosting – Email Doanh Nghiệp Theo Tên Miền Riêng',
    category: 'Email doanh nghiệp',
    tagline: 'Hạ Tầng SSD Enterprise RAID 10 · MailChannels Chống Spam · Bảo Đảm Vào Hộp Thư Đến Inbox 99.9%',
    shortDesc: 'Dịch vụ Email Hosting chất lượng cao với tên miền riêng, chi phí tiết kiệm vượt trội, bảo mật mã hóa SSL và hệ thống Relay định tuyến bảo đảm thư vào Inbox.',
    longDesc: 'Dịch vụ Email Hosting tại Uni Creation là giải pháp email chuyên nghiệp theo tên miền riêng (user@tencongty.com) được thiết kế riêng cho các doanh nghiệp muốn sở hữu hệ thống thư điện tử bảo mật, uy tín mà vẫn tối ưu chi phí vận hành. Hệ thống chạy trên cụm máy chủ Dell Enterprise chuyên dụng với ổ cứng SSD Enterprise RAID-10, tích hợp công nghệ lọc thư rác SpamAssassin, quét virus ClamAV và cơ chế MailChannels Relay giúp email gửi đi luôn đạt tỷ lệ vào thẳng hộp thư đến (Inbox) cao nhất. Hỗ trợ giao diện Webmail tiếng Việt hiện đại và đồng bộ hoàn hảo trên Outlook, Thunderbird, điện thoại iPhone và Android.',
    highlights: [
      'Chi phí tiết kiệm vượt trội, tính theo dung lượng gói thay vì từng tài khoản',
      'Tên miền riêng chuyên nghiệp dạng hotro@tencongty.com',
      'Hệ thống IP sạch được định tuyến qua MailChannels đảm bảo vào Inbox 99.9%',
      'Cấu hình đầy đủ bản ghi xác thực SPF, DKIM, DMARC chống giả mạo email',
      'Giao diện Webmail hiện đại, tương thích 100% với Outlook và ứng dụng Mail di động',
      'Bảng điều khiển quản trị trực quan: tự do tạo, đổi mật khẩu và phân bổ dung lượng'
    ],
    techFeatures: [
      { title: 'Đảm Bảo Vào Inbox Với MailChannels', desc: 'Toàn bộ email gửi đi được định tuyến qua cụm máy chủ Relay uy tín của MailChannels, lọc sạch thư rác và đảm bảo tỷ lệ vào Inbox người nhận lên tới 99.9%.', icon: 'Mail' },
      { title: 'Xác Thực Bảo Mật SPF, DKIM, DMARC', desc: 'Được thiết lập chuẩn quốc tế giúp các nhà cung cấp email lớn như Gmail, Yahoo, Microsoft nhận diện máy chủ uy tín, chống giả mạo thương hiệu.', icon: 'ShieldCheck' },
      { title: 'Quét Virus ClamAV & Anti-Spam', desc: 'Hệ thống tự động lọc và cách ly các email chứa virus, mã độc hoặc liên kết lừa đảo trước khi chúng tiếp cận hộp thư nhân viên.', icon: 'Lock' },
      { title: 'Webmail Hiện Đại & Đồng Bộ Di Động', desc: 'Giao diện webmail mượt mà, hỗ trợ giao thức IMAP/POP3/SMTP với mã hóa SSL/TLS, đồng bộ danh bạ và lịch trên mọi thiết bị.', icon: 'Globe' },
      { title: 'Lưu Trữ SSD Enterprise RAID 10', desc: 'Máy chủ Dell chuyên dụng với ổ cứng SSD Enterprise RAID-10 đảm bảo khả năng truy xuất email nhanh chóng và an toàn tuyệt đối.', icon: 'HardDrive' },
      { title: 'Sao Lưu Dữ Liệu Tự Động Định Kỳ', desc: 'Tự động tạo bản sao lưu định kỳ giúp bảo toàn toàn bộ thư từ và thông tin giao dịch quan trọng của doanh nghiệp.', icon: 'RefreshCw' }
    ],
    tiers: [
      {
        name: 'Email Host 1',
        price: '120.000 đ',
        period: 'tháng',
        highlightSpec: '5 Hộp thư · 10 GB SSD Enterprise',
        features: [
          '5 Tài khoản Email theo tên miền riêng',
          '10 GB Dung lượng lưu trữ SSD Enterprise',
          'Giao diện Webmail tiếng Việt + IMAP / POP3',
          'Định tuyến MailChannels bảo đảm vào Inbox',
          'Cài đặt đầy đủ bản ghi SPF, DKIM, DMARC',
          'Bảo mật SSL mã hóa toàn bộ kết nối',
          'Hỗ trợ cài đặt trên máy tính & điện thoại',
          'Hỗ trợ kỹ thuật 24/7'
        ]
      },
      {
        name: 'Email Host 2',
        price: '220.000 đ',
        period: 'tháng',
        popular: true,
        badge: 'Khuyên Dùng',
        highlightSpec: '15 Hộp thư · 25 GB SSD Enterprise',
        features: [
          '15 Tài khoản Email theo tên miền riêng',
          '25 GB Dung lượng lưu trữ SSD Enterprise',
          'Tự do phân bổ dung lượng cho từng tài khoản',
          'Định tuyến MailChannels bảo đảm vào Inbox 99.9%',
          'Bộ lọc thư rác SpamAssassin & Quét virus ClamAV',
          'Bảo mật SSL mã hóa toàn diện',
          'Không giới hạn email chuyển tiếp (Forwarder)',
          'Sao lưu dữ liệu định kỳ tự động'
        ]
      },
      {
        name: 'Email Host 3',
        price: '380.000 đ',
        period: 'tháng',
        highlightSpec: '30 Hộp thư · 50 GB SSD Enterprise',
        features: [
          '30 Tài khoản Email theo tên miền riêng',
          '50 GB Dung lượng lưu trữ SSD Enterprise',
          'Tự do phân bổ dung lượng cho từng tài khoản',
          'Hệ thống IP gửi mail sạch, uy tín hàng đầu',
          'Bộ lọc Anti-Spam & Anti-Virus cao cấp',
          'Không giới hạn bí danh email (Email Alias)',
          'Hỗ trợ di chuyển dữ liệu email cũ miễn phí',
          'Sao lưu dữ liệu định kỳ tự động'
        ]
      },
      {
        name: 'Email Server VIP',
        price: '750.000 đ',
        period: 'tháng',
        highlightSpec: 'Không giới hạn hộp thư · 150 GB SSD · IP Riêng',
        features: [
          'Không giới hạn số lượng tài khoản Email',
          '150 GB Dung lượng SSD Enterprise',
          '1 Địa chỉ IPv4 gửi mail chuyên dụng độc lập',
          'Máy chủ Email Server riêng biệt độc lập',
          'Bảng điều khiển quản trị chuyên sâu toàn quyền',
          'Không giới hạn số lượng tên miền sử dụng',
          'Kỹ sư hệ thống hỗ trợ 1:1 trọn đời',
          'Hỗ trợ xuất hóa đơn VAT điện tử'
        ]
      }
    ],
    specsTable: {
      headers: ['Thông Số', 'Email Host 1', 'Email Host 2', 'Email Host 3', 'Email Server VIP'],
      rows: [
        { label: 'Số lượng hộp thư', values: ['5 Hộp thư', '15 Hộp thư', '30 Hộp thư', 'Không giới hạn'] },
        { label: 'Dung lượng lưu trữ', values: ['10 GB SSD', '25 GB SSD', '50 GB SSD', '150 GB SSD Enterprise'] },
        { label: 'IP Gửi mail', values: ['IP Cụm Relay', 'IP Cụm Relay MailChannels', 'IP Cụm Relay MailChannels', '1 IP Dedicated Riêng'] },
        { label: 'Giao thức hỗ trợ', values: ['Webmail / POP3 / IMAP', 'Webmail / POP3 / IMAP', 'Webmail / POP3 / IMAP', 'Webmail / POP3 / IMAP / SMTP'] },
        { label: 'Xác thực DNS', values: ['SPF, DKIM, DMARC', 'SPF, DKIM, DMARC', 'SPF, DKIM, DMARC', 'SPF, DKIM, DMARC'] },
        { label: 'Bảo mật kết nối', values: ['SSL / TLS', 'SSL / TLS', 'SSL / TLS', 'SSL / TLS'] }
      ]
    },
    faqs: [
      {
        question: 'Email Hosting khác gì so với Email Google Workspace?',
        answer: 'Email Hosting là máy chủ email do Uni Creation vận hành trên hạ tầng SSD Enterprise. Điểm mạnh vượt trội của Email Hosting là chi phí tính trọn gói theo dung lượng thay vì tính phí theo từng người dùng như Google Workspace. Ví dụ: gói Email Host 2 giá 220.000đ/tháng đã hỗ trợ tới 15 người dùng, giúp doanh nghiệp tiết kiệm hàng chục triệu đồng mỗi năm.'
      },
      {
        question: 'Email gửi đi có bị rơi vào mục Spam/Rác không?',
        answer: 'Uni Creation sử dụng hệ thống Relay định tuyến cao cấp qua MailChannels và cấu hình chuẩn 100% các bản ghi nhận diện SPF, DKIM, DMARC, giúp IP gửi mail luôn đạt điểm tín nhiệm cao nhất và tỷ lệ thư vào thẳng hộp thư đến (Inbox) đạt trên 99%.'
      },
      {
        question: 'Tôi có thể cài đặt tài khoản email trên điện thoại và Outlook không?',
        answer: 'Có. Email Hosting hỗ trợ đầy đủ các giao thức chuẩn IMAP, POP3 và SMTP có bảo mật SSL. Kỹ thuật viên Uni Creation sẽ cung cấp tài liệu hướng dẫn và hỗ trợ Ultraviewer/Anydesk cài đặt lên Outlook máy tính hoặc điện thoại iPhone/Android cho nhân viên của bạn.'
      }
    ]
  },

  'nhan-dien-thuong-hieu': {
    slug: 'nhan-dien-thuong-hieu',
    title: 'Bộ Nhận Diện Thương Hiệu & Thiết Kế Logo',
    category: 'Thương hiệu',
    shortDesc: 'Thiết kế logo độc quyền và hệ thống nhận diện thương hiệu chuyên nghiệp, giúp khách hàng nhận biết và tin tưởng doanh nghiệp ngay từ cái nhìn đầu tiên.',
    longDesc: 'Hệ thống nhận diện thương hiệu là sự diễn đạt bản sắc của một công ty bằng hình ảnh thông qua việc sử dụng văn từ và các biểu tượng đồ họa. Uni Creation giúp bạn sở hữu một bộ nhận diện thương hiệu bài bản, chuẩn mực, từ logo, card visit, phong bì thư, tài liệu bán hàng cho đến giao diện website đồng bộ màu sắc.',
    highlights: [
      '100% Ý tưởng thiết kế độc bản, không sao chép mẫu có sẵn',
      'Đội ngũ Designer tốt nghiệp các trường mỹ thuật hàng đầu',
      'Chỉnh sửa không giới hạn cho đến khi khách hàng hoàn toàn ưng ý',
      'Bàn giao đầy đủ file vector gốc (AI, EPS, SVG, PNG) phục vụ in ấn'
    ],
    tiers: [
      {
        name: 'Gói Logo Khởi Nghiệp',
        price: '1.500.000 đ',
        period: 'trọn gói',
        features: ['3 Phương án thiết kế logo độc bản', 'Chỉnh sửa theo yêu cầu đến khi hài lòng', 'Quy chuẩn thông số màu sắc & font chữ', 'Bàn giao file vector gốc in ấn']
      },
      {
        name: 'Gói Nhận Diện Văn Phòng',
        price: '3.500.000 đ',
        period: 'trọn gói',
        popular: true,
        features: ['Thiết kế Logo chuyên nghiệp', 'Thiết kế Card visit, Phong bì thư A4/A5', 'Kẹp file (Folder), Tiêu đề thư (Letterhead)', 'Thẻ nhân viên & Đồng phục', 'Cẩm nang hướng dẫn sử dụng Logo']
      },
      {
        name: 'Gói Nhận Diện Toàn Diện VIP',
        price: '6.500.000 đ',
        period: 'trọn gói',
        features: ['Hệ thống nhận diện thương hiệu đầy đủ', 'Thiết kế Profile doanh nghiệp 12-16 trang', 'Bộ banner truyền thông mạng xã hội', 'Bảo hộ thương hiệu & Tra cứu SHTT', 'Đồng bộ giao diện Website theo chuẩn màu']
      }
    ],
    faqs: [
      {
        question: 'Thời gian hoàn thành thiết kế logo là bao lâu?',
        answer: 'Uni Creation gửi 3-5 phương án phác thảo đầu tiên trong vòng từ 2 - 3 ngày làm việc để khách hàng lựa chọn và góp ý chỉnh sửa.'
      }
    ]
  },

  'viet-noi-dung-website': {
    slug: 'viet-noi-dung-website',
    title: 'Viết Nội Dung Website & Dịch Vụ Content SEO',
    category: 'Nội dung',
    shortDesc: 'Dịch vụ viết bài chuẩn SEO, chăm sóc bài viết website và fanpage trọn gói giúp từ khóa tăng hạng Google và thu hút khách hàng tiềm năng.',
    longDesc: 'Không nằm ngoài xu hướng sử dụng dịch vụ thuê ngoài trên thế giới, các doanh nghiệp Việt Nam đang tiếp cận ngày một nhiều với các dịch vụ content chuyên nghiệp. Uni Creation cung cấp dịch vụ viết bài chuẩn SEO 100% Unique, nghiên cứu từ khóa cẩn thận, hành văn lôi cuốn và thiết kế ảnh minh họa đồng bộ nhận diện.',
    highlights: [
      'Nội dung chuẩn SEO Onpage 100%, vượt qua mọi thuật toán kiểm tra Google',
      'Độ dài bài viết phong phú từ 800 - 2500 từ theo đúng phễu bán hàng',
      'Thiết kế hình ảnh minh họa độc quyền cho từng bài viết',
      'Hỗ trợ đăng bài trực tiếp lên website và tối ưu thẻ Meta/URL'
    ],
    tiers: [
      {
        name: 'Gói Bài Viết Khởi Động',
        price: '1.200.000 đ',
        period: 'gói 10 bài',
        features: ['10 Bài viết chuẩn SEO Onpage 800 - 1000 từ', 'Tối ưu tiêu đề, H1, H2, Meta Description', '2 Ảnh minh họa chuẩn thiết kế mỗi bài', 'Unique 100% không trùng lặp']
      },
      {
        name: 'Gói Chăm Sóc Web Tháng',
        price: '3.000.000 đ',
        period: 'tháng (25 bài)',
        popular: true,
        features: ['25 Bài viết chuẩn SEO chuyên sâu 1000 - 1500 từ', 'Nghiên cứu bộ từ khóa ngành chi tiết', '3-4 Ảnh thiết kế gắn logo bản quyền mỗi bài', 'Đăng bài trực tiếp và định dạng đẹp mắt', 'Báo cáo thứ hạng từ khóa định kỳ']
      }
    ],
    faqs: [
      {
        question: 'Bài viết có đảm bảo không copy không?',
        answer: 'Uni Creation cam kết 100% bài viết được viết mới thủ công, kiểm tra đạo văn bằng công cụ cao cấp trước khi bàn giao cho khách hàng.'
      }
    ]
  },

  'dich-vu-quang-cao': {
    slug: 'dich-vu-quang-cao',
    title: 'Dịch Vụ Quảng Cáo Google Ads & Digital Marketing',
    category: 'Quảng cáo',
    shortDesc: 'Giải pháp Marketing tại Uni Creation sẽ giúp bạn gia tăng doanh số và phát triển thương hiệu vượt bậc. Đối tác cao cấp Google tại Việt Nam với hơn 10 năm kinh nghiệm và +2000 chiến dịch thành công.',
    longDesc: 'Dịch vụ Digital Marketing & Quảng cáo Google Ads tại Uni Creation mang đến chiến lược tiếp cận khách hàng đa kênh chuẩn xác. Từ quảng cáo từ khóa tìm kiếm (Google Search) hiển thị top đầu chỉ sau 30 phút setup, quảng cáo mua sắm Google Shopping hiển thị trực quan sản phẩm, mạng hiển thị GDN phủ sóng triệu website, đến Remarketing bám đuổi khách hàng tiềm năng, Gmail Ads, Youtube Ads, Facebook Ads và Cốc Cốc Ads. Uni Creation cam kết minh bạch 100% chi phí, hỗ trợ gắn Goal đo lường chuyển đổi thực tế cho 100% khách hàng và đội ngũ kỹ thuật viên sở hữu chứng chỉ Google Partner chính thức.',
    highlights: [
      'Đối tác cao cấp của Google tại Việt Nam - Đội ngũ > 10 năm kinh nghiệm',
      'Quảng cáo từ khóa hiển thị top đầu chỉ sau 30 phút kích hoạt',
      'Minh bạch chi phí 100% (ngân sách, số lượt nhấp chuột, hiển thị, chi phí thực)',
      'Hỗ trợ triển khai gắn Goal theo dõi chuyển đổi cho 100% khách hàng',
      'Hơn +2.000 chiến dịch quảng cáo đã quản lý thành công',
      'Tối ưu hóa điểm chất lượng (Quality Score), giảm tối đa CPC và chặn click tặc'
    ],
    tiers: [
      {
        name: 'GÓI CƠ BẢN',
        price: '20%',
        period: 'ngân sách/tháng',
        features: [
          'Dành cho khách hàng ngân sách Dưới 20 triệu/tháng',
          'Chi phí dịch vụ quảng cáo: 20%',
          'Tư vấn chiến dịch quảng cáo chuyên sâu',
          'Tư vấn tối ưu content website',
          'Tối ưu hóa tài khoản quảng cáo chuẩn Google Partner',
          'Gửi báo cáo quảng cáo định kỳ',
          'Chặn click ảo và click tặc cơ bản',
          'Cài đặt chuyển đổi theo dõi đo lường'
        ]
      },
      {
        name: 'GÓI NÂNG CAO',
        price: '15%',
        period: 'ngân sách/tháng',
        popular: true,
        features: [
          'Dành cho khách hàng ngân sách Từ 20 - 50 triệu/tháng',
          'Chi phí dịch vụ quảng cáo: 15%',
          'Tư vấn chiến dịch quảng cáo & định vị khách hàng',
          'Tư vấn content website & Landing Page tối ưu',
          'Tối ưu hóa website (tốc độ, trải nghiệm di động)',
          'Tối ưu hóa tài khoản chuyên sâu (Quality Score 8-10/10)',
          'Gửi báo cáo quảng cáo chi tiết theo tuần',
          'Tư vấn SEO Onpage miễn phí',
          'Hỗ trợ thiết kế banner quảng cáo GDN chuẩn kích thước',
          'Không giới hạn số lượng từ khóa đấu thầu'
        ]
      },
      {
        name: 'GÓI ĐẶC BIỆT',
        price: '10%',
        period: 'ngân sách/tháng',
        features: [
          'Dành cho khách hàng ngân sách Trên 50 triệu/tháng',
          'Chi phí dịch vụ quảng cáo: 10%',
          'Tư vấn chiến dịch quảng cáo đa kênh cao cấp',
          'Tư vấn content & chiến lược nội dung phễu',
          'Tối ưu hóa website toàn diện & A/B testing',
          'Tối ưu tài khoản & chiến lược đấu thầu thông minh Smart Bidding',
          'Gửi báo cáo theo tuần & Realtime Dashboard 24/7',
          'Tư vấn SEO Onpage & Offpage miễn phí',
          'Hỗ trợ thiết kế banner tĩnh & động không giới hạn',
          'Không giới hạn số lượng từ khóa',
          'Đa dạng kênh quảng cáo (Search, GDN, Shopping, YouTube, Remarketing)',
          'Tư vấn Marketing tổng thể đa kênh toàn diện',
          'Kỹ thuật viên VIP hỗ trợ 1:1 trực tiếp 24/7'
        ]
      }
    ],
    faqs: [
      {
        question: 'Ngân sách quảng cáo thanh toán như thế nào? Uni Creation có thu phí ẩn không?',
        answer: 'Tại Uni Creation, 100% chi phí quảng cáo hoàn toàn minh bạch. Bạn có thể thanh toán trực tiếp ngân sách quảng cáo cho Google bằng thẻ Visa/Mastercard của mình, hoặc Uni Creation hỗ trợ nạp ngân sách và xuất hóa đơn VAT điện tử đầy đủ theo hợp đồng. Uni Creation chỉ thu phí quản trị theo tỷ lệ phần trăm thỏa thuận (20%, 15% hoặc 10%), tuyệt đối không có chi phí ẩn.'
      },
      {
        question: 'Sau bao lâu kể từ khi ký hợp đồng thì quảng cáo xuất hiện trên Google?',
        answer: 'Chiến dịch quảng cáo từ khóa Google Search thông thường sẽ được duyệt và hiển thị ở vị trí top đầu chỉ sau 30 phút đến vài giờ sau khi hoàn tất thiết lập tài khoản và nạp ngân sách.'
      },
      {
        question: 'Uni Creation xử lý vấn đề click tặc, click ảo như thế nào?',
        answer: 'Chúng tôi sử dụng hệ thống lọc IP tự động và loại trừ địa chỉ IP đáng ngờ, cài đặt đối sánh từ khóa thông minh, loại trừ mạng tìm kiếm spam, đồng thời phân tích hành vi người dùng trên Google Analytics 4 để loại bỏ các lượt truy cập không tạo ra giá trị chuyển đổi.'
      },
      {
        question: 'Gắn Goal theo dõi chuyển đổi là gì và tại sao lại quan trọng?',
        answer: 'Gắn Goal (Conversion Tracking) là việc cài đặt mã theo dõi hành động của khách hàng sau khi click quảng cáo: gọi điện hotline, gửi form liên hệ, chat Zalo, thêm vào giỏ hàng hoặc hoàn tất đơn hàng. Uni Creation hỗ trợ cài đặt miễn phí 100% giúp bạn biết chính xác mỗi đồng chi phí bỏ ra đem về bao nhiêu khách hàng thực tế.'
      },
      {
        question: 'Tôi có được xem số liệu thống kê quảng cáo thực tế không?',
        answer: 'Có. Khách hàng được cấp quyền xem trực tiếp tài khoản Google Ads hoặc nhận báo cáo định kỳ theo tuần/tháng với các số liệu minh bạch: Lượt hiển thị (Impressions), Lượt click (Clicks), Tỷ lệ CTR, Giá thầu trung bình (CPC), Điểm chất lượng, và Tỷ lệ chuyển đổi thành công.'
      }
    ]
  },

  'dich-vu-facebook': {
    slug: 'dich-vu-facebook',
    title: 'Dịch Vụ Facebook Marketing & Chăm Sóc Fanpage',
    category: 'Quảng cáo',
    shortDesc: 'Giải pháp quản trị fanpage chuyên nghiệp, tăng tương tác tự nhiên và triển khai chiến dịch quảng cáo Facebook Ads tối ưu chuyển đổi.',
    longDesc: 'Dịch vụ Facebook của Uni Creation giúp doanh nghiệp xây dựng kênh bán hàng mạng xã hội uy tín. Quy trình thực hiện chuyên nghiệp: khảo sát mục tiêu, lên kế hoạch nội dung, thiết kế banner cuốn hút, chạy quảng cáo nhắm đúng đối tượng tiềm năng và chăm sóc khách hàng.',
    highlights: [
      'Xây dựng nội dung và hình ảnh bài đăng fanpage chuyên nghiệp',
      'Chạy quảng cáo Facebook Ads nhắm đúng độ tuổi, vị trí địa lý, hành vi',
      'Setup chatbot tự động trả lời tin nhắn và bình luận 24/7',
      'Cam kết số lượng tương tác, lượt tin nhắn và chuyển đổi'
    ],
    tiers: [
      {
        name: 'Gói Chăm Sóc Fanpage Cơ Bản',
        price: '2.500.000 đ',
        period: 'tháng',
        features: ['15 Bài viết chất lượng kèm ảnh thiết kế', 'Thiết kế Cover & Avatar chuẩn nhận diện', 'Cài đặt tin nhắn tự động', 'Tăng tương tác tự nhiên cho trang']
      },
      {
        name: 'Gói Facebook Ads Bán Hàng',
        price: '4.500.000 đ',
        period: 'tháng + ngân sách ads',
        popular: true,
        features: ['25 Bài viết và video ngắn Reels/TikTok', 'Setup và tối ưu chiến dịch quảng cáo tin nhắn/chuyển đổi', 'Target đối tượng khách hàng mục tiêu chuẩn xác', 'Tối ưu chi phí mỗi tin nhắn/lead']
      }
    ],
    faqs: [
      {
        question: 'Tôi có cần cung cấp quyền quản trị viên Fanpage không?',
        answer: 'Chỉ cần cấp quyền Biên tập viên (Editor) hoặc Nhà quảng cáo (Advertiser) cho tài khoản công ty của Uni Creation, bạn vẫn là Quản trị viên cao nhất nắm toàn quyền sở hữu Fanpage.'
      }
    ]
  },

  'thiet-ke-website-song-ngu': {
    slug: 'thiet-ke-website-song-ngu',
    title: 'Thiết Kế Website Song Ngữ & Đa Ngôn Ngữ',
    category: 'Thiết kế Web',
    shortDesc: 'Giải pháp thiết kế website hỗ trợ song ngữ (Tiếng Anh, Tiếng Trung, Tiếng Nhật, Tiếng Hàn) chuẩn SEO quốc tế và tối ưu thẻ hreflang.',
    longDesc: 'Dịch vụ thiết kế website song ngữ và đa ngôn ngữ tại Uni Creation giúp doanh nghiệp vươn tầm thị trường toàn cầu. Sử dụng công nghệ phân chia thư mục con (/en/), tên miền phụ hoặc đa tên miền kết hợp thẻ hreflang giúp tối ưu hóa công cụ tìm kiếm tại từng quốc gia đích. Hệ thống chuyển đổi ngôn ngữ mượt mà, lưu trữ dữ liệu bản địa hóa và giao diện tương thích 100% đa thiết bị.',
    highlights: [
      'Tích hợp giải pháp WPML, Polylang hoặc TranslatePress chuyên sâu',
      'Cấu trúc URL chuẩn SEO quốc tế: domain.com/en/ hoặc en.domain.com',
      'Khai báo đầy đủ thẻ hreflang, sitemap đa ngôn ngữ cho Googlebot',
      'Tùy biến tiền tệ, định dạng ngày tháng và kênh hotline theo khu vực'
    ],
    tiers: [
      {
        name: 'Gói Song Ngữ Cơ Bản',
        price: 'Từ 3.500.000 đ',
        period: 'trọn gói',
        features: ['Website 2 ngôn ngữ (Việt - Anh)', 'Google Dịch tự động có hiệu chỉnh', 'Tối ưu URL thân thiện', 'Bảo hành trọn đời']
      },
      {
        name: 'Gói Đa Ngôn Ngữ Chuyên Sâu',
        price: 'Từ 6.000.000 đ',
        period: 'trọn gói',
        popular: true,
        features: ['Hỗ trợ 3 - 5 ngôn ngữ (Anh, Trung, Nhật, Hàn)', 'Mã nguồn WPML bản quyền vĩnh viễn', 'Dịch thuật thủ công chính xác 100%', 'Tối ưu hreflang và Core Web Vitals', 'Bàn giao 100% full source code']
      }
    ],
    faqs: [
      {
        question: 'Website song ngữ có bị Google phạt trùng lặp nội dung không?',
        answer: 'Không. Uni Creation cấu hình thẻ hreflang chuẩn quốc tế cho từng phiên bản ngôn ngữ, giúp Google nhận diện chính xác từng đối tượng độc giả theo quốc gia và không bị phạt trùng lặp.'
      }
    ]
  },

  'dich-vu-thiet-ke-website-gia-re-tai-ha-noi': {
    slug: 'dich-vu-thiet-ke-website-gia-re-tai-ha-noi',
    title: 'Dịch Vụ Thiết Kế Website Giá Rẻ Tại Hà Nội',
    category: 'Thiết kế Web',
    shortDesc: 'Thiết kế website uy tín, chuyên nghiệp tại Hà Nội với chi phí tiết kiệm từ 2.500.000 đ, bàn giao full mã nguồn và bảo hành trọn đời.',
    longDesc: 'Uni Creation có trụ sở chính tại Tầng 6, Số 303 Vũ Tông Phan, Thanh Xuân, Hà Nội. Với hơn 10 năm kinh nghiệm, chúng tôi tự hào mang đến cho các doanh nghiệp, cửa hàng và cá nhân khởi nghiệp tại thủ đô giải pháp thiết kế website chuẩn SEO giá rẻ nhất nhưng vẫn đảm bảo chất lượng công nghệ cao, bàn giao 100% source code và bảo hành kỹ thuật trọn đời.',
    highlights: [
      'Trụ sở tại Hà Nội, ký kết hợp đồng và tư vấn trực tiếp tận nơi',
      'Giá trọn gói chỉ từ 2.500.000 đ – Không chi phí ẩn',
      'Tặng tên miền quốc tế .com/.net và Hosting NVMe 1 năm',
      'Hướng dẫn khai báo Bộ Công Thương miễn phí'
    ],
    tiers: [
      {
        name: 'Gói Hà Nội Startup',
        price: '2.500.000 đ',
        period: 'trọn gói',
        features: ['Chọn từ kho 1.000+ mẫu giao diện', 'Bàn giao 1 - 2 ngày', 'Tặng tên miền & Hosting NVMe', 'Bảo hành trọn đời']
      },
      {
        name: 'Gói Hà Nội Doanh Nghiệp',
        price: '4.500.000 đ',
        period: 'trọn gói',
        popular: true,
        features: ['Thiết kế tùy biến theo nhận diện', 'Chuẩn SEO Onpage chuyên sâu', 'Bàn giao 100% Full Source Code', 'Tặng voucher chạy Ads 350.000 đ']
      }
    ],
    faqs: [
      {
        question: 'Khách hàng tại Hà Nội có được hỗ trợ trực tiếp không?',
        answer: 'Chuyên viên Uni Creation sẵn sàng đến tận văn phòng hoặc gặp gỡ trực tiếp tại Hà Nội để tư vấn, demo giao diện và ký kết hợp đồng pháp nhân.'
      }
    ]
  },

  'dich-vu-thiet-ke-website-tai-thai-binh': {
    slug: 'dich-vu-thiet-ke-website-tai-thai-binh',
    title: 'Dịch Vụ Thiết Kế Website Tại Thái Bình',
    category: 'Thiết kế Web',
    shortDesc: 'Giải pháp số hóa và thiết kế website chuẩn SEO cho doanh nghiệp, cơ sở sản xuất và hộ kinh doanh tại Thái Bình.',
    longDesc: 'Uni Creation đồng hành cùng cộng đồng doanh nghiệp và làng nghề tại tỉnh Thái Bình trong công cuộc chuyển đổi số. Thiết kế website bán hàng, giới thiệu công ty, nông sản, cơ khí, may mặc với giao diện đẹp mắt, dễ quản trị, hỗ trợ kết nối khách hàng toàn quốc.',
    highlights: [
      'Giao diện thân thiện, chuẩn di động 100%',
      'Hỗ trợ đào tạo nhân sự sử dụng thành thạo CMS',
      'Bàn giao đầy đủ mã nguồn và cơ sở dữ liệu',
      'Hỗ trợ kỹ thuật 24/7 từ xa qua Ultraviewer/Zalo'
    ],
    tiers: [
      {
        name: 'Gói Thái Bình Tiết Kiệm',
        price: '2.500.000 đ',
        period: 'trọn gói',
        features: ['Giao diện bán hàng / giới thiệu mẫu', 'Tặng tên miền & hosting 1 năm', 'Tích hợp nút gọi Hotline, Zalo', 'Bảo hành trọn đời']
      },
      {
        name: 'Gói Thái Bình Doanh Nghiệp',
        price: '4.500.000 đ',
        period: 'trọn gói',
        popular: true,
        features: ['Tùy biến theo nhận diện thương hiệu', 'Tối ưu Google Search tại địa phương', 'Đầy đủ chức năng giỏ hàng, liên hệ', 'Hỗ trợ thủ tục Bộ Công Thương']
      }
    ],
    faqs: [
      {
        question: 'Doanh nghiệp tại Thái Bình ký hợp đồng như thế nào?',
        answer: 'Quý khách có thể ký hợp đồng điện tử có dấu đỏ pháp nhân của Công ty CP Uni Creation Việt Nam hoặc chuyên viên sẽ gửi chuyển phát nhanh hợp đồng giấy có dấu mộc đến tận nơi.'
      }
    ]
  },

  'chi-phi-duy-tri-website-hang-nam': {
    slug: 'chi-phi-duy-tri-website-hang-nam',
    title: 'Chi Phí Duy Trì Website Hàng Năm: Minh Bạch & Tối Ưu',
    category: 'Hạ tầng máy chủ',
    shortDesc: 'Bảng kê chi tiết các khoản chi phí duy trì website hàng năm: Phí tên miền, phí hosting máy chủ, chứng chỉ SSL và chính sách bảo trì miễn phí trọn đời.',
    longDesc: 'Để một website hoạt động ổn định trên Internet, chi phí duy trì hàng năm bao gồm: Phí duy trì tên miền (đóng cho các tổ chức quản lý VNNIC hoặc quốc tế ICANN) và Phí máy chủ lưu trữ (Hosting/Cloud VPS). Tại Uni Creation, chúng tôi cam kết minh bạch 100% mọi khoản phí, không phát sinh chi phí ẩn và miễn phí 100% phí bảo trì kỹ thuật trọn đời khi khách hàng sử dụng hosting của chúng tôi.',
    highlights: [
      'Minh bạch bảng giá duy trì theo đúng niêm yết nhà nước và quốc tế',
      'Miễn phí 100% chứng chỉ bảo mật SSL trọn đời',
      'Miễn phí 100% phí bảo trì, vá lỗi phần mềm và backup dữ liệu',
      'Thông báo nhắc nhở gia hạn trước 30 ngày tránh mất tên miền'
    ],
    tiers: [
      {
        name: 'Gói Duy Trì Cơ Bản',
        price: 'Khoảng 1.280.000 đ/năm',
        period: 'năm',
        features: ['Duy trì tên miền .com (.net): 320.000 đ/năm', 'Duy trì Hosting Startup 1 NVMe: 960.000 đ/năm', 'Chứng chỉ bảo mật SSL: Miễn phí', 'Bảo trì kỹ thuật & Backup: Miễn phí trọn đời']
      },
      {
        name: 'Gói Duy Trì Doanh Nghiệp .VN',
        price: 'Khoảng 2.370.000 đ/năm',
        period: 'năm',
        popular: true,
        features: ['Duy trì tên miền quốc gia .vn: 450.000 đ/năm', 'Duy trì Hosting Enterprise NVMe: 1.920.000 đ/năm', 'Chứng chỉ SSL Doanh nghiệp: Miễn phí', 'Sao lưu tự động hàng ngày JetBackup: Miễn phí', 'Hỗ trợ kỹ thuật 24/7: Miễn phí trọn đời']
      }
    ],
    faqs: [
      {
        question: 'Nếu tôi không gia hạn đúng hạn thì website có bị mất không?',
        answer: 'Hệ thống Uni Creation gửi thông báo tự động qua Email và SMS trước 30 ngày, 15 ngày và 7 ngày. Tên miền quốc tế có thời gian ân hạn 30 ngày, sau thời gian này tên miền sẽ bị thu hồi và đưa ra đấu giá công khai.'
      }
    ]
  }
};
