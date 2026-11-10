import React from "react";

const Carousel3 = () => {
  const slides = [
    {
      title: "What People Think About Us",
      bgImage:
        "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1920&q=80",
    },
  ];

  return (
    <div className="relative w-full h-screen">
      {/* Slide */}
      <div
        className="w-full h-full flex items-center justify-center text-white bg-cover bg-center transition-all duration-500"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${slides[0].bgImage})`,
        }}
      >
        {/* Text Section */}
        <div className="text-center p-6 md:p-16  rounded-lg">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mt-3">
            What People Think About Us
          </h1>
          

          <div className="mt-6">
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel3;
