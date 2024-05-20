import { Container, Flex, Image, Text, VStack, Wrap } from "@chakra-ui/react";
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
        backgroundPosition="center"
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
                fontSize={{ base: "42px", md: "102px", lg: "112px" }}
                color="white"
                textAlign="center"
              >
                LaLaLa Fest
              </Text>
              <Text
                as="i"
                fontSize={{ base: "14px", md: "32px", lg: "32px" }}
                color="white"
              >
                Powered by :
              </Text>
            </VStack>
            {sponsors.length > 0 ? (
              <Wrap
                alignItems="center"
                spacingX={8}
                spacingY={2}
                justify={"center"}
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
              <>
                <Text color="white">~ Belum ada sponsor ~</Text>
                <Text color="white">
                  Hubungi kami jika berminat mensponsori event ini
                </Text>
              </>
            )}
          </VStack>
        </Flex>
      </Container>
    </section>
  );
};

export default HomeSection;
