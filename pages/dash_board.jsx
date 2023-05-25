import { Box, Container, Heading, Text, VStack } from "@chakra-ui/react";
import { collection, getDocs, query } from "firebase/firestore";
import { db } from "../firebase";
import { useRouter } from "next/router";

const Dash_board = (props) => {

  const router = useRouter()

    const {results} = props

    return (
      <Container p={5}>
        <Heading mb={5}>Names of Candidates</Heading>
        <VStack align={"left"}>
          {results.map((candit) => {
            return <Text key={candit.personalInfo.phoneNumber} cursor={"pointer"} onClick={
              () => {
                router.push(`/${candit.personalInfo.phoneNumber}`);
              }
            }>{candit.personalInfo.name}</Text>;
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