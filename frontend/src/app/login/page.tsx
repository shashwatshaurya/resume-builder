"use client";

import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }
    // Handle login logic here
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 transition-all duration-200"
      style={{ backgroundColor: "var(--background-secondary)" }}
    >
      <div className="max-w-md w-full space-y-8">
        <div>
          <h1
            className="mt-6 text-center text-3xl font-extrabold"
            style={{ color: "var(--text-primary)" }}
          >
            Sign in to your account
          </h1>
          <p
            className="mt-2 text-center text-sm"
            style={{ color: "var(--text-secondary)" }}
          >
            Or{" "}
            <a
              href="#"
              className="font-medium transition-colors hover-opacity"
              style={{ color: "var(--primary-color)" }}
            >
              create a new account
            </a>
          </p>
        </div>
        <div
          className="py-8 px-4 shadow sm:rounded-lg sm:px-10 border transition-all duration-200"
          style={{
            backgroundColor: "var(--surface)",
            borderColor: "var(--border)",
            boxShadow: "0 4px 6px var(--shadow)"
          }}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium"
                style={{ color: "var(--text-primary)" }}
              >
                Email address
              </label>
              <div className="mt-1">
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 transition-all duration-200 sm:text-sm input-focus"
                  style={{
                    borderColor: "var(--border)",
                    backgroundColor: "var(--surface)",
                    color: "var(--text-primary)"
                  }}
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium"
                style={{ color: "var(--text-primary)" }}
              >
                Password
              </label>
              <div className="mt-1">
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 transition-all duration-200 sm:text-sm input-focus"
                  style={{
                    borderColor: "var(--border)",
                    backgroundColor: "var(--surface)",
                    color: "var(--text-primary)"
                  }}
                  placeholder="Enter your password"
                  required
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded"
                  style={{
                    accentColor: "var(--primary-color)",
                    borderColor: "var(--border)",
                    backgroundColor: "var(--surface)"
                  }}
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm"
                  style={{ color: "var(--text-primary)" }}
                >
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a
                  href="#"
                  className="font-medium transition-colors hover-opacity"
                  style={{ color: "var(--primary-color)" }}
                >
                  Forgot your password?
                </a>
              </div>
            </div>

            {error && (
              <div
                className="text-sm text-center p-2 rounded-md"
                style={{
                  color: "var(--error-color)",
                  backgroundColor: "var(--error-color)20"
                }}
              >
                {error}
              </div>
            )}

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all duration-200 hover-bg-primary btn-focus"
                style={{
                  backgroundColor: "var(--primary-color)",
                  color: "var(--text-inverse)"
                }}
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
