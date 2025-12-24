import {
  Bluetooth,
  Shield,
  Calendar,
  BarChart3,
  LayoutDashboard,
  Bell,
  Smartphone,
  Layers,
} from "lucide-react";

const features = [
  {
    icon: Bluetooth,
    title: "비콘 기반 출퇴근",
    description:
      "iBeacon 신호로 근무지 인증 후 출근/퇴근을 처리합니다. GPS 추적 없이도 현장 인증이 가능합니다.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Shield,
    title: "대리 출근 방지",
    description:
      "기기 식별/계정 연동, 근무표 기반 검증 로직으로 대리 출근과 부정 기록을 줄입니다.",
    color: "from-slate-500 to-zinc-500",
  },
  {
    icon: Calendar,
    title: "근무표·휴무 연동",
    description:
      "소정근로/휴일근로/OFF/유·무급휴무 등 근무 구분을 기준으로 출퇴근 가능 여부와 상태를 산정합니다.",
    color: "from-blue-500 to-white0",
  },
  {
    icon: BarChart3,
    title: "월간 캘린더·집계",
    description:
      "월간 캘린더에서 일자별 상태를 확인하고, 지각/조퇴/연장/휴일근무 시간 지표를 자동 합산합니다.",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: LayoutDashboard,
    title: "관리자 대시보드",
    description:
      "조직 단위로 근태 현황을 모니터링하고, 오류/지각/조퇴/연장 등 지표 기반으로 빠르게 확인합니다.",
    color: "from-emerald-500 to-teal-500",
  },
  {
    icon: Bell,
    title: "실시간 갱신",
    description:
      "상태 변경 시 최신 정보를 빠르게 반영할 수 있도록 업데이트 흐름을 설계했습니다(앱/웹 운영 편의).",
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: Smartphone,
    title: "모바일 중심 UX",
    description:
      "현장 사용자가 빠르게 누르고 확인할 수 있는 단순한 흐름에 집중했습니다. 프로필/공지/상태 확인을 통합합니다.",
    color: "from-blue-500 to-white0",
  },
  {
    icon: Layers,
    title: "확장 로드맵",
    description:
      "식대, 휴가, 급여 등 HR 운영에 필요한 기능을 고객사 요구에 맞춰 단계적으로 확장할 계획입니다.",
    color: "from-yellow-500 to-amber-500",
  },
];

export function FeaturesGrid() {
  return (
    <section id="features" className="py-24 px-6 lg:px-8 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full mb-4">
            Medi HR Core
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            출결과 근무표 운영에 필요한<br />핵심 기능을 빠르게
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Medi HR은 “현장에서 필요한 것”에 집중합니다. 조직 정책(근무표)과
            실제 기록(출퇴근)을 일관된 기준으로 계산해, 운영자가 바로 쓸 수 있게 만듭니다.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div 
                key={idx}
                className="group bg-white rounded-2xl p-6 hover:shadow-xl transition-all duration-300 border border-slate-200 hover:border-blue-300"
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