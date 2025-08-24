import { KNOWN_SECTIONS, SECTION_WITH_DESCRIPTION } from "../constants";
import Section from "./section";
import InputSection from "./inputSection";
import { ResumeSectionData } from "@/types";

const FormRenderer = ({ sections }: { sections: ResumeSectionData[] }) => {
  return (
    <div>
      {sections.map((section) => (
        <div key={section.id}>
          <Section section={section} />
          {SECTION_WITH_DESCRIPTION.includes(section.id) && <InputSection />}
        </div>
      ))}
    </div>
  );
};

export default FormRenderer;
