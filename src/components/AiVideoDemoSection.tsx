import React, { useState, useEffect, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Play,
  Pause,
  RotateCcw,
  Volume2,
  VolumeX,
  Maximize2,
  Film,
  Sparkles,
  Bot,
  Code2,
  Layers,
  Zap,
  CheckCircle2,
  ArrowRight,
  Cpu,
  Brain,
  ScanLine,
  SlidersHorizontal,
  ChevronRight,
  ShieldCheck,
  Search,
  MessageSquare,
  QrCode,
  Smartphone,
  Monitor,
  Terminal,
  Activity,
  Award,
  TrendingUp,
  FileCode2,
  ExternalLink
} from 'lucide-react';

interface AiVideoDemoSectionProps {
  onConsult?: (serviceName?: string) => void;
}

interface VideoClip {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  duration: number; // in seconds
  durationFormatted: string;
  category: string;
  icon: React.ElementType;
  accentColor: string;
  description: string;
  chapters: { time: number; label: string; phase: string }[];
  tags: string[];
}

export const AiVideoDemoSection: React.FC<AiVideoDemoSectionProps> = ({ onConsult }) => {
  const [selectedClipId, setSelectedClipId] = useState<string>('clip-code');
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [isMuted, setIsMuted] = useState<boolean>(true); // default muted for comfortable browsing
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(1);
  const playerContainerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);

  const VIDEO_CLIPS: VideoClip[] = [
    {
      id: 'clip-code',
      title: 'AI Code Copilot: Lập Trình & Rà Soát Tự Động',
      subtitle: 'Quy trình sinh mã nguồn chuẩn sạch, tối ưu truy vấn và quét bảo mật OWASP trong 20 giây',
      badge: 'Engineering Workflow',
      duration: 30,
      durationFormatted: '00:30',
      category: 'Lập Trình AI',
      icon: Code2,
      accentColor: 'from-teal-500 to-emerald-500',
      description:
        'Kỹ sư Uni Creation đưa yêu cầu chức năng (Prompt/Spec) vào hệ sinh thái AI nội bộ. Hệ thống tự động phân tích cấu trúc CSDL, sinh mã nguồn TypeScript và chạy 40+ bài test kiểm thử tự động trước khi hòa trộn vào nhánh chính.',
      chapters: [
        { time: 0, label: '00:00 Phân tích spec', phase: 'spec' },
        { time: 10, label: '00:10 AI sinh mã & UI', phase: 'code' },
        { time: 20, label: '00:20 Quét OWASP & Test', phase: 'test' }
      ],
      tags: ['React 19 & TypeScript', 'Tự động sửa bug', 'Chuẩn OWASP', 'Unit Test 100%']
    },
    {
      id: 'clip-design',
      title: 'AI Generative UI/UX & Bản Vẽ Thiết Kế Tương Thích',
      subtitle: 'Biến ý tưởng kinh doanh thành giao diện website trực quan, tối ưu trải nghiệm người dùng',
      badge: 'UI/UX Design',
      duration: 26,
      durationFormatted: '00:26',
      category: 'Thiết Kế Tự Động',
      icon: Layers,
      accentColor: 'from-cyan-500 to-blue-500',
      description:
        'AI nhận diện bộ nhận diện thương hiệu (Logo, màu sắc chủ đạo, ngành nghề) và tự động lắp ráp hệ thống Layout lưới 12 cột, tối ưu kích thước phông chữ và bố cục responsive mượt mà trên cả Mobile, Tablet lẫn Desktop.',
      chapters: [
        { time: 0, label: '00:00 Trích xuất Palette', phase: 'palette' },
        { time: 9, label: '00:09 Lắp ráp Layout lưới', phase: 'wireframe' },
        { time: 18, label: '00:18 Tương thích đa thiết bị', phase: 'responsive' }
      ],
      tags: ['Grid 12 Cột', 'Auto Palette', 'Mobile First', 'Figma to Code']
    },
    {
      id: 'clip-seo',
      title: 'AI Semantic SEO & Sinh Nội Dung Thực Thể Entity',
      subtitle: 'Phân tích top đối thủ Google, cấu trúc thẻ Heading và xuất bản bài viết chuẩn SEO',
      badge: 'Growth & SEO',
      duration: 28,
      durationFormatted: '00:28',
      category: 'SEO Thông Minh',
      icon: Brain,
      accentColor: 'from-purple-500 to-pink-500',
      description:
        'Mô hình xử lý ngôn ngữ tự nhiên quét toàn bộ thị trường tìm kiếm Việt Nam, tự động tạo cấu trúc từ khóa LSI, sinh bài viết 1.200 từ chuẩn Onpage và gán mã Schema.org JSON-LD để Google lập chỉ mục nhanh gấp 3.5 lần.',
      chapters: [
        { time: 0, label: '00:00 Quét đối thủ Top 1', phase: 'crawler' },
        { time: 10, label: '00:10 Sơ đồ thực thể Entity', phase: 'graph' },
        { time: 19, label: '00:19 Bứt phá Top 1 Google', phase: 'ranking' }
      ],
      tags: ['NLP Tiếng Việt', 'Schema JSON-LD', 'Chuẩn Core Web Vitals', 'Index Google < 24h']
    },
    {
      id: 'clip-agent',
      title: 'AI Customer Care & Đối Soát VietQR Thời Gian Thực',
      subtitle: 'Trợ lý ảo chốt đơn tự động 24/7 và xác thực chuyển khoản ngân hàng qua Computer Vision',
      badge: 'E-commerce Ops',
      duration: 24,
      durationFormatted: '00:24',
      category: 'Bán Hàng 24/7',
      icon: Bot,
      accentColor: 'from-amber-500 to-emerald-500',
      description:
        'Trợ lý AI thấu hiểu tiếng Việt tự nhiên, tư vấn chính sách và tự động nhận diện ảnh chụp bill chuyển khoản VietQR, đối soát giao dịch và kích hoạt đơn hàng trong 0.3 giây mà không cần con người trực đêm.',
      chapters: [
        { time: 0, label: '00:00 Khách chat tư vấn', phase: 'chat' },
        { time: 8, label: '00:08 AI sinh mã VietQR', phase: 'qr' },
        { time: 16, label: '00:16 Quét bill OCR & Chốt', phase: 'ocr' }
      ],
      tags: ['Chatbot 24/7', 'Computer Vision OCR', 'VietQR Tự Động', 'Tích hợp Zalo']
    }
  ];

  const currentClip = VIDEO_CLIPS.find((c) => c.id === selectedClipId) || VIDEO_CLIPS[0];

  // Synthesize sound effects using Web Audio API safely (only when unmuted and user interacted)
  const playBeep = (freq: number = 440, duration: number = 0.08, type: OscillatorType = 'sine') => {
    if (isMuted) return;
    try {
      if (!audioCtxRef.current) {
        audioCtxRef.current = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
      }
      if (audioCtxRef.current.state === 'suspended') {
        audioCtxRef.current.resume();
      }
      const osc = audioCtxRef.current.createOscillator();
      const gain = audioCtxRef.current.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, audioCtxRef.current.currentTime);
      gain.gain.setValueAtTime(0.04, audioCtxRef.current.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, audioCtxRef.current.currentTime + duration);
      osc.connect(gain);
      gain.connect(audioCtxRef.current.destination);
      osc.start();
      osc.stop(audioCtxRef.current.currentTime + duration);
    } catch {
      // Audio playback blocked or unsupported
    }
  };

  // Video progress timer simulation - running at 100ms precision for smooth motion
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentTime((prev) => {
          if (prev >= currentClip.duration) {
            // Loop or advance to next clip
            return 0;
          }
          const next = Number((prev + 0.1 * playbackSpeed).toFixed(2));
          // Sound trigger on specific timestamps
          if (Math.floor(next) !== Math.floor(prev)) {
            if (next % 5 === 0) playBeep(520, 0.06, 'triangle');
          }
          return next;
        });
      }, 100);
    }
    return () => clearInterval(interval);
  }, [isPlaying, currentClip.duration, playbackSpeed, isMuted]);

  // Switch clip
  const handleSelectClip = (clipId: string) => {
    setSelectedClipId(clipId);
    setCurrentTime(0);
    setIsPlaying(true);
    playBeep(660, 0.1, 'sine');
  };

  // Format seconds to mm:ss
  const formatSeconds = (sec: number) => {
    const s = Math.floor(sec);
    const m = Math.floor(s / 60);
    const rem = s % 60;
    return `${m.toString().padStart(2, '0')}:${rem.toString().padStart(2, '0')}`;
  };

  const progressPercentage = Math.min(100, (currentTime / currentClip.duration) * 100);

  // Background Canvas 60 FPS Particle & Scanline Engine
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = canvas.offsetWidth || 800);
    let height = (canvas.height = canvas.offsetHeight || 450);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth || 800;
      height = canvas.height = canvas.offsetHeight || 450;
    };
    window.addEventListener('resize', handleResize);

    // Particle nodes
    const particles = Array.from({ length: 45 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.8,
      vy: (Math.random() - 0.5) * 0.8,
      size: Math.random() * 2 + 1,
      opacity: Math.random() * 0.4 + 0.1
    }));

    let scanY = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Cyber Grid
      ctx.strokeStyle = 'rgba(11, 171, 160, 0.05)';
      ctx.lineWidth = 1;
      const gridSize = 32;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Moving Laser Scanner Beam
      if (isPlaying) {
        scanY = (scanY + 1.8 * playbackSpeed) % height;
        const grad = ctx.createLinearGradient(0, scanY - 30, 0, scanY + 30);
        grad.addColorStop(0, 'rgba(11, 171, 160, 0)');
        grad.addColorStop(0.5, 'rgba(11, 171, 160, 0.18)');
        grad.addColorStop(1, 'rgba(11, 171, 160, 0)');
        ctx.fillStyle = grad;
        ctx.fillRect(0, scanY - 30, width, 60);

        ctx.strokeStyle = 'rgba(145, 197, 68, 0.45)';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(0, scanY);
        ctx.lineTo(width, scanY);
        ctx.stroke();
      }

      // Floating Neural Particle Nodes
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        if (isPlaying) {
          p.x += p.vx * playbackSpeed;
          p.y += p.vy * playbackSpeed;
          if (p.x < 0) p.x = width;
          if (p.x > width) p.x = 0;
          if (p.y < 0) p.y = height;
          if (p.y > height) p.y = 0;
        }

        ctx.fillStyle = `rgba(11, 171, 160, ${p.opacity})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        // Connect nearby particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist < 75) {
            ctx.strokeStyle = `rgba(11, 171, 160, ${0.12 * (1 - dist / 75)})`;
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
    };
  }, [isPlaying, playbackSpeed]);

  // Determine current active chapter index
  const activeChapterIndex = useMemo(() => {
    let active = 0;
    currentClip.chapters.forEach((ch, idx) => {
      if (currentTime >= ch.time) {
        active = idx;
      }
    });
    return active;
  }, [currentTime, currentClip]);

  return (
    <section className="w-full relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 py-16 sm:py-24 text-white border-b border-teal-900/40">
      
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#0baba0]/15 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* =========================================================================
            HEADER: AI VIDEO DEMO SHOWCASE
            ========================================================================= */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-800">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/15 border border-teal-500/30 text-teal-300 text-xs font-bold uppercase tracking-wider">
              <Film className="w-4 h-4 text-teal-400 animate-pulse" />
              <span>Video Demo AI · Quy Trình Thực Tế Tại Uni Creation</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              Xem Trực Quan <span className="bg-gradient-to-r from-teal-300 via-cyan-400 to-[#91c544] bg-clip-text text-transparent">AI Vận Hành</span> Động 60FPS
            </h2>

            <p className="text-sm sm:text-base text-slate-400 leading-relaxed font-light">
              Mô phỏng video chuyển động thời gian thực (Real-time Live Motion) từng bước AI sinh mã nguồn, dựng bố cục UI, tối ưu SEO thực thể và đối soát VietQR ngay trước mắt bạn.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <div className="px-4 py-2.5 rounded-2xl bg-slate-800/80 border border-slate-700/80 flex items-center gap-3 shadow-lg">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
              <div className="text-left">
                <div className="text-[10px] font-mono text-slate-400">ENGINE RENDERING</div>
                <div className="text-xs font-bold text-white flex items-center gap-1.5">
                  <span>60 FPS Motion Player</span>
                  <span className="text-[10px] px-1.5 py-0.2 bg-teal-500/20 text-teal-300 rounded font-mono">LIVE</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            MAIN PLAYER + PLAYLIST LAYOUT
            ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT: 16:9 Cinema Player (8 columns) */}
          <div className="lg:col-span-8 space-y-4">
            
            <div
              ref={playerContainerRef}
              className={`relative rounded-3xl bg-slate-950 border border-slate-800 shadow-2xl overflow-hidden transition-all group ${
                isFullscreen ? 'fixed inset-4 z-50 rounded-2xl' : ''
              }`}
            >
              {/* Aspect Ratio 16:9 Screen */}
              <div className="relative w-full aspect-video bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden flex flex-col justify-between p-3 sm:p-5 select-none">
                
                {/* 60 FPS HTML5 Interactive Canvas Background */}
                <canvas
                  ref={canvasRef}
                  className="absolute inset-0 w-full h-full pointer-events-none z-0"
                />

                {/* Ambient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-slate-950/80 pointer-events-none z-[1]" />

                {/* Top Video Header HUD */}
                <div className="relative z-10 flex items-center justify-between">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <span className="px-2.5 sm:px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 border border-teal-500/30 text-[10px] sm:text-[11px] font-mono font-bold flex items-center gap-1.5 backdrop-blur-md">
                      <span className={`w-2 h-2 rounded-full ${isPlaying ? 'bg-emerald-400 animate-pulse' : 'bg-amber-400'}`} />
                      {isPlaying ? 'RECORDED MOTION 4K' : 'PAUSED'}
                    </span>
                    <span className="text-xs font-semibold text-slate-300 hidden sm:inline bg-slate-900/60 px-2.5 py-0.5 rounded-full border border-slate-800 backdrop-blur-md">
                      {currentClip.category}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-xs font-mono">
                    <span className="px-2 py-0.5 rounded bg-slate-900/80 text-teal-300 border border-teal-500/30 text-[10px] sm:text-xs backdrop-blur-md flex items-center gap-1.5">
                      <Activity className="w-3 h-3 text-emerald-400 animate-spin" />
                      PHASE {activeChapterIndex + 1}/3: {currentClip.chapters[activeChapterIndex]?.label}
                    </span>
                  </div>
                </div>

                {/* ===================================================================
                    SIMULATED DYNAMIC VIDEO SCREEN WITH REAL-TIME MOTION
                    =================================================================== */}
                <div className="relative z-10 my-auto py-2 flex items-center justify-center">
                  
                  {/* Big Play Overlay Button if paused */}
                  {!isPlaying && (
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      onClick={() => setIsPlaying(true)}
                      className="absolute inset-0 z-30 flex flex-col items-center justify-center bg-black/50 backdrop-blur-sm cursor-pointer rounded-2xl"
                    >
                      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 text-white flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all">
                        <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-current ml-1" />
                      </div>
                      <span className="mt-3 text-xs sm:text-sm font-bold text-white tracking-wide uppercase bg-slate-900/80 px-4 py-1.5 rounded-full border border-teal-500/40">
                        Nhấn để tiếp tục phát video
                      </span>
                    </motion.div>
                  )}

                  {/* SCENE 1: CODE COPILOT (00:00 - 00:30) */}
                  {currentClip.id === 'clip-code' && (
                    <div className="w-full max-w-xl mx-auto space-y-2.5">
                      
                      {/* Window Header */}
                      <div className="bg-slate-900/90 rounded-2xl border border-teal-500/40 p-3 sm:p-4 font-mono text-xs shadow-2xl backdrop-blur-md relative overflow-hidden">
                        
                        {/* Glowing progress line */}
                        <div
                          className="absolute top-0 left-0 h-0.5 bg-gradient-to-r from-teal-400 via-cyan-400 to-emerald-400 transition-all duration-100"
                          style={{ width: `${progressPercentage}%` }}
                        />

                        <div className="flex items-center justify-between pb-2.5 border-b border-slate-800 text-[11px] text-slate-400">
                          <div className="flex items-center gap-2">
                            <div className="flex items-center gap-1.5">
                              <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                            </div>
                            <span className="text-teal-300 font-bold ml-1 flex items-center gap-1">
                              <FileCode2 className="w-3.5 h-3.5 text-teal-400" />
                              src/services/ai-order-copilot.ts
                            </span>
                          </div>
                          <span className="text-emerald-400 font-bold flex items-center gap-1">
                            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                            {currentTime < 10 ? 'ANALYZING SPEC' : currentTime < 20 ? 'GENERATING CODE' : 'OWASP AUDITING'}
                          </span>
                        </div>

                        {/* PHASE 1: SPEC & ARCHITECTURE */}
                        {currentTime < 10 && (
                          <div className="pt-2.5 space-y-2 font-mono text-[11px]">
                            <div className="text-slate-400 flex items-center gap-2">
                              <Terminal className="w-3.5 h-3.5 text-teal-400" />
                              <span className="text-teal-300">&gt; Prompt:</span> "Tạo luồng đặt lịch khám & thanh toán tự động VietQR"
                            </div>
                            <div className="p-2 rounded-xl bg-slate-950/80 border border-slate-800 text-slate-300 space-y-1">
                              <div className="text-cyan-400 flex items-center gap-2">
                                <Activity className="w-3 h-3 text-cyan-400 animate-spin" />
                                Đang suy luận mô hình CSDL & Kiểm tra ràng buộc ngoại...
                              </div>
                              <div className="text-slate-400 pl-5 text-[10px]">
                                ├── Entity: <span className="text-purple-300">Appointment (id, patientId, slot, status)</span><br />
                                ├── Service: <span className="text-teal-300">VietQREngine (dynamic QR with bank webhook)</span><br />
                                └── Security: <span className="text-emerald-300">OWASP sanitized inputs & rate limiter</span>
                              </div>
                            </div>
                          </div>
                        )}

                        {/* PHASE 2: CODE SYNTHESIS (REAL-TIME STREAMING) */}
                        {currentTime >= 10 && currentTime < 20 && (
                          <div className="pt-2.5 space-y-1.5 font-mono text-[11px] leading-relaxed">
                            <div className="text-purple-400">export async function processSmartOrder(payload: OrderInput) &#123;</div>
                            <div className="text-slate-400 pl-4">
                              const audit = await <span className="text-cyan-300">UniSecurityScanner.verifyOWASP</span>(payload);
                            </div>
                            <div className="text-slate-400 pl-4">
                              if (!audit.isValid) throw new <span className="text-rose-400">SecurityException</span>('Invalid Input');
                            </div>
                            <div className="text-emerald-300 pl-4 font-bold bg-emerald-950/30 px-2 py-0.5 rounded border-l-2 border-emerald-400">
                              // AI Synthesizing VietQR payload with zero-latency webhook
                            </div>
                            <div className="text-teal-300 pl-4">
                              const qr = await <span className="text-amber-300">VietQREngine.generateDynamic</span>(payload.amount);
                            </div>
                            <div className="text-slate-300 pl-4">
                              return Database.commitTransaction(&#123; status: 'CONFIRMED', qr &#125;);
                            </div>
                            <div className="text-purple-400 flex items-center gap-1">
                              <span>&#125;</span>
                              <span className="w-2 h-4 bg-teal-400 inline-block animate-pulse ml-1" />
                            </div>
                          </div>
                        )}

                        {/* PHASE 3: TESTS PASSED & DEPLOY READY */}
                        {currentTime >= 20 && (
                          <div className="pt-2.5 space-y-2 font-mono text-[11px]">
                            <div className="grid grid-cols-2 gap-2">
                              <div className="p-2 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-emerald-300 space-y-0.5">
                                <div className="font-bold flex items-center gap-1.5">
                                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                                  48/48 Unit Tests
                                </div>
                                <div className="text-[10px] text-slate-300">Coverage 100% (0.24s)</div>
                              </div>
                              <div className="p-2 rounded-xl bg-teal-950/40 border border-teal-500/40 text-teal-300 space-y-0.5">
                                <div className="font-bold flex items-center gap-1.5">
                                  <ShieldCheck className="w-3.5 h-3.5 text-teal-400" />
                                  OWASP Top 10
                                </div>
                                <div className="text-[10px] text-slate-300">Không lỗ hổng bảo mật</div>
                              </div>
                            </div>
                            <div className="p-2 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between text-[10px]">
                              <span className="text-slate-400">Bundle Size: <strong className="text-white">41.8 KB</strong></span>
                              <span className="text-slate-400">Lighthouse: <strong className="text-emerald-400">100 / 100</strong></span>
                              <span className="text-cyan-400 font-bold">READY TO DEPLOY</span>
                            </div>
                          </div>
                        )}

                      </div>

                      {/* Dynamic Metric Bar */}
                      <div className="grid grid-cols-3 gap-2 text-center font-mono text-[10px]">
                        <div className="p-2 rounded-xl bg-slate-900/80 border border-slate-800">
                          <div className="text-slate-400">Tốc độ sinh mã</div>
                          <div className="text-teal-300 font-bold text-xs">
                            {isPlaying ? `${(380 + Math.sin(currentTime * 3) * 40).toFixed(0)} tok/s` : '380 tok/s'}
                          </div>
                        </div>
                        <div className="p-2 rounded-xl bg-slate-900/80 border border-slate-800">
                          <div className="text-slate-400">Độ trễ API</div>
                          <div className="text-cyan-300 font-bold text-xs">&lt; 14ms (Edge)</div>
                        </div>
                        <div className="p-2 rounded-xl bg-slate-900/80 border border-slate-800">
                          <div className="text-slate-400">Kiểm thử OWASP</div>
                          <div className="text-emerald-400 font-bold text-xs">100% Hoàn hảo</div>
                        </div>
                      </div>

                    </div>
                  )}

                  {/* SCENE 2: GENERATIVE UI/UX DESIGN (00:00 - 00:26) */}
                  {currentClip.id === 'clip-design' && (
                    <div className="w-full max-w-xl mx-auto space-y-2.5">
                      
                      <div className="bg-slate-900/90 rounded-2xl border border-cyan-500/40 p-3 sm:p-4 shadow-2xl backdrop-blur-md relative overflow-hidden space-y-2.5">
                        
                        {/* Progress line */}
                        <div
                          className="absolute top-0 left-0 h-0.5 bg-gradient-to-r from-cyan-400 via-blue-400 to-teal-400 transition-all duration-100"
                          style={{ width: `${progressPercentage}%` }}
                        />

                        <div className="flex items-center justify-between pb-2 border-b border-slate-800 text-[11px]">
                          <span className="text-cyan-300 font-bold flex items-center gap-1.5">
                            <Layers className="w-4 h-4 text-cyan-400" />
                            AI Layout Synthesizer v3
                          </span>
                          <span className="text-slate-400 font-mono text-[10px]">
                            {currentTime < 9 ? 'PALETTE EXTRACTION' : currentTime < 18 ? 'GRID 12 COLUMNS' : 'RESPONSIVE FLUID'}
                          </span>
                        </div>

                        {/* PHASE 1: COLOR PALETTE & DESIGN SYSTEM */}
                        {currentTime < 9 && (
                          <div className="space-y-2">
                            <div className="text-xs text-slate-300">
                              Đang nhận diện Logo thương hiệu & tự động trích xuất bảng màu chuẩn Web:
                            </div>
                            <div className="grid grid-cols-4 gap-2 pt-1">
                              <div className="p-2 rounded-xl bg-slate-950 border border-teal-500/50 text-center space-y-1">
                                <div className="w-full h-6 rounded-md bg-[#0baba0]" />
                                <div className="text-[10px] font-mono text-teal-300">#0BABA0</div>
                                <div className="text-[9px] text-slate-400">Primary Teal</div>
                              </div>
                              <div className="p-2 rounded-xl bg-slate-950 border border-lime-500/50 text-center space-y-1">
                                <div className="w-full h-6 rounded-md bg-[#91c544]" />
                                <div className="text-[10px] font-mono text-lime-300">#91C544</div>
                                <div className="text-[9px] text-slate-400">Accent Lime</div>
                              </div>
                              <div className="p-2 rounded-xl bg-slate-950 border border-slate-700 text-center space-y-1">
                                <div className="w-full h-6 rounded-md bg-slate-900" />
                                <div className="text-[10px] font-mono text-slate-300">#0F172A</div>
                                <div className="text-[9px] text-slate-400">Dark Slate</div>
                              </div>
                              <div className="p-2 rounded-xl bg-slate-950 border border-cyan-500/50 text-center space-y-1">
                                <div className="w-full h-6 rounded-md bg-cyan-500" />
                                <div className="text-[10px] font-mono text-cyan-300">#06B6D4</div>
                                <div className="text-[9px] text-slate-400">Cyan Glow</div>
                              </div>
                            </div>
                          </div>
                        )}

                        {/* PHASE 2: WIREFRAME TO CODE ASSEMBLY */}
                        {currentTime >= 9 && currentTime < 18 && (
                          <div className="space-y-2 p-2.5 rounded-xl bg-slate-950 border border-slate-800">
                            <div className="flex items-center justify-between text-[11px] text-slate-400 pb-1">
                              <span>Mô phỏng lắp ráp giao diện theo lưới 12 cột:</span>
                              <span className="text-teal-300 font-mono font-bold">100% Fluid Grid</span>
                            </div>
                            
                            {/* Live Layout Wireframe */}
                            <div className="space-y-1.5">
                              {/* Header Nav */}
                              <div className="w-full h-5 rounded bg-teal-500/20 border border-teal-500/40 flex items-center justify-between px-2 text-[9px] text-teal-300">
                                <span>[Logo] Navigation Links</span>
                                <span className="px-1.5 py-0.2 bg-teal-500 text-white rounded text-[8px] font-bold">CTA Button</span>
                              </div>
                              {/* Hero */}
                              <div className="w-full h-12 rounded bg-gradient-to-r from-teal-900/30 to-cyan-900/30 border border-cyan-500/40 flex items-center justify-center text-[10px] text-cyan-200 font-bold">
                                Hero Section: Headline + CTA + 3D Product View
                              </div>
                              {/* Product Grid */}
                              <div className="grid grid-cols-3 gap-1.5">
                                <div className="h-9 rounded bg-slate-900 border border-slate-700 flex items-center justify-center text-[9px] text-slate-400">
                                  Card 01 (CRO)
                                </div>
                                <div className="h-9 rounded bg-slate-900 border border-slate-700 flex items-center justify-center text-[9px] text-slate-400">
                                  Card 02 (CRO)
                                </div>
                                <div className="h-9 rounded bg-slate-900 border border-slate-700 flex items-center justify-center text-[9px] text-slate-400">
                                  Card 03 (CRO)
                                </div>
                              </div>
                            </div>
                          </div>
                        )}

                        {/* PHASE 3: RESPONSIVE FLUID COMPARISON */}
                        {currentTime >= 18 && (
                          <div className="space-y-2">
                            <div className="flex items-center justify-between text-[11px] text-slate-300">
                              <span className="flex items-center gap-1.5">
                                <Smartphone className="w-3.5 h-3.5 text-emerald-400" />
                                Tự động tối ưu trên mọi kích thước thiết bị:
                              </span>
                              <span className="text-emerald-400 font-bold font-mono">375px - 1920px</span>
                            </div>
                            <div className="grid grid-cols-3 gap-2 text-center text-xs">
                              <div className="p-2.5 rounded-xl bg-slate-950 border border-teal-500/40">
                                <div className="text-[10px] text-slate-400">Desktop View</div>
                                <div className="text-teal-300 font-bold font-mono text-xs">1440px</div>
                                <div className="text-[9px] text-emerald-400">Tỉ lệ giữ chân +45%</div>
                              </div>
                              <div className="p-2.5 rounded-xl bg-slate-950 border border-cyan-500/40">
                                <div className="text-[10px] text-slate-400">Tablet View</div>
                                <div className="text-cyan-300 font-bold font-mono text-xs">768px</div>
                                <div className="text-[9px] text-emerald-400">Chạm cảm ứng mượt</div>
                              </div>
                              <div className="p-2.5 rounded-xl bg-slate-950 border border-emerald-500/40">
                                <div className="text-[10px] text-slate-400">Mobile View</div>
                                <div className="text-emerald-300 font-bold font-mono text-xs">375px</div>
                                <div className="text-[9px] text-emerald-400">Tối ưu 1 tay cầm</div>
                              </div>
                            </div>
                          </div>
                        )}

                      </div>

                      {/* Design Metrics */}
                      <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-xs">
                        <span className="text-slate-400">Dự đoán tăng tỉ lệ chuyển đổi CRO:</span>
                        <span className="text-emerald-400 font-bold font-mono">+38.5% Tương tác mua hàng</span>
                      </div>

                    </div>
                  )}

                  {/* SCENE 3: SEMANTIC SEO (00:00 - 00:28) */}
                  {currentClip.id === 'clip-seo' && (
                    <div className="w-full max-w-xl mx-auto space-y-2.5">
                      
                      <div className="bg-slate-900/90 rounded-2xl border border-purple-500/40 p-3 sm:p-4 shadow-2xl backdrop-blur-md relative overflow-hidden space-y-2.5">
                        
                        {/* Progress line */}
                        <div
                          className="absolute top-0 left-0 h-0.5 bg-gradient-to-r from-purple-400 via-pink-400 to-teal-400 transition-all duration-100"
                          style={{ width: `${progressPercentage}%` }}
                        />

                        <div className="flex items-center justify-between pb-2 border-b border-slate-800 text-[11px]">
                          <span className="text-purple-300 font-bold flex items-center gap-1.5">
                            <Brain className="w-4 h-4 text-purple-400" />
                            Google Semantic Knowledge Engine
                          </span>
                          <span className="text-emerald-400 font-mono text-[10px]">INDEX SPEED: 3.5X</span>
                        </div>

                        {/* PHASE 1: CRAWLER SIMULATION */}
                        {currentTime < 10 && (
                          <div className="space-y-2">
                            <div className="p-2 rounded-xl bg-slate-950 border border-slate-800 flex items-center gap-2 text-xs">
                              <Search className="w-4 h-4 text-slate-400 shrink-0" />
                              <span className="text-teal-300 font-mono">"thiết kế website chuẩn seo chuyên nghiệp hà nội"</span>
                            </div>
                            <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 space-y-1 text-[11px]">
                              <div className="text-slate-400 flex items-center gap-2">
                                <Activity className="w-3.5 h-3.5 text-purple-400 animate-spin" />
                                Quét 10 đối thủ hàng đầu trên SERP Việt Nam...
                              </div>
                              <div className="text-slate-300 text-[10px] pl-5 space-y-0.5">
                                <div>• Trích xuất 42 từ khóa thực thể LSI liên quan</div>
                                <div>• Phân tích khoảng trống nội dung (Content Gap): <strong className="text-emerald-400">98% cơ hội bứt phá</strong></div>
                              </div>
                            </div>
                          </div>
                        )}

                        {/* PHASE 2: ENTITY GRAPH & SCHEMA */}
                        {currentTime >= 10 && currentTime < 19 && (
                          <div className="space-y-2">
                            <div className="grid grid-cols-2 gap-2 text-[11px]">
                              <div className="p-2.5 bg-slate-950 rounded-xl border border-purple-500/40 space-y-1">
                                <div className="text-purple-300 font-bold">Thực thể Entity LSI:</div>
                                <div className="text-slate-300 text-[10px]">
                                  Thương hiệu · Dịch vụ Web · Chuẩn Onpage · Core Web Vitals
                                </div>
                              </div>
                              <div className="p-2.5 bg-slate-950 rounded-xl border border-teal-500/40 space-y-1">
                                <div className="text-teal-300 font-bold">Schema JSON-LD:</div>
                                <div className="text-slate-300 text-[10px]">
                                  Organization + LocalBusiness + FAQPage + WebSite
                                </div>
                              </div>
                            </div>
                            <div className="p-2 rounded-xl bg-emerald-950/30 border border-emerald-500/30 text-emerald-300 text-[11px] flex items-center justify-between">
                              <span>Tự động chèn thẻ Heading H1-H6:</span>
                              <span className="font-mono font-bold">100% Chuẩn cấu trúc</span>
                            </div>
                          </div>
                        )}

                        {/* PHASE 3: RANKING TOP 1 */}
                        {currentTime >= 19 && (
                          <div className="space-y-2">
                            <div className="p-3 bg-gradient-to-r from-emerald-950/40 to-teal-950/40 rounded-xl border border-emerald-500/50 flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-300 flex items-center justify-center font-bold font-mono text-lg border border-emerald-500/40">
                                  #1
                                </div>
                                <div>
                                  <div className="text-xs font-bold text-white">Xếp Hạng Top 1 Google</div>
                                  <div className="text-[10px] text-emerald-300">Từ khóa trọng tâm ngành nghề</div>
                                </div>
                              </div>
                              <div className="text-right">
                                <div className="text-xs font-bold text-emerald-400 font-mono">+340%</div>
                                <div className="text-[10px] text-slate-400">Lưu lượng tự nhiên</div>
                              </div>
                            </div>

                            <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between text-xs">
                              <span className="text-slate-300">Google Core Web Vitals:</span>
                              <span className="text-emerald-400 font-mono font-bold text-sm">99 / 100 Điểm Xanh</span>
                            </div>
                          </div>
                        )}

                      </div>

                      <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between text-xs">
                        <span className="text-slate-400">Thời gian Google lập chỉ mục (Index):</span>
                        <span className="text-teal-400 font-bold font-mono">&lt; 24 Giờ tự động</span>
                      </div>

                    </div>
                  )}

                  {/* SCENE 4: AI CHATBOT & VIETQR OCR (00:00 - 00:24) */}
                  {currentClip.id === 'clip-agent' && (
                    <div className="w-full max-w-xl mx-auto space-y-2.5">
                      
                      <div className="bg-slate-900/90 rounded-2xl border border-amber-500/40 p-3 sm:p-4 shadow-2xl backdrop-blur-md relative overflow-hidden space-y-2.5">
                        
                        {/* Progress line */}
                        <div
                          className="absolute top-0 left-0 h-0.5 bg-gradient-to-r from-amber-400 via-emerald-400 to-teal-400 transition-all duration-100"
                          style={{ width: `${progressPercentage}%` }}
                        />

                        <div className="flex items-center justify-between pb-2 border-b border-slate-800 text-[11px]">
                          <span className="text-amber-300 font-bold flex items-center gap-1.5">
                            <Bot className="w-4 h-4 text-amber-400" />
                            AI Customer Care & VietQR OCR
                          </span>
                          <span className="text-emerald-400 font-mono text-[10px]">REAL-TIME CHATBOT</span>
                        </div>

                        {/* PHASE 1: CHATBOT INCOMING */}
                        {currentTime < 8 && (
                          <div className="space-y-2 font-sans text-xs">
                            {/* User message */}
                            <div className="flex items-start gap-2 justify-end">
                              <div className="bg-teal-600 text-white p-2.5 rounded-2xl rounded-tr-none max-w-[80%] text-[11px] shadow">
                                Dạ em muốn tư vấn thiết kế website bán hàng cao cấp trọn gói ạ?
                              </div>
                              <span className="w-6 h-6 rounded-full bg-slate-700 text-slate-300 flex items-center justify-center text-[10px] font-bold">
                                Khách
                              </span>
                            </div>

                            {/* AI Typing / Response */}
                            <div className="flex items-start gap-2">
                              <div className="w-6 h-6 rounded-full bg-teal-500 text-white flex items-center justify-center text-[10px]">
                                <Bot className="w-3.5 h-3.5" />
                              </div>
                              <div className="bg-slate-950 border border-slate-800 p-2.5 rounded-2xl rounded-tl-none text-[11px] text-slate-300 space-y-1">
                                <div className="text-teal-300 font-bold">Uni AI Assistant (0.2s):</div>
                                <div>Dạ chào bạn! Uni Creation có 3 gói website chuyên nghiệp. Bạn có thể chọn Gói Chuyên Nghiệp (4.000.000đ) để tối ưu bán hàng tốt nhất ạ.</div>
                              </div>
                            </div>
                          </div>
                        )}

                        {/* PHASE 2: GENERATE VIETQR CODE */}
                        {currentTime >= 8 && currentTime < 16 && (
                          <div className="p-2.5 bg-slate-950 rounded-xl border border-slate-800 flex items-center justify-between gap-3">
                            <div className="space-y-1 text-xs">
                              <div className="text-amber-300 font-bold flex items-center gap-1">
                                <QrCode className="w-4 h-4" />
                                Mã VietQR Động Tự Động Tạo:
                              </div>
                              <div className="text-slate-300 text-[11px]">Đơn hàng: <strong className="text-teal-300 font-mono">UNI-WEB-8931</strong></div>
                              <div className="text-slate-400 text-[10px]">Số tiền: <strong className="text-emerald-400 font-mono text-sm">4.000.000 VNĐ</strong></div>
                            </div>
                            
                            {/* Mock QR box */}
                            <div className="w-20 h-20 bg-white rounded-lg p-1.5 flex flex-col items-center justify-center shrink-0 shadow-lg relative overflow-hidden">
                              <div className="w-full h-full bg-slate-900 rounded grid grid-cols-4 gap-0.5 p-1">
                                {Array.from({ length: 16 }).map((_, idx) => (
                                  <div key={idx} className={`rounded-xs ${idx % 2 === 0 ? 'bg-white' : 'bg-slate-900'}`} />
                                ))}
                              </div>
                              <span className="absolute bottom-0 text-[7px] text-teal-800 font-bold bg-white/90 px-1">
                                VIETQR
                              </span>
                            </div>
                          </div>
                        )}

                        {/* PHASE 3: OCR COMPUTER VISION SCAN */}
                        {currentTime >= 16 && (
                          <div className="space-y-2">
                            <div className="p-3 bg-emerald-950/40 rounded-xl border border-emerald-500/50 flex items-center justify-between">
                              <div className="flex items-center gap-2.5">
                                <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                                  <CheckCircle2 className="w-5 h-5" />
                                </div>
                                <div className="text-xs">
                                  <div className="font-bold text-white">Đối Soát Giao Dịch Thành Công (0.28s)</div>
                                  <div className="text-[10px] text-emerald-300">Khớp số tiền 4.000.000đ từ Vietcombank</div>
                                </div>
                              </div>
                              <span className="px-2 py-1 rounded bg-emerald-500 text-slate-950 font-bold text-[10px]">
                                ĐÃ KÍCH HOẠT
                              </span>
                            </div>

                            <div className="p-2 rounded-xl bg-slate-950 border border-slate-800 text-[11px] text-slate-300 flex items-center justify-between">
                              <span>Tự động xuất biên nhận & gửi email cho khách:</span>
                              <span className="text-teal-300 font-mono font-bold">100% Không cần người trực</span>
                            </div>
                          </div>
                        )}

                      </div>

                      <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between text-xs">
                        <span className="text-slate-400">Thời gian nhận diện & đối soát hoá đơn:</span>
                        <span className="text-emerald-400 font-bold font-mono">0.28 Giây (Computer Vision)</span>
                      </div>

                    </div>
                  )}

                </div>

                {/* Bottom Video Controls & Scrubber */}
                <div className="relative z-20 space-y-2 pt-2">
                  
                  {/* Scrubber Timeline Bar with Chapter Points */}
                  <div
                    onClick={(e) => {
                      const rect = e.currentTarget.getBoundingClientRect();
                      const clickX = e.clientX - rect.left;
                      const newTime = (clickX / rect.width) * currentClip.duration;
                      setCurrentTime(Math.max(0, Math.min(currentClip.duration, newTime)));
                    }}
                    className="relative w-full h-2.5 bg-slate-800/90 rounded-full cursor-pointer overflow-visible group/bar"
                  >
                    {/* Fill bar */}
                    <div
                      className="h-full bg-gradient-to-r from-teal-500 via-cyan-400 to-[#91c544] rounded-full relative transition-all duration-75"
                      style={{ width: `${progressPercentage}%` }}
                    >
                      {/* Playhead thumb */}
                      <span className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-md scale-0 group-hover/bar:scale-100 transition-transform -mr-2" />
                    </div>

                    {/* Chapter Marker Dots */}
                    {currentClip.chapters.map((ch, idx) => (
                      <div
                        key={idx}
                        className="absolute top-0 w-1 h-full bg-white/40 pointer-events-none rounded"
                        style={{ left: `${(ch.time / currentClip.duration) * 100}%` }}
                      />
                    ))}
                  </div>

                  {/* Controller Buttons Bar */}
                  <div className="flex items-center justify-between text-xs text-slate-300">
                    <div className="flex items-center gap-2 sm:gap-3">
                      
                      {/* Play/Pause */}
                      <button
                        onClick={() => {
                          setIsPlaying(!isPlaying);
                          playBeep(isPlaying ? 350 : 550, 0.08);
                        }}
                        className="w-8 h-8 rounded-full bg-white text-slate-900 flex items-center justify-center hover:scale-105 active:scale-95 transition-all cursor-pointer shadow-md"
                        title={isPlaying ? 'Tạm dừng (Pause)' : 'Phát tiếp (Play)'}
                      >
                        {isPlaying ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current ml-0.5" />}
                      </button>

                      {/* Replay */}
                      <button
                        onClick={() => {
                          setCurrentTime(0);
                          setIsPlaying(true);
                          playBeep(440, 0.08);
                        }}
                        className="w-7 h-7 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 flex items-center justify-center transition-all cursor-pointer"
                        title="Phát lại từ đầu"
                      >
                        <RotateCcw className="w-3.5 h-3.5" />
                      </button>

                      {/* Timer Display */}
                      <span className="font-mono text-xs text-slate-400 font-semibold">
                        {formatSeconds(currentTime)} / {currentClip.durationFormatted}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 sm:gap-3">
                      
                      {/* Audio Visualizer Wave & Mute Toggle */}
                      <div className="flex items-center gap-1">
                        <button
                          onClick={() => {
                            setIsMuted(!isMuted);
                            if (isMuted) playBeep(600, 0.1);
                          }}
                          className="text-slate-400 hover:text-white transition-colors cursor-pointer mr-1 p-1"
                          title={isMuted ? 'Bật âm thanh hiệu ứng (Unmute)' : 'Tắt âm thanh (Mute)'}
                        >
                          {isMuted ? <VolumeX className="w-4 h-4 text-slate-500" /> : <Volume2 className="w-4 h-4 text-teal-400" />}
                        </button>
                        {[35, 70, 50, 85, 55, 30].map((h, idx) => (
                          <div
                            key={idx}
                            className={`w-0.5 rounded-full transition-all duration-150 ${
                              isMuted || !isPlaying ? 'h-1 bg-slate-700' : 'bg-teal-400'
                            }`}
                            style={{
                              height: isMuted || !isPlaying
                                ? '4px'
                                : `${Math.max(4, (h * Math.abs(Math.sin((currentTime * 4) + idx))) / 4)}px`
                            }}
                          />
                        ))}
                      </div>

                      {/* Speed toggle */}
                      <button
                        onClick={() => {
                          const speeds = [1, 1.5, 2, 0.75];
                          const nextIdx = (speeds.indexOf(playbackSpeed) + 1) % speeds.length;
                          setPlaybackSpeed(speeds[nextIdx]);
                        }}
                        className="px-2 py-0.5 rounded bg-slate-800 hover:bg-slate-700 font-mono text-[10px] text-teal-300 border border-slate-700 transition-colors cursor-pointer"
                        title="Tốc độ phát"
                      >
                        {playbackSpeed}x
                      </button>

                      {/* Fullscreen toggle */}
                      <button
                        onClick={() => setIsFullscreen(!isFullscreen)}
                        className="w-7 h-7 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 flex items-center justify-center transition-all cursor-pointer"
                        title={isFullscreen ? 'Thu nhỏ' : 'Toàn màn hình'}
                      >
                        <Maximize2 className="w-3.5 h-3.5" />
                      </button>

                    </div>
                  </div>

                </div>

              </div>
            </div>

            {/* Current Clip Detail & Chapter markers */}
            <div className="p-6 rounded-3xl bg-slate-900/60 border border-slate-800 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-teal-500/20 text-teal-300 text-[10px] font-bold uppercase tracking-wider">
                      {currentClip.badge}
                    </span>
                    <span className="text-xs font-mono text-slate-400">Thời lượng: {currentClip.durationFormatted}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-white leading-tight">
                    {currentClip.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 font-light">
                    {currentClip.subtitle}
                  </p>
                </div>

                {onConsult && (
                  <button
                    onClick={() => onConsult(`Tư vấn ứng dụng ${currentClip.title}`)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#0baba0] to-[#088c83] text-white text-xs font-bold hover:scale-105 active:scale-95 transition-all shadow-md shadow-[#0baba0]/25 cursor-pointer shrink-0"
                  >
                    <span>Ứng Dụng Cho Web Của Tôi</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                {currentClip.description}
              </p>

              {/* Chapter markers with direct jump */}
              <div className="pt-2 border-t border-slate-800/80 flex flex-wrap items-center gap-2">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mr-1">
                  Mốc chuyển cảnh:
                </span>
                {currentClip.chapters.map((ch, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setCurrentTime(ch.time);
                      setIsPlaying(true);
                      playBeep(480 + idx * 60, 0.08);
                    }}
                    className={`px-3 py-1 rounded-full text-[11px] font-mono transition-all cursor-pointer flex items-center gap-1.5 ${
                      activeChapterIndex === idx
                        ? 'bg-teal-500/30 text-teal-200 border border-teal-500/60 font-bold shadow-sm shadow-teal-500/20'
                        : 'bg-slate-800 hover:bg-slate-700 text-slate-400'
                    }`}
                  >
                    {activeChapterIndex === idx && <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-ping" />}
                    <span>{ch.label}</span>
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* RIGHT: Playlist Clip Selector (4 columns) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-slate-800">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Danh Sách Clip Demo (4/4)
              </span>
              <span className="text-[11px] font-mono text-teal-400">
                Chuyển cảnh động
              </span>
            </div>

            <div className="space-y-3">
              {VIDEO_CLIPS.map((clip, idx) => {
                const ClipIcon = clip.icon;
                const isSelected = selectedClipId === clip.id;
                return (
                  <div
                    key={clip.id}
                    onClick={() => handleSelectClip(clip.id)}
                    className={`p-4 rounded-2xl border transition-all cursor-pointer relative group ${
                      isSelected
                        ? 'bg-slate-800/95 border-teal-500/80 shadow-lg shadow-teal-950/50 scale-[1.02]'
                        : 'bg-slate-900/60 hover:bg-slate-800/60 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-start gap-3.5">
                      {/* Thumbnail with Dynamic Play indicator */}
                      <div className="relative w-20 h-14 rounded-xl bg-slate-950 border border-slate-700/80 overflow-hidden shrink-0 flex items-center justify-center">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-transform group-hover:scale-110 ${
                          isSelected ? 'bg-teal-500 text-white shadow-md' : 'bg-white/10 text-slate-300'
                        }`}>
                          {isSelected && isPlaying ? (
                            <Pause className="w-3.5 h-3.5 fill-current" />
                          ) : (
                            <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                          )}
                        </div>
                        <span className="absolute bottom-1 right-1 text-[9px] font-mono px-1 py-0.5 rounded bg-black/80 text-slate-300 font-bold">
                          {clip.durationFormatted}
                        </span>
                      </div>

                      {/* Clip Info */}
                      <div className="space-y-1 min-w-0 flex-1">
                        <div className="flex items-center justify-between gap-1">
                          <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                            isSelected ? 'bg-teal-500/25 text-teal-300 font-bold' : 'bg-slate-800 text-slate-400'
                          }`}>
                            {clip.category}
                          </span>
                          <span className="text-[10px] font-mono text-slate-400">
                            Clip 0{idx + 1}
                          </span>
                        </div>

                        <h4 className={`text-xs font-bold leading-snug line-clamp-2 ${
                          isSelected ? 'text-white' : 'text-slate-300 group-hover:text-white'
                        }`}>
                          {clip.title}
                        </h4>

                        <p className="text-[11px] text-slate-400 line-clamp-1 font-light">
                          {clip.subtitle}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* AI Engineering Commitment card */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-teal-950/40 via-slate-900 to-slate-950 border border-teal-800/40 space-y-3">
              <div className="flex items-center gap-2 text-teal-300 text-xs font-bold">
                <Sparkles className="w-4 h-4 text-teal-400" />
                <span>Quy Chuẩn AI Tại Uni Creation</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed font-light">
                Toàn bộ quy trình AI tại Uni Creation đều có kỹ sư cấp cao kiểm duyệt (Human-in-the-loop), đảm bảo mã nguồn 100% chuẩn chỉ và an toàn tuyệt đối trước khi bàn giao.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
