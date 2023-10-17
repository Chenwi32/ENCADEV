import { Box, Container, Heading, Text } from "@chakra-ui/react";


import { useEffect, useState } from "react";
import ReactConfetti from "react-confetti";

const Success = () => {
  const [dimensions, setDimensions] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const { innerWidth: width, innerHeight: height } = window;
    setDimensions({ width, height });
  }, []);

  const [showConfetti, setShowConfetti] = useState(true);

  //code goes here
  setTimeout(() => {
    setShowConfetti(false);
  }, 6000);

  return (
    <Container>
      <Box display={showConfetti === true ? "block" : "none"}>
        <ReactConfetti width={dimensions.width} height={dimensions.height} />
      </Box>

      <article>
        <Heading fontFamily={"Andika"} fontSize={"1.5rem"} mb={5}>
          Your information has been sucessfully sent!!{" "}
        </Heading>
        <Text mb={5}>
          Thank you for taking the first step to prepare yourself for a
          successful career. We are grateful that you trust us to help you
          through this challenging journey. Our team will carefully analyse your
          information and will get back to you through any of the contact
          informations you provided, so you should expect an email, a call, or a
          whatsapp message from us anytime soon.
          <br /> <strong>Hang in there!!</strong>
        </Text>
      </article>
    </Container>
  );
};

export default Success;
