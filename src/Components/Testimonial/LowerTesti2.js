import React from 'react';

const Heart2 = () => {
  return (
    <div className="flex justify-center items-center">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
          {/* Image Section */}
          <div className="lg:w-1/2 sm:w-1/3 w-full rounded-2xl overflow-hidden shadow-lg mt-6 sm:mt-0 order-last lg:order-first">
            <img
              className="object-cover object-center w-full h-[360px]"
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80"
              alt="अजनहर बीबी"
            />
          </div>

          {/* Text and Stats Section */}
          <div className="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pl-10">
            <div className="w-full sm:p-4 px-4 mb-6">
              <h1 className="title-font leading-normal text-3xl mb-2 text-black">
                "<br />
                "जहाँ आपको इज़्ज़त नहीं मिले, ChefKart उस घर में आपको कभी नहीं भेजेगी।"!"
              </h1>
              <p className="mt-5 text-red-500 text-2xl font-bold">अजनहर बीबी</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Heart2;
