import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FileText } from 'lucide-react';
import LoginModal from '../Modal/LoginModal.js';
import UserMenu from './UserMenu.js';


function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    closeModal();
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 w-full bg-white shadow-md z-50">
        <div className="flex justify-between max-w-[1200px] mx-auto">
          <Link to="/" className="">
            <span className="block text-3xl font-['Tenada'] p-2 px-4 pt-4">한클래스</span>
          </Link>

          <div className="flex items-center">
            {isLoggedIn ? (
              <>
                <Link 
                  to="/ClassWorkSpace" 
                  className="text-gray-600 bg-orange-50 border border-orange-300 hover:bg-orange-100 p-1 px-4 rounded-full mr-4 flex items-center gap-2 font-noto"
                >
                <FileText size={18} />
                  클래스 등록
                </Link>
                <UserMenu onLogout={handleLogout} />
              </>
            ) : (
              <button 
                onClick={openModal}
                className="text-black-600 hover:text-yellow-800 font-['Tenada'] items-center flex p-2 px-4 pt-4"
              >
                로그인
              </button>
            )}
          </div>
        </div>
      </header>

      <LoginModal 
        isOpen={isModalOpen} 
        onClose={closeModal}
        onLoginSuccess={handleLoginSuccess}
      />
    </>
  );
}

export default Header;
