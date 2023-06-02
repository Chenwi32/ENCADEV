import { sendPasswordResetEmail } from "firebase/auth";
import { useState } from "react";
import { auth } from "../firebase";
import { FormProvider, useForm } from "react-hook-form";
import {
  Button,
  Container,
  Flex,
  Heading,
  Input,
  Text,
} from "@chakra-ui/react";
import Announcement from "../components/Announcement";

const ResetPassword = () => {
  const [email, setEmail] = useState("");

  const methods = useForm({ mode: "onBlur" });

  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods;

  const submit = async () => {
    try {
      await sendPasswordResetEmail(auth, email).then(() => {});
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
        <FormProvider {...methods}>
          <form action="" onSubmit={handleSubmit(submit)}>
            {errorMessage === "" ? (
              <></>
            ) : (
              <Announcement message={errorMessage} type={"error"} />
            )}
            <Flex
              flexDirection={"column"}
              w={"100%"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Heading fontSize={"1.1rem"} mb={5} fontFamily={"Andika"}>
                type your account email here
              </Heading>
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
                Reset Password
              </Button>
            </Flex>
          </form>
        </FormProvider>
      </Flex>
    </Container>
  );
};

export default ResetPassword;
