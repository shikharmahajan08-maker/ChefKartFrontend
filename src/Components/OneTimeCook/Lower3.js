import React from 'react';

const Lower3 = () => {
  return (
    <div>
      <section className="text-gray-600 bg-[#f1f1f1] body-font overflow-hidden">
        <div className="container px-4 mx-auto max-w-7xl">
          <div className="flex flex-wrap lg:flex-nowrap">
            <img
              alt="Professional Chef"
              className="lg:w-1/2 w-full h-64 lg:h-auto object-cover object-center rounded"
              src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1200&q=80"
            />
            <div className="lg:w-1/2 w-full  lg:mt-0 lg:pl-10  lg:py-56">
              <p className="text-red-500 text-center lg:text-left font-bold">Running on a tight schedule</p>
              <h1 className="text-black text-2xl lg:text-5xl font-bold mt-4 text-center lg:text-left">
                No time to cook? ChefKart Got You Covered!!
              </h1>
              <p className="text-black text-lg lg:text-2xl font-bold mt-6 text-center lg:text-left">
                Get a professional cook within 60 minutes
              </p>
              <div className="flex justify-center lg:justify-start mt-6">
                <button className="bg-black text-white w-32 rounded-lg h-12 font-bold">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Lower3;
