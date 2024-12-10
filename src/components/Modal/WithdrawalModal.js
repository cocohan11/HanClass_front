// 회원탈퇴 모달
import React, { useState } from 'react';
import Modal from './Modal';


const WithdrawalModal = ({ isOpen, onClose }) => {
  const [isChecked, setIsChecked] = useState(false);


  // 모달 닫을 때 체크박스 초기화하는 함수
  const handleClose = () => {
    setIsChecked(false); // 체크박스 상태 초기화
    onClose(); // 기존 onClose 함수 실행
  };

  const handleWithdrawal = () => {
    if (!isChecked) {
      alert('유의사항에 동의해주세요.');
      return;
    }
    // 회원탈퇴 로직 실행
    console.log('회원탈퇴 처리');
    handleClose();
  };

  //----------------------------------------------------
  return (
    <Modal isOpen={isOpen} onClose={handleClose}>
      <div className="space-y-6">
        {/* 제목 */}
        <h1 className="text-2xl font-bold text-center">회원탈퇴</h1>
        
        {/* 유의사항 섹션 */}
        <div className="space-y-3">
          <h2 className="text-lg font-semibold text-gray-600">유의사항</h2>
          <p className="text-sm text-gray-500">
            한클래스 탈퇴 시 등록한 클래스, 크레딧, 쿠폰 및 이용 내역이 삭제됩니다.
          </p>
        </div>

        {/* 동의 체크박스 */}
        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            id="agreement"
            checked={isChecked}
            onChange={(e) => setIsChecked(e.target.checked)}
            className="w-4 h-4"
          />
          <label 
            htmlFor="agreement" 
            className="text-sm underline cursor-pointer"
          >
            유의사항을 확인하였으며, 동의합니다.
          </label>
        </div>

        {/* 탈퇴 버튼 */}
        <button
          onClick={handleWithdrawal}
          className={`w-full py-3 bg-gray-600 font-medium rounded-md hover:bg-gray-600 ${isChecked ? 'text-white' : 'text-black'}`}
        >
          한클래스 삭제하기
        </button>
      </div>
    </Modal>
  );
};

export default WithdrawalModal;
