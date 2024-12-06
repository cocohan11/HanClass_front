import React from 'react';
import Modal from './Modal';

const LoginModal = ({ isOpen, onClose }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // 로그인 로직 구현
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="text-center">
        <h2 className="text-xl font-bold mb-4">지금 회원가입하면</h2> 
        <h2 className="text-xl font-bold mb-4">10,000원 할인 쿠폰을 드려요</h2> 
        <form onSubmit={handleSubmit} className="space-y-4">
            {/* 버튼 등 */}
        </form>
      </div>
    </Modal>
  );
};

export default LoginModal;
