import { Button, Container, Flex } from "@chakra-ui/react";

import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { useEffect, useState } from "react";

const Generatepdf = ({ candidate }) => {
  const [download, setDownload] = useState();
  const [preview, setPreview] = useState();
  const [candidateName, setCandidateName] = useState(candidate);

  const generateFile = () => {
    const doc = new jsPDF();

    autoTable(doc, {
      html: "#table_content",
      footStyles: { fillColor: "#fff", textColor: "#252628" },

      tableWidth: doc.internal.pageSize.getWidth(),
      margin: { right: 2, top: 0, left: 0 },
    
    });

    if (download === true) {
      doc.save(`${candidateName}.pdf`);
    } else if (preview === true) {
      doc.output("dataurlnewwindow");
    } else return;

    setDownload(false);
    setPreview(false);
  };

  useEffect(() => {
    generateFile();
  }, [download, preview]);

  return (
    <Container maxW={1200} mt={5} mb={10} p={0}>
      <Flex gap={5}>
        <Button
          bg={"brand.200"}
          boxShadow={"xl"}
          color={"brand.300"}
          border={"1px"}
          _hover={{
            bg: "",
          }}
          onClick={() => {
            setPreview(true);
          }}
        >
          Preview Pdf
        </Button>
        <Button
          boxShadow={"xl"}
          bg={"brand.100"}
          color={"brand.300"}
          border={"1px"}
          _hover={{
            bg: "",
          }}
          onClick={() => {
            setDownload(true);
          }}
        >
          Download Pdf file
        </Button>
      </Flex>
    </Container>
  );
};

export default Generatepdf;
