import { ArrowRight, Check } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-24 px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="relative">
          {/* Gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 rounded-3xl"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent rounded-3xl"></div>
          
          {/* Content */}
          <div className="relative px-8 py-16 md:px-16 md:py-20 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Medi HR 도입 상담
            </h2>
            <p className="text-lg text-indigo-100 mb-10 max-w-2xl mx-auto leading-relaxed">
              고객사 환경(지점 수, 근무표 방식, 운영 규정)을 기준으로
              적용 범위와 운영 방식을 함께 설계합니다.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <a
                href="mailto:support@mogglab.com?subject=Medi%20HR%20%EB%8F%84%EC%9E%85%20%EC%83%81%EB%8B%B4"
                className="px-8 py-4 font-semibold bg-white text-indigo-600 rounded-xl hover:bg-indigo-50 transition-all hover:shadow-xl flex items-center justify-center gap-2"
              >
                데모/도입 문의
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="/medi-hr/support/"
                className="px-8 py-4 font-semibold bg-white/10 backdrop-blur text-white border border-white/30 rounded-xl hover:bg-white/20 transition-all text-center"
              >
                고객지원/FAQ
              </a>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-white/90">
              {[
                "조직 도입형(관리자 승인)",
                "비콘 기반 현장 인증",
                "정책 문서/지원 채널 제공"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <Check className="w-5 h-5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}