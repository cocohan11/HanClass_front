// components/UserMenu.js
import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  UserCircle, 
  User,
  Calendar,
  Heart,
  LogOut,
} from 'lucide-react';

const TriangleDownIcon = () => (
<svg 
    width="10" 
    height="5" // 높이를 6에서 5로 줄임
    viewBox="0 0 10 5" // viewBox도 조정
    fill="currentColor"
    className={`transition-transform duration-200`}
>
    <path d="M5 5L0 0L10 0L5 5Z" /> 
</svg>
);

const UserMenu = ({ onLogout }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLogoutClick = () => {
    setIsDropdownOpen(false);
    onLogout();
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button 
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className="text-gray-500 hover:text-yellow-800 items-center flex p-2 px-4 pt-4 gap-1 transition-colors"
        title="마이페이지"
      >
        <UserCircle 
          size={32} 
          className="transition-colors"
        />
        <div className={`mb-1 ml-1 transform transition-transform duration-200 mt-2 ${isDropdownOpen ? 'rotate-180' : ''}`}>
          <TriangleDownIcon />
        </div>
      </button>

      {isDropdownOpen && (
        <div className="absolute right-0 mt-2 w-52 bg-white rounded-lg shadow-[0_4px_20px_0px_rgba(0,0,0,0.15)] overflow-hidden z-50 transform transition-all duration-200 ease-in-out">
          <div className="py-1">
            <Link
              to="/profile"
              className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-yellow-800 transition-colors"
              onClick={() => setIsDropdownOpen(false)}
            >
              <div className="flex items-center gap-3">
                <User size={18} className="text-gray-500" />
                <span>프로필</span>
              </div>
            </Link>
            <Link
              to="/reservations"
              className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-yellow-800 transition-colors"
              onClick={() => setIsDropdownOpen(false)}
            >
              <div className="flex items-center gap-3">
                <Calendar size={18} className="text-gray-500" />
                <span>클래스 결제/예약 내역</span>
              </div>
            </Link>
            <Link
              to="/wishlist"
              className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-yellow-800 transition-colors"
              onClick={() => setIsDropdownOpen(false)}
            >
              <div className="flex items-center gap-3">
                <Heart size={18} className="text-gray-500" />
                <span>위시리스트</span>
              </div>
            </Link>
          </div>
          
          <div className="border-t border-gray-200">
            <button
              onClick={handleLogoutClick}
              className="block w-full text-left px-4 py-3 text-sm text-red-600 hover:bg-gray-50 hover:text-red-700 transition-colors"
            >
              <div className="flex items-center gap-3">
                <LogOut size={18} className="text-red-500" />
                <span>로그아웃</span>
              </div>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
