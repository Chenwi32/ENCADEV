import { Container, Heading, SkeletonText } from "@chakra-ui/react";

const About = () => {
    return (
      <Container borderRadius={'lg'} maxW={1000} minH={"90vh"} bg={"brand.300"} p={10}>
        <Heading fontFamily={"Andika"} mb={10}>
          About US
        </Heading>

        <SkeletonText mb={5} />
        <SkeletonText mb={5} />
        <SkeletonText mb={5} />
        <SkeletonText mb={5} />
        <SkeletonText mb={5} />
        <SkeletonText mb={5} />
      </Container>
    );
}

export default About;