// components/SliderButton.js
import React from 'react';

function SliderButton({ direction, onClick }) {
    return (
        <button 
            onClick={onClick}
            className={`absolute top-1/2 -translate-y-1/2 bg-white/50 hover:bg-white/75 p-2 rounded-full text-gray-600 hover:text-gray-800
                ${direction === 'prev' ? 'left-4' : 'right-4'}`}
        >
            {direction === 'prev' ? (
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-6 w-6" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                >
                    <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M15 19l-7-7 7-7" 
                    />
                </svg>
            ) : (
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-6 w-6" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                >
                    <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M9 5l7 7-7 7" 
                    />
                </svg>
            )}
        </button>
    );
}

export default SliderButton;
