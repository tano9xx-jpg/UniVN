import json
import re

with open('src/data/univn_scraped.json', 'r', encoding='utf-8') as f:
    scraped = json.load(f)

# Map collections to dictionary
collection_map = {c['id']: c for c in scraped['collections']}

# Clean and enrich themes
themes = []
for t in scraped['themes'][:36]:
    # get category names
    cat_names = [collection_map[cid]['name'] for cid in t.get('collections', []) if cid in collection_map and collection_map[cid]['slug'] not in ['tat-ca']]
    # Determine package: Startup, Pro, VIP
    pkg = 'Gói Startup'
    for cid in t.get('collections', []):
        if cid in collection_map:
            if collection_map[cid]['slug'] == 'goi-pro':
                pkg = 'Gói Pro'
            elif collection_map[cid]['slug'] == 'cac-du-an-vip':
                pkg = 'Gói VIP'

    # Extract demo URL from content if any
    demo_match = re.search(r'href=[\"\'](http[s]?://[^\"\']+)[\"\'][^>]*>Xem demo', t.get('content', ''))
    demo_url = demo_match.group(1) if demo_match else f"https://demo.univn.vn/{t['slug']}"

    # Extract image url if any
    img_match = re.search(r'src=[\"\'](https://univn\.vn/wp-content/uploads/[^\"\']+)[\"\']', t.get('content', ''))
    img_url = img_match.group(1) if img_match else f"https://univn.vn/wp-content/uploads/2026/09/{t['slug']}-avatar.webp"

    themes.append({
        'id': t['id'],
        'slug': t['slug'],
        'title': t['title'],
        'category': cat_names[0] if cat_names else 'Giới thiệu công ty',
        'allCategories': cat_names,
        'package': pkg,
        'demoUrl': demo_url,
        'imageUrl': img_url,
        'description': t.get('excerpt') or f"Mẫu thiết kế website {t['title']} hiện đại, tối ưu SEO, chuẩn mobile, tốc độ tải trang dưới 1 giây.",
        'features': [
            'Giao diện UI/UX chuẩn công nghệ mới',
            'Chuẩn SEO Onpage 100%',
            'Tương thích di động (Responsive 100%)',
            'Tích hợp nút gọi, Zalo, chat tư vấn',
            'Tốc độ tải nhanh, bảo mật SSL'
        ]
    })

# Format posts
posts = []
for p in scraped['posts'][:12]:
    img_m = re.search(r'src=[\"\'](https://univn\.vn/wp-content/uploads/[^\"\']+)[\"\']', p.get('content', ''))
    img_url = img_m.group(1) if img_m else "https://univn.vn/wp-content/uploads/2021/07/web-hosting-370x195.jpg"
    posts.append({
        'id': p['id'],
        'slug': p['slug'],
        'title': p['title'],
        'date': p.get('date', '')[:10] if p.get('date') else '2026-06-15',
        'excerpt': p.get('excerpt') or 'Chia sẻ kiến thức thiết kế website chuyên nghiệp và kinh nghiệm tối ưu hóa doanh thu trực tuyến.',
        'imageUrl': img_url,
        'category': 'Kiến thức Website' if 28 in p.get('categories', []) else 'Tin tức'
    })

