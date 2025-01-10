import React from "react";
import { FaChartLine, FaMoneyBillWave, FaWallet, FaChartPie, FaShoppingCart } from "react-icons/fa";

const FinanceDashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700 text-white flex flex-col">
      {/* Header */}
      <header className="bg-gray-800 text-white py-4 px-6 flex justify-between items-center shadow-lg">
        <h1 className="text-3xl font-bold tracking-wide text-green-400">StrategiFi</h1>
        <div className="text-sm bg-green-600 py-2 px-4 rounded-full cursor-pointer hover:bg-green-700 transition">
          Profile
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow p-6">
        {/* Welcome Section */}
        <section className="bg-gray-700 text-gray-100 p-8 rounded-lg shadow-xl mb-12 text-center">
          <h2 className="text-2xl font-bold tracking-wider">Welcome Back, User!</h2>
          <p className="text-gray-300 mt-2">Your personalized financial insights are ready.</p>
        </section>

        {/* Dashboard Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Transaction History */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition relative">
            <div className="absolute -top-6 -right-6 bg-green-600 w-12 h-10 flex items-center justify-center rounded-full transform hover:scale-110 transition">
              <FaWallet size={24} />
            </div>
            <h3 className="text-xl font-bold mb-4">Transaction History</h3>
            <p>Jan 12: Grocery - $120</p>
            <p>Jan 13: Gas - $50</p>
            <p>Jan 14: Coffee - $10</p>
            <p>Jan 15: Rent - $1,200</p>
          </div>

          {/* Income */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition relative">
            <div className="absolute -top-6 -right-6 bg-green-600 w-12 h-10 flex items-center justify-center rounded-full transform hover:scale-110 transition">
              <FaMoneyBillWave size={24} />
            </div>
            <h3 className="text-xl font-bold mb-4">Income</h3>
            <p>Total Monthly Income: $7,000</p>
            <p>Salary: $5,500</p>
            <p>Other Income: $1,500</p>
          </div>

          {/* Debt Management */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition relative">
            <div className="absolute -top-6 -right-6 bg-green-600 w-12 h-10 flex items-center justify-center rounded-full transform hover:scale-110 transition">
              <FaShoppingCart size={24} />
            </div>
            <h3 className="text-xl font-bold mb-4">Debt Management</h3>
            <p>Credit Card Balance: $3000</p>
            <p>Loan Balance: $10,000</p>
            <p className="text-green-400 font-bold">Payoff Strategy: Details based off ai...</p>
          </div>

          {/* Spending Insights */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition relative">
            <div className="absolute -top-6 -right-6 bg-green-600 w-12 h-10 flex items-center justify-center rounded-full transform hover:scale-110 transition">
              <FaChartPie size={24} />
            </div>
            <h3 className="text-xl font-bold mb-4">Spending Insights</h3>
            <p>Most Spent: Food & Dining</p>
            <p>Unusual Trend: 30% increase in subscriptions</p>
          </div>

          {/* Investments */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition relative">
            <div className="absolute -top-6 -right-6 bg-green-600 w-12 h-10 flex items-center justify-center rounded-full transform hover:scale-110 transition">
              <FaChartLine size={24} />
            </div>
            <h3 className="text-xl font-bold mb-4">Investments</h3>
            <p>Portfolio Value: $25,000</p>
            <p>Performance: +5%</p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-center py-4">
        <p className="text-gray-400">© 2025 StrategiFi | All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default FinanceDashboard;
