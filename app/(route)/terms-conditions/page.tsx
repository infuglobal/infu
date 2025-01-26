// "use server" allows us to define server-side logic within the component
export const dynamic = 'force-static';

const TermsPage = () => {
  const content = `
    <h2 class="text-2xl font-semibold text-purple-700 mb-4">Terms and Conditions</h2>
    <p class="text-gray-600 mb-4">
      Welcome to Infinity Fund! These terms and conditions outline the rules and regulations for the use of our platform.
    </p>
    
    <h3 class="text-xl font-semibold text-purple-700 mb-2">1. Introduction</h3>
    <p class="text-gray-600 mb-4">
      By accessing or using our services, you agree to comply with these terms. If you do not agree, please do not use our services.
    </p>
    
    <h3 class="text-xl font-semibold text-purple-700 mb-2">2. User Responsibilities</h3>
    <p class="text-gray-600 mb-4">
      As a user of Infinity Fund, you are responsible for maintaining the confidentiality of your account and for all activities that occur under your account.
    </p>

    <h3 class="text-xl font-semibold text-purple-700 mb-2">3. Service Availability</h3>
    <p class="text-gray-600 mb-4">
      We strive to provide continuous service, but we do not guarantee that our platform will always be available. Service outages may occur for maintenance or other unforeseen issues.
    </p>

    <h3 class="text-xl font-semibold text-purple-700 mb-2">4. Privacy Policy</h3>
    <p class="text-gray-600 mb-4">
      Your privacy is important to us. Please review our <a href="/privacy-policy" class="text-purple-600 underline">Privacy Policy</a> to understand how we collect and use your personal information.
    </p>
    
    <h3 class="text-xl font-semibold text-purple-700 mb-2">5. Amendments to Terms</h3>
    <p class="text-gray-600 mb-4">
      Infinity Fund reserves the right to modify or amend these Terms and Conditions at any time. Please check this page regularly for updates.
    </p>

    <h3 class="text-xl font-semibold text-purple-700 mb-2">6. Contact Information</h3>
    <p class="text-gray-600 mb-4">
      If you have any questions about these terms, please contact us at <a href="mailto:support@infinityfund.com" class="text-purple-600 underline">support@infinityfund.com</a>.
    </p>

    <h2 class="text-2xl font-semibold text-purple-700 mt-12 mb-4">Privacy Policy</h2>
    <p class="text-gray-600 mb-4">
      At Infinity Fund, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal data when you use our platform.
    </p>

    <h3 class="text-xl font-semibold text-purple-700 mb-2">1. Information Collection</h3>
    <p class="text-gray-600 mb-4">
      We collect personal information that you provide when you register for an account, such as your name, email address, and payment details. We also collect non-personally identifiable information through cookies to improve your user experience.
    </p>

    <h3 class="text-xl font-semibold text-purple-700 mb-2">2. Use of Information</h3>
    <p class="text-gray-600 mb-4">
      The information we collect is used to operate, improve, and personalize our platform, communicate with you, and process transactions. We do not share your personal information with third parties except as necessary to provide our services.
    </p>

    <h3 class="text-xl font-semibold text-purple-700 mb-2">3. Data Security</h3>
    <p class="text-gray-600 mb-4">
      We implement reasonable security measures to protect your personal information from unauthorized access, alteration, or disclosure. However, no method of transmission over the internet is 100% secure, and we cannot guarantee complete security.
    </p>

    <h3 class="text-xl font-semibold text-purple-700 mb-2">4. Data Retention</h3>
    <p class="text-gray-600 mb-4">
      We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required by law.
    </p>

    <h3 class="text-xl font-semibold text-purple-700 mb-2">5. Your Rights</h3>
    <p class="text-gray-600 mb-4">
      You have the right to access, update, and delete your personal information. You can also opt out of marketing communications at any time by following the instructions provided in the emails.
    </p>

    <h3 class="text-xl font-semibold text-purple-700 mb-2">6. Changes to This Privacy Policy</h3>
    <p class="text-gray-600 mb-4">
      Infinity Fund reserves the right to update this Privacy Policy at any time. We will notify you of significant changes by posting an updated version on our platform.
    </p>

    <h3 class="text-xl font-semibold text-purple-700 mb-2">7. Contact Information</h3>
    <p class="text-gray-600 mb-4">
      If you have any questions regarding this Privacy Policy or your personal data, please contact us at <a href="mailto:support@infinityfund.com" class="text-purple-600 underline">support@infinityfund.com</a>.
    </p>
  `;

  return (
    <main className="min-h-screen bg-gray-50 py-10 px-5 flex flex-col items-center">
      <div className="max-w-7xl w-full">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
            Terms and Conditions & Privacy Policy
          </h1>
          <p className="text-gray-600 text-lg sm:text-xl">
            Please read our terms and conditions, as well as our privacy policy, carefully before using our platform.
          </p>
        </div>

        {/* Terms and Conditions Content */}
        <div className="bg-white shadow-lg rounded-lg p-8 space-y-8">
          <div
            className="text-gray-600 text-base leading-relaxed"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>

        {/* Decorative Elements */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-800">
            Have more questions?
          </h2>
          <p className="text-gray-600 mt-2">
            Feel free to reach out to our support team for any additional information.
          </p>
          <button
            className="mt-4 px-6 py-3 bg-purple-600 text-white rounded-full font-medium hover:bg-purple-700 transition-colors"
          >
            Contact Us
          </button>
        </div>
      </div>
    </main>
  );
};

export default TermsPage;
