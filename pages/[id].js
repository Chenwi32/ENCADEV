import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase";
import {
  Box,
  Container,
  Flex,
  HStack,
  Heading,
  Image,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Thead,
  Tr,
  useMediaQuery,
} from "@chakra-ui/react";
import dynamic from "next/dynamic";
import { useRef } from "react";
import Head from "next/head";

const Generatepdf = dynamic(() => import("../components/generatepdf"), {
  //this deactivates server side rendering since we need to initialize this only in the frontend
  ssr: false,
});

const ViewCandData = (props) => {
  const { results } = props;

  const ref = useRef();

  const [isLargerThan700] = useMediaQuery("(min-width: 700px)");

  return (
    <>
      <Head>
        <title>ENCADEV Candidate</title>
        <meta
          name="description"
          content="ENCADEV candidate information page"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container maxW={900} p={"auto"}>
        {results.map((canData) => {
          return (
            <Box
              ref={ref}
              mb={10}
              key={canData.personalInfo.phoneNumber}
              mt={5}
            >
              <Heading fontFamily={"Andika"} mb={5} fontSize={"1.5rem"}>
                {canData.personalInfo.name}
              </Heading>

              <TableContainer
                whiteSpace={"break-spaces"}
                bg={"brand.300"}
                p={isLargerThan700 ? 10 : 0}
                maxW={"fit-content"}
                borderRadius={isLargerThan700 ? "xl" : "none"}
              >
                <Table id="table_content" size="sm" maxW={"100%"}>
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
                        Date of birth
                      </Td>
                      <Td border={"1px"} borderColor={"gray"}>
                        {canData.personalInfo.dateOfBirth}
                      </Td>
                    </Tr>
                    <Tr>
                      <Td border={"1px"} borderColor={"gray"}>
                        Sex
                      </Td>
                      <Td border={"1px"} borderColor={"gray"}>
                        {canData.personalInfo.sex}
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
                        Subject
                      </Td>
                      <Td border={"1px"} borderColor={"gray"}>
                        {canData.qualification.subject}
                      </Td>
                    </Tr>
                  
                    <Tr>
                      <Td border={"1px"} borderColor={"gray"}>
                        Expectations
                      </Td>
                      <Td
                        whiteSpace={"break-spaces"}
                        border={"1px"}
                        borderColor={"gray"}
                      >
                        <Text>{canData.qualification.expectations}</Text>
                      </Td>
                    </Tr>
                    
                  </Tbody>

                </Table>
              </TableContainer>
              <Generatepdf html={ref} candidate={canData.personalInfo.name} />

            </Box>
          );
        })}
      </Container>
    </>
  );
};

export const getServerSideProps = async (context) => {
  const { id } = context.query;

  const candidatescollection = collection(db, "encadev");
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
