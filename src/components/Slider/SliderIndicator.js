// components/SliderIndicator.js
function SliderIndicator({ totalSlides, currentIndex, onSlideChange }) {
    return (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-5 z-10">
            {[...Array(totalSlides)].map((_, index) => (
                <button
                    key={index}
                    onClick={() => onSlideChange(index)}
                    className={`w-3.5 h-3.5 rounded-full transition-all duration-300 shadow-md
                        ${currentIndex === index 
                            ? 'bg-white scale-110 shadow' 
                            : 'bg-white/50 hover:bg-white/70'}`}
                    aria-label={`Go to slide ${index + 1}`}
                />
            ))}
        </div>
    );
}


export default SliderIndicator;
