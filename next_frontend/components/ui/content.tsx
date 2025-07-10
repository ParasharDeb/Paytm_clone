import { CreditCard, Wallet } from "lucide-react"
import List01 from "./list-01"
import List02 from "./list-02"

export default function Content() {
  return (
    <div className="space-y-6">
      {/* Quick Actions */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <button className="bg-white dark:bg-[#0F0F12] rounded-xl p-4 border border-gray-200 dark:border-[#1F1F23] hover:shadow-md transition-shadow">
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-2">
              <CreditCard className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <p className="text-sm font-medium text-gray-900 dark:text-white">Send Money</p>
          </div>
        </button>

        <button className="bg-white dark:bg-[#0F0F12] rounded-xl p-4 border border-gray-200 dark:border-[#1F1F23] hover:shadow-md transition-shadow">
          <div className="text-center">
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-2">
              <Wallet className="w-6 h-6 text-green-600 dark:text-green-400" />
            </div>
            <p className="text-sm font-medium text-gray-900 dark:text-white">Add Money</p>
          </div>
        </button>

        <button className="bg-white dark:bg-[#0F0F12] rounded-xl p-4 border border-gray-200 dark:border-[#1F1F23] hover:shadow-md transition-shadow">
          <div className="text-center">
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-2">
              <CreditCard className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
            <p className="text-sm font-medium text-gray-900 dark:text-white">Pay Bills</p>
          </div>
        </button>

        <button className="bg-white dark:bg-[#0F0F12] rounded-xl p-4 border border-gray-200 dark:border-[#1F1F23] hover:shadow-md transition-shadow">
          <div className="text-center">
            <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center mx-auto mb-2">
              <CreditCard className="w-6 h-6 text-orange-600 dark:text-orange-400" />
            </div>
            <p className="text-sm font-medium text-gray-900 dark:text-white">Recharge</p>
          </div>
        </button>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-[#0F0F12] rounded-xl p-6 flex flex-col border border-gray-200 dark:border-[#1F1F23]">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4 text-left flex items-center gap-2">
            <Wallet className="w-4 h-4 text-zinc-900 dark:text-zinc-50" />
            My Accounts
          </h2>
          <div className="flex-1">
            <List01 className="h-full" />
          </div>
        </div>

        <div className="bg-white dark:bg-[#0F0F12] rounded-xl p-6 flex flex-col border border-gray-200 dark:border-[#1F1F23]">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4 text-left flex items-center gap-2">
            <CreditCard className="w-4 h-4 text-zinc-900 dark:text-zinc-50" />
            Recent Transactions
          </h2>
          <div className="flex-1">
            <List02 className="h-full" />
          </div>
        </div>
      </div>
    </div>
  )
}
