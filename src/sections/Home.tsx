import { Container, Flex, Image, Text, VStack, Wrap } from "@chakra-ui/react";
import Empty from "../components/Empty";
import { event } from "../data/event";
import { sponsors } from "../data/sponsors";
import useScreenWidth from "../lib/useScreenWidth";

const HomeSection = () => {
  const sw = useScreenWidth();

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
        <Flex alignItems="center" minH="100vh">
          <VStack w="100%" zIndex={2}>
            <VStack>
              <Text
                as="b"
                fontSize={{ base: "42px", md: "62px", lg: "112px" }}
                color="white"
                textAlign="center"
              >
                {event.eventNameWithYear}
              </Text>

              {/* <Text
                as="i"
                fontSize={{ base: "14px", md: "22px", lg: "32px" }}
                color="white"
                mt={4}
              >
                Powered by :
              </Text> */}
            </VStack>

            {/* {sponsors.length > 0 ? (
              <Wrap
                alignItems="center"
                spacingX={8}
                spacingY={2}
                justify={"center"}
                mt={2}
              >
                {sponsors.map(
                  (sponsor, i) =>
                    sponsor.isBig && (
                      <Image
                        key={i}
                        src={sponsor.imgUrl}
                        alt={sponsor.name}
                        h={sw <= 768 ? "20px" : "50px"}
                        objectFit={"contain"}
                      />
                    )
                )}
              </Wrap>
            ) : (
              <Empty componentName="sponsor" bigSponsor={true} />
            )} */}
          </VStack>
        </Flex>
      </Container>
    </section>
  );
};

export default HomeSection;
