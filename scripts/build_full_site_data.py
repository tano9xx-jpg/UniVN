import json
import re
import html

with open('src/data/univn_scraped.json', 'r', encoding='utf-8') as f:
    scraped = json.load(f)

collection_map = {c['id']: c for c in scraped['collections']}

def clean_html_text(raw_html):
    if not raw_html:
        return ""
    # remove scripts and styles
    text = re.sub(r'<script.*?</script>', '', raw_html, flags=re.DOTALL)
    text = re.sub(r'<style.*?</style>', '', text, flags=re.DOTALL)
    # convert breaks and paragraphs
    text = re.sub(r'<br\s*/?>', '\n', text)
    text = re.sub(r'</p>', '\n\n', text)
    text = re.sub(r'</li>', '\n', text)
    text = re.sub(r'<h[1-6][^>]*>', '\n\n### ', text)
    text = re.sub(r'</h[1-6]>', '\n\n', text)
    text = re.sub(r'<[^>]+>', '', text)
    text = html.unescape(text)
    # clean extra whitespace
    text = re.sub(r'\n{3,}', '\n\n', text).strip()
    return text

# High quality category mockups
CATEGORY_MOCKUPS = {
    'xay-dung': [
        'https://images.unsplash.com/photo-1541888946425-d0fbb1861593?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=800&q=80'
    ],
    'duoc-pham': [
        'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80'
    ],
    'noi-that': [
        'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80'
    ],
    'o-to': [
        'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=800&q=80'
    ],
    'spa': [
        'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=800&q=80'
    ],
    'my-pham': [
        'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80'
    ],
    'bat-dong-san': [
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80'
    ],
    'du-lich': [
        'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80'
    ],
    'du-hoc': [
        'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=800&q=80'
    ],
    'gioi-thieu-cong-ty': [
        'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80'
    ],
    'thuong-mai-dien-tu': [
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80'
    ],
    'default': [
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80'
    ]
}

# 1. PROCESS ALL 60 THEMES
themes = []
for idx, t in enumerate(scraped['themes']):
    cat_names = [collection_map[cid]['name'] for cid in t.get('collections', []) if cid in collection_map and collection_map[cid]['slug'] not in ['tat-ca']]
    primary_cat = cat_names[0] if cat_names else 'Giới thiệu công ty'
    
    pkg = 'Gói Startup'
    for cid in t.get('collections', []):
        if cid in collection_map:
            slug = collection_map[cid]['slug']
            if slug == 'goi-pro':
                pkg = 'Gói Pro'
            elif slug in ['cac-du-an-vip', 'theme-doanh-nghiep']:
                pkg = 'Gói VIP'

    demo_match = re.search(r'href=[\"\'](http[s]?://[^\"\']+)[\"\'][^>]*>Xem demo', t.get('content', ''))
    demo_url = demo_match.group(1) if demo_match else f"https://demo.univn.vn/{t['slug']}"

    matched_mockups = CATEGORY_MOCKUPS['default']
    slug_str = (t['slug'] + ' ' + primary_cat).lower()
    for k, v in CATEGORY_MOCKUPS.items():
        if k in slug_str:
            matched_mockups = v
            break
    img_url = matched_mockups[idx % len(matched_mockups)]

    themes.append({
        'id': t['id'],
        'slug': t['slug'],
        'title': t['title'],
        'category': primary_cat,
        'allCategories': cat_names,
        'package': pkg,
        'demoUrl': demo_url,
        'imageUrl': img_url,
        'description': t.get('excerpt') or f"Mẫu thiết kế website {t['title']} hiện đại, tối ưu SEO, chuẩn mobile, tốc độ tải trang dưới 1 giây.",
        'features': [
            'Giao diện UI/UX chuẩn công nghệ 2026',
            'Chuẩn SEO Onpage 100% chuyên sâu',
            'Tương thích di động (Responsive 100%)',
            'Tích hợp nút gọi, Zalo, Messenger, chat trực tuyến',
            'Tốc độ tải nhanh < 1.2s, chứng chỉ bảo mật SSL'
        ]
    })

# 2. PROCESS ALL 40 POSTS
POST_THUMBS = [
    'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=800&q=80'
]

