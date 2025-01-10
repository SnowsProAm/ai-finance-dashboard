"use client";

import React, { useState } from "react";

const FinanceDashboard = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [showNav, setShowNav] = useState(false);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    setShowNav(e.clientY < 50); // Show navigation bar when the cursor is near the top
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      className={`min-h-screen ${
        isDarkMode
          ? "bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700 text-white"
          : "bg-gray-100 text-gray-800"
      } flex flex-col`}
    >
      {/* Navigation Bar */}
      {showNav && (
        <nav
          className={`fixed top-0 left-1/2 transform -translate-x-1/2 z-50 py-2 px-4 w-1/4 flex justify-around items-center shadow-lg ${
            isDarkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"
          }`}
        >
          <button className="hover:underline">Main</button>
          <button className="hover:underline">Profile</button>
          <button className="hover:underline">Settings</button>
        </nav>
      )}

      {/* Header */}
      <header
        className={`${
          isDarkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"
        } py-4 px-6 flex justify-between items-center shadow-lg`}
      >
        <h1 className="text-3xl font-bold tracking-wide">StrategiFi</h1>
        <button
          onClick={toggleTheme}
          className={`py-2 px-4 rounded-full cursor-pointer transition-all duration-200 ${
            isDarkMode
              ? "bg-white text-gray-800 hover:bg-green-700 hover:text-white "
              : "bg-gray-800 text-white hover:bg-green-500"
          }`}
        >
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </header>

      {/* Main Content */}
      <main className="flex-grow p-6">
        {/* Search Bar */}
    <div className="mb-6 flex justify-center">
    <input
  type="text"
  placeholder="Search"
  className={`w-1/2 sm:w-1/2 p-2 text-sm rounded-md shadow-md placeholder:text-center ${
    isDarkMode ? "bg-gray-800 text-white" : "bg-gray-200 text-gray-800"
  }`}
/>

</div>


        {/* Dashboard Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {/* Total Balance */}
          <button
            className={`md:col-span-2 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 ${
              isDarkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"
            }`}
          >
            <h3 className="text-lg font-bold">Total Balance</h3>
            <p className="text-3xl font-bold">$18,589.05</p>
          </button>

          {/* Expenses */}
          <button
            className={`md:col-span-2 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 ${
              isDarkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"
            }`}
          >
            <h3 className="text-lg font-bold">Expenses</h3>
            <p className="text-3xl font-bold">$3,456.09</p>
          </button>

          {/* Investing */}
          <button
            className={`md:col-span-2 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 ${
              isDarkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"
            }`}
          >
            <h3 className="text-lg font-bold">Investing</h3>
            <ul className="mt-4">
              <li className="flex justify-between">
                <span>Apple Inc</span>
                <span>32%</span>
              </li>
              <li className="flex justify-between">
                <span>Tesla</span>
                <span>13%</span>
              </li>
              <li className="flex justify-between">
                <span>Bitcoin</span>
                <span>25%</span>
              </li>
            </ul>
          </button>

          {/* Income Graph */}
          <button
            className={`md:col-span-4 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 ${
              isDarkMode ? "bg-gray-800 text-gray-100" : "bg-white text-gray-800"
            }`}
          >
            <h3 className="text-lg font-bold">My Income</h3>
            <p className="text-3xl font-bold text-white-400">$34,589.05</p>
            <div
              className={`mt-4 h-32 rounded-lg shadow-md ${
                isDarkMode ? "bg-gray-700" : "bg-gray-200"
              }`}
            ></div>
          </button>

          {/* Account Insights */}
          <button
            className={`md:col-span-2 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 ${
              isDarkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"
            }`}
          >
            <h3 className="text-lg font-bold">Account Insights</h3>
            <ul className="mt-4">
              <li className="flex justify-between">
                <span>Savings</span>
                <span>32%</span>
              </li>
              <li className="flex justify-between">
                <span>Debts</span>
                <span>13%</span>
              </li>
              <li className="flex justify-between">
                <span>Credits</span>
                <span>23%</span>
              </li>
              <li className="flex justify-between">
                <span>Investments</span>
                <span>54%</span>
              </li>
              <li className="flex justify-between">
                <span>Expenses</span>
                <span>47%</span>
              </li>
            </ul>
          </button>

          {/* Transaction History */}
          <button
            className={`col-span-full p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 ${
              isDarkMode ? "bg-gray-800 text-gray-100" : "bg-white text-gray-800"
            }`}
          >
            <h3 className="text-lg font-bold">Transaction History</h3>
            <ul className="mt-4">
              <li className="flex justify-between border-b py-2">
                <span>Jan 12: Grocery</span>
                <span>$120</span>
              </li>
              <li className="flex justify-between border-b py-2">
                <span>Jan 13: Gas</span>
                <span>$50</span>
              </li>
              <li className="flex justify-between border-b py-2">
                <span>Jan 14: Coffee</span>
                <span>$10</span>
              </li>
              <li className="flex justify-between border-b py-2">
                <span>Jan 15: Rent</span>
                <span>$1,200</span>
              </li>
            </ul>
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer
        className={`${
          isDarkMode ? "bg-gray-800 text-gray-400" : "bg-white text-gray-600"
        } text-center py-6`}
      >
        <p>© 2025 StratFi | All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default FinanceDashboard;
