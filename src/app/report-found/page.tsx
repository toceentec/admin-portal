import Layout from '../components/layout';
import { useState } from 'react';

export default function ReportFoundItem() {
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    date: '',
    time: '',
    location: '',
    description: '',
    currentLocation: '',
    contactMethod: 'email',
    contactInfo: '',
    image: null
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: { target: { files: any[]; }; }) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({ ...prev, image: e.target.files[0] }));
    }
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // In a real application, you would upload the form data to your API
      // For example:
      // const formDataToSend = new FormData();
      // Object.keys(formData).forEach(key => {
      //   formDataToSend.append(key, formData[key]);
      // });
      // const response = await fetch('/api/report-found-item', {
      //   method: 'POST',
      //   body: formDataToSend,
      // });

      // For now, we'll just log the data and show a success message
      console.log('Form submitted:', formData);
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSubmitSuccess(true);
      // Reset form after submission
      setFormData({
        name: '',
        category: '',
        date: '',
        time: '',
        location: '',
        description: '',
        currentLocation: '',
        contactMethod: 'email',
        contactInfo: '',
        image: null
      });
      
      // Reset file input
      const fileInput = document.querySelector('input[type="file"]');
      if (fileInput) fileInput.value = '';
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting your form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Report Found Item</h1>
        <p className="text-gray-600">Please provide details about the item you've found.</p>
      </div>
      
      {submitSuccess ? (
        <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-6 rounded">
          <p className="font-medium">Thank you for reporting a found item!</p>
          <p>Your submission has been received. The owner will be notified if they have reported this item as lost.</p>
          <button 
            onClick={() => setSubmitSuccess(false)} 
            className="mt-4 bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded transition duration-300"
          >
            Report Another Item
          </button>
        </div>
      ) : (
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
                <label className="block mb-2 font-medium">Date Found</label>
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
                <label className="block mb-2 font-medium">Found Location</label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-md"
                  placeholder="Where did you find the item?"
                  required
                />
              </div>
              
              <div>
                <label className="block mb-2 font-medium">Current Location</label>
                <input
                  type="text"
                  name="currentLocation"
                  value={formData.currentLocation}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-md"
                  placeholder="Where is the item now?"
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
                  name="image"
                  onChange={handleFileChange}
                  className="w-full p-3 border rounded-md"
                  accept="image/*"
                />
                <p className="text-sm text-gray-500 mt-1">
                  Adding a clear image will help identify the item more easily
                </p>
              </div>
            </div>
            
            <div className="flex justify-end space-x-4">
              <button
                type="button"
                onClick={() => {
                  if (confirm('Are you sure you want to clear the form?')) {
                    setFormData({
                      name: '',
                      category: '',
                      date: '',
                      time: '',
                      location: '',
                      description: '',
                      currentLocation: '',
                      contactMethod: 'email',
                      contactInfo: '',
                      image: null
                    });
                    const fileInput = document.querySelector('input[type="file"]');
                    if (fileInput) fileInput.value = '';
                  }
                }}
                className="px-6 py-3 bg-gray-200 hover:bg-gray-300 rounded-md transition duration-300"
              >
                Clear Form
              </button>
              
              <button
                type="submit"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition duration-300 flex items-center"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Submitting...
                  </>
                ) : (
                  'Submit Report'
                )}
              </button>
            </div>
          </form>
        </div>
      )}
    </Layout>
  );
}