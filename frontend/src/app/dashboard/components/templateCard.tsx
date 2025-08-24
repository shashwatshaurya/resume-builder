import styles from "./templateCard.module.css";

interface Template {
  templateId: string;
  title: string;
  description: string;
  displayUrl: string;
}

interface TemplateCardProps {
  template: Template;
}

const TemplateCard = ({ template }: TemplateCardProps) => {
  const handleUseTemplate = () => {
    // Add logic to create resume from template
    console.log("Using template:", template.templateId);
  };

  const handlePreview = (e: React.MouseEvent) => {
    e.stopPropagation();
    // Add preview logic
    console.log("Previewing template:", template.templateId);
  };

  return (
    <div className={styles.card} onClick={handleUseTemplate}>
      <div className={styles.imageContainer}>
        {template.displayUrl ? (
          <img
            src={template.displayUrl}
            alt={template.title}
            className={styles.image}
          />
        ) : (
          <div className={styles.placeholder}>🎨</div>
        )}
        <div className={styles.overlay}>
          <button onClick={handlePreview} className={styles.previewButton}>
            👁️ Preview
          </button>
        </div>
      </div>

      <div className={styles.content}>
        <h3 className={styles.title}>{template.title}</h3>
        <p className={styles.description}>{template.description}</p>

        <div className={styles.actions}>
          <button className={styles.useButton}>✨ Use Template</button>
        </div>
      </div>
    </div>
  );
};

export default TemplateCard;
