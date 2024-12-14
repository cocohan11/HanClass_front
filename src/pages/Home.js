import React from 'react';
import { 
  MapPin, Grid, Users, 
  Cake, GemIcon, Paintbrush, Gift, Heart, 
  Droplets, Dumbbell, Hammer, Palette 
} from 'lucide-react';

const ContainerWithButtons = () => {
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

  return (
    <div className="w-full flex justify-center px-4">
      <div className="w-full max-w-[1200px] mt-4">
        
        {/* 메인 버튼 섹션 */}
        <div className="grid grid-cols-3 gap-6 p-4">
          <button className="border flex items-center justify-center h-30 w-full bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow p-4">
            <div className="flex items-center gap-4">
              <MapPin className="w-12 h-12 flex-shrink-0 text-orange-300 stroke-2" />
              <div className="flex flex-col justify-center ml-2">
                <span className="text-2xl font-medium text-center mb-1">지역</span>
                <span className="text-sm text-gray-500 text-center">지역별 클래스 둘러보기</span>
              </div>
            </div>
          </button>
          
          <button className="border flex items-center justify-center h-30 w-full bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow p-4">
            <div className="flex items-center gap-4">
              <Grid className="w-12 h-12 flex-shrink-0 text-blue-300 stroke-2" />
              <div className="flex flex-col justify-center ml-2">
                <span className="text-2xl font-medium text-center mb-1">카테고리</span>
                <span className="text-sm text-gray-500 text-center">카테고리별 다양한 클래스</span>
              </div>
            </div>
          </button>
          
          <button className="border flex items-center justify-center h-30 w-full bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow p-4">
            <div className="flex items-center gap-4">
              <Users className="w-12 h-12 flex-shrink-0 text-red-300 stroke-2" />
              <div className="flex flex-col justify-center ml-2">
                <span className="text-2xl font-medium text-center mb-1">단체클래스</span>
                <span className="text-sm text-gray-500 text-center">강사출강/공방체험</span>
              </div>
            </div>
          </button>
        </div>

        {/* 카테고리 버튼 섹션 */}
        <div className="grid grid-cols-9 gap-2 p-4">
          {categories.map((category, index) => (
            <button 
              key={index}
              className="flex items-center justify-center h-12 w-full 
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