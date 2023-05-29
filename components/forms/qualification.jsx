import {
  Box,
  Button,
  Checkbox,
  Container,
  FormLabel,
  Heading,
  Image,
  Input,
  Radio,
  RadioGroup,
  Select,
  Stack,
  Text,
} from "@chakra-ui/react";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { useEffect, useState } from "react";
import storage from "../../firebase";

const Qualification = ({ qualification, setQualification }) => {
  // File upload functionality

  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState("");

  const [downloadUrl, setDownloadUrl] = useState("");
  const [uploadbtnText, setUploadBtntext] = useState("Upload");

  // create a preview as a side effect, whenever selected file is changed
  useEffect(() => {
    if (!selectedFile) {
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

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

  ////////////////////////////////

  return (
    <Container maxW={"unset"} p={0}>
      <Heading fontFamily={'Andika'} fontSize={"1.5rem"} mb={5}>
        Qualification
      </Heading>

      <Text mb={5}>
        To qualify for this program, you must have at least a high school
        certificate or a higher education qualification such as the HND,
        Bachelor's degree, etc., in any field.
      </Text>
      <FormLabel>What is your highest qualification?</FormLabel>
      <Select
        value={qualification.qualification}
        onChange={(e) => {
          setQualification({
            ...qualification,
            qualification: e.target.value,
          });
        }}
        mb={5}
        placeholder="Select Qualification"
        borderColor={"gray"}
      >
        <option value={"GCE A-level"}>GCE A-level</option>
        <option value={"Brevet"}>Brevet</option>
        <option value={"HND"}>HND</option>
        <option value={"BSC"}>BSC</option>
        <option value={"Others"}>Others</option>
      </Select>

      <FormLabel>If you chosed others, please specify here:</FormLabel>
      <Input
        value={qualification.othersSpecific}
        onChange={(e) => {
          setQualification({
            ...qualification,
            othersSpecific: e.target.value,
          });
        }}
        mb={5}
        borderColor={"gray"}
      />

      <FormLabel>
        Upload Highest Certificate ( PDF or image( jpg, jpeg, png ) )
      </FormLabel>
      <Input
        onChange={(e) => {
          if (!e.target.files || e.target.files.length === 0) {
            setSelectedFile(undefined);
            return;
          }

          // Selects just one file

          setSelectedFile(e.target.files[0]);
        }}
        mb={5}
        border={"none"}
        type="file"
      />

      <Box mt={5} mb={5} w={"100%"}>
        {selectedFile && (
          <>
            <Heading mb={5} fontSize={"1.1rem"}>
              {" "}
              Preview
            </Heading>
            {selectedFile.name.includes(".pdf") === true ? (
              <iframe src={preview} />
            ) : (
              <Image
                src={preview}
                width={300}
                height={300}
                alt="Uploaded Id card image"
                mb={10}
              />
            )}
            <Button
              mt={5}
              bg={"brand.100"}
              color={"white"}
              _hover={{
                bg: "default",
              }}
              onClick={handleUpload}
            >
              {uploadbtnText}
            </Button>
          </>
        )}
      </Box>

      <FormLabel>
        What is the subject (specialization) of your diploma or degree?
      </FormLabel>
      <Input
        value={qualification.subject}
        onChange={(e) => {
          setQualification({
            ...qualification,
            subject: e.target.value,
          });
        }}
        mb={5}
        borderColor={"gray"}
      />
      <FormLabel>
        In which institution(s) did you obtain your qualification(s)?
      </FormLabel>
      <Input
        value={qualification.institution}
        onChange={(e) => {
          setQualification({
            ...qualification,
            institution: e.target.value,
          });
        }}
        mb={5}
        borderColor={"gray"}
      />
      <FormLabel>In what year did you graduate?</FormLabel>
      <Input
        value={qualification.date}
        onChange={(e) => {
          setQualification({
            ...qualification,
            date: e.target.value,
          });
        }}
        type={"date"}
        mb={5}
        borderColor={"gray"}
      />
      <FormLabel>
        Was English your language of instruction and are your transcripts and
        certificates issued in English?*
      </FormLabel>
      <RadioGroup
        value={qualification.lanOfInstruct}
        onChange={(e) => {
          setQualification({ ...qualification, lanOfInstruct: e });
        }}
      >
        <Stack direction="row">
          <Radio borderColor={"gray.400"} value="Yes">
            Yes
          </Radio>
          <Radio borderColor={"gray.400"} value="No">
            No
          </Radio>
        </Stack>
      </RadioGroup>
      <FormLabel>
        Do you have a valid English language profficiency certificate?
      </FormLabel>
      <RadioGroup
        mb={5}
        value={qualification.englishProff}
        onChange={(e) => {
          setQualification({ ...qualification, englishProff: e });
        }}
      >
        <Stack direction="row">
          <Radio borderColor={"gray.400"} value="Yes">
            Yes
          </Radio>
          <Radio borderColor={"gray.400"} value="No">
            No
          </Radio>
        </Stack>
      </RadioGroup>

      <FormLabel>Briefly describe any work experience you have</FormLabel>
      <Input
        value={qualification.experience}
        onChange={(e) => {
          setQualification({
            ...qualification,
            experience: e.target.value,
          });
        }}
        mb={5}
        borderColor={"gray"}
      />
    </Container>
  );
};

export default Qualification;
