export interface ClientProjectItem {
  id: string;
  name: string;
  shortName: string;
  logoText: string;
  category: string;
  badge: string;
  tagline: string;
  description: string;
  partnershipNote: string;
  website: string;
  subWebsites?: {
    label: string;
    url: string;
  }[];
  brandColor?: string;
  previewImage: string;
  logoAccent: {
    bg: string;
    text: string;
    initials: string;
  };
}

export const CLIENT_PROJECTS: ClientProjectItem[] = [
  {
    id: 'lumi',
    name: 'Công ty Cổ Phần Lumi Việt Nam',
    shortName: 'Lumi',
    logoText: 'LUMI VIETNAM',
    category: 'Nhà thông minh IoT',
    badge: 'Website dự án',
    tagline: 'Công ty hàng đầu Việt Nam trong lĩnh vực Nhà thông minh (Smarthome).',
    description: 'Sở hữu công nghệ lõi và năng lực nghiên cứu nổi trội, Lumi đã và đang khẳng định vị thế tiên phong dẫn đầu thị trường bằng những cải tiến sản phẩm đón đầu xu hướng và khả năng tích hợp và các hệ sinh thái hàng đầu thế giới như Apple, Google, Amazon,...',
    partnershipNote: 'Chúng tôi thật may mắn khi được hợp tác và là đối tác xây dựng hệ thống website cho Lumi. Cung cấp cho Lumi giải pháp về website tốt nhất, đảm bảo chất lượng sản phẩm, đáp ứng các yêu cầu khắt khe nhất.',
    website: 'https://lumi.vn/',
    subWebsites: [
      {
        label: 'Website giới thiệu hệ thống chiếu sáng thông minh mới',
        url: 'https://lumi.vn/chieu-sang-thong-minh/'
      }
    ],
    brandColor: '#0baba0',
    previewImage: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=800&q=80',
    logoAccent: {
      bg: '#10b981',
      text: '#ffffff',
      initials: 'LUMI'
    }
  },
  {
    id: 'sun-group',
    name: 'Tập Đoàn Sun Group',
    shortName: 'Sun Group',
    logoText: 'SUN GROUP',
    category: 'Du lịch & Bất động sản',
    badge: 'Website dự án',
    tagline: 'Tập đoàn kinh tế tư nhân hàng đầu Việt Nam trong lĩnh vực Du lịch nghỉ dưỡng và Bất động sản cao cấp.',
    description: 'Sun Group kiến tạo những công trình đẳng cấp quốc tế, ghi dấu ấn vượt thời gian tại Phú Quốc, Đà Nẵng, Sa Pa, Quảng Ninh với triết lý kiến tạo chất lượng sống và trải nghiệm du lịch đỉnh cao.',
    partnershipNote: 'Uni Creation vinh dự đồng hành xây dựng và tối ưu cổng thông tin dự án bất động sản chuẩn SEO, tốc độ tải trang thần tốc và bảo mật dữ liệu tuyệt đối cho các chiến dịch ra mắt dự án chiến lược.',
    website: 'https://sungroup.com.vn/',
    subWebsites: [
      {
        label: 'Cổng thông tin hệ sinh thái nghỉ dưỡng Sun Hospitality',
        url: 'https://sunhospitality.com.vn/'
      }
    ],
    brandColor: '#f59e0b',
    previewImage: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80',
    logoAccent: {
      bg: '#f59e0b',
      text: '#ffffff',
      initials: 'SU'
    }
  },
  {
    id: 'mobifone',
    name: 'Tổng Công Ty Viễn Thông MobiFone',
    shortName: 'MobiFone',
    logoText: 'MOBIFONE',
    category: 'Tổng công ty Viễn thông',
    badge: 'Website dự án',
    tagline: 'Doanh nghiệp viễn thông tiên phong chuyển đổi số quốc gia.',
    description: 'Là một trong ba nhà mạng viễn thông lớn nhất Việt Nam, MobiFone cung cấp hạ tầng số, mạng di động 4G/5G và hàng loạt giải pháp công nghệ thông tin cho hàng chục triệu khách hàng cá nhân và doanh nghiệp.',
    partnershipNote: 'Uni Creation tham gia tư vấn thiết kế giao diện số tương tác và tối ưu hóa trải nghiệm khách hàng UI/UX cho hệ thống landing page dịch vụ số giá trị gia tăng của MobiFone.',
    website: 'https://mobifone.vn/',
    subWebsites: [
      {
        label: 'Cổng giải pháp chuyển đổi số MobiFone Doanh Nghiệp',
        url: 'https://mobifone.vn/doanh-nghiep'
      }
    ],
    brandColor: '#0284c7',
    previewImage: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80',
    logoAccent: {
      bg: '#0284c7',
      text: '#ffffff',
      initials: 'MO'
    }
  },
  {
    id: 'novaland',
    name: 'Tập Đoàn Địa Ốc Novaland',
    shortName: 'Novaland',
    logoText: 'NOVALAND',
    category: 'Tập đoàn Địa ốc',
    badge: 'Website dự án',
    tagline: 'Nhà phát triển bất động sản đô thị và du lịch quy mô hàng đầu tại khu vực phía Nam.',
    description: 'Novaland sở hữu quỹ đất hơn 10.600 ha với hơn 50 dự án bất động sản đô thị, bất động sản du lịch và bất động sản công nghiệp trọng điểm tại TP.HCM, Đồng Nai, Bà Rịa - Vũng Tàu, Bình Thuận.',
    partnershipNote: 'Hệ sinh thái website giới thiệu dự án được xây dựng với công nghệ tải trang mượt mà, tích hợp xem sa bàn 3D thực tế ảo, tối ưu chuyển đổi khách hàng tiềm năng đa kênh.',
    website: 'https://novaland.com.vn/',
    subWebsites: [
      {
        label: 'Trang thông tin dự án đại đô thị Aqua City',
        url: 'https://novaland.com.vn/aqua-city'
      }
    ],
    brandColor: '#10b981',
    previewImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
    logoAccent: {
      bg: '#059669',
      text: '#ffffff',
      initials: 'NO'
    }
  },
  {
    id: 'vpbank',
    name: 'Ngân Hàng TMCP Việt Nam Thịnh Vượng (VPBank)',
    shortName: 'VPBank',
    logoText: 'VPBANK',
    category: 'Ngân hàng Việt Nam Thịnh Vượng',
    badge: 'Website dự án',
    tagline: 'Ngân hàng thương mại cổ phần có tốc độ chuyển đổi số và bán lẻ hàng đầu Việt Nam.',
    description: 'VPBank luôn nằm trong nhóm các ngân hàng có hiệu quả hoạt động hàng đầu với định vị ngân hàng số hiện đại, thân thiện và linh hoạt phục vụ nhu cầu tài chính toàn diện của cá nhân và SME.',
    partnershipNote: 'Đồng hành phát triển các cổng giao diện dịch vụ thẻ, chương trình khách hàng ưu tiên và các chiến dịch số hóa tài chính với độ chuẩn mực cao về bảo mật và nhận diện thương hiệu.',
    website: 'https://vpbank.com.vn/',
    subWebsites: [
      {
        label: 'Cổng tài chính số và mở thẻ trực tuyến VPBank NEO',
        url: 'https://neo.vpbank.com.vn/'
      }
    ],
    brandColor: '#16a34a',
    previewImage: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80',
    logoAccent: {
      bg: '#16a34a',
      text: '#ffffff',
      initials: 'VP'
    }
  },
  {
    id: 'gentis',
    name: 'Công Ty Cổ Phần Dịch Vụ Phân Tích Di Truyền GENTIS',
    shortName: 'GENTIS',
    logoText: 'GENTIS',
    category: 'Y tế & Di truyền học',
    badge: 'Website dự án',
    tagline: 'Đơn vị tiên phong và hàng đầu về phân tích di truyền học tại Việt Nam đạt tiêu chuẩn quốc tế ISO 15189.',
    description: 'GENTIS sở hữu 2 phòng xét nghiệm di truyền hiện đại bậc nhất tại Hà Nội và TP.HCM, quy tụ đội ngũ chuyên gia di truyền đầu ngành, hợp tác cùng hàng nghìn bệnh viện và phòng khám trên cả nước.',
    partnershipNote: 'Xây dựng website y tế chuyên sâu chuẩn SEO, tích hợp tra cứu kết quả xét nghiệm bảo mật trực tuyến, tối ưu hóa tốc độ tải trang giúp người bệnh tra cứu thông tin nhanh chóng và thuận tiện.',
    website: 'https://gentis.vn/',
    subWebsites: [
      {
        label: 'Cổng tra cứu kết quả xét nghiệm ADN trực tuyến',
        url: 'https://gentis.vn/tra-cuu-ket-qua'
      }
    ],
    brandColor: '#0baba0',
    previewImage: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
    logoAccent: {
      bg: '#088c83',
      text: '#ffffff',
      initials: 'GE'
    }
  },
  {
    id: 'bao-viet',
    name: 'Tổng Công Ty Bảo Việt Nhân Thọ',
    shortName: 'Bảo Việt Life',
    logoText: 'BẢO VIỆT LIFE',
    category: 'Tài chính & Bảo hiểm',
    badge: 'Website dự án',
    tagline: 'Thương hiệu bảo hiểm nhân thọ quốc gia lâu đời và uy tín nhất Việt Nam.',
    description: 'Thành viên nòng cốt của Tập đoàn Tài chính Bảo Việt, quản trị mạng lưới phục vụ rộng khắp cả nước, bảo vệ tài chính và sức khỏe cho hàng triệu gia đình Việt.',
    partnershipNote: 'Triển khai giải pháp website giới thiệu các gói bảo hiểm giáo dục, đầu tư và hưu trí với công cụ tính toán phí bảo hiểm trực quan, nâng cao chuyển đổi tư vấn viên và sự tin tưởng của khách hàng.',
    website: 'https://baovietnhantho.com.vn/',
    subWebsites: [
      {
        label: 'Cổng đăng ký tư vấn giải pháp tài chính gia đình',
        url: 'https://baovietnhantho.com.vn/tu-van'
      }
    ],
    brandColor: '#0284c7',
    previewImage: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80',
    logoAccent: {
      bg: '#0369a1',
      text: '#ffffff',
      initials: 'BẢ'
    }
  },
  {
    id: 'hoa-binh-minh',
    name: 'Tập Đoàn Hòa Bình Minh',
    shortName: 'Hoà Bình Minh',
    logoText: 'HOÀ BÌNH MINH',
    category: 'Ô tô & Vật liệu XD',
    badge: 'Website dự án',
    tagline: 'Tập đoàn đa ngành hàng đầu về phân phối ô tô, xe máy, thép và gạch ốp lát tại Việt Nam.',
    description: 'Với mạng lưới hơn 100 showroom ô tô và cửa hàng vật liệu xây dựng trải dài trên toàn quốc, Hòa Bình Minh là đối tác chiến lược lớn của Hyundai, Honda, VinFast, Kia, Mazda.',
    partnershipNote: 'Xây dựng website giới thiệu hệ sinh thái phân phối vật liệu xây dựng và chuỗi đại lý ô tô, tích hợp đặt lịch lái thử, báo giá lăn bánh tự động và quản lý thông tin đa chi nhánh.',
    website: 'https://hoabinhminh.com/',
    subWebsites: [
      {
        label: 'Cổng thông tin phân phối vật liệu gạch men & sắt thép',
        url: 'https://hoabinhminh.com/vat-lieu-xay-dung'
      }
    ],
    brandColor: '#ea580c',
    previewImage: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80',
    logoAccent: {
      bg: '#ea580c',
      text: '#ffffff',
      initials: 'HO'
    }
  },
  {
    id: 'smartmen',
    name: 'Công Ty CP Thời Trang SmartMen',
    shortName: 'SmartMen',
    logoText: 'SMARTMEN',
    category: 'Thời trang nam cao cấp',
    badge: 'Website dự án',
    tagline: 'Thương hiệu giày da nam và giải pháp tăng chiều cao bí mật số 1 Việt Nam.',
    description: 'SmartMen sở hữu xưởng sản xuất giày da quy mô lớn cùng chuỗi cửa hàng tại các thành phố lớn, nổi tiếng với kỹ thuật đóng giày da thủ công cao cấp tăng chiều cao từ 5 - 9cm êm ái tự nhiên.',
    partnershipNote: 'Xây dựng nền tảng website E-commerce bán lẻ giày da trực tuyến chuẩn SEO, tích hợp cổng thanh toán tự động, quản lý kho hàng và theo dõi đơn hàng thời gian thực mượt mà.',
    website: 'https://giaycaosmartmen.com/',
    subWebsites: [
      {
        label: 'Hệ thống mua sắm giày da công sở SmartMen Official Store',
        url: 'https://giaycaosmartmen.com/bo-suu-tap-moi'
      }
    ],
    brandColor: '#1e293b',
    previewImage: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=800&q=80',
    logoAccent: {
      bg: '#0f172a',
      text: '#ffffff',
      initials: 'SM'
    }
  },
  {
    id: 'viettel',
    name: 'Tập Đoàn Công Nghiệp - Viễn Thông Quân Đội (Viettel)',
    shortName: 'Viettel Telecom',
    logoText: 'VIETTEL',
    category: 'Tập đoàn Viễn thông',
    badge: 'Website dự án',
    tagline: 'Tập đoàn công nghệ và viễn thông toàn cầu số 1 Việt Nam.',
    description: 'Viettel nằm trong Top 15 nhà mạng lớn nhất thế giới về quy mô thuê bao và Top 50 thương hiệu viễn thông giá trị nhất thế giới, tiên phong kiến tạo xã hội số.',
    partnershipNote: 'Hợp tác triển khai các giải pháp hạ tầng máy chủ Cloud Server, kết nối hệ thống IDC chuẩn Tier 3 và tối ưu trải nghiệm dịch vụ viễn thông trực tuyến.',
    website: 'https://vietteltelecom.vn/',
    subWebsites: [
      {
        label: 'Cổng giải pháp dịch vụ số Viettel Solutions',
        url: 'https://solutions.viettel.vn/'
      }
    ],
    brandColor: '#e11d48',
    previewImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
    logoAccent: {
      bg: '#e11d48',
      text: '#ffffff',
      initials: 'VT'
    }
  },
  {
    id: 'techcombank',
    name: 'Ngân Hàng TMCP Kỹ Thương Việt Nam (Techcombank)',
    shortName: 'Techcombank',
    logoText: 'TECHCOMBANK',
    category: 'Ngân hàng TMCP',
    badge: 'Website dự án',
    tagline: 'Ngân hàng tư nhân dẫn đầu về công nghệ số và tài chính tiêu dùng tại Việt Nam.',
    description: 'Techcombank tiên phong chính sách Zero-fee và chuyển đổi số toàn diện, sở hữu hệ sinh thái tài chính bán lẻ mạnh mẽ với chỉ số hiệu quả sinh lời hàng đầu hệ thống.',
    partnershipNote: 'Tư vấn giải pháp giao diện số tối giản, nâng cao tính bảo mật và trải nghiệm tra cứu sản phẩm tài chính cho các khách hàng cá nhân và doanh nghiệp.',
    website: 'https://techcombank.com/',
    subWebsites: [
      {
        label: 'Cổng thông tin ngân hàng điện tử Techcombank Mobile',
        url: 'https://techcombank.com/khach-hang-ca-nhan'
      }
    ],
    brandColor: '#dc2626',
    previewImage: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=80',
    logoAccent: {
      bg: '#b91c1c',
      text: '#ffffff',
      initials: 'TC'
    }
  },
  {
    id: 'vingroup',
    name: 'Tập Đoàn Vingroup',
    shortName: 'VinGroup',
    logoText: 'VINGROUP',
    category: 'Tập đoàn Đa ngành',
    badge: 'Website dự án',
    tagline: 'Tập đoàn kinh tế tư nhân lớn nhất Việt Nam.',
    description: 'Vingroup tập trung vào 3 trụ cột cốt lõi: Công nghệ - Công nghiệp (VinFast), Thương mại Dịch vụ (Vinhomes, Vinpearl) và Thiện nguyện Xã hội (Vinmec, Vinschool).',
    partnershipNote: 'Hỗ trợ thiết kế và đồng bộ giao diện cho các kênh truyền thông trực tuyến thuộc hệ sinh thái dịch vụ, đảm bảo chuẩn mực nhận diện thương hiệu cao cấp.',
    website: 'https://vingroup.net/',
    subWebsites: [
      {
        label: 'Cổng thông tin tập đoàn đa ngành Vingroup',
        url: 'https://vingroup.net/tin-tuc'
      }
    ],
    brandColor: '#b91c1c',
    previewImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
    logoAccent: {
      bg: '#991b1b',
      text: '#ffffff',
      initials: 'VI'
    }
  },
  {
    id: 'masan',
    name: 'Tập Đoàn Masan (Masan Group)',
    shortName: 'Masan Group',
    logoText: 'MASAN GROUP',
    category: 'Hàng tiêu dùng & Bán lẻ',
    badge: 'Website dự án',
    tagline: 'Tập đoàn tiêu dùng - bán lẻ quy mô dẫn đầu thị trường Việt Nam.',
    description: 'Masan sở hữu chuỗi siêu thị WinCommerce (WinMart/WinMart+), Masan Consumer, Masan MEATLife và Phúc Long, phục vụ hàng ngày nhu cầu thiết yếu của 100 triệu người tiêu dùng Việt.',
    partnershipNote: 'Hệ thống website thông tin doanh nghiệp được thiết kế hiện đại, công bố thông tin nhà đầu tư minh bạch và kết nối mạng lưới phân phối trên 63 tỉnh thành.',
    website: 'https://masangroup.com/',
    subWebsites: [
      {
        label: 'Cổng quan hệ nhà đầu tư & phát triển bền vững Masan',
        url: 'https://masangroup.com/investor-relations'
      }
    ],
    brandColor: '#b91c1c',
    previewImage: 'https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&w=800&q=80',
    logoAccent: {
      bg: '#b91c1c',
      text: '#ffffff',
      initials: 'MA'
    }
  },
  {
    id: 'cen-group',
    name: 'Công Ty Cổ Phần Tập Đoàn Thế Kỷ (Cen Group)',
    shortName: 'Cen Group',
    logoText: 'CEN GROUP',
    category: 'Tập đoàn Bất động sản',
    badge: 'Website dự án',
    tagline: 'Hệ sinh thái dịch vụ bất động sản hàng đầu Việt Nam.',
    description: 'Với thương hiệu Cen Land và mạng lưới hàng chục nghìn môi giới chuyên nghiệp, Cen Group là cầu nối uy tín phân phối các dự án bất động sản hàng đầu trên cả nước.',
    partnershipNote: 'Xây dựng website môi giới và kho hàng bất động sản tương tác, quản lý chiến dịch mở bán và đăng ký tham quan nhà mẫu tự động.',
    website: 'https://cengroup.vn/',
    subWebsites: [
      {
        label: 'Cổng phân phối dự án bất động sản Cen Land',
        url: 'https://cenland.vn/'
      }
    ],
    brandColor: '#0baba0',
    previewImage: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80',
    logoAccent: {
      bg: '#088c83',
      text: '#ffffff',
      initials: 'CE'
    }
  },
  {
    id: 'scots-english',
    name: 'Hệ Thống Anh Ngữ Quốc Tế Scots English Australia',
    shortName: 'Scots English',
    logoText: 'SCOTS ENGLISH',
    category: 'Hệ thống Anh ngữ Úc',
    badge: 'Website dự án',
    tagline: 'Hệ thống đào tạo tiếng Anh chuẩn quốc tế kế thừa từ trường Scots English College (Sydney, Úc).',
    description: 'Hàng chục trung tâm hiện đại tại các tỉnh phía Bắc, Scots English mang đến chương trình học tiếng Anh trẻ em, luyện thi IELTS và phát triển kỹ năng toàn diện chuẩn Cambridge.',
    partnershipNote: 'Triển khai website giáo dục thân thiện, tích hợp đăng ký kiểm tra trình độ tiếng Anh trực tuyến và quản lý lịch học linh hoạt cho phụ huynh.',
    website: 'https://scotsenglish.edu.vn/',
    subWebsites: [
      {
        label: 'Cổng kiểm tra trình độ tiếng Anh trực tuyến miễn phí',
        url: 'https://scotsenglish.edu.vn/kiem-tra-trinh-do'
      }
    ],
    brandColor: '#1d4ed8',
    previewImage: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80',
    logoAccent: {
      bg: '#1e40af',
      text: '#ffffff',
      initials: 'SE'
    }
  },
  {
    id: 'fpt-skillking',
    name: 'Học Viện Quốc Tế FPT Skillking',
    shortName: 'FPT Skillking',
    logoText: 'SKILLKING',
    category: 'Đào tạo Digital Mkt',
    badge: 'Website dự án',
    tagline: 'Học viện đào tạo Full-stack Digital Marketer chuyên nghiệp liên kết FPT & Skillking Ấn Độ.',
    description: 'Đào tạo thực chiến phương pháp SmartLab chuẩn quốc tế, giúp học viên làm chủ SEO, Google Ads, Meta Ads, Content Marketing và MarTech cho doanh nghiệp.',
    partnershipNote: 'Thiết kế website tuyển sinh tối ưu tỷ lệ chuyển đổi form đăng ký, tốc độ tải trang nhanh và chuẩn SEO Google với hàng trăm từ khóa ngành Marketing.',
    website: 'https://skillking.fpt.edu.vn/',
    subWebsites: [
      {
        label: 'Cổng thông tin xét tuyển học bổng Full-stack Digital Marketing',
        url: 'https://skillking.fpt.edu.vn/xet-tuyen'
      }
    ],
    brandColor: '#ea580c',
    previewImage: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80',
    logoAccent: {
      bg: '#ea580c',
      text: '#ffffff',
      initials: 'FS'
    }
  },
  {
    id: 'luxuryfan',
    name: 'Công Ty CP Quạt Trần LuxuryFan',
    shortName: 'Luxuryfan',
    logoText: 'LUXURYFAN',
    category: 'Nội thất & Quạt Mỹ',
    badge: 'Website dự án',
    tagline: 'Nhà phân phối quạt trần Mỹ chính hãng hàng đầu tại Việt Nam.',
    description: 'Phân phối độc quyền các thương hiệu quạt trần đẳng cấp thế giới: Hunter, Fanimation, Minka Aire cho các khách sạn 5 sao, resort cao cấp và biệt thự sang trọng.',
    partnershipNote: 'Xây dựng website giới thiệu sản phẩm nội thất cao cấp với hình ảnh 360 độ trực quan, lọc sản phẩm theo phong cách kiến trúc và đặt hàng online.',
    website: 'https://quattranmy.com/',
    subWebsites: [
      {
        label: 'Bộ sưu tập quạt trần phong cách kiến trúc Đông Dương & Cổ điển',
        url: 'https://quattranmy.com/bo-suu-tap'
      }
    ],
    brandColor: '#d97706',
    previewImage: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80',
    logoAccent: {
      bg: '#b45309',
      text: '#ffffff',
      initials: 'LX'
    }
  },
  {
    id: 'vbi',
    name: 'Tổng Công Ty Bảo Hiểm VietinBank (VBI)',
    shortName: 'VBI Bảo Hiểm',
    logoText: 'VBI VIETINBANK',
    category: 'Bảo hiểm Ngân hàng',
    badge: 'Website dự án',
    tagline: 'Top 1 doanh nghiệp bảo hiểm phi nhân thọ tăng trưởng nhanh nhất Việt Nam.',
    description: 'Thuộc hệ sinh thái VietinBank, VBI dẫn đầu về ứng dụng bảo hiểm số InsurTech, bồi thường trực tuyến siêu tốc và mạng lưới bảo lãnh viện phí trên toàn quốc.',
    partnershipNote: 'Xây dựng landing page các gói bảo hiểm sức khỏe, bảo hiểm xe cơ giới với công cụ mua trực tuyến và cấp giấy chứng nhận bảo hiểm điện tử tức thì.',
    website: 'https://vbi.vietinbank.vn/',
    subWebsites: [
      {
        label: 'Cổng mua bảo hiểm sức khỏe trực tuyến VBI Care',
        url: 'https://vbi.vietinbank.vn/bao-hiem-suc-khoe'
      }
    ],
    brandColor: '#0284c7',
    previewImage: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80',
    logoAccent: {
      bg: '#0284c7',
      text: '#ffffff',
      initials: 'VB'
    }
  },
  {
    id: 'dicom',
    name: 'Công Ty Công Nghệ Nhà Thông Minh Dicom',
    shortName: 'Dicom IoT',
    logoText: 'DICOM IOT',
    category: 'Công nghệ nhà thông minh',
    badge: 'Website dự án',
    tagline: 'Nhà phát triển thiết bị và giải pháp điều khiển nhà thông minh chuẩn Châu Âu.',
    description: 'Chuyên cung cấp hệ thống công tắc cảm ứng mặt kính sang trọng, điều khiển chiếu sáng, rèm cửa, điều hòa nhiệt độ và an ninh gia đình thông minh.',
    partnershipNote: 'Hệ thống website mang phong cách tối giản công nghệ, làm nổi bật đường nét tinh tế của sản phẩm và tài liệu kỹ thuật dành cho kiến trúc sư.',
    website: 'https://dicom.vn/',
    subWebsites: [
      {
        label: 'Catalog giải pháp nhà thông minh thế hệ mới',
        url: 'https://dicom.vn/giai-phap'
      }
    ],
    brandColor: '#0baba0',
    previewImage: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=800&q=80',
    logoAccent: {
      bg: '#0baba0',
      text: '#ffffff',
      initials: 'DI'
    }
  },
  {
    id: 'tce',
    name: 'Công Ty CP Thiết Bị & Máy Công Trình TCE',
    shortName: 'TCE Machinery',
    logoText: 'TCE SANY',
    category: 'Máy công trình quốc tế',
    badge: 'Website dự án',
    tagline: 'Đại lý phân phối ủy quyền thiết bị bê tông và cần trục SANY số 1 thế giới tại Việt Nam.',
    description: 'TCE cung cấp giải pháp thiết bị toàn diện cho các đại công trình: xe bơm bê tông, trạm trộn, cần trục bánh lốp, máy khoan cọc nhồi và dịch vụ phụ tùng 24/7.',
    partnershipNote: 'Website doanh nghiệp công nghiệp nặng chuyên nghiệp, tích hợp tra cứu thông số kỹ thuật thiết bị, yêu cầu báo giá dự án và dịch vụ sửa chữa lưu động.',
    website: 'https://tce.vn/',
    subWebsites: [
      {
        label: 'Danh mục thiết bị bê tông và cần cẩu SANY chính hãng',
        url: 'https://tce.vn/san-pham'
      }
    ],
    brandColor: '#dc2626',
    previewImage: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80',
    logoAccent: {
      bg: '#dc2626',
      text: '#ffffff',
      initials: 'TC'
    }
  },
  {
    id: 'emera',
    name: 'Tập Đoàn Đầu Tư Emera Group',
    shortName: 'Emera Group',
    logoText: 'EMERA GROUP',
    category: 'Bất động sản cao cấp',
    badge: 'Website dự án',
    tagline: 'Đơn vị đầu tư và phát triển bất động sản nghỉ dưỡng & đô thị sinh thái cao cấp.',
    description: 'Emera Group định hướng phát triển chuỗi khu đô thị sinh thái xanh, nghỉ dưỡng cao cấp hòa hợp thiên nhiên với kiến trúc bền vững tại các vùng kinh tế động lực.',
    partnershipNote: 'Website kiến trúc đẳng cấp với hiệu ứng chuyển động mượt mà, truyền tải trọn vẹn thông điệp sống xanh sang trọng của chủ đầu tư.',
    website: 'https://emera.vn/',
    subWebsites: [
      {
        label: 'Cổng giới thiệu các dự án bất động sản nghỉ dưỡng sinh thái',
        url: 'https://emera.vn/du-an'
      }
    ],
    brandColor: '#059669',
    previewImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    logoAccent: {
      bg: '#059669',
      text: '#ffffff',
      initials: 'EM'
    }
  },
  {
    id: 'song-cau-green',
    name: 'Công Ty Năng Lượng Tái Tạo Sông Cầu Green',
    shortName: 'Sông Cầu Green',
    logoText: 'SÔNG CẦU GREEN',
    category: 'Năng lượng tái tạo',
    badge: 'Website dự án',
    tagline: 'Phát triển dự án điện gió và điện mặt trời áp mái công nghiệp xanh.',
    description: 'Tiên phong cung cấp giải pháp năng lượng sạch cho các khu công nghiệp phía Bắc, góp phần cùng các doanh nghiệp FDI đạt chứng chỉ xanh và trung hòa carbon ESG.',
    partnershipNote: 'Xây dựng website doanh nghiệp năng lượng xanh hiện đại, giao diện trực quan giới thiệu các dự án điện gió và điện áp mái đã vận hành thương mại thành công.',
    website: 'https://songcaugreen.vn/',
    subWebsites: [
      {
        label: 'Báo cáo giải pháp giảm phát thải carbon doanh nghiệp',
        url: 'https://songcaugreen.vn/esg'
      }
    ],
    brandColor: '#16a34a',
    previewImage: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=800&q=80',
    logoAccent: {
      bg: '#16a34a',
      text: '#ffffff',
      initials: 'SC'
    }
  },
  {
    id: 'bekids',
    name: 'Hệ Thống Giáo Dục Sớm Bekids',
    shortName: 'Bekids Education',
    logoText: 'BEKIDS',
    category: 'Giáo dục sớm & Tư duy',
    badge: 'Website dự án',
    tagline: 'Hệ thống trung tâm giáo dục sớm phát triển tư duy sáng tạo cho trẻ từ 3 - 10 tuổi.',
    description: 'Bekids áp dụng phương pháp giáo dục STEAM kết hợp kỹ năng thế kỷ 21, giúp trẻ khơi dậy tiềm năng ngôn ngữ, toán tư duy và công nghệ từ những năm đầu đời.',
    partnershipNote: 'Thiết kế website giáo dục tươi sáng, thân thiện với trẻ nhỏ và phụ huynh, hệ thống đặt lịch học thử và lớp học online trực quan.',
    website: 'https://bekids.edu.vn/',
    subWebsites: [
      {
        label: 'Cổng đăng ký lớp học trải nghiệm phương pháp STEAM miễn phí',
        url: 'https://bekids.edu.vn/hoc-thu'
      }
    ],
    brandColor: '#0284c7',
    previewImage: 'https://images.unsplash.com/photo-1587691592099-24045742c181?auto=format&fit=crop&w=800&q=80',
    logoAccent: {
      bg: '#0284c7',
      text: '#ffffff',
      initials: 'BE'
    }
  },
  {
    id: 'gte-media',
    name: 'Công Ty Truyền Thông & Giải Trí GTE Media',
    shortName: 'GTE Media',
    logoText: 'GTE MEDIA',
    category: 'Truyền thông số',
    badge: 'Website dự án',
    tagline: 'Agency sản xuất nội dung số và quản lý mạng lưới kênh truyền thông giải trí hàng đầu.',
    description: 'Sở hữu mạng lưới hàng trăm kênh video triệu view trên YouTube và TikTok, GTE Media cung cấp giải pháp sáng tạo nội dung viral cho các nhãn hàng hàng đầu.',
    partnershipNote: 'Website portfolio đa phương tiện hiện đại với tốc độ truyền tải video mượt mà, giới thiệu các chiến dịch marketing ấn tượng đã thực hiện.',
    website: 'https://gtemedia.vn/',
    subWebsites: [
      {
        label: 'Showcase các chiến dịch truyền thông viral nổi bật',
        url: 'https://gtemedia.vn/showcase'
      }
    ],
    brandColor: '#9333ea',
    previewImage: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&w=800&q=80',
    logoAccent: {
      bg: '#9333ea',
      text: '#ffffff',
      initials: 'GT'
    }
  }
];

// Helper to look up by partner object or name
export function findProjectForPartner(partnerIdentifier: string): ClientProjectItem {
  const norm = partnerIdentifier.toLowerCase().replace(/[\s\-_]/g, '');
  
  const found = CLIENT_PROJECTS.find(p => {
    const pId = p.id.toLowerCase().replace(/[\s\-_]/g, '');
    const pName = p.name.toLowerCase().replace(/[\s\-_]/g, '');
    const pShort = p.shortName.toLowerCase().replace(/[\s\-_]/g, '');
    const pLogo = p.logoText.toLowerCase().replace(/[\s\-_]/g, '');
    return norm.includes(pId) || pId.includes(norm) ||
           norm.includes(pShort) || pShort.includes(norm) ||
           norm.includes(pLogo) || pLogo.includes(norm) ||
           norm.includes(pName) || pName.includes(norm);
  });

  return found || CLIENT_PROJECTS[0]; // Fallback to Lumi
}
