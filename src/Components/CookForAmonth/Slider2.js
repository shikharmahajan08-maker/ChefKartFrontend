import React, { useState } from "react";

const Carousel1 = () => {
  const slides = [
    {
      title: "Trusted By 10K+ Households To Hire a Cook ",
      description: "Professional & background verified cook for a month for you to enjoy home-cooked food every day  .",
      bgImage: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1920&q=80",
    },
  ];

  const [currentSlide] = useState(0);

  return (
    <div className="relative w-full h-screen">
      {/* Slide */}
      <div
        className="w-full h-full flex items-center text-white bg-cover bg-center transition-all duration-500"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)), url(${slides[currentSlide].bgImage})`,
        }}
      >
        {/* Text Section */}
        <div className="w-full md:w-1/2 p-10 md:p-16 rounded-r-lg ml-4">
          <h1 className="text-6xl  font-bold mt-3">Trusted By 10K+ <br/>Households  <br/><span className="text-orange-500 font-bold ">To Hire a Cook</span></h1>
          <p className="text-3xl  mt-10">{slides[currentSlide].description}</p>

          <button className="bg-orange-500 text-white font-bold text-lg md:text-xl px-8 py-4 rounded-md mt-5 shadow-lg hover:bg-orange-600 hover:shadow-xl transition-all duration-300">
            Get Started
          </button>
        </div>
      </div>

      {/* Controls */}
      

      {/* Indicators */}
      
    </div>
  );
};

export default Carousel1;
