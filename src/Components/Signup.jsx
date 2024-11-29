import React from 'react';
import { FaGoogle, FaFacebookF, FaMicrosoft } from 'react-icons/fa';
import imagemain from '../assets/pic01.png';

const SignupScreen = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white">
      <div className="w-full max-w-5xl bg-gray-800 rounded-lg shadow-xl overflow-hidden flex flex-col lg:flex-row">
        {/* Left Section */}
        <div
          className="w-full lg:w-1/2 h-64 lg:h-auto bg-cover bg-center"
          style={{ backgroundImage: `url('${imagemain}')` }}
        >
          <div className="h-full bg-black bg-opacity-50 flex flex-col justify-center items-center px-6 sm:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-center">
              Lights, Camera, Streaming:
            </h2>
            <p className="text-sm sm:text-lg mb-6 text-center">
              Your Ultimate Movie Destination!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <button className="px-6 py-2 border border-white rounded-full hover:bg-white hover:text-black transition">
                Sign Up
              </button>
              <button className="px-6 py-2 border border-white bg-white text-black rounded-full hover:bg-gray-200 transition">
                Login
              </button>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center p-6 sm:p-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center">AGENCY</h2>
          <p className="text-gray-300 text-sm sm:text-base text-center mb-6">
            Welcome to your best streaming website
          </p>
          <form className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
            />
            <div className="flex justify-center gap-4 text-lg">
              <FaGoogle className="text-red-500 cursor-pointer hover:scale-110 transition" />
              <FaFacebookF className="text-blue-500 cursor-pointer hover:scale-110 transition" />
              <FaMicrosoft className="text-green-500 cursor-pointer hover:scale-110 transition" />
            </div>
            <button className="w-full py-2 bg-blue-500 rounded-lg text-white font-bold hover:bg-blue-600 transition text-sm sm:text-base">
              Sign Up
            </button>
          </form>
          <p className="text-gray-400 text-center text-sm sm:text-base mt-6">
            Already have an account?{' '}
            <a href="#" className="text-blue-400 hover:underline">
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupScreen;
