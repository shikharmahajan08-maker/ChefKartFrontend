import React from 'react';

const Heart = () => {
  return (
    <div className="flex justify-center items-center  ">
      <section className="text-gray-600 body-font">
      <h1 className='text-center text-5xl font-bold text-black mt-10'>Let's hear it from our Customer</h1>
        <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
          {/* Text and Stats Section */}
          <div className="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
            <div className="w-full sm:p-4 px-4 mb-6">
              <h1 className="title-font  leading-normal text-4xl mb-2 text-gray-900">
              "<br/>
              This is a much-required service that is convenient and more affordable than ordering online.
              </h1>
             <p className='mt-5 text-orange-500 font-bold'>Rishi</p>
            </div>
          
          </div>

          {/* Image Section */}
          <div className="lg:w-1/2 sm:w-1/3 w-full rounded-2xl overflow-hidden shadow-lg mt-6 sm:mt-0">
            <img
              className="object-cover object-center w-full h-[360px]"
              src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80"
              alt="Customer Review"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Heart;
