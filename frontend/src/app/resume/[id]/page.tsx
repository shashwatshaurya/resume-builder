"use client";
import { useParams } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import FormRenderer from "../components/formRenderer";
import { dummyData } from "../dummyData";
import styles from "./page.module.css";

const EditResume = () => {
  const { id: resumeId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [lastSaved, setLastSaved] = useState<Date | null>(null);

  const handleSave = () => {
    setIsLoading(true);
    // Simulate save operation
    setTimeout(() => {
      setIsLoading(false);
      setLastSaved(new Date());
    }, 1500);
  };

  const handlePreview = () => {
    window.open(`/resume/${resumeId}/preview`, "_blank");
  };

  const completedSections = dummyData.sections.length;
  const totalSections = 6; // Based on typical resume sections
  const completionPercentage = Math.round(
    (completedSections / totalSections) * 100
  );

  return (
    <div className={styles.container}>
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <div className={styles.headerLeft}>
            <Link href="/dashboard" className={styles.backButton}>
              <span className={styles.backIcon}>←</span>
              Back to Dashboard
            </Link>
            <div>
              <h1 className={styles.pageTitle}>Edit Resume</h1>
              <span className={styles.resumeId}>ID: {resumeId}</span>
            </div>
          </div>

          <div className={styles.headerActions}>
            <button
              onClick={handleSave}
              className={`${styles.actionButton} ${styles.saveButton}`}
              disabled={isLoading}
            >
              <span className={styles.actionIcon}>💾</span>
              {isLoading ? "Saving..." : "Save"}
            </button>
            <button
              onClick={handlePreview}
              className={`${styles.actionButton} ${styles.previewButton}`}
            >
              <span className={styles.actionIcon}>👁️</span>
              Preview
            </button>
            <button
              className={`${styles.actionButton} ${styles.settingsButton}`}
            >
              <span className={styles.actionIcon}>⚙️</span>
              Settings
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className={styles.main}>
        <div className={styles.content}>
          {/* Sidebar */}
          <aside className={styles.sidebar}>
            {/* Progress Card */}
            <div className={styles.sidebarCard}>
              <h2 className={styles.sidebarTitle}>
                <span className={styles.sidebarIcon}>📊</span>
                Resume Progress
              </h2>
              <div className={styles.progressBar}>
                <div
                  className={styles.progressFill}
                  style={{ width: `${completionPercentage}%` }}
                ></div>
              </div>
              <p className={styles.progressText}>
                {completionPercentage}% Complete ({completedSections}/
                {totalSections} sections)
              </p>
            </div>

            {/* Quick Actions */}
            <div className={styles.sidebarCard}>
              <h2 className={styles.sidebarTitle}>
                <span className={styles.sidebarIcon}>⚡</span>
                Quick Actions
              </h2>
              <div className={styles.quickActions}>
                <button className={styles.quickAction}>
                  <span className={styles.quickActionIcon}>📄</span>
                  Add New Section
                </button>
                <button className={styles.quickAction}>
                  <span className={styles.quickActionIcon}>🎨</span>
                  Change Template
                </button>
                <button className={styles.quickAction}>
                  <span className={styles.quickActionIcon}>📤</span>
                  Export PDF
                </button>
                <button className={styles.quickAction}>
                  <span className={styles.quickActionIcon}>🔗</span>
                  Share Resume
                </button>
              </div>
            </div>

            {/* Stats */}
            <div className={styles.sidebarCard}>
              <h2 className={styles.sidebarTitle}>
                <span className={styles.sidebarIcon}>📈</span>
                Statistics
              </h2>
              <div className={styles.stats}>
                <div className={styles.statItem}>
                  <div className={styles.statNumber}>42</div>
                  <div className={styles.statLabel}>Views</div>
                </div>
                <div className={styles.statItem}>
                  <div className={styles.statNumber}>8</div>
                  <div className={styles.statLabel}>Downloads</div>
                </div>
              </div>
              {lastSaved && (
                <p
                  className={styles.progressText}
                  style={{ marginTop: "1rem" }}
                >
                  Last saved: {lastSaved.toLocaleTimeString()}
                </p>
              )}
            </div>
          </aside>

          {/* Edit Area */}
          <div className={styles.editArea}>
            <div className={styles.editContainer}>
              <div className={styles.editHeader}>
                <h2 className={styles.editTitle}>
                  <span className={styles.editIcon}>✏️</span>
                  Resume Editor
                </h2>
              </div>
              <div className={styles.editContent}>
                {isLoading ? (
                  <div className={styles.loadingState}>
                    <div className={styles.loadingSpinner}></div>
                    <span className={styles.loadingText}>
                      Saving your changes...
                    </span>
                  </div>
                ) : (
                  <FormRenderer sections={dummyData.sections} />
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default EditResume;
