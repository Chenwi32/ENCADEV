import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  useMediaQuery,
} from "@chakra-ui/react";
import { collection, getDocs, query } from "firebase/firestore";
import { db } from "../firebase";
import { useRouter } from "next/router";
import Head from "next/head";
import { AuthContextProvider, useAuth } from "../components/authcontprov";
import ProtectedRoute from "../components/protectedroute";
import { useEffect, useState } from "react";

const Dash_board = (props) => {
  const { user } = useAuth();

  const [userName, setUserName] = useState("");

  const [isLargerThan700] = useMediaQuery("(min-width: 700px)");

  const router = useRouter();

  const { results } = props;

  useEffect(() => {
    if (user.email !== null) {
      const string = user.email.toString();
      const firstTwo = string.substring(0, 6);
      setUserName(firstTwo);
    }
  }, [user]);

  return (
    <>
      <ProtectedRoute>
        <Head>
          <title>ADES-UK Healthcare Candidates</title>
          <meta
            name="description"
            content="ADES-UK healthcare List of candidates"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Container
          bg={"brand.300"}
          p={isLargerThan700 ? 10 : 5}
          borderRadius={isLargerThan700 ? "xl" : "none"}
        >
          <Heading fontSize={'1.5rem'} fontFamily={"Andika"} mb={5}>Hey {userName }, welcome back</Heading>
          <Heading fontFamily={"Andika"} mb={5}>
            Names of Candidates
          </Heading>
          <Heading fontFamily={"Andika"} fontSize={"1.1rem"} mb={5}>
            {results.length === 0
              ? "Sorry, no one has registered yet"
              : "Click on a candidate to view more information."}
          </Heading>
          <VStack align={"left"} gap={3}>
            {results.map((candit) => {
              return (
                <Text
                  borderRadius={"lg"}
                  border={"2px"}
                  borderColor={"brand.200"}
                  boxShadow={"xl"}
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
      </ProtectedRoute>
    </>
  );
};

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
