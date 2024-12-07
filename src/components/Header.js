// components/Header.js
import { Link } from 'react-router-dom';
import { useState } from 'react';
import LoginModal from './Modal/LoginModal';
import UserMenu from './Header/UserMenu.js';
import AlertModal from './Modal/AlertModal.js'


function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // 로그인 상태 
  const [showAlert, setShowAlert] = useState(false);


  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);


  // 로그인 성공 처리 함수
  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    closeModal();
    setShowAlert(true); // 알림 모달 표시
  };

  // 알림 모달 닫기 함수
  const handleAlertClose = () => {
    setShowAlert(false);
  };

  // 로그아웃 처리 함수
  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 w-full bg-white shadow-md z-50">
        <div className="flex justify-between max-w-[1200px] mx-auto">
          {/* 사이트 이름 */}
          <Link to="/" className="">
            <span className="block text-3xl font-['Tenada'] p-2 px-4 pt-4">한클래스</span>
          </Link>

          {/* 로그인 버튼 또는 유저 메뉴 */}
          {isLoggedIn ? (
            <UserMenu onLogout={handleLogout} />
          ) : (
            <button 
              onClick={openModal}
              className="text-black-600 hover:text-yellow-800 font-['Tenada'] items-center flex p-2 px-4 pt-4"
            >
              로그인
            </button>
          )}
        </div>
      </header>


      {/* 로그인 모달 컴포넌트 */}
      <LoginModal 
        isOpen={isModalOpen} 
        onClose={closeModal}
        onLoginSuccess={handleLoginSuccess}
      />
      {/* 알림 모달 */}
      <AlertModal
        isOpen={showAlert}
        onClose={handleAlertClose}
        message="🥰 로그인 되었습니다!"
      />
  </>
  );
}

export default Header;
