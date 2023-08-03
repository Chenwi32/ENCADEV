import { useEffect, useState } from "react";
import { useAuth } from "../components/authcontprov";
import { Button, Container, HStack, Heading, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalOverlay, Text, VStack, useDisclosure, useMediaQuery } from "@chakra-ui/react";
import { useRouter } from "next/router";
import ProtectedRoute from "../components/protectedroute";
import Head from "next/head";
import Link from "next/link";
import { collection, getDocs, query } from "firebase/firestore";
import { db } from "../firebase";

const OlderCandidates = (props) => {
  const { user, logOut, rememberMe } = useAuth();

  const [userName, setUserName] = useState("");

  const [isLargerThan700] = useMediaQuery("(min-width: 700px)");

  /* Modal */
  const { isOpen, onOpen, onClose } = useDisclosure();

  const router = useRouter();

  const { july_results } = props;

  useEffect(() => {
    if (user.email !== null) {
      const string = user.email.toString();
      const firstTwo = string.substring(0, 6);
      setUserName(firstTwo);
    }
  }, [user]);

  const handleLogout = async () => {
    try {
      await logOut();
      router.push("/login");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      {/* <ProtectedRoute rememberMe={rememberMe}> */}
        <Head>
          <title>ADES-UK-Forms | Healthcare Candidates</title>
          <meta
            name="description"
            content="ADES-UK healthcare List of candidates"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Container maxW={1200}>
          <HStack mb={5} gap={5} justifyContent={"flex-end"}>
            <Link href={"/dash_board"}>
              <Button bg={"brand.100"} color={"brand.300"} _hover={{ bg: "" }}>
                See New Candidates
              </Button>
            </Link>

            <Button
              onClick={onOpen}
              bg={"brand.100"}
              color={"brand.300"}
              _hover={{ bg: "" }}
            >
              Log Out
            </Button>
          </HStack>

          <Container
            bg={"brand.300"}
            p={isLargerThan700 ? 10 : 5}
            borderRadius={isLargerThan700 ? "xl" : "none"}
          >
            <Heading fontSize={"1.5rem"} fontFamily={"Andika"} mb={5}>
              Hey {userName}, welcome back
            </Heading>
            <Heading fontFamily={"Andika"} mb={5}>
              Here are the names of Candidates of our last hiring session
            </Heading>
            <Heading fontFamily={"Andika"} fontSize={"1.1rem"} mb={5}>
              {july_results.length === 0
                ? "Sorry, no one has registered yet"
                : "Click on a candidate to view their data"}
            </Heading>
                      <VStack
                          align={"left"} gap={3}>
              {july_results.map((candit, i) => {
                const canNumber = i + 1;
                return (
                  <Text
                    borderRadius={"lg"}
                    border={"2px"}
                    borderColor={"brand.200"}
                    boxShadow={"xl"}
                    fontWeight={800}
                    p={2}
                    bg={"brand.100"}
                    color={"brand.300"}
                    key={candit.personalInfo.phoneNumber}
                    cursor={"pointer"}
                    onClick={() => {
                      router.push(
                        `/older-candidates/${candit.personalInfo.phoneNumber}`
                      );
                    }}
                  >
                    <Button
                      _hover={{
                        bg: "",
                      }}
                      mr={3}
                      color={"brand.300"}
                      bg={"brand.200"}
                    >
                      {canNumber}
                    </Button>{" "}
                    {candit.personalInfo.name}
                  </Text>
                );
              })}
            </VStack>
          </Container>

          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalCloseButton
                color={"brand.200"}
                _hover={{
                  color: "red",
                }}
              />
              <ModalBody
                display={"flex"}
                justifyContent="center"
                minH={"30vh"}
                alignItems="center"
              >
                <Text>Are you sure you want to Log out?</Text>
              </ModalBody>

              <ModalFooter display={"flex"} justifyContent="space-between">
                <Button
                  bg={"brand.200"}
                  _hover={{
                    bg: "brand.200",
                  }}
                  color={"brand.300"}
                  mr={3}
                  onClick={onClose}
                >
                  Cancel
                </Button>
                <Button
                  onClick={() => {
                    onClose();
                    handleLogout();
                  }}
                  _hover={{
                    bg: "brand.100",
                  }}
                  bg={"brand.100"}
                  color={"brand.300"}
                >
                  Yes
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </Container>
   {/*    </ProtectedRoute> */}
    </>
  );
}

export const getServerSideProps = async () => {

  const july_candidatescollection = collection(db, "candidates");
  // Query all Id cards
 
  const july_candidateQuery = query(
    july_candidatescollection
    /* limit(10) */
  );

  // get id cards
  
  const july_querySnapshot = await getDocs(july_candidateQuery);

  // Map through the ids and add them to a new array
  
  const july_results = [];

 
  july_querySnapshot.forEach((snapshot) => {
    july_results.push(snapshot.data());
  });

  return {
    props: {
      july_results: JSON.parse(JSON.stringify(july_results)),
    },
  };
};

export default OlderCandidates;