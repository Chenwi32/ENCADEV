import { Container, FormLabel, Heading, Input, Text } from "@chakra-ui/react";

const FinancialStatus = ({financialStatus, setFinancialStatus, updateFormData}) => {
  return (
    <Container>
      <Heading fontSize={"1.5rem"} mb={5} fontFamily={"Andika"}>
        Financial Readiness
      </Heading>
      <Text mb={5}>
        Please confirm that you have the financial ability to pay for the
        service package, which ranges from Evaluation, Training, Certification,
        and Recruitment to work in the UK. We do not offer scholarships, and we
        do not have the possibility of bringing you to the UK to pay us later.
        By submitting this form, you are giving us permission to contact you for
        follow-up and agreeing to the service fees, as outlined above, for your
        application assessment, training, and recruitment for healthcare and
        Care Assistant roles with ADES-HealthCare in the UK.
      </Text>

      <FormLabel>
        Signature (Type your full name to indicate Signature)
      </FormLabel>
      <Input
        value={financialStatus.signature}
        onChange={(e) => {
          setFinancialStatus({
            ...financialStatus,
            signature: e.target.value,
          });
        }}
        mb={5}
        borderColor={"gray"}
      />
      <FormLabel>
        <Text as="span" color="red">
          *
        </Text>{" "}
        Date
      </FormLabel>
      <Input
        value={financialStatus.date}
        onChange={(e) => {
          setFinancialStatus({
            ...financialStatus,
            date: e.target.value,
          });
          updateFormData(financialStatus);
        }}
        type="date"
        mb={5}
        borderColor={"gray"}
      />
    </Container>
  );
};

export default FinancialStatus;