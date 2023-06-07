import {
  Container,
  Flex,
  Image,
  HStack,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const menuItemText = ["Healthcare", "Solar Training"];

const Nav = () => {
  const [isLargerThan700] = useMediaQuery("(min-width: 700px)");
  const [menuItem, setMenuItem] = useState(0);

  const router = useRouter();

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
        <Link href={"/"}>
          {" "}
          <HStack w={"100%"} color={"brand.200"}>
            <Image
              src="/images/logo.png"
              w={isLargerThan700 ? "4rem" : "2.5rem"}
            />
            <Text
              as={"span"}
              fontSize={isLargerThan700 ? "initial" : "0.75rem"}
            >
              ADES-Forns
            </Text>
          </HStack>{" "}
        </Link>
        <Flex width={"60%"} gap={5} justifyContent={"flex-end"} alignItems={'center'}>
          <Link
            href="/healthcare"
            className={router.pathname == "/healthcare" ? "active" : ""}
          >
            Healthcare
          </Link>
          <Link
            href="/solar_training"
            className={router.pathname == "/solar_training" ? "active" : ""}
          >
            Healthcare
          </Link>
        </Flex>
      </Flex>
    </Container>
  );
};

export default Nav;
