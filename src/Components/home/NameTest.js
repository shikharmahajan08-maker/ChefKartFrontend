import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

const Testimonial1 = () => {
  return (
    <div className="bg-gray-100 py-16 px-4">
      <h2 className="font-bold text-center text-4xl mb-12 text-gray-900">
        Don’t Take Our Word For It!
      </h2>
      <div className="flex flex-col md:flex-row items-center max-w-5xl justify-between mx-auto bg-white shadow-lg rounded-2xl overflow-hidden p-8 gap-8">
        {/* Text Section */}
        <div className="md:w-1/2 text-center md:text-left">
          <FaQuoteLeft className="text-orange-400 text-4xl mb-4 mx-auto md:mx-0 opacity-80" />
          <p className="text-2xl md:text-3xl text-gray-800 font-semibold leading-relaxed mb-6">
            “Everyone was amazed by the kind of party we threw, and the food was
            the talk of the party!”
          </p>
          <div className="flex items-center justify-center md:justify-start gap-3">
            <div className="w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold">
              K
            </div>
            <div>
              <p className="text-lg text-gray-900 font-bold">Kavita Sharma</p>
              <p className="text-sm text-gray-500">Gurgaon, Haryana</p>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80"
            alt="Customer event dinner"
            className="rounded-xl w-full h-80 object-cover shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonial1;
