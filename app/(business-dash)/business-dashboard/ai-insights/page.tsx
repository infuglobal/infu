'use client';

import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  RadialLinearScale,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
} from 'chart.js';
import { Line, Bar, Doughnut, PolarArea } from 'react-chartjs-2';

// Register Chart.js elements
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  RadialLinearScale,
  Title,
  Tooltip,
  Legend
);

const AIInsights: React.FC = () => {
  interface ChartData {
    labels: string[];
    datasets: Array<{
      label?: string;
      data: number[];
      borderColor?: string;
      backgroundColor: string | string[];
      tension?: number;
      hoverOffset?: number;
    }>;
  }

  const lineChartData: ChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        label: 'Monthly Revenue (₹)',
        data: [10000, 15000, 20000, 25000, 22000, 30000, 35000],
        borderColor: '#8A2BE2',
        backgroundColor: 'rgba(138, 43, 226, 0.2)',
        tension: 0.4,
      },
      {
        label: 'Monthly Investment (₹)',
        data: [5000, 7000, 8000, 10000, 9000, 12000, 15000],
        borderColor: '#2EBF91',
        backgroundColor: 'rgba(46, 191, 145, 0.2)',
        tension: 0.4,
      },
    ],
  };

  const barChartData: ChartData = {
    labels: ['Product A', 'Product B', 'Product C', 'Product D'],
    datasets: [
      {
        label: 'Sales (₹)',
        data: [40000, 30000, 20000, 15000],
        backgroundColor: ['#8A2BE2', '#2EBF91', '#4682B4', '#FFD700'],
      },
    ],
  };

  const doughnutData: ChartData = {
    labels: ['Marketing', 'Operations', 'Development', 'Miscellaneous'],
    datasets: [
      {
        data: [40, 30, 20, 10],
        backgroundColor: ['#8A2BE2', '#2EBF91', '#4682B4', '#FFD700'],
        hoverOffset: 4,
      },
    ],
  };

  const polarAreaData: ChartData = {
    labels: ['Region A', 'Region B', 'Region C', 'Region D'],
    datasets: [
      {
        data: [120, 150, 100, 80],
        backgroundColor: ['#8A2BE2', '#2EBF91', '#4682B4', '#FFD700'],
        hoverOffset: 6,
      },
    ],
  };

  const lineChartOptions: ChartOptions<'line'> = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels: { color: '#374151' },
      },
      title: {
        display: true,
        text: 'Monthly Trends',
        color: '#111827',
        font: { size: 18 },
      },
    },
  };

  const barChartOptions: ChartOptions<'bar'> = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels: { color: '#374151' },
      },
      title: {
        display: true,
        text: 'Fundings',
        color: '#111827',
        font: { size: 18 },
      },
    },
  };

  const doughnutOptions: ChartOptions<'doughnut'> = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels: { color: '#374151' },
      },
    },
  };

  const polarAreaOptions: ChartOptions<'polarArea'> = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels: { color: '#374151' },
      },
    },
  };

  return (
    <div className="h-screen w-full  text-gray-800 overflow-y-auto pb-10">
      <header className=" border-b border-gray-200 py-6 px-6 shadow-sm">
        <h1 className="text-3xl font-bold text-gray-900">AI Insights</h1>
        <p className="text-sm text-gray-600">
          Advanced metrics and actionable strategies for your business growth.
        </p>
      </header>
      <main className="w-full mx-auto px-6 py-10 space-y-10">
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-bold mb-4">Growth Trends</h3>
            <Line data={lineChartData} options={lineChartOptions} />
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-bold mb-4">Details</h3>
            <Bar data={barChartData} options={barChartOptions} />
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-bold mb-4">Expense Distribution</h3>
            <Doughnut data={doughnutData} options={doughnutOptions} />
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-bold mb-4">Regional Performance</h3>
            <PolarArea data={polarAreaData} options={polarAreaOptions} />
          </div>
        </section>
        {/* Recommendations Section */}
        <section className="bg-gray-50 border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition">
          <h3 className="text-xl font-bold mb-4">Actionable Insights</h3>
          <ul className="list-disc pl-6 space-y-3 text-gray-700">
            {[
              'Allocate 30% of your funds to digital marketing.',
              'Reduce costs by optimizing supply chains.',
              'Expand to high-demand regions for new revenue streams.',
              'Launch a customer loyalty program to retain clients.',
            ].map((insight, index) => (
              <li key={index}>{insight}</li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
};

export default AIInsights;
