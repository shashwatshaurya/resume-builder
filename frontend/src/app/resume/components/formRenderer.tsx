import Section from "./section";
import { ResumeSectionData } from "@/types";

const FormRenderer = ({ sections }: { sections: ResumeSectionData[] }) => {
  return (
    <div>
      {sections.map((section) => (
        <Section key={section.id} section={section} />
      ))}
    </div>
  );
};

export default FormRenderer;
