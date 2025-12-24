import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArrowRight } from "lucide-react";

const solutions = [
  {
    tag: "Healthcare",
    title: "병·의원 특화 솔루션",
    description: "의료기관의 복잡한 근무 환경을 완벽하게 이해합니다. 3교대 근무, 당직, 온콜 관리부터 의료법 준수 근로시간 관리까지.",
    features: [
      "의료진 교대 근무 자동 스케줄링",
      "진료과별 인력 배치 최적화",
      "당직/온콜 관리 및 수당 자동 계산",
      "의료법 기준 근로시간 모니터링"
    ],
    image: "https://images.unsplash.com/photo-1560306990-18fa759c8713?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3NwaXRhbCUyMG1vZGVybiUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzY0NzY4NzAwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    gradient: "from-emerald-500 to-teal-500"
  },
  {
    tag: "Enterprise",
    title: "중소기업 성장 솔루션",
    description: "빠르게 성장하는 기업을 위한 확장 가능한 인사 관리 시스템. 유연 근무제부터 성과 관리까지 모든 것을 지원합니다.",
    features: [
      "다양한 근무 형태 유연하게 지원",
      "재택/하이브리드 근무 관리",
      "부서별 성과 분석 대시보드",
      "급여 자동 계산 및 명세서 발급"
    ],
    image: "https://images.unsplash.com/photo-1709715357520-5e1047a2b691?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHRlYW0lMjBtZWV0aW5nfGVufDF8fHx8MTc2NDczNDU5M3ww&ixlib=rb-4.1.0&q=80&w=1080",
    gradient: "from-indigo-500 to-purple-500"
  }
];

export function ProductShowcase() {
  return (
    <section className="py-24 px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-1.5 bg-purple-100 text-purple-700 rounded-full mb-4">
            Industry Solutions
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            업종별 특화된<br />맞춤 솔루션
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            각 산업의 특성과 니즈를 깊이 이해하고<br />
            최적화된 솔루션을 제공합니다.
          </p>
        </div>

        <div className="space-y-32">
          {solutions.map((solution, idx) => (
            <div 
              key={idx}
              className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
            >
              {/* Image */}
              <div className="flex-1 w-full">
                <div className="relative group">
                  <div className={`absolute -inset-4 bg-gradient-to-r ${solution.gradient} rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity`}></div>
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <ImageWithFallback 
                      src={solution.image}
                      alt={solution.title}
                      className="w-full aspect-[4/3] object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className={`inline-block px-3 py-1 text-sm font-semibold bg-gradient-to-r ${solution.gradient} text-white rounded-lg mb-4`}>
                  {solution.tag}
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                  {solution.title}
                </h3>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  {solution.description}
                </p>
                
                <div className="space-y-4 mb-8">
                  {solution.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${solution.gradient} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                        <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-slate-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                <button className={`inline-flex items-center gap-2 px-6 py-3 font-semibold bg-gradient-to-r ${solution.gradient} text-white rounded-xl hover:shadow-lg hover:shadow-indigo-500/30 transition-all`}>
                  자세히 알아보기
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}