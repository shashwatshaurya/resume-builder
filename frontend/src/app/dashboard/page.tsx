"use client";

import {
  RESUME_SECTIONS,
  REQUIRED_SECTIONS,
  OPTIONAL_SECTIONS,
  getSectionsByOrder
} from "@/app/dashboard/constants";

const Dashboard = () => {
  const orderedSections = getSectionsByOrder();

  return (
    <div
      className="min-h-screen transition-all duration-200"
      style={{ backgroundColor: "var(--background-secondary)" }}
    >
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1
            className="text-3xl font-bold"
            style={{ color: "var(--text-primary)" }}
          >
            Dashboard
          </h1>
          <button
            className="px-4 py-2 rounded-lg font-medium transition-all duration-200 hover-bg-primary"
            style={{
              backgroundColor: "var(--primary-color)",
              color: "var(--text-inverse)"
            }}
          >
            Create Resume
          </button>
        </div>

        <div
          className="rounded-lg shadow-md p-6 mb-6 border transition-all duration-200"
          style={{
            backgroundColor: "var(--surface)",
            borderColor: "var(--border)",
            boxShadow: "0 4px 6px var(--shadow)"
          }}
        >
          <h2
            className="text-xl font-semibold mb-4"
            style={{ color: "var(--text-primary)" }}
          >
            Welcome to your Dashboard
          </h2>
          <p className="mb-4" style={{ color: "var(--text-secondary)" }}>
            This is a protected route. You can manage your resume sections here.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Required Sections */}
            <div>
              <h3
                className="text-lg font-medium mb-3"
                style={{ color: "var(--text-primary)" }}
              >
                Required Sections
              </h3>
              <div className="space-y-2">
                {REQUIRED_SECTIONS.map((section) => (
                  <div
                    key={section.id}
                    className="flex items-center p-3 rounded-lg border transition-all duration-200"
                    style={{
                      backgroundColor: "var(--primary-light)",
                      borderColor: "var(--primary-color)50"
                    }}
                  >
                    <span className="text-2xl mr-3">{section.icon}</span>
                    <div>
                      <p
                        className="font-medium"
                        style={{ color: "var(--text-primary)" }}
                      >
                        {section.title}
                      </p>
                      <p
                        className="text-sm"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        {section.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Optional Sections */}
            <div>
              <h3
                className="text-lg font-medium mb-3"
                style={{ color: "var(--text-primary)" }}
              >
                Optional Sections
              </h3>
              <div className="space-y-2 max-h-64 overflow-y-auto">
                {OPTIONAL_SECTIONS.map((section) => (
                  <div
                    key={section.id}
                    className="flex items-center p-3 rounded-lg border cursor-pointer transition-all duration-200 hover-bg-surface-secondary"
                    style={{
                      backgroundColor: "var(--surface-secondary)",
                      borderColor: "var(--border)"
                    }}
                  >
                    <span className="text-2xl mr-3">{section.icon}</span>
                    <div>
                      <p
                        className="font-medium"
                        style={{ color: "var(--text-primary)" }}
                      >
                        {section.title}
                      </p>
                      <p
                        className="text-sm"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        {section.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div
            className="mt-6 pt-4 border-t"
            style={{ borderTopColor: "var(--border)" }}
          >
            <p className="text-sm" style={{ color: "var(--text-tertiary)" }}>
              Total sections available: {RESUME_SECTIONS.length} | Required:{" "}
              {REQUIRED_SECTIONS.length} | Optional: {OPTIONAL_SECTIONS.length}
            </p>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div
            className="p-6 rounded-lg shadow-md border transition-all duration-200"
            style={{
              backgroundColor: "var(--surface)",
              borderColor: "var(--border)",
              boxShadow: "0 4px 6px var(--shadow)"
            }}
          >
            <div className="flex items-center justify-between mb-4">
              <h3
                className="text-lg font-semibold"
                style={{ color: "var(--text-primary)" }}
              >
                Recent Resumes
              </h3>
              <span className="text-2xl">📄</span>
            </div>
            <p
              className="text-sm mb-4"
              style={{ color: "var(--text-secondary)" }}
            >
              Access your recently created resumes
            </p>
            <button
              className="font-medium text-sm transition-colors hover-opacity"
              style={{ color: "var(--primary-color)" }}
            >
              View All →
            </button>
          </div>

          <div
            className="p-6 rounded-lg shadow-md border transition-all duration-200"
            style={{
              backgroundColor: "var(--surface)",
              borderColor: "var(--border)",
              boxShadow: "0 4px 6px var(--shadow)"
            }}
          >
            <div className="flex items-center justify-between mb-4">
              <h3
                className="text-lg font-semibold"
                style={{ color: "var(--text-primary)" }}
              >
                Templates
              </h3>
              <span className="text-2xl">🎨</span>
            </div>
            <p
              className="text-sm mb-4"
              style={{ color: "var(--text-secondary)" }}
            >
              Browse professional resume templates
            </p>
            <button
              className="font-medium text-sm transition-colors hover-opacity"
              style={{ color: "var(--primary-color)" }}
            >
              Browse →
            </button>
          </div>

          <div
            className="p-6 rounded-lg shadow-md border transition-all duration-200"
            style={{
              backgroundColor: "var(--surface)",
              borderColor: "var(--border)",
              boxShadow: "0 4px 6px var(--shadow)"
            }}
          >
            <div className="flex items-center justify-between mb-4">
              <h3
                className="text-lg font-semibold"
                style={{ color: "var(--text-primary)" }}
              >
                Settings
              </h3>
              <span className="text-2xl">⚙️</span>
            </div>
            <p
              className="text-sm mb-4"
              style={{ color: "var(--text-secondary)" }}
            >
              Manage your account preferences
            </p>
            <button
              className="font-medium text-sm transition-colors hover-opacity"
              style={{ color: "var(--primary-color)" }}
            >
              Configure →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
