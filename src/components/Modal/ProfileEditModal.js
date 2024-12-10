import React, { useState, useEffect, useRef } from 'react';
import { Camera } from 'lucide-react';

const ProfileEditModal = ({ isOpen, onClose }) => {
  const fileInputRef = useRef(null);
  
  // 초기값 상태 저장
  const [initialValues, setInitialValues] = useState({
    profileImage: '/images/profileImg/bear.png',
    nickname: '한',
    phone: ''
  });

  // 현재값 상태
  const [profileImage, setProfileImage] = useState(initialValues.profileImage);
  const [nickname, setNickname] = useState(initialValues.nickname);
  const [phone, setPhone] = useState(initialValues.phone);
  const [isImageModified, setIsImageModified] = useState(false);
  
  // 수정 버튼 활성화 상태
  const [isModified, setIsModified] = useState(false);

  // 모달이 닫힐 때 상태 초기화
  const handleClose = () => {
    setProfileImage(initialValues.profileImage);
    setNickname(initialValues.nickname);
    setPhone(initialValues.phone);
    setIsImageModified(false);
    setIsModified(false);
    onClose();
  };

  // 값이 변경될 때마다 초기값과 비교하여 수정 여부 확인
  useEffect(() => {
    const hasChanges = 
      isImageModified ||
      nickname !== initialValues.nickname ||
      phone !== initialValues.phone;
    
    setIsModified(hasChanges);
  }, [isImageModified, nickname, phone, initialValues]);

  // 이미지 업로드 처리
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      // 파일 크기 체크 (5MB)
      if (file.size > 5 * 1024 * 1024) {
        alert('파일 크기는 5MB 이하여야 합니다.');
        return;
      }

      // 이미지 파일 타입 체크
      if (!file.type.startsWith('image/')) {
        alert('이미지 파일만 업로드 가능합니다.');
        return;
      }

      const reader = new FileReader();
      reader.onload = (e) => {
        setProfileImage(e.target.result);
        setIsImageModified(true);
      };
      reader.readAsDataURL(file);
    }
  };

  // 이미지 업로드 버튼 클릭 핸들러
  const handleImageButtonClick = () => {
    fileInputRef.current?.click();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* 배경 오버레이 */}
      <div 
        className="fixed inset-0 bg-black opacity-50"
        onClick={handleClose}
      ></div>
      
      <div className="bg-white rounded-lg p-2 z-50 w-full max-w-sm">
        {/* 유저 정보 수정 */}
        <div className="flex justify-between items-center mb-4 px-6 pt-2">
          <h2 className="text-xl font-bold text-gray-800">유저 정보 수정</h2>
          <button 
            onClick={handleClose}
            className="text-gray-500 hover:text-gray-900 font-bold text-xl"
          >
            ✕
          </button>
        </div>

        {/* 모달 내용 */}
        <div className="p-6 pt-2 space-y-6">
          {/* 프로필 이미지 */}
          <div className="flex flex-col items-center space-y-3">
            <div className="relative">
              <img 
                src={profileImage}
                alt="프로필 이미지"
                className="w-24 h-24 rounded-full object-cover border-2 border-gray-200"
              />
              <button 
                onClick={handleImageButtonClick}
                className="absolute bottom-0 right-0 bg-white rounded-full p-1.5 shadow-md border border-gray-200"
              >
                <Camera className="w-5 h-5 text-gray-600" />
              </button>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
            </div>
            <button 
              onClick={handleImageButtonClick}
              className="text-blue-600 hover:text-blue-700 text-sm font-medium"
            >
              프로필 사진 변경하기
            </button>
          </div>

          {/* 계정 정보 폼 */}
          <div className="space-y-4">
            {/* 계정 ID */}
            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-700">계정 ID</label>
              <div>abc@aaa.com</div>
            </div>

            {/* 이름(닉네임) */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">이름(닉네임)</label>
              <div className="relative">
                <input 
                  type="text" 
                  value={nickname}
                  onChange={(e) => setNickname(e.target.value)}
                  maxLength={10}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-gray-500">
                  ({nickname.length}/10)
                </span>
              </div>
            </div>

            {/* 전화번호 */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">전화 번호</label>
              <div className="flex">
                <input 
                  type="tel" 
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="번호를 입력해주세요"
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-l-md"
                />
                <button className="px-1 py-2 bg-gray-300 text-gray-500 rounded-r-md hover:bg-gray-400 whitespace-nowrap">
                  인증번호 받기
                </button>
              </div>
            </div>
          </div>

          {/* 취소, 수정 버튼 */}
          <div className="flex gap-3 pt-4">
            <button 
              onClick={handleClose}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 text-gray-700"
            >
              취소
            </button>
            <button 
              className={`flex-1 px-4 py-2 rounded-md border ${
                isModified 
                  ? "border-orange-300 bg-orange-100 hover:bg-white text-orange-500" 
                  : "border-gray-300 bg-gray-100 text-gray-400 cursor-not-allowed"
              }`}
              disabled={!isModified}
            >
              수정
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileEditModal;