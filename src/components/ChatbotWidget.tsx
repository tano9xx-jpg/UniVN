import React, { useState, useEffect, useRef } from 'react';
import {
  MessageSquare,
  X,
  Send,
  Sparkles,
  Bot,
  User,
  Phone,
  ArrowRight,
  ExternalLink,
  RotateCcw,
  Minimize2,
  Maximize2,
  CheckCircle2
} from 'lucide-react';
import { COMPANY_INFO } from '../data/siteData';

interface Message {
  id: string;
  sender: 'ai' | 'user';
  text: string;
  timestamp: string;
  actions?: {
    label: string;
    actionType: 'navigate' | 'calculator' | 'call' | 'contact';
    target?: string;
  }[];
}

interface ChatbotWidgetProps {
  onNavigate: (view: string, param?: string) => void;
  onOpenCalculator: () => void;
}

export const ChatbotWidget: React.FC<ChatbotWidgetProps> = ({
  onNavigate,
  onOpenCalculator
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [hasUnread, setHasUnread] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const initialMessages: Message[] = [
    {
      id: 'welcome-1',
      sender: 'ai',
      text: 'Xin chào quý khách! 👋 Em là Trợ lý AI của Uni Creation. Em có thể tư vấn nhanh cho quý khách về bảng giá thiết kế web, chính sách bàn giao mã nguồn, hoặc gợi ý mẫu website phù hợp theo ngành nghề kinh doanh.',
      timestamp: 'Vừa xong',
      actions: [
        { label: 'Báo giá gói Pro 4.000.000 đ', actionType: 'navigate', target: 'pricing' },
        { label: 'Xem kho mẫu 180+ giao diện', actionType: 'navigate', target: 'themes' },
        { label: 'Dự toán chi phí website', actionType: 'calculator' }
      ]
    }
  ];

  const [messages, setMessages] = useState<Message[]>(() => {
    const saved = sessionStorage.getItem('unicreation_chatbot_history');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return initialMessages;
      }
    }
    return initialMessages;
  });

  useEffect(() => {
    sessionStorage.setItem('unicreation_chatbot_history', JSON.stringify(messages));
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const quickPrompts = [
    'Báo giá gói Pro 4.000.000 đ gồm những gì?',
    'Website có được bàn giao 100% Source Code không?',
    'Thời gian thiết kế và bàn giao mất bao lâu?',
    'Tên miền và Hosting được tặng kèm như thế nào?',
    'Bảo hành trọn đời áp dụng ra sao?',
    'Tôi muốn để lại số điện thoại để chuyên viên tư vấn gọi lại'
  ];

  const generateAIResponse = (userQuery: string): { text: string; actions?: Message['actions'] } => {
    const query = userQuery.toLowerCase();

    // Check if user entered a phone number
    const phoneMatch = query.match(/(0[3|5|7|8|9][0-9]{8})/);
    if (phoneMatch) {
      return {
        text: `Dạ em đã ghi nhận số điện thoại của quý khách: ${phoneMatch[0]}! Chuyên viên tư vấn cấp cao của Uni Creation sẽ gọi điện hỗ trợ và gửi báo giá ưu đãi trong vòng 10 - 15 phút tới ạ. Quý khách cũng có thể gọi hotline trực tiếp bất cứ lúc nào qua 0967.508.333.`,
        actions: [
          { label: 'Gọi hotline: 0967.508.333', actionType: 'call' },
          { label: 'Xem bảng giá chi tiết', actionType: 'navigate', target: 'pricing' }
        ]
      };
    }

    if (query.includes('để lại số') || query.includes('gọi lại') || query.includes('tư vấn giúp')) {
      return {
        text: 'Dạ quý khách chỉ cần nhập số điện thoại ngay vào khung chat này (Ví dụ: 0912345678), em sẽ kết nối chuyên viên tư vấn gọi lại hỗ trợ giải đáp mọi thắc mắc và gửi bản demo phù hợp nhất!',
        actions: [
          { label: 'Gọi hotline ngay: 0967.508.333', actionType: 'call' }
        ]
      };
    }

    // Pricing & Packages
    if (query.includes('giá') || query.includes('chi phí') || query.includes('gói') || query.includes('bao nhiêu')) {
      return {
        text: 'Uni Creation hiện có 3 gói thiết kế website tối ưu cho từng quy mô doanh nghiệp:\n\n• Gói Startup (2.500.000 đ): Bàn giao 1-2 ngày, tặng tên miền .com/.net + Hosting NVMe SSD 1GB, 10 bài viết demo, chuẩn SEO 100%.\n• Gói Pro (4.000.000 đ - Bán chạy nhất): Bàn giao 3-5 ngày, Hosting 1.5GB, tặng voucher 350k, 15 bài viết SEO, tối ưu tốc độ Google PageSpeed.\n• Gói VIP (Từ 8.000.000 đ): May đo độc quyền 1:1 theo bản vẽ Figma, Hosting NVMe 3-10GB, lập trình tính năng riêng biệt, hỗ trợ thông báo Bộ Công Thương.\n\nToàn bộ các gói đều được bàn giao 100% source code và bảo hành trọn đời!',
        actions: [
          { label: 'Xem chi tiết bảng giá', actionType: 'navigate', target: 'pricing' },
          { label: 'Dự toán chi phí tức thì', actionType: 'calculator' },
          { label: 'Đăng ký tư vấn gói Pro', actionType: 'contact', target: 'Gói Pro - 4.000.000 đ' }
        ]
      };
    }

    // Source code handover
    if (query.includes('source code') || query.includes('mã nguồn') || query.includes('bàn giao') || query.includes('sở hữu')) {
      return {
        text: 'Có 100% ạ! Uni Creation cam kết bàn giao toàn bộ mã nguồn (Full Source Code) và cơ sở dữ liệu không mã hóa ngay sau khi hoàn thành dự án. Quý khách toàn quyền sở hữu, có thể tự chuyển hosting hoặc phát triển nâng cấp bất kỳ lúc nào mà không bị phụ thuộc vào công ty.',
        actions: [
          { label: 'Xem 5 cam kết vàng', actionType: 'navigate', target: 'about' },
          { label: 'Xem quy trình bàn giao', actionType: 'navigate', target: 'policies' }
        ]
      };
    }

    // Delivery time
    if (query.includes('thời gian') || query.includes('bao lâu') || query.includes('tiến độ') || query.includes('mấy ngày')) {
      return {
        text: 'Thời gian triển khai tại Uni Creation rất nhanh và chuẩn xác nhờ quy trình tối ưu 6 bước:\n\n• Gói Startup: Bàn giao hoàn thiện từ 1 - 2 ngày làm việc.\n• Gói Pro: Bàn giao từ 3 - 5 ngày làm việc.\n• Gói VIP may đo: Từ 7 - 10 ngày làm việc (bao gồm bước duyệt thiết kế giao diện Figma trước khi lập trình).\n\nQuý khách được kiểm thử trên link demo trực tiếp trước khi nghiệm thu bàn giao chính thức!',
        actions: [
          { label: 'Xem quy trình 6 bước', actionType: 'navigate', target: 'about' }
        ]
      };
    }

    // Domain & Hosting
    if (query.includes('hosting') || query.includes('tên miền') || query.includes('domain') || query.includes('máy chủ') || query.includes('vps')) {
      return {
        text: 'Tất cả các gói thiết kế web trọn gói của Uni Creation đều được TẶNG KÈM miễn phí:\n\n1. Tên miền quốc tế (.com hoặc .net) sử dụng 1 năm.\n2. Hosting Pure NVMe SSD U.2 siêu tốc, băng thông không giới hạn, đặt tại Viettel IDC & VNPT Data Center.\n3. Chứng chỉ bảo mật SSL Let\'s Encrypt miễn phí trọn đời.\n\nNgoài ra Uni Creation có cung cấp dịch vụ máy chủ VPS NVMe và Email doanh nghiệp Google Workspace chính hãng.',
        actions: [
          { label: 'Tra cứu tên miền', actionType: 'navigate', target: 'themes' },
          { label: 'Chi tiết dịch vụ Hosting', actionType: 'navigate', target: 'service-detail' }
        ]
      };
    }

    // Warranty
    if (query.includes('bảo hành') || query.includes('bảo trì') || query.includes('hỗ trợ') || query.includes('sửa lỗi')) {
      return {
        text: 'Uni Creation áp dụng chính sách BẢO HÀNH KỸ THUẬT TRỌN ĐỜI miễn phí 100%:\n\n• Trong 01 tháng đầu: Giám sát toàn bộ hoạt động, sửa mọi phát sinh trong 24h.\n• Sự cố nghiêm trọng: Có mặt hỗ trợ trong vòng 04 giờ làm việc.\n• Đội ngũ kỹ thuật 24/7 trực hotline riêng 0373.085.333 và email kythuat@unicreation.vn đồng hành cùng khách hàng trong suốt quá trình vận hành.',
        actions: [
          { label: 'Xem văn bản chính sách bảo hành', actionType: 'navigate', target: 'policies' }
        ]
      };
    }

    // Themes & templates
    if (query.includes('mẫu') || query.includes('giao diện') || query.includes('theme') || query.includes('ngành')) {
      return {
        text: 'Uni Creation sở hữu kho hơn 180+ mẫu website độc bản thuộc đa dạng ngành nghề:\n\n• Bất động sản, xây dựng, kiến trúc nội thất\n• Doanh nghiệp, giới thiệu công ty, xuất nhập khẩu\n• Thương mại điện tử, bán hàng, siêu thị mỹ phẩm\n• Spa thẩm mỹ viện, y tế, dược phẩm\n• Khách sạn, du lịch, du học, trường học\n\nQuý khách có thể xem demo trực tiếp trên cả máy tính, tablet và điện thoại!',
        actions: [
          { label: 'Khám phá kho mẫu web 2026', actionType: 'navigate', target: 'themes' },
          { label: 'Báo giá gói Pro 4 triệu', actionType: 'navigate', target: 'pricing' }
        ]
      };
    }

    // Payment & Legal
    if (query.includes('thanh toán') || query.includes('ngân hàng') || query.includes('hóa đơn') || query.includes('vat')) {
      return {
        text: 'Uni Creation hỗ trợ thanh toán linh hoạt qua 2 tài khoản ngân hàng:\n\n1. Tài khoản Doanh nghiệp (Xuất hóa đơn VAT):\n• Vietcombank - Chi nhánh Sở Giao dịch\n• STK: 1012895425\n• Chủ TK: Công ty Cổ phần Uni Creation Việt Nam\n\n2. Tài khoản Cá nhân (Thanh toán nhanh):\n• Vietinbank - Chi nhánh Cầu Giấy\n• STK: 103002451143\n• Chủ TK: Trần Thị Diện\n\nQuý khách có thể xem mã VietQR và thông tin chi tiết tại trang Thanh Toán.',
        actions: [
          { label: 'Xem trang Thanh Toán & Mã QR', actionType: 'navigate', target: 'payment' }
        ]
      };
    }

    // Default consultative answer
    return {
      text: `Dạ em hiểu quý khách đang quan tâm đến "${userQuery}". Uni Creation là công ty thiết kế website chuyên nghiệp hàng đầu với hơn 2.500+ khách hàng tin tưởng. Toàn bộ website đều được thiết kế chuẩn SEO Google 100%, tốc độ tải trang dưới 1 giây, bàn giao toàn bộ mã nguồn và bảo hành kỹ thuật trọn đời.\n\nQuý khách muốn xem báo giá chi tiết, xem mẫu giao diện thực tế hay để lại số điện thoại để chuyên viên gọi tư vấn 1-1 ạ?`,
      actions: [
        { label: 'Báo giá gói Pro 4.000.000 đ', actionType: 'navigate', target: 'pricing' },
        { label: 'Xem mẫu website', actionType: 'navigate', target: 'themes' },
        { label: 'Gọi hotline 0967.508.333', actionType: 'call' }
      ]
    };
  };

  const handleSendMessage = (textToSend?: string) => {
    const text = (textToSend || inputText).trim();
    if (!text || isTyping) return;

    const userMsg: Message = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text,
      timestamp: 'Vừa xong'
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputText('');
    setIsTyping(true);

    // Simulate realistic typing delay
    setTimeout(() => {
      const response = generateAIResponse(text);
      const aiMsg: Message = {
        id: `ai-${Date.now()}`,
        sender: 'ai',
        text: response.text,
        timestamp: 'Vừa xong',
        actions: response.actions
      };
      setMessages((prev) => [...prev, aiMsg]);
      setIsTyping(false);
    }, 600);
  };

  const handleActionClick = (action: NonNullable<Message['actions']>[number]) => {
    if (action.actionType === 'navigate' && action.target) {
      onNavigate(action.target);
    } else if (action.actionType === 'calculator') {
      onOpenCalculator();
    } else if (action.actionType === 'call') {
      window.location.href = `tel:${COMPANY_INFO.hotline.replace(/\./g, '')}`;
    } else if (action.actionType === 'contact') {
      onNavigate('contact', action.target);
    }
  };

  const handleResetChat = () => {
    setMessages(initialMessages);
    sessionStorage.removeItem('unicreation_chatbot_history');
  };

  return (
    <>
      {/* Floating Toggle Button (Always visible bottom-right, distinct and branded) */}
      <div className="fixed bottom-20 lg:bottom-6 right-4 sm:right-6 z-40 flex flex-col items-end gap-2">
        {!isOpen && (
          <div className="flex items-center gap-2">
            {hasUnread && (
              <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 bg-white text-slate-800 text-xs font-bold rounded-2xl shadow-xl border border-teal-200 animate-bounce">
                <span className="w-2 h-2 rounded-full bg-[#0baba0] animate-pulse"></span>
                <span>Tư Vấn Web Nhanh Với AI</span>
              </div>
            )}
            <button
              onClick={() => {
                setIsOpen(true);
                setIsMinimized(false);
                setHasUnread(false);
              }}
              className="group flex items-center gap-2.5 px-4 py-3 bg-gradient-to-r from-[#0baba0] to-[#088c83] hover:from-[#088c83] hover:to-[#077069] text-white rounded-full shadow-2xl hover:scale-105 transition-all duration-300 ring-4 ring-[#0baba0]/25 cursor-pointer"
              aria-label="Mở khung chat tư vấn AI"
            >
              <div className="relative">
                <Bot className="w-5 h-5 text-white" />
                <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-[#91c544] rounded-full border-2 border-white"></span>
              </div>
              <span className="text-xs font-extrabold tracking-wide hidden sm:inline">
                Tư Vấn AI 24/7
              </span>
            </button>
          </div>
        )}
      </div>

      {/* Floating Chat Window */}
      {isOpen && (
        <div
          className={`fixed z-50 transition-all duration-300 shadow-2xl rounded-3xl border border-slate-200 bg-white flex flex-col overflow-hidden ${
            isMinimized
              ? 'bottom-6 right-4 sm:right-6 w-80 h-16'
              : 'bottom-4 sm:bottom-6 right-3 sm:right-6 w-[94vw] sm:w-[410px] h-[580px] max-h-[85vh]'
          }`}
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-[#0baba0] to-[#088c83] text-white p-3.5 sm:p-4 flex items-center justify-between shadow-xs select-none">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-2xl bg-white/20 backdrop-blur-xs flex items-center justify-center border border-white/30">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-[#91c544] rounded-full border-2 border-[#088c83]"></span>
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h3 className="font-extrabold text-sm tracking-tight">Uni AI Assistant</h3>
                  <span className="px-1.5 py-0.2 bg-white/20 rounded text-[9px] font-bold uppercase tracking-wider">
                    Beta
                  </span>
                </div>
                <p className="text-[11px] text-teal-100 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#91c544] animate-pulse"></span>
                  <span>Trực tuyến · Phản hồi ngay</span>
                </p>
              </div>
            </div>

            {/* Header Action Buttons */}
            <div className="flex items-center gap-1">
              <button
                onClick={handleResetChat}
                className="p-1.5 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors cursor-pointer"
                title="Bắt đầu lại cuộc trò chuyện"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsMinimized(!isMinimized)}
                className="p-1.5 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors cursor-pointer"
                title={isMinimized ? 'Mở rộng' : 'Thu nhỏ'}
              >
                {isMinimized ? <Maximize2 className="w-4 h-4" /> : <Minimize2 className="w-4 h-4" />}
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors cursor-pointer"
                title="Đóng chat"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Chat Body (when not minimized) */}
          {!isMinimized && (
            <>
              {/* Message History */}
              <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-slate-50/70 text-xs">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex gap-2.5 items-start ${
                      msg.sender === 'user' ? 'flex-row-reverse' : 'flex-row'
                    }`}
                  >
                    {/* Avatar */}
                    <div
                      className={`w-7 h-7 rounded-xl flex items-center justify-center shrink-0 ${
                        msg.sender === 'user'
                          ? 'bg-slate-800 text-white'
                          : 'bg-[#0baba0] text-white shadow-xs'
                      }`}
                    >
                      {msg.sender === 'user' ? (
                        <User className="w-4 h-4" />
                      ) : (
                        <Bot className="w-4 h-4" />
                      )}
                    </div>

                    {/* Bubble */}
                    <div className="space-y-2 max-w-[82%]">
                      <div
                        className={`p-3.5 rounded-2xl leading-relaxed whitespace-pre-line shadow-xs ${
                          msg.sender === 'user'
                            ? 'bg-[#0baba0] text-white rounded-tr-none font-medium'
                            : 'bg-white text-slate-800 border border-slate-200/90 rounded-tl-none'
                        }`}
                      >
                        {msg.text}
                      </div>

                      {/* Action buttons embedded in AI messages */}
                      {msg.actions && msg.actions.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {msg.actions.map((act, aIdx) => (
                            <button
                              key={aIdx}
                              onClick={() => handleActionClick(act)}
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white hover:bg-teal-50 text-[#088c83] border border-teal-200 rounded-xl text-[11px] font-bold shadow-2xs transition-colors cursor-pointer"
                            >
                              <span>{act.label}</span>
                              <ArrowRight className="w-3 h-3 text-[#0baba0]" />
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}

                {/* Typing Indicator */}
                {isTyping && (
                  <div className="flex items-center gap-2 text-slate-400 pl-9">
                    <div className="flex items-center gap-1 p-2 bg-white rounded-xl border border-slate-200 shadow-2xs">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0baba0] animate-bounce"></span>
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0baba0] animate-bounce [animation-delay:0.2s]"></span>
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0baba0] animate-bounce [animation-delay:0.4s]"></span>
                    </div>
                    <span className="text-[10px] text-slate-500 font-medium">Uni AI đang phản hồi...</span>
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* Quick Prompts Carousel */}
              <div className="p-2 bg-white border-t border-slate-100 overflow-x-auto scrollbar-none flex gap-1.5 shrink-0">
                {quickPrompts.map((prompt, pIdx) => (
                  <button
                    key={pIdx}
                    onClick={() => handleSendMessage(prompt)}
                    className="px-2.5 py-1 bg-slate-100/80 hover:bg-teal-50 hover:text-[#088c83] hover:border-teal-200 border border-transparent text-slate-600 rounded-lg text-[10px] font-medium whitespace-nowrap transition-colors cursor-pointer"
                  >
                    {prompt}
                  </button>
                ))}
              </div>

              {/* Input Box */}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSendMessage();
                }}
                className="p-3 bg-white border-t border-slate-200 flex items-center gap-2 shrink-0"
              >
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder="Nhập câu hỏi hoặc số điện thoại..."
                  className="flex-1 px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#0baba0] focus:ring-1 focus:ring-[#0baba0] transition-all"
                />
                <button
                  type="submit"
                  disabled={!inputText.trim() || isTyping}
                  className="p-2.5 btn-brand-gradient text-white rounded-xl shadow-xs disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer transition-all hover:scale-105"
                  title="Gửi tin nhắn"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </>
          )}
        </div>
      )}
    </>
  );
};
