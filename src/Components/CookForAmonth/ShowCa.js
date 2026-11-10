import React from 'react';
import { FaCalendarCheck, FaUserCheck, FaSyncAlt, FaClock } from 'react-icons/fa';

// Sample data array
const cardData = [
  {
    id: 1,
    title: "30 Days of Assured Service",
    description: "Free substitute cook or service extension in case of leaves.",
    icon: FaCalendarCheck,
    iconColor: "text-orange-500",
  },
  {
    id: 2,
    title: "Trained & Verified Cooks",
    description: "Professionally trained & background verified cooks for quality service.",
    icon: FaUserCheck,
    iconColor: "text-blue-500",
  },
  {
    id: 3,
    title: "Effortless Replacements",
    description: "One free, no-questions-asked cook replacement..",
    icon: FaSyncAlt,
    iconColor: "text-green-600",
  },
  {
    id: 4,
    title: "Quick Service",
    description: "Find a skilled cook for your kitchen in as little as 24 hours.",
    icon: FaClock,
    iconColor: "text-amber-500",
  },
];

const ShowCa = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-10 mx-auto">
        {/* Responsive grid layout */}
        <div className="grid grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-6">
          {cardData.map((card) => {
            const IconComponent = card.icon;
            return (
              <div
                key={card.id}
                className="border-2 rounded-lg border-gray-200 border-opacity-50 p-6 flex flex-col sm:flex-row items-center bg-white shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-24 h-24 inline-flex items-center justify-center rounded-2xl bg-orange-50 border border-orange-100 flex-shrink-0">
                  <IconComponent className={`w-10 h-10 ${card.iconColor}`} />
                </div>
                <div className="flex-grow ml-4">
                  <h2 className="text-gray-900 text-1xl sm:text-xl title-font font-bold mb-2">
                    {card.title}
                  </h2>
                  <p className="leading-relaxed text-lg sm:text-base">
                    {card.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ShowCa;
