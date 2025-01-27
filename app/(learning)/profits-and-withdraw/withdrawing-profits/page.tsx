import React from "react";

const WithdrawingProfits = () => {
  return (
    <main className="flex-1 overflow-y-auto bg-white">
      <div className="max-w-5xl mx-auto px-6 py-10">
        {/* Title Section */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-black">
            Step 3: Withdrawing Profits
          </h1>
        </div>

        {/* Steps Section */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition mb-8">
          <ol className="list-decimal list-inside text-gray-700 space-y-4">
            <li>
              <strong className="text-purple-600">Check Withdrawal Eligibility:</strong>
              <p className="ml-4">
                Ensure your lock-in period has ended, or that your profits are ready for withdrawal. Navigate to the “Available for Withdrawal” section on the dashboard.
              </p>
            </li>
            <li>
              <strong className="text-purple-600">Initiate Withdrawal:</strong>
              <p className="ml-4">
                Select the investment pool from which you want to withdraw profits. Enter the amount you wish to withdraw.
              </p>
            </li>
            <li>
              <strong className="text-purple-600">Choose Withdrawal Method:</strong>
              <p className="ml-4">
                Available options include:
              </p>
              <ul className="list-disc ml-10">
                <li>Direct transfer to your bank account</li>
                <li>UPI for instant transfers</li>
                <li>Wallet balance for reinvestment</li>
              </ul>
            </li>
            <li>
              <strong className="text-purple-600">Confirm Transaction:</strong>
              <p className="ml-4">
                Review the withdrawal summary and confirm the request. Receive an instant notification once the transfer is completed.
              </p>
            </li>
          </ol>
        </div>
      </div>
    </main>
  );
};

export default WithdrawingProfits;
