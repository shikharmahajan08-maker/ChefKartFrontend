import React from 'react';

const Heart1 = () => {
  return (
    <div className="flex justify-center items-center  ">
      <section className="text-gray-600 body-font">
     
        <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
          {/* Text and Stats Section */}
          <div className="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
            <div className="w-full sm:p-4 px-4 mb-6">
              <h1 className="title-font   leading-normal text-3xl mb-2 text-black">
              "<br/>
              "I will never go back to ordering food online because ChefKart just works great for me!"
              </h1>
             <p className='mt-5 text-red-500 text-2xl font-bold'>Pramiti Upadhyay</p>
            </div>
          
          </div>

          {/* Image Section */}
          <div className="lg:w-1/2 sm:w-1/3 w-full rounded-2xl overflow-hidden shadow-lg mt-6 sm:mt-0">
            <img
              className="object-cover object-center w-full h-[360px]"
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80"
              alt="Pramiti Upadhyay"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Heart1;
