import React, { useState, useEffect } from 'react';
import Modal from './Modal';
import './LoginModal.css';
import { User, Lock } from 'lucide-react';
import AlertModal from './AlertModal.js'


const LoginModal = ({ isOpen, onClose, onLoginSuccess }) => {
  const [modalType, setModalType] = useState('login');
  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true); // 이메일 유효성 여부
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState(''); // 비밀번호 확인 값
  const [isValidPassword, setIsValidPassword] = useState(false); // 비밀번호 확인 값의 유효성 여부
  const [passwordsMatch, setPasswordsMatch] = useState(false);  // 비밀번호 동일한지 여부
  const [showAlert, setShowAlert] = useState(false); // 로그인 완료 알림 모달 표시 여부


  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/; // 비밀번호 정규식 (영문, 숫자, 특수문자 조합 8자 이상)
  const resetForm = () => { // 모든 입력값 초기화하는 함수
    setEmail('');
    setIsValidEmail(true);
    setPassword('');
    setConfirmPassword('');
    setIsValidPassword(false);
    setPasswordsMatch(false);
  };


  // modalType이 변경될 때 초기화
  useEffect(() => {
    resetForm();
  }, [modalType]);  

  // 모달이 닫힐 때 초기화
  useEffect(() => {
    if (!isOpen) {
      resetForm();
      setModalType('login'); // 모달 타입도 기본값으로 초기화
    }
  }, [isOpen]);


  // 알림 모달 닫기 핸들러
  const handleAlertClose = () => {
    setShowAlert(false);
  };
  
  // 버튼 활성화 조건을 확인하는 함수
  const isButtonEnabled = () => {
    if (modalType === 'signup') {
      // 회원가입일 때는 모든 조건 확인
      return isValidEmail && isValidPassword && passwordsMatch && email && password && confirmPassword;
    } else if (modalType === 'emailLogin') {
      // 로그인일 때는 이메일 형식과 비밀번호 정규식만 확인
      return isValidEmail && isValidPassword && email && password;
    } else if (modalType === 'resetPassword') {
      return isValidEmail && email;
    } 
    return false;
  };

  // 비밀번호 변경 핸들러
  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    setIsValidPassword(passwordRegex.test(newPassword)); // test : 정규표현식 메서드로, 문자열이 정규식 패턴과 일치하는지 검사하여 true/false를 반환 
    setPasswordsMatch(newPassword === confirmPassword);
  };

  // 비밀번호 확인 변경 핸들러
  const handleConfirmPasswordChange = (e) => {
    const newConfirmPassword = e.target.value;
    setConfirmPassword(newConfirmPassword);
    setPasswordsMatch(password === newConfirmPassword);
  };

  // 이메일 유효성 검사 함수
  const validateEmail = (email) => {
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    return emailRegex.test(email);
  };
  
  // 이메일 입력 핸들러
  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    setIsValidEmail(newEmail === '' || validateEmail(newEmail)); // 빈 값일 때는 에러 메시지 표시하지 않음
  };

  const getModalClassName = () => { {/* 로그인화면일 때만 배경이미지 넣기 */}
    return `login-modal ${modalType === 'login' ? 'with-bg' : 'no-bg'}`;
  };

  const handleClose = () => {
    setModalType('login'); // 모달이 닫힐 때 modalType을 'login'으로 초기화
    onClose(); // 기존의 onClose 함수 실행
  };
  
  // 로그인/회원가입 폼 제출 이후 처리 함수
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // 이메일 로그인의 경우
    if (modalType === 'emailLogin') {
      if (isValidEmail && isValidPassword) {
        onLoginSuccess(); // Header의 handleLoginSuccess 호출
        setShowAlert(true); // 알림 모달 표시
        handleClose(); // 로그인 모달 닫기
      }
    }
    // 회원가입의 경우
    else if (modalType === 'signup') {
      if (isValidEmail && isValidPassword && passwordsMatch) {
        // 회원가입 처리 로직
        onLoginSuccess();
        setShowAlert(true); // 알림 모달 표시
        handleClose();
      }
    }
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
    console.log('email', email);
    switch (modalType) {
      case 'login':
        return (
          <div>
            <h2 className="mt-12">지금 회원가입하면</h2> 
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
            <div className="text-link cursor-pointer hover:text-gray-900"
              onClick={() => setModalType('signup')}
            >
              아직 회원이 아니신가요?{" "}
              <span className="font-bold">
                회원가입
              </span>
            </div>
          </div>
        );

      case 'emailLogin':
        return (
          <div className="w-full max-w-md">
            <h2 className="text-2xl font-bold mb-14">이메일 로그인</h2>
            <form onSubmit={handleSubmit}>
            <div className="relative">
              <User className="absolute left-3 top-1/3 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="email"
                placeholder="이메일"
                value={email}
                onChange={handleEmailChange}
                className={`w-full p-3 pl-10 border rounded-lg focus:outline-none focus:border-black ${
                  !isValidEmail ? 'wrong-border' : ''
                }`}
              />
              <small className="wrong-text text-xs mt-1 block min-h-[0.9rem]">
                {!isValidEmail ? '알맞은 이메일 형태가 아닙니다.' : ' '}
              </small>
              </div>
              <div className="relative mb-4">
                <Lock className="absolute left-3 top-1/3 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="password"
                  placeholder="비밀번호"
                  value={password}
                  onChange={handlePasswordChange}
                  className={`w-full p-3 pl-10 border rounded-lg focus:outline-none focus:border-black ${
                    !isValidPassword && password !== '' ? 'wrong-border' : ''
                  }`}
                />
                <small className={`text-xs mt-1 block min-h-[0.9rem] ${
                  !isValidPassword && password !== '' ? 'wrong-text' : 'text-gray-500'
                }`}>
                  영문, 숫자, 특수문자 조합 8자 이상 입력해주세요
                </small>
              </div>
              <button
                type="submit"
                disabled={!isButtonEnabled}
                className={`w-full p-3 rounded-lg transition-colors ${
                  isButtonEnabled() 
                    ? 'bg-gray-700 hover:bg-gray-800 text-white cursor-pointer' 
                    : 'bg-gray-300 text-gray-500'
                }`}
              >
                로그인
              </button>
              
              <div className="flex justify-end text-sm text-gray-600">
                <button
                  type="button"
                  onClick={() => setModalType('resetPassword')}
                  className="hover:underline"
                >
                  비밀번호 재설정
                </button>
              </div>
              <div className="text-link cursor-pointer hover:text-gray-900"
                onClick={() => setModalType('signup')}
              >
                아직 회원이 아니신가요?{" "}
                <span className="font-bold">
                  회원가입
                </span>
              </div>
            </form>
          </div>
        );

      case 'signup':
        return (
          <div className="w-full max-w-md">
            <h2 className="text-4xl font-bold mb-10 text-gray-700">회원가입</h2>
            <form onSubmit={handleSubmit} >
            <div className="relative">
              <User className="absolute left-3 top-1/3 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="email"
                placeholder="이메일"
                value={email}
                onChange={handleEmailChange}
                className={`w-full p-3 pl-10 border rounded-lg focus:outline-none focus:border-black ${
                  !isValidEmail ? 'wrong-border' : ''
                }`}
              />
              <small className="wrong-text text-xs mt-1 block min-h-[0.9rem]">
                {!isValidEmail ? '알맞은 이메일 형태가 아닙니다.' : ' '}
              </small>
              </div>
              <div className="relative">
                <Lock className="absolute left-3 top-1/3 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="password"
                  placeholder="비밀번호"
                  value={password}
                  onChange={handlePasswordChange}
                  className={`w-full p-3 pl-10 border rounded-lg focus:outline-none focus:border-black ${
                    !isValidPassword && password !== '' ? 'wrong-border' : ''
                  }`}
                />
                <small className={`text-xs mt-1 block min-h-[0.9rem] ${
                  !isValidPassword && password !== '' ? 'wrong-text' : 'text-gray-500'
                }`}>
                  영문, 숫자, 특수문자 조합 8자 이상 입력해주세요
                </small>
              </div>
              <div className="relative mb-4">
                <Lock className="absolute left-3 top-1/3 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="password"
                  placeholder="비밀번호 확인"
                  value={confirmPassword}
                  onChange={handleConfirmPasswordChange}
                  className={`w-full p-3 pl-10 border rounded-lg focus:outline-none focus:border-black ${
                    !passwordsMatch && confirmPassword !== '' ? 'wrong-border' : ''
                  }`}
                />
                <small className={`text-xs mt-1 block min-h-[0.9rem] ${
                  !passwordsMatch && confirmPassword !== '' ? 'wrong-text' : 'text-gray-500'
                }`}>
                  {!passwordsMatch && confirmPassword !== '' 
                    ? '비밀번호가 일치하지 않습니다' 
                    : '비밀번호를 한번 더 입력해주세요'}
                </small>
              </div>
              <button
                type="submit"
                disabled={!isButtonEnabled}
                className={`w-full p-3 rounded-lg transition-colors ${
                  isButtonEnabled() 
                    ? 'bg-gray-700 hover:bg-gray-800 text-white cursor-pointer' 
                    : 'bg-gray-300 text-gray-500'
                }`}
              >
                회원가입
              </button>
              <div className="text-center mb-8">
                <button
                  type="button"
                  onClick={() => setModalType('login')}
                  className="text-sm text-gray-600 hover:text-gray-800 underline font-size-xs"
                >
                  이미 계정이 있으신가요? <span className='font-bold'>로그인하기</span>
                </button>
              </div>
            </form>
          </div>
        );

      case 'resetPassword':
        return (
          <div className="w-full max-w-md reset-password p-5">
            <h2 className="text-2xl font-bold">비밀번호 재설정</h2>
            <small className=" mb-8">
                걱정 마세요! 저희도 가끔 잃어버린답니다 :)
            </small>
            <form onSubmit={handleSubmit} className="space-y-0">
              <div className="relative">
                <User className="absolute left-3 top-1/3 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="email"
                  placeholder="이메일"
                  value={email}
                  onChange={handleEmailChange}
                  className={`w-full p-3 pl-10 border rounded-lg focus:outline-none focus:border-black ${
                    !isValidEmail ? 'wrong-border' : ''
                  }`}
                />
                <small className="wrong-text text-xs mt-1 block min-h-[0.9rem] mb-2">
                {!isValidEmail ? '알맞은 이메일 형태가 아닙니다.' : ' '}
              </small>
              </div>
              <button
                type="submit"
                disabled={!isButtonEnabled}
                className={`w-full p-3 rounded-lg transition-colors ${
                  isButtonEnabled() 
                    ? 'bg-gray-700 hover:bg-gray-800 text-white cursor-pointer' 
                    : 'bg-gray-300 text-gray-500'
                }`}
              >
                이메일 발송
              </button>
              <small >
                가입하신 이메일로 비밀번호 재설정 링크를 전송합니다. 
              </small>
              <div className="text-center">
                <button
                  type="button"
                  onClick={() => setModalType('login')}
                  className="text-sm text-gray-600 hover:text-gray-800 underline font-size-x mt-6"
                >
                  비밀번호가 생각나셨나요? <span className='font-bold'>로그인</span>
                </button>
              </div>
            </form>
          </div>
        );
    }
  };

  return (
    <>
    <Modal isOpen={isOpen} onClose={handleClose} className={getModalClassName()}>
      {renderContent()}
    </Modal>

      {/* 로그인완료 알림 모달 */}
      <AlertModal
        isOpen={showAlert}
        onClose={handleAlertClose}
        message="🥰 로그인 되었습니다!"
      />
    </>
  );
};

export default LoginModal;
