import { Document, Page, Text, View } from "@react-pdf/renderer";
import { ResumeSectionData } from "@/types";

const PdfRenderer = ({
  sections,
  templateId = "0"
}: {
  sections: ResumeSectionData[];
  templateId?: string;
}) => {
  return (
    <Document>
      <Page size="A4" style={{ padding: 20 }}>
        <View style={{ marginBottom: 20 }}>
          <Text>Hello World</Text>
        </View>
      </Page>
    </Document>
  );
};

export default PdfRenderer;
