import Image from 'next/image';
import Link from 'next/link';

export default function Register() {
  return (
    <div className="min-h-screen flex" style={{ backgroundColor: '#FAE9E0' }}>
      <div className="flex-1 p-8 flex items-center justify-center">
        <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
          <div className="mb-4">
            <div className="flex items-center mb-6">
              <Image src="/logo.png" alt="Item Retrieval" width={30} height={30} />
            </div>
            <h2 className="text-xl font-semibold mb-6">Register</h2>
          </div>
          <form>
            <div className="mb-4">
              <label className="block mb-1">Name</label>
              <input
                type="text"
                className="w-full p-2 border rounded bg-gray-100"
              />
            </div>
            
            <div className="mb-4">
              <label className="block mb-1">Gender</label>
              <select className="w-full p-2 border rounded bg-gray-100">
                <option value="other">other</option>
                <option value="male">male</option>
                <option value="female">female</option>
              </select>
            </div>
            
            <div className="mb-4">
              <label className="block mb-1">Register Number</label>
              <input
                type="text"
                className="w-full p-2 border rounded bg-gray-100"
              />
            </div>
            
            <div className="mb-4">
              <label className="block mb-1">Faculty</label>
              <select className="w-full p-2 border rounded bg-gray-100">
                <option value="faculty">Faculty</option>
                <option value="engineering">Engineering</option>
                <option value="science">Science</option>
                <option value="arts">Arts</option>
              </select>
            </div>
            
            <div className="mb-4">
              <label className="block mb-1">Phone Number</label>
              <input
                type="tel"
                className="w-full p-2 border rounded bg-gray-100"
              />
            </div>
            
            <div className="mb-4">
              <label className="block mb-1">User Name</label>
              <input
                type="text"
                className="w-full p-2 border rounded bg-gray-100"
              />
            </div>
            
            <div className="mb-4">
              <label className="block mb-1">Password</label>
              <div className="relative">
                <input
                  type="password"
                  className="w-full p-2 border rounded bg-gray-100"
                  value="••••••••••"
                />
                <button type="button" className="absolute right-2 top-2">
                  <Image src="/eye-icon.png" alt="Show" width={20} height={20} />
                </button>
              </div>
            </div>
            
            <div className="mb-6">
              <label className="block mb-1">Confirm Password</label>
              <div className="relative">
                <input
                  type="password"
                  className="w-full p-2 border rounded bg-gray-100"
                  value="••••••••••"
                />
                <button type="button" className="absolute right-2 top-2">
                  <Image src="/eye-icon.png" alt="Show" width={20} height={20} />
                </button>
              </div>
            </div>
            
            <button
              type="submit"
              className="w-full bg-gray-200 py-2 px-4 rounded mb-4"
            >
              Submit
            </button>
            
            <div className="text-center">
              <span>Already have an account? </span>
              <Link href="/login" className="text-blue-600">
                Sign in
              </Link>
            </div>
          </form>
        </div>
      </div>
      <div className="w-1/2 hidden lg:block relative">
        <div className="absolute inset-0">
          <Image 
            src="/laptop-bg.jpg" 
            alt="Welcome" 
            layout="fill" 
            objectFit="cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-black bg-opacity-30 p-6 text-white text-center max-w-md rounded">
              <h2 className="text-xl mb-4">Welcome to Our Item Retrieval Website!</h2>
              <p className="mb-4">
                We're excited to help you find and recover lost items. Easily report lost belongings, search for found items, and connect with others. Our user-friendly platform aims to reunite you with your lost possessions quickly and efficiently.
              </p>
              <p className="mb-2">
                Thank you for choosing our service. If you need assistance, feel free to contact us.
              </p>
              <p>Happy searching and best of luck!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}