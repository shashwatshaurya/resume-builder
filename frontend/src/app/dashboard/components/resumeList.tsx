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
      <h2 className={styles.sectionTitle}>
        My Resumes ({DUMMY_RESUMES.length})
      </h2>

      <div className={styles.grid}>
        {DUMMY_RESUMES.map((resume) => (
          <ResumeCard key={resume.id} resume={resume} />
        ))}
      </div>
    </div>
  );
};

export default ResumeList;
