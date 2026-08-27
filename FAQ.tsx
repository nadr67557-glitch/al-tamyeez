import React from 'react';

export default function FAQ() {
  return (
    <div dir="rtl" className="py-16 bg-white">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">الأسئلة الشائعة</h2>
      <div className="max-w-3xl mx-auto px-4 space-y-4 text-right">
        <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 shadow-sm">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">ما هي مناطق الخدمة التي تغطونها؟</h3>
          <p className="text-gray-600">نغطي كافة مناطق الشرقية وجميع المدن المجاورة بأسرع وقت ممكن.</p>
        </div>
        <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 shadow-sm">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">هل تقدمون ضماناً على الأعمال؟</h3>
          <p className="text-gray-600">نعم، نقدم ضماناً شاملاً على جميع أعمال المظلات، السواتر، والهناجر ضد عيوب التركيب.</p>
        </div>
        <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 shadow-sm">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">كيف يمكنني طلب معاينة للموقع؟</h3>
          <p className="text-gray-600">يمكنك التواصل معنا مباشرة عبر الأزرار المخصصة في الموقع لتحديد موعد المعاينة.</p>
        </div>
        <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 shadow-sm">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">هل الأسعار تشمل التوريد والتركيب؟</h3>
          <p className="text-gray-600">نعم، جميع أسعارنا تشمل التوريد والتركيب بأعلى مواصفات الجودة.</p>
        </div>
      </div>
    </div>
  );
}
