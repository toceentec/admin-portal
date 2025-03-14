import Image from 'next/image';
import Link from 'next/link';

export default function Login() {
  return (
    <><div className="min-h-screen flex" style={{ backgroundColor: '#FAE9E0' }}>
      <div className="flex-1 flex flex-col">
        <div className="p-4">
          <div className="flex items-center">
            <Image src="/logo.png" alt="Item Retrieval" width={40} height={40} />
            <h1 className="ml-2 text-xl font-bold">I FOUND</h1>
          </div>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <div className="relative w-full max-w-lg h-96">
            <Image
              src="/laptop-bg.jpg"
              alt="Welcome"
              layout="fill"
              objectFit="cover" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-black bg-opacity-30 p-6 text-white text-center max-w-sm rounded">
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
        <footer className="p-4 text-center">
          <div className="flex justify-center space-x-4 mb-2">
            <Link href="/help">Help</Link>
            <Link href="/support">Customer Support</Link>
            <Link href="/terms">Terms & Conditions</Link>
            <Link href="/privacy">Privacy Policy</Link>
          </div>
          <p>© Copyright 2024 Lost and Found</p>
          <p>All Rights Reserved</p>
        </></div>
    </div><div className="w-96 flex items-center justify-center p-8">
        <div className="w-full bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
          <form>
            <div className="mb-4">
              <label className="block mb-2">User Name</label>
              <input
                type="text"
                className="w-full p-2 border rounded" />
            </div>
            <div className="mb-6">
              <label className="block mb-2">Password</label>
              <div className="relative">
                <input
                  type="password"
                  className="w-full p-2 border rounded"
                  value="••••••••••" />
                <button type="button" className="absolute right-2 top-2">
                  <Image src="/eye-icon.png" alt="Show" width={20} height={20} />
                </button>
              </div>
            </div>
            <div className="flex justify-between gap-4 mb-4">
              <button
                type="submit"
                className="flex-1 bg-gray-800 text-white py-2 px-4 rounded"
              >
                Sign In
              </button>
              <Link href="/register" className="flex-1">
                <button
                  type="button"
                  className="w-full bg-gray-200 py-2 px-4 rounded"
                >
                  Sign Up
                </button>
              </Link>
            </div>
            <div className="text-center">
              <Link href="/forgot-password" className="text-sm">
                Forgot Password?
              </Link>
            </div>
          </form>
        </div>
      </div></>
    </div>
  );
}