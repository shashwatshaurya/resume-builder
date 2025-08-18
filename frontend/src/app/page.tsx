"use client";

import Link from "next/link";

const Home = () => {
  return (
    <div
      className="min-h-screen transition-all duration-200"
      style={{
        background: `linear-gradient(to bottom right, var(--gradient-from), var(--gradient-to))`
      }}
    >
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1
            className="text-5xl md:text-6xl font-bold mb-6"
            style={{ color: "var(--text-primary)" }}
          >
            Build Your Perfect
            <span className="block" style={{ color: "var(--primary-color)" }}>
              Resume
            </span>
          </h1>
          <p
            className="text-xl mb-8 max-w-2xl mx-auto"
            style={{ color: "var(--text-secondary)" }}
          >
            Create professional resumes with our easy-to-use builder. Choose
            from beautiful templates and land your dream job.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/dashboard"
              className="px-8 py-3 rounded-lg font-semibold transition-all duration-200 hover-bg-primary"
              style={{
                backgroundColor: "var(--primary-color)",
                color: "var(--text-inverse)"
              }}
            >
              Get Started
            </Link>
            <Link
              href="/login"
              className="px-8 py-3 rounded-lg font-semibold border transition-all duration-200 hover-bg-surface"
              style={{
                backgroundColor: "var(--surface)",
                color: "var(--text-primary)",
                borderColor: "var(--border)"
              }}
            >
              Sign In
            </Link>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            className="p-6 rounded-lg shadow-md border transition-all duration-200"
            style={{
              backgroundColor: "var(--surface)",
              borderColor: "var(--border)",
              boxShadow: "0 4px 6px var(--shadow)"
            }}
          >
            <div className="mb-4" style={{ color: "var(--primary-color)" }}>
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <h3
              className="text-xl font-semibold mb-2"
              style={{ color: "var(--text-primary)" }}
            >
              Professional Templates
            </h3>
            <p style={{ color: "var(--text-secondary)" }}>
              Choose from a variety of professionally designed templates that
              make you stand out.
            </p>
          </div>

          <div
            className="p-6 rounded-lg shadow-md border transition-all duration-200"
            style={{
              backgroundColor: "var(--surface)",
              borderColor: "var(--border)",
              boxShadow: "0 4px 6px var(--shadow)"
            }}
          >
            <div className="mb-4" style={{ color: "var(--primary-color)" }}>
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3
              className="text-xl font-semibold mb-2"
              style={{ color: "var(--text-primary)" }}
            >
              Lightning Fast
            </h3>
            <p style={{ color: "var(--text-secondary)" }}>
              Create and customize your resume in minutes with our intuitive
              drag-and-drop interface.
            </p>
          </div>

          <div
            className="p-6 rounded-lg shadow-md border transition-all duration-200"
            style={{
              backgroundColor: "var(--surface)",
              borderColor: "var(--border)",
              boxShadow: "0 4px 6px var(--shadow)"
            }}
          >
            <div className="mb-4" style={{ color: "var(--primary-color)" }}>
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </div>
            <h3
              className="text-xl font-semibold mb-2"
              style={{ color: "var(--text-primary)" }}
            >
              Secure & Private
            </h3>
            <p style={{ color: "var(--text-secondary)" }}>
              Your data is encrypted and secure. We never share your information
              with third parties.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
