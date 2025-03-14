import Layout from '../components/layout';

export default function UserDashboard() {
  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-8">User Dashboard</h1>
      
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Profile Summary</h2>
        <div className="space-y-2">
          <p><span className="font-medium">Name:</span> John Doe</p>
          <p><span className="font-medium">Email:</span> johndoe@example.com</p>
          <p><span className="font-medium">Phone:</span> +1234567890</p>
          <p><span className="font-medium">Recovery Status:</span> Pending</p>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Lost Items</h2>
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <p>Wallet</p>
            <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-sm">Pending</span>
          </div>
          <div className="flex justify-between items-center">
            <p>Backpack</p>
            <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">Found</span>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Found Items</h2>
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <p>Keys</p>
            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">Unclaimed</span>
          </div>
          <div className="flex justify-between items-center">
            <p>Smartphone</p>
            <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm">Claimed</span>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
          </svg>
          Notifications
        </h2>
        <div className="space-y-4">
          <div className="p-3 bg-green-50 rounded-md">
            <p>Your lost backpack has been found!</p>
          </div>
          <div className="p-3 bg-blue-50 rounded-md">
            <p>A new item matching your lost item has been reported.</p>
          </div>
        </div>
      </div>
      
      <div className="flex space-x-4">
        <button className="bg-black text-white px-6 py-2 rounded-md">
          Report New Lost Item
        </button>
        <button className="bg-white border border-gray-300 px-6 py-2 rounded-md">
          View Past Items
        </button>
      </div>
    </Layout>
  );
}