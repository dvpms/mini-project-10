import React from "react";

const Navbar: React.FC = () => {
  return (
    <>
      <nav className="bg-transparent fixed w-full top-0 left-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-10">
            <h1 className="text-white text-4xl font-bold">FurniShop</h1>
            <div className="hidden md:flex space-x-6">
              <ul className="flex space-x-10">
                <li>
                  <a href="#" className="text-white hover:text-gray-400">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white hover:text-gray-400">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white hover:text-gray-400">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white hover:text-gray-400">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            {/* <!-- Hamburger Menu for Mobile --> */}
            <div className="md:hidden">
              <button className="text-white" name="button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
