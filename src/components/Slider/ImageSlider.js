// components/Header.js
import React, { useState, useEffect } from 'react';
import SliderButton from './SliderButton';
import SliderIndicator from './SliderIndicator';


function ImageSlider() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [
    '/images/slider/slider1.jpg',
    '/images/slider/slider2.jpg',
    '/images/slider/slider3.jpg',
    '/images/slider/slider4.jpg'
    ]

    // 자동 슬라이드를 위한 useEffect 추가
    useEffect(() => {
        const timer = setInterval(() => {
            goNext(currentIndex);
        }, 3000); // 3초마다 다음 이미지로
        
        // 컴포넌트가 언마운트될 때 타이머 정리
        return () => clearInterval(timer);
        }, []);

    function goNext() {
        setCurrentIndex(prevIndex => // React는 자동으로 현재 상태값을 이 콜백 함수의 첫 번째 매개변수로 전달
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    }
    function goPrev() {
        setCurrentIndex(prevIndex => 
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    }
    function goToSlide(index) {
        setCurrentIndex(index);
    };
    
    //-----------------------------------------
    return (
        <div className='relative h-[360px] overflow-hidden'>
            <img
                src={images[currentIndex]}
                alt='slider image'
                className='w-full h-full object-cover'
            />
            <SliderButton direction="prev" onClick={goPrev}/>
            <SliderButton direction="next" onClick={goNext}/>
            <SliderIndicator totalSlides={images.length} currentIndex={currentIndex} onSlideChange={goToSlide} />
        </div>
    );
}

export default ImageSlider;
 