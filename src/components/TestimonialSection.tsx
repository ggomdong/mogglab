import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "김민수",
    role: "서울메디컬센터 원장",
    content: "3교대 근무 스케줄 관리가 정말 힘들었는데, MoggLab 도입 후 인사 업무 시간이 70% 단축됐어요. 의료진들도 자기 스케줄을 쉽게 확인할 수 있어서 만족도가 높습니다.",
    rating: 5
  },
  {
    name: "이지현",
    role: "테크스타트 HR 팀장",
    content: "재택근무와 사무실 근무를 병행하는 하이브리드 환경에서 근태 관리가 복잡했는데, MoggLab이 완벽하게 해결해줬습니다. 급여 계산도 자동화되어 정말 편해요.",
    rating: 5
  },
  {
    name: "박준영",
    role: "그린케어병원 행정실장",
    content: "여러 인사관리 솔루션을 써봤지만 MoggLab만큼 의료기관 환경에 최적화된 제품은 없었어요. 고객지원도 신속하고 친절합니다.",
    rating: 5
  }
];

export function TestimonialSection() {
  return (
    <section className="py-24 px-6 lg:px-8 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 bg-amber-100 text-amber-700 rounded-full mb-4">
            Customer Success Stories
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            고객들의 진짜 후기
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            이미 500개 이상의 기업이 MoggLab으로<br />
            인사 관리를 혁신하고 있습니다.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 hover:shadow-lg transition-shadow">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              
              <Quote className="w-8 h-8 text-indigo-200 mb-4" />
              
              <p className="text-slate-700 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-3 pt-6 border-t border-slate-100">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-slate-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-slate-500">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}