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
        <h2 className="mt-6">지금 회원가입하면</h2> 
        <h2 className="relative inline-block mb-12">
          <span className="highlight">
            10,000원
          </span>
          할인 쿠폰을 드려요
        </h2>
        <form onSubmit={handleSubmit} className="snsLoginButton">
          <button
            type="button"
            onClick={handleKakaoLogin}
            className="kakao-login"
          >
            <img 
              src="/images/kakao-icon.png" 
              alt="카카오 로그인" 
              className="w-5 h-5 absolute left-6"
            />
            <span>카카오 로그인</span>
          </button>
          <button
            type="button"
            onClick={handleNaverLogin}
            className="naver-login"
          >
            <img src="/images/naver-icon.png" alt="네이버 로그인" className="w-5 h-5 absolute left-6" />
            <span>네이버 로그인</span>
          </button>
          <button
            type="button"
            onClick={handleGoogleLogin}
            className="google-login"
          >
            <img src="/images/google-icon.png" alt="구글 로그인" className="w-5 h-5 absolute left-6" />
            <span>구글 로그인</span>
          </button>
          <button
            type="button"
            onClick={handleEmailLogin}
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
          <span className="font-bold hover:text-gray-700">
            회원가입
          </span>
        </div>
      </div>
    </Modal>
  );
};

export default LoginModal;
