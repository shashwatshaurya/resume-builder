import { DUMMY_RESUMES } from "../dummyData";
import styles from "../dashboard.module.css";
import ResumeCard from "./resumeCard";

const ResumeList = () => {
  if (DUMMY_RESUMES.length === 0) {
    return (
      <div className={styles.emptyState}>
        <div className={styles.emptyIcon}>📄</div>
        <h3 className={styles.emptyTitle}>No resumes yet</h3>
        <p className={styles.emptyDescription}>
          Create your first resume to get started on your professional journey
        </p>
        <button className={styles.createButton}>
          Create Your First Resume
        </button>
      </div>
    );
  }

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "1.5rem"
        }}
      >
        <h2
          style={{
            margin: 0,
            color: "var(--text-primary)",
            fontSize: "1.5rem"
          }}
        >
          My Resumes ({DUMMY_RESUMES.length})
        </h2>
        <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
          <button
            style={{
              padding: "0.5rem",
              background: "var(--surface-secondary)",
              border: "1px solid var(--border)",
              borderRadius: "0.375rem",
              cursor: "pointer"
            }}
          >
            🔍
          </button>
          <button
            style={{
              padding: "0.5rem",
              background: "var(--surface-secondary)",
              border: "1px solid var(--border)",
              borderRadius: "0.375rem",
              cursor: "pointer"
            }}
          >
            📊
          </button>
        </div>
      </div>

      <div className={styles.grid}>
        {DUMMY_RESUMES.map((resume) => (
          <ResumeCard key={resume.id} resume={resume} />
        ))}
      </div>
    </div>
  );
};

export default ResumeList;
