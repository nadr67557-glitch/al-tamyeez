import { ShieldCheck, Award, Clock, Users, Ruler, Headphones } from 'lucide-react';

export default function WhyUs() {
  const features = [
    { icon: <ShieldCheck size={32} />, title: 'جودة لا تُساوم', desc: 'نستخدم فقط أجود أنواع الخامات والهياكل المعدنية المعتمدة.' },
    { icon: <Award size={32} />, title: 'ضمان حقيقي', desc: 'نقدم ضمانات واضحة وشاملة على جميع أعمالنا وهياكلنا.' },
    { icon: <Clock size={32} />, title: 'التزام بالمواعيد', desc: 'نحترم وقتك، ونلتزم بجداول التنفيذ المتفق عليها بدقة.' },
    { icon: <Users size={32} />, title: 'فريق محترف', desc: 'فنيون ومهندسون ذوو خبرة عالية يضمنون تنفيذاً دقيقاً.' },
    { icon: <Ruler size={32} />, title: 'معاينة ميدانية', desc: 'نقوم بزيارة موقعك لقياس المساحات بدقة وتقديم الحل الأنسب.' },
    { icon: <Headphones size={32} />, title: 'خدمة ما بعد البيع', desc: 'نبقى بجانبك لضمان استمرار جودة العمل.' },
  ];
  return (
    <section id="why-us" className="py-24 bg-stone-900 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div><div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
      <div className="container mx-auto px-4 relative z-10"><div className="text-center mb-16"><span className="text-amber-400 font-bold tracking-wider text-sm uppercase mb-2 block">مميزاتنا</span><h2 className="text-3xl md:text-5xl font-black mb-6">لماذا مؤسسة التمييز؟</h2><p className="text-stone-400 max-w-2xl mx-auto text-lg">نجمع بين الخبرة العملية والذوق الرفيع لنقدم لك منتجاً يفوق توقعاتك.</p></div><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">{features.map((feature, index) => <div key={index} className="text-center p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-amber-500/50 hover:bg-white/10 transition-all duration-300 group"><div className="inline-flex items-center justify-center w-16 h-16 bg-amber-600/20 text-amber-400 rounded-2xl mb-6 group-hover:bg-amber-600 group-hover:text-white transition-all">{feature.icon}</div><h3 className="text-xl font-black mb-3">{feature.title}</h3><p className="text-stone-400 leading-relaxed">{feature.desc}</p></div>)}</div></div>
    </section>
  );
}
