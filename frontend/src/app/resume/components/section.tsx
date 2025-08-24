import { KNOWN_SECTIONS } from "../constants";
import { ResumeSectionData } from "@/types";

const ProfileSection = ({ section }: { section: ResumeSectionData }) => {
  console.log(section);
  return <div>ProfileSection</div>;
};

const EducationSection = ({ section }: { section: ResumeSectionData }) => {
  return <div>EducationSection</div>;
};

const ExperienceSection = ({ section }: { section: ResumeSectionData }) => {
  return <div>ExperienceSection</div>;
};

const SkillsSection = ({ section }: { section: ResumeSectionData }) => {
  return <div>SkillsSection</div>;
};

const ProjectsSection = ({ section }: { section: ResumeSectionData }) => {
  return <div>ProjectsSection</div>;
};

const RandomSection = ({ section }: { section: ResumeSectionData }) => {
  return <div>RandomSection</div>;
};

const SectionMap: Record<string, React.FC<{ section: ResumeSectionData }>> = {
  [KNOWN_SECTIONS.PERSONAL_INFO]: ProfileSection,
  [KNOWN_SECTIONS.EDUCATION]: EducationSection,
  [KNOWN_SECTIONS.EXPERIENCE]: ExperienceSection,
  [KNOWN_SECTIONS.TECHNICAL_SKILLS]: SkillsSection,
  [KNOWN_SECTIONS.PROJECTS]: ProjectsSection
};

const Section = ({ section }: { section: ResumeSectionData }) => {
  const SectionComponent =
    SectionMap[section.id as keyof typeof SectionMap] ?? RandomSection;
  return <SectionComponent section={section} />;
};

export default Section;
