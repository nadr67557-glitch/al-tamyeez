import { Phone, MessageCircle, Calculator, Bot } from 'lucide-react';
import { COMPANY } from '../config/constants';

interface MobileStickyBarProps { onOpenCalculator: () => void; onOpenAssistant: () => void; }

export default function MobileStickyBar({ onOpenCalculator, onOpenAssistant }: MobileStickyBarProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-lg border-t border-stone-200 shadow-[0_-4px_20px_rgba(0,0,0,0.1)] z-40 md:hidden safe-area-pb"><div className="flex justify-around items-center h-16"><a href={COMPANY.whatsappLink} className="flex flex-col items-center text-green-600 min-w-[60px] active:scale-95 transition-transform"><MessageCircle size={24} /><span className="text-[10px] mt-1 font-black">واتساب</span></a><a href={`tel:${COMPANY.phone}`} className="flex flex-col items-center text-blue-600 min-w-[60px] active:scale-95 transition-transform"><Phone size={24} /><span className="text-[10px] mt-1 font-black">اتصال</span></a><button onClick={onOpenCalculator} className="flex flex-col items-center text-amber-600 min-w-[60px] active:scale-95 transition-transform"><Calculator size={24} /><span className="text-[10px] mt-1 font-black">الحاسبة</span></button><button onClick={onOpenAssistant} className="flex flex-col items-center text-stone-800 min-w-[60px] active:scale-95 transition-transform"><Bot size={24} /><span className="text-[10px] mt-1 font-black">المساعد</span></button></div></div>
  );
}
