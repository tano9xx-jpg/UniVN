import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/siteData';
import {
  CreditCard,
  QrCode,
  Copy,
  Check,
  Building2,
  AlertCircle,
  ExternalLink,
  ShieldCheck,
  Download,
  Maximize2,
  X,
  PhoneCall,
  MapPin,
  Clock,
  Landmark
} from 'lucide-react';

export const PaymentView: React.FC = () => {
  const [copiedAccount, setCopiedAccount] = useState<string | null>(null);
  const [qrMode, setQrMode] = useState<'compact' | 'qr_only'>('compact');
  const [previewQr, setPreviewQr] = useState<{
    bank: string;
    account: string;
    name: string;
    qrUrl: string;
  } | null>(null);

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedAccount(key);
    setTimeout(() => {
      setCopiedAccount((prev) => (prev === key ? null : prev));
    }, 2000);
  };

  // 2 official bank accounts (Company & Personal) - Static VietQR without prefilled amount or order memo
  const BANK_ACCOUNTS = [
    {
      id: 'vcb',
      type: 'Tài Khoản Doanh Nghiệp (Xuất Hóa Đơn VAT)',
      bankFullName: 'Ngân hàng TMCP Ngoại thương Việt Nam (Vietcombank)',
      shortName: 'Vietcombank',
      bankCode: 'VCB',
      bin: '970436',
      branch: 'Sở Giao dịch',
      accountNumber: '1012895425',
      accountHolder: 'Công ty Cổ phần Uni Creation Việt Nam',
      vatNote: 'Lưu ý: Nếu khách hàng chuyển vào tài khoản công ty thì bắt buộc phải xuất hóa đơn VAT',
      badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      brandColor: '#006A38',
      isCompany: true
    },
    {
      id: 'ctg',
      type: 'Tài Khoản Cá Nhân (Thanh Toán Nhanh)',
      bankFullName: 'Ngân hàng TMCP Công Thương Việt Nam (Vietinbank)',
      shortName: 'Vietinbank',
      bankCode: 'VietinBank',
      bin: '970415',
      branch: 'Cầu Giấy',
      accountNumber: '103002451143',
      accountHolder: 'Trần Thị Diện',
      vatNote: null,
      badgeColor: 'bg-blue-50 text-blue-700 border-blue-200',
      brandColor: '#00529C',
      isCompany: false
    }
  ];

  return (
    <div className="space-y-10 max-w-6xl mx-auto px-4 sm:px-6">
      
      {/* =========================================================================
          TOP INSTRUCTION & CAUTION NOTICE (Matches Reference Screenshot)
          ========================================================================= */}
      <div className="space-y-4">
        {/* Tiêu đề & Icon thay thế dòng chữ cũ theo yêu cầu */}
        <div className="flex items-center gap-3.5 sm:gap-4 py-1">
          <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-br from-[#0baba0] to-[#088c83] text-white flex items-center justify-center shadow-md shadow-[#0baba0]/25 shrink-0">
            <Landmark className="w-6 h-6 sm:w-6.5 sm:h-6.5" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
              Chuyển khoản
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-normal">
              Thông tin tài khoản thụ hưởng chính thức áp dụng thanh toán hợp đồng và dịch vụ
            </p>
          </div>
        </div>

        {/* Attention Box */}
        <div className="bg-[#eef7ff] border border-[#d2e8fc] rounded-2xl p-5 sm:p-6 text-slate-800 space-y-2 shadow-xs">
          <div className="font-bold text-[#00529c] text-sm sm:text-base flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-[#00529c] shrink-0" />
            <span>Để đảm bảo quyền lợi khách hàng, khách hàng cần lưu ý</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed pl-7">
            Quý khách vui lòng chuyển khoản qua ngân hàng trong phần “Nội dung thanh toán”, Quý khách ghi rõ mã đơn hàng cần thanh toán và số điện thoại đã dùng đặt hàng (Mã đơn hàng + Số điện thoại).
          </p>
        </div>
      </div>

      {/* =========================================================================
          2 BANK ACCOUNT CARDS (Company & Personal) - Static VietQR without amount/memo
          ========================================================================= */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-stretch">
        {BANK_ACCOUNTS.map((bank) => {
          // Dynamic QR image URL using template 'compact' or 'qr_only' (neither displays 'Số tiền: 0đ')
          const qrImageUrl = `https://img.vietqr.io/image/${bank.bin}-${bank.accountNumber}-${qrMode}.png`;

          return (
            <div
              key={bank.id}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between space-y-6 relative overflow-hidden"
            >
              {/* Top Accent Line */}
              <div
                className="absolute top-0 left-0 right-0 h-1.5"
                style={{ backgroundColor: bank.brandColor }}
              />

              <div className="space-y-5">
                {/* Bank Logo & Full Name Header */}
                <div className="space-y-2 pb-4 border-b border-slate-100">
                  <div className="flex items-center justify-between gap-3">
                    {/* Bank Brand Logo SVG */}
                    {bank.id === 'vcb' ? (
                      <div className="flex items-center gap-2.5 py-1">
                        <svg viewBox="0 0 170 38" className="h-9 sm:h-10 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M18 4C13 4 8 8 6 13C4 18 6 24 10 28L18 36L26 28C30 24 32 18 30 13C28 8 23 4 18 4Z" fill="#006A38" opacity="0.2" />
                          <path d="M18 8C14.5 8 11 11 9.5 15C8 19 9.5 23.5 12.5 26.5L18 32L23.5 26.5C26.5 23.5 28 19 26.5 15C25 11 21.5 8 18 8Z" fill="#006A38" />
                          <text x="36" y="25" fontFamily="system-ui, sans-serif" fontWeight="800" fontSize="18" fill="#006A38" letterSpacing="-0.5">
                            Vietcombank
                          </text>
                        </svg>
                      </div>
                    ) : (
                      <div className="flex items-center gap-2.5 py-1">
                        <svg viewBox="0 0 160 38" className="h-9 sm:h-10 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="16" cy="19" r="13" fill="#00529C" />
                          <path d="M9 19C9 15.1 12.1 12 16 12C19.9 12 23 15.1 23 19" stroke="#ED1C24" strokeWidth="3" strokeLinecap="round" />
                          <path d="M11 19H21" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
                          <text x="35" y="25" fontFamily="system-ui, sans-serif" fontWeight="800" fontSize="18" letterSpacing="-0.5">
                            <tspan fill="#00529C">Vietin</tspan>
                            <tspan fill="#ED1C24">Bank</tspan>
                          </text>
                        </svg>
                      </div>
                    )}

                    <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full border ${bank.badgeColor}`}>
                      {bank.isCompany ? 'Doanh Nghiệp' : 'Cá Nhân'}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                    {bank.bankFullName}
                  </h3>
                </div>

                {/* Bank Account Details */}
                <div className="space-y-3 text-xs sm:text-sm">
                  
                  {/* Account Holder (Đã đảo lên trên Chi nhánh theo yêu cầu) */}
                  <div className="flex items-start justify-between py-1.5 border-b border-slate-100">
                    <span className="text-slate-500 font-medium">Chủ tài khoản:</span>
                    <span className="font-bold text-slate-900 text-right uppercase tracking-wide">{bank.accountHolder}</span>
                  </div>

                  {/* Branch (Chi nhánh đặt phía dưới Chủ tài khoản) */}
                  <div className="flex items-start justify-between py-1.5 border-b border-slate-100">
                    <span className="text-slate-500 font-medium">Chi nhánh:</span>
                    <span className="font-semibold text-slate-800 text-right">{bank.branch}</span>
                  </div>

                  {/* Account Number with 1-click Copy */}
                  <div className="p-3.5 bg-slate-50/90 border border-slate-200/80 rounded-2xl flex items-center justify-between gap-3">
                    <div>
                      <div className="text-[11px] text-slate-500 font-medium">Số tài khoản:</div>
                      <div className="font-mono text-lg sm:text-xl font-black text-slate-900 tracking-wider">
                        {bank.accountNumber}
                      </div>
                    </div>
                    <button
                      onClick={() => copyToClipboard(bank.accountNumber, bank.id)}
                      className="px-3.5 py-2 rounded-xl bg-white border border-slate-200 hover:border-[#0baba0] text-slate-700 hover:text-[#0baba0] font-semibold text-xs flex items-center gap-1.5 transition-all shadow-2xs hover:shadow-xs cursor-pointer shrink-0"
                      title="Sao chép số tài khoản"
                    >
                      {copiedAccount === bank.id ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                          <span className="text-emerald-700 font-bold">Đã chép</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Sao chép</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* VAT Note (Red italic if company) */}
                  {bank.vatNote && (
                    <div className="pt-1">
                      <p className="text-xs text-rose-600 italic font-medium leading-relaxed">
                        {bank.vatNote}
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Static VietQR Code Container - Enlarged & Without Amount: 0đ */}
              <div className="pt-5 border-t border-slate-100 space-y-3.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-slate-800 flex items-center gap-1.5">
                    <QrCode className="w-4 h-4 text-[#0baba0]" />
                    <span>Mã VietQR Quét Nhanh</span>
                  </span>

                  {/* Mode switcher: Compact template vs Pure QR only */}
                  <div className="flex items-center bg-slate-100 p-0.5 rounded-lg text-[11px] font-medium border border-slate-200/80">
                    <button
                      onClick={() => setQrMode('compact')}
                      className={`px-2.5 py-1 rounded-md transition-all cursor-pointer ${
                        qrMode === 'compact'
                          ? 'bg-white text-slate-900 shadow-2xs font-bold'
                          : 'text-slate-500 hover:text-slate-800'
                      }`}
                      title="Khung chuẩn VietQR (không hiển thị dòng số tiền)"
                    >
                      Khung VietQR
                    </button>
                    <button
                      onClick={() => setQrMode('qr_only')}
                      className={`px-2.5 py-1 rounded-md transition-all cursor-pointer ${
                        qrMode === 'qr_only'
                          ? 'bg-white text-slate-900 shadow-2xs font-bold'
                          : 'text-slate-500 hover:text-slate-800'
                      }`}
                      title="Chỉ hiển thị mã QR"
                    >
                      Chỉ mã QR
                    </button>
                  </div>
                </div>

                {/* Large QR Display Box */}
                <div className="p-4 sm:p-5 bg-gradient-to-b from-slate-50 to-slate-100/70 rounded-2xl border border-slate-200 flex flex-col items-center text-center gap-3.5">
                  {/* QR Image Frame with Scanning Corners */}
                  <div className="relative group/qr bg-white p-3.5 rounded-2xl border-2 border-slate-200 shadow-sm transition-all hover:border-[#0baba0]/50 hover:shadow-md">
                    {/* Decorative Scan Corners */}
                    <div className="absolute top-1.5 left-1.5 w-3.5 h-3.5 border-t-2 border-l-2 border-[#0baba0] rounded-tl-sm pointer-events-none" />
                    <div className="absolute top-1.5 right-1.5 w-3.5 h-3.5 border-t-2 border-r-2 border-[#0baba0] rounded-tr-sm pointer-events-none" />
                    <div className="absolute bottom-1.5 left-1.5 w-3.5 h-3.5 border-b-2 border-l-2 border-[#0baba0] rounded-bl-sm pointer-events-none" />
                    <div className="absolute bottom-1.5 right-1.5 w-3.5 h-3.5 border-b-2 border-r-2 border-[#0baba0] rounded-br-sm pointer-events-none" />

                    <img
                      src={qrImageUrl}
                      alt={`Mã QR ${bank.shortName}`}
                      className="w-48 h-48 sm:w-56 sm:h-56 object-contain rounded-lg"
                      onError={(e) => {
                        // Fallback if network blocked
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                    <button
                      onClick={() =>
                        setPreviewQr({
                          bank: bank.bankFullName,
                          account: bank.accountNumber,
                          name: bank.accountHolder,
                          qrUrl: qrImageUrl
                        })
                      }
                      className="absolute inset-0 bg-slate-900/60 text-white rounded-xl opacity-0 group-hover/qr:opacity-100 flex flex-col items-center justify-center gap-1.5 text-xs font-bold transition-opacity cursor-pointer backdrop-blur-2xs"
                      title="Nhấn để phóng to mã QR"
                    >
                      <Maximize2 className="w-5 h-5" />
                      <span>Phóng to mã QR</span>
                    </button>
                  </div>

                  {/* Explanation text & Action buttons */}
                  <div className="space-y-1.5 max-w-sm">
                    <p className="text-xs font-bold text-slate-800">
                      Quét bằng app Mobile Banking bất kỳ
                    </p>
                    <p className="text-[11px] text-slate-500 leading-relaxed">
                      Mã đã tích hợp sẵn số tài khoản và ngân hàng nhận. Quý khách vui lòng nhập <strong>số tiền</strong> và <strong>nội dung thanh toán</strong>.
                    </p>
                    <div className="pt-2 flex items-center justify-center gap-3">
                      <button
                        onClick={() =>
                          setPreviewQr({
                            bank: bank.bankFullName,
                            account: bank.accountNumber,
                            name: bank.accountHolder,
                            qrUrl: qrImageUrl
                          })
                        }
                        className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 hover:border-[#0baba0] text-slate-700 hover:text-[#0baba0] text-xs font-semibold flex items-center gap-1.5 shadow-2xs transition-colors cursor-pointer"
                      >
                        <Maximize2 className="w-3.5 h-3.5" />
                        <span>Xem phóng to</span>
                      </button>
                      <a
                        href={qrImageUrl}
                        download={`VietQR_${bank.shortName}_${bank.accountNumber}.png`}
                        target="_blank"
                        rel="noreferrer"
                        className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 hover:border-slate-300 text-slate-600 hover:text-slate-900 text-xs font-semibold flex items-center gap-1.5 shadow-2xs transition-colors"
                      >
                        <Download className="w-3.5 h-3.5" />
                        <span>Tải ảnh QR</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          );
        })}
      </div>

      {/* =========================================================================
          SECTION: TẠI VĂN PHÒNG (Office Payment - Matches Reference Screenshot)
          ========================================================================= */}
      <div className="space-y-6 pt-4">
        
        {/* Office Header */}
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white border border-slate-200/90 shadow-2xs flex items-center justify-center text-slate-600 shrink-0">
            <Building2 className="w-7 h-7 sm:w-8 sm:h-8 stroke-[1.75]" />
          </div>
          <div>
            <h3 className="text-2xl sm:text-3xl font-black text-slate-800 tracking-tight">
              Tại văn phòng
            </h3>
            <p className="text-xs sm:text-sm text-slate-500">
              Giao dịch thanh toán và ký kết hợp đồng trực tiếp tại trụ sở Uni Creation
            </p>
          </div>
        </div>

        {/* Office Details Light Blue Box (Matches Reference Screenshot) */}
        <div className="bg-[#eef7ff] border border-[#d2e8fc] rounded-3xl p-6 sm:p-8 text-slate-800 space-y-7 shadow-xs">
          
          {/* Office Address & Working Hours */}
          <div className="space-y-3">
            <h4 className="text-base sm:text-lg font-bold text-slate-900">
              Bạn có thể đến văn phòng của chúng tôi để giao dịch
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-700 leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="text-slate-400 font-bold">•</span>
                <span>
                  <strong>Địa chỉ:</strong> tầng 6, số 303 Vũ Tông Phan, Q. Thanh Xuân, TP Hà Nội
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-slate-400 font-bold">•</span>
                <span>
                  <strong>Hotline:</strong> <a href="tel:0967508333" className="text-[#00529c] font-bold hover:underline">0967.508.333</a>
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-slate-400 font-bold">•</span>
                <span>
                  <strong>Giờ làm việc:</strong> từ thứ 2 đến thứ 6, từ 8:30 đến 18:00
                </span>
              </li>
            </ul>
          </div>

          <div className="h-px bg-[#d2e8fc] w-full" />

          {/* Guidelines & Customer Protection Notice */}
          <div className="space-y-3">
            <h4 className="text-base sm:text-lg font-bold text-slate-900">
              Để đảm bảo quyền lợi khách hàng, khách hàng cần lưu ý
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-700 leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="text-slate-400 font-bold">•</span>
                <span>Giao dịch tại các địa điểm được quy định.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-slate-400 font-bold">•</span>
                <span>Kiểm tra cẩn thận các giao dịch trước khi rời nơi giao dịch.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-slate-400 font-bold">•</span>
                <span>Khách hàng phải ký vào phiếu thu và hồ sơ đăng ký dịch vụ.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-slate-400 font-bold">•</span>
                <span>Dịch vụ chỉ được đăng ký/gia hạn khi nhận được thanh toán và thông tin chính xác đầy đủ.</span>
              </li>
            </ul>
          </div>

        </div>

      </div>

      {/* =========================================================================
          QR MODAL PREVIEW (For easy scanning on screens)
          ========================================================================= */}
      {previewQr && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs"
          onClick={() => setPreviewQr(null)}
        >
          <div
            className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full space-y-5 shadow-2xl relative text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setPreviewQr(null)}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-1">
              <h4 className="text-base sm:text-lg font-bold text-slate-900">{previewQr.bank}</h4>
              <p className="text-xs sm:text-sm text-slate-500 font-semibold uppercase">{previewQr.name}</p>
            </div>

            <div className="bg-slate-50 p-4 rounded-2xl border-2 border-slate-200 inline-block shadow-inner">
              <img
                src={previewQr.qrUrl}
                alt="Mã QR phóng to"
                className="w-64 h-64 sm:w-72 sm:h-72 object-contain mx-auto rounded-lg"
              />
            </div>

            <div className="space-y-1">
              <div className="text-[11px] text-slate-500">Số tài khoản:</div>
              <div className="font-mono text-xl font-black text-slate-900 tracking-wider">
                {previewQr.account}
              </div>
            </div>

            <div className="pt-2 flex items-center justify-center gap-3">
              <button
                onClick={() => copyToClipboard(previewQr.account, 'modal')}
                className="px-4 py-2 rounded-xl btn-brand-gradient text-white text-xs font-semibold flex items-center gap-1.5 shadow-xs cursor-pointer"
              >
                {copiedAccount === 'modal' ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    <span>Đã chép số tài khoản</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Sao chép số tài khoản</span>
                  </>
                )}
              </button>
            </div>

            <p className="text-[11px] text-slate-400">
              Quét mã bằng app ngân hàng sẽ tự động điền STK, quý khách tự nhập số tiền cần thanh toán.
            </p>
          </div>
        </div>
      )}

    </div>
  );
};
