// app/feedback/page.tsx

import FeedbackForm from "@/app/(business-dash)/components/FeedbackForm";


const FeedbackPage = () => {
  return (
    <div className="container mx-auto px-4 pt-8 pb-12 overflow-y-auto h-screen">
      {/* Header Section */}
      
      <div className="flex flex-col md:flex-row justify-between items-center bg-gradient-to-r from-[#1E1E2E] to-[#312E81] rounded-lg p-6 md:p-8 text-white shadow-lg mb-8 space-y-4 md:space-y-0">
        <div className="text-center md:text-left">
          <h1 className="text-3xl font-bold mb-1">
            Give <span className="text-sky-300">Feedback</span>
          </h1>
          <p className="text-md mt-2">
          We&apos;re here to help! Share your feedback or reach out for support.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <main className="p-2">
       
          <FeedbackForm />
        
      </main>
    </div>
  );
};

export default FeedbackPage;