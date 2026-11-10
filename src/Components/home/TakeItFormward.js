import React from "react";
import { FaApple, FaGooglePlay } from "react-icons/fa";

const TakeItForward = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-10 px-5">
        {/* Phone Mockup Section */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="relative border-gray-900 bg-gray-900 border-[10px] rounded-[2.5rem] h-[440px] w-[240px] shadow-2xl overflow-hidden flex flex-col">
            <div className="w-24 h-3 bg-gray-900 top-0 rounded-b-xl self-center z-20"></div>
            <div className="relative flex-1 bg-gradient-to-br from-orange-500 to-amber-500 p-5 flex flex-col justify-between text-white">
              <div>
                <span className="text-[11px] uppercase tracking-wider font-semibold opacity-90">ChefKart App</span>
                <h3 className="text-xl font-black mt-2">Cooks on Demand</h3>
                <p className="text-xs opacity-90 mt-2">Book trained & background verified cooks near you in minutes.</p>
              </div>
              <div className="bg-white/20 backdrop-blur-md rounded-xl p-3 text-center">
                <span className="text-xs font-bold">⭐ 4.8 Rating</span>
                <p className="text-[10px] opacity-90 mt-1">10,000+ Happy Households</p>
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Let's take it forward
          </h2>
          <p className="text-gray-600 text-lg mb-6">
            This is as easy as it gets! Good cooks are just a click away. <br />
            Download the App and get started.
          </p>
          <div className="flex justify-center lg:justify-start gap-4">
            {/* App Store Button */}
            <a
              href="#app-store"
              className="bg-black text-white py-3 px-5 rounded-xl flex items-center shadow-md hover:bg-gray-800 transition-colors"
            >
              <FaApple className="text-2xl mr-2" />
              <div className="text-left leading-tight">
                <div className="text-[9px] uppercase tracking-wider text-gray-300">Download on the</div>
                <div className="text-xs font-semibold">App Store</div>
              </div>
            </a>

            {/* Google Play Button */}
            <a
              href="#google-play"
              className="bg-black text-white py-3 px-5 rounded-xl flex items-center shadow-md hover:bg-gray-800 transition-colors"
            >
              <FaGooglePlay className="text-xl mr-2" />
              <div className="text-left leading-tight">
                <div className="text-[9px] uppercase tracking-wider text-gray-300">GET IT ON</div>
                <div className="text-xs font-semibold">Google Play</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TakeItForward;
