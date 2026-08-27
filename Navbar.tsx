import { useState } from 'react';
import { Menu, X, ShoppingCart, Bot, MessageCircle } from 'lucide-react';
import { COMPANY } from '../config/constants';
import { useCart } from '../context/CartContext';

interface NavbarProps {
  onOpenAssistant: () => void;
  onOpenCart: () => void;
}

export default function Navbar({ onOpenAssistant, onOpenCart }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { itemCount } = useCart();
  const navLinks = [
    { name: 'الرئيسية', href: '#hero' },
    { name: 'الخدمات', href: '#services' },
    { name: 'معرض الأعمال', href: '#portfolio' },
    { name: 'لماذا نحن', href: '#why-us' },
    { name: 'تواصل معنا', href: '#footer' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md shadow-sm z-50 border-b border-stone-100">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-700 rounded-xl flex items-center justify-center text-white shadow-lg"><span className="text-2xl font-black">تـ</span></div>
            <div className="hidden md:block"><h1 className="text-lg font-extrabold text-stone-900 leading-tight">{COMPANY.shortName}</h1><p className="text-xs text-stone-500 font-medium">للمظلات والسواتر والجلسات</p></div>
          </a>
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map(link => <a key={link.name} href={link.href} className="text-stone-600 hover:text-amber-700 font-bold transition-colors">{link.name}</a>)}
          </div>
          <div className="hidden lg:flex items-center gap-3">
            <button onClick={onOpenAssistant} className="flex items-center gap-2 bg-stone-900 text-white px-4 py-2.5 rounded-xl font-bold hover:bg-stone-800 transition-all shadow-lg"><Bot size={18} /><span>مساعد التمييز</span></button>
            <button onClick={onOpenCart} className="relative p-3 text-stone-600 hover:text-amber-700 hover:bg-amber-50 rounded-xl transition-all"><ShoppingCart size={24} />{itemCount > 0 && <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center animate-bounce">{itemCount}</span>}</button>
            <a href={COMPANY.whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-green-600 text-white px-5 py-2.5 rounded-xl font-bold hover:bg-green-700 transition-all shadow-lg"><MessageCircle size={18} /><span>واتساب</span></a>
          </div>
          <button className="lg:hidden p-2 text-stone-600 hover:bg-stone-100 rounded-lg" onClick={() => setIsMenuOpen(!isMenuOpen)}>{isMenuOpen ? <X size={28} /> : <Menu size={28} />}</button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-stone-100 absolute w-full shadow-2xl">
          <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
            {navLinks.map(link => <a key={link.name} href={link.href} className="text-stone-700 hover:text-amber-700 font-bold py-3 border-b border-stone-50" onClick={() => setIsMenuOpen(false)}>{link.name}</a>)}
            <button onClick={() => { onOpenAssistant(); setIsMenuOpen(false); }} className="w-full flex items-center justify-center gap-2 bg-stone-900 text-white px-4 py-3.5 rounded-xl font-bold mt-2"><Bot size={20} /> {COMPANY.assistantName}</button>
            <button onClick={() => { onOpenCart(); setIsMenuOpen(false); }} className="w-full flex items-center justify-center gap-2 bg-amber-600 text-white px-4 py-3.5 rounded-xl font-bold"><ShoppingCart size={20} /> عرض سلة الطلبات{itemCount > 0 && <span className="bg-white text-amber-600 text-xs font-bold px-2 py-0.5 rounded-full mr-2">{itemCount}</span>}</button>
          </div>
        </div>
      )}
    </nav>
  );
}
