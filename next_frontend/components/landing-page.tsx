"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  Shield,
  Zap,
  Smartphone,
  CreditCard,
  Users,
  Star,
  Menu,
  X,
  Wallet,
  Send,
  Receipt,
  QrCode,
  ArrowUpRight,
  ArrowDownLeft,
} from "lucide-react"
import Link from "next/link"
import { ThemeToggle } from "./theme-toggle"

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const features = [
    {
      icon: Shield,
      title: "Bank-Level Security",
      description: "Your money and data are protected with advanced encryption and security measures.",
    },
    {
      icon: Zap,
      title: "Instant Transfers",
      description: "Send and receive money instantly with our lightning-fast payment system.",
    },
    {
      icon: Smartphone,
      title: "Mobile First",
      description: "Designed for mobile with a seamless experience across all devices.",
    },
    {
      icon: CreditCard,
      title: "Multiple Payment Options",
      description: "Link bank accounts, cards, and use UPI for flexible payment options.",
    },
    {
      icon: Users,
      title: "Split Bills",
      description: "Easily split bills with friends and family with our smart splitting feature.",
    },
    {
      icon: Receipt,
      title: "Bill Payments",
      description: "Pay all your bills in one place - electricity, water, mobile, and more.",
    },
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Small Business Owner",
      content:
        "bananapay has revolutionized how I handle payments for my business. It's fast, secure, and incredibly user-friendly.",
      rating: 5,
    },
    {
      name: "Mike Chen",
      role: "Freelancer",
      content: "The instant transfer feature is a game-changer. I can receive payments from clients immediately.",
      rating: 5,
    },
    {
      name: "Emily Davis",
      role: "Student",
      content: "Perfect for splitting bills with roommates. The interface is so intuitive and modern.",
      rating: 5,
    },
  ]

  const stats = [
    { number: "10M+", label: "Active Users" },
    { number: "₹500Cr+", label: "Transactions" },
    { number: "99.9%", label: "Uptime" },
    { number: "24/7", label: "Support" },
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-[#0F0F12]">
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/80 dark:bg-[#0F0F12]/80 backdrop-blur-md border-b border-gray-200 dark:border-[#1F1F23]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-zinc-900 dark:bg-zinc-50 rounded-lg flex items-center justify-center">
                <Wallet className="w-5 h-5 text-zinc-50 dark:text-zinc-900" />
              </div>
              <span className="text-lg font-semibold text-gray-900 dark:text-white">Bananapay</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#features"
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors text-sm"
              >
                Features
              </a>
              <a
                href="#testimonials"
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors text-sm"
              >
                Reviews
              </a>
              <a
                href="#pricing"
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors text-sm"
              >
                Pricing
              </a>
              <ThemeToggle />
              <Link href="/dashboard">
                <Button className="bg-zinc-900 dark:bg-zinc-50 text-zinc-50 dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-zinc-200">
                  Get Started
                </Button>
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-2">
              <ThemeToggle />
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-600 dark:text-gray-300">
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden bg-white dark:bg-[#0F0F12] border-t border-gray-200 dark:border-[#1F1F23]">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <a href="#features" className="block px-3 py-2 text-gray-600 dark:text-gray-300 text-sm">
                  Features
                </a>
                <a href="#testimonials" className="block px-3 py-2 text-gray-600 dark:text-gray-300 text-sm">
                  Reviews
                </a>
                <a href="#pricing" className="block px-3 py-2 text-gray-600 dark:text-gray-300 text-sm">
                  Pricing
                </a>
                <Link href="/dashboard" className="block px-3 py-2">
                  <Button className="w-full bg-zinc-900 dark:bg-zinc-50 text-zinc-50 dark:text-zinc-900">
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              The Future of
              <span className="text-gray-900 dark:text-white"> Digital Payments</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              Send money, pay bills, and manage your finances with the most secure and user-friendly digital wallet.
              Join millions who trust bananapay for their daily transactions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/dashboard">
                <Button
                  size="lg"
                  className="bg-zinc-900 dark:bg-zinc-50 text-zinc-50 dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-zinc-200 text-lg px-8 py-3 cursor-pointer"
                >
                  Start Using Bananapay
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-3 border-gray-200 dark:border-[#1F1F23] bg-transparent"
              >
                Watch Demo
              </Button>
            </div>
          </div>

          {/* Hero Dashboard Preview */}
          <div className="mt-16 relative">
            <div className="bg-white dark:bg-[#0F0F12] rounded-xl border border-gray-200 dark:border-[#1F1F23] p-6 shadow-sm">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {[
                  { icon: Send, label: "Send Money", color: "bg-zinc-100 dark:bg-zinc-800" },
                  { icon: Wallet, label: "Add Money", color: "bg-zinc-100 dark:bg-zinc-800" },
                  { icon: Receipt, label: "Pay Bills", color: "bg-zinc-100 dark:bg-zinc-800" },
                  { icon: QrCode, label: "QR Pay", color: "bg-zinc-100 dark:bg-zinc-800" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="text-center p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-[#1F1F23] transition-colors"
                  >
                    <div
                      className={`w-12 h-12 ${item.color} rounded-full flex items-center justify-center mx-auto mb-2`}
                    >
                      <item.icon className="w-6 h-6 text-zinc-900 dark:text-zinc-100" />
                    </div>
                    <p className="text-sm font-medium text-gray-700 dark:text-gray-300">{item.label}</p>
                  </div>
                ))}
              </div>
              <div className="text-center border-t border-gray-200 dark:border-[#1F1F23] pt-6">
                <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">Total Balance</p>
                <p className="text-2xl font-semibold text-gray-900 dark:text-white">₹25,430.50</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gray-50 dark:bg-[#1F1F23]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">{stat.number}</div>
                <div className="text-gray-600 dark:text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Why Choose bananpay?</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Experience the perfect blend of security, speed, and simplicity in digital payments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white dark:bg-[#0F0F12] rounded-xl border border-gray-200 dark:border-[#1F1F23] p-6 hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-zinc-100 dark:bg-zinc-800 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-zinc-900 dark:text-zinc-100" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gray-50 dark:bg-[#1F1F23] px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">What Our Users Say</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Join thousands of satisfied customers who trust Bananapay
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white dark:bg-[#0F0F12] rounded-xl border border-gray-200 dark:border-[#1F1F23] p-6"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">"{testimonial.content}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-zinc-100 dark:bg-zinc-800 rounded-full flex items-center justify-center">
                    <span className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white text-sm">{testimonial.name}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transaction Preview Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              See Your Money in Action
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Track every transaction with detailed history and insights
            </p>
          </div>

          <div className="bg-white dark:bg-[#0F0F12] rounded-xl border border-gray-200 dark:border-[#1F1F23] p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
                Recent Activity
                <span className="text-xs font-normal text-gray-600 dark:text-gray-400 ml-1">(23 transactions)</span>
              </h3>
              <span className="text-xs text-gray-600 dark:text-gray-400">This Month</span>
            </div>

            <div className="space-y-3">
              {[
                {
                  title: "Money sent to John Doe",
                  amount: "$250.00",
                  type: "outgoing",
                  time: "Today, 2:45 PM",
                  icon: ArrowUpRight,
                },
                {
                  title: "Money received from Sarah",
                  amount: "$150.00",
                  type: "incoming",
                  time: "Today, 1:30 PM",
                  icon: ArrowDownLeft,
                },
                {
                  title: "Electricity Bill Payment",
                  amount: "$85.50",
                  type: "outgoing",
                  time: "Yesterday, 6:20 PM",
                  icon: Receipt,
                },
              ].map((transaction, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-[#1F1F23] transition-colors"
                >
                  <div className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700">
                    <transaction.icon className="w-4 h-4 text-zinc-900 dark:text-zinc-100" />
                  </div>
                  <div className="flex-1 flex items-center justify-between min-w-0">
                    <div>
                      <h4 className="text-xs font-medium text-gray-900 dark:text-white">{transaction.title}</h4>
                      <p className="text-xs text-gray-600 dark:text-gray-400">{transaction.time}</p>
                    </div>
                    <span
                      className={`text-xs font-medium ${
                        transaction.type === "incoming"
                          ? "text-emerald-600 dark:text-emerald-400"
                          : "text-red-600 dark:text-red-400"
                      }`}
                    >
                      {transaction.type === "incoming" ? "+" : "-"}
                      {transaction.amount}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-[#1F1F23]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Ready to Transform Your Payments?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Join millions of users who have made the switch to smarter, faster, and more secure payments.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/dashboard">
              <Button
                size="lg"
                className="bg-zinc-900 dark:bg-zinc-50 text-zinc-50 dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-zinc-200 text-lg px-8 py-3"
              >
                Get Started Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 py-3 border-gray-200 dark:border-[#1F1F23] bg-transparent"
            >
              Contact Sales
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white dark:bg-[#0F0F12] border-t border-gray-200 dark:border-[#1F1F23] py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-zinc-900 dark:bg-zinc-50 rounded-lg flex items-center justify-center">
                  <Wallet className="w-5 h-5 text-zinc-50 dark:text-zinc-900" />
                </div>
                <span className="text-lg font-semibold text-gray-900 dark:text-white">bananapay</span>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm">The future of digital payments, today.</p>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-gray-900 dark:text-white text-sm">Product</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li>
                  <a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors text-sm">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors text-sm">
                    Security
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors text-sm">
                    API
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors text-sm">
                    Pricing
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-gray-900 dark:text-white text-sm">Company</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li>
                  <a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors text-sm">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors text-sm">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors text-sm">
                    Press
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors text-sm">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-gray-900 dark:text-white text-sm">Support</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li>
                  <a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors text-sm">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors text-sm">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors text-sm">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors text-sm">
                    Status
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-200 dark:border-[#1F1F23] mt-8 pt-8 text-center">
            <p className="text-gray-600 dark:text-gray-400 text-sm">&copy; 2024 Bananapay. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
