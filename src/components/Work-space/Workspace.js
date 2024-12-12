import React from 'react';
import { PlusCircle, CheckCircle, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const WorkspaceSidebar = () => {
  return (
    <div className="w-64 min-h-screen bg-white border-r border-gray-200 p-4">
      <h1 className="text-xl font-bold mb-6 px-2">클래스 워크스페이스</h1>
      
      <nav className="space-y-2">
        <Link 
          to="/workspace/create" 
          className="flex items-center gap-3 px-2 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <PlusCircle className="w-5 h-5" />
          <span>클래스 생성</span>
        </Link>

        <Link 
          to="/workspace/registered" 
          className="flex items-center gap-3 px-2 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <CheckCircle className="w-5 h-5" />
          <span>등록 완료 클래스</span>
        </Link>

        <Link 
          to="/workspace/group" 
          className="flex items-center gap-3 px-2 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <Users className="w-5 h-5" />
          <span>단체 클래스 등록</span>
        </Link>
      </nav>
    </div>
  );
};

export default WorkspaceSidebar;