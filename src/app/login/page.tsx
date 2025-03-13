"use client";
import Image from "next/image";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-[#fdfcf7] to-[#dff4d6]">
      {/* ===== HEADER / NAVBAR ===== */}
      <header className="flex items-center justify-between px-6 py-4">
        {/* Left: Logo & Title */}
        <div className="flex items-center space-x-2">
          {/* Replace '/logo.png' with your actual logo path in /public */}
          <Image
            src="/logo.png"
            alt="I Found Logo"
            width={40}
            height={40}
            className="object-contain"
          />
          <div>
            <h1 className="text-xl font-bold">I Found</h1>
            <p className="text-sm text-gray-600">Green Clean Tech</p>
          </div>
        </div>
      </header>

      {/* ===== MAIN CONTENT ===== */}
      <main className="flex flex-1 px-8 pb-8">
        {/* Left Side: Image & Overlay */}
        <div className="w-2/3 relative flex items-center justify-center rounded-lg overflow-hidden">
          {/* Large background image */}
          <Image
            src="https://via.placeholder.com/1200x800" // <-- Replace with your own image
            alt="Lost and Found Background"
            fill
            className="object-cover"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <div className="bg-white bg-opacity-10 backdrop-blur-md p-6 rounded-lg text-white max-w-lg">
              <h2 className="text-2xl font-bold mb-2">
                Welcome to Our Item Retrieval Website!
              </h2>
              <p className="text-sm mb-2">
                We’re excited to help you find and recover lost items. Easily
                report lost belongings, search for found items, and connect with
                others. Our user-friendly platform aims to reunite you with your
                lost possessions quickly and efficiently.
              </p>
              <p className="text-sm mb-2">
                Thank you for choosing our service. If you need assistance, feel
                free to contact us.
              </p>
              <p className="text-sm">Happy searching and best of luck!</p>
            </div>
          </div>
        </div>

        {/* Right Side: Login Form */}
        <div className="w-1/3 flex flex-col items-center justify-center p-6">
          <div className="bg-white w-full p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Login</h2>

            {/* User Name */}
            <label className="block mb-2 font-semibold">User Name</label>
            <input
              type="text"
              className="w-full mb-4 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="User Name"
            />

            {/* Password */}
            <label className="block mb-2 font-semibold">Password</label>
            <input
              type="password"
              className="w-full mb-2 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Password"
            />

            {/* Buttons */}
            <div className="flex space-x-4 mt-4">
              <button className="flex-1 bg-green-500 text-white p-2 rounded hover:bg-green-600 transition-colors">
                Sign In
              </button>
              <button className="flex-1 border border-green-500 text-green-500 p-2 rounded hover:bg-green-100 transition-colors">
                Sign Up
              </button>
            </div>

            {/* Forgot Password */}
            <div className="text-right mt-2">
              <a href="#" className="text-sm text-blue-500 underline">
                forget Password?
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* ===== FOOTER ===== */}
      <footer className="bg-white px-6 py-4 shadow-inner flex items-center justify-between">
        {/* Left Section: Help */}
        <div>
          <h4 className="font-bold">Help</h4>
          <p>Customer Support</p>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
        </div>

        {/* Middle Section: Copyright */}
        <div className="text-center">
          <p className="text-sm text-gray-600">
            © Copyright 2024 Lost and Found
          </p>
          <p className="text-sm text-gray-600">All Right Reserved</p>
        </div>

        {/* Right Section: Contact */}
        <div>
          <h4 className="font-bold">Contact</h4>
          <p>Tel: +94 716520690</p>
          <p>Email: talkprojects@wrenix.com</p>
        </div>
      </footer>
    </div>
  );
}
