import React from "react";
import { FaAward, FaUserCheck } from "react-icons/fa";

const SkillIndiaSection = () => {
  return (
    <section className="text-gray-600 body-font bg-gradient-to-b from-white to-orange-50/40 py-16">
      <div className="container px-5 mx-auto text-center">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 mb-8">
          {/* Skill India Badge */}
          <div className="flex flex-col items-center justify-center p-6 bg-white rounded-2xl shadow-sm border border-orange-100 w-64 hover:shadow-md transition-shadow">
            <div className="w-20 h-20 rounded-full bg-orange-100 flex items-center justify-center mb-3">
              <FaAward className="w-10 h-10 text-orange-500" />
            </div>
            <span className="text-lg font-bold text-gray-800">Skill India</span>
            <span className="text-xs uppercase tracking-wider font-semibold text-orange-600 mt-1">Certified Mission</span>
          </div>

          {/* THSC / Govt Certified Badge */}
          <div className="flex flex-col items-center justify-center p-6 bg-white rounded-2xl shadow-sm border border-orange-100 w-64 hover:shadow-md transition-shadow">
            <div className="w-20 h-20 rounded-full bg-orange-100 flex items-center justify-center mb-3">
              <FaUserCheck className="w-10 h-10 text-orange-500" />
            </div>
            <span className="text-lg font-bold text-gray-800">THSC Certified</span>
            <span className="text-xs uppercase tracking-wider font-semibold text-orange-600 mt-1">Tourism & Hospitality</span>
          </div>
        </div>

        {/* Text Content */}
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
          Proud Partner with Skill India
        </h2>
        <p className="text-gray-600 text-lg md:text-2xl font-medium max-w-2xl mx-auto">
          All our professionals are certified by Govt. of India under Skill
          India Mission
        </p>
      </div>
    </section>
  );
};

export default SkillIndiaSection;
