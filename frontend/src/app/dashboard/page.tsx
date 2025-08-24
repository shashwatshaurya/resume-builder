"use client";
import { useState } from "react";
import ResumeList from "./components/resumeList";
import TemplateList from "./components/templateList";
import { DASHBOARD_TABS } from "./constants";
import styles from "./dashboard.module.css";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState<DASHBOARD_TABS>(
    DASHBOARD_TABS.MY_RESUMES
  );

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.tabContainer}>
          <button
            onClick={() => setActiveTab(DASHBOARD_TABS.MY_RESUMES)}
            className={`${styles.tab} ${activeTab === DASHBOARD_TABS.MY_RESUMES ? styles.tabActive : ""}`}
          >
            📄 My Resumes
          </button>
          <button
            onClick={() => setActiveTab(DASHBOARD_TABS.TEMPLATES)}
            className={`${styles.tab} ${activeTab === DASHBOARD_TABS.TEMPLATES ? styles.tabActive : ""}`}
          >
            ✨ Create
          </button>
        </div>

        <div className={styles.contentSection}>
          {activeTab === DASHBOARD_TABS.MY_RESUMES && <ResumeList />}
          {activeTab === DASHBOARD_TABS.TEMPLATES && <TemplateList />}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
