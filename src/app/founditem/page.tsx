import Link from "next/link";

export default function FoundItems() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* HEADER */}
      <header className="flex items-center justify-between px-8 py-4 border-b border-gray-200">
        {/* Left: Logo */}
        <div className="flex items-center space-x-2">
          {/* Replace /bag.png with your actual bag image path */}
          <img src="/bag.png" alt="Logo" className="w-10 h-10" />
          <span className="font-bold text-xl">I Found</span>
        </div>

        {/* Right: Nav Menu */}
        <nav className="space-x-6 text-gray-700">
          <Link href="/">Home</Link>
          <Link href="/lost">Lost</Link>
          <Link href="/report-lost">Report Lost</Link>
          <Link href="/found">Found</Link>
          <Link href="/report-found">Report Found</Link>
          <Link href="/profile">Profile</Link>
          <button className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">
            Sign Out
          </button>
        </nav>
      </header>

      {/* MAIN CONTENT */}
      <main className="flex-grow container mx-auto px-4">
        {/* Title */}
        <h1 className="text-4xl font-bold text-center mt-8 mb-6">Found Items</h1>

        {/* Search Bar & "Report" Button */}
        <div className="flex items-center justify-center mb-8">
          {/* Search Input */}
          <div className="relative">
            <input
              type="text"
              placeholder="Item Name"
              className="border border-gray-300 rounded-full py-2 pl-10 pr-4 w-64
                         focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {/* Search Icon (Optional) */}
            <span className="absolute left-3 top-2 text-gray-400">
              {/* Example SVG icon (replace with your preferred icon) */}
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M11 5a7 7 0 011 13.94V21a1 1 0 01-2 0v-2.06A7 7 0 1111 5z"
                ></path>
              </svg>
            </span>
          </div>

          {/* Report Button */}
          <button className="ml-4 flex items-center bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded">
            Report
            {/* Replace /bag.png with your bag or box icon path */}
            <img src="/bag.png" alt="Report icon" className="h-5 w-5 ml-2" />
          </button>
        </div>

        {/* Found Item Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Card 1 */}
          <div className="border border-gray-200 rounded p-4">
            <div className="flex items-center justify-between mb-2">
              <h2 className="font-semibold">Item Name</h2>
              <span className="text-gray-500 text-sm">Date</span>
            </div>
            <div className="bg-gray-100 h-32 flex items-center justify-center mb-2">
              {/* Placeholder geometric shapes (SVG) */}
              <svg
                className="w-16 h-16 text-gray-300"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <rect x="2" y="2" width="8" height="8" />
                <circle cx="16" cy="16" r="4" />
                <path d="M12 4l4 4-4 4" />
              </svg>
            </div>
            <p className="font-semibold">Title</p>
            <p className="text-sm text-gray-500">Location</p>
            <p className="text-sm text-gray-500 mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <button className="mt-4 bg-purple-500 text-white py-1 px-4 rounded hover:bg-purple-600">
              Contact
            </button>
          </div>

          {/* Card 2 */}
          <div className="border border-gray-200 rounded p-4">
            <div className="flex items-center justify-between mb-2">
              <h2 className="font-semibold">Item Name</h2>
              <span className="text-gray-500 text-sm">Date</span>
            </div>
            <div className="bg-gray-100 h-32 flex items-center justify-center mb-2">
              <svg
                className="w-16 h-16 text-gray-300"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <rect x="2" y="2" width="8" height="8" />
                <circle cx="16" cy="16" r="4" />
                <path d="M12 4l4 4-4 4" />
              </svg>
            </div>
            <p className="font-semibold">Title</p>
            <p className="text-sm text-gray-500">Location</p>
            <p className="text-sm text-gray-500 mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <button className="mt-4 bg-purple-500 text-white py-1 px-4 rounded hover:bg-purple-600">
              Contact
            </button>
          </div>

          {/* Card 3 */}
          <div className="border border-gray-200 rounded p-4">
            <div className="flex items-center justify-between mb-2">
              <h2 className="font-semibold">Item Name</h2>
              <span className="text-gray-500 text-sm">Date</span>
            </div>
            <div className="bg-gray-100 h-32 flex items-center justify-center mb-2">
              <svg
                className="w-16 h-16 text-gray-300"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <rect x="2" y="2" width="8" height="8" />
                <circle cx="16" cy="16" r="4" />
                <path d="M12 4l4 4-4 4" />
              </svg>
            </div>
            <p className="font-semibold">Title</p>
            <p className="text-sm text-gray-500">Location</p>
            <p className="text-sm text-gray-500 mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <button className="mt-4 bg-purple-500 text-white py-1 px-4 rounded hover:bg-purple-600">
              Contact
            </button>
          </div>

          {/* Card 4 */}
          <div className="border border-gray-200 rounded p-4">
            <div className="flex items-center justify-between mb-2">
              <h2 className="font-semibold">Item Name</h2>
              <span className="text-gray-500 text-sm">Date</span>
            </div>
            <div className="bg-gray-100 h-32 flex items-center justify-center mb-2">
              <svg
                className="w-16 h-16 text-gray-300"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <rect x="2" y="2" width="8" height="8" />
                <circle cx="16" cy="16" r="4" />
                <path d="M12 4l4 4-4 4" />
              </svg>
            </div>
            <p className="font-semibold">Title</p>
            <p className="text-sm text-gray-500">Location</p>
            <p className="text-sm text-gray-500 mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <button className="mt-4 bg-purple-500 text-white py-1 px-4 rounded hover:bg-purple-600">
              Contact
            </button>
          </div>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="bg-gray-100 mt-8">
        <div className="max-w-6xl mx-auto py-8 px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1 */}
          <div>
            <h3 className="font-bold mb-2">Site</h3>
            <ul className="space-y-1 text-gray-600">
              <li>Home</li>
              <li>Lost</li>
              <li>Found</li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="font-bold mb-2">Help</h3>
            <ul className="space-y-1 text-gray-600">
              <li>Customer Support</li>
              <li>Terms &amp; Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="font-bold mb-2">Links</h3>
            <ul className="space-y-1 text-gray-600">
              <li>LinkedIn</li>
              <li>Facebook</li>
              <li>Twitter</li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="font-bold mb-2">Contact</h3>
            <ul className="space-y-1 text-gray-600">
              <li>Tel: +234 706 556 100</li>
              <li>Email: example@herein.com</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 py-4 text-center text-sm text-gray-600">
          © Copyright 2025 Lost And Found All Right Reserved
        </div>
      </footer>
    </div>
  );
}
