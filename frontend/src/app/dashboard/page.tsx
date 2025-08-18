"use client";

import {
  RESUME_SECTIONS,
  REQUIRED_SECTIONS,
  OPTIONAL_SECTIONS,
  getSectionsByOrder
} from "@/app/dashboard/constants";
import styles from "./dashboard.module.css";

const Dashboard = () => {
  const orderedSections = getSectionsByOrder();

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.header}>
          <h1 className={styles.title}>Dashboard</h1>
          <button className={styles.createButton}>Create Resume</button>
        </div>

        <div className={styles.welcomeCard}>
          <h2 className={styles.welcomeTitle}>Welcome to your Dashboard</h2>
          <p className={styles.welcomeDescription}>
            This is a protected route. You can manage your resume sections here.
          </p>

          <div className={styles.sectionsGrid}>
            {/* Required Sections */}
            <div className={styles.sectionGroup}>
              <h3>Required Sections</h3>
              <div className={styles.sectionList}>
                {REQUIRED_SECTIONS.map((section) => (
                  <div
                    key={section.id}
                    className={`${styles.sectionItem} ${styles.requiredSection}`}
                  >
                    <span className={styles.sectionIcon}>{section.icon}</span>
                    <div className={styles.sectionContent}>
                      <p className={styles.sectionTitle}>{section.title}</p>
                      <p className={styles.sectionDescription}>
                        {section.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Optional Sections */}
            <div className={styles.sectionGroup}>
              <h3>Optional Sections</h3>
              <div className={styles.optionalSectionList}>
                {OPTIONAL_SECTIONS.map((section) => (
                  <div
                    key={section.id}
                    className={`${styles.sectionItem} ${styles.optionalSection}`}
                  >
                    <span className={styles.sectionIcon}>{section.icon}</span>
                    <div className={styles.sectionContent}>
                      <p className={styles.sectionTitle}>{section.title}</p>
                      <p className={styles.sectionDescription}>
                        {section.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className={styles.stats}>
            <p className={styles.statsText}>
              Total sections available: {RESUME_SECTIONS.length} | Required:{" "}
              {REQUIRED_SECTIONS.length} | Optional: {OPTIONAL_SECTIONS.length}
            </p>
          </div>
        </div>

        {/* Quick Actions */}
        <div className={styles.quickActions}>
          <div className={styles.actionCard}>
            <div className={styles.actionHeader}>
              <h3 className={styles.actionTitle}>Recent Resumes</h3>
              <span className={styles.actionIcon}>📄</span>
            </div>
            <p className={styles.actionDescription}>
              Access your recently created resumes
            </p>
            <button className={styles.actionButton}>View All →</button>
          </div>

          <div className={styles.actionCard}>
            <div className={styles.actionHeader}>
              <h3 className={styles.actionTitle}>Templates</h3>
              <span className={styles.actionIcon}>🎨</span>
            </div>
            <p className={styles.actionDescription}>
              Browse professional resume templates
            </p>
            <button className={styles.actionButton}>Browse →</button>
          </div>

          <div className={styles.actionCard}>
            <div className={styles.actionHeader}>
              <h3 className={styles.actionTitle}>Settings</h3>
              <span className={styles.actionIcon}>⚙️</span>
            </div>
            <p className={styles.actionDescription}>
              Manage your account preferences
            </p>
            <button className={styles.actionButton}>Configure →</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
