export default function TypesOfInfuPools() {
    return (
      <main className="flex-1 overflow-y-auto bg-white">
        <div className="max-w-5xl mx-auto px-6 py-10">
          {/* Title Section */}
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-900">Types of Infu Pools</h1>
          </div>
  
          {/* Introduction Section */}
          <p className="text-gray-700 mb-6">
            Infu pools come in various types to cater to different investment preferences:
          </p>
  
          {/* Pools List */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition mb-8">
            <ul className="list-disc list-inside text-gray-700 space-y-6">
              <li>
                <strong className="text-purple-600">Micro Pools (₹1 - ₹100):</strong> Ideal for beginners or those looking to test the platform. Commonly used for high-frequency daily profit businesses like tea vendors and vegetable sellers.
              </li>
              <li>
                <strong className="text-purple-600">Medium Pools (₹100 - ₹10,000):</strong> Suitable for moderate investors seeking balanced risk and return. Used for projects like small retail shops and crowdfunding innovative startups.
              </li>
              <li>
                <strong className="text-purple-600">Macro Pools (₹10,000 - ₹1,00,000):</strong> Focused on high-potential, medium-term investments like real estate and medium-scale manufacturing projects.
              </li>
              <li>
                <strong className="text-purple-600">Custom Pools (Above ₹1,00,000):</strong> Tailored for large institutional investors or high-net-worth individuals.
              </li>
            </ul>
          </div>
  
          {/* Call to Action */}
          <p className="text-purple-500 font-semibold">
            Ready to choose your pool? <a href="/infu-pools" className="underline hover:text-purple-800">Explore Infu Pools</a> and find the best option for you!
          </p>
        </div>
      </main>
    );
  }
  