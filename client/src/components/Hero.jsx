
import React from 'react';
import { Link } from 'react-router-dom';
const Hero = () => {
  const gradientBorder = {
    borderImage: 'linear-gradient(to right,#004d40, #303f9f)',
    borderImageSlice: 1,
  
    
  };

  return (
    <div>
      <div className="w-screen h-[100%] flex items-center justify-center relative">
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <img src="assets/r.jpg" alt="Background" className="object-cover w-full h-full" />
        <div className="absolute inset-0 flex items-center justify-center text-white text-3xl  font-semibold m-2 p-4 flex-col">
          <div className="text-white-800 font-mono mb-8  ">
            <h1 className="text-4xl mb-8  " style={gradientBorder}>
            <em>Navigating your path to success, one college at a time</em></h1></div>
          <div className="flex flex-row space-x-8">
            <div className="flex flex-col">
             <Link to="/login"> <button className="w-[100%] flex flex-col justify-center items-center rounded-full shadow-lg m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 border-4 border-white"  >
                <span className="text-s">Login</span>
                {/* <span className="text-xs">For Patient as well as Doctor</span> */}
              </button></Link> 
              <button className="w-[100%] flex flex-col justify-center items-center rounded-full shadow-lg m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 border-4 border-white">
                <span className="text-s">Find your college</span>
              </button>
            </div>
            <div className="flex flex-col">
              <button className="w-[100%] flex flex-col justify-center items-center rounded-full shadow-lg  m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 border-4 border-white">
                <span className="text-s">Add Your Review</span>
              </button>
              <button className="w-[100%] flex flex-col justify-center items-center rounded-full shadow-lg  m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 border-4 border-white">
                <span className="text-s">My Searches</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;