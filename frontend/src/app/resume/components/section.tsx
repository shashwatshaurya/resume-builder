import { KNOWN_SECTIONS } from "../constants";
import {
  ResumeSectionData,
  PersonalInfo,
  Education,
  Experience,
  Skill,
  Project,
  RandomTitle
} from "@/types";
import styles from "./section.module.css";

const ProfileSection = ({ section }: { section: ResumeSectionData }) => {
  const data = section.data as PersonalInfo;

  return (
    <div className={styles.sectionContainer}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>
          <span className={styles.sectionIcon}>👤</span>
          Personal Information
        </h2>
      </div>
      <div className={styles.sectionContent}>
        <div className={styles.personalInfo}>
          <div className={styles.personalHeader}>
            <h1 className={styles.personalName}>
              {data.firstName} {data.lastName}
            </h1>
            <p className={styles.personalTitle}>{data.title}</p>
            <p className={styles.personalSummary}>{data.summary}</p>
          </div>

          <div className={styles.contactInfo}>
            <div className={styles.contactItem}>
              <span className={styles.contactIcon}>📧</span>
              <span>{data.email}</span>
            </div>
            {data.phone && (
              <div className={styles.contactItem}>
                <span className={styles.contactIcon}>📞</span>
                <span>{data.phone}</span>
              </div>
            )}
            {(data.city || data.state || data.country) && (
              <div className={styles.contactItem}>
                <span className={styles.contactIcon}>📍</span>
                <span>
                  {[data.city, data.state, data.country]
                    .filter(Boolean)
                    .join(", ")}
                </span>
              </div>
            )}
          </div>

          {data.socials && data.socials.length > 0 && (
            <div className={styles.socialLinks}>
              {data.socials.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className={styles.socialLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className={styles.socialIcon}>
                    {social.platform === "LinkedIn" && "💼"}
                    {social.platform === "GitHub" && "🐙"}
                    {social.platform === "Personal Website" && "🌐"}
                    {!["LinkedIn", "GitHub", "Personal Website"].includes(
                      social.platform
                    ) && "🔗"}
                  </span>
                  {social.platform}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const EducationSection = ({ section }: { section: ResumeSectionData }) => {
  const data = section.data as Education[];

  return (
    <div className={styles.sectionContainer}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>
          <span className={styles.sectionIcon}>🎓</span>
          Education
        </h2>
      </div>
      <div className={styles.sectionContent}>
        <div className={styles.educationList}>
          {data.map((education) => (
            <div key={education.id} className={styles.educationItem}>
              <h3 className={styles.educationDegree}>{education.degree}</h3>
              <p className={styles.educationInstitution}>
                {education.institution}
              </p>
              <div className={styles.educationMeta}>
                {education.location && (
                  <span className={styles.educationLocation}>
                    <span>📍</span>
                    {education.location}
                  </span>
                )}
                <span className={styles.educationYear}>
                  <span>📅</span>
                  {education.graduationYear}
                </span>
                {education.gpa && (
                  <span className={styles.educationGpa}>
                    <span>⭐</span>
                    GPA: {education.gpa}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const ExperienceSection = ({ section }: { section: ResumeSectionData }) => {
  const data = section.data as Experience[];

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      year: "numeric"
    });
  };

  return (
    <div className={styles.sectionContainer}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>
          <span className={styles.sectionIcon}>💼</span>
          Work Experience
        </h2>
      </div>
      <div className={styles.sectionContent}>
        <div className={styles.experienceList}>
          {data.map((experience) => (
            <div key={experience.id} className={styles.experienceItem}>
              <div className={styles.experienceHeader}>
                <h3 className={styles.experiencePosition}>
                  {experience.position}
                </h3>
                <p className={styles.experienceCompany}>{experience.company}</p>
                <div className={styles.experienceMeta}>
                  {experience.location && (
                    <span className={styles.experienceLocation}>
                      <span>📍</span>
                      {experience.location}
                    </span>
                  )}
                  <span className={styles.experienceDuration}>
                    <span>📅</span>
                    {formatDate(experience.startDate)} -{" "}
                    {experience.current
                      ? "Present"
                      : formatDate(experience.endDate!)}
                  </span>
                </div>
              </div>
              <ul className={styles.experienceDescription}>
                {experience.description.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const SkillsSection = ({ section }: { section: ResumeSectionData }) => {
  const data = section.data as Skill[];

  const getSkillLevelClass = (level?: string) => {
    switch (level) {
      case "expert":
        return styles.skillLevelExpert;
      case "advanced":
        return styles.skillLevelAdvanced;
      case "intermediate":
        return styles.skillLevelIntermediate;
      case "beginner":
        return styles.skillLevelBeginner;
      default:
        return styles.skillLevelIntermediate;
    }
  };

  const getSkillProgressClass = (level?: string) => {
    switch (level) {
      case "expert":
        return styles.skillProgressExpert;
      case "advanced":
        return styles.skillProgressAdvanced;
      case "intermediate":
        return styles.skillProgressIntermediate;
      case "beginner":
        return styles.skillProgressBeginner;
      default:
        return styles.skillProgressIntermediate;
    }
  };

  return (
    <div className={styles.sectionContainer}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>
          <span className={styles.sectionIcon}>⚡</span>
          Technical Skills
        </h2>
      </div>
      <div className={styles.sectionContent}>
        <div className={styles.skillsGrid}>
          {data.map((skill) => (
            <div key={skill.id} className={styles.skillItem}>
              <h3 className={styles.skillName}>{skill.name}</h3>
              <p
                className={`${styles.skillLevel} ${getSkillLevelClass(skill.level)}`}
              >
                {skill.level || "intermediate"}
              </p>
              <div className={styles.skillBar}>
                <div
                  className={`${styles.skillProgress} ${getSkillProgressClass(skill.level)}`}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const ProjectsSection = ({ section }: { section: ResumeSectionData }) => {
  const data = section.data as Project[];

  return (
    <div className={styles.sectionContainer}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>
          <span className={styles.sectionIcon}>🚀</span>
          Projects
        </h2>
      </div>
      <div className={styles.sectionContent}>
        <div className={styles.projectsGrid}>
          {data.map((project) => (
            <div key={project.id} className={styles.projectItem}>
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <p className={styles.projectDescription}>{project.description}</p>

              {project.technologies && project.technologies.length > 0 && (
                <div className={styles.projectTechnologies}>
                  {project.technologies.map((tech, index) => (
                    <span key={index} className={styles.technologyTag}>
                      {tech}
                    </span>
                  ))}
                </div>
              )}

              {project.link && (
                <a
                  href={project.link}
                  className={styles.projectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>View Project</span>
                  <span className={styles.projectLinkIcon}>🔗</span>
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const RandomSection = ({ section }: { section: ResumeSectionData }) => {
  const data = section.data as RandomTitle[];

  return (
    <div className={styles.sectionContainer}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>
          <span className={styles.sectionIcon}>📝</span>
          Additional Information
        </h2>
      </div>
      <div className={styles.sectionContent}>
        <div className={styles.randomSectionList}>
          {data.map((item, index) => (
            <div key={index} className={styles.randomSectionItem}>
              <div className={styles.randomSectionHeader}>
                {item.subtitleLeft && (
                  <h3 className={styles.randomSectionSubtitle}>
                    {item.subtitleLeft}
                  </h3>
                )}
                {item.subtitleRight && (
                  <span className={styles.randomSectionRight}>
                    {item.subtitleRight}
                  </span>
                )}
              </div>
              {item.description && item.description.length > 0 && (
                <ul className={styles.randomSectionDescription}>
                  {item.description.map((desc, descIndex) => (
                    <li key={descIndex}>{desc}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
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
