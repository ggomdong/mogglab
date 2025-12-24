export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="text-white mb-4">
              MoggLab
            </div>
            <p className="text-gray-400">
              병·의원과 중소기업을 위한<br />
              스마트 인사 관리 솔루션
            </p>
          </div>
          
          <div>
            <h4 className="text-white mb-4">제품</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">출결·근태 관리</a></li>
              <li><a href="#" className="hover:text-white transition-colors">스케줄 관리</a></li>
              <li><a href="#" className="hover:text-white transition-colors">급여 계산</a></li>
              <li><a href="#" className="hover:text-white transition-colors">요금 안내</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white mb-4">회사</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">회사 소개</a></li>
              <li><a href="#" className="hover:text-white transition-colors">고객 사례</a></li>
              <li><a href="#" className="hover:text-white transition-colors">블로그</a></li>
              <li><a href="#" className="hover:text-white transition-colors">채용</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white mb-4">지원</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">고객 지원</a></li>
              <li><a href="#" className="hover:text-white transition-colors">문서</a></li>
              <li><a href="#" className="hover:text-white transition-colors">API</a></li>
              <li><a href="#" className="hover:text-white transition-colors">문의하기</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400">
            © {currentYear} MoggLab. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">개인정보처리방침</a>
            <a href="#" className="hover:text-white transition-colors">이용약관</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
