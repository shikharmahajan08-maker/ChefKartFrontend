import React from 'react';

const Heart3 = () => {
  return (
    <div className="flex justify-center items-center  ">
      <section className="text-gray-600 body-font">
     
        <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
          {/* Text and Stats Section */}
          <div className="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
            <div className="w-full sm:p-4 px-4 mb-6">
              <h1 className="title-font   leading-normal text-3xl mb-2 text-black">
              "<br/>
              Everyone was amazed by the kind of party we threw, and the food was the talk of the party!
              </h1>
             <p className='mt-5 text-red-500 text-2xl font-bold'>Pramiti Upadhyay</p>
            </div>
          
          </div>

          {/* Image Section */}
          <div className="lg:w-1/2 sm:w-1/3 w-full rounded-2xl overflow-hidden shadow-lg mt-6 sm:mt-0">
            <img
              className="object-cover object-center w-full h-[360px]"
              src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80"
              alt="Party dining event"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Heart3;
