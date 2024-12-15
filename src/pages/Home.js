import React, { useState, useEffect, useRef } from 'react';
import { 
  MapPin, Grid, Users, 
  Cake, GemIcon, Paintbrush, Gift, Heart, 
  Droplets, Dumbbell, Hammer, Palette,
  ChevronDown
} from 'lucide-react';

const ContainerWithButtons = () => {
  const [showRegions, setShowRegions] = useState(false);
  const [showCategories, setShowCategories] = useState(false);
  const dropdownRef = useRef(null);
  const categoryRef = useRef(null);


  const regions_menu = [
    "서울", "경기도", "부산", "인천",
    "대구", "울산", "광주", "대전",
    "경상남도", "경상북도", "전라남도", "전라북도",
    "충청남도", "충청북도", "강원도", "제주도",
    "세종", "전체"
  ];
  const categories_menu = [
    "핸드메이드", "쿠킹", "플라워·가드닝", "드로잉",
    "음악", "요가·필라테스", "레져·스포츠", "뷰티",
    "반려동물", "체험", "자기계발", "전체",
    "로컬여행"
  ];
  const categories = [
    { icon: <Cake className="w-5 h-5 text-pink-500" />, name: "베이킹" },
    { icon: <GemIcon className="w-5 h-5 text-purple-500" />, name: "반지" },
    { icon: <Paintbrush className="w-5 h-5 text-blue-500" />, name: "드로잉" },
    { icon: <Gift className="w-5 h-5 text-red-500" />, name: "선물" },
    { icon: <Heart className="w-5 h-5 text-rose-500" />, name: "데이트" },
    { icon: <Droplets className="w-5 h-5 text-cyan-500" />, name: "향수" },
    { icon: <Dumbbell className="w-5 h-5 text-gray-600" />, name: "스포츠" },
    { icon: <Hammer className="w-5 h-5 text-amber-700" />, name: "목공" },
    { icon: <Palette className="w-5 h-5 text-indigo-500" />, name: "도자기" },
  ];

  // 컴포넌트가 마운트될 때 실행되는 효과
  useEffect(() => {

     // 사용자가 클릭한 위치가 드롭다운 메뉴 외부인지 확인하는 함수
    const handleClickOutside = (event) => {
      // dropdownRef(지역 메뉴)가 존재하고, 클릭된 위치가 지역 메뉴 영역 외부인 경우
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowRegions(false); // 지역 메뉴를 닫음
      }
      // categoryRef(카테고리 메뉴)가 존재하고, 클릭된 위치가 카테고리 메뉴 영역 외부인 경우
      if (categoryRef.current && !categoryRef.current.contains(event.target)) {
        setShowCategories(false); // 카테고리 메뉴를 닫음
      }
    };

    // 문서 전체에 클릭 이벤트 리스너 추가
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // 컴포넌트가 언마운트될 때 이벤트 리스너 제거 (메모리 누수 방지)
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []); // 컴포넌트가 처음 생성될 때(마운트)만 실행됨

  return (
    <div className="w-full flex justify-center px-4">
      <div className="w-full max-w-[1200px] mt-4">
        
        {/* 메인 버튼 섹션 */}
        <div className="grid grid-cols-2 gap-6 p-4">
          <div className="relative" ref={dropdownRef}>
            <button 
              onClick={() => setShowRegions(!showRegions)}
              className="border flex items-center justify-center h-30 w-full bg-white rounded-2xl 
                        shadow-md hover:shadow-lg transition-shadow p-4"
            >
              <div className="flex items-center gap-4">
                <MapPin className="w-12 h-12 flex-shrink-0 text-orange-300 stroke-2" />
                <div className="flex flex-col justify-center ml-2">
                  <span className="text-2xl font-medium text-center mb-1">지역</span>
                  <span className="text-sm text-gray-500 text-center">지역별 클래스 둘러보기</span>
                </div>
              </div>
            </button>

            {/* 지역 메뉴 */}
            {showRegions && (
              <div className="absolute z-10 w-full mt-2 bg-white border rounded-xl shadow-lg p-4">
                <div className="grid grid-cols-4 gap-2">
                  {regions_menu.map((region, index) => (
                    <button
                      key={index}
                      className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg
                               border border-gray-200 hover:border-orange-300 transition-colors"
                    >
                      {region}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
          
          <div className="relative" ref={categoryRef}>
            <button 
              onClick={() => setShowCategories(!showCategories)}
              className="border flex items-center justify-center h-30 w-full bg-white rounded-2xl 
                        shadow-md hover:shadow-lg transition-shadow p-4"
            >
              <div className="flex items-center gap-4">
                <Grid className="w-12 h-12 flex-shrink-0 text-blue-300 stroke-2" />
                <div className="flex flex-col justify-center ml-2">
                  <span className="text-2xl font-medium text-center mb-1">카테고리</span>
                  <span className="text-sm text-gray-500 text-center">카테고리별 다양한 클래스</span>
                </div>
              </div>
            </button>

            {/* 카테고리 선택 메뉴 */}
            {showCategories && (
              <div className="absolute z-10 w-full mt-2 bg-white border rounded-xl shadow-lg p-4">
                <div className="grid grid-cols-4 gap-2">
                  {categories_menu.map((category, index) => (
                    <button
                      key={index}
                      className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg
                               border border-gray-200 hover:border-orange-300 transition-colors"
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
            {/* 카테고리 버튼 섹션 추가 */}
            <div className="grid grid-cols-9 gap-6 p-4">
              {categories.map((category, index) => (
                <button 
                  key={index}
                  className="flex items-center justify-center h-8 w-full 
                          bg-orange-50 border-2 border-orange-300 rounded-full
                          hover:bg-orange-100 transition-colors duration-200
                          px-3"
                >
                  <div className="flex items-center gap-2">
                    {category.icon}
                    <span className="text-sm font-medium text-gray-700">{category.name}</span>
                  </div>
                </button>
              ))}
            </div>
      </div>
    </div>
  );
};

export default ContainerWithButtons;