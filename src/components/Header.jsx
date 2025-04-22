import React, { useState, useRef, useEffect } from "react";
import { useAuth } from "../context/Authcontext";
import {
  FaPhone,
  FaShippingFast,
  FaUser,
  FaHeart,
  FaShoppingCart,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaSearch,
  FaUserCircle,
  FaCog,
  FaHistory,
  FaSignOutAlt
} from "react-icons/fa";
import '../App.css';
import AuthModal from "./AuthModal";

const Header = () => {
  const { user, logout } = useAuth();
  const [showModal, setShowModal] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      {/* 🔝 Top Strip */}
      <div className="w-full bg-[#1C0C07] text-[#F5F5DC] text-sm py-1 px-8 flex flex-wrap justify-between items-center">
        <div className="flex items-center gap-2 flex-wrap">
          <FaPhone className="text-yellow-400" />
          <span className="font-['Winky_Rough']">077-630-456-500</span>
          <span className="w-px h-4 bg-gray-500 mx-1"></span>
          <FaShippingFast className="text-green-400" />
          <span className="font-['Winky_Rough']">Free Shipping on order over ₹300</span>
          <a
            href="#"
            className="text-yellow-400 font-['Titan_One'] underline hover:text-yellow-300 transition"
          >
            Shop Now
          </a>
        </div>

        <div className="flex justify-center w-full sm:w-auto my-2 sm:my-0">
          <div className="flex gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500"></span>
            <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
            <span className="w-3 h-3 rounded-full bg-green-500"></span>
            <span className="w-3 h-3 rounded-full bg-purple-400"></span>
          </div>
        </div>

        <div className="flex px-10 gap-6">
          <a href="#" className="text-gray-300 hover:text-[#F5F5DC] font-['Yatra_One']">About</a>
          <a href="#" className="text-gray-300 hover:text-[#F5F5DC] font-['Yatra_One']">Contact</a>
          <a href="#" className="text-gray-300 hover:text-[#F5F5DC] font-['Yatra_One']">FAQ</a>
          <a href="#" className="text-gray-300 hover:text-[#F5F5DC] font-['Yatra_One']">Help</a>
        </div>
      </div>

      {/* 🔍 Logo & Search */}
      <div className="w-full bg-[#23110A] text-white py-2 px-8 flex flex-wrap justify-between items-center gap-4">
        <div className="text-2xl font-['Titan_One'] font-extrabold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text tracking-wide">
          ShopNexus
        </div>

        <div className="flex-grow max-w-2xl w-full flex bg-white rounded-full overflow-hidden shadow-md">
          <input
            type="text"
            placeholder="What are you looking for..?"
            className="w-full px-4 py-2 text-sm text-gray-700 focus:outline-none font-['Belleza']"
          />
          <button className="bg-[#23110A] px-4 text-white hover:bg-[#512818] transition">
            <FaSearch />
          </button>
        </div>

        <div className="flex items-center gap-3">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500"><FaFacebookF /></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500"><FaInstagram /></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400"><FaTwitter /></a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-500"><FaYoutube /></a>
        </div>
      </div>

      {/* 🧭 Navbar */}
      <div className="bg-[#2F1B16] text-[#F5F5DC]">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between px-4 py-2">
          {/* Menu links */}
          <div className="flex-1 hidden md:flex justify-center gap-8 font-['Yatra_One'] text-sm">
            {["Women", "Mens", "Kids", "GenZ", "Electronics", "Beauty", "Home", "Footwear"].map((item, index) => (
              <a key={index} href="#" className="hover:text-yellow-400 transition">{item}</a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4 text-[#F5F5DC] text-lg relative">
            <a href="#" className="hover:text-red-500"><FaHeart /></a>
            <a href="#" className="hover:text-green-400"><FaShoppingCart /></a>

            {user ? (
              <div className="relative" ref={dropdownRef}>
                <img
                  src={user.photoURL || "https://avatars.githubusercontent.com/u/168772245?v=4"}
                  alt="avatar"
                  className="w-8 h-8 rounded-full cursor-pointer border-2 border-yellow-300 hover:border-yellow-400 transition-all"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                />
                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-56 bg-white text-gray-800 rounded-lg shadow-xl z-50 overflow-hidden border border-gray-200">
                    <div className="px-4 py-3 border-b border-gray-100 bg-gray-50 flex items-center gap-3">
                      <img 
                        src={user.photoURL || "https://avatars.githubusercontent.com/u/168772245?v=4"} 
                        alt="avatar" 
                        className="w-8 h-8 rounded-full"
                      />
                      <div>
                        <p className="font-medium text-sm">{user.displayName || "User"}</p>
                        <p className="text-xs text-gray-500">{user.email || ""}</p>
                      </div>
                    </div>
                    
                    <a 
                      href="#" 
                      className="flex items-center px-4 py-3 text-sm hover:bg-gray-50 transition-colors"
                    >
                      <FaUserCircle className="mr-3 text-gray-500" />
                      My Profile
                    </a>
                    
                    <a 
                      href="#" 
                      className="flex items-center px-4 py-3 text-sm hover:bg-gray-50 transition-colors"
                    >
                      <FaHistory className="mr-3 text-gray-500" />
                      Order History
                    </a>
                    
                    <a 
                      href="#" 
                      className="flex items-center px-4 py-3 text-sm hover:bg-gray-50 transition-colors"
                    >
                      <FaCog className="mr-3 text-gray-500" />
                      Account Settings
                    </a>
                    
                    <div className="border-t border-gray-100">
                      <button
                        onClick={() => {
                          logout();
                          setDropdownOpen(false);
                        }}
                        className="w-full flex items-center px-4 py-3 text-sm hover:bg-gray-50 text-red-500 transition-colors"
                      >
                        <FaSignOutAlt className="mr-3" />
                        Logout
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <button
                onClick={() => setShowModal(true)}
                className="text-xl hover:text-indigo-400 transition"
                title="Login"
              >
                <FaUser />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* 🧩 Auth Modal */}
      {showModal && <AuthModal closeModal={() => setShowModal(false)} />}
    </>
  );
};

export default Header;