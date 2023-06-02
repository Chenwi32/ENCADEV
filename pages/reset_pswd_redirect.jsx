import { Container, Text } from "@chakra-ui/react";
import Link from "next/link";

const Reset_pswd_redirect = () => {
  return (
    <Container p={5} bg={"brand.300"} borderRadius={"lg"}>
      <Text fontSize={"1.1rem"} fontFamily={"Andika"}>
        An email has been sent to the email adress you provided, check your
        inbox, click the link and reset your password and then come back and{" "}
        <Text as={"span"} color={"brand.100"}>
          <Link href={"/login"}>Log In</Link>
        </Text>{" "}
        with your new password.
      </Text>
    </Container>
  );
};

export default Reset_pswd_redirect;
