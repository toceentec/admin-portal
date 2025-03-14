import Layout from '../components/layout';
import { useState } from 'react';
import Link from 'next/link';

export default function ItemDetail() {
  const [item, setItem] = useState({
    id: "ID12345",
    name: "Blue Backpack",
    category: "Accessories",
    dateFound: "2025-03-10",
    location: "Main Library, 2nd Floor",
    description: "Blue Jansport backpack with math textbook and notebook inside. Has a small keychain with a robot figure attached to the zipper.",
    image: "/sample-backpack.jpg",
    status: "found",
    reportedBy: "John Doe",
    contactMethod: "email",
    reportDate: "2025-03-11"
  });

  const [showContact, setShowContact] = useState(false);
  const [claimMessage, setClaimMessage] = useState("");

  const handleClaim = (e) => {
    e.preventDefault();
    alert("Your claim has been submitted. The item reporter will be notified.");
    setClaimMessage("");
    setShowContact(false);
  };

  return (
    <Layout>
      <div className="p-6 max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-amber-800">Item Details</h1>
          <Link href="/browse" className="text-blue-600 hover:underline">← Back to Browse</Link>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {/* Item Image */}
            <div className="p-6 flex items-center justify-center bg-gray-50">
              <div className="relative w-full max-w-md aspect-square bg-gray-200 rounded-md overflow-hidden">
                <div className="absolute top-0 left-0 bg-amber-600 text-white px-3 py-1 uppercase text-sm font-bold">
                  {item.status}
                </div>
                {/* Replace with actual image in production */}
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  <svg className="w-24 h-24" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                </div>
              </div>
            </div>

            {/* Item Details */}
            <div className="p-6 border-l">
              <h2 className="text-2xl font-bold mb-4">{item.name}</h2>
              
              <div className="space-y-4">
                <div className="flex flex-col">
                  <span className="text-gray-500 text-sm">Category</span>
                  <span className="font-medium">{item.category}</span>
                </div>
                
                <div className="flex flex-col">
                  <span className="text-gray-500 text-sm">Date {item.status === 'found' ? 'Found' : 'Lost'}</span>
                  <span className="font-medium">{new Date(item.dateFound).toLocaleDateString()}</span>
                </div>
                
                <div className="flex flex-col">
                  <span className="text-gray-500 text-sm">Location</span>
                  <span className="font-medium">{item.location}</span>
                </div>
                
                <div className="flex flex-col">
                  <span className="text-gray-500 text-sm">Description</span>
                  <p className="text-gray-800">{item.description}</p>
                </div>
                
                <div className="flex flex-col">
                  <span className="text-gray-500 text-sm">Item ID</span>
                  <span className="font-medium">{item.id}</span>
                </div>
                
                <div className="flex flex-col">
                  <span className="text-gray-500 text-sm">Status</span>
                  <span className="inline-block px-3 py-1 bg-amber-100 text-amber-800 rounded-full font-medium capitalize">
                    {item.status}
                  </span>
                </div>
              </div>
              
              <div className="mt-8 space-y-4">
                {!showContact ? (
                  <button 
                    onClick={() => setShowContact(true)}
                    className="w-full py-3 bg-green-500 hover:bg-green-600 text-white rounded-md transition duration-300"
                  >
                    Claim This Item
                  </button>
                ) : (
                  <form onSubmit={handleClaim} className="border rounded-md p-4 bg-gray-50">
                    <h3 className="font-bold mb-2">Claim This Item</h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Please provide some specific details about this item to verify your ownership.
                    </p>
                    <textarea
                      value={claimMessage}
                      onChange={(e) => setClaimMessage(e.target.value)}
                      className="w-full p-3 border rounded-md mb-4"
                      rows="4"
                      placeholder="Describe unique details about this item that only the owner would know..."
                      required
                    ></textarea>
                    <div className="flex space-x-2">
                      <button 
                        type="submit"
                        className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-md transition duration-300"
                      >
                        Submit Claim
                      </button>
                      <button 
                        type="button"
                        onClick={() => setShowContact(false)}
                        className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-md transition duration-300"
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                )}
                
                <Link href="/report-found" className="block w-full py-3 text-center bg-blue-600 hover:bg-blue-700 text-white rounded-md transition duration-300">
                  Report Similar Item
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}