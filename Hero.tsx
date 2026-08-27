import { MessageCircle, Phone, Calculator, Bot, Share2 } from 'lucide-react';
import { COMPANY } from '../config/constants';
import { shareOnWhatsApp, nativeShare } from '../utils/socialShare';

interface HeroProps { onOpenCalculator: () => void; onOpenAssistant: () => void; }

export default function Hero({ onOpenCalculator, onOpenAssistant }: HeroProps) {
  const handleShare = async () => {
    const shared = await nativeShare({ title: COMPANY.name, text: 'تفضل بزيارة موقعنا الإلكتروني لمشاهدة خدماتنا المتميزة.', url: window.location.href });
    if (!shared) shareOnWhatsApp({ title: COMPANY.name, text: 'تفضل بزيارة موقعنا', url: window.location.href });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-stone-900 text-white overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-stone-900 via-stone-800 to-amber-950/60 z-0"></div>
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&h=1080&fit=crop')] bg-cover bg-center opacity-20 z-0 mix-blend-overlay"></div>
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 text-amber-300 px-5 py-2 rounded-full text-sm font-bold mb-8 backdrop-blur-md animate-fade-in-up"><span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></span>جودة تُصنع بفخر | ضمان حقيقي</div>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight animate-fade-in-up">{COMPANY.name}</h1>
        <p className="text-lg md:text-xl text-stone-300 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up">{COMPANY.description}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up">
          <a href={COMPANY.whatsappLink} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-3 transition-all shadow-lg"><MessageCircle size={22} /> تواصل عبر واتساب</a>
          <a href={`tel:${COMPANY.phone}`} className="w-full sm:w-auto bg-white/10 hover:bg-white/20 border border-white/30 text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-3 transition-all backdrop-blur-sm"><Phone size={22} /> اتصل الآن</a>
          <button onClick={onOpenCalculator} className="w-full sm:w-auto bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-3 transition-all shadow-lg"><Calculator size={22} /> {COMPANY.calculatorName}</button>
        </div>
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-10 animate-fade-in-up">
          <button onClick={onOpenAssistant} className="text-amber-400 hover:text-amber-300 font-bold flex items-center gap-2 transition-colors"><Bot size={20} /> جرب {COMPANY.assistantName}</button>
          <span className="hidden sm:block text-stone-600">|</span>
          <button onClick={handleShare} className="text-stone-400 hover:text-white font-bold flex items-center gap-2 transition-colors"><Share2 size={20} /> شارك الموقع</button>
        </div>
      </div>
    </section>
  );
}
