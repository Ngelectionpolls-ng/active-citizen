export default function Campaignuccess() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 text-center">
        <div className="bg-white p-8 rounded-lg shadow">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-8 h-8 text-green-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Fundraiser Created Successfully!
          </h2>
          <p className="text-gray-600 mb-6">
            Your fundraiser has been created and is now live. Share it with your network to start
            receiving Campaign.
          </p>
          <div className="space-y-4">
            <button className="w-full bg-primary text-primary-foreground px-4 py-2 rounded-lg">
              View Your Fundraiser
            </button>
            <button className="w-full border border-gray-300 px-4 py-2 rounded-lg">
              Share Fundraiser
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}