'use client';

import { Line } from 'react-chartjs-2';
import { ChartOptions } from 'chart.js';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register necessary chart elements
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const InvestorDashboard = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April'],
    datasets: [
      {
        label: 'Investment Growth',
        data: [0, 50, 75, 100],
        borderColor: '#6B46C1', // Purple accent
        fill: false,
        tension: 0.3,
      },
      {
        label: 'Profit Withdrawal',
        data: [0, 40, 60, 90],
        borderColor: '#F6AD55', // Orange accent
        fill: false,
        tension: 0.3,
      },
    ],
  };

  const options: ChartOptions<'line'> = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Investment Growth vs Profit Withdrawal',
        font: { weight: 'bold', size: 18 },
      },
      tooltip: {
        mode: 'index',
        intersect: false,
      },
    },
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-50 border-r border-gray-200">
        <div className="p-6">
          <h2 className="text-lg font-semibold text-gray-900">Investor Dashboard</h2>
        </div>
        <nav className="px-4">
          <ul className="space-y-4">
            {['Dashboard', 'Portfolio', 'Investment Pools', 'Risk-Return Analysis', 'Withdraw Profits'].map((item, index) => (
              <li key={index}>
                <a
                  href="#"
                  className="block text-sm font-medium text-gray-700 hover:text-purple-500"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto bg-white">
        <div className="max-w-5xl mx-auto px-6 py-10">
          {/* Top Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Portfolio Overview</h3>
              <p className="text-sm text-gray-600 mb-4">
                View your total investments, profits, and overall portfolio performance.
              </p>
              <button className="bg-purple-600 text-white py-2 px-6 rounded-lg hover:bg-purple-700 transition duration-300">
                View Portfolio
              </button>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Investment Pools</h3>
              <p className="text-sm text-gray-600 mb-4">
                Browse available investment pools and manage your contributions.
              </p>
              <button className="bg-purple-600 text-white py-2 px-6 rounded-lg hover:bg-purple-700 transition duration-300">
                View Pools
              </button>
            </div>
          </div>

          {/* Chart Section */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Investment Growth vs Profit Withdrawal
            </h3>
            <Line data={data} options={options} />
          </div>

          {/* Bottom Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Funding Status</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-green-50 border border-green-100 rounded-lg p-4">
                  <h4 className="text-sm font-medium text-green-600">Total Investments</h4>
                  <p className="text-xl font-bold text-green-800">₹500,000</p>
                </div>
                <div className="bg-orange-50 border border-orange-100 rounded-lg p-4">
                  <h4 className="text-sm font-medium text-orange-600">Profits Withdrawn</h4>
                  <p className="text-xl font-bold text-orange-800">₹150,000</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Request Withdrawal</h3>
              <p className="text-sm text-gray-600 mb-4">
                Withdraw your profits or entire investment based on your needs.
              </p>
              <textarea
                placeholder="Enter the amount to withdraw..."
                rows={4}
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm text-sm text-gray-700 focus:outline-none focus:ring focus:ring-purple-200"
              ></textarea>
              <button className="bg-purple-600 text-white py-2 px-6 mt-4 rounded-lg hover:bg-purple-700 transition duration-300">
                Submit Withdrawal Request
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default InvestorDashboard;
