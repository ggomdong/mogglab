import { Check, PlayCircle } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative pt-24 pb-32 px-6 lg:px-8 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50 -z-10"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-100/40 via-transparent to-transparent -z-10"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 rounded-full mb-8">
              <div className="w-2 h-2 bg-indigo-600 rounded-full animate-pulse"></div>
              <span className="text-indigo-700">비콘 기반 근태 · 스케줄 SaaS</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
              출퇴근부터 월간 집계까지,<br />
              <span className="text-indigo-600">Medi HR</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed">
              iBeacon 기반 출퇴근, 근무표 연동, 월간 캘린더/통계까지.
              의료기관·프랜차이즈·중소 조직을 위한 실무형 HR 운영 도구입니다.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a
                href="mailto:support@mogglab.com?subject=Medi%20HR%20%EB%8F%84%EC%9E%85%20%EC%83%81%EB%8B%B4"
                className="px-8 py-4 font-semibold bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-all hover:shadow-lg hover:shadow-indigo-600/30 text-center"
              >
                데모/도입 상담
              </a>
              <a
                href="/medi-hr/support/"
                className="px-8 py-4 font-medium bg-white text-slate-700 rounded-xl border border-slate-300 hover:border-slate-400 transition-all flex items-center justify-center gap-2"
              >
                <PlayCircle className="w-5 h-5" />
                고객지원/FAQ
              </a>
            </div>

            <div className="flex flex-col gap-3">
              {[
                "조직 도입 후 계정 발급(관리자 승인)",
                "비콘/기기 식별 기반 대리 출근 방지", 
                "개인정보 최소 수집·목적 외 사용 없음"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-slate-600">
                  <Check className="w-5 h-5 text-indigo-600" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right content - Dashboard preview */}
          <div className="relative">
            <div className="absolute -top-10 -right-10 w-72 h-72 bg-purple-300 rounded-full blur-3xl opacity-20"></div>
            <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-indigo-300 rounded-full blur-3xl opacity-20"></div>
            
            <div className="relative bg-white rounded-2xl shadow-2xl border border-slate-200 p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
              </div>
              
              <div className="space-y-4">
                {/* Mock dashboard header */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                  <div className="h-4 w-32 bg-slate-200 rounded"></div>
                  <div className="flex gap-2">
                    <div className="h-8 w-8 bg-indigo-100 rounded"></div>
                    <div className="h-8 w-8 bg-purple-100 rounded"></div>
                  </div>
                </div>
                
                {/* Mock stats cards */}
                <div className="grid grid-cols-3 gap-3">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="bg-slate-50 rounded-lg p-4">
                      <div className="h-3 w-16 bg-slate-300 rounded mb-2"></div>
                      <div className="h-6 w-20 bg-slate-200 rounded"></div>
                    </div>
                  ))}
                </div>
                
                {/* Mock chart */}
                <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg p-6 h-48 flex items-end justify-between gap-2">
                  {[40, 70, 45, 80, 60, 90, 55].map((height, i) => (
                    <div key={i} className="flex-1 bg-gradient-to-t from-indigo-500 to-purple-500 rounded-t" style={{ height: `${height}%` }}></div>
                  ))}
                </div>
                
                {/* Mock list */}
                <div className="space-y-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                      <div className="w-10 h-10 bg-slate-300 rounded-full"></div>
                      <div className="flex-1">
                        <div className="h-3 w-24 bg-slate-300 rounded mb-2"></div>
                        <div className="h-2 w-32 bg-slate-200 rounded"></div>
                      </div>
                      <div className="h-6 w-16 bg-indigo-100 rounded"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}