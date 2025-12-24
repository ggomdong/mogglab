import { Menu } from "lucide-react";

function MediHrMark() {
  return (
    <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center shadow-sm">
      {/* Simple medical shield mark (white) */}
      <svg
        viewBox="0 0 24 24"
        className="w-6 h-6 text-white"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
        strokeLinecap="round"
        aria-hidden="true"
      >
        {/* shield */}
        <path d="M12 2l7 4v6c0 5-3 9-7 10-4-1-7-5-7-10V6l7-4z" />
        {/* medical cross */}
        <path d="M12 7v4" />
        <path d="M10 9h4" />
        {/* pulse line */}
        <path d="M7.5 14h2l1-2 2 4 2-3 1 1h2.5" />
      </svg>
    </div>
  );
}

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-2">
            <MediHrMark />
            <div className="leading-tight">
              <div className="text-xl font-bold text-slate-900">Medi HR</div>
              <div className="text-xs font-medium text-slate-500">by MoggLab</div>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-slate-600 hover:text-slate-900 transition-colors">
              핵심 기능
            </a>
            <a href="#how-it-works" className="text-slate-600 hover:text-slate-900 transition-colors">
              도입/운영
            </a>
            <a href="#security" className="text-slate-600 hover:text-slate-900 transition-colors">
              보안
            </a>
            <a href="/medi-hr/support/" className="text-slate-600 hover:text-slate-900 transition-colors">
              지원
            </a>
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="mailto:support@mogglab.com?subject=Medi%20HR%20%EB%8F%84%EC%9E%85%20%EB%AC%B8%EC%9D%98"
              className="hidden md:inline-flex px-6 py-2.5 font-semibold bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              데모/도입 문의
            </a>
            <button className="md:hidden" aria-label="Open menu">
              <Menu className="w-6 h-6 text-slate-700" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
