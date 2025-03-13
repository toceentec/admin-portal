import Link from "next/link";

export default function Signup() {
  return (
    <div className="min-h-screen flex">
      {/* Left Side (Image) */}
      <div
        className="w-2/3 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://source.unsplash.com/featured/?laptop,workspace)",
        }}
      ></div>

      {/* Right Side (Sign Up Form) */}
      <div className="w-1/3 flex flex-col justify-center p-10 bg-white">
        <h2 className="text-3xl font-bold mb-2 text-gray-800">Sign Up</h2>
        <p className="text-gray-500 mb-6">
          Create your Gachart Account. It’s free and always will be.
        </p>

        <form className="space-y-4">
          {/* First & Last Name */}
          <div className="flex space-x-2">
            <input
              type="text"
              placeholder="First name"
              required
              className="w-1/2 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="text"
              placeholder="Last name"
              required
              className="w-1/2 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Phone */}
          <div>
            <input
              type="tel"
              placeholder="Enter Phone number"
              required
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Email */}
          <div>
            <input
              type="email"
              placeholder="Email"
              required
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Password */}
          <div>
            <input
              type="password"
              placeholder="Password"
              required
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Checkbox */}
          <div className="text-sm flex items-start">
            <input type="checkbox" required className="mt-1 mr-2" />
            <p className="text-gray-600">
              By clicking Sign Up, you agree to our{" "}
              <a href="#" className="text-blue-500 underline">
                Terms
              </a>{" "}
              and that you have read our{" "}
              <a href="#" className="text-blue-500 underline">
                Data Policy
              </a>
              , including our{" "}
              <a href="#" className="text-blue-500 underline">
                Cookie Use
              </a>
              .
            </p>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors"
          >
            NEXT
          </button>
        </form>

        {/* Link to Login Page */}
        <p className="mt-4 text-center text-gray-600">
          Already have an account?{" "}
          <Link href="/login" className="text-blue-500 underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
