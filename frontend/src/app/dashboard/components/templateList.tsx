import { RESUME_TEMPLATES } from "../dummyData";

const TemplateList = () => {
  return (
    <div>
      {RESUME_TEMPLATES.map((template) => (
        <div key={template.templateId}>
          <h2>{template.title}</h2>
          <img src={template.displayUrl} alt={template.title} />
        </div>
      ))}
    </div>
  );
};

export default TemplateList;
