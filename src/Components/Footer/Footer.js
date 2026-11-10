import { Link } from "react-router-dom";
import { FaApple, FaGooglePlay } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="text-gray-600 body-font bg-white border-t border-gray-100">
        <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <Link to="/" className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoErvIxAIWybuxDrbVZuRTz1B3ZaYWZTSqMw&s"
                alt="ChefKart Logo"
                className="w-44 h-auto rounded"
              />
            </Link>
            <p className="mt-4 text-black font-bold text-center md:text-left">Get The App Now</p>
            <div className="flex flex-col sm:flex-row gap-2 mt-4 justify-center md:justify-start">
              <a
                href="#"
                className="flex items-center space-x-2 bg-black text-white px-3 py-2 rounded-lg hover:bg-gray-800 transition-colors shadow-sm"
              >
                <FaApple className="text-2xl" />
                <div className="text-left leading-tight">
                  <div className="text-[9px] uppercase tracking-wider text-gray-300">Download on the</div>
                  <div className="text-xs font-semibold">App Store</div>
                </div>
              </a>
              <a
                href="#"
                className="flex items-center space-x-2 bg-black text-white px-3 py-2 rounded-lg hover:bg-gray-800 transition-colors shadow-sm"
              >
                <FaGooglePlay className="text-xl" />
                <div className="text-left leading-tight">
                  <div className="text-[9px] uppercase tracking-wider text-gray-300">GET IT ON</div>
                  <div className="text-xs font-semibold">Google Play</div>
                </div>
              </a>
            </div>
          </div>
    <div class="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
      <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 class="title-font font-bold  text-gray-900 tracking-widest text-md mb-3">CATEGORIES</h2>
        <nav class="list-none mb-10">
          <li>
            <Link to="#" class="text-gray-600 normal leading-loose hover:text-gray-800">
            Cook for a Month</Link>
          </li>
          <li>
            <Link to="#" class="text-gray-600 normal leading-loose hover:text-gray-800">Blog</Link>
          </li>
          <li>
            <Link to="#" class="text-gray-600 normal leading-loose hover:text-gray-800">About us</Link>
          </li>
         
        </nav>
      </div>
      <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 class="title-font font-bold text-gray-900 tracking-widest text-md mb-3">CATEGORIES</h2>
        <nav class="list-none mb-10">
          <li>
            <Link to="#" class="text-gray-600 normal leading-loose hover:text-gray-800">Chefit: One-Time Cook
            </Link>
          </li>
          <li>
            <Link to="#" class="text-gray-600 normal leading-loose hover:text-gray-800">ChefKart से जुड़ें</Link>
          </li>
          <li>
            <Link to="#" class="text-gray-600 normal leading-loose hover:text-gray-800">Cooks Near me</Link>
          </li>
        
        </nav>
      </div>
      <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 class="title-font font-bold text-gray-900 tracking-widest text-md mb-3">CATEGORIES</h2>
        <nav class="list-none mb-10">
          <li>
            <Link to="#" class="text-gray-600 normal leading-loose hover:text-gray-800">Chef for Party</Link>
          </li>
          <li>
            <Link to="#" class="text-gray-600 normal leading-loose hover:text-gray-800">Contact</Link>
          </li>
          
        </nav>
      </div>
      <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 class="title-font  text-gray-900 tracking-widest font-bold text-md mb-3">CATEGORIES</h2>
        <nav class="list-none mb-10">
          <li>
            <Link to="#" class="text-gray-600 normal leading-loose hover:text-gray-800">Privacy Policy</Link>
          </li>
          <li>
            <Link to="#" class="text-gray-600 normal leading-loose hover:text-gray-800">Terms of Service</Link>
          </li>
          
        </nav>
      </div>
    </div>
  </div>
  <div class="bg-gray-100">
    <div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
      <p class="text-black  font-bold text-md text-center sm:text-left ">Copyright 2024 ChefKart Hospitality Pvt Ltd.
       
      </p>
      <span class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
        <a href="https://www.facebook.com/thechefkart" target="_blank" rel="noopener noreferrer" class="text-orange-500">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
          </svg>
        </a>
        <a href="https://x.com/thechefkart" target="_blank" rel="noopener noreferrer" class="ml-3 text-orange-500">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
          </svg>
        </a>
        <a href="https://www.instagram.com/thechefkart/" target="_blank" rel="noopener noreferrer" class="ml-3 text-orange-500">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
          </svg>
        </a>
        <a href="https://www.linkedin.com/company/42762980/" target="_blank" rel="noopener noreferrer" class="ml-3 text-orange-500">
          <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
            <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
            <circle cx="4" cy="4" r="2" stroke="none"></circle>
          </svg>
        </a>
      </span>
    </div>
  </div>
</footer>
      
    </div>
  )
}

export default Footer