# Write to src/data/siteData.ts
ts_content = f"""// Structured data faithfully reconstructed from univn.vn
export interface ThemeItem {{
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
}}

export interface PostItem {{
  id: number;
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  imageUrl: string;
  category: string;
}}

export interface WebPackage {{
  name: string;
  price: string;
  priceNum: number;
  badge?: string;
  popular?: boolean;
  timeDelivery: string;
  domain: string;
  storage: string;
  bandwidth: string;
  ssl: string;
  seo: string;
  responsive: string;
  banners: string;
  language: string;
  contentArticles: string;
  customization: string;
  giftVoucher: string;
  warranty: string;
  codeHandover: boolean;
  features: string[];
}}

export interface HostingPackage {{
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
}}

export const COMPANY_INFO = {{
  name: "Công ty Cổ phần Uni Creation Việt Nam",
  shortName: "Uni Creation",
  domain: "univn.vn",
  slogan: "Công ty thiết kế website chuyên nghiệp, chuẩn SEO uy tín hàng đầu",
  hotline: "0967.508.333",
  techHotline: "0373.085.333",
  adsHotline: "0373.087.333",
  cskhHotline: "0373.165.333",
  email: "info@unicreation.vn",
  techEmail: "kythuat@unicreation.vn",
  offices: [
    {{
      city: "Hà Nội",
      address: "Tầng 6, số 303 Vũ Tông Phan, Khương Đình, Q. Thanh Xuân, TP. Hà Nội",
      phone: "0967.508.333",
      isHeadquarter: true
    }},
    {{
      city: "Đà Nẵng",
      address: "41 Khuê Mỹ Đông 14, P. Khuê Mỹ, Q. Ngũ Hành Sơn, TP. Đà Nẵng",
      phone: "0373.165.333",
      isHeadquarter: false
    }},
    {{
      city: "TP. Hồ Chí Minh",
      address: "973/136 Nguyễn Ảnh Thủ, P. Tân Chánh Hiệp, Quận 12, TP. Hồ Chí Minh",
      phone: "0967.508.333",
      isHeadquarter: false
    }}
  ],
  bankAccount: {{
    bankName: "Ngân hàng TMCP Ngoại thương Việt Nam (Vietcombank)",
    branch: "Sở Giao Dịch Hà Nội",
    accountNumber: "1012895425",
    accountHolder: "CÔNG TY CỔ PHẦN UNI CREATION VIỆT NAM",
    syntaxNote: "[Mã Đơn Hàng] + [Số Điện Thoại]"
  }}
}};

export const WEB_PACKAGES: WebPackage[] = [
  {{
    name: "Gói Startup",
    price: "2.500.000 đ",
    priceNum: 2500000,
    timeDelivery: "1 - 2 ngày",
    domain: "Tặng tên miền quốc tế (.com / .net)",
    storage: "1 GB SSD Cloud tốc độ cao",
    bandwidth: "Không giới hạn",
    ssl: "Miễn phí chứng chỉ SSL",
    seo: "Tối ưu chuẩn SEO 100%",
    responsive: "Tương thích 100% PC, Tablet & Mobile",
    banners: "Thiết kế 1 Banner chuyên nghiệp",
    language: "Tích hợp Google Dịch đa ngôn ngữ",
    contentArticles: "Hỗ trợ 10 bài viết demo chuẩn",
    customization: "Hỗ trợ đổi màu sắc, logo, thông tin",
    giftVoucher: "Tặng voucher 200.000 đ khi dùng Hosting",
    warranty: "Bảo hành website trọn đời",
    codeHandover: true,
    features: [
      "Bàn giao toàn bộ mã nguồn (Source Code)",
      "Hệ thống quản trị trực quan, dễ dùng",
      "Tích hợp nút gọi nhanh, Zalo, Messenger",
      "Hướng dẫn thông báo Bộ Công Thương",
      "Hỗ trợ kỹ thuật 24/7"
    ]
  }},
  {{
    name: "Gói Pro",
    price: "4.000.000 đ",
    priceNum: 4000000,
    badge: "Phổ Biến Nhất",
    popular: true,
    timeDelivery: "3 - 5 ngày",
    domain: "Tặng tên miền quốc tế (.com / .net)",
    storage: "1.5 GB SSD Cloud tốc độ cao",
    bandwidth: "Không giới hạn",
    ssl: "Miễn phí chứng chỉ SSL",
    seo: "Tối ưu chuẩn SEO 100% chuyên sâu",
    responsive: "Tương thích hoàn hảo mọi màn hình",
    banners: "Thiết kế 1-2 Banner phong cách riêng",
    language: "Google Dịch đa ngôn ngữ",
    contentArticles: "Hỗ trợ 15 bài viết chuẩn SEO",
    customization: "Tùy biến bố cục, màu sắc theo nhận diện",
    giftVoucher: "Tặng voucher 350.000 đ khi dùng Hosting",
    warranty: "Bảo hành website trọn đời",
    codeHandover: true,
    features: [
      "Giảm 7% dịch vụ Email Google / Hosting",
      "Bàn giao toàn bộ Source Code không mã hóa",
      "Tối ưu tốc độ tải trang Google PageSpeed",
      "Tích hợp Google Analytics 4, Search Console",
      "Hướng dẫn thông báo Bộ Công Thương",
      "Cam kết hoàn tiền 100% nếu không hài lòng"
    ]
  }},
  {{
    name: "Gói VIP Thiết Kế Độc Quyền",
    price: "Liên hệ tư vấn",
    priceNum: 8000000,
    badge: "Cao Cấp & May Đo",
    timeDelivery: "Từ 7 - 10 ngày",
    domain: "Tặng tên miền (.com / .net / .info / .org)",
    storage: "3 GB - 10 GB SSD NVMe siêu tốc",
    bandwidth: "Không giới hạn",
    ssl: "Miễn phí chứng chỉ SSL cao cấp",
    seo: "Cấu trúc Schema Rich Snippets chuẩn SEO VIP",
    responsive: "Giao diện UI/UX thiết kế độc quyền 1:1",
    banners: "Bộ 2-4 Banner nhận diện cao cấp",
    language: "Tích hợp đa ngôn ngữ chuẩn bản địa (EN/VI/JP)",
    contentArticles: "Hỗ trợ 20-30 bài viết chuẩn SEO",
    customization: "Lập trình chức năng riêng biệt theo yêu cầu",
    giftVoucher: "Tặng voucher 500.000 đ dịch vụ máy chủ",
    warranty: "Bảo hành web trọn đời, backup hàng tuần",
    codeHandover: true,
    features: [
      "Giảm 10% bộ nhận diện thương hiệu",
      "Thiết kế bản vẽ Figma/UI trước khi lập trình",
      "Tích hợp cổng thanh toán trực tuyến / CRM",
      "Bàn giao mã nguồn độc quyền & tài liệu API",
      "Hỗ trợ hoàn tất thủ tục Bộ Công Thương",
      "Đội ngũ kỹ thuật trực tiếp support 1-1"
    ]
  }}
];

export const HOSTING_PACKAGES: HostingPackage[] = [
  {{
    name: "Startup 1",
    tier: "Cá nhân",
    price: "80.000 đ/tháng",
    priceMonthly: 80000,
    disk: "1.000 MB NVMe SSD",
    bandwidth: "Không giới hạn",
    mysql: "2 Cơ sở dữ liệu",
    domains: "2 Tên miền",
    subdomain: "Không giới hạn",
    ssl: "Miễn phí Let's Encrypt",
    backup: "Hàng tuần tự động"
  }},
  {{
    name: "Startup 2",
    tier: "Cá nhân",
    price: "110.000 đ/tháng",
    priceMonthly: 110000,
    disk: "1.500 MB NVMe SSD",
    bandwidth: "Không giới hạn",
    mysql: "3 Cơ sở dữ liệu",
    domains: "3 Tên miền",
    subdomain: "Không giới hạn",
    ssl: "Miễn phí Let's Encrypt",
    backup: "Hàng tuần tự động"
  }},
  {{
    name: "Startup 3",
    tier: "Cá nhân",
    price: "140.000 đ/tháng",
    priceMonthly: 140000,
    disk: "2.000 MB NVMe SSD",
    bandwidth: "Không giới hạn",
    mysql: "5 Cơ sở dữ liệu",
    domains: "5 Tên miền",
    subdomain: "Không giới hạn",
    ssl: "Miễn phí Let's Encrypt",
    backup: "Hàng tuần tự động"
  }},
  {{
    name: "Business Pro 1",
    tier: "Doanh nghiệp",
    price: "220.000 đ/tháng",
    priceMonthly: 220000,
    disk: "5.000 MB NVMe SSD Enterprise",
    bandwidth: "Không giới hạn",
    mysql: "10 Cơ sở dữ liệu",
    domains: "Không giới hạn",
    subdomain: "Không giới hạn",
    ssl: "Miễn phí SSL Doanh Nghiệp",
    backup: "Hàng ngày",
    highlight: true
  }},
  {{
    name: "Business Pro 2",
    tier: "Doanh nghiệp",
    price: "350.000 đ/tháng",
    priceMonthly: 350000,
    disk: "10.000 MB NVMe SSD Enterprise",
    bandwidth: "Không giới hạn",
    mysql: "Không giới hạn",
    domains: "Không giới hạn",
    subdomain: "Không giới hạn",
    ssl: "Miễn phí SSL Doanh Nghiệp",
    backup: "Hàng ngày"
  }},
  {{
    name: "Enterprise Cloud VPS",
    tier: "Cao cấp",
    price: "650.000 đ/tháng",
    priceMonthly: 650000,
    disk: "30 GB NVMe SSD RAID 10",
    bandwidth: "Cổng mạng 1 Gbps",
    mysql: "RAM 4GB - 2 vCPU Intel Xeon",
    domains: "IP Riêng Dedicated",
    subdomain: "Không giới hạn",
    ssl: "Full Root Access & cPanel",
    backup: "Snapshot thời gian thực"
  }}
];

export const DOMAIN_PRICING = [
  {{ ext: ".vn", setupFee: "200.000 đ", renewFee: "450.000 đ/năm", desc: "Tên miền quốc gia Việt Nam uy tín hàng đầu" }},
  {{ ext: ".com.vn", setupFee: "200.000 đ", renewFee: "350.000 đ/năm", desc: "Tên miền thương mại doanh nghiệp Việt Nam" }},
  {{ ext: ".com", setupFee: "0 đ", renewFee: "320.000 đ/năm", desc: "Tên miền quốc tế phổ biến số 1 thế giới" }},
  {{ ext: ".net", setupFee: "0 đ", renewFee: "340.000 đ/năm", desc: "Tên miền công nghệ và mạng dịch vụ" }},
  {{ ext: ".org", setupFee: "0 đ", renewFee: "350.000 đ/năm", desc: "Tên miền tổ chức và cộng đồng" }},
  {{ ext: ".edu.vn", setupFee: "200.000 đ", renewFee: "200.000 đ/năm", desc: "Tên miền giáo dục và đào tạo" }}
];

export const CLIENT_PARTNERS = [
  {{ name: "Scots English College", category: "Giáo dục quốc tế", logoText: "SCOTS ENGLISH", desc: "Hệ thống Anh ngữ tiêu chuẩn Úc tại Việt Nam" }},
  {{ name: "FPT Skillking", category: "Đào tạo Digital Marketing", logoText: "SKILLKING", desc: "Học viện đào tạo Full-stack Digital Marketer" }},
  {{ name: "Lumi Smart Home", category: "Nhà thông minh IoT", logoText: "LUMI VIETNAM", desc: "Nhà sản xuất thiết bị nhà thông minh số 1 Việt Nam" }},
  {{ name: "CIS School", category: "Trường Quốc Tế", logoText: "CIS SCHOOL", desc: "Hệ thống trường liên cấp song ngữ quốc tế" }},
  {{ name: "Gentis", category: "Y tế & Di truyền học", logoText: "GENTIS BIOTECH", desc: "Trung tâm xét nghiệm di truyền công nghệ cao" }},
  {{ name: "AMD Vietnam", category: "Công nghệ bán dẫn", logoText: "AMD VIETNAM", desc: "Tập đoàn công nghệ vi xử lý và đồ họa" }},
  {{ name: "Bảo Việt Life", category: "Tài chính Bảo hiểm", logoText: "BẢO VIỆT", desc: "Tập đoàn tài chính và bảo hiểm hàng đầu Việt Nam" }},
  {{ name: "Tân Á Đại Thành", category: "Tập đoàn công nghiệp", logoText: "TÂN Á ĐẠI THÀNH", desc: "Tập đoàn sản xuất giải pháp nguồn nước số 1" }}
];

export const CORE_FEATURES = [
  {{
    icon: "Layout",
    title: "Giao diện hiện đại & Độc đáo",
    desc: "Thiết kế chuẩn UX/UI mới, sáng tạo không giới hạn, phù hợp đặc thù từng ngành nghề kinh doanh."
  }},
  {{
    icon: "Search",
    title: "Tối ưu hóa SEO 100%",
    desc: "Cấu trúc thẻ heading, meta, schema rich snippets chuẩn Google giúp từ khóa nhanh chóng lên top tìm kiếm."
  }},
  {{
    icon: "Smartphone",
    title: "Tương thích 100% thiết bị",
    desc: "Công nghệ Responsive mượt mà trên iPhone, iPad, laptop, màn hình lớn 4K không vỡ layout."
  }},
  {{
    icon: "Zap",
    title: "Tốc độ tải trang < 1.2s",
    desc: "Tối ưu nén ảnh WebP/AVIF, mã nguồn sạch, bộ nhớ đệm LiteSpeed Cache giúp trải nghiệm người dùng tức thì."
  }},
  {{
    icon: "ShieldCheck",
    title: "Bảo mật SSL & Chống DDoS",
    desc: "Cung cấp chứng chỉ SSL miễn phí trọn đời, tường lửa Web Application Firewall bảo vệ dữ liệu."
  }},
  {{
    icon: "Code",
    title: "Bàn giao Full Source Code",
    desc: "Khách hàng sở hữu 100% mã nguồn và cơ sở dữ liệu sau khi bàn giao, không phụ thuộc hay giữ code."
  }},
  {{
    icon: "HeartHandshake",
    title: "Bảo hành website trọn đời",
    desc: "Cam kết đồng hành lâu dài, sửa lỗi kỹ thuật miễn phí trong suốt quá trình khách hàng vận hành."
  }},
  {{
    icon: "Clock",
    title: "Hỗ trợ kỹ thuật 24/7",
    desc: "Kỹ thuật viên chuyên nghiệp phản hồi nhanh trong 15 - 30 phút qua Hotline, Zalo và Email."
  }}
];

export const THEME_COLLECTIONS = [
  {{ id: "all", name: "Tất cả mẫu website", count: 186 }},
  {{ id: "gioi-thieu-cong-ty", name: "Giới thiệu công ty", count: 56 }},
  {{ id: "thuong-mai-dien-tu", name: "Thương mại điện tử & Bán hàng", count: 86 }},
  {{ id: "bat-dong-san", name: "Bất động sản", count: 11 }},
  {{ id: "noi-that", name: "Nội thất & Kiến trúc", count: 12 }},
  {{ id: "xay-dung", name: "Xây dựng & Vật liệu", count: 13 }},
  {{ id: "du-lich", name: "Du lịch & Khách sạn", count: 10 }},
  {{ id: "du-hoc", name: "Du học & Giáo dục", count: 11 }},
  {{ id: "duoc-pham", name: "Dược phẩm & Y tế", count: 9 }},
  {{ id: "spa", name: "Spa & Thẩm mỹ viện", count: 4 }},
  {{ id: "o-to", name: "Ô tô & Xe máy", count: 7 }}
];

export const THEMES_LIST: ThemeItem[] = {json.dumps(themes, ensure_ascii=False, indent=2)};

export const POSTS_LIST: PostItem[] = {json.dumps(posts, ensure_ascii=False, indent=2)};
"""

with open('src/data/siteData.ts', 'w', encoding='utf-8') as f:
    f.write(ts_content)

print('Generated src/data/siteData.ts with enriched real site data!')
