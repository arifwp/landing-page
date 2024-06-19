import { Box, Heading, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { event } from "../data/event";

const AboutSection = () => {
  const [play, setPlay] = useState(false);

  const handleSetPlay = (value: boolean) => {
    setPlay(value);
  };

  return (
    <section id="aboutSection">
      <SimpleGrid columns={[1, null, 2]} maxW="100vw" bg="black" px={8}>
        <VStack
          align={"stretch"}
          py={[20, null, 24]}
          position="relative"
          mr={8}
        >
          <Box position="absolute" zIndex={1}>
            <Heading
              opacity={0.6}
              as="b"
              fontSize={{ base: "42px", md: "66px", lg: "80px" }}
            >
              TENTANG
            </Heading>
          </Box>

          <Box pt={[7, null, 12]} zIndex={2}>
            <Text
              color="red.500"
              fontSize={{ base: "14px", md: "20px", lg: "16px" }}
            >
              {`[${event.eventTag}]`}
            </Text>
            <Text
              color="white"
              as="b"
              fontSize={{ base: "18px", md: "26px", lg: "32px" }}
            >
              {`${event.eventName} itu apa sih?`}
            </Text>
          </Box>
          <Text mt={4} color="white" textAlign="justify" fontSize="lg">
            {event.eventDescription}
          </Text>
        </VStack>

        <VStack
          w={"100%"}
          position={"relative"}
          align={"stretch"}
          minH={"360px"}
          ml={2}
          mt={20}
        >
          <VStack
            w={"100%"}
            h={"100%"}
            position={"absolute"}
            left={0}
            top={0}
            pt={4}
            pl={4}
            align={"stretch"}
            justify={"stretch"}
          >
            <VStack
              w={"100%"}
              h={"100%"}
              borderRadius={24}
              bgGradient="linear(to-l, #A00000, #C62128)"
              overflow={"clip"}
            ></VStack>
          </VStack>

          <VStack
            w={"100%"}
            h={"100%"}
            position={"absolute"}
            left={0}
            top={0}
            pr={4}
            pb={4}
            align={"stretch"}
            justify={"stretch"}
          >
            <VStack w={"100%"} h={"100%"} borderRadius={24} overflow={"clip"}>
              <iframe
                title="Event Preview"
                src={event.videoUrl + `?autoplay=${play}`}
                style={{ height: "100%", width: "100%" }}
              />
            </VStack>
          </VStack>

          {!play && (
            <VStack
              w={"100%"}
              h={"100%"}
              position={"absolute"}
              left={0}
              top={0}
              pr={4}
              pb={4}
              opacity={"0.3"}
              align={"stretch"}
              justify={"stretch"}
              onClick={() => handleSetPlay(true)}
            >
              <VStack
                w={"100%"}
                h={"100%"}
                borderRadius={24}
                bgGradient="linear(to-l, #A00000, #C62128)"
                overflow={"clip"}
              ></VStack>
            </VStack>
          )}
        </VStack>
      </SimpleGrid>
    </section>
  );
};

export default AboutSection;
