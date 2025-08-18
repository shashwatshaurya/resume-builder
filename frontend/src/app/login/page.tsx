"use client";

import { useState } from "react";
import styles from "./login.module.css";

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
    <div className={styles.container}>
      <div className={styles.content}>
        <div>
          <h1 className={styles.title}>Sign in to your account</h1>
          <p className={styles.subtitle}>
            Or{" "}
            <a href="#" className={styles.signupLink}>
              create a new account
            </a>
          </p>
        </div>
        <div className={styles.form}>
          <form onSubmit={handleSubmit} className={styles.formContent}>
            <div className={styles.fieldGroup}>
              <label htmlFor="email" className={styles.label}>
                Email address
              </label>
              <div className={styles.inputWrapper}>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={styles.input}
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>

            <div className={styles.fieldGroup}>
              <label htmlFor="password" className={styles.label}>
                Password
              </label>
              <div className={styles.inputWrapper}>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={styles.input}
                  placeholder="Enter your password"
                  required
                />
              </div>
            </div>

            <div className={styles.rememberSection}>
              <div className={styles.checkboxGroup}>
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className={styles.checkbox}
                />
                <label htmlFor="remember-me" className={styles.checkboxLabel}>
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a href="#" className={styles.forgotLink}>
                  Forgot your password?
                </a>
              </div>
            </div>

            {error && <div className={styles.error}>{error}</div>}

            <div>
              <button type="submit" className={`${styles.submitButton} group`}>
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
