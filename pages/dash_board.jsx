import { Box, Container, Heading, Text, VStack, useMediaQuery } from "@chakra-ui/react";
import { collection, getDocs, query } from "firebase/firestore";
import { db } from "../firebase";
import { useRouter } from "next/router";

const Dash_board = (props) => {
    const [isLargerThan700] = useMediaQuery("(min-width: 700px)");

  const router = useRouter()

    const {results} = props

    return (
      <Container bg={'brand.300'}  p={isLargerThan700? 10 : 5} borderRadius={isLargerThan700? 'xl' : 'none'}>
        <Heading fontFamily={'Andika'} mb={5}>Names of Candidates</Heading>
        <Heading fontFamily={'Andika'} fontSize={'1.1rem'} mb={5}>Click on a candidate to view more information.</Heading>
        <VStack align={"left"} gap={3}>
          {results.map((candit) => {
            return (
              <Text
                borderRadius={"lg"}
                border={'2px'}
                borderColor={'brand.200'}
                boxShadow={'xl'}
                fontWeight={800}
                p={2}
                pl={5}
                bg={"brand.100"}
                color={"brand.300"}
                key={candit.personalInfo.phoneNumber}
                cursor={"pointer"}
                onClick={() => {
                  router.push(`/${candit.personalInfo.phoneNumber}`);
                }}
              >
                {candit.personalInfo.name}
              </Text>
            );
          })}
        </VStack>
      </Container>
    );
}


export const getServerSideProps = async () => {
  const candidatescollection = collection(db, "candidates");
  // Query all Id cards
  const candidateQuery = query(candidatescollection);

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

export default Dash_board;