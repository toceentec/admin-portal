import Layout from '../components/layout';

export default function AdminDashboard() {
  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
      
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
          User Management
        </h2>
        <div className="space-y-3">
          <div className="flex justify-between items-center p-2 hover:bg-gray-50 rounded">
            <div>
              <p className="font-medium">Alice Johnson</p>
              <p className="text-sm text-gray-500">alice@example.com</p>
            </div>
            <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">Active</span>
          </div>
          <div className="flex justify-between items-center p-2 hover:bg-gray-50 rounded">
            <div>
              <p className="font-medium">Bob Smith</p>
              <p className="text-sm text-gray-500">bob@example.com</p>
            </div>
            <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm">Inactive</span>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
          </svg>
          Item Management
        </h2>
        <div className="space-y-3">
          <div className="flex justify-between items-center p-2 hover:bg-gray-50 rounded">
            <p className="font-medium">Laptop</p>
            <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm">Lost</span>
          </div>
          <div className="flex justify-between items-center p-2 hover:bg-gray-50 rounded">
            <p className="font-medium">Watch</p>
            <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">Found</span>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          Mailing System
        </h2>
        <div className="space-y-3">
          <div className="p-2 hover:bg-gray-50 rounded">
            <p>Notification sent to Alice Johnson about found wallet.</p>
          </div>
          <div className="p-2 hover:bg-gray-50 rounded">
            <p>Reminder sent to Bob Smith regarding unclaimed item.</p>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
          Statistics & Reports
        </h2>
        <div className="space-y-3">
          <div className="p-3 bg-green-50 rounded-md">
            <p>Your lost backpack has been found!</p>
          </div>
          <div className="p-3 bg-blue-50 rounded-md">
            <p>A new item matching your lost item has been reported.</p>
          </div>
        </div>
      </div>
      
      <div className="flex flex-wrap gap-4">
        <button className="bg-black text-white px-6 py-2 rounded-md">
          View New Lost Item
        </button>
        <button className="bg-white border border-gray-300 px-6 py-2 rounded-md">
          View Found Items
        </button>
        <button className="bg-white border border-gray-300 px-6 py-2 rounded-md">
          Send Notifications To Users
        </button>
        <button className="bg-white border border-gray-300 px-6 py-2 rounded-md">
          Generate Reports
        </button>
      </div>
    </Layout>
  );
}