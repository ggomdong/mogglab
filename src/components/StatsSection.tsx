export function StatsSection() {
  const stats = [
    { value: "500+", label: "도입 기업" },
    { value: "10,000+", label: "활성 사용자" },
    { value: "99.9%", label: "시스템 가동률" },
    { value: "24/7", label: "고객 지원" }
  ];

  return (
    <section className="py-16 px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="text-4xl font-bold text-indigo-600 mb-2">
                {stat.value}
              </div>
              <div className="text-base font-medium text-slate-600">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}