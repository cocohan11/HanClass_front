import React from 'react';

const Modal = ({ isOpen, onClose, children, className }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* 배경 오버레이 */}
      <div 
        className="fixed inset-0 bg-black opacity-50"
        onClick={onClose}
      ></div>
      
      {/* 모달 컨텐츠 */}
      <div className={`bg-white rounded-lg p-2 relative z-50 w-full max-w-sm ${className}`}>
          {/* 닫기 버튼 */}
          <button 
            onClick={onClose}
            className="block pr-1 ml-auto text-gray-500 hover:text-gray-900 font-bold text-xl"
          >
            ✕
          </button>
        <div className='p-6'>
          {/* 모달 내용 */}
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
