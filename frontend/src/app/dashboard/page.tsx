"use client";

import withAuth from "@/hocs/withAuth";
import {
  RESUME_SECTIONS,
  REQUIRED_SECTIONS,
  OPTIONAL_SECTIONS,
  getSectionsByOrder
} from "@/app/dashboard/constants";

const Dashboard = () => {
  const orderedSections = getSectionsByOrder();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Dashboard</h1>

        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">
            Welcome to your Dashboard
          </h2>
          <p className="text-gray-600 mb-4">
            This is a protected route. You can manage your resume sections here.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Required Sections */}
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-3">
                Required Sections
              </h3>
              <div className="space-y-2">
                {REQUIRED_SECTIONS.map((section) => (
                  <div
                    key={section.id}
                    className="flex items-center p-3 bg-blue-50 rounded-lg"
                  >
                    <span className="text-2xl mr-3">{section.icon}</span>
                    <div>
                      <p className="font-medium text-gray-900">
                        {section.title}
                      </p>
                      <p className="text-sm text-gray-600">
                        {section.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Optional Sections */}
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-3">
                Optional Sections
              </h3>
              <div className="space-y-2 max-h-64 overflow-y-auto">
                {OPTIONAL_SECTIONS.map((section) => (
                  <div
                    key={section.id}
                    className="flex items-center p-3 bg-gray-50 rounded-lg"
                  >
                    <span className="text-2xl mr-3">{section.icon}</span>
                    <div>
                      <p className="font-medium text-gray-900">
                        {section.title}
                      </p>
                      <p className="text-sm text-gray-600">
                        {section.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              Total sections available: {RESUME_SECTIONS.length} | Required:{" "}
              {REQUIRED_SECTIONS.length} | Optional: {OPTIONAL_SECTIONS.length}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withAuth(Dashboard);
