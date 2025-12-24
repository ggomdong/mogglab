import { Zap, Shield, Smartphone, Headphones } from "lucide-react";

const benefits = [
  {
    icon: Zap,
    title: "빠른 도입",
    description: "복잡한 설정 없이 5분 만에 시작할 수 있습니다."
  },
  {
    icon: Shield,
    title: "안전한 보안",
    description: "금융권 수준의 데이터 암호화로 정보를 보호합니다."
  },
  {
    icon: Smartphone,
    title: "모바일 지원",
    description: "언제 어디서나 스마트폰으로 관리할 수 있습니다."
  },
  {
    icon: Headphones,
    title: "전문 지원",
    description: "전담 고객 지원팀이 항상 함께합니다."
  }
];

export function Benefits() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="mb-4 text-gray-900">
            왜 MoggLab을 선택해야 할까요?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            업무용 소프트웨어 전문 스튜디오가 만든<br />
            검증된 솔루션을 경험하세요.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl mb-4 shadow-lg">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="mb-2 text-gray-900">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-20 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-12 border border-cyan-100">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-cyan-600 mb-2">
                10,000+
              </div>
              <p className="text-gray-600">활성 사용자</p>
            </div>
            <div>
              <div className="text-cyan-600 mb-2">
                500+
              </div>
              <p className="text-gray-600">파트너 기업</p>
            </div>
            <div>
              <div className="text-cyan-600 mb-2">
                99.9%
              </div>
              <p className="text-gray-600">서비스 가동률</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
