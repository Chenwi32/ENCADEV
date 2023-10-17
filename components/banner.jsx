import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Image,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import Link from "next/link";

const Banner = () => {
  const [isLargerThan800] = useMediaQuery("(min-width: 800px)");

  return (
    <Container
      maxW={"unset"}
      minH={"70vh"}
      w="100%"
      backgroundColor="brand.300"
      backgroundRepeat="no-repeat"
      backgroundPosition={"center"}
      backgroundSize="cover"
      display={"flex"}
      alignItems="center"
      mb={20}
      p={0}
      borderRadius={"lg"}
      boxShadow={"2xl"}
    >
      <Flex
        maxW={1200}
        m={"auto"}
        flexDirection={isLargerThan800 ? "row" : "column"}
        p={isLargerThan800 ? 10 : 2}
        alignItems={"center"}
      >
        <Flex
          flexDirection={"column"}
          w={isLargerThan800 ? "50%" : "100%"}
          p={isLargerThan800 ? "0" : "0.5rem"}
          mr={5}
          textAlign={isLargerThan800 ? "initial" : "center"}
          alignItems={isLargerThan800 ? "initial" : "center"}
        >
          <Heading fontFamily={"Andika"} color="brand.200" mb={5}>
            We are here to help you prepare for a rewarding career in future
          </Heading>
          <Text fontFamily={"Poppins"} mb={5} color="brand.400">
            The future of work is fast changing, get up to speed and be ready to
            face the real world with us.
          </Text>

          <Link href="/form">
            <Button
              bg={
                "linear-gradient(239deg, rgba(0,211,192,1) 10%, rgba(31,30,30,1) 90%)"
              }
              transitionDuration={'0.5s'}
              w={isLargerThan800 ? "50%" : "fit-content"}
              color="brand.300"
              position={"unset"}
              _hover={{
                bg: "brand.200",
              }}
            >
              Get started
            </Button>
          </Link>
        </Flex>

        <Box display={isLargerThan800 ? "block" : "none"}>
          <Image
            borderRadius={"xl"}
            boxShadow={"2xl"}
            src="/images/pic-1.jpeg"
            alt=""
            w={500}
          />
        </Box>
      </Flex>
    </Container>
  );
};

export default Banner;
