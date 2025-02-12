// app/feedback/page.tsx

import FeedbackForm from "../../components/FeedbackForm";

const FeedbackPage = () => {
  return (
    <div className="container mx-auto px-4 pt-8 pb-12 overflow-y-auto h-screen">
      {/* Header Section */}
      
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg p-8 text-white shadow-lg mb-8">
        <h1 className="text-3xl font-bold mb-2">
          Give{" "} <span className="text-yellow-300">Feedback </span>
        </h1>
        <p className="text-md">
        We&apos;re here to help! Share your feedback or reach out for support.
        </p>
      </div>

      {/* Main Content */}
      <main className="p-2">
       
          <FeedbackForm />
        
      </main>
    </div>
  );
};

export default FeedbackPage;