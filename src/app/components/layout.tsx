import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FAE9E0' }}>
      <header className="p-4 flex justify-between items-center">
        <div className="flex items-center">
          <Image src="/logo.png" alt="Item Retrieval" width={40} height={40} />
          <h1 className="ml-2 text-xl font-bold">I FOUND</h1>
        </div>
        <nav className="space-x-4">
          <Link href="/">Home</Link>
          <Link href="/lost">Lost</Link>
          <Link href="/report-lost">Report Lost</Link>
          <Link href="/found">Found</Link>
          <Link href="/report-found">Report Found</Link>
          <Link href="/profile">Profile</Link>
          <Link href="/login" className="bg-gray-200 px-4 py-1 rounded-md">Sign Out</Link>
        </nav>
      </header>
      <main className="container mx-auto px-4 py-8">
        {children}
      </main>
      <footer className="p-4 border-t mt-auto">
        <div className="container mx-auto flex flex-wrap justify-between">
          <div className="flex items-center mb-4">
            <Image src="/logo-box.png" alt="Box Logo" width={50} height={50} />
          </div>
          <div className="flex flex-col mb-4">
            <h3 className="font-bold">Site</h3>
            <Link href="/lost">Lost</Link>
            <Link href="/report-lost">Report Lost</Link>
            <Link href="/found">Found</Link>
            <Link href="/report-found">Report Found</Link>
          </div>
          <div className="flex flex-col mb-4">
            <h3 className="font-bold">Help</h3>
            <Link href="/support">Customer Support</Link>
            <Link href="/terms">Terms & Conditions</Link>
            <Link href="/privacy">Privacy Policy</Link>
          </div>
          <div className="flex flex-col mb-4">
            <h3 className="font-bold">Links</h3>
            <Link href="https://linkedin.com">LinkedIn</Link>
            <Link href="https://facebook.com">Facebook</Link>
            <Link href="https://youtube.com">YouTube</Link>
            <Link href="/about">About Us</Link>
          </div>
          <div className="flex flex-col mb-4">
            <h3 className="font-bold">Contact</h3>
            <p>Tel: +84 718520690</p>
            <p>Email: help.projects@emails.com</p>
            <div className="flex space-x-2 mt-2">
              <Link href="#"><span>Twitter</span></Link>
              <Link href="#"><span>Facebook</span></Link>
              <Link href="#"><span>Instagram</span></Link>
              <Link href="#"><span>GitHub</span></Link>
            </div>
          </div>
        </div>
        <div className="text-center mt-4">
          <p>© Copyright 2024 Lost and Found</p>
          <p>All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;