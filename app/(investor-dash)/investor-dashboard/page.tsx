'use client'
import { Line } from 'react-chartjs-2';
import { ChartOptions } from 'chart.js'; 
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Register necessary chart elements
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const InvestorDashboard = () => {
  // Mock data for the line chart
  const data = {
    labels: ['January', 'February', 'March', 'April'],
    datasets: [
      {
        label: 'Investment Growth',
        data: [0, 30, 70, 100],
        borderColor: '#4caf50',
        fill: false,
      },
      {
        label: 'Profit Withdrawal',
        data: [0, 20, 50, 80],
        borderColor: '#ff9800',
        fill: false,
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
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-gray-700 text-white p-6">
        <h2 className="text-2xl font-semibold mb-6">Infinity Fund</h2>
        <ul className="space-y-4">
          <li>
            <a href="#" className="text-white hover:text-purple-300">Dashboard</a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-purple-300">Portfolio</a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-purple-300">Investment Pools</a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-purple-300">Risk-Return Analysis</a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-purple-300">Withdraw Profits</a>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8 overflow-y-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Portfolio Summary */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Portfolio Summary</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-green-100 p-4 rounded-lg">
                <h4 className="text-lg font-medium text-green-600">Total Investments</h4>
                <p className="text-2xl font-semibold text-green-800">₹500,000</p>
              </div>
              <div className="bg-blue-100 p-4 rounded-lg">
                <h4 className="text-lg font-medium text-blue-600">Current Profits</h4>
                <p className="text-2xl font-semibold text-blue-800">₹75,000</p>
              </div>
              <div className="bg-purple-100 p-4 rounded-lg">
                <h4 className="text-lg font-medium text-purple-600">Withdrawn Profits</h4>
                <p className="text-2xl font-semibold text-purple-800">₹20,000</p>
              </div>
            </div>
          </div>

          {/* Investment Pools */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Investment Pools</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-orange-100 p-4 rounded-lg">
                <h4 className="text-lg font-medium text-orange-600">₹1 Pool</h4>
                <p className="text-xl text-gray-600">Risk: Low, Return: 5%</p>
              </div>
              <div className="bg-yellow-100 p-4 rounded-lg">
                <h4 className="text-lg font-medium text-yellow-600">₹10 Pool</h4>
                <p className="text-xl text-gray-600">Risk: Medium, Return: 8%</p>
              </div>
              <div className="bg-teal-100 p-4 rounded-lg">
                <h4 className="text-lg font-medium text-teal-600">₹100 Pool</h4>
                <p className="text-xl text-gray-600">Risk: High, Return: 12%</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h3 className="text-xl font-semibold mb-4">Investment Growth vs Profit Withdrawal</h3>
          <Line data={data} options={options} />
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h3 className="text-xl font-semibold mb-4">Profit Withdrawal</h3>
          <p className="text-gray-600 mb-4">
            You can instantly withdraw your profits or the total investment. Choose an option below:
          </p>
          <div className="flex space-x-4">
            <button className="bg-green-600 text-white py-2 px-6 rounded-lg hover:bg-green-700 transition duration-300">
              Withdraw Profits
            </button>
            <button className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-300">
              Withdraw Total Investment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestorDashboard;
