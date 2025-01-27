export default function SuccessStories() {
    return (
      <main className="flex-1 overflow-y-auto bg-white">
        <div className="max-w-5xl mx-auto px-6 py-10">
          {/* Title Section */}
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-900">Success Stories</h1>
          </div>
  
          {/* Content Section */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition mb-8">
            <ul className="list-disc list-inside text-gray-700 space-y-6">
              <li>
                <strong>Small Beginnings, Big Impact:</strong> A tea seller in Kolkata raised ₹10,000 through a micro pool and increased daily sales by 30%, earning investors <span className="font-semibold text-purple-500">15% returns</span> within a week.
              </li>
              <li>
                <strong>Real Estate Revolution:</strong> A group of investors pooled ₹50 lakhs into a fractional real estate project, generating <span className="font-semibold text-purple-500">18% annual returns</span>.
              </li>
              <li>
                <strong>Innovative Startup Funding:</strong> A tech startup raised ₹1 crore through a custom pool and doubled investors&apos; contributions in <span className="font-semibold text-purple-500">two years</span>.
              </li>
            </ul>
          </div>
  
          {/* Call to Action */}
          <p className="text-purple-500 font-semibold">
            Ready to create your own success story? <a href="/infu-pools" className="underline hover:text-purple-800">Explore investment opportunities now!</a>
          </p>
        </div>
      </main>
    );
  }
  