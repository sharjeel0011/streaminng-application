import React from 'react';
import { FaGoogle, FaFacebookF, FaMicrosoft } from 'react-icons/fa';
import imagemain from '../assets/pic01.png'

const SignupScreen = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white text-white">
      <div className="w-full max-w-4xl bg-gray-900 rounded-lg shadow-lg overflow-hidden flex">
        {/* Left Section */}
        <div className="w-1/2 bg-cover bg-center" style={{ backgroundImage: `url('${imagemain}')` }}>
          <div className="h-full bg-black bg-opacity-50 flex flex-col justify-center items-center px-8">
            <h2 className="text-3xl font-bold mb-4">Lights, Camera, Streaming:</h2>
            <p className="text-lg mb-8">Your Ultimate Movie Destination!</p>
            <div className="flex gap-4 mt-28">
              <button className="px-6 py-2 border border-white rounded-full">Sign Up</button>
              <button className="px-6 py-2 border border-white bg-white text-black rounded-full">Login</button>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-1/2 flex flex-col justify-center p-12">
          <h2 className="text-4xl font-bold mb-4 text-center">AGENCY</h2>
          <p className="text-gray-400 text-center mb-6">Welcome to your best streaming website</p>
          <form className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
              <input
              type="password"
              placeholder="Confirm-Password"
              className="w-full px-4 py-2 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
           
            <div className="flex justify-center gap-4 text-lg  ">
              <FaGoogle className="text-red-500 cursor-pointer hover:scale-110 transition" />
              <FaFacebookF className="text-blue-500 cursor-pointer hover:scale-110 transition" />
              <FaMicrosoft className="text-green-500 cursor-pointer hover:scale-110 transition" />
            </div>
            <button className="w-full py-2 bg-blue-500 rounded-lg text-white font-bold hover:bg-blue-600 transition">
              Sign up
            </button>
          </form>
          <p className="text-gray-400 text-center mt-6">
          Already have an account ? <a href="#" className="text-blue-500 hover:underline">Login</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupScreen;
