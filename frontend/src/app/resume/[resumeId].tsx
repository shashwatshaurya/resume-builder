import { useRouter } from "next/router";

const EditResume = () => {
  const router = useRouter();
  const { resumeId } = router.query;
  return <div>EditResume {resumeId}</div>;
};

export default EditResume;
