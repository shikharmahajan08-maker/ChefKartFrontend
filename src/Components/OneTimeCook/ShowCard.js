import React from 'react';
import { FaLeaf, FaUtensils, FaUserCheck, FaBolt } from 'react-icons/fa';

// Sample data array
const cardData = [
  {
    id: 1,
    title: "Healthy & Hygienic Food",
    description: "Healthy food cooked in your kitchen with utmost hygiene..",
    icon: FaLeaf,
    iconColor: "text-green-600",
  },
  {
    id: 2,
    title: "Tailored to Your Taste",
    description: "Food prepared according to your taste and preferences.",
    icon: FaUtensils,
    iconColor: "text-orange-500",
  },
  {
    id: 3,
    title: "Trained & Verified Cooks",
    description: "Professionally trained & background verified cooks for quality service.",
    icon: FaUserCheck,
    iconColor: "text-blue-500",
  },
  {
    id: 4,
    title: "Quick Service",
    description: "Assured cook arrival within 60 minutes of booking",
    icon: FaBolt,
    iconColor: "text-amber-500",
  },
];

const ShowCard2 = () => {
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
                  <p className="leading-relaxed text-lg text-center sm:text-left">
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

export default ShowCard2;
