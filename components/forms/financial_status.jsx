import { Container, FormLabel, Heading, Input, Text } from "@chakra-ui/react";

const FinancialStatus = ({financialStatus, setFinancialStatus, updateFormData}) => {
  return (
    <Container>
      <Heading fontSize={"1.5rem"} mb={5} fontFamily={'Andika'}>
        Financial Readiness
      </Heading>
      <Text mb={5}>
        Please confirm that you have the financial ability to pay for the
        service package that you are interested in. We do not offer
        scholarships, and we do not have the possibility of bringing you to the
        UK to pay us later. By submitting this form, you are agreeing to the
        service fees outlined above and giving us permission to contact you for
        follow-up.
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
      <FormLabel>Date</FormLabel>
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