import React, { useState } from 'react';
import { PlusCircle, CheckCircle, Users } from 'lucide-react';


const Workspace = () => {
  const [activeContent, setActiveContent] = useState('');
  {/* ----- TODO : 수정하기 - 임시로 제목만 오른쪽 화면에 넣고있음 ----- */}


  //---------------------------------------------------------------
  return (
    <div className="flex min-h-screen">
      {/* ----- 왼쪽 사이드바 ----- */}
      <div className="w-64 bg-white border-r border-gray-200 p-4">
        <h1 className="text-xl font-bold mb-6 px-2 mt-3">클래스 워크스페이스</h1>
        
        <nav className="space-y-2">
          <button 
            onClick={() => setActiveContent('클래스 생성')}
            className="flex items-center gap-3 px-2 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors w-full"
          >
            <PlusCircle className="w-5 h-5" />
            <span>클래스 생성</span>
          </button>

          <button 
            onClick={() => setActiveContent('등록 완료 클래스')}
            className="flex items-center gap-3 px-2 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors w-full"
          >
            <CheckCircle className="w-5 h-5" />
            <span>등록 완료 클래스</span>
          </button>

          <button 
            onClick={() => setActiveContent('단체 클래스 등록')}
            className="flex items-center gap-3 px-2 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors w-full"
          >
            <Users className="w-5 h-5" />
            <span>단체 클래스 등록</span>
          </button>
        </nav>
      </div>

      {/* ----- 오른쪽 컨텐츠 영역 ----- */}
      <div className="flex-1 p-6">
        <h2 className="text-2xl font-bold">{activeContent}</h2>
      </div>
    </div>
  );
};

export default Workspace;
