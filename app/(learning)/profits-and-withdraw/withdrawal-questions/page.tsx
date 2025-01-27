import React from "react";

const WithdrawalQuestions = () => {
  return (
    <main className="flex-1 overflow-y-auto bg-white">
      <div className="max-w-5xl mx-auto px-6 py-10">
        {/* Title Section */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-black">
            Common Questions About Withdrawals
          </h1>
        </div>

        {/* FAQs Section */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition mb-8">
          <ul className="list-disc pl-6 space-y-4 text-gray-700">
            <li>
              <strong className="text-purple-600 mr-2">Are there any withdrawal fees? </strong>
              Infu ensures minimal fees for withdrawals, clearly displayed during the transaction process.
            </li>
            <li>
              <strong className="text-purple-600 mr-2">How long do withdrawals take?</strong>
              UPI and wallet withdrawals are instant, while bank transfers may take up to 24 hours to process.
            </li>
            <li>
              <strong className="text-purple-600 mr-2">Can I withdraw before the lock-in period ends?</strong>
              Withdrawals before the lock-in period are not allowed to ensure pool stability and transparency.
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default WithdrawalQuestions;
