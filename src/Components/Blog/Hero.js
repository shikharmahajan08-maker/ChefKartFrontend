import React from "react";

const Hero = () => {
  return (
    <section className="text-gray-600 body-font ">
      <div className="container mx-auto flex px-5  mt-20 py-24 md:flex-row flex-col items-center">
        {/* Left Content */}
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font text-6xl mb-4 font-bold text-gray-900">
          How to find the best cook for your home
            
          </h1>
          <p className="mb-8 leading-relaxed text-black text-2xl">
          Finding a cook for home can be challenging, especially if you’re staying away from your hometown
          </p>
          <div className="flex justify-center">
            <button className="inline-flex text-white bg-black border-0 py-2 px-6 font-bold  text-2xl  rounded-lg">
              Read More
            </button>
         
          </div>
        </div>

        {/* Right Visual */}
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded-2xl shadow-xl w-full h-[400px]"
            src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1200&q=80"
            alt="Chef preparing meal"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
