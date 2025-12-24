export function StatsSection() {
  const stats = [
    { value: "5분", label: "기본 설정" },
    { value: "iOS/Android", label: "모바일 앱" },
    { value: "근무표 연동", label: "월간 자동 집계" },
    { value: "조직/권한", label: "관리자 운영" }
  ];

  return (
    <section className="py-16 px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">
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