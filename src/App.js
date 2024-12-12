// src/App.js
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Header from './components/Header/Header';
import ImageSlider from './components/Slider/ImageSlider';
import Profile from './components/Mypage/Profile';
import Workspace from './components/Work-space/Workspace';


function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        {/* 헤더 */}
        <Header />
        
        {/* 헤더 높이만큼 빈 공간 */}
        <div className="h-[60px]"></div>

        {/* 메인 컨텐츠 */}
        <main className="flex-1 overflow-auto">
          {/* <div className="max-w-[1300px] mx-auto p-8"> */}
          <div className="mx-auto">
            <Routes>
              <Route path="/" element={ // 이미지슬라이더를 홈에서만 보기
                <>
                  <ImageSlider />
                  <Home/>
                </>
              } />
              <Route path="/about" element={<About />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/workspace" element={<Workspace />} />
            </Routes>
          </div>
        </main>

        {/* 푸터 */}
      </div>
    </BrowserRouter>
  );
}

export default App;
