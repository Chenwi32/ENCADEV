import { Container, Flex, Image, HStack } from "@chakra-ui/react";
import Link from "next/link";

const Nav = () => {
  return (
    <Container
      maxW={"unset"}
      color={"brand.300"}
      fontWeight={800}
      bg={"linear-gradient(126deg, rgba(255,255,255,1) 49%, #76c7ec 49%);"}
      p={2}
      boxShadow={"lg"}
      mb={5}
    >
      <Flex
        m={"auto"}
        maxW={1200}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <HStack
          skewX={"50%"}
          gap={3}
          w={"50%"}

          color={"brand.200"}
        >
          <Image src="/images/logo.png" w={'4rem'} />
          <>ADES-Forns</>
        </HStack>

        <Flex width={"60%"} justifyContent={"space-evenly"}>
          <Link href={"/"}>Healthcare</Link>
        </Flex>
      </Flex>
    </Container>
  );
};

export default Nav;
