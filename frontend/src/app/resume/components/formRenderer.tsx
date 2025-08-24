import { KNOWN_SECTIONS } from "../constants";
import Section from "./section";
import InputSection from "./inputSection";
import { ResumeSectionData } from "@/types";

const FormRenderer = ({ sections }: { sections: ResumeSectionData[] }) => {
  return (
    <div>
      {sections.map((section) => (
        <div key={section.id}>
          <Section section={section} />
          {section.id !== KNOWN_SECTIONS.PERSONAL_INFO && <InputSection />}
        </div>
      ))}
    </div>
  );
};

export default FormRenderer;
