export function FooterSection() {
  return (
    <footer className="bg-white text-slate-700 py-16 px-6 lg:px-8 border-t border-slate-200">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">MH</span>
              </div>
              <div>
                <div className="text-xl font-bold text-slate-900">Medi HR</div>
                <div className="text-xs font-medium text-slate-500">by MoggLab</div>
              </div>
            </div>
            <p className="text-slate-600 mb-6 leading-relaxed">
              비콘 기반 출퇴근과 근무표 운영을 위한<br />
              실무형 HR 도구입니다.
            </p>
            <p className="text-sm text-slate-500 leading-relaxed">
              문의: <a className="font-semibold text-indigo-600 hover:text-indigo-700" href="mailto:support@mogglab.com">support@mogglab.com</a>
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-slate-900 font-semibold mb-4">제품</h4>
            <ul className="space-y-3 text-slate-600">
              <li><a href="#features" className="hover:text-slate-900 transition-colors">핵심 기능</a></li>
              <li><a href="#how-it-works" className="hover:text-slate-900 transition-colors">도입/운영</a></li>
              <li><a href="#security" className="hover:text-slate-900 transition-colors">보안/개인정보</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-slate-900 font-semibold mb-4">문서</h4>
            <ul className="space-y-3 text-slate-600">
              <li><a href="/medi-hr/privacy/" className="hover:text-slate-900 transition-colors">개인정보처리방침</a></li>
              <li><a href="/medi-hr/terms/" className="hover:text-slate-900 transition-colors">이용약관</a></li>
              <li><a href="/medi-hr/support/" className="hover:text-slate-900 transition-colors">지원/문의</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-slate-900 font-semibold mb-4">지원</h4>
            <ul className="space-y-3 text-slate-600">
              <li><a href="/medi-hr/support/" className="hover:text-slate-900 transition-colors">지원 센터</a></li>
              <li><a href="mailto:support@mogglab.com" className="hover:text-slate-900 transition-colors">이메일 문의</a></li>
              <li><a href="/medi-hr/support/#faq" className="hover:text-slate-900 transition-colors">FAQ</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500">© 2025 MoggLab. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="/medi-hr/privacy/" className="text-slate-500 hover:text-slate-900 transition-colors">개인정보처리방침</a>
            <a href="/medi-hr/terms/" className="text-slate-500 hover:text-slate-900 transition-colors">이용약관</a>
            <a href="/medi-hr/support/" className="text-slate-500 hover:text-slate-900 transition-colors">지원</a>
          </div>
        </div>
      </div>
    </footer>
  );
}