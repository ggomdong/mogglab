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
              지금 바로 시작하세요
            </h2>
            <p className="text-lg text-indigo-100 mb-10 max-w-2xl mx-auto leading-relaxed">
              복잡했던 인사 관리, MoggLab으로 간단하게 해결하세요.<br />
              14일 무료 체험으로 모든 기능을 경험해보세요.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <button className="px-8 py-4 font-semibold bg-white text-indigo-600 rounded-xl hover:bg-indigo-50 transition-all hover:shadow-xl flex items-center justify-center gap-2">
                무료로 시작하기
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="px-8 py-4 font-semibold bg-white/10 backdrop-blur text-white border border-white/30 rounded-xl hover:bg-white/20 transition-all">
                영업팀 상담 신청
              </button>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-white/90">
              {[
                "신용카드 등록 불필요",
                "언제든 해지 가능",
                "24시간 고객 지원"
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