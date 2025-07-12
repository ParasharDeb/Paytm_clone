import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function LandingPage() {
  const [dark, setDark] = useState(() => {
    // Persist theme in localStorage
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <div className="min-h-screen bg-white dark:bg-black flex flex-col transition-colors duration-300">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-4 bg-white dark:bg-black shadow">
        <div className="text-2xl font-bold text-black dark:text-white">Paytm Clone</div>
        <div className="flex items-center gap-4">
          <button
            onClick={() => setDark((d) => !d)}
            className="border rounded px-3 py-1 text-sm text-black dark:text-white border-black dark:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition"
            aria-label="Toggle dark mode"
          >
            {dark ? "Light Mode" : "Dark Mode"}
          </button>
          <Link to="/signin" className="text-black dark:text-white font-medium hover:underline">Sign In</Link>
          <Link to="/signup" className="bg-black dark:bg-white text-white dark:text-black px-4 py-2 rounded hover:bg-gray-800 dark:hover:bg-gray-200 transition">Sign Up</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-1 flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-black dark:text-white mb-4">
          Welcome to Paytm Clone
        </h1>
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-xl">
          Experience seamless money transfers, instant payments, and secure digital wallet features. Fast, easy, and reliable—just like the real thing!
        </p>
        <Link
          to="/signup"
          className="bg-black dark:bg-white text-white dark:text-black px-8 py-3 rounded-lg text-lg font-semibold shadow hover:bg-gray-800 dark:hover:bg-gray-200 transition"
        >
          Get Started
        </Link>
      </section>

      {/* Features Section */}
      <section className="bg-white dark:bg-black py-12 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-4xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center">
            <div className="bg-gray-200 dark:bg-gray-800 p-4 rounded-full mb-4">
              <svg className="w-8 h-8 text-black dark:text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M12 8v4l3 3" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="12" cy="12" r="10" />
              </svg>
            </div>
            <h3 className="font-bold text-lg mb-2 text-black dark:text-white">Instant Transfers</h3>
            <p className="text-gray-700 dark:text-gray-300 text-center">Send and receive money instantly to anyone, anytime.</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-gray-200 dark:bg-gray-800 p-4 rounded-full mb-4">
              <svg className="w-8 h-8 text-black dark:text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M17 9V7a5 5 0 00-10 0v2" />
                <rect x="5" y="9" width="14" height="10" rx="2" />
              </svg>
            </div>
            <h3 className="font-bold text-lg mb-2 text-black dark:text-white">Secure Wallet</h3>
            <p className="text-gray-700 dark:text-gray-300 text-center">Your money is safe with industry-standard security and encryption.</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-gray-200 dark:bg-gray-800 p-4 rounded-full mb-4">
              <svg className="w-8 h-8 text-black dark:text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M3 10h18M9 16h6" />
                <rect x="3" y="6" width="18" height="12" rx="2" />
              </svg>
            </div>
            <h3 className="font-bold text-lg mb-2 text-black dark:text-white">Easy Payments</h3>
            <p className="text-gray-700 dark:text-gray-300 text-center">Pay bills, recharge, and shop online with just a few clicks.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-gray-500 dark:text-gray-400 py-4 mt-auto">
        &copy; {new Date().getFullYear()} Paytm Clone. All rights reserved.
      </footer>
    </div>
  );
}