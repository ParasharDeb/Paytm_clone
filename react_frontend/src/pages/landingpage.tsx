import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex flex-col">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-4 bg-white shadow">
        <div className="text-2xl font-bold text-blue-600">Banana Pay</div>
        <div>
          <Link to="/signin" className="text-blue-600 font-medium hover:underline mr-4">Sign In</Link>
          <Link to="/signup" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">Sign Up</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-1 flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-700 mb-4">
          Welcome to Banana Pay
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-xl">
          Experience seamless money transfers, instant payments, and secure digital wallet features. Fast, easy, and reliable—just like the real thing!
        </p>
        <Link
          to="/signup"
          className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold shadow hover:bg-blue-700 transition"
        >
          Get Started
        </Link>
      </section>

      {/* Features Section */}
      <section className="bg-white py-12">
        <div className="max-w-4xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center">
            <div className="bg-blue-100 p-4 rounded-full mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M12 8v4l3 3" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="12" cy="12" r="10" />
              </svg>
            </div>
            <h3 className="font-bold text-lg mb-2">Instant Transfers</h3>
            <p className="text-gray-600 text-center">Send and receive money instantly to anyone, anytime.</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-blue-100 p-4 rounded-full mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M17 9V7a5 5 0 00-10 0v2" />
                <rect x="5" y="9" width="14" height="10" rx="2" />
              </svg>
            </div>
            <h3 className="font-bold text-lg mb-2">Secure Wallet</h3>
            <p className="text-gray-600 text-center">Your money is safe with industry-standard security and encryption.</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-blue-100 p-4 rounded-full mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M3 10h18M9 16h6" />
                <rect x="3" y="6" width="18" height="12" rx="2" />
              </svg>
            </div>
            <h3 className="font-bold text-lg mb-2">Easy Payments</h3>
            <p className="text-gray-600 text-center">Pay bills, recharge, and shop online with just a few clicks.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-gray-500 py-4 mt-auto">
        &copy; {new Date().getFullYear()} Paytm Clone. All rights reserved.
      </footer>
    </div>
  );
}