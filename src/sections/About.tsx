import {
  HStack,
  Heading,
  Icon,
  Image,
  Link,
  SimpleGrid,
  Text,
  VStack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { FaQuoteLeft } from "react-icons/fa";
import { event } from "../data/event";
import useScreenWidth from "../lib/useScreenWidth";

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
          {`${event.eventName} itu apa sih?`}
        </Text>

        <SimpleGrid columns={[1, null, 2]} spacingY={12} spacingX={20}>
          <VStack align={"stretch"}>
            <Text
              color={"white"}
              fontSize={{ base: "12px", md: "14px", lg: "14px" }}
              mt={4}
            >
              {event.eventDescription}
            </Text>

            <HStack align={"stretch"} mt={10}>
              <Icon as={FaQuoteLeft} fontSize={30} color={"red"}></Icon>
              <VStack align={"stretch"}>
                <Heading
                  as={"h4"}
                  color={"red"}
                  fontSize={{ base: "18px", md: "22px", lg: "22px" }}
                >
                  Sujiwo Tejo
                </Heading>
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
              display={"inline-block"}
            >
              <Link
                href={event.instagramLink}
                isExternal
                style={{ textDecoration: "none" }}
              >
                <WrapItem
                  _hover={{
                    bg: "red.500",
                    textColor: "black",
                    transform: "scale(1)",
                    transformOrigin: "0 0",
                    WebkitTransformOrigin: "0 0",
                    msTransformOrigin: "0 0",
                    padding: "10px",
                    borderRadius: "10px",
                  }}
                  transition="all .25s ease"
                  my={"auto"}
                >
                  <HStack>
                    <Image src="/images/logo/instagram.png" maxW={"16px"} />
                    <Text>{event.eventName}</Text>
                  </HStack>
                </WrapItem>
              </Link>

              <Link
                href={event.youtubeLink}
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
                    <Text>Manggla Wijaya</Text>
                  </HStack>
                </WrapItem>
              </Link>

              <Link
                href={event.tiktokLink}
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
                    <Text>{event.eventName}</Text>
                  </HStack>
                </WrapItem>
              </Link>
            </Wrap>
          </VStack>

          <HStack justify={"center"} px={12} spacing={10}>
            <Image src="/images/thumbnailArtist.png" w={"160px"} />

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
                {event.totalVisitor}
              </Text>
              <Text fontSize={{ base: "10px", md: "16px", lg: "20px" }}>
                Pengunjung
              </Text>
              <Text
                fontSize={{ base: "18px", md: "22px", lg: "26px" }}
                color={"red"}
                mt={8}
              >
                {event.totalSponsor}
              </Text>
              <Text fontSize={{ base: "10px", md: "16px", lg: "20px" }}>
                Sponsor
              </Text>
              <Text
                fontSize={{ base: "18px", md: "22px", lg: "26px" }}
                color={"red"}
                mt={8}
              >
                {event.totalMediaPartner}
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
