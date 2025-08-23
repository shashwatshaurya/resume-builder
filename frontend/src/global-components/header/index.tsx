"use client";

import Link from "next/link";
import useTheme from "@/hooks/useTheme";
import styles from "./header.module.css";
import useAuth from "@/hooks/useAuth";

const Header = () => {
  const { isAuthenticated } = useAuth();
  const { theme, toggleTheme } = useTheme();

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.leftSection}>
            <Link
              href={isAuthenticated ? "/dashboard" : "/"}
              className={styles.logo}
            >
              Resume Builder
            </Link>
            <nav className={styles.nav}>
              {!isAuthenticated && (
                <Link href="/" className={styles.navLink}>
                  Home
                </Link>
              )}
              {isAuthenticated && (
                <Link href="/dashboard" className={styles.navLink}>
                  Dashboard
                </Link>
              )}
              {!isAuthenticated && (
                <Link href="/login" className={styles.navLink}>
                  Login
                </Link>
              )}
            </nav>
          </div>

          <div className={styles.rightSection}>
            <button
              onClick={() => {
                console.log("logout");
              }}
              className={styles.logoutButton}
            >
              Logout
            </button>

            <button
              onClick={toggleTheme}
              className={styles.themeButton}
              aria-label="Toggle theme"
            >
              {theme === "light" ? (
                <svg
                  className={styles.icon}
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
                  className={styles.icon}
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
      </div>
    </header>
  );
};

export default Header;
