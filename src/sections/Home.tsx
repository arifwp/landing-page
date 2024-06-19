import { Container, Text, VStack } from "@chakra-ui/react";
import { event } from "../data/event";

const HomeSection = () => {
  return (
    <section id="homeSection">
      <Container
        minH="100vh"
        maxW="100vw"
        backgroundImage="url('/images/bg_home.png')"
        backgroundPosition="left"
        backgroundSize="cover"
        backgroundRepeat="no-repeat"
        m={0}
        p={0}
      >
        <VStack
          minH={"100vh"}
          w="100%"
          zIndex={2}
          pt={"72px"}
          justify={"center"}
          backdropFilter={"blur(3px)"}
        >
          <Text
            as="b"
            fontSize={{ base: "42px", md: "62px", lg: "112px" }}
            color="white"
            textAlign="center"
          >
            {event.eventNameWithYear}
          </Text>
        </VStack>
      </Container>
    </section>
  );
};

export default HomeSection;
