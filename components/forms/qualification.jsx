import {
  Checkbox,
  Container,
  FormLabel,
  Heading,
  Input,
  Radio,
  RadioGroup,
  Select,
  Stack,
  Text,
} from "@chakra-ui/react";

const Qualification = ({ qualification, setQualification }) => {

  return (
    <Container>
      <Heading mb={5}>Qualification</Heading>

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
      />

      <FormLabel>Upload Highest Certificate</FormLabel>
      <Input
        value={qualification.certificate}
        onChange={(e) => {
          setQualification({
            ...qualification,
            certificate: e.target.value,
          });
        }}
        mb={5}
        type="file"
      />
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
      />
      <FormLabel>
        Was English your language of instruction and are your transcripts and
        certificates issued in English?*
      </FormLabel>
      <RadioGroup
        value={qualification.lanOfInstruct}
        onChange={(e) => {
          setQualification({ ...qualification, lanOfInstruct: e });
          console.log(qualification);
        }}
      >
        <Stack direction="row">
          <Radio value="Yes">Yes</Radio>
          <Radio value="No">No</Radio>
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
          <Radio value="Yes">Yes</Radio>
          <Radio value="No">No</Radio>
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
      />
    </Container>
  );
};

export default Qualification;
