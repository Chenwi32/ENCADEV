import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase";
import {
  Box,
  Container,
  HStack,
  Heading,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

const ViewCandData = (props) => {
  const { results } = props;
  return (
    <Container maxW={900}>
      {results.map((canData) => {
        return (
          <Box mb={10} key={canData.personalInfo.phoneNumber} mt={5}>
            <Heading mb={5} fontSize={"1.5rem"}>
              {canData.personalInfo.name}
            </Heading>

            <TableContainer maxW={'fit-content'}>
              <Table size='sm' maxW={'100%'}  >
                <Thead bg={"brand.100"}>
                  <Tr>
                    <Th
                      p={4}
                      color={"white"}
                      fontSize={"1.1rem"}
                      border={"1px"}
                    >
                      Question
                    </Th>
                    <Th
                      p={4}
                      color={"white"}
                      fontSize={"1.1rem"}
                      border={"1px"}
                    >
                      Response
                    </Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td border={"1px"} borderColor={"gray"}>
                      Name
                    </Td>
                    <Td border={"1px"} borderColor={"gray"}>
                      {canData.personalInfo.name}
                    </Td>
                  </Tr>
                  <Tr>
                    <Td border={"1px"} borderColor={"gray"}>
                      Email
                    </Td>
                    <Td border={"1px"} borderColor={"gray"}>
                      {canData.personalInfo.email}{" "}
                    </Td>
                  </Tr>
                  <Tr>
                    <Td border={"1px"} borderColor={"gray"}>
                      Phone Number
                    </Td>
                    <Td border={"1px"} borderColor={"gray"}>
                      {canData.personalInfo.phoneNumber}{" "}
                    </Td>
                  </Tr>
                  <Tr>
                    <Td border={"1px"} borderColor={"gray"}>
                      Country
                    </Td>
                    <Td border={"1px"} borderColor={"gray"}>
                      {canData.personalInfo.country}{" "}
                    </Td>
                  </Tr>
                  <Tr>
                    <Td border={"1px"} borderColor={"gray"}>
                      Province/Region
                    </Td>
                    <Td border={"1px"} borderColor={"gray"}>
                      {canData.personalInfo.province}{" "}
                    </Td>
                  </Tr>
                  <Tr>
                    <Td border={"1px"} borderColor={"gray"}>
                      City
                    </Td>
                    <Td border={"1px"} borderColor={"gray"}>
                      {canData.personalInfo.city}
                    </Td>
                  </Tr>
                  <Tr>
                    <Td border={"1px"} borderColor={"gray"}>
                      Highest Qualification
                    </Td>
                    <Td border={"1px"} borderColor={"gray"}>
                      {canData.qualification.qualification}{" "}
                    </Td>
                  </Tr>
                  <Tr>
                    <Td border={"1px"} borderColor={"gray"}>
                      Other Qualification description
                    </Td>
                    <Td border={"1px"} borderColor={"gray"}>
                      {canData.qualification.othersSpecific}
                    </Td>
                  </Tr>
                  <Tr>
                    <Td border={"1px"} borderColor={"gray"}>
                      Subject
                    </Td>
                    <Td border={"1px"} borderColor={"gray"}>
                      {canData.qualification.subject}
                    </Td>
                  </Tr>
                  <Tr>
                    <Td border={"1px"} borderColor={"gray"}>
                      Institution
                    </Td>
                    <Td border={"1px"} borderColor={"gray"}>
                      {canData.qualification.institution}
                    </Td>
                  </Tr>
                  <Tr>
                    <Td border={"1px"} borderColor={"gray"}>
                      Year
                    </Td>
                    <Td border={"1px"} borderColor={"gray"}>
                      {canData.qualification.date}
                    </Td>
                  </Tr>
                  <Tr>
                    <Td border={"1px"} borderColor={"gray"}>
                      Is English the Language of Studies?
                    </Td>
                    <Td border={"1px"} borderColor={"gray"}>
                      {canData.qualification.lanOfInstruct}
                    </Td>
                  </Tr>
                  <Tr>
                    <Td border={"1px"} borderColor={"gray"}>
                      Has English Language Profficiency Certificate?
                    </Td>
                    <Td border={"1px"} borderColor={"gray"}>
                      {canData.qualification.englishProff}
                    </Td>
                  </Tr>
                  <Tr>
                    <Td  border={"1px"} borderColor={"gray"}>
                      Experience
                    </Td>
                    <Td border={"1px"} borderColor={"gray"}>
                      {canData.qualification.experience}
                    </Td>
                  </Tr>
                  <Tr>
                    <Td border={"1px"} borderColor={"gray"}>
                      Marital Status
                    </Td>
                    <Td border={"1px"} borderColor={"gray"}>
                      {canData.civilStatus.marital}
                    </Td>
                  </Tr>
                  <Tr>
                    <Td border={"1px"} borderColor={"gray"}>
                      Number of Children
                    </Td>
                    <Td border={"1px"} borderColor={"gray"}>
                      {canData.civilStatus.numOfChildren}
                    </Td>
                  </Tr>
                  <Tr>
                    <Td border={"1px"} borderColor={"gray"}>
                      Children's Ages
                    </Td>
                    <Td border={"1px"} borderColor={"gray"}>
                      {canData.civilStatus.ageGroup}
                    </Td>
                  </Tr>
                  <Tr>
                    <Td border={"1px"} borderColor={"gray"}>
                      Traveling with the Children
                    </Td>
                    <Td border={"1px"} borderColor={"gray"}>
                      {canData.civilStatus.bringingThem}
                    </Td>
                  </Tr>
                  <Tr>
                    <Td border={"1px"} borderColor={"gray"}>
                      Driving Skills
                    </Td>
                    <Td border={"1px"} borderColor={"gray"}>
                      {canData.civilStatus.drivingSkills}
                    </Td>
                  </Tr>
                </Tbody>

                <Tfoot>
                  <Tr>
                    <Th
                      p={2}
                      fontSize={"1rem"}
                      borderBottom={"1px"}
                      borderColor={"gray"}
                    >
                      <HStack gap={3}>
                        <Text fontSize={"0.8rem"} fontWeight={"100"}>
                          Signature:
                        </Text>
                        <Text borderBottom={"2px dotted"} w={"100%"}>
                          {canData.financialStatus.signature}
                        </Text>
                      </HStack>
                    </Th>
                    <Th
                      p={2}
                      fontSize={"1rem"}
                      borderBottom={"1px"}
                      borderColor={"gray"}
                    >
                      <HStack gap={3}>
                        <Text fontSize={"0.8rem"} fontWeight={"100"}>
                          Date:
                        </Text>
                        <Text borderBottom={"2px dotted"} w={"100%"}>
                          {canData.financialStatus.date}
                        </Text>
                      </HStack>
                    </Th>
                  </Tr>
                </Tfoot>
              </Table>
            </TableContainer>
          </Box>
        );
      })}
    </Container>
  );
};

export const getServerSideProps = async (context) => {
  const { id } = context.query;

  const candidatescollection = collection(db, "candidates");
  // Query all Id cards
  const candidateQuery = query(
    candidatescollection,
    where("personalInfo.phoneNumber", "==", id)
  );

  // get id cards
  const querySnapshot = await getDocs(candidateQuery);

  // Map through the ids and add them to a new array
  const results = [];

  querySnapshot.forEach((snapshot) => {
    results.push(snapshot.data());
  });

  return {
    props: {
      results: JSON.parse(JSON.stringify(results)),
    },
  };
};

export default ViewCandData;
