import React from "react";
import {
  FaPhone,
  FaShippingFast,
  FaUser,
  FaHeart,
  FaShoppingCart,
  FaFacebookF, FaInstagram, FaTwitter, FaYoutube,
} from "react-icons/fa";
import '../App.css';

const Header = () => {
  return (
    <>
      {/* Top Strip */}
      <div className="w-full bg-[#1C0C07] text-[#F5F5DC] text-sm py-1 px-8 flex flex-wrap justify-between items-center">
        <div className="flex items-center gap-2 flex-wrap">
          <FaPhone className="text-yellow-400" />
          <span className="font-['Winky_Rough']">077-630-456-500</span>
          <span className="w-px h-4 bg-gray-500 mx-1"></span>
          <FaShippingFast className="text-green-400" />
          <span className="font-['Winky_Rough']">Free Shipping on order over ₹300</span>
          <a
            href="#"
            className="text-yellow-400 font-['Titan_One'] underline hover:text-yellow-300 transition duration-150"
          >
            Shop Now
          </a>
        </div>

        {/* Center Dots */}
        <div className="flex justify-center w-full sm:w-auto my-2 sm:my-0">
          <div className="flex gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500"></span>
            <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
            <span className="w-3 h-3 rounded-full bg-green-500"></span>
            <span className="w-3 h-3 rounded-full bg-red-500"></span>
            <span className="w-3 h-3 rounded-full bg-purple-400"></span>
          </div>
        </div>

        {/* Right Links */}
        <div className="flex px-10 gap-6">
          <a href="#" className="text-gray-300 hover:text-[#F5F5DC] transition-colors duration-200 font-['Yatra_One']">About</a>
          <a href="#" className="text-gray-300 hover:text-[#F5F5DC] transition-colors duration-200 font-['Yatra_One']">Contact</a>
          <a href="#" className="text-gray-300 hover:text-[#F5F5DC] transition-colors duration-200 font-['Yatra_One']">FAQ</a>
          <a href="#" className="text-gray-300 hover:text-[#F5F5DC] transition-colors duration-200 font-['Yatra_One']">Help</a>
        </div>
      </div>

      {/* Logo & Search */}
      <div className="w-full bg-[#23110A] text-white py-1 px-8 flex justify-between items-center">
        <div className="text-2xl font-['Titan_One'] font-extrabold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text flex items-center justify-center tracking-wide">
          ShopNexus
        </div>

        <div className="flex items-center w-full max-w-2xl bg-white rounded-full shadow-md overflow-hidden">
          <input
            type="text"
            placeholder="What are you looking for..?"
            className="w-full font-['Belleza'] px-4 py-1 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
          <button className="bg-[#23110A] px-5 py-1 text-white font-semibold hover:bg-[#512818] transition duration-200">
            Q
          </button>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-[#F5F5DC] hover:text-blue-500 transition">
            <FaFacebookF title="Facebook" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-[#F5F5DC] hover:text-pink-500 transition">
            <FaInstagram title="Instagram" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-[#F5F5DC] hover:text-sky-400 transition">
            <FaTwitter title="Twitter" />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-[#F5F5DC] hover:text-red-500 transition">
            <FaYoutube title="YouTube" />
          </a>
        </div>
      </div>

      {/* Navbar */}
      <div className="w-full bg-[#2F1B16] shadow-sm">
        <div className="max-w-7xl font-['Yatra_One'] mx-auto px-4 py-2 flex items-center justify-between">
          
          {/* Center Links */}
          <div className="flex-1 flex justify-center space-x-6 text-sm font-medium text-[#F5F5DC]">
            <a href="#" className="hover:text-yellow-400 transition">Shop All</a>
            <a href="#" className="hover:text-yellow-400 transition">Computers</a>
            <a href="#" className="hover:text-yellow-400 transition">Tablets</a>
            <a href="#" className="hover:text-yellow-400 transition">Drones & Cameras</a>
            <a href="#" className="hover:text-yellow-400 transition">Audio</a>
            <a href="#" className="hover:text-yellow-400 transition">Mobile</a>
            <a href="#" className="hover:text-yellow-400 transition">T.V & Home Cinema</a>
            <a href="#" className="hover:text-yellow-400 transition">Wearable Tech</a>
            <a href="#" className="hover:text-yellow-400 transition">Sale</a>
          </div>

          {/* Right Icons */}
          <div className="hidden md:flex items-center gap-4 text-[#F5F5DC] text-lg">
            <a href="#" className="hover:text-indigo-400 transition"><FaUser /></a>
            <a href="#" className="hover:text-red-500 transition"><FaHeart /></a>
            <a href="#" className="hover:text-green-400 transition"><FaShoppingCart /></a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
