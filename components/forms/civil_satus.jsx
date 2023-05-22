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
} from "@chakra-ui/react";

const CivilStatus = ({civilStatus, setCivilStatus}) => {
  return (
    <Container>
      <Heading mb={5}>Civil Status</Heading>
      <FormLabel>What is your marital status?</FormLabel>
      <RadioGroup
        mb={5}
        value={civilStatus.marital}
        onChange={(e) => {
          setCivilStatus({ ...civilStatus, marital: e });
        }}
      >
        <Stack direction="column">
          <Radio value="Married">Married</Radio>
          <Radio value="Single">Single</Radio>
          <Radio value="Divorced">Divorced</Radio>
          <Radio value="Widowed">Widowed</Radio>
        </Stack>
      </RadioGroup>
      <FormLabel>How many children do you have?</FormLabel>
      <Input
        value={civilStatus.numOfChildren}
        onChange={(e) => {
          setCivilStatus({
            ...civilStatus,
            numOfChildren: e.target.value,
          });
        }}
        mb={5}
      />
      <FormLabel>what are their ages?</FormLabel>
      <Select
        value={civilStatus.ageGroup}
        onChange={(e) => {
          setCivilStatus({
            ...civilStatus,
            ageGroup: e.target.value,
          });
        }}
        placeholder="Select Age group"
        mb={5}
      >
        <option value="1-5">1-5</option>
        <option value="6-10">6-10</option>
        <option value="10-15">10-15</option>
        <option value="16-17">16-17</option>
      </Select>
      <FormLabel>Do you intend to bring your family to the UK?</FormLabel>{" "}
      <RadioGroup
        mb={5}
        value={civilStatus.bringingThem}
        onChange={(e) => {
          setCivilStatus({ ...civilStatus, bringingThem: e });
        }}
      >
        <Stack direction="column">
          <Radio value="Yes, immediately">Yes, immediately</Radio>
          <Radio value="Yes, later">Yes, later</Radio>
          <Radio value="No">No</Radio>
          <Radio value="I don't have a family yet">
            I don't have a family yet
          </Radio>
        </Stack>
      </RadioGroup>
      <FormLabel>How would you rate your driving?</FormLabel>{" "}
      <RadioGroup
        mb={5}
        value={civilStatus.englishProff}
        onChange={(e) => {
          setCivilStatus({ ...civilStatus, drivingSkills: e });
        }}
      >
        <Stack direction="column">
          <Radio value="Active driver with a driver's license">
            Active driver with a driver's license
          </Radio>
          <Radio value="Driver's license but not an active driver">
            Driver's license but not an active driver
          </Radio>
          <Radio value="Working toward a driver's license">
            Working toward a driver's license
          </Radio>
          <Radio value="I don't drive and I don't have a licenset">
            I don't drive and I don't have a license
          </Radio>
        </Stack>
      </RadioGroup>
      <FormLabel>
        Where would you like to attend your FREE Orientation Session?
      </FormLabel>{" "}
      <RadioGroup
        mb={5}
        value={civilStatus.sessionLocation}
        onChange={(e) => {
          setCivilStatus({ ...civilStatus, sessionLocation: e });
        }}
      >
        <Stack direction="column">
          <Radio value="Cameroon – Buea">Cameroon – Buea</Radio>
          <Radio value="Cameroon – Douala">Cameroon – Douala</Radio>
          <Radio value="Cameroon – Yaoundé">Cameroon – Yaoundé</Radio>
          <Radio value="International - via Zoom or WhatsApp">
            International - via Zoom or WhatsApp
          </Radio>
        </Stack>
      </RadioGroup>
    </Container>
  );
};

export default CivilStatus;
