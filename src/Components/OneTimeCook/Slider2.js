import React from "react";

const Carousel2 = () => {
  const slides = [
    {
      title: "Get a cook for One-time Within 60 seconds",
      description: "Forget ordering online! Get fresh food cooked in your kitchen.",
      bgImage:
        "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1920&q=80",
    },
  ];

  return (
    <div className="relative w-full h-screen">
      {/* Slide */}
      <div
        className="w-full h-full flex flex-col md:flex-row items-center text-white bg-cover bg-center transition-all duration-500"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)), url(${slides[0].bgImage})`,
        }}
      >
        {/* Text Section */}
        <div className="w-full md:w-1/2 p-6 md:p-16 rounded-r-lg">
          <h1 className="text-5xl font-bold mt-3 text-center md:text-left">
            Get a cook for One-time 
            <span className="text-orange-500 font-bold ml-4">Within 60 seconds</span>
          </h1>
          <p className="text-lg  mt-6 text-center md:text-left">
            {slides[0].description}
          </p>

          <div className="flex justify-center md:justify-start">
            <button className="bg-orange-500 text-white font-bold text-sm md:text-lg lg:text-xl px-6 py-3 md:px-8 md:py-4 rounded-md mt-6 shadow-lg hover:bg-orange-600 hover:shadow-xl transition-all duration-300">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel2;
