// x버튼이 없는 모달이라 별도 관리


// components/Modal/AlertModal.js
import { X } from 'lucide-react';

const AlertModal = ({ isOpen, onClose, message }) => {
  // 메시지를 이모지와 텍스트로 분리
  const [emoji, ...textParts] = message.split(' ');
  const text = textParts.join(' '); // 나머지 텍스트 부분을 다시 합침

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-black bg-opacity-60" onClick={onClose} />
      <div className="bg-white rounded-lg p-6 shadow-lg relative z-50 w-[320px]">
        <div className="text-center m-4">
          <p className="text-gray-700 flex items-center justify-center gap-2">
            <span className="text-3xl">{emoji}</span>
            <span className="text-lg">{text}</span>
          </p>
        </div>
        
        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors"
          >
            확인
          </button>
        </div>
      </div>
    </div>
  );
};

export default AlertModal;
