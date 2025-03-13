// pages/report-lost.js
"use client"; // Marks this as a Client Component

import Head from 'next/head';

export default function ReportLost() {
  return (
    <div>
      <Head>
        <title>Report Lost Item - IFOUND</title>
      </Head>

      {/* Header */}
      <header className="bg-white p-4 flex justify-between items-center border-b">
        <div className="flex items-center">
          <img src="/bag" alt="IFOUND Logo" className="h-8" /> {/* Replace with your bag image */}
          <span className="ml-2 text-xl font-bold">IFOUND</span>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#" className="text-gray-600 hover:text-black">Home</a></li>
            <li><a href="#" className="text-gray-600 hover:text-black">Lost</a></li>
            <li><a href="#" className="text-gray-600 hover:text-black">Report Lost</a></li>
            <li><a href="#" className="text-gray-600 hover:text-black">Found</a></li>
            <li><a href="#" className="text-gray-600 hover:text-black">Report Found</a></li>
            <li><a href="#" className="text-gray-600 hover:text-black">Profile</a></li>
            <li><a href="#" className="text-gray-600 hover:text-black">Sign Out</a></li>
          </ul>
        </nav>
      </header>

      {/* Main Content */}
      <main className="min-h-screen bg-white flex justify-center items-center p-4">
        <div className="w-full max-w-md border-2 border-blue-500 p-6 rounded">
          <h1 className="text-2xl font-bold mb-6 text-center">Report Found Item</h1>
          <form>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Name:</label>
              <input type="text" className="w-full p-2 bg-gray-200 border-none rounded" />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Item:</label>
              <select className="w-full p-2 bg-gray-200 border-none rounded">
                <option value="">Select Item</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Location:</label>
              <select className="w-full p-2 bg-gray-200 border-none rounded">
                <option value="">Select Location</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Date:</label>
              <input type="date" className="w-full p-2 bg-gray-200 border-none rounded" />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Item Description:</label>
              <textarea className="w-full p-2 bg-gray-200 border-none rounded h-20"></textarea>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Upload Photo:</label>
              <div className="w-full p-2 bg-gray-200 border-none rounded flex items-center">
                <span>Upload (click!)</span>
                <input type="file" className="ml-2 hidden" />
              </div>
            </div>
            <div className="flex justify-between">
              <button type="submit" className="bg-black text-white px-4 py-2 rounded">Submit</button>
              <button type="reset" className="bg-gray-300 px-4 py-2 rounded">Reset</button>
            </div>
          </form>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white p-4 border-t flex justify-between text-sm text-gray-600">
        <div>
          <img src="/bag" alt="Footer Logo" className="h-6 mb-2" /> {/* Replace with your bag image */}
          <div>
            <p>Site</p>
            <p><a href="#" className="hover:text-black">Report Lost</a></p>
          </div>
        </div>
        <div>
          <p>Help Support</p>
          <p><a href="#" className="hover:text-black">Terms & Conditions</a></p>
          <p><a href="#" className="hover:text-black">Customer Support</a></p>
        </div>
        <div>
          <p>Links</p>
          <p><a href="#" className="hover:text-black">Facebook</a></p>
          <p><a href="#" className="hover:text-black">LinkedIn</a></p>
        </div>
        <div>
          <p>Contact</p>
          <p>Tel: +1 555-123-4567</p>
          <p>Email: <a href="mailto:talk@projects.wix.com" className="hover:text-black">talk@projects.wix.com</a></p>
        </div>
      </footer>

      <style jsx>{`
        input, select, textarea {
          outline: none;
        }
        .hidden {
          display: none;
        }
      `}</style>
    </div>
  );
}