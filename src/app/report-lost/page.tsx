import Layout from '../components/layout';
import { useState } from 'react';

export default function ReportLostItem() {
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    date: '',
    time: '',
    location: '',
    description: '',
    contactMethod: 'email',
    contactInfo: '',
  });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // Handle form submission (would connect to backend in real application)
    console.log('Form submitted:', formData);
    alert('Your lost item has been reported successfully!');
    // Reset form or redirect
  };

  return (
    <Layout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Report Lost Item</h1>
        <p className="text-gray-600">Please provide details about the item you've lost.</p>
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-6">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block mb-2 font-medium">Item Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border rounded-md"
                placeholder="e.g., Smartphone, Wallet, Keys"
                required
              />
            </div>
            
            <div>
              <label className="block mb-2 font-medium">Category</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full p-3 border rounded-md"
                required
              >
                <option value="">Select a category</option>
                <option value="Electronics">Electronics</option>
                <option value="Personal">Personal Items</option>
                <option value="Accessories">Accessories</option>
                <option value="Documents">Documents</option>
                <option value="Other">Other</option>
              </select>
            </div>
            
            <div>
              <label className="block mb-2 font-medium">Date Lost</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full p-3 border rounded-md"
                required
              />
            </div>
            
            <div>
              <label className="block mb-2 font-medium">Approximate Time</label>
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                className="w-full p-3 border rounded-md"
              />
            </div>
            
            <div>
              <label className="block mb-2 font-medium">Location</label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="w-full p-3 border rounded-md"
                placeholder="Where did you last see the item?"
                required
              />
            </div>
            
            <div>
              <label className="block mb-2 font-medium">Preferred Contact Method</label>
              <select
                name="contactMethod"
                value={formData.contactMethod}
                onChange={handleChange}
                className="w-full p-3 border rounded-md"
                required
              >
                <option value="email">Email</option>
                <option value="phone">Phone</option>
                <option value="inApp">In-App Notification</option>
              </select>
            </div>
            
            <div>
              <label className="block mb-2 font-medium">Contact Information</label>
              <input
                type="text"
                name="contactInfo"
                value={formData.contactInfo}
                onChange={handleChange}
                className="w-full p-3 border rounded-md"
                placeholder="Email address or phone number"
                required
              />
            </div>
            
            <div className="md:col-span-2">
              <label className="block mb-2 font-medium">Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="w-full p-3 border rounded-md h-32"
                placeholder="Please provide a detailed description of the item including color, brand, distinguishing features, etc."
                required
              />
            </div>
            
            <div className="md:col-span-2">
              <label className="block mb-2 font-medium">Upload Image (Optional)</label>
              <input
                type="file"
                className="w-full p-3 border rounded-md"
                accept="image/*"
              />
              <p className="text-sm text-gray-500 mt-1">
                Adding an image will help others identify your item more easily.
              </p>
            </div>
          </div>
          
          <div className="flex items-center mb-6">
            <input
              type="checkbox"
              id="termsCheck"
              className="mr-2"
              required
            />
            <label htmlFor="termsCheck">
              I confirm that all information provided is accurate to the best of my knowledge.
            </label>
          </div>
          
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-red-500 text-white px-8 py-3 rounded-md hover:bg-red-600 transition-colors"
            >
              Submit Report
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
}