import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArrowRight } from "lucide-react";

const solutions = [
  {
    tag: "Clinic / Franchise",
    title: "지점형 조직(병·의원/프랜차이즈)",
    description:
      "지점마다 비콘을 설치하고, 근무표(스케줄) 기준으로 출퇴근을 처리합니다. 현장에서 필요한 ‘정확한 인증’과 ‘간단한 흐름’에 집중했습니다.",
    features: [
      "지점별 비콘 등록 및 자동 인식",
      "근무표 기반 출근/퇴근 가능 여부 검증",
      "월간 캘린더에서 상태/지표(지각·조퇴·연장·휴근) 확인",
      "관리자용 월간/일간 현황 화면으로 모니터링",
    ],
    image:
      "https://images.unsplash.com/photo-1512678080530-7760d81faba6?auto=format&fit=crop&w=1200&q=80",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    tag: "Office / Multi-site",
    title: "사무 + 현장 혼합 조직",
    description:
      "사무/현장/지점 등 다양한 근무 환경에서 ‘근무표 기준의 일관된 계산’이 중요합니다. Medi HR은 기록과 규칙을 분리해 운영의 안정성을 높입니다.",
    features: [
      "일자별 상태 코드 및 분/시간 지표 자동 산출",
      "오류(기록 누락/정책 불일치) 케이스를 빠르게 식별",
      "앱에서 개인 캘린더 기반 조회(1인×1개월)",
      "웹에서 다수 인원 현황 조회(여러명×일/월)",
    ],
    image:
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1200&q=80",
    gradient: "from-indigo-500 to-purple-500",
  },
];

export function ProductShowcase() {
  return (
    <section id="how-it-works" className="py-24 px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-1.5 bg-purple-100 text-purple-700 rounded-full mb-4">
            How it works
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            도입부터 운영까지<br />현실적인 흐름
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            조직이 도입하면 관리자 계정을 발급하고, 지점 비콘과 근무표를 등록합니다.
            사용자는 앱에서 비콘 인식 → 출퇴근 처리 → 월간 캘린더로 확인하는 단순한 흐름입니다.
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

                <a
                  href="mailto:support@mogglab.com?subject=Medi%20HR%20%EB%8F%84%EC%9E%85%20%EC%83%81%EB%8B%B4"
                  className={`inline-flex items-center gap-2 px-6 py-3 font-semibold bg-gradient-to-r ${solution.gradient} text-white rounded-xl hover:shadow-lg hover:shadow-indigo-500/30 transition-all`}
                >
                  도입 상담 요청
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}