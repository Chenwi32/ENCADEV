import { useEffect, useState } from "react";
import PersonalData from "./personalData";
import {
  Button,
  Container,
  Flex,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  ScaleFade,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { emailRegex, phoneNumberRegex } from "../../constants/regexConstants";
import Qualification from "./qualification";
import Success from "./success";
import Confirm from "../confirm";
import { useRouter } from "next/router";

const Form = ({
  step,
  setStep,
  formData,
  updateFormData,
  sendData,
  handleLocalSave,
}) => {
  const router = useRouter();

  const { onOpen, onClose, isOpen, onToggle } = useDisclosure();

  // Handle Data
  const [personalInfo, setPersonalInfo] = useState({
    ...formData?.personalInfo,
  });

  const [qualification, setQualification] = useState({
    ...formData?.qualification,
  });

  const [civilStatus, setCivilStatus] = useState({
    ...formData?.civilStatus,
  });

  const [financialStatus, setFinancialStatus] = useState({
    ...formData?.financialStatus,
  });

  const [validForm, setValidForm] = useState({
    hasValidEmailAddress: true,
    hasValidPhoneNumber: true,
  });

  let hasValidPhoneNumber = phoneNumberRegex.test(personalInfo?.phoneNumber);

  const formValidation = (e) => {
    let hasValidEmailAddress = emailRegex.test(personalInfo?.email);

    if (personalInfo.email === "") hasValidEmailAddress = undefined;
    if (personalInfo.phoneNumber === "") hasValidPhoneNumber = undefined;
    setValidForm({
      hasValidEmailAddress,
      hasValidPhoneNumber,
    });
    if (
      [hasValidEmailAddress, hasValidPhoneNumber].every(
        (value) => value === true
      )
    ) {
      if (step === 1) {
        updateFormData(personalInfo);
      } else if (step === 2) {
        updateFormData(qualification);
      } /*else if (step === 5) {
        
         sendData(); 
      }*/
      setStep((s) => s + 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    formValidation(e);
  };

  const handleGoBack = () => {
    if (step <= 1) return;
    setStep((s) => s - 1);
  };

  if (step != 4)
    return (
      <Container transition={"0.5s"}>
        {step === 1 && (
          <ScaleFade initialScale={0.9} in={onToggle}>
            <PersonalData
              personalInfo={personalInfo}
              setPersonalInfo={setPersonalInfo}
              validForm={validForm}
            />
          </ScaleFade>
        )}

        {step === 2 && (
          <ScaleFade initialScale={0.9} in={onToggle}>
            <Qualification
              qualification={qualification}
              setQualification={setQualification}
              component={"healthcare"}
              handleLocalSave={handleLocalSave}
            />
          </ScaleFade>
        )}

        {step === 3 && (
          <ScaleFade initialScale={0.9} in={onToggle}>
            <Confirm formData={formData} />
          </ScaleFade>
        )}
        <Text mb={5} display={step >= 3 ? "none" : "block"}>
          {" "}
          All fields with an asterisk (
          <Text as="span" color="red">
            *
          </Text>
          ) are mandatory.
        </Text>

        <Flex justifyContent={"space-between"} mt={5}>
          <Button
            type="button"
            bg={"brand.200"}
            _hover={{
              bg: "",
            }}
            color={"brand.300"}
            onClick={handleGoBack}
            isDisabled={step <= 1}
          >
            Go Back
          </Button>
          <Button
            onClick={(e) => {
              /*    onOpen(); */
              handleSubmit(e);
            }}
            type="submit"
            bg={
              "linear-gradient(239deg, rgba(0,211,192,1) 10%, rgba(31,30,30,1) 90%)"
            }
            color={"brand.300"}
            _hover={{
              bg: "",
            }}
            isDisabled={hasValidPhoneNumber != true}
            display={step >= 3 ? "none" : "block"}
          >
            {step === 2 ? "Confirm" : "Next Step"}
          </Button>

          <Button
            display={step >= 3 ? "block" : "none"}
            bg={
              "linear-gradient(239deg, rgba(0,211,192,1) 10%, rgba(31,30,30,1) 90%)"
            }
            color={"brand.300"}
            _hover={{ bg: "" }}
            onClick={() => {
              sendData();
              setStep((s) => s + 1);
            }}
          >
            send
          </Button>
        </Flex>
      </Container>
    );
  else return <Success />;
};

export default Form;
