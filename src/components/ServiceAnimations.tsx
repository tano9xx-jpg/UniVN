import React, { useState, useEffect } from 'react';
import {
  Laptop,
  Smartphone,
  Search,
  Check,
  ShieldCheck,
  Zap,
  Server,
  Mail,
  TrendingUp,
  Sparkles,
  CheckCircle2,
  Palette,
  FileEdit,
  ThumbsUp,
  Share2,
  MessageCircle,
  Eye,
  Layers,
  Award,
  BarChart3,
  Cpu
} from 'lucide-react';

// 1. Web Design Interactive Animation
export const WebDesignAnimation: React.FC = () => {
  const [device, setDevice] = useState<'desktop' | 'mobile'>('desktop');
  const [pageSpeed, setPageSpeed] = useState(99);

  return (
    <div className="relative bg-gradient-to-br from-emerald-50/60 via-teal-50/40 to-white rounded-3xl p-6 border border-[#0baba0]/20 shadow-lg overflow-hidden group">
      {/* Background soft ambient glows */}
      <div className="absolute -top-10 -right-10 w-48 h-48 bg-[#0baba0]/10 rounded-full blur-2xl pointer-events-none"></div>

      {/* Control bar */}
      <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-400"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-[#91c544]"></span>
          </div>
          <span className="text-[11px] font-mono text-slate-500 pl-2">univn.vn/preview</span>
        </div>

        <div className="flex items-center gap-1.5 bg-white p-1 rounded-xl shadow-xs border border-slate-200">
          <button
            onClick={() => setDevice('desktop')}
            className={`p-1.5 rounded-lg text-xs flex items-center gap-1 transition-all ${
              device === 'desktop' ? 'bg-[#0baba0] text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Laptop className="w-3.5 h-3.5" />
            <span className="text-[10px] font-bold hidden sm:inline">PC 4K</span>
          </button>
          <button
            onClick={() => setDevice('mobile')}
            className={`p-1.5 rounded-lg text-xs flex items-center gap-1 transition-all ${
              device === 'mobile' ? 'bg-[#0baba0] text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Smartphone className="w-3.5 h-3.5" />
            <span className="text-[10px] font-bold hidden sm:inline">Mobile</span>
          </button>
        </div>
      </div>

      {/* Animated Screen Simulation */}
      <div className="flex justify-center transition-all duration-300">
        <div
          className={`bg-white rounded-2xl border border-slate-200/90 shadow-md p-4 transition-all duration-500 ${
            device === 'desktop' ? 'w-full' : 'w-64 max-w-full'
          }`}
        >
          {/* Header block */}
          <div className="flex items-center justify-between border-b pb-2.5 border-slate-100 mb-3">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-md bg-[#0baba0] flex items-center justify-center text-white font-black text-[10px]">U</div>
              <div className="h-2 w-16 bg-slate-200 rounded-full animate-pulse"></div>
            </div>
            <div className="flex gap-1.5">
              <div className="h-2 w-8 bg-slate-100 rounded-full"></div>
              <div className="h-2 w-8 bg-slate-100 rounded-full"></div>
            </div>
          </div>

          {/* Hero Banner Mock */}
          <div className="h-24 bg-gradient-to-r from-teal-500 via-[#0baba0] to-[#91c544] rounded-xl p-3 text-white flex flex-col justify-between relative overflow-hidden">
            <div className="space-y-1 z-10">
              <span className="text-[9px] uppercase tracking-wider font-bold bg-white/20 px-2 py-0.5 rounded-full inline-block">
                Responsive 100%
              </span>
              <div className="h-3 w-3/4 bg-white/90 rounded-sm"></div>
              <div className="h-2 w-1/2 bg-white/60 rounded-sm"></div>
            </div>

            <div className="flex items-center justify-between text-[10px] z-10 pt-1">
              <span className="text-white/90 font-medium">Bảo hành trọn đời</span>
              <span className="font-bold text-amber-200">Bàn giao Full Code</span>
            </div>

            {/* Subtle light sweep animation */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent animate-data-flow pointer-events-none"></div>
          </div>

          {/* Metric cards */}
          <div className="grid grid-cols-3 gap-2 mt-3 text-center">
            <div className="p-2 bg-emerald-50/70 border border-emerald-100 rounded-xl">
              <div className="text-[#0baba0] font-bold text-xs font-mono">{pageSpeed}/100</div>
              <div className="text-[9px] text-slate-500">PageSpeed</div>
            </div>
            <div className="p-2 bg-teal-50/70 border border-teal-100 rounded-xl">
              <div className="text-teal-700 font-bold text-xs font-mono">&lt; 0.8s</div>
              <div className="text-[9px] text-slate-500">Tốc độ tải</div>
            </div>
            <div className="p-2 bg-lime-50/70 border border-lime-100 rounded-xl">
              <div className="text-[#7aa736] font-bold text-xs font-mono">100%</div>
              <div className="text-[9px] text-slate-500">Chuẩn SEO</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating status tag */}
      <div className="mt-4 flex items-center justify-between text-xs text-slate-600">
        <span className="flex items-center gap-1.5 font-medium text-[#088c83]">
          <CheckCircle2 className="w-4 h-4 text-[#91c544]" />
          Tương thích mượt mà iOS, Android & Desktop
        </span>
        <span className="text-[11px] text-slate-500 font-medium">LiteSpeed Cache Powered</span>
      </div>
    </div>
  );
};

// 2. Server & Hosting NVMe Animation (Interactive Cloud Rack with Data Transmit & Ping)
export const ServerHostingAnimation: React.FC = () => {
  const [readSpeed, setReadSpeed] = useState(3450);
  const [activeNode, setActiveNode] = useState(1);
  const [packetCount, setPacketCount] = useState(14829);
  const [trafficBurst, setTrafficBurst] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setReadSpeed(() => 3400 + Math.floor(Math.random() * 140));
      setPacketCount(prev => prev + Math.floor(Math.random() * 12) + 3);
    }, 1200);
    return () => clearInterval(timer);
  }, []);

  const triggerBurst = () => {
    setTrafficBurst(true);
    setReadSpeed(3890);
    setTimeout(() => setTrafficBurst(false), 900);
  };

  return (
    <div className="relative bg-gradient-to-br from-teal-50/60 via-white to-emerald-50/40 rounded-3xl p-6 border border-[#0baba0]/25 shadow-lg space-y-4 overflow-hidden group">
      {/* Dynamic ambient glow */}
      <div className="absolute -top-12 -right-12 w-48 h-48 bg-[#0baba0]/15 rounded-full blur-2xl pointer-events-none animate-pulse-glow"></div>
      <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#91c544]/10 rounded-full blur-2xl pointer-events-none"></div>

      <div className="flex items-center justify-between relative z-10">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#0baba0] to-[#088c83] text-white flex items-center justify-center shadow-xs">
            <Server className="w-5 h-5 animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-xs text-slate-900 block">Pure NVMe SSD Cloud Rack</span>
              <span className="w-2 h-2 rounded-full bg-[#91c544] animate-ping inline-block"></span>
            </div>
            <span className="text-[10px] text-emerald-700 font-medium flex items-center gap-1">
              Datacenter Tier III · U.2 Samsung Enterprise
            </span>
          </div>
        </div>
        <button
          onClick={triggerBurst}
          className="px-2.5 py-1 bg-white hover:bg-teal-50 text-[#088c83] border border-[#0baba0]/30 text-[10px] font-bold rounded-full shadow-2xs hover:scale-105 active:scale-95 transition-all cursor-pointer flex items-center gap-1"
          title="Bấm để mô phỏng test tốc độ NVMe"
        >
          <Zap className="w-3 h-3 text-[#91c544]" />
          <span>Test I/O Speed</span>
        </button>
      </div>

      {/* Animated Server Rack Bays with Interactive Selection */}
      <div className="space-y-2 bg-slate-50/80 p-3 rounded-2xl border border-slate-200/90 relative z-10">
        {[
          { id: 1, name: 'NODE-01 [Intel Xeon Platinum]', temp: '31°C', load: '18%' },
          { id: 2, name: 'NODE-02 [AMD EPYC Gen 4 NVMe]', temp: '33°C', load: '24%' },
          { id: 3, name: 'NODE-03 [Cloud Storage Backup]', temp: '29°C', load: '12%' }
        ].map((node) => {
          const isSelected = activeNode === node.id;
          return (
            <div
              key={node.id}
              onClick={() => setActiveNode(node.id)}
              className={`p-2.5 rounded-xl border transition-all duration-300 flex items-center justify-between cursor-pointer ${
                isSelected
                  ? 'bg-white border-[#0baba0] shadow-sm ring-1 ring-[#0baba0]/30'
                  : 'bg-white/80 hover:bg-white border-slate-100 hover:border-slate-200'
              }`}
            >
              <div className="flex items-center gap-2">
                <span className={`w-2.5 h-2.5 rounded-full ${isSelected ? 'bg-[#0baba0] animate-pulse' : 'bg-slate-300'}`}></span>
                <span className="font-mono text-xs font-bold text-slate-800">{node.name}</span>
              </div>
              <div className="flex items-center gap-2.5 text-[11px] font-mono">
                <span className="text-slate-400 hidden sm:inline">{node.temp}</span>
                <span className={`font-bold px-1.5 py-0.5 rounded text-[10px] ${
                  isSelected ? 'bg-teal-50 text-[#0baba0]' : 'text-slate-500'
                }`}>
                  {trafficBurst ? 'BURST 100%' : `TẢI ${node.load}`}
                </span>
                <span className="font-bold text-[#0baba0]">{isSelected ? readSpeed : 3400} MB/s</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Speedometer and bandwidth stats with live counter */}
      <div className="grid grid-cols-2 gap-3 text-xs relative z-10">
        <div className="p-3 bg-white rounded-xl border border-slate-100 shadow-2xs space-y-0.5 relative overflow-hidden">
          <div className="flex items-center justify-between">
            <span className="text-slate-500 text-[10px]">Băng Thông Mạng Cổng</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#0baba0] animate-ping"></span>
          </div>
          <div className="font-black text-sm text-slate-900 font-mono flex items-baseline gap-1">
            <span>10 Gbps</span>
            <span className="text-[10px] text-slate-400 font-normal">Datacenter</span>
          </div>
          <div className="text-emerald-700 text-[10px] font-medium flex items-center gap-1">
            <span>{packetCount.toLocaleString()} req/phút</span>
            <span className="text-slate-400">· 0% packet loss</span>
          </div>
        </div>

        <div className="p-3 bg-white rounded-xl border border-slate-100 shadow-2xs space-y-0.5">
          <span className="text-slate-500 text-[10px]">Tự Động Sao Lưu Hàng Ngày</span>
          <div className="font-black text-sm text-slate-900 font-mono">JetBackup 5.0</div>
          <span className="text-[#0baba0] text-[10px] font-medium flex items-center gap-1">
            <CheckCircle2 className="w-3 h-3 text-[#91c544]" />
            Lưu 7 ngày tại server riêng biệt
          </span>
        </div>
      </div>
    </div>
  );
};

// 3. Domain Radar Scanner Animation
export const DomainAnimation: React.FC = () => {
  const [activeExt, setActiveExt] = useState(0);
  const extensions = [
    { ext: '.vn', status: 'Sẵn sàng đăng ký', price: '450k/năm', color: 'text-[#0baba0]' },
    { ext: '.com', status: 'Bảo hộ toàn cầu', price: '320k/năm', color: 'text-blue-600' },
    { ext: '.com.vn', status: 'Xác thực doanh nghiệp', price: '350k/năm', color: 'text-emerald-600' },
    { ext: '.net', status: 'Công nghệ & dịch vụ', price: '340k/năm', color: 'text-amber-600' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveExt(prev => (prev + 1) % extensions.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative bg-gradient-to-br from-white via-teal-50/40 to-emerald-50/50 rounded-3xl p-6 border border-[#0baba0]/20 shadow-lg space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-emerald-100 text-[#91c544] flex items-center justify-center">
            <Search className="w-4 h-4 text-[#0baba0]" />
          </div>
          <div>
            <span className="font-bold text-xs text-slate-900 block">Hệ Thống Tra Cứu DNS Whois</span>
            <span className="text-[10px] text-slate-500">Kích hoạt trong 5 phút</span>
          </div>
        </div>
        <span className="text-[10px] font-bold text-[#0baba0] bg-teal-50 border border-teal-200 px-2.5 py-0.5 rounded-full">
          DNS Anycast
        </span>
      </div>

      {/* Radar scanning display */}
      <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-xs space-y-2">
        <div className="flex items-center justify-between border-b pb-2 text-xs">
          <span className="text-slate-500">Đuôi tên miền kiểm tra:</span>
          <span className="font-mono font-bold text-sm text-[#0baba0]">{extensions[activeExt].ext}</span>
        </div>

        <div className="flex items-center justify-between text-xs pt-1">
          <span className="flex items-center gap-1.5 text-emerald-600 font-bold">
            <Check className="w-4 h-4 text-[#91c544]" />
            {extensions[activeExt].status}
          </span>
          <span className="font-mono font-bold text-slate-800">{extensions[activeExt].price}</span>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-1.5 text-center text-xs">
        {extensions.map((item, idx) => (
          <div
            key={idx}
            className={`p-2 rounded-xl transition-all border ${
              activeExt === idx
                ? 'bg-teal-50 border-[#0baba0] font-bold shadow-xs'
                : 'bg-slate-50 border-slate-100 text-slate-600'
            }`}
          >
            <div className={`font-mono text-xs ${item.color}`}>{item.ext}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

// 4. Email Google Workspace Animation (Interactive Apps Switcher & Real-time Inbox)
export const EmailAnimation: React.FC = () => {
  const [activeApp, setActiveApp] = useState<'gmail' | 'drive' | 'meet'>('gmail');
  const [hasNewMail, setHasNewMail] = useState(true);

  return (
    <div className="relative bg-gradient-to-br from-white via-blue-50/40 to-teal-50/50 rounded-3xl p-6 border border-[#0baba0]/25 shadow-lg space-y-4 overflow-hidden group">
      {/* Background glow */}
      <div className="absolute -top-10 -right-10 w-44 h-44 bg-blue-500/10 rounded-full blur-2xl pointer-events-none"></div>

      <div className="flex items-center justify-between relative z-10">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-red-500 to-rose-600 text-white flex items-center justify-center font-black text-sm shadow-xs">
            M
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-xs text-slate-900 block">Google Workspace Doanh Nghiệp</span>
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping inline-block"></span>
            </div>
            <span className="text-[10px] text-slate-500 font-mono">ceo@yourdomain.com</span>
          </div>
        </div>

        {/* Workspace App Tabs */}
        <div className="flex items-center gap-1 bg-slate-100/80 p-1 rounded-xl border border-slate-200/80">
          <button
            onClick={() => setActiveApp('gmail')}
            className={`px-2 py-1 rounded-lg text-[10px] font-bold transition-all cursor-pointer ${
              activeApp === 'gmail' ? 'bg-white text-rose-600 shadow-2xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Gmail
          </button>
          <button
            onClick={() => setActiveApp('drive')}
            className={`px-2 py-1 rounded-lg text-[10px] font-bold transition-all cursor-pointer ${
              activeApp === 'drive' ? 'bg-white text-emerald-600 shadow-2xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Drive
          </button>
          <button
            onClick={() => setActiveApp('meet')}
            className={`px-2 py-1 rounded-lg text-[10px] font-bold transition-all cursor-pointer ${
              activeApp === 'meet' ? 'bg-white text-blue-600 shadow-2xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Meet
          </button>
        </div>
      </div>

      {/* Simulated Email Notification Card based on active tab */}
      <div className="bg-white p-3.5 rounded-2xl border border-slate-100 shadow-2xs space-y-2 relative z-10">
        {activeApp === 'gmail' && (
          <div className="space-y-1.5">
            <div className="flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-ping"></span>
                <strong className="text-slate-800 font-semibold text-[11px]">hopdong@unicreation.vn</strong>
              </div>
              <span className="text-[10px] text-slate-400">Vừa xong</span>
            </div>
            <p className="text-[11px] text-slate-700 line-clamp-1 font-medium">
              Xác nhận bàn giao hệ thống Google Workspace & Hóa đơn VAT điện tử...
            </p>
            <div className="flex items-center gap-2 pt-1 text-[10px]">
              <span className="bg-emerald-50 text-emerald-700 font-semibold px-2 py-0.5 rounded-md border border-emerald-200">
                SPF / DKIM / DMARC Pass
              </span>
              <span className="text-slate-400">Tỷ lệ vào Inbox 99.9%</span>
            </div>
          </div>
        )}

        {activeApp === 'drive' && (
          <div className="space-y-1.5">
            <div className="flex items-center justify-between text-xs">
              <span className="text-slate-800 font-bold text-[11px]">Google Drive Cloud Storage</span>
              <span className="text-emerald-700 font-mono font-bold text-[10px]">2 TB / Người dùng</span>
            </div>
            <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
              <div className="bg-gradient-to-r from-blue-500 to-emerald-500 h-full w-[24%] rounded-full"></div>
            </div>
            <p className="text-[10px] text-slate-500">Đã dùng 480 GB (24%) · Đồng bộ máy tính & điện thoại tức thì</p>
          </div>
        )}

        {activeApp === 'meet' && (
          <div className="space-y-1.5">
            <div className="flex items-center justify-between text-xs">
              <span className="text-slate-800 font-bold text-[11px]">Google Meet Hội Nghị Trực Tuyến</span>
              <span className="bg-blue-50 text-blue-700 font-bold text-[10px] px-2 py-0.5 rounded-md">Full HD 1080p</span>
            </div>
            <p className="text-[10px] text-slate-600">Hỗ trợ tối đa 150 người tham gia · Ghi hình cuộc họp trực tiếp lên Drive</p>
          </div>
        )}
      </div>

      <div className="grid grid-cols-3 gap-2 text-center text-xs relative z-10">
        <div className="p-2.5 bg-slate-50/90 rounded-xl border border-slate-100">
          <div className="font-extrabold text-slate-900 text-xs font-mono">30GB - 2TB</div>
          <div className="text-[9px] text-slate-500">Dung lượng/User</div>
        </div>
        <div className="p-2.5 bg-teal-50/80 rounded-xl border border-teal-100/80">
          <div className="font-extrabold text-[#088c83] text-xs">2FA + TLS</div>
          <div className="text-[9px] text-[#088c83]">Bảo mật cấp cao</div>
        </div>
        <div className="p-2.5 bg-blue-50/80 rounded-xl border border-blue-100/80">
          <div className="font-extrabold text-blue-700 text-xs">Đối Tác Google</div>
          <div className="text-[9px] text-blue-600">Xuất VAT 100%</div>
        </div>
      </div>
    </div>
  );
};

// 5. Digital Ads & Marketing Animation (Interactive Keyword Simulator)
export const AdsMarketingAnimation: React.FC = () => {
  const [activeChannel, setActiveChannel] = useState<'search' | 'shopping' | 'maps'>('search');
  const [clickCount, setClickCount] = useState(384);

  const simulateClick = () => {
    setClickCount(prev => prev + 1);
  };

  return (
    <div className="relative bg-gradient-to-br from-white via-amber-50/40 to-teal-50/50 rounded-3xl p-6 border border-[#0baba0]/25 shadow-lg space-y-4 overflow-hidden group">
      {/* Background glow */}
      <div className="absolute -top-10 -right-10 w-44 h-44 bg-amber-400/15 rounded-full blur-2xl pointer-events-none"></div>

      <div className="flex items-center justify-between relative z-10">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 text-white flex items-center justify-center font-black text-xs shadow-xs">
            Ads
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-xs text-slate-900 block">Google Search & Performance Max</span>
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping inline-block"></span>
            </div>
            <span className="text-[10px] text-emerald-700 font-medium">Đối Tác Google Premier Partner</span>
          </div>
        </div>

        {/* Channels */}
        <div className="flex items-center gap-1 bg-slate-100/80 p-1 rounded-xl border border-slate-200/80">
          <button
            onClick={() => setActiveChannel('search')}
            className={`px-2 py-1 rounded-lg text-[10px] font-bold transition-all cursor-pointer ${
              activeChannel === 'search' ? 'bg-white text-blue-700 shadow-2xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Tìm Kiếm
          </button>
          <button
            onClick={() => setActiveChannel('shopping')}
            className={`px-2 py-1 rounded-lg text-[10px] font-bold transition-all cursor-pointer ${
              activeChannel === 'shopping' ? 'bg-white text-amber-700 shadow-2xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Shopping
          </button>
        </div>
      </div>

      {/* Simulated Search Ad result */}
      <div className="bg-white p-3.5 rounded-2xl border border-slate-100 shadow-2xs space-y-2 relative z-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-[10px]">
            <span className="font-black text-amber-700 bg-amber-100 border border-amber-300 px-1.5 py-0.5 rounded">
              Tài trợ · QC
            </span>
            <span className="text-slate-500 font-mono">univn.vn/thiet-ke-web</span>
          </div>
          <button
            onClick={simulateClick}
            className="text-[10px] text-[#088c83] font-bold hover:underline cursor-pointer"
          >
            Click thử ({clickCount})
          </button>
        </div>

        <div>
          <h5 className="font-extrabold text-xs text-blue-700 hover:underline cursor-pointer">
            Công Ty Thiết Kế Website Uy Tín Số 1 Hà Nội | Uni Creation
          </h5>
          <p className="text-[10px] text-slate-600 line-clamp-2 mt-0.5 leading-relaxed">
            Hơn +1000 mẫu website đẹp, chuẩn SEO Google. Tặng Hosting NVMe, Tên miền quốc tế. Bàn giao nhanh 2-3 ngày, bảo hành trọn đời!
          </p>
        </div>

        {/* Extensions sitelinks */}
        <div className="grid grid-cols-2 gap-1.5 pt-1 border-t border-slate-100 text-[10px]">
          <span className="text-blue-600 font-medium hover:underline cursor-pointer">▶ Bảng Giá Thiết Kế Web</span>
          <span className="text-blue-600 font-medium hover:underline cursor-pointer">▶ Kho Giao Diện Đẹp 2026</span>
          <span className="text-blue-600 font-medium hover:underline cursor-pointer">▶ Dịch Vụ Quảng Cáo Top 1</span>
          <span className="text-blue-600 font-medium hover:underline cursor-pointer">▶ Đăng Ký Tư Vấn 0đ</span>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2 text-center text-xs relative z-10">
        <div className="p-2.5 bg-emerald-50/80 rounded-xl border border-emerald-100/80">
          <div className="font-extrabold text-emerald-800 text-xs font-mono">Top 1 - 3</div>
          <div className="text-[9px] text-emerald-700">Vị trí hiển thị</div>
        </div>
        <div className="p-2.5 bg-amber-50/80 rounded-xl border border-amber-100/80">
          <div className="font-extrabold text-amber-800 text-xs font-mono">+280%</div>
          <div className="text-[9px] text-amber-700">Tăng đơn hàng</div>
        </div>
        <div className="p-2.5 bg-teal-50/80 rounded-xl border border-teal-100/80">
          <div className="font-extrabold text-[#088c83] text-xs">AI Smart Bidding</div>
          <div className="text-[9px] text-[#088c83]">Chặn click ảo 100%</div>
        </div>
      </div>
    </div>
  );
};

// 6. Brand Identity & Logo Design Animation (Interactive Visual Showcase)
export const BrandIdentityAnimation: React.FC = () => {
  const [activePalette, setActivePalette] = useState(0);
  const palettes = [
    { name: 'Uni Creation Brand', primary: '#0baba0', accent: '#91c544', dark: '#002b2c', light: '#f8fafc' },
    { name: 'Luxury Enterprise', primary: '#d97706', accent: '#b45309', dark: '#1e293b', light: '#fefce8' },
    { name: 'Tech Innovation', primary: '#2563eb', accent: '#06b6d4', dark: '#0f172a', light: '#eff6ff' }
  ];

  return (
    <div className="relative bg-gradient-to-br from-emerald-50/40 via-white to-teal-50/50 rounded-3xl p-6 border border-[#0baba0]/20 shadow-lg space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-teal-100 text-[#0baba0] flex items-center justify-center">
            <Palette className="w-4 h-4" />
          </div>
          <div>
            <span className="font-bold text-xs text-slate-900 block">Quy Chuẩn Nhận Diện Thương Hiệu</span>
            <span className="text-[10px] text-slate-500">Logo Golden Ratio & Brand Book 2026</span>
          </div>
        </div>
        <span className="px-2.5 py-0.5 bg-teal-50 border border-teal-200 text-[#088c83] text-[10px] font-bold rounded-full">
          Vector SVG 100%
        </span>
      </div>

      {/* Interactive Logo Construction Grid */}
      <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-xs space-y-3">
        <div className="flex items-center justify-between border-b pb-2 text-xs">
          <span className="text-slate-500 font-medium">Lưới tỷ lệ vàng thiết kế (Golden Ratio Grid):</span>
          <div className="flex gap-1">
            {palettes.map((p, idx) => (
              <button
                key={idx}
                onClick={() => setActivePalette(idx)}
                className={`w-4 h-4 rounded-full border transition-all ${
                  activePalette === idx ? 'scale-125 border-slate-700 shadow-xs' : 'border-slate-200'
                }`}
                style={{ backgroundColor: p.primary }}
                title={p.name}
              />
            ))}
          </div>
        </div>

        {/* Visual Mock of Logo Geometry */}
        <div className="relative h-28 bg-slate-50 rounded-xl flex items-center justify-center border border-slate-200/80 overflow-hidden">
          {/* Subtle grid lines */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:16px_16px] opacity-40"></div>
          
          <div className="z-10 flex items-center gap-3">
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-md transform hover:rotate-6 transition-transform"
              style={{ backgroundColor: palettes[activePalette].primary }}
            >
              <span className="text-white font-extrabold text-xl font-mono">U</span>
            </div>
            <div>
              <div className="font-extrabold text-slate-900 text-sm">Uni Creation Identity</div>
              <div className="text-[10px] font-medium" style={{ color: palettes[activePalette].primary }}>
                Bộ nhận diện độc quyền đa nền tảng
              </div>
            </div>
          </div>
        </div>

        {/* Color Swatches */}
        <div className="grid grid-cols-4 gap-2 pt-1 text-center">
          <div className="p-1.5 rounded-lg border border-slate-100" style={{ backgroundColor: palettes[activePalette].primary + '15' }}>
            <div className="w-full h-3 rounded mb-1" style={{ backgroundColor: palettes[activePalette].primary }}></div>
            <span className="text-[9px] font-mono text-slate-600 block">Chính</span>
          </div>
          <div className="p-1.5 rounded-lg border border-slate-100" style={{ backgroundColor: palettes[activePalette].accent + '15' }}>
            <div className="w-full h-3 rounded mb-1" style={{ backgroundColor: palettes[activePalette].accent }}></div>
            <span className="text-[9px] font-mono text-slate-600 block">Phụ</span>
          </div>
          <div className="p-1.5 rounded-lg border border-slate-100" style={{ backgroundColor: palettes[activePalette].dark + '15' }}>
            <div className="w-full h-3 rounded mb-1" style={{ backgroundColor: palettes[activePalette].dark }}></div>
            <span className="text-[9px] font-mono text-slate-600 block">Đậm</span>
          </div>
          <div className="p-1.5 rounded-lg border border-slate-100 bg-slate-50">
            <div className="w-full h-3 rounded mb-1 bg-slate-300"></div>
            <span className="text-[9px] font-mono text-slate-600 block">Typo</span>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between text-xs text-slate-600 pt-1">
        <span className="flex items-center gap-1.5 font-semibold text-[#088c83]">
          <CheckCircle2 className="w-4 h-4 text-[#91c544]" />
          Bộ ấn phẩm: Card, Phong bì, File kẹp, Đồng phục
        </span>
        <span className="text-[11px] text-slate-500">File Ai, EPS, PDF gốc</span>
      </div>
    </div>
  );
};

// 7. Content Writing SEO Simulator Animation
export const ContentWritingAnimation: React.FC = () => {
  const [wordCount, setWordCount] = useState(1240);

  useEffect(() => {
    const timer = setInterval(() => {
      setWordCount(prev => (prev < 1500 ? prev + 4 : 1240));
    }, 1800);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative bg-gradient-to-br from-white via-lime-50/30 to-teal-50/40 rounded-3xl p-6 border border-[#0baba0]/20 shadow-lg space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-lime-100 text-[#7aa736] flex items-center justify-center">
            <FileEdit className="w-4 h-4 text-[#0baba0]" />
          </div>
          <div>
            <span className="font-bold text-xs text-slate-900 block">Biên Tập Nội Dung Chuẩn SEO VIP</span>
            <span className="text-[10px] text-slate-500">Tối ưu Search Intent & Tỷ lệ chuyển đổi</span>
          </div>
        </div>
        <span className="px-2.5 py-0.5 bg-emerald-100 text-emerald-800 text-[10px] font-bold rounded-full">
          SEO Score 98/100
        </span>
      </div>

      {/* Simulated SEO Article Editor */}
      <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-xs space-y-2.5">
        <div className="flex items-center justify-between text-xs border-b pb-2">
          <span className="font-bold text-slate-800">[H1] 10 Tiêu Chí Chọn Công Ty Thiết Kế Website...</span>
          <span className="font-mono text-[11px] text-[#0baba0] font-bold">{wordCount} từ</span>
        </div>

        {/* Content snippet with highlighted keywords */}
        <p className="text-[11px] text-slate-600 leading-relaxed">
          Khi tìm kiếm đơn vị <span className="bg-teal-50 text-[#088c83] font-semibold px-1 rounded">thiết kế website chuẩn SEO</span>, doanh nghiệp cần chú ý yếu tố tốc độ tải trang dưới 1 giây và cam kết <span className="bg-lime-50 text-[#7aa736] font-semibold px-1 rounded">bảo hành trọn đời</span>...
        </p>

        {/* Real-time SEO checklist */}
        <div className="grid grid-cols-2 gap-2 pt-1 text-[11px]">
          <div className="flex items-center gap-1.5 text-emerald-700">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#91c544]" />
            <span>Mật độ từ khóa: 2.1% (Chuẩn)</span>
          </div>
          <div className="flex items-center gap-1.5 text-emerald-700">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#91c544]" />
            <span>Cấu trúc H2, H3 mạch lạc</span>
          </div>
          <div className="flex items-center gap-1.5 text-emerald-700">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#91c544]" />
            <span>Meta Title & Desc chuẩn pixel</span>
          </div>
          <div className="flex items-center gap-1.5 text-emerald-700">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#91c544]" />
            <span>Unique 100% không trùng lặp</span>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between text-xs text-slate-600 pt-1">
        <span className="font-semibold text-[#088c83]">Tăng thứ hạng từ khóa Google tự nhiên</span>
        <span className="text-[11px] text-slate-500 font-mono">Index nhanh 24h</span>
      </div>
    </div>
  );
};

// 8. Facebook & Social Ads Animation
export const FacebookSocialAnimation: React.FC = () => {
  const [likes, setLikes] = useState(1480);
  const [hasLiked, setHasLiked] = useState(false);

  const toggleLike = () => {
    setLikes(prev => hasLiked ? prev - 1 : prev + 1);
    setHasLiked(!hasLiked);
  };

  return (
    <div className="relative bg-gradient-to-br from-white via-sky-50/40 to-teal-50/40 rounded-3xl p-6 border border-[#0baba0]/20 shadow-lg space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-sm">
            f
          </div>
          <div>
            <span className="font-bold text-xs text-slate-900 block">Quảng Cáo Facebook & Instagram Lead Ads</span>
            <span className="text-[10px] text-slate-500">Nhắm đúng khách hàng tiềm năng 25 - 45 tuổi</span>
          </div>
        </div>
        <span className="px-2.5 py-0.5 bg-blue-50 text-blue-700 text-[10px] font-bold rounded-full">
          CTR 4.8%
        </span>
      </div>

      {/* Simulated Social Sponsored Post */}
      <div className="bg-white p-3.5 rounded-2xl border border-slate-100 shadow-xs space-y-2.5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-[#0baba0] text-white flex items-center justify-center font-bold text-xs">
              U
            </div>
            <div>
              <div className="flex items-center gap-1">
                <span className="text-xs font-bold text-slate-900">Uni Creation Việt Nam</span>
                <CheckCircle2 className="w-3 h-3 text-blue-500 fill-blue-500" />
              </div>
              <span className="text-[10px] text-slate-400 block">Được tài trợ · Sponsored</span>
            </div>
          </div>
          <button className="text-[11px] font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-md hover:bg-blue-100">
            Theo dõi
          </button>
        </div>

        <p className="text-[11px] text-slate-700 line-clamp-2">
          Sở hữu ngay website doanh nghiệp chuẩn SEO với chi phí trọn gói chỉ từ 2.500.000 đ. Tặng tên miền, hosting và bảo hành trọn đời!
        </p>

        {/* Ad creative banner mockup */}
        <div className="h-20 bg-gradient-to-r from-blue-600 via-[#0baba0] to-[#91c544] rounded-xl flex items-center justify-between p-3 text-white">
          <div className="space-y-0.5">
            <span className="text-[9px] uppercase tracking-wider font-bold bg-white/20 px-1.5 py-0.5 rounded">Ưu Đãi Hôm Nay</span>
            <div className="text-xs font-bold">Thiết Kế Web Trọn Gói 2.5 Tr</div>
          </div>
          <span className="px-3 py-1 bg-white text-slate-900 font-bold text-[10px] rounded-lg shadow-xs">
            Gửi Tin Nhắn
          </span>
        </div>

        {/* Engagement bar */}
        <div className="flex items-center justify-between text-xs text-slate-600 pt-1 border-t border-slate-100">
          <button
            onClick={toggleLike}
            className={`flex items-center gap-1 cursor-pointer transition-colors ${
              hasLiked ? 'text-blue-600 font-bold' : 'hover:text-blue-600'
            }`}
          >
            <ThumbsUp className="w-3.5 h-3.5" />
            <span>{likes}</span>
          </button>
          <div className="flex items-center gap-1 text-slate-500">
            <MessageCircle className="w-3.5 h-3.5" />
            <span>284 bình luận</span>
          </div>
          <div className="flex items-center gap-1 text-slate-500">
            <Share2 className="w-3.5 h-3.5" />
            <span>192 chia sẻ</span>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between text-xs text-slate-600 pt-1">
        <span className="font-semibold text-[#088c83]">Tối ưu chi phí mỗi tin nhắn (Cost/Lead)</span>
        <span className="text-[11px] text-slate-500 font-mono">Pixel Tracking Active</span>
      </div>
    </div>
  );
};
