import { ChartBarIcon, Cog6ToothIcon, CircleStackIcon } from "@heroicons/react/24/outline";

const Tools: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-blue-700 mb-6">
          Our Tools
        </h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Powerful solutions designed to help you generate leads, optimize sales, and integrate seamlessly with your business.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Tool 1 */}
          <div className="bg-white shadow-lg rounded-xl p-8 hover:shadow-xl transition flex flex-col items-center">
            <ChartBarIcon className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">AI Sales Pipeline</h3>
            <p className="text-gray-600 text-sm text-center">
              Automate and optimize your sales funnel with AI-driven insights.
            </p>
          </div>

          {/* Tool 2 */}
          <div className="bg-white shadow-lg rounded-xl p-8 hover:shadow-xl transition flex flex-col items-center">
            <CircleStackIcon className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Lead Analytics</h3>
            <p className="text-gray-600 text-sm text-center">
              Track, analyze, and improve lead performance with real-time data.
            </p>
          </div>

          {/* Tool 3 */}
          <div className="bg-white shadow-lg rounded-xl p-8 hover:shadow-xl transition flex flex-col items-center">
            <Cog6ToothIcon className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">CRM Integrations</h3>
            <p className="text-gray-600 text-sm text-center">
              Seamlessly connect with your favorite CRM platforms for efficiency.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tools;