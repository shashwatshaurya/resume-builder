import Link from "next/link";
import styles from "./resumeCard.module.css";

interface Resume {
  id: string;
  title: string;
  userId: string;
  createdAt: string;
  updatedAt: string;
  isPublic: boolean;
  displayUrl: string;
}

interface ResumeCardProps {
  resume: Resume;
}

const ResumeCard = ({ resume }: ResumeCardProps) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric"
    });
  };

  const handleDelete = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (window.confirm(`Are you sure you want to delete "${resume.title}"?`)) {
      // Add delete logic here
      console.log("Deleting resume:", resume.id);
    }
  };

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        {resume.displayUrl ? (
          <img
            src={resume.displayUrl}
            alt={resume.title}
            className={styles.image}
          />
        ) : (
          <div className={styles.placeholder}>📄</div>
        )}
        <div className={styles.badge}>
          {resume.isPublic ? "Public" : "Private"}
        </div>
      </div>

      <div className={styles.content}>
        <h3 className={styles.title}>{resume.title}</h3>

        <div className={styles.meta}>
          <span className={styles.date}>
            📅 Updated {formatDate(resume.updatedAt)}
          </span>
          <span
            className={`${styles.status} ${resume.isPublic ? styles.statusPublic : styles.statusPrivate}`}
          >
            {resume.isPublic ? "🌐 Public" : "🔒 Private"}
          </span>
        </div>

        <div className={styles.actions}>
          <Link
            href={`/resume/${resume.id}`}
            className={`${styles.actionButton} ${styles.primaryAction}`}
          >
            ✏️ Edit
          </Link>
          <Link
            href={`/resume/${resume.id}/preview`}
            className={`${styles.actionButton} ${styles.secondaryAction}`}
          >
            👁️ Preview
          </Link>
          <button
            onClick={handleDelete}
            className={`${styles.actionButton} ${styles.deleteAction}`}
            title="Delete resume"
          >
            🗑️
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResumeCard;
