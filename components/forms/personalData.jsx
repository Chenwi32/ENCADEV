import { Alert, AlertIcon, Box, Button, Flex, FormLabel, HStack, Heading, Input, Radio, RadioGroup, Select, Stack, Text } from "@chakra-ui/react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { useEffect } from "react";

const PersonalData = ({
  personalInfo,
  setPersonalInfo,
  validForm,
  formData,
  handleLocalSave
}) => {

  const cityChar = ["Yaounde", "Yaoundé", "*YAOUNDE"];


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

  return (
    <Box>
      <Heading fontFamily={"Andika"} fontSize={"1.5rem"} mb={5}>
        Personal info
      </Heading>
      <Text mb={5}>
        Please provide your name, email address, and phone number.
      </Text>
      <label htmlFor="name">
        <Flex justifyContent={"space-between"}>
          <Text>
            <Text as="span" color="red">
              *
            </Text>{" "}
            Name:
          </Text>
        </Flex>
        <Input
          borderColor={"gray"}
          type="text"
          value={personalInfo?.name}
          onChange={(e) => {
            setPersonalInfo({
              ...personalInfo,
              name: e.target.value,
            });
          }}
          mb={5}
          placeholder="e.g. John Doe"
          id="name"
          name="name"
          maxLength={32}
        />
      </label>
      <FormLabel>Date of birth:</FormLabel>
      <Input
        value={personalInfo.dateOfBirth}
        onChange={(e) => {
          setPersonalInfo({
            ...personalInfo,
            dateOfBirth: e.target.value,
          });
        }}
        type={"date"}
        mb={5}
        borderColor={"gray"}
      />

      <FormLabel>Sex:</FormLabel>
      <Select
        borderColor={"gray"}
        value={personalInfo?.sex}
        onChange={(e) => {
          setPersonalInfo({
            ...personalInfo,
            sex: e.target.value,
          });
        }}
        mb={5}
        placeholder="Select Sex"
      >
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Prefer not to disclose">Prefer not to disclose</option>
      </Select>

      <Heading fontSize={"1.2rem"} mb={5}>
        Adress
      </Heading>

      <Alert status="info" mb={5}>
        {" "}
        <AlertIcon /> Please provide your current address
      </Alert>
      <label htmlFor="email">
        <Flex justifyContent={"space-between"}>
          <Text>
            <Text as="span" color="red">
              *
            </Text>{" "}
            Email Address:
          </Text>
          {getError(validForm.hasValidEmailAddress)}
        </Flex>
        <Input
          borderColor={!validForm.hasValidEmailAddress ? "red" : "gray"}
          type="email"
          value={personalInfo?.email}
          onChange={(e) => {
            setPersonalInfo({
              ...personalInfo,
              email: e.target.value,
            });
          }}
          mb={5}
          placeholder="e.g. example@gm.com"
          id="email"
          name="email"
        />
      </label>
      <label htmlFor="phoneNumber">
        {" "}
        <div>
          <Flex justifyContent={"space-between"}>
            <Text>
              <Text as="span" color="red">
                *
              </Text>{" "}
              Phone Number:
            </Text>
            {getError(validForm.hasValidPhoneNumber)}
          </Flex>
        </div>
        <PhoneInput
          name="phoneNumber"
          defaultCountry="CM"
          placeholder="e.g +23773767784"
          value={!personalInfo ? "" : personalInfo.phoneNumber}
          onChange={(value) =>
            setPersonalInfo({ ...personalInfo, phoneNumber: value })
          }
        />
      </label>
     
      <label>Province/Region:</label>
      <Input
        borderColor={!validForm.hasValidPhoneNumber ? "red" : "gray"}
        value={personalInfo?.province}
        onChange={(e) => {
          setPersonalInfo({
            ...personalInfo,
            province: e.target.value,
          });
        }}
        mb={5}
        placeholder="e.g North West"
      />
      <label>City/Town:</label>
      <Input
        borderColor={!validForm.hasValidPhoneNumber ? "red" : "gray"}
        mb={5}
        value={personalInfo?.city}
        onChange={(e) => {
          setPersonalInfo({
            ...personalInfo,
            city: e.target.value.toUpperCase(),
          });
        }}
        placeholder="e.g Bamenda"
      />

      {
        <Box
          display={
            personalInfo.city != "YAOUNDE" &&
            personalInfo.city != "YAOUNDÉ" &&
            personalInfo.city != ""
              ? "block"
              : "none"
          }
        >
          <FormLabel>
            Could you move to Yaounde Cameroon for the training?
          </FormLabel>
          <RadioGroup
            value={personalInfo.move}
            onChange={(e) => {
              setPersonalInfo({ ...personalInfo, move: e });
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
        </Box>
      }
    </Box>
  );
};

export default PersonalData;
