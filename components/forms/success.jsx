import { Box, Button, Container, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";

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
          Your Application has been sucessfully sent!!{" "}
        </Heading>
        <Text mb={5}>
          Thanks for your interest in our services. We appreciate your trust.
          Our team will carefully analyse your information and will get back to
          you within 48 hours to let you know the next step. Hang in there!!
        </Text>

        <Text fontSize={"1rem"} mb={5}>
          Application Done, Return to {" "}
          <Text as={"span"} color={"brand.100"}>
            <Link href={"https://www.adaptive-elearn.com/"}>
              Home Page &#x27A1;
            </Link>
          </Text>
          
        </Text>
        <Text>
          If you want to stay on the form, just refresh the page.
        </Text>
      </article>
    </Container>
  );
};

export default Success;
