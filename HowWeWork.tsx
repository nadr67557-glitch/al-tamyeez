import { HOW_WE_WORK } from '../config/constants';

export default function HowWeWork() {
  return (
    <section className="py-24 bg-stone-50"><div className="container mx-auto px-4"><div className="text-center mb-16"><span className="text-amber-600 font-bold tracking-wider text-sm uppercase mb-2 block">منهجية العمل</span><h2 className="text-3xl md:text-5xl font-black text-stone-900 mb-6">كيف نعمل؟</h2><p className="text-stone-600 max-w-2xl mx-auto text-lg">رحلة واضحة ومنظمة من لحظة تواصلك معنا حتى تسليم المشروع.</p></div><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">{HOW_WE_WORK.map(step => <div key={step.step} className="relative bg-white p-8 rounded-3xl border border-stone-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"><div className="absolute -top-5 -right-5 w-12 h-12 bg-stone-900 text-amber-400 rounded-2xl flex items-center justify-center font-black text-xl shadow-lg border-4 border-stone-50">{step.step}</div><h3 className="text-lg font-black mb-3 mt-2 text-stone-900">{step.title}</h3><p className="text-stone-600 text-sm leading-relaxed">{step.desc}</p></div>)}</div></div></section>
  );
}
