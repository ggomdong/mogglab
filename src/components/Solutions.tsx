import { ImageWithFallback } from "./figma/ImageWithFallback";

const solutions = [
  {
    title: "병·의원 솔루션",
    description: "의료기관 특성에 맞춘 맞춤형 근무 관리",
    features: [
      "의료진 교대 근무 스케줄링",
      "진료과별 인력 배치 최적화",
      "당직 및 온콜 관리",
      "의료법 준수 근로시간 관리"
    ],
    image: "https://images.unsplash.com/photo-1758691463333-c79215e8bc3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwY2xpbmljJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzY0ODI5Mzc4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    reverse: false
  },
  {
    title: "중소기업 솔루션",
    description: "성장하는 기업을 위한 확장 가능한 인사 관리",
    features: [
      "다양한 근무 형태 지원",
      "유연 근무제 관리",
      "부서별 성과 분석",
      "급여 자동 계산 및 지급"
    ],
    image: "https://images.unsplash.com/photo-1630283017802-785b7aff9aac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzY0NzQyMDIzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    reverse: true
  }
];

export function Solutions() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="mb-4 text-gray-900">
            업종별 맞춤 솔루션
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            각 산업의 특성을 이해하고 최적화된 솔루션을 제공합니다.
          </p>
        </div>

        <div className="space-y-24">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className={`flex flex-col ${solution.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}
            >
              <div className="flex-1">
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
                  <h3 className="mb-3 text-gray-900">
                    {solution.title}
                  </h3>
                  <p className="mb-6 text-gray-600">
                    {solution.description}
                  </p>
                  <ul className="space-y-3">
                    {solution.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-cyan-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <div className="w-2 h-2 rounded-full bg-cyan-600"></div>
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="flex-1 w-full">
                <div className="relative rounded-2xl overflow-hidden shadow-lg">
                  <div className="aspect-[4/3]">
                    <ImageWithFallback
                      src={solution.image}
                      alt={solution.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
