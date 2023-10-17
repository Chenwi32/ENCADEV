import { Box, Container, Heading, Text, VStack } from "@chakra-ui/react";


const Confirm = ({ formData }) => {
  const data = [];

  data.push(formData);

  return (
    <Container>
      <Heading fontSize={"1.5rem"} mb={5}>
        Check to see if everything is okay
      </Heading>
      <Box>
        {data.map((formData) => {
          return (
            <VStack align={"flex-start"} key={data}>
              <Heading fontSize={"1.2rem"}>Personal Info</Heading>
              <Text>
                <span style={{ fontSize: "0.8rem" }}>Name:</span>{" "}
                <b>{formData.personalInfo.name}</b>
              </Text>
              <Text>
                <span style={{ fontSize: "0.8rem" }}>Email:</span>{" "}
                <b>{formData.personalInfo.email}</b>
              </Text>
              <Text>
                <span style={{ fontSize: "0.8rem" }}>Phone Number:</span>{" "}
                <b>{formData.personalInfo.phoneNumber}</b>
              </Text>

              <Text>
                <span style={{ fontSize: "0.8rem" }}>
                  Province/State/Region:
                </span>{" "}
                <b>{formData.personalInfo.province}</b>
              </Text>
              <Text>
                {" "}
                <span style={{ fontSize: "0.8rem" }}>City/Town:</span>{" "}
                <b>{formData.personalInfo.city}</b>
              </Text>
              {formData.qualification ? (
                <>
                  <Heading fontSize={"1.2rem"}>Qualification</Heading>
                  <Text>
                    <span style={{ fontSize: "0.8rem" }}>Qualification:</span>{" "}
                    {formData.qualification?.qualification}
                  </Text>

                  <Text>
                    <span style={{ fontSize: "0.8rem" }}>Field:</span>{" "}
                    {formData.qualification?.subject}
                  </Text>
                  <Text>
                    <span style={{ fontSize: "0.8rem" }}>Status:</span>{" "}
                    {formData.qualification?.status}
                  </Text>
                  <Text>
                    <span style={{ fontSize: "0.8rem" }}>Expectations:</span>{" "}
                    {formData.qualification?.expectations}
                  </Text>
                </>
              ) : (
                <></>
              )}
            </VStack>
          );
        })}
      </Box>
    </Container>
  );
};

export default Confirm;
