import { Clock, Calendar, TrendingUp, DollarSign } from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "출결·근태 관리",
    description: "실시간 출퇴근 기록과 자동 집계로 정확한 근무 시간을 관리하세요.",
    color: "bg-blue-100 text-blue-600"
  },
  {
    icon: Calendar,
    title: "스케줄 관리",
    description: "직원별 일정과 교대 근무를 한눈에 파악하고 효율적으로 배치하세요.",
    color: "bg-cyan-100 text-cyan-600"
  },
  {
    icon: TrendingUp,
    title: "성과 분석",
    description: "데이터 기반의 인사이트로 팀의 생산성을 향상시키세요.",
    color: "bg-teal-100 text-teal-600"
  },
  {
    icon: DollarSign,
    title: "급여 계산",
    description: "복잡한 급여 계산을 자동화하고 정확한 명세서를 생성하세요.",
    color: "bg-emerald-100 text-emerald-600"
  }
];

export function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="mb-4 text-gray-900">
            필요한 모든 기능을 하나로
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            MoggLab은 인사 관리의 모든 과정을 자동화하여<br />
            업무 효율을 극대화합니다.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className={`w-12 h-12 rounded-lg ${feature.color} flex items-center justify-center mb-4`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="mb-2 text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
