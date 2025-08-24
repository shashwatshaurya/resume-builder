import Link from "next/link";
import { DUMMY_RESUMES } from "../dummyData";

const ResumeList = () => {
  return (
    <div>
      {DUMMY_RESUMES.map((resume) => (
        <div key={resume.id}>
          <div>{resume.title}</div>
          <div>{resume.createdAt}</div>
          <Link href={`/resume/${resume.id}`}>Edit</Link>
        </div>
      ))}
    </div>
  );
};

export default ResumeList;
