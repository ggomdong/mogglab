import { ShieldCheck, Lock, Fingerprint, FileText } from "lucide-react";

const items = [
  {
    icon: ShieldCheck,
    title: "개인정보 최소 수집",
    desc: "Medi HR은 출퇴근 처리에 필요한 최소 정보(계정 식별, 기기 식별, 근태 기록 등)만 처리하며, 위치 추적(GPS) 기반의 상시 수집을 전제로 하지 않습니다.",
  },
  {
    icon: Lock,
    title: "전송/접근 보호",
    desc: "통신 구간 보호(TLS)와 서버 측 접근 제어를 통해 조직 데이터가 권한 없는 사용자에게 노출되지 않도록 설계합니다.",
  },
  {
    icon: Fingerprint,
    title: "대리 출근 방지 설계",
    desc: "계정·기기 식별 정보를 활용해 조직 정책에 맞는 인증 흐름을 제공합니다. 고객사는 내부 규정에 따라 계정 발급/회수 및 권한을 운영할 수 있습니다.",
  },
  {
    icon: FileText,
    title: "정책 문서 공개",
    desc: "개인정보처리방침과 이용약관을 공개하고, 지원 채널을 통해 문의/삭제 요청을 접수합니다.",
    links: [
      { label: "개인정보처리방침", href: "/medi-hr/privacy/" },
      { label: "이용약관", href: "/medi-hr/terms/" },
    ],
  },
];

export function TestimonialSection() {
  return (
    <section id="security" className="py-24 px-6 lg:px-8 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 bg-emerald-100 text-emerald-700 rounded-full mb-4">
            Security & Privacy
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            안전하게 운영할 수 있도록
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            조직형 서비스는 신뢰가 핵심입니다. Medi HR은 운영자/사용자 모두가 납득할 수 있는
            개인정보 처리 기준과 보안 원칙을 기본값으로 둡니다.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it, idx) => {
            const Icon = it.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-slate-200 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-900 text-white flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{it.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">{it.desc}</p>
                {it.links && (
                  <div className="flex flex-col gap-2">
                    {it.links.map((l) => (
                      <a
                        key={l.href}
                        href={l.href}
                        className="text-sm font-semibold text-blue-600 hover:text-blue-700"
                      >
                        {l.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
