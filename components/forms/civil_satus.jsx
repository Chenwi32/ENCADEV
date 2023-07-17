import {
 
  Box,
  Container,
  FormLabel,
  Heading,
  Input,
  Radio,
  RadioGroup,

  Stack,
  Text,
} from "@chakra-ui/react";

const CivilStatus = ({civilStatus, setCivilStatus}) => {
  return (
    <Container>
      <Heading fontFamily={"Andika"} fontSize={"1.5rem"} mb={5}>
        Civil Status
      </Heading>
      <FormLabel>
        <Text as="span" color="red">
          *
        </Text>{" "}
        What is your marital status?
      </FormLabel>
      <RadioGroup
        mb={5}
        value={civilStatus.marital}
        onChange={(e) => {
          setCivilStatus({ ...civilStatus, marital: e });
        }}
      >
        <Stack direction="column">
          <Radio borderColor={"gray.400"} value="Married">
            Married
          </Radio>
          <Radio borderColor={"gray.400"} value="Single">
            Single
          </Radio>
          <Radio borderColor={"gray.400"} value="Divorced">
            Divorced
          </Radio>
          <Radio borderColor={"gray.400"} value="Widowed">
            Widowed
          </Radio>
        </Stack>
      </RadioGroup>
      <Box
        display={
          civilStatus.marital !== "Single" && civilStatus.marital !== ""
            ? "block"
            : "none"
        }
      >
        <FormLabel>
          <Text as="span" color="red">
            *
          </Text>{" "}
          Do you have any children?
        </FormLabel>{" "}
        <RadioGroup
          mb={5}
          value={civilStatus.children}
          onChange={(e) => {
            setCivilStatus({ ...civilStatus, children: e });
          }}
        >
          <Stack direction="column">
            <Radio borderColor={"gray.400"} value="Yes">
              Yes
            </Radio>
            <Radio borderColor={"gray.400"} value="No">
              No
            </Radio>
          </Stack>
        </RadioGroup>
        <Box display={civilStatus.children === "Yes" ? "block" : "none"}>
          <FormLabel>
            <Text as="span" color="red">
              *
            </Text>{" "}
            How many children do you have?
          </FormLabel>
          <Input
            value={civilStatus.numOfChildren}
            onChange={(e) => {
              setCivilStatus({
                ...civilStatus,
                numOfChildren: e.target.value,
              });
            }}
            mb={5}
            borderColor={"gray"}
            type="number"
          />
          <FormLabel>
            What are their ages? (age limit is between 0 - 17)
          </FormLabel>
          <Input
            value={civilStatus.ageGroup}
            onChange={(e) => {
              setCivilStatus({
                ...civilStatus,
                ageGroup: e.target.value,
              });
            }}
            placeholder="e.g. 4, 10, 17"
            mb={5}
            borderColor={"gray"}
          />
        </Box>
        <FormLabel>
          <Text as="span" color="red">
            *
          </Text>{" "}
          Do you intend to bring your family to the UK?
        </FormLabel>{" "}
        <RadioGroup
          mb={5}
          value={civilStatus.bringingThem}
          onChange={(e) => {
            setCivilStatus({ ...civilStatus, bringingThem: e });
          }}
        >
          <Stack direction="column">
            <Radio borderColor={"gray.400"} value="Yes, immediately">
              Yes, immediately
            </Radio>
            <Radio borderColor={"gray.400"} value="Yes, later">
              Yes, later
            </Radio>
            <Radio borderColor={"gray.400"} value="No">
              No
            </Radio>
          </Stack>
        </RadioGroup>
      </Box>
      <FormLabel>How would you rate your driving?</FormLabel>{" "}
      <RadioGroup
        mb={5}
        value={civilStatus.englishProff}
        onChange={(e) => {
          setCivilStatus({ ...civilStatus, drivingSkills: e });
        }}
      >
        <Stack direction="column">
          <Radio
            borderColor={"gray.400"}
            value="Active driver with a driver's license"
          >
            Active driver with a driver's license
          </Radio>
          <Radio
            borderColor={"gray.400"}
            value="Driver's license but not an active driver"
          >
            Driver's license but not an active driver
          </Radio>
          <Radio
            borderColor={"gray.400"}
            value="Working toward a driver's license"
          >
            Working toward a driver's license
          </Radio>
          <Radio
            borderColor={"gray.400"}
            value="I don't drive and I don't have a licenset"
          >
            I don't drive and I don't have a license
          </Radio>
        </Stack>
      </RadioGroup>
    </Container>
  );
};

export default CivilStatus;
