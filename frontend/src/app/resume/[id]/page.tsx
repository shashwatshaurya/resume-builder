"use client";
import { useParams } from "next/navigation";
import Link from "next/link";
import FormRenderer from "../components/formRenderer";
import { dummyData } from "../dummyData";

const EditResume = () => {
  const { id: resumeId } = useParams();
  return (
    <div>
      EditResume {resumeId}
      <Link href="/dashboard">Return</Link>
      <FormRenderer sections={dummyData.sections} />
    </div>
  );
};

export default EditResume;
