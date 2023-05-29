import { Box, Container, Heading, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
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

  const router = useRouter();
  const [count, setCount] = useState(30);

  setInterval(() => {
    if (count <= 1) return;
    setCount(count - 1);
  }, 1000);
  //code goes here
  setTimeout(() => {
    router.push("https://www.adaptive-elearn.com/");
  }, 30000);

  return (
    <Container>
      <ReactConfetti width={dimensions.width} height={dimensions.height} />
      <article>
        <Heading fontFamily={"Andika"} fontSize={"1.5rem"} mb={5}>
          Your Application has been sucessfully sent!!{" "}
        </Heading>
        <Text mb={5}>
          Thanks for your interest in our services. We appreciate your trust.
          Our team will carefully analyse your information and will get back to
          within 48 hours to let you know the next step. Hang in there!!
        </Text>

        <Text fontSize={"1rem"}>
          You will be re-directed to ADES home page in <strong>{count}</strong>{" "}
          seconds. If you want to stay on the form, just refresh the page.
        </Text>
      </article>
    </Container>
  );
};

export default Success;
