"use client";
import { useState } from "react";
import ResumeList from "./components/resumeList";
import TemplateList from "./components/templateList";
import { DASHBOARD_TABS } from "./constants";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState<DASHBOARD_TABS>(
    DASHBOARD_TABS.MY_RESUMES
  );

  return (
    <div>
      <h1>Dashboard</h1>
      <div>
        <button onClick={() => setActiveTab(DASHBOARD_TABS.MY_RESUMES)}>
          {DASHBOARD_TABS.MY_RESUMES}
        </button>
        <button onClick={() => setActiveTab(DASHBOARD_TABS.TEMPLATES)}>
          {DASHBOARD_TABS.TEMPLATES}
        </button>
      </div>
      {activeTab === DASHBOARD_TABS.MY_RESUMES && <ResumeList />}
      {activeTab === DASHBOARD_TABS.TEMPLATES && <TemplateList />}
    </div>
  );
};

export default Dashboard;
