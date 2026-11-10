import React from 'react';
import { FaClock, FaBookOpen, FaCocktail } from 'react-icons/fa';
import { GiChefToque } from 'react-icons/gi';

// Sample data array
const cardData = [
  {
    id: 1,
    title: "Multi-Cuisine Professionals",
    description: "Professional party chefs to ensure a diverse & exquisite dining experience.",
    icon: GiChefToque,
    iconColor: "text-orange-500",
  },
  {
    id: 2,
    title: "Prompt Service",
    description: "Swift service to ensure that your party kicks off as planned",
    icon: FaClock,
    iconColor: "text-blue-500",
  },
  {
    id: 3,
    title: "Customisable menu",
    description: "Food from around the world to make your event the talk of the town.",
    icon: FaBookOpen,
    iconColor: "text-green-600",
  },
  {
    id: 4,
    title: "Bartenders, Waiters, etc.",
    description: "Expert bartenders & waiters to leave your guests in awe",
    icon: FaCocktail,
    iconColor: "text-amber-500",
  },
];

const ShowCard1 = () => {
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

export default ShowCard1;
