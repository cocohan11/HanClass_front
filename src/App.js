// src/App.js
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Header from './components/Header';
import ImageSlider from './components/Slider/ImageSlider';

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        {/* 헤더 */}
        <Header />
        
        {/* 헤더 높이만큼 빈 공간 */}
        <div className="h-[85px]"></div>

        {/* 메인 컨텐츠 */}
        <main className="flex-1 overflow-auto">
          <ImageSlider/>
          <div className="max-w-[1300px] mx-auto p-8">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </div>
        </main>

        {/* 푸터 */}
      </div>
    </BrowserRouter>
  );
}

export default App;
