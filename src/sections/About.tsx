import {
  HStack,
  Icon,
  Text,
  VStack,
  Image,
  Link,
  SimpleGrid,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import useScreenWidth from "../lib/useScreenWidth";
import { FaQuoteLeft } from "react-icons/fa";

const AboutSection = () => {
  const sw = useScreenWidth();

  return (
    <section id="aboutSection">
      <VStack
        bg={"black"}
        align={"stretch"}
        px={10}
        overflow={"hidden"}
        py={24}
      >
        <Text color={"blue.500"} as={"b"}>
          Tentang Kita
        </Text>
        <Text
          color={"white"}
          as={"b"}
          fontSize={{ base: "24px", md: "40px", lg: "68px" }}
        >
          LaLaLa Fest itu apa sih?
        </Text>

        <SimpleGrid columns={[1, null, 2]} spacingY={12} spacingX={20}>
          <VStack align={"stretch"}>
            <Text
              color={"white"}
              fontSize={{ base: "12px", md: "14px", lg: "14px" }}
              mt={4}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </Text>

            <HStack align={"stretch"} mt={10}>
              <Icon as={FaQuoteLeft} fontSize={30} color={"red"}></Icon>
              <VStack align={"stretch"}>
                <Text
                  color={"red"}
                  fontSize={{ base: "18px", md: "22px", lg: "22px" }}
                >
                  Sujiwo Tejo
                </Text>
                <Text
                  color={"white"}
                  as={"i"}
                  fontSize={{ base: "12px", md: "14px", lg: "14px" }}
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </Text>
              </VStack>
            </HStack>

            <Text
              color={"white"}
              fontSize={{ base: "14px", md: "18px", lg: "18px" }}
              mt={10}
            >
              Sosial Media
            </Text>

            <Wrap
              color={"white"}
              fontSize={{ base: "12px", md: "14px", lg: "14px" }}
              spacing={4}
              mt={4}
            >
              <Link
                href="https://www.instagram.com/ketaon_fair/"
                isExternal
                style={{ textDecoration: "none" }}
              >
                <WrapItem
                  _hover={{
                    bg: "red.500",
                    textColor: "black",
                    transform: "scale(1)",
                    padding: "10px",
                    borderRadius: "10px",
                  }}
                  transition="all .25s ease"
                  my={"auto"}
                >
                  <HStack>
                    <Image src="/images/logo/instagram.png" maxW={"16px"} />
                    <Text>LaLaLa Fest</Text>
                  </HStack>
                </WrapItem>
              </Link>
              <Link
                href="https://www.youtube.com/@manggalawijayaketaon2320"
                isExternal
                style={{ textDecoration: "none" }}
              >
                <WrapItem
                  _hover={{
                    bg: "red.500",
                    textColor: "black",
                    transform: "scale(1)",
                    padding: "10px",
                    borderRadius: "10px",
                  }}
                  transition="all .25s ease"
                  my={"auto"}
                >
                  <HStack>
                    <Image src="/images/logo/youtube.png" maxW={"16px"} />
                    <Text>LaLaLa Fest</Text>
                  </HStack>
                </WrapItem>
              </Link>
              <Link
                href="https://www.tiktok.com/@ketaonfair"
                isExternal
                style={{ textDecoration: "none" }}
              >
                <WrapItem
                  _hover={{
                    bg: "red.500",
                    textColor: "black",
                    transform: "scale(1)",
                    padding: "10px",
                    borderRadius: "10px",
                  }}
                  transition="all .25s ease"
                  my={"auto"}
                >
                  <HStack>
                    <Image src="/images/logo/tiktok.png" maxW={"16px"} />
                    <Text>LaLaLa Fest</Text>
                  </HStack>
                </WrapItem>
              </Link>
            </Wrap>
          </VStack>

          <HStack justify={"center"} px={12} spacing={10}>
            <Image src="/images/thumbnailArtist.png" w={"660px"} />

            <VStack
              color={"white"}
              textAlign={"center"}
              my={"auto"}
              spacing={0}
            >
              <Text
                fontSize={{ base: "18px", md: "22px", lg: "26px" }}
                color={"red"}
              >
                1500+
              </Text>
              <Text fontSize={{ base: "10px", md: "16px", lg: "20px" }}>
                Pengunjung
              </Text>
              <Text
                fontSize={{ base: "18px", md: "22px", lg: "26px" }}
                color={"red"}
                mt={8}
              >
                6
              </Text>
              <Text fontSize={{ base: "10px", md: "16px", lg: "20px" }}>
                Sponsor
              </Text>
              <Text
                fontSize={{ base: "18px", md: "22px", lg: "26px" }}
                color={"red"}
                mt={8}
              >
                15
              </Text>
              <Text fontSize={{ base: "10px", md: "16px", lg: "20px" }}>
                Media Partner
              </Text>
            </VStack>
          </HStack>
        </SimpleGrid>
      </VStack>
    </section>
  );
};

export default AboutSection;
