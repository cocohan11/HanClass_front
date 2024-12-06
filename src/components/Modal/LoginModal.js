import React, { useState } from 'react';
import Modal from './Modal';
import './LoginModal.css';

const LoginModal = ({ isOpen, onClose }) => {
  const [modalType, setModalType] = useState('login');

  const getModalClassName = () => { {/* 로그인화면일 때만 배경이미지 넣기 */}
    return `login-modal ${modalType === 'login' ? 'with-bg' : 'no-bg'}`;
};

  const handleClose = () => {
    setModalType('login'); // 모달이 닫힐 때 modalType을 'login'으로 초기화
    onClose(); // 기존의 onClose 함수 실행
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
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

  const renderContent = () => {
    console.log('modalType', modalType);
    switch (modalType) {
      case 'login':
        return (
          <div>
            <h2 className="mt-6">지금 회원가입하면</h2> 
            <h2 className="relative inline-block mb-12">
              <span className="highlight">10,000원</span> 할인 쿠폰을 드려요
            </h2>
            <form onSubmit={handleSubmit} className="snsLoginButton">
              <button type="button" onClick={handleKakaoLogin} className="kakao-login">
                <img 
                  src="/images/kakao-icon.png" 
                  alt="카카오 로그인" 
                  className="w-5 h-5 absolute left-6"
                />
                <span>카카오 로그인</span>
              </button>
              <button type="button" onClick={handleNaverLogin} className="naver-login">
                <img 
                  src="/images/naver-icon.png" 
                  alt="네이버 로그인" 
                  className="w-5 h-5 absolute left-6" 
                />
                <span>네이버 로그인</span>
              </button>
              <button type="button" onClick={handleGoogleLogin} className="google-login">
                <img 
                  src="/images/google-icon.png" 
                  alt="구글 로그인" 
                  className="w-5 h-5 absolute left-6" 
                />
                <span>구글 로그인</span>
              </button>
              <button
                type="button"
                onClick={() => setModalType('emailLogin')}
                className="email-login"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 absolute left-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <span>이메일 로그인</span>
              </button>
            </form>
            <div className="text-link">
              아직 회원이 아니신가요?{" "}
              <span 
                className="font-bold hover:text-gray-700"
                onClick={() => setModalType('signup')}
              >
                회원가입
              </span>
            </div>
          </div>
        );

      case 'emailLogin':
        return (
          <div className="w-full max-w-md">
            <h2 className="text-2xl font-bold mb-6">이메일 로그인</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="email"
                  placeholder="이메일"
                  className="w-full p-3 border rounded-lg"
                />
              </div>
              <div>
                <input
                  type="password"
                  placeholder="비밀번호"
                  className="w-full p-3 border rounded-lg"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700"
              >
                로그인
              </button>
              
              <div className="flex justify-between text-sm text-gray-600">
                <button
                  type="button"
                  onClick={() => setModalType('login')}
                  className="hover:text-blue-600"
                >
                  다른 방법으로 로그인
                </button>
                <button
                  type="button"
                  onClick={() => setModalType('resetPassword')}
                  className="hover:text-blue-600"
                >
                  비밀번호 재설정
                </button>
              </div>
            </form>
          </div>
        );

      case 'signup':
        return (
          <div className="w-full max-w-md">
            <h2 className="text-2xl font-bold mb-6">회원가입</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="email"
                  placeholder="이메일"
                  className="w-full p-3 border rounded-lg"
                />
              </div>
              <div>
                <input
                  type="password"
                  placeholder="비밀번호"
                  className="w-full p-3 border rounded-lg"
                />
              </div>
              <div>
                <input
                  type="password"
                  placeholder="비밀번호 확인"
                  className="w-full p-3 border rounded-lg"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700"
              >
                회원가입
              </button>
              <div className="text-center">
                <button
                  type="button"
                  onClick={() => setModalType('login')}
                  className="text-sm text-gray-600 hover:text-blue-600"
                >
                  이미 계정이 있으신가요? 로그인하기
                </button>
              </div>
            </form>
          </div>
        );

      case 'resetPassword':
        return (
          <div className="w-full max-w-md">
            <h2 className="text-2xl font-bold mb-6">비밀번호 재설정</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="email"
                  placeholder="이메일"
                  className="w-full p-3 border rounded-lg"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700"
              >
                재설정 링크 전송
              </button>
              <div className="text-center">
                <button
                  type="button"
                  onClick={() => setModalType('login')}
                  className="text-sm text-gray-600 hover:text-blue-600"
                >
                  로그인으로 돌아가기
                </button>
              </div>
            </form>
          </div>
        );
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose} className={getModalClassName()}>
      {renderContent()}
    </Modal>
  );
};

export default LoginModal;
