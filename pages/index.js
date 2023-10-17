import Head from "next/head";
import {
  Container,
  Flex,
  Heading,
  Input,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import Link from "next/link";
import Banner from "../components/banner";

export default function Home() {
  const [isLargerThan700] = useMediaQuery("(min-width: 700px)");

  return (
    <>
      <Head>
        <title>ENCADEV</title>
        <meta name="description" content="ADES-UK forms" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container maxW={1000}>

        <Banner/>
        <Heading
          fontSize={"2rem"}
          mb={5}
          fontFamily={"Andika"}
          color={"brand.200"}
          textAlign={"center"}
        >
          Engineering Career Development
        </Heading>
        <Heading
          fontSize={"2rem"}
          mb={5}
          fontFamily={"Andika"}
          color={"brand.300"}
          textAlign={"center"}
        >
          Welcome
        </Heading>
        <Heading
          fontSize={"2rem"}
          mb={10}
          fontFamily={"Andika"}
          color={"brand.300"}
          textAlign={"center"}
        >
          Thank you for stopping by
        </Heading>
       
      </Container>
    </>
  );
}
