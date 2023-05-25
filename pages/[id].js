import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase";
import { Box, Container, Heading } from "@chakra-ui/react";

const ViewCandData = (props) => {
  const {results} = props
    return (
      <Container>
        
        {results.map(canData => {
          return (
            <Box key={canData.personalInfo.phoneNumber}>
              <Heading fontSize={"1.5rem"}>{canData.personalInfo.name}</Heading>
            </Box>
          );
        })}

        </Container>
    );
}

export const getServerSideProps = async (context) => {
  
  const { id } = context.query
  


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