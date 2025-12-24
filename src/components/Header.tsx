import { Menu } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">M</span>
            </div>
            <span className="text-xl font-bold text-slate-900">MoggLab</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-slate-600 hover:text-slate-900 transition-colors">
              기능
            </a>
            <a href="#solutions" className="text-slate-600 hover:text-slate-900 transition-colors">
              솔루션
            </a>
            <a href="#pricing" className="text-slate-600 hover:text-slate-900 transition-colors">
              요금
            </a>
            <a href="#contact" className="text-slate-600 hover:text-slate-900 transition-colors">
              문의
            </a>
          </nav>

          <div className="flex items-center gap-4">
            <button className="hidden md:block font-medium text-slate-700 hover:text-slate-900">
              로그인
            </button>
            <button className="px-6 py-2.5 font-semibold bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
              무료 체험
            </button>
            <button className="md:hidden">
              <Menu className="w-6 h-6 text-slate-700" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}