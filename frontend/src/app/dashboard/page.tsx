"use client";
import { useState } from "react";
import { DUMMY_RESUMES, RESUME_TEMPLATES } from "./dummyData";
import { DASHBOARD_TABS } from "./constants";
import Link from "next/link";

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
      {activeTab === DASHBOARD_TABS.MY_RESUMES && (
        <div>
          {DUMMY_RESUMES.map((resume) => (
            <div key={resume.id}>
              <h2>{resume.title}</h2>
              <img src={resume.displayUrl} alt={resume.title} />
              <Link href={`/resume/${resume.id}`}>Edit</Link>
            </div>
          ))}
        </div>
      )}
      {activeTab === DASHBOARD_TABS.TEMPLATES && (
        <div>
          {RESUME_TEMPLATES.map((template) => (
            <div key={template.templateId}>
              <h2>{template.title}</h2>
              <img src={template.displayUrl} alt={template.title} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
