import React from 'react';
import { MapPin, Grid, Users } from 'lucide-react';


const ContainerWithButtons = () => {


  return (
    <div className="w-full flex justify-center px-4">
      <div className="w-full max-w-[1200px] mt-4">
        <div className="flex justify-center items-center gap-12 p-4">
          <button className="border flex flex-col items-center justify-center w-40 h-40 bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow">
            <MapPin className="w-12 h-12 mb-4" />
            <span className="text-lg">지역</span>
          </button>
          
          <button className="border flex flex-col items-center justify-center w-40 h-40 bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow">
            <Grid className="w-12 h-12 mb-4" />
            <span className="text-lg">카테고리</span>
          </button>
          
          <button className="border flex flex-col items-center justify-center w-40 h-40 bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow">
            <Users className="w-12 h-12 mb-4" />
            <span className="text-lg">단체클래스</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContainerWithButtons;