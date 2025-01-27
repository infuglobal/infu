import { FC } from 'react';

const UseToolsEffectively: FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 overflow-y-auto h-screen">
      <h1>Steps to Use Infu&apos;s AI Tools Effectively</h1>
      <ul>
        <li><strong>Set Up Your Preferences:</strong> Log in to your Infu account and define your:
          <ul>
            <li>Risk tolerance (low, medium, high).</li>
            <li>Investment goals (short-term, long-term).</li>
            <li>Preferred industries (e.g., retail, real estate, technology).</li>
          </ul>
        </li>
        <li><strong>Explore Recommendations:</strong> Navigate to the “AI Suggestions” section and review personalized investment opportunities ranked by potential ROI and risk.</li>
        <li><strong>Analyze Opportunities:</strong> Use AI-provided insights to evaluate:
          <ul>
            <li>Historical performance</li>
            <li>Projected returns</li>
            <li>Risk scores</li>
          </ul>
        </li>
        <li><strong>Act on Alerts:</strong> Enable notifications to stay informed about:
          <ul>
            <li>High-performing pools</li>
            <li>Emerging investment trends</li>
            <li>Expiring opportunities</li>
          </ul>
        </li>
        <li><strong>Monitor Your Portfolio:</strong> Visit the “Portfolio Health” section to:
          <ul>
            <li>Track investment performance</li>
            <li>Get diversification suggestions</li>
            <li>Optimize underperforming assets</li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default UseToolsEffectively;