'use client'
import { Line } from 'react-chartjs-2';
import { ChartOptions } from 'chart.js'; 
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Register necessary chart elements
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const BusinessDashboard = () => {
  // Mock data for the line chart
  const data = {
    labels: ['January', 'February', 'March', 'April'],
    datasets: [
      {
        label: 'Funding Progress',
        data: [0, 50, 75, 100],
        borderColor: '#4caf50',
        fill: false,
      },
      {
        label: 'Projected Growth',
        data: [0, 40, 70, 90],
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
        text: 'Funding Progress vs. Projected Growth',
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
            <a href="#" className="text-white hover:text-purple-300">Funding Requests</a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-purple-300">AI Insights</a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-purple-300">Funding Status</a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-purple-300">Feedback</a>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8 overflow-y-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Funding Requests</h3>
            <p className="text-gray-600 mb-4">
              Submit your business idea, funding amount, and PAN/registration details to get started.
            </p>
            <button className="bg-purple-600 text-white py-2 px-6 rounded-lg hover:bg-purple-700 transition duration-300">
              Submit Request
            </button>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4">AI Insights</h3>
            <p className="text-gray-600 mb-4">
              Based on your sales reports and customer feedback, here are some growth strategies:
            </p>
            <ul className="list-disc ml-6 space-y-2">
              <li>Expand your marketing efforts in the first quarter.</li>
              <li>Focus on customer retention through loyalty programs.</li>
              <li>Invest in product development for enhanced customer satisfaction.</li>
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h3 className="text-xl font-semibold mb-4">Funding Progress vs Projected Growth</h3>
          <Line data={data} options={options} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Funding Status</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-green-100 p-4 rounded-lg">
                <h4 className="text-lg font-medium text-green-600">Total Contributions</h4>
                <p className="text-2xl font-semibold text-green-800">Rs 50,000</p>
              </div>
              <div className="bg-orange-100 p-4 rounded-lg">
                <h4 className="text-lg font-medium text-orange-600">Fund Disbursed</h4>
                <p className="text-2xl font-semibold text-orange-800">Rs 30,000</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Feedback Section</h3>
            <p className="text-gray-600 mb-4">
              Receive insights or recommendations from investors to improve your business strategy.
            </p>
            <textarea
              placeholder="Write your feedback request here..."
              rows={4}
              className="w-full p-4 bg-white border border-gray-300 rounded-lg shadow-sm mb-4"
            ></textarea>
            <button className="bg-purple-600 text-white py-2 px-6 rounded-lg hover:bg-purple-700 transition duration-300">
              Send Feedback Request
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessDashboard;
