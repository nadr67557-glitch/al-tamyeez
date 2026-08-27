import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../config/constants';

export default function Testimonials() {
  return (
    <section className="py-24 bg-white"><div className="container mx-auto px-4"><div className="text-center mb-16"><span className="text-amber-600 font-bold tracking-wider text-sm uppercase mb-2 block">آراء العملاء</span><h2 className="text-3xl md:text-5xl font-black text-stone-900 mb-6">ماذا يقول عملاؤنا؟</h2></div><div className="grid grid-cols-1 md:grid-cols-3 gap-8">{TESTIMONIALS.map(testimonial => <div key={testimonial.id} className="bg-stone-50 p-8 rounded-3xl border border-stone-100 relative"><Quote className="absolute top-6 left-6 text-amber-200" size={40} /><div className="flex gap-1 mb-4">{[...Array(testimonial.rating)].map((_, i) => <Star key={i} size={20} className="fill-amber-400 text-amber-400" />)}</div><p className="text-stone-700 leading-relaxed mb-6 relative z-10">"{testimonial.content}"</p><div className="flex items-center gap-4"><div className="w-12 h-12 bg-stone-200 rounded-full flex items-center justify-center text-stone-600 font-bold text-lg">{testimonial.name.charAt(0)}</div><div><h4 className="font-black text-stone-900">{testimonial.name}</h4><p className="text-sm text-stone-500">{testimonial.role}</p></div></div></div>)}</div><p className="text-center text-stone-400 text-sm mt-8">* آراء تجريبية توضيحية قابلة للتحديث بآراء عملاء المؤسسة الحقيقيين.</p></div></section>
  );
}
