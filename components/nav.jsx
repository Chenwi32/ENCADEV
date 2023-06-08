import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Container,
  Flex,
  Image,
  HStack,
  Text,
  useMediaQuery,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  IconButton,
  Box,
} from "@chakra-ui/react";
import { faBars, fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
        <Flex
          display={isLargerThan700 ? "flex" : "none"}
          width={"60%"}
          gap={5}
          justifyContent={"flex-end"}
          alignItems={"center"}
        >
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
            solar Training
          </Link>
        </Flex>

        <Menu>
          <MenuButton display={isLargerThan700 ? "none" : "block"} p={1} mr={3}>
            <FontAwesomeIcon icon={faBars} />
          </MenuButton>
          <MenuList color={"brand.100"} p={4}>
            <Link href="/healthcare">
              <MenuItem
                bg={router.pathname === "/healthcare" ? "brand.100" : "inherit"}
                color={
                  router.pathname === "/healthcare" ? "brand.300" : "inherit"
                }
                borderRadius={"lg"}
              >
                Healthcare
              </MenuItem>
            </Link>

            <Link href="/solar_training">
              <MenuItem
                bg={
                  router.pathname === "/solar_training"
                    ? "brand.100"
                    : "inherit"
                }
                color={
                  router.pathname === "/solar_training"
                    ? "brand.300"
                    : "inherit"
                }
                borderRadius={"lg"}
              >
                solar Training
              </MenuItem>{" "}
            </Link>
          </MenuList>
        </Menu>
      </Flex>
    </Container>
  );
};

export default Nav;