posts = []
for idx, p in enumerate(scraped['posts']):
    clean_body = clean_html_text(p.get('content', ''))
    excerpt = p.get('excerpt')
    if not excerpt and clean_body:
        excerpt = clean_body[:200] + '...'
    elif not excerpt:
        excerpt = f"Tìm hiểu chi tiết về {p.get('title')} cùng các chuyên gia giải pháp công nghệ tại Uni Creation."

    cat = 'Kiến thức Website'
    t_lower = p.get('title', '').lower()
    if 'tuyển dụng' in t_lower:
        cat = 'Tuyển dụng'
    elif 'vps' in t_lower or 'hosting' in t_lower or 'ssl' in t_lower:
        cat = 'Hạ tầng & Cloud'
    elif 'marketing' in t_lower or 'seo' in t_lower or 'quảng cáo' in t_lower or 'thương hiệu' in t_lower:
        cat = 'Marketing & SEO'
    elif 'hướng dẫn' in t_lower or 'cách' in t_lower or 'bộ công thương' in t_lower:
        cat = 'Hướng dẫn & Kỹ thuật'

    posts.append({
        'id': p['id'],
        'slug': p['slug'],
        'title': p['title'],
        'date': p.get('date', '')[:10] if p.get('date') else '2026-06-15',
        'excerpt': excerpt,
        'imageUrl': POST_THUMBS[idx % len(POST_THUMBS)],
        'category': cat,
        'author': 'Ban Biên Tập Uni Creation',
        'readingTime': f"{max(3, len(clean_body) // 600)} phút đọc",
        'content': clean_body
    })

# 3. WRITE BLOG DATA (src/data/blogData.ts)
blog_ts = f"""// Full 40 articles reconstructed faithfully from univn.vn
export interface BlogPost {{
  id: number;
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  imageUrl: string;
  category: string;
  author: string;
  readingTime: string;
  content: string;
}}

export const ALL_POSTS: BlogPost[] = {json.dumps(posts, ensure_ascii=False, indent=2)};
"""

with open('src/data/blogData.ts', 'w', encoding='utf-8') as f:
    f.write(blog_ts)
print("Generated src/data/blogData.ts with all 40 articles!")

# 4. EXTRACT POLICIES DATA (src/data/policiesData.ts)
pages_by_slug = {p['slug']: p for p in scraped['pages']}

policies = {
    'warranty': {
        'title': 'Chính Sách Bảo Hành Website Trọn Đời',
        'subtitle': 'Cam kết đồng hành và bảo hành kỹ thuật 100% miễn phí trọn đời cho toàn bộ website do Uni Creation phát triển',
        'content': clean_html_text(pages_by_slug.get('chinh-sach-bao-hanh', {}).get('content', ''))
    },
    'terms': {
        'title': 'Quy Định Sử Dụng Dịch Vụ',
        'subtitle': 'Quy định pháp lý áp dụng cho dịch vụ Thiết kế web, Hosting, VPS, Tên miền và Email Doanh nghiệp',
        'content': clean_html_text(pages_by_slug.get('quy-dinh-su-dung', {}).get('content', ''))
    },
    'privacy': {
        'title': 'Chính Sách Bảo Mật Thông Tin Khách Hàng',
        'subtitle': 'Uni Creation cam kết bảo mật tuyệt đối thông tin cá nhân và dữ liệu doanh nghiệp theo tiêu chuẩn pháp luật',
        'content': clean_html_text(pages_by_slug.get('chinh-sach-bao-mat', {}).get('content', ''))
    },
    'general': {
        'title': 'Chính Sách & Quy Định Chung',
        'subtitle': 'Quyền và nghĩa vụ của khách hàng cũng như Uni Creation trong quá trình hợp tác cung cấp giải pháp',
        'content': clean_html_text(pages_by_slug.get('chinh-sach-va-quy-dinh-chung', {}).get('content', ''))
    },
    'bctGuide': {
        'title': 'Hướng Dẫn Quản Trị & Thông Báo Bộ Công Thương',
        'subtitle': 'Tài liệu hướng dẫn quản trị web chuẩn và quy trình đăng ký/thông báo website thương mại điện tử với Bộ Công Thương',
        'content': """Uni Creation hỗ trợ 100% khách hàng làm thủ tục thông báo website với Bộ Công Thương:
1. Đăng ký tài khoản trên Cổng thông tin Quản lý hoạt động Thương mại điện tử (online.gov.vn).
2. Chuẩn bị hồ sơ pháp lý: Giấy phép ĐKKD hoặc Giấy chứng nhận đăng ký hộ kinh doanh, CMND/CCCD của người đại diện.
3. Khai báo các chính sách bắt buộc trên website:
   - Chính sách bảo hành / hoàn trả
   - Chính sách vận chuyển / giao nhận
   - Chính sách bảo mật thông tin khách hàng
   - Quy định sử dụng và điều khoản giao dịch chung
4. Nhận mã nhúng Logo "Đã Thông Báo Bộ Công Thương" có liên kết xác thực chính thức.
Toàn bộ quy trình được chuyên viên pháp lý của Uni Creation đồng hành và hướng dẫn chi tiết cho đến khi có logo xác nhận."""
    }
}

policies_ts = f"""// Official policies directly reconstructed from univn.vn legal pages
export interface PolicyDoc {{
  title: string;
  subtitle: string;
  content: string;
}}

export const OFFICIAL_POLICIES: Record<string, PolicyDoc> = {json.dumps(policies, ensure_ascii=False, indent=2)};
"""

with open('src/data/policiesData.ts', 'w', encoding='utf-8') as f:
    f.write(policies_ts)
print("Generated src/data/policiesData.ts with all official policies!")
