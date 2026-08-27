
import React from 'react';

const list = [
  { t: 'تركيب مظلات', d: 'تفصيل وتركيب مظلات سيارات وحدائق.', i: '🎪' },
  { t: 'تركيب سواتر', d: 'سواتر خشبية وحديدية لحماية المنازل.', i: '🚧' },
  { t: 'تصميم برجولات', d: 'برجولات راقية للجلسات الخارجية.', i: '🏡' },
  { t: 'تركيب شبوك', d: 'شبوك زراعية وأمنية لتسوير الأراضي.', i: '🔗' },
  { t: 'بناء هناجر', d: 'تنفيذ هناجر ومستودعات بأعلى جودة.', i: '🏭' }
];

export default function Services() {
  return (
    <div dir="rtl" className="py-16 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-8">خدماتنا</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
        {list.map((s, idx) => (
          <div key={idx} className="bg-white p-6 rounded shadow text-center">
            <div className="text-4xl mb-2">{s.i}</div>
            <h3 className="text-xl font-bold mb-2">{s.t}</h3>
            <p className="text-gray-600">{s.d}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
