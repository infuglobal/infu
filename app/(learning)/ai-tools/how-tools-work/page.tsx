import { FC } from 'react';

const HowToolsWork: FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 overflow-y-auto h-screen">
      <h1>How Infu&apos;s AI Tools Work</h1>
      <p>Infu&apos;s AI analyzes vast amounts of data from multiple sources, including:</p>
      <ul>
        <li><strong>Historical Performance:</strong> Tracks the success of previous investments and similar businesses.</li>
        <li><strong>Market Trends:</strong> Identifies opportunities in rapidly growing industries or sectors.</li>
        <li><strong>Risk Assessment:</strong> Evaluates risk levels based on financial metrics and market conditions.</li>
        <li><strong>Investor Behavior:</strong> Learns from your investment patterns to tailor recommendations.</li>
      </ul>
    </div>
  );
};

export default HowToolsWork;