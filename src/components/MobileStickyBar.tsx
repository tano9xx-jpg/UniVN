import React from 'react';
import { COMPANY_INFO } from '../data/siteData';
import { Phone, MessageCircle, Calculator } from 'lucide-react';

interface MobileStickyBarProps {
  onOpenCalculator: () => void;
  onNavigateToContact: () => void;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({ onOpenCalculator, onNavigateToContact }) => {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 px-3 py-2 shadow-lg h-14 flex items-center justify-between gap-2">
      <a
        href={`tel:${COMPANY_INFO.hotline}`}
        className="flex-1 flex items-center justify-center gap-1.5 py-2 px-2 bg-[#0baba0] active:bg-[#008f80] text-white text-xs font-bold rounded-xl shadow-sm"
      >
        <Phone className="w-3.5 h-3.5" />
        <span className="truncate">Gọi {COMPANY_INFO.hotline}</span>
      </a>

      <a
        href="https://zalo.me/0967508333"
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-1.5 py-2 px-2 bg-blue-600 active:bg-blue-700 text-white text-xs font-bold rounded-xl shadow-sm"
      >
        <MessageCircle className="w-3.5 h-3.5" />
        <span className="truncate">Chat Zalo</span>
      </a>

      <button
        onClick={onOpenCalculator}
        className="flex-1 flex items-center justify-center gap-1.5 py-2 px-2 btn-brand-gradient active:brightness-95 text-white text-xs font-bold rounded-xl shadow-sm cursor-pointer"
      >
        <Calculator className="w-3.5 h-3.5" />
        <span className="truncate">Dự toán web</span>
      </button>
    </div>
  );
};
