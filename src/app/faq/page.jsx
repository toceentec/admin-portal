import Layout from '../components/layout';
import Link from 'next/link';

export default function HowItWorks() {
  const steps = [
    {
      title: "Report a Lost or Found Item",
      description: "Fill out a simple form with details about the item you've lost or found. Add photos if available to help with identification.",
      icon: (
        <svg className="w-12 h-12 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
        </svg>
      )
    },
    {
      title: "Automatic Matching System",
      description: "Our system automatically compares lost and found reports to find potential matches based on descriptions, locations, and timing.",
      icon: (
        <svg className="w-12 h-12 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
        </svg>
      )
    },
    {
      title: "Receive Notifications",
      description: "Get notified immediately when a potential match is found for your item or when someone claims an item you've reported.",
      icon: (
        <svg className="w-12 h-12 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
        </svg>
      )
    },
    {
      title: "Verify Ownership",
      description: "Answer verification questions to prove ownership of claimed items, ensuring lost possessions are returned to their rightful owners.",
      icon: (
        <svg className="w-12 h-12 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
        </svg>
      )
    },
    {
      title: "Arrange Return",
      description: "Once ownership is confirmed, coordinate with the finder to arrange for the safe return of your lost item through our secure messaging system.",
      icon: (
        <svg className="w-12 h-12 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"></path>
        </svg>
      )
    }
  ];

  const faqItems = [
    {
      question: "Is this service free to use?",
      answer: "Yes, our lost and found platform is completely free for all university students, faculty, and staff members."
    },
    {
      question: "How long do items remain in the system?",
      answer: "Items remain in our system for 90 days. After this period, unclaimed found items are typically donated or disposed of according to university policy."
    },
    {
      question: "Can I search for items without creating an account?",
      answer: "Yes, you can browse and search for items without an account. However, to report a lost or found item or to claim an item, you'll need to register with your university credentials."
    },
    {
      question: "What should I do if I find an item but cannot identify its owner?",
      answer: "Report the found item through our platform with as much detail as possible. If it's a high-value item like a wallet or electronics, you can also submit it to the campus security office."
    },
    {
      question: "How does the verification process work?",
      answer: "When someone claims an item you've found, they'll need to provide specific details about the item that only the owner would know. You'll review these details and decide if they match your found item."
    }
  ];

  return (
    <Layout>
      <div className="max-w-6xl mx-auto p-6">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-amber-800 mb-4">How Our Lost and Found System Works</h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We've created a simple, efficient process to help you find and recover your lost items. 
            Our platform connects people who have lost items with those who have found them, making item recovery quick and easy.
          </p>
        </div>

        {/* Process Steps */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">The Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.slice(0, 3).map((step, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="flex justify-center mb-4">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            {steps.slice(3).map((step, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="flex justify-center mb-4">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqItems.map((item, index) => (
              <div key={index} className="border-b pb-4 last:border-b-0">
                <h3 className="text-lg font-bold mb-2">{item.question}</h3>
                <p className="text-gray-600">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-amber-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-gray-600 mb-6">
            Join our community and start reporting lost or found items today.
          </p>
          <div className="flex justify-center space-x-4">
            <Link 
              href="/report-lost" 
              className="px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white rounded-md transition duration-300"
            >
              Report Lost Item
            </Link>
            <Link 
              href="/report-found" 
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition duration-300"
            >
              Report Found Item
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}