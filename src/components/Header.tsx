import { Menu } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">MH</span>
            </div>
            <div className="leading-tight">
              <div className="text-xl font-bold text-slate-900">Medi HR</div>
              <div className="text-xs font-medium text-slate-500">by MoggLab</div>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-slate-600 hover:text-slate-900 transition-colors">핵심 기능</a>
            <a href="#how-it-works" className="text-slate-600 hover:text-slate-900 transition-colors">도입/운영</a>
            <a href="#security" className="text-slate-600 hover:text-slate-900 transition-colors">보안</a>
            <a href="/medi-hr/support/" className="text-slate-600 hover:text-slate-900 transition-colors">지원</a>
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="mailto:support@mogglab.com?subject=Medi%20HR%20%EB%8F%84%EC%9E%85%20%EB%AC%B8%EC%9D%98"
              className="hidden md:inline-flex px-6 py-2.5 font-semibold bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
            >
              데모/도입 문의
            </a>
            <button className="md:hidden">
              <Menu className="w-6 h-6 text-slate-700" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}