import { HStack, Image, Text, VStack, Wrap, WrapItem } from "@chakra-ui/react";
import { CContainer } from "../components/CContainer";
import { event } from "../data/event";
import { sponsors } from "../data/sponsors";

const HomeSection = () => {
  return (
    <CContainer>
      <section id="homeSection" style={{ width: "100%" }}>
        <VStack
          minH="100vh"
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
            pt={"72px"}
            justify={"center"}
            backdropFilter={"blur(2px)"}
          >
            <Text
              as="b"
              fontSize={{ base: "42px", md: "62px", lg: "112px" }}
              color="white"
              textAlign="center"
            >
              {event.eventNameWithYear}
            </Text>

            {/* <VStack mt={4} mx={"auto"}>
              <Text fontSize={"16px"} color={"white"} as={"i"}>
                Powered by :
              </Text>

              <HStack mt={4}>
                <Image
                  w={"100%"}
                  maxW={"120px"}
                  objectFit={"contain"}
                  src={"images/sponsors/spotify.png"}
                />

                <Image
                  w={"100%"}
                  maxW={"120px"}
                  objectFit={"contain"}
                  src={"images/sponsors/audi.png"}
                />

                <Image
                  w={"100%"}
                  maxW={"120px"}
                  objectFit={"contain"}
                  src={"images/sponsors/cocacola.png"}
                />
              </HStack>
            </VStack> */}
          </VStack>
        </VStack>
      </section>
    </CContainer>
  );
};

export default HomeSection;
