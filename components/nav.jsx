import {
  Container,
  Flex,
  Image,
  useMediaQuery,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  IconButton,
  Box,
  Text,
} from "@chakra-ui/react";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useRouter } from "next/router";

const Nav = () => {
  const [isLargerThan700] = useMediaQuery("(min-width: 700px)");

  const router = useRouter();

  return (
    <Container
      maxW={"unset"}
      color={"brand.200"}
      fontWeight={800}
      bg={"brand.300"}
      /* bg={"linear-gradient(126deg, rgba(255,255,255,1) 49%, #00D3C0 49%);"} */
      p={isLargerThan700 ? 2 : 0}
      boxShadow={"lg"}
      mb={5}
    >
      <Flex
        m={"auto"}
        maxW={1200}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        {" "}
        <Box w={"50%"} color={"brand.200"}>
          <Link href={"/"}>
            {" "}
            {/* <Image src="/images/logo.png" w={isLargerThan700 ? 300 : 250} /> */}
            <Text fontWeight={"1000"} color={"brand.200"}>
              ENCADEV
            </Text>
          </Link>
        </Box>
        <Flex
          display={isLargerThan700 ? "flex" : "none"}
          width={"fit-content"}
          gap={5}
          justifyContent={"flex-end"}
          alignItems={"center"}
        >
          <Link
            href="/about
            "
            className={router.pathname == "/about" ? "active" : ""}
          >
            About Us
          </Link>
          <Link
            href="/form
            "
            className={router.pathname == "/form" ? "active" : "btn"}
          >
            Join Us
          </Link>
        </Flex>
        {/*      <Menu>
          <MenuButton
            color={"brand.300"}
            p={2}
            bg={"inherit"}
            as={IconButton}
            display={isLargerThan700 ? "none" : "block"}
            icon={<FontAwesomeIcon icon={faBars} />}
            mr={3}
            _hover={{
              bg: "",
            }}
            _active={{ bg: "brand.100.2" }}
          />
          <MenuList color={"brand.100"} p={4}>
            <Link href="/healthcare">
              <MenuItem
                bg={router.pathname === "/healthcare" ? "brand.100" : "inherit"}
                color={
                  router.pathname === "/healthcare" ? "brand.300" : "inherit"
                }
                borderRadius={"lg"}
                mb={3}
                _hover={
                  router.pathname === "/healthcare"
                    ? ""
                    : {
                        bg: "brand.100.2",
                        color: "brand.300",
                      }
                }
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
                _hover={
                  router.pathname === "/solar_training"
                    ? ""
                    : {
                        bg: "brand.100.2",
                        color: "brand.300",
                      }
                }
              >
                solar Training
              </MenuItem>{" "}
            </Link>
          </MenuList>
        </Menu> */}
      </Flex>
    </Container>
  );
};

export default Nav;
