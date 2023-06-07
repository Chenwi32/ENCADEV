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
                {" "}
                <span style={{ fontSize: "0.8rem" }}>Country:</span>{" "}
                <b>{formData.personalInfo.country}</b>
              </Text>
              <Text>
                {" "}
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
                    <span style={{ fontSize: "0.8rem" }}>
                      Other qualification description:
                    </span>{" "}
                    {formData.qualification?.othersSpecific}
                  </Text>
                  <Text>
                    <span style={{ fontSize: "0.8rem" }}>
                      Uploaded certificate:
                    </span>{" "}
                    {formData.qualification?.certificate}
                  </Text>
                  <Text>
                    <span style={{ fontSize: "0.8rem" }}>Subject studied:</span>{" "}
                    {formData.qualification?.subject}
                  </Text>
                  <Text>
                    <span style={{ fontSize: "0.8rem" }}>Institution(s):</span>{" "}
                    {formData.qualification?.institution}
                  </Text>
                  <Text>
                    <span style={{ fontSize: "0.8rem" }}>
                      Year of graduation:
                    </span>{" "}
                    {formData.qualification?.date}
                  </Text>
                  <Text>
                    <span style={{ fontSize: "0.8rem" }}>
                      Language of studies:
                    </span>{" "}
                    {formData.qualification?.lanOfInstruct}
                  </Text>
                  <Text>
                    <span style={{ fontSize: "0.8rem" }}>
                      English profficiency certificate:
                    </span>{" "}
                    {formData.qualification?.englishProff}
                  </Text>
                  <Text>
                    <span style={{ fontSize: "0.8rem" }}>Experience:</span>{" "}
                    {formData.qualification?.experience}
                  </Text>
                </>
              ) : (
                <></>
              )}

              {formData.civilStatus ? (
                <>
                  <Heading fontSize={"1.2rem"}>Civil Status</Heading>
                  <Text>
                    <span style={{ fontSize: "0.8rem" }}> Marital Status:</span>{" "}
                    {formData.civilStatus?.marital}
                  </Text>
                  <Text>
                    <span style={{ fontSize: "0.8rem" }}>
                      {" "}
                      Number of children:
                    </span>{" "}
                    {formData.civilStatus?.numOfChildren}
                  </Text>
                  <Text>
                    <span style={{ fontSize: "0.8rem" }}>
                      {" "}
                      Children age range:
                    </span>{" "}
                    {formData.civilStatus?.ageGroup}
                  </Text>
                  <Text>
                    <span style={{ fontSize: "0.8rem" }}>
                      {" "}
                      Traveling with them?:
                    </span>{" "}
                    {formData.civilStatus?.bringingThem}
                  </Text>
                  <Text>
                    <span style={{ fontSize: "0.8rem" }}> Driving Skills:</span>{" "}
                    {formData.civilStatus?.drivingSkills}
                  </Text>
                  <Text>
                    <span style={{ fontSize: "0.8rem" }}>
                      {" "}
                      Training session location:
                    </span>{" "}
                    {formData.civilStatus?.sessionLocation}
                  </Text>
                </>
              ) : (
                <></>
              )}

              {formData.financialStatus ? (
                <>
                  <Heading fontSize={"1.2rem"}>Financial Readiness</Heading>
                  <Text>
                    <span style={{ fontSize: "0.8rem" }}>Signature:</span>{" "}
                    {formData.financialStatus?.signature}
                  </Text>
                  <Text>
                    <span style={{ fontSize: "0.8rem" }}>Date:</span>{" "}
                    {formData.financialStatus?.date}
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
