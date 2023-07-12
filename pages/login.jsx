import {
  Box,
  Button,
  Checkbox,
  Container,
  Flex,
  Heading,
  Icon,
  Input,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useState } from "react";
import { useAuth } from "../components/authcontprov";
import { FormProvider, useForm } from "react-hook-form";
import Announcement from "../components/Announcement";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const Login = () => {
  const [isLargerThan700] = useMediaQuery("(min-width: 700px)");
  const [email, setEmail] = useState();
  const [password, setPassWord] = useState();
  const [isVisible, setVisible] = useState(false);

  const [errorMessage, setErrorMessage] = useState("");

  const methods = useForm({ mode: "onBlur" });
  /* const { logIn, rememberMe, setRememberMe } = useAuth(); */
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods;

  const onSubmit = async (data) => {
    try {
      await logIn(data.email, data.password);
      router.push("/dash_board");
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <Container p={5} bg={"brand.300"} borderRadius={"lg"}>
      <Flex
        m="auto"
        flexDirection={"column"}
        maxW={700}
        p={5}
        alignItems="center"
        textAlign={"left"}
      >
        <Flex
          alignItems={"center"}
          m={"auto"}
          gap={3}
          w={isLargerThan700 ? "50%" : "100%"}
          justifyContent={"center"}
          mb={10}
        >
          <Box h={"0.1rem"} w={50} bg={"brand.100"}></Box>
          <Heading
            color={"brand.100"}
            fontSize={"1.5rem"}
            fontFamily={"Andika"}
          >
            Log In
          </Heading>
          <Box h={"0.1rem"} w={50} bg={"brand.100"}></Box>
        </Flex>

        {errorMessage === "" ? (
          <></>
        ) : (
          <Announcement message={errorMessage} type={"error"} />
        )}
        <FormProvider {...methods}>
          <form action="" onSubmit={handleSubmit(onSubmit)}>
            <Flex
              flexDirection={"column"}
              w={"100%"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Flex flexDirection={"column"} alignItems={"flex-start"} mb={5}>
                <Text color="brand.600">Email:</Text>
                <Input
                  {...register("email", { required: "Email is required" })}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  placeholder="example: example@gmail.com"
                  className={`main_input `}
                  type="email"
                  value={email}
                  required
                  border={"1px"}
                />

                {errors.email && (
                  <Text color={"red"}>
                    <small>{errors.email.message}</small>
                  </Text>
                )}
              </Flex>

              <Flex flexDirection={"column"} alignItems={"flex-start"} mb={5}>
                <Text color="brand.600">Password:</Text>

                <Flex gap={0} p={0} h="fit-content">
                  <Input
                    {...register("password", {
                      required: "Password is required",
                    })}
                    type={isVisible ? "text" : "password"}
                    value={password}
                    onChange={(e) => {
                      setPassWord(e.target.value);
                    }}
                    placeholder="Password"
                    className={`main_input `}
                    required
                    border={"1px"}
                  />

                  <Flex
                    color="brand.400"
                    p={"0.2rem 0.5rem"}
                    alignItems={"center"}
                    ml={"-2rem"}
                    borderTopRightRadius={5}
                    borderBottomRightRadius={5}
                    zIndex={1}
                  >
                    <Icon
                      fontSize={"1rem"}
                      onClick={() => {
                        if (isVisible) {
                          setVisible(false);
                        } else {
                          setVisible(true);
                        }
                      }}
                    >
                      <FontAwesomeIcon icon={isVisible ? faEye : faEyeSlash} />
                    </Icon>
                  </Flex>
                </Flex>

                {errors.password && (
                  <Text color={"red"}>
                    <small>{errors.password.message}</small>{" "}
                  </Text>
                )}

                {/*  <Text>Remember Me</Text>
                <Checkbox
                  isChecked={rememberMe}
                  value={rememberMe}
                  onChange={(e) => {
                    setRememberMe(e.target.checked);
                  }}
                />
                 */}
                <Text mt={2} textAlign={"left"} w={"100%"} color={"brand.100"}>
                  <Link href={"/resetPassword"}>Forgot Password</Link>
                </Text>
              </Flex>

              <Button
                bg="brand.100"
                color="brand.300"
                _hover={{
                  bg: "",
                }}
                p={5}
                mb={10}
                type="submit"
                w={"100%"}
              >
                Log In
              </Button>
            </Flex>
          </form>
        </FormProvider>
      </Flex>
    </Container>
  );
};

export default Login;
