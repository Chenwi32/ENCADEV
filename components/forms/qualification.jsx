import {
  Alert,
  AlertDescription,
  AlertIcon,
  Box,
  Button,
  Checkbox,
  CloseButton,
  Container,
  FormLabel,
  HStack,
  Heading,
  Image,
  Input,
  Radio,
  RadioGroup,
  Select,
  Stack,
  Text,
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { useEffect, useState } from "react";
import storage from "../../firebase";

const Qualification = ({
  qualification,
  setQualification,
}) => {
  // File upload functionality

  const [selectedFile, setSelectedFile] = useState();
  const [selectedCv, setSelectedCv] = useState();
  const [previewCV, setPreviewCV] = useState("");
  const [uploadError, setUploadError] = useState("");

  const [downloadUrl, setDownloadUrl] = useState("");
  const [cvDownloadUrl, setCvDownloadUrl] = useState("");
  const [uploadbtnText, setUploadBtntext] = useState("Upload");
  const [uploadCvbtnText, setUploadCvBtntext] = useState("Upload");

  const {
    isOpen: isVisible,
    onClose,
    onOpen,
  } = useDisclosure({ defaultIsOpen: true });

  // create a preview as a side effect, whenever selected file is changed
  useEffect(() => {
    if (!selectedCv) {
      return;
    }
    const cvUrl = URL.createObjectURL(selectedCv);
    if (
      selectedCv.name.includes("pdf") === true ||
      selectedCv.name.includes("png") === true ||
      selectedCv.name.includes("jpg") === true ||
      selectedCv.name.includes("jpeg") === true
    ) {
      setUploadError("");
      setPreviewCV(cvUrl);
    } else {
      setUploadError("Invalid file format");
    }

    // free memory when ever this component is unmounted
    return () => {
      URL.revokeObjectURL(cvUrl);
    };
  }, [selectedCv]);

  const getError = (validator) => {
    if (!validator)
      return (
        <Text color={"red"}>
          {validator === undefined
            ? "This field is required"
            : "Invalid format"}
        </Text>
      );
  };

  const handleUpload = () => {
    const mountainsRef = ref(storage, "canditCertif/" + selectedFile.name);
    uploadBytesResumable(mountainsRef, selectedFile).then((snapshot) => {
      setUploadBtntext("Uploading...");
      getDownloadURL(snapshot.ref).then((downloadURL) => {
        setDownloadUrl(downloadURL);
        setQualification({
          ...qualification,
          certificate: downloadURL,
        });
        setUploadBtntext("Uploaded");
      });
    });
  };

  const handleUploadCv = () => {
    const mountainsRef = ref(storage, "canditCertif/" + selectedCv.name);

    uploadBytesResumable(mountainsRef, selectedCv).then((snapshot) => {
      setUploadCvBtntext("Uploading...");
      getDownloadURL(snapshot.ref).then((downloadURL) => {
        setCvDownloadUrl(downloadURL);
        setQualification({
          ...qualification,
          CV: downloadURL,
        });
        setUploadCvBtntext("Uploaded");
      });
    });
  };

  ////////////////////////////////

  return (
    <Container maxW={"unset"} p={0}>
      <Heading fontFamily={"Andika"} fontSize={"1.5rem"} mb={5}>
        Qualification
      </Heading>

      <Text mb={5}>
        At the moment, we are providing training to aspiring civil engineers,
        architectural engineers, and software engineers in the early stages of
        their career development process, to give them a solid base for the
        future.
      </Text>
      <FormLabel>
        <Text as="span" color="red">
          *
        </Text>{" "}
        What is your highest qualification?
      </FormLabel>
      <Input
        value={qualification.qualification}
        onChange={(e) => {
          setQualification({
            ...qualification,
            qualification: e.target.value,
          });
        }}
        mb={5}
        placeholder="e.g. FSLC "
        borderColor={"gray"}
      />

      <FormLabel>
        <Text as="span" color="red">
          *
        </Text>{" "}
        What are you aspiring for, or what is your specialty?
      </FormLabel>

      <Select
        value={qualification.subject}
        onChange={(e) => {
          setQualification({
            ...qualification,
            subject: e.target.value,
          });
        }}
        mb={5}
        placeholder="Select Field"
        borderColor={"gray"}
      >
        <option value={"Civil Engineering"}>Civil Engineering</option>
        <option value={"Architectural Engineering"}>
          Architectural Engineering
        </option>
        <option value={"Software Engineering"}>Software Engineering</option>
      </Select>

      <FormLabel>What is your current status?</FormLabel>
      <Textarea
        value={qualification.status}
        onChange={(e) => {
          setQualification({
            ...qualification,
            status: e.target.value,
          });
        }}
        type={"text"}
        placeholder="e.g. I am studying at..."
        mb={5}
        borderColor={"gray"}
      />

      <FormLabel>Please briefly describe your expectations</FormLabel>
      <Textarea
        value={qualification.expectations}
        onChange={(e) => {
          setQualification({
            ...qualification,
            expectations: e.target.value,
          });
        }}
        mb={5}
        borderColor={"gray"}
      />
    </Container>
  );
};

export default Qualification;
