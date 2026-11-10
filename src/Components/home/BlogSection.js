import React from "react";

const BlogSection = () => {
  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-6">
        <h5 className="text-gray-400 text-center text-2xl font-bold">Blog</h5>
        <h2 className="text-center font-bold text-5xl">Cuisines worth travelling, now at your fingertips</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 mt-12 gap-6">
          {/* Blog Card 1 */}
          <div className="relative bg-black rounded-lg overflow-hidden shadow-lg h-96">
            <img
              src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1200&q=80"
              alt="Hiring a cook"
              className="w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 flex flex-col justify-end p-6">
              <span className="bg-orange-500 text-white text-xs uppercase font-bold px-3 py-1 mb-2 w-fit rounded">
                Find a cook
              </span>
              <span className="text-gray-300 text-sm mb-2">5 min read</span>
              <h2 className="text-white text-2xl font-bold mb-2">
                6 things to keep in mind when hiring a cook for home
              </h2>
            </div>
          </div>
          {/* Blog Card 2 */}
          <div className="relative bg-black rounded-lg overflow-hidden shadow-lg h-96">
            <img
              src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1200&q=80"
              alt="Healthy recipes"
              className="w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 flex flex-col justify-end p-6">
              <span className="bg-orange-500 text-white text-xs uppercase font-bold px-3 py-1 mb-2 w-fit rounded">
                Culinary Secrets
              </span>
              <span className="text-gray-300 text-sm mb-2">4 min read</span>
              <h2 className="text-white text-2xl font-bold mb-2">
                How our verified chefs curate balanced & hygienic meals
              </h2>
            </div>
          </div>

         </div>
        {/* View All Blogs Button */}
        <div className="mt-8 text-center">
          <button className="bg-black text-white text-lg font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-gray-800">
            View All Blogs
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
