"use client";

import Link from "next/link";
import useTheme from "@/hooks/useTheme";

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header
      style={{
        backgroundColor: "var(--surface)",
        borderBottomColor: "var(--border)",
        boxShadow: "0 1px 3px var(--shadow)"
      }}
      className="border-b transition-all duration-200"
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <Link
              href="/"
              className="text-xl font-bold transition-colors"
              style={{ color: "var(--primary-color)" }}
            >
              Resume Builder
            </Link>
            <nav className="hidden md:flex space-x-6">
              <Link
                href="/"
                className="transition-colors hover-primary"
                style={{ color: "var(--text-secondary)" }}
              >
                Home
              </Link>
              <Link
                href="/dashboard"
                className="transition-colors hover-primary"
                style={{ color: "var(--text-secondary)" }}
              >
                Dashboard
              </Link>
              <Link
                href="/login"
                className="transition-colors hover-primary"
                style={{ color: "var(--text-secondary)" }}
              >
                Login
              </Link>
            </nav>
          </div>

          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg transition-all duration-200 hover-bg-surface-secondary"
            style={{
              backgroundColor: "var(--surface-secondary)",
              color: "var(--text-secondary)"
            }}
            aria-label="Toggle theme"
          >
            {theme === "light" ? (
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
            ) : (
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
