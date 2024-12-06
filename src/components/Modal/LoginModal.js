import React from 'react';
import Modal from './Modal';
import './LoginModal.css';


const LoginModal = ({ isOpen, onClose }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // 로그인 로직 구현
  };
  const handleKakaoLogin = () => {
    // 카카오 로그인 로직
  };
  const handleNaverLogin = () => {
    // 네이버 로그인 로직
  };
  const handleGoogleLogin = () => {
    // 구글 로그인 로직
  };
  const handleEmailLogin = () => {
    // 이메일 로그인 로직
  };



  return (
    <Modal isOpen={isOpen} onClose={onClose} className="login-modal">
      <div>
        <h2 className="text-xl font-bold mb-2 mt-8">지금 회원가입하면</h2> 
        <h2 className="text-xl font-bold mb-12 relative inline-block">
          <span className="text-orange-400 relative inline-block mx-1">
            10,000원
            <span className="absolute left-0 bottom-0 w-full h-2 bg-orange-200/70 -z-10" ></span>
          </span>
          할인 쿠폰을 드려요
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* 로그인 버튼 1.카카오 */}
          <button
            type="button"
            onClick={handleKakaoLogin}
            className="w-full bg-[#FEE500] text-[#000000] py-3 px-6 rounded-lg font-medium relative flex items-center justify-center hover:bg-[#FDD835] transition duration-200 ease-in-out"
          >
            {/* 이미지는 absolute로 왼쪽에 고정 */}
            <img 
              src="/images/kakao-icon.png" 
              alt="카카오 로그인" 
              className="w-5 h-5 absolute left-6"
            />
            {/* 텍스트는 중앙 정렬 */}
            <span>카카오 로그인</span>
          </button>
          {/* 로그인 버튼 2.네이버 */}
          <button
            type="button"
            onClick={handleNaverLogin}
            className="w-full bg-[#03C75A] text-white py-3 px-6 rounded-lg font-medium relative flex items-center justify-center space-x-2 hover:bg-[#02b350] transition-colors"
          >
            <img src="/images/naver-icon.png" alt="네이버 로그인" className="w-5 h-5 absolute left-6" />
            <span>네이버 로그인</span>
          </button>
          {/* 로그인 버튼 3.구글 */}
          <button
            type="button"
            onClick={handleGoogleLogin}
            className="w-full bg-white text-gray-700 border border-gray-300 py-3 px-4 rounded-lg relative font-medium flex items-center justify-center space-x-2 hover:bg-gray-100 transition-colors"
          >
            <img src="/images/google-icon.png" alt="구글 로그인" className="w-5 h-5 absolute left-6" />
            <span>구글 로그인</span>
          </button>
          {/* 로그인 버튼 4.이메일 */}
          <button
            type="button"
            onClick={handleEmailLogin}
            className="w-full bg-[#FEBD68] text-gray-800 border-2 border-[#FEBD68] py-3 px-4 relative rounded-lg font-medium flex items-center justify-center space-x-2 hover:bg-[#FEBD68]/80 hover:border-[#FEBD68]/80 transition duration-200 ease-in-out"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 absolute left-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            <span>이메일 로그인</span>
          </button>
        </form>
        <div className="text-gray-600 mt-6 mb-20 underline text-xs cursor-pointer transition-colors">
          아직 회원이 아니신가요?{" "}
          <span className="font-bold hover:text-gray-700">
            회원가입
          </span>
        </div>
      </div>
    </Modal>
  );
};

export default LoginModal;
