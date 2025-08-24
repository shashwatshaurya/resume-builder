import { RESUME_TEMPLATES } from "../dummyData";
import TemplateCard from "./templateCard";
import styles from "../dashboard.module.css";

const TemplateList = () => {
  if (RESUME_TEMPLATES.length === 0) {
    return (
      <div className={styles.emptyState}>
        <div className={styles.emptyIcon}>🎨</div>
        <h3 className={styles.emptyTitle}>No templates available</h3>
        <p className={styles.emptyDescription}>
          Professional resume templates are being prepared for you
        </p>
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
          Resume Templates ({RESUME_TEMPLATES.length})
        </h2>
        <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
          <select
            style={{
              padding: "0.5rem 1rem",
              background: "var(--surface-secondary)",
              border: "1px solid var(--border)",
              borderRadius: "0.375rem",
              cursor: "pointer",
              color: "var(--text-primary)"
            }}
          >
            <option>All Categories</option>
            <option>Modern</option>
            <option>Classic</option>
            <option>Creative</option>
          </select>
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
        </div>
      </div>

      <div className={styles.grid}>
        {RESUME_TEMPLATES.map((template) => (
          <TemplateCard key={template.templateId} template={template} />
        ))}
      </div>
    </div>
  );
};

export default TemplateList;
