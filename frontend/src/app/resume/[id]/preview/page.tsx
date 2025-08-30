import PdfRenderer from "@/app/resume/components/pdfRenderer";
import { dummyData } from "@/app/resume/dummyData";

const PreviewPage = () => {
  const sections = dummyData.sections;
  return <PdfRenderer sections={sections} />;
};

export default PreviewPage;
