import Layout from '../components/layout';
import { useState } from 'react';
import Image from 'next/image';

export default function LostItems() {
  const [searchTerm, setSearchTerm] = useState('');
  
  // Sample data for demonstration
  const lostItems = [
    { id: 1, name: 'Laptop', category: 'Electronics', location: 'Library', date: '2024-03-10', image: '/gallery/laptop.jpg' },
    { id: 2, name: 'Wallet', category: 'Personal', location: 'Cafeteria', date: '2024-03-12', image: '/gallery/wallet.jpg' },
    { id: 3, name: 'Backpack', category: 'Accessories', location: 'Classroom B4', date: '2024-03-09', image: '/gallery/backpack.jpg' },
    { id: 4, name: 'Watch', category: 'Accessories', location: 'Gym', date: '2024-03-11', image: '/gallery/watch.jpg' },
  ];
  
  // Filter items based on search term
  const filteredItems = lostItems.filter(item => 
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Layout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Lost Items</h1>
        <p className="text-gray-600">Browse items that have been reported as lost.</p>
      </div>
      
      <div className="mb-8">
        <div className="flex gap-4">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search by name, category, or location..."
              className="w-full p-3 border rounded-md"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button className="bg-blue-500 text-white px-6 py-3 rounded-md">
            Search
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map(item => (
          <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-48">
              <Image 
                src={item.image} 
                alt={item.name}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
              <div className="space-y-1 text-sm mb-4">
                <p><span className="font-medium">Category:</span> {item.category}</p>
                <p><span className="font-medium">Location:</span> {item.location}</p>
                <p><span className="font-medium">Date:</span> {new Date(item.date).toLocaleDateString()}</p>
              </div>
              <button className="w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition-colors">
                I Found This
              </button>
            </div>
          </div>
        ))}
      </div>
      
      {filteredItems.length === 0 && (
        <div className="text-center py-12">
          <h3 className="text-xl font-medium mb-2">No items found</h3>
          <p className="text-gray-600">Try adjusting your search or check back later.</p>
        </div>
      )}
      
      <div className="mt-8 text-center">
        <button className="bg-black text-white px-8 py-3 rounded-md">
          Report a Lost Item
        </button>
      </div>
    </Layout>
  );
}