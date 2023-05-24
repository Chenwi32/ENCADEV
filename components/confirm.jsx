import { Box, Container, Heading, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";

const Confirm = ({ formData }) => {
  const data = [];

  data.push(formData);

  return (
    <Container>
      <Heading fontSize={"1.5rem"} mb={5}>
        Check to see if everything is okay
      </Heading>
      <Box>
        {data.map(
          ({ personalInfo, qualification, civilStatus, financialStatus }) => {
            return (
              <VStack align={"flex-start"} key={data}>
                <Heading fontSize={"1.2rem"}>Personal Info</Heading>
                <Text>
                  <span style={{ fontSize: "0.8rem" }}>Name:</span>{" "}
                  <b>{personalInfo.name}</b>
                </Text>
                <Text>
                  <span style={{ fontSize: "0.8rem" }}>Email:</span>{" "}
                  <b>{personalInfo.email}</b>
                </Text>
                <Text>
                  <span style={{ fontSize: "0.8rem" }}>Phone Number:</span>{" "}
                  <b>{personalInfo.phoneNumber}</b>
                </Text>
                <Text>
                  {" "}
                  <span style={{ fontSize: "0.8rem" }}>Country:</span>{" "}
                  <b>{personalInfo.country}</b>
                </Text>
                <Text>
                  {" "}
                  <span style={{ fontSize: "0.8rem" }}>
                    Province/State/Region:
                  </span>{" "}
                  <b>{personalInfo.province}</b>
                </Text>
                <Text>
                  {" "}
                  <span style={{ fontSize: "0.8rem" }}>City/Town:</span>{" "}
                  <b>{personalInfo.city}</b>
                </Text>
                <Heading fontSize={"1.2rem"}>Qualification</Heading>

                <Text>
                  <span style={{ fontSize: "0.8rem" }}>Qualification:</span>{" "}
                  {qualification.qualification}
                </Text>
                <Text>
                  <span style={{ fontSize: "0.8rem" }}>
                    Other qualification description:
                  </span>{" "}
                  {qualification.othersSpecific}
                </Text>
                <Text>
                  <span style={{ fontSize: "0.8rem" }}>
                    Uploaded certificate:
                  </span>{" "}
                  {qualification.certificate}
                </Text>
                <Text>
                  <span style={{ fontSize: "0.8rem" }}>Subject studied:</span>{" "}
                  {qualification.subject}
                </Text>
                <Text>
                  <span style={{ fontSize: "0.8rem" }}>Institution(s):</span>{" "}
                  {qualification.institution}
                </Text>
                <Text>
                  <span style={{ fontSize: "0.8rem" }}>
                    Year of graduation:
                  </span>{" "}
                  {qualification.date}
                </Text>
                <Text>
                  <span style={{ fontSize: "0.8rem" }}>
                    Language of studies:
                  </span>{" "}
                  {qualification.lanOfInstruct}
                </Text>
                <Text>
                  <span style={{ fontSize: "0.8rem" }}>
                    English profficiency certificate:
                  </span>{" "}
                  {qualification.englishProff}
                </Text>
                <Text>
                  <span style={{ fontSize: "0.8rem" }}>Experience:</span>{" "}
                  {qualification.experience}
                </Text>

                <Heading fontSize={"1.2rem"}>Civil Status</Heading>

                <Text>
                  <span style={{ fontSize: "0.8rem" }}> Marital Status:</span>{" "}
                  {civilStatus.marital}
                </Text>

                <Text>
                  <span style={{ fontSize: "0.8rem" }}>
                    {" "}
                    Number of children:
                  </span>{" "}
                  {civilStatus.numOfChildren}
                </Text>

                <Text>
                  <span style={{ fontSize: "0.8rem" }}>
                    {" "}
                    Children age range:
                  </span>{" "}
                  {civilStatus.ageGroup}
                </Text>

                <Text>
                  <span style={{ fontSize: "0.8rem" }}>
                    {" "}
                    Traveling with them?:
                  </span>{" "}
                  {civilStatus.bringingThem}
                </Text>

                <Text>
                  <span style={{ fontSize: "0.8rem" }}> Driving Skills:</span>{" "}
                  {civilStatus.drivingSkills}
                </Text>

                <Text>
                  <span style={{ fontSize: "0.8rem" }}>
                    {" "}
                    Training session location:
                  </span>{" "}
                  {civilStatus.sessionLocation}
                </Text>

                <Heading fontSize={"1.2rem"}>Financial Readiness</Heading>

                <Text>
                  <span style={{ fontSize: "0.8rem" }}>Signature:</span>{" "}
                  {financialStatus.signature}
                </Text>

                <Text>
                  <span style={{ fontSize: "0.8rem" }}>Date:</span>{" "}
                  {financialStatus.date}
                </Text>
              </VStack>
            );
          }
        )}
      </Box>
    </Container>
  );
};

export default Confirm;
