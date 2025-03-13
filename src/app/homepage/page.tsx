'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#FEECDC] to-[#ECFEC5]">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-4">
        <Image src="/assets/logo.png" alt="Logo" width={100} height={50} />
        <div className="flex space-x-4 ml-auto">
          <Link href="#" className="px-3 py-2 bg-gray-300 rounded">Home</Link>
          <Link href="#" className="px-3 py-2">Lost</Link>
          <Link href="#" className="px-3 py-2">Report Lost</Link>
          <Link href="#" className="px-3 py-2">Found</Link>
          <Link href="#" className="px-3 py-2">Report Found</Link>
          <Link href="#" className="px-3 py-2">Profile</Link>
        </div>
        <button className="ml-4 px-4 py-2 bg-gray-200 rounded">Sign Out</button>
      </nav>
      
      {/* Hero Section */}
      <div className="flex flex-col items-center my-12">
        <div className="text-center">
          <h1 className="text-5xl font-bold">
            Find &
            <br />
            Recover
            <br />
            <span className="text-green-700">With Ease</span>
          </h1>
          <p className="mt-3">Experience effortless recovery with our dedicated lost and found service.</p>
        </div>
        <div className="mt-6 flex space-x-4">
          <button className="bg-red-500 text-white px-6 py-3 rounded">Lost</button>
          <button className="bg-green-500 text-white px-6 py-3 rounded">Found</button>
        </div>
      </div>
      
      {/* Images */}
      <div className="flex justify-center space-x-4">
        <Image src="/assets/bag.jpg" alt="Lost and Found" width={120} height={120} />
        <Image src="/assets/bag.jpg" alt="Lost and Found" width={120} height={120} />
        <Image src="/assets/bag.jpg" alt="Lost and Found" width={120} height={120} />
      </div>
      
      {/* Footer */}
      <footer className="mt-12 p-6 bg-white shadow-lg flex justify-between items-center">
        <Image src="/assets/Logofoot.png" alt="Footer Logo" width={80} height={40} />
        <div>
          <h3 className="font-bold">Site</h3>
          <ul>
            <li>Lost</li>
            <li>Report Lost</li>
            <li>Found</li>
            <li>Report Found</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold">Help</h3>
          <ul>
            <li>Customer Support</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold">Links</h3>
          <ul>
            <li>LinkedIn</li>
            <li>Facebook</li>
            <li>YouTube</li>
            <li>About Us</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold">Contact</h3>
          <p>Tel: +94 716520690</p>
          <p>Email: talkprojects@wrenix.com</p>
        </div>
      </footer>
      
      <div className="text-center py-4 text-sm">© Copyright 2024 Lost and Found All Rights Reserved</div>
    </div>
  );
}
