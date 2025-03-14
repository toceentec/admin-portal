import Image from 'next/image';
import Link from 'next/link';
import Layout from '../components/layout';

export default function Home() {
  return (
    <Layout>
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-6xl font-bold mb-4">
            Find & <br />
            Recover <br />
            <span className="text-green-800">With Ease</span>
          </h1>
          <p className="text-gray-600 mb-8">
            Experience effortless recovery with our dedicated item retrieval service.
          </p>
        </div>
        <div className="md:w-1/2 flex flex-col items-center">
          <Link href="/lost" className="w-full max-w-md mb-4 bg-red-400 text-white py-3 px-6 rounded-md text-center flex items-center justify-between">
            <span className="text-xl">Lost</span>
            <Image src="/lost-icon.png" alt="Lost Items" width={30} height={30} />
          </Link>
          <Link href="/found" className="w-full max-w-md mb-8 bg-green-500 text-white py-3 px-6 rounded-md text-center flex items-center justify-between">
            <span className="text-xl">Found</span>
            <Image src="/check-icon.png" alt="Found Items" width={30} height={30} />
          </Link>
          <div className="flex space-x-2 overflow-hidden">
            <div className="relative w-32 h-32 rounded-md overflow-hidden">
              <Image src="/gallery/laptop.jpg" alt="Laptop" layout="fill" objectFit="cover" />
            </div>
            <div className="relative w-32 h-32 rounded-md overflow-hidden">
              <Image src="/gallery/sign.jpg" alt="Sign" layout="fill" objectFit="cover" />
            </div>
            <div className="relative w-32 h-32 rounded-md overflow-hidden">
              <Image src="/gallery/watch.jpg" alt="Watch" layout="fill" objectFit="cover" />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}