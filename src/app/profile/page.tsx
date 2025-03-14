// ProfilePage.jsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ProfilePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-100 to-green-50">
      {/* Header */}
      <header className="bg-white p-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 relative">
            <Image 
              src="/logo.png" 
              alt="I Found Logo" 
              layout="fill"
              objectFit="contain"
            />
          </div>
          <h1 className="text-xl font-bold">I Found</h1>
          <span className="text-xs text-gray-500">Lost Items Solution</span>
        </div>
        
        <nav className="hidden md:flex space-x-4">
          <Link href="/" className="hover:text-gray-700">Home</Link>
          <Link href="/lost" className="hover:text-gray-700">Lost</Link>
          <Link href="/report-lost" className="hover:text-gray-700">Report Lost</Link>
          <Link href="/found" className="hover:text-gray-700">Found</Link>
          <Link href="/report-found" className="hover:text-gray-700">Report Found</Link>
          <Link href="/profile" className="font-medium">Profile</Link>
        </nav>
        
        <button className="bg-gray-200 px-4 py-1 rounded hover:bg-gray-300">
          Sign Out
        </button>
      </header>

      {/* Main Content */}
      <main className="container mx-auto p-6 max-w-5xl">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-3xl font-bold mb-8 text-center text-green-800">My Profile</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Left Column: Profile Info */}
            <div className="md:col-span-1 border rounded-lg p-6">
              <div className="flex flex-col items-center mb-6">
                <div className="w-32 h-32 bg-gray-200 rounded-full mb-4 relative overflow-hidden">
                  <Image 
                    src="/profile-placeholder.jpg" 
                    alt="Profile" 
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <h3 className="text-xl font-bold">John Doe</h3>
                <p className="text-gray-600">Member since March 2023</p>
              </div>
              
              <div className="border-t pt-4">
                <h4 className="font-bold mb-2">Contact Information</h4>
                <div className="space-y-2">
                  <p><span className="text-gray-600">Email:</span> john.doe@example.com</p>
                  <p><span className="text-gray-600">Phone:</span> +1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="mt-6">
                <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
                  Edit Profile
                </button>
              </div>
            </div>
            
            {/* Right Column: Activity & Settings */}
            <div className="md:col-span-2">
              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <h3 className="text-xl font-bold mb-4">Activity Summary</h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                    <p className="text-2xl font-bold text-blue-600">3</p>
                    <p className="text-gray-600">Items Lost</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                    <p className="text-2xl font-bold text-green-600">2</p>
                    <p className="text-gray-600">Items Found</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                    <p className="text-2xl font-bold text-purple-600">2</p>
                    <p className="text-gray-600">Recovered</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                    <p className="text-2xl font-bold text-amber-600">1</p>
                    <p className="text-gray-600">Pending</p>
                  </div>
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-4">My Items</h3>
                <div className="bg-white border rounded-lg overflow-hidden">
                  <ul className="divide-y divide-gray-200">
                    <li className="p-4 hover:bg-gray-50">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="font-medium">Black Wallet</p>
                          <p className="text-sm text-gray-600">Lost on March 10, 2025</p>
                        </div>
                        <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Recovered</span>
                      </div>
                    </li>
                    <li className="p-4 hover:bg-gray-50">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="font-medium">Blue Backpack</p>
                          <p className="text-sm text-gray-600">Lost on February 15, 2025</p>
                        </div>
                        <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">Pending</span>
                      </div>
                    </li>
                    <li className="p-4 hover:bg-gray-50">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="font-medium">House Keys</p>
                          <p className="text-sm text-gray-600">Lost on January 5, 2025</p>
                        </div>
                        <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Recovered</span>
                      </div>
                    </li>
                    <li className="p-4 hover:bg-gray-50">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="font-medium">Silver Watch</p>
                          <p className="text-sm text-gray-600">Found on March 5, 2025</p>
                        </div>
                        <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Returned</span>
                      </div>
                    </li>
                    <li className="p-4 hover:bg-gray-50">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="font-medium">Prescription Glasses</p>
                          <p className="text-sm text-gray-600">Found on February 20, 2025</p>
                        </div>
                        <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Returned</span>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="mt-4 text-center">
                  <button className="text-blue-600 hover:text-blue-800">
                    View All Items
                  </button>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-4">Account Settings</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-white border rounded-lg">
                    <div>
                      <p className="font-medium">Email Notifications</p>
                      <p className="text-sm text-gray-600">Receive alerts about item matches</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" value="" className="sr-only peer" checked />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                  
                  <div className="flex justify-between items-center p-4 bg-white border rounded-lg">
                    <div>
                      <p className="font-medium">Two-Factor Authentication</p>
                      <p className="text-sm text-gray-600">Add an extra layer of security</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" value="" className="sr-only peer" />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                  
                  <div className="flex justify-between items-center p-4 bg-white border rounded-lg">
                    <div>
                      <p className="font-medium">Privacy Settings</p>
                      <p className="text-sm text-gray-600">Manage how your information is displayed</p>
                    </div>
                    <button className="text-blue-600 hover:text-blue-800">
                      Manage
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white mt-12 p-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-bold mb-3">Site</h4>
              <ul className="space-y-2">
                <li><Link href="/lost" className="text-gray-600 hover:text-gray-900">Lost</Link></li>
                <li><Link href="/report-lost" className="text-gray-600 hover:text-gray-900">Report Lost</Link></li>
                <li><Link href="/found" className="text-gray-600 hover:text-gray-900">Found</Link></li>
                <li><Link href="/report-found" className="text-gray-600 hover:text-gray-900">Report Found</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-3">Help</h4>
              <ul className="space-y-2">
                <li><Link href="/support" className="text-gray-600 hover:text-gray-900">Customer Support</Link></li>
                <li><Link href="/terms" className="text-gray-600 hover:text-gray-900">Terms & Conditions</Link></li>
                <li><Link href="/privacy" className="text-gray-600 hover:text-gray-900">Privacy Policy</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-3">Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-gray-900">LinkedIn</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Facebook</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">YouTube</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">About Us</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-3">Contact</h4 
              <h4 className="font-bold mb-3">Contact</h4>
              <ul className="space-y-2">
                <li className="text-gray-600">Tel: +44 7145206990</li>
                <li className="text-gray-600">Email: talkprojects@renrolix.com</li>
                <div className="flex space-x-4 mt-4">
                  <a href="#" aria-label="Twitter">
                    <svg className="h-5 w-5 text-gray-600 hover:text-gray-900" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                    </svg>
                  </a>
                  <a href="#" aria-label="Facebook">
                    <svg className="h-5 w-5 text-gray-600 hover:text-gray-900" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
                    </svg>
                  </a>
                  <a href="#" aria-label="Instagram">
                    <svg className="h-5 w-5 text-gray-600 hover:text-gray-900" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
                    </svg>
                  </a>
                  <a href="#" aria-label="GitHub">
                    <svg className="h-5 w-5 text-gray-600 hover:text-gray-900" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                    </svg>
                  </a>
                </div>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 pt-6 border-t text-center">
            <p className="text-sm text-gray-600">© Copyright 2024 Lost and Found<br />All Right Reserved</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ProfilePage;