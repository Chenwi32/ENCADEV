import { useState } from "react";
import PersonalData from "./personalData";
import { Button, Container, Flex } from "@chakra-ui/react";
import CivilStatus from "./civil_satus";
import {
  emailRegex,
  nameRegex,
  phoneNumberRegex,
} from "../../constants/regexConstants";
import Qualification from "./qualification";
import FinancialStatus from "./financial_status";
import Success from "./success";

const Form = ({ step, setStep, formData, updateFormData }) => {
  // Handle Data
  const [personalInfo, setPersonalInfo] = useState({
    ...formData.personalInfo,
  });

  const [qualification, setQualification] = useState({
    ...formData.qualification,
  });

  const [civilStatus, setCivilStatus] = useState({
    ...formData.civilStatus,
  });

  const [financialStatus, setFinancialStatus] = useState({
    ...formData.financialStatus,
  });

  const [validForm, setValidForm] = useState({
    hasValidName: true,
    hasValidEmailAddress: true,
    hasValidPhoneNumber: true,
  });
  const formValidation = () => {
    let hasValidName = nameRegex.test(personalInfo.name);

    let hasValidEmailAddress = emailRegex.test(personalInfo.email);
    let hasValidPhoneNumber = phoneNumberRegex.test(personalInfo.phoneNumber);

    if (personalInfo.name === "") hasValidName = undefined;
    if (personalInfo.email === "") hasValidEmailAddress = undefined;
    if (personalInfo.phoneNumber === "") hasValidPhoneNumber = undefined;
    setValidForm({
      hasValidName,
      hasValidEmailAddress,
      hasValidPhoneNumber,
    });
    if (
      [hasValidName, hasValidEmailAddress, hasValidPhoneNumber].every(
        (value) => value === true
      )
    ) {
      if (step === 1) {
        updateFormData(personalInfo);
      } else if (step === 2) {
        updateFormData(qualification);
      } else if (step === 3) {
        updateFormData(civilStatus);
      } else if (step === 4) {
         updateFormData(financialStatus);
      }

      setStep((s) => s + 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    formValidation();
  };

  const handleGoBack = () => {
    if (step <= 1) return;
    setStep((s) => s - 1);
  };

  if (step != 5)
    return (
      <Container>
        {step === 1 && (
          <PersonalData
            personalInfo={personalInfo}
            setPersonalInfo={setPersonalInfo}
            validForm={validForm}
          />
        )}

        {step === 2 && (
          <Qualification
            qualification={qualification}
            setQualification={setQualification}
          />
        )}

        {step === 3 && (
          <CivilStatus
            civilStatus={civilStatus}
            setCivilStatus={setCivilStatus}
          />
        )}
        {step === 4 && <FinancialStatus financialStatus={financialStatus} setFinancialStatus={setFinancialStatus} />}

        <Flex justifyContent={"space-between"}>
          <Button
            type="button"
            borderColor={step >= 1 ? "blue" : "green"}
            onClick={handleGoBack}
          >
            Go Back
          </Button>
          <Button
            onClick={(e) => {
              handleSubmit(e);
            }}
            type="submit"
            bg={step === 4 && "blue"}
            color={step === 4 && "white"}
          >
            {step === 4 ? "Confirm" : "Next Step"}
          </Button>
        </Flex>
      </Container>
    );
  else return <Success />;
};

export default Form;
