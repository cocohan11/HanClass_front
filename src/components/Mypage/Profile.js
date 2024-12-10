// pages/Profile.js
import React from 'react';
import { SmileIcon, Edit, Heart, GraduationCap, LogOut } from 'lucide-react';
import { useState } from 'react';
import ProfileEditModal from '../Modal/ProfileEditModal';
import WithdrawalModal from '../Modal/WithdrawalModal';


const Profile = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isWithdrawalModalOpen, setIsWithdrawalModalOpen] = useState(false);


    return (
    <div className="pt-10 max-w-[1200px] mx-auto px-4">
      {/* 프로필 */}
      <div className="flex items-center gap-2 mb-6">
        <SmileIcon className="w-8 h-8 text-gray-600" />
        <h1 className="text-2xl font-bold text-gray-600">프로필</h1>
      </div>      

      <div className="flex gap-8">
        {/* ----- 프로필 왼쪽 ----- */}
        <div className="w-1/4 bg-white rounded-lg shadow-md p-6 border h-[440px] flex flex-col">
          <div className="mb-8 flex"> 
            <div className="w-20 h-20 mb-4 rounded-full bg-gray-100 shadow-lg transition-shadow duration-300">
              <img 
                  src="/images/profileImg/bear.png"
                  alt='프로필 이미지'
                  className="w-full h-full object-cover rounded-full"
              />
            </div>
            <h2 className="text-xl font-bold text-gray-600 m-4">안녕하세요<br/>한님 🤗</h2>
          </div>

          {/* 이메일, 전화번호 */}
          <div className="space-y-6 flex-1">
            <div className="space-y-1">
              <div className="text-gray-600 font-medium">이메일</div>
              <div className="border-b-2 border-gray-200 py-2 px-1 w-full">
                <span className="text-gray-800">example@email.com</span>
              </div>
            </div>
            <div className="space-y-1">
              <div className="text-gray-600 font-medium">전화번호</div>
              <div className="border-b-2 border-gray-200 py-2 px-1 w-full">
                <span className="text-gray-800">미등록 상태</span>
              </div>
            </div>
          </div>

          {/* 프로필 수정 버튼 */}
          <div className="mt-6">
            <button 
              className="flex items-center justify-center gap-1 w-full py-2 bg-white text-gray-600 rounded-lg border border-gray-200 hover:bg-gray-100 transition-colors"
              onClick={() => setIsModalOpen(true)}
              >
              <Edit className="w-4 h-4" />
              <span>프로필 수정</span>
            </button>
            <ProfileEditModal 
              isOpen={isModalOpen} 
              onClose={() => setIsModalOpen(false)} 
            />
          </div>
        </div>




        {/* ----- 프로필 오른쪽 ----- */}
        <div className="flex-1 h-[440px]">
          <div className="grid grid-cols-2 gap-4 h-full">
            {/* 위시리스트 */}
            <div className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow cursor-pointer border flex items-center justify-center">
              <div className="flex flex-col items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-red-50 flex items-center justify-center">
                  <Heart className="w-7 h-7 text-red-500" />
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-gray-700 mb-2">위시리스트</h3>
                  <p className="text-sm text-gray-500">관심있는 클래스 모아보기</p>
                </div>
              </div>
            </div>

            {/* 내가 신청한 클래스 */}
            <div className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow cursor-pointer border flex items-center justify-center">
              <div className="flex flex-col items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center">
                  <GraduationCap className="w-7 h-7 text-blue-500" />
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-gray-700 mb-2">신청한 클래스</h3>
                  <p className="text-sm text-gray-500">내가 신청한 클래스 보기</p>
                </div>
              </div>
            </div>

            {/* 한클래스 탈퇴 */}
            <div 
              className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow cursor-pointer col-span-2 border flex items-center justify-center"
              onClick={() => setIsWithdrawalModalOpen(true)}
            >
              <div className="flex flex-col items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gray-50 flex items-center justify-center">
                  <LogOut className="w-7 h-7 text-gray-500" />
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-gray-700 mb-2">한클래스 탈퇴</h3>
                  <p className="text-sm text-gray-500">서비스 탈퇴하기</p>
                </div>
              </div>
            </div>
            <WithdrawalModal 
              isOpen={isWithdrawalModalOpen} 
              onClose={() => setIsWithdrawalModalOpen(false)} 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
