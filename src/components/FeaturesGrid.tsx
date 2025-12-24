import { Clock, Users, BarChart3, DollarSign, Calendar, Shield, Smartphone, Zap } from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "스마트 출결관리",
    description: "QR, NFC, GPS 기반 다양한 출퇴근 방식 지원. 실시간 현황 파악과 자동 집계.",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Calendar,
    title: "유연한 스케줄링",
    description: "교대근무, 시차출퇴근, 재택근무까지. 모든 근무 형태를 한 곳에서 관리하세요.",
    color: "from-violet-500 to-purple-500"
  },
  {
    icon: DollarSign,
    title: "정확한 급여계산",
    description: "복잡한 수당과 공제를 자동 계산. 급여명세서 발급까지 원클릭으로.",
    color: "from-emerald-500 to-teal-500"
  },
  {
    icon: BarChart3,
    title: "실시간 분석",
    description: "직원별, 부서별 근태 현황을 한눈에. 데이터 기반 의사결정을 지원합니다.",
    color: "from-orange-500 to-red-500"
  },
  {
    icon: Users,
    title: "조직 관리",
    description: "부서, 직급, 권한을 체계적으로 관리. 대규모 조직도 쉽게 운영하세요.",
    color: "from-pink-500 to-rose-500"
  },
  {
    icon: Shield,
    title: "보안 강화",
    description: "금융권 수준의 암호화와 접근 제어. 민감한 인사 정보를 안전하게 보호합니다.",
    color: "from-slate-500 to-zinc-500"
  },
  {
    icon: Smartphone,
    title: "모바일 앱",
    description: "iOS, Android 네이티브 앱 제공. 언제 어디서나 편리하게 사용하세요.",
    color: "from-indigo-500 to-blue-500"
  },
  {
    icon: Zap,
    title: "빠른 통합",
    description: "기존 ERP, 회계 시스템과 연동 가능. API로 자유롭게 확장하세요.",
    color: "from-yellow-500 to-amber-500"
  }
];

export function FeaturesGrid() {
  return (
    <section className="py-24 px-6 lg:px-8 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 bg-indigo-100 text-indigo-700 rounded-full mb-4">
            All-in-One Solution
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            필요한 모든 기능을<br />하나의 플랫폼에서
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            복잡했던 인사 관리 업무를 단순하게. MoggLab이 제공하는<br />
            강력한 기능으로 업무 효율을 극대화하세요.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div 
                key={idx}
                className="group bg-white rounded-2xl p-6 hover:shadow-xl transition-all duration-300 border border-slate-200 hover:border-indigo-300"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
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