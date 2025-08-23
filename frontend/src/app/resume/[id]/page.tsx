"use client";
import { useParams } from "next/navigation";

const EditResume = () => {
  const { id: resumeId } = useParams();
  return <div>EditResume {resumeId}</div>;
};

export default EditResume;
