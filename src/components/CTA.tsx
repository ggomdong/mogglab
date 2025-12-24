import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-cyan-600 to-blue-700">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="mb-6 text-white">
          지금 바로 시작하세요
        </h2>
        <p className="mb-8 text-cyan-50 max-w-2xl mx-auto">
          14일 무료 체험으로 MoggLab의 강력한 기능을 경험해보세요.<br />
          신용카드 등록 없이 바로 시작할 수 있습니다.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 bg-white text-cyan-600 rounded-lg hover:bg-gray-100 transition-colors flex items-center justify-center gap-2">
            무료로 시작하기
            <ArrowRight className="w-5 h-5" />
          </button>
          <button className="px-8 py-4 bg-transparent text-white border-2 border-white rounded-lg hover:bg-white/10 transition-colors">
            영업팀과 상담하기
          </button>
        </div>
      </div>
    </section>
  );
}
