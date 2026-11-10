import React, { useState } from 'react';

const InvestorsCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const investors = [
    {
      name: 'Deepinder Goyal',
      title: 'Founder & CEO, Zomato',
      description: 'Deepinder Goyal is the founder and CEO of Zomato, one of the largest food tech companies in India. As an investor of Chefkart, Goyal is backing a promising idea to offer authentic and affordable meals prepared in the comfort of one\'s home. His investment is a testament to the potential of Chefkart and its innovative approach to at-home cooking services.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80'
    },
    {
      name: 'Praveen Jadhav',
      title: 'Founder & CEO, Raise Financial',
      description: 'Praveen Jadhav is a seasoned entrepreneur and angel investor backing Chefkart in building organized and reliable at-home culinary services at scale.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80'
    },
    {
      name: 'Kunal Shah',
      title: 'Founder, CRED',
      description: 'Prominent angel investor supporting transformative consumer platforms simplifying daily services and trust in household management.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&q=80'
    }
  ];

  const handlePrevious = () => {
    setCurrentSlide((currentSlide - 1 + investors.length) % investors.length);
  };

  const handleNext = () => {
    setCurrentSlide((currentSlide + 1) % investors.length);
  };

  return (
    <div className="flex flex-col md:flex-row justify-between py-8">
      <div className="flex justify-start w-1/6 px-4">
        <button
          className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium py-2 px-4 rounded-lg mr-2"
          onClick={handlePrevious}
        >
          Previous
        </button>
      </div>
      <div className="flex flex-col md:flex-row justify-between md:w-2/3 px-4">
        <div className="flex flex-col md:w-1/2">
          <h2 className="text-2xl font-bold mb-4">{investors[currentSlide].name}</h2>
          <p className="text-gray-700 mb-6">{investors[currentSlide].title}</p>
          <p className="text-gray-600">{investors[currentSlide].description}</p>
        </div>
        <div className="flex justify-end md:w-1/2">
          <img src={investors[currentSlide].image} alt={investors[currentSlide].name} className="rounded-lg shadow-lg" />
        </div>
      </div>
      <div className="flex justify-end w-1/6 px-4">
        <button
          className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium py-2 px-4 rounded-lg"
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default InvestorsCarousel;