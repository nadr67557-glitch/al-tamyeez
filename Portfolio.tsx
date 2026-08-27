import { useState } from 'react';
import { X, Share2 } from 'lucide-react';
import { PORTFOLIO_ITEMS } from '../config/constants';
import { shareOnWhatsApp, nativeShare } from '../utils/socialShare';

export default function Portfolio() {
  const [filter, setFilter] = useState('الكل');
  const [selectedImage, setSelectedImage] = useState<typeof PORTFOLIO_ITEMS[0] | null>(null);
  const categories = ['الكل', ...Array.from(new Set(PORTFOLIO_ITEMS.map(item => item.category)))];
  const filteredItems = filter === 'الكل' ? PORTFOLIO_ITEMS : PORTFOLIO_ITEMS.filter(item => item.category === filter);
  const handleShare = async (item: typeof PORTFOLIO_ITEMS[0], e: React.MouseEvent) => {
    e.stopPropagation();
    const shared = await nativeShare({ title: `${item.category} - ${item.title}`, text: item.description || '', url: window.location.href + '#portfolio' });
    if (!shared) shareOnWhatsApp({ title: `${item.category} - ${item.title}`, text: item.description || '', url: window.location.href + '#portfolio' });
  };

  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12"><span className="text-amber-600 font-bold tracking-wider text-sm uppercase mb-2 block">أعمالنا</span><h2 className="text-3xl md:text-5xl font-black text-stone-900 mb-6">معرض المشاريع</h2><p className="text-stone-600 max-w-2xl mx-auto text-lg">نماذج من المشاريع المنفذة بأعلى معايير الجودة والدقة.</p><div className="mt-4 inline-block bg-amber-50 border border-amber-200 text-amber-800 px-4 py-2 rounded-lg text-sm font-semibold">⚠️ الصور المعروضة حاليًا صور توضيحية مؤقتة، وسيتم استبدالها بصور مشاريع المؤسسة الحقيقية عند تزويدنا بها.</div></div>
        <div className="flex flex-wrap justify-center gap-3 mb-12">{categories.map(cat => <button key={cat} onClick={() => setFilter(cat)} className={`px-6 py-2.5 rounded-full font-bold transition-all duration-300 ${filter === cat ? 'bg-stone-900 text-white shadow-lg' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'}`}>{cat}</button>)}</div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map(item => <div key={item.id} className="group relative overflow-hidden rounded-2xl shadow-md cursor-pointer bg-stone-100 aspect-[4/3]" onClick={() => setSelectedImage(item)}><img src={item.image} alt={item.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" /><div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6"><span className="text-amber-400 text-sm font-bold mb-1">{item.category}</span><h3 className="text-white text-xl font-black mb-2">{item.title}</h3><p className="text-stone-300 text-sm mb-4 line-clamp-2">{item.description}</p><button onClick={e => handleShare(item, e)} className="flex items-center gap-2 text-stone-900 bg-white hover:bg-amber-400 px-4 py-2 rounded-lg text-sm font-bold transition-colors w-fit"><Share2 size={16} /> مشاركة</button></div></div>)}
        </div>
      </div>
      {selectedImage && <div className="fixed inset-0 bg-black/95 z-[70] flex items-center justify-center p-4 backdrop-blur-sm" onClick={() => setSelectedImage(null)}><button className="absolute top-6 left-6 text-white hover:text-amber-400 z-10 p-2 bg-white/10 rounded-full" onClick={() => setSelectedImage(null)}><X size={32} /></button><div className="max-w-4xl w-full max-h-[90vh] flex flex-col" onClick={e => e.stopPropagation()}><img src={selectedImage.image} alt={selectedImage.title} className="w-full h-auto max-h-[70vh] object-contain rounded-t-2xl" /><div className="bg-white p-6 rounded-b-2xl text-right"><div className="flex justify-between items-start mb-2"><div><h3 className="text-2xl font-black text-stone-900 mb-1">{selectedImage.title}</h3><p className="text-stone-600">{selectedImage.description}</p></div><span className="inline-block px-4 py-1.5 bg-amber-100 text-amber-800 rounded-full text-sm font-bold whitespace-nowrap">{selectedImage.category}</span></div></div></div></div>}
    </section>
  );
}
