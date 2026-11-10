import React from "react";

const VideoGallery = () => {
  const items = [
    {
      src: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=800&q=80",
      title: "Chef In Action",
    },
    {
      src: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
      title: "Healthy Salads",
    },
    {
      src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
      title: "Gourmet Flavors",
    },
    {
      src: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=800&q=80",
      title: "Mexican Feasts",
    },
    {
      src: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=800&q=80",
      title: "Authentic Indian Curries",
    },
  ];

  return (
    <div className="py-12 bg-gray-50">
      <h2 className="text-4xl font-bold text-center mb-8 text-gray-900">Culinary Gallery</h2>
      <div className="container mx-auto px-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {items.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-md h-72 cursor-pointer"
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-4">
                <span className="text-white font-semibold text-sm tracking-wide">
                  {item.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoGallery;
