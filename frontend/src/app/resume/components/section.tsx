import { ResumeSectionData } from "@/types";

const Section = ({ section }: { section: ResumeSectionData }) => {
  return <div>{section.id}</div>;
};

export default Section;
